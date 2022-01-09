import Phaser from "phaser";
import {mainConst} from "../const/main-const";

export class Enemy extends Phaser.Physics.Arcade.Sprite {

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame);
    this.init();
  }

  static generate(scene) {
    const x = mainConst.GameScreenWidth - 150;
    const y = mainConst.GameScreenHeight * 0.5;
    const texture = "enemy";
    const frame = "enemy_1";

    return  new Enemy(scene, x, y, texture, frame);
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
