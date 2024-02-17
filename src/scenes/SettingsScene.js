class SettingsScene extends Phaser.Scene {
  constructor() {
    super("SettingsScene");
  }
  create({ currentScene }) {
    this.gw = gameWidth;
    this.gh = gameHeight;
    this.halfW = halfGameWidth;

    this.previousScene = currentScene;
    this.audio = this.game.audio;
    this.isMusic = true;
    this.isSound = true;
    this.addBackground(gameStartX, gameStartY);
    this.addLayer1(gameStartX, gameHeight);
    this.addGround(gameStartX, gameHeight);
    this.addSettingsText(this.halfW, gameStartY + 160);
    this.addMusicText(this.halfW - 300, this.gh / 3);
    this.addMusicSLider(this.musicText.x + 340, this.musicText.y - 30);
    this.addSoundText(this.halfW - 300, this.gh / 3 + 150);
    this.addSoundSLider(this.soundsText.x + 340, this.soundsText.y - 30);
    this.addBackButton(this.halfW, gameHeight - 150);
  }
  addBackground(x, y) {
    this.background = this.add
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

  addSettingsText(x, y) {
    this.settingsText = this.add
      .image(x, y, "settingsText", {
        fontFamily: "pixel",
      })
      .setScale(0.8);
  }
  addSoundText(x, y) {
    this.soundsText = this.addText(x, y, "SOUNDS", {
      fontFamily: "pixel",
    });
  }
  addMusicText(x, y) {
    this.musicText = this.addText(x, y, "MUSIC", {
      fontFamily: "pixel",
    });
  }
  addText(x, y, text) {
    return this.add.text(x, y, text, {
      fontFamily: "pixel",
      fontSize: "50px",
      color: "#FFFFFF",
      stroke: "#000000",
      strokeThickness: 10,
      shadow: { blur: 0, stroke: false, fill: false },
    });
  }
  addBackButton(x, y) {
    this.backButton = new Button(this, x, y, "backButton").onClick(() => {
      this.audio.click.play();
      this.scene.setVisible(false, "SettingsScene");
      this.scene.sendToBack("SettingsScene");
      this.scene.pause();
    });
  }
  addMusicSLider(x, y) {
    const bg = this.add.image(x, y, "soundOnOff").setOrigin(0, 0);
    let slider = this.add
      .image(bg.x + bg.width / 2, bg.y, "slider")
      .setOrigin(0, 0)
      .setInteractive()
      .on(
        "pointerdown",
        () => {
          this.isMusic = !this.isMusic;
          this.audio.mainMenu.setVolume(this.isMusic ? 1 : 0);
          this.addSliderMoveAnim(slider, this.isMusic);
        },
        this
      );
  }
  addSoundSLider(x, y) {
    const bg = this.add.image(x, y, "soundOnOff").setOrigin(0, 0);
    let slider = this.add
      .image(bg.x + bg.width / 2, bg.y, "slider")
      .setOrigin(0, 0)
      .setInteractive()
      .on(
        "pointerdown",
        () => {
          this.isSound = !this.isSound;
          const volume = this.isSound
            ? { hurt: 0.5, click: 1, startJump: 1, endJump: 1 }
            : { hurt: 0, click: 0, startJump: 0, endJump: 0 };
          Object.keys(volume).forEach((key) =>
            this.audio[key].setVolume(volume[key])
          );
          this.addSliderMoveAnim(slider, this.isSound);
        },
        this
      );
  }
  addSliderMoveAnim(slider, value) {
    const x = slider.x + (value ? slider.width : -slider.width);
    this.tweens.add({ targets: slider, ease: "Power2", x: x, duration: 200 });
  }
}
