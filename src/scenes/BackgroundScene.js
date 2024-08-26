const _0x304fb3 = _0x5946;
(function (_0x3c278e, _0x501b6c) {
  const _0x41348d = _0x5946,
    _0x3c6f84 = _0x3c278e();
  while (!![]) {
    try {
      const _0x53f610 =
        (-parseInt(_0x41348d(0x83)) / 0x1) *
          (-parseInt(_0x41348d(0x8c)) / 0x2) +
        -parseInt(_0x41348d(0x84)) / 0x3 +
        parseInt(_0x41348d(0x81)) / 0x4 +
        (-parseInt(_0x41348d(0x72)) / 0x5) * (parseInt(_0x41348d(0x76)) / 0x6) +
        (-parseInt(_0x41348d(0x80)) / 0x7) * (parseInt(_0x41348d(0x8f)) / 0x8) +
        (-parseInt(_0x41348d(0x7a)) / 0x9) *
          (-parseInt(_0x41348d(0x88)) / 0xa) +
        (parseInt(_0x41348d(0x7b)) / 0xb) * (parseInt(_0x41348d(0x93)) / 0xc);
      if (_0x53f610 === _0x501b6c) break;
      else _0x3c6f84["push"](_0x3c6f84["shift"]());
    } catch (_0x4258d0) {
      _0x3c6f84["push"](_0x3c6f84["shift"]());
    }
  }
})(_0x36a5, 0x9b3d1);
function _0x5946(_0x4675be, _0x29cadd) {
  const _0x36a50c = _0x36a5();
  return (
    (_0x5946 = function (_0x594611, _0x2f7ca5) {
      _0x594611 = _0x594611 - 0x71;
      let _0xb24ce3 = _0x36a50c[_0x594611];
      return _0xb24ce3;
    }),
    _0x5946(_0x4675be, _0x29cadd)
  );
}
function _0x36a5() {
  const _0x2f3379 = [
    "162088mEhnDe",
    "1877154vtlndX",
    "Sine.easeInOut",
    "clouds",
    "addClouds",
    "10uNNyoP",
    "Back.out",
    "Cubic.out",
    "addBackgroundComponents",
    "8ioyClu",
    "setOrigin",
    "Back.in",
    "8mQTnKv",
    "remove",
    "halfH",
    "tweens",
    "8688zsdpQd",
    "create",
    "5VDTDQr",
    "addGround",
    "layer2",
    "Scene",
    "355026RhElWd",
    "tileSprite",
    "layer1",
    "setDisplaySize",
    "3358611ewmjRF",
    "1199ZmmInW",
    "cloudsMoveTween",
    "halfW",
    "add",
    "addBackground",
    "3106607oXYkKw",
    "2656400TdmIHI",
    "image",
  ];
  _0x36a5 = function () {
    return _0x2f3379;
  };
  return _0x36a5();
}
class BackgroundScene extends Phaser[_0x304fb3(0x75)] {
  constructor() {
    super("BackgroundScene");
  }
  [_0x304fb3(0x71)]() {
    const _0x59b7c0 = _0x304fb3;
    (this["gw"] = gameWidth),
      (this["gh"] = gameHeight),
      (this[_0x59b7c0(0x7d)] = halfGameWidth),
      (this[_0x59b7c0(0x91)] = halfGameHeight),
      (this[_0x59b7c0(0x7c)] = null),
      (this["clouds"] = null),
      (this[_0x59b7c0(0x78)] = null),
      this[_0x59b7c0(0x7f)](),
      this[_0x59b7c0(0x8b)]();
  }
  [_0x304fb3(0x7f)]() {
    const _0x1c78cb = _0x304fb3;
    this["add"]
      [_0x1c78cb(0x82)](gameStartX, gameStartY, "menuBg")
      [_0x1c78cb(0x8d)](0x0, 0x0)
      [_0x1c78cb(0x79)](gameWidth + deltaX, gameHeight + deltaY);
  }
  [_0x304fb3(0x8b)]() {
    const _0x31597f = _0x304fb3;
    this["addLayer1"](gameStartX, gameHeight),
      this[_0x31597f(0x87)](this["halfW"], gameStartY + gameHeight / 0x4),
      this[_0x31597f(0x73)](gameStartX, gameHeight);
  }
  ["addLayer1"](_0x33b224, _0x8ac132) {
    const _0x1878f8 = _0x304fb3,
      _0x5cf1b1 = this[_0x1878f8(0x7e)]
        [_0x1878f8(0x77)](
          _0x33b224,
          _0x8ac132 + 0x3e8,
          gameWidth + deltaX,
          0x4d8,
          "menuLayer1"
        )
        [_0x1878f8(0x8d)](0x0, 0x1);
    (this[_0x1878f8(0x78)] = _0x5cf1b1),
      this["tweens"][_0x1878f8(0x7e)]({
        targets: _0x5cf1b1,
        ease: _0x1878f8(0x8a),
        duration: 0x258,
        y: _0x8ac132,
      });
  }
  [_0x304fb3(0x87)](_0x1f73b8, _0x1568ad) {
    const _0x1d79a9 = _0x304fb3,
      _0x1a4c60 = this[_0x1d79a9(0x7e)]
        [_0x1d79a9(0x82)](_0x1f73b8, _0x1568ad, _0x1d79a9(0x74))
        [_0x1d79a9(0x8d)](0.5, 0x0)
        ["setScale"](0x3);
    this[_0x1d79a9(0x86)] = _0x1a4c60;
    const _0x395279 = {
      target: _0x1a4c60,
      x: _0x1a4c60["x"] - 0x14,
      y: _0x1a4c60["y"] + 0xf,
      time: 0x834,
    };
    this[_0x1d79a9(0x92)][_0x1d79a9(0x7e)]({
      targets: _0x1a4c60,
      ease: _0x1d79a9(0x89),
      duration: 0x3e8,
      scale: 0x1,
      onComplete: () => {
        const _0x5e2390 = _0x1d79a9;
        this[_0x5e2390(0x7c)] = this["moveAnim"](_0x395279);
      },
    });
  }
  [_0x304fb3(0x73)](_0x558236, _0x4afbb5) {
    const _0x4f6967 = _0x304fb3,
      _0x12b334 = this["add"]
        ["tileSprite"](
          _0x558236,
          _0x4afbb5 + 0x32,
          gameWidth + deltaX,
          0x37,
          "ground"
        )
        [_0x4f6967(0x8d)](0x0, 0x1);
    this[_0x4f6967(0x92)][_0x4f6967(0x7e)]({
      targets: _0x12b334,
      ease: "Linear",
      duration: 0x12c,
      y: _0x4afbb5,
    });
  }
  ["moveAnim"]({
    target: _0x295960,
    x: _0xe4da5b,
    y: _0x1064d8,
    time: _0x4347ed,
    ease: ease = _0x304fb3(0x85),
  }) {
    const _0x391d86 = _0x304fb3;
    return this[_0x391d86(0x92)]["add"]({
      targets: _0x295960,
      x: _0xe4da5b,
      y: _0x1064d8,
      ease: ease,
      duration: _0x4347ed,
      yoyo: !![],
      repeat: -0x1,
    });
  }
  ["clearTweens"]() {
    const _0x4a2dcc = _0x304fb3;
    this["cloudsMoveTween"][_0x4a2dcc(0x90)](), (this[_0x4a2dcc(0x7c)] = null);
  }
  ["removeTween"]() {
    const _0x5d2cbe = _0x304fb3;
    this[_0x5d2cbe(0x7c)]["remove"](),
      this["tweens"]["add"]({
        targets: this[_0x5d2cbe(0x78)],
        ease: "Cubic.in",
        duration: 0x1f4,
        y: gameHeight + 0x3e8,
      }),
      this[_0x5d2cbe(0x92)][_0x5d2cbe(0x7e)]({
        targets: this[_0x5d2cbe(0x86)],
        ease: _0x5d2cbe(0x8e),
        duration: 0xc8,
        scale: 0x0,
      });
  }
}
