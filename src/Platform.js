class Platform {
  constructor(scene, config) {
    this.scene = scene;
    this.config = config;
    this.playedBounceAnimation = false;
    this.moveTween = null;
    this.addSkeleton();
    this.addTexture();
    this.addTopGround();

    const containerY = this.config.firstPlatform ? this.config.y : gameHeight;
    this.container = this.scene.add.container(this.config.x, containerY, [
      this.skeleton,
      this.tileTexture,
      this.topGround,
    ]);

    if (!this.config.firstPlatform) this.createTween(this.config.y);
  }
  addSkeleton() {
    this.skeleton = this.scene.physics.add
      .sprite(0, 0, "floor")
      .setVisible(false)
      .setOrigin(0, 0)
      .setDisplaySize(this.config.w, this.config.h)
      .setImmovable(true);
    this.scene.physics.world.enableBody(this.skeleton);
    this.skeleton.body.allowGravity = false;
  }
  addTexture() {
    this.tileTexture = this.scene.add
      .tileSprite(0, 0, this.config.w, this.config.h, this.config.theme.texture)
      .setOrigin(0, 0);
    this.tileTexture.tilePositionX -= this.config.w / 2 + 40;
  }
  addTopGround() {
    this.topGround = this.scene.add
      .tileSprite(0, 0, this.config.w, 49, "platformFloor")
      .setOrigin(0, 0)
      .setTint(this.config.theme.basic_color);
    this.topGround.tilePositionX -= this.config.w / 2 + 40;
  }

  move(value) {
    this.container.x += value;
  }
  setup(x, y, w, h, config) {
    const { container, skeleton, tileTexture, topGround } = this;
    const { texture, basic_color } = config;
    container.setPosition(x, y);
    tileTexture.setTexture(texture);
    [topGround, tileTexture, skeleton.body].forEach((obj) => (obj.width = w));

    [topGround, tileTexture].forEach(
      (obj) => ((obj.tilePositionX = 0), (obj.tilePositionX -= w / 2 + 40))
    );

    [topGround].forEach((obj) => obj.setTint(basic_color));

    this.ascentPlatformTween(y);
    this.playedBounceAnimation = false;
  }

  setVisible(value) {
    this.container.setVisible(value);
  }

  ascentPlatformTween(y) {
    this.moveTween = this.scene.tweens.add({
      targets: this.container,
      y: y,
      ease: "Power3",
      duration: 500,
      onStart: () => {
        this.container.y = gameHeight;
        this.container.setVisible(true);
      },
    });
  }

  bounceTween() {
    if (this.playedBounceAnimation) return;
    this.playedBounceAnimation = true;
    this.scene.tweens.add({
      targets: this.container,
      y: this.container.y + 50,
      ease: "Quad.out",
      duration: 1000,
      yoyo: true,
    });
  }

  createTween(y) {
    this.scene.tweens.add({
      targets: this.container,
      y: y,
      ease: "Back.out",
      duration: 1000,
    });
  }
}
