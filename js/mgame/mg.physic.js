
export function physicBodyBuilder(CompositeObject){
  return function(){
    let result = CompositeObject();
    result.material = "objectMaterial";
    result.damping = 0.15;
    result.cylinderSegments = 16;

    result.addFunction (initialize);
    result.addFunction(shape);
    result.addFunction(body);
    result.addFunction(getMaterial);
    result.addFunction(update);


    return result;
  }

}


const initialize = function({threeBodyName}){
  const physicBodyName = currentAddress[currentAddress.length - 1];
  if (initialize && initialize !=threeBodyName && initialize!=""){
    //proxiedComposite.removeLink(proxiedComposite.sceneObjects[initialize].position , proxiedComposite.physicBodies[physicBodyName].position);
    proxiedComposite.removeLink(proxiedComposite.sceneObjects[initialize].dimension , proxiedComposite.physicBodies[physicBodyName].dimension);
    proxiedComposite.removeLink(proxiedComposite.sceneObjects[initialize].geometryName , proxiedComposite.physicBodies[physicBodyName].geometryName);
    proxiedComposite.removeLink(proxiedComposite.sceneObjects[initialize].scale , proxiedComposite.physicBodies[physicBodyName].scale);
    proxiedComposite.removeLink(proxiedComposite.sceneObjects[initialize].sceneUpdate , proxiedComposite.physicBodies[physicBodyName].sceneUpdate);
  }
  if (!initialize){
    proxiedComposite.addLink(proxiedComposite.three , proxiedComposite.physicBodies[physicBodyName].three);
    proxiedComposite.addLink(proxiedComposite.physicSettings.cannon , proxiedComposite.physicBodies[physicBodyName].cannon);
    proxiedComposite.addLink(proxiedComposite.physicSettings.materials , proxiedComposite.physicBodies[physicBodyName].materials);
    proxiedComposite.addLink(proxiedComposite.timeStamp , proxiedComposite.physicBodies[physicBodyName].timeStamp);

  }
  if (threeBodyName!=""){
    //proxiedComposite.addLink(proxiedComposite.sceneObjects[threeBodyName].position , proxiedComposite.physicBodies[physicBodyName].position);
    proxiedComposite.addLink(proxiedComposite.sceneObjects[threeBodyName].dimension , proxiedComposite.physicBodies[physicBodyName].dimension);
    proxiedComposite.addLink(proxiedComposite.sceneObjects[threeBodyName].geometryName , proxiedComposite.physicBodies[physicBodyName].geometryName);
    proxiedComposite.addLink(proxiedComposite.sceneObjects[threeBodyName].scale , proxiedComposite.physicBodies[physicBodyName].scale);
    proxiedComposite.addLink(proxiedComposite.sceneObjects[threeBodyName].sceneUpdate , proxiedComposite.physicBodies[physicBodyName].sceneUpdate);
  }
  return threeBodyName
}

const update = function({timeStamp , body}){
  if (body && mass!=0){
    // const physicBodyName = currentAddress[currentAddress.length - 1];
    // let newPosition = Object.assign({} , body.position)
    // proxiedComposite.physicBodies[physicBodyName].position = newPosition;
    sceneUpdate.position.x = body.position.x;
    sceneUpdate.position.y = body.position.y;
    sceneUpdate.position.z = body.position.z;
    //
    sceneUpdate.quaternion.x = body.quaternion.x;
    sceneUpdate.quaternion.y = body.quaternion.y;
    sceneUpdate.quaternion.z = body.quaternion.z;
    sceneUpdate.quaternion.w = body.quaternion.w;

  }
}
const getMaterial = function({materials , material}){
  if (material in materials){
    return materials[material];
  }else{
    return undefined;
  }
}
const body = function({sceneUpdate , getMaterial , shape , mass , cannon }){
  if (body){
    cannon.remove(body);
  }
  if (!sceneUpdate){
    return false;
  }
  let cannonBody = new CANNON.Body({mass: mass , shape: shape , material: getMaterial });
  cannonBody.position.x = sceneUpdate.position.x;
  cannonBody.position.y = sceneUpdate.position.y;
  cannonBody.position.z = sceneUpdate.position.z;

  //
  cannonBody.quaternion.x = sceneUpdate.quaternion.x;
  cannonBody.quaternion.y = sceneUpdate.quaternion.y;
  cannonBody.quaternion.z = sceneUpdate.quaternion.z;
  cannonBody.quaternion.w = sceneUpdate.quaternion.w;
  //
  cannonBody.linearDamping = damping;
  cannon.add(cannonBody);
  return cannonBody;
}

const shape = function({geometryName , dimension , scale}){
  let result;
  switch (geometryName){
    case "plane":
      result = new CANNON.Plane();
      break;
    case "box":
      result =  new CANNON.Box(new CANNON.Vec3(dimension.length * scale/2 ,dimension.width * scale/2 ,dimension.height * scale/2));
      break;
    case "sphere":
      result = new CANNON.Sphere(dimension.radius * scale);
      break;
    case "cylinder":
      result = new CANNON.Cylinder( dimension.radiusTop, dimension.radiusBottom , 
        dimension.height,cylinderSegments);
        let quat = new CANNON.Quaternion();
        quat.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
        let translation = new CANNON.Vec3(0,0,0);
        result.transformAllPoints(translation,quat);
      break;

  }

  return result;
}
