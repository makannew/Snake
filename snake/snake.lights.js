
export function loadLights(snake){
  snake.utils.newLight("ambient1");
  snake.lights.ambient1.set({lightType:"ambient" , intensity:.5});

  snake.utils.newLight("pointLight1");
  snake.lights.pointLight1.set ({lightType :"point" , intensity:1 , position:{x:0,y:0,z:0}});
}