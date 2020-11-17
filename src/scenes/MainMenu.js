// import Phaser from "phaser";
const { Game } = require("phaser");
const Phaser = require("phaser");
// const { create } = require("browser-sync")
let background;
let pbutton;
let hbutton;
class MainMenu extends Phaser.Scene {
    constructor() {
        super({
            key: 'MainMenu'
        })
    }
    preload() {
        this.load.image('menu', 'src/image/menub.png')
        this.load.image('play', 'src/image/play.png')
        this.load.image('howto', 'src/image/how-to-play.png')
        this.load.image('tuto', 'src/image/how.png')
    }

    create() {
        background = this.add.image(0, 0, 'menu').setOrigin(0, 0).setScale(0.34,0.25)
        pbutton = this.add.image(350, 500, 'play').setScale(0.8)
        pbutton.on('pointerover', function(){
            // let howto = this.add.image(350,400,'tuto').setScale(0.1)
        },this)
        pbutton.on('pointerup',()=>{
            this.scene.start('GameScene')
        })
        pbutton.setInteractive();

        hbutton = this.add.image(350,600,'howto').setScale(0.8)
        hbutton.on('pointerup',()=>{
            this.scene.start('Tutorial')
        })
        hbutton.setInteractive();
        // ebutton = this.add.image(300, 550, 'exit').setScale(0.8)

    }

}

export default MainMenu;