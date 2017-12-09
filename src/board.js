
const PIXI = require("pixi.js")
const board = new PIXI.Sprite(PIXI.Texture.fromImage("assets/board.png"))
const style = { fontFamily: "Courier", fontSize: "48", fill: 0xffffff, align: "center" }
const score = new PIXI.Text("0", style)
const container = new PIXI.Container()
const makeblock = require("./block").makeblock

container.addChild(board)
container.addChild(score)
container.position.set(window.innerWidth / 2, window.innerHeight / 2)
window.addEventListener("resize", _ => container.position.set(window.innerWidth / 2, window.innerHeight / 2))
board.anchor.set(0.5, 0.5)
score.position.set(-window.innerWidth / 7, -window.innerHeight / 5)

const getX = (j, i) => -120 + 80 * i
const getY = (j, i) => -120 + 80 * j

const grid = [[], [], [], []]
let j = 4;
while (j--) {
  let i = 4;
  while (i--) {
    let e = makeblock()
    e.container.position.x = getX(j, i)
    e.container.position.y = getY(j, i)
    grid[j][i] = e
    container.addChild(e.container)
  }
}

exports.score = score
exports.board = board
exports.container = container
