
export function barrierA(obj , pos , quat , localPos=new THREE.Vector3(0,0,0) , localQuat=new THREE.Quaternion(0,0,0,1)){
  let snake = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(localQuat.x,localQuat.y,localQuat.z,localQuat.w);

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];
  obj.parts = [{},{},{},{}]

  snake.utils.addObject(obj.objects[0]);
  obj.objects[0].set({geometryName : "box" , dimension : { height:.1 , width: .8 , length:8} , position :new THREE.Vector3(0,2,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat , color : 0xaffbb0 , materialName:"phong" });
  //snake.utils.addPhysicBody(obj.objects[0]);

  snake.utils.addObject(obj.parts[0]);
  obj.parts[0].set({geometryName : "box" , dimension : { height:.1 , width: 1.4, length:.8} , position :new THREE.Vector3(-3,.9,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat , color : 0xaffbb0 , materialName:"phong" });
  //snake.utils.addPhysicBody(obj.objects[1]);
  //obj.objects[1].set({mass:2,allowSleep:true,groupName:"obstacle",collisionGroups:["wheel","ground","chassis"]});

  snake.utils.addObject(obj.parts[1]);
  obj.parts[1].set({geometryName : "box" , dimension : { height:.1 , width: 1.4 , length:.8} , position :new THREE.Vector3(3,.9,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat , color : 0xaffbb0 , materialName:"phong" });
  //snake.utils.addPhysicBody(obj.objects[2]);
  //obj.objects[2].set({mass:2,allowSleep:true,groupName:"obstacle",collisionGroups:["wheel","ground","chassis"]});

  snake.utils.addObject(obj.parts[2]);
  obj.parts[2].set({geometryName : "box" , dimension : { height:.8 , width: .2 , length:.8} , position :new THREE.Vector3(-3,.1,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat , color : 0xaffbb0 , materialName:"phong" });
  //.utils.addPhysicBody(obj.objects[3]);
  //obj.objects[3].set({mass:2,allowSleep:true,groupName:"obstacle",collisionGroups:["wheel","ground","chassis"]});

  snake.utils.addObject(obj.parts[3]);
  obj.parts[3].set({geometryName : "box" , dimension : { height:.8 , width: .2 , length:.8} , position :new THREE.Vector3(3,.1,0).add(localPos).applyQuaternion(quat).add(pos),quaternion:thisQuat , color : 0xaffbb0 , materialName:"phong" });
  //snake.utils.addPhysicBody(obj.objects[4]);
  //obj.objects[4].set({mass:2,allowSleep:true,groupName:"obstacle",collisionGroups:["wheel","ground","chassis"]});

  snake.utils.makePhysicCompound([obj.objects[0],...obj.parts]);
  obj.objects[0].set({
    mass:2,
    allowSleep:true,
    sleep:true,
    physicStatus:false,
    visible:true,
    groupName:"obstacle",
    collisionGroups:["wheel","ground","chassis","obstacle"], 
    physicMaterial:"objectMaterial"
  });
  // snake.utils.newLockConstraint(obj.constraints[0]);
  // obj.constraints[0].maxForce = 1e6;
  // obj.constraints[0].bodies = [obj.objects[0] , obj.objects[1] , obj.objects[2] , obj.objects[3] , obj.objects[4]];

}