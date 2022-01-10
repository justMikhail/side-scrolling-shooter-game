import Phaser from 'phaser';
import {mainConst} from '../const/main-const';

export class EnemyItem extends Phaser.Physics.Arcade.Sprite {
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
    const data = EnemyItem.generateAttributes();

    return new EnemyItem(scene, data.x, data.y, 'enemy', `enemy_${data.randomId}`);
  }

  init() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.scene.events.on('update', this.update, this);
  }

  reset() {
    const data = EnemyItem.generateAttributes();

    this.x = data.x;
    this.y = data.y;
    this.setFrame(`enemy_${data.randomId}`);

    this.setAliveStatus(true);
  }

  update() {
    if (this.active && this.x < -this.width) {
      console.log('deactivated');
      this.setAliveStatus(false);
    }
  }

  setAliveStatus(currentStatus: boolean) {
    this.body.enable = currentStatus;
    this.setVisible(currentStatus);
    this.setActive(currentStatus);
  }

  public addMovement() {
    this.setVelocityX(-mainConst.enemy.basicSpeed);
  }
}
