
import CompositeObject from "../composer.js"
import { cameraBuilder, activeCamera } from "./mg.camera.js"
import { objectBuilder } from "./mg.object.js"
import { skyBoxBuilder, activeWorld } from "./mg.skyBox.js"
import { startEngine } from "./mg.startEngine.js"
import { initializeThreeJs ,settings } from "./mg.initialize.js"
import { lightBuilder , updateLight } from "./mg.light.js"
import { cannonSettingsBuilder} from "./mg.physic.settings.js"


import { physicBodyBuilder } from "./mg.physic.js"

export function MGame(){
  let result = CompositeObject();

  result.utils = {};
  result.utils.newSkyBox = skyBoxBuilder(CompositeObject);
  result.utils.newCamera = cameraBuilder(CompositeObject);
  result.utils.newObject = objectBuilder(CompositeObject);
  result.utils.newLight = lightBuilder(CompositeObject);
  result.utils.newPhysicBody = physicBodyBuilder(CompositeObject);

  result.utils.start = startEngine;

  result.sceneObjects = {};
  result.cameras = {};
  result.worlds = {};
  result.lights ={};
  result.physicBodies = {};


  cannonSettingsBuilder(result);


  result.actualInterval = 0;
  result.running = false;
  result.needsUpdate = undefined;

  result.three = initializeThreeJs();


  result.addFunction(demandInterval);
  // default values
  result.settings = settings;

  result.addFunction(activeCamera);
  result.addFunction(activeWorld);
  result.addFunction(newAnimationFrame);
  //result.addFunction(updateSceneObject);
  result.addFunction(updateLight);

  return result;

}

const newAnimationFrame = function({timeStamp , three , activeCamera , cannon}){
  cannon.step(demandInterval , actualInterval , settings.maxSubStep);

  three.renderer.render( three.scene , activeCamera);
  return true;
}

const demandInterval = function({settings}){
  return 1/settings.frameRate;

}


