
export function addCamera(mainComposite , cameraName){
    cameraName.cameraUpdateFunction = function () {
      three.renderer.setSize ( innerWidth , innerHeight);
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix ();
    };
    mainComposite.addLink(mainComposite.activeCamera , cameraName.activeCamera);
    cameraName.position = {x:0,y:0,z:0};
    cameraName.quaternion = {x:0,y:0,z:0,w:0};
    cameraName.addFunction(camera);
    cameraName.addFunction(activate);
    cameraName.addFunction(setPosition);
    cameraName.addFunction(setQuaternion);
    cameraName.addFunction(setActiveCamera);
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

function activate({camera , cameraUpdateFunction ,active }){
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