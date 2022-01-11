import {mainConst} from '../const/main-const';
import {EnemyItem} from './enemy-item';

export class Player extends EnemyItem {
  fires;
  timer;

  constructor(scene) {
    super({
      scene,
      x: 150,
      y: mainConst.GameScreenHeight / 2,
      texture: 'player',
      frame: 'fly_1',
      velocity: 500,
      bullet: {
        delay: 500,
        texture: 'fire-item',
        velocity: 750,
      },
      origin: {
        x: 1,
        y: 0.5,
      },
    });

    const frames = this.scene.anims.generateFrameNames('player', {
      prefix: 'fly_',
      start: 1,
      end: 6,
    });

    this.scene.anims.create({
      key: 'player-fly-anims',
      frames,
      frameRate: 15,
      repeat: -1,
    });

    this.play('player-fly-anims');
  }

  // @ts-ignore todo fix TS error
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
