import { roadTrainControls } from "./mg.roadTrain.controls.js";
import { loadRoadTrainHead } from "./mg.roadTrain.head.js";

export function newRoadTrain(mainComposite , roadTrain){
  mainComposite.addLink(mainComposite.cannon , roadTrain.cannon);
  mainComposite.addLink(mainComposite.actualInterval , roadTrain.actualInterval);

  roadTrainControls(roadTrain);
  loadRoadTrainHead(roadTrain);

  roadTrain.constraints = [];
  roadTrain.addFunction(setHeadConstraints);

}

function setHeadConstraints({headBodiesLoaded , cannon}){
  if (setHeadConstraints) return true;
  let zero = new CANNON.Vec3(0,0,0);
  let axisA,axisB;

  for (let i=0,len=wheelsBodies.length;i<len;++i){
    let relativePos = new CANNON.Vec3(wheelsBodies[i].position.x - chassisBody.position.x, wheelsBodies[i].position.y - chassisBody.position.y, 
      wheelsBodies[i].position.z - chassisBody.position.z);
    if (wheels[i].wheelLeft){
      axisA = new CANNON.Vec3(1,0,0);
      axisB = new CANNON.Vec3(0,1,0);
    }

    if (!wheels[i].wheelLeft){
      axisA = new CANNON.Vec3(-1,0,0);
      axisB = new CANNON.Vec3(0,-1,0);
    }

    constraints.push(new CANNON.HingeConstraint(chassisBody,wheelsBodies[i],{
      pivotA: relativePos,
      axisA:axisA,
      pivotB: zero,
      axisB: axisB,
      maxForce:1e6
    }));
  }

  for(let constraint of constraints){
    cannon.addConstraint(constraint);
    constraint.setMotorMaxForce(500);
    constraint.setMotorSpeed(-20);
    constraint.enableMotor();


  }


  return true;
}



