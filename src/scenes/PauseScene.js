class PauseScene extends Phaser.Scene {
  constructor() {
    super("PauseScene");
  }

  create({ currentScene }) {
    this.gw = gameWidth;
    this.gh = gameHeight;
    this.halfW = halfGameWidth;
    this.halfH = halfGameHeight;

    this.previousScene = currentScene;
    this.audio = this.game.audio;

    this.addBackground(gameStartX, gameStartY);

    this.addLayer1(gameStartX, gameHeight);

    this.addGround(gameStartX, gameHeight);
    this.addPauseText(this.halfW, gameStartY + 160);

    this.addRestartButton(this.halfW, this.halfH);
    this.addSettingsButton(this.halfW, this.halfH + 150);
    this.addBackButton(this.halfW, gameHeight - 150);
    this.cameras.main.setZoom(calculateVerticalScaleFactor());
  }

  addBackground(x, y) {
    this.add
      .image(x, y, "menuBg")
      .setOrigin(0, 0)
      .setDisplaySize(gameWidth + deltaX, gameHeight + deltaY);
  }

  addLayer1(x, y) {
    this.add
      .tileSprite(x, y, gameWidth + deltaX, 1240, "menuLayer1")
      .setOrigin(0, 1);
  }

  addGround(x, y) {
    this.add.tileSprite(x, y, gameWidth + deltaX, 55, "ground").setOrigin(0, 1);
  }

  addPauseText(x, y) {
    this.add.image(x, y, "pauseText").setScale(0.8);
  }

  addSettingsButton(x, y) {
    new Button(this, x, y, "settingsButton").onClick(() => {
      this.audio.click.play();
      this.changeScene("SettingsScene");
    });
  }

  addBackButton(x, y) {
    new Button(this, x, y, "backButton").onClick(() => {
      this.backToPreviousScene();
    });
  }

  addRestartButton(x, y) {
    new Button(this, x, y, "replayButton").onClick(() => {
      let playScene = this.scene.get("PlayScene");
      playScene.scene.restart();
      this.backToPreviousScene();
    });
  }

  backToPreviousScene() {
    this.audio.click.play();
    this.scene.setVisible(false, "PauseScene");
    this.scene.bringToTop(this.previousScene);
    this.scene.resume(this.previousScene);
    this.scene.setVisible(true, this.previousScene);
    this.scene.pause();
  }

  changeScene(key) {
    this.scene.setVisible(true, key);
    this.scene.bringToTop(key);
    this.scene.resume(key);
    if (!this.scene.isPaused(key)) {
      this.scene.launch(key);
    }
  }
}
