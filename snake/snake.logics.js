
export function updateGame(snake){
  snake.addFunction(animationFrameUpdate);
}

function animationFrameUpdate ({newAnimationFrame}){
  let cameraPos = cameras.camera1.camera.position;
  //let vehiclePos = vehicles.vehicle1.raycastVehicle.chassisBody.position;
  let vehiclePos = roadTrains[0].chassis.body.position;
  let cameraQuat = cameras.camera1.camera.quaternion;

  let vehicleQuat = roadTrains[0].chassis.body.quaternion

  let threeQuat = new THREE.Quaternion(vehicleQuat.x ,vehicleQuat.y ,vehicleQuat.z ,vehicleQuat.w);
  let threeRelativePos = new THREE.Vector3(0,-.1,4); 
  let threePos = new THREE.Vector3(vehiclePos.x,vehiclePos.y,vehiclePos.z);
  let quat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0) , Math.PI);
  
  threeQuat.multiply(quat);
  threeRelativePos.applyQuaternion(threeQuat);
  threePos.add(threeRelativePos);
  
  cameraPos.x = threePos.x;
  cameraPos.y = threePos.y;
  cameraPos.z = threePos.z;

  cameraQuat.x = threeQuat.x;
  cameraQuat.y = threeQuat.y;
  cameraQuat.z = threeQuat.z;
  cameraQuat.w = threeQuat.w;
  // rear camera

  let rearCameraPos = cameras.camera4.camera.position;
  let rearCameraQuat = cameras.camera4.camera.quaternion;

  threePos = new THREE.Vector3(vehiclePos.x,vehiclePos.y,vehiclePos.z);
  threeQuat = new THREE.Quaternion(vehicleQuat.x ,vehicleQuat.y ,vehicleQuat.z ,vehicleQuat.w);

  threeRelativePos = new THREE.Vector3(0,3,11); 
  quat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0) , 2*Math.PI);

  threeQuat.multiply(quat);
  threeRelativePos.applyQuaternion(threeQuat);
  threePos.add(threeRelativePos);

  rearCameraPos.x = threePos.x;
  rearCameraPos.y = threePos.y;
  rearCameraPos.z = threePos.z;

  rearCameraQuat.x = threeQuat.x;
  rearCameraQuat.y = threeQuat.y;
  rearCameraQuat.z = threeQuat.z;
  rearCameraQuat.w = threeQuat.w;

  return true;
}
