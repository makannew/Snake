
export function loadDrawLine(snake){
  snake.addFunction(updateDrawLine);
}

function updateDrawLine ({newAnimationFrame}){

    let truckPos = car.position;
    let canvas = worlds.skyBox1.texture5.canvas;
    // let quat = car.quaternion;
    // //let trailersNumber = roadTrains.length;
    // let pos = cameras.camera3.camera.position;
    // let cam = new THREE.Vector3(0,0,-12);
    // cam.applyQuaternion(quat);
    // pos.x = cam.x + truckPos.x;
    // pos.y = -47;
    // pos.z = cam.z + truckPos.z;
    // cameras.camera3.camera.lookAt(new THREE.Vector3(truckPos.x,truckPos.y,truckPos.z));
 
}
