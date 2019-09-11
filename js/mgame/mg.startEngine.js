export async function startEngine(gameInstance){
  let lastInterval=0;
  let dI = 1/gameInstance.settings.frameRate;
  //let comp = gameInstance.getProxyLessObject;
  let lastTime = 0;
  gameInstance.running = true;
  gameInstance.cannonSafeStep = .016;
  let cannonStep = gameInstance.cannonSafeStep;

  async function mainloop(t){
    let frameInterval = gameInstance.actualInterval;
    if (frameInterval<cannonStep){
      if(lastTime==undefined) {
        frameInterval = cannonStep;
      }else{
        frameInterval += (t - lastTime) / 1000;
      }
      lastTime = t;
      //
      if (frameInterval >= cannonStep && gameInstance.compositeRunningFunctions==0){
        gameInstance.set({timeStamp:t, actualInterval:frameInterval,rendering:true })
      }
    }


    requestAnimationFrame(mainloop);

  }

  requestAnimationFrame(mainloop);
}