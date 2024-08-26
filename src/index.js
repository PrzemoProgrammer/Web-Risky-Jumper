const _0x5bac23 = _0x4afd;
(function (_0x25e628, _0x20c4e0) {
  const _0x6c5223 = _0x4afd,
    _0x2b9051 = _0x25e628();
  while (!![]) {
    try {
      const _0x5a58bd =
        -parseInt(_0x6c5223(0x9a)) / 0x1 +
        (parseInt(_0x6c5223(0x9e)) / 0x2) * (-parseInt(_0x6c5223(0x93)) / 0x3) +
        -parseInt(_0x6c5223(0xa9)) / 0x4 +
        -parseInt(_0x6c5223(0xa7)) / 0x5 +
        (parseInt(_0x6c5223(0x99)) / 0x6) * (-parseInt(_0x6c5223(0x9d)) / 0x7) +
        -parseInt(_0x6c5223(0x95)) / 0x8 +
        (-parseInt(_0x6c5223(0xa0)) / 0x9) * (-parseInt(_0x6c5223(0x9c)) / 0xa);
      if (_0x5a58bd === _0x20c4e0) break;
      else _0x2b9051["push"](_0x2b9051["shift"]());
    } catch (_0x84ca9f) {
      _0x2b9051["push"](_0x2b9051["shift"]());
    }
  }
})(_0x396c, 0x808be);
const GAME_SAFE_WIDTH = 0x2d0,
  GAME_SAFE_HEIGHT = 0x500,
  statusbarHeight = 0x1e,
  deltaX =
    (window[_0x5bac23(0xa1)] / calculateVerticalScaleFactor() -
      window[_0x5bac23(0xa1)]) /
    0x2,
  deltaY =
    (window["innerHeight"] / calculateVerticalScaleFactor() -
      window["innerHeight"]) /
    0x2,
  gameStartX = -deltaX,
  gameStartY = -deltaY,
  gameWidth = window[_0x5bac23(0xa1)] + deltaX,
  gameHeight = window[_0x5bac23(0xa5)] + deltaY,
  halfGameWidth = window["innerWidth"] / 0x2,
  halfGameHeight = window["innerHeight"] / 0x2,
  config = {
    type: Phaser[_0x5bac23(0x96)],
    parent: _0x5bac23(0xab),
    pixelArt: !![],
    antialias: ![],
    roundPixels: ![],
    backgroundColor: "#0195b7",
    physics: {
      default: _0x5bac23(0x98),
      arcade: { debug: ![], gravity: { y: 0x3e8 } },
    },
    scale: {
      parent: _0x5bac23(0x97),
      mode: Phaser[_0x5bac23(0xa8)]["ScaleModes"][_0x5bac23(0xa4)],
      width: GAME_SAFE_WIDTH,
      height: GAME_SAFE_HEIGHT,
    },
    dom: { createContainer: !![] },
    scene: [
      PreloadScene,
      BackgroundScene,
      LoginScene,
      MenuScene,
      PlayScene,
      RankScene,
      PauseScene,
      SettingsScene,
      RankingScene,
    ],
  },
  game = new Phaser["Game"](config);
function calculateVerticalScaleFactor() {
  const _0x360e52 = _0x5bac23;
  return Math["min"](
    window[_0x360e52(0xa5)] / GAME_SAFE_HEIGHT,
    window[_0x360e52(0xa1)] / GAME_SAFE_WIDTH
  );
}
function _0x4afd(_0x30c052, _0x200f31) {
  const _0x396c1f = _0x396c();
  return (
    (_0x4afd = function (_0x4afd75, _0x5dab22) {
      _0x4afd75 = _0x4afd75 - 0x93;
      let _0x32c025 = _0x396c1f[_0x4afd75];
      return _0x32c025;
    }),
    _0x4afd(_0x30c052, _0x200f31)
  );
}
function checkIsPortraitOrientation() {
  const _0x4df2da = _0x5bac23;
  return window[_0x4df2da(0xa1)] / window[_0x4df2da(0xa5)] <= 0x1;
}
function onresize() {
  const _0x29708a = _0x5bac23,
    _0x5b306a = calculateVerticalScaleFactor();
  game[_0x29708a(0x9b)]["scenes"]["forEach"]((_0x5627b7, _0x4e9c55) => {
    const _0x32e388 = _0x29708a;
    if (_0x4e9c55 === 0x0) return;
    _0x5627b7[_0x32e388(0x9f)]["main"][_0x32e388(0xa6)](_0x5b306a);
  });
}
window[_0x5bac23(0xaa)](_0x5bac23(0xa3), onresize),
  game[_0x5bac23(0x94)]["on"](_0x5bac23(0xac), () => {
    onresize();
  }),
  (globalThis[_0x5bac23(0xa2)] = game);
function _0x396c() {
  const _0x390c86 = [
    "setZoom",
    "2263090SFBaQq",
    "Scale",
    "1581180CsMMXz",
    "addEventListener",
    "div",
    "ready",
    "9NZDMUl",
    "events",
    "2393088dZlAAQ",
    "AUTO",
    "game-container",
    "arcade",
    "2383902LrfqBG",
    "640814tjRFqi",
    "scene",
    "2487150KdtNdI",
    "7mxOhqB",
    "16106kePiCH",
    "cameras",
    "99YHAghH",
    "innerWidth",
    "__PHASER_GAME__",
    "resize",
    "RESIZE",
    "innerHeight",
  ];
  _0x396c = function () {
    return _0x390c86;
  };
  return _0x396c();
}
