let keyW;
let keyD;
let keyS;
let keyA;

let backg;

let player;
let playerDestroy;
let eventPlayer;
let health1;
let health2;
let health3;

let score = 0;
let scoreText;

let eventMon1;
let eventMon2;
let monster;
let monster2;
let monsterGroup;
let monsterGroup2;
let monsterDestroy;
let monsterDestroy2;

let bullet;
let bulletBox;
let bullMonster;
let endgame;
class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('back', 'src/image/posei.png')
        this.load.spritesheet('player','src/image/player.png',{frameWidth:210.5,frameHeight:297.5})
        this.load.spritesheet('bullet','src/image/500.png',{frameWidth:211.33,frameHeight:412})
        this.load.spritesheet('monster','src/image/200.png',{frameWidth:532,frameHeight:946})
        this.load.image('health','src/image/Heart.png')
    }
    create() {
        backg = this.add.tileSprite(0,0,500,300,'back').setScale(2.5).setOrigin(0,0)
        player = this.physics.add.sprite(300,400,'player').setScale(0.5).setDepth(5)
        this.anims.create({
            key: 'PlayerAni',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 7

            }),
            frameRate: 2,
            repeat: -1
        })

        this.anims.create({
            key: 'MonsterAni',
            frames: this.anims.generateFrameNumbers('monster', {
                start: 0,
                end: 1

            }),
            frameRate: 5,
            repeat: -1
        })

        this.anims.create({
            key: 'BulletAni',
            frames: this.anims.generateFrameNumbers('bullet', {
                start: 0,
                end: 2

            }),
            frameRate: 5,
            repeat: -1
        })

        player.setCollideWorldBounds(true);

        player.health = 3;
        player.maxHealth = 3;
        // let healthBar = this.physics.add.group();
        health1 = this.add.image(50,20,'health').setOrigin(0,0)
        health2 = this.add.image(80,20,'health').setOrigin(0,0)
        health3 = this.add.image(110,20,'health').setOrigin(0,0)
        // health.fixedToCamera = true;

        scoreText = this.add.text(450, 20, 'score: 0', { fontSize: '20px', fill: '#ffffff' });

        playerDestroy = function () {
            player.health -= 1
            // player.disableBody(true,true)
           
        }

        monsterDestroy = function () {
            
            monster.destroy();
            score += 5;
        }
        // monsterDestroy2 = function () {
        //     monster2.health --
        //     if(monster2.health<=0){
        //     monster2.destroy();
        //     score += 5;
        //     }
        // }
        // this.physics.add.overlap(player, monsterGroup ,monsterDestroy,playerDestroy)
        monsterGroup = this.physics.add.group()
        eventMon1 = this.time.addEvent({
            delay: 1000,
            callback: function () {
                monster = this.physics.add.sprite(Phaser.Math.Between(100,550), 0, 'monster').setScale(0.1)
                monsterGroup.add(monster)
                monsterGroup.setVelocityY(200)
                // monster.setVelocityY(200);
                // this.physics.add.collider(player, monsterGroup)
                monster.anims.play('MonsterAni', true)
                this.physics.add.overlap(player, monsterGroup ,monsterDestroy,playerDestroy)
                    // this.physics.add.overlap(player, monsterGroup, ()=>{
                    //     monsters.destroy();
                    // })
                    
            },
            callbackScope: this,
            loop: true,
            paused: false
        })

        // eventMon2 = this.time.addEvent({
        //     delay: 5000,
        //     callback: function () {
        //         monster2 = this.physics.add.sprite(0, 0, 'monster').setScale(0.15)
        //         monster2.setVelocityY(200)
        //         monster2.setVelocityX(200)
        //         // monster2.health = 3;
        //         // monsters.setVelocityY(200);
        //         // this.physics.add.collider(player, monsterGroup)
        //         this.physics.add.overlap(player, monster2, monsterDestroy,playerDestroy)
        //             // this.physics.add.overlap(player, monsterGroup, ()=>{
        //             //     monsters.destroy();
        //             // })
                    
        //     },
        //     callbackScope: this,
        //     loop: true,
        //     paused: false,
            
        // })

        

        
            // monster2=function(){
            //     // monster2.health -= 1
            //     monster2.destroy();
                
            // }
        bulletBox =this.physics.add.group();
        eventPlayer = this.time.addEvent({
            delay: 800,
            callback: function(){
                bullet = this.physics.add.image(player.x,player.y -50,'bullet').setScale(0.3)
                bullet.setVelocityY(-200);   
                // bullet.anims.play('BulletAni', true)
                this.physics.add.overlap(bullet, monster,monster2,monsterDestroy,monsterDestroy2,()=>{
                    bullet.destroy();
                })
                
            },
            callbackScope: this,
            loop: true,
            paused: false

        })

        // bullMonster = this.time.addEvent({
        //     delay: 500,
        //     callback: function(){
        //         bullet = this.physics.add.image(monster2.x,monster2.y +50,'bullet').setScale(0.03)
        //         bullet.setVelocityY(200);   
        //         this.physics.add.overlap(bullet, monsterGroup,monsterDestroy,()=>{
        //             bullet.destroy();
        //         })
                
        //     },
        //     callbackScope: this,
        //     loop: true,
        //     paused: false

        // })

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        

    }
    update() {
        scoreText.setText('Score: ' + score);
        // health.setScale(1, 1);
        // if(player.health=2){
        //     health3.destroy()
        // }
        player.anims.play('PlayerAni', true)
        
        if (player.health <= 2) {
            health3.destroy();
            if (player.health <= 1) {
                health2.destroy();

                if (player.health <= 0) {
                    score = 0;
                    this.scene.start('EndScene');
                }
            }
        }

        // if(monster2.health <= 0){
        //     monster2.destroy()
        // }

        player.setVelocity(0, 0);
        if (keyW.isDown) {
            player.setVelocityY(-500);
        }
        if (keyS.isDown) { player.setVelocityY(+500) }
        if (keyA.isDown) { player.setVelocityX(-500) }
        if (keyD.isDown) { player.setVelocityX(+500) }

        // for(let i=0;i<bulletBox.length;i++){
        //     let bull = bulletBox.getChildren()[i];
        //     if(bull.y <= -50){
        //         bull.destroy(true);
        //     }
        // }
        // for(let i=0;i<monsterGroup.length;i++){
        //     let mon = monsterGroup.getChildren()[i];
        //     if(mon.y >= 700){
        //         bull.destroy(true);
        //     }
        // }
        // for(let i=0;i<monsterGroup.length;i++){
        //     let mon = monsterGroup.getChildren()[i];
        //     if(mon.y >= 700){
        //         bull.destroy(true);
        //     }
        // }
        backg.tilePositionY -= 1
    }
}

export default GameScene;
