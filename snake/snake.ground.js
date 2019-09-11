
export function loadGround(snake){
  snake.ground ={
    blockSize: 20,
    groundDimension:20,
    yHeight:-52,
    thickness:2,
    blocks:[],
    solidBlockColor:0x2a7ffb ,
    roadTrainBlockColor:0xffff00,
    looseBlockColor:0x00ffff,
    fallingBlockColor:0xffffff,
    blockGap:.2,
    garbageBlocks:new Set(),
    garbageDelay:3000,
    standLeftBlocks:new Set(),
    standLeftDelay:3000,
    minFallingDepth:-200
    
  };
  snake.ground.self=snake.ground;

  
  let blockSize = snake.ground.blockSize;
  let groundDimension = snake.ground.groundDimension;
  let color = snake.ground.solidBlockColor;
  let thickness = snake.ground.thickness;
  let blockBoxSize = blockSize-snake.ground.blockGap;
  // build ground blocks
  let z=blockSize/2;
  let y=snake.ground.yHeight;
  for (let i=0;i<groundDimension;++i){
    let x=blockSize/2;
    for(let j=0;j<groundDimension;++j){
      snake.ground.blocks.push({});
      let block = snake.ground.blocks[snake.ground.blocks.length-1];
      snake.utils.addObject(block);
      block.set({
        geometryName : "box" , 
        dimension : { height:blockBoxSize , width: thickness , length:blockBoxSize} , 
        position :{x,y,z} , 
        color, 
        materialName:"phong",
        physicMaterial:"groundMaterial",
        sleep:true,// means not updating with timeStamp
        physicStatus:false,// means removed from cannon world temporaryly
        mass:0
      });
      snake.utils.addPhysicBody(block);
      x+=blockSize;
    }
    z+=blockSize;
  }
  // update ground
  snake.addLink(snake.roadTrains, snake.ground.roadTrains);
  snake.addLink(snake.timeStamp, snake.ground.timeStamp);

  snake.ground.addFunction(roadTrainBlocks);
  snake.ground.addFunction(manageStandLeftBlocks);
  snake.ground.addFunction(manageGarbageBlocks);


}

function manageGarbageBlocks({roadTrainBlocks,timeStamp}){
  let removeList=[];
  for (let block of garbageBlocks){
    if (timeStamp-block.startLoosingTime>garbageDelay && !block.blockIsFalling){
      block.self.set({mass:1,sleep:false, blockIsFalling:true});

    }
    if(block.blockIsFalling && block.body.position.y<minFallingDepth){
      block.self.set({sleep:true,physicStatus:false,visible:false})
      removeList.push(block)
    }
  }
  for (let block of removeList){
    garbageBlocks.delete(block);

  }

}

function manageStandLeftBlocks({roadTrainBlocks, timeStamp}){
  let removeList=[];
  for (let block of standLeftBlocks){
    if (timeStamp-block.standTimeStamp>standLeftDelay && block.color==roadTrainBlockColor){
      block.self.set({color:looseBlockColor,sleep:true,physicStatus:false});
      removeList.push(block);
    }
  }
  for (let block of removeList){
    standLeftBlocks.delete(block);
  }
}
function roadTrainBlocks({roadTrains,timeStamp}){
  let result=new Set();
  // find all blocks which roadTrain stands on it
  for (let i=0,len=roadTrains.length;i<len;++i){
    let wheelsBodies = roadTrains[i].wheelsBodies;
    if (wheelsBodies){
      for (let j=0,len=wheelsBodies.length;j<len;++j){
        let thisWheel = wheelsBodies[j];
        if (thisWheel){
          let pos = thisWheel.position;
          let blockIndex = (~~(pos.x/blockSize))+(~~(pos.z/blockSize)*groundDimension);
          if (blockIndex<blocks.length){
            result.add(blocks[blockIndex]);
          }
        }

      }
    }
  }
  
  for (let block of result){
      if (block.color==roadTrainBlockColor || block.color==solidBlockColor){
        if (!block.standTimeStamp){
          standLeftBlocks.add(block);
          block.self.set({color:roadTrainBlockColor,physicStatus:true});
        }
          block.standTimeStamp = timeStamp;
      }
      if (block.color==looseBlockColor && !block.startLoosingTime){
        block.startLoosingTime = timeStamp;
        block.self.set({physicStatus:true});

        garbageBlocks.add(block);
      }
  }

  return result;
}
