class LoginScene extends Phaser.Scene {
  constructor() {
    super("LoginScene");
  }

  create() {
    this.gw = gameWidth;
    this.gh = gameHeight;
    this.halfW = halfGameWidth;
    this.halfH = halfGameHeight;

    this.nickText = "";
    this.id = this.generateId();
    this.isStartButtonBLocked = false;

    this.profileMoveY = halfGameHeight / 4;
    this.deleteTimeResponseText = 4000;

    if (document.getElementById("loadingIcon")) document.getElementById("loadingIcon").remove();
  
    this.createComponents()
  }

  loadingDestroy() {
    this.loading.destroy();
  }

  changeScene() {
    this.scene.start("MenuScene");
    this.scene.remove("LoginScene");
  }

  handleNextScene() {
    this.tweens.add({
      targets: this.profile,
      ease: "Back.in",
      duration: 300,
      scale: 0,
    });

    this.tweens.add({
      targets: this.startButton,
      ease: "Back.in",
      duration: 500,
      scale: 0,
    });

    this.tweens.add({
      targets: this.inputText,
      ease: "Back.in",
      duration: 700,
      scale: 0,
      onComplete: () => {
        this.changeScene();
      },
    });
  }

  generateId() {
    let randomNumbers = [];

    for (let i = 0; i < 10; i++) {
      randomNumbers.push(Math.floor(Math.random() * 100));
    }
    const id = randomNumbers.join("");
    localStorage.setItem("id", id);

    return id;
  }

  async sendServerRequest() {
    const data = {
      nick: this.nickText,
      id: this.id,
    };

    try {
      const respond = await (await CREATE_ACCOUNT(data)).json();
      // console.log(respond);
      if (respond) {
        this.startNextScene();
      } else {
        this.addNickError();
      }
    } catch (error) {
      this.handleNextScene();
    }
  }

  startNextScene() {
    localStorage.setItem("nickname", this.nickText);
    this.handleNextScene();
  }
  
  addProfile(x, y) {
    const image = new Sprite(this, x, y, "loginProfil").setScale(0);

    this.tweens.add({
      targets: image,
      ease: "Back.out",
      duration: 1000,
      scale: 1,
    });

    return image;
  }

  addStartButton(x, y) {
    const button = new Button(this, x, y, "startButton")
      .onClick(() => {
        if (this.isStartButtonBLocked) return;
        this.isStartButtonBLocked = true;
        this.addLoadingAnim(this.halfW, this.halfH);
        this.sendServerRequest();
      })
      .setScale(0);

    this.tweens.add({
      targets: button,
      ease: "Back.out",
      duration: 1200,
      scale: 1,
    });

    return button;
  }

  addTextInput(x, y) {
    this.inputText = this.add
      .rexInputText({
        x: x,
        y: y,
        width: 450,
        height: 130,
        type: "textarea",
        placeholder: "nickname",
        placeholderColor: "#503af5",
        fontSize: "50px",
        fontFamily: "pixel",
        color: "#000000",
        align: "center",
        maxLength: 10,
        minLength: 3,
      })
      .setScale(0)

      .on("textchange", ({ text }) => {
        if (text.includes(" ")) {
          this.cameras.main.setZoom(calculateVerticalScaleFactor());
          this.inputText.text = this.nickText || "";
          return;
        }
        this.nickText = text;
      })
      .on("focus", () => {
        this.addMoveAnim();
      });

    this.tweens.add({
      targets: this.inputText,
      ease: "Back.out",
      duration: 700,
      scale: 1,
    });
  }

  addResponseText(x, y) {
    const text = "Nickname is not available";

    this.notAvailableNickname = this.add
      .text(x, y, text, {
        fontFamily: "Arial",
        fontSize: "30px",
        color: "#FF0000",
        stroke: "#FF0000",
        strokeThickness: 0,
        shadow: { blur: 0, stroke: false, fill: false },
      })
      .setOrigin(0.5, 0.5)
      .setVisible(false);
  }

  addNickError() {
    this.isStartButtonBLocked = false;
    this.loadingDestroy();
    this.notAvailableNickname.setVisible(true);
    setTimeout(() => {
      this.notAvailableNickname.setVisible(false);
    }, this.deleteTimeResponseText);
  }

  addMoveAnim() {
    this.tweens.add({
      targets: this.container,
      ease: "Power3",
      y: this.profileMoveY,
      duration: 1000,
    });
  }

  addLoadingAnim(x, y) {
    this.loading = new Sprite(this, x, y, "loading").setDepth(105);

    this.tweens.add({
      targets: this.loading,
      angle: 360,
      duration: 800,
      ease: "Linear",
      repeat: -1,
    });
  }

  createComponents() {
    this.profile = this.addProfile(0, 0);
    this.addResponseText(this.profile.x, this.profile.y + 195);
    this.addTextInput(this.profile.x, this.profile.y + 135);
  
    this.startButton = this.addStartButton(
      this.profile.x,
      this.profile.y + 260
    );

    this.container = this.add.container(halfGameWidth, halfGameHeight - 200, [
      this.profile,
      this.notAvailableNickname,
      this.inputText,
      this.startButton,
    ]);
  }
}
