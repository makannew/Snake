
export function newLockConstraint (mainComposite ,constraintName){
  mainComposite.constraints[constraintName] = {};
  let obj = mainComposite.constraints[constraintName];
  mainComposite.addLink(mainComposite.cannon , obj.cannon);

  obj.constraints = [];
  obj.linkedBodies = [];
  obj.addFunction(addBodies);
  obj.addFunction(addLockConstraint);
}

function addBodies({bodies}){
  for (let body of bodies){
    linkedBodies.push(undefined);
    proxiedComposite.addLink(body.body , proxiedComposite.constraints[currentAddress[currentAddress.length - 1]].linkedBodies[linkedBodies.length-1]);;
  }
  return true;
}

function addLockConstraint({linkedBodies , addBodies}){
  let previous = undefined;
  for (let body of linkedBodies){
  console.log("called" , body)

    if (body){
      if (previous===undefined){

        previous = body;
      }else{
        constraints.push(new CANNON.LockConstraint(body,previous));
        cannon.addConstraint(constraints[constraints.length - 1]);

        previous = body;
      }
    }
  }
}