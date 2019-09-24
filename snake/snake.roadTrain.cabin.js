

export function loadTruckCabin(){
  let cabin = [];
  // all object position and orientation are relavive to vehicle position and orientation
  //hood
  cabin.push({
    geometryName : "box" , 
    dimension : { height:3.98 , width: 1.4 , length:2.1}, 
    localPosition :new THREE.Vector3( 0 , .9 , 2.8 ), 
    localQuaternion:new THREE.Quaternion(0,0,0,1),
    color : 0x00ff00, 
    materialName:"lambert",
    groupName:"cabin",
    //collisionGroups:["obstacle"]
  });
  //cabin
  cabin.push({
    geometryName : "box" , 
    dimension : { height:2 , width: 2.7 , length:2.4}, 
    localPosition :new THREE.Vector3( 0 , 1.5 , 1.3 ), 
    localQuaternion:new THREE.Quaternion(0,0,0,1),
    color : 0x00ff00, 
    materialName:"lambert",
  });
  //rear vertical
  cabin.push({
    geometryName : "box" , 
    dimension : { height:.1 , width: .5 , length:3.4}, 
    localPosition :new THREE.Vector3( 0 , 0 , -4.35 ), 
    localQuaternion:new THREE.Quaternion(0,0,0,1),
    color : 0x8f2bd3, 
    materialName:"lambert",
  });
  //front shield
  cabin.push({
    geometryName : "box" , 
    dimension : { height:.9 , width: 1.4 , length:3.4}, 
    localPosition :new THREE.Vector3( 0 , .5 , 4.35 ), 
    localQuaternion:new THREE.Quaternion(0,0,0,1),
    color : 0x00ff00, 
    materialName:"lambert",
  });

    //left Box
    cabin.push({
      geometryName : "box" , 
      dimension : { height:3.2 , width: .5 , length:.9}, 
      localPosition :new THREE.Vector3( 1.25 , 0.4, .5 ), 
      localQuaternion:new THREE.Quaternion(0,0,0,1),
      color : 0x00ff00, 
      materialName:"lambert",
    });

    //right Box
    cabin.push({
      geometryName : "box" , 
      dimension : { height:3.2 , width: .5 , length:.9}, 
      localPosition :new THREE.Vector3( -1.25 , 0.4 , .5 ), 
      localQuaternion:new THREE.Quaternion(0,0,0,1),
      color : 0x00ff00, 
      materialName:"lambert",
    });

    //chassis center
    // cabin.push({
    //   geometryName : "box" , 
    //   dimension : { height:4.2 , width: .4 , length:1}, 
    //   localPosition :new THREE.Vector3( 0 , 0 , .6 ), 
    //   localQuaternion:new THREE.Quaternion(0,0,0,1),
    //   color : 0x8f2bd3, 
    //   materialName:"lambert",
    // });

    //left cover
    cabin.push({
      geometryName : "box" , 
      dimension : { height:1 , width: .1 , length:.9}, 
      localPosition :new THREE.Vector3( 1.25 , .75+.4 , 3.4 ), 
      localQuaternion:new THREE.Quaternion(0,0,0,1),
      color : 0x00ff00, 
      materialName:"lambert",
    });

    cabin.push({
      geometryName : "box" , 
      dimension : { height:1.2 , width: .1 , length:.9}, 
      localPosition :new THREE.Vector3( 1.25 , .46+.4 , 2.4 ), 
      localQuaternion:new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),-Math.PI/6),
      color : 0x00ff00, 
      materialName:"lambert",
    });

    //right cover
    cabin.push({
      geometryName : "box" , 
      dimension : { height:1 , width: .1 , length:.9}, 
      localPosition :new THREE.Vector3( -1.25 , .75+.4 , 3.4 ), 
      localQuaternion:new THREE.Quaternion(0,0,0,1),
      color : 0x00ff00, 
      materialName:"lambert",
    });
    cabin.push({
      geometryName : "box" , 
      dimension : { height:1.2 , width: .1 , length:.9}, 
      localPosition :new THREE.Vector3( -1.25 , .46+.4 , 2.4 ), 
      localQuaternion:new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),-Math.PI/6),
      color : 0x00ff00, 
      materialName:"lambert",
    });

    //fifth wheel
    cabin.push({
      geometryName : "cylinder" , 
      dimension : {radiusTop:.5,radiusBottom:.5,height:.3},
      radialSegments :32, 
      cylinderHeightSegments:1,
      localPosition :new THREE.Vector3( 0 , .4 , -2 ), 
      localQuaternion:new THREE.Quaternion(0,0,0,1),
      color : 0x8f2bd3, 
      materialName:"lambert",
    });




  return cabin;
}

export function loadTrailerContainer(){
  let cabin = [];
  // all object position and orientation are relavive to vehicle position and orientation
  //front base
  cabin.push({
    geometryName : "box" , 
    dimension : { height:.5 , width: 1 , length:1.6}, 
    localPosition :new THREE.Vector3( 0 , .2 , 1 ), 
    localQuaternion:new THREE.Quaternion(0,0,0,1),
    color : 0xff00ff, 
    materialName:"lambert",
    groupName:"cabin",
    collisionGroups:["obstacle"]
  });
    //rear base
    cabin.push({
      geometryName : "box" , 
      dimension : { height:.5 , width: 1 , length:1.6}, 
      localPosition :new THREE.Vector3( 0 , .2 , -2 ), 
      localQuaternion:new THREE.Quaternion(0,0,0,1),
      color : 0xff00ff, 
      materialName:"lambert",
    });
    //base
    cabin.push({
      geometryName : "box" , 
      dimension : { height:4.6 , width: .6 , length:1.7}, 
      localPosition :new THREE.Vector3( 0 , .4 , -.5 ), 
      localQuaternion:new THREE.Quaternion(0,0,0,1),
      color : 0x0000ff, 
      materialName:"lambert",
    });

    //container
    // cabin.push({
    //   geometryName : "box" , 
    //   dimension : { height:13 , width: 4 , length:3.4}, 
    //   localPosition :new THREE.Vector3( 0 , 2.6 , 3 ), 
    //   localQuaternion:new THREE.Quaternion(0,0,0,1),
    //   color : 0xffffff, 
    //   materialName:"lambert",
    // });

    // trailer
      cabin.push({
        geometryName : "box" , 
        dimension : { height:13 , width: .2 , length:3.2}, 
        localPosition :new THREE.Vector3( 0 , 1 , 3 ), 
        localQuaternion:new THREE.Quaternion(0,0,0,1),
        color : 0x2ffa8f, 
        materialName:"lambert",
      });


  return cabin;

}

export function loadAdditionalTrailer(){
  let cabin = [];
  // all object position and orientation are relavive to vehicle position and orientation
  //front base
  // cabin.push({
  //   geometryName : "box" , 
  //   dimension : { height:.5 , width: 1 , length:1.6}, 
  //   localPosition :new THREE.Vector3( 0 , .2 , 1 ), 
  //   localQuaternion:new THREE.Quaternion(0,0,0,1),
  //   color : 0xff00ff, 
  //   materialName:"lambert",
  // });
    //rear base
    // cabin.push({
    //   geometryName : "box" , 
    //   dimension : { height:.5 , width: 1 , length:1.6}, 
    //   localPosition :new THREE.Vector3( 0 , .2 , -2 ), 
    //   localQuaternion:new THREE.Quaternion(0,0,0,1),
    //   color : 0xff00ff, 
    //   materialName:"lambert",
    // });
    //base
    // cabin.push({
    //   geometryName : "box" , 
    //   dimension : { height:4.6 , width: .6 , length:1.7}, 
    //   localPosition :new THREE.Vector3( 0 , .4 , -.5 ), 
    //   localQuaternion:new THREE.Quaternion(0,0,0,1),
    //   color : 0x0000ff, 
    //   materialName:"lambert",
    // });

    //container
    // cabin.push({
    //   geometryName : "box" , 
    //   dimension : { height:13 , width: 4 , length:3.4}, 
    //   localPosition :new THREE.Vector3( 0 , 2.6 , 3 ), 
    //   localQuaternion:new THREE.Quaternion(0,0,0,1),
    //   color : 0xffffff, 
    //   materialName:"lambert",
    // });

    // trailer
      cabin.push({
        geometryName : "box" , 
        dimension : { height:13 , width: .2 , length:3.2}, 
        localPosition :new THREE.Vector3( 0 , .7 , 3 ), 
        localQuaternion:new THREE.Quaternion(0,0,0,1),
        color : 0x2ffa8f, 
        materialName:"lambert",
      });
      // hinge
      cabin.push({
        geometryName : "box" , 
        dimension : { height:5.3 , width: .2 , length:.2}, 
        localPosition :new THREE.Vector3( 0 , 0 , 10.5 ), 
        localQuaternion:new THREE.Quaternion(0,0,0,1),
        color : 0xbf4a8f, 
        materialName:"lambert",
      });


  return cabin;

}