

const config = {
    width : 300,
    height:500,
    type : Phaser.AUTO,
    physics : {
        default:'arcade',
        arcade:{
            gravity: {y: 0}
        }
    },
    scene: {
        preload : preload,
        create : create,
        update : update
    }
}
var game = new Phaser.Game(config)
let spaceship
let cursors



function preload (){
    this.load.image("playership","SwordShip_IceBlade_188x188.png")

}

function create () {
    spaceship = this.physics.add.image(150,350,"playership")
    spaceship.body.collideWorldBounds = true;
    cursors = this.input.keyboard.createCursorKeys()    
}

function update () {

    spaceship.setVelocity(0,0)
    if(cursors.up.isDown){
        spaceship.setVelocity(0,-250)
    }
    if(cursors.down.isDown){
        spaceship.setVelocity(0,250)
    }
    if(cursors.left.isDown){
        spaceship.setVelocity(-250,0)
    }
    if(cursors.right.isDown){
        spaceship.setVelocity(250,0)
    }




}