
export function newDistanceConstraint (mainComposite ,constraintName){
  constraintName.loadedObjects = mainComposite.loadedObjects.getProxyLessObject;
  constraintName.mainComposite = mainComposite;

  constraintName.addFunction(addToLoadedObjects);

  mainComposite.addLink(mainComposite.cannon , constraintName.cannon);
  constraintName.selfProxy = constraintName;
  constraintName.active = true;
  constraintName.maxForce = 1e6;
  constraintName.distance = undefined;
  constraintName.addFunction(addBodyA);
  constraintName.addFunction(addBodyB);
  constraintName.addFunction(distanceConstraint);
  constraintName.addFunction(setStatus);
}

function addToLoadedObjects({distanceConstraint}){
  if (addToLoadedObjects) return true;
  mainComposite.loadedObjects.push(distanceConstraint);
  return true;
}

function addBodyA({bodyA}){
    proxiedComposite.addLink(bodyA.body , selfProxy.bodyABody);
  return true;
}

function addBodyB({bodyB}){
  proxiedComposite.addLink(bodyB.body , selfProxy.bodyBBody);
return true;
}

function distanceConstraint({bodyABody , bodyBBody , maxForce , cannon}){
  let newConstraint = new CANNON.DistanceConstraint(bodyABody , bodyBBody);
  if (distance) newConstraint.distance = distance;
  newConstraint.maxForce = maxForce;
  if (distanceConstraint){
    distanceConstraint.disable()
  }
  cannon.addConstraint(newConstraint);
  return newConstraint;
}

function setStatus({active , distanceConstraint}){
    if (active){
      distanceConstraint.enable();
    }else{
      distanceConstraint.disable();
    }
}
