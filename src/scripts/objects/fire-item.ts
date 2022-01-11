import {mainConst} from '../const/main-const';
import {MovableObject} from './movable-object';

export class FireItem extends MovableObject {
  static generate(scene, source) {
    const data = {
      scene,
      x: source.x + 15,
      y: source.y,
      texture: 'fire-item',
      velocity: 750,
    };
    return new FireItem(data);
  }

  isDead() {
    return this.x < -this.width || this.x > mainConst.GameScreenWidth + this.width;
  }
}
