import { buildHeadChassis } from "./snake.roadTrain.chassis.js";
import { truckWheelsInfo, trailerWheelsInfo } from "./snake.roadTrain.wheels.js";

export function loadRoadTrain(snake){
  //let z=90,l=11,t=.5;
  let iniPos={x:95,y:-48,z:90}
  let iniQuat = new THREE.Quaternion();
  
  iniQuat.setFromAxisAngle(new THREE.Vector3(0,1,1).normalize(), Math.PI/2)
  snake.roadTrains = [];
  snake.roadTrains.push({});
  snake.utils.newRoadTrain(snake.roadTrains[0]);
  snake.roadTrains[0].set({
    position:{x:iniPos.x , y:iniPos.y , z:iniPos.z} , 
    quaternion:new THREE.Quaternion(iniQuat.x , iniQuat.y , iniQuat.z , iniQuat.w),
    axelsVerticalFreedom:.2 , 
    chassisMass:100 , 
    chassisFrontLength:4 ,
    chassisRearLength:-4.5  , 
    chassisColor:0x936974,
    wheelsInfo:truckWheelsInfo(),
  });
  //snake.roadTrains[0].build();
  //snake.roadTrains[0].addFunction(addTrailer);
  //snake.roadTrains[0].setTrailerPos = setTrailerPos;

  //snake.roadTrains[0].totalTrailers = 2;

}

function addTrailer({totalTrailers,chassisBody}){
  let roadTrains = mainComposite.roadTrains;
  if ( roadTrains.length < totalTrailers){
    let l=11,t=.5;
    //z = z - l;
    let roadTrains = mainComposite.roadTrains;
    let i=roadTrains.length-1;
    let pos = roadTrains[i].chassisBody.position;
    let quat = roadTrains[i].chassisBody.quaternion;
    let newPos = new THREE.Vector3(0,0,-l);
    newPos.applyQuaternion(quat);
  
    let trailerPos = chassisBody.position;
    let trailerQuat = chassisBody.quaternion;
    trailerPos.x = newPos.x + pos.x;
    trailerPos.y = newPos.y + pos.y;
    trailerPos.z = newPos.z + pos.z;
  
    roadTrains.push({});
    i= roadTrains.length-1;
    mainComposite.utils.newRoadTrain(roadTrains[i]);
    roadTrains[i].set({position:{x:trailerPos.x  , y:trailerPos.y  , z:trailerPos.z } , axelsVerticalFreedom:.2 , chassisMass:20,chassisFrontLength:4,chassisRearLength:-4.5 , chassisColor:0x936974});
    loadTrailerWheelsInfo(roadTrains[i]);
    roadTrains[i].build();
    roadTrains[i].frontTowing.set({thisTowingPosition:{x:0,y:0,z:l*(1-t)} , otherTowingPosition:{x:0,y:0,z:-l*t},towedRoadTrain:roadTrains[i-1]});

    //roadTrains[i].addFunction(setTrailerPos);
  }
}

function setTrailerPos({chassisBody, built , wheelsBodies,suspensionsBodies,headBodiesLoaded}){


  if (setTrailerPos) return true;
  let l=11,t=.5;
  //z = z - l;
  let roadTrains = mainComposite.roadTrains;
  let i=roadTrains.length-1;
  let pos = roadTrains[i-1].chassisBody.position;
  let quat = roadTrains[i-1].chassisBody.quaternion;
  let newPos = new THREE.Vector3(0,0,-l);
  newPos.applyQuaternion(quat);

  let trailerPos = chassisBody.position;
  let trailerQuat = chassisBody.quaternion;
  trailerPos.x = newPos.x + pos.x;
  trailerPos.y = newPos.y + pos.y;
  trailerPos.z = newPos.z + pos.z;

  trailerQuat.x=quat.x;
  trailerQuat.y=quat.y;
  trailerQuat.z=quat.z;
  trailerQuat.w=quat.w;

  roadTrains[i].frontTowing.set({thisTowingPosition:{x:0,y:0,z:l*(1-t)} , otherTowingPosition:{x:0,y:0,z:-l*t},towedRoadTrain:roadTrains[i-1]});
  return true;
}