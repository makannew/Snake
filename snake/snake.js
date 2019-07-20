
import { MGame } from '../js/mgame/mg.js';
import { loadWorlds } from "./snake.worlds.js";
import { exampleGeometries } from "./snake.example.geometries.js"
import { loadLights } from './snake.lights.js';
import { loadCameras } from './snake.cameras.js';
import { setupControls } from './snake.controls.js';
import { loadPlayerSettings } from './snake.player.js';
import { updateGame } from './snake.logics.js';


const snake = MGame();

console.log(snake)

//load Cameras
loadCameras(snake);

// lights
loadLights(snake);

// load world texture
loadWorlds(snake);

// load example geometries
exampleGeometries(snake);

// player settings
loadPlayerSettings(snake);

// game logic updating
updateGame(snake);

// setup game user controls
setupControls(snake);

// start game
snake.utils.start(snake);
