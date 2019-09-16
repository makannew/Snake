
export function loadControls(snake){
  // game controls
  let oldTouchX=undefined;
  let vehicle = snake.roadTrains[0];
  //let vehicle = snake.car;
  let touchSpan = vehicle.touchSpan;
  let maxSteering = vehicle.absMaxSteering;
  let prevSteering = vehicle.steering;
  let steering;


  document.addEventListener( "keydown" , keyDownHandler , false );
  document.addEventListener( "keyup" , keyUpHandler , false );
  document.addEventListener( 'touchstart' ,toushStartHandler , { passive: false })
  document.addEventListener( 'touchend' ,toushEndHandler , { passive: false })
  document.addEventListener( 'touchmove' ,touchMoveHandler , { passive: false })

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
    vehicle.speed = 20;
  }
}

function toushEndHandler(e){
  e.preventDefault();
}

  function keyDownHandler ( e ){

    if (e.key == "f"){
    }
    if (e.key == "t"){
      //snake.cameras.camera3.active = true;

    }
    if (e.key == "g"){

    }

    if (e.key == "r"){

    }

    if (e.key == "m"){

    }


    if (e.key == "Right" || e.key == "ArrowRight"){
      if (!vehicle.turningRight){
        vehicle.set({turningRight:true,turningLeft:false});

      }
      //snake.cameras.camera1.position.x=snake.cameras.camera1.position.x+1
    }
    if (e.key == "Left" || e.key == "ArrowLeft"){
      if (!vehicle.turningLeft){
        vehicle.set({turningRight:false,turningLeft:true});

      }
      //snake.cameras.camera1.position.x=snake.cameras.camera1.position.x-1

    }
    if (e.key == "Up" || e.key == "ArrowUp"){
      vehicle.speed = 30;
    }
    if (e.key == "Down" || e.key == "ArrowDown"){
      vehicle.speed = -30;
    }
    if (e.key == "s"){
      vehicle.speed = 0;
    }
    if (e.key =="t"){
      ++vehicle.visibleTrailers;
    }
    if (e.key == "a"){
      vehicle.enable = true;
    }
    if (e.key == "r"){
      vehicle.enable = false;
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



  }


}