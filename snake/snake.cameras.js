
export function loadCameras(snake){

  // let topViewQuat = new THREE.Quaternion();
  // topViewQuat.setFromAxisAngle(new THREE.Vector3(1,0,0), -Math.PI/2)
  // snake.cameras.camera2 = {};
  // snake.utils.addCamera(snake.cameras.camera2);
  // snake.cameras.camera2.set ({cameraFocalLenght: 75 , cameraNearView: 1 , cameraFarView: 3000 , active:false , 
  //   position:{x:100,y:100.0,z:100}, quaternion:{x:topViewQuat.x , y:topViewQuat.y, z:topViewQuat.z , w:topViewQuat.w }});

  // ground camera
  snake.cameras.camera1 = {};
  snake.utils.addCamera(snake.cameras.camera1);
  snake.cameras.camera1.set ({
    position:{x:0,y:-509,z:20},
    cameraFocalLenght: 55 , 
    cameraNearView: 1 , 
    cameraFarView: 3000 , 
    active:false });

  // // back chasing camera
  snake.cameras.camera3 = {};
  snake.utils.addCamera(snake.cameras.camera3);
  snake.cameras.camera3.set ({cameraFocalLenght: 75 , cameraNearView: 1 , cameraFarView: 3000 , active:false});

  // // cockpit camera
  snake.cameras.camera10 = {};
  snake.utils.addCamera(snake.cameras.camera10);
  snake.cameras.camera10.set ({cameraFocalLenght: 75 , cameraNearView: .01 , cameraFarView: 3000 , active:true});

  // // reverse camera
  snake.cameras.camera7 = {};
  snake.utils.addCamera(snake.cameras.camera7);
  snake.cameras.camera7.set ({cameraFocalLenght: 75 , cameraNearView: 1 , cameraFarView: 3000 , active:false});
  // // right camera
  snake.cameras.camera8 = {};
  snake.utils.addCamera(snake.cameras.camera8);
  snake.cameras.camera8.set ({cameraFocalLenght: 75 , cameraNearView: 1 , cameraFarView: 3000 , active:false});
  // // top camera
  snake.cameras.camera9 = {};
  snake.utils.addCamera(snake.cameras.camera9);
  snake.cameras.camera9.set ({cameraFocalLenght: 75 , cameraNearView: 1 , cameraFarView: 3000 , active:false});
  

  // vehicle main camera
  // snake.cameras.camera6 = {};
  // snake.utils.addCamera(snake.cameras.camera6);
  // snake.cameras.camera6.set ({cameraFocalLenght: 65 , cameraNearView: 1 , cameraFarView: 3000 , active:true })


  
}
