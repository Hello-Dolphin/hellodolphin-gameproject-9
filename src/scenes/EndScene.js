
const { Game } = require("phaser");
const Phaser = require("phaser");
let button1;
let background;
let button2;


class EndScene extends Phaser.Scene{
    constructor(){
        super({
            key: 'EndScene'
        })
    }

    preload(){
        this.load.image('background','src/image/GameOver4.png')
        this.load.image('buttonp','src/image/Play Again.png')
        this.load.image('buttonq','src/image/Quit1.png')
    }
    create(){
        background = this.add.image(120,0,'background').setOrigin(0,0).setScale(0.18)
        button1 = this.add.image(170,400,'buttonp').setOrigin(0,0).setScale(1).setDepth(5)
        button1.setInteractive();
        button1.on('pointerup',()=>{
            this.scene.start('GameScene')
        })

        button2 = this.add.image(240,480,'buttonq').setOrigin(0,0).setScale(1).setDepth(5)
        button2.setInteractive();
        button2.on('pointerup',()=>{
            this.scene.start('MainMenu')
        })
    }
}
export default EndScene;