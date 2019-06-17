import { objectBuilder } from "./mg.object.js"

export function skyBoxBuilder(CompositeObject){
  return function(){
    let result = CompositeObject()
    result.addFunction(skyBox);
    result.addFunction(allLoaded);
    result.components ={};
    result.components.back = objectBuilder(CompositeObject)();
    result.components.front = objectBuilder(CompositeObject)();
    result.components.left = objectBuilder(CompositeObject)();
    result.components.right = objectBuilder(CompositeObject)();
    result.components.top = objectBuilder(CompositeObject)();
    result.components.ground = objectBuilder(CompositeObject)();
    //
    result.components.back.addFunction(correctPositions);
    result.components.front.addFunction(correctPositions);
    result.components.left.addFunction(correctPositions);
    result.components.right.addFunction(correctPositions);
    result.components.top.addFunction(correctPositions);
    result.components.ground.addFunction(correctPositions);

    //
    result.scale = 1;
    result.addLink(result.scale , result.components.back.scale , result.components.front.scale , 
                    result.components.left.scale , result.components.right.scale , 
                    result.components.top.scale , result.components.ground.scale);
    result.visible = false;
    result.addLink(result.visible , result.components.back.visible , result.components.front.visible , 
                    result.components.left.visible , result.components.right.visible , 
                    result.components.top.visible , result.components.ground.visible);
    return result;
  }

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

const correctPositions = function({mesh}){
  if (correctPositions) return true;
  const componentName = currentAddress[currentAddress.length - 1];
  let h = dimension.height * scale/ 2;
  switch (componentName){
    case "top":
      mesh.rotation.x = Math.PI / 2;
      mesh.position.set(0 , h, 0);
      break;
    case "ground":
      mesh.rotation.x = -1 * Math.PI/2;
      mesh.position.set(0,-h,0);
      break;
    case "front":
      mesh.position.set(0,0,-h);
      break;
    case "back":
      mesh.rotation.y = Math.PI;
      mesh.position.set(0,0,h);
      break;
    case "left":
      mesh.rotation.y = Math.PI/2;
      mesh.position.set(-h,0,0);
      break;
    case "right":
      mesh.rotation.y = -1 * Math.PI/2;
      mesh.position.set(h,0,0);
      break;
  }
  forceUpdate =true;
  return true;
}
const skyBox = function({allLoaded , components}){
  if (skyBox) return true;
  // let h = components.back.dimension.height * scale/ 2;
  // components.top.mesh.rotation.x = Math.PI / 2;
  // components.top.mesh.position.set(0 , h, 0);
  // components.ground.mesh.rotation.x = -1 * Math.PI/2;
  // components.ground.mesh.position.set(0,-h,0);
  // components.front.mesh.position.set(0,0,-h);
  // components.back.mesh.rotation.y = Math.PI;
  // components.back.mesh.position.set(0,0,h);
  // components.left.mesh.rotation.y = Math.PI/2;
  // components.left.mesh.position.set(-h,0,0);
  // components.right.mesh.rotation.y = -1 * Math.PI/2;
  // components.right.mesh.position.set(h,0,0);
  //
  
  return true;
}

export const activeWorld = function({activeWorldName}){
  // remove previous world if there is
  if (activeWorld && activeWorld!=activeWorldName){
    proxiedComposite.worlds[activeWorld].visible = false;
    // three.scene.remove(activeWorld["components"]["back"]["mesh"]);
    // three.scene.remove(activeWorld["components"]["front"]["mesh"]);
    // three.scene.remove(activeWorld["components"]["left"]["mesh"]);
    // three.scene.remove(activeWorld["components"]["right"]["mesh"]);
    // three.scene.remove(activeWorld["components"]["top"]["mesh"]);
    // three.scene.remove(activeWorld["components"]["ground"]["mesh"]);
  }
  proxiedComposite.worlds[activeWorldName].visible = true;
  return activeWorldName;
  //if (worlds[activeWorldName] && worlds[activeWorldName]["skyBox"] ){
    // three.scene.add(worlds[activeWorldName]["components"]["back"]["mesh"]);
    // three.scene.add(worlds[activeWorldName]["components"]["front"]["mesh"]);
    // three.scene.add(worlds[activeWorldName]["components"]["left"]["mesh"]);
    // three.scene.add(worlds[activeWorldName]["components"]["right"]["mesh"]);
    // three.scene.add(worlds[activeWorldName]["components"]["top"]["mesh"]);
    // three.scene.add(worlds[activeWorldName]["components"]["ground"]["mesh"]);
    //return worlds[activeWorldName];
  //}
  //return undefined;
}
