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
  //roadTrain.addFunction(setPosition);

}


function setPosition({position}){
  if (wheelsBodies){
    for (let wheel of wheelsBodies){
      wheel.position.x = position.x + wheel.position.x - chassisBody.x;
      wheel.position.y = position.y + wheel.position.y - chassisBody.y;
      wheel.position.z = position.z + wheel.position.z - chassisBody.z;
    }
  }
  if (suspensionsBodies){
    for (let suspension of suspensionsBodies){
      suspension.position.x = position.x + suspension.position.x - chassisBody.x;
      suspension.position.y = position.y + suspension.position.y - chassisBody.y;
      suspension.position.z = position.z + suspension.position.z - chassisBody.z;
    }
  }
  if (chassisBody){
    chassisBody.position.x = position.x;
    chassisBody.position.y = position.y;
    chassisBody.position.z = position.z;

  }
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
  let axisA,axisB,threeAxisA,threeAxisB;
  let axelSprings=[];
  let ori = chassisBody.shapeOrientations[0];
  let threeOri = new THREE.Quaternion(ori.x,ori.y,ori.z,ori.w);
  let quat = chassisBody.quaternion;
  let threeQuat = new THREE.Quaternion(quat.x,quat.y,quat.z,quat.w);
  let truckQuat = threeOri.multiply(threeQuat);

  //chassisQuat.multiply(chassisOrientation);
  for (let i=0,len=wheelsBodies.length;i<len;++i){
    let thisWheel={};

    let wheelRelativePos = new CANNON.Vec3(
      wheelsBodies[i].position.x - suspensionsBodies[i].position.x, 
      wheelsBodies[i].position.y - suspensionsBodies[i].position.y, 
      wheelsBodies[i].position.z - suspensionsBodies[i].position.z
      );
    //let canQuat = wheelsBodies[i].quaternion;
    // let wheelQuat = new THREE.Quaternion(canQuat.x,canQuat.y,canQuat.z,canQuat.w) ;

    if (wheels[i].wheelLeft){
      thisWheel.isLeft = true;
      axisA = new CANNON.Vec3(1,0,0);
      axisB = new CANNON.Vec3(0,1,0);
      // threeAxisA = new THREE.Vector3(1,0,0);
      // threeAxisB = new THREE.Vector3(0,1,0);
    }

    if (!wheels[i].wheelLeft){
      thisWheel.isLeft = false;
      axisA = new CANNON.Vec3(-1,0,0);
      axisB = new CANNON.Vec3(0,1,0);
      // threeAxisA = new THREE.Vector3(-1,0,0);
      // threeAxisB = new THREE.Vector3(0,1,0);
    }
    // threeAxisA.applyQuaternion(wheelQuat);
    // threeAxisB.applyQuaternion(wheelQuat);
    // axisA = new CANNON.Vec3(threeAxisA.x,threeAxisA.y,threeAxisA.z,threeAxisA.w);
    // axisB = new CANNON.Vec3(threeAxisB.x,threeAxisB.y,threeAxisB.z,threeAxisB.w);



    thisWheel.wheelConstraint = new CANNON.HingeConstraint(
      suspensionsBodies[i],
      wheelsBodies[i],{
      pivotA: wheelRelativePos,
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

    // let farPivotChassis = new CANNON.Vec3(
    // -(suspensionsBodies[i].position.x - chassisBody.position.x + wheelRelativePos.x), 
    //   suspensionsBodies[i].position.y - chassisBody.position.y + wheelRelativePos.y, 
    //   suspensionsBodies[i].position.z - chassisBody.position.z + wheelRelativePos.z);
    // let farPivotSuspension = new CANNON.Vec3(chassisBody.position.x + farPivotChassis.x - suspensionsBodies[i].position.x, 
    //   wheelRelativePos.y, 
    //   wheelRelativePos.z);
    let susHingeLength = suspensionsBodies[i].position.x - chassisBody.position.x + wheelRelativePos.x
    let rotChass = new THREE.Vector3(chassisBody.position.x,chassisBody.position.y,chassisBody.position.z);
    let rotSus = new THREE.Vector3(suspensionsBodies[i].position.x,suspensionsBodies[i].position.y,suspensionsBodies[i].position.z)
    //let susQuat = new THREE.Quaternion(suspensionsBodies[i].quaternion.x,suspensionsBodies[i].quaternion.y,suspensionsBodies[i].quaternion.z,suspensionsBodies[i].quaternion.w);


    let farPivotSuspension = new THREE.Vector3(
      -axisA.x * wheels[i].susLength, 
      0, 
      0
      );
      let farPivotTranspose = new THREE.Vector3(farPivotSuspension.x,0,0);
      farPivotTranspose.applyQuaternion(truckQuat);

    let farPivotChassis = new THREE.Vector3(
      farPivotTranspose.x+rotSus.x-rotChass.x, 
      farPivotTranspose.y+rotSus.y-rotChass.y, 
      farPivotTranspose.z+rotSus.z-rotChass.z
        );

      //farPivotSuspension.applyQuaternion(truckQuat);
    //   let farPivotChassis = new CANNON.Vec3(-(rotSus.x - rotChass.x + wheelRelativePos.x), 
    //   rotSus.y - rotChass.y + wheelRelativePos.y, 
    //   rotSus.z - rotChass.z + wheelRelativePos.z);
    // let farPivotSuspension = new CANNON.Vec3(rotChass.x + farPivotChassis.x - rotSus.x, 
    //   wheelRelativePos.y, 
    //   wheelRelativePos.z);
      //farPivotChassis.applyQuaternion(new THREE.Quaternion(chassisBody.quaternion.x,chassisBody.quaternion.y,chassisBody.quaternion.z,chassisBody.quaternion.w));
      //farPivotSuspension.applyQuaternion(new THREE.Quaternion(chassisBody.quaternion.x,chassisBody.quaternion.y,chassisBody.quaternion.z,chassisBody.quaternion.w));

    let susAxis = new THREE.Vector3(0,0,1);
    susAxis.applyQuaternion(truckQuat);
    // suspension constraint
    thisWheel.suspensionConstraint = new CANNON.HingeConstraint(
      chassisBody, 
      suspensionsBodies[i],{
        pivotA: new CANNON.Vec3(farPivotChassis.x,farPivotChassis.y,farPivotChassis.z),
        axisA: new CANNON.Vec3(susAxis.x,susAxis.y,susAxis.z),
        //axisA: new CANNON.Vec3(0,0,1),
        pivotB:  new CANNON.Vec3(farPivotSuspension.x,farPivotSuspension.y,farPivotSuspension.z),
       // axisB: new CANNON.Vec3(susAxis.x,susAxis.y,susAxis.z),
        axisB: new CANNON.Vec3(0,0,1),
        maxForce:1e6
      }
    );
    cannon.addConstraint(thisWheel.suspensionConstraint);

    let suspensionRelativePos = new CANNON.Vec3(wheelsBodies[i].position.x - rotChass.x, 
      wheelsBodies[i].position.y - rotChass.y - wheels[i].springLenght, 
      wheelsBodies[i].position.z - rotChass.z);


    axelSprings.push(new CANNON.Spring(
      chassisBody,
      suspensionsBodies[i],{
        restLength:suspensionRestLenght,
        stiffness: wheels[i].stiffness,
        damping: wheels[i].damping,
        localAnchorA:suspensionRelativePos,
        localAnchorB:wheelRelativePos
      }
    ));



    allWheels.push(thisWheel);
  }
  cannon.addEventListener("postStep",function(event){
    for (let i=0,len=axelSprings.length;i<len;++i){
      axelSprings[i].applyForce();
      //let quat = new CANNON.Quaternion(suspensionsBodies[i].quaternion.x,suspensionsBodies[i].quaternion.y,suspensionsBodies[i].quaternion.z)

      // let wheelFixRotation = new CANNON.Quaternion();
      // wheelFixRotation.setFromAxisAngle(new CANNON.Vec3(0,0,1),Math.PI/2);
      // quat.mult(wheelFixRotation,quat);
      // let correctionQuat = new CANNON.Quaternion();
      // let rot;
      // if (!wheels[i].wheelLeft){
      //   rot =-Math.PI/2;
      // }else{
      //   rot = Math.PI/2;
      // }
      // correctionQuat.setFromAxisAngle(new CANNON.Vec3(0,0,1), rot);
      // quat.mult(correctionQuat,quat);
      // wheelsBodies[i].quaternion.copy(quat);

      //let susRotation = quat.toAxisAngle();


      //wheelsBodies[i].quaternion.setFromAxisAngle(susRotation[0],susRotation[1]);

      // quat.mult(wheelFixRotation,quat);
      // wheelsBodies[i].quaternion.copy(quat);
      // wheelsBodies[i].quaternion.y = quat.y;
      // wheelsBodies[i].quaternion.z = quat.z;

    }
  });


  return true;
}



