// import Phaser from "phaser";
const { Game } = require("phaser");
const Phaser = require("phaser");
// const { create } = require("browser-sync")
let background;
let pbutton;
let ebutton;
class MainMenu extends Phaser.Scene {
    constructor() {
        super({
            key: 'MainMenu'
        })
    }
    preload() {
        this.load.image('menu', 'src/image/menub.png')
        this.load.image('play', 'src/image/600.png')
        this.load.image('exit', 'src/image/700.png')
    }

    create() {
        background = this.add.image(0, 0, 'menu').setOrigin(0, 0).setScale(0.29,0.2)
        pbutton = this.add.image(300, 400, 'play').setScale(0.8)
        pbutton.setInteractive();
        pbutton.on('pointerup',()=>{
            this.scene.start('GameScene')
        })
        ebutton = this.add.image(300, 550, 'exit').setScale(0.8)

    }

}

export default MainMenu;