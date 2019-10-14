import { 
  barrierA ,
  coneBarrier ,
  heavyBall, 
  jupiter, 
  earth, 
  mercury , 
  mars , 
  pluto, 
  rotatingEarth, 
  moon ,
  sun, 
  sunCeres,
  venus
} from "./snake.road.obstacles.js";

export function roadData(snake){
  let maxAcceptableInterval = 20;
  let slope = Math.PI/16;
  let result = [
    {
      width:15,
      length:30,
      tickness:.8,
      position:{x:0,y:0,z:0},
      quaternion:{x:0,y:0,z:0,w:1},
      color:0xffffff,
      materialName:"lambert",
      physicMaterial:"groundMaterial",
      offset:{x:0,y:0.01,z:0},
      textureFileName:["/textures/road1.png","/textures/roadTrain.png"],
      materialIndex:[0,0,0,0,0,0,0,0,1,1,0,0],
      frontActiveBlocks:4,
      rearActiveBlocks:-4,
      frontVisibleBlocks:9,
      rearVisibleBlocks:-5,

    },
    {
      plot:(snake)=>{
        snake.roadTrains[0].speed = 15;
      },
      up:slope,
      obstacles:[
        {build:coneBarrier , localPos:{x:0,y:.4,z:0}, enablingDistance:0 , disablingDistance:2},
      ]
    },
    {
      up:slope,
      obstacles:[
        {build:coneBarrier , localPos:{x:4,y:.4,z:-10}, enablingDistance:0 , disablingDistance:2},
      ]
    },
    {
      up:slope,
      obstacles:[
        {build:earth , localPos:{x:-1,y:5,z:-7} , enablingDistance:-2 , disablingDistance:1}
      ]
    },
    {
      down:slope
    },
    {
      down:slope
    },
    {
      down:slope
    },
    {
      plot:(snake)=>{
        snake.roadTrains[0].speed = 8;
      },
      down:slope,
      obstacles:[
        {build:venus , localPos:{x:0,y:18,z:-7} , enablingDistance:1 , disablingDistance:7}
      ]
    },
    {
      plot:(snake)=>{
        snake.cameraTransitionPlot = [
          {
          startCam:snake.cameras.camera3,
          endCam:snake.cameras.camera10,
          movingSpeed:500,
          movingType:2,
          rotatingSpeed:500,
          rotatingType:2,
          },
          {
          startCam:snake.cameras.camera10,
          endCam:snake.cameras.camera7,
          movingSpeed:500,
          movingType:3,
          rotatingSpeed:500,
          rotatingType:1,
          }

        ]
      },
      frontVisibleBlocks:9,
      rearVisibleBlocks:-8,
      obstacles:[
        {build:coneBarrier, localPos:{x:4,y:.4,z:0} , enablingDistance:0 , disablingDistance:2},
        {build:coneBarrier, localPos:{x:-4,y:.4,z:-10} , enablingDistance:0 , disablingDistance:2}

      ]
    },
    {
      obstacles:[
        {build:coneBarrier , localPos:{x:0,y:.4,z:10}, enablingDistance:0 , disablingDistance:2},
        {build:coneBarrier, localPos:{x:4,y:.4,z:0} , enablingDistance:0 , disablingDistance:2},
        {build:coneBarrier, localPos:{x:-4,y:.4,z:-10} , enablingDistance:0 , disablingDistance:2}

      ]
    },
    {
      obstacles:[
        {build:coneBarrier , localPos:{x:2,y:.4,z:10}, enablingDistance:0 , disablingDistance:2},
        {build:coneBarrier, localPos:{x:-5,y:.4,z:0} , enablingDistance:0 , disablingDistance:2},
        {build:coneBarrier, localPos:{x:5,y:.4,z:-10} , enablingDistance:0 , disablingDistance:2}

      ]
    },
    {
      left:slope*2,
      obstacles:[{build:barrierA , localPos:{x:4,y:.5,z:10},enablingDistance:0 , disablingDistance:2}],
      plot:(snake)=>{
        snake.cameraTransitionPlot = [
          {
          startCam:snake.cameras.camera7,
          endCam:snake.cameras.camera3,
          movingSpeed:1500,
          movingType:2,
          rotatingSpeed:1500,
          rotatingType:1,
          }


        ]
      }
    },
    {
      checkPoint:{speed:18,camera:snake.cameras.camera3}, // checkpoint


      left:slope*2,

    },
    {
      plot:(snake)=>{
        snake.roadTrains[0].speed = 18;
      },
      left:slope*2,

    },
    {
      up:slope,
      //color:0x00ff00,
      obstacles:[{build:barrierA , localPos:{x:4,y:.6,z:10}, enablingDistance:0 , disablingDistance:2}],
    },
    {

      left:slope,
      obstacles:[
        {build:sunCeres , localPos:{x:0,y:2,z:-7} , enablingDistance:-2 , disablingDistance:2}
      ]
    },
    {
      textureNumber:0,
      obstacles:[{build:coneBarrier , localPos:{x:-3,y:.4,z:0}, enablingDistance:-3 , disablingDistance:1}],
      plot:(snake)=>{
        snake.cameraTransitionPlot = [
          {
          startCam:snake.cameras.camera3,
          endCam:snake.cameras.camera10,
          movingSpeed:2000,
          movingType:2,
          rotatingSpeed:2000,
          rotatingType:2,
          },
          {
          startCam:snake.cameras.camera10,
          endCam:snake.cameras.camera7,
          movingSpeed:2000,
          movingType:3,
          rotatingSpeed:2000,
          rotatingType:1,
          }

        ]
      }
    },
    {obstacles:[{build:coneBarrier , localPos:{x:-4,y:.4,z:0}, enablingDistance:0 , disablingDistance:3}]},
    {plot:(snake)=>{
      snake.roadTrains[0].speed = 20;
      snake.cameraTransitionPlot = [{
        startCam:snake.cameras.camera7,
        endCam:snake.cameras.camera10,
        movingSpeed:4000,
        movingType:1,
        rotatingSpeed:2000,
        rotatingType:2,
      }]
    }},
    {plot:(snake)=>{snake.cameras.camera3.active=true}},

    {obstacles:[{build:jupiter , localPos:{x:0,y:15,z:0}, enablingDistance:-4 , disablingDistance:3}],up:slope ,frontActiveBlocks:6},
    {plot:(snake)=>{if(snake.framesInterval<maxAcceptableInterval)++snake.roadTrains[0].visibleTrailers;}},


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
