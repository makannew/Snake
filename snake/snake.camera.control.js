
export function loadCameraControl(snake){
  snake.addFunction(animationFrameUpdate);
}

function animationFrameUpdate ({newAnimationFrame}){
    // main camera

    let truckPos = roadTrains[0].position;
    let quat = roadTrains[0].quaternion;
    let trailersNumber = roadTrains.length;
    let camera5Pos = cameras.camera6.camera.position;
    let cam = new THREE.Vector3(0,0,-12*trailersNumber);
    cam.applyQuaternion(quat);
    camera5Pos.x = cam.x + truckPos.x;
    camera5Pos.y = -47+(trailersNumber*2);//cam.y+truckPos.y;
    camera5Pos.z = cam.z + truckPos.z;
    cameras.camera6.camera.lookAt(new THREE.Vector3(truckPos.x,truckPos.y,truckPos.z));
 
}
