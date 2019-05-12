
import {MGame} from './mg.js';

const snake = MGame();


snake.three = snake.initializeThreeJs();
snake.cameras.camera1 = snake.newCamera();
snake.cameras.camera1.set ({cameraFocalLenght: 55 , cameraNearView: 1 , cameraFarView: 3000});
snake.activeCameraName = "camera1";

console.log(snake)

// load skybox1 world texture
snake.worlds.skyBox1 = snake.newSkyBox();
snake.worlds.skyBox1.components.back.textureFileName = "world/world1/world_back.png";
snake.worlds.skyBox1.components.front.textureFileName = "world/world1/world_front.png";
snake.worlds.skyBox1.components.left.textureFileName = "world/world1/world_left.png";
snake.worlds.skyBox1.components.right.textureFileName = "world/world1/world_right.png";
snake.worlds.skyBox1.components.top.textureFileName = "world/world1/world_top.png";
snake.worlds.skyBox1.components.ground.textureFileName = "world/world1/world_ground.png";
//load skybox2 world texture
snake.worlds.skyBox2 = snake.newSkyBox();
snake.worlds.skyBox2.components.back.textureFileName = "world/world2/world_back.png";
snake.worlds.skyBox2.components.front.textureFileName = "world/world2/world_front.png";
snake.worlds.skyBox2.components.left.textureFileName = "world/world2/world_left.png";
snake.worlds.skyBox2.components.right.textureFileName = "world/world2/world_right.png";
snake.worlds.skyBox2.components.top.textureFileName = "world/world2/world_top.png";
snake.worlds.skyBox2.components.ground.textureFileName = "world/world2/world_ground.png";
snake.activeWorldName = "skyBox1";
//


snake.player = {
  position: new THREE.Vector3(0,0,0),
  speed: 25 ,
  turningSpeed: .13 ,
  direction: new THREE.Vector3(0,0,0),
  turningRight:false,
  turningLeft:false,
  movement:0,
  turningVector: new THREE.Vector3( 0 , 1 , 0),
  horizen: new THREE.Vector3( 1 , 0 , 0 ),
  lookUpAngle: 0,
  viewPointHeight: 0.05
};

//
const camera1Setup = function({camera , activeWorld}){
    if (camera1Setup==activeWorld) return activeWorld;
    camera.position.set( 0 , -1 * (activeWorld.components.ground.texture.image.height / 2 ) * (1 - player.viewPointHeight) , 0 );
    camera.rotateOnAxis(new THREE.Vector3(1,0,0) , player.lookUpAngle);
    player.position= camera.position;

    return activeWorld

}
snake.cameras.camera1.addFunction(camera1Setup);
snake.addLink(snake.player , snake.cameras.camera1.player);
snake.addLink(snake.activeWorld , snake.cameras.camera1.activeWorld)



// game controls
document.addEventListener( "keydown" , keyDownHandler , false );
document.addEventListener( "keyup" , keyUpHandler , false );

function keyDownHandler ( e ){
  if (e.key == "Right" || e.key == "ArrowRight" ){
      if( !snake.player.turningRight ){
        snake.player.turningLeft = false;
        snake.player.turningRight = true;
        snake.activeWorldName="skyBox1";

      }
  }
  else if (e.key == "Left" || e.key == "ArrowLeft"){
      if( !snake.player.turningLeft ){
        snake.player.turningRight = false;
        snake.player.turningLeft = true;
        snake.activeWorldName="skyBox2";
      }
  }
}
function keyUpHandler ( e ){
  if (e.key == "Right" || e.key == "ArrowRight" ){
    snake.player.turningRight = false;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft"){
    snake.player.turningLeft = false;
  }
}
//
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
snake.addFunction(animationFrameUpdate);
snake.start(snake);
