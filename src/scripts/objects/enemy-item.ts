import {mainConst} from '../const/main-const';
import {MovableObject} from './movable-object';

export class EnemyItem extends MovableObject {
  static generateAttributes() {
    const x = mainConst.GameScreenWidth + 200;
    const y = Phaser.Math.Between(100, mainConst.GameScreenHeight - 100);
    return {x, y, frame: `enemy_${Phaser.Math.Between(1, 4)}`};
  }

  static generate(scene) {
    const data = EnemyItem.generateAttributes();
    return new EnemyItem({
      scene,
      x: data.x,
      y: data.y,
      texture: 'enemy',
      frame: data.frame,
      velocity: -500,
    });
  }

  reset() {
    const data = EnemyItem.generateAttributes();
    super.reset(data.x, data.y);
    this.setFrame(data.frame);
  }

  isBeyondViewport() {
    return this.x < -this.width;
  }
}
