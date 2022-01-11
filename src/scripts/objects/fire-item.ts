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
    this.scene.events.on('update', this.update, this);
  }

  update() {
    if (this.active && (this.x < -mainConst.GameScreenWidth || this.x > mainConst.GameScreenWidth + this.width)) {
      this.setAliveStatus(false);
    }
  }

  setAliveStatus(currentStatus: boolean) {
    this.body.enable = currentStatus;
    this.setVisible(currentStatus);
    this.setActive(currentStatus);
  }

  addMovement() {
    this.setVelocityX(mainConst.fireItem.basicSpeed);
  }

  reset(sourceObject) {
    this.x = sourceObject.x + 15;
    this.y = sourceObject.y;
    this.setAliveStatus(true);
  }
}
