
export function loadCameras(snake){

  // let topViewQuat = new THREE.Quaternion();
  // topViewQuat.setFromAxisAngle(new THREE.Vector3(1,0,0), -Math.PI/2)
  // snake.cameras.camera2 = {};
  // snake.utils.addCamera(snake.cameras.camera2);
  // snake.cameras.camera2.set ({cameraFocalLenght: 75 , cameraNearView: 1 , cameraFarView: 3000 , active:false , 
  //   position:{x:100,y:100.0,z:100}, quaternion:{x:topViewQuat.x , y:topViewQuat.y, z:topViewQuat.z , w:topViewQuat.w }});

  // vehicle front camera
  snake.cameras.camera1 = {};
  snake.utils.addCamera(snake.cameras.camera1);
  snake.cameras.camera1.set ({cameraFocalLenght: 55 , cameraNearView: 1 , cameraFarView: 3000 , active:false });

  // // ground camera
  snake.cameras.camera3 = {};
  snake.utils.addCamera(snake.cameras.camera3);
  snake.cameras.camera3.set ({cameraFocalLenght: 75 , cameraNearView: 1 , cameraFarView: 3000 , active:true,position:{x:90,y:-40,z:120} });


  // // vehicle rear camera
  // snake.cameras.camera4 = {};
  // snake.utils.addCamera(snake.cameras.camera4);
  // snake.cameras.camera4.set ({cameraFocalLenght: 55 , cameraNearView: 1 , cameraFarView: 3000 , active:false });

  // // vehicle back camera
  // snake.cameras.camera5 = {};
  // snake.utils.addCamera(snake.cameras.camera5);
  // snake.cameras.camera5.set ({cameraFocalLenght: 65 , cameraNearView: 1 , cameraFarView: 3000 , active:true });

  // vehicle main camera
  snake.cameras.camera6 = {};
  snake.utils.addCamera(snake.cameras.camera6);
  snake.cameras.camera6.set ({cameraFocalLenght: 65 , cameraNearView: 1 , cameraFarView: 3000 , active:false })


  
}
