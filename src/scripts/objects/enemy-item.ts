import {mainConst} from '../const/main-const';
import {MovableObject} from './movable-object';
import {FireList} from "./fire-list";

export class EnemyItem extends MovableObject {
  fires;
  timer;
  bullet;

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
      velocity: -250,
      bullet: {
        delay: 1000,
        texture: 'bullet-item',
        velocity: -500,
      },
      origin: {
        x: 0,
        y: 0.5,
      }
    });
  }

  init(data) {
    super.init(data);
    this.setOrigin(data.origin.x, data.origin.y)
    this.fires = new FireList(this.scene);
    this.timer = this.scene.time.addEvent({
      delay: data.bullet.delay,
      loop: true,
      callback: this.fire,
      callbackScope: this,
    });
    this.bullet = data.bullet;
  }

  fire() {
    this.fires.createFire(this);
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
