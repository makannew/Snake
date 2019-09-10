import { roadTrainControls } from "./mg.roadTrain.controls.js";
import { loadBuilder } from "./mg.roadTrain.builder.js";
import { roadTrainTowing } from "./mg.roadTrain.towing.js";

export function newRoadTrain(mainComposite , roadTrain){
  roadTrain.self = roadTrain;
  roadTrain.mainComposite = mainComposite;
  roadTrain.cannon = mainComposite.cannon;
  mainComposite.addLink(mainComposite.actualInterval , roadTrain.actualInterval);

  roadTrainControls(roadTrain);
  roadTrainTowing(roadTrain);
  loadBuilder(roadTrain);

  roadTrain.allWheels = [];
  roadTrain.suspensionRestLenght = 0;
  roadTrain.speed = 0;
  roadTrain.engineForce =30;
  roadTrain.addFunction(setHingeConstraints);
  roadTrain.addFunction(applySteering);
  roadTrain.addFunction(updateEngine);
}

function updateEngine({setHingeConstraints , engineForce , speed}){
  for (let wheel of allWheels){
    if (wheel.driving){
      let c = wheel.wheelConstraint;
      if (engineForce==0){
        c.disableMotor()
      }else{
        c.setMotorMaxForce(engineForce);
        if (wheel.isLeft){
          c.setMotorSpeed(speed);
        }else{
          c.setMotorSpeed(-speed);
        }
        c.enableMotor();
      }
    }

  }
}

function applySteering({steering , setHingeConstraints}){
  let x = Math.cos(steering);
  let z = Math.sin(steering);
  for (let wheel of allWheels){
    if (wheel.steering){
      if (wheel.isLeft){
        wheel.wheelConstraint.axisA.x = x;
        wheel.wheelConstraint.axisA.z = z;
      }else{
        wheel.wheelConstraint.axisA.x = -x;
        wheel.wheelConstraint.axisA.z = -z;
      }
      wheel.wheelConstraint.update();
    }
  }
}

function setHingeConstraints({headBodiesLoaded , cannon}){
  if (setHingeConstraints) return true;
  let zero = new CANNON.Vec3(0,0,0);
  let axisA,axisB;
  let axelSprings=[];
  let backQuat = new THREE.Quaternion(
    chassisBody.quaternion.x,
    chassisBody.quaternion.y,
    chassisBody.quaternion.z,
    chassisBody.quaternion.w).normalize().inverse();

  for (let i=0,len=wheelsBodies.length;i<len;++i){
    let thisWheel={};

    let wheelRelativePos = new THREE.Vector3(
      wheelsBodies[i].position.x - suspensionsBodies[i].position.x, 
      wheelsBodies[i].position.y - suspensionsBodies[i].position.y, 
      wheelsBodies[i].position.z - suspensionsBodies[i].position.z
      );
      wheelRelativePos.applyQuaternion(backQuat);

    if (wheels[i].wheelLeft){
      thisWheel.isLeft = true;
      axisA = new CANNON.Vec3(1,0,0);
      axisB = new CANNON.Vec3(0,1,0);
    }

    if (!wheels[i].wheelLeft){
      thisWheel.isLeft = false;
      axisA = new CANNON.Vec3(-1,0,0);
      axisB = new CANNON.Vec3(0,1,0);
    }

    thisWheel.wheelConstraint = new CANNON.HingeConstraint(
      suspensionsBodies[i],
      wheelsBodies[i],{
      pivotA: new CANNON.Vec3(wheelRelativePos.x,wheelRelativePos.y,wheelRelativePos.z),
      axisA:axisA,
      pivotB: zero,
      axisB: axisB,
      maxForce:1e6,
      collideConnected:false
    });
    thisWheel.wheelConstraint.collideConnected = false;
    cannon.addConstraint(thisWheel.wheelConstraint);

    if (wheels[i].wheelSteering){
      thisWheel.steering =true;
    }else{
      thisWheel.steering =false;

    }

    if (wheels[i].driving){
      thisWheel.driving = true;
    }else{
      thisWheel.driving = false;
    }

    let susLocal = new THREE.Vector3(
      suspensionsBodies[i].position.x - chassisBody.position.x,
      suspensionsBodies[i].position.y - chassisBody.position.y,
      suspensionsBodies[i].position.z - chassisBody.position.z
      );
    susLocal.applyQuaternion(backQuat);

    let farPivotSuspension = new THREE.Vector3(
      -axisA.x * wheels[i].susLength, 
      0, 
      0
      );
    let farPivotTranspose = new THREE.Vector3(farPivotSuspension.x,0,0);

    let farPivotChassis = new THREE.Vector3(
      farPivotTranspose.x+susLocal.x, 
      farPivotTranspose.y+susLocal.y, 
      farPivotTranspose.z+susLocal.z
        );

    thisWheel.suspensionConstraint = new CANNON.HingeConstraint(
      chassisBody, 
      suspensionsBodies[i],{
        pivotA: new CANNON.Vec3(farPivotChassis.x,farPivotChassis.y,farPivotChassis.z),
        axisA: new CANNON.Vec3(0,0,1),
        pivotB:  new CANNON.Vec3(farPivotSuspension.x,farPivotSuspension.y,farPivotSuspension.z),
        axisB: new CANNON.Vec3(0,0,1),
        maxForce:1e6
      }
    );
    cannon.addConstraint(thisWheel.suspensionConstraint);

    let susRelPos = new THREE.Vector3(
      wheelsBodies[i].position.x - chassisBody.position.x, 
      wheelsBodies[i].position.y - chassisBody.position.y , 
      wheelsBodies[i].position.z - chassisBody.position.z);
    susRelPos.applyQuaternion(backQuat);
    susRelPos.y = susRelPos.y - wheels[i].springLenght;

    axelSprings.push(new CANNON.Spring(
      chassisBody,
      suspensionsBodies[i],{
        restLength:suspensionRestLenght,
        stiffness: wheels[i].stiffness,
        damping: wheels[i].damping,
        localAnchorA:new CANNON.Vec3(susRelPos.x,susRelPos.y,susRelPos.z),
        localAnchorB:wheelRelativePos
      }
    ));

    allWheels.push(thisWheel);
  }
  cannon.addEventListener("postStep",function(event){
    for (let i=0,len=axelSprings.length;i<len;++i){
      axelSprings[i].applyForce();
    }
  });


  return true;
}



