import { roadTrainControls } from "./mg.roadTrain.controls.js";
import { loadRoadTrainHead } from "./mg.roadTrain.head.js";

export function newRoadTrain(mainComposite , roadTrain){
  mainComposite.addLink(mainComposite.cannon , roadTrain.cannon);
  mainComposite.addLink(mainComposite.actualInterval , roadTrain.actualInterval);

  roadTrainControls(roadTrain);
  loadRoadTrainHead(roadTrain);

  roadTrain.allWheels = [];
  //roadTrain.springs = [];
  //roadTrain.steeringConstraints = [];
  //roadTrain.steeringIsLeftSide = [];
  roadTrain.suspensionStiffness = 250;
  roadTrain.suspensionDamping = 10;
  roadTrain.suspensionRestLenght = 0;
  roadTrain.suspensionLenght = .8;
  roadTrain.speed = 0;
  roadTrain.engineForce =1;
  roadTrain.addFunction(setHingeConstraints);
  roadTrain.addFunction(updateSpring);
  //roadTrain.addFunction(applySteering);
  roadTrain.addFunction(applySteering);
  roadTrain.addFunction(updateEngine);


}

function updateEngine({setHingeConstraints , engineForce , speed}){
  for (let wheel of allWheels){
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
function updateSpring({setHingeConstraints,actualInterval}){
  for (let wheel of allWheels){
    wheel.spring.applyForce();
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
// function updateSpring({setHingeConstraints,actualInterval,springs}){
//   for (let spring of springs){

//     spring.applyForce();
//   }
// }
function setHingeConstraints({headBodiesLoaded , cannon}){
  if (setHingeConstraints) return true;
  let zero = new CANNON.Vec3(0,0,0);
  let axisA,axisB;

  for (let i=0,len=wheelsBodies.length;i<len;++i){
    let thisWheel={};

    let wheelRelativePos = new CANNON.Vec3(wheelsBodies[i].position.x - suspensionsBodies[i].position.x, 
      wheelsBodies[i].position.y - suspensionsBodies[i].position.y, 
      wheelsBodies[i].position.z - suspensionsBodies[i].position.z);

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
    // wheel constraint
    // let wheelConstraint = new CANNON.HingeConstraint(suspensionsBodies[i],wheelsBodies[i],{
    //   pivotA: wheelRelativePos,
    //   axisA:axisA,
    //   pivotB: zero,
    //   axisB: axisB,
    //   maxForce:1e6
    // });

    thisWheel.wheelConstraint = new CANNON.HingeConstraint(suspensionsBodies[i],wheelsBodies[i],{
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

    // if (wheels[i].wheelSteering){
    //   steeringConstraints.push(wheelConstraint);
    //   steeringIsLeftSide.push(wheels[i].wheelLeft);
    //   let sLen = steeringConstraints.length-1
    //   steeringConstraints[steeringConstraints.length-1].setMotorMaxForce(10);
    //   if (wheels[i].wheelLeft){
    //     steeringConstraints[sLen].setMotorSpeed(speed);

    //   }else{
    //     steeringConstraints[sLen].setMotorSpeed(-speed);

    //   }
    //   steeringConstraints[sLen].enableMotor();
    // }else{
    //   constraints.push(wheelConstraint);
    //   constraints[constraints.length-1].setMotorMaxForce(10);
    //   if (wheels[i].wheelLeft){
    //     constraints[constraints.length-1].setMotorSpeed(speed);
    //   }else{
    //     constraints[constraints.length-1].setMotorSpeed(-speed);

    //   }
    //   constraints[constraints.length-1].enableMotor();
    // }


    let farPivotChassis = new CANNON.Vec3(-(suspensionsBodies[i].position.x - chassisBody.position.x + wheelRelativePos.x), 
      suspensionsBodies[i].position.y - chassisBody.position.y + wheelRelativePos.y, 
      suspensionsBodies[i].position.z - chassisBody.position.z + wheelRelativePos.z);
    let farPivotSuspension = new CANNON.Vec3(chassisBody.position.x + farPivotChassis.x - suspensionsBodies[i].position.x, 
      wheelRelativePos.y, 
      wheelRelativePos.z);
    // suspension constraint
    thisWheel.suspensionConstraint = new CANNON.HingeConstraint(chassisBody, suspensionsBodies[i],{
      pivotA: farPivotChassis,
      axisA: new CANNON.Vec3(0,0,1),
      pivotB: farPivotSuspension,
      axisB: new CANNON.Vec3(0,0,1),
      maxForce:1e6
    });
    cannon.addConstraint(thisWheel.suspensionConstraint);
    //constraints.push(susConstraint);


    let suspensionRelativePos = new CANNON.Vec3(wheelsBodies[i].position.x - chassisBody.position.x, 
      wheelsBodies[i].position.y - chassisBody.position.y - wheels[i].springLenght, 
      wheelsBodies[i].position.z - chassisBody.position.z);

    thisWheel.spring = new CANNON.Spring(chassisBody,suspensionsBodies[i],{
      restLength:suspensionRestLenght,
      stiffness: wheels[i].stiffness,
      damping: wheels[i].damping,
      localAnchorA:suspensionRelativePos,
      localAnchorB:wheelRelativePos
    });

    allWheels.push(thisWheel);
  }

  // for(let constraint of constraints){
  //   cannon.addConstraint(constraint);
  // }
  // for(let constraint of steeringConstraints){
  //   cannon.addConstraint(constraint);
  // }


  return true;
}



