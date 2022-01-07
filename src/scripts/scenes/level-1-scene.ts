import FpsText from '../objects/fpsText';
import {mainConst} from '../const/main-const';
//objects
import {Player} from "../objects/player";

export default class Level1Scene extends Phaser.Scene {
  fpsText;
  player;

  constructor() {
    super({key: 'level-1-scene'});
  }

  create() {
    this.createBackground()
    this.player = new Player(this, 150, mainConst.GameScreenHeight * 0.5, 'player', 'fly_000').setScale(0.2);
    //=========
    this.createInfoForDeveloper();
  }

  update() {
    this.fpsText.update();
  }

  createBackground() {
    this.add.sprite(mainConst.GameScreenWidth * 0.5, mainConst.GameScreenHeight * 0.5, 'bg-lvl-1-sky');
    this.add.sprite(0, mainConst.GameScreenHeight, 'bg-lvl-1-mountains').setOrigin(0, 1);
    this.add.sprite(0, mainConst.GameScreenHeight, 'bg-lvl-1-plateau').setOrigin(0, 1);
    this.add.sprite(0, mainConst.GameScreenHeight, 'bg-lvl-1-ground').setOrigin(0, 1);
    this.add.sprite(0, mainConst.GameScreenHeight, 'bg-lvl-1-plant').setOrigin(0, 1);
  }

  createInfoForDeveloper() {
    // display FPS
    this.fpsText = new FpsText(this);

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px',
        fontStyle: 'BebasNeue',
      })
      .setOrigin(1, 0);
  }
}
