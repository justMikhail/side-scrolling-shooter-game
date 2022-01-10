import Phaser from 'phaser';
import {mainConst} from '../const/main-const';

export class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame);
    this.init();
  }

  static generateAttributes() {
    const x = mainConst.GameScreenWidth + 250;
    const y = Phaser.Math.Between(100, mainConst.GameScreenHeight - 100);
    const randomId = Phaser.Math.Between(1, 4);

    return {x, y, randomId};
  }

  static generate(scene) {
    const data = Enemy.generateAttributes()

    return new Enemy(scene, data.x, data.y, 'enemy', `enemy_${data.randomId}`);
  }

  init() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.scene.events.on('update',  this.update, this);
  }

  reset() {
    const data = Enemy.generateAttributes()

    this.x = data.x;
    this.y = data.y;
    this.setFrame(`enemy_${data.randomId}`);

    this.setAliveStatus(true);
  }

  update() {
    if(this.active && this.x < -this.width) {
      console.log('deactivated')
      this.setAliveStatus(false);
    }
  }

  setAliveStatus(currentStatus: boolean) {
    // деактивация /активировать физического тела
    this.body.enable = currentStatus;
    // скрыть / показать текстуру
    this.setVisible(currentStatus);
    // деактивиировать / активировать обьект
    this.setActive(currentStatus)
  }

  addMovement() {
    this.setVelocityX(-mainConst.enemy.basicSpeed);
  }
}
