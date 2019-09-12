

export function loadStartUp(snake){
  
  snake.addFunction(startUpProcess);

}

function startUpProcess ({newAnimationFrame , startUp}){
    let startUpDuration =3500;
    
    // fade in lights
    let blackDuration =700;
    let ambIntensity = .5;
    let pointIntensity = 1.1;
    if (timeStamp>blackDuration){
      self.lights.pointLight1.intensity= pointIntensity *(timeStamp-blackDuration)/(startUpDuration-blackDuration);
      self.lights.ambient1.intensity =  ambIntensity * (timeStamp-blackDuration)/(startUpDuration-blackDuration);
    }


    if (timeStamp > startUpDuration) startUp = undefined;
 
}
