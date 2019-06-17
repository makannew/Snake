
export function objectBuilder(CompositeObject){
  return function(){
    let result = CompositeObject();
    // functions
    result.addFunction(texture);
    result.addFunction(needsUpdate);
    result.addFunction(geometry);
    result.addFunction(material);
    result.addFunction(mesh);
    result.addFunction(setScale);
    result.addFunction(setColor);
    result.addFunction(mapTexture);
    result.addFunction(setPosition);
    result.addFunction(setGeneralProperties);
    result.addFunction(setShadow);
    result.addFunction(initialize);
    result.addFunction(sceneUpdate);
    // default values
    result.geometryName = "plane";
    result.materialName = "lambert"
    result.color = 0xffffff;
    result.scale = 1;
    result.position = new THREE.Vector3(0,0,0);
    result.visible = true;
    result.widthSegments =32;
    result.heightSegments = 32;
    result.radialSegments = 32;
    result.cylinderHeightSegments = 1;
    result.shininess = 30.0;
    result.castShadow =true;
    result.receiveShadow =true;
    result.forceUpdate = false;
    return result;
  }

}

const initialize = function({mesh}){
  if (initialize) return mesh;
  if (proxiedComposite.three){
    proxiedComposite.addLink(proxiedComposite.three , proxiedComposite[currentAddress].three)
    return mesh;
  }else{
    return undefined;
  }

}
const sceneUpdate = function({mesh , visible , three , forceUpdate}){
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
  mesh.position.x = position.x;
  mesh.position.y = position.y;
  mesh.position.z = position.z;
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

const mapTexture = function({texture , material}){
  material.map = texture.threeTexture;
}

const geometry = function({geometryName , dimension}){
  let result;
  switch (geometryName){
    case "plane":
      result = new THREE.PlaneGeometry(dimension.length , dimension.width );
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
      if (!dimension){
        dimension = {};
        dimension.length = texture.image.width;
        dimension.width = texture.image.width;
        dimension.height = texture.image.height;
        dimension.radius = texture.image.height;
      }
      resolve(texture)
    };
    texture.image.onerror = ()=> resolve(undefined);
  })
  texture.image.src = textureFileName;
  return result;
}
