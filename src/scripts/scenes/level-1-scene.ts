import FpsText from '../objects/fpsText';
import {mainConst} from '../const/main-const';
//objects
import {Player} from '../objects/player';
import {EnemyGroup} from '../objects/enemy-group';
import {Color} from '../const/color';

export default class Level1Scene extends Phaser.Scene {
  fpsText;
  player;
  enemy;
  enemyGroup;
  cursors;
  score;
  scoreText;
  bgSky;

  constructor() {
    super({key: 'level-1-scene'});
  }

  init() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.score = 0;
  }

  create() {
    this.createBackground();
    this.player = new Player(this).setScale(0.2);
    this.enemyGroup = new EnemyGroup(this);
    this.addOverlap();
    this.createCompleteEvents();
    this.createScoreBoard();
    //===========================
    this.createInfoForDeveloper();
  }

  createScoreBoard() {
    this.scoreText = this.add.text(50, 50, 'Score: 0', {
      fontSize: '42px',
      // @ts-ignore
      fill: Color.basicWhite,
    });
  }

  update() {
    this.fpsText.update();
    this.bgSky.tilePositionX += 0.5;
    this.player.addMove(this.cursors);
  }

  createBackground() {
    this.bgSky = this.add
      .tileSprite(0, 0, mainConst.GameScreenWidth, mainConst.GameScreenHeight, 'bg-lvl-1-sky')
      .setOrigin(0);
    //this.add.tileSprite(0, mainConst.GameScreenHeight, 'bg-lvl-1-mountains').setOrigin(0, 1);
    //this.add.tileSprite(0, mainConst.GameScreenHeight, 'bg-lvl-1-plateau').setOrigin(0, 1);
    //this.add.tileSprite(0, mainConst.GameScreenHeight, 'bg-lvl-1-ground').setOrigin(0, 1);
    //this.add.tileSprite(0, mainConst.GameScreenHeight, 'bg-lvl-1-plant').setOrigin(0, 1);
  }

  addOverlap() {
    this.physics.add.overlap(this.player.fires, this.enemyGroup, this.handleOverlap, undefined, this);
    this.physics.add.overlap(this.enemyGroup.fires, this.player, this.handleOverlap, undefined, this);
    this.physics.add.overlap(this.player, this.enemyGroup, this.handleOverlap, undefined, this);
  }

  handleOverlap(source, target) {
    if (source !== this.player && target !== this.player) {
      ++this.score;
      this.scoreText.setText(`Score ${this.score}`);
    }

    source.setAliveStatus(false);
    target.setAliveStatus(false);
  }

  createCompleteEvents() {
    this.player.once('killed', this.handleMissionComplete, this);
    this.events.on('enemy-group-killed', this.handleMissionComplete, this);
  }

  handleMissionComplete() {
    this.scene.start('start-scene', {
      score: this.score,
      isCompleted: this.player.active,
    });
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
