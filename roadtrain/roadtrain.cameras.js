
export function loadCameras(rGame){

  // // back chasing camera
  rGame.cameras.camera3 = {};
  rGame.utils.addCamera(rGame.cameras.camera3);
  rGame.cameras.camera3.set ({cameraFocalLenght: 75 , cameraNearView: .01 , cameraFarView: 800 , active:true});

  // // cockpit camera
  rGame.cameras.camera10 = {};
  rGame.utils.addCamera(rGame.cameras.camera10);
  rGame.cameras.camera10.set ({cameraFocalLenght: 75 , cameraNearView: .01 , cameraFarView: 800 , active:false});

  // // reverse camera
  rGame.cameras.camera7 = {};
  rGame.utils.addCamera(rGame.cameras.camera7);
  rGame.cameras.camera7.set ({cameraFocalLenght: 75 , cameraNearView: .01 , cameraFarView: 800 , active:false});
  // // right camera
  rGame.cameras.camera8 = {};
  rGame.utils.addCamera(rGame.cameras.camera8);
  rGame.cameras.camera8.set ({cameraFocalLenght: 75 , cameraNearView: .01 , cameraFarView: 800 , active:false});
  // // top camera
  rGame.cameras.camera9 = {};
  rGame.utils.addCamera(rGame.cameras.camera9);
  rGame.cameras.camera9.set ({cameraFocalLenght: 75 , cameraNearView: .01 , cameraFarView: 800 , active:false});
    // // transition camera
    rGame.cameras.cameraT = {};
    rGame.utils.addCamera(rGame.cameras.cameraT);
    rGame.cameras.cameraT.set ({cameraFocalLenght: 75 , cameraNearView: .01 , cameraFarView: 800 , active:false});
    
  // // back chasing camera for 1 trailer
  rGame.cameras.camera11 = {};
  rGame.utils.addCamera(rGame.cameras.camera11);
  rGame.cameras.camera11.set ({cameraFocalLenght: 75 , cameraNearView: .01 , cameraFarView: 800 , active:false});

  // // back chasing camera for 2 trailers
  rGame.cameras.camera12 = {};
  rGame.utils.addCamera(rGame.cameras.camera12);
  rGame.cameras.camera12.set ({cameraFocalLenght: 75 , cameraNearView: .01 , cameraFarView: 800 , active:false});

  
}
