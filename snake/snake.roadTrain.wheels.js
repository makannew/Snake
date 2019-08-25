
export function buildHeadWheels(snake , roadTrain){
  let x=roadTrain.position.x , y=roadTrain.position.y - .4, z=roadTrain.position.z;
  //let wh = {r:.9,wy:.4 , ax:4.0 ,sx:1.5,sy:.1,sz:.1 , sg:1.1 , gapy:.2};
  let wh = {r:.65,wy:.3 , ax:2.0 ,sx:.7,sy:.1,sz:.1 , sg:.50 , gapy:.2};

  let axel = {front:3.1, midle:-1.9,rear:-3.5}
  let frontStiffness = 350;
  let rearStiffness = 200;
  let frontDamping = 30;
  let rearDamping =20;
  let frontLength = .8;
  let rearLength = .8;


  buildWeel(snake,roadTrain,wh , x+wh.ax/2,y,z+axel.rear , Math.PI/2 , true,false,true ,rearStiffness,rearDamping,rearLength);
  buildWeel(snake,roadTrain,wh , x+wh.ax/2,y,z+axel.midle , Math.PI/2 ,true,false,true,rearStiffness,rearDamping,rearLength);

  buildWeel(snake,roadTrain,wh , x-wh.ax/2,y,z+axel.rear , -Math.PI/2,false,false,true,rearStiffness,rearDamping,rearLength);
  buildWeel(snake,roadTrain,wh , x-wh.ax/2,y,z+axel.midle , -Math.PI/2,false,false,true,rearStiffness,rearDamping,rearLength);

  buildWeel(snake,roadTrain,wh , x+wh.ax/2,y,z+axel.front , Math.PI/2,true,true,false,frontStiffness,frontDamping,frontLength);

  buildWeel(snake,roadTrain,wh , x-wh.ax/2,y,z+axel.front , -Math.PI/2,false,true,false,frontStiffness,frontDamping,frontLength);



}

function buildWeel(snake, roadTrain,wh , x,y,z, rotation , leftSide, steering , drive , stiffness , damping , springLenght){
  let wheels = roadTrain.wheels;
  wheels.push({});
  let wheel = wheels[wheels.length - 1];
  snake.utils.addObject(wheel);
  wheel.set({geometryName:"cylinder" , dimension:{radiusTop:wh.r,radiusBottom:wh.r,height:wh.wy}, position:{x:x,y:y,z:z} , color:0x777777 , materialName:"lambert" , shinines:0});
  wheel.quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1), rotation);
  snake.utils.addPhysicBody(wheel);
  wheel.set({physicMaterial:"wheelMaterial" , mass:5 , wheelLeft:leftSide , wheelSteering:steering , driving:drive , stiffness , damping , springLenght});

  // build suspension
  let suspensions = roadTrain.suspensions;
  let gapx;
  if (leftSide){
    gapx = wh.sg;
  } else{
    gapx = -wh.sg;
  }
  suspensions.push({});
  let suspension = suspensions[suspensions.length - 1];
  snake.utils.addObject(suspension);
  suspension.set({geometryName:"box" , dimension:{ height:wh.sz , width: wh.sy , length: wh.sx}, position:{x:x-gapx,y:y+wh.gapy,z:z} , color:0x777777 , materialName:"lambert" , shinines:0});
  snake.utils.addPhysicBody(suspension);
  suspension.set({physicMaterial:"objectMaterial" , mass:10});

}