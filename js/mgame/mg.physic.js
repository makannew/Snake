
export function addPhysicBody(mainComposite , obj){
  if (!obj.physicMaterial) obj.physicMaterial= "objectMaterial";
  if (!obj.linearDamping) obj.linearDamping = 0.15;
  if (!obj.angularDamping) obj.angularDamping = 0.15;

  if (!obj.cylinderSegments) obj.cylinderSegments = 16;
  if (obj.physicStatus===undefined) obj.physicStatus = true;
  if (obj.sleep==undefined) obj.sleep = false;

  obj.addFunction(shape);
  obj.addFunction(body);
  obj.addFunction(getMaterial);
  obj.addFunction(updatePhysic);
  obj.addFunction(setStatus);
  obj.addFunction(setActivityStatus);
  obj.addFunction(addPhysicToLoadedObjects);
  obj.cannon = mainComposite.cannon.getProxyLessObject;
  obj.materials = mainComposite.physicSettings.materials.getProxyLessObject;
}

function addPhysicToLoadedObjects({body}){
  if (addToLoadedObjects) return true;
  loadedObjects.push(body);
  return true;
}

export function setActivityStatus({sleep}){
  if (sleep){
    if (timeStamp){
      mainComposite.removeLink(mainComposite.timeStamp,self.timeStamp);
    }
  }else{
    mainComposite.addLink(mainComposite.timeStamp,self.timeStamp);

  }
}

const updatePhysic = function({timeStamp , body}){
  let pos = body.position;
  let quat = body.quaternion;
  position = pos;
  quaternion = quat;
}

export function getMaterial({materials , physicMaterial}){
  if (physicMaterial in materials){
    return materials[physicMaterial];
  }else{
    return undefined;
  }
}

export function setStatus({body,physicStatus}){
  if(physicStatus){
    cannon.add(body);
  }else{
    cannon.remove(body);
  }
}
export function body({mesh , getMaterial , shape , mass}){
  if (body) return body;
  let newBody = new CANNON.Body({mass , shape , material:getMaterial});
  newBody.position.set(position.x , position.y , position.z);
  newBody.quaternion.set(quaternion.x , quaternion.y , quaternion.z , quaternion.w);
  newBody.linearDamping = linearDamping;
  newBody.angularDamping = angularDamping;
  return newBody;
}

export function shape ({geometryName , dimension , scale}){
  let result;
  switch (geometryName){
    case "plane":
      if (heightData){
        result = new CANNON.Heightfield(heightData, {elementSize:dimension.width/dimension.xSeg});// error: heightData need to converted 
      }else{
        result = new CANNON.Plane();
      }
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
