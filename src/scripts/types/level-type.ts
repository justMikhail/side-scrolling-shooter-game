import {Scene} from "phaser";

export interface LevelType extends Scene {
  cursors: Phaser.Types.Input.Keyboard.CursorKeys
}