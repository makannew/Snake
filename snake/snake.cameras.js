
export function loadCameras(snake){
  let topViewQuat = new THREE.Quaternion();
  topViewQuat.setFromAxisAngle(new THREE.Vector3(-.707,.707,0), Math.PI/4)
  snake.cameras.camera2 = {};
  snake.utils.addCamera(snake.cameras.camera2);
  snake.cameras.camera2.set ({cameraFocalLenght: 55 , cameraNearView: 1 , cameraFarView: 3000 , active:false , 
    position:{x:510,y:250,z:510}, quaternion:{x:topViewQuat.x , y:topViewQuat.y, z:topViewQuat.z , w:topViewQuat.w }});
  

  snake.cameras.camera1 = {};
  snake.utils.addCamera(snake.cameras.camera1);
  snake.cameras.camera1.set ({cameraFocalLenght: 55 , cameraNearView: 1 , cameraFarView: 3000 , active:true });

  //snake.addLink(snake.cameras.camera1.camera , snake.activeCamera)
  //snake.addFunction(cameraSetup);
}

// function cameraSetup ({activeCamera , activeWorld , worlds}){
//   if (worlds[activeWorld] && worlds[activeWorld]["worldDimension"]){
//     if (cameraSetup==activeWorld) return activeWorld;
//     let world = worlds[activeWorld];
//     activeCamera.position.set( 0 , -1 * (world.worldDimension.height * world.scale / 2 ) * (1 - player.viewPointHeight) , 0 );
//     activeCamera.rotateOnAxis(new THREE.Vector3(1,0,0) , player.lookUpAngle);
//     player.position= activeCamera.position;
//     return activeWorld
//   }
// }