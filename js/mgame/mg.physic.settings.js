
export function cannonSettingsBuilder(result){

  result.physicSettings = {};
  result.cannon = initializeCannonJs();

  result.addLink(result.cannon , result.physicSettings.cannon);

  result.physicSettings.addFunction(setGravity);
  result.physicSettings.gravity = {x:0, y:-10 , z:0};

  result.physicSettings.materials = {};
  result.physicSettings.contactMaterials = [];
  result.physicSettings.addFunction(buildContactMaterial);

  result.physicSettings.materials.groundMaterial= new CANNON.Material({name:"groundMaterial"});
  result.physicSettings.materials.objectMaterial= new CANNON.Material({name:"objectMaterial"});
  result.physicSettings.materials.wheelMaterial= new CANNON.Material({name:"wheelMaterial"});

  result.physicSettings.contactMaterials[0]={material1: "groundMaterial" , material2: "objectMaterial" , friction: .3, restitution: .4 };
  result.physicSettings.contactMaterials[1]={material1: "groundMaterial" , material2: "wheelMaterial" , friction: .2, restitution: .3 };
  result.physicSettings.contactMaterials[2]={material1: "objectMaterial" , material2: "wheelMaterial" , friction: 0.3, restitution: .4};
}

function buildContactMaterial({contactMaterials}){
  for (let item of contactMaterials){
    if (!item.added){
      let material1 = materials[item.material1];
      let material2 = materials[item.material2];
      // let contactEquationStiffness = 1000;
      // let contactEquationRelaxation = 3;
      // let frictionEquationRelaxation = 3;
      // let frictionEquationStiffness = 10000000;
      // if (item.contactEquationStiffness) contactEquationStiffness=item.contactEquationStiffness;
      // if (item.contactEquationRelaxation) contactEquationRelaxation=item.contactEquationRelaxation;
      // if (item.frictionEquationRelaxation) frictionEquationRelaxation=item.frictionEquationRelaxation;
      // if (item.frictionEquationStiffness) frictionEquationStiffness=item.frictionEquationStiffness;
      material1.name=item.material1;
      material2.name=item.material2;
      cannon.addContactMaterial( new CANNON.ContactMaterial(material1 , material2 , { friction: item.friction , restitution: item.restitution }) );
      item.added = true;
    }
  }
}
const initializeCannonJs = function(){
  let result = new CANNON.World();
  result.broadphase = new CANNON.NaiveBroadphase();
  //result.broadphase = new CANNON.SAPBroadphase(result);
  result.solver.iterations = 7;
  result.defaultContactMaterial.contactEquationStiffness = 1e6;
  result.defaultContactMaterial.contactEquationRelaxation = 10;
  result.defaultContactMaterial.friction = 0.2;
  return result;
}

const setGravity = function({gravity , cannon}){
  cannon.gravity.set (gravity.x , gravity.y , gravity.z);
  return true;
}