// truck head
export function loadHeadWheelsInfo(roadTrain){
  let  radius=.65,width=.3,axelLength=1.4,axelHeight=.8,axelDiameter=.1;
  let frontAxel = 3.1 , midleAxel = -1.9 , rearAxel = -3.5;
  let frontStiffness = 700,frontDamping = 80,frontSpringLength = .8;
  let rearStiffness = 300,rearDamping = 40,rearSpringLength = .8;
  let wheelMass = 10, axelMass = 30;
  let textureFileName = undefined , color=0x777777;
  let wheelMaterial="wheelMaterial", axelMaterial="objectMaterial", fakeMaterial="fakeWheelMaterial";
  let steeringWheelMass = 20, steeringAxelMass = 70;
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
    engine:false,
    left:true,
    wheelMass:steeringWheelMass,
    axelMass:steeringAxelMass,
    textureFileName,
    color,
    wheelMaterial,
    axelMaterial
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
    engine:false,
    left:false,
    wheelMass:steeringWheelMass,
    axelMass:steeringAxelMass,
    textureFileName,
    color,
    wheelMaterial,
    axelMaterial
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
    axelMaterial
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
    axelMaterial
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
    axelMaterial
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
    axelMaterial
  });  
  
  roadTrain.wheelsInfo = wheelsInfo;
}

// trailer
export function loadTrailerWheelsInfo(roadTrain){
  let  radius=.65,width=.3,axelLength=1.4,axelHeight=.8,axelDiameter=.1;
  let frontAxel = 1 , midleAxel = -2 , rearAxel = -3.5;
  let frontStiffness = 150,frontDamping = 30,frontSpringLength = .8;
  let rearStiffness = 150,rearDamping = 20,rearSpringLength = .8;
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
  //   axelMaterial
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
  //   axelMaterial
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
    axelMaterial
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
    axelMaterial
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
    axelMaterial
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
    axelMaterial
  });  
  
  roadTrain.wheelsInfo = wheelsInfo;
}


