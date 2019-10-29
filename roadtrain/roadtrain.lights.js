
export function loadLights(snake){
  snake.lights.ambient1 = {};
  snake.utils.addLight(snake.lights.ambient1);
  snake.lights.ambient1.set({lightType:"ambient" , intensity:.5});

  snake.lights.directional = {};
  snake.utils.addLight(snake.lights.directional);
  snake.lights.directional.set ({lightType :"directional" , intensity:.7 , position:{x:0,y:500,z:0},targetPosition:new THREE.Vector3(0,0,0)});
}