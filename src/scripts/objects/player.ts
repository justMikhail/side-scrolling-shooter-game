import {mainConst} from '../const/main-const';
import {EnemyItem} from './enemy-item';
import {FireGroup} from './fire-group';

export class Player extends EnemyItem {
  fires;
  timer;

  constructor(scene) {
    super({
      scene,
      x: 150,
      y: mainConst.GameScreenHeight / 2,
      texture: 'player',
      frame: 'fly_000',
      velocity: 500,
      bullet: {
        delay: 500,
        texture: 'fire-item',
        velocity: 750,
      },
      origin: {
        x: 1,
        y: 0.5,
      }
    });
  }

  // @ts-ignore
  addMove(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
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
