class RankingScene extends Phaser.Scene {
  constructor() {
    super("RankingScene");
  }
  async create({ currentScene }) {
    this.gw = gameWidth;
    this.gh = gameHeight;
    this.halfW = halfGameWidth;
    this.halfH = halfGameHeight;

    this.addLoadingAnim(this.halfW, this.halfH);
    this.bestScore = Number(localStorage.getItem("bestScore")) || 0;
    this.previousScene = currentScene;
    this.audio = this.game.audio;
    this.labels = [];
    this.addBackground(gameStartX, gameStartY);
    this.addLayer1(gameStartX, gameHeight);
    this.addGround(gameStartX, gameHeight);
    this.addLeaderBoardText(this.halfW, gameStartY + 100);
    this.addPlaceholder(this.halfW, gameStartY + 300);
    this.addBackButton(this.halfW, gameHeight - 150);
    this.labelY = this.placeholder.y + this.placeholder.height + 40;
    this.cameras.main.setZoom(calculateVerticalScaleFactor());
    this.addPointerListener();
    this.createMask();
    await this.addLabels();
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
    this.add
      .tileSprite(x, y, gameWidth + deltaX, 55, "ground")
      .setOrigin(0, 1)
      .setDepth(9999);
  }

  createMask() {
    const maskGraphics = this.add.graphics();
    const x = this.halfW - 350;
    const y = this.labelY - 120;

    maskGraphics.fillStyle(0xffffff);
    maskGraphics.fillRect(x, y, 700, gameHeight);
    maskGraphics.setVisible(false);
    this.mask = new Phaser.Display.Masks.BitmapMask(this, maskGraphics);
  }

  addPlaceholder(x, y) {
    this.placeholder = this.add
      .image(x, y, "leaderBoardStatus")
      .setDepth(100)
      .setOrigin(0.5, 0);
  }

  addLeaderBoardText(x, y) {
    this.add.image(x, y, "leaderboardText").setOrigin(0.5, 0).setScale(0.7);
  }

  addSoundText(x, y) {
    this.soundsText = this.addText(x, y, "SOUNDS");
  }
  addText(x, y, text) {
    return this.add
      .text(x, y, text, {
        fontFamily: "pixel",
        fontSize: "40px",
        color: "#FFFFFF",
        stroke: "#000000",
        strokeThickness: 10,
        shadow: { blur: 0, stroke: false, fill: false },
      })
      .setOrigin(0.5, 0.5);
  }
  addLabel(i, nick, score) {
    const label = new Label(
      this,
      this.halfW,
      this.labelY + 140 * i,
      i + 1,
      score,
      nick
    );
    label.container.mask = this.mask;
    this.labels.push(label);
  }

  async addLabels() {
    let players = await this.getPlayersFromServer();
    if (!players) return;

    for (let i = 0; i <= 14; i++) {
      let player = players[i];
      let nick = player ? player.nick : "";
      let score = player ? player.score : "";

      this.addLabel(i, nick, score);

      if (i === 0 || i === 1 || i === 2) this.addPodiumNick(i, nick);
    }
  }

  addPointerListener() {
    const scrollDownLimit = this.labelY;
    const scrollUpLimit = gameHeight - 200;
    let scrollSpeed = null;

    this.container = this.add
      .container(this.halfW, this.halfH + 300, [])
      .setSize(700, this.gh)
      .setInteractive();

    this.container.on("pointerup", () => {
      const decelerationRate = 0.95;

      const decelerate = setInterval(() => {
        scrollSpeed *= decelerationRate;

        if (
          Math.abs(scrollSpeed) < 0.1 ||
          this.labels[0].container.y >= scrollDownLimit ||
          this.labels[this.labels.length - 1].container.y <= scrollUpLimit
        ) {
          clearInterval(decelerate);
          scrollSpeed = 0;
        }
        this.labels.forEach(
          (label) => (label.container.y = label.container.y - scrollSpeed)
        );
      }, 16);
    });

    this.container.on("pointermove", (pointer, x, y, event) => {
      if (pointer.isDown) {
        const dy = pointer.prevPosition.y - pointer.position.y;

        if (this.labels[0].container.y >= scrollDownLimit && dy <= 0) {
          return;
        }

        if (
          this.labels[this.labels.length - 1].container.y <= scrollUpLimit &&
          dy >= 0
        ) {
          return;
        }
        scrollSpeed = dy;
        this.labels.forEach(
          (label) => (label.container.y = label.container.y - dy)
        );
      }
    });
  }

  addPodiumNick(i, nick) {
    if (i === 0) {
      this.addText(this.placeholder.x, this.placeholder.y - 40, nick)
        .setDepth(101)
        .setOrigin(0.5, 0.5);
    } else if (i === 1) {
      this.addText(this.placeholder.x - 85, this.placeholder.y + 40, nick)
        .setOrigin(1, 0.5)
        .setDepth(101);
    } else {
      this.addText(this.placeholder.x + 90, this.placeholder.y + 40, nick)
        .setOrigin(0, 0.5)
        .setDepth(101);
    }
  }

  addBackButton(x, y) {
    new Button(this, x, y, "backButton")
      .onClick(() => {
        this.audio.click.play();
        this.scene.setVisible(false, "RankingScene");
        this.scene.bringToTop(this.previousScene);
        this.scene.resume(this.previousScene);
        this.scene.setVisible(true, this.previousScene);
        this.scene.pause();
      })
      .setDepth(110);
  }

  async getPlayersFromServer() {
    try {
      const players = await (await GET_PLAYERS()).json();

      this.loading.destroy();
      return players;
    } catch (error) {
      this.addConnectError();
      return false;
    }
  }

  addLoadingAnim(x, y) {
    this.loading = this.add.image(x, y, "loading").setDepth(105);

    this.tweens.add({
      targets: this.loading,
      angle: 360,
      duration: 800,
      ease: "Linear",
      repeat: -1,
    });
  }

  addConnectError() {
    const text = "Connection problem";

    this.loading.destroy();

    this.addText(this.halfW, this.halfH, text)
      .setDepth(101)
      .setColor("#FF0000")
      .setFontSize(60)
      .setStroke("#000000");
  }
}
