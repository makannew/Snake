
export function loadWorlds(snake){
  
  snake.worlds.skyBox1={};
  snake.worlds.skyBox1.set ({
    textureFilePath:"world/world1/", 
    worldDimension:{x:2048,y:1024,z:2048},
    worldFileNames:["skyBox1_back","skyBox1_front","skyBox1_left","skyBox1_right","skyBox1_top","skyBox1_ground"],
  });

  snake.utils.addSkyBox(snake.worlds.skyBox1); 
  snake.worlds.skyBox1.visible = true;
  snake.worlds.skyBox1.components[5].set({color:0xff0000,groupName:"ground",collisionGroups: ["wheel","obstacle","chassis"]});

  for (let i=0;i<5;++i){
    snake.worlds.skyBox1.components[i].set({color:0xff0000,groupName:"wall",collisionGroups: ["obstacle"]});

  }

  
  // snake.worlds.skyBox2={};
  // snake.worlds.skyBox2.set ({textureFilePath:"world/world2/",
  // worldFileNames:["skyBox2_back","skyBox2_front","skyBox2_left","skyBox2_right","skyBox2_top","skyBox2_ground"]});
  // snake.utils.addSkyBox(snake.worlds.skyBox2); 

  // snake.worlds.skyBox3={}
  // snake.worlds.skyBox3.set ({textureFilePath:"world/world3/",
  // worldFileNames:["skyBox3_back","skyBox3_front","skyBox3_left","skyBox3_right","skyBox3_top","skyBox3_ground"]});
  // snake.utils.addSkyBox(snake.worlds.skyBox3); 

  

}