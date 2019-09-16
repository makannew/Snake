

export function loadTruckCabin(){
  let cabin = [];
  //cockpit
  cabin.push({
    geometryName : "box" , 
    dimension : { height:4 , width: 1 , length:1.5}, 
    localPosition :new THREE.Vector3( 0 , 2 , 2 ), 
    localQuaternion:new THREE.Quaternion(0,0,0,1),
    color : 0x8f2bd3, 
    materialName:"lambert",
  });
  //rear vertical
  // cabin.push({
  //   geometryName : "box" , 
  //   dimension : { height:.1 , width: 1 , length:2.2}, 
  //   localPosition :new THREE.Vector3( 0 , 0.3 , -3.6 ), 
  //   localQuaternion:new THREE.Quaternion(0,0,0,1),
  //   color : 0x8f2bd3, 
  //   materialName:"lambert",
  // });

  // flat surface
  // cabin.push({
  //   geometryName : "box" , 
  //   dimension : { height:4.4 , width: .1 , length:3.0}, 
  //   localPosition :new THREE.Vector3( 0 , 0.75 , -1.8 ), 
  //   localQuaternion:new THREE.Quaternion(0,0,0,1),
  //   color : 0x8f2bd3, 
  //   materialName:"lambert",
  // });
  // wheel top left
  // cabin.push({
  //   geometryName : "box" , 
  //   dimension : { height:.6 , width: .05 , length:.4}, 
  //   localPosition :new THREE.Vector3( 1.3 , 0.57 , -3.99 ), 
  //   localQuaternion:new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),-Math.PI/4),
  //   color : 0x8f2bd3, 
  //   materialName:"lambert",
  // });

    // wheel top right
    // cabin.push({
    //   geometryName : "box" , 
    //   dimension : { height:.6 , width: .05 , length:.4}, 
    //   localPosition :new THREE.Vector3( -1.3 , 0.57 , -3.99 ), 
    //   localQuaternion:new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),-Math.PI/4),
    //   color : 0x8f2bd3, 
    //   materialName:"lambert",
    // });
  
  return cabin;
}