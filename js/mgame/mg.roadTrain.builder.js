
export function loadBuilder(roadTrain){
  roadTrain.wheels = undefined;
  roadTrain.wheelsBodies = undefined;
  roadTrain.suspensions = undefined;
  roadTrain.suspensionsBodies = undefined;
  roadTrain.gapRatio = .95;
  if (!roadTrain.position) roadTrain.position={x:0,y:0,z:0};
  if (!roadTrain.quaternion) roadTrain.quaternion={x:0,y:0,z:0,w:1};

  roadTrain.addFunction(buildRoadTrain)
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

function buildRoadTrain({wheelsInfo}){
  if (buildRoadTrain) return true;
  let roadTrain = self;
  wheels = [];
  wheelsBodies = [];
  suspensions = [];
  suspensionsBodies = [];
  gapRatio = .95;

  let x = position.x;
  let y = position.y;
  let z = position.z;

  let threeQuat = new THREE.Quaternion(quaternion.x,quaternion.y,quaternion.z,quaternion.w)

  let rotation
  let chassisFrontEst=0,chassisRearEst=0;
  let chassisWidthEst , maxChassisWidth;

  for (let wheelInfo of roadTrain.wheelsInfo){
    let wheels = roadTrain.wheels;

    // build wheels
    wheels.push({});
    let wheel = wheels[wheels.length - 1];
    
    let wheelPos = new THREE.Vector3(wheelInfo.axelLength,wheelInfo.radius-wheelInfo.axelHeight,wheelInfo.distance)
    if (wheelInfo.left){
      rotation = Math.PI/2;
    }else{
      wheelPos.x = -wheelPos.x;
      rotation = -Math.PI/2;
    }
    wheelPos.applyQuaternion(threeQuat);
    let correctionQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1).normalize(), rotation);
    let wheelQuat = new THREE.Quaternion(threeQuat.x,threeQuat.y,threeQuat.z,threeQuat.w)
    wheelQuat.multiply(correctionQuat);

    mainComposite.utils.addObject(wheel);
    wheel.set({
      geometryName:"cylinder", 
      dimension:{radiusTop:wheelInfo.radius,radiusBottom:wheelInfo.radius,height:wheelInfo.width}, 
      position:{x:x+wheelPos.x , y:y+wheelPos.y , z:z+wheelPos.z}, 
      color:wheelInfo.color, 
      quaternion:new THREE.Quaternion(wheelQuat.x,wheelQuat.y,wheelQuat.z,wheelQuat.w),
      materialName:"phong", 
      shinines:0,
      textureFileName:wheelInfo.textureFileName
    });

    let susLength = (wheelInfo.axelLength-wheelInfo.width/2) * roadTrain.gapRatio;

    mainComposite.utils.addPhysicBody(wheel);
    wheel.set({
      angularDamping:0,
      linearDamping:0,
      physicMaterial:wheelInfo.wheelMaterial, 
      mass:wheelInfo.wheelMass, 
      wheelLeft:wheelInfo.left, 
      wheelSteering:wheelInfo.steering, 
      driving:wheelInfo.engine, 
      stiffness:wheelInfo.stiffness, 
      damping:wheelInfo.damping, 
      springLenght:wheelInfo.springLegth,
      allowSleep:false,
      susLength
    });
    // build suspension
    let suspensions = roadTrain.suspensions;
    let susPos = new THREE.Vector3(wheelInfo.axelLength - wheelInfo.width/2 - susLength/2,0,wheelInfo.distance);

    if (!wheelInfo.left){
      susPos.x*=-1;
    }
    susPos.applyQuaternion(threeQuat);
    
    suspensions.push({});
    let suspension = suspensions[suspensions.length - 1];
    mainComposite.utils.addObject(suspension);
    suspension.set({
      geometryName:"box", 
      dimension:{ height:wheelInfo.axelDiameter , width: wheelInfo.axelDiameter , length:susLength }, 
      position:{x:x+susPos.x , y:y+susPos.y , z:z+susPos.z}, 
      quaternion:new THREE.Quaternion(threeQuat.x,threeQuat.y,threeQuat.z,threeQuat.w),

      color:wheelInfo.color, 
      materialName:"phong", 
      shinines:0
    });
    mainComposite.utils.addPhysicBody(suspension);
    suspension.set({
      physicMaterial:wheelInfo.axelMaterial, 
      mass:wheelInfo.axelMass,
      allowSleep:false
    });
    if (wheelInfo.distance+wheelInfo.axelDiameter*2>chassisFrontEst){
      chassisFrontEst = wheelInfo.distance+wheelInfo.axelDiameter*2;
    }
    if (wheelInfo.distance-wheelInfo.axelDiameter*2<chassisRearEst){
      chassisRearEst = wheelInfo.distance-wheelInfo.axelDiameter*2;
    }

    // chassis width auto calculation
      maxChassisWidth = (wheelInfo.axelLength-wheelInfo.radius)*2
    if (!chassisWidthEst || chassisWidthEst>maxChassisWidth){
      chassisWidthEst = maxChassisWidth;
    }
  }

  // set chassisWidth if not defined by user
  if (!roadTrain.chassisWidth){
    roadTrain.chassisWidth = chassisWidthEst;
    //console.log("with",roadTrain.chassisWidth)

  }
  // set chassisFrontLength if not defined by user
  if (!roadTrain.chassisFrontLength){
    roadTrain.chassisFrontLength = chassisFrontEst;
  }
  // set chassisRearLength if not defined by user
  if (!roadTrain.chassisRearLength){
    roadTrain.chassisRearLength = chassisRearEst;
  }

  let  massCenterChassisLength , extensionChassisLength , extensionChassisLocalZ;
  roadTrain.chassisLength = roadTrain.chassisFrontLength-roadTrain.chassisRearLength;
  if (Math.abs(chassisFrontLength)<Math.abs(chassisRearLength)){
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
  let chassisTopPos = new THREE.Vector3(
    0,
    roadTrain.axelsVerticalFreedom,
    (roadTrain.chassisFrontLength+roadTrain.chassisRearLength)/2
    );
  chassisTopPos.applyQuaternion(threeQuat);

  roadTrain.chassisTop.set({
    geometryName : "box", 
    dimension : { height:roadTrain.chassisLength , width: roadTrain.axelsVerticalFreedom/8 , length: roadTrain.chassisWidth}, 
    position :{x:x+chassisTopPos.x , y:y+chassisTopPos.y , z:z+chassisTopPos.z}, 
    quaternion:new THREE.Quaternion(threeQuat.x,threeQuat.y,threeQuat.z,threeQuat.w),
    color : roadTrain.chassisColor, 
    materialName:"phong" 
  });

  roadTrain.chassis={};
  mainComposite.utils.addObject(roadTrain.chassis);
  let chassisPos = new THREE.Vector3(
    0,
    -roadTrain.axelsVerticalFreedom,
    0
    );
  chassisPos.applyQuaternion(threeQuat);

  roadTrain.chassis.set({
    geometryName : "box" , 
    dimension : { height:massCenterChassisLength , width: roadTrain.axelsVerticalFreedom/8 , length:roadTrain.chassisWidth}, 
    position :{x:x+chassisPos.x , y:y+chassisPos.y , z:z+chassisPos.z}, 
    quaternion:new THREE.Quaternion(threeQuat.x,threeQuat.y,threeQuat.z,threeQuat.w),
    color : roadTrain.chassisColor, 
    materialName:"phong" 
  });

  
if (extensionChassisLength!=0){
  roadTrain.chassisExtension={};
  mainComposite.utils.addObject(roadTrain.chassisExtension);
  let chassisExtensionPos = new THREE.Vector3(
    0,
    -roadTrain.axelsVerticalFreedom,
    extensionChassisLocalZ
    );
  chassisExtensionPos.applyQuaternion(threeQuat);

  roadTrain.chassisExtension.set({
    geometryName : "box" , 
    dimension : { height:extensionChassisLength , width: roadTrain.axelsVerticalFreedom/8 , length:roadTrain.chassisWidth}, 
    position :{x:x+chassisExtensionPos.x , y:y+chassisExtensionPos.y , z:z+chassisExtensionPos.z}, 
    quaternion:new THREE.Quaternion(threeQuat.x,threeQuat.y,threeQuat.z,threeQuat.w),
    color : roadTrain.chassisColor, 
    materialName:"phong" 
  });
  mainComposite.utils.makePhysicCompound([roadTrain.chassis,roadTrain.chassisExtension,roadTrain.chassisTop]);
}else{
  mainComposite.utils.makePhysicCompound([roadTrain.chassis,roadTrain.chassisTop]);
}

  roadTrain.chassis.set({
    mass:roadTrain.chassisMass , 
   });
  mainComposite.addLink(roadTrain.chassis.position, roadTrain.position);
  mainComposite.addLink(roadTrain.chassis.quaternion, roadTrain.quaternion);


  for (let i=0,len=roadTrain.wheels.length;i<len;++i){
    roadTrain.addLink(roadTrain.wheels[i].body , roadTrain.wheelsBodies[i]);
    roadTrain.addLink(roadTrain.suspensions[i].body , roadTrain.suspensionsBodies[i]);
  }
  roadTrain.addLink(roadTrain.chassis.body , roadTrain.chassisBody);

}
