
const PIXI = require("pixi.js")
const back = new PIXI.Sprite(PIXI.Texture.fromImage("assets/board.png"))
const style = { fontFamily: "Courier", fontSize: "32px", fill: 0xffffff, align: "center" }
const score = new PIXI.Text("0", style)
const container = new PIXI.Container()
const makeblock = require("./block").makeblock
const Hammer = require("hammerjs")

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
  while (i--)
    if (list[i].label.text == " ")
      anyfree = true
  if (anyfree) {
    i = Math.round(Math.random() * list.length)
    if (i >= list.length) i--
    list[i].power2()
  }
}

const mc = new Hammer(document.body)
mc.get("swipe").set({ direction: Hammer.DIRECTION_ALL })

mc.on("swipe", ev => {
  console.log(ev)
})


const shakeup = _ => {
  let i = 4
  while (i-- > 1) {
    let j = 4
    while (j--) {
      grid[i][j].hit(grid[i - 1][j])
    }
  }
  // randseed()
}
const shakedown = _ => {
  let i = -1
  while (++i < 3) {
    let j = 4
    while (j--) {
      grid[i + 1][j].hit(grid[i][j])
    }

  }
}
const shakeleft = _ => { }
const shakeright = _ => { }

back.interactive = true


exports.score = score
exports.back = back
exports.container = container
exports.randseed = randseed
