import { barrierA } from "./snake.road.obstacles.js";

export function roadData(){
  
  let slope = Math.PI/16;
  let result = [
    {width:20,
      length:30,
      tickness:.8,
      position:{x:0,y:-511.5,z:20},
      quaternion:{x:0,y:0,z:0,w:1},
      up:slope,
      color:0xaffbb0,
      materialName:"lambert",
      physicMaterial:"groundMaterial",
      offset:{x:0,y:0,z:0},
      textureFileName:"/characters/0.png",
      frontActiveBlocks:4,
      rearActiveBlocks:2
    },
    {plot:(snake)=>{snake.roadTrains[0].speed = 10}},

    {
      up:slope,
      color:0x00ff00,
      obstacles:[{build:barrierA , localPos:{x:4,y:.4,z:10}},{build:barrierA , localPos:{x:4,y:.4,z:-10}}],
    },
    {color:0x0000ff},


    {left:slope*3,color:0xff0000,offset:{x:0,y:-.05,z:0}},
    {right:slope*2,color:0x00ff00},
    {right:slope*2,color:0xffffff},

    {plot:(snake)=>{if(snake.framesInterval<40)++snake.roadTrains[0].visibleTrailers;}},

    {right:slope*2},
    {right:slope*2},

    {right:slope*2,
      obstacles:[{build:barrierA , localPos:{x:4,y:.4,z:10}},{build:barrierA , localPos:{x:4,y:.4,z:-10}}],

    },
    {up:slope},
    {left:slope*2},
    {up:slope},
    {},
    {},
    {},
    {},

    {up:slope},
    {},
    {},
    {},

    {down:slope},
    {down:slope},
    {down:slope},
    {down:slope},
    {down:slope},
    {down:slope},
    {down:slope},

    {},
    {},
    {},
    {up:slope*2},
    {up:slope*2},
    {up:slope*2},

    
    {left:slope},
    {left:slope},
    {left:slope},
    {left:slope},
    {left:slope},
    {left:slope},
    {},
   


    
  ];

  return result;

}
