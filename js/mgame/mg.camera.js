
export function cameraBuilder(CompositeObject){
  return function(){
    let result = CompositeObject();
    result.addFunction(camera);
    return result;
  }
}

const camera = function({cameraFocalLenght , cameraNearView , cameraFarView}){
  return new THREE.PerspectiveCamera ( 
    cameraFocalLenght , 
    innerWidth / innerHeight , 
    cameraNearView, 
    cameraFarView);
}

export const activeCamera = function({activeCameraName , three , cameras }){
  if (!cameras[activeCameraName] || !cameras[activeCameraName].camera) return undefined;
  let camera = cameras[activeCameraName].camera;
  if (activeCamera==camera) return camera;
  addEventListener('resize', function () {
    three.renderer.setSize ( innerWidth , innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix ();
  });
  return camera;
}