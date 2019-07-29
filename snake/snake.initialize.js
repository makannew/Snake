
export function initialize(snake){
  //snake.activeWorldName = "skyBox1";
  snake.worlds.skyBox1.visible = true;
  snake.utils.addPhysicBody(snake.sceneObjects.skyBox1_ground);
  snake.sceneObjects.skyBox1_ground.set({mass:0 , physicMaterial:"groundMaterial"});
}