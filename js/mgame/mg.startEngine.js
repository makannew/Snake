export async function startEngine(gameInstance){
  // let lastInterval=0;
  // let dI = 1/gameInstance.settings.frameRate;
  let loadingMessage = document.getElementById("loadingMessage");

  let lastTime = 0;
  let lastFrameTime;
  let frameNumber = 0;
  gameInstance.running = true;
  gameInstance.cannonSafeStep = .016;
  let cannonStep = gameInstance.cannonSafeStep;
  async function mainloop(t){
    let frameInterval = gameInstance.actualInterval;
    //if (frameInterval<cannonStep){
      // if(lastTime==undefined) {
      //   frameInterval = cannonStep;
      // }else{
        frameInterval += (t - lastTime) / 1000;
      //}
      lastTime = t;
      //
      //if (lastFrameTime==undefined) lastFrameTime = t;
      if (frameInterval >= cannonStep && gameInstance.compositeRunningFunctions==false){
        gameInstance.set({timeStamp:t, actualInterval:frameInterval,rendering:true ,framesInterval:t-lastFrameTime});
        lastFrameTime = t;
        //++frameNumber;
      }
    //}


    requestAnimationFrame(mainloop);

  }
  //let startUpLastTime = 0
  function whileLoading(t){
    if (gameInstance.startUp) return;
    let frameInterval = gameInstance.actualInterval;
    if (frameNumber>24){
      let loaderElement = window.document.getElementById("myLoader");
      let loadingMessageElement = window.document.getElementById("loadingMessage");
      loaderElement.parentNode.removeChild(loaderElement);
      loadingMessageElement.parentNode.removeChild(loadingMessageElement);

      document.body.appendChild ( gameInstance.three.renderer.domElement.getProxyLessObject );
      gameInstance.startUp = t;
      gameInstance.cameras.camera3.position={x:0,y:50,z:200};
      requestAnimationFrame(mainloop);
    }
    if (frameInterval<cannonStep){
      if(lastTime==undefined) {
        frameInterval = cannonStep;
      }else{
        frameInterval += (t - lastTime) / 1000;
      }
      lastTime = t;
      //
      if (lastFrameTime==undefined) lastFrameTime = t;
      if (frameInterval >= cannonStep && gameInstance.compositeRunningFunctions==false){
        gameInstance.set({timeStamp:t, actualInterval:frameInterval,rendering:true ,framesInterval:t-lastFrameTime});
        lastFrameTime = t;
        ++frameNumber;
      }
    }


    requestAnimationFrame(whileLoading);


    // let loadedObjects = gameInstance.loadedObjects.length
    // let f = timeStamp - startUpLastTime;
    // startUpLastTime = timeStamp;
    // loadingMessage.innerHTML = loadedObjects + " Loaded";
    // //console.log("aha",f,gameInstance.compositeRunningFunctions)
    // if (loadedObjects<463 ){

    //   if (gameInstance.loadedObjects.length >=window.gameLoadingProgress.totalObject){
    //     window.gameLoadingProgress.loading = false;
    //   }
    //   requestAnimationFrame(whileLoading);
    // }else{
    //   //clearInterval(loadingLoopID);
    //   window.gameLoadingProgress.progressBar.parentNode.removeChild(window.gameLoadingProgress.progressBar);
    //   document.body.appendChild ( gameInstance.three.renderer.domElement.getProxyLessObject );
    //   gameInstance.startUp = timeStamp;
    //   requestAnimationFrame(mainloop);

    // }

  }
  requestAnimationFrame(whileLoading);
  //console.log(gameInstance.loadedObjects.length)
  //let loadingLoopID = setInterval(whileLoading, 1);

}