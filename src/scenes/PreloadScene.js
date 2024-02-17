class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }
  preload() {
    this.load.on("complete", () => {
      this.startNextScene();
    });
    this.load.plugin(
      "rexinputtextplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js",
      true
    );
    this.load.plugin(
      "rexninepatchplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexninepatchplugin.min.js",
      true
    );

    this.load.setPath("./src/assets/images");
    // this.loadAtlas();
    this.loadImages();
    this.loadFonts();
    this.loadAudio();
  }
  create() {
    this.loadPlugin();
    this.addAnims();
    this.addAudio();
  }
  addAnims() {
    this.anims.create({
      key: `moveRight`,
      frames: this.anims.generateFrameNumbers(`player`, {
        frames: [1, 2, 3, 2],
      }),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "idle",
      frames: [{ key: "player", frame: 0 }],
      frameRate: 20,
    });
    this.anims.create({
      key: "jump",
      frames: [{ key: "player", frame: 5 }],
      frameRate: 20,
    });
    this.anims.create({
      key: "preparing",
      frames: [{ key: "player", frame: 4 }],
      frameRate: 20,
    });
    this.anims.create({
      key: "fall",
      frames: [{ key: "player", frame: 6 }],
      frameRate: 20,
    });
    this.anims.create({
      key: "hurt",
      frames: [{ key: "player", frame: 8 }],
      frameRate: 20,
    });
    this.anims.create({
      key: "dead",
      frames: [{ key: "player", frame: 7 }],
      frameRate: 20,
    });
  }
  startNextScene() {
    // StatusBar.backgroundColorByHexString("#00000000");
    localStorage.getItem("nickname")
      ? this.handleNextScene()
      : this.startLoginScene();
  }

  startLoginScene() {
    this.scene.launch("LoginScene");
  }

  handleNextScene() {
    this.scene
      .start("PlayScene")
      .pause("PlayScene")
      .start("MenuScene")
      .swapPosition("PlayScene", "MenuScene");
  }

  loadPlugin() {
    this.load.plugin(
      "rexinputtextplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js",
      true
    );
    this.load.plugin(
      "rexninepatchplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexninepatchplugin.min.js",
      true
    );
  }

  loadFonts() {
    this.load.setPath("./src/assets/fonts");
    // this.load.bitmapFont("pixel2", "pixel2.png", "pixel2.json");
    // this.load.font("pixel", "pixel.ttf");
  }

  // loadAtlas() {
  //   this.load.atlas("atlas_1", "texture-0.png", "texture-0.json");
  //   this.load.atlas("atlas_2", "texture-1.png", "texture-1.json");
  // }

  loadImages() {
    this.images = [
      "background",
      "playButton",
      "riskyJumperText",
      "settingsButton",
      "bg1",
      "floor",
      "replayButton",
      "scoreBoard",
      "achivButton",
      "ground",
      "platformFloor",
      "rankingButton",
      "rankScreenMedal",
      "rankScreenMedalColor",
      "newRecordUpdate",
      "medalSmaller",
      "smallerMedalColor",
      "backButton",
      "pauseButton",
      "pauseText",
      "settingsText",
      "soundOnOff",
      "slider",
      "rankingPlayerBg",
      "hand1",
      "hand2",
      "tutorialLine",
      "darkScreen",
      "shareButton",
      "firstPlace",
      "secondPlace",
      "thirdPlace",
      "leaderBoardStatus",
      "loginProfil",
      "medalShine",
      "medalText",
      "loading",
      "menuBg",
      "menuLayer1",
      "heroMenuIcon",
      "menuPlatform1",
      "menuPlatform2",
      "leaderboardText",
      "startButton",
    ];
    this.images.forEach((img) => {
      this.load.image(img, `${img}.png`);
    });
    for (let i = 1; i <= 2; i++) {
      this.load.image(`layer${i}`, `layer${i}.png`);
    }
    for (let i = 1; i <= 9; i++) {
      this.load.image(`floor${i}`, `floor${i}.png`);
    }
    this.load.spritesheet("player", "player.png", {
      frameWidth: 855 / 9,
      frameHeight: 95,
    });
  }
  loadAudio() {
    this.audio = ["mainMenu", "click", "hurt", "startJump", "endJump"];
    this.audio.forEach((name) => {
      this.load.audio(name, `../audio/${name}.mp3`);
    });
  }
  addAudio() {
    this.game.audio = {};
    this.audio.forEach(
      (name) => (this.game.audio[name] = this.sound.add(name))
    );
    this.game.audio.mainMenu.setLoop(true);
    this.setupAudioVolume();
  }
  setupAudioVolume() {
    this.game.audio.hurt.setVolume(0.5);
  }
}
