import {EnemyItem} from './enemy-item';
import {FireGroup} from './fire-group';

export class EnemyGroup extends Phaser.Physics.Arcade.Group {
  timer;
  fires;
  countMax;
  countCreated;

  constructor(scene) {
    super(scene.physics.world, scene);
    this.scene = scene;
    this.fires = new FireGroup(this.scene);
    this.countMax = 5;
    this.countCreated = 0;

    this.timer = this.scene.time.addEvent({
      delay: 1000,
      loop: true,
      callback: this.tick,
      callbackScope: this,
    });
  }

  tick() {
    if (this.countCreated < this.countMax) {
      this.createEnemy();
    } else {
      this.timer.remove();
    }
  }

  createEnemy() {
    let enemy = this.getFirstDead();

    if (!enemy) {
      console.log('create new enemy');
      enemy = EnemyItem.generate(this.scene, this.fires);
      this.add(enemy);
    } else {
      console.log('reset existing enemy');
      enemy.reset();
    }

    enemy.addMove();
    ++this.countCreated;
  }
}