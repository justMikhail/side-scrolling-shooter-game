import {GameSceneRoute} from "../const/gamae-scene-route";

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({key: 'preload-scene'});
  }

  preload() {
    //backgrounds
    this.load.image('bg-lvl-1-mountains', '../../assets/sprites/backgrounds/level-1-bg/mountains.png');
    this.load.image('bg-lvl-1-plant', '../../assets/sprites/backgrounds/level-1-bg/plant.png');
    this.load.image('bg-lvl-1-plateau', '../../assets/sprites/backgrounds/level-1-bg/plateau.png');
    this.load.image('bg-lvl-1-ground', '../../assets/sprites/backgrounds/level-1-bg/ground.png');
    //player
    this.load.atlas('player', '../../assets/sprites/player/robot-skin/a-robot-skin.png', '../../assets/sprites/player/robot-skin/a-robot-skin.json')
  }

  create() {
    this.scene.start(GameSceneRoute.Start);
  }
}
