import CompositeObject from "./composer.js"

export function newCamera(){
  let result = CompositeObject();
  result.addFunction(camera);
  //result.addFunction(onLoad);
  return result;
}

// const onLoad = function({camera}){
//   return true;

// }
const camera = function({cameraFocalLenght , cameraNearView , cameraFarView}){
  return new THREE.PerspectiveCamera ( 
    cameraFocalLenght , 
    innerWidth / innerHeight , 
    cameraNearView, 
    cameraFarView);
}