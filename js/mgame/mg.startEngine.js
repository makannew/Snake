export async function startEngine(gameInstance){
  let frameInterval=0;
  let dI = 1/gameInstance.settings.frameRate;
  let comp = gameInstance.getProxyLessObject;
  let lastTime = 0;
  gameInstance.running = true;

  async function mainloop(t){
    if(lastTime==0 && comp.loadIndex==3) {
      frameInterval = .02;
    }else{
      frameInterval += (t - lastTime) / 1000;
    }
    lastTime = t;
    comp.cannon.step(.016);
    //
    if (frameInterval >= dI && gameInstance.compositeRunningFunctions==0){
      gameInstance.set({timeStamp:t, actualInterval:frameInterval,rendering:true })
      frameInterval=0;
    }
  //comp.three.renderer.render( comp.three.scene , comp.activeCamera);
    requestAnimationFrame(mainloop);

  }

  requestAnimationFrame(mainloop);
}