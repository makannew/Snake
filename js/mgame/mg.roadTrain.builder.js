
export function loadBuilder(mainComposite,roadTrain){
  roadTrain.build = function(){build(mainComposite,roadTrain)};
  roadTrain.addFunction(headBodiesLoaded);
}

function headBodiesLoaded({wheelsBodies,suspensionsBodies,chassisBody}){
  if (headBodiesLoaded) return true;
  for (let body of wheelsBodies){
    if(!body) return undefined;
  }
  for (let body of suspensionsBodies){
    if(!body) return undefined;
  }
  
  return true;
}

const build = function(mainComposite,roadTrain){
  roadTrain.wheels = [];
  roadTrain.wheelsBodies = [];
  roadTrain.suspensions = [];
  roadTrain.suspensionsBodies = [];
  roadTrain.gapRatio = .95;

  let x = roadTrain.position.x;
  let y = roadTrain.position.y;
  let z = roadTrain.position.z;
  let wheelPosX,rotation
  let chassisFront=0,chassisRear=0;
  let chassisWidth , maxChassisWidth;

  for (let wheelInfo of roadTrain.wheelsInfo){
    // build wheels
    let wheels = roadTrain.wheels;
    wheels.push({});
    let wheel = wheels[wheels.length - 1];
    if (wheelInfo.left){
      wheelPosX = x + wheelInfo.axelLength;
      rotation = Math.PI/2;
    }else{
      wheelPosX = x - wheelInfo.axelLength;
      rotation = -Math.PI/2;
    }
    mainComposite.utils.addObject(wheel);
    wheel.set({
      geometryName:"cylinder", 
      dimension:{radiusTop:wheelInfo.radius,radiusBottom:wheelInfo.radius,height:wheelInfo.width}, 
      position:{x:wheelPosX,y:y+wheelInfo.radius-wheelInfo.axelHeight,z:z+wheelInfo.distance}, 
      color:wheelInfo.color, 
      materialName:"lambert", 
      shinines:0,
      textureFileName:wheelInfo.textureFileName
    });
    wheel.quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1), rotation);
    mainComposite.utils.addPhysicBody(wheel);
    wheel.set({
      physicMaterial:wheelInfo.wheelMaterial, 
      mass:wheelInfo.wheelMass, 
      wheelLeft:wheelInfo.left, 
      wheelSteering:wheelInfo.steering, 
      driving:wheelInfo.engine, 
      stiffness:wheelInfo.stiffness, 
      damping:wheelInfo.damping, 
      springLenght:wheelInfo.springLegth
    });
    // build suspension
    let suspensions = roadTrain.suspensions;
    let susLength = (wheelInfo.axelLength-wheelInfo.width/2) * roadTrain.gapRatio;
    let susXPos;
    if (wheelInfo.left){
      susXPos = x + wheelInfo.axelLength - wheelInfo.width/2 - susLength/2;
    } else{
      susXPos = x - wheelInfo.axelLength + wheelInfo.width/2 + susLength/2;
    }
    suspensions.push({});
    let suspension = suspensions[suspensions.length - 1];
    mainComposite.utils.addObject(suspension);
    suspension.set({
      geometryName:"box", 
      dimension:{ height:wheelInfo.axelDiameter , width: wheelInfo.axelDiameter , length:susLength }, 
      position:{x:susXPos,y:y,z:z+wheelInfo.distance}, 
      color:wheelInfo.color, 
      materialName:"lambert", 
      shinines:0});
    mainComposite.utils.addPhysicBody(suspension);
    suspension.set({
      physicMaterial:wheelInfo.axelMaterial, 
      mass:wheelInfo.axelMass
    });
    if (wheelInfo.distance+wheelInfo.axelDiameter*2>chassisFront){
      chassisFront = wheelInfo.distance+wheelInfo.axelDiameter*2;
    }
    if (wheelInfo.distance-wheelInfo.axelDiameter*2<chassisRear){
      chassisRear = wheelInfo.distance-wheelInfo.axelDiameter*2;
    }

    // chassis width auto calculation
    //if (wheelInfo.steering){
      maxChassisWidth = (wheelInfo.axelLength-wheelInfo.radius)*2
    // }else{
    //   maxChassisWidth = wheelInfo.axelLength*2*roadTrain.gapRatio;
    // }
    if (!chassisWidth || chassisWidth>maxChassisWidth){
      chassisWidth = maxChassisWidth;
    }
  }

  // set chassisWidth if not defined by user
  if (!roadTrain.chassisWidth){
    roadTrain.chassisWidth = chassisWidth;
  }
  // set chassisFrontLength if not defined by user
  if (!roadTrain.chassisFrontLength){
    roadTrain.chassisFrontLength = chassisFront;
  }
  // set chassisRearLength if not defined by user
  if (!roadTrain.chassisRearLength){
    roadTrain.chassisRearLength = chassisRear;
  }

  let  massCenterChassisLength , extensionChassisLength , extensionChassisLocalZ;
  roadTrain.chassisLength = roadTrain.chassisFrontLength-roadTrain.chassisRearLength;
  if (Math.abs(roadTrain.chassisFrontLength)<Math.abs(roadTrain.chassisRearLength)){
    massCenterChassisLength = Math.abs(roadTrain.chassisFrontLength)*2;
    extensionChassisLocalZ = -roadTrain.chassisFrontLength + (roadTrain.chassisRearLength + roadTrain.chassisFrontLength)/2;
  }else{
    massCenterChassisLength = Math.abs(roadTrain.chassisRearLength)*2;
    extensionChassisLocalZ = -roadTrain.chassisRearLength + (roadTrain.chassisRearLength + roadTrain.chassisFrontLength)/2;
  }
  extensionChassisLength = roadTrain.chassisLength - massCenterChassisLength;
  // chassis
  roadTrain.chassisTop={};
  mainComposite.utils.addObject(roadTrain.chassisTop);
  roadTrain.chassisTop.set({
    geometryName : "box", 
    dimension : { height:roadTrain.chassisLength , width: roadTrain.axelsVerticalFreedom/8 , length: roadTrain.chassisWidth}, 
    position :{x:x,y:y+roadTrain.axelsVerticalFreedom,z:z+(roadTrain.chassisFrontLength+roadTrain.chassisRearLength)/2}, 
    color : roadTrain.chassisColor, 
    materialName:"lambert" 
  });

  roadTrain.chassis={};
  mainComposite.utils.addObject(roadTrain.chassis);
  roadTrain.chassis.set({
    geometryName : "box" , 
    dimension : { height:massCenterChassisLength , width: roadTrain.axelsVerticalFreedom/8 , length:roadTrain.chassisWidth}, 
    position :{x:x,y:y-roadTrain.axelsVerticalFreedom,z:z}, 
    color : roadTrain.chassisColor, 
    materialName:"lambert" 
  });

  
if (extensionChassisLength!=0){
  roadTrain.chassisExtension={};
  mainComposite.utils.addObject(roadTrain.chassisExtension);
  roadTrain.chassisExtension.set({
    geometryName : "box" , 
    dimension : { height:extensionChassisLength , width: roadTrain.axelsVerticalFreedom/8 , length:roadTrain.chassisWidth}, 
    position :{x:x,y:y-roadTrain.axelsVerticalFreedom,z:z+extensionChassisLocalZ}, 
    color : roadTrain.chassisColor, 
    materialName:"lambert" 
  });
  mainComposite.utils.makePhysicCompound([roadTrain.chassis,roadTrain.chassisExtension,roadTrain.chassisTop]);
}else{
  mainComposite.utils.makePhysicCompound([roadTrain.chassis,roadTrain.chassisTop]);
}

  roadTrain.chassis.set({mass:roadTrain.chassisMass , compoundPosition:{x:x,y:y ,z:z} });
  mainComposite.addLink(roadTrain.chassis.compoundPosition, roadTrain.position);

  for (let i=0,len=roadTrain.wheels.length;i<len;++i){
    roadTrain.addLink(roadTrain.wheels[i].body , roadTrain.wheelsBodies[i]);
    roadTrain.addLink(roadTrain.suspensions[i].body , roadTrain.suspensionsBodies[i]);

  }
  roadTrain.addLink(roadTrain.chassis.body , roadTrain.chassisBody);

}
