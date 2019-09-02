
export function exampleGeometries(snake){

  // geometries
  snake.sceneObjects.box1={};
  snake.utils.addObject(snake.sceneObjects.box1);
  snake.sceneObjects.box1.set({geometryName : "box" , dimension : { height:.2 , width: .2 , length:3.0} , position :{x:23.0,y:-40.0,z:-32.0} , color : 0xff0000 , materialName:"phong" });
  //snake.sceneObjects.box1.quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0) , Math.PI/4);

  snake.sceneObjects.sphere2={};
  snake.utils.addObject(snake.sceneObjects.sphere2);
  snake.sceneObjects.sphere2.set({geometryName : "sphere" , dimension : { radius:1.0} , position :{x:24.5,y:-40.5,z:-32.0} , color : 0xf1aff0 , materialName:"phong" });

  snake.sceneObjects.box5={};
  snake.utils.addObject(snake.sceneObjects.box5);
  snake.sceneObjects.box5.set({geometryName : "box" , dimension : { height:1.0 , width: 1.0 , length:1.0} , position :{x:25.0,y:-40.5,z:-32.0} , color : 0x11abfb , materialName:"phong" });
  snake.sceneObjects.box5.quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0) , Math.PI/4);

  snake.utils.makePhysicCompound([snake.sceneObjects.box1 , snake.sceneObjects.sphere2 , snake.sceneObjects.box5]);
  snake.sceneObjects.box1.set({mass:10 , compoundPosition:{x:25.5,y:-40.5 ,z:-32.0}});

  snake.sceneObjects.box2={};
  snake.utils.addObject(snake.sceneObjects.box2);
  snake.sceneObjects.box2.set({geometryName : "box" , textureFileName:"/characters/0.png" , position :{x:4.5,y:-40.0,z:-40.0}, scale:.1 , materialName:"phong" , shininess:2});
  snake.sceneObjects.box2.quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0) , -Math.PI/8);

  snake.sceneObjects.sphere1={};
  snake.utils.addObject(snake.sceneObjects.sphere1);
  snake.sceneObjects.sphere1.set({geometryName:"sphere" ,dimension:{radius:5.0}, position:{x:-14.0, y:-46.0,z:-31.0} , color: 0x00ff00 , scale:.1 , materialName:"phong" , shininess:100});
  snake.utils.addPhysicBody(snake.sceneObjects.sphere1);
  snake.sceneObjects.sphere1.mass = 10;

  snake.sceneObjects.cylinder1={};
  snake.utils.addObject(snake.sceneObjects.cylinder1);
  snake.sceneObjects.cylinder1.set({geometryName:"cylinder" , dimension:{radiusTop:1.5,radiusBottom:.05,height:5.0}, position:{x:9.0,y:-48.0,z:-32.0} , color:0x1f11ff , materialName:"phong" , shinines:0});

  // Lock constraint
    snake.sceneObjects.box6 =[];
    snake.sceneObjects.box7 =[];
    snake.sceneObjects.box8 =[];
    snake.constraints.lock1 = [];
    for(let i=-0;i<6;++i){
      let x=0,y=-40,z=-40+i*15;
      snake.sceneObjects.box6[i]={};
      snake.utils.addObject(snake.sceneObjects.box6[i]);
      snake.sceneObjects.box6[i].set({geometryName : "box" , dimension : { height:.2 , width: .2 , length:3.0} , position :{x:x-7.0,y:y,z:z} , color : 0xaffbb0 , materialName:"phong" });
      snake.utils.addPhysicBody(snake.sceneObjects.box6[i]);
      snake.sceneObjects.box6[i].mass =2;
    
      snake.sceneObjects.box7[i]={};
      snake.utils.addObject(snake.sceneObjects.box7[i]);
      snake.sceneObjects.box7[i].set({geometryName : "box" , dimension : { height:.2 , width: 4.0 , length:.2} , position :{x:x-5.4,y:y-1.9,z:z} , color : 0xaffbb0 , materialName:"phong" });
      snake.utils.addPhysicBody(snake.sceneObjects.box7[i]);
      snake.sceneObjects.box7[i].mass =2;
    
      snake.sceneObjects.box8[i]={};
      snake.utils.addObject(snake.sceneObjects.box8[i]);
      snake.sceneObjects.box8[i].set({geometryName : "box" , dimension : { height:.2 , width: 4.0 , length:.2} , position :{x:x-8.6,y:y-1.9,z:z} , color : 0xaffbb0 , materialName:"phong" });
      snake.utils.addPhysicBody(snake.sceneObjects.box8[i]);
      snake.sceneObjects.box8[i].mass =2;
    
      snake.constraints.lock1[i]={};
      snake.utils.newLockConstraint(snake.constraints.lock1[i]);
      snake.constraints.lock1[i].maxForce = 1e6;
      snake.constraints.lock1[i].bodies = [snake.sceneObjects.box6[i] , snake.sceneObjects.box7[i] ,snake.sceneObjects.box8[i]];
    
    }


  // point to point constraint
  // snake.sceneObjects.stand1={};
  // snake.utils.addObject(snake.sceneObjects.stand1);
  // snake.sceneObjects.stand1.set({geometryName : "box" , dimension : {length:.2 , width: 15.0 , height:.2  } , position :{x:-10.0,y:-43.7,z:-34.0} , color : 0xdf1bb1 , materialName:"phong" });

  // snake.sceneObjects.stand2={};
  // snake.utils.addObject(snake.sceneObjects.stand2);
  // snake.sceneObjects.stand2.set({geometryName : "box" , dimension : {length:.2 , width: .2 , height:6.0 } , position :{x:-10.0,y:-36.2,z:-34.0} , color : 0xdf1bb1 , materialName:"phong" });
  // snake.utils.addPhysicBody(snake.sceneObjects.stand2);
  // snake.sceneObjects.stand2.mass = 0;

  // snake.sceneObjects.box9={};
  // snake.utils.addObject(snake.sceneObjects.box9);
  // snake.sceneObjects.box9.set({geometryName : "box" , dimension : { height:.2 , width: 6.0 , length:.2} , position :{x:-12.0,y:-40.0,z:-31.0} , color : 0xaffbb0 , materialName:"phong" });
  // snake.utils.addPhysicBody(snake.sceneObjects.box9);
  // snake.sceneObjects.box9.mass =2;

  // snake.constraints.hangedBox = {};
  // snake.utils.newPointsConstraint(snake.constraints.hangedBox);
  // snake.constraints.hangedBox.set({bodyA: snake.sceneObjects.box9 , bodyB: snake.sceneObjects.stand2 , offsetA:{x:0,y:0,z:0}, offsetA:{x:0,y:3.1,z:0} , offsetB:{x:0 , b:0 , z:3.1}})

  // distance constraint
  // snake.constraints.distance1 = {};
  // snake.utils.newDistanceConstraint(snake.constraints.distance1);
  // snake.constraints.distance1.set({bodyA: snake.sceneObjects.stand2 , bodyB: snake.sceneObjects.sphere1});

  // hinge constraint
  // snake.sceneObjects.stand3={};
  // snake.utils.addObject(snake.sceneObjects.stand3);
  // snake.sceneObjects.stand3.set({geometryName : "box" , dimension : {length:.2 , width: 15.0 , height:.2  } , position :{x:-2.0,y:-43.7,z:-30.0} , color : 0xdf1bb1 , materialName:"phong" });
  // snake.utils.addPhysicBody(snake.sceneObjects.stand3);
  // snake.sceneObjects.stand3.mass = 0;

  // snake.sceneObjects.rod1={};
  // snake.utils.addObject(snake.sceneObjects.rod1);
  // snake.sceneObjects.rod1.set({geometryName : "box" , dimension : {length:15.0 , width: .2 , height:.2  } , position :{x:5.7,y:-36.2,z:-30.0} , color : 0xdf1bb1 , materialName:"phong" });
  // snake.utils.addPhysicBody(snake.sceneObjects.rod1);
  // snake.sceneObjects.rod1.mass = 5;

  // snake.constraints.hinge1 = {};
  // snake.utils.newHingeConstraint(snake.constraints.hinge1);
  // snake.constraints.hinge1.axisA = new CANNON.Vec3(0,0,1);
  // snake.constraints.hinge1.axisB = new CANNON.Vec3(0,0,1);

  // snake.constraints.hinge1.set({bodyA:snake.sceneObjects.stand3 , bodyB:snake.sceneObjects.rod1 , offsetA:{x:0,y:8.6,z:1} , offsetB:{x:-7.5,y:0,z:0} , motor:true , speed:-2.0})

  // physic bodies


  snake.utils.addPhysicBody(snake.sceneObjects.box2);
  snake.sceneObjects.box2.mass =2;

  snake.utils.addPhysicBody(snake.sceneObjects.cylinder1);
  snake.sceneObjects.cylinder1.mass =3;

  snake.sceneObjects.box3={};
  snake.utils.addObject(snake.sceneObjects.box3);
  snake.sceneObjects.box3.set({geometryName : "box" , dimension : { height:3.0 , width: 2.0 , length:2.0} , position :{x:14.0,y:-40.0,z:-32.0} , color : 0xa31177 , materialName:"phong" });

  snake.sceneObjects.cylinder2={};
  snake.utils.addObject(snake.sceneObjects.cylinder2);
  snake.sceneObjects.cylinder2.set({geometryName:"cylinder" , dimension:{radiusTop:1.5,radiusBottom:.5,height:5.0}, position:{x:14.0,y:-40.0,z:-32.5} , color:0xaf11af , materialName:"phong" , shinines:0});
  snake.sceneObjects.cylinder2.quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1), Math.PI/8);

  snake.utils.makePhysicCompound([snake.sceneObjects.box3 , snake.sceneObjects.cylinder2]);
  snake.sceneObjects.box3.set({mass:10 , compoundPosition:{x:14.0,y:-40.0,z:-32.5}});

  // snake.sceneObjects.tp={};
  // snake.utils.addObject(snake.sceneObjects.tp);
  // snake.sceneObjects.tp.set({geometryName : "plane" , dimension : { height:1024 , width: 1024 , length:1024} , position :{x:0,y:-512,z:0} , color : 0xaffbb0 , materialName:"phong" });
  // snake.sceneObjects.tp.quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0) , -Math.PI/2);
  
  // snake.utils.addPhysicBody(snake.sceneObjects.tp);
  // snake.sceneObjects.tp.set({mass:0 , physicMaterial:"groundMaterial"});
}
