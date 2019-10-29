import { truckWheelsInfo, trailerWheelsInfo, additionalTrailerWheelsInfo } from "./roadtrain.roadTrain.wheels.js";
import { loadTruckCabin, loadTrailerContainer, loadAdditionalTrailer} from "./roadtrain.roadTrain.cabin.js";


export function loadRoadTrain(rGame){
  let iniPos={x:0,y:1,z:10}

  let iniQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0).normalize(),   Math.PI);
  let trailersNumber = 4

  rGame.roadTrains = [];
  rGame.roadTrains.push({});
  rGame.utils.newRoadTrain(rGame.roadTrains[0]);
  rGame.roadTrains[0].set({
    position:{x:iniPos.x , y:iniPos.y , z:iniPos.z} , 
    quaternion:new THREE.Quaternion(iniQuat.x , iniQuat.y , iniQuat.z , iniQuat.w),
    axelsVerticalFreedom:.2 , 
    chassisTickness:.05,
    chassisMass:30 , 
    chassisFrontLength:4.1 ,
    chassisRearLength:-4.3  , 
    chassisColor:0xffffff,
    wheelsInfo:truckWheelsInfo(),
    cabinInfo:loadTruckCabin(),
    cabinPhysic:true,
    enable:true,
    initialSpeed:7
  });

  // load trailers but not enabled
  
  for (let i=0;i<trailersNumber;++i){
    rGame.roadTrains.push({});
    let last = rGame.roadTrains.length - 1;
    rGame.utils.newRoadTrain(rGame.roadTrains[last]);
    rGame.roadTrains[last].set({
      position:{x:0,y:0,z:0} , 
      quaternion: {x:0,y:0,z:0,w:1},
      axelsVerticalFreedom:.2 , 
      chassisMass:10,
      chassisTickness:.05,
      chassisFrontLength:(i==0)?1.2:8,
      chassisRearLength:-2 , 
      chassisWidth:2,
      chassisColor:0xffffff,
      wheelsInfo:(i==0)?trailerWheelsInfo():additionalTrailerWheelsInfo(),
      cabinInfo:(i==0)?loadTrailerContainer():loadAdditionalTrailer(),
      towingGap:(i==0)?10:16,
      towingRatio:(i==0)?.4:.18,
      cabinPhysic:true

    });
  }

  rGame.roadTrains[0].addFunction(addTrailer);
  rGame.roadTrains[0].addFunction(addTrailerToLoadObjects);



  rGame.roadTrains[0].visibleTrailers = 0;
  rGame.loadedObjects.push(rGame.roadTrains);


}

function addTrailerToLoadObjects({addTrailer}){
  if (addTrailerToLoadObjects) return true;
  mainComposite.loadedObjects.push(addTrailer);

  return true;
}

function addTrailer({visibleTrailers,chassisBody}){
  let roadTrains = mainComposite.roadTrains;
  if ( visibleTrailers>0 &&visibleTrailers<roadTrains.length-1 && roadTrains[visibleTrailers-1].enable==true && !roadTrains[visibleTrailers].enable){
    let towingGap=roadTrains[visibleTrailers].towingGap;
    let towingRatio=roadTrains[visibleTrailers].towingRatio;
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
  return true;
}
