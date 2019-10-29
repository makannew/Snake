/**
 * RoadTrain is a javascript game built by Mgame engine. 
 *
 *
 * @link   https://github.com/makannew/roadtrain
 * @file   rGame.js
 * @author Makan Edrisi
 * @since  2018
 * @version 1.0.0
 */

import { MGame } from '../js/mgame/mg.js';
import { loadLights } from './roadtrain.lights.js';
import { loadCameras } from './roadtrain.cameras.js';
import { loadControls } from './roadtrain.controls.js';
import { loadCameraControl } from './roadtrain.camera.control.js';
import { loadRoadTrain } from './roadtrain.roadTrain.js';
import { loadStartUp } from './roadtrain.startUp.js';
import { loadRoad, loadRoadUpdateManager } from './roadtrain.road.js';
import { loadStarfield } from './roadtrain.starfield.js';

const rGame = MGame();
rGame.cheating = false;
console.log(rGame)

// load Cameras
loadCameras(rGame);

// lights
loadLights(rGame);

loadStarfield(rGame);

// load road map
loadRoad(rGame);
loadRoadUpdateManager(rGame);

// load mg road train
loadRoadTrain(rGame);

// game logic updating
loadCameraControl(rGame);

// setup game user controls
loadControls(rGame);

//load startUp process
loadStartUp(rGame);

// start game
rGame.utils.start(rGame);