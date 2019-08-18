import { buildHeadChassis } from "./snake.roadTrain.chassis.js";
import { buildHeadWheels } from "./snake.roadTrain.wheels.js";

export function loadRoadTrain(snake){
  snake.roadTrains = {};
  snake.roadTrains.roadTrain1 = {};
  snake.roadTrains.roadTrain1.position = {x:3.0 , y:-48.0 , z:-32.0};

  snake.utils.newRoadTrain(snake.roadTrains.roadTrain1);

  buildHeadChassis(snake , snake.roadTrains.roadTrain1);
  buildHeadWheels(snake , snake.roadTrains.roadTrain1);

  snake.roadTrains.roadTrain1.addChassis();
  snake.roadTrains.roadTrain1.addWheels();



}