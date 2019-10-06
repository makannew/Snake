
export function barrierA(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let snake = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];
  obj.parts = [{},{},{},{}]

  snake.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName : "box" ,
    dimension : { height:.1 , width: .8 , length:8} , 
    position :new THREE.Vector3(0,2,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat , 
    textureFileName:["/textures/barrierSide.png"],
    color : 0xffffff , 
    materialName:"basic" 
  });
  //snake.utils.addPhysicBody(obj.objects[0]);

  snake.utils.addObject(obj.parts[0]);
  obj.parts[0].set({geometryName : "box" , textureFileName:["/textures/barrierStand.png"],dimension : { height:.1 , width: 1.4, length:.8} , position :new THREE.Vector3(-3,.9,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat , materialName:"phong" });
  //snake.utils.addPhysicBody(obj.objects[1]);
  //obj.objects[1].set({mass:2,allowSleep:true,groupName:"obstacle",collisionGroups:["wheel","ground","chassis"]});

  snake.utils.addObject(obj.parts[1]);
  obj.parts[1].set({geometryName : "box" , textureFileName:["/textures/barrierStand.png"],dimension : { height:.1 , width: 1.4 , length:.8} , position :new THREE.Vector3(3,.9,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat  , materialName:"phong" });
  //snake.utils.addPhysicBody(obj.objects[2]);
  //obj.objects[2].set({mass:2,allowSleep:true,groupName:"obstacle",collisionGroups:["wheel","ground","chassis"]});

  snake.utils.addObject(obj.parts[2]);
  obj.parts[2].set({geometryName : "box" ,textureFileName:["/textures/barrierStand.png"], dimension : { height:.8 , width: .2 , length:.8} , position :new THREE.Vector3(-3,.1,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat  , materialName:"phong" });
  //.utils.addPhysicBody(obj.objects[3]);
  //obj.objects[3].set({mass:2,allowSleep:true,groupName:"obstacle",collisionGroups:["wheel","ground","chassis"]});

  snake.utils.addObject(obj.parts[3]);
  obj.parts[3].set({geometryName : "box" ,textureFileName:["/textures/barrierStand.png"], dimension : { height:.8 , width: .2 , length:.8} , position :new THREE.Vector3(3,.1,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat  , materialName:"phong" });
  //snake.utils.addPhysicBody(obj.objects[4]);
  //obj.objects[4].set({mass:2,allowSleep:true,groupName:"obstacle",collisionGroups:["wheel","ground","chassis"]});

  snake.utils.makePhysicCompound([obj.objects[0],...obj.parts]);
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
  // snake.utils.newLockConstraint(obj.constraints[0]);
  // obj.constraints[0].maxForce = 1e6;
  // obj.constraints[0].bodies = [obj.objects[0] , obj.objects[1] , obj.objects[2] , obj.objects[3] , obj.objects[4]];

}

export function coneBarrier(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1) , visible){
  let snake = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];
  obj.parts = [{},{}]

  snake.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "box" , 
  dimension : { height:1 , width: .1 , length:1} , 
  position :new THREE.Vector3(0,.05,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat ,
   color : 0xffffff , 
   textureFileName:["/textures/coneBaseSide.png","/textures/coneBaseTop.png","/textures/coneBaseBottom.png"],
   materialIndex:[0,0,0,0,1,1,2,2,2,2,0,0],
   materialName:"basic" 
  });

  snake.utils.addObject(obj.parts[0]);
  obj.parts[0].set({geometryName : "cylinder" , 
    dimension : {radiusTop:0.04,radiusBottom:.45,height:1.5} , 
    position :new THREE.Vector3(0,.8,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/coneTop.png","/textures/coneSide.png"],
     materialIndex:[0,1,0],


    });
//.set({geometryName:"cylinder" , dimension:{radiusTop:.1,radiusBottom:.5,height:1.5}, position:{x:9.0,y:-48.0,z:-32.0} , color:0x1f11ff , materialName:"phong" , shinines:0})

  snake.utils.makePhysicCompound([obj.objects[0],...obj.parts]);
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
  let snake = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];
  obj.parts = [{},{}]

  snake.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "box" , dimension : { height:1 , width: .1 , length:1} , position :new THREE.Vector3(0,.05,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat , color : 0xaffbb0 , materialName:"phong" });

  snake.utils.addObject(obj.parts[0]);
  obj.parts[0].set({geometryName : "sphere", 
    dimension : {radius:2.5} , 
    position :new THREE.Vector3(0,2.6,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/earth.jpg"],

    });

  snake.utils.makePhysicCompound([obj.objects[0],...obj.parts]);
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
  let snake = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  snake.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:2} , 
    position :new THREE.Vector3(0,2.1,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/jupiter.jpg"],

    });
  snake.utils.addPhysicBody(obj.objects[0]);
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

export function earth(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1), visible){
  let snake = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  snake.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:1.5} , 
    position :new THREE.Vector3(0,1.6,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/earth.jpg"],

    });
  snake.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:20,
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
  let snake = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  snake.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:2.5} , 
    position :new THREE.Vector3(0,2.6,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/mars.jpg"],

    });
  snake.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:20,
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
  let snake = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  snake.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:3.5} , 
    position :new THREE.Vector3(0,3.6,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/mercury.jpg"],

    });
  snake.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass:20,
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
  let snake = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  snake.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "sphere", 
    dimension : {radius:1} , 
    position :new THREE.Vector3(0,1.1,0).add(localPos).applyQuaternion(quat).add(pos),
    quaternion:thisQuat ,
     color : 0xaffffff , 
     materialName:"basic" ,
     textureFileName:["/textures/pluto.jpg"],

    });
  snake.utils.addPhysicBody(obj.objects[0]);
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