
export function loadControls(snake){
  // game controls
  let oldTouchX=undefined;
  document.addEventListener( "keydown" , keyDownHandler , false );
  document.addEventListener( "keyup" , keyUpHandler , false );
  document.addEventListener( 'touchstart' ,toushStartHandler , { passive: false })
  document.addEventListener( 'touchend' ,toushEndHandler , { passive: false })
  document.addEventListener( 'touchmove' ,touchMoveHandler , { passive: false })

function touchMoveHandler(e){
  e.preventDefault();
  //let vehicle = snake.car;
  let vehicle = snake.roadTrains[0];

  let x=e.changedTouches[0].clientX;

  if (oldTouchX!=undefined){
    if(x-oldTouchX>0 && !vehicle.turningRight){
      vehicle.set({turningRight:false,turningLeft:true});
    }
    if(x-oldTouchX<0 && !vehicle.turningLeft){
      vehicle.set({turningRight:true,turningLeft:false});
    }
  }

  oldTouchX=x;
}
function toushStartHandler(e){
  e.preventDefault();
  oldTouchX=undefined;
  //let vehicle = snake.car;
  let vehicle = snake.roadTrains[0];

  if (vehicle.speed ==0){
    vehicle.speed = 20;
  }
}

function toushEndHandler(e){
  e.preventDefault();
  //let vehicle = snake.car;
  let vehicle = snake.roadTrains[0];

  vehicle.set({turningRight:false,turningLeft:false});

  oldTouchX=undefined;

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

    //let vehicle = snake.car;
    let vehicle = snake.roadTrains[0];

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
      vehicle.speed = 20;
    }
    if (e.key == "Down" || e.key == "ArrowDown"){
      vehicle.speed = -20;
    }
    if (e.key == "s"){
      vehicle.speed = 0;
    }
    if (e.key =="t"){
      ++vehicle.totalTrailers;
    }
    e.preventDefault();

  }
  function keyUpHandler ( e ){
    //let vehicle = snake.car;
    let vehicle = snake.roadTrains[0];

    if (e.key == "Right" || e.key == "ArrowRight" ){
      vehicle.turningRight = false;
    }

    if (e.key == "Left" || e.key == "ArrowLeft"){
      vehicle.turningLeft = false;
    }



  }


}