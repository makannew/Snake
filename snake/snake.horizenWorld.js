
export function loadHorizenWorld(snake){
  snake.horizenWorld={};
  snake.utils.addObject(snake.horizenWorld);
  snake.horizenWorld.set({
    geometryName : "box" , 
  dimension : { height:1024*8 , width: 1 , length:1024*8} ,
   position :{x:0,y:-520,z:0} ,
    color : 0x0000ff , 
    materialName:"lambert",
    textureFileName:"world/world1/skyBox1_ground.png"
   });
  //snake.utils.addPhysicBody(snake.horizenWorld);
  //snake.horizenWorld.set({mass:0,sleep:true });

}