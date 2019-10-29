
export function loadCameras(rGame){

  // let topViewQuat = new THREE.Quaternion();
  // topViewQuat.setFromAxisAngle(new THREE.Vector3(1,0,0), -Math.PI/2)
  // rGame.cameras.camera2 = {};
  // rGame.utils.addCamera(rGame.cameras.camera2);
  // rGame.cameras.camera2.set ({cameraFocalLenght: 75 , cameraNearView: 1 , cameraFarView: 3000 , active:false , 
  //   position:{x:100,y:100.0,z:100}, quaternion:{x:topViewQuat.x , y:topViewQuat.y, z:topViewQuat.z , w:topViewQuat.w }});

  // ground camera
  // rGame.cameras.camera1 = {};
  // rGame.utils.addCamera(rGame.cameras.camera1);
  // rGame.cameras.camera1.set ({
  //   position:{x:0,y:-509,z:20},
  //   cameraFocalLenght: 55 , 
  //   cameraNearView: 1 , 
  //   cameraFarView: 3000 , 
  //   active:false });

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


  // vehicle main camera
  // rGame.cameras.camera6 = {};
  // rGame.utils.addCamera(rGame.cameras.camera6);
  // rGame.cameras.camera6.set ({cameraFocalLenght: 65 , cameraNearView: 1 , cameraFarView: 3000 , active:true })


  
}
