

export function loadStartUp(snake){
  
  snake.addFunction(startUpProcess);

}

function startUpProcess ({newAnimationFrame , startUp}){
    let startUpDuration =3500;
    let t = timeStamp;
    if (t>startUpDuration) t=startUpDuration;
    
    // fade in lights
    let blackDuration =700;
    let ambIntensity = .5;
    let pointIntensity = 1.1;
    if (t>blackDuration){
      self.lights.pointLight1.intensity= pointIntensity *(t-blackDuration)/(startUpDuration-blackDuration);
      self.lights.ambient1.intensity =  ambIntensity * (t-blackDuration)/(startUpDuration-blackDuration);
      
    }


    if (timeStamp > startUpDuration) startUp = undefined;
 
}
