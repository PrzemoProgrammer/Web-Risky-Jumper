class Button extends Sprite {
  constructor(scene, x, y, sprite) {
    super(scene, x, y, sprite);

    this.setInteractive();
  }

  onClick(cb) {
    this.on("pointerdown", () => {
      this.setScale(0.9);
    }).on("pointerup", () => {
      cb(), this.setScale(1);
    });

    return this;
  }
}
