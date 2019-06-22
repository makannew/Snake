
import {MGame} from './mgame/mg.js';

const snake = MGame();

snake.cameras.camera1 = snake.utils.newCamera();
snake.cameras.camera1.set ({cameraFocalLenght: 55 , cameraNearView: 1 , cameraFarView: 3000});
snake.activeCameraName = "camera1";

console.log(snake)

// load skybox1 world texture
snake.worlds.skyBox1 = snake.utils.newSkyBox();
snake.worlds.skyBox1.scale=1
snake.worlds.skyBox1.components.back.textureFileName = "world/world1/world_back.png";
snake.worlds.skyBox1.components.front.textureFileName = "world/world1/world_front.png";
snake.worlds.skyBox1.components.left.textureFileName = "world/world1/world_left.png";
snake.worlds.skyBox1.components.right.textureFileName = "world/world1/world_right.png";
snake.worlds.skyBox1.components.top.textureFileName = "world/world1/world_top.png";
snake.worlds.skyBox1.components.ground.textureFileName = "world/world1/world_ground.png";
//load skybox2 world texture
snake.worlds.skyBox2 = snake.utils.newSkyBox();
snake.worlds.skyBox2.scale=1;
snake.worlds.skyBox2.components.back.textureFileName = "world/world2/world_back.png";
snake.worlds.skyBox2.components.front.textureFileName = "world/world2/world_front.png";
snake.worlds.skyBox2.components.left.textureFileName = "world/world2/world_left.png";
snake.worlds.skyBox2.components.right.textureFileName = "world/world2/world_right.png";
snake.worlds.skyBox2.components.top.textureFileName = "world/world2/world_top.png";
snake.worlds.skyBox2.components.ground.textureFileName = "world/world2/world_ground.png";
snake.activeWorldName = "skyBox1";

// geometries
snake.sceneObjects.box1 = snake.utils.newObject();
snake.sceneObjects.box1.set({geometryName : "box" , dimension : { height:20 , width: 10 , length:5} , position :{x:50,y:-400,z:-320} , color : 0xff0000 , materialName:"phong" });

snake.sceneObjects.box2 = snake.utils.newObject();
snake.sceneObjects.box2.set({geometryName : "box" , textureFileName:"/characters/0.png" , position :{x:50,y:-350,z:-320}, scale:.2 , materialName:"phong" , shininess:2});

snake.sceneObjects.sphere1 = snake.utils.newObject();
snake.sceneObjects.sphere1.set({geometryName:"sphere" ,dimension:{radius:100}, position:{x:10,y:-400,z:-320} , color: 0x00ff00 , scale:.2 , materialName:"phong" , shininess:100});

snake.sceneObjects.cylinder1 = snake.utils.newObject();
snake.sceneObjects.cylinder1.set({geometryName:"cylinder" , dimension:{radiusTop:15,radiusBottom:.5,height:50}, position:{x:90,y:-480,z:-320} , color:0x1f11ff , materialName:"phong" , shinines:0});
// lights
snake.lights.ambient1 = snake.utils.newLight();
snake.lights.ambient1.set({lightType:"ambient" , intensity:.5});

// snake.lights.spotLight1 = snake.utils.newLight();
// snake.lights.spotLight1.set({lightType:"spot" , intensity:1 , position:{x:0,y:400,z:-320}})

// snake.lights.directionalLight1 = snake.utils.newLight();
// snake.lights.directionalLight1.set ({lightType:"directional" , position:{x:0,y:400,z:320}});


// snake.lights.hemisphereLight1 = snake.utils.newLight();
// snake.lights.hemisphereLight1.set ({lightType:"hemisphere" , intensity:2});

snake.lights.pointLight1 = snake.utils.newLight();
snake.lights.pointLight1.set ({lightType :"point" , intensity:1});

//physic bodies
//snake.addLink(snake.worlds.skyBox1.components.ground , snake.sceneObjects.ground);
snake.addLink(snake.worlds.skyBox1.components.ground.dimension , snake.sceneObjects.ground.dimension);
snake.addLink(snake.worlds.skyBox1.components.ground.scale , snake.sceneObjects.ground.scale);
snake.addLink(snake.worlds.skyBox1.components.ground.sceneUpdate , snake.sceneObjects.ground.sceneUpdate);
snake.addLink(snake.worlds.skyBox1.components.ground.geometryName , snake.sceneObjects.ground.geometryName);

// composition
snake.sceneObjects.box1.mass = 5;
snake.utils.addPhysicBody(snake.sceneObjects.box1);

snake.sceneObjects.ground.set({mass:0 , physicMaterial:"groundMaterial"});
snake.utils.addPhysicBody(snake.sceneObjects.ground);


snake.sceneObjects.box2.mass =2;
snake.utils.addPhysicBody(snake.sceneObjects.box2);

snake.sceneObjects.sphere1.mass =.1;
snake.utils.addPhysicBody(snake.sceneObjects.sphere1);

snake.sceneObjects.cylinder1.mass =3;
snake.utils.addPhysicBody(snake.sceneObjects.cylinder1);


//
// snake.utils.addSkyBox("skyBox1"); 
// snake.worlds.skyBox1.set ({texturePath:"world/world2/" , textureName:"world"})

// snake.physicBodies.ground = snake.utils.newPhysicBody();
// snake.physicBodies.ground.set({threeBodyName: "ground" , material: "groundMaterial" , mass: 0});

// snake.physicBodies.body1 = snake.utils.newPhysicBody();
// snake.physicBodies.body1.set({threeBodyName: "box1" ,  mass: 5});

// snake.physicBodies.body2 = snake.utils.newPhysicBody();
// snake.physicBodies.body2.set({threeBodyName: "box2" ,  mass: 15});

// snake.physicBodies.body3 = snake.utils.newPhysicBody();
// snake.physicBodies.body3.set({threeBodyName: "sphere1" ,  mass: 1});

// snake.physicBodies.body4 = snake.utils.newPhysicBody();
// snake.physicBodies.body4.set({threeBodyName: "cylinder1" ,  mass: 10})

snake.player = {
  position: new THREE.Vector3(0,0,0),
  speed: 20 ,
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
const cameraSetup = function({activeCamera , activeWorld , worlds}){
    if (worlds[activeWorld] && worlds[activeWorld]["skyBox"]){
      if (cameraSetup==activeWorld) return activeWorld;
      activeCamera.position.set( 0 , -1 * (worlds[activeWorld].components.ground.dimension.height * worlds[activeWorld].components.ground.scale / 2 ) * (1 - player.viewPointHeight) , 0 );
      activeCamera.rotateOnAxis(new THREE.Vector3(1,0,0) , player.lookUpAngle);
      player.position= activeCamera.position;
      return activeWorld
    }

}
snake.addFunction(cameraSetup);



// game controls
document.addEventListener( "keydown" , keyDownHandler , false );
document.addEventListener( "keyup" , keyUpHandler , false );

function keyDownHandler ( e ){
  if (e.key == "Right" || e.key == "ArrowRight" ){
      if( !snake.player.turningRight ){
        snake.player.turningLeft = false;
        snake.player.turningRight = true;

        

      }
  }
  else if (e.key == "Left" || e.key == "ArrowLeft"){
      if( !snake.player.turningLeft ){
        snake.player.turningRight = false;
        snake.player.turningLeft = true;




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
snake.utils.start(snake);
