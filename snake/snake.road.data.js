import { barrierA ,coneBarrier ,heavyBall, jupiter, earth, mercury , mars , pluto} from "./snake.road.obstacles.js";

export function roadData(){
  let maxAcceptableInterval = 20;
  let slope = Math.PI/16;
  let result = [
    {width:15,
      length:30,
      tickness:.8,
      position:{x:0,y:0,z:0},
      quaternion:{x:0,y:0,z:0,w:1},
      up:slope,
      color:0xffffff,
      materialName:"lambert",
      physicMaterial:"groundMaterial",
      offset:{x:0,y:0,z:0},
      textureFileName:["/textures/road1.png","/textures/roadTrain.png"],
      materialIndex:[0,0,0,0,0,0,0,0,1,1,0,0],
      frontActiveBlocks:4,
      rearActiveBlocks:-2,
      frontVisibleBlocks:9,
      rearVisibleBlocks:-3,
      obstacles:[{build:coneBarrier , localPos:{x:3,y:.4,z:-7} , enablingDistance:0 , disablingDistance:3}]
    },
    {textureNumber:0,obstacles:[{build:coneBarrier , localPos:{x:-3,y:.4,z:0}, enablingDistance:0 , disablingDistance:3}]},
    {obstacles:[{build:coneBarrier , localPos:{x:-4,y:.4,z:0}, enablingDistance:0 , disablingDistance:3}]},
    {plot:(snake)=>{snake.roadTrains[0].speed = 15}},
    {plot:(snake)=>{snake.cameras.camera3.active=true}},

    {obstacles:[{build:jupiter , localPos:{x:0,y:15,z:0}, enablingDistance:-4 , disablingDistance:3}],up:slope ,frontActiveBlocks:6},
    {plot:(snake)=>{if(snake.framesInterval<maxAcceptableInterval)++snake.roadTrains[0].visibleTrailers;}},

    {},
    {},
    {obstacles:[{build:coneBarrier , localPos:{x:4,y:.4,z:0}, enablingDistance:0 , disablingDistance:3}]},
    {},
    {obstacles:[{build:earth , localPos:{x:4,y:15,z:0}, enablingDistance:0 , disablingDistance:3}]},
    {},
    {obstacles:[{build:mars , localPos:{x:0,y:15,z:0}, enablingDistance:0 , disablingDistance:3}]},
    {},
    {obstacles:[{build:barrierA , localPos:{x:4,y:.4,z:10}, enablingDistance:0 , disablingDistance:3},{build:barrierA, enablingDistance:0 , disablingDistance:3}]},

    {},
    {obstacles:[{build:pluto , localPos:{x:4,y:15,z:0}, enablingDistance:0 , disablingDistance:3}]},
    {},
    {},
    {obstacles:[{build:mercury , localPos:{x:-2,y:15,z:0}, enablingDistance:0 , disablingDistance:3}]},
    {},
    {plot:(snake)=>{snake.roadTrains[0].speed = 20}},
    {obstacles:[{build:jupiter , localPos:{x:0,y:15,z:0}, enablingDistance:0 , disablingDistance:3}]},

    {
      up:slope,
      //color:0x00ff00,
      obstacles:[{build:barrierA , localPos:{x:4,y:.4,z:10}, enablingDistance:0 , disablingDistance:3},{build:barrierA, enablingDistance:0 , disablingDistance:3}],
    },
    {},


    {left:slope*3,offset:{x:0,y:-.05,z:0}},
    {right:slope*2},
    {right:slope*2},

    {plot:(snake)=>{if(snake.framesInterval<maxAcceptableInterval)++snake.roadTrains[0].visibleTrailers;}},

    {right:slope*2},
    {right:slope*2},

    {right:slope*2,
      obstacles:[{build:barrierA , localPos:{x:4,y:.4,z:10}, enablingDistance:0 , disablingDistance:3},{build:barrierA , localPos:{x:4,y:.4,z:-10}, enablingDistance:0 , disablingDistance:3}],

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
