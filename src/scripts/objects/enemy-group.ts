import {EnemyItem} from './enemy-item';
import {FireGroup} from './fire-group';

export class EnemyGroup extends Phaser.Physics.Arcade.Group {
  timer;
  fires;
  countMax;
  countCreated;
  countKilled;

  constructor(scene) {
    super(scene.physics.world, scene);
    this.scene = scene;
    this.fires = new FireGroup(this.scene);
    this.countMax = 20;
    this.countCreated = 0;
    this.countKilled = 0;

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
      enemy = EnemyItem.generate(this.scene, this.fires);
      enemy.on('killed', this.handleEnemyItemKilled, this);
      this.add(enemy);
    } else {
      enemy.reset();
    }

    enemy.addMove();
    ++this.countCreated;
  }

  handleEnemyItemKilled() {
    ++this.countKilled;

    if (this.countKilled >= this.countMax) {
      this.scene.events.emit('enemy-group-killed');
    }
  }
}
