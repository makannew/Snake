// truck head
export function truckWheelsInfo(){
  let  radius=.65,width=.3,axelLength=1.4,axelHeight=.8,axelDiameter=.15  ;
  let frontAxel = 3.1 , midleAxel = -1.9 , rearAxel = -3.5;
  let frontStiffness = 220,frontDamping = 60,frontSpringLength = .8;
  let rearStiffness = 170,rearDamping = 30,rearSpringLength = .8;
  let angularDamping=0;
  let wheelMass = 1, axelMass = 25;
  let textureFileName = undefined , color=0x777777;
  let wheelMaterial="wheelMaterial", axelMaterial="objectMaterial", fakeMaterial="fakeWheelMaterial";
  let steeringWheelMass = 1, steeringAxelMass = 25;
  let wheelsInfo=[];
  let  doubleWheelGap = .07;
  //front left
  wheelsInfo.push({
    radius,
    width,
    axelLength:axelLength + width - doubleWheelGap,
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
    axelLength:axelLength + width - doubleWheelGap,
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
    width:(width * 2) + doubleWheelGap,
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
    angularDamping,
    doubleWheelGap

  });
  //middle right
  wheelsInfo.push({
    radius,
    width:(width * 2) + doubleWheelGap,
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
    angularDamping,
    doubleWheelGap

  });
  //rear left
  wheelsInfo.push({
    radius,
    width:(width * 2) + doubleWheelGap,
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
    angularDamping,
    doubleWheelGap

  });
  //rear right
  wheelsInfo.push({
    radius,
    width:(width * 2) + doubleWheelGap,
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
    angularDamping,
    doubleWheelGap

  });  
  
  return wheelsInfo;
}

// trailer
export function trailerWheelsInfo(){
  let  radius=.65,width=.3,axelLength=1.4,axelHeight=.8,axelDiameter=.1;
  let frontAxel = 1 , midleAxel = .5 , rearAxel = -1.5;
  let frontStiffness = 50,frontDamping = 30,frontSpringLength = .8;
  let rearStiffness = 70,rearDamping = 30,rearSpringLength = .8;
  let angularDamping=0;

  let wheelMass = 1 , axelMass = 5;
  let textureFileName = undefined , color=0x777777;
  let wheelMaterial="wheelMaterial", axelMaterial="objectMaterial", fakeMaterial="fakeWheelMaterial";
  let  doubleWheelGap = .07;

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
    width:(width * 2) + doubleWheelGap,
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
    angularDamping,
    doubleWheelGap
  });
  //middle right
  wheelsInfo.push({
    radius,
    width:(width * 2) + doubleWheelGap,
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
    angularDamping,
    doubleWheelGap
  });
  //rear left
  wheelsInfo.push({
    radius,
    width:(width * 2) + doubleWheelGap,
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
    wheelMaterial,
    axelMaterial,
    angularDamping,
    doubleWheelGap
  });
  //rear right
  wheelsInfo.push({
    radius,
    width:(width * 2) + doubleWheelGap,
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
    wheelMaterial,
    axelMaterial,
    angularDamping,
    doubleWheelGap
  });  
  
  return wheelsInfo;
}
// additional trailer
export function additionalTrailerWheelsInfo(){
  let  radius=.65,width=.3,axelLength=1.4,axelHeight=.8,axelDiameter=.1;
  let frontAxel = 7 , midleAxel = .5 , rearAxel = -1.5;
  let frontStiffness = 40,frontDamping = 30,frontSpringLength = .8;
  let rearStiffness = 40,rearDamping = 30,rearSpringLength = .8;
  let angularDamping=0;

  let wheelMass = 1 , axelMass = 5;
  let textureFileName = undefined , color=0x777777;
  let wheelMaterial="wheelMaterial", axelMaterial="objectMaterial", fakeMaterial="fakeWheelMaterial";
  let  doubleWheelGap = .07;

  let wheelsInfo=[];
  //front left
  wheelsInfo.push({
    radius,
    width,//:(width * 2) + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:frontAxel,
    stiffness:frontStiffness,
    damping:frontDamping,
    springLegth:frontSpringLength,
    steering:false,
    engine:false,
    left:true,
    wheelMass,
    axelMass,
    textureFileName,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    //doubleWheelGap

  });
 // front right
  wheelsInfo.push({
    radius,
    width,//:(width * 2) + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:frontAxel,
    stiffness:frontStiffness,
    damping:frontDamping,
    springLegth:frontSpringLength,
    steering:false,
    engine:false,
    left:false,
    wheelMass,
    axelMass,
    textureFileName,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    //doubleWheelGap

  });
  //middle left
  // wheelsInfo.push({
  //   radius,
  //   width:(width * 2) + doubleWheelGap,
  //   axelLength,
  //   axelHeight,
  //   axelDiameter,
  //   distance:midleAxel,
  //   stiffness:rearStiffness,
  //   damping:rearDamping,
  //   springLegth:rearSpringLength,
  //   steering:false,
  //   engine:false,
  //   left:true,
  //   wheelMass,
  //   axelMass,
  //   textureFileName,
  //   color,
  //   wheelMaterial,
  //   axelMaterial,
  //   angularDamping,
  //   doubleWheelGap
  // });
  //middle right
  // wheelsInfo.push({
  //   radius,
  //   width:(width * 2) + doubleWheelGap,
  //   axelLength,
  //   axelHeight,
  //   axelDiameter,
  //   distance:midleAxel,
  //   stiffness:rearStiffness,
  //   damping:rearDamping,
  //   springLegth:rearSpringLength,
  //   steering:false,
  //   engine:false,
  //   left:false,
  //   wheelMass,
  //   axelMass,
  //   textureFileName,
  //   color,
  //   wheelMaterial,
  //   axelMaterial,
  //   angularDamping,
  //   doubleWheelGap
  // });
  //rear left
  wheelsInfo.push({
    radius,
    width,//:(width * 2) + doubleWheelGap,
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
    wheelMaterial,
    axelMaterial,
    angularDamping,
    //doubleWheelGap
  });
  //rear right
  wheelsInfo.push({
    radius,
    width,//:(width * 2) + doubleWheelGap,
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
    wheelMaterial,
    axelMaterial,
    angularDamping,
    //doubleWheelGap
  });  
  
  return wheelsInfo;
}


