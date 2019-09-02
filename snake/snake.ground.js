
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
    blockLoosingDelay:5000,
    minFallingDepth:-100
    
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
  snake.ground.addFunction(looseGarbageBlocks);

}

function looseGarbageBlocks({roadTrainBlocks,timeStamp}){
  for (let block of garbageBlocks){
    let t=timeStamp-block.startLoosingTime;
    if (block.color==roadTrainBlockColor) block.self.color = looseBlockColor;
    if (t>blockLoosingDelay && block.color==looseBlockColor){
      block.self.set({color:fallingBlockColor,mass:1,sleep:false});
    }
    if (block.color==fallingBlockColor&& block.body.position.y<minFallingDepth){
      block.self.set({sleep:true,physicStatus:false,visible:false})
      garbageBlocks.delete(block);
    }
  }

}
function roadTrainBlocks({roadTrains,timeStamp}){
  let result=new Set();
  for (let i=0,len=roadTrains.length;i<len;++i){
    let wheelsBodies = roadTrains[i].wheelsBodies;
    if (wheelsBodies){
      for (let j=0,len=wheelsBodies.length;j<len;++j){
        let pos = wheelsBodies[j].position;
        let blockIndex = (~~(pos.x/blockSize))+(~~(pos.z/blockSize)*groundDimension);
        if (blockIndex<blocks.length){
          result.add(blocks[blockIndex]);
        }
      }
    }
  }
  
  for (let block of result){
    if (!roadTrainBlocks.has(block)){
      if (block.color == solidBlockColor){
        block.self.set({color:roadTrainBlockColor,physicStatus:true});
      }

    }
  }
  // change blocks to roadTrain road blocks
  if (roadTrainBlocks){
    for (let block of roadTrainBlocks){
      if (!result.has(block)){
        block.startLoosingTime = timeStamp;
        garbageBlocks.add(block);
      }
      //block.self.set({color:roadTrainBlockColor,physicStatus:true});
    }
  }




  return result;
}

function getBlockByAddress(snake,i,j){
  let d = snake.ground.groundDimension;
  return snake.ground.blocks[i*d+j];
}
