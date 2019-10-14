import { roadData } from "./snake.road.data.js";

export function loadRoad(snake){
  let snakeObject = snake.getProxyLessObject;
  let roadInfo = roadData(snake);
  snake.road = roadInfo;
  snake.checkPoint = {block:0,speed:10,camera:snake.cameras.camera3};
  let width,length,tickness,position,quaternion,color,materialName,physicMaterial,
  offset,textureFileName,textureNumber,materialIndex,frontActiveBlocks,rearActiveBlocks,frontVisibleBlocks,rearVisibleBlocks;
  let vAxis = new THREE.Vector3(1,0,0);
  let hAxis = new THREE.Vector3(0,1,0);
  let initialVisibleBlocks = roadInfo[0].frontVisibleBlocks;
  for (let i=0,len=roadInfo.length;i<len;++i){
    snake.road[i].block={};
    snake.road[i].enablingObstacles = [];
    snake.road[i].disablingObstacles = [];
  }

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
    if(d.frontVisibleBlocks!==undefined){
      frontVisibleBlocks = d.frontVisibleBlocks;
    }else{
      d.frontVisibleBlocks = frontVisibleBlocks;
    }
    if(d.rearVisibleBlocks!==undefined) {
      rearVisibleBlocks = d.rearVisibleBlocks;
    }else{
      d.rearVisibleBlocks = rearVisibleBlocks;
    }


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

    if("textureFileName" in d) {
      textureFileName = d.textureFileName;
      materialIndex = d.materialIndex;
      textureNumber = undefined;
    }else{
      textureFileName = undefined;
    }

    if("textureNumber" in d) {
      textureNumber = d.textureNumber;
    }else{
      if (textureNumber===undefined && textureFileName===undefined){
        textureNumber = i-1;
      }
    }
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
    if(textureNumber!=undefined && textureFileName===undefined){
      snake.addLink(snake.road[textureNumber].block.texture,snake.road[i].block.texture);
      snake.addLink(snake.road[textureNumber].block.materialIndex,snake.road[i].block.materialIndex);

    }
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
      materialIndex,
      sleep:true,
      physicStatus:(i==0)? true:false,
      visible:false//(i<=initialVisibleBlocks)?true:false,
       });
    snake.utils.addPhysicBody(snake.road[i].block);
    snake.road[i].block.set({mass:0,allowSleep:true,sleep:true,groupName:"ground",collisionGroups:["wheel","obstacle","chassis"],
    enableCollisionCallback:true,
    collisionCallback:function(e){
      if (e.body.collisionFilterGroup == snakeObject.roadTrains[0].wheelsBodies[0].collisionFilterGroup){
        if (i>snakeObject.currentStandingBlock || snakeObject.currentStandingBlock==undefined) snake.currentStandingBlock=i;
      }
    }
  });
    //
    //obstacles
    snake.road[i].blockObstacles = [];
    let blockObstacles = snake.road[i].blockObstacles;
    if (d.obstacles!=undefined ){
      for (let obstacle of d.obstacles){
        blockObstacles.push({});
        let thisObstacle = blockObstacles[blockObstacles.length - 1];
        obstacle.build(thisObstacle , position , quaternion, obstacle.localPos, obstacle.localQuat,(i<=initialVisibleBlocks)?true:false);
        for (let object of thisObstacle.objects){
          object.iniPos = object.position.clone();
          object.iniQuat = object.quaternion.clone();
        }
        snake.road[i + obstacle.enablingDistance].enablingObstacles.push(snake.road[i].blockObstacles[blockObstacles.length - 1]);
        snake.road[i + obstacle.disablingDistance].disablingObstacles.push(snake.road[i].blockObstacles[blockObstacles.length - 1]);
      }
    }


  }
}

export function loadRoadUpdateManager(snake){
  snake.standingTime = 0;
  //snake.addFunction(currentStandingBlock);
  snake.addFunction(roadActiveBlocks);
  snake.addFunction(runPlots);
  snake.addFunction(performReset);
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
  standingTime = 0;
  let thisBlock = road[currentStandingBlock];
  if (thisBlock.checkPoint){
    checkPoint.speed  = thisBlock.checkPoint.speed;
    checkPoint.camera  = thisBlock.checkPoint.camera;
    checkPoint.block  = currentStandingBlock;

  }
  // set visible part of the road by frontVisibleBlocks and rearVisibleBlocks
  let maxAhead = currentStandingBlock + thisBlock.frontVisibleBlocks;
  let maxBehind = currentStandingBlock + thisBlock.rearVisibleBlocks;
  if (maxAhead>road.length-1) maxAhead = road.length - 1;
  if (maxBehind<0) maxBehind=0;
  // set physicaly active part of road by frontActiveBlocks and rearActiveBlocks
  let activeAhead = currentStandingBlock + thisBlock.frontActiveBlocks;
  let activeBehind = currentStandingBlock + thisBlock.rearActiveBlocks;
  if (activeAhead>road.length-1) activeAhead = road.length-1;
  if (activeBehind<0) activeBehind=0;
  // 
  for (let i=maxBehind;i<=maxAhead;++i){
    if (i>=activeBehind && i<=activeAhead){
      if (road[i].active==undefined) {
        road[i].active = true;
        blockStatus(i,true,true,false);
      }
    }else{
      if (i==maxBehind || i==maxAhead && i!=currentStandingBlock){
        blockStatus(i,false,false,true);
      }else{
        blockStatus(i,false,true,false);
      }
    }
  }
  // set physical status of obstacles on other blocks
  if (road[currentStandingBlock].enablingObstacles.length!=0 && road[currentStandingBlock].checkPoint){
    throw console.error("checkpoint block cannot be where obstacle enablig will happen");
    
  }
  for (let enablingObstacle of road[currentStandingBlock].enablingObstacles){
    obstaclesStatus(enablingObstacle , true,true,false);
  }
  for (let disablingObstacle of road[currentStandingBlock].disablingObstacles){
    obstaclesStatus(disablingObstacle , false,false,true);
  }


  return currentStandingBlock;
  function blockStatus(blockNum,physicStatus,visible,sleep){
    self.road[blockNum].block.set({
      physicStatus,
      visible,
      sleep,
      enableCollisionCallback:physicStatus

    });
    if (road[blockNum].blockObstacles){
      let obstacles = road[blockNum].blockObstacles;
      for (let obstacle of obstacles){
        obstaclesStatus(obstacle,false,visible,sleep)
      }

    }
  }

  function obstaclesStatus(obstacle,physicStatus,visible,sleep){
    for (obj of obstacle.objects){
      obj.self.set({
        sleep,
        physicStatus,
        visible,
      })
      
    }
    for (let constraint of obstacle.constraints){
      constraint.self.set({
        active:physicStatus,
      })
    }

  }
}

function performReset({newAnimationFrame}){
  let maxStandingTime=4;
  if (roadTrains[0].speed==0){
    standingTime=0;
  }else{
    standingTime+=actualInterval;
  }
  //if(standingTime>maxStandingTime) window.document.location.reload();
  if(standingTime>maxStandingTime || cheating){
    cheating = false;
    // reset blocks and obstacles
    for (let i=0,len=road.length;i<len;++i){
      road[i].active = undefined;
      road[i].plotRuned = undefined;
      self.road[i].block.set({
        physicStatus:false,
        visible:false,
        sleep:true,
        enableCollisionCallback:false,
      });
    for (let j=0;j<road[i].blockObstacles.length;++j){
      for (let constraint of road[i].blockObstacles[j].constraints){
        constraint.self.set({
          active:false
        })
      }
      for (let k=0;k<road[i].blockObstacles[j].objects.length;++k){
        let thisObject = road[i].blockObstacles[j].objects[k]
        thisObject.self.set({position:thisObject.iniPos.clone(),quaternion:thisObject.iniQuat.clone(),reset:true,physicStatus:false,visible:false});
      }

    }

    }

    // reset truck
    let localPosOnBlock = new THREE.Vector3(0,2,-7);
    let resetPos = road[checkPoint.block].position.clone();
    let resetQuat = road[checkPoint.block].quaternion
    let blockYAxis = new THREE.Vector3(0,1,0).normalize().applyQuaternion(resetQuat).normalize();
    resetQuat = new THREE.Quaternion().setFromAxisAngle(blockYAxis,Math.PI).multiply(resetQuat);

    localPosOnBlock.applyQuaternion(resetQuat);
    resetPos.add(localPosOnBlock);
    roadTrains[0].self.set({resetPos:resetPos.clone(),resetQuat,speed:0,steering:0});
    checkPoint.camera.active = true;

    // reset trailers
    for (let i=1;i<=roadTrains[0].visibleTrailers;++i){
      let towingGap=roadTrains[i].towingGap;
      let newPos = new THREE.Vector3(0,roadTrains[0].axelsVerticalFreedom,-towingGap);
      newPos.applyQuaternion(resetQuat);
      resetPos = resetPos.add(newPos)
      roadTrains[i].self.set({resetPos:resetPos.clone(),resetQuat});
    }

    roadActiveBlocks = undefined;
    self.currentStandingBlock = checkPoint.block;
  }
  return ;
}

