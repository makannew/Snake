
export function lightBuilder(CompositeObject){
  return function(){
    let result = CompositeObject();
    // defaults
    result.color = 0xffffff;
    result.intensity = .5;
    result.visible = true;
    result.position = new THREE.Vector3(0,0,0);
    result.targetPosition = new THREE.Vector3(0,0,0);
    result.castShadow = true ;
    result.shadowMapDarkness = 1;
    result.shadowMapSizeWidth = 2048;  
    result.shadowMapSizeHeight = 2048; 
    result.shadowCameraNear = 0.5;      
    result.shadowCameraFar = 2048;   
    result.skyColor = 0xffffbb;  
    result.groundColor = 0x080820;
    result.distance = 0;
    result.width = 350;
    result.height = 200;

    result.addFunction(light);
    result.addFunction(needsUpdate);
    result.addFunction(setIntensity);
    result.addFunction(setColor);
    result.addFunction(setGeneralProperties);
    result.addFunction(setPosition);


    return result;
  }
}

export function updateLight({lights , three}){
  for (let item in lights){
    let current = lights[item];
    if (current.needsUpdate){
      current.needsUpdate = false;
      if (current.visible){
        three.scene.add(current.light);
      }else{
        three.scene.remove(current.light);
      }
    }
  }
}

const setIntensity = function({light , intensity}){
  light.intensity = intensity;
  return true;
}

const setColor = function({light , color}){
  light.color = new THREE.Color(color);
  return true;
}

const setPosition = function({light , position}){
  light.position.x = position.x;
  light.position.y = position.y;
  light.position.z = position.z;
}


const setGeneralProperties = function({light , targetPosition , castShadow , shadowMapDarkness , 
  shadowMapSizeWidth , shadowMapSizeHeight , shadowCameraNear , shadowCameraFar , skyColor , groundColor , distance , width , height}){
    if(lightType == "spot" || lightType == "directional" || lightType == "point"){
      light.castShadow = castShadow ;
      light.shadowMapDarkness = shadowMapDarkness;
      light.shadow.mapSize.width = shadowMapSizeWidth; 
      light.shadow.mapSize.height = shadowMapSizeHeight;
      light.shadow.camera.near = shadowCameraNear;
      light.shadow.camera.far = shadowCameraFar;
    }

    if (lightType == "directional"){
      light.target.position.x = targetPosition.x;
      light.target.position.y = targetPosition.y;
      light.target.position.z = targetPosition.z;

    }

    if (lightType == "hemisphere"){
      light.skyColor = new THREE.Color(skyColor);
      light.groundColor = new THREE.Color(groundColor);
    }
    
    if (lightType == "point" || lightType == "spot"){
      light.distance = distance;
    }

    if (lightType == "rectangular"){
      light.width = width;
      light.height = height;
      light.lookAt(targetPosition);
    }

    return true;
}



const light = function({lightType}){
  let result;
  switch(lightType){
    case "ambient":
      result = new THREE.AmbientLight (color, intensity);
      break;
    case "spot":
      result = new THREE.SpotLight(color , intensity);
      break;
    case "directional":
      result = new THREE.DirectionalLight( color, intensity );
      break;
    case "hemisphere":
      result = new THREE.HemisphereLight( skyColor, groundColor, intensity );
      break;
    case "point":
      result = new THREE.PointLight( color, intensity, distance );
      break;
    case "rectangular":
      // it needs to include RectAreaLightUniformsLib.js
      result = new THREE.RectAreaLight( color, intensity,  width, height );
      let rectLightHelper = new THREE.RectAreaLightHelper( result );
      result.add( rectLightHelper );
      break;
  }


  return result;
}

const needsUpdate = function({light , visible }){
  return true;
}