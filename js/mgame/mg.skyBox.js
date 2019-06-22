import { addObject } from "./mg.object.js"

export function addSkyBox(mainComposite , skyBoxName){
  mainComposite.worlds[skyBoxName] = {scale:1 , visible:false , name:skyBoxName};
  mainComposite.worlds[skyBoxName].addFunction(allLoaded);
  mainComposite.worlds[skyBoxName].addFunction(readTexture);

  let components = mainComposite.worlds[skyBoxName].components = [skyBoxName+"_back",
                        skyBoxName+"_front",
                        skyBoxName+"_left",
                        skyBoxName+"_right",
                        skyBoxName+"_top",
                        skyBoxName+"_ground"
                      ];
  for (let name of components){
    addObject(mainComposite , name);
    mainComposite.sceneObjects[name].addFunction(correctPositions);
  }
  mainComposite.addLink(mainComposite.worlds[skyBoxName].scale , mainComposite.sceneObjects[components[0]].scale , 
                  mainComposite.sceneObjects[components[1]].scale , mainComposite.sceneObjects[components[2]].scale , 
                  mainComposite.sceneObjects[components[3]].scale , mainComposite.sceneObjects[components[4]].scale , 
                  mainComposite.sceneObjects[components[5]].scale);

  mainComposite.addLink(mainComposite.worlds[skyBoxName].visible , mainComposite.sceneObjects[components[0]].visible , 
                  mainComposite.sceneObjects[components[1]].visible , mainComposite.sceneObjects[components[2]].visible , 
                  mainComposite.sceneObjects[components[3]].visible , mainComposite.sceneObjects[components[4]].visible , 
                  mainComposite.sceneObjects[components[5]].visible);
  
  mainComposite.addLink(mainComposite.sceneObjects[components[0]].needsUpdate , mainComposite.worlds[skyBoxName].c0);
  mainComposite.addLink(mainComposite.sceneObjects[components[1]].needsUpdate , mainComposite.worlds[skyBoxName].c1);
  mainComposite.addLink(mainComposite.sceneObjects[components[2]].needsUpdate , mainComposite.worlds[skyBoxName].c2);
  mainComposite.addLink(mainComposite.sceneObjects[components[3]].needsUpdate , mainComposite.worlds[skyBoxName].c3);
  mainComposite.addLink(mainComposite.sceneObjects[components[4]].needsUpdate , mainComposite.worlds[skyBoxName].c4);
  mainComposite.addLink(mainComposite.sceneObjects[components[5]].needsUpdate , mainComposite.worlds[skyBoxName].c5);
}

const allLoaded = function({c0,c1,c2,c3,c4,c5}){
  return true;
}

const readTexture = function({textureFilePath , components}){
  for (let i=0;i<components.length;++i){
    proxiedComposite.sceneObjects[components[i]].textureFileName = textureFilePath + components[i] + ".png";
  }
  return true;
}
const correctPositions = function({mesh}){
  if (correctPositions) return true;
  const componentName = currentAddress[currentAddress.length - 1].split("_")[1];
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
  return true;
}

export const activeWorld = function({activeWorldName}){
  // remove previous world if there is
  if (activeWorld && activeWorld!=activeWorldName){
    proxiedComposite.worlds[activeWorld].visible = false;
  }
  proxiedComposite.worlds[activeWorldName].visible = true;
  return activeWorldName;
}
