
export function loadStarfield(rGame){
  let threeScene = rGame.getProxyLessObject.three.scene;
  let starsGeometry = new THREE.Geometry();

  for ( let i = 0; i < 5000; i ++ ) {

    let star = new THREE.Vector3();
    star.x = THREE.Math.randFloatSpread( 3000 );
    star.y = THREE.Math.randFloatSpread( 1000 );
    star.z = THREE.Math.randFloatSpread( 3000 );

    starsGeometry.vertices.push( star );

  }

let starsMaterial = new THREE.PointsMaterial( { color: 0x888888 } );

let starField = new THREE.Points( starsGeometry, starsMaterial );

threeScene.add( starField );
rGame.loadedObjects.push(starField);

}