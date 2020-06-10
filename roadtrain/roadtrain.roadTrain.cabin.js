export function loadTruckCabin() {
  let cabin = [];
  // all object position and orientation are relavive to vehicle position and orientation
  //hood
  cabin.push({
    geometryName: "box",
    dimension: { height: 4, width: 2, length: 2.1 },
    localPosition: new THREE.Vector3(0, 1.1, 2.6),
    localQuaternion: new THREE.Quaternion(0, 0, 0, 1),
    color: 0xffffff,
    materialName: "lambert",
    textureFileName: ["./textures/bodyColor.png", "./textures/hoodFront.png"],
    materialIndex: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    groupName: "cabin",
  });
  //cabin
  cabin.push({
    geometryName: "box",
    dimension: { height: 2, width: 2.7, length: 2.4 },
    localPosition: new THREE.Vector3(0, 1.5, 1.3),
    localQuaternion: new THREE.Quaternion(0, 0, 0, 1),
    color: 0xffffff,
    materialName: "lambert",
    textureFileName: [
      "./textures/cabinLeft.png",
      "./textures/cabinRight.png",
      "./textures/bodyColor.png",
      "./textures/bodyColor.png",
      "./textures/windShield.png",
      "./textures/bodyColor.png",
    ],
    materialIndex: [0, 0, 1, 1, 3, 3, 3, 3, 4, 4, 3, 3],
  });
  //rear vertical
  cabin.push({
    geometryName: "box",
    dimension: { height: 0.1, width: 0.5, length: 3.4 },
    localPosition: new THREE.Vector3(0, 0, -4.35),
    localQuaternion: new THREE.Quaternion(0, 0, 0, 1),
    textureFileName: ["./textures/bodyColor.png", "./textures/backLights.png"],
    materialIndex: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    color: 0xffffff,
    materialName: "lambert",
  });
  //front shield
  cabin.push({
    geometryName: "box",
    dimension: { height: 0.52, width: 1.2, length: 3.4 },
    localPosition: new THREE.Vector3(0, 0.6, 4.15),
    localQuaternion: new THREE.Quaternion(0, 0, 0, 1),
    color: 0xffffff,
    textureFileName: ["./textures/bodyColor.png", "./textures/frontLights.png"],
    materialIndex: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    materialName: "lambert",
  });

  //left Box
  cabin.push({
    geometryName: "box",
    dimension: { height: 3.2, width: 0.5, length: 0.9 },
    localPosition: new THREE.Vector3(1.25, 0.4, 0.5),
    localQuaternion: new THREE.Quaternion(0, 0, 0, 1),
    color: 0xffffff,
    textureFileName: ["./textures/bodyColor.png"],
    materialName: "lambert",
  });

  //right Box
  cabin.push({
    geometryName: "box",
    dimension: { height: 3.2, width: 0.5, length: 0.9 },
    localPosition: new THREE.Vector3(-1.25, 0.4, 0.5),
    localQuaternion: new THREE.Quaternion(0, 0, 0, 1),
    textureFileName: ["./textures/bodyColor.png"],
    color: 0xffffff,
    materialName: "lambert",
  });

  //left cover
  cabin.push({
    geometryName: "box",
    dimension: { height: 1, width: 0.1, length: 0.9 },
    localPosition: new THREE.Vector3(1.25, 0.75 + 0.4, 3.4),
    localQuaternion: new THREE.Quaternion(0, 0, 0, 1),
    color: 0xffffff,
    textureFileName: ["./textures/bodyColor.png"],
    materialName: "lambert",
  });

  cabin.push({
    geometryName: "box",
    dimension: { height: 1.2, width: 0.1, length: 0.9 },
    localPosition: new THREE.Vector3(1.25, 0.46 + 0.4, 2.4),
    localQuaternion: new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(1, 0, 0),
      -Math.PI / 6
    ),
    textureFileName: ["./textures/bodyColor.png"],
    color: 0xffffff,
    materialName: "lambert",
  });

  //right cover
  cabin.push({
    geometryName: "box",
    dimension: { height: 1, width: 0.1, length: 0.9 },
    localPosition: new THREE.Vector3(-1.25, 0.75 + 0.4, 3.4),
    localQuaternion: new THREE.Quaternion(0, 0, 0, 1),
    textureFileName: ["./textures/bodyColor.png"],
    color: 0xffffff,
    materialName: "lambert",
  });
  cabin.push({
    geometryName: "box",
    dimension: { height: 1.2, width: 0.1, length: 0.9 },
    localPosition: new THREE.Vector3(-1.25, 0.46 + 0.4, 2.4),
    localQuaternion: new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(1, 0, 0),
      -Math.PI / 6
    ),
    textureFileName: ["./textures/bodyColor.png"],
    color: 0xffffff,
    materialName: "lambert",
  });

  //fifth wheel
  cabin.push({
    geometryName: "cylinder",
    dimension: { radiusTop: 0.5, radiusBottom: 0.5, height: 0.3 },
    radialSegments: 32,
    cylinderHeightSegments: 1,
    localPosition: new THREE.Vector3(0, 0.4, -2),
    localQuaternion: new THREE.Quaternion(0, 0, 0, 1),
    textureFileName: [
      "./textures/fifthWheel.png",
      "./textures/fifthWheelSide.png",
      "./textures/fifthWheel.png",
    ],
    materialIndex: [0, 1, 2],
    color: 0xffffff,
    materialName: "lambert",
  });

  return cabin;
}

export function loadTrailerContainer() {
  let cabin = [];
  // all object position and orientation are relavive to vehicle position and orientation
  //front base
  cabin.push({
    geometryName: "box",
    dimension: { height: 0.5, width: 1, length: 2 },
    localPosition: new THREE.Vector3(0, 0.2, 1),
    localQuaternion: new THREE.Quaternion(0, 0, 0, 1),
    textureFileName: ["./textures/bed.png"],
    color: 0xffffff,
    materialName: "lambert",
    groupName: "cabin",
    collisionGroups: ["obstacle"],
  });
  //rear base
  cabin.push({
    geometryName: "box",
    dimension: { height: 0.5, width: 1, length: 2 },
    localPosition: new THREE.Vector3(0, 0.2, -2),
    localQuaternion: new THREE.Quaternion(0, 0, 0, 1),
    textureFileName: ["./textures/bed.png"],
    color: 0xffffff,
    materialName: "lambert",
  });
  //tanker
  cabin.push({
    geometryName: "cylinder",
    dimension: { radiusTop: 1.1, radiusBottom: 1.1, height: 9 },
    localPosition: new THREE.Vector3(0, 1.7, 3),
    radialSegments: 32,
    cylinderHeightSegments: 1,
    localQuaternion: new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(1, 0, 0).normalize(),
      -Math.PI / 2
    ),
    textureFileName: ["./textures/tanker.png"],
    color: 0xffffff,
    materialName: "lambert",
  });
  cabin.push({
    geometryName: "sphere",
    dimension: { radius: 1.1 },
    localPosition: new THREE.Vector3(0, 1.7, -1.5),
    widthSegments: 32,
    heightSegments: 32,
    localQuaternion: new THREE.Quaternion(), //.setFromAxisAngle(new THREE.Vector3(1,0,0).normalize(), -Math.PI/2),
    textureFileName: ["./textures/tanker.png"],
    color: 0xffffff,
    materialName: "lambert",
  });
  cabin.push({
    geometryName: "sphere",
    dimension: { radius: 1.1 },
    localPosition: new THREE.Vector3(0, 1.7, 7.5),
    widthSegments: 32,
    heightSegments: 32,
    localQuaternion: new THREE.Quaternion(), //.setFromAxisAngle(new THREE.Vector3(1,0,0).normalize(), -Math.PI/2),
    textureFileName: ["./textures/tanker.png"],
    color: 0xffffff,
    materialName: "lambert",
  });

  return cabin;
}

export function loadAdditionalTrailer() {
  let cabin = [];
  //tanker
  cabin.push({
    geometryName: "cylinder",
    dimension: { radiusTop: 1.1, radiusBottom: 1.1, height: 9 },
    localPosition: new THREE.Vector3(0, 1.5, 3),
    radialSegments: 32,
    cylinderHeightSegments: 1,
    localQuaternion: new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(1, 0, 0).normalize(),
      -Math.PI / 2
    ),
    textureFileName: ["./textures/tanker.png"],
    color: 0xffffff,
    materialName: "lambert",
  });
  cabin.push({
    geometryName: "sphere",
    dimension: { radius: 1.1 },
    localPosition: new THREE.Vector3(0, 1.5, -1.5),
    widthSegments: 32,
    heightSegments: 32,
    localQuaternion: new THREE.Quaternion(), //.setFromAxisAngle(new THREE.Vector3(1,0,0).normalize(), -Math.PI/2),
    textureFileName: ["./textures/tanker.png"],
    color: 0xffffff,
    materialName: "lambert",
  });
  cabin.push({
    geometryName: "sphere",
    dimension: { radius: 1.1 },
    localPosition: new THREE.Vector3(0, 1.5, 7.5),
    widthSegments: 32,
    heightSegments: 32,
    localQuaternion: new THREE.Quaternion(), //.setFromAxisAngle(new THREE.Vector3(1,0,0).normalize(), -Math.PI/2),
    textureFileName: ["./textures/tanker.png"],
    color: 0xffffff,
    materialName: "lambert",
  });

  // hinge
  cabin.push({
    geometryName: "box",
    dimension: { height: 5.3, width: 0.2, length: 0.2 },
    localPosition: new THREE.Vector3(0, 0, 10.5),
    localQuaternion: new THREE.Quaternion(0, 0, 0, 1),
    textureFileName: ["./textures/bed.png"],
    color: 0xffffff,
    materialName: "lambert",
  });

  return cabin;
}
