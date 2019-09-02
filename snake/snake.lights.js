
export function loadLights(snake){
  snake.lights.ambient1 = {};
  snake.utils.addLight(snake.lights.ambient1);
  snake.lights.ambient1.set({lightType:"ambient" , intensity:.2});

  snake.lights.pointLight1 = {};
  snake.utils.addLight(snake.lights.pointLight1);
  snake.lights.pointLight1.set ({lightType :"point" , intensity:.7 , position:{x:100,y:100,z:100}});
}