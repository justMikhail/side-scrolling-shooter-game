export class MovableObject extends Phaser.Physics.Arcade.Sprite {
  velocity;
  timer;

  constructor(data) {
    super(data.scene, data.x, data.y, data.texture, data.frame);
    this.init(data);
  }

  init(data) {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.velocity = data.velocity;
    this.scene.events.on('update', this.update, this);
  }

  reset(x, y) {
    this.x = x;
    this.y = y;
    this.setAliveStatus(true);
  }

  isBeyondViewport() {
    return false;
  }

  update() {
    if (this.active && this.isBeyondViewport()) {
      this.setAliveStatus(false);
    }
  }

  setAliveStatus(status) {
    this.body.enable = status;
    this.setVisible(status);
    this.setActive(status);

    if (this.timer) {
      this.timer.remove();
    }
  }

  addMove() {
    this.setVelocityX(this.velocity);
  }
}
