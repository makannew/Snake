

export function buildHeadChassis(snake , roadTrain){
    //
    let x=roadTrain.position.x , y=roadTrain.position.y , z=roadTrain.position.z;
    let ch = {lx:1 , wy:.1 , hz:8.0 , susGap:.4};
    //let wh = {r:.9,wy:.4 , clearance:.05};
    let cp = {lx:1,wy:1.5,hz:4.0}
    let ns = {lx:1,wy:.9,hz:3.0}
    let chassisWeight = 50;
    // let wheelGap = .4;
    
  
    // let ax = {r:.1,wy:ch.lx+wheelGap*2}
    // let wheelMass =1
  
    roadTrain.chassis={};
    snake.utils.addObject(roadTrain.chassis);
    roadTrain.chassis.set({geometryName : "box" , 
    dimension : { height:ch.hz , width: ch.wy , length: ch.lx} , position :{x:x,y:y-ch.susGap,z:z} , color : 0x936974 , materialName:"lambert" });

    roadTrain.chassisTop={};
    snake.utils.addObject(roadTrain.chassisTop);
    roadTrain.chassisTop.set({geometryName : "box" , 
    dimension : { height:ch.hz , width: ch.wy , length: ch.lx} , position :{x:x,y:y,z:z} , color : 0x936974 , materialName:"lambert" });
  
    // roadTrain.cockPit={}
    // snake.utils.addObject(roadTrain.cockPit);
    // roadTrain.cockPit.set({geometryName : "box" , 
    // dimension : { height:cp.hz , width: cp.wy , length: cp.lx} , position :{x:x ,y:y+ch.wy/2+cp.wy/2,z:z+ch.hz/2-ns.hz/2-cp.hz/2} , color : 0xbd69a4 , materialName:"lambert" });
  
    // roadTrain.nose={};
    // snake.utils.addObject(roadTrain.nose);
    // roadTrain.nose.set({geometryName : "box" , 
    // dimension : { height:ns.hz , width: ns.wy , length: ns.lx} , position :{x:x,y:y+ch.wy/2+ns.wy/2,z:z+ch.hz/2-ns.hz/2} , color : 0xfd69a4 , materialName:"lambert" });
  
  
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
  
    snake.utils.makePhysicCompound([roadTrain.chassis,roadTrain.chassisTop]);

    roadTrain.chassis.set({mass:chassisWeight , compoundPosition:{x:x,y:y ,z:z} });
    snake.addLink(roadTrain.chassis.compoundPosition, roadTrain.position);
  //
}
