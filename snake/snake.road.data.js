import { barrierA ,coneBarrier ,heavyBall, jupiter, earth, mercury , mars , pluto} from "./snake.road.obstacles.js";

export function roadData(){
  
  let slope = Math.PI/16;
  let result = [
    {width:15,
      length:30,
      tickness:.8,
      position:{x:0,y:-511.5,z:20},
      quaternion:{x:0,y:0,z:0,w:1},
      up:slope,
      color:0xffffff,
      materialName:"lambert",
      physicMaterial:"groundMaterial",
      offset:{x:0,y:0,z:0},
      textureFileName:["/textures/road1.png","/textures/road1.png","/textures/road1.png","/textures/road1.png","/textures/roadTrain.png","/textures/road1.png"],
      frontActiveBlocks:2,
      rearActiveBlocks:1,
      obstacles:[{build:coneBarrier , localPos:{x:1,y:.4,z:-7}}]
    },
    {obstacles:[{build:coneBarrier , localPos:{x:-3,y:.4,z:0}},{build:coneBarrier , localPos:{x:3,y:.4,z:0}}]},
    {obstacles:[{build:coneBarrier , localPos:{x:-4,y:.4,z:0}}]},
    {plot:(snake)=>{snake.roadTrains[0].speed = 15}},
    {plot:(snake)=>{snake.cameras.camera3.active=true}},

    {obstacles:[{build:jupiter , localPos:{x:0,y:15,z:0}}],up:slope ,frontActiveBlocks:6},
    {},
    {},
    {obstacles:[{build:coneBarrier , localPos:{x:4,y:.4,z:0}}]},
    {},
    {obstacles:[{build:earth , localPos:{x:4,y:15,z:0}}]},
    {},
    {obstacles:[{build:mars , localPos:{x:0,y:15,z:0}}]},
    {},
    {obstacles:[{build:barrierA , localPos:{x:4,y:.4,z:10}},{build:barrierA}]},

    {},
    {obstacles:[{build:pluto , localPos:{x:4,y:15,z:0}}]},
    {},
    {},
    {obstacles:[{build:mercury , localPos:{x:-2,y:15,z:0}}]},
    {},
    {plot:(snake)=>{snake.roadTrains[0].speed = 20}},
    {obstacles:[{build:jupiter , localPos:{x:0,y:15,z:0}}]},

    {
      up:slope,
      //color:0x00ff00,
      obstacles:[{build:barrierA , localPos:{x:4,y:.4,z:10}},{build:barrierA}],
    },
    {},


    {left:slope*3,offset:{x:0,y:-.05,z:0}},
    {right:slope*2},
    {right:slope*2},

    {plot:(snake)=>{if(snake.framesInterval<20)++snake.roadTrains[0].visibleTrailers;}},

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
