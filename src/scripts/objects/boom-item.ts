export class BoomItem extends Phaser.GameObjects.Sprite {

  static generate(scene, x, y) {
    return new BoomItem({scene, x, y})
  }

  constructor(data) {
    super(data.scene, data.x, data.y, 'boom-item', 'boom_1');
    this.scene.add.existing(this);


    const frames = this.scene.anims.generateFrameNames('boom-item', {
      prefix: 'boom-item_',
      start: 1,
      end: 4,
    });

    this.scene.anims.create({
      key: 'boom-item',
      frames,
      frameRate: 10,
      repeat: 0,
    });

    this.play('boom-item')
    this.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
      this.destroy();
    })
  }
}