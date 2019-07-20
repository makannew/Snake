
export function setupControls(snake){
  // game controls
  document.addEventListener( "keydown" , keyDownHandler , false );
  document.addEventListener( "keyup" , keyUpHandler , false );

  function keyDownHandler ( e ){
    if (e.key == "Right" || e.key == "ArrowRight" ){
        if( !snake.player.turningRight ){
          snake.player.turningLeft = false;
          snake.player.turningRight = true;

          

        }
    }
    else if (e.key == "Left" || e.key == "ArrowLeft"){
        if( !snake.player.turningLeft ){
          snake.player.turningRight = false;
          snake.player.turningLeft = true;




        }
    }
  }
  function keyUpHandler ( e ){
    if (e.key == "Right" || e.key == "ArrowRight" ){
      snake.player.turningRight = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft"){
      snake.player.turningLeft = false;
    }
  }
}