
export function box(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = localQuat.clone();

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];
  obj.parts = []

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName : "box" ,
    dimension : { height:3 , width: 3 , length:3} , 
    position :new THREE.Vector3(0,1.6,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat , 
    textureFileName:["/textures/box.jpg"],
    color : 0xffffff , 
    materialName:"lambert" 
  });

  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:1,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });

}

export function barrel(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = localQuat.clone();

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];
  obj.parts = []

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName : "cylinder" , 
    dimension : {radiusTop:.8,radiusBottom:.8,height:2.2} , 
    position :new THREE.Vector3(0,2,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xffffff , 
     materialName:"lambert" ,
     textureFileName:["/textures/barrelTop.jpg","/textures/barrelSide.jpg","/textures/barrelBottom.jpg"],
     materialIndex:[0,1,2],


    });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:10,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });

}
export function barrierB(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = localQuat.clone();

  thisQuat.multiply(quat);

  obj.objects = [{},{}];
  obj.constraints = [{}];
  obj.parts = []

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName : "box" ,
    dimension : { height:1 , width: 1 , length:1} , 
    position :new THREE.Vector3(0,.2,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat , 
    textureFileName:["/textures/barrierStand.png"],
    color : 0xffffff , 
    materialName:"lambert" 
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:10,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });

  rGame.utils.addObject(obj.objects[1]);
  obj.objects[1].set({
    geometryName : "box" ,
     textureFileName:["/textures/barrierStand.png"],
     dimension : { height:1 , width:1, length:1} , 
     position :new THREE.Vector3(0,1.4,0).add(localPos).applyQuaternion(quat).add(pos),
     quaternion:thisQuat , 
     materialName:"lambert" });
     rGame.utils.addPhysicBody(obj.objects[1]);
  obj.objects[1].set({
    mass:10,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });

  rGame.utils.newLockConstraint(obj.constraints[0]);
  obj.constraints[0].maxForce = 1e6;
  obj.constraints[0].bodies = [obj.objects[0] , obj.objects[1]];

}

export function barrierA(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];
  obj.parts = [{},{},{},{}]

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName : "box" ,
    dimension : { height:.1 , width: .8 , length:8} , 
    position :new THREE.Vector3(0,2,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat , 
    textureFileName:["/textures/barrierSide.png"],
    color : 0xffffff , 
    materialName:"basic" 
  });

  rGame.utils.addObject(obj.parts[0]);
  obj.parts[0].set({geometryName : "box" , textureFileName:["/textures/barrierStand.png"],dimension : { height:.1 , width: 1.4, length:.8} , position :new THREE.Vector3(-3,.9,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat , materialName:"phong" });

  rGame.utils.addObject(obj.parts[1]);
  obj.parts[1].set({geometryName : "box" , textureFileName:["/textures/barrierStand.png"],dimension : { height:.1 , width: 1.4 , length:.8} , position :new THREE.Vector3(3,.9,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat  , materialName:"phong" });

  rGame.utils.addObject(obj.parts[2]);
  obj.parts[2].set({geometryName : "box" ,textureFileName:["/textures/barrierStand.png"], dimension : { height:.8 , width: .2 , length:.8} , position :new THREE.Vector3(-3,.1,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat  , materialName:"phong" });

  rGame.utils.addObject(obj.parts[3]);
  obj.parts[3].set({geometryName : "box" ,textureFileName:["/textures/barrierStand.png"], dimension : { height:.8 , width: .2 , length:.8} , position :new THREE.Vector3(3,.1,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat  , materialName:"phong" });

  rGame.utils.makePhysicCompound([obj.objects[0],...obj.parts]);
  obj.objects[0].set({
    mass:2,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });
  // rGame.utils.newLockConstraint(obj.constraints[0]);
  // obj.constraints[0].maxForce = 1e6;
  // obj.constraints[0].bodies = [obj.objects[0] , obj.objects[1] , obj.objects[2] , obj.objects[3] , obj.objects[4]];

}

export function coneBarrier(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1) , visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];
  obj.parts = [{},{}]

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "box" , 
  dimension : { height:1 , width: .1 , length:1} , 
  position :new THREE.Vector3(0,.05,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat ,
   color : 0xffffff , 
   textureFileName:["/textures/coneBaseSide.png","/textures/coneBaseTop.png","/textures/coneBaseBottom.png"],
   materialIndex:[0,0,0,0,1,1,2,2,2,2,0,0],
   materialName:"basic" 
  });

  rGame.utils.addObject(obj.parts[0]);
  obj.parts[0].set({geometryName : "cylinder" , 
    dimension : {radiusTop:0.04,radiusBottom:.45,height:1.5} , 
    position :new THREE.Vector3(0,.8,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/coneTop.png","/textures/coneSide.png"],
     materialIndex:[0,1,0],


    });

  rGame.utils.makePhysicCompound([obj.objects[0],...obj.parts]);
  obj.objects[0].set({
    mass:.5,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });

}

export function heavyBall(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];
  obj.parts = [{},{}]

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "box" , dimension : { height:1 , width: .1 , length:1} , position :new THREE.Vector3(0,.05,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat , color : 0xaffbb0 , materialName:"phong" });

  rGame.utils.addObject(obj.parts[0]);
  obj.parts[0].set({geometryName : "sphere", 
    dimension : {radius:2.5} , 
    position :new THREE.Vector3(0,2.6,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/earth.jpg"],

    });

  rGame.utils.makePhysicCompound([obj.objects[0],...obj.parts]);
  obj.objects[0].set({
    mass:.5,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });

}

export function jupiter(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:2} , 
    position :new THREE.Vector3(0,2.1,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/jupiter.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:300,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });
}

export function earth(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:1.5} , 
    position :new THREE.Vector3(0,1.6,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/earth.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:220,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });
}

export function venus(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:8} , 
    position :new THREE.Vector3(0,4.1,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/venus.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:500,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });
}

export function mars(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:2.5} , 
    position :new THREE.Vector3(0,2.6,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/mars.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:200,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });
}

export function mercury(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:3.5} , 
    position :new THREE.Vector3(0,3.6,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/mercury.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:600,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });
}

export function pluto(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:1} , 
    position :new THREE.Vector3(0,1.1,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/pluto.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:2000,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });
}

export function moon(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:.8} , 
    position :new THREE.Vector3(0,1.1,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/moon.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:100,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });
}

export function sun(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:1.8} , 
    position :new THREE.Vector3(0,1.1,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/sun.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:2000,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });
}

export function eris(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:1.8} , 
    position :new THREE.Vector3(0,1.1,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/sun.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:500,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });
}

export function rotatingEarth(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{},{}];
  obj.constraints = [{}];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:1.5} , 
    position :new THREE.Vector3(0,1.6,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/earth.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:100,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });


  // static core
  rGame.utils.addObject(obj.objects[1]);
  obj.objects[1].set({geometryName : "sphere", 
    dimension : {radius:.1} , 
    position :new THREE.Vector3(0,1.6,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     //textureFileName:["/textures/earth.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[1]);
  obj.objects[1].set({
    mass:0,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });


  rGame.utils.newHingeConstraint(obj.constraints[0]);
    obj.constraints[0].axisA = new CANNON.Vec3(0,1,0);
    obj.constraints[0].axisB = new CANNON.Vec3(0,1,0);
    obj.constraints[0].set({
      bodyA:obj.objects[1] , 
      bodyB:obj.objects[0] , 
      offsetA:{x:0,y:0,z:0} , 
      offsetB:{x:0,y:0,z:0} , 
      motor:true , 
      speed:-1.0,
      active:false
    })




}
export function rotatingMars(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{},{}];
  obj.constraints = [{}];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:3} , 
    position :new THREE.Vector3(0,3.1,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/mars.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:100,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });


  // static core
  rGame.utils.addObject(obj.objects[1]);
  obj.objects[1].set({geometryName : "sphere", 
    dimension : {radius:.1} , 
    position :new THREE.Vector3(0,3.1,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     //textureFileName:["/textures/earth.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[1]);
  obj.objects[1].set({
    mass:0,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });


  rGame.utils.newHingeConstraint(obj.constraints[0]);
    obj.constraints[0].axisA = new CANNON.Vec3(0,1,0);
    obj.constraints[0].axisB = new CANNON.Vec3(0,1,0);
    obj.constraints[0].set({
      bodyA:obj.objects[1] , 
      bodyB:obj.objects[0] , 
      offsetA:{x:0,y:0,z:0} , 
      offsetB:{x:0,y:0,z:0} , 
      motor:true , 
      speed:1,
      active:false
    })




}

export function rotatingVenus(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{},{}];
  obj.constraints = [{}];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:2} , 
    position :new THREE.Vector3(0,2.1,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/venus.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:100,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });


  // static core
  rGame.utils.addObject(obj.objects[1]);
  obj.objects[1].set({geometryName : "sphere", 
    dimension : {radius:.1} , 
    position :new THREE.Vector3(0,2.1,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     //textureFileName:["/textures/earth.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[1]);
  obj.objects[1].set({
    mass:0,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });


  rGame.utils.newHingeConstraint(obj.constraints[0]);
    obj.constraints[0].axisA = new CANNON.Vec3(0,1,0);
    obj.constraints[0].axisB = new CANNON.Vec3(0,1,0);
    obj.constraints[0].set({
      bodyA:obj.objects[1] , 
      bodyB:obj.objects[0] , 
      offsetA:{x:0,y:0,z:0} , 
      offsetB:{x:0,y:0,z:0} , 
      motor:true , 
      speed:-2,
      active:false
    })




}

export function rotatingJupiter(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{},{}];
  obj.constraints = [{}];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:1.2} , 
    position :new THREE.Vector3(0,1.1,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/jupiter.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:100,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });


  // static core
  rGame.utils.addObject(obj.objects[1]);
  obj.objects[1].set({geometryName : "sphere", 
    dimension : {radius:.1} , 
    position :new THREE.Vector3(0,1.1,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     //textureFileName:["/textures/earth.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[1]);
  obj.objects[1].set({
    mass:0,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });


  rGame.utils.newHingeConstraint(obj.constraints[0]);
    obj.constraints[0].axisA = new CANNON.Vec3(0,1,0);
    obj.constraints[0].axisB = new CANNON.Vec3(0,1,0);
    obj.constraints[0].set({
      bodyA:obj.objects[1] , 
      bodyB:obj.objects[0] , 
      offsetA:{x:0,y:0,z:0} , 
      offsetB:{x:0,y:0,z:0} , 
      motor:true , 
      speed:-3,
      active:false
    })




}

export function rotatingMercury(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{},{}];
  obj.constraints = [{}];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:2.5} , 
    position :new THREE.Vector3(0,2.6,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/mercury.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:100,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });


  // static core
  rGame.utils.addObject(obj.objects[1]);
  obj.objects[1].set({geometryName : "sphere", 
    dimension : {radius:.1} , 
    position :new THREE.Vector3(0,2.6,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     //textureFileName:["/textures/earth.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[1]);
  obj.objects[1].set({
    mass:0,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });


  rGame.utils.newHingeConstraint(obj.constraints[0]);
    obj.constraints[0].axisA = new CANNON.Vec3(0,1,0);
    obj.constraints[0].axisB = new CANNON.Vec3(0,1,0);
    obj.constraints[0].set({
      bodyA:obj.objects[1] , 
      bodyB:obj.objects[0] , 
      offsetA:{x:0,y:0,z:0} , 
      offsetB:{x:0,y:0,z:0} , 
      motor:true , 
      speed:2,
      active:false
    })




}

export function rotatingHaumea(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{},{}];
  obj.constraints = [{}];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:1.3} , 
    position :new THREE.Vector3(0,1.4,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/haumea.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:100,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });


  // static core
  rGame.utils.addObject(obj.objects[1]);
  obj.objects[1].set({geometryName : "sphere", 
    dimension : {radius:.1} , 
    position :new THREE.Vector3(0,1.4,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     //textureFileName:["/textures/earth.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[1]);
  obj.objects[1].set({
    mass:0,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });


  rGame.utils.newHingeConstraint(obj.constraints[0]);
    obj.constraints[0].axisA = new CANNON.Vec3(0,1,0);
    obj.constraints[0].axisB = new CANNON.Vec3(0,1,0);
    obj.constraints[0].set({
      bodyA:obj.objects[1] , 
      bodyB:obj.objects[0] , 
      offsetA:{x:0,y:0,z:0} , 
      offsetB:{x:0,y:0,z:0} , 
      motor:true , 
      speed:4,
      active:false
    })




}

export function sunCeres(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{},{},{}];
  obj.constraints = [{},{}];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:1.5} , 
    position :new THREE.Vector3(2,1,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/sun.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:100,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });

  //
  rGame.utils.addObject(obj.objects[1]);
  obj.objects[1].set({geometryName : "sphere", 
    dimension : {radius:.7} , 
    position :new THREE.Vector3(-4,1,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/ceres.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[1]);
  obj.objects[1].set({
    mass:100,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });

  // static core
  rGame.utils.addObject(obj.objects[2]);
  obj.objects[2].set({geometryName : "sphere", 
    dimension : {radius:.4} , 
    position :new THREE.Vector3(2,1,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     //textureFileName:["/textures/earth.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[2]);
  obj.objects[2].set({
    mass:0,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });


  rGame.utils.newHingeConstraint(obj.constraints[0]);
    obj.constraints[0].axisA = new CANNON.Vec3(0,1,0);
    obj.constraints[0].axisB = new CANNON.Vec3(0,1,0);
    obj.constraints[0].set({
      bodyA:obj.objects[2] , 
      bodyB:obj.objects[1] , 
      offsetA:{x:0,y:0,z:0} , 
      offsetB:{x:6,y:0,z:0} , 
      motor:true , 
      speed:-2.0,
      active:false
    })

    rGame.utils.newHingeConstraint(obj.constraints[1]);
    obj.constraints[1].axisA = new CANNON.Vec3(0,1,0);
    obj.constraints[1].axisB = new CANNON.Vec3(0,1,0);
    obj.constraints[1].set({
      bodyA:obj.objects[0] , 
      bodyB:obj.objects[2] , 
      offsetA:{x:0,y:0,z:0} , 
      offsetB:{x:0,y:0,z:0} , 
      motor:true , 
      speed:2.0,
      active:false
    })




}

export function jupiterHaumea(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{},{},{}];
  obj.constraints = [{},{}];
  let orbit = 27;

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:12} , 
    position :new THREE.Vector3(0,12,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/jupiter.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:100,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });

  //
  rGame.utils.addObject(obj.objects[1]);
  obj.objects[1].set({geometryName : "sphere", 
    dimension : {radius:1.5} , 
    position :new THREE.Vector3(orbit,12,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/haumea.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[1]);
  obj.objects[1].set({
    mass:100,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });

  // static core
  rGame.utils.addObject(obj.objects[2]);
  obj.objects[2].set({geometryName : "sphere", 
    dimension : {radius:11} , 
    position :new THREE.Vector3(0,12,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     //textureFileName:["/textures/earth.jpg"],

    });
  rGame.utils.addPhysicBody(obj.objects[2]);
  obj.objects[2].set({
    mass:0,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });


  rGame.utils.newHingeConstraint(obj.constraints[0]);
    obj.constraints[0].axisA = new CANNON.Vec3(0,1,0);
    obj.constraints[0].axisB = new CANNON.Vec3(0,1,0);
    obj.constraints[0].set({
      bodyA:obj.objects[2] , 
      bodyB:obj.objects[1] , 
      offsetA:{x:0,y:0,z:0} , 
      offsetB:{x:-orbit,y:0,z:0} , 
      motor:true , 
      speed:-2.0,
      active:false
    })

    rGame.utils.newHingeConstraint(obj.constraints[1]);
    obj.constraints[1].axisA = new CANNON.Vec3(0,1,0);
    obj.constraints[1].axisB = new CANNON.Vec3(0,1,0);
    obj.constraints[1].set({
      bodyA:obj.objects[0] , 
      bodyB:obj.objects[2] , 
      offsetA:{x:0,y:0,z:0} , 
      offsetB:{x:0,y:0,z:0} , 
      motor:true , 
      speed:2.0,
      active:false
    })







}