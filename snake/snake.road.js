import { roadData } from "./snake.road.data.js";

export function loadRoad(snake){
  let roadInfo = roadData();
  snake.road = roadInfo;
  let width,length,tickness,position,quaternion,color,materialName,physicMaterial,offset,textureFileName;
  let vAxis = new THREE.Vector3(1,0,0);
  let hAxis = new THREE.Vector3(0,1,0);

  for (let i=0,len=roadInfo.length;i<len;++i){
    let d = roadInfo[i];
    if(d.width!==undefined) width = d.width;
    if(d.length!==undefined) length = d.length;
    if(d.tickness!==undefined) tickness = d.tickness;
    if(d.color!==undefined) color = d.color;
    if(d.materialName!==undefined) materialName = d.materialName;
    if(d.physicMaterial!==undefined) physicMaterial = d.physicMaterial;
    if(d.offset!==undefined) offset = d.offset;
    //if(d.textureFileName!==undefined) textureFileName = d.textureFileName;
    if("textureFileName" in d) textureFileName = d.textureFileName;

    // calculate position and quaternion relative to previous one
    if(d.position===undefined){
      let prevBlock = roadInfo[i-1];
      let prevQuat = new THREE.Quaternion(prevBlock.quaternion.x,prevBlock.quaternion.y,prevBlock.quaternion.z,prevBlock.quaternion.w);
      //let prevPos = new THREE.Vector3(prevBlock.position.x,prevBlock.position.y,prevBlock.position.z);
      let relativeQuat;
      if (d.up) relativeQuat = new THREE.Quaternion().setFromAxisAngle(vAxis, d.up);
      if (d.down) relativeQuat = new THREE.Quaternion().setFromAxisAngle(vAxis, -d.down);
      if (d.left) relativeQuat = new THREE.Quaternion().setFromAxisAngle(hAxis, d.left);
      if (d.right) relativeQuat = new THREE.Quaternion().setFromAxisAngle(hAxis, -d.right);
      if (relativeQuat!==undefined) prevQuat.multiply(relativeQuat);
      quaternion = new THREE.Quaternion(prevQuat.x,prevQuat.y,prevQuat.z,prevQuat.w);
      //

      if (d.up || d.down || d.right){
        position =  new THREE.Vector3(offset.x+ width/2,offset.y-tickness/2,offset.z-length/2).applyQuaternion(quaternion).add(prevBlock.leftCorner);
      }else{
        position =  new THREE.Vector3(offset.x-width/2,offset.y-tickness/2,offset.z-length/2).applyQuaternion(quaternion).add(prevBlock.rightCorner);
      }

    }

    if(d.position!==undefined) position = new THREE.Vector3(d.position.x,d.position.y,d.position.z);
    if(d.quaternion!==undefined) quaternion = new THREE.Quaternion(d.quaternion.x,d.quaternion.y,d.quaternion.z,d.quaternion.w);
    d.rightCorner = new THREE.Vector3(width/2,tickness/2,-length/2).applyQuaternion(quaternion).add(position);
    d.leftCorner = new THREE.Vector3(-width/2,tickness/2,-length/2).applyQuaternion(quaternion).add(position);
    d.position = position;
    d.quaternion = quaternion;

    //
    snake.road[i].block={};
    snake.utils.addObject(snake.road[i].block);
    snake.road[i].block.set({
      geometryName : "box" , 
      dimension : { height:length , width:tickness , length:width} , 
      position, 
      quaternion,
      color ,
      materialName,
      physicMaterial,
      textureFileName
       });

    snake.utils.addPhysicBody(snake.road[i].block);
    snake.road[i].block.set({mass:0,allowSleep:true,sleep:true});
  }
}
