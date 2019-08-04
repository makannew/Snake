import { addObject } from "./mg.object.js"
import { addPhysicBody } from "./mg.physic.js"

export function addSkyBox(mainComposite , skyBoxName){
  skyBoxName.scale=1;
  skyBoxName.visible=false;
  //skyBoxName.mainComposite = mainComposite;
  //skyBoxName.selfSkyBox=skyBoxName;
  skyBoxName.WorldPosition={x:0,y:0,z:0};
  skyBoxName.filesExtension = ".png";
  skyBoxName.thickness = 1;
  skyBoxName.geometryName = undefined;
  skyBoxName.physicBody = true;
  //skyBoxName.addObject = addObject;
  //skyBoxName.changePositions = changePositions;
  //skyBoxName.worldDimension=undefined;
  skyBoxName.components = [];
  skyBoxName.selfProxy = skyBoxName;
  for (let i=0,len=skyBoxName.worldFileNames.length;i<len;++i){
    skyBoxName.components[i]={};
    addObject(mainComposite,skyBoxName.components[i]);
    addPhysicBody(mainComposite,skyBoxName.components[i]);
    //skyBoxName.components[i].addFunction(changePositions);
    //let thisObj = skyBoxName.components[i];
    mainComposite.addLink(skyBoxName.components[i].texture,skyBoxName["texture"+ String(i)]);
    skyBoxName.components[i].geometryName = "box";
    skyBoxName.components[i].set({mass:0 , physicMaterial:"groundMaterial"});
    skyBoxName.components[i].textureFileName = skyBoxName.textureFilePath + skyBoxName.worldFileNames[i] + skyBoxName.filesExtension;
  }
  skyBoxName.addFunction(allLoaded);
  skyBoxName.addFunction(setGeometries);
  //skyBoxName.addFunction(setPhysicBodies);


  //skyBoxName.addFunction(changePositions);
  //skyBoxName.addFunction(readTexture);
  //skyBoxName.addFunction(addComponents)


  // for (let name of components){
  //   mainComposite.sceneObjects[name]={}
  //   addObject(mainComposite , mainComposite.sceneObjects[name]);
  //   mainComposite.sceneObjects[name].addFunction(changePositions);

  // }
  for (let prop of ["scale" , "visible"]){
    mainComposite.addLink(skyBoxName[prop] , skyBoxName.components[0][prop] , skyBoxName.components[1][prop],
      skyBoxName.components[2][prop],skyBoxName.components[3][prop],skyBoxName.components[4][prop],skyBoxName.components[5][prop]);
  }
  // for (let i=0;i<components.length;++i){
  //   mainComposite.addLink(mainComposite.sceneObjects[components[i]].texture , mainComposite.worlds[skyBoxName]["texture"+ String(i)]);
  // }
}

// function addComponents({worldFileNames}){

// }

// function setPhysicBodies({setGeometries}){
// }
function setGeometries({WorldPosition,worldDimension,allLoaded, thickness}){
  let l = worldDimension.x;
  let w = worldDimension.y;
  let h = worldDimension.z;
  let t = thickness;
  // front
  selfProxy.components[1].position = {x:0,y:0,z:-h/2};
  selfProxy.components[1].dimension = {length:l,width:w,height:t};

  // back
  selfProxy.components[0].position = {x:0,y:0,z:h/2};
  selfProxy.components[0].dimension = {length:l,width:w,height:t};

  // top
  selfProxy.components[4].position = {x:0,y:w/2,z:0};
  selfProxy.components[4].dimension = {length:l,width:t,height:h};

  // ground
  selfProxy.components[5].position = {x:0,y:-w/2,z:0};
  selfProxy.components[5].dimension = {length:l,width:t,height:h};

  // left
  selfProxy.components[2].position = {x:-l/2,y:0,z:0};
  selfProxy.components[2].dimension = {length:t,width:w,height:h};

  // right
  selfProxy.components[3].position = {x:+l/2,y:0,z:0};
  selfProxy.components[3].dimension = {length:t,width:w,height:h};
  return true;
}

const allLoaded = function({texture0,texture1,texture2,texture3,texture4,texture5}){
  return true;
  // return {length: components[5].dimension.length,
  //                   width: components[5].dimension.width,
  //                   height: components[0].dimension.width
  //                   };
}

// const readTexture = function({textureFilePath , components}){
//   for (let i=0;i<components.length;++i){
//     proxiedComposite.sceneObjects[components[i]].textureFileName = textureFilePath + components[i] + ".png";
//   }
//   return true;
// }

const changePositions = function({WorldPosition , worldDimension , components , test1}){
  //let componentName = currentAddress[currentAddress.length - 1].split("_")[1];
  let x = WorldPosition.x;
  let y = WorldPosition.y;
  let z = WorldPosition.z;

  let l = worldDimension.length * scale/ 2;
  let w = worldDimension.width * scale/ 2;
  let h = worldDimension.height * scale/ 2;

  // top
  components[4].mesh.position.set(0,0,0);
  components[4].mesh.quaternion.setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), Math.PI / 2 );
  components[4].mesh.rotateOnWorldAxis( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );
  components[4].mesh.position.set(x,y+h,z);
  // ground
  components[5].mesh.position.set(0,0,0);
  components[5].mesh.quaternion.setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), -Math.PI / 2 );
  components[5].mesh.rotateOnWorldAxis( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );
  components[5].mesh.position.set(x,y-h,z);
  // front
  components[1].mesh.position.set(0,0,0);
  components[1].mesh.position.set(x,y,z-l);
  // back
  components[0].mesh.position.set(0,0,0);
  components[0].mesh.quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI );
  components[0].mesh.position.set(x,y,z+l);
  // left
  components[2].mesh.position.set(0,0,0);
  components[2].mesh.quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );
  components[2].mesh.position.set(x-w,y,z);
  // right
  components[3].mesh.position.set(0,0,0);
  components[3].mesh.quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), -Math.PI / 2 );
  components[3].mesh.position.set(x+w,y,z);



  // switch (componentName){
  //   case "top":
  //     mesh.quaternion.setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), Math.PI / 2 );
  //     mesh.rotateOnWorldAxis( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );
  //     mesh.position.set(x,y+h,z);
  //     break;
  //   case "ground":
  //     mesh.quaternion.setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), -Math.PI / 2 );
  //     mesh.rotateOnWorldAxis( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );
  //     mesh.position.set(x,y-h,z);
  //     break;
  //   case "front":
  //       mesh.position.set(x,y,z-l);
  //     break;
  //   case "back":
  //       mesh.quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI );
  //       mesh.position.set(x,y,z+l);
  //     break;
  //   case "left":
  //       mesh.quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );
  //       mesh.position.set(x-w,y,z);
  //     break;
  //   case "right":
  //       mesh.quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), -Math.PI / 2 );
  //       mesh.position.set(x+w,y,z);
  //     break;
  // }
  return true;
}

// export const activeWorld = function({activeWorldName}){
//   // remove previous world if there is
//   if (activeWorld && activeWorld!=activeWorldName){
//     proxiedComposite.worlds[activeWorld].visible = false;
//   }
//   proxiedComposite.worlds[activeWorldName].visible = true;
//   return activeWorldName;
// }
