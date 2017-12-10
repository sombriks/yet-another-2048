// entry point
const PIXI = require("pixi.js")
const Hammer = require("hammerjs")
const app = new PIXI.Application(window.innerWidth, window.innerHeight)
const board = require("./board")

document.getElementById("app").appendChild(app.view);
window.addEventListener("resize", _ => app.renderer.resize(window.innerWidth, window.innerHeight))

app.stage.addChild(board.container)

board.randseed()

const mc = new Hammer(document.body)
mc.get("swipe").set({ direction: Hammer.DIRECTION_ALL })
mc.on("swipe", ev => {
  console.log(ev.angle)
  if (ev.angle >= 0) {
    if (ev.angle < 45) board.shakeright()
    else if (ev.angle < 135) board.shakedown()
    else board.shakeleft()
  } else {
    if (ev.angle > -45) board.shakeright()
    else if (ev.angle > -135) board.shakeup()
    else board.shakeleft()
  }
  board.randseed()
})