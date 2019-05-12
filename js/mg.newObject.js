import CompositeObject from "./composer.js"

export function newObject(){
  let result = CompositeObject();
  // functions
  result.addFunction(texture);
  result.addFunction(needsUpdate);
  result.addFunction(geometry);
  result.addFunction(material);
  result.addFunction(mesh);
  // default values
  result.geometryName = "plane";
  result.materialName = "lambert"

  return result;
}

const needsUpdate = function({mesh}){
  return true;
}

const mesh = function({geometry , material}){
  let result={};
  result = new THREE.Mesh( geometry, material );
  return result;
}

const material = function({materialName , texture}){
  let result ={};
  switch (materialName){
    case "lambert":
    result = new THREE.MeshLambertMaterial( {color: 0xffffff, side: THREE.FrontSide} );
  }
  result.map = texture.threeTexture;

  return result;
}

const geometry = function({geometryName , texture}){
  let result={};
  switch (geometryName){
    case "plane":
    result = new THREE.PlaneGeometry(texture.image.width , texture.image.height);
  }
  return result;
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
      resolve(texture)
    };
    texture.image.onerror = ()=> resolve(undefined);
  })
  texture.image.src = textureFileName;
  return result;
}
