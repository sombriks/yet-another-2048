const PIXI = require("pixi.js")

const app = new PIXI.Application(window.innerWidth, window.innerHeight)

document.getElementById("app").appendChild(app.view);
window.addEventListener("resize", _ => app.renderer.resize(window.innerWidth, window.innerHeight))

app.stage.addChild(require("./board"))