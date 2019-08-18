
export function setupControls(snake){
  // game controls
  document.addEventListener( "keydown" , keyDownHandler , false );
  document.addEventListener( "keyup" , keyUpHandler , false );

  function keyDownHandler ( e ){

    if (e.key == "f"){
      snake.cameras.camera2.active = false;
      snake.cameras.camera1.active = true;
    }
    if (e.key == "t"){
      snake.cameras.camera1.active = false;
      snake.cameras.camera2.active = true;
    }

    let roadTrain1 = snake.roadTrains.roadTrain1;
    if (e.key == "Right" || e.key == "ArrowRight"){
      if (!roadTrain1.turningRight){
        roadTrain1.turningLeft = false;
        roadTrain1.turningRight = true;
      }
      snake.cameras.camera1.position.x=snake.cameras.camera1.position.x+1
    }
    if (e.key == "Left" || e.key == "ArrowLeft"){
      if (!roadTrain1.turningLeft){
        roadTrain1.turningRight = false;
        roadTrain1.turningLeft = true;
      }
      snake.cameras.camera1.position.x=snake.cameras.camera1.position.x-1

    }
    e.preventDefault();

  }
  function keyUpHandler ( e ){
    let roadTrain1 = snake.roadTrains.roadTrain1;
    if (e.key == "Right" || e.key == "ArrowRight" ){
      roadTrain1.turningRight = false;
    }

    if (e.key == "Left" || e.key == "ArrowLeft"){
      roadTrain1.turningLeft = false;
    }



  }


}