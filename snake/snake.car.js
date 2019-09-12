import { carWheelsInfo } from "./snake.car.wheels.js";

export function loadCar(snake){
  //let z=90,l=11,t=.5;
  let iniPos={x:0,y:-45,z:0}
  let iniQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0).normalize(), Math.PI/4);

  snake.car = {};
  //snake.roadTrains.push({});
  snake.utils.newRoadTrain(snake.car);
  snake.car.set({
    position:{x:iniPos.x , y:iniPos.y , z:iniPos.z} , 
    quaternion:new THREE.Quaternion(iniQuat.x , iniQuat.y , iniQuat.z , iniQuat.w),
    axelsVerticalFreedom:.2 , 
    chassisMass:100 , 
    chassisFrontLength:4 ,
    chassisRearLength:-4.5  , 
    chassisColor:0x936974,
    wheelsInfo:carWheelsInfo(),
  });

  //snake.roadTrains[0].addFunction(addTrailer);
  //snake.roadTrains[0].totalTrailers = 1;
  //snake.roadTrains[0].trailerWheelsInfo = trailerWheelsInfo;


}
