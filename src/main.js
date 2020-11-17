import 'phaser';
import EndScene from './scenes/EndScene';
import GameScene from './scenes/GameScene';
import MainMenu from './scenes/MainMenu';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 600,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {y:0}
        }
    },
    scene: [
        MainMenu,
        GameScene,
        EndScene
    ]
};

const game = new Phaser.Game(config);