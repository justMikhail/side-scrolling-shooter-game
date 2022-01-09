export const mainConst = {
    GameScreenWidth: 1280,
    GameScreenHeight: 720,
    BasicGravityForce: 0,
    player: {
        basicSpeed: 0,
        rightSpeed: 300,
        leftSpeed: 200,
        upSpeed: 250,
        downSpeed: 250
    },
    enemy: {
      basicSpeed: 100,
    }
} as const;
