
export function loadField(snake){
  let x=0,y=-102.4/2,z=0;
  snake.fieldObjects = [];
  let objs = snake.fieldObjects;
  objs.push({});
  let obj = objs[objs.length - 1];
  snake.utils.addObject(obj);
  obj.set({
    geometryName : "box" , 
    dimension : { height:30 , width: .5 , length:20} , 
    quaternion:new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),Math.PI/7),
    position :{x:x+10,y:y+5,z:z-10} , 
    color : 0xaffbb0 , 
    materialName:"phong" ,
    //quaternion:quat,
    mass:0,
    allowSleep:true
  });
  snake.utils.addPhysicBody(obj);

}