import {GameSceneRoute} from '../const/gamae-scene-route';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({key: 'boot-scene'});
  }

  preload() {
    this.load.image('bg-lvl-1-sky', '../../assets/sprites/backgrounds/level-1-bg/sky.png');
  }

  create() {
    this.scene.start(GameSceneRoute.Preload);
  }
}