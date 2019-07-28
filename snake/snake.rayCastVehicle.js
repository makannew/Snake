
export function loadRayCastVehicle(snake){
  let x=0 , y=-480 , z=-320;
  let ch = {lx:25 , wy:4 , hz:80};
  let wh = {r:9,wy:4 , clearance:.5};
  let cp = {lx:25,wy:40,hz:45}
  let ns = {lx:15,wy:17,hz:35}
  let wheelGap = 4;
  

  let ax = {r:1,wy:ch.lx+wheelGap*2}
  let wheelMass =.1

  snake.utils.newObject("chassis");
  snake.sceneObjects.chassis.set({geometryName : "box" , 
  dimension : { height:ch.hz , width: ch.wy , length: ch.lx} , position :{x:x,y:y,z:z} , color : 0x936974 , materialName:"phong" });

  snake.utils.newObject("cockPit");
  snake.sceneObjects.cockPit.set({geometryName : "box" , 
  dimension : { height:cp.hz , width: cp.wy , length: cp.lx} , position :{x:x ,y:y+ch.wy/2+cp.wy/2,z:z-ch.hz/2+cp.hz/2} , color : 0xbd69a4 , materialName:"phong" });

  snake.utils.newObject("nose");
  snake.sceneObjects.nose.set({geometryName : "box" , 
  dimension : { height:ns.hz , width: ns.wy , length: ns.lx} , position :{x:x,y:y+ch.wy/2+ns.wy/2,z:z-ch.hz/2+cp.hz+ns.hz/2} , color : 0xfd69a4 , materialName:"phong" });

  snake.utils.newObject("rearAxel");
  snake.sceneObjects.rearAxel.set({geometryName:"cylinder" , 
  dimension:{radiusTop:ax.r ,radiusBottom:ax.r,height:ax.wy}, 
  position:{x:x,y:y-ch.wy/2,z:z-ch.hz/2+wh.r} , 
  quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1) , -Math.PI/2),
  color:0x00ff00 , materialName:"phong" , shinines:0});

  snake.utils.newObject("frontAxel");
  snake.sceneObjects.frontAxel.set({geometryName:"cylinder" , 
  dimension:{radiusTop:ax.r ,radiusBottom:ax.r,height:ax.wy}, 
  position:{x:x,y:y-ch.wy/2,z:z+ch.hz/2-wh.r} , 
  quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1) , -Math.PI/2),
  color:0x00ff00 , materialName:"phong" , shinines:0});

  snake.utils.makePhysicCompound([snake.sceneObjects.chassis,snake.sceneObjects.cockPit,snake.sceneObjects.nose,snake.sceneObjects.rearAxel,snake.sceneObjects.frontAxel]);
  snake.sceneObjects.chassis.set({mass:2 , compoundPosition:{x:x,y:y ,z:z} });

  
  snake.utils.newObject("rearLWheel");
  snake.sceneObjects.rearLWheel.set({geometryName:"cylinder" , 
  dimension:{radiusTop:wh.r ,radiusBottom:wh.r,height:wh.wy}, 
  position:{x:x-ax.wy/2-wh.wy/2-wh.clearance,y:y-ch.wy/2,z:z-ch.hz/2+wh.r} , 
  quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1) , -Math.PI/2),
  color:0x555555 , materialName:"phong" , shinines:0});
  snake.utils.addPhysicBody(snake.sceneObjects.rearLWheel);
  snake.sceneObjects.rearLWheel.set({mass: wheelMass , physicMaterial:"wheelMaterial" });


  snake.utils.newObject("rearRWheel");
  snake.sceneObjects.rearRWheel.set({geometryName:"cylinder" , 
  dimension:{radiusTop:wh.r ,radiusBottom:wh.r,height:wh.wy}, 
  position:{x:x+ax.wy/2+wh.wy/2+wh.clearance,y:y-ch.wy/2,z:z-ch.hz/2+wh.r} , 
  quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1) , -Math.PI/2),
  color:0x555555 , materialName:"phong" , shinines:0});
  snake.utils.addPhysicBody(snake.sceneObjects.rearRWheel);
  snake.sceneObjects.rearRWheel.set({mass: wheelMass , physicMaterial:"wheelMaterial" });

  snake.utils.newObject("frontLWheel");
  snake.sceneObjects.frontLWheel.set({geometryName:"cylinder" , 
  dimension:{radiusTop:wh.r ,radiusBottom:wh.r,height:wh.wy}, 
  position:{x:x-ax.wy/2-wh.wy/2-wh.clearance,y:y-ch.wy/2,z:z+ch.hz/2-wh.r} , 
  quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1) , -Math.PI/2),
  color:0x555555 , materialName:"phong" , shinines:0});
  snake.utils.addPhysicBody(snake.sceneObjects.frontLWheel);
  snake.sceneObjects.frontLWheel.set({mass: wheelMass , physicMaterial:"wheelMaterial" });


  snake.utils.newObject("frontRWheel");
  snake.sceneObjects.frontRWheel.set({geometryName:"cylinder" , 
  dimension:{radiusTop:wh.r ,radiusBottom:wh.r,height:wh.wy}, 
  position:{x:x+ax.wy/2+wh.wy/2+wh.clearance,y:y-ch.wy/2,z:z+ch.hz/2-wh.r} , 
  quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1) , -Math.PI/2),
  color:0x555555 , materialName:"phong" , shinines:0});
  snake.utils.addPhysicBody(snake.sceneObjects.frontRWheel);
  snake.sceneObjects.frontRWheel.set({mass: wheelMass , physicMaterial:"wheelMaterial" });

  snake.utils.newRayCastVehicle("vehicle1");
  snake.vehicles.vehicle1.chassis = [snake.sceneObjects.chassis];
  snake.vehicles.vehicle1.wheels = [
    {body:snake.sceneObjects.rearLWheel, engine:0 , steering:0 , brake:0 } , 
    {body:snake.sceneObjects.rearRWheel , engine:0 , steering:0 , brake:0},
    {body:snake.sceneObjects.frontLWheel , engine:0 , steering:0 , brake:0 },
    {body:snake.sceneObjects.frontRWheel , engine:0 , steering:0 , brake:0 }];
  


}