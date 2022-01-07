export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({key: 'preload-scene'});
  }

  preload() {
    //backgrounds
    this.load.image('bg-lvl-1-sky', '../../assets/sprites/backgrounds/level-1-bg/sky.png');
    this.load.image('bg-lvl-1-mountains', '../../assets/sprites/backgrounds/level-1-bg/mountains.png');
    this.load.image('bg-lvl-1-plant', '../../assets/sprites/backgrounds/level-1-bg/plant.png');
    this.load.image('bg-lvl-1-plateau', '../../assets/sprites/backgrounds/level-1-bg/plateau.png');
    this.load.image('bg-lvl-1-ground', '../../assets/sprites/backgrounds/level-1-bg/ground.png');
  }

  create() {
    this.scene.start('start-scene');
  }
}
