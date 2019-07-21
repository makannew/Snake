

export function cannonSettingsBuilder(result){
  result.physicSettings = {};
  result.cannon = initializeCannonJs();

  result.addLink(result.cannon , result.physicSettings.cannon);

  result.physicSettings.addFunction(setGravity);
  result.physicSettings.gravity = {x:0, y:-70 , z:0};

  result.physicSettings.materials = {};
  result.physicSettings.materials.groundMaterial= new CANNON.Material();
  result.physicSettings.materials.objectMaterial= new CANNON.Material();
  result.physicSettings.addFunction(createContactMaterial);
  result.physicSettings.newContactMaterial= {material1: "groundMaterial" , material2: "objectMaterial" , friction: 0.3, restitution: 0.4 }

  result.physicSettings.materials.wheelMaterial= new CANNON.Material();
  result.physicSettings.newContactMaterial= {material1: "groundMaterial" , material2: "wheelMaterial" , friction: 0.3, restitution: 0 , contactEquationStiffness: 1000}

  result.physicSettings.newContactMaterial= {material1: "objectMaterial" , material2: "wheelMaterial" , friction: 0.3, restitution: 0 ,contactEquationStiffness: 1000}


}

const initializeCannonJs = function(){
  let result = new CANNON.World();
  result.broadphase = new CANNON.NaiveBroadphase();
  //result.broadphase = new CANNON.SAPBroadphase(result);
  result.solver.iterations = 7;
  result.defaultContactMaterial.contactEquationStiffness = 1e6;
  result.defaultContactMaterial.contactEquationRelaxation = 10;
  //result.defaultContactMaterial.friction = 0.2;
  return result;
}

const createContactMaterial = function({newContactMaterial}){
    let material1 = newContactMaterial.material1;
    let material2 = newContactMaterial.material2;
    materials[material1].name = material1;
    materials[material2].name = material2;
    cannon.addContactMaterial( new CANNON.ContactMaterial(materials[material1] , materials[material2] , { friction: newContactMaterial.friction, restitution: newContactMaterial.restitution }) );
    return true;
  }

const setGravity = function({gravity , cannon}){
  cannon.gravity.set (gravity.x , gravity.y , gravity.z);
  return true;
}