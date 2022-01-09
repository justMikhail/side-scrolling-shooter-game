import Phaser from "phaser";
import {mainConst} from "../const/main-const";

export class Enemy extends Phaser.Physics.Arcade.Sprite {

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame);
    this.init();
  }

  init() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true
  }

  addMovement() {
    this.setVelocityX(-mainConst.enemy.basicSpeed);
  }
}
