
export function loadDrawLine(snake){
  snake.barriers =[];
  snake.addFunction(updateDrawLine);

}

function updateDrawLine ({newAnimationFrame}){
    let lPos =new THREE.Vector3(0,0,-8,);
    let minDis = 7;
    let quat = new THREE.Quaternion(car.quaternion.x,car.quaternion.y,car.quaternion.z,car.quaternion.w);
    lPos.applyQuaternion(quat);
    let bPos = new THREE.Vector3(car.position.x,car.position.y,car.position.z);
    let makeNew = false;
    bPos.add(lPos);

    if (barriers.length>0){
      let prevPos = barriers[barriers.length - 1].position;
      prevPos = new THREE.Vector3(prevPos.x,bPos.y,prevPos.z);
      if (bPos.distanceTo(prevPos)>minDis){
        makeNew = true;

      }

    }else{
      makeNew = true;
    }

    if (makeNew){
      bPos.y=-49
      barriers.push({});
      let barrier = self.barriers[barriers.length - 1];
      self.utils.addObject(barrier);
      barrier.set({
        geometryName : "box" , 
        dimension : { height:4 , width: 1 , length:.4} , 
        position :bPos , 
        color : 0xaffbb0 , 
        materialName:"phong" ,
        quaternion:quat,
        mass:10,
        allowSleep:true
      });
      self.utils.addPhysicBody(barrier);
    
    }

}

