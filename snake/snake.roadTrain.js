import { truckWheelsInfo, trailerWheelsInfo } from "./snake.roadTrain.wheels.js";
import { loadTruckCabin} from "./snake.roadTrain.cabin.js";


export function loadRoadTrain(snake){
  //let z=90,l=11,t=.5;
  let iniPos={x:0,y:-510,z:0}
  let iniQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0).normalize(), Math.PI);
  let trailersNumber = 6

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
    chassisRearLength:-3.6  , 
    chassisColor:0x936974,
    wheelsInfo:truckWheelsInfo(),
    cabinInfo:loadTruckCabin()
  });

  // load trailers but not enabled
  for (let i=0;i<trailersNumber;++i){
    snake.roadTrains.push({});
    let last = snake.roadTrains.length - 1;
    snake.utils.newRoadTrain(snake.roadTrains[last]);
    snake.roadTrains[last].set({
      position:{x:0,y:0,z:0} , 
      quaternion: {x:0,y:0,z:0,w:1},
      axelsVerticalFreedom:.2 , 
      chassisMass:20,
      chassisTickness:.05,
      chassisFrontLength:4,
      chassisRearLength:-4.5 , 
      chassisColor:0x936974,
      wheelsInfo:trailerWheelsInfo()
    });
  }

  snake.roadTrains[0].addFunction(addTrailer);


  snake.roadTrains[0].visibleTrailers = 0;
  //snake.roadTrains[0].trailerWheelsInfo = trailerWheelsInfo;


}

function addTrailer({visibleTrailers,chassisBody}){
  let roadTrains = mainComposite.roadTrains;
  if ( visibleTrailers>0 &&visibleTrailers<roadTrains.length-1 && roadTrains[visibleTrailers-1].enable==true && !roadTrains[visibleTrailers].enable){
    let towingGap=11,towingRatio=.5;
    //z = z - l;
    //let roadTrains = mainComposite.roadTrains;
    let prev=visibleTrailers - 1;
    let pos = roadTrains[prev].position;
    let quat = new THREE.Quaternion(
      roadTrains[prev].quaternion.x,
      roadTrains[prev].quaternion.y,
      roadTrains[prev].quaternion.z,
      roadTrains[prev].quaternion.w
      );
    let newPos = new THREE.Vector3(0,axelsVerticalFreedom,-towingGap);
    newPos.applyQuaternion(quat);
  
    let trailerPos = new THREE.Vector3(
      pos.x + newPos.x,
      pos.y + newPos.y,
      pos.z + newPos.z
      );
    roadTrains[visibleTrailers].set({newPos:trailerPos,newQuat:quat,setNewPos:true});

    roadTrains[visibleTrailers].frontTowing.set({
      thisTowingPosition:{x:0,y:0,z:towingGap*(1-towingRatio)} , 
      otherTowingPosition:{x:0,y:0,z:-towingGap*towingRatio},
      towedRoadTrain:roadTrains[prev]});
  }
}
