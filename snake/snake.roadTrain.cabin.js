

export function loadTruckCabin(){
  let cabin = [];
  
  cabin.push({
    geometryName : "box" , 
    dimension : { height:4 , width: 1 , length:1.5}, 
    localPosition :new THREE.Vector3( 0 , 2 , 2 ), 
    localQuaternion:new THREE.Quaternion(0,0,0,1),
    color : 0x8f2bd3, 
    materialName:"lambert",
  });
  
  return cabin;
}