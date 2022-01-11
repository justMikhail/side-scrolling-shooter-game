import FpsText from '../objects/fpsText';
import {mainConst} from '../const/main-const';
//objects
import {Player} from '../objects/player';
import {EnemyGroup} from '../objects/enemy-group';

export default class Level1Scene extends Phaser.Scene {
  fpsText;
  player;
  enemy;
  enemyGroup;
  cursors;
  bgSky;

  constructor() {
    super({key: 'level-1-scene'});
  }

  init() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  preload() {}

  create() {
    this.createBackground();
    this.player = new Player(this).setScale(0.2);
    this.enemyGroup = new EnemyGroup(this);
    this.addOverlap();
    //===========================
    this.createInfoForDeveloper();
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

  addOverlap(){
    this.physics.add.overlap(this.player.fires, this.enemyGroup, this.handleOverlap, undefined, this);
    this.physics.add.overlap(this.enemyGroup.fires, this.player, this.handleOverlap, undefined, this);
  }

  handleOverlap(source, target) {
    source.setAliveStatus(false);
    target.setAliveStatus(false);
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
