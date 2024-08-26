function _0x449c() {
  const _0x3eae56 = [
    "isGameOver",
    "changeScene",
    "shareButton",
    "141122flfJxy",
    "7270552PfgtYp",
    "setZoom",
    "text",
    "changeResponseText",
    "increaseNumberOfPlatforms",
    "score",
    "scene",
    "updateScore",
    "useNextPlatformTheme",
    "add",
    "sendRequestUpdateScore",
    "setDepth",
    "allNumberOfPlatformsInGame",
    "restart",
    "forEach",
    "gameObjectsMoveBackSpeed",
    "get",
    "setOrigin",
    "getItem",
    "updateGame",
    "pause",
    "layer2",
    "cameras",
    "dead",
    "setAlpha",
    "platformThemes",
    "image",
    "length",
    "calculateLastPlatformPosition",
    "skeleton",
    "randomNumber",
    "platformsAreMoving",
    "addFirstPlatform",
    "pointerup",
    "Quad.out",
    "move",
    "2195685yWdDtJ",
    "player",
    "jump",
    "onClick",
    "fall",
    "launch",
    "create",
    "container",
    "90px",
    "platforms",
    "numberOfPlatformsForChangeTheme",
    "play",
    "setTint",
    "moveClouds",
    "push",
    "#FFFFFF",
    "displayWidth",
    "moveTween",
    "addPlayer",
    "playPlayerEntryAnimation",
    "json",
    "startEntryGameAim",
    "2945840EurKUi",
    "Back.out",
    "audio",
    "nickname",
    "setup",
    "Scene",
    "RankScene",
    "idle",
    "Math",
    "addTutorial",
    "game",
    "addPlatforms",
    "stopPropagation",
    "bg1",
    "moveBackground",
    "updateColorIndex",
    "onFloor",
    "scoreText",
    "addPlatformTextures",
    "initLostGame",
    "isPlayerCollidePlatform",
    "addScore",
    "canJump",
    "isFallingDown",
    "addGround",
    "floor_",
    "setupGame",
    "floor",
    "PauseScene",
    "layer1",
    "setImmovable",
    "achievementsButton",
    "update",
    "1369290Pwelks",
    "#000000",
    "Between",
    "tweens",
    "setDisplaySize",
    "preparing",
    "isLandscape",
    "random",
    "replayButton",
    "updatePlatforms",
    "getItemFromLocalStorage",
    "addPlatform",
    "12323521QIdxyb",
    "halfW",
    "world",
    "rankingButton",
    "RankingScene",
    "halfH",
    "getPosition",
    "bg_color",
    "tutorial",
    "bg2",
    "movePlatforms",
    "5818200zGFrQN",
    "tilePositionX",
    "lostScreen",
    "setVisible",
    "addBackground",
    "PlayScene",
    "shift",
    "collider",
    "pointerdown",
    "bringToTop",
    "bestScore",
    "bounceTween",
    "resetPlatformPositionX",
    "pixel",
    "bgElementsBackSpeed",
    "updateGameTheme",
    "setText",
    "moveGround",
    "generateId",
    "addLostScreen",
    "ground",
    "join",
    "2apJVZj",
    "addPauseButton",
    "platformThemeIndex",
    "pauseButton",
    "bgColorIndex",
    "physics",
    "movePlayer",
    "enableBody",
    "click",
  ];
  _0x449c = function () {
    return _0x3eae56;
  };
  return _0x449c();
}
const _0xda7845 = _0x2d44;
(function (_0x5c4bc8, _0x4fd424) {
  const _0x1c5fa9 = _0x2d44,
    _0x539f35 = _0x5c4bc8();
  while (!![]) {
    try {
      const _0x4d9a2b =
        (-parseInt(_0x1c5fa9(0x126)) / 0x1) *
          (parseInt(_0x1c5fa9(0x11a)) / 0x2) +
        parseInt(_0x1c5fa9(0x182)) / 0x3 +
        -parseInt(_0x1c5fa9(0x161)) / 0x4 +
        -parseInt(_0x1c5fa9(0x14b)) / 0x5 +
        parseInt(_0x1c5fa9(0x199)) / 0x6 +
        parseInt(_0x1c5fa9(0x18e)) / 0x7 +
        -parseInt(_0x1c5fa9(0x127)) / 0x8;
      if (_0x4d9a2b === _0x4fd424) break;
      else _0x539f35["push"](_0x539f35["shift"]());
    } catch (_0x313688) {
      _0x539f35["push"](_0x539f35["shift"]());
    }
  }
})(_0x449c, 0xeaa47);
function _0x2d44(_0x548220, _0x34f2cb) {
  const _0x449c52 = _0x449c();
  return (
    (_0x2d44 = function (_0x2d44a9, _0x2a351a) {
      _0x2d44a9 = _0x2d44a9 - 0x107;
      let _0x4c5acd = _0x449c52[_0x2d44a9];
      return _0x4c5acd;
    }),
    _0x2d44(_0x548220, _0x34f2cb)
  );
}
class PlayScene extends Phaser[_0xda7845(0x166)] {
  constructor() {
    const _0x6af82d = _0xda7845;
    super(_0x6af82d(0x109));
  }
  [_0xda7845(0x151)]() {
    const _0x3c00ca = _0xda7845;
    (this["gw"] = gameWidth),
      (this["gh"] = gameHeight),
      (this[_0x3c00ca(0x18f)] = halfGameWidth),
      (this[_0x3c00ca(0x193)] = halfGameHeight),
      (this["halfHeightScreen"] = this[_0x3c00ca(0x193)]),
      (this[_0x3c00ca(0x163)] = this[_0x3c00ca(0x16b)]["audio"]),
      (this[_0x3c00ca(0x154)] = []),
      (this[_0x3c00ca(0x123)] = !![]),
      (this[_0x3c00ca(0x188)] = ![]),
      (this[_0x3c00ca(0x146)] = ![]),
      (this[_0x3c00ca(0x175)] = ![]),
      (this[_0x3c00ca(0x110)] = 0x398 - deltaX),
      (this["bestScore"] = this[_0x3c00ca(0x18c)]("bestScore") || 0x0),
      (this[_0x3c00ca(0x12c)] = 0x0),
      (this[_0x3c00ca(0x140)] = platformThemes),
      (this[_0x3c00ca(0x136)] = 0x14),
      (this[_0x3c00ca(0x112)] = this[_0x3c00ca(0x136)] / 0x4),
      (this[_0x3c00ca(0x155)] = 0xa),
      (this[_0x3c00ca(0x133)] = 0x0),
      (this["bgColorIndex"] = 0x0),
      (this["platformThemeIndex"] = 0x0),
      this["addBackground"](),
      this[_0x3c00ca(0x15d)](),
      this[_0x3c00ca(0x16c)](),
      this[_0x3c00ca(0x179)](),
      this[_0x3c00ca(0x176)](),
      this[_0x3c00ca(0x14e)](),
      (this[_0x3c00ca(0x11d)] = this[_0x3c00ca(0x11b)]()),
      this[_0x3c00ca(0x16a)](),
      this[_0x3c00ca(0x14c)][_0x3c00ca(0x160)](() => {
        this["isGameOver"] = ![];
      }),
      this[_0x3c00ca(0x13d)]["main"][_0x3c00ca(0x128)](
        calculateVerticalScaleFactor()
      ),
      this["playStartSceneTween"]();
  }
  [_0xda7845(0x181)]() {
    const _0x4b9929 = _0xda7845;
    this[_0x4b9929(0x158)]();
    if (this[_0x4b9929(0x123)]) return;
    this[_0x4b9929(0x13a)]();
    if (this[_0x4b9929(0x14c)]["isTouchingRight"]())
      this["player"]["bounce"]("right");
    if (
      this[_0x4b9929(0x14c)][_0x4b9929(0x178)]() &&
      !this[_0x4b9929(0x14c)]["canJump"]
    )
      this[_0x4b9929(0x14c)][_0x4b9929(0x14f)]();
  }
  [_0xda7845(0x108)]() {
    const _0x215fe4 = _0xda7845;
    (this["bg"] = this[_0x215fe4(0x130)]
      [_0x215fe4(0x141)](gameStartX, gameStartY, _0x215fe4(0x16e))
      [_0x215fe4(0x138)](0x0, 0x0)
      ["setDisplaySize"](gameWidth + deltaX, gameHeight + deltaY)
      [_0x215fe4(0x157)](
        this["platformThemes"][this[_0x215fe4(0x11e)]][_0x215fe4(0x195)]
      )),
      this[_0x215fe4(0x170)](),
      (this[_0x215fe4(0x197)] = this["add"]
        [_0x215fe4(0x141)](gameStartX, gameStartY, _0x215fe4(0x16e))
        [_0x215fe4(0x138)](0x0, 0x0)
        [_0x215fe4(0x186)](gameWidth + deltaX, gameHeight + deltaY)
        [_0x215fe4(0x157)](
          this[_0x215fe4(0x140)][this["bgColorIndex"]][_0x215fe4(0x195)]
        )
        [_0x215fe4(0x13f)](0x0)),
      (this[_0x215fe4(0x17e)] = this["add"]
        ["tileSprite"](
          gameStartX,
          gameHeight + 0x3e8,
          gameWidth + deltaX,
          0x411,
          _0x215fe4(0x17e)
        )
        [_0x215fe4(0x138)](0x0, 0x1)),
      (this[_0x215fe4(0x13c)] = this[_0x215fe4(0x130)]
        ["tileSprite"](
          gameStartX,
          gameStartY - 0x64,
          gameWidth + deltaX,
          0x15a,
          _0x215fe4(0x13c)
        )
        [_0x215fe4(0x138)](0x0, 0x0));
  }
  [_0xda7845(0x18c)](_0x80caf) {
    const _0x3f0fe1 = _0xda7845;
    return Number(localStorage[_0x3f0fe1(0x139)](_0x80caf));
  }
  [_0xda7845(0x173)]() {
    const _0x2b2a66 = _0xda7845;
    let _0x13baec = [];
    for (let _0x3a5139 = 0x1; _0x3a5139 <= 0x7; _0x3a5139++) {
      _0x13baec["push"](_0x2b2a66(0x17a) + _0x3a5139);
    }
    return _0x13baec;
  }
  [_0xda7845(0x158)]() {
    const _0xdfade = _0xda7845;
    this[_0xdfade(0x13c)][_0xdfade(0x19a)] += 0x1;
  }
  [_0xda7845(0x170)]() {
    const _0x2b3445 = _0xda7845;
    this[_0x2b3445(0x11e)] += 0x1;
    if (this["bgColorIndex"] === this[_0x2b3445(0x140)][_0x2b3445(0x142)])
      this["bgColorIndex"] = 0x0;
  }
  [_0xda7845(0x12f)]() {
    const _0x4f811f = _0xda7845;
    this[_0x4f811f(0x11c)] += 0x1;
    if (this["platformThemeIndex"] === this[_0x4f811f(0x140)][_0x4f811f(0x142)])
      this[_0x4f811f(0x11c)] = 0x0;
  }
  ["updateGameTheme"]() {
    const _0x25384f = _0xda7845,
      _0xb1cbb2 = this[_0x25384f(0x155)];
    if (this[_0x25384f(0x133)] % _0xb1cbb2 === 0x0) this[_0x25384f(0x12f)]();
    if (this["score"] % _0xb1cbb2 || !this[_0x25384f(0x12c)]) return;
    this[_0x25384f(0x170)]();
    const _0x504174 =
        this[_0x25384f(0x197)]["alpha"] === 0x0
          ? this["bg"]
          : this[_0x25384f(0x197)],
      _0x4c65c8 = _0x504174 === this["bg"] ? 0x1 : 0x0;
    this["tweens"][_0x25384f(0x130)]({
      targets: this["bg2"],
      alpha: _0x4c65c8,
      duration: 0x3e8,
      ease: "Linear",
      onComplete: () => {
        const _0x5bedff = _0x25384f;
        _0x504174[_0x5bedff(0x157)](
          this[_0x5bedff(0x140)][this[_0x5bedff(0x11e)]]["bg_color"]
        );
      },
    });
  }
  [_0xda7845(0x15d)]() {
    this["player"] = new Player(
      this,
      gameStartX - 0x46,
      halfGameHeight,
      "player"
    );
  }
  [_0xda7845(0x18d)](_0x405f22) {
    const _0x422a1b = _0xda7845,
      _0x441674 = {
        x: 0x1c2 * _0x405f22 + 0x172 - deltaX,
        y: this["randomNumber"](halfGameHeight - 0xa0, halfGameHeight + 0xa0),
        w: 0x12c - this[_0x422a1b(0x133)] * 0x3,
        h: gameHeight,
        theme: this[_0x422a1b(0x140)][this["platformThemeIndex"]],
      };
    let _0x8fcefb = new Platform(this, _0x441674);
    this[_0x422a1b(0x154)]["push"](_0x8fcefb),
      this[_0x422a1b(0x11f)]["add"][_0x422a1b(0x10b)](
        this["player"],
        _0x8fcefb[_0x422a1b(0x144)],
        (_0x25a148, _0x38d5d7) => {
          const _0x47ccfe = _0x422a1b;
          _0x25a148["body"][_0x47ccfe(0x171)]() &&
            this[_0x47ccfe(0x175)] &&
            ((this[_0x47ccfe(0x175)] = ![]),
            _0x25a148[_0x47ccfe(0x168)](),
            _0x8fcefb[_0x47ccfe(0x10f)]());
        }
      );
  }
  [_0xda7845(0x16c)]() {
    const _0x4dbe43 = _0xda7845;
    this[_0x4dbe43(0x147)](), this[_0x4dbe43(0x12b)]();
    let _0xcdd1ca = 0x0;
    for (let _0x2e7668 = _0xcdd1ca; _0x2e7668 <= 0x1; _0x2e7668++) {
      this["addPlatform"](_0x2e7668),
        this["increaseNumberOfPlatforms"](),
        this[_0x4dbe43(0x113)](),
        _0xcdd1ca++;
    }
    while (this[_0x4dbe43(0x143)]() < gameWidth - 0x1f4) {
      this[_0x4dbe43(0x18d)](_0xcdd1ca),
        this[_0x4dbe43(0x12b)](),
        this[_0x4dbe43(0x113)](),
        _0xcdd1ca++;
      if (this[_0x4dbe43(0x188)]) continue;
      this[_0x4dbe43(0x188)] = !![];
    }
  }
  ["addFirstPlatform"]() {
    const _0x34b668 = _0xda7845,
      _0x1888de = {
        x: gameStartX - 0x64,
        y: halfGameHeight,
        w: 0x12c,
        h: this["gh"],
        theme: this[_0x34b668(0x140)][this[_0x34b668(0x11c)]],
        firstPlatform: !![],
      },
      _0x3b0b80 = new Platform(this, _0x1888de);
    this[_0x34b668(0x11f)][_0x34b668(0x130)][_0x34b668(0x10b)](
      this["player"],
      _0x3b0b80[_0x34b668(0x144)],
      (_0x18c7df, _0xdf62fc) => {
        const _0x43c628 = _0x34b668;
        _0x18c7df["body"][_0x43c628(0x171)]() &&
          this["isPlayerCollidePlatform"] &&
          ((this[_0x43c628(0x175)] = ![]),
          _0x18c7df["idle"](),
          _0x3b0b80[_0x43c628(0x10f)]());
      }
    ),
      this[_0x34b668(0x154)][_0x34b668(0x159)](_0x3b0b80);
  }
  [_0xda7845(0x12b)]() {
    const _0x453d1f = _0xda7845;
    this[_0x453d1f(0x133)] += 0x1;
  }
  ["addGround"]() {
    const _0x31f9c6 = _0xda7845;
    (this["ground"] = this[_0x31f9c6(0x130)]
      ["tileSprite"](
        gameStartX,
        gameHeight,
        gameWidth + deltaX + 0xc8,
        0x37,
        _0x31f9c6(0x118)
      )
      ["setOrigin"](0x0, 0x1)
      [_0x31f9c6(0x132)](0x1)),
      this[_0x31f9c6(0x11f)][_0x31f9c6(0x190)][_0x31f9c6(0x121)](
        this[_0x31f9c6(0x118)]
      ),
      (this["ground"]["body"]["allowGravity"] = ![]),
      this[_0x31f9c6(0x118)]["body"][_0x31f9c6(0x17f)](!![]),
      this[_0x31f9c6(0x11f)]["add"]["collider"](
        this[_0x31f9c6(0x14c)],
        this[_0x31f9c6(0x118)],
        null,
        () => {
          const _0x3708d8 = _0x31f9c6;
          if (this[_0x3708d8(0x123)]) return;
          this[_0x3708d8(0x174)]();
        }
      );
  }
  [_0xda7845(0x115)]() {
    const _0x2f0b97 = _0xda7845;
    this[_0x2f0b97(0x118)][_0x2f0b97(0x19a)] +=
      this["gameObjectsMoveBackSpeed"];
  }
  [_0xda7845(0x14e)]() {
    const _0x4902be = _0xda7845;
    this["input"]
      ["on"](
        _0x4902be(0x10c),
        function () {
          const _0x246b7a = _0x4902be;
          this["player"][_0x246b7a(0x187)]();
        },
        this
      )
      ["on"](
        _0x4902be(0x148),
        function () {
          const _0x58f072 = _0x4902be;
          (this["isPlayerCollidePlatform"] = !![]),
            (this[_0x58f072(0x146)] = ![]),
            this["player"][_0x58f072(0x14d)]();
        },
        this
      );
  }
  [_0xda7845(0x116)]() {
    const _0x1eb36c = _0xda7845;
    let _0x46b429 = [];
    for (let _0x50a749 = 0x0; _0x50a749 < 0xa; _0x50a749++) {
      _0x46b429["push"](
        Math[_0x1eb36c(0x17c)](Math[_0x1eb36c(0x189)]() * 0x64)
      );
    }
    const _0x445a4a = _0x46b429[_0x1eb36c(0x119)]("");
    return localStorage["setItem"]("id", _0x445a4a), _0x445a4a;
  }
  [_0xda7845(0x174)]() {
    const _0x3a4b65 = _0xda7845;
    (this["isGameOver"] = !![]),
      this[_0x3a4b65(0x14c)][_0x3a4b65(0x13e)](),
      this["addLostScreen"]();
  }
  [_0xda7845(0x117)]() {
    const _0x3c4caa = _0xda7845;
    (this["lostScreen"] = new LostScreen(
      this,
      this["score"],
      this[_0x3c4caa(0x10e)]
    )),
      this[_0x3c4caa(0x118)][_0x3c4caa(0x132)](0x0),
      this[_0x3c4caa(0x172)][_0x3c4caa(0x107)](![]),
      this[_0x3c4caa(0x19b)][_0x3c4caa(0x18a)]["onClick"](() => {
        const _0x4cbabc = _0x3c4caa;
        this[_0x4cbabc(0x154)][_0x4cbabc(0x135)]((_0x3b3a5e) => {
          const _0x375f69 = _0x4cbabc;
          _0x3b3a5e[_0x375f69(0x15c)] = null;
        }),
          this[_0x4cbabc(0x163)][_0x4cbabc(0x122)][_0x4cbabc(0x156)](),
          this[_0x4cbabc(0x12d)][_0x4cbabc(0x134)]();
      }),
      this[_0x3c4caa(0x19b)][_0x3c4caa(0x180)][_0x3c4caa(0x14e)](() => {
        const _0x5bcc58 = _0x3c4caa;
        this[_0x5bcc58(0x163)]["click"][_0x5bcc58(0x156)](),
          this[_0x5bcc58(0x12d)][_0x5bcc58(0x107)](!![], _0x5bcc58(0x167)),
          this[_0x5bcc58(0x124)](_0x5bcc58(0x167), _0x5bcc58(0x109));
      }),
      this["lostScreen"][_0x3c4caa(0x191)][_0x3c4caa(0x14e)](() => {
        const _0x1b7148 = _0x3c4caa;
        this[_0x1b7148(0x163)]["click"][_0x1b7148(0x156)](),
          this[_0x1b7148(0x12d)][_0x1b7148(0x107)](!![], "RankingScene"),
          this["changeScene"](_0x1b7148(0x192), "PlayScene");
      }),
      this["lostScreen"][_0x3c4caa(0x125)][_0x3c4caa(0x14e)](() => {
        const _0x41353e = _0x3c4caa;
        this[_0x41353e(0x163)][_0x41353e(0x122)][_0x41353e(0x156)](),
          this[_0x41353e(0x131)]();
      });
  }
  async [_0xda7845(0x131)]() {
    const _0xdf3445 = _0xda7845,
      _0x39c706 = {
        score: this[_0xdf3445(0x18c)]("bestScore"),
        nick: localStorage[_0xdf3445(0x139)](_0xdf3445(0x164)),
        id: this[_0xdf3445(0x18c)]("id"),
      };
    try {
      const _0x27b7b7 = await (
        await UPDATE_SCORE(_0x39c706)
      )[_0xdf3445(0x15f)]();
      _0x27b7b7
        ? this[_0xdf3445(0x19b)]["changeResponseText"](!![])
        : this[_0xdf3445(0x19b)][_0xdf3445(0x12a)](![]);
    } catch (_0x3e54b6) {
      this[_0xdf3445(0x19b)][_0xdf3445(0x12a)](![]);
    }
  }
  [_0xda7845(0x12e)]() {
    const _0x333ce8 = _0xda7845;
    (this[_0x333ce8(0x12c)] += 0x1),
      this["scoreText"][_0x333ce8(0x114)](this["score"]);
  }
  [_0xda7845(0x16f)]() {
    const _0x13eb13 = _0xda7845;
    (this[_0x13eb13(0x17e)][_0x13eb13(0x19a)] += this[_0x13eb13(0x112)]),
      (this[_0x13eb13(0x13c)][_0x13eb13(0x19a)] += this[_0x13eb13(0x112)]);
  }
  ["movePlatforms"]() {
    const _0xd8a883 = _0xda7845;
    this[_0xd8a883(0x154)][_0xd8a883(0x135)]((_0x28daf2) => {
      const _0x1e04ea = _0xd8a883;
      _0x28daf2[_0x1e04ea(0x14a)](-this[_0x1e04ea(0x136)]);
    });
  }
  ["movePlayer"]() {
    const _0x269caa = _0xda7845;
    this[_0x269caa(0x14c)][_0x269caa(0x14a)](-this[_0x269caa(0x136)]);
  }
  [_0xda7845(0x17b)]() {
    const _0x2208b4 = _0xda7845;
    this[_0x2208b4(0x198)](),
      this[_0x2208b4(0x120)](),
      this["moveBackground"](),
      this[_0x2208b4(0x115)]();
  }
  ["updateGame"]() {
    const _0x10937b = _0xda7845;
    this[_0x10937b(0x14c)][_0x10937b(0x177)] &&
      this[_0x10937b(0x14c)][_0x10937b(0x194)]() >=
        this["platforms"][0x1][_0x10937b(0x152)]["x"] &&
      this[_0x10937b(0x17b)](),
      this[_0x10937b(0x154)][0x1][_0x10937b(0x152)]["x"] <= gameStartX &&
        (this[_0x10937b(0x18b)](),
        this[_0x10937b(0x12e)](),
        this[_0x10937b(0x113)]());
  }
  [_0xda7845(0x145)](_0x82154a, _0x461909) {
    const _0x3338cb = _0xda7845;
    return Math[_0x3338cb(0x17c)](
      Phaser[_0x3338cb(0x169)][_0x3338cb(0x184)](_0x82154a, _0x461909)
    );
  }
  [_0xda7845(0x143)]() {
    const _0x32514b = _0xda7845;
    return (
      this[_0x32514b(0x154)][this[_0x32514b(0x154)]["length"] - 0x1][
        _0x32514b(0x152)
      ]["x"] +
      this[_0x32514b(0x154)][this["platforms"][_0x32514b(0x142)] - 0x1][
        _0x32514b(0x144)
      ][_0x32514b(0x15b)]
    );
  }
  [_0xda7845(0x18b)]() {
    const _0x2d7f22 = _0xda7845,
      _0x2c5218 = this[_0x2d7f22(0x188)]
        ? this[_0x2d7f22(0x143)]() + 0xb4
        : this[_0x2d7f22(0x110)],
      _0x141c20 = this[_0x2d7f22(0x145)](
        halfGameHeight - 0xa0,
        halfGameHeight + 0xa0
      ),
      _0x2b72b8 = 0x12c - this[_0x2d7f22(0x133)] * 0x3,
      _0xe06a1d = this["gh"],
      _0x48a478 = this[_0x2d7f22(0x140)][this["platformThemeIndex"]];
    let _0x358cb5 = this["platforms"][_0x2d7f22(0x10a)]();
    _0x358cb5[_0x2d7f22(0x107)](![]),
      this["platforms"][_0x2d7f22(0x159)](_0x358cb5),
      _0x358cb5[_0x2d7f22(0x165)](
        _0x2c5218,
        _0x141c20,
        _0x2b72b8,
        _0xe06a1d,
        _0x48a478
      ),
      this[_0x2d7f22(0x12b)]();
  }
  [_0xda7845(0x176)]() {
    const _0x378efb = _0xda7845;
    this[_0x378efb(0x172)] = this["add"]
      [_0x378efb(0x129)](
        this[_0x378efb(0x18f)],
        gameStartY,
        this[_0x378efb(0x12c)],
        {
          fontFamily: _0x378efb(0x111),
          fontSize: _0x378efb(0x153),
          color: _0x378efb(0x15a),
          stroke: _0x378efb(0x183),
          strokeThickness: 0xa,
          shadow: { blur: 0x0, stroke: ![], fill: ![] },
        }
      )
      [_0x378efb(0x138)](0.5, 0.5);
  }
  [_0xda7845(0x124)](_0x5069bf, _0x3d9a1b) {
    const _0xc08869 = _0xda7845;
    if (!this[_0xc08869(0x12d)]["isPaused"](_0x5069bf)) {
      this[_0xc08869(0x12d)][_0xc08869(0x150)](_0x5069bf, {
        currentScene: _0x3d9a1b,
      }),
        this[_0xc08869(0x12d)]["bringToTop"](_0x5069bf);
      return;
    }
    const _0x22727f = this["scene"][_0xc08869(0x137)](_0x5069bf);
    this[_0xc08869(0x12d)][_0xc08869(0x13b)](),
      this[_0xc08869(0x12d)]["setVisible"](![], _0x3d9a1b),
      this[_0xc08869(0x12d)][_0xc08869(0x107)](!![], _0x5069bf),
      _0x22727f[_0xc08869(0x12d)][_0xc08869(0x134)]({
        currentScene: _0x3d9a1b,
      }),
      this[_0xc08869(0x12d)][_0xc08869(0x10d)](_0x5069bf);
  }
  [_0xda7845(0x16a)]() {
    const _0x4b8349 = _0xda7845;
    if (this[_0x4b8349(0x10e)] !== 0x0) return;
    this[_0x4b8349(0x196)] = new Tutorial(
      this,
      this["player"]["x"] + 0x104,
      this[_0x4b8349(0x14c)]["y"] - 0x12c
    );
  }
  [_0xda7845(0x11b)]() {
    const _0x630d5c = _0xda7845;
    return new Button(this, gameWidth - 0x46, gameStartY, _0x630d5c(0x11d))[
      "on"
    ](
      "pointerdown",
      function (_0x13a6fc) {
        const _0x35bb08 = _0x630d5c;
        this["audio"][_0x35bb08(0x122)][_0x35bb08(0x156)](),
          this["scene"][_0x35bb08(0x107)](![], "PlayScene"),
          this["changeScene"](_0x35bb08(0x17d), _0x35bb08(0x109)),
          _0x13a6fc[_0x35bb08(0x16d)]();
      },
      this
    );
  }
  [_0xda7845(0x15e)]() {
    const _0x141782 = _0xda7845;
    this[_0x141782(0x14c)][_0x141782(0x160)](() => {
      const _0x4dd96f = _0x141782;
      this[_0x4dd96f(0x123)] = ![];
    });
  }
  ["playStartSceneTween"]() {
    const _0x2b4198 = _0xda7845;
    this[_0x2b4198(0x185)][_0x2b4198(0x130)]({
      targets: this[_0x2b4198(0x17e)],
      ease: _0x2b4198(0x149),
      duration: 0x258,
      y: gameHeight - 0x32,
    }),
      this["tweens"][_0x2b4198(0x130)]({
        targets: this[_0x2b4198(0x13c)],
        ease: _0x2b4198(0x162),
        duration: 0x320,
        y: gameStartY + gameHeight / 0xa,
      }),
      this[_0x2b4198(0x185)]["add"]({
        targets: [this["pauseButton"], this["scoreText"]],
        ease: _0x2b4198(0x162),
        duration: 0x1f4,
        y: gameStartY + 0x50,
      });
  }
}
