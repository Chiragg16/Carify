
import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js'
import * as dat from "https://cdn.skypack.dev/dat.gui"
// import {GLTFloader} from "https://cdn.jsdelivr.net/npm/three-gltf-loader@1.111.0/index.js"

// const raycaster = new THREE.Raycaster()
const camera = new THREE.PerspectiveCamera(135,innerWidth/innerHeight,0.1,1000);
const scene = new THREE.Scene();
const renderer = new THREE.WebGL1Renderer({antialias : true});
const gui = new dat.GUI();
// console.log(raycaster)
// console.log(OrbitControls)
// const controls = new OrbitControls(camera, renderer.domElement );
const world = {
    plane:{
        width:5,
        height: 5
    }
}
gui.add(world.plane, "width" , 1, 8).onChange(() => {
    geometry.geometry.dispose();
    // console.log(world.plane.width)
    geometry.geometry = new THREE.PlaneGeometry(world.plane.width,world.plane.height,10,10)

    for(var i = 2;i<geometry.geometry.attributes.position.array.length;i = i+3){
        geometry.geometry.attributes.position.array[i] = geometry.geometry.attributes.position.array[i] + Math.random()/2
        
    }
})

gui.add(world.plane ,"height", 1, 5).onChange(() => {
    geometry.geometry.dispose();
    geometry.geometry = new THREE.PlaneGeometry(world.plane.width,world.plane.height,10,10)
    for(var i = 2;i<geometry.geometry.attributes.position.array.length;i = i+3){
        geometry.geometry.attributes.position.array[i] = geometry.geometry.attributes.position.array[i] + Math.random()/2
        
    }
})

const plane = new THREE.PlaneGeometry(5,5,10,10)
const material = new THREE.MeshPhongMaterial({color : 0xff0000, side : THREE.DoubleSide , flatShading: true});
const geometry = new THREE.Mesh(plane,material);
const light = new THREE.DirectionalLight(0xffffff,1)
const light1 = new THREE.DirectionalLight(0xffffff,1)



light.position.set(0,0,1)
light1.position.set(0,0,-1)
new OrbitControls(camera, renderer.domElement)


for(var i = 2;i<geometry.geometry.attributes.position.array.length;i = i+3){
    geometry.geometry.attributes.position.array[i] = geometry.geometry.attributes.position.array[i] + Math.random()/2
    
}

document.body.appendChild(renderer.domElement);
renderer.setSize(innerWidth,innerHeight);
camera.position.z = 2;
// renderer.setClearColor("#e5e5e5");
scene.add(geometry);
scene.add(light1)
scene.add(light)


window.addEventListener('resize', function(e){
    renderer.setSize(innerWidth,innerHeight);
    camera.aspect = (innerWidth/innerHeight);
    camera.updateProjectionMatrix();
})

const cursorloc = {
    x : undefined,
    y : undefined
}



function animate(){
    requestAnimationFrame(animate);
    // geometry.rotation.x += .1;
    // geometry.rotation.y += .01
    renderer.render(scene,camera);
    raycaster.setFromCamera(cursorloc , camera)
    const intersections = raycaster.intersectObject(geometry)
    if(intersections.length > 0){
    // console.log(intersections)
    }
}

animate();


//events
addEventListener("mousemove" , function(e){
    cursorloc.x = (e.clientX / innerWidth)*2 - 1;
    cursorloc.y = -(e.clientY / innerHeight)*2 + 1
    // console.log(cursorloc)
})




