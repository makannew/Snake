import { buildHeadChassis } from "./snake.roadTrain.chassis.js";
import { loadHeadWheelsInfo, loadTrailerWheelsInfo } from "./snake.roadTrain.wheels.js";

export function loadRoadTrain(snake){
  let z=30,l=11;

  snake.roadTrains = [];
  snake.roadTrains.push({});
  snake.utils.newRoadTrain(snake.roadTrains[0]);
  snake.roadTrains[0].set({position:{x:30.0 , y:-48.0 , z:z} , axelsVerticalFreedom:.2 , chassisMass:100 , chassisFrontLength:4,chassisRearLength:-4.5  , chassisColor:0x936974});
  loadHeadWheelsInfo(snake.roadTrains[0]);
  snake.roadTrains[0].build();

  for (let i=1;i<7;++i){
    z = z - l;
    snake.roadTrains.push({});
    snake.utils.newRoadTrain(snake.roadTrains[i]);
    snake.roadTrains[i].set({position:{x:30.0 , y:-48.0 , z:z} , axelsVerticalFreedom:.2 , chassisMass:30,chassisFrontLength:2,chassisRearLength:-2 , chassisColor:0x936974});
    loadTrailerWheelsInfo(snake.roadTrains[i]);
    snake.roadTrains[i].build();
    snake.roadTrains[i].frontTowing.set({thisTowingPosition:{x:0,y:0,z:7} , otherTowingPosition:{x:0,y:0,z:-4},distance:.7,towedRoadTrain:snake.roadTrains[i-1]});
  }


  // snake.roadTrains.roadTrain3 = {};
  // snake.utils.newRoadTrain(snake.roadTrains.roadTrain3);
  // snake.roadTrains.roadTrain3.set({position:{x:30.0 , y:-48.0 , z:z} , axelsVerticalFreedom:.2 , chassisMass:30,chassisFrontLength:2,chassisRearLength:-2 , chassisColor:0x936974});
  // loadTrailerWheelsInfo(snake.roadTrains.roadTrain3);
  // snake.roadTrains.roadTrain3.build();
  // snake.roadTrains.roadTrain3.frontTowing.set({thisTowingPosition:{x:0,y:0,z:7} , otherTowingPosition:{x:0,y:0,z:-4},distance:.7,towedRoadTrain:snake.roadTrains.roadTrain2});
  // z = z - l;

  // snake.roadTrains.roadTrain3 = {};
  // snake.utils.newRoadTrain(snake.roadTrains.roadTrain3);
  // snake.roadTrains.roadTrain3.set({position:{x:30.0 , y:-48.0 , z:z} , axelsVerticalFreedom:.2 , chassisMass:30,chassisFrontLength:2,chassisRearLength:-2 , chassisColor:0x936974});
  // loadTrailerWheelsInfo(snake.roadTrains.roadTrain3);
  // snake.roadTrains.roadTrain3.build();
  // snake.roadTrains.roadTrain3.frontTowing.set({thisTowingPosition:{x:0,y:0,z:7} , otherTowingPosition:{x:0,y:0,z:-4},distance:.7,towedRoadTrain:snake.roadTrains.roadTrain2});


}