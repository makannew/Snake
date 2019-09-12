
export function loadCameraControl(snake){
  snake.addFunction(updateCameras);
}

function updateCameras ({newAnimationFrame}){
    // main camera

    let truckPos = car.position;
    let quat = car.quaternion;
    //let trailersNumber = roadTrains.length;
    let pos = cameras.camera3.camera.position;
    let cam = new THREE.Vector3(0,0,-12);
    cam.applyQuaternion(quat);
    pos.x = cam.x + truckPos.x;
    pos.y = -47;
    pos.z = cam.z + truckPos.z;
    cameras.camera3.camera.lookAt(new THREE.Vector3(truckPos.x,truckPos.y,truckPos.z));
 
}
