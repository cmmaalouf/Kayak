// all hex colors found from https://www.color-hex.com/color/691ea9
// below is the link where i learned how to use keyboard input
// http://learningthreejs.com/blog/2011/09/12/lets-Make-a-3D-game-keyboard/


// learned about the setTimeout function from:
//https://stackoverflow.com/questions/36448954/how-to-set-time-delay-in-adding-mesh-to-scene-in-three-js
      var keyboard = new THREEx.KeyboardState();
      var container, stats;
			var camera, scene, renderer, light;
			var controls, water, sphere;
      go();
			animate();
			function go() {
				container = document.getElementById('container' );
				//
				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );
				//
				scene = new THREE.Scene();
				//
				camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 1, 20000 );
				camera.position.set( 30, 30, 100 );
				//
				light = new THREE.DirectionalLight( 0xffffff, 0.8 );
				scene.add( light );
				// Water
				var waterGeometry = new THREE.PlaneBufferGeometry( 10000, 10000 );
				water = new THREE.Water(
					waterGeometry,
					{
						textureWidth: 512,
						textureHeight: 512,
						waterNormals: new THREE.TextureLoader().load( 'textures/waternormals.jpg', function ( texture ) {
							texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
						} ),
						alpha: 1.0,
						sunDirection: light.position.clone().normalize(),
						sunColor: 0xffffff,
						waterColor: 0x001e0f,
						distortionScale: 3.7,
						fog: scene.fog !== undefined
					}
				);
				water.rotation.x = - Math.PI / 2;
				scene.add( water );
				// Skybox
				var sky = new THREE.Sky();
				sky.scale.setScalar( 10000 );
				scene.add( sky );
				var uniforms = sky.material.uniforms;
				uniforms.turbidity.value = 10;
				uniforms.rayleigh.value = 2;
				uniforms.luminance.value = 1;
				uniforms.mieCoefficient.value = 0.005;
				uniforms.mieDirectionalG.value = 0.8;
				var parameters = {
					distance: 400,
					inclination: 0.49,
					azimuth: 0.205
				};
				var cubeCamera = new THREE.CubeCamera( 1, 20000, 256 );
				cubeCamera.renderTarget.texture.minFilter = THREE.LinearMipMapLinearFilter;
				function updateSun() {
					var theta = Math.PI * ( parameters.inclination - 0.5 );
					var phi = 2 * Math.PI * ( parameters.azimuth - 0.5 );
					light.position.x = parameters.distance * Math.cos( phi );
					light.position.y = parameters.distance * Math.sin( phi ) * Math.sin( theta );
					light.position.z = parameters.distance * Math.sin( phi ) * Math.cos( theta );
					sky.material.uniforms.sunPosition.value = light.position.copy( light.position );
					water.material.uniforms.sunDirection.value.copy( light.position ).normalize();
					cubeCamera.update( renderer, scene );
				}
				updateSun();

        var geometry = new THREE.IcosahedronBufferGeometry( 20, 0);
        var geometry = new THREE.BoxBufferGeometry(40,20,20,3,3);
        var count = geometry.attributes.position.count;
				var colors = [];
				var color = new THREE.Color();
				for ( var i = 0; i < count; i += 3 ) {
					color.setHex( 0xFF0000 );
					colors.push( color.r, color.g, color.b );
					colors.push( color.r, color.g, color.b );
					colors.push( color.r, color.g, color.b );
        }


// Making person Group
person = new THREE.Group();

var shirt_material = new THREE.MeshPhongMaterial();
shirt_material.color = new THREE.Color(0x691EA9);

var skin_material = new THREE.MeshPhongMaterial();
skin_material.color = new THREE.Color(0xffad60);


var torso_geometry = new THREE.BoxBufferGeometry(5, 25, 6, 32);
var torso_mesh = new THREE.Mesh(torso_geometry, shirt_material);
torso_mesh.position.x = 0;
torso_mesh.position.y = 12;
person.add(torso_mesh);

// creates head
var head_geometry = new THREE.SphereGeometry(5, 30, 3, 24);
var head_mesh = new THREE.Mesh(head_geometry, skin_material);
head_mesh.position.x = 0;
head_mesh.position.y = 31;
head_mesh.rotation.z = Math.PI/2;

person.add(head_mesh);


// makes neck
var neck_geometry = new THREE.BoxBufferGeometry(2, 4, 2, 2)
var neck_mesh = new THREE.Mesh(neck_geometry, skin_material);
neck_mesh.position.x = 0;
neck_mesh.position.y = 25;
person.add(neck_mesh);



arm = new THREE.Group();
//upper right arm
upper_arm = new THREE.Group();
var upper_rarm_geometry = new THREE.BoxBufferGeometry(3, 20, 3, 24);
upper_rarm_mesh = new THREE.Mesh(upper_rarm_geometry, shirt_material);
upper_rarm_mesh.position.x = 0;
upper_rarm_mesh.position.y = 20
upper_rarm_mesh.rotation.z = -Math.PI/2;
upper_arm.add(upper_rarm_mesh);







// lower left arm
lower_arm = new THREE.Group();
var larm_geometry = new THREE.BoxBufferGeometry(2, 10, 3, 24);
larm_mesh = new THREE.Mesh(larm_geometry, skin_material);
larm_mesh.position.x = -8;
larm_mesh.position.y = 20;
larm_mesh.position.z = -5;
larm_mesh.rotation.z = Math.PI/2;
larm_mesh.rotation.y = Math.PI/2;
lower_arm.add(larm_mesh);

// lower right arm
var rarm_geometry = new THREE.BoxBufferGeometry(2, 10, 3, 24);
rarm_mesh = new THREE.Mesh(rarm_geometry, skin_material);
rarm_mesh.position.x = 6;
rarm_mesh.position.y = 20;
rarm_mesh.position.z = -5;
rarm_mesh.rotation.z = Math.PI/2;
rarm_mesh.rotation.y = -Math.PI/4;
lower_arm.add(rarm_mesh);


// left hand
var lhand= new THREE.Group();
var lhand_geometry = new THREE.SphereGeometry(2, 20, 3, 24);
lhand_mesh = new THREE.Mesh(lhand_geometry, skin_material);
lhand_mesh.position.x = -8;
lhand_mesh.position.y = 20;
lhand_mesh.position.z = -10;
lhand_mesh.rotation.z = Math.PI/2;
lower_arm.add(lhand_mesh);

// right hand
var rhand= new THREE.Group();
var rhand_geometry = new THREE.SphereGeometry(2, 20, 3, 24);
rhand_mesh = new THREE.Mesh(rhand_geometry, skin_material);
rhand_mesh.position.x = 2;
rhand_mesh.position.y = 20;
rhand_mesh.position.z = -9;
rhand_mesh.rotation.z = Math.PI/2;
lower_arm.add(rhand_mesh);











//paddle bar
paddle = new THREE.Group();
var paddle_geometry = new THREE.CylinderGeometry(1, 1, 80, 32);
var paddle_material = new THREE.MeshPhongMaterial();
paddle_material.color = new THREE.Color("gray");
paddle_mesh = new THREE.Mesh(paddle_geometry, paddle_material);
paddle_mesh.position.x = 0;
paddle_mesh.position.y = 19;
paddle_mesh.position.z = -10;
paddle_mesh.rotation.z = Math.PI/2;
paddle.add(paddle_mesh);

//left paddle
var lpaddle_geometry = new THREE.BoxBufferGeometry(5, 7, 2, 5);
var lpaddle_material = new THREE.MeshPhongMaterial();
lpaddle_material.color = new THREE.Color(0xffe39f);
lpaddle_mesh = new THREE.Mesh(lpaddle_geometry, lpaddle_material);
lpaddle_mesh.position.x = -40;
lpaddle_mesh.position.y = 19;
lpaddle_mesh.position.z = -10;
lpaddle_mesh.rotation.z = Math.PI/2;
paddle.add(lpaddle_mesh);

// right paddle
var rpaddle_geometry = new THREE.BoxBufferGeometry(5, 7, 2, 5);
rpaddle_mesh = new THREE.Mesh(rpaddle_geometry, lpaddle_material);
rpaddle_mesh.position.x = 40;
rpaddle_mesh.position.y = 19;
rpaddle_mesh.position.z = -10;
rpaddle_mesh.rotation.z = Math.PI/2;
paddle.add(rpaddle_mesh);

lower_arm.add(paddle);
upper_arm.add(lower_arm);
arm.add(upper_arm);
person.add(arm);




var kayak_material = new THREE.MeshPhongMaterial() ;
kayak_material.color = new THREE.Color(0xEE7600);
var mesh = new THREE.Mesh( geometry, kayak_material );
var rand = Math.random();
mesh.rotation.y = Math.PI/2;
mesh.position.y = Math.sin(rand);

kayak = new THREE.Group();
kayak.add(mesh);
kayak.add(person);

scene.add(kayak);


				geometry.addAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
				var material = new THREE.MeshStandardMaterial( {
					vertexColors: THREE.VertexColors,
					roughness: 0.0,
					flatShading: true,
					envMap: cubeCamera.renderTarget.texture,
					side: THREE.DoubleSide
				} );

				controls = new THREE.OrbitControls( camera, renderer.domElement );
				controls.maxPolarAngle = Math.PI * 0.495;
				controls.target.set( 0, 10, 0 );
				controls.minDistance = 40.0;
				controls.maxDistance = 200.0;
				camera.lookAt( controls.target );
				//
				stats = new Stats();
				container.appendChild( stats.dom );
				// GUI
				var gui = new dat.GUI();
				var folder = gui.addFolder( 'Sky' );
				folder.add( parameters, 'inclination', 0, 0.5, 0.0001 ).onChange( updateSun );
				folder.add( parameters, 'azimuth', 0, 1, 0.0001 ).onChange( updateSun );
				folder.open();
				var uniforms = water.material.uniforms;
				var folder = gui.addFolder( 'Water' );
				folder.add( uniforms.distortionScale, 'value', 0, 8, 0.1 ).name( 'distortionScale' );
				folder.add( uniforms.size, 'value', 0.1, 10, 0.1 ).name( 'size' );
				folder.add( uniforms.alpha, 'value', 0.9, 1, .001 ).name( 'alpha' );
				folder.open();
				//
				window.addEventListener( 'resize', onWindowResize, false );
        animate();
			}
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			function animate() {
				requestAnimationFrame( animate );
				render();
				stats.update();
			}

      function paddleLeft()
      {
        // moves kayak
        kayak.position.x-=0.25;
        kayak.position.z-=0.25;

        paddle.rotation.z=-Math.PI/8;
        rarm_mesh.rotation.y=Math.PI/2;
        rhand_mesh.position.x = 6;
        rhand_mesh.position.y = -19.5;
        rhand_mesh.position.z = -11;
        rhand_mesh.position.y = 20;

        // left arm and hand
        larm_mesh.rotation.x = Math.PI/8;
        larm_mesh.position.y= 22;
        lhand_mesh.position.y = 24;

        renderer.render(scene, camera);
      }

      function paddleRight()
      {
        // moves kayak
        kayak.position.x+=0.25;
        kayak.position.z-=0.25;

        paddle.rotation.z=Math.PI/8;
        larm_mesh.rotation.y=Math.PI/2;
        larm_mesh.rotation.x = -Math.PI/16;
        lhand_mesh.position.x = -8;
        lhand_mesh.position.y = 10;
        lhand_mesh.position.z = -10;
        lhand_mesh.position.y = 19;

        // right arm and hand
        rarm_mesh.rotation.x = Math.PI/8
        rarm_mesh.position.y= 20;
        rhand_mesh.position.y = 22;


        renderer.render(scene, camera);
      }

      function paddleReset()
      {
        //right hand
        rhand_mesh.position.x = 2;
        rhand_mesh.position.y = 20;
        rhand_mesh.position.z = -9;
        rhand_mesh.rotation.z = Math.PI/2;

        //left hand
        lhand_mesh.position.x = -8;
        lhand_mesh.position.y = 20;
        lhand_mesh.position.z = -10;
        lhand_mesh.rotation.z = Math.PI/2;


        //lower right arm
        rarm_mesh.position.x = 6;
        rarm_mesh.position.y = 20;
        rarm_mesh.position.z = -5;
        rarm_mesh.rotation.z = Math.PI/2;
        rarm_mesh.rotation.y = Math.PI/4;

        //lower left arm
        larm_mesh.position.x = -8;
        larm_mesh.position.y = 20;
        larm_mesh.position.z = -5;
        larm_mesh.rotation.z = Math.PI/2;
        larm_mesh.rotation.y = Math.PI/2;


        //paddle
        paddle.rotation.z = Math.PI/40;

        renderer.render(scene, camera);
      }

      function paddleResetL()
      {
        larm_mesh.rotation.x = Math.PI;
        rarm_mesh.rotation.y*= -1;
      }

      function paddleResetR()
      {
        rarm_mesh.rotation.y = Math.PI/2;
        rarm_mesh.rotation.x = Math.PI;
        rarm_mesh.position.y = 19;
        rhand_mesh.position.x = 6;
        rhand_mesh.position.y = 20;
      }




			function render() {
				var time = performance.now() * 0.001

        kayak.position.y = Math.sin(time*2);
				water.material.uniforms.time.value += 1.0 / 60.0;
        if( keyboard.pressed("right") )
        {

          paddleRight();
          setTimeout(function()
  {
      paddleReset();paddleResetR();
  },500);

        }
        if( keyboard.pressed("left") )
        {

            paddleLeft();
            setTimeout(function()
    {
        paddleReset();paddleResetL();
    },500);

          }
				renderer.render( scene, camera );
			}
