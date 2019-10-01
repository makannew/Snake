export async function startEngine(gameInstance){
  // let lastInterval=0;
  // let dI = 1/gameInstance.settings.frameRate;
  let lastTime = 0;
  let lastFrameTime;
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
      if (lastFrameTime==undefined) lastFrameTime = t;
      if (frameInterval >= cannonStep && gameInstance.compositeRunningFunctions==0){
        gameInstance.set({timeStamp:t, actualInterval:frameInterval,rendering:true ,framesInterval:t-lastFrameTime});
        lastFrameTime = t;
      }
    }


    requestAnimationFrame(mainloop);

  }

  function whileLoading(){
    if (window.gameLoadingProgress && window.gameLoadingProgress.loading && gameInstance.compositeRunningFunctions!=0){

      if (gameInstance.loadedObjects.length >=window.gameLoadingProgress.totalObject){
        window.gameLoadingProgress.loading = false;
      }
    }else{
      clearInterval(loadingLoopID);
      window.gameLoadingProgress.progressBar.parentNode.removeChild(window.gameLoadingProgress.progressBar);
      document.body.appendChild ( gameInstance.three.renderer.domElement.getProxyLessObject );
      gameInstance.startUp = true;
      requestAnimationFrame(mainloop);

    }

  }
  let loadingLoopID = setInterval(whileLoading, 10);

}