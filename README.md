# Kayak
## Description
This is my final project for computer graphics.

I modelled a person in a kayak. I was motivated to do this after finding a three.js examples of water at sunrise. At home I kayak at sunrise and so I thought it would be neat to model one of my favorite things to do.

If the user hits the left arrow key, the paddle dips in the water and the kayak moves left.
If the user hits the right arrow key, the paddle dips in the water and the kayak moves right.

## Design Stucture
I tried making groupd for the paddle, the person, and the kayak model as a whole. The person is made up of another two groups upper arms and lower arms.
I tried to make the rowing movement using these groups but it was easier to do this my individual parts.
I made my persona and kayak from BoxGeometry SphereGeometry and Cylinder Geomertry.

## Difficulties
The hardest part of the project was modeling the movement of of the paddle to move the kayak. I had tried using the arm group as whole to move the paddle, but it would dislocate the arms for the persons body. Eventually I ended up moving the individual meshes of lower left arm and lower right arm to move the paddle.
The next difficulty was to make it a quick motion. So I created a reset paddle function that went back to the 'neutral' state after paddling left or right. I found a method online that allowed the movement to wait before resetting the paddle.


## Examples
Kayak1.png
Kayak2.png
Video(1).MOV
Video(2).MOV


## Sources
Inspiration for project: https://github.com/mrdoob/three.js/blob/master/examples/webgl_shaders_ocean.html and headshot1.jpg

Textural Image for Water Normals: https://github.com/mrdoob/three.js/blob/master/examples/textures/water/Water_1_M_Normal.jpg

Code for Water effects: https://github.com/mrdoob/three.js/blob/master/examples/js/objects/Water.js

Code for Skybox: https://github.com/mrdoob/three.js/blob/master/examples/js/objects/Sky.js

Information on Keyboard Input: https://www.pandaqi.com/Games/6-three-js-tutorial-for-professionals

Information on setTimeout function from:https://stackoverflow.com/questions/36448954/how-to-set-time-delay-in-adding-mesh-to-scene-in-three-js

All hex colors used are from https://www.color-hex.com/color/691ea9
