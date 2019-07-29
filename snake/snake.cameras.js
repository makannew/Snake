
export function loadCameras(snake){
  // top view perspective camera
  let topViewQuat = new THREE.Quaternion();
  topViewQuat.setFromAxisAngle(new THREE.Vector3(-.707,.707,0), Math.PI/4)
  snake.cameras.camera2 = {};
  snake.utils.addCamera(snake.cameras.camera2);
  snake.cameras.camera2.set ({cameraFocalLenght: 55 , cameraNearView: 1 , cameraFarView: 3000 , active:false , 
    position:{x:510,y:250,z:510}, quaternion:{x:topViewQuat.x , y:topViewQuat.y, z:topViewQuat.z , w:topViewQuat.w }});
  
  // vehicle front camera
  snake.cameras.camera1 = {};
  snake.utils.addCamera(snake.cameras.camera1);
  snake.cameras.camera1.set ({cameraFocalLenght: 55 , cameraNearView: 1 , cameraFarView: 3000 , active:true });
}
