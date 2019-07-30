
export function addCamera(mainComposite , newCamera){

    mainComposite.addLink(mainComposite.activeCamera , newCamera.activeCamera);
    mainComposite.addLink(mainComposite.three , newCamera.three);

    newCamera.position = {x:0,y:0,z:0};
    newCamera.quaternion = {x:0,y:0,z:0,w:0};
    newCamera.addFunction(camera);
    newCamera.addFunction(activate);
    newCamera.addFunction(setPosition);
    newCamera.addFunction(setQuaternion);
    newCamera.addFunction(setActiveCamera);
    newCamera.addFunction(cameraUpdateFunction);
}

function camera({cameraFocalLenght , cameraNearView , cameraFarView}){
  return new THREE.PerspectiveCamera ( 
    cameraFocalLenght , 
    innerWidth / innerHeight , 
    cameraNearView, 
    cameraFarView);
}

function setPosition({camera , position}){
  camera.position.x = position.x;
  camera.position.y = position.y;
  camera.position.z = position.z;
  return true;
}

function setQuaternion({camera , quaternion}){
  camera.quaternion.x = quaternion.x;
  camera.quaternion.y = quaternion.y;
  camera.quaternion.z = quaternion.z;
  camera.quaternion.w = quaternion.w;
  return true;
}

function cameraUpdateFunction({camera,three}){
  return function () {
    three.renderer.setSize ( innerWidth , innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix ();
  };
}
function activate({active , cameraUpdateFunction}){

  if (active){
    if (!activate){
      addEventListener('resize', cameraUpdateFunction);
    }
    return true;
  }else{
    if (activate){
      removeEventListener('resize' , cameraUpdateFunction);
    }
    return false;
  }
}

function setActiveCamera({activate}){
  if (activate) activeCamera = camera;
}