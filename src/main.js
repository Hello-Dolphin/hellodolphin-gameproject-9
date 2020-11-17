import 'phaser';
import EndScene from './scenes/EndScene';
import GameScene from './scenes/GameScene';
import MainMenu from './scenes/MainMenu';
import Tutorial from './scenes/Tutorial';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 700,
    height: 760,
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
        EndScene,
        Tutorial
    ]
};

const game = new Phaser.Game(config);