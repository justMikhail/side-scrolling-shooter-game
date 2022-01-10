import {Enemy} from './enemy';
import Phaser from "phaser";

export default class Enemies extends Phaser.Physics.Arcade.Group {
  constructor(scene: Phaser.Scene) {
    // @ts-ignore
    super(scene);
    this.scene = scene;
  }

  createEnemies() {
    const enemy = Enemy.generate(this.scene);
    this.add(enemy);
    enemy.addMovement();
  }
}