
export function updateGame(snake){
  snake.addFunction(cameraSetup);
  snake.addFunction(animationFrameUpdate);
}

const animationFrameUpdate = function({newAnimationFrame}){
  cameras.camera1.camera.rotateOnAxis( player.horizen , -1 * player.lookUpAngle );
  if (player.turningLeft){
    cameras.camera1.camera.rotateOnAxis( player.turningVector , Math.PI * actualInterval * player.turningSpeed );
  }
  if (player.turningRight){
    cameras.camera1.camera.rotateOnAxis( player.turningVector, -1 * Math.PI * actualInterval * player.turningSpeed );
  }
  cameras.camera1.camera.rotateOnAxis(player.horizen , player.lookUpAngle );
  cameras.camera1.camera.getWorldDirection(player.direction);
  player.movement=actualInterval * player.speed;
  player.position.x+=player.movement*player.direction.x;
  player.position.z+=player.movement*player.direction.z;
  cameras.camera1.camera.position.x=player.position.x;
  cameras.camera1.camera.position.z=player.position.z;
  
  return true;
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