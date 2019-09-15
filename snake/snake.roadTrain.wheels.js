// truck head
export function truckWheelsInfo(){
  let  radius=.65,width=.3,axelLength=1.4,axelHeight=.8,axelDiameter=.15  ;
  let frontAxel = 3.1 , midleAxel = -1.9 , rearAxel = -3.5;
  let frontStiffness = 280,frontDamping = 60,frontSpringLength = .8;
  let rearStiffness = 140,rearDamping = 30,rearSpringLength = .8;
  let angularDamping=0;
  let wheelMass = 1, axelMass = 25;
  let textureFileName = undefined , color=0x777777;
  let wheelMaterial="wheelMaterial", axelMaterial="objectMaterial", fakeMaterial="fakeWheelMaterial";
  let steeringWheelMass = 1, steeringAxelMass = 25;
  let wheelsInfo=[];
  //front left
  wheelsInfo.push({
    radius,
    width,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:frontAxel,
    stiffness:frontStiffness,
    damping:frontDamping,
    springLegth:frontSpringLength,
    steering:true,
    engine:true,
    left:true,
    wheelMass:steeringWheelMass,
    axelMass:steeringAxelMass,
    textureFileName,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping
  });
  //front right
  wheelsInfo.push({
    radius,
    width,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:frontAxel,
    stiffness:frontStiffness,
    damping:frontDamping,
    springLegth:frontSpringLength,
    steering:true,
    engine:true,
    left:false,
    wheelMass:steeringWheelMass,
    axelMass:steeringAxelMass,
    textureFileName,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping
  });
  //middle left
  wheelsInfo.push({
    radius,
    width,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:midleAxel,
    stiffness:rearStiffness,
    damping:rearDamping,
    springLegth:rearSpringLength,
    steering:false,
    engine:true,
    left:true,
    wheelMass,
    axelMass,
    textureFileName,
    color,
    wheelMaterial:fakeMaterial,
    axelMaterial,
    angularDamping
  });
  //middle right
  wheelsInfo.push({
    radius,
    width,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:midleAxel,
    stiffness:rearStiffness,
    damping:rearDamping,
    springLegth:rearSpringLength,
    steering:false,
    engine:true,
    left:false,
    wheelMass,
    axelMass,
    textureFileName,
    color,
    wheelMaterial:fakeMaterial,
    axelMaterial,
    angularDamping
  });
  //rear left
  wheelsInfo.push({
    radius,
    width,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:rearAxel,
    stiffness:rearStiffness,
    damping:rearDamping,
    springLegth:rearSpringLength,
    steering:false,
    engine:true,
    left:true,
    wheelMass,
    axelMass,
    textureFileName,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping
  });
  //rear right
  wheelsInfo.push({
    radius,
    width,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:rearAxel,
    stiffness:rearStiffness,
    damping:rearDamping,
    springLegth:rearSpringLength,
    steering:false,
    engine:true,
    left:false,
    wheelMass,
    axelMass,
    textureFileName,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping
  });  
  
  return wheelsInfo;
}

// trailer
export function trailerWheelsInfo(){
  let  radius=.65,width=.3,axelLength=1.4,axelHeight=.8,axelDiameter=.1;
  let frontAxel = 1 , midleAxel = -2 , rearAxel = -3.5;
  let frontStiffness = 150,frontDamping = 30,frontSpringLength = .8;
  let rearStiffness = 150,rearDamping = 20,rearSpringLength = .8;
  let angularDamping=0;

  let wheelMass = .5 , axelMass = 1;
  let textureFileName = undefined , color=0x777777;
  let wheelMaterial="wheelMaterial", axelMaterial="objectMaterial", fakeMaterial="fakeWheelMaterial";

  let wheelsInfo=[];
  //front left
  // wheelsInfo.push({
  //   radius,
  //   width,
  //   axelLength,
  //   axelHeight,
  //   axelDiameter,
  //   distance:frontAxel,
  //   stiffness:frontStiffness,
  //   damping:frontDamping,
  //   springLegth:frontSpringLength,
  //   steering:false,
  //   engine:false,
  //   left:true,
  //   wheelMass,
  //   axelMass,
  //   textureFileName,
  //   color,
  //   wheelMaterial:fakeMaterial,
  //   axelMaterial,
  //   angularDamping
  // });
 // front right
  // wheelsInfo.push({
  //   radius,
  //   width,
  //   axelLength,
  //   axelHeight,
  //   axelDiameter,
  //   distance:frontAxel,
  //   stiffness:frontStiffness,
  //   damping:frontDamping,
  //   springLegth:frontSpringLength,
  //   steering:false,
  //   engine:false,
  //   left:false,
  //   wheelMass,
  //   axelMass,
  //   textureFileName,
  //   color,
  //   wheelMaterial:fakeMaterial,
  //   axelMaterial,
  //   angularDamping
  // });
  //middle left
  wheelsInfo.push({
    radius,
    width,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:midleAxel,
    stiffness:rearStiffness,
    damping:rearDamping,
    springLegth:rearSpringLength,
    steering:false,
    engine:false,
    left:true,
    wheelMass,
    axelMass,
    textureFileName,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping
  });
  //middle right
  wheelsInfo.push({
    radius,
    width,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:midleAxel,
    stiffness:rearStiffness,
    damping:rearDamping,
    springLegth:rearSpringLength,
    steering:false,
    engine:false,
    left:false,
    wheelMass,
    axelMass,
    textureFileName,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping
  });
  //rear left
  wheelsInfo.push({
    radius,
    width,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:rearAxel,
    stiffness:rearStiffness,
    damping:rearDamping,
    springLegth:rearSpringLength,
    steering:false,
    engine:false,
    left:true,
    wheelMass,
    axelMass,
    textureFileName,
    color,
    wheelMaterial:fakeMaterial,
    axelMaterial,
    angularDamping
  });
  //rear right
  wheelsInfo.push({
    radius,
    width,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:rearAxel,
    stiffness:rearStiffness,
    damping:rearDamping,
    springLegth:rearSpringLength,
    steering:false,
    engine:false,
    left:false,
    wheelMass,
    axelMass,
    textureFileName,
    color,
    wheelMaterial:fakeMaterial,
    axelMaterial,
    angularDamping
  });  
  
  return wheelsInfo;
}


