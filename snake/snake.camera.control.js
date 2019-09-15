
export function loadCameraControl(snake){
  //snake.addFunction(updateCarCameras);
  snake.addFunction(updateRoadTrainCameras);
}

function updateCarCameras ({newAnimationFrame}){
    // main camera

    let truckPos = car.position;
    let quat = car.quaternion;
    //let trailersNumber = roadTrains.length;
    let pos = cameras.camera3.camera.position;
    let cam = new THREE.Vector3(0,0,-12);
    cam.applyQuaternion(quat);
    pos.x = cam.x + truckPos.x;
    pos.y = truckPos.y+2;
    pos.z = cam.z + truckPos.z;
    cameras.camera3.camera.lookAt(new THREE.Vector3(truckPos.x,truckPos.y,truckPos.z));
 
}

function updateRoadTrainCameras ({newAnimationFrame}){
  // main camera

  let truckPos = roadTrains[0].position;
  let quat = roadTrains[0].quaternion;
  let trailersNumber = roadTrains[0].visibleTrailers + 1;
  let pos = cameras.camera3.camera.position;
  let cam = new THREE.Vector3(0,0,-10*trailersNumber);
  cam.applyQuaternion(quat);
  pos.x = cam.x + truckPos.x;
  pos.y = cam.y + truckPos.y +2+(trailersNumber*2) //-47+(trailersNumber*2);//cam.y+truckPos.y;
  pos.z = cam.z + truckPos.z;
  cameras.camera3.camera.lookAt(new THREE.Vector3(truckPos.x,truckPos.y,truckPos.z));

}
