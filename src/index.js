const GAME_SAFE_WIDTH = 720;
const GAME_SAFE_HEIGHT = 1280;
const statusbarHeight = 30;

const deltaX =
  (window.innerWidth / calculateVerticalScaleFactor() - window.innerWidth) / 2;
const deltaY =
  (window.innerHeight / calculateVerticalScaleFactor() - window.innerHeight) /
  2;

const gameStartX = -deltaX;
const gameStartY = -deltaY;

const gameWidth = window.innerWidth + deltaX;
const gameHeight = window.innerHeight + deltaY;

const halfGameWidth = window.innerWidth / 2;
const halfGameHeight = window.innerHeight / 2;

const config = {
  type: Phaser.AUTO,
  parent: "div",
  pixelArt: true,
  antialias: false,
  roundPixels: false,
  backgroundColor: "#0195b7",
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 1000 },
    },
  },

  scale: {
    parent: "game-container",
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: GAME_SAFE_WIDTH,
    height: GAME_SAFE_HEIGHT,
    // autoCenter: Phaser.Scale.CENTER_BOTH,
  },

  dom: {
    createContainer: true,
  },
  scene: [
    PreloadScene,
    BackgroundScene,
    LoginScene,
    MenuScene,
    PlayScene,
    RankScene,
    PauseScene,
    SettingsScene,
    RankingScene,
  ],
};

const game = new Phaser.Game(config);

function calculateVerticalScaleFactor() {
  return Math.min(
    window.innerHeight / GAME_SAFE_HEIGHT,
    window.innerWidth / GAME_SAFE_WIDTH
  );
}

function checkIsPortraitOrientation() {
  return window.innerWidth / window.innerHeight <= 1;
}

function onresize() {
  const scaleFactor = calculateVerticalScaleFactor();

  game.scene.scenes.forEach((element, index) => {
    if (index === 0) return;

    element.cameras.main.setZoom(scaleFactor);

    // element.scale.resize(
    //   window.innerWidth * scaleFactor,
    //   window.innerHeight * scaleFactor
    // );

    // element.cameras.main.setViewport(
    //   0,
    //   0,
    //   window.innerWidth * scaleFactor,
    //   window.innerHeight * scaleFactor
    // );
  });
}

window.addEventListener("resize", onresize);
game.events.on("ready", () => {
  onresize();
});

globalThis.__PHASER_GAME__ = game;
