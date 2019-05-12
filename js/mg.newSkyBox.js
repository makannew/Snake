import CompositeObject from "./composer.js"
import { newObject } from "./mg.newObject.js"

export function newSkyBox(){
  let result = CompositeObject()
  result.addFunction(skyBox);
  result.addFunction(allLoaded);
  result.components ={};
  result.components.back = newObject();
  result.components.front = newObject();
  result.components.left = newObject();
  result.components.right = newObject();
  result.components.top = newObject();
  result.components.ground = newObject();

  return result;
}
const allLoaded = function({components}){
  let result = true;
  let totalItems = 0;
  for (let item in components){
    totalItems++;
    if (!components[item]["needsUpdate"]) result= undefined ;
  }
  if (totalItems < 6) result = undefined;
  return result;
}
const skyBox = function({allLoaded , components}){
  let h = components.back.texture.image.height / 2;
  components.top.mesh.rotation.x = Math.PI / 2;
  components.top.mesh.position.set(0 , h, 0);
  components.ground.mesh.rotation.x = -1 * Math.PI/2;
  components.ground.mesh.position.set(0,-h,0);
  //worldFront.plane.rotation.y = Math.PI/2;
  components.front.mesh.position.set(0,0,-h);
  components.back.mesh.rotation.y = Math.PI;
  components.back.mesh.position.set(0,0,h);
  components.left.mesh.rotation.y = Math.PI/2;
  components.left.mesh.position.set(-h,0,0);
  components.right.mesh.rotation.y = -1 * Math.PI/2;
  components.right.mesh.position.set(h,0,0);
  return true;
}
