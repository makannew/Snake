
export function loadWorlds(snake){
  
  snake.utils.addSkyBox("skyBox1"); 
  snake.worlds.skyBox1.set ({textureFilePath:"world/world1/"});

  snake.utils.addSkyBox("skyBox2"); 
  snake.worlds.skyBox2.set ({textureFilePath:"world/world2/"});

  snake.utils.addSkyBox("skyBox3"); 
  snake.worlds.skyBox3.set ({textureFilePath:"world/world3/"});

  snake.activeWorldName = "skyBox1";

}