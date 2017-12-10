
const PIXI = require("pixi.js")
const back = new PIXI.Sprite(PIXI.Texture.fromImage("assets/board.png"))
const style = { fontFamily: "Courier", fontSize: "32px", fill: 0xffffff, align: "center" }
const score = new PIXI.Text("0", style)
const container = new PIXI.Container()
const makeblock = require("./block").makeblock

let points = 0

container.addChild(back)
container.addChild(score)
container.position.set(window.innerWidth / 2, window.innerHeight / 2)
window.addEventListener("resize", _ => container.position.set(window.innerWidth / 2, window.innerHeight / 2))
back.anchor.set(0.5, 0.5)
score.position.set(-window.innerWidth / 7, -window.innerHeight / 5)

const getX = (j, i) => -120 + 80 * i
const getY = (j, i) => -120 + 80 * j

const grid = [[], [], [], []]
const list = []
let j = 4;
while (j--) {
  let i = 4;
  while (i--) {
    let e = makeblock()
    e.container.position.x = getX(j, i)
    e.container.position.y = getY(j, i)
    grid[j][i] = e
    list.push(e)
    container.addChild(e.container)
  }
}

const randseed = _ => {
  let anyfree = false
  let i = list.length
  let freeblocks = []
  while (i-- > 0)
    if (list[i].label.text == " ")
      freeblocks.push(list[i])
  if (freeblocks.length > 0) {
    i = Math.floor(Math.random() * freeblocks.length)
    freeblocks[i].power2()
  } else {
    // game over!
    alert("Game over!")
    window.location.reload()
  }
}

const shakeup = _ => {
  console.log("UP")
  let moved = false
  let i = 4
  while (i-- > 1) {
    let j = 4
    while (j--) {
      points += grid[i][j].hit(grid[i - 1][j])
    }
  }
  score.text = points
  return moved
}

const shakedown = _ => {
  console.log("DOWN")
  let moved = false
  let i = -1
  while (++i < 3) {
    let j = -1
    while (++j < 4) {
      points += grid[i][j].hit(grid[i + 1][j])
    }
  }
  score.text = points
  return moved
}
const shakeleft = _ => {
  console.log("LEFT")
  let moved = false
  let j = 4;
  while (j-- > 1) {
    let i = 4;
    while (i--) {
      points += grid[i][j].hit(grid[i][j - 1])
    }
  }
  score.text = points
  return moved
}
const shakeright = _ => {
  console.log("RIGHT")
  let moved = false
  let j = -1;
  while (++j < 3) {
    let i = -1;
    while (++i < 4) {
      points += grid[i][j].hit(grid[i][j + 1])
    }
  }
  score.text = points
  return moved
}

exports.score = score
exports.back = back
exports.container = container
exports.randseed = randseed
exports.shakeup = shakeup
exports.shakedown = shakedown
exports.shakeleft = shakeleft
exports.shakeright = shakeright
