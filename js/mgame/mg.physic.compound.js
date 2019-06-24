
import { shape , getMaterial } from "./mg.physic.js"

export function makePhysicCompound(mainComposite , sceneObjects){
  if (!sceneObjects[0].compoundMass) sceneObjects[0].compoundMass= undefined;
  if (!sceneObjects[0].compoundPosition) sceneObjects[0].compoundPosition= undefined;
  if (!sceneObjects[0].physicMaterial) sceneObjects[0].physicMaterial= "objectMaterial";
  sceneObjects[0].compoundBody= undefined;
  //sceneObjects[0].loadedComponents = 0;


  for (let sceneObject of sceneObjects){
    if (!sceneObject.cylinderSegments) sceneObject.cylinderSegments = 16;
    
    sceneObject.addFunction(shape);
    sceneObject.addFunction(getMaterial);
    sceneObject.addFunction(relativePosition);
    sceneObject.addFunction(compoundBody);
    sceneObject.addFunction(addToCompoundBody);
    sceneObject.addFunction(updateCompoundBody);


    mainComposite.addLink(mainComposite.physicSettings.materials , sceneObject.materials);
    mainComposite.addLink(mainComposite.cannon , sceneObject.cannon);

    mainComposite.addLink(sceneObjects[0].compoundMass , sceneObject.compoundMass);
    mainComposite.addLink(sceneObjects[0].physicMaterial , sceneObject.physicMaterial);
    mainComposite.addLink(sceneObjects[0].compoundPosition , sceneObject.compoundPosition);
    mainComposite.addLink(sceneObjects[0].compoundBody , sceneObject.compoundBody);
    //mainComposite.addLink(sceneObjects[0].loadedComponents , sceneObject.loadedComponents);
    mainComposite.addLink(mainComposite.timeStamp , sceneObject.timeStamp);


  }


}

function relativePosition({compoundPosition , position}){
  let compoundVec = new CANNON.Vec3(compoundPosition.x,compoundPosition.y,compoundPosition.z);
  let positionVec = new CANNON.Vec3(position.x,position.y,position.z);
  return positionVec.vsub(compoundVec);
}

function compoundBody({compoundMass , physicMaterial , compoundPosition , cannon}){
  if (compoundBody) return true;
  let newBody = new CANNON.Body({mass:compoundMass , material:physicMaterial , position:new CANNON.Vec3(compoundPosition.x,compoundPosition.y,compoundPosition.z)});
  cannon.add(newBody);
  return newBody;
}

function addToCompoundBody({compoundBody , relativePosition , shape , mesh}){
  compoundBody.addShape(shape , relativePosition , mesh.quaternion);
  //loadedComponents = loadedComponents + 1;
  return true;
}

const updateCompoundBody = function({timeStamp , addToCompoundBody}){
    sceneUpdate.position.x = compoundBody.position.x + relativePosition.x;
    sceneUpdate.position.y = compoundBody.position.y + relativePosition.y;
    sceneUpdate.position.z = compoundBody.position.z + relativePosition.z;
    //
    sceneUpdate.quaternion.x = compoundBody.quaternion.x;
    sceneUpdate.quaternion.y = compoundBody.quaternion.y;
    sceneUpdate.quaternion.z = compoundBody.quaternion.z;
    sceneUpdate.quaternion.w = compoundBody.quaternion.w;
}
