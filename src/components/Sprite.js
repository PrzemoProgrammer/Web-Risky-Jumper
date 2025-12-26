class Sprite extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, sprite) {
    super(scene, x, y, 'gameAtlas', sprite + '.png');
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    scene.add.existing(this);
  }
}
