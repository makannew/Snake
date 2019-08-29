
export function loadCameras(snake){
  // top view perspective camera
  // let topViewQuat = new THREE.Quaternion();
  // topViewQuat.setFromAxisAngle(new THREE.Vector3(-.707,.707,0), Math.PI/4)
  // snake.cameras.camera2 = {};
  // snake.utils.addCamera(snake.cameras.camera2);
  // snake.cameras.camera2.set ({cameraFocalLenght: 55 , cameraNearView: 1 , cameraFarView: 3000 , active:false , 
  //   position:{x:51.0,y:25.0,z:51.0}, quaternion:{x:topViewQuat.x , y:topViewQuat.y, z:topViewQuat.z , w:topViewQuat.w }});
  let topViewQuat = new THREE.Quaternion();
  topViewQuat.setFromAxisAngle(new THREE.Vector3(1,0,0), -Math.PI/2)
  snake.cameras.camera2 = {};
  snake.utils.addCamera(snake.cameras.camera2);
  snake.cameras.camera2.set ({cameraFocalLenght: 75 , cameraNearView: 1 , cameraFarView: 3000 , active:false , 
    position:{x:0.0,y:25.0,z:0}, quaternion:{x:topViewQuat.x , y:topViewQuat.y, z:topViewQuat.z , w:topViewQuat.w }});

  // vehicle front camera
  snake.cameras.camera1 = {};
  snake.utils.addCamera(snake.cameras.camera1);
  snake.cameras.camera1.set ({cameraFocalLenght: 55 , cameraNearView: 1 , cameraFarView: 3000 , active:false });

  // ground camera
  snake.cameras.camera3 = {};
  snake.utils.addCamera(snake.cameras.camera3);
  snake.cameras.camera3.set ({cameraFocalLenght: 75 , cameraNearView: 1 , cameraFarView: 3000 , active:false });

  // vehicle rear camera
  snake.cameras.camera4 = {};
  snake.utils.addCamera(snake.cameras.camera4);
  snake.cameras.camera4.set ({cameraFocalLenght: 55 , cameraNearView: 1 , cameraFarView: 3000 , active:true });

}
