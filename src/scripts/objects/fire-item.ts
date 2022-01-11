import {mainConst} from '../const/main-const';
import {MovableObject} from './movable-object';

export class FireItem extends MovableObject {

  static generate(scene, source) {
    const data = {
      scene,
      x: source.x,
      y: source.y,
      texture: source.bullet.texture,
      velocity: source.bullet.velocity,
    };
    return new FireItem(data);
  }

  isBeyondViewport() {
    return this.x < -this.width || this.x > mainConst.GameScreenWidth + this.width;
  }
}
