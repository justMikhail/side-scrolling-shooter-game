import {Enemy} from './enemy';
import Phaser from "phaser";

export default class Enemies extends Phaser.Physics.Arcade.Group {
  count: number;
  timer;

  constructor(scene: Phaser.Scene) {
    // @ts-ignore
    super(scene);
    this.scene = scene;
    this.count = 10;

    this.timer = this.scene.time.addEvent({
      delay: 1000,
      loop: true,
      callback: this.createEnemiesByTimer,
      callbackScope: this
    })
  }

  createEnemiesByTimer() {
    if(this.getLength() <= this.count) {
      this.createEnemies();
    } else {
      this.timer.remove();
    }
  }

  createEnemies() {
    const enemy = Enemy.generate(this.scene);
    this.add(enemy);
    enemy.addMovement();
  }
}