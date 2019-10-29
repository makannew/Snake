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
  venus,
  barrierB,
  barrel,
  box,
  rotatingVenus,
  rotatingMars,
  rotatingJupiter,
  rotatingMercury,
  rotatingHaumea,
  eris,
  jupiterHaumea
} from "./roadtrain.road.obstacles.js";

export function roadData(snake){
  let maxAcceptableInterval = 25;
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
        {build:coneBarrier , localPos:{x:-5,y:.4,z:-15}, enablingDistance:0 , disablingDistance:2}

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
        {build:venus , localPos:{x:0,y:18,z:-7} , enablingDistance:1 , disablingDistance:8}
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
      uo:slope,
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
      obstacles:[
        {build:box , localPos:{x:-5,y:.4,z:0}, enablingDistance:-1 , disablingDistance:3},
        {build:box , localPos:{x:0,y:.4,z:0}, enablingDistance:-1 , disablingDistance:3},
        {build:box , localPos:{x:5,y:.4,z:0}, enablingDistance:-1 , disablingDistance:3},
        {build:box , localPos:{x:-3,y:3.4,z:0}, enablingDistance:-1 , disablingDistance:3},
        {build:box , localPos:{x:0,y:6.4,z:0}, enablingDistance:-1 , disablingDistance:3},
        {build:box , localPos:{x:3,y:3.4,z:0}, enablingDistance:-1 , disablingDistance:3},
      ]
    },
    {},
    {
      checkPoint:{speed:18,camera:snake.cameras.camera3}, // checkpoint


      left:slope*2,

    },
    {
      plot:(snake)=>{
        snake.roadTrains[0].speed = 14;
      },
      left:slope*2,

    },
    {
      left:slope*2,
      //color:0x00ff00,
      obstacles:[{build:barrierA , localPos:{x:4,y:.6,z:10}, enablingDistance:0 , disablingDistance:1}],
    },
    {

      left:slope,
      obstacles:[
        {build:rotatingEarth , localPos:{x:-3,y:2,z:10} , enablingDistance:-2 , disablingDistance:1},
        {build:rotatingVenus , localPos:{x:3,y:2,z:0} , enablingDistance:-2 , disablingDistance:1},
        {build:rotatingMars , localPos:{x:-3,y:2,z:-10} , enablingDistance:-2 , disablingDistance:1},


      ]
    },
    {
      textureNumber:0,
      obstacles:[
        {build:coneBarrier , localPos:{x:-3,y:.4,z:0}, enablingDistance:-1 , disablingDistance:1},
        {build:rotatingJupiter , localPos:{x:-3,y:2,z:10} , enablingDistance:-1 , disablingDistance:1},
        {build:rotatingMercury , localPos:{x:3,y:2,z:0} , enablingDistance:-1 , disablingDistance:1},
        {build:rotatingHaumea , localPos:{x:-3,y:2,z:-10} , enablingDistance:-1 , disablingDistance:1},

      ],

    },
    {
      right:slope*2,
      obstacles:[
      {build:barrel , localPos:{x:-2,y:2,z:0}, enablingDistance:0 , disablingDistance:2},
      {build:barrel , localPos:{x:-2,y:.4,z:0}, enablingDistance:0 , disablingDistance:2},
      {build:barrel , localPos:{x:0,y:.4,z:0}, enablingDistance:0 , disablingDistance:2},
      {build:barrel , localPos:{x:2,y:.4,z:0}, enablingDistance:0 , disablingDistance:2},
      {build:barrel , localPos:{x:4,y:.4,z:0}, enablingDistance:0 , disablingDistance:2},

    ]
  },
    {
      right:slope*2,

      plot:(snake)=>{
      snake.roadTrains[0].speed = 20;
      }
    },
    {
      right:slope*2,
      checkPoint:{speed:20,camera:snake.cameras.camera11}, // checkpoint

      frontActiveBlocks:6
    },
    {
      right:slope*2,

      plot:(snake)=>{
        if(snake.framesInterval<maxAcceptableInterval){
          if (snake.roadTrains[0].visibleTrailers<2)++snake.roadTrains[0].visibleTrailers;
          if (snake.activeCamera == snake.cameras.camera3){
            snake.cameraTransitionPlot = [
              {
              startCam:snake.cameras.camera3,
              endCam:snake.cameras.camera11,
              movingSpeed:3000,
              movingType:1,
              rotatingSpeed:1500,
              rotatingType:3,
              }
            ]
          }

        }

      },

    },
    {
      right:slope*2,
    },

    {
      up:slope*1,
    },
    {
      up:slope*1,
      obstacles:[
        {build:barrel , localPos:{x:-2,y:.4,z:-4}, enablingDistance:0 , disablingDistance:2},
        {build:barrel , localPos:{x:4,y:.4,z:4}, enablingDistance:0 , disablingDistance:2},
      ],
    },
    {
      obstacles:[
        {build:barrel , localPos:{x:-2,y:.4,z:-3}, enablingDistance:0 , disablingDistance:2},
      ],
      up:slope*2,
    },
    {obstacles:[{build:coneBarrier , localPos:{x:4,y:.4,z:0}, enablingDistance:0 , disablingDistance:-1}]},
    {obstacles:[{build:earth , localPos:{x:4,y:50,z:0}, enablingDistance:-4 , disablingDistance:-1}]},
    {obstacles:[{build:mercury , localPos:{x:8,y:50,z:0}, enablingDistance:-4 , disablingDistance:-1}]},
    {obstacles:[{build:mars , localPos:{x:2,y:50,z:0}, enablingDistance:-4 , disablingDistance:-1}]},
    {obstacles:[{build:eris , localPos:{x:4,y:50,z:0}, enablingDistance:-4 , disablingDistance:-1}]},
    {
      obstacles:[{build:barrierA , localPos:{x:4,y:.4,z:10}, enablingDistance:0 , disablingDistance:1}],
      plot:(snake)=>{
        snake.roadTrains[0].speed = 20;
        }
    },

    {checkPoint:{speed:20,camera:snake.cameras.camera11}}, // checkpoint
    {obstacles:[{build:barrierA , localPos:{x:-4,y:.4,z:10}, enablingDistance:0 , disablingDistance:1}]},
    {
      obstacles:[
        {build:barrel , localPos:{x:-3,y:.4,z:-7}, enablingDistance:-1 , disablingDistance:2},
        {build:barrel , localPos:{x:3,y:.4,z:7}, enablingDistance:-1 , disablingDistance:2},
      ],
    },
    {
      obstacles:[
        {build:jupiterHaumea , localPos:{x:24,y:-8,z:0}, enablingDistance:-2 , disablingDistance:2},
        {build:barrel , localPos:{x:-3,y:.4,z:0}, enablingDistance:-2 , disablingDistance:1},
        {build:barrel , localPos:{x:-3,y:.4,z:-5}, enablingDistance:-2 , disablingDistance:1},
        {build:barrel , localPos:{x:-3,y:.4,z:-8}, enablingDistance:-2 , disablingDistance:1},


      ]
    },
    {obstacles:[{build:pluto , localPos:{x:4,y:15,z:0}, enablingDistance:0 , disablingDistance:3}]},
    {
      obstacles:[
        {build:sunCeres , localPos:{x:-5,y:1,z:0}, enablingDistance:-2 , disablingDistance:2},
        {build:barrel , localPos:{x:4,y:.4,z:-10}, enablingDistance:-2 , disablingDistance:1},
        {build:barrel , localPos:{x:-4,y:.4,z:10}, enablingDistance:-2 , disablingDistance:1},


      ]
    },
    {
      down:slope,
      plot:(snake)=>{
        snake.roadTrains[0].speed = 25;
        }
    },
    {checkPoint:{speed:25,camera:snake.cameras.camera11}}, // checkpoint

    {
      down:slope,
      plot:(snake)=>{
        if(snake.framesInterval<maxAcceptableInterval){
          if (snake.roadTrains[0].visibleTrailers<2)++snake.roadTrains[0].visibleTrailers;
          if (snake.activeCamera == snake.cameras.camera11){
            snake.cameraTransitionPlot = [
              {
              startCam:snake.cameras.camera11,
              endCam:snake.cameras.camera12,
              movingSpeed:3000,
              movingType:1,
              rotatingSpeed:1500,
              rotatingType:3,
              }
            ]
          }
        }
      }
    },
    {
      down:slope,
      obstacles:[{build:mercury , localPos:{x:-2,y:15,z:0}, enablingDistance:0 , disablingDistance:3}]},
    {},
    {obstacles:[{build:jupiter , localPos:{x:0,y:15,z:0}, enablingDistance:0 , disablingDistance:3}]},

    {
      up:slope,
      //color:0x00ff00,
      obstacles:[{build:barrierA , localPos:{x:4,y:.4,z:10}, enablingDistance:0 , disablingDistance:3}],
    },
    {},


    {left:slope*3,offset:{x:0,y:-.05,z:0}},
    {right:slope*2},
    {right:slope*2},


    {right:slope*2},
    {right:slope*2},

    {right:slope*2,
      obstacles:[{build:barrierA , localPos:{x:4,y:.4,z:10}, enablingDistance:0 , disablingDistance:3},{build:barrierA , localPos:{x:4,y:.4,z:-10}, enablingDistance:0 , disablingDistance:3}],

    },
    {},
    {},
    {},

    

   


    
  ];

  return result;

}
