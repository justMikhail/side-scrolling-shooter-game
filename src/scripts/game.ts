import 'phaser';
//const
import {mainConst} from './const/main-const';
//scenes
import PreloadScene from './scenes/preload-scene';
import StartScene from "./scenes/start-scene";
import BootScene from "./scenes/boot-scene";
import Level1Scene from "./scenes/level-1-scene";

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: mainConst.GameScreenWidth,
    height: mainConst.GameScreenHeight,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: {y: mainConst.BasicGravityForce},
    },
  },
  scene: [
    BootScene,
    PreloadScene,
    StartScene,
    Level1Scene
  ],
};

window.addEventListener('load', () => {
  const game = new Phaser.Game(config);
});
