import Phaser from 'phaser';
import {mainConst} from '../const/main-const';
// objects
import {FireList} from './fire-list';

export class Player extends Phaser.Physics.Arcade.Sprite {
  timer;
  fireList;

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame);
    this.init();
  }

  init() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.fireList = new FireList(this.scene);

    this.timer = this.scene.time.addEvent({
      delay: 400,
      loop: true,
      callback: this.fire,
      callbackScope: this,
    });
  }

  fire() {
    this.fireList.createFireItem(this, );
  }

  addMovement(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    this.setVelocity(mainConst.player.basicSpeed);

    if (cursors.left.isDown) {
      this.setVelocityX(-mainConst.player.leftSpeed);
    } else if (cursors.right.isDown) {
      this.setVelocityX(mainConst.player.rightSpeed);
    }

    if (cursors.up.isDown) {
      this.setVelocityY(-mainConst.player.upSpeed);
    } else if (cursors.down.isDown) {
      this.setVelocityY(mainConst.player.downSpeed);
    }
  }
}
