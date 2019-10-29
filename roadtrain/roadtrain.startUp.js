

export function loadStartUp(snake){
  
  snake.addFunction(startUpProcess);

}

function startUpProcess ({newAnimationFrame , startUp}){
    let startUpDuration =2500;
    let t = timeStamp - startUp;
    let thisCam = cameras.camera3.camera;
    let truckPos = roadTrains[0].position;
    let truckQuat = roadTrains[0].quaternion;
    let trailersNumber = roadTrains[0].visibleTrailers + 1;
    let pos = thisCam.position;
    let d = t;
    if (d>startUpDuration) d= startUpDuration;
    d = Math.pow(1-d/startUpDuration,2)*startUpDuration;
    let beam = new THREE.Vector3(0,d,-(10+d));
    beam.applyQuaternion(truckQuat);
    pos.x = beam.x + truckPos.x;
    pos.y = beam.y + truckPos.y +2+(trailersNumber*2) //-47+(trailersNumber*2);//beam.y+truckPos.y;
    pos.z = beam.z + truckPos.z;
    thisCam.lookAt(new THREE.Vector3(truckPos.x,truckPos.y,truckPos.z));

    if (t > startUpDuration){
      startUp = undefined;
      self.activateControls();
    } 

}
