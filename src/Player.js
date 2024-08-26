var _0x3a822d = _0x5239;
function _0x502a() {
  var _0x43b7c0 = [
    "body",
    "enableBody",
    "jumpYLimit",
    "hurt",
    "right",
    "1162026lSWEVY",
    "isReady",
    "touching",
    "increasingSpeed",
    "acceleration",
    "7sFPVjF",
    "idle",
    "jumpY",
    "interval",
    "preparing",
    "12634056HNfPHE",
    "velocity",
    "endJump",
    "1040fycjdr",
    "sprite",
    "calculateJumpXDistance",
    "bounce",
    "existing",
    "scene",
    "isFellOffMap",
    "dead",
    "setVelocityX",
    "tweens",
    "resetSpeed",
    "play",
    "15KGAZKp",
    "18735GrJmlj",
    "isTouchingRight",
    "setOrigin",
    "5130JWvGun",
    "getPosition",
    "add",
    "isFalling",
    "anims",
    "startEntryGameAim",
    "initialJumpValue",
    "9404640ejpnHX",
    "resetPreparing",
    "isIdle",
    "9898515rOMzAq",
    "offset",
    "physics",
    "jumpYIncrease",
    "audio",
    "world",
    "fall",
    "isPreparing",
    "jumpX",
    "currentAnim",
    "628150MrcCAd",
    "width",
    "55946blMcyA",
    "canJump",
    "setVelocityY",
    "set",
    "Physics",
    "Sprite",
  ];
  _0x502a = function () {
    return _0x43b7c0;
  };
  return _0x502a();
}
function _0x5239(_0xef7fd4, _0x3663a6) {
  var _0x502a14 = _0x502a();
  return (
    (_0x5239 = function (_0x523925, _0xb94fc2) {
      _0x523925 = _0x523925 - 0xf6;
      var _0x2517ad = _0x502a14[_0x523925];
      return _0x2517ad;
    }),
    _0x5239(_0xef7fd4, _0x3663a6)
  );
}
(function (_0x5abf16, _0x20957f) {
  var _0x197ab2 = _0x5239,
    _0x1d73be = _0x5abf16();
  while (!![]) {
    try {
      var _0x111560 =
        -parseInt(_0x197ab2(0x101)) / 0x1 +
        (parseInt(_0x197ab2(0x132)) / 0x2) *
          (parseInt(_0x197ab2(0x11a)) / 0x3) +
        (-parseInt(_0x197ab2(0x10e)) / 0x4) *
          (parseInt(_0x197ab2(0x11b)) / 0x5) +
        -parseInt(_0x197ab2(0x125)) / 0x6 +
        (parseInt(_0x197ab2(0x106)) / 0x7) *
          (parseInt(_0x197ab2(0x10b)) / 0x8) +
        -parseInt(_0x197ab2(0x128)) / 0x9 +
        (-parseInt(_0x197ab2(0x11e)) / 0xa) *
          (-parseInt(_0x197ab2(0xf6)) / 0xb);
      if (_0x111560 === _0x20957f) break;
      else _0x1d73be["push"](_0x1d73be["shift"]());
    } catch (_0x413f43) {
      _0x1d73be["push"](_0x1d73be["shift"]());
    }
  }
})(_0x502a, 0xe935d);
class Player extends Phaser[_0x3a822d(0xfa)]["Arcade"][_0x3a822d(0xfb)] {
  constructor(_0x9cda27, _0x46b6c6, _0x481c6e, _0x3d3ce9) {
    var _0x2684ac = _0x3a822d;
    super(_0x9cda27, _0x46b6c6, _0x481c6e, _0x3d3ce9),
      (this["scene"] = _0x9cda27),
      (this["x"] = _0x46b6c6),
      (this["y"] = _0x481c6e),
      (this[_0x2684ac(0x10f)] = _0x3d3ce9),
      (this[_0x2684ac(0x12c)] =
        this[_0x2684ac(0x113)]["game"][_0x2684ac(0x12c)]),
      (this[_0x2684ac(0x124)] = 0x64),
      (this[_0x2684ac(0x108)] = this[_0x2684ac(0x124)]),
      (this["jumpYLimit"] = 0x5dc),
      (this[_0x2684ac(0x12b)] = 0x8c),
      (this[_0x2684ac(0x130)] = this[_0x2684ac(0x110)]()),
      (this["isReady"] = ![]),
      (this["canJump"] = ![]),
      (this[_0x2684ac(0x127)] = !![]),
      (this[_0x2684ac(0x12f)] = ![]),
      (this[_0x2684ac(0x121)] = ![]),
      this[_0x2684ac(0x11d)](0x0, 0x1),
      this[_0x2684ac(0x113)][_0x2684ac(0x120)][_0x2684ac(0x112)](this),
      this[_0x2684ac(0x113)][_0x2684ac(0x12a)][_0x2684ac(0x12d)][
        _0x2684ac(0xfd)
      ](this),
      (this["body"][_0x2684ac(0x133)] = 0x41),
      (this[_0x2684ac(0xfc)][_0x2684ac(0x129)]["x"] = 0xa),
      this[_0x2684ac(0xfc)][_0x2684ac(0x105)][_0x2684ac(0xf9)](0x0, 0x7d0),
      (this[_0x2684ac(0xfc)]["bounce"]["x"] = 0.5);
  }
  [_0x3a822d(0x10a)]() {
    var _0x9ad1ff = _0x3a822d;
    if (!this[_0x9ad1ff(0xf7)]) return;
    (this["isIdle"] = ![]),
      this[_0x9ad1ff(0x122)][_0x9ad1ff(0x119)](_0x9ad1ff(0x10a), !![]),
      (this[_0x9ad1ff(0x12f)] = !![]),
      this[_0x9ad1ff(0x104)]();
  }
  ["increasingSpeed"]() {
    var _0x21c8eb = _0x3a822d;
    this[_0x21c8eb(0x109)] = setInterval(() => {
      this["increaseSpeed"]();
    }, 0x64);
  }
  [_0x3a822d(0x110)]() {
    return this["jumpY"] / 0x2;
  }
  [_0x3a822d(0x115)]() {
    var _0xb8c2c8 = _0x3a822d;
    this["audio"]["endJump"][_0xb8c2c8(0x119)](),
      this[_0xb8c2c8(0x122)][_0xb8c2c8(0x119)](_0xb8c2c8(0x115), !![]),
      (this[_0xb8c2c8(0xfc)][_0xb8c2c8(0x111)]["x"] = 0x0),
      this[_0xb8c2c8(0x116)](0x0);
  }
  ["jump"]() {
    var _0xd8004f = _0x3a822d;
    if (!this["canJump"]) return;
    this[_0xd8004f(0x12c)]["startJump"]["play"](),
      this[_0xd8004f(0x122)][_0xd8004f(0x119)]("jump", !![]),
      (this[_0xd8004f(0x130)] = this[_0xd8004f(0x110)]()),
      (this["isPreparing"] = ![]),
      (this[_0xd8004f(0x127)] = ![]),
      (this[_0xd8004f(0xf7)] = ![]),
      this[_0xd8004f(0xf8)](-this["jumpY"]),
      this["setVelocityX"](this[_0xd8004f(0x130)]),
      this[_0xd8004f(0x126)]();
  }
  [_0x3a822d(0x126)]() {
    var _0x305ef8 = _0x3a822d;
    clearInterval(this[_0x305ef8(0x109)]), this[_0x305ef8(0x118)]();
  }
  ["isTouchingDown"]() {
    var _0xc9467d = _0x3a822d;
    return this[_0xc9467d(0xfc)][_0xc9467d(0x103)]["down"];
  }
  [_0x3a822d(0x11c)]() {
    var _0x266845 = _0x3a822d;
    return this["body"][_0x266845(0x103)][_0x266845(0x100)];
  }
  [_0x3a822d(0x111)]() {
    var _0x3605d7 = _0x3a822d;
    this["audio"]["hurt"]["play"](),
      this[_0x3605d7(0x122)][_0x3605d7(0x119)]("hurt", !![]);
  }
  [_0x3a822d(0x107)]() {
    var _0x1d7a94 = _0x3a822d;
    if (this["isPreparing"] || this[_0x1d7a94(0x127)]) return;
    this[_0x1d7a94(0x122)]["play"](_0x1d7a94(0x107), !![]),
      this[_0x1d7a94(0x12c)][_0x1d7a94(0x10d)][_0x1d7a94(0x119)](),
      (this[_0x1d7a94(0x121)] = ![]),
      (this[_0x1d7a94(0x127)] = !![]),
      (this["canJump"] = !![]),
      this["setVelocityX"](0x0);
  }
  ["isFallingDown"]() {
    var _0x3ae5b8 = _0x3a822d;
    return this["body"][_0x3ae5b8(0x10c)]["y"] > 0x0;
  }
  ["fall"]() {
    var _0x43bb62 = _0x3a822d;
    if (
      this[_0x43bb62(0x122)][_0x43bb62(0x131)]["key"] === _0x43bb62(0xff) ||
      this[_0x43bb62(0x121)]
    )
      return;
    (this["isFalling"] = !![]),
      this[_0x43bb62(0x122)]["play"](_0x43bb62(0x12e), !![]);
  }
  [_0x3a822d(0x114)](_0x38385f) {
    return this["y"] >= _0x38385f + 0xc8;
  }
  [_0x3a822d(0x123)](_0x2a9f9b) {
    var _0x2675d3 = _0x3a822d;
    this["anims"][_0x2675d3(0x119)]("moveRight", !![]),
      this[_0x2675d3(0x113)][_0x2675d3(0x117)]["add"]({
        targets: this,
        duration: 0x3e8,
        x: this["x"] + 0x8c,
        onComplete: () => {
          var _0x5bee09 = _0x2675d3;
          this["anims"]["play"]("idle", !![]),
            (this[_0x5bee09(0x102)] = !![]),
            (this[_0x5bee09(0xf7)] = !![]),
            _0x2a9f9b();
        },
      });
  }
  ["increaseSpeed"]() {
    var _0x573f7a = _0x3a822d;
    if (this["jumpY"] >= this[_0x573f7a(0xfe)]) return;
    this["jumpY"] += this[_0x573f7a(0x12b)];
  }
  [_0x3a822d(0x118)]() {
    var _0xaa374d = _0x3a822d;
    (this[_0xaa374d(0x108)] = this[_0xaa374d(0x124)]),
      (this[_0xaa374d(0x130)] = this["calculateJumpXDistance"]());
  }
  ["move"](_0x92c33f) {
    this["x"] += _0x92c33f;
  }
  [_0x3a822d(0x11f)]() {
    var _0x1ef0f5 = _0x3a822d;
    return this["x"] + this[_0x1ef0f5(0x133)];
  }
}
