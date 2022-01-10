import Phaser from 'phaser';
import {mainConst} from "../const/main-const";

export class FireItem extends Phaser.Physics.Arcade.Sprite {
  constructor(data) {
    super(data.scene, data.x, data.y, data.texture, data.frame);
    this.init(data);
  }

  static generate(scene, sourceObject) {
    const data = {
      scene,
      x: sourceObject.x + 15,
      y: sourceObject.y,
      texture: 'fire-item',
      velocity: mainConst.fireItem.basicSpeed,
    };
    return  new FireItem(data)
  }

  init(data) {
    this.scene.add.existing(this);
  }

  addMovement() {
    this.setVelocityX(mainConst.fireItem.basicSpeed);
  }

  reset() {

  }
}
