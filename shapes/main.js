const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

const material = new THREE.MeshBasicMaterial({color:'0x000000'})

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

const boxGeometry = new THREE.BoxGeometry();
const cube = new THREE.Mesh(boxGeometry,material);
scene.add(cube);