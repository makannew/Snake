
export function addCamera(mainComposite , cameraName){
    //mainComposite.cameras[cameraName] = {};
    //mainComposite.cameras[cameraName].addFunction(camera);
    cameraName.addFunction(camera);
    cameraName.addFunction(activate);

}

const camera = function({cameraFocalLenght , cameraNearView , cameraFarView}){
  return new THREE.PerspectiveCamera ( 
    cameraFocalLenght , 
    innerWidth / innerHeight , 
    cameraNearView, 
    cameraFarView);
}

function activate({camera , active}){
  addEventListener('resize', function () {
    three.renderer.setSize ( innerWidth , innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix ();
  });
  return true;
}

// export const activeCamera = function({activeCameraName , three , cameras }){
//   //if (!cameras[activeCameraName] || !cameras[activeCameraName].camera) return undefined;
//   if (!activeCameraName[0].camera) return undefined;
  
//   let camera = activeCameraName[0].camera;
//   if (activeCamera==camera) return camera;
//   addEventListener('resize', function () {
//     three.renderer.setSize ( innerWidth , innerHeight);
//     camera.aspect = innerWidth / innerHeight;
//     camera.updateProjectionMatrix ();
//   });
//   return camera;
// }