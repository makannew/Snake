
export function loadControls(snake){
  // game controls
  let oldTouchX=undefined;
  let vehicle = snake.roadTrains[0];
  //let vehicle = snake.car;
  let touchSpan = vehicle.touchSpan;
  let maxSteering = vehicle.absMaxSteering;
  let prevSteering = vehicle.steering;
  let steering;
  let upKeyPressed = false;
  let downKeyPressed = false;


  snake.activateControls = function(){
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
    vehicle.speed = snake.checkPoint.speed;
  }
}

function toushEndHandler(e){
  e.preventDefault();
}

  function keyDownHandler ( e ){

    if (e.key == "f"){
    }
    if (e.key == "t"){

    }
    if (e.key == "g"){

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
      if (vehicle.speed ==0){
        vehicle.speed = snake.checkPoint.speed;
      }
      // if (!upKeyPressed){
      //   vehicle.set({speed:21,engineForce: 30});
      //   upKeyPressed = true;
      // }


    }
    if (e.key == "Down" || e.key == "ArrowDown"){
      // if(!downKeyPressed){
      //   vehicle.set({speed:-21,engineForce: 30});
      //   downKeyPressed = true;
      // }

    }
    if (e.key == "s"){
      //vehicle.speed = 0;
    }
    if (e.key =="t"){
      ++vehicle.visibleTrailers;
    }
    if (e.key == "a"){
      //vehicle.enable = true;
    }
    if (e.key == "d"){
      //vehicle.enable = false;
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

    if (e.key == "Down" || e.key == "ArrowDown"){
      // downKeyPressed =false;
      // vehicle.engineForce = 0;
    }
    if (e.key == "Up" || e.key == "ArrowUp"){
      // upKeyPressed = false;

      // vehicle.engineForce = 0;
    }

    if (e.key == "1"){
      snake.cameras.camera7.active = true;

    }

    if (e.key == "2"){
      snake.cameras.camera3.active = true;

    }
    if (e.key == "3"){
      snake.cameras.camera8.active = true;

    }
    if (e.key == "4"){
      snake.cameras.camera9.active = true;

    }
    if (e.key == "c"){
      snake.set({cheating:true});
      snake.checkPoint.block=10;
      snake.checkPoint.speed=10;
      snake.checkPoint.camera=snake.cameras.camera3;


    }
    if (e.key == "+"){
      ++vehicle.speed;
    }
    if (e.key == "-"){
      --vehicle.speed;
    }


  }


}