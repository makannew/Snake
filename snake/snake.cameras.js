
export function loadCameras(snake){
  snake.cameras.camera1 = {};
  snake.utils.addCamera(snake.cameras.camera1);
  snake.cameras.camera1.set ({cameraFocalLenght: 55 , cameraNearView: 1 , cameraFarView: 3000 , active:true});
  snake.addLink(snake.cameras.camera1.camera , snake.activeCamera)
  snake.addFunction(cameraSetup);
}

const cameraSetup = function({activeCamera , activeWorld , worlds}){
  if (worlds[activeWorld] && worlds[activeWorld]["worldDimension"]){
    if (cameraSetup==activeWorld) return activeWorld;
    let world = worlds[activeWorld];
    activeCamera.position.set( 0 , -1 * (world.worldDimension.height * world.scale / 2 ) * (1 - player.viewPointHeight) , 0 );
    activeCamera.rotateOnAxis(new THREE.Vector3(1,0,0) , player.lookUpAngle);
    player.position= activeCamera.position;
    return activeWorld
  }
}