
export function newLockConstraint (mainComposite ,constraintName){
  constraintName.loadedObjects = mainComposite.loadedObjects.getProxyLessObject;

  mainComposite.addLink(mainComposite.cannon , constraintName.cannon);
  constraintName.selfProxy = constraintName;
  constraintName.constraints = [];
  constraintName.linkedBodies = [];
  constraintName.addedIndex = 0;
  constraintName.active = true;
  constraintName.maxForce = 1e6;
  constraintName.addFunction(addBodies);
  constraintName.addFunction(addLockConstraint);
  constraintName.addFunction(setStatus);
}

function addBodies({bodies}){
  for (let body of bodies){
    linkedBodies.push(undefined);
    proxiedComposite.addLink(body.body , selfProxy.linkedBodies[linkedBodies.length-1]);
  }
  return true;
}

function addLockConstraint({linkedBodies}){
  let previous = undefined;
  for (let i=addedIndex;i<linkedBodies.length;++i){
    if (linkedBodies[i]){
      if (!previous){
        previous = linkedBodies[i];
      }else{
        constraints.push(new CANNON.LockConstraint(linkedBodies[i] , previous , {maxForce:maxForce}));
        cannon.addConstraint(constraints[constraints.length - 1]);
        loadedObjects.push(constraints[constraints.length - 1]);

        previous = linkedBodies[i];
        addedIndex = i;
      }
    }else{
      break;
    }
  }
  return true;
}

function setStatus({active , addLockConstraint}){
  for (let constraint of constraints){
    if (active){
      constraint.enable();
    }else{
      constraint.disable();
    }
  }
}
