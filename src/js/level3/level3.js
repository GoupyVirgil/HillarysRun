console.log("script level3 loaded");

window.PIXI = require('phaser/build/custom/pixi');
window.p2 = require('phaser/build/custom/p2');
window.Phaser = require('phaser/build/custom/phaser-split');




var game = new Phaser.Game('100%', '100%', Phaser.CANVAS, 'level3', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image("background", "dest/img/Landing-Backgroundlvl1.png");

}

var sprite;
var weapon;
var cursors;
var fireButton;

function create() {

    background = game.add.sprite('100%', '100%', "background");
}

function update() {

}

function render() {


}

