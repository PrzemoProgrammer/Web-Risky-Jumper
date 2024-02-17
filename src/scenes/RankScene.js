class RankScene extends Phaser.Scene {
  constructor() {
    super("RankScene");
  }
  create({ currentScene }) {
    this.gw = gameWidth;
    this.gh = gameHeight;
    this.halfW = halfGameWidth;
    this.halfH = halfGameHeight;

    this.bestScore = Number(localStorage.getItem("bestScore")) || 0;
    this.previousScene = currentScene;
    this.audio = this.game.audio;
    this.addBackground(gameStartX, gameStartY);
    this.addLayer1(gameStartX, gameHeight);
    this.addGround(gameStartX, gameHeight);
    this.addRankText(this.halfW, gameStartY + 160);
    this.addMedalShine(this.halfW, this.halfH);
    // this.addMiddleLayer(this.halfW, this.halfH + 50);
    this.addMedalColor(this.halfW, this.halfH + 50);
    this.addMedal(this.halfW, this.halfH + 50);
    this.addBackButton();
    this.medalColors = [9127187, 7568545, 16170496, 205];
    this.updateMedalColor();
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
  addRankText(x, y) {
    this.add.image(x, y, "medalText").setScale(0.8);
  }
  addMiddleLayer(x, y) {
    this.add.image(x, y, "rankStars");
  }
  addMedalColor(x, y) {
    this.middle = this.add.image(x, y, "rankScreenMedalColor").setTint(9127187);
  }
  addMedal(x, y) {
    this.add.image(x, y, "rankScreenMedal");
  }
  updateMedalColor() {
    this.medalColors.forEach((color, index) => {
      if (this.bestScore >= (index + 1) * 20) this.middle.setTint(color);
    });
  }

  addMedalShine(x, y) {
    this.shine = this.add.image(x, y, "medalShine");

    this.tweens.add({
      targets: this.shine,
      angle: 360,
      duration: 7000,
      ease: "Linear",
      repeat: -1,
    });
  }
  addBackButton() {
    new Button(this, this.halfW, gameHeight - 150, "backButton").onClick(() => {
      this.audio.click.play();
      this.scene.setVisible(false, "RankScene");
      this.scene.bringToTop(this.previousScene);
      this.scene.resume(this.previousScene);
      this.scene.setVisible(true, this.previousScene);
      this.scene.pause();
    });
  }
}
