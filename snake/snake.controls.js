
export function loadControls(snake){
  // game controls
  let oldTouchX=undefined;
  document.addEventListener( "keydown" , keyDownHandler , false );
  document.addEventListener( "keyup" , keyUpHandler , false );
  document.addEventListener( 'touchstart' ,toushStartHandler , { passive: false })
  document.addEventListener( 'touchend' ,toushEndHandler , { passive: false })
  document.addEventListener( 'touchmove' ,toushMoveHandler , { passive: false })

function toushMoveHandler(e){
  e.preventDefault();
  let roadTrain1 = snake.roadTrains[0];
  let x=e.changedTouches[0].clientX;

  if (oldTouchX!=undefined){
    if(x-oldTouchX>0 && !roadTrain1.turningRight){
      roadTrain1.set({turningRight:true,turningLeft:false});
    }
    if(x-oldTouchX<0 && !roadTrain1.turningLeft){
      roadTrain1.set({turningRight:false,turningLeft:true});
    }
  }

  oldTouchX=x;
}
function toushStartHandler(e){
  e.preventDefault();
  oldTouchX=undefined;
  let roadTrain1 = snake.roadTrains[0];
  if (roadTrain1.speed ==0){
    roadTrain1.speed = 20;
  }
}

function toushEndHandler(e){
  e.preventDefault();
  let roadTrain1 = snake.roadTrains[0];
  roadTrain1.set({turningRight:false,turningLeft:false});

  oldTouchX=undefined;

}

  function keyDownHandler ( e ){

    if (e.key == "f"){
      //snake.cameras.camera2.active = false;
      //snake.cameras.camera3.active = false;
      snake.cameras.camera1.active = true;
    }
    if (e.key == "t"){
      snake.cameras.camera1.active = false;
      snake.cameras.camera3.active = false;
      snake.cameras.camera2.active = true;
    }
    if (e.key == "g"){
      snake.cameras.camera1.active = false;
      //snake.cameras.camera2.active = false;
      snake.cameras.camera3.active = true;

    }

    if (e.key == "r"){
      snake.cameras.camera1.active = false;
      snake.cameras.camera2.active = false;
      snake.cameras.camera4.active = true;

    }

    if (e.key == "m"){
      snake.cameras.camera1.active = false;
      snake.cameras.camera2.active = false;
      snake.cameras.camera5.active = true;

    }

    let roadTrain1 = snake.roadTrains[0];
    if (e.key == "Right" || e.key == "ArrowRight"){
      if (!roadTrain1.turningRight){
        roadTrain1.set({turningRight:true,turningLeft:false});

      }
      //snake.cameras.camera1.position.x=snake.cameras.camera1.position.x+1
    }
    if (e.key == "Left" || e.key == "ArrowLeft"){
      if (!roadTrain1.turningLeft){
        roadTrain1.set({turningRight:false,turningLeft:true});

      }
      //snake.cameras.camera1.position.x=snake.cameras.camera1.position.x-1

    }
    if (e.key == "Up" || e.key == "ArrowUp"){
      roadTrain1.speed = 20;
    }
    if (e.key == "Down" || e.key == "ArrowDown"){
      roadTrain1.speed = -20;
    }
    if (e.key == "s"){
      roadTrain1.speed = 0;
    }
    e.preventDefault();

  }
  function keyUpHandler ( e ){
    let roadTrain1 = snake.roadTrains[0];
    if (e.key == "Right" || e.key == "ArrowRight" ){
      roadTrain1.turningRight = false;
    }

    if (e.key == "Left" || e.key == "ArrowLeft"){
      roadTrain1.turningLeft = false;
    }



  }


}