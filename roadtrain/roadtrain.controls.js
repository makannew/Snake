
export function loadControls(rGame){
  // game controls
  let oldTouchX=undefined;
  let vehicle = rGame.roadTrains[0];
  let touchSpan = vehicle.touchSpan;
  let maxSteering = vehicle.absMaxSteering;
  let steering;

  rGame.activateControls = function(){
    document.addEventListener( "keydown" , keyDownHandler , false );
    document.addEventListener( "keyup" , keyUpHandler , false );
    document.addEventListener( 'touchstart' ,toushStartHandler , { passive: false })
    document.addEventListener( 'touchend' ,toushEndHandler , { passive: false })
    document.addEventListener( 'touchmove' ,touchMoveHandler , { passive: false })
  }


function touchMoveHandler(e){
  e.preventDefault();
  let x=e.changedTouches[0].clientX;
  steering = maxSteering * (x - oldTouchX)/touchSpan;
  if (steering>maxSteering) steering = maxSteering;
  if (steering<-maxSteering) steering = -maxSteering;
  vehicle.steering = steering;
}
function toushStartHandler(e){
  e.preventDefault();
  oldTouchX = e.touches[0].clientX;
  if (vehicle.speed ==0){
    vehicle.speed = rGame.checkPoint.speed;
  }
}

function toushEndHandler(e){
  e.preventDefault();
}

  function keyDownHandler ( e ){

    if (e.key == "Right" || e.key == "ArrowRight"){
      if (!vehicle.turningRight){
        vehicle.set({turningRight:true,turningLeft:false});

      }
    }
    if (e.key == "Left" || e.key == "ArrowLeft"){
      if (!vehicle.turningLeft){
        vehicle.set({turningRight:false,turningLeft:true});

      }

    }
    if (e.key == "Up" || e.key == "ArrowUp"){
      if (vehicle.speed ==0){
        vehicle.speed = rGame.checkPoint.speed;
      }

    }

    if (e.key =="t"){
      ++vehicle.visibleTrailers;
    }
    e.preventDefault();
  }
  function keyUpHandler ( e ){

    if (e.key == "Right" || e.key == "ArrowRight" ){
      vehicle.turningRight = false;
    }

    if (e.key == "Left" || e.key == "ArrowLeft"){
      vehicle.turningLeft = false;
    }

    if (e.key == "c"){
      rGame.set({cheating:true});
      rGame.checkPoint.block=20;
      rGame.checkPoint.speed=20;
      rGame.checkPoint.camera=rGame.cameras.camera3;

    }

  }

}