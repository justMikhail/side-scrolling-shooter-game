import {FireItem} from './fire-item';

export class FireGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);
  }

  createFire(source) {
    let fire = this.getFirstDead();

    if (!fire) {
      fire = FireItem.generate(this.scene, source);
      this.add(fire);
    } else {
      fire.reset(source.x, source.y);
    }

    fire.addMove();
  }
}
