<script setup>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useInView } from '../composables/useInView'

const props = defineProps({
  size: { type: Number, default: 280 },
  pose: { type: String, default: 'wave' }, // wave | read | point | think
})

const canvasHost = ref(null)
const { target: wrapper, isVisible } = useInView({ threshold: 0.1 })

let renderer, scene, camera, frameId
let owl, leftWing, rightWing
let mouseX = 0
let started = false

const loader = new GLTFLoader()

function loadOwl() {
  return new Promise((resolve, reject) => {
    loader.load('/models/mascot-owl.glb', (gltf) => resolve(gltf.scene), undefined, reject)
  })
}

async function init() {
  if (started || !canvasHost.value) return
  started = true

  const host = canvasHost.value
  const width = host.clientWidth
  const height = host.clientHeight

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(32, width / height, 0.1, 100)
  camera.position.set(0, 0.4, 6)

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  host.appendChild(renderer.domElement)

  const key = new THREE.DirectionalLight(0xffffff, 2.2)
  key.position.set(2, 3, 4)
  scene.add(key)
  scene.add(new THREE.AmbientLight(0xffffff, 0.65))

  try {
    owl = await loadOwl()
  } catch {
    return
  }
  owl.rotation.y = props.pose === 'point' ? -0.4 : 0.25
  leftWing = owl.getObjectByName('LeftWing')
  rightWing = owl.getObjectByName('RightWing')
  scene.add(owl)

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('resize', onResize)
  animate()
}

function onMouseMove(e) {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1
}

function onResize() {
  if (!canvasHost.value || !renderer || !camera) return
  const width = canvasHost.value.clientWidth
  const height = canvasHost.value.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

function animate() {
  frameId = requestAnimationFrame(animate)
  const t = performance.now() / 1000

  if (owl) {
    owl.position.y = Math.sin(t * 1.6) * 0.08
    owl.rotation.y += (mouseX * 0.4 - (owl.rotation.y - 0.25)) * 0.02
  }
  if (leftWing && rightWing) {
    leftWing.rotation.z = 0.3 + Math.sin(t * 2.2) * 0.12
    rightWing.rotation.z = -0.3 - Math.sin(t * 2.2 + 0.4) * 0.12
  }

  renderer.render(scene, camera)
}

onMounted(() => {
  if (isVisible.value) init()
})

watch(isVisible, (v) => v && init())

onBeforeUnmount(() => {
  cancelAnimationFrame(frameId)
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('resize', onResize)
  renderer?.dispose()
})
</script>

<template>
  <div ref="wrapper" :style="{ width: size + 'px', height: size + 'px' }" class="pointer-events-none select-none">
    <div ref="canvasHost" class="h-full w-full"></div>
  </div>
</template>
