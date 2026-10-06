import { writeFile } from 'node:fs/promises'
import * as THREE from 'three'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'

// GLTFExporter's binary path reads Blob chunks via FileReader, which only
// exists in browsers. Node has no DOM, so this script runs as a one-off
// build step rather than at runtime — shim just enough to let it finish.
globalThis.FileReader = class {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then((buf) => {
      this.result = buf
      this.onloadend?.()
    })
  }
}

function buildOwl() {
  const group = new THREE.Group()
  group.name = 'MascotOwl'

  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xc9772c, roughness: 0.55 })
  const bellyMat = new THREE.MeshStandardMaterial({ color: 0xf2d9b0, roughness: 0.6 })
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x2a1c12, roughness: 0.4 })
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 })
  const sunMat = new THREE.MeshStandardMaterial({ color: 0xffb23e, roughness: 0.5 })
  const navyMat = new THREE.MeshStandardMaterial({ color: 0x1c2b4a, roughness: 0.5 })
  const greenMat = new THREE.MeshStandardMaterial({ color: 0x2f9e63, roughness: 0.6 })

  const body = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), bodyMat)
  body.name = 'Body'
  body.scale.set(1, 1.2, 0.9)
  group.add(body)

  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.62, 24, 24), bellyMat)
  belly.name = 'Belly'
  belly.position.set(0, -0.15, 0.68)
  belly.scale.set(1, 1.15, 0.6)
  group.add(belly)

  ;[-0.38, 0.38].forEach((x, i) => {
    const eyeWhite = new THREE.Mesh(new THREE.SphereGeometry(0.3, 20, 20), whiteMat)
    eyeWhite.name = `EyeWhite${i}`
    eyeWhite.position.set(x, 0.3, 0.78)
    group.add(eyeWhite)
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.13, 16, 16), darkMat)
    pupil.name = `Pupil${i}`
    pupil.position.set(x, 0.3, 1.02)
    group.add(pupil)
  })

  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.26, 16), sunMat)
  beak.name = 'Beak'
  beak.rotation.x = Math.PI / 2
  beak.position.set(0, 0.08, 1.05)
  group.add(beak)

  ;[-0.38, 0.38].forEach((x, i) => {
    const brow = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.06, 0.06), darkMat)
    brow.name = `Brow${i}`
    brow.position.set(x, 0.56, 0.85)
    brow.rotation.z = x < 0 ? 0.25 : -0.25
    group.add(brow)
  })

  const capTop = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.07, 0.95), navyMat)
  capTop.name = 'CapTop'
  capTop.position.set(0, 1.18, 0.05)
  capTop.rotation.y = Math.PI / 6
  group.add(capTop)
  const capBase = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.5, 0.3, 24), navyMat)
  capBase.name = 'CapBase'
  capBase.position.set(0, 0.95, 0.05)
  group.add(capBase)
  const tassel = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 12), sunMat)
  tassel.name = 'Tassel'
  tassel.position.set(0.42, 1.1, 0.05)
  group.add(tassel)

  const wingGeo = new THREE.SphereGeometry(0.42, 20, 20)
  const leftWing = new THREE.Mesh(wingGeo, bodyMat)
  leftWing.name = 'LeftWing'
  leftWing.scale.set(0.5, 1.1, 0.5)
  leftWing.position.set(-0.95, -0.1, 0.1)
  leftWing.rotation.z = 0.3
  group.add(leftWing)

  const rightWing = new THREE.Mesh(wingGeo, bodyMat)
  rightWing.name = 'RightWing'
  rightWing.scale.set(0.5, 1.1, 0.5)
  rightWing.position.set(0.95, -0.1, 0.1)
  rightWing.rotation.z = -0.3
  group.add(rightWing)

  ;[-0.3, 0.3].forEach((x, i) => {
    const foot = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.2, 8), sunMat)
    foot.name = `Foot${i}`
    foot.position.set(x, -1.28, 0.3)
    group.add(foot)
  })

  const book = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.42, 0.08), greenMat)
  book.name = 'Book'
  book.position.set(0.05, -0.55, 1.0)
  book.rotation.set(-0.3, 0.1, 0.05)
  group.add(book)

  return group
}

const owl = buildOwl()
const exporter = new GLTFExporter()

exporter.parse(
  owl,
  (result) => {
    const buffer = Buffer.from(result)
    writeFile(new URL('../public/models/mascot-owl.glb', import.meta.url), buffer).then(() => {
      console.log('mascot-owl.glb written,', buffer.length, 'bytes')
    })
  },
  (error) => {
    console.error(error)
    process.exit(1)
  },
  { binary: true },
)
