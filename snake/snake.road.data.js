
export function roadData(){
  
  let slope = Math.PI/16;
  let result = [
    {width:10,
      length:20,
      tickness:.2,
      position:{x:0,y:-50.6,z:20},
      quaternion:{x:0,y:0,z:0,w:1},
      up:slope,
      color:0xaffbb0,
      materialName:"lambert",
      physicMaterial:"groundMaterial",
      offset:{x:0,y:0,z:0},
      textureFileName:"/characters/0.png"
    },
    {up:slope,color:0x00ff00},
    {color:0x0000ff},
    {left:slope*3,color:0xff0000,offset:{x:0,y:-.05,z:0}},
    {right:slope*2,color:0x00ff00}
    
  ];

  return result;

}
