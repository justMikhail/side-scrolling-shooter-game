import FpsText from '../objects/fpsText';
import {mainConst} from '../const/main-const';

export default class StartScene extends Phaser.Scene {
  fpsText;

  constructor() {
    super({key: 'start-scene'});
  }

  create() {
    this.createBackground()
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
      })
      .setOrigin(1, 0);
  }
}
