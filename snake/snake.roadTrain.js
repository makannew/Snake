import { buildHeadChassis } from "./snake.roadTrain.chassis.js";
import { loadHeadWheelsInfo, loadTrailerWheelsInfo } from "./snake.roadTrain.wheels.js";

export function loadRoadTrain(snake){
  let z=90,l=11,t=.5;
  let iniPos={x:95,y:-48,z:z}
  snake.roadTrains = [];
  snake.roadTrains.push({});
  snake.utils.newRoadTrain(snake.roadTrains[0]);
  snake.roadTrains[0].set({position:{x:iniPos.x , y:iniPos.y , z:iniPos.z} , axelsVerticalFreedom:.2 , chassisMass:100 , chassisFrontLength:4,chassisRearLength:-4.5  , chassisColor:0x936974});
  loadHeadWheelsInfo(snake.roadTrains[0]);
  snake.roadTrains[0].build();

  for (let i=1;i<2;++i){
    z = z - l;
    snake.roadTrains.push({});
    snake.utils.newRoadTrain(snake.roadTrains[i]);
    snake.roadTrains[i].set({position:{x:iniPos.x , y:iniPos.y , z:z} , axelsVerticalFreedom:.2 , chassisMass:20,chassisFrontLength:4,chassisRearLength:-4.5 , chassisColor:0x936974});
    loadTrailerWheelsInfo(snake.roadTrains[i]);
    snake.roadTrains[i].build();
    snake.roadTrains[i].frontTowing.set({thisTowingPosition:{x:0,y:0,z:l*(1-t)} , otherTowingPosition:{x:0,y:0,z:-l*t},distance:.7,towedRoadTrain:snake.roadTrains[i-1]});
  }


}