const PIXI = require("pixi.js")

const board = new PIXI.Sprite(PIXI.Texture.fromImage("assets/board.png"))

const container = new PIXI.Container()

container.addChild(board)

// container.anchor.set(0.5,0.5)

container.position.set(window.innerWidth / 2,window.innerHeight / 2)

window.addEventListener("resize", _ => container.position.set(window.innerWidth / 2,window.innerHeight / 2))

board.anchor.set(0.5,0.5)

module.exports = container