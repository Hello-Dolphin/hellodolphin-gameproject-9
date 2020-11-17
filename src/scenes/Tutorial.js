let back;
class Tutorial extends Phaser.Scene {
    constructor() {
        super({
            key: 'Tutorial'
        })
    }
    preload() {
        this.load.image('howtoplay', 'src/image/how.png')
        
    }

    create() {
        back = this.add.image(39, -70, 'howtoplay').setOrigin(0, 0).setScale(0.3,0.23)
        back.on('pointerup',()=>{
            this.scene.start('MainMenu')
        })
        back.setInteractive();
        // ebutton = this.add.image(300, 550, 'exit').setScale(0.8)

    }

}

export default Tutorial;