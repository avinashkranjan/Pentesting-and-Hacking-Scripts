var h,
  aa =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          a != Array.prototype && a != Object.prototype && (a[b] = c.value);
        },
  k =
    "undefined" != typeof window && window === this
      ? this
      : "undefined" != typeof global && null != global
      ? global
      : this,
  ba = function () {
    ba = function () {};
    k.Symbol || (k.Symbol = ca);
  },
  ca = (function () {
    var a = 0;
    return function (b) {
      return "jscomp_symbol_" + (b || "") + a++;
    };
  })(),
  ea = function () {
    ba();
    var a = k.Symbol.iterator;
    a || (a = k.Symbol.iterator = k.Symbol("iterator"));
    "function" != typeof Array.prototype[a] &&
      aa(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
          return da(this);
        },
      });
    ea = function () {};
  },
  da = function (a) {
    var b = 0;
    return fa(function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    });
  },
  fa = function (a) {
    ea();
    a = { next: a };
    a[k.Symbol.iterator] = function () {
      return this;
    };
    return a;
  },
  ha = function (a) {
    ea();
    var b = a[Symbol.iterator];
    return b ? b.call(a) : da(a);
  },
  l = this,
  ia = function (a) {
    var b = typeof a;
    if ("object" == b)
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if (
          "[object Array]" == c ||
          ("number" == typeof a.length &&
            "undefined" != typeof a.splice &&
            "undefined" != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable("splice"))
        )
          return "array";
        if (
          "[object Function]" == c ||
          ("undefined" != typeof a.call &&
            "undefined" != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable("call"))
        )
          return "function";
      } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b;
  },
  ja = function (a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Rb = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.Pb = function (a, c, g) {
      for (
        var e = Array(arguments.length - 2), d = 2;
        d < arguments.length;
        d++
      )
        e[d - 2] = arguments[d];
      return b.prototype[c].apply(a, e);
    };
  };
var p = function (a) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, p);
  else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
};
ja(p, Error);
p.prototype.name = "CustomError";
var ka = function (a, b) {
  a = a.split("%s");
  for (var c = "", d = a.length - 1, e = 0; e < d; e++)
    c += a[e] + (e < b.length ? b[e] : "%s");
  p.call(this, c + a[d]);
};
ja(ka, p);
ka.prototype.name = "AssertionError";
var la = function (a, b, c) {
  if (!a) {
    var d = "Assertion failed";
    if (b) {
      d += ": " + b;
      var e = Array.prototype.slice.call(arguments, 2);
    }
    throw new ka("" + d, e || []);
  }
};
var ma = function (a) {
  for (var b = [], c = 0, d = 0; d < a.length; d++) {
    var e = a.charCodeAt(d);
    255 < e && ((b[c++] = e & 255), (e >>= 8));
    b[c++] = e;
  }
  return b;
};
var na = null;
var oa = function () {
  this.l = -1;
};
var q = function (a, b, c) {
  this.l = -1;
  this.B = a;
  this.l = c || a.l || 16;
  this.Ma = Array(this.l);
  this.pa = Array(this.l);
  a = b;
  a.length > this.l &&
    (this.B.update(a), (a = this.B.digest()), this.B.reset());
  for (c = 0; c < this.l; c++)
    (b = c < a.length ? a[c] : 0), (this.Ma[c] = b ^ 92), (this.pa[c] = b ^ 54);
  this.B.update(this.pa);
};
ja(q, oa);
q.prototype.reset = function () {
  this.B.reset();
  this.B.update(this.pa);
};
q.prototype.update = function (a, b) {
  this.B.update(a, b);
};
q.prototype.digest = function () {
  var a = this.B.digest();
  this.B.reset();
  this.B.update(this.Ma);
  this.B.update(a);
  return this.B.digest();
};
var r = function () {
  this.l = 64;
  this.j = Array(4);
  this.ab = Array(this.l);
  this.da = this.U = 0;
  this.reset();
};
ja(r, oa);
r.prototype.reset = function () {
  this.j[0] = 1732584193;
  this.j[1] = 4023233417;
  this.j[2] = 2562383102;
  this.j[3] = 271733878;
  this.da = this.U = 0;
};
var pa = function (a, b, c) {
  c || (c = 0);
  var d = Array(16);
  if ("string" == typeof b)
    for (var e = 0; 16 > e; ++e)
      d[e] =
        b.charCodeAt(c++) |
        (b.charCodeAt(c++) << 8) |
        (b.charCodeAt(c++) << 16) |
        (b.charCodeAt(c++) << 24);
  else
    for (e = 0; 16 > e; ++e)
      d[e] = b[c++] | (b[c++] << 8) | (b[c++] << 16) | (b[c++] << 24);
  b = a.j[0];
  c = a.j[1];
  e = a.j[2];
  var g = a.j[3];
  var f = (b + (g ^ (c & (e ^ g))) + d[0] + 3614090360) & 4294967295;
  b = c + (((f << 7) & 4294967295) | (f >>> 25));
  f = (g + (e ^ (b & (c ^ e))) + d[1] + 3905402710) & 4294967295;
  g = b + (((f << 12) & 4294967295) | (f >>> 20));
  f = (e + (c ^ (g & (b ^ c))) + d[2] + 606105819) & 4294967295;
  e = g + (((f << 17) & 4294967295) | (f >>> 15));
  f = (c + (b ^ (e & (g ^ b))) + d[3] + 3250441966) & 4294967295;
  c = e + (((f << 22) & 4294967295) | (f >>> 10));
  f = (b + (g ^ (c & (e ^ g))) + d[4] + 4118548399) & 4294967295;
  b = c + (((f << 7) & 4294967295) | (f >>> 25));
  f = (g + (e ^ (b & (c ^ e))) + d[5] + 1200080426) & 4294967295;
  g = b + (((f << 12) & 4294967295) | (f >>> 20));
  f = (e + (c ^ (g & (b ^ c))) + d[6] + 2821735955) & 4294967295;
  e = g + (((f << 17) & 4294967295) | (f >>> 15));
  f = (c + (b ^ (e & (g ^ b))) + d[7] + 4249261313) & 4294967295;
  c = e + (((f << 22) & 4294967295) | (f >>> 10));
  f = (b + (g ^ (c & (e ^ g))) + d[8] + 1770035416) & 4294967295;
  b = c + (((f << 7) & 4294967295) | (f >>> 25));
  f = (g + (e ^ (b & (c ^ e))) + d[9] + 2336552879) & 4294967295;
  g = b + (((f << 12) & 4294967295) | (f >>> 20));
  f = (e + (c ^ (g & (b ^ c))) + d[10] + 4294925233) & 4294967295;
  e = g + (((f << 17) & 4294967295) | (f >>> 15));
  f = (c + (b ^ (e & (g ^ b))) + d[11] + 2304563134) & 4294967295;
  c = e + (((f << 22) & 4294967295) | (f >>> 10));
  f = (b + (g ^ (c & (e ^ g))) + d[12] + 1804603682) & 4294967295;
  b = c + (((f << 7) & 4294967295) | (f >>> 25));
  f = (g + (e ^ (b & (c ^ e))) + d[13] + 4254626195) & 4294967295;
  g = b + (((f << 12) & 4294967295) | (f >>> 20));
  f = (e + (c ^ (g & (b ^ c))) + d[14] + 2792965006) & 4294967295;
  e = g + (((f << 17) & 4294967295) | (f >>> 15));
  f = (c + (b ^ (e & (g ^ b))) + d[15] + 1236535329) & 4294967295;
  c = e + (((f << 22) & 4294967295) | (f >>> 10));
  f = (b + (e ^ (g & (c ^ e))) + d[1] + 4129170786) & 4294967295;
  b = c + (((f << 5) & 4294967295) | (f >>> 27));
  f = (g + (c ^ (e & (b ^ c))) + d[6] + 3225465664) & 4294967295;
  g = b + (((f << 9) & 4294967295) | (f >>> 23));
  f = (e + (b ^ (c & (g ^ b))) + d[11] + 643717713) & 4294967295;
  e = g + (((f << 14) & 4294967295) | (f >>> 18));
  f = (c + (g ^ (b & (e ^ g))) + d[0] + 3921069994) & 4294967295;
  c = e + (((f << 20) & 4294967295) | (f >>> 12));
  f = (b + (e ^ (g & (c ^ e))) + d[5] + 3593408605) & 4294967295;
  b = c + (((f << 5) & 4294967295) | (f >>> 27));
  f = (g + (c ^ (e & (b ^ c))) + d[10] + 38016083) & 4294967295;
  g = b + (((f << 9) & 4294967295) | (f >>> 23));
  f = (e + (b ^ (c & (g ^ b))) + d[15] + 3634488961) & 4294967295;
  e = g + (((f << 14) & 4294967295) | (f >>> 18));
  f = (c + (g ^ (b & (e ^ g))) + d[4] + 3889429448) & 4294967295;
  c = e + (((f << 20) & 4294967295) | (f >>> 12));
  f = (b + (e ^ (g & (c ^ e))) + d[9] + 568446438) & 4294967295;
  b = c + (((f << 5) & 4294967295) | (f >>> 27));
  f = (g + (c ^ (e & (b ^ c))) + d[14] + 3275163606) & 4294967295;
  g = b + (((f << 9) & 4294967295) | (f >>> 23));
  f = (e + (b ^ (c & (g ^ b))) + d[3] + 4107603335) & 4294967295;
  e = g + (((f << 14) & 4294967295) | (f >>> 18));
  f = (c + (g ^ (b & (e ^ g))) + d[8] + 1163531501) & 4294967295;
  c = e + (((f << 20) & 4294967295) | (f >>> 12));
  f = (b + (e ^ (g & (c ^ e))) + d[13] + 2850285829) & 4294967295;
  b = c + (((f << 5) & 4294967295) | (f >>> 27));
  f = (g + (c ^ (e & (b ^ c))) + d[2] + 4243563512) & 4294967295;
  g = b + (((f << 9) & 4294967295) | (f >>> 23));
  f = (e + (b ^ (c & (g ^ b))) + d[7] + 1735328473) & 4294967295;
  e = g + (((f << 14) & 4294967295) | (f >>> 18));
  f = (c + (g ^ (b & (e ^ g))) + d[12] + 2368359562) & 4294967295;
  c = e + (((f << 20) & 4294967295) | (f >>> 12));
  f = (b + (c ^ e ^ g) + d[5] + 4294588738) & 4294967295;
  b = c + (((f << 4) & 4294967295) | (f >>> 28));
  f = (g + (b ^ c ^ e) + d[8] + 2272392833) & 4294967295;
  g = b + (((f << 11) & 4294967295) | (f >>> 21));
  f = (e + (g ^ b ^ c) + d[11] + 1839030562) & 4294967295;
  e = g + (((f << 16) & 4294967295) | (f >>> 16));
  f = (c + (e ^ g ^ b) + d[14] + 4259657740) & 4294967295;
  c = e + (((f << 23) & 4294967295) | (f >>> 9));
  f = (b + (c ^ e ^ g) + d[1] + 2763975236) & 4294967295;
  b = c + (((f << 4) & 4294967295) | (f >>> 28));
  f = (g + (b ^ c ^ e) + d[4] + 1272893353) & 4294967295;
  g = b + (((f << 11) & 4294967295) | (f >>> 21));
  f = (e + (g ^ b ^ c) + d[7] + 4139469664) & 4294967295;
  e = g + (((f << 16) & 4294967295) | (f >>> 16));
  f = (c + (e ^ g ^ b) + d[10] + 3200236656) & 4294967295;
  c = e + (((f << 23) & 4294967295) | (f >>> 9));
  f = (b + (c ^ e ^ g) + d[13] + 681279174) & 4294967295;
  b = c + (((f << 4) & 4294967295) | (f >>> 28));
  f = (g + (b ^ c ^ e) + d[0] + 3936430074) & 4294967295;
  g = b + (((f << 11) & 4294967295) | (f >>> 21));
  f = (e + (g ^ b ^ c) + d[3] + 3572445317) & 4294967295;
  e = g + (((f << 16) & 4294967295) | (f >>> 16));
  f = (c + (e ^ g ^ b) + d[6] + 76029189) & 4294967295;
  c = e + (((f << 23) & 4294967295) | (f >>> 9));
  f = (b + (c ^ e ^ g) + d[9] + 3654602809) & 4294967295;
  b = c + (((f << 4) & 4294967295) | (f >>> 28));
  f = (g + (b ^ c ^ e) + d[12] + 3873151461) & 4294967295;
  g = b + (((f << 11) & 4294967295) | (f >>> 21));
  f = (e + (g ^ b ^ c) + d[15] + 530742520) & 4294967295;
  e = g + (((f << 16) & 4294967295) | (f >>> 16));
  f = (c + (e ^ g ^ b) + d[2] + 3299628645) & 4294967295;
  c = e + (((f << 23) & 4294967295) | (f >>> 9));
  f = (b + (e ^ (c | ~g)) + d[0] + 4096336452) & 4294967295;
  b = c + (((f << 6) & 4294967295) | (f >>> 26));
  f = (g + (c ^ (b | ~e)) + d[7] + 1126891415) & 4294967295;
  g = b + (((f << 10) & 4294967295) | (f >>> 22));
  f = (e + (b ^ (g | ~c)) + d[14] + 2878612391) & 4294967295;
  e = g + (((f << 15) & 4294967295) | (f >>> 17));
  f = (c + (g ^ (e | ~b)) + d[5] + 4237533241) & 4294967295;
  c = e + (((f << 21) & 4294967295) | (f >>> 11));
  f = (b + (e ^ (c | ~g)) + d[12] + 1700485571) & 4294967295;
  b = c + (((f << 6) & 4294967295) | (f >>> 26));
  f = (g + (c ^ (b | ~e)) + d[3] + 2399980690) & 4294967295;
  g = b + (((f << 10) & 4294967295) | (f >>> 22));
  f = (e + (b ^ (g | ~c)) + d[10] + 4293915773) & 4294967295;
  e = g + (((f << 15) & 4294967295) | (f >>> 17));
  f = (c + (g ^ (e | ~b)) + d[1] + 2240044497) & 4294967295;
  c = e + (((f << 21) & 4294967295) | (f >>> 11));
  f = (b + (e ^ (c | ~g)) + d[8] + 1873313359) & 4294967295;
  b = c + (((f << 6) & 4294967295) | (f >>> 26));
  f = (g + (c ^ (b | ~e)) + d[15] + 4264355552) & 4294967295;
  g = b + (((f << 10) & 4294967295) | (f >>> 22));
  f = (e + (b ^ (g | ~c)) + d[6] + 2734768916) & 4294967295;
  e = g + (((f << 15) & 4294967295) | (f >>> 17));
  f = (c + (g ^ (e | ~b)) + d[13] + 1309151649) & 4294967295;
  c = e + (((f << 21) & 4294967295) | (f >>> 11));
  f = (b + (e ^ (c | ~g)) + d[4] + 4149444226) & 4294967295;
  b = c + (((f << 6) & 4294967295) | (f >>> 26));
  f = (g + (c ^ (b | ~e)) + d[11] + 3174756917) & 4294967295;
  g = b + (((f << 10) & 4294967295) | (f >>> 22));
  f = (e + (b ^ (g | ~c)) + d[2] + 718787259) & 4294967295;
  e = g + (((f << 15) & 4294967295) | (f >>> 17));
  f = (c + (g ^ (e | ~b)) + d[9] + 3951481745) & 4294967295;
  a.j[0] = (a.j[0] + b) & 4294967295;
  a.j[1] =
    (a.j[1] + (e + (((f << 21) & 4294967295) | (f >>> 11)))) & 4294967295;
  a.j[2] = (a.j[2] + e) & 4294967295;
  a.j[3] = (a.j[3] + g) & 4294967295;
};
r.prototype.update = function (a, b) {
  void 0 === b && (b = a.length);
  for (var c = b - this.l, d = this.ab, e = this.U, g = 0; g < b; ) {
    if (0 == e) for (; g <= c; ) pa(this, a, g), (g += this.l);
    if ("string" == typeof a)
      for (; g < b; ) {
        if (((d[e++] = a.charCodeAt(g++)), e == this.l)) {
          pa(this, d);
          e = 0;
          break;
        }
      }
    else
      for (; g < b; )
        if (((d[e++] = a[g++]), e == this.l)) {
          pa(this, d);
          e = 0;
          break;
        }
  }
  this.U = e;
  this.da += b;
};
r.prototype.digest = function () {
  var a = Array((56 > this.U ? this.l : 2 * this.l) - this.U);
  a[0] = 128;
  for (var b = 1; b < a.length - 8; ++b) a[b] = 0;
  var c = 8 * this.da;
  for (b = a.length - 8; b < a.length; ++b) (a[b] = c & 255), (c /= 256);
  this.update(a);
  a = Array(16);
  for (b = c = 0; 4 > b; ++b)
    for (var d = 0; 32 > d; d += 8) a[c++] = (this.j[b] >>> d) & 255;
  return a;
};
var qa,
  t,
  u = void 0,
  w = function (a) {
    try {
      return l.JSON.parse.call(l.JSON, a);
    } catch (b) {
      return !1;
    }
  },
  x = function (a) {
    return Object.prototype.toString.call(a);
  },
  ra = x(0),
  sa = x(new Date(0)),
  ta = x(!0),
  ua = x(""),
  va = x({}),
  wa = x([]),
  y = function (a, b) {
    if (b)
      for (var c = 0, d = b.length; c < d; ++c)
        if (a === b[c])
          throw new TypeError("Converting circular structure to JSON");
    d = typeof a;
    if ("undefined" !== d) {
      c = Array.prototype.slice.call(b || [], 0);
      c[c.length] = a;
      b = [];
      var e = x(a);
      if (
        null != a &&
        "function" === typeof a.toJSON &&
        (Object.prototype.hasOwnProperty.call(a, "toJSON") ||
          ((e !== wa ||
            (a.constructor !== Array && a.constructor !== Object)) &&
            (e !== va ||
              (a.constructor !== Array && a.constructor !== Object)) &&
            e !== ua &&
            e !== ra &&
            e !== ta &&
            e !== sa))
      )
        return y(a.toJSON.call(a), c);
      if (null == a) b[b.length] = "null";
      else if (e === ra)
        (a = Number(a)),
          isNaN(a) || isNaN(a - a)
            ? (a = "null")
            : -0 === a && 0 > 1 / a && (a = "-0"),
          (b[b.length] = String(a));
      else if (e === ta) b[b.length] = String(!!Number(a));
      else {
        if (e === sa) return y(a.toISOString.call(a), c);
        if (e === wa && x(a.length) === ra) {
          b[b.length] = "[";
          var g = 0;
          for (d = Number(a.length) >> 0; g < d; ++g)
            g && (b[b.length] = ","), (b[b.length] = y(a[g], c) || "null");
          b[b.length] = "]";
        } else if (e == ua && x(a.length) === ra) {
          b[b.length] = '"';
          g = 0;
          for (c = Number(a.length) >> 0; g < c; ++g)
            (d = String.prototype.charAt.call(a, g)),
              (e = String.prototype.charCodeAt.call(a, g)),
              (b[b.length] =
                "\b" === d
                  ? "\\b"
                  : "\f" === d
                  ? "\\f"
                  : "\n" === d
                  ? "\\n"
                  : "\r" === d
                  ? "\\r"
                  : "\t" === d
                  ? "\\t"
                  : "\\" === d || '"' === d
                  ? "\\" + d
                  : 31 >= e
                  ? "\\u" + (e + 65536).toString(16).substr(1)
                  : 32 <= e && 65535 >= e
                  ? d
                  : "\ufffd");
          b[b.length] = '"';
        } else if ("object" === d) {
          b[b.length] = "{";
          d = 0;
          for (g in a)
            Object.prototype.hasOwnProperty.call(a, g) &&
              ((e = y(a[g], c)),
              void 0 !== e &&
                (d++ && (b[b.length] = ","),
                (b[b.length] = y(g)),
                (b[b.length] = ":"),
                (b[b.length] = e)));
          b[b.length] = "}";
        } else return;
      }
      return b.join("");
    }
  },
  xa = /[\0-\x07\x0b\x0e-\x1f]/,
  ya = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/,
  za = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/,
  Aa =
    /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/,
  Ba = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g,
  Ca = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g,
  Da = /[ \t\n\r]+/g,
  Ea = /[^"]:/,
  Fa = /""/g,
  Ga = /true|false|null/g,
  Ha = /00/,
  Ia = /[\{]([^0\}]|0[^:])/,
  Ja = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/,
  Ka = /[^\[,:][\[\{]/,
  La = /^(\{|\}|\[|\]|,|:|0)+/,
  Ma = /\u2028/g,
  Na = /\u2029/g,
  Oa = function (a) {
    a = String(a);
    if (xa.test(a) || ya.test(a) || za.test(a) || Aa.test(a)) return !1;
    var b = a.replace(Ba, '""');
    b = b.replace(Ca, "0");
    b = b.replace(Da, "");
    if (Ea.test(b)) return !1;
    b = b.replace(Fa, "0");
    b = b.replace(Ga, "0");
    if (
      Ha.test(b) ||
      Ia.test(b) ||
      Ja.test(b) ||
      Ka.test(b) ||
      !b ||
      (b = b.replace(La, ""))
    )
      return !1;
    a = a.replace(Ma, "\\u2028").replace(Na, "\\u2029");
    b = void 0;
    try {
      b = u
        ? [w(a)]
        : eval(
            "(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" +
              a +
              "\n)",
          );
    } catch (c) {
      return !1;
    }
    return b && 1 === b.length ? b[0] : !1;
  },
  Pa = function () {
    var a = ((l.document || {}).scripts || []).length;
    if ((void 0 === qa || void 0 === u || t !== a) && -1 !== t) {
      qa = u = !1;
      t = -1;
      try {
        try {
          u =
            !!l.JSON &&
            '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' ===
              l.JSON.stringify.call(l.JSON, {
                a: [3, !0, new Date(0)],
                c: function () {},
              }) &&
            !0 === w("true") &&
            3 === w('[{"a":3}]')[0].a;
        } catch (b) {}
        qa = u && !w("[00]") && !w('"\u0007"') && !w('"\\0"') && !w('"\\v"');
      } finally {
        t = a;
      }
    }
  },
  Qa =
    !Date.prototype.toISOString ||
    "function" !== typeof Date.prototype.toISOString ||
    "1970-01-01T00:00:00.000Z" !== new Date(0).toISOString(),
  Ra = function () {
    var a = Date.prototype.getUTCFullYear.call(this);
    return [
      0 > a
        ? "-" + String(1e6 - a).substr(1)
        : 9999 >= a
        ? String(1e4 + a).substr(1)
        : "+" + String(1e6 + a).substr(1),
      "-",
      String(101 + Date.prototype.getUTCMonth.call(this)).substr(1),
      "-",
      String(100 + Date.prototype.getUTCDate.call(this)).substr(1),
      "T",
      String(100 + Date.prototype.getUTCHours.call(this)).substr(1),
      ":",
      String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1),
      ":",
      String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1),
      ".",
      String(1e3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1),
      "Z",
    ].join("");
  };
Date.prototype.toISOString = Qa ? Ra : Date.prototype.toISOString;
var z,
  Sa = !1,
  A = function (a) {
    try {
      Sa && window.console && window.console.log && window.console.log(a);
    } catch (b) {}
  },
  B = function (a, b) {
    if (!a) return -1;
    if (a.indexOf) return a.indexOf(b, void 0);
    for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
    return -1;
  },
  C = function (a, b) {
    function c() {}
    if (!a) throw "Child class cannot be empty.";
    if (!b) throw "Parent class cannot be empty.";
    c.prototype = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
  },
  Ta = function (a) {
    return "[object Function]" === Object.prototype.toString.call(a);
  },
  Ua = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (null === d || void 0 === d) d = "";
        b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d));
      }
    return b.join("&");
  },
  Va = function (a) {
    var b = window.location.hash;
    a = new RegExp("[&#]" + a + "=([^&]*)");
    b = decodeURIComponent(b);
    b = a.exec(b);
    return null == b ? "" : b[1].replace(/\+/g, " ");
  },
  Wa = function (a, b, c) {
    if (a.addEventListener) a.addEventListener(b, c, !1);
    else if (a.attachEvent) a.attachEvent("on" + b, c);
    else throw "Add event handler for " + b + " failed.";
  },
  Xa = function (a, b) {
    a = (a || "").split(" ");
    b = (b || "").split(" ");
    for (var c = 0; c < b.length; c++) if (b[c] && 0 > B(a, b[c])) return !1;
    return !0;
  },
  Ya = function () {
    if ("undefined" != typeof z) return z;
    a: {
      try {
        if (window.localStorage) {
          var a = window.localStorage;
          break a;
        }
      } catch (b) {}
      a = void 0;
    }
    if (!a) return (z = !1);
    try {
      a.setItem("test", "test"), a.removeItem("test"), (z = !0);
    } catch (b) {
      z = !1;
    }
    return z;
  },
  Za = function () {
    var a = navigator.userAgent.toLowerCase();
    return -1 != a.indexOf("msie") && 8 == parseInt(a.split("msie")[1], 10);
  },
  D = function () {
    return (
      Object.hasOwnProperty.call(window, "ActiveXObject") &&
      !window.ActiveXObject
    );
  },
  $a = function () {
    var a = navigator.userAgent.toLowerCase();
    return (
      0 > a.indexOf("edge/") &&
      (-1 < a.indexOf("chrome/") || -1 < a.indexOf("crios/"))
    );
  },
  ab = function () {
    var a = navigator.userAgent,
      b;
    if ((b = !!a && -1 != a.indexOf("CriOS")))
      (b = -1),
        (a = a.match(/CriOS\/(\d+)/)) && a[1] && (b = parseInt(a[1], 10) || -1),
        (b = 48 > b);
    return b;
  },
  bb = function () {
    var a = navigator.userAgent.toLowerCase();
    return (
      -1 < a.indexOf("safari/") &&
      0 > a.indexOf("chrome/") &&
      0 > a.indexOf("crios/") &&
      0 > a.indexOf("android")
    );
  },
  E = window.JSON,
  F = function (a) {
    this.ua = a || [];
    this.C = {};
  };
F.prototype.addEventListener = function (a, b) {
  if (!(0 <= B(this.ua, a))) throw "Unrecognized event type: " + a;
  if (!Ta(b)) throw "The listener for event '" + a + "' is not a function.";
  this.C[a] || (this.C[a] = []);
  0 > B(this.C[a], b) && this.C[a].push(b);
};
F.prototype.removeEventListener = function (a, b) {
  if (!(0 <= B(this.ua, a))) throw "Unrecognized event type: " + a;
  Ta(b) &&
    this.C[a] &&
    this.C[a].length &&
    ((b = B(this.C[a], b)), 0 <= b && this.C[a].splice(b, 1));
};
F.prototype.dispatchEvent = function (a) {
  var b = a.type;
  if (!(b && 0 <= B(this.ua, b)))
    throw "Failed to dispatch unrecognized event type: " + b;
  if (this.C[b] && this.C[b].length)
    for (var c = 0, d = this.C[b].length; c < d; c++) this.C[b][c](a);
};
E = {
  parse: function (a) {
    a = "[" + String(a) + "]";
    -1 === t ? (a = !1) : (Pa(), (a = (qa ? w : Oa)(a)));
    if (!1 === a || 1 !== a.length)
      throw new SyntaxError("JSON parsing failed.");
    return a[0];
  },
  stringify: function (a) {
    -1 !== t
      ? (Pa(), (a = u ? l.JSON.stringify.call(l.JSON, a) : y(a)))
      : (a = void 0);
    return a;
  },
};
var G = { Ob: {} },
  H = H || {};
H.L = function (a) {
  a = encodeURIComponent(a);
  var b = H.Ha();
  if (
    b &&
    (a = b.match("(^|;) ?" + a + "=([^;]*)(;|$)")) &&
    2 < a.length &&
    (a = a[2])
  )
    return decodeURIComponent(a);
};
H.lb = function (a) {
  var b;
  (a = H.L(a)) && (b = String(cb(a)));
  return b;
};
H.Ha = function () {
  return document.cookie;
};
H.Ib = function (a) {
  document.cookie = a;
};
G = G || {};
G.tb = function (a, b) {
  if (!0 === G.ma) a();
  else {
    var c = 2,
      d = function () {
        c--;
        0 == c && ((G.ma = !0), a());
      },
      e = function (a) {
        b(a);
      };
    switch (db()) {
      case "sessionStorage":
        G.ca = new eb();
        G.ca.J(d, e);
        break;
      case "inMemoryStorage":
        G.ca = new fb();
        G.ca.J(d, e);
        break;
      default:
        d = Error("Unsupported storage type: " + db());
        b(d);
        return;
    }
    switch (gb()) {
      case "localStorage":
        G.P = new hb();
        G.P.J(d, e);
        break;
      case "indexedDb":
        G.P = new ib();
        G.P.J(d, e);
        break;
      case "cookieStorage":
        G.P = new jb();
        G.P.J(d, e);
        break;
      default:
        (d = Error("Unsupported storage type: " + gb())), b(d);
    }
  }
};
G.Ja = function () {
  if (!G.ma) throw Error("Storages are not initialized yet!");
  return G.P;
};
G.rb = function () {
  if (!G.ma) throw Error("Storages are not initialized yet!");
  return G.ca;
};
var hb = function () {};
h = hb.prototype;
h.J = function (a, b) {
  Ya()
    ? ((this.V = window.localStorage), a())
    : b &&
      b(Error("localStorage is not available in the current environment."));
};
h.getItem = function (a, b) {
  b(this.V.getItem(a));
};
h.setItem = function (a, b, c) {
  void 0 === b || null === b ? this.V.removeItem(a) : this.V.setItem(a, b);
  c && c();
};
h.removeItem = function (a, b) {
  this.V.removeItem(a);
  b && b();
};
h.clear = function (a) {
  this.V.clear();
  a && a();
};
var ib = function () {};
h = ib.prototype;
h.J = function (a, b) {
  var c = this,
    d = window.indexedDB.open("oauth");
  d.onsuccess = function (b) {
    c.$ = b.target.result;
    a();
  };
  d.onupgradeneeded = function (a) {
    a.target.result.createObjectStore("oauth");
  };
  d.onerror = function (a) {
    a = a.target.errorCode;
    b && b(Error("IndexedDb initialization failed: " + a));
  };
};
h.getItem = function (a, b) {
  var c = this.$.transaction("oauth", "readwrite").objectStore("oauth").get(a);
  c.onsuccess = function () {
    b(c.result);
  };
};
h.setItem = function (a, b, c) {
  var d = this.$.transaction("oauth", "readwrite").objectStore("oauth");
  if (void 0 === b || null === b) d["delete"](a);
  else d.put(b, a);
  d.transaction.oncomplete = function () {
    c && c();
  };
};
h.removeItem = function (a, b) {
  var c = this.$.transaction("oauth", "readwrite").objectStore("oauth");
  c["delete"](a);
  c.transaction.oncomplete = function () {
    b && b();
  };
};
h.clear = function (a) {
  var b = this.$.transaction("oauth", "readwrite").objectStore("oauth");
  b.clear();
  b.transaction.oncomplete = function () {
    a && a();
  };
};
var fb = function () {};
h = fb.prototype;
h.J = function (a) {
  this.ba = {};
  a();
};
h.getItem = function (a, b) {
  b(this.ba[a] || null);
};
h.setItem = function (a, b, c) {
  this.ba[a] = b;
  c && c();
};
h.removeItem = function (a, b) {
  delete this.ba[a];
  b && b();
};
h.clear = function (a) {
  this.ba = {};
  a && a();
};
var eb = function () {};
h = eb.prototype;
h.J = function (a, b) {
  Ya()
    ? ((this.Z = window.sessionStorage), a())
    : b &&
      b(Error("sessionStorage is not available in the current environment."));
};
h.getItem = function (a, b) {
  b(this.Z.getItem(a));
};
h.setItem = function (a, b, c) {
  void 0 === b || null === b ? this.Z.removeItem(a) : this.Z.setItem(a, b);
  c && c();
};
h.removeItem = function (a, b) {
  this.Z.removeItem(a);
  b && b();
};
h.clear = function (a) {
  this.Z.clear();
  a && a();
};
var jb = function () {
  this.xb = I.Ta;
};
h = jb.prototype;
h.J = function (a, b) {
  navigator.cookieEnabled
    ? a()
    : b && b(Error("Cookies are not enabled in current environment."));
};
h.getItem = function (a, b) {
  for (var c = null, d = kb(a), e = 0; e < d.length; e++)
    if (d[e].key == a) {
      c = d[e].value;
      break;
    }
  b(c);
};
h.setItem = function (a, b, c) {
  var d = I.ja(a.split(I.i)[0]);
  if (d) {
    var e = lb(d);
    b = { key: a, value: b };
    for (var g = 0; g < e.length; g++)
      if (e[g].key == a) {
        e.splice(g, 1);
        break;
      }
    e.push(b);
    mb(this, d, e);
  }
  c && c();
};
h.removeItem = function (a, b) {
  for (var c = kb(a), d = 0; d < c.length; d++)
    if (c[d].key == a) {
      c.splice(d, 1);
      break;
    }
  (a = I.ja(a.split(I.i)[0])) && mb(this, a, c);
  b && b();
};
h.clear = function (a) {
  G.bb();
  a && a();
};
var kb = function (a) {
    return (a = I.ja(a.split(I.i)[0])) ? lb(a) : [];
  },
  lb = function (a) {
    a = H.L(a);
    return G.eb(a || null);
  },
  mb = function (a, b, c) {
    var d = G.gb(c);
    d.length > a.xb
      ? (c.splice(0, 1),
        0 < c.length
          ? mb(a, b, c)
          : A("Failed to write Cookie based cache due to the big size."))
      : G.Qa(b, d);
  };
G.cb = function (a) {
  try {
    return atob(a);
  } catch (b) {
    return a;
  }
};
G.fb = function (a) {
  try {
    return btoa(a);
  } catch (b) {
    return a;
  }
};
G.eb = function (a) {
  if (!a) return [];
  a = G.cb(a);
  try {
    return E.parse(a).items || [];
  } catch (b) {
    return A("Error while parsing items from cookie:" + b.message), [];
  }
};
G.gb = function (a) {
  return G.fb(E.stringify({ items: a }));
};
G.Qa = function (a, b) {
  var c = window.location.hostname,
    d = window.location.pathname;
  a =
    encodeURIComponent(a) + "=" + encodeURIComponent(b) + "; domain=" + c + ";";
  -1 != navigator.userAgent.toLowerCase().indexOf("msie") ||
    D() ||
    (a += " path=" + d + ";");
  "https:" == window.location.protocol && (a += " secure;");
  H.Ib(a);
};
G.bb = function () {
  var a = I.fa,
    b = H.Ha();
  if (b) {
    b = b
      .replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:\1|$)/g, "")
      .split(/\s*(?:=[^;]*)?;\s*/);
    for (var c = 0; c < b.length; c++) {
      var d = decodeURIComponent(b[c]);
      0 == d.indexOf(a) && G.Qa(d, "");
    }
  }
};
var J = function (a) {
  this.Na = a;
  F.call(this, ["storageValueChanged"]);
};
C(J, F);
var nb = function (a, b) {
  G.Ja().getItem(a.Na, b);
};
J.prototype.addListener = function (a) {
  this.addEventListener("storageValueChanged", a);
};
J.prototype.start = function () {
  var a = this;
  nb(this, function (b) {
    a.Bb = b;
    a.Oa = 0;
    a.na = window.setInterval(ob(a), 200);
  });
};
J.prototype.stop = function () {
  void 0 !== this.na && (clearInterval(this.na), (this.na = void 0));
};
var ob = function (a) {
    return function () {
      a.Oa++;
      nb(a, function (b) {
        b != a.Bb
          ? (a.dispatchEvent({
              type: "storageValueChanged",
              key: a.Na,
              newValue: b,
            }),
            a.stop())
          : 1500 <= a.Oa && a.stop();
      });
    };
  },
  cb = function (a) {
    var b = 0,
      c;
    if (a) {
      var d = 0;
      for (c = a.length; d < c; d++) {
        var e = a.charCodeAt(d);
        b = (b << 5) - b + e;
        b |= 0;
      }
    }
    return b;
  },
  K = function (a) {
    return !!a && 0 <= a.indexOf(I.i);
  },
  pb = function (a, b) {
    if (!a && !b) return !0;
    if (!a || !b) return !1;
    a = a.extraQueryParams;
    b = b.extraQueryParams;
    if (!a && !b) return !0;
    if (
      !a ||
      !b ||
      (Object.keys && Object.keys(a).length != Object.keys(b).length)
    )
      return !1;
    for (var c in a) if (a[c] !== b[c]) return !1;
    if (!Object.keys) for (c in b) if (a[c] !== b[c]) return !1;
    return !0;
  },
  I = I || {};
I.ia = "SID";
I.Ba = "SSID";
I.Sa = 100;
I.Da = "/oauth2/sessionstate/action/updateState";
I.va = "/oauth2/sessionstate/action/checkOrigin";
I.Aa = "/oauth2/permission/action/refresh";
I.ya = "/oauth2/permission/action/code";
I.ha = "/oauth2/permission/action/listSessions";
I.Ya = "/o/oauth2/revoke";
I.za =
  "response_type login_hint client_id origin scope ss_domain authuser hd include_granted_scopes nonce".split(
    " ",
  );
I.Va =
  "login_hint client_id origin scope ss_domain authuser hd include_granted_scopes".split(
    " ",
  );
I.Wa = "client_id origin scope ss_domain authuser hd".split(" ");
I.i = "::";
I.ga = "_ss_";
I.xa = "_tr_";
I.T = "oauth2_ss";
I.wa = "oauth2_cs";
I.Ca = "oauth2_tr";
I.Ua = "oauth2_is";
I.S = "oauth2_ar";
I.fa = "oauth2c_";
I.Ta = 1500;
I.Nb = function () {
  var a = { ga: 1, xa: 2, T: 3, wa: 4, Ca: 5, S: 6 },
    b;
  for (b in a)
    if (((a = I[b]), !a || 0 <= a.indexOf(I.i)))
      throw "Invalid value for 'oauth2.spi." + b + "'.";
};
I.Nb();
I.Xa = 512;
I.Za = function (a) {
  var b;
  (b = void 0 === a.hint) ||
    ((b = a.hint),
    (b =
      ("" === b
        ? !0
        : b
        ? "string" == typeof b ||
          ("object" == typeof b && b.constructor === String)
        : !1) && a.hint.length <= I.Xa));
  return !a.id && b;
};
I.pb = function () {
  return "https:" == window.location.protocol ? I.Ba : I.ia;
};
I.ja = function (a) {
  switch (a) {
    case I.S:
      return I.fa + I.S;
    case I.T:
      return I.fa + I.T;
    default:
      return null;
  }
};
var gb = function () {
    return ((bb() || $a()) && !Ya()) || (D() && !window.indexedDB)
      ? "cookieStorage"
      : D()
      ? "indexedDb"
      : "localStorage";
  },
  db = function () {
    return (!bb() && !$a()) || Ya() ? "sessionStorage" : "inMemoryStorage";
  };
H = H || {};
H.ea = "cookieValueChanged";
var qb = function (a, b) {
  this.Fa = a;
  this.ub = b;
  F.call(this, [H.ea]);
};
C(qb, F);
qb.prototype.L = function () {
  return H.L(this.Fa);
};
var L = function (a) {
  return H.lb(a.Fa);
};
qb.prototype.addListener = function (a) {
  this.addEventListener(H.ea, a);
};
var tb = function (a) {
    rb(a);
    a.aa = a.L();
    a.sa = window.setInterval(sb(a), a.ub);
    A("IDP Session Cookie monitor is started.");
  },
  rb = function (a) {
    void 0 !== a.sa &&
      (window.clearInterval(a.sa),
      (a.sa = void 0),
      A("IDP Session Cookie monitor is stoped."));
  },
  sb = function (a) {
    return function () {
      var b = a.L();
      if (a.aa != b) {
        var c = { type: H.ea, newHash: b && cb(b), oldHash: a.aa && cb(a.aa) };
        a.aa = b;
        a.dispatchEvent(c);
      }
    };
  },
  ub = function (a) {
    this.f = a;
    this.Ra = void 0;
  },
  vb = function (a, b, c) {
    var d = I.Ya,
      e = new XMLHttpRequest();
    e.onreadystatechange = function () {
      if (4 == e.readyState && 200 == e.status) {
        var a;
        e.responseText && (a = E.parse(e.responseText));
        c(a);
      } else
        4 == e.readyState && 0 == e.status
          ? c({ error: "network_error" })
          : 4 == e.readyState &&
            c({ error: "server_error", error_subtype: e.responseText });
    };
    e.open("POST", d, !0);
    e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var g = "xsrfToken=";
    a.Ra && (g += a.Ra);
    if (b)
      for (var f in b)
        f && b[f] && (g += "&" + f + "=" + encodeURIComponent(b[f]));
    A("Call " + d + " with postData: " + g);
    e.send(g);
  },
  M = function (a, b, c, d) {
    var e = new XMLHttpRequest();
    e.onreadystatechange = function () {
      if (4 == e.readyState && 200 == e.status) {
        var a;
        if (e.responseText && (a = E.parse(e.responseText))) {
          var b = a;
          if (b.error) {
            b.thrown_by = "server";
            try {
              b.error = b.error.toLowerCase();
            } catch (m) {}
          }
        }
        d(a);
      } else
        4 == e.readyState && 0 == e.status
          ? d({ error: "network_error" })
          : 4 == e.readyState &&
            d({ error: "server_error", error_subtype: e.responseText });
    };
    if ((b = Ua(b))) (a += 0 > a.indexOf("?") ? "?" : "&"), (a += b);
    e.open("GET", a, !0);
    e.setRequestHeader("X-Requested-With", "XmlHttpRequest");
    if (c)
      for (var g in c)
        if (c.hasOwnProperty(g)) {
          b = c[g];
          if (null === b || void 0 === b) b = "";
          e.setRequestHeader(g, b);
        }
    A("Call " + a + " with Get method.");
    e.send();
  },
  wb = function (a, b, c) {
    M(I.va, { origin: a.f, client_id: b }, null, c);
  },
  xb = function (a, b, c) {
    b && b.length
      ? M(I.Da, { login_hint: b.join(" "), origin: a.f }, null, c)
      : c({ activeHints: {} });
  },
  zb = function (a, b, c) {
    b.origin = a.f;
    b = yb(b, I.za);
    M(I.Aa, b, null, c);
  },
  Ab = function (a, b, c) {
    b.origin = a.f;
    b = yb(b, I.Va);
    M(I.ya, b, null, c);
  },
  Bb = function (a, b, c) {
    b.origin = a.f;
    b = yb(b, I.Wa);
    M(I.ha, b, null, c);
  },
  Cb = function (a, b, c) {
    vb(a, { token: b }, c);
  },
  yb = function (a, b) {
    for (var c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      null != a[e] && (c[e] = a[e]);
    }
    return c;
  };
G = G || {};
var Db = function () {};
Db.prototype.v = function () {
  return !1;
};
var Eb = {};
G.Db = function () {
  var a = new N();
  if (!a) throw "policy cannot be empty.";
  if (G.La("DEFAULT")) throw "Duplicate policyName [DEFAULT].";
  Eb.DEFAULT = a;
};
G.La = function (a) {
  for (var b in Eb) if (a == b) return !0;
  return !1;
};
G.Ia = function (a) {
  return a && G.La(a) ? a : "DEFAULT";
};
G.mb = function (a) {
  return Eb[G.Ia(a)];
};
G.v = function (a, b, c, d) {
  return G.mb(d).v(a, b, c);
};
G.Qb = function (a, b, c, d) {
  if (!G.v(a, b, c, d)) throw "permission_error";
};
var Fb = function () {};
C(Fb, Db);
Fb.prototype.v = function (a, b, c) {
  a = c ? this.ka(a) : this.la(a);
  return 0 <= B(a, b);
};
Fb.prototype.la = function (a) {
  var b = [];
  if (
    a &&
    (b.push(a),
    "http://" == a.substring(0, 7) || "https://" == a.substring(0, 8))
  ) {
    var c = document.createElement("a");
    c.href = a;
    a != c.protocol + "//" + c.hostname &&
      b.push(c.protocol + "//" + c.hostname);
    "https:" == c.protocol && b.push("http://" + c.hostname);
  }
  return b;
};
Fb.prototype.ka = function (a) {
  var b = [];
  if (a) {
    b.push(a);
    var c = document.createElement("a");
    c.href = a;
    if ("http:" == c.protocol || "https:" == c.protocol)
      for (a = c.hostname.split("."); 1 < a.length; )
        b.push(c.protocol + "//" + a.join(".")),
          "https:" == c.protocol && b.push("http://" + a.join(".")),
          a.shift();
  }
  return b;
};
var N = function () {};
C(N, Db);
N.prototype.v = function (a, b, c) {
  a = c ? this.ka(a) : this.la(a);
  return 0 <= B(a, b);
};
N.prototype.la = function (a) {
  var b = [];
  if (a && (b.push(a), "https://" == a.substring(0, 8))) {
    var c = document.createElement("a");
    c.href = a;
    ("" != c.port && 0 != c.port && 443 != c.port) ||
      b.push("http://" + c.hostname);
  }
  return b;
};
N.prototype.ka = function (a) {
  var b = [];
  if (a) {
    var c = document.createElement("a");
    c.href = a;
    if (
      ("https:" == c.protocol &&
        ("" == c.port || 0 == c.port || 443 == c.port)) ||
      ("http:" == c.protocol && ("" == c.port || 0 == c.port || 80 == c.port))
    )
      for (a = c.hostname.split("."); 1 < a.length; )
        b.push(c.protocol + "//" + a.join(".")),
          "https:" == c.protocol && b.push("http://" + a.join(".")),
          a.shift();
    else b.push(a);
  }
  return b;
};
G.Db();
var O = function () {};
O.prototype.oa = function () {
  return !0;
};
var P = function (a) {
  return a.oa() ? G.rb() : G.Ja();
};
O.prototype.h = function () {
  throw Error("unimplemented abstract method");
};
O.prototype.O = function () {
  throw Error("unimplemented abstract method");
};
O.prototype.o = function () {
  throw Error("unimplemented abstract method");
};
O.prototype.s = function () {
  throw Error("unimplemented abstract method");
};
var Q = function () {};
C(Q, O);
Q.prototype.o = function (a, b, c) {
  var d = this,
    e = this.h(a);
  P(this).getItem(e, function (a) {
    if (a)
      try {
        var f = E.parse(a);
        if (f.cookieHash != b) {
          P(d).removeItem(e, function () {
            c(void 0);
          });
          return;
        }
        var g = f && f.cachedValue;
      } catch (m) {}
    c(g);
  });
};
Q.prototype.s = function (a, b, c, d) {
  a = this.h(a);
  void 0 === b || null === b
    ? P(this).removeItem(a, d)
    : ((b = E.stringify({ cookieHash: c, cachedValue: b })),
      P(this).setItem(a, b, d));
};
var R = function () {};
C(R, O);
R.prototype.o = function (a, b, c) {
  P(this).getItem(this.h(a), function (a) {
    if (a)
      try {
        var b = E.parse(a);
        var d = b && b.cachedValue;
      } catch (f) {}
    c(d);
  });
};
R.prototype.s = function (a, b, c, d) {
  a = this.h(a);
  void 0 === b || null === b
    ? P(this).removeItem(a, d)
    : ((b = E.stringify({ cachedValue: b })), P(this).setItem(a, b, d));
};
var S = function () {};
C(S, R);
S.prototype.oa = function () {
  return !1;
};
S.prototype.h = function (a) {
  return [I.S, a.origin, a.clientId, a.id].join(I.i);
};
S.prototype.O = function (a) {
  var b = {};
  a &&
    ((a = a.split(I.i)),
    4 == a.length && ((b.origin = a[1]), (b.clientId = a[2]), (b.id = a[3])));
  return b;
};
var Gb = function () {};
C(Gb, Q);
Gb.prototype.h = function (a) {
  return [I.wa, a.origin, a.clientId].join(I.i);
};
Gb.prototype.O = function (a) {
  a = a.split(I.i);
  var b = {};
  3 == a.length && ((b.origin = a[1]), (b.clientId = a[2]));
  return b;
};
var Hb = function () {};
C(Hb, Q);
Hb.prototype.h = function (a) {
  return [I.Ua, a.origin, a.clientId].join(I.i);
};
Hb.prototype.o = function (a, b, c) {
  var d = this;
  Q.prototype.o.call(this, a, b, function (b) {
    b && b.expires_at
      ? 6e4 > b.expires_at - new Date().getTime()
        ? P(d).removeItem(d.h(a), c)
        : Xa(b.scope, a.scope) && Xa(a.scope, b.scope)
        ? ((b.expires_in = Math.floor(
            (b.expires_at - new Date().getTime()) / 1e3,
          )),
          c && c(b))
        : P(d).removeItem(d.h(a), c)
      : c && c(void 0);
  });
};
Hb.prototype.s = function (a, b, c, d) {
  var e;
  b && b.expires_at && 18e4 < b.expires_at - new Date().getTime() && (e = b);
  Q.prototype.s.call(this, a, e, c, d);
};
var T = function () {};
C(T, R);
T.prototype.oa = function () {
  return !1;
};
T.prototype.h = function (a) {
  return [
    I.T,
    a.domain,
    a.crossSubDomains ? "1" : "0",
    G.Ia(a.policy),
    a.id || I.ga,
  ].join(I.i);
};
T.prototype.O = function (a) {
  a = a.split(I.i);
  var b = {};
  5 == a.length &&
    ((b.domain = a[1]),
    (b.crossSubDomains = "1" == a[2]),
    (b.policy = a[3]),
    (b.id = a[4]));
  "DEFAULT" == b.policy && delete b.policy;
  b.id == I.ga && delete b.id;
  return b;
};
var Ib = function (a) {
  this.Ab = a || I.Ca;
};
C(Ib, Q);
Ib.prototype.h = function (a) {
  return [this.Ab, a.origin, a.clientId, a.id || I.xa].join(I.i);
};
Ib.prototype.o = function (a, b, c) {
  var d = this;
  Q.prototype.o.call(this, a, b, function (b) {
    b && b.R && b.R.expires_at
      ? a.loginHint != b.R.login_hint
        ? P(d).removeItem(d.h(a), c)
        : 6e4 > b.R.expires_at - new Date().getTime()
        ? P(d).removeItem(d.h(a), c)
        : Xa(b.R.scope, a.scope)
        ? Xa(b.responseType, a.responseType)
          ? ((b = b.R),
            (b.expires_in = Math.floor(
              (b.expires_at - new Date().getTime()) / 1e3,
            )),
            c && c(b))
          : P(d).removeItem(d.h(a), c)
        : P(d).removeItem(d.h(a), c)
      : c && c(void 0);
  });
};
Ib.prototype.s = function (a, b, c, d) {
  var e;
  b &&
    b.expires_at &&
    18e4 < b.expires_at - new Date().getTime() &&
    (e = { R: b, responseType: a.responseType });
  Q.prototype.s.call(this, a, e, c, d);
};
var Jb = function (a, b) {
    this.f = a;
    this.qa = b;
    this.Y = {};
    this.X = {};
  },
  Kb = function (a, b) {
    if (!b) throw "message object cannot be null.";
    b.rpcToken = a.qa;
    b = E.stringify(b);
    A("IDP IFrame sends message: " + b);
    window.parent.postMessage(b, a.f);
  },
  U = function (a, b, c) {
    b && Kb(a, { id: b, result: c });
  };
Jb.prototype.Cb = function (a) {
  if (a.source == window.parent && a.origin == this.f) {
    A("IDP Session State IFrame receive message:" + a.data);
    try {
      var b = E.parse(a.data);
    } catch (c) {
      return;
    }
    (b.rpcToken || this.qa) && b.rpcToken != this.qa
      ? A("RPC token mismatch.")
      : b && b.method && this.Y[b.method]
      ? ((a = this.Y[b.method]),
        a.K && !b.id
          ? A("Bad request.")
          : a.D && !a.D(b)
          ? (A("Bad request."), Kb(this, { id: b.id, error: "bad_request" }))
          : a.A(b))
      : A("Bad request.");
  }
};
var V = function (a, b) {
    if (b && b.type && a.X[b.type]) {
      var c = a.X[b.type].filter;
      (c && !c(b)) || Kb(a, { method: "fireIdpEvent", params: b });
    } else A("Invalid event type.");
  },
  Lb = function (a, b) {
    a.Y = {};
    a.X = {};
    if (b) {
      if (b.w)
        for (var c = 0; c < b.w.length; c++) {
          var d = b.w[c];
          if (!d.method || !d.A)
            throw "Error in RPC policy: method or handler is empty.";
          if (a.Y[d.method])
            throw (
              "Error in RPC policy: duplicate entry for RPC '" + d.method + "'."
            );
          var e = d.method;
          a.Y[e] = { A: d.A, K: d.K, D: d.D, method: e };
        }
      if (b.I)
        for (c = 0; c < b.I.length; c++) {
          d = b.I[c];
          if (!d.type) throw "Error in Event policy: type is empty.";
          if (a.X[d.type])
            throw (
              "Error in Event policy: duplicate entry for type '" +
              d.type +
              "'."
            );
          e = d.type;
          a.X[e] = { filter: d.filter, type: e };
        }
    }
  },
  Mb = function (a, b, c, d) {
    V(a, {
      type: "sessionStateChanged",
      clientId: b,
      user: c,
      sessionState: d,
    });
  },
  Nb = function (a) {
    var b = new T(),
      c = I.T + I.i;
    return function (d) {
      if (d.key && 0 === d.key.indexOf(c)) {
        var e = b.O(d.key);
        if (G.v(a.f, e.domain, e.crossSubDomains, e.policy)) {
          var g;
          if (d.newValue)
            try {
              var f = E.parse(d.newValue);
              f && (g = f.cachedValue);
            } catch (n) {
              return;
            }
          V(a, {
            type: "sessionSelectorChanged",
            newValue: g,
            crossSubDomains: e.crossSubDomains,
            domain: e.domain,
            policy: e.policy,
            id: e.id,
          });
        }
      }
    };
  },
  Ob = function (a) {
    var b = new S(),
      c = [I.S, a.f].join(I.i) + I.i;
    return function (d) {
      if (!d.key && Za()) {
        var e = null,
          g = [];
        for (d = 0; d < window.localStorage.length; d++) {
          var f = window.localStorage.key(d);
          if (0 === f.indexOf(c))
            if (e) g.push(f);
            else {
              var n = window.localStorage.getItem(f);
              g.push(f);
              if (n) {
                try {
                  var m = E.parse(n);
                } catch (v) {
                  continue;
                }
                m &&
                  m.cachedValue &&
                  ((e = b.O(f)),
                  (e = {
                    type: "authResult",
                    clientId: e.clientId,
                    id: e.id,
                    authResult: m.cachedValue,
                  }));
              }
            }
        }
        for (d = 0; d < g.length; d++) window.localStorage.removeItem(g[d]);
        (m = e) && V(a, m);
      } else if (d.key && 0 === d.key.indexOf(c) && d.newValue) {
        try {
          g = E.parse(d.newValue);
        } catch (v) {
          return;
        }
        g &&
          g.cachedValue &&
          ((m = b.O(d.key)),
          (m = {
            type: "authResult",
            clientId: m.clientId,
            id: m.id,
            authResult: g.cachedValue,
          }),
          V(a, m));
      }
    };
  },
  Pb = function (a, b) {
    this.f = a;
    this.m = b;
    this.Ea = new Gb();
    this.Pa = new T();
    this.ta = new Ib();
    this.Ka = new Hb();
  },
  Qb = function (a, b, c, d, e) {
    a.Ea.s(
      { origin: a.f, clientId: b },
      { user: c.G, session: c.G ? c.M : void 0 },
      d,
      e,
    );
  },
  Rb = function (a, b, c) {
    a.Ea.o({ origin: a.f, clientId: b }, L(a.m), c);
  },
  Sb = function (a, b, c, d, e, g, f) {
    a.ta.o(
      {
        loginHint: b,
        origin: a.f,
        clientId: c,
        responseType: d,
        scope: e,
        id: g,
      },
      L(a.m),
      f,
    );
  },
  Tb = function (a, b, c, d, e, g, f) {
    a.ta.s({ origin: a.f, clientId: c, responseType: d, id: g }, e, b, f);
  },
  Ub = function (a, b, c) {
    var d = a.ta;
    a = { origin: a.f, clientId: b };
    P(d).removeItem(d.h(a), c);
  },
  Vb = function (a, b, c, d, e, g) {
    if (!a.v(b, c, e))
      throw (
        "Permission denied for '" +
        a.f +
        "' to read session selector for domain '" +
        b +
        "'."
      );
    a.Pa.o(
      { domain: b, crossSubDomains: c, policy: e, id: d },
      void 0,
      function (a) {
        g && g(a);
      },
    );
  },
  Wb = function (a, b, c, d, e, g, f) {
    if (!a.v(b, c, g))
      throw (
        "Permission denied for '" +
        a.f +
        "' to write session selector for domain '" +
        b +
        "'."
      );
    a.Pa.s({ domain: b, crossSubDomains: c, policy: g, id: e }, d, void 0, f);
  };
Pb.prototype.v = function (a, b, c) {
  return G.v(this.f, a, b, c);
};
var Xb = function (a, b, c, d) {
    a.Ka.o({ origin: a.f, clientId: b, scope: c }, L(a.m), d);
  },
  Yb = function (a, b, c, d, e) {
    a.Ka.s({ origin: a.f, clientId: c }, d, b, e);
  },
  Zb = function (a, b, c) {
    this.N = a;
    this.b = b;
    this.g = c;
  },
  $b = function (a, b, c) {
    a.G
      ? c && void 0 !== c[a.G]
        ? ((c = c[a.G]),
          pb(a.M, c) ||
            ((a.M = c),
            Qb(a.g, a.N, a, b, function () {
              Mb(a.b, a.N, a.G, a.M);
            })))
        : a.M &&
          ((a.M = void 0),
          Qb(a.g, a.N, a, b, function () {
            Mb(a.b, a.N, a.G, void 0);
          }))
      : b && Mb(a.b, a.N, a.G, void 0);
  },
  bc = function (a, b, c, d) {
    this.m = a;
    this.b = b;
    this.F = c;
    this.g = d;
    this.W = void 0;
    this.u = {};
    this.ra = [];
    var e = this;
    this.m.addListener(function (a) {
      ac(e, a);
    });
  },
  cc = function (a) {
    var b = [],
      c;
    for (c in a.u) {
      var d = a.u[c].G;
      d && b.push(d);
    }
    return b;
  },
  ac = function (a, b) {
    if (b.newHash)
      xb(a.F, cc(a), function (c) {
        for (var d in a.u) $b(a.u[d], b.newHash, c && c.activeHints);
      });
    else for (var c in a.u) $b(a.u[c], b.newHash, void 0);
  },
  dc = function (a, b, c, d, e) {
    var g = a.u[b];
    g || ((g = new Zb(b, a.b, a.g)), (a.u[b] = g));
    a = g;
    b = c.login_hint;
    c = c.session_state;
    a.G != b
      ? ((a.G = b), (a.M = b ? c : void 0), Qb(a.g, a.N, a, d, e))
      : e && e();
  },
  ec = function (a, b, c) {
    var d = a.u[b];
    d
      ? c(!0)
      : Rb(a.g, b, function (e) {
          e
            ? ((d = new Zb(b, a.b, a.g)),
              (a.u[b] = d),
              (d.G = e.user),
              (d.M = e.session),
              c(!0))
            : wb(a.F, b, function (d) {
                d && d.valid
                  ? ((d = new Zb(b, a.b, a.g)),
                    (a.u[b] = d),
                    Qb(a.g, b, d, L(a.m), function () {
                      c(!0);
                    }))
                  : c(!1);
              });
        });
  },
  fc = function (a, b) {
    D() || ab() ? a.ra.push(b) : Wa(Za() ? document : window, "storage", b);
  },
  W = function (a, b) {
    this.f = a;
    this.b = new Jb(a, b);
    this.m = new qb(I.ia, I.Sa);
    this.F = new ub(a);
    this.g = new Pb(a, this.m);
    this.H = new bc(this.m, this.b, this.F, this.g);
  };
h = W.prototype;
h.start = function () {
  var a = this,
    b = function () {
      a.b.Cb.apply(a.b, arguments);
    },
    c = function () {
      V(a.b, { type: "idpReady" });
      A("Initialize IDP IFrame successfully.");
    },
    d = function (c) {
      var d = window;
      if (d.removeEventListener) d.removeEventListener("message", b, !1);
      else if (d.detachEvent) d.detachEvent("onmessage", b);
      else throw "Remove event handler for message failed.";
      rb(a.m);
      V(a.b, { type: "idpError", error: c.message });
    };
  try {
    Lb(this.b, this.Ga()),
      Wa(window, "message", b),
      fc(this.H, Nb(this.b)),
      fc(this.H, Ob(this.b)),
      tb(this.m),
      G.tb(c, d);
  } catch (e) {
    d(e);
  }
};
h.yb = function (a) {
  var b = this;
  ec(this.H, (a.params || {}).clientId, function (c) {
    U(b.b, a.id, c);
  });
};
h.kb = function (a) {
  var b = a.params || {},
    c = this,
    d = function (b) {
      U(c.b, a.id, b);
    },
    e = b.clientId,
    g = b.loginHint,
    f = b.request,
    n = b.sessionSelector;
  f.client_id = e;
  f.login_hint = g;
  f.ss_domain = n.domain;
  var m = L(this.m);
  if (m) {
    var v = function (a) {
      a && !a.error && a.login_hint
        ? ((a.first_issued_at = new Date().getTime()),
          (a.expires_at = a.first_issued_at + 1e3 * a.expires_in),
          a.session_state || (a.session_state = {}),
          a.scope || (a.scope = f.scope),
          b.skipCache
            ? dc(c.H, e, a, m, function () {
                d(a);
              })
            : Tb(c.g, m, e, f.response_type, a, b.id, function () {
                dc(c.H, e, a, m, function () {
                  d(a);
                });
              }))
        : ((a = a || {}), d(a));
    };
    b.forceRefresh
      ? zb(this.F, f, v)
      : Sb(this.g, g, e, f.response_type, f.scope, b.id, function (a) {
          a && 18e4 < a.expires_at - new Date().getTime()
            ? dc(c.H, e, a, m, function () {
                d(a);
              })
            : zb(c.F, f, v);
        });
  } else U(c.b, a.id, { error: "user_logged_out" });
};
h.nb = function (a) {
  var b = this,
    c = function (c) {
      U(b.b, a.id, c);
    };
  if (L(this.m)) {
    var d = a.params || {},
      e = d.request,
      g = d.sessionSelector;
    e.client_id = d.clientId;
    e.login_hint = d.loginHint;
    e.ss_domain = g.domain;
    Ab(this.F, e, c);
  } else c({ error: "user_logged_out" });
};
h.Eb = function (a) {
  var b = a.params || {},
    c = b.clientId,
    d = this;
  Cb(this.F, b.token, function (b) {
    Ub(d.g, c, function () {
      U(d.b, a.id, b);
    });
  });
};
h.Lb = function (a) {
  if (D() || ab()) {
    var b = a.params || {},
      c = new S().h({ clientId: b.clientId, id: b.id, origin: b.origin });
    b = this.H;
    if (D() || ab()) {
      b.W && b.W.stop();
      b.W = new J(c);
      for (c = 0; c < b.ra.length; c++) b.W.addListener(b.ra[c]);
      b.W.start();
    }
  }
  U(this.b, a.id, !0);
};
h.jb = function (a) {
  var b = this,
    c = a.params || {};
  Vb(this.g, c.domain, c.crossSubDomains, c.id, c.policy, function (c) {
    U(b.b, a.id, c);
  });
};
h.Jb = function (a) {
  var b = a.params || {},
    c = b.hint,
    d = !!b.disabled,
    e = b.domain,
    g = b.crossSubDomains,
    f = b.id,
    n = b.policy,
    m = this;
  if (c || d) var v = { hint: c, disabled: d };
  Wb(this.g, e, g, v, f, n, function () {
    V(m.b, {
      type: "sessionSelectorChanged",
      newValue: v,
      domain: e,
      crossSubDomains: g,
      id: f,
      policy: n,
    });
    U(m.b, a.id, !0);
  });
};
h.vb = function (a) {
  var b = a.params || {},
    c = this,
    d = function (b) {
      U(c.b, a.id, b);
    },
    e = b.clientId,
    g = b.request,
    f = b.sessionSelector;
  g.client_id = e;
  g.response_type = "id_token";
  g.ss_domain = f.domain;
  var n = L(this.m);
  if (n) {
    var m = function (a) {
      a && !a.error
        ? ((a.first_issued_at = new Date().getTime()),
          (a.expires_at = a.first_issued_at + 1e3 * a.expires_in),
          (a.scope = g.scope),
          Yb(c.g, n, e, a, function () {
            d(a);
          }))
        : ((a = a || { error: "No response returned from Server." }), d(a));
    };
    b.forceRefresh
      ? Bb(this.F, g, m)
      : Xb(this.g, e, g.scope, function (a) {
          a ? d(a) : Bb(c.F, g, m);
        });
  } else d({ scope: g.scope, sessions: [] });
};
h.zb = function (a) {
  a = (a && a.params) || {};
  return a.clientId && !K(a.clientId);
};
h.sb = function (a) {
  var b = (a && a.params) || {};
  a = b.loginHint;
  var c = !K(b.id),
    d = b.clientId && !K(b.clientId),
    e = !!b.request,
    g = e && b.request.scope;
  (b =
    (e = e && b.request.response_type) &&
    0 <= b.request.response_type.indexOf("code")) &&
    A("Bad request: 'code' response_type is not supported.");
  return a && c && d && g && e && !b;
};
h.ob = function (a) {
  a = (a && a.params) || {};
  var b = !K(a.id),
    c = a.clientId && !K(a.clientId),
    d = !!a.request && a.request.scope;
  return a.loginHint && b && c && d;
};
h.qb = function (a) {
  a = (a && a.params) || {};
  var b = a.domain && !K(a.domain),
    c = !K(a.policy);
  return (
    !K(a.id) && b && c && this.g.v(a.domain, !!a.crossSubDomains, a.policy)
  );
};
h.Kb = function (a) {
  a = (a && a.params) || {};
  var b = a.domain && !K(a.domain),
    c = !K(a.policy);
  return (
    !K(a.id) &&
    b &&
    c &&
    this.g.v(a.domain, !!a.crossSubDomains, a.policy) &&
    I.Za(a)
  );
};
h.wb = function (a) {
  a = (a && a.params) || {};
  var b = a.clientId && !K(a.clientId),
    c = !!a.request && a.request.scope;
  return !K(a.id) && b && c;
};
h.Fb = function (a) {
  a = (a && a.params) || {};
  var b = !!a.token,
    c = a.clientId && !K(a.clientId);
  return !K(a.id) && b && c;
};
h.Mb = function (a) {
  a = (a && a.params) || {};
  var b = a.origin && !K(a.origin),
    c = a.id && !K(a.id);
  return a.clientId && !K(a.clientId) && b && c;
};
h.Hb = function (a) {
  var b;
  if ((b = a.clientId)) (a = a.clientId), (b = !(!a || !this.H.u[a]));
  return b;
};
h.$a = function (a) {
  var b;
  if ((b = a.clientId)) (b = a.clientId), (b = !(!b || !this.H.u[b]));
  return b && a.id && a.authResult;
};
h.Gb = function (a) {
  return a.domain && this.g.v(a.domain, a.crossSubDomains, a.policy);
};
var X = function (a, b) {
  return function () {
    return b.apply(a, arguments);
  };
};
W.prototype.Ga = function () {
  var a = { w: [], I: [] };
  gc(this, a);
  return a;
};
var gc = function (a, b) {
  b.w.push({ method: "monitorClient", A: X(a, a.yb), K: !1, D: X(a, a.zb) });
  b.w.push({ method: "getTokenResponse", A: X(a, a.kb), K: !0, D: X(a, a.sb) });
  b.w.push({ method: "getOnlineCode", A: X(a, a.nb), K: !0, D: X(a, a.ob) });
  b.w.push({
    method: "getSessionSelector",
    A: X(a, a.jb),
    K: !0,
    D: X(a, a.qb),
  });
  b.w.push({
    method: "setSessionSelector",
    A: X(a, a.Jb),
    K: !1,
    D: X(a, a.Kb),
  });
  b.w.push({ method: "listIdpSessions", A: X(a, a.vb), K: !0, D: X(a, a.wb) });
  b.w.push({ method: "revoke", A: X(a, a.Eb), D: X(a, a.Fb) });
  b.w.push({ method: "startPolling", A: X(a, a.Lb), D: X(a, a.Mb) });
  b.I.push({ type: "idpReady" });
  b.I.push({ type: "idpError" });
  b.I.push({ type: "sessionStateChanged", filter: X(a, a.Hb) });
  b.I.push({ type: "sessionSelectorChanged", filter: X(a, a.Gb) });
  b.I.push({ type: "authResult", filter: X(a, a.$a) });
};
var hc = "client_id origin ss_domain scope privileged authuser".split(" ");
I.za =
  "response_type login_hint client_id origin scope ss_domain authuser hd include_granted_scopes nonce spec_compliant".split(
    " ",
  );
var jc = function (a, b, c) {
  b.origin = a.f;
  b.privileged = !0;
  b = yb(b, hc);
  M(I.ha, b, ic(a.f), function (a) {
    c(a);
  });
};
function ic(a) {
  var b = {},
    c = H.L(I.pb());
  if (c) {
    if (!c) throw Error("Session cookie value cannot be empty.");
    c = new q(new r(), ma(c));
    a = ma(a);
    c.reset();
    c.update(a);
    a = c.digest();
    c = ia(a);
    la(
      "array" == c || ("object" == c && "number" == typeof a.length),
      "encodeByteArray takes an array as a parameter",
    );
    if (!na)
      for (na = {}, c = 0; 65 > c; c++)
        na[c] =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
            c,
          );
    c = na;
    for (var d = [], e = 0; e < a.length; e += 3) {
      var g = a[e],
        f = e + 1 < a.length,
        n = f ? a[e + 1] : 0,
        m = e + 2 < a.length,
        v = m ? a[e + 2] : 0,
        kc = g >> 2;
      g = ((g & 3) << 4) | (n >> 4);
      n = ((n & 15) << 2) | (v >> 6);
      v &= 63;
      m || ((v = 64), f || (n = 64));
      d.push(c[kc], c[g], c[n], c[v]);
    }
    b["X-Csrf-Token"] = d.join("");
  }
  return b;
}
var lc = function () {};
C(lc, Q);
lc.prototype.h = function (a) {
  a = void 0 === a ? {} : a;
  return [
    "gsi_gs",
    void 0 === a.origin ? null : a.origin,
    void 0 === a.clientId ? null : a.clientId,
  ].join(I.i);
};
lc.prototype.o = function (a, b, c) {
  var d = this;
  c = void 0 === c ? function () {} : c;
  Q.prototype.o.call(this, a, b, function (b) {
    b
      ? !b.expires_at || b.expires_at <= new Date().getTime()
        ? P(d).removeItem(d.h(a), function () {
            return c(null);
          })
        : ((b.expires_at = void 0), c(b))
      : c(null);
  });
};
lc.prototype.s = function (a, b, c, d) {
  b && (b.expires_at = new Date().getTime() + 864e5);
  Q.prototype.s.call(this, a, b, c, d);
};
W.prototype.hb = function (a) {
  var b = this;
  a = void 0 === a ? {} : a;
  var c = a.id,
    d = void 0 === a.params ? {} : a.params,
    e = function (a) {
      a && a.sessions
        ? ((a = mc(g, a.sessions)), U(b.b, c, a))
        : U(b.b, c, null);
    },
    g = d.loginHint;
  delete d.loginHint;
  var f = L(this.m);
  if (f) {
    a = d.clientId;
    var n = d.request;
    d = d.sessionSelector;
    n.client_id = a;
    n.ss_domain = d.domain;
    var m = new lc(),
      v = { clientId: a, origin: this.f };
    m.o(v, f, function (a) {
      a
        ? e(a)
        : jc(b.F, n, function (a) {
            !a || a.error
              ? e(null)
              : m.s(v, a, f, function () {
                  e(a);
                });
          });
    });
  } else e(null);
};
function mc(a, b) {
  if (!b.length) return null;
  var c = a.toLowerCase();
  b = ha(b);
  for (var d = b.next(); !d.done; d = b.next())
    if (((d = d.value), d.login_hint)) {
      if (a === d.obfuscatedGaiaId) return d.login_hint;
      if (d.emails && d.emails.length)
        for (var e = ha(d.emails), g = e.next(); !g.done; g = e.next())
          if (c === g.value.toLowerCase()) return d.login_hint;
    }
  return null;
}
W.prototype.ib = function (a) {
  a = void 0 === a ? {} : a;
  a = void 0 === a.params ? {} : a.params;
  var b = !!a.clientId && !K(a.clientId),
    c = !!a.request,
    d = !!a.sessionSelector;
  return !!a.loginHint && b && c && d;
};
W.prototype.Ga = function () {
  var a = { w: [], I: [] };
  gc(this, a);
  a.w.push({
    method: "gsi:fetchLoginHint",
    A: X(this, this.hb),
    K: !0,
    D: X(this, this.ib),
  });
  return a;
};
I.ia = "APISID";
I.Ba = "SAPISID";
I.Da = "/o/oauth2/iframerpc?action=sessionState";
I.va = "/o/oauth2/iframerpc?action=checkOrigin";
I.Aa = "/o/oauth2/iframerpc?action=issueToken";
I.ya = "/o/oauth2/iframerpc?action=issueOnlineCode";
I.ha = "/o/oauth2/iframerpc?action=listSessions";
var nc = function () {
    var a = Va("origin");
    if (!a) throw "Failed to get parent origin from URL hash!";
    var b = Va("rpcToken");
    if (!b) throw "Failed to get rpcToken from URL hash!";
    var c = Va("debug");
    Sa = "0" != c && !!c;
    new W(a, b).start();
  },
  oc = ["lso", "startIdpIFrame"],
  Y = l;
oc[0] in Y ||
  "undefined" == typeof Y.execScript ||
  Y.execScript("var " + oc[0]);
for (var Z; oc.length && (Z = oc.shift()); )
  oc.length || void 0 === nc
    ? (Y = Y[Z] && Y[Z] !== Object.prototype[Z] ? Y[Z] : (Y[Z] = {}))
    : (Y[Z] = nc);
