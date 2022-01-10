import FpsText from '../objects/fpsText';
import {mainConst} from '../const/main-const';
//objects
import {Player} from '../objects/player';
import Enemies from '../objects/enemies';

export default class Level1Scene extends Phaser.Scene {
  fpsText;
  player;
  enemy;
  enemies;
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
    this.player = new Player(this, 150, mainConst.GameScreenHeight * 0.5, 'player', 'fly_000').setScale(0.2);
    this.enemies = new Enemies(this);
    //===========================
    this.createInfoForDeveloper();
  }

  update() {
    this.fpsText.update();
    this.bgSky.tilePositionX += 0.5;
    this.player.addMovement(this.cursors);
    //this.enemy.addMovement();
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
