var container = document.getElementById('moonglobe');
document.body.appendChild(container);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
container.appendChild( renderer.domElement );

//add scene
var scene = new THREE.Scene();

//add camera
// FOV: 75 degrees
// Aspect: width/height
// clipping: close, far
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10 );


var geometry = new THREE.SphereGeometry( 5, 32, 32 );
var material = new THREE.MeshPhongMaterial();

//create texture based on image
// using cropped jpg
// removed 9 pixels from left and right side
var texture = new THREE.TextureLoader().load('img/LRO_WAC_Mosaic_Global_50ppd_crop.jpg');

// add filter to reduce pinch at poles
// quick fix for now
texture.minFilter = THREE.NearestFilter;

// map texture to material object
material.map = texture;

// load bumpmap image
// created in photshop
// load texture image
// Filter / 3D / Generate Bump Map
// save
var bump = new THREE.TextureLoader().load('img/LRO_WAC_Mosaic_Global_50ppd_bump.jpg');
// add bumpmap to material object
material.bumpMap = bump;
material.bumpScale = 0.2;


// create mesh based on geometry and material
var sphere = new THREE.Mesh( geometry, material );
// add mesh to scene
scene.add( sphere );


// set camera distance
// *NOTE: Should be greater than sphere/object radius
camera_radius = 9;

// Vectors in 3D space
// we will use these during camera rotation
// start_pos will be the default position for our camera
// current_pos will be updated position of camera
start_pos = new THREE.Vector3(camera_radius,0,0);
current_pos = new THREE.Vector3(camera_radius,0,0);

// we will use these vectors when applying rotations to camera
y_vector = new THREE.Vector3(0,1,0);
z_vector = new THREE.Vector3(0,0,1);


// add light source(s)
var light = new THREE.DirectionalLight();
scene.add(light);


// add longtitude and latitude vars
long = 0;
lat = 0;

// call this to set camera location to default
rotateVector(long, lat);

function animate() {
	requestAnimationFrame( animate );
	// set camera location to current_pos vector components
	camera.position.set(current_pos.x, current_pos.y, current_pos.z);
	// place light source to camera location
	light.position.set( camera.position.x, camera.position.y, camera.position.z);
	// point camera to moon
	// moon is at (0,0,0)
	camera.lookAt(new THREE.Vector3());
	renderer.render( scene, camera );
}

// newLong: float value representing longitude [-180,180]
// newLat: float value representing latitude [-90,90]
function rotateVector(newLat, newLong) {
	// apply rotation transformations to default vector
	// we do this as our default vector points toward (0, 0) in (latitude, longitude)
	start_pos.applyAxisAngle(y_vector, newLong * Math.PI / 180).applyAxisAngle(z_vector, newLat * Math.PI / 180);
	// assign x,y,z components to current_pos vector
	current_pos.set(start_pos.x, start_pos.y, start_pos.z);
	// undo rotations to default vector
	start_pos.x = camera_radius;
	start_pos.y = 0;
	start_pos.z = 0;
	animate();
}
