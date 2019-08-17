
export function updateGame(snake){
  snake.addFunction(animationFrameUpdate);
}

function animationFrameUpdate ({newAnimationFrame}){
  // let cameraPos = cameras.camera1.camera.position;
  // let vehiclePos = vehicles.vehicle1.raycastVehicle.chassisBody.position;
  // let cameraQuat = cameras.camera1.camera.quaternion;
  // let vehicleQuat = vehicles.vehicle1.raycastVehicle.chassisBody.quaternion

  // let threeQuat = new THREE.Quaternion(vehicleQuat.x ,vehicleQuat.y ,vehicleQuat.z ,vehicleQuat.w);
  // let threeRelativePos = new THREE.Vector3(0,30,0); 
  // let threePos = new THREE.Vector3(vehiclePos.x,vehiclePos.y,vehiclePos.z);
  // let quat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0) , Math.PI);
  
  // threeQuat.multiply(quat);
  // threeRelativePos.applyQuaternion(threeQuat);
  // threePos.add(threeRelativePos);
  
  // cameraPos.x = threePos.x;
  // cameraPos.y = threePos.y;
  // cameraPos.z = threePos.z;

  // cameraQuat.x = threeQuat.x;
  // cameraQuat.y = threeQuat.y;
  // cameraQuat.z = threeQuat.z;
  // cameraQuat.w = threeQuat.w;

  return true;
}
