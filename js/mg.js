
import CompositeObject from "./composer.js"
import { newCamera } from "./mg.newCamera.js"
import { newObject } from "./mg.newObject.js"
import { newSkyBox } from "./mg.newSkyBox.js"
import { startEngine } from "./mg.startEngine.js"

export function MGame(){
  let result = CompositeObject();

  result.newSkyBox = newSkyBox;
  result.newCamera = newCamera;
  result.newObject = newObject;
  result.initializeThreeJs = initializeThreeJs;
  result.sceneObjects = {};
  result.cameras = {};
  result.worlds = {};
  result.actualInterval = 0;
  result.running = false;
  result.start = startEngine;

  // default values
  result.frameRate = 60;
  result.addFunction(activeCamera);
  result.addFunction(updateSceneObjects);
  result.addFunction(activeWorld);
  result.addFunction(newAnimationFrame);
  return result;

}

const newAnimationFrame = function({timeStamp , three , activeCamera}){
  three.renderer.render( three.scene , activeCamera);
  return true;
}

const activeWorld = function({activeWorldName , worlds , three}){
  if (worlds[activeWorldName] && worlds[activeWorldName]["skyBox"] ){

    three.scene.add(worlds[activeWorldName]["components"]["back"]["mesh"]);
    three.scene.add(worlds[activeWorldName]["components"]["front"]["mesh"]);
    three.scene.add(worlds[activeWorldName]["components"]["left"]["mesh"]);
    three.scene.add(worlds[activeWorldName]["components"]["right"]["mesh"]);
    three.scene.add(worlds[activeWorldName]["components"]["top"]["mesh"]);
    three.scene.add(worlds[activeWorldName]["components"]["ground"]["mesh"]);
    return worlds[activeWorldName]
  }
  return undefined;
}

const updateSceneObjects = function({sceneObjects , three}){
  for (let item in sceneObjects){
    if (sceneObjects[item]["needsUpdate"]){
      three.scene.add (sceneObjects[item]["mesh"]);
      sceneObjects[item]["needsUpdate"] = false;
    }
  }
  return true;
}

const activeCamera = function({activeCameraName , three , cameras}){
  if (!cameras[activeCameraName] || !cameras[activeCameraName].camera) return undefined;
  let camera = cameras[activeCameraName].camera;
  if (activeCamera==camera) return camera;
  addEventListener('resize', function () {
    three.renderer.setSize ( innerWidth , innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix ();
  });
  return camera;
}

const initializeThreeJs = function(){
  let result={};
  // three.js setup
  result.scene = new THREE.Scene ();
  result.renderer = new THREE.WebGLRenderer ();
  result.renderer.shadowMap.enabled = true;
  result.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  result.renderer.setSize ( innerWidth , innerHeight);
  document.body.appendChild ( result.renderer.domElement );
  //
  let ambientLight = new THREE.AmbientLight (0xffffff , .7);
  result.scene.add ( ambientLight );
  return result;
}









