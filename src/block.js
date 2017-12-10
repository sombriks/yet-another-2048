
const PIXI = require("pixi.js")

const makeblock = _ => {
  const container = new PIXI.Container()
  const square = new PIXI.Sprite(PIXI.Texture.fromImage("assets/square00.png"))
  const style = { fontFamily: "Courier", fontSize: "32px", fill: 0xffffff, align: "center" }
  const label = new PIXI.Text("", style)

  container.addChild(square)
  container.addChild(label)
  square.anchor.set(0.5, 0.5)
  label.anchor.set(0.5, 0.5)

  const power0 = _ => {
    label.text = " "
    square.texture = PIXI.Texture.fromImage("assets/square00.png")
    return 0
  }

  const power2 = _ => {
    label.text = "2"
    square.texture = PIXI.Texture.fromImage("assets/square01.png")
    return 1
  }

  const power4 = _ => {
    label.text = "4"
    square.texture = PIXI.Texture.fromImage("assets/square02.png")
    return 5
  }

  const power8 = _ => {
    label.text = "8"
    square.texture = PIXI.Texture.fromImage("assets/square03.png")
    return 10
  }

  const power16 = _ => {
    label.text = "16"
    square.texture = PIXI.Texture.fromImage("assets/square04.png")
    return 50
  }

  const power32 = _ => {
    label.text = "32"
    square.texture = PIXI.Texture.fromImage("assets/square05.png")
    return 100
  }

  const power64 = _ => {
    label.text = "64"
    square.texture = PIXI.Texture.fromImage("assets/square06.png")
    return 500
  }

  const power128 = _ => {
    label.text = "128"
    square.texture = PIXI.Texture.fromImage("assets/square07.png")
    return 1000
  }

  const power256 = _ => {
    label.text = "256"
    square.texture = PIXI.Texture.fromImage("assets/square08.png")
    return 5000
  }

  const power512 = _ => {
    label.text = "512"
    square.texture = PIXI.Texture.fromImage("assets/square09.png")
    return 10000
  }

  const power1024 = _ => {
    label.text = "1024"
    square.texture = PIXI.Texture.fromImage("assets/square10.png")
    return 50000
  }

  const power2048 = _ => {
    label.text = "2048"
    square.texture = PIXI.Texture.fromImage("assets/square11.png")
    return 100000
  }

  const hit = block => {
    if (block.label.text == " ") {
      block.label.text = label.text
      block.square.texture = square.texture
      return power0()
    } else if (label.text == block.label.text) {
      if (label.text == "2") {
        power0()
        return block.power4()
      } else if (label.text == "4") {
        power0()
        return block.power8()
      } else if (label.text == "8") {
        power0()
        return block.power16()
      } else if (label.text == "16") {
        power0()
        return block.power32()
      } else if (label.text == "32") {
        power0()
        return block.power64()
      } else if (label.text == "64") {
        power0()
        return block.power128()
      } else if (label.text == "128") {
        power0()
        return block.power256()
      } else if (label.text == "256") {
        power0()
        return block.power512()
      } else if (label.text == "512") {
        power0()
        return block.power1024()
      } else if (label.text == "1024") {
        power0()
        return block.power2048()
      } 
    }
    return 0
  }

  return {
    container,
    square,
    label,
    hit,
    power2,
    power4,
    power8,
    power16,
    power32,
    power64,
    power128,
    power256,
    power512,
    power1024,
    power2048
  }
}

exports.makeblock = makeblock