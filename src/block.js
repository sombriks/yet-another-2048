
const PIXI = require("pixi.js")

const makeblock = _ => {
  const container = new PIXI.Container()
  const block = new PIXI.Sprite(PIXI.Texture.fromImage("assets/square00.png"))
  const style = { fontFamily: "Courier", fontSize: "48", fill: 0xffffff, align: "center" }
  const label = new PIXI.Text("", style)

  container.addChild(block)
  container.addChild(label)
  block.anchor.set(0.5, 0.5)
  label.anchor.set(0.5, 0.5)

  return {
    container,
    block,
    label
  }
}

exports.makeblock = makeblock