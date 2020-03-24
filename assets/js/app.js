//let them
let scene, camera, renderer, mesh;
let meshFloor, ambientLight, light, controls;
let fire;
let keyboard = {};
let player = { height:100, speed:0.2, turnSpeed:Math.PI*0.02 };
let USE_WIREFRAME = false;
 
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(90, 1280/720, 0.1, 1000);

//FOREST SCENE BACKGROUND
let ForestArray = [];
for (let i = 0; i < 6; i++)
ForestArray.push( new THREE.MeshBasicMaterial({
   map: new THREE.TextureLoader().load('assets/textures/forestback.gif'),
   side: THREE.BackSide
}));
let ForestGeometry = new THREE.CubeGeometry( 950,900, 1000 );
let ForestMaterial = new THREE.MeshFaceMaterial( ForestArray );
let ForestBox = new THREE.Mesh(ForestGeometry, ForestMaterial);
scene.add(ForestBox);

// TREE
let TreeLoaderExtra = new THREE.GLTFLoader();

TreeLoaderExtra.load( 'assets/models/boomstam/scene.gltf', function ( treegltf ) {
   treegltf.scene.scale.set(30, 180,30);
   treegltf.scene.position.y = 37;
   treegltf.scene.position.x = 205;
   treegltf.scene.position.z = 150;
   treegltf.scene.rotation.x = -0.111;
   treegltf.scene.receiveShadow = true;
   scene.add( treegltf.scene );
}, undefined, function ( error1 ) {
   console.error( error1 );
   } );

//  TREE
let TreeLoaderExtraBack = new THREE.GLTFLoader();

TreeLoaderExtraBack.load( 'assets/models/boomstam/scene.gltf', function ( treegltf ) {
   treegltf.scene.scale.set(30, 180,30);
   treegltf.scene.position.y = 37;
   treegltf.scene.position.x = 105;
   treegltf.scene.position.z = 150;
   treegltf.scene.rotation.x = -0.111;
   treegltf.scene.receiveShadow = true;
   scene.add( treegltf.scene );
}, undefined, function ( error1 ) {
   console.error( error1 );
   } );

// TREE
let TreeLoader = new THREE.GLTFLoader();

TreeLoader.load( 'assets/models/boomstam/scene.gltf', function ( treegltf ) {
   treegltf.scene.scale.set(30, 180,30);
   treegltf.scene.position.y = 37;
   treegltf.scene.position.x = 205;
   treegltf.scene.position.z = 60;
   treegltf.scene.rotation.x = -0.111;
   treegltf.scene.receiveShadow = true;
   scene.add( treegltf.scene );
}, undefined, function ( error1 ) {
   console.error( error1 );
   } );

// TREE
let TreeLoadermid = new THREE.GLTFLoader();

TreeLoadermid.load( 'assets/models/boomstam/scene.gltf', function ( treegltf ) {
   treegltf.scene.scale.set(30, 200,30);
   treegltf.scene.position.y = 27;
   treegltf.scene.position.x = 115;
   treegltf.scene.position.z = 60;
   treegltf.scene.rotation.x = -0.111;
   treegltf.scene.receiveShadow = true;
   scene.add( treegltf.scene );
}, undefined, function ( error1 ) {
   console.error( error1 );
   } );

// TREE
let TreeLoaderTerrainTree = new THREE.GLTFLoader();

TreeLoaderTerrainTree.load( 'assets/models/boomstam/scene.gltf', function ( treegltf ) {
   treegltf.scene.scale.set(30, 200,30);
   treegltf.scene.position.y = 27;
   treegltf.scene.position.x = 25;
   treegltf.scene.position.z = 60;
   treegltf.scene.rotation.x = -0.111;
   treegltf.scene.receiveShadow = true;
   scene.add( treegltf.scene );
}, undefined, function ( error1 ) {
   console.error( error1 );
   } );

// TREE
let TreeLoaderTerrainTreeDown = new THREE.GLTFLoader();

TreeLoaderTerrainTreeDown.load( 'assets/models/boomstam/scene.gltf', function ( treegltf ) {
   treegltf.scene.scale.set(30, 230,30);
   treegltf.scene.position.y = -10;
   treegltf.scene.position.x = -95;
   treegltf.scene.position.z = 60;
   treegltf.scene.rotation.x = -0.111;
   treegltf.scene.receiveShadow = true;
   scene.add( treegltf.scene );
}, undefined, function ( error1 ) {
   console.error( error1 );
   } );

// TREE
let TreeLoaderOtherSideRightFirst = new THREE.GLTFLoader();

TreeLoaderOtherSideRightFirst.load( 'assets/models/boomstam/scene.gltf', function ( treegltf ) {
   treegltf.scene.scale.set(25, 220,25);
   treegltf.scene.position.y = -20;
   treegltf.scene.position.x = 125;
   treegltf.scene.position.z = -190;
   treegltf.scene.receiveShadow = true;
   scene.add( treegltf.scene );
}, undefined, function ( error1 ) {
   console.error( error1 );
   } );

// TREE
let TreeLoaderOtherSideRightThin = new THREE.GLTFLoader();

TreeLoaderOtherSideRightThin.load( 'assets/models/boomstam/scene.gltf', function ( treegltf ) {
   treegltf.scene.scale.set(20, 220,20);
   treegltf.scene.position.y = -20;
   treegltf.scene.position.x = 65;
   treegltf.scene.position.z = -250;
   treegltf.scene.receiveShadow = true;
   scene.add( treegltf.scene );
}, undefined, function ( error1 ) {
   console.error( error1 );
   } );

// TREE
let TreeLoaderOtherSideRightSlant = new THREE.GLTFLoader();

TreeLoaderOtherSideRightSlant.load( 'assets/models/boomstam/scene.gltf', function ( treegltf ) {
   treegltf.scene.scale.set(40, 160,40);
   treegltf.scene.position.y = -20;
   treegltf.scene.position.x = -175;
   treegltf.scene.position.z = -120;
   treegltf.scene.rotation.x -= 0.633;
   treegltf.scene.receiveShadow = true;
   scene.add( treegltf.scene );
}, undefined, function ( error1 ) {
   console.error( error1 );
   } );

// TREE
let TreeLoaderStick= new THREE.GLTFLoader();

TreeLoaderStick.load( 'assets/models/boomstam/scene.gltf', function ( treegltf ) {
   treegltf.scene.scale.set(6,130,6);
   treegltf.scene.position.y = -20;
   treegltf.scene.position.x = 90;
   treegltf.scene.position.z = -120;
   treegltf.scene.receiveShadow = true;
   scene.add( treegltf.scene );
}, undefined, function ( error1 ) {
   console.error( error1 );
   } );

// TREES
let LeavesLoader = new THREE.GLTFLoader();

LeavesLoader.load( 'assets/models/trees/scene.gltf', function ( Leafgltf ) {
   Leafgltf.scene.scale.set(1.8, 0.5, 1.8);
   Leafgltf.scene.position.y = 270;
   Leafgltf.scene.position.x = 30;
   Leafgltf.scene.position.z = 0;
   scene.add( Leafgltf.scene );
}, undefined, function ( error1 ) {
   console.error( error1 );
   } );
      
 // FIRE
let FireLoader = new THREE.GLTFLoader();

FireLoader.load( 'assets/models/fire/scene.gltf', function ( firegltf ) {
   
   firegltf.scene.scale.set(10, 25,80);
   firegltf.scene.position.y = 37;
   firegltf.scene.position.x = 30;
   firegltf.scene.position.z = -77;
   scene.add( firegltf.scene );
}, undefined, function ( error1 ) {
   console.error( error1 );
   } );


// TERRAIN STARTS HERE--------------------

//BUMP FLOOR LEFT (SPHERE)
textureWeirdFloorFarLeft = new THREE.TextureLoader().load( 'assets/textures/forestTerrain.jpg' );
meshWeirdFloorFarLeft = new THREE.Mesh(
   new THREE.SphereBufferGeometry(90,100,50),
   new THREE.MeshPhongMaterial({map:textureWeirdFloorFarLeft, wireframe:USE_WIREFRAME})
   
);
meshWeirdFloorFarLeft.position.x = 200;
meshWeirdFloorFarLeft.position.y = -17;
meshWeirdFloorFarLeft.position.z = 155;
scene.add(meshWeirdFloorFarLeft);

//BUMP FLOOR (SPHERE)
textureWeirdFloor = new THREE.TextureLoader().load( 'assets/textures/forestTerrain.jpg' );
meshWeirdFloor = new THREE.Mesh(
   new THREE.SphereBufferGeometry(90,100,50),
   new THREE.MeshPhongMaterial({map:textureWeirdFloor, wireframe:USE_WIREFRAME})
   
);

meshWeirdFloor.position.x = 190;
meshWeirdFloor.position.y = -40;
meshWeirdFloor.position.z = 95;
scene.add(meshWeirdFloor);

//BUMP FLOOR MIDDLE (SPHERE)
textureWeirdFloorMiddle = new THREE.TextureLoader().load( 'assets/textures/forestTerrain.jpg' );
meshWeirdFloorMiddle = new THREE.Mesh(
   new THREE.SphereBufferGeometry(90,100,50),
   new THREE.MeshPhongMaterial({map:textureWeirdFloorMiddle, wireframe:USE_WIREFRAME})
   
);
meshWeirdFloorMiddle.position.x = 100;
meshWeirdFloorMiddle.position.y = -17;
meshWeirdFloorMiddle.position.z = 155;
scene.add(meshWeirdFloorMiddle);

//BUMP FLOOR RIGHT (SPHERE)
textureWeirdFloorRight = new THREE.TextureLoader().load( 'assets/textures/forestTerrain.jpg' );
meshWeirdFloorRight = new THREE.Mesh(
   new THREE.SphereBufferGeometry(90,100,50),
   new THREE.MeshPhongMaterial({map:textureWeirdFloorRight, wireframe:USE_WIREFRAME})
   
);
meshWeirdFloorRight.position.x = 95;
meshWeirdFloorRight.position.y = -47;
meshWeirdFloorRight.position.z = 95;
scene.add(meshWeirdFloorRight);

//BUMP FLOOR FAR RIGHT (SPHERE)
textureWeirdFloorFarRightThird = new THREE.TextureLoader().load( 'assets/textures/forestTerrain.jpg' );
meshWeirdFloorFarRightThird = new THREE.Mesh(
   new THREE.SphereBufferGeometry(90,100,50),
   new THREE.MeshPhongMaterial({map:textureWeirdFloorFarRightThird, wireframe:USE_WIREFRAME})
   
);
meshWeirdFloorFarRightThird.position.x = 25;
meshWeirdFloorFarRightThird.position.y = -17;
meshWeirdFloorFarRightThird.position.z = 155;
scene.add(meshWeirdFloorFarRightThird);

//BUMP FLOOR FAR RIGHT FOURTH (SPHERE)
textureWeirdFloorFarRightThird = new THREE.TextureLoader().load( 'assets/textures/forestTerrain.jpg' );
meshWeirdFloorFarRightThird = new THREE.Mesh(
   new THREE.SphereBufferGeometry(90,100,50),
   new THREE.MeshPhongMaterial({map:textureWeirdFloorFarRightThird, wireframe:USE_WIREFRAME})
   
);
meshWeirdFloorFarRightThird.position.x = 25;
meshWeirdFloorFarRightThird.position.y = -47;
meshWeirdFloorFarRightThird.position.z = 95;
scene.add(meshWeirdFloorFarRightThird);

//BUMP FLOOR FAR RIGHT FOURTH (SPHERE)
textureWeirdFloorFarRightFourth = new THREE.TextureLoader().load( 'assets/textures/forestTerrain.jpg' );
meshWeirdFloorFarRightFourth = new THREE.Mesh(
   new THREE.SphereBufferGeometry(90,100,50),
   new THREE.MeshPhongMaterial({map:textureWeirdFloorFarRightFourth, wireframe:USE_WIREFRAME})
   
);
meshWeirdFloorFarRightFourth.position.x = -65;
meshWeirdFloorFarRightFourth.position.y = -30;
meshWeirdFloorFarRightFourth.position.z = 155;
scene.add(meshWeirdFloorFarRightFourth);

//BUMP FLOOR FAR RIGHT FOURTH (SPHERE)
textureWeirdFloorFarRightFourth = new THREE.TextureLoader().load( 'assets/textures/forestTerrain.jpg' );
meshWeirdFloorFarRightFourth = new THREE.Mesh(
   new THREE.SphereBufferGeometry(90,100,50),
   new THREE.MeshPhongMaterial({map:textureWeirdFloorFarRightFourth, wireframe:USE_WIREFRAME})
   
);
meshWeirdFloorFarRightFourth.position.x = -77;
meshWeirdFloorFarRightFourth.position.y = -97;
meshWeirdFloorFarRightFourth.position.z = 95;
scene.add(meshWeirdFloorFarRightFourth);

//TERRAIN SECTION END HERE--------------------


// HUMAN MODEL STARTS HERE-------------------- 

// FACE
textureFace = new THREE.TextureLoader().load( 'assets/textures/humanskin.jpg' );
meshFace= new THREE.Mesh(
   new THREE.SphereBufferGeometry(9,10,8.9),
   new THREE.MeshPhongMaterial({map:textureFace, wireframe:USE_WIREFRAME})
   
);
meshFace.position.x = 47;
meshFace.position.y = 76;
meshFace.position.z = -80;
scene.add(meshFace);

//JAW
textureJaw = new THREE.TextureLoader().load( 'assets/textures/humanskin.jpg' );
meshJaw= new THREE.Mesh(
   new THREE.ConeBufferGeometry(3,3,16),
   new THREE.MeshPhongMaterial({map:textureJaw, wireframe:USE_WIREFRAME})
   
);
meshJaw.position.x = 50;
meshJaw.position.y = 66;
meshJaw.position.z = -80;
meshJaw.rotation.x = -172.8;

scene.add(meshJaw);

// TORSO
textureTorso = new THREE.TextureLoader().load( 'assets/textures/humanskin.jpg' );
meshFace= new THREE.Mesh(
   new THREE.BoxBufferGeometry(16,20,16),
   new THREE.MeshPhongMaterial({map:textureFace, wireframe:USE_WIREFRAME})
   
);
meshFace.position.x = 47;
meshFace.position.y = 55;
meshFace.position.z = -80;
scene.add(meshFace);

// LEFT UPPER LIMB
textureUpperLimb = new THREE.TextureLoader().load( 'assets/textures/humanskin.jpg' );
meshUpperLimb= new THREE.Mesh(
   new THREE.CylinderBufferGeometry(4,4,10,12),
   new THREE.MeshPhongMaterial({map:textureUpperLimb, wireframe:USE_WIREFRAME})
   
);
meshUpperLimb.position.x = 47;
meshUpperLimb.position.y = 60;
meshUpperLimb.position.z = -70;
meshUpperLimb.rotation.x = 55;
scene.add(meshUpperLimb);

// LEFT ARM
textureArm = new THREE.TextureLoader().load( 'assets/textures/humanskin.jpg' );
meshArm= new THREE.Mesh(
   new THREE.CylinderBufferGeometry(4,4,10,12),
   new THREE.MeshPhongMaterial({map:textureArm, wireframe:USE_WIREFRAME})
   
);
meshArm.position.x = 48;
meshArm.position.y = 59;
meshArm.position.z = -65;
meshArm.rotation.z = 80;
scene.add(meshArm);

// LEFT HAND
textureHand = new THREE.TextureLoader().load( 'assets/textures/humanskin.jpg' );
meshHand= new THREE.Mesh(
   new THREE.CylinderBufferGeometry(4,4,25,12),
   new THREE.MeshPhongMaterial({map:textureHand, wireframe:USE_WIREFRAME})
   
);
meshHand.position.x = 54;
meshHand.position.y = 58;
meshHand.position.z = -75;

meshHand.rotation.y += 20;
meshHand.rotation.x += 30;
scene.add(meshHand);

// RIGHT UPPER LIMB
textureUpperRightLimb = new THREE.TextureLoader().load( 'assets/textures/humanskin.jpg' );
meshUpperRightLimb= new THREE.Mesh(
   new THREE.CylinderBufferGeometry(4,4,10,12),
   new THREE.MeshPhongMaterial({map:textureUpperRightLimb, wireframe:USE_WIREFRAME})
   
);
meshUpperRightLimb.position.x = 47;
meshUpperRightLimb.position.y = 60;
meshUpperRightLimb.position.z = -90;
meshUpperRightLimb.rotation.x = 55;
scene.add(meshUpperRightLimb);

// RIGHT EXTEND UPPER LIMB
textureUpperExtendRightLimb = new THREE.TextureLoader().load( 'assets/textures/humanskin.jpg' );
meshUpperRightExtendLimb= new THREE.Mesh(
   new THREE.CylinderBufferGeometry(4,4,10,12),
   new THREE.MeshPhongMaterial({map:textureUpperExtendRightLimb, wireframe:USE_WIREFRAME})
   
);
meshUpperRightExtendLimb.position.x = 47;
meshUpperRightExtendLimb.position.y = 60;
meshUpperRightExtendLimb.position.z = -93;
meshUpperRightExtendLimb.rotation.x += 55;
meshUpperRightExtendLimb.rotation.z += 55;
scene.add(meshUpperRightExtendLimb);

// RIGHT ARM
textureRightArm = new THREE.TextureLoader().load( 'assets/textures/humanskin.jpg' );
meshRightArm= new THREE.Mesh(
   new THREE.CylinderBufferGeometry(4,4,30,12),
   new THREE.MeshPhongMaterial({map:textureRightArm, wireframe:USE_WIREFRAME})
   
);
meshRightArm.position.x = 54;
meshRightArm.position.y = 52;
meshRightArm.position.z = -80;
meshRightArm.rotation.x-= 61.1;
meshRightArm.rotation.y += 100;
scene.add(meshRightArm);

// RIGHT CALVES 
textureRightCalves = new THREE.TextureLoader().load( 'assets/textures/humanskin.jpg' );
meshRightCalves= new THREE.Mesh(
   new THREE.CylinderBufferGeometry(4,4,37,12),
   new THREE.MeshPhongMaterial({map:textureRightCalves, wireframe:USE_WIREFRAME})
   
);
meshRightCalves.position.x = 50;
meshRightCalves.position.y = 3;
meshRightCalves.position.z = -85;
meshRightCalves.rotation.z -= 0.120;
meshRightCalves.rotation.x += 0.120;
scene.add(meshRightCalves);

// RIGHT UPPER CALVES 
textureRightUpperCalves = new THREE.TextureLoader().load( 'assets/textures/humanskin.jpg' );
meshRightUpperCalves= new THREE.Mesh(
   new THREE.CylinderBufferGeometry(4,4,20,12),
   new THREE.MeshPhongMaterial({map:textureRightUpperCalves, wireframe:USE_WIREFRAME})
   
);
meshRightUpperCalves.position.x = 50;
meshRightUpperCalves.position.y = 31;
meshRightUpperCalves.position.z = -80;
meshRightUpperCalves.rotation.z += 0.233;
meshRightUpperCalves.rotation.x += 0.233;
scene.add(meshRightUpperCalves);

// LEFT CALVES 
textureLeftCalves = new THREE.TextureLoader().load( 'assets/textures/humanskin.jpg' );
meshLeftCalves= new THREE.Mesh(
   new THREE.CylinderBufferGeometry(4,4,30,12),
   new THREE.MeshPhongMaterial({map:textureLeftCalves, wireframe:USE_WIREFRAME})
   
);
meshLeftCalves.position.x = 48;
meshLeftCalves.position.y = 3;
meshLeftCalves.position.z = -86;
meshLeftCalves.rotation.z += 0.120;
meshLeftCalves.rotation.x -= 0.110;
scene.add(meshLeftCalves);

// LEFT UPPER CALVES
textureLeftUpperCalves = new THREE.TextureLoader().load( 'assets/textures/humanskin.jpg' );
meshLeftUpperCalves= new THREE.Mesh(
   new THREE.CylinderBufferGeometry(4,4,25,12),
   new THREE.MeshPhongMaterial({map:textureLeftUpperCalves, wireframe:USE_WIREFRAME})
   
);
meshLeftUpperCalves.position.x = 48;
meshLeftUpperCalves.position.y = 31;
meshLeftUpperCalves.position.z = -86;
meshLeftUpperCalves.rotation.z += 0.233;
meshLeftUpperCalves.rotation.x += 0.233;
scene.add(meshLeftUpperCalves);

//WAIST
textureWaist = new THREE.TextureLoader().load( 'assets/textures/humanskin.jpg' );
meshWaist= new THREE.Mesh(
   new THREE.CylinderBufferGeometry(5,5,15,12),
   new THREE.MeshPhongMaterial({map:textureWaist, wireframe:USE_WIREFRAME})
   
);
meshWaist.position.x = 50;
meshWaist.position.y = 43;
meshWaist.position.z = -80;
meshWaist.rotation.x += 1.533;
scene.add(meshWaist);

// HUMAN MODEL ENDS HERE--------------------


//BOX RIGHT WALL
textureRightWall= new THREE.TextureLoader().load( 'assets/textures/fog.jpg' );
meshWallRight = new THREE.Mesh(
   new THREE.BoxGeometry(640,400,2),
   new THREE.MeshPhongMaterial({map:textureRightWall, wireframe:USE_WIREFRAME,shininess: 40, opacity: 0.35,transparent: true})
);
meshWallRight.position.y += 70;
meshWallRight.position.x += 35;
meshWallRight.position.z -= 255;
scene.add(meshWallRight);

//BOX LEFT WALL
textureLeftWall= new THREE.TextureLoader().load( 'assets/textures/fog.jpg' );
meshWallLeft = new THREE.Mesh(
   new THREE.BoxGeometry(650,400,2),
   new THREE.MeshPhongMaterial({map:textureLeftWall, wireframe:USE_WIREFRAME,shininess: 40, opacity: 0.35,transparent: true})
);
meshWallLeft.position.y += 70;
meshWallLeft.position.x += 20;
meshWallLeft.position.z += 255;
scene.add(meshWallLeft);

//BOX NORTH WALL
textureNorthWall= new THREE.TextureLoader().load( 'assets/textures/fog.jpg' );
meshWallNorth = new THREE.Mesh(
   new THREE.BoxGeometry(540,400,2),
   new THREE.MeshPhongMaterial({map:textureNorthWall, wireframe:USE_WIREFRAME,shininess: 40, opacity: 0.35,transparent: true})
);
meshWallNorth.position.y += 70;
meshWallNorth.position.x += -300;
meshWallNorth.position.z += 15;
meshWallNorth.rotation.y += 23.5;
scene.add(meshWallNorth);

//BOX SOUTH WALL
textureSouthWall= new THREE.TextureLoader().load( 'assets/textures/fog.jpg' );
meshWallSouth= new THREE.Mesh(
   new THREE.BoxGeometry(510,400,2),
   new THREE.MeshPhongMaterial({map:textureSouthWall, wireframe:USE_WIREFRAME,shininess: 40, opacity: 0.35,transparent: true})
);
meshWallSouth.position.y += 70;
meshWallSouth.position.x += 350;
meshWallSouth.position.z += 0;
meshWallSouth.rotation.y += 23.55;
scene.add(meshWallSouth);

//FLOOR
textureFloor = new THREE.TextureLoader().load( 'assets/textures/forestTerrain.jpg' );
meshFloor = new THREE.Mesh(
   new THREE.BoxBufferGeometry(750,600,110),
   new THREE.MeshPhongMaterial({map:textureFloor, wireframe:USE_WIREFRAME})
);
meshFloor.rotation.x -= Math.PI / 2;
meshFloor.position.x = 0;
meshFloor.position.y = -70;
meshFloor.position.z = 0;
scene.add(meshFloor);


// LIGHTS (ESSENTIAL FOR EACH OBJECT)
  light = new THREE.AmbientLight(0x708090, 0.75, 30);
  light.position.set(10,6,-1);
  light.castShadow = true;
  scene.add(light);

  let lighttest = new THREE.PointLight( 0xE38C2D, 2.0, 190 );
  lighttest.position.set( 20, 40, -80 );
  scene.add( lighttest )
  camera.position.set(270, player.height, -150);
  camera.position.z = -120;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(1550, 720);

  // Enable Shadows in the Renderer
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.BasicShadowMap;
 
  document.body.appendChild(renderer.domElement);
  
   controls = new THREE.OrbitControls (camera);
  animate();

function animate(){
  requestAnimationFrame(animate);
  controls.update();

  if(keyboard[87]){ // W key
     camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
     camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
  }
  if(keyboard[83]){ // S key
     camera.position.x += Math.sin(camera.rotation.y) * player.speed;
     camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
  }
  if(keyboard[65]){ // A key
     camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed;
     camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * player.speed;
  }
  if(keyboard[68]){ // D key
     camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed;
     camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * player.speed;
  }
 
  if(keyboard[37]){ // left arrow key
     camera.rotation.y -= player.turnSpeed;
  }
  if(keyboard[39]){ // right arrow key
     camera.rotation.y += player.turnSpeed;
  }
 
  renderer.render(scene, camera);
}
 
function keyDown(event){
  keyboard[event.keyCode] = true;
}
 
function keyUp(event){
  keyboard[event.keyCode] = false;
}
window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);