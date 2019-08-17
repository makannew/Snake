
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

    if (e.key == "f"){
      snake.cameras.camera2.active = false;
      snake.cameras.camera1.active = true;
    }
    if (e.key == "t"){
      snake.cameras.camera1.active = false;
      snake.cameras.camera2.active = true;
    }

    let x=200;
    if (e.key=="6"){
      // if (snake.vehicles.vehicle1.wheels[2].steering!=-.4){
      //   snake.vehicles.vehicle1.wheels[2].set({steering:-.4,brake:0});
      //   snake.vehicles.vehicle1.wheels[3].set({steering:-.4,brake:0});
      // }
    }
    if (e.key=="4"){
      // if (snake.vehicles.vehicle1.wheels[2].steering!=.4){
      //   snake.vehicles.vehicle1.wheels[2].set({steering:.4,brake:0});
      //   snake.vehicles.vehicle1.wheels[3].set({steering:.4,brake:0});
      // }
    }
    if (e.key=="8"){
      // if (snake.vehicles.vehicle1.wheels[2].engine!=-x){
      //   snake.vehicles.vehicle1.wheels[2].set({engine:-x, brake:0});
      //   snake.vehicles.vehicle1.wheels[3].set({engine:-x , brake:0});
    
      // }
    }
    if (e.key=="2"){
      // if (snake.vehicles.vehicle1.wheels[2].engine!=x){
      //   snake.vehicles.vehicle1.wheels[2].set({engine:x, brake:0});
      //   snake.vehicles.vehicle1.wheels[3].set({engine:x , brake:0});
    
      // }
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