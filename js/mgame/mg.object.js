
export function addObject(mainComposite , obj){

 // mainComposite.addLink(mainComposite.three , obj.three);
  obj.three = mainComposite.three.getProxyLessObject;
  // functions
  obj.addFunction(texture);
  obj.addFunction(needsUpdate);
  obj.addFunction(geometry);
  obj.addFunction(material);
  obj.addFunction(mesh);
  obj.addFunction(setScale);
  obj.addFunction(setColor);
  obj.addFunction(mapTexture);
  obj.addFunction(setPosition);
  obj.addFunction(setGeneralProperties);
  obj.addFunction(setShadow);
  obj.addFunction(sceneUpdate);
  obj.addFunction(setQuaternion);
  obj.addFunction(setPlaneHeightField);
  // default values
  obj.geometryName = "plane";
  obj.materialName = "lambert"
  obj.color = 0xffffff;
  obj.scale = 1;
  obj.position = new THREE.Vector3(0,0,0);
  obj.quaternion = new THREE.Quaternion();
  obj.visible = true;
  obj.widthSegments =32;
  obj.heightSegments = 32;
  obj.radialSegments = 32;
  obj.cylinderHeightSegments = 1;
  obj.shininess = 30.0;
  obj.castShadow =true;
  obj.receiveShadow =true;
  obj.self = obj;
  obj.mainComposite = mainComposite;

  //obj.quaternion = new THREE.Quaternion();//.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), 0 );
}

function setPlaneHeightField({mesh,heightData}){
  if (geometryName=="plane"){
    for (let i = 0; i<mesh.geometry.vertices.length; i++ ) {
      mesh.geometry.vertices[i].z = heightData[i];
    }
  }
}
const sceneUpdate = function({mesh , visible , three}){
  if (visible && sceneUpdate!=mesh){
    three.scene.add(mesh);
    return mesh;
  }
  if (!visible && sceneUpdate==mesh){
    three.scene.remove(mesh);
    return false;
  }
}

const needsUpdate = function({mesh , visible}){
  return true;
}

const setGeneralProperties = function({mesh , shininess}){
  if (materialName == "phong"){
    material.shininess = shininess;
  }
  
}

const setShadow = function({mesh , castShadow , receiveShadow}){
  mesh.castShadow = castShadow;
  mesh.receiveShadow  = receiveShadow;
}

const setPosition = function({mesh , position}){
  mesh.position.set(position.x,position.y,position.z);
}

const setQuaternion = function({mesh , quaternion}){
  mesh.quaternion.set(quaternion.x,quaternion.y,quaternion.z,quaternion.w);
  return true;
}

const mesh = function({geometry , material}){
  let result={};
  result = new THREE.Mesh( geometry, material );
  return result;
}

const material = function({materialName , dimension}){
  let result ={};
  switch (materialName){
    case "lambert":
      result = new THREE.MeshLambertMaterial();
      break;
    case "basic":
      result = new THREE.MeshBasicMaterial();
      break;
    case "phong":
      result = new THREE.MeshPhongMaterial();
      break;
  }
  return result;
}

const mapTexture = function({texture , material }){
  material.map = texture.threeTexture;
}

const geometry = function({geometryName , dimension}){
  let result;
  switch (geometryName){
    case "plane":
      result = new THREE.PlaneGeometry(dimension.length , dimension.width , dimension.xSeg, dimension.Yseg);
      break;
    case "box":
      result = new THREE.BoxGeometry(dimension.length , dimension.width , dimension.height );
      break;
    case "sphere":
      result =new THREE.SphereGeometry( dimension.radius, widthSegments, heightSegments );
      break;
    case "cylinder":
      result = new THREE.CylinderGeometry( dimension.radiusTop, dimension.radiusBottom , 
        dimension.height, radialSegments, cylinderHeightSegments );
      break;

  }
  return result;
}

const setScale = function({scale , mesh}){
  mesh.scale.set(scale , scale , scale);
  return true;
}

const setColor = function({color , mesh}){
  mesh.material.color.setHex(color);
  return true;
}

const texture = function({textureFileName}){
  let texture={};
  texture.canvas = document.createElement("CANVAS");
  texture.context = texture.canvas.getContext("2d");
  texture.image = document.createElement("IMG");
  let result =new Promise ((resolve , reject)=>{
    texture.image.onload = ()=> {
      texture.canvas.width = texture.image.width;
      texture.canvas.height = texture.image.height;
      texture.context.drawImage(texture.image, 0, 0);
      texture.threeTexture = new THREE.Texture(texture.canvas);
      texture.threeTexture.needsUpdate = true;
      // if (!dimension){
      //   dimension = {};
      //   dimension.length = texture.image.width;
      //   dimension.width = texture.image.height;
      //   dimension.height = texture.image.height;
      //   dimension.radius = texture.image.height;
      // }
      resolve(texture)
    };
    texture.image.onerror = ()=> resolve(undefined);
  })
  texture.image.src = textureFileName;
  return result;
}
