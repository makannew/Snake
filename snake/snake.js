/**
 * RoadTrain is a javascript game built by Mgame engine. 
 *
 *
 * @link   https://github.com/makannew/roadtrain
 * @file   snake.js
 * @author Makan Edrisi
 * @since  2018
 * @version 1.0.0
 */

import { MGame } from '../js/mgame/mg.js';
import { loadWorlds } from "./snake.worlds.js";
//import { exampleGeometries } from "./snake.example.geometries.js"
import { loadLights } from './snake.lights.js';
import { loadCameras } from './snake.cameras.js';
import { loadControls } from './snake.controls.js';
import { loadCameraControl } from './snake.camera.control.js';
import { loadRoadTrain } from './snake.roadTrain.js';
import { loadGround } from './snake.ground.js';
import { loadCar } from './snake.car.js';
import { loadDrawLine } from './snake.drawLine.js';
import { loadStartUp } from './snake,startUp.js';
import { loadField } from './snake.field.js';
import { loadRoad, loadRoadUpdateManager } from './snake.road.js';
import { loadHorizenWorld } from './snake.horizenWorld.js';
import { loadStarfield } from './snake.starfield.js';


const snake = MGame();
snake.cheating = false;
//snake.self = snake;
console.log(snake)

// load Cameras
loadCameras(snake);
// lights
loadLights(snake);


// load world texture
//loadWorlds(snake);
//loadHorizenWorld(snake);
loadStarfield(snake);
//

// load road map
loadRoad(snake);
loadRoadUpdateManager(snake);


// load car
//loadCar(snake);

// load drawing line on ground
//loadDrawLine(snake);

// load field objects
//loadField(snake);



// load example geometries
//exampleGeometries(snake);

// load mg road train
loadRoadTrain(snake);

// game logic updating
loadCameraControl(snake);
//

// setup game user controls
loadControls(snake);

//
//loadGround(snake);

//load startUp process
loadStartUp(snake);

// start game
snake.utils.start(snake);