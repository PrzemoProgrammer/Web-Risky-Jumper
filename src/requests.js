function _0x43b1(_0x3cef13, _0x193686) {
  const _0x121595 = _0x1215();
  return (
    (_0x43b1 = function (_0x43b1d4, _0x1ec1ac) {
      _0x43b1d4 = _0x43b1d4 - 0xc3;
      let _0x24a617 = _0x121595[_0x43b1d4];
      return _0x24a617;
    }),
    _0x43b1(_0x3cef13, _0x193686)
  );
}
const _0xdc6ab3 = _0x43b1;
(function (_0x108bd4, _0x8b5a76) {
  const _0x27d694 = _0x43b1,
    _0xf37b77 = _0x108bd4();
  while (!![]) {
    try {
      const _0x28c279 =
        (-parseInt(_0x27d694(0xcb)) / 0x1) * (parseInt(_0x27d694(0xc6)) / 0x2) +
        (-parseInt(_0x27d694(0xd0)) / 0x3) * (parseInt(_0x27d694(0xd2)) / 0x4) +
        (parseInt(_0x27d694(0xd3)) / 0x5) * (parseInt(_0x27d694(0xc5)) / 0x6) +
        parseInt(_0x27d694(0xce)) / 0x7 +
        parseInt(_0x27d694(0xca)) / 0x8 +
        (-parseInt(_0x27d694(0xc9)) / 0x9) * (parseInt(_0x27d694(0xc8)) / 0xa) +
        -parseInt(_0x27d694(0xd1)) / 0xb;
      if (_0x28c279 === _0x8b5a76) break;
      else _0xf37b77["push"](_0xf37b77["shift"]());
    } catch (_0x47526d) {
      _0xf37b77["push"](_0xf37b77["shift"]());
    }
  }
})(_0x1215, 0x99e71);
const SERVER_URL = _0xdc6ab3(0xcc),
  PREFX = "riskyJumperWeb",
  headers = { "Content-Type": _0xdc6ab3(0xd4), Accept: _0xdc6ab3(0xd4) },
  requestPost = (_0x2d6c7a, _0x165f24) => {
    const _0x59769d = _0xdc6ab3;
    return fetch(SERVER_URL + "/" + _0x165f24, {
      method: _0x59769d(0xc4),
      headers: headers,
      body: JSON[_0x59769d(0xc7)](_0x2d6c7a),
    });
  },
  requestGet = (_0x198e49) => {
    return fetch(SERVER_URL + "/" + _0x198e49, { headers: headers });
  },
  CREATE_ACCOUNT = (_0x3486da) => {
    const _0x10122e = _0xdc6ab3;
    return requestPost(_0x3486da, PREFX + _0x10122e(0xc3));
  },
  GET_PLAYERS = () => {
    const _0x33fb3b = _0xdc6ab3;
    return requestGet(PREFX + _0x33fb3b(0xcf));
  },
  UPDATE_SCORE = (_0x5a3625) => {
    const _0x3b8ebc = _0xdc6ab3;
    return requestPost(_0x5a3625, PREFX + _0x3b8ebc(0xcd));
  };
function _0x1215() {
  const _0x1d8dba = [
    "https://personalserver-c0422f9a9869.herokuapp.com",
    "/updateScore",
    "8252909rVzJXv",
    "/playersStatus",
    "9kricBR",
    "11166837ISLuIS",
    "254692EHkukb",
    "1295CbjIFq",
    "application/json",
    "/createAccount",
    "post",
    "26484ipFVEq",
    "854kgPYKj",
    "stringify",
    "223840lOsAYE",
    "414ahrYSl",
    "6049928PoMxsw",
    "497tHqedi",
  ];
  _0x1215 = function () {
    return _0x1d8dba;
  };
  return _0x1215();
}
