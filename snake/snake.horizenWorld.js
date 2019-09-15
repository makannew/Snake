
export function loadHorizenWorld(snake){
  snake.horizenWorld={};
  snake.utils.addObject(snake.horizenWorld);
  snake.horizenWorld.set({
    geometryName : "box" , 
  dimension : { height:2000 , width: 1 , length:2000} ,
   position :{x:0,y:-51.5,z:0} ,
    color : 0xaffbb0 , 
    materialName:"lambert",
    textureFileName:"world/world1/skyBox1_ground.png"
   });
  snake.utils.addPhysicBody(snake.horizenWorld);
  snake.horizenWorld.set({mass:0,sleep:true });

}