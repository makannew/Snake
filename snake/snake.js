
import { MGame } from '../js/mgame/mg.js';
//import { loadWorlds } from "./snake.worlds.js";
//import { exampleGeometries } from "./snake.example.geometries.js"
import { loadLights } from './snake.lights.js';
import { loadCameras } from './snake.cameras.js';
import { loadControls } from './snake.controls.js';
import { loadCameraControl } from './snake.camera.control.js';
import { loadRoadTrain } from './snake.roadTrain.js';
import { loadGround } from './snake.ground.js';


const snake = MGame();
//snake.self = snake;
console.log(snake)

// load Cameras
loadCameras(snake);
// lights
loadLights(snake);


// load world texture
//loadWorlds(snake);

// load example geometries
//exampleGeometries(snake);

// load mg road train
loadRoadTrain(snake);

// game logic updating
loadCameraControl(snake);

// setup game user controls
loadControls(snake);

//
loadGround(snake);

// start game
snake.utils.start(snake);



