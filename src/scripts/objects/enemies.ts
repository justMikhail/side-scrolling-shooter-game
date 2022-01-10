import {Enemy} from './enemy';
import Phaser from "phaser";

export default class Enemies extends Phaser.Physics.Arcade.Group {
  enemyMaxCount: number;
  enemyCreatedCount: number;
  timer;

  constructor(scene: Phaser.Scene) {
    // @ts-ignore
    super(scene);
    this.scene = scene;
    this.enemyMaxCount = 5;
    this.enemyCreatedCount = 0;

    this.timer = this.scene.time.addEvent({
      delay: 1000,
      loop: true,
      callback: this.createEnemyListByTimer,
      callbackScope: this
    })
  }

  createEnemyListByTimer() {
    if(this.enemyCreatedCount <= this.enemyMaxCount) {
      this.createEnemyItem();
    } else {
      this.timer.remove();
    }
  }

  createEnemyItem() {
    let enemy = this.getFirstDead();

    if(!enemy) {
      enemy = Enemy.generate(this.scene);
    } else {
      enemy.reset();
    }

    this.add(enemy);
    enemy.addMovement();
    ++this.enemyCreatedCount
  }
}