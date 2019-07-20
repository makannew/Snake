
export function loadCameras(snake){
  snake.utils.addCamera("camera1");
  snake.cameras.camera1.set ({cameraFocalLenght: 55 , cameraNearView: 1 , cameraFarView: 3000});
  snake.activeCameraName = "camera1";
}