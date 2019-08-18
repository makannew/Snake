
export function buildHeadWheels(snake , roadTrain){
  let x=roadTrain.position.x , y=roadTrain.position.y - 4, z=roadTrain.position.z;
  let wh = {r:9,wy:4 , ax:45};


  buildWeel(snake,roadTrain.wheels,wh , x+wh.ax/2,y,z-50 , Math.PI/2 , true,false);
  buildWeel(snake,roadTrain.wheels,wh , x+wh.ax/2,y,z-30 , Math.PI/2 ,true,false);

  buildWeel(snake,roadTrain.wheels,wh , x-wh.ax/2,y,z-50 , -Math.PI/2,false,false);
  buildWeel(snake,roadTrain.wheels,wh , x-wh.ax/2,y,z-30 , -Math.PI/2,false,false);

  buildWeel(snake,roadTrain.wheels,wh , x+wh.ax/2,y,z+30 , Math.PI/2,true,true);

  buildWeel(snake,roadTrain.wheels,wh , x-wh.ax/2,y,z+30 , -Math.PI/2,false,true);



}

function buildWeel(snake, wheels,wh , x,y,z, rotation , side, steering){
  wheels.push({});
  let wheel = wheels[wheels.length - 1];
  snake.utils.addObject(wheel);
  wheel.set({geometryName:"cylinder" , dimension:{radiusTop:wh.r,radiusBottom:wh.r,height:wh.wy}, position:{x:x,y:y,z:z} , color:0x777777 , materialName:"lambert" , shinines:0});
  wheel.quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1), rotation);
  snake.utils.addPhysicBody(wheel);
  wheel.set({physicMaterial:"wheelMaterial" , mass:10 , wheelLeft:side , wheelSteering:steering});

}