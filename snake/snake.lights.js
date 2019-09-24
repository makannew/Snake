
export function loadLights(snake){
  snake.lights.ambient1 = {};
  snake.utils.addLight(snake.lights.ambient1);
  snake.lights.ambient1.set({lightType:"ambient" , intensity:0});

  snake.lights.pointLight1 = {};
  snake.utils.addLight(snake.lights.pointLight1);
  snake.lights.pointLight1.set ({lightType :"point" , intensity:0 , position:{x:0,y:-330,z:0}});
}