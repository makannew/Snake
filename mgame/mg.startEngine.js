export async function startEngine(gameInstance) {
  let lastTime;
  let frameNumber = 0;
  gameInstance.running = true;
  gameInstance.cannonSafeStep = 0.016;
  let cannonStep = gameInstance.cannonSafeStep;
  function mainloop(t) {
    let frameInterval = gameInstance.actualInterval;
    frameInterval += (t - lastTime) / 1000;
    if (
      frameInterval >= cannonStep &&
      gameInstance.compositeRunningFunctions === false
    ) {
      gameInstance.set({
        timeStamp: t,
        actualInterval: frameInterval,
        rendering: true,
        framesInterval: t - lastTime,
      });
      lastTime = t;
    }
    requestAnimationFrame(mainloop);
  }
  function whileLoading(t) {
    if (gameInstance.startUp) return;
    let frameInterval = gameInstance.actualInterval;
    if (frameNumber > 2) {
      setTimeout(() => {
        document.getElementById("loading").classList.add("hide");
      }, 1000);
      document.body.appendChild(
        gameInstance.three.renderer.domElement.getProxyLessObject
      );
      gameInstance.startUp = t;
      requestAnimationFrame(mainloop);
      return;
    }
    if (lastTime === undefined) {
      lastTime = t;
    }
    frameInterval += (t - lastTime) / 1000;
    if (
      frameInterval >= cannonStep &&
      gameInstance.compositeRunningFunctions === false
    ) {
      gameInstance.set({
        timeStamp: t,
        actualInterval: frameInterval,
        rendering: true,
        framesInterval: t - lastTime,
      });
      ++frameNumber;
    }
    lastTime = t;
    setTimeout(() => {
      requestAnimationFrame(whileLoading);
    }, 1000 / 4);
  }
  requestAnimationFrame(whileLoading);
}
