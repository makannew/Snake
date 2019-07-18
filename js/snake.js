
import {MGame} from './mgame/mg.js';
import { cannonSettingsBuilder } from './mgame/mg.physic.settings.js';

const snake = MGame();

snake.utils.addCamera("camera1");
snake.cameras.camera1.set ({cameraFocalLenght: 55 , cameraNearView: 1 , cameraFarView: 3000});
snake.activeCameraName = "camera1";

console.log(snake)

// load world texture
snake.utils.addSkyBox("skyBox1"); 
snake.worlds.skyBox1.set ({textureFilePath:"world/world1/"});

snake.utils.addSkyBox("skyBox2"); 
snake.worlds.skyBox2.set ({textureFilePath:"world/world2/"});

snake.utils.addSkyBox("skyBox3"); 
snake.worlds.skyBox3.set ({textureFilePath:"world/world3/"});

snake.activeWorldName = "skyBox1";

// geometries
snake.utils.newObject("box1");
snake.sceneObjects.box1.set({geometryName : "box" , dimension : { height:2 , width: 2 , length:30} , position :{x:230,y:-400,z:-320} , color : 0xff0000 , materialName:"phong" });
//snake.sceneObjects.box1.quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0) , Math.PI/4);

snake.utils.newObject("sphere2");
snake.sceneObjects.sphere2.set({geometryName : "sphere" , dimension : { radius:10} , position :{x:245,y:-405,z:-320} , color : 0xf1aff0 , materialName:"phong" });

snake.utils.newObject("box5");
snake.sceneObjects.box5.set({geometryName : "box" , dimension : { height:10 , width: 10 , length:10} , position :{x:250,y:-405,z:-320} , color : 0x11abfb , materialName:"phong" });
snake.sceneObjects.box5.quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0) , Math.PI/4);

snake.utils.makePhysicCompound([snake.sceneObjects.box1 , snake.sceneObjects.sphere2 , snake.sceneObjects.box5]);
snake.sceneObjects.box1.set({mass:10 , compoundPosition:{x:255,y:-405 ,z:-320}});


snake.utils.newObject("box2");
snake.sceneObjects.box2.set({geometryName : "box" , textureFileName:"/characters/0.png" , position :{x:45,y:-400,z:-400}, scale:.2 , materialName:"phong" , shininess:2});
snake.sceneObjects.box2.quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0) , -Math.PI/8);

snake.utils.newObject("sphere1");
snake.sceneObjects.sphere1.set({geometryName:"sphere" ,dimension:{radius:50}, position:{x:-140, y:-460,z:-310} , color: 0x00ff00 , scale:.2 , materialName:"phong" , shininess:100});
snake.utils.addPhysicBody(snake.sceneObjects.sphere1);
snake.sceneObjects.sphere1.mass = 10;

snake.utils.newObject("cylinder1");
snake.sceneObjects.cylinder1.set({geometryName:"cylinder" , dimension:{radiusTop:15,radiusBottom:.5,height:50}, position:{x:90,y:-480,z:-320} , color:0x1f11ff , materialName:"phong" , shinines:0});

// Lock constraint
snake.utils.newObject("box6");
snake.sceneObjects.box6.set({geometryName : "box" , dimension : { height:2 , width: 2 , length:30} , position :{x:-70,y:-400,z:-320} , color : 0xaffbb0 , materialName:"phong" });
snake.utils.addPhysicBody(snake.sceneObjects.box6);
snake.sceneObjects.box6.mass =2;

snake.utils.newObject("box7");
snake.sceneObjects.box7.set({geometryName : "box" , dimension : { height:2 , width: 40 , length:2} , position :{x:-54,y:-419,z:-320} , color : 0xaffbb0 , materialName:"phong" });
snake.utils.addPhysicBody(snake.sceneObjects.box7);
snake.sceneObjects.box7.mass =2;

snake.utils.newObject("box8");
snake.sceneObjects.box8.set({geometryName : "box" , dimension : { height:2 , width: 40 , length:2} , position :{x:-86,y:-419,z:-320} , color : 0xaffbb0 , materialName:"phong" });
snake.utils.addPhysicBody(snake.sceneObjects.box8);
snake.sceneObjects.box8.mass =2;

snake.utils.newLockConstraint("lock1");
snake.constraints.lock1.maxForce = 1e6;
snake.constraints.lock1.bodies = [snake.sceneObjects.box6 , snake.sceneObjects.box7 ,snake.sceneObjects.box8];

// point to point constraint
snake.utils.newObject("stand1");
snake.sceneObjects.stand1.set({geometryName : "box" , dimension : {length:2 , width: 150 , height:2  } , position :{x:-100,y:-437,z:-340} , color : 0xdf1bb1 , materialName:"phong" });

snake.utils.newObject("stand2");
snake.sceneObjects.stand2.set({geometryName : "box" , dimension : {length:2 , width: 2 , height:60 } , position :{x:-100,y:-362,z:-340} , color : 0xdf1bb1 , materialName:"phong" });
snake.utils.addPhysicBody(snake.sceneObjects.stand2);
snake.sceneObjects.stand2.mass = 0;


snake.utils.newObject("box9");
snake.sceneObjects.box9.set({geometryName : "box" , dimension : { height:2 , width: 60 , length:2} , position :{x:-120,y:-400,z:-310} , color : 0xaffbb0 , materialName:"phong" });
snake.utils.addPhysicBody(snake.sceneObjects.box9);
snake.sceneObjects.box9.mass =2;

snake.utils.newPointsConstraint("hangedBox");
snake.constraints.hangedBox.set({bodyA: snake.sceneObjects.box9 , bodyB: snake.sceneObjects.stand2 , offsetA:{x:0,y:0,z:0}, offsetA:{x:0,y:31,z:0} , offsetB:{x:0 , b:0 , z:31}})

// distance constraint
snake.utils.newDistanceConstraint("distance1");
snake.constraints.distance1.set({bodyA: snake.sceneObjects.stand2 , bodyB: snake.sceneObjects.sphere1});

// hinge constraint
snake.utils.newObject("stand3");
snake.sceneObjects.stand3.set({geometryName : "box" , dimension : {length:2 , width: 150 , height:2  } , position :{x:-20,y:-437,z:-300} , color : 0xdf1bb1 , materialName:"phong" });
snake.utils.addPhysicBody(snake.sceneObjects.stand3);
snake.sceneObjects.stand3.mass = 0;

snake.utils.newObject("rod1");
snake.sceneObjects.rod1.set({geometryName : "box" , dimension : {length:150 , width: 2 , height:2  } , position :{x:57,y:-362,z:-300} , color : 0xdf1bb1 , materialName:"phong" });
snake.utils.addPhysicBody(snake.sceneObjects.rod1);
snake.sceneObjects.rod1.mass = 5;

snake.utils.newHingeConstraint("hinge1");
snake.constraints.hinge1.axisA = new CANNON.Vec3(0,0,1);
snake.constraints.hinge1.axisB = new CANNON.Vec3(0,0,1);

snake.constraints.hinge1.set({bodyA:snake.sceneObjects.stand3 , bodyB:snake.sceneObjects.rod1 , offsetA:{x:0,y:75,z:0} , offsetB:{x:-75,y:0,z:0} , motor:true , speed:-20})


// lights
snake.utils.newLight("ambient1");
snake.lights.ambient1.set({lightType:"ambient" , intensity:.5});

snake.utils.newLight("pointLight1");
snake.lights.pointLight1.set ({lightType :"point" , intensity:1 , position:{x:0,y:0,z:0}});

// physic bodies
snake.utils.addPhysicBody(snake.sceneObjects.skyBox1_ground);
snake.sceneObjects.skyBox1_ground.set({mass:0 , physicMaterial:"groundMaterial"});

snake.utils.addPhysicBody(snake.sceneObjects.box2);
snake.sceneObjects.box2.mass =2;

snake.utils.addPhysicBody(snake.sceneObjects.cylinder1);
snake.sceneObjects.cylinder1.mass =3;

snake.utils.newObject("box3");
snake.sceneObjects.box3.set({geometryName : "box" , dimension : { height:30 , width: 20 , length:20} , position :{x:140,y:-400,z:-320} , color : 0xa31177 , materialName:"phong" });

snake.utils.newObject("cylinder2");
snake.sceneObjects.cylinder2.set({geometryName:"cylinder" , dimension:{radiusTop:15,radiusBottom:5,height:50}, position:{x:140,y:-400,z:-325} , color:0xaf11af , materialName:"phong" , shinines:0});
snake.sceneObjects.cylinder2.quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1), Math.PI/8);

snake.utils.makePhysicCompound([snake.sceneObjects.box3 , snake.sceneObjects.cylinder2]);
snake.sceneObjects.box3.set({mass:10 , compoundPosition:{x:140,y:-400,z:-325}});





//
snake.player = {
  position: new THREE.Vector3(0,0,0),
  speed: 5 ,
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
    if (worlds[activeWorld] && worlds[activeWorld]["worldDimension"]){
      if (cameraSetup==activeWorld) return activeWorld;
      let world = worlds[activeWorld];
      activeCamera.position.set( 0 , -1 * (world.worldDimension.height * world.scale / 2 ) * (1 - player.viewPointHeight) , 0 );
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
