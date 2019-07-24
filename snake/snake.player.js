
export function loadPlayerSettings(snake){
  snake.player = {
    position: new THREE.Vector3(0,0,0),
    speed: 1 ,
    turningSpeed: .33 ,
    direction: new THREE.Vector3(0,0,0),
    turningRight:false,
    turningLeft:false,
    movement:0,
    turningVector: new THREE.Vector3( 0 , 1 , 0),
    horizen: new THREE.Vector3( 1 , 0 , 0 ),
    lookUpAngle: 0,
    viewPointHeight: 0.05
  };

}