import * as Phaser from "phaser";

export class Player extends Phaser.GameObjects.Sprite {

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame);
    this.scene.add.existing(this);
  }
}