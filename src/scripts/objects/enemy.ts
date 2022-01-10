import Phaser from 'phaser';
import {mainConst} from '../const/main-const';

export class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame);
    this.init();
  }

  static generate(scene) {
    const x = mainConst.GameScreenWidth + 250;
    const y = Phaser.Math.Between(100, mainConst.GameScreenHeight - 100);
    const randomId = Phaser.Math.Between(1, 4);

    return new Enemy(scene, x, y, 'enemy', `enemy_${randomId}`);
  }

  init() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
  }

  addMovement() {
    this.setVelocityX(-mainConst.enemy.basicSpeed);
  }
}
