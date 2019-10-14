
export function loadCameraControl(snake){
  //snake.addFunction(updateCarCameras);
  snake.transitionData = undefined;
  snake.addFunction(updateBackChasingCamera);
  snake.addFunction(updateReverseCamera);
  snake.addFunction(updateSideCamera);
  snake.addFunction(updateTopCamera);
  snake.addFunction(updateCockpitCamera);
  snake.addFunction(transitionCamera);





}

function transitionCamera({cameraTransitionPlot , newAnimationFrame}){
  let thisCam = cameras.cameraT.camera;

  if (cameraTransitionPlot.length==0 && transitionData==undefined){
    cameraTransitionPlot=undefined;
    return;
  }
  if (activeCamera != thisCam){
    self.cameras.cameraT.active = true;
  }
  if (transitionData==undefined){
    let thisPlot = cameraTransitionPlot.shift();
    let startCam = thisPlot.startCam.getProxyLessObject.camera;
    transitionData={
      endCam:thisPlot.endCam.getProxyLessObject.camera,
      proxyEndCam:thisPlot.endCam,
      movingSpeed:thisPlot.movingSpeed,
      rotatingSpeed:thisPlot.rotatingSpeed,
      movingType:thisPlot.movingType,
      rotatingType:thisPlot.rotatingType,
      startTime:timeStamp
    };
    thisCam.position.x = startCam.position.x;
    thisCam.position.y = startCam.position.y;
    thisCam.position.z = startCam.position.z;
    thisCam.quaternion.x = startCam.quaternion.x;
    thisCam.quaternion.y = startCam.quaternion.y;
    thisCam.quaternion.z = startCam.quaternion.z;
    thisCam.quaternion.w = startCam.quaternion.w;
  }
  let movingRatio = (timeStamp - transitionData.startTime)/transitionData.movingSpeed;
  let rotatingRatio = (timeStamp - transitionData.startTime)/transitionData.rotatingSpeed
  movingRatio = Math.pow(movingRatio,transitionData.movingType);
  rotatingRatio = Math.pow(rotatingRatio,transitionData.rotatingType);
  let pos = thisCam.position;
  let quat = thisCam.quaternion; 
  quat.slerp(transitionData.endCam.quaternion,(movingRatio>1)?1:movingRatio);
  pos.lerp(transitionData.endCam.position,(rotatingRatio>1)?1:rotatingRatio);
  if (pos.distanceToSquared (transitionData.endCam.position)<.01 && quat.angleTo(transitionData.endCam.quaternion)<.01){
    transitionData.proxyEndCam.active = true;
    transitionData=undefined;
  }

}

function updateCarCameras ({newAnimationFrame}){
    // main camera

    let truckPos = car.position;
    let truckQuat = car.quaternion;
    //let trailersNumber = roadTrains.length;
    let pos = cameras.camera3.camera.position;
    let beam = new THREE.Vector3(0,0,-12);
    beam.applyQuaternion(truckQuat);
    pos.x = beam.x + truckPos.x;
    pos.y = truckPos.y+2;
    pos.z = beam.z + truckPos.z;
    cameras.camera3.camera.lookAt(new THREE.Vector3(truckPos.x,truckPos.y,truckPos.z));
 
}

function updateBackChasingCamera ({newAnimationFrame}){
  if(startUp) return; 
  let thisCam = cameras.camera3.camera;
  if (activeCamera != thisCam && activeCamera!=cameras.cameraT.camera) return;
  let truckPos = roadTrains[0].position;
  let truckQuat = roadTrains[0].quaternion;
  let trailersNumber = roadTrains[0].visibleTrailers + 1;
  let pos = thisCam.position;
  let beam = new THREE.Vector3(0,0,-10*trailersNumber);
  beam.applyQuaternion(truckQuat);
  pos.x = beam.x + truckPos.x;
  pos.y = beam.y + truckPos.y +2+(trailersNumber*2) //-47+(trailersNumber*2);//beam.y+truckPos.y;
  pos.z = beam.z + truckPos.z;
  thisCam.lookAt(new THREE.Vector3(truckPos.x,truckPos.y,truckPos.z));

}


function updateReverseCamera ({newAnimationFrame}){
  let thisCam = cameras.camera7.camera;
  if (activeCamera != thisCam && activeCamera!=cameras.cameraT.camera) return;
  let truckPos = roadTrains[0].position;
  let truckQuat = roadTrains[0].quaternion;
  let pos = thisCam.position;
  let beam = new THREE.Vector3(0,4,12);
  beam.applyQuaternion(truckQuat);
  pos.x = beam.x + truckPos.x;
  pos.y = beam.y + truckPos.y;
  pos.z = beam.z + truckPos.z;
  thisCam.lookAt(new THREE.Vector3(truckPos.x,truckPos.y,truckPos.z));

}

function updateSideCamera ({newAnimationFrame}){
  let thisCam = cameras.camera8.camera;
  if (activeCamera != thisCam && activeCamera!=cameras.cameraT.camera) return;
  let truckPos =  roadTrains[0].position;
  let truckQuat = new THREE.Quaternion(roadTrains[0].quaternion.x,roadTrains[0].quaternion.y,roadTrains[0].quaternion.z,roadTrains[0].quaternion.w);
  let pos = thisCam.position;
  let beam = new THREE.Vector3(2,1.5,-15);
  let horizen = new THREE.Vector3(2,1.5,12);
  horizen.applyQuaternion(truckQuat);
  horizen.add(truckPos)
  beam.applyQuaternion(truckQuat);
  pos.x = beam.x + truckPos.x;
  pos.y = beam.y + truckPos.y;
  pos.z = beam.z + truckPos.z;
  thisCam.lookAt(new THREE.Vector3(horizen.x,horizen.y,horizen.z));

}

function updateTopCamera ({newAnimationFrame}){
  let thisCam = cameras.camera9.camera;
  if (activeCamera != thisCam && activeCamera!=cameras.cameraT.camera) return;
  let truckPos = roadTrains[0].position;
  let truckQuat = roadTrains[0].quaternion;
  let trailersNumber = roadTrains[0].visibleTrailers + 1;
  let pos = thisCam.position;
  let beam = new THREE.Vector3(0,0,-10*trailersNumber);
  beam.applyQuaternion(truckQuat);
  pos.x = beam.x + truckPos.x;
  pos.y = -502;//beam.y + truckPos.y +2+(trailersNumber*2) //-47+(trailersNumber*2);//beam.y+truckPos.y;
  pos.z = beam.z + truckPos.z-10;
  thisCam.lookAt(new THREE.Vector3(truckPos.x,truckPos.y,truckPos.z));

}

function updateCockpitCamera ({newAnimationFrame}){
  let thisCam = cameras.camera10.camera;
  if (activeCamera != thisCam && activeCamera!=cameras.cameraT.camera) return;
  let truckPos = roadTrains[0].position;
  let truckQuat = roadTrains[0].quaternion;
  //let trailersNumber = roadTrains[0].visibleTrailers + 1;
  let pos = thisCam.position;
  let beam = new THREE.Vector3(0,4,2);
  let lookPoint = new THREE.Vector3(0,2,8);
  lookPoint.applyQuaternion(truckQuat);
  lookPoint.add(truckPos);
  beam.applyQuaternion(truckQuat);
  pos.x = beam.x + truckPos.x;
  pos.y = beam.y + truckPos.y  //-47+(trailersNumber*2);//beam.y+truckPos.y;
  pos.z = beam.z + truckPos.z;
  thisCam.lookAt(lookPoint);

}


