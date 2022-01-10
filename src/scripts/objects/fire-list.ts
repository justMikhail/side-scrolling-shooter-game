import Phaser from 'phaser';
import {FireItem} from './fire-item';

export class FireList extends Phaser.Physics.Arcade.Group {
  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
  }

  createFireItem(sourceObject) {
    let fireItem = this.getFirstDead();

    if (!fireItem) {
      fireItem = FireItem.generate(this.scene, sourceObject);
      this.add(fireItem);
    } else {
      fireItem.reset(sourceObject);
    }

    fireItem.addMovement();
  }
}
