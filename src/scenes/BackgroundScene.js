class BackgroundScene extends Phaser.Scene {
  constructor() {
    super("BackgroundScene");
  }

  create() {
    this.gw = gameWidth;
    this.gh = gameHeight;
    this.halfW = halfGameWidth;
    this.halfH = halfGameHeight;

    this.cloudsMoveTween = null;

    this.clouds = null;
    this.layer1 = null;

    this.addBackground();
    this.addBackgroundComponents();
  }

  addBackground() {
    this.add
      .image(gameStartX, gameStartY, "menuBg")
      .setOrigin(0, 0)
      .setDisplaySize(gameWidth + deltaX, gameHeight + deltaY);
  }

  addBackgroundComponents() {
    this.addLayer1(gameStartX, gameHeight);
    this.addClouds(this.halfW, gameStartY + gameHeight / 4);
    this.addGround(gameStartX, gameHeight);
  }

  addLayer1(x, y) {
    const layer1 = this.add
      .tileSprite(x, y + 1000, gameWidth + deltaX, 1240, "menuLayer1")
      .setOrigin(0, 1);
    this.layer1 = layer1;

    this.tweens.add({
      targets: layer1,
      ease: "Cubic.out",
      duration: 600,
      y: y,
    });
  }

  addClouds(x, y) {
    const clouds = this.add.image(x, y, "layer2").setOrigin(0.5, 0).setScale(3);
    this.clouds = clouds;

    const animConfig = {
      target: clouds,
      x: clouds.x - 20,
      y: clouds.y + 15,
      time: 2100,
    };

    this.tweens.add({
      targets: clouds,
      ease: "Back.out",
      duration: 1000,
      scale: 1,
      onComplete: () => {
        this.cloudsMoveTween = this.moveAnim(animConfig);
      },
    });
  }

  addGround(x, y) {
    const ground = this.add
      .tileSprite(x, y + 50, gameWidth + deltaX, 55, "ground")
      .setOrigin(0, 1);

    this.tweens.add({
      targets: ground,
      ease: "Linear",
      duration: 300,
      y: y,
    });
  }

  moveAnim({ target, x, y, time, ease = "Sine.easeInOut" }) {
    return this.tweens.add({
      targets: target,
      x,
      y,
      ease,
      duration: time,
      yoyo: true,
      repeat: -1,
    });
  }

  clearTweens() {
    this.cloudsMoveTween.remove();
    this.cloudsMoveTween = null;
  }

  removeTween() {
    this.cloudsMoveTween.remove();
    this.tweens.add({
      targets: this.layer1,
      ease: "Cubic.in",
      duration: 500,
      y: gameHeight + 1000,
    });
    this.tweens.add({
      targets: this.clouds,
      ease: "Back.in",
      duration: 200,
      scale: 0,
    });
  }
}
