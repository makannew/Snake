import { truckWheelsInfo, trailerWheelsInfo } from "./snake.roadTrain.wheels.js";

export function loadRoadTrain(snake){
  //let z=90,l=11,t=.5;
  let iniPos={x:0,y:-510,z:0}
  let iniQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0).normalize(), Math.PI);

  snake.roadTrains = [];
  snake.roadTrains.push({});
  snake.utils.newRoadTrain(snake.roadTrains[0]);
  snake.roadTrains[0].set({
    position:{x:iniPos.x , y:iniPos.y , z:iniPos.z} , 
    quaternion:new THREE.Quaternion(iniQuat.x , iniQuat.y , iniQuat.z , iniQuat.w),
    axelsVerticalFreedom:.2 , 
    chassisTickness:.05,
    chassisMass:30 , 
    chassisFrontLength:4.1 ,
    chassisRearLength:-4.4  , 
    chassisColor:0x936974,
    wheelsInfo:truckWheelsInfo(),
  });

  snake.roadTrains[0].addFunction(addTrailer);
  snake.roadTrains[0].totalTrailers = 1;
  snake.roadTrains[0].trailerWheelsInfo = trailerWheelsInfo;


}

function addTrailer({totalTrailers,chassisBody}){
  let roadTrains = mainComposite.roadTrains;
  if ( roadTrains.length < totalTrailers){
    let l=11,t=.5;
    //z = z - l;
    //let roadTrains = mainComposite.roadTrains;
    let i=roadTrains.length-1;
    let pos = roadTrains[i].position;
    let quat = new THREE.Quaternion(
      roadTrains[i].quaternion.x,
      roadTrains[i].quaternion.y,
      roadTrains[i].quaternion.z,
      roadTrains[i].quaternion.w
      );
    let newPos = new THREE.Vector3(0,0,-l);
    newPos.applyQuaternion(quat);
  
    let trailerPos = new THREE.Vector3(
      pos.x + newPos.x,
      pos.y + newPos.y,
      pos.z + newPos.z
      );
  
    roadTrains.push({});
    i= roadTrains.length-1;
    mainComposite.utils.newRoadTrain(roadTrains[i]);
    roadTrains[i].set({
      position:trailerPos , 
      quaternion: quat,
      axelsVerticalFreedom:.2 , 
      chassisMass:20,
      chassisTickness:.05,
      chassisFrontLength:4,
      chassisRearLength:-4.5 , 
      chassisColor:0x936974,
      wheelsInfo:trailerWheelsInfo()

    });
    roadTrains[i].frontTowing.set({thisTowingPosition:{x:0,y:0,z:l*(1-t)} , otherTowingPosition:{x:0,y:0,z:-l*t},towedRoadTrain:roadTrains[i-1]});

  }
}