import { roadData } from "./snake.road.data.js";

export function loadRoad(snake){
  let roadInfo = roadData();
  snake.road = roadInfo;
  let width,length,tickness,position,quaternion,color,materialName,physicMaterial,offset,textureFileName,frontActiveBlocks,rearActiveBlocks;
  let vAxis = new THREE.Vector3(1,0,0);
  let hAxis = new THREE.Vector3(0,1,0);

  for (let i=0,len=roadInfo.length;i<len;++i){
    let d = roadInfo[i];
    d.active = undefined;
    if(d.width!==undefined) width = d.width;
    if(d.length!==undefined) length = d.length;
    if(d.tickness!==undefined) tickness = d.tickness;
    if(d.color!==undefined) color = d.color;
    if(d.materialName!==undefined) materialName = d.materialName;
    if(d.physicMaterial!==undefined) physicMaterial = d.physicMaterial;
    if(d.offset!==undefined) offset = d.offset;
    if(d.frontActiveBlocks!==undefined) {
      frontActiveBlocks = d.frontActiveBlocks;
    }else{
      d.frontActiveBlocks=frontActiveBlocks;
    }
    if(d.rearActiveBlocks!==undefined){
      rearActiveBlocks = d.rearActiveBlocks;
    }else{
      d.rearActiveBlocks = rearActiveBlocks;
    }

    //if(d.textureFileName!==undefined) textureFileName = d.textureFileName;
    if("textureFileName" in d) textureFileName = d.textureFileName;

    // calculate position and quaternion relative to previous one
    if(d.position===undefined){
      let prevBlock = roadInfo[i-1];
      let prevQuat = new THREE.Quaternion(prevBlock.quaternion.x,prevBlock.quaternion.y,prevBlock.quaternion.z,prevBlock.quaternion.w);
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

    d.rearRightCorner = new THREE.Vector3(width/2,tickness/2,length/2).applyQuaternion(quaternion).add(position);
    d.rearLeftCorner = new THREE.Vector3(-width/2,tickness/2,length/2).applyQuaternion(quaternion).add(position);

    d.bigX = Math.max(d.rightCorner.x,d.leftCorner.x,d.rearRightCorner.x,d.rearLeftCorner.x);
    d.smallX = Math.min(d.rightCorner.x,d.leftCorner.x,d.rearRightCorner.x,d.rearLeftCorner.x);

    d.bigZ = Math.max(d.rightCorner.z,d.leftCorner.z,d.rearRightCorner.z,d.rearLeftCorner.z);
    d.smallZ = Math.min(d.rightCorner.z,d.leftCorner.z,d.rearRightCorner.z,d.rearLeftCorner.z);




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
      textureFileName,
      sleep:true,
      physicStatus:(i==0)? true:false,
      visible:true,
       });

    snake.utils.addPhysicBody(snake.road[i].block);
    snake.road[i].block.set({mass:0,allowSleep:true,sleep:true,groupName:"ground",collisionGroups:["wheel","obstacle","chassis"]});
    //
    //obstacles
    snake.road[i].blockObstacles = [];
    let blockObstacles = snake.road[i].blockObstacles;
    if (d.obstacles!=undefined ){
      for (let obstacle of d.obstacles){
        blockObstacles.push({});
        obstacle.build(blockObstacles[blockObstacles.length - 1] , position , quaternion, obstacle.localPos, obstacle.localQuat);
      }
    }


  }
}

export function loadRoadUpdateManager(snake){
  snake.addFunction(currentStandingBlock);
  snake.addFunction(roadActiveBlocks);
  snake.addFunction(runPlots);
}

function runPlots({currentStandingBlock}){
  if (currentStandingBlock==runPlots) return currentStandingBlock;
  let thisBlock = road[currentStandingBlock];
  if (thisBlock.plot && thisBlock.plotRuned==undefined){
    thisBlock.plotRuned = true;
    thisBlock.plot(self);
  }
  return currentStandingBlock
}

function roadActiveBlocks({currentStandingBlock}){
  if (currentStandingBlock==roadActiveBlocks) return currentStandingBlock;
  let thisBlock = road[currentStandingBlock];
  let maxAhead = currentStandingBlock + 10;
  let maxBehind = currentStandingBlock - 4;
  if (maxAhead>road.length-1) maxAhead = road.length-1;
  if (maxBehind<0) maxBehind=0;
  //
  let activeAhead = currentStandingBlock + thisBlock.frontActiveBlocks;
  let activeBehind = currentStandingBlock - thisBlock.rearActiveBlocks;
  if (activeAhead>road.length-1) activeAhead = road.length-1;
  if (activeBehind<0) activeBehind=0;
  
  for (let i=maxBehind;i<=maxAhead;++i){
    if (i>=activeBehind && i<=activeAhead){
      if (road[i].active==undefined) {
        road[i].active = true;
        enable(i);
      }
    }else{
      if (road[i].active) {
        disable(i);
      }
    }
  }


  return currentStandingBlock;
  function enable(blockNum){
    self.road[blockNum].block.set({
      physicStatus:true,
    });
    if (road[blockNum].blockObstacles){
      let obstacles = road[blockNum].blockObstacles;
      for (let obstacle of obstacles){
        for (obj of obstacle.objects){
          obj.self.set({
            sleep:false,
            physicStatus:true,
          })
        }
      }

    }
  }

  function disable(blockNum){
    self.road[blockNum].block.set({
      physicStatus:false,
    })
    if (road[blockNum].blockObstacles){
      let obstacles = road[blockNum].blockObstacles;
      for (let obstacle of obstacles){
        for (obj of obstacle.objects){
          obj.self.set({
            sleep:true,
            physicStatus:false,
            visible:true,
          })
        }
      }
    }
  }

}

function currentStandingBlock({newAnimationFrame}){
  let x = roadTrains[0].position.x;
  let z = roadTrains[0].position.z;
  let u= (currentStandingBlock==undefined) ? 0:currentStandingBlock;
  let r = road[u];

  if(x>=r.smallX && x<=r.bigX && z>=r.smallZ && z<=r.bigZ) return u;

  let max = road.length-1;
  let d=u;
  ++u;
  if (u>max) u=max;
  --d;
  if (d<0) d=0;

  r = road[u];
  if(x>=r.smallX && x<=r.bigX && z>=r.smallZ && z<=r.bigZ) return u;

  r = road[d];
  if(x>=r.smallX && x<=r.bigX && z>=r.smallZ && z<=r.bigZ) return d;

  return 0;
}
