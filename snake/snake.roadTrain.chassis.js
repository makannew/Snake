

export function buildHeadChassis(snake , roadTrain){
    //
    let x=roadTrain.position.x , y=roadTrain.position.y , z=roadTrain.position.z;
    let ch = {lx:2.5 , wy:.4 , hz:8.0};
    let wh = {r:.9,wy:.4 , clearance:.05};
    let cp = {lx:2.5,wy:4.0,hz:4.5}
    let ns = {lx:2.5,wy:2.0,hz:3.5}
    let wheelGap = .4;
    
  
    let ax = {r:.1,wy:ch.lx+wheelGap*2}
    let wheelMass =.01
  
    roadTrain.chassis={};
    snake.utils.addObject(roadTrain.chassis);
    roadTrain.chassis.set({geometryName : "box" , 
    dimension : { height:ch.hz , width: ch.wy , length: ch.lx} , position :{x:x,y:y,z:z} , color : 0x936974 , materialName:"phong" });
  
    roadTrain.cockPit={}
    snake.utils.addObject(roadTrain.cockPit);
    roadTrain.cockPit.set({geometryName : "box" , 
    dimension : { height:cp.hz , width: cp.wy , length: cp.lx} , position :{x:x ,y:y+ch.wy/2+cp.wy/2,z:z-ch.hz/2+cp.hz/2} , color : 0xbd69a4 , materialName:"phong" });
  
    roadTrain.nose={};
    snake.utils.addObject(roadTrain.nose);
    roadTrain.nose.set({geometryName : "box" , 
    dimension : { height:ns.hz , width: ns.wy , length: ns.lx} , position :{x:x,y:y+ch.wy/2+ns.wy/2,z:z-ch.hz/2+cp.hz+ns.hz/2} , color : 0xfd69a4 , materialName:"phong" });
  
  
    // snake.sceneObjects.rearAxel={};
    // snake.utils.addObject(snake.sceneObjects.rearAxel);
    // snake.sceneObjects.rearAxel.set({geometryName:"cylinder" , 
    // dimension:{radiusTop:ax.r ,radiusBottom:ax.r,height:ax.wy}, 
    // position:{x:x,y:y-ax.wy/2,z:z-ch.hz/2+wh.r} , 
    // quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1) , -Math.PI/2),
    // color:0x00ff00 , materialName:"phong" , shinines:0});
  
    // snake.sceneObjects.frontAxel={};
    // snake.utils.addObject(snake.sceneObjects.frontAxel);
    // snake.sceneObjects.frontAxel.set({geometryName:"cylinder" , 
    // dimension:{radiusTop:ax.r ,radiusBottom:ax.r,height:ax.wy}, 
    // position:{x:x,y:y-ax.wy/2,z:z+ch.hz/2-wh.r} , 
    // quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1) , -Math.PI/2),
    // color:0x00ff00 , materialName:"phong" , shinines:0});
  
    snake.utils.makePhysicCompound([roadTrain.chassis,roadTrain.cockPit,roadTrain.nose]);
    roadTrain.chassis.set({mass:40 , compoundPosition:{x:x,y:y ,z:z} });
  //
}
