class TileSprite extends Phaser.GameObjects.TileSprite  {
  constructor(scene, x, y, width, height, sprite) {
    super(scene, x, y, width, height, 'gameAtlas', sprite + '.png');
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.sprite = sprite;

    scene.add.existing(this);
  }

  setTexture(texture) {
    super.setTexture("gameAtlas", texture + ".png");
  }
}