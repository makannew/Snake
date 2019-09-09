
import { shape , getMaterial } from "./mg.physic.js"

export function makePhysicCompound(mainComposite , components){
  if (!components[0].physicMaterial) components[0].physicMaterial= "objectMaterial";
  if (!components[0].linearDamping) components[0].linearDamping = 0.15;
  if (!components[0].angularDamping) components[0].angularDamping = 0.15;

  components[0].compoundPosition = undefined;// choose correctly inside the shape

  for (let obj of components){
    if (!obj.cylinderSegments) obj.cylinderSegments = 16;
    if (!obj.quaternion) obj.quaternion = new CANNON.Quaternion(0,0,0,1);
    if (obj===components[0]){
      obj.centerOfGravity = true;
    }else{
      obj.centerOfGravity = undefined;
    }
    obj.compoundBodyShapeNumber= undefined;
    obj.addFunction(shape);
    obj.addFunction(getMaterial);

    obj.addFunction(relativePosition);
    obj.addFunction(relativeQuaternion);
    obj.addFunction(body);
    obj.addFunction(addToCompoundBody);
    obj.addFunction(updateCompoundBody);
    obj.addFunction(readCompoundBodyShapeNumber);


    mainComposite.addLink(mainComposite.physicSettings.materials , obj.materials);
    mainComposite.addLink(mainComposite.cannon , obj.cannon);

    mainComposite.addLink(components[0].mass , obj.mass);
    mainComposite.addLink(components[0].physicMaterial , obj.physicMaterial);
    mainComposite.addLink(components[0].compoundPosition , obj.compoundPosition);
    mainComposite.addLink(components[0].body , obj.body);
    mainComposite.addLink(mainComposite.timeStamp , obj.timeStamp);

  }
}

function readCompoundBodyShapeNumber({compoundBodyShapeNumber}){
  return true;
}
//
function relativePosition({compoundPosition  }){
  if (relativePosition) return relativePosition;
  return new CANNON.Vec3(position.x - compoundPosition.x  , position.y - compoundPosition.y , position.z - compoundPosition.z );
}

function relativeQuaternion({quaternion}){
  return new CANNON.Quaternion(quaternion.x , quaternion.y , quaternion.z , quaternion.w);
}

function body({mass , physicMaterial , cannon , centerOfGravity , compoundPosition , shape , relativePosition , relativeQuaternion}){
  if (body) cannon.remove(body);
  let newBody = new CANNON.Body({mass:mass , material:physicMaterial});
  newBody.position.set(compoundPosition.x , compoundPosition.y , compoundPosition.z);
  //newBody.quaternion = new CANNON.Quaternion(0,0,0,1);
  newBody.linearDamping = linearDamping;
  newBody.angularDamping = angularDamping;

  cannon.add(newBody);
  return newBody;
}



function addToCompoundBody({body , relativePosition , shape , relativeQuaternion}){
  if (addToCompoundBody) return addToCompoundBody;
  compoundBodyShapeNumber = body.shapes.length ;
  body.addShape(shape , relativePosition, relativeQuaternion);


  return shape;
}

const updateCompoundBody = function({timeStamp , addToCompoundBody}){
  // let threeQuaternion = new THREE.Quaternion();
  // threeQuaternion.set(body.quaternion.x , body.quaternion.y  ,body.quaternion.z  ,body.quaternion.w )
  // let orientation = new THREE.Quaternion(relativeQuaternion.x , relativeQuaternion.y ,relativeQuaternion.z , relativeQuaternion.w);
  // let newPos = new THREE.Vector3(relativePosition.x , relativePosition.y ,relativePosition.z );
  // let pos = new THREE.Vector3(body.position.x,body.position.y,body.position.z);
  


  let threeQuaternion = new THREE.Quaternion().set(body.quaternion.x , body.quaternion.y  ,body.quaternion.z  ,body.quaternion.w )
  let orientation = new THREE.Quaternion(body.shapeOrientations[compoundBodyShapeNumber].x , body.shapeOrientations[compoundBodyShapeNumber].y ,body.shapeOrientations[compoundBodyShapeNumber].z , body.shapeOrientations[compoundBodyShapeNumber].w);
  let newPos = new THREE.Vector3(body.shapeOffsets[compoundBodyShapeNumber].x , body.shapeOffsets[compoundBodyShapeNumber].y ,body.shapeOffsets[compoundBodyShapeNumber].z );
  let pos = new THREE.Vector3(body.position.x,body.position.y,body.position.z);
  let qut = new THREE.Quaternion(body.quaternion.x,body.quaternion.y,body.quaternion.z,body.quaternion.w);
  
  threeQuaternion.multiply(orientation);
  //orientation.multiply(threeQuaternion)
  //orientation.multiply(qut)
  //newPos.applyQuaternion(orientation);

  //newPos.applyQuaternion(threeQuaternion);
  //newPos.add(pos);

  //newPos.applyQuaternion(orientation);

  newPos.applyQuaternion(threeQuaternion);

  newPos.applyQuaternion(qut);
  newPos.add(pos);



  sceneUpdate.position.x = newPos.x;
  sceneUpdate.position.y = newPos.y;
  sceneUpdate.position.z = newPos.z;

  sceneUpdate.quaternion.x = threeQuaternion.x;
  sceneUpdate.quaternion.y = threeQuaternion.y;
  sceneUpdate.quaternion.z = threeQuaternion.z;
  sceneUpdate.quaternion.w = threeQuaternion.w;
}
