
export function newHingeConstraint (mainComposite ,constraintName){
  mainComposite.addLink(mainComposite.cannon , constraintName.cannon);
  constraintName.selfProxy = constraintName;
  constraintName.active = true;
  constraintName.maxForce = 1e6;
  constraintName.offsetA = {x:0,y:0,z:0};
  constraintName.offsetB = {x:0,y:0,z:0};
  constraintName.addFunction(addBodyA);
  constraintName.addFunction(addBodyB);
  constraintName.addFunction(hingeConstraint);
  constraintName.addFunction(setStatus);
  constraintName.addFunction(pivotA);
  constraintName.addFunction(pivotB);
  constraintName.addFunction(setMotor);
  constraintName.addFunction(setMotorSpeed);
}

function addBodyA({bodyA}){
    proxiedComposite.addLink(bodyA.body , selfProxy.bodyABody);;
  return true;
}

function addBodyB({bodyB}){
  proxiedComposite.addLink(bodyB.body , selfProxy.bodyBBody);;
return true;
}

function pivotA({offsetA}){
    return new CANNON.Vec3(offsetA.x , offsetA.y , offsetA.z );
}

function pivotB({offsetB}){
  return new CANNON.Vec3(offsetB.x , offsetB.y , offsetB.z );
}

function hingeConstraint({bodyABody , bodyBBody , pivotA ,pivotB , maxForce , cannon}){
  let newConstraint = new CANNON.HingeConstraint(bodyABody , bodyBBody , {pivotA:pivotA, pivotB:pivotB, maxForce:maxForce});
  if (axisA) newConstraint.axisA = axisA;
  if (axisB) newConstraint.axisB = axisB;

  if (hingeConstraint){
    hingeConstraint.disable()
  }
  cannon.addConstraint(newConstraint);
  return newConstraint;
}

function setStatus({active , hingeConstraint}){
    if (active){
      hingeConstraint.enable();
    }else{
      hingeConstraint.disable();
    }
}

function setMotor({motor , hingeConstraint}){
  if (motor){
    hingeConstraint.enableMotor();
  }else{
    hingeConstraint.disableMotor();
  }
  return true;
}

function setMotorSpeed({speed , hingeConstraint}){
  hingeConstraint.setMotorSpeed(speed);
}
