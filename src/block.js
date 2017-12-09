
const PIXI = require("pixi.js")

const makeblock = _ => {
  const container = new PIXI.Container()
  const square = new PIXI.Sprite(PIXI.Texture.fromImage("assets/square00.png"))
  const style = { fontFamily: "Courier", fontSize: "48px", fill: 0xffffff, align: "center" }
  const label = new PIXI.Text("", style)

  container.addChild(square)
  container.addChild(label)
  square.anchor.set(0.5, 0.5)
  label.anchor.set(0.5, 0.5)

  const power0 = _ => {
    label.text = " "
    square.texture = PIXI.Texture.fromImage("assets/square00.png")

  }

  const power2 = _ => {
    label.text = "2"
    square.texture = PIXI.Texture.fromImage("assets/square01.png")
  }

  const hit = block => {
    if (block.label.text == " ") {
      block.label.text = label.text
      block.square.texture = square.texture
      power0()
    } else if (label.text == "2") {
      console.log("hit")
    }
  }

  return {
    container,
    square,
    label,
    power2,
    hit
  }
}

exports.makeblock = makeblock