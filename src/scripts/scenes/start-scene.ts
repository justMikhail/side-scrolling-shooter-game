import FpsText from '../objects/fpsText';
import {mainConst} from '../const/main-const';
import {Color} from "../const/color";
import {GameSceneRoute} from "../const/gamae-scene-route";

export default class StartScene extends Phaser.Scene {
  fpsText;

  constructor() {
    super({key: 'start-scene'});
  }

  create() {
    this.createBackground();
    this.createText();
    this.setEvents();
    //=========
    this.createInfoForDeveloper();
  }

  update() {
    this.fpsText.update();
  }

  createBackground() {
    this.add.sprite(mainConst.GameScreenWidth * 0.5, mainConst.GameScreenHeight * 0.5, 'bg-lvl-1-sky');
  }

  createText() {
    this.add
      .text(mainConst.GameScreenWidth * 0.5, mainConst.GameScreenHeight * 0.5, 'Tap to start', {
        color: Color.basicWhite,
        fontSize: '40px',
    })
      .setOrigin(0.5);
  }

  setEvents() {
    this.input.on('pointerdown', () => {
      this.scene.start(GameSceneRoute.Level1)
    })
  }

  createInfoForDeveloper() {
    // display FPS
    this.fpsText = new FpsText(this);

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: Color.basicBlack,
        fontSize: '24px',
      })
      .setOrigin(1, 0);
  }
}
