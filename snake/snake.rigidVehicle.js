
export function loadRigidVehicle(snake){
  let x=0 , y=-480 , z=-320;
  let ch = {l:80 , w:25 , h:5};
  let wh = {r:9,w:4};
  let cp = {l:40,w:25,h:30}
  let ns = {l:40,w:15,h:15}
  let wheelGap = 1;

  let ax = {r:.5,l:ch.w+wh.w+wheelGap}
  let wheelMass =10

  snake.utils.newObject("chassis");
  snake.sceneObjects.chassis.set({geometryName : "box" , 
  dimension : { height:ch.h , width: ch.w , length: ch.l} , position :{x:x,y:y,z:z} , color : 0x936974 , materialName:"phong" });

  snake.utils.newObject("cockPit");
  snake.sceneObjects.cockPit.set({geometryName : "box" , 
  dimension : { height:cp.h , width: cp.w , length: cp.l} , position :{x:x+ch.l/2-cp.l/2,y:y,z:z+ch.h/2+cp.h/2} , color : 0xbd69a4 , materialName:"phong" });

  snake.utils.newObject("nose");
  snake.sceneObjects.nose.set({geometryName : "box" , 
  dimension : { height:ns.h , width: ns.w , length: ns.l} , position :{x:x-ch.l/2+ns.l/2,y:y,z:z+ch.h/2+ns.h/2} , color : 0xfd69a4 , materialName:"phong" });

  snake.utils.newObject("rearAxel");
  snake.sceneObjects.rearAxel.set({geometryName:"cylinder" , 
  dimension:{radiusTop:ax.r ,radiusBottom:ax.r,height:ax.l}, 
  position:{x:snake.sceneObjects.chassis.position.x+ch.l/2-wh.r,y:snake.sceneObjects.chassis.position.y,z:snake.sceneObjects.chassis.position.z-ch.h/2} , 
  color:0x00ff00 , materialName:"phong" , shinines:0});

  snake.utils.makePhysicCompound([snake.sceneObjects.chassis,snake.sceneObjects.cockPit,snake.sceneObjects.nose,snake.sceneObjects.rearAxel]);
  snake.sceneObjects.chassis.set({mass:50 , compoundPosition:{x:x,y:y ,z:z}});

  
  snake.utils.newObject("rearLWheel");
  snake.sceneObjects.rearLWheel.set({geometryName:"cylinder" , 
  dimension:{radiusTop:wh.r ,radiusBottom:wh.r,height:wh.w}, 
  position:{x:snake.sceneObjects.chassis.position.x+ch.l/2-wh.r,y:snake.sceneObjects.chassis.position.y-ch.w/2-wh.w-wheelGap,z:snake.sceneObjects.chassis.position.z-ch.h/2} , 
  color:0x333333 , materialName:"phong" , shinines:0});
  snake.utils.addPhysicBody(snake.sceneObjects.rearLWheel);
  snake.sceneObjects.rearLWheel.set({mass: wheelMass , physicMaterial:"wheelMaterial" });


  snake.utils.newObject("rearRWheel");
  snake.sceneObjects.rearRWheel.set({geometryName:"cylinder" , 
  dimension:{radiusTop:wh.r ,radiusBottom:wh.r,height:wh.w}, 
  position:{x:snake.sceneObjects.chassis.position.x+ch.l/2-wh.r,y:snake.sceneObjects.chassis.position.y+ch.w/2+wh.w+wheelGap,z:snake.sceneObjects.chassis.position.z-ch.h/2} , 
  color:0x333333 , materialName:"phong" , shinines:0});
  snake.utils.addPhysicBody(snake.sceneObjects.rearRWheel);
  snake.sceneObjects.rearRWheel.set({mass: wheelMass , physicMaterial:"wheelMaterial" });

  snake.utils.newObject("frontLWheel");
  snake.sceneObjects.frontLWheel.set({geometryName:"cylinder" , 
  dimension:{radiusTop:wh.r ,radiusBottom:wh.r,height:wh.w}, 
  position:{x:snake.sceneObjects.chassis.position.x-ch.l/2+wh.r,y:snake.sceneObjects.chassis.position.y-ch.w/2-wh.w-wheelGap,z:snake.sceneObjects.chassis.position.z-ch.h/2} , 
  color:0x333333 , materialName:"phong" , shinines:0});
  snake.utils.addPhysicBody(snake.sceneObjects.frontLWheel);
  snake.sceneObjects.frontLWheel.set({mass: wheelMass , physicMaterial:"wheelMaterial" });


  snake.utils.newObject("frontRWheel");
  snake.sceneObjects.frontRWheel.set({geometryName:"cylinder" , 
  dimension:{radiusTop:wh.r ,radiusBottom:wh.r,height:wh.w}, 
  position:{x:snake.sceneObjects.chassis.position.x-ch.l/2+wh.r,y:snake.sceneObjects.chassis.position.y+ch.w/2+wh.w+wheelGap,z:snake.sceneObjects.chassis.position.z-ch.h/2} , 
  color:0x333333 , materialName:"phong" , shinines:0});
  snake.utils.addPhysicBody(snake.sceneObjects.frontRWheel);
  snake.sceneObjects.frontRWheel.set({mass: wheelMass , physicMaterial:"wheelMaterial" });

  snake.utils.newRigidVehicle("vehicle1");
  snake.vehicles.vehicle1.chassis = [snake.sceneObjects.chassis];
  snake.vehicles.vehicle1.wheels = [
    {body:snake.sceneObjects.rearLWheel, axis: new CANNON.Vec3(0, 1, 0) , direction:new CANNON.Vec3(0, 0, -1) , engine:true , steering:false, leftHand:true} , 
    {body:snake.sceneObjects.rearRWheel , axis: new CANNON.Vec3(0, 1, 0) , direction:new CANNON.Vec3(0, 0, -1), engine:true , steering:false , leftHand:false},
    {body:snake.sceneObjects.frontLWheel , axis: new CANNON.Vec3(0, 1, 0) , direction:new CANNON.Vec3(0, 0, -1), engine:false , steering:true , leftHand:true},
    {body:snake.sceneObjects.frontRWheel , axis: new CANNON.Vec3(0, 1, 0) , direction:new CANNON.Vec3(0, 0, -1), engine:false , steering:true, leftHand:false}];
  
  snake.vehicles.vehicle1.quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0).normalize() , -Math.PI/4);
  snake.vehicles.vehicle1.wheelSpeed = 20;
  snake.vehicles.vehicle1.wheelForce = 200;

}