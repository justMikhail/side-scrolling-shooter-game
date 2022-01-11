import FpsText from '../objects/fpsText';
import {mainConst} from '../const/main-const';
import {Color} from '../const/color';
import {GameSceneRoute} from '../const/gamae-scene-route';

export default class StartScene extends Phaser.Scene {
  fpsText;

  constructor() {
    super({key: 'start-scene'});
  }

  create(data) {
    this.createBackground();
    this.setEvents();
    if (data.score !== undefined) {
      this.createStatsBoard(data);
    }
    this.createText();
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
      .text(mainConst.GameScreenWidth * 0.5, mainConst.GameScreenHeight * 0.5 + 150, 'Tap to start', {
        color: Color.basicWhite,
        fontSize: '40px',
      })
      .setOrigin(0.5);
  }

  setEvents() {
    this.input.on('pointerdown', () => {
      this.scene.start(GameSceneRoute.Level1);
    });
  }

  createStatsBoard(data) {
    this.add.graphics()
      .fillStyle(0x000000, 0.7)
      .fillRoundedRect(mainConst.GameScreenWidth * 0.5 - 200, mainConst.GameScreenHeight * 0.5 - 200, 400, 400);

    const textTitle = data.isCompleted ? 'Mission Complete' : 'Mission Failed';
    const textScore = `Score: ${data.score}`;
    const textStyle = {
      fontSize: "42px",
      fill: Color.basicWhite
    }

    this.add.text(mainConst.GameScreenWidth * 0.5, mainConst.GameScreenHeight * 0.5 - 150, textTitle, textStyle).setOrigin(0.5);
    this.add.text(mainConst.GameScreenWidth * 0.5, mainConst.GameScreenHeight * 0.5 - 50, textScore, textStyle).setOrigin(0.5);
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
