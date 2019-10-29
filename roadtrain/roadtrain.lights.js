
export function loadLights(rGame){
  rGame.lights.ambient1 = {};
  rGame.utils.addLight(rGame.lights.ambient1);
  rGame.lights.ambient1.set({lightType:"ambient" , intensity:.5});

  rGame.lights.directional = {};
  rGame.utils.addLight(rGame.lights.directional);
  rGame.lights.directional.set ({lightType :"directional" , intensity:.7 , position:{x:0,y:500,z:0},targetPosition:new THREE.Vector3(0,0,0)});
}