/*1530213429,,JIT Construction: v4056814,en_US*/

/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
try {
  (function () {
    var a =
      "https://developers.facebook.com/docs/accountkit/integratingweb#configureloginhtml";
    if (!window.AccountKit || !window.AccountKit.doNotLinkToSDKDirectly)
      throw new Error(
        "Please ensure the AccountKit SDK is hotlinked directly. See " + a,
      );
  })();
  (function (window, fb_fif_window) {
    var apply = Function.prototype.apply;
    function bindContext(fn, thisArg) {
      return function _sdkBound() {
        return apply.call(fn, thisArg, arguments);
      };
    }
    var global = {
      __type: "JS_SDK_SANDBOX",
      window: window,
      document: window.document,
    };
    var sandboxWhitelist = [
      "setTimeout",
      "setInterval",
      "clearTimeout",
      "clearInterval",
    ];
    for (var i = 0; i < sandboxWhitelist.length; i++) {
      global[sandboxWhitelist[i]] = bindContext(
        window[sandboxWhitelist[i]],
        window,
      );
    }
    (function () {
      var self = window;
      var __DEV__ = 0;
      function emptyFunction() {}
      var __transform_includes = {};
      var __annotator, __bodyWrapper;
      var __w, __t;
      var undefined;
      var __p;
      with (this) {
        (function () {
          var a = {},
            b = function (a, b) {
              if (!a && !b) return null;
              var c = {};
              typeof a !== "undefined" && (c.type = a);
              typeof b !== "undefined" && (c.signature = b);
              return c;
            },
            c = function (a, c) {
              return b(
                a && /^[A-Z]/.test(a) ? a : undefined,
                c && ((c.params && c.params.length) || c.returns)
                  ? "function(" +
                      (c.params
                        ? c.params
                            .map(function (a) {
                              return /\?/.test(a)
                                ? "?" + a.replace("?", "")
                                : a;
                            })
                            .join(",")
                        : "") +
                      ")" +
                      (c.returns ? ":" + c.returns : "")
                  : undefined,
              );
            },
            d = function (a, b, c) {
              return a;
            },
            e = function (a, b, d) {
              "sourcemeta" in __transform_includes && (a.__SMmeta = b);
              if ("typechecks" in __transform_includes) {
                b = c(b ? b.name : undefined, d);
                b && __w(a, b);
              }
              return a;
            },
            f = function (a, b, c) {
              return c.apply(a, b);
            },
            g = function (a, b, c, d) {
              d && d.params && __t.apply(a, d.params);
              c = c.apply(a, b);
              d && d.returns && __t([c, d.returns]);
              return c;
            },
            h = function (b, c, d, e, f) {
              if (f) {
                f.callId ||
                  (f.callId =
                    f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
                e = f.callId;
                a[e] = (a[e] || 0) + 1;
              }
              return d.apply(b, c);
            };
          typeof __transform_includes === "undefined"
            ? ((__annotator = d), (__bodyWrapper = f))
            : ((__annotator = e),
              "codeusage" in __transform_includes
                ? ((__annotator = d),
                  (__bodyWrapper = h),
                  (__bodyWrapper.getCodeUsage = function () {
                    return a;
                  }),
                  (__bodyWrapper.clearCodeUsage = function () {
                    a = {};
                  }))
                : "typechecks" in __transform_includes
                ? (__bodyWrapper = g)
                : (__bodyWrapper = f));
        })();
        (__t = function (a) {
          return a[0];
        }),
          (__w = function (a) {
            return a;
          });
        var require, __d;
        (function (a) {
          var b = {},
            c = {},
            d = [
              "global",
              "require",
              "requireDynamic",
              "requireLazy",
              "module",
              "exports",
            ];
          require = function (d, e) {
            if (Object.prototype.hasOwnProperty.call(c, d)) return c[d];
            if (!Object.prototype.hasOwnProperty.call(b, d)) {
              if (e) return null;
              throw new Error("Module " + d + " has not been defined");
            }
            e = b[d];
            var f = e.deps,
              g = e.factory.length,
              h,
              i = [];
            for (var j = 0; j < g; j++) {
              switch (f[j]) {
                case "module":
                  h = e;
                  break;
                case "exports":
                  h = e.exports;
                  break;
                case "global":
                  h = a;
                  break;
                case "require":
                  h = require;
                  break;
                case "requireDynamic":
                  h = null;
                  break;
                case "requireLazy":
                  h = null;
                  break;
                default:
                  h = require.call(null, f[j]);
              }
              i.push(h);
            }
            e.factory.apply(a, i);
            c[d] = e.exports;
            return e.exports;
          };
          __d = function (a, e, f, g) {
            typeof f === "function"
              ? ((b[a] = { factory: f, deps: d.concat(e), exports: {} }),
                g === 3 && require.call(null, a))
              : (c[a] = f);
          };
        })(this);
        __d(
          "ES5Array",
          [],
          function (a, b, c, d, e, f) {
            a = {};
            a.isArray = function (a) {
              return Object.prototype.toString.call(a) == "[object Array]";
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "ES5ArrayPrototype",
          [],
          function (a, b, c, d, e, f) {
            __p && __p();
            var g = {};
            g.map = function (a, b) {
              if (typeof a !== "function") throw new TypeError();
              var c,
                d = this.length,
                e = new Array(d);
              for (c = 0; c < d; ++c)
                c in this && (e[c] = a.call(b, this[c], c, this));
              return e;
            };
            g.forEach = function (a, b) {
              g.map.call(this, a, b);
            };
            g.filter = function (a, b) {
              if (typeof a !== "function") throw new TypeError();
              var c,
                d,
                e = this.length,
                f = [];
              for (c = 0; c < e; ++c)
                c in this &&
                  ((d = this[c]), a.call(b, d, c, this) && f.push(d));
              return f;
            };
            g.every = function (a, b) {
              if (typeof a !== "function") throw new TypeError();
              var c = new Object(this),
                d = c.length;
              for (var e = 0; e < d; e++)
                if (e in c && !a.call(b, c[e], e, c)) return !1;
              return !0;
            };
            g.some = function (a, b) {
              if (typeof a !== "function") throw new TypeError();
              var c = new Object(this),
                d = c.length;
              for (var e = 0; e < d; e++)
                if (e in c && a.call(b, c[e], e, c)) return !0;
              return !1;
            };
            g.indexOf = function (a, b) {
              var c = this.length;
              b |= 0;
              b < 0 && (b += c);
              for (; b < c; b++) if (b in this && this[b] === a) return b;
              return -1;
            };
            e.exports = g;
          },
          null,
        );
        __d(
          "ES5Date",
          [],
          function (a, b, c, d, e, f) {
            a = {};
            a.now = function () {
              return new Date().getTime();
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "ES5FunctionPrototype",
          [],
          function (a, b, c, d, e, f) {
            __p && __p();
            a = {};
            a.bind = function (a) {
              if (typeof this !== "function")
                throw new TypeError("Bind must be called on a function");
              var b = this,
                c = Array.prototype.slice.call(arguments, 1);
              function d() {
                return b.apply(
                  a,
                  c.concat(Array.prototype.slice.call(arguments)),
                );
              }
              d.displayName = "bound:" + (b.displayName || b.name || "(?)");
              d.toString = function () {
                return "bound: " + b;
              };
              return d;
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "ie8DontEnum",
          [],
          function (a, b, c, d, e, f) {
            var g = [
                "toString",
                "toLocaleString",
                "valueOf",
                "hasOwnProperty",
                "isPrototypeOf",
                "prototypeIsEnumerable",
                "constructor",
              ],
              h = {}.hasOwnProperty;
            a = function () {};
            ({ toString: !0 }).propertyIsEnumerable("toString") &&
              (a = function (a, b) {
                for (var c = 0; c < g.length; c++) {
                  var d = g[c];
                  h.call(a, d) && b(d);
                }
              });
            e.exports = a;
          },
          null,
        );
        __d(
          "ES5Object",
          ["ie8DontEnum"],
          function (a, b, c, d, e, f, g) {
            __p && __p();
            var h = {}.hasOwnProperty;
            a = {};
            function i() {}
            a.create = function (a) {
              var b = typeof a;
              if (b != "object" && b != "function")
                throw new TypeError(
                  "Object prototype may only be a Object or null",
                );
              i.prototype = a;
              return new i();
            };
            a.keys = function (a) {
              var b = typeof a;
              if ((b != "object" && b != "function") || a === null)
                throw new TypeError("Object.keys called on non-object");
              var c = [];
              for (var d in a) h.call(a, d) && c.push(d);
              g(a, function (a) {
                return c.push(a);
              });
              return c;
            };
            a.freeze = function (a) {
              return a;
            };
            a.isFrozen = function () {
              return !1;
            };
            a.seal = function (a) {
              return a;
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "ES5StringPrototype",
          [],
          function (a, b, c, d, e, f) {
            __p && __p();
            a = {};
            a.trim = function () {
              if (this == null)
                throw new TypeError(
                  "String.prototype.trim called on null or undefined",
                );
              return String.prototype.replace.call(this, /^\s+|\s+$/g, "");
            };
            a.startsWith = function (a) {
              var b = String(this);
              if (this == null)
                throw new TypeError(
                  "String.prototype.startsWith called on null or undefined",
                );
              var c = arguments.length > 1 ? Number(arguments[1]) : 0;
              isNaN(c) && (c = 0);
              var d = Math.min(Math.max(c, 0), b.length);
              return b.indexOf(String(a), c) == d;
            };
            a.endsWith = function (a) {
              var b = String(this);
              if (this == null)
                throw new TypeError(
                  "String.prototype.endsWith called on null or undefined",
                );
              var c = b.length,
                d = String(a),
                e = arguments.length > 1 ? Number(arguments[1]) : c;
              isNaN(e) && (e = 0);
              var f = Math.min(Math.max(e, 0), c),
                g = f - d.length;
              return g < 0 ? !1 : b.lastIndexOf(d, g) == g;
            };
            a.includes = function (a) {
              if (this == null)
                throw new TypeError(
                  "String.prototype.contains called on null or undefined",
                );
              var b = String(this),
                c = arguments.length > 1 ? Number(arguments[1]) : 0;
              isNaN(c) && (c = 0);
              return b.indexOf(String(a), c) != -1;
            };
            a.contains = a.includes;
            a.repeat = function (a) {
              __p && __p();
              if (this == null)
                throw new TypeError(
                  "String.prototype.repeat called on null or undefined",
                );
              var b = String(this);
              a = a ? Number(a) : 0;
              isNaN(a) && (a = 0);
              if (a < 0 || a === Infinity) throw RangeError();
              if (a === 1) return b;
              if (a === 0) return "";
              var c = "";
              while (a) a & 1 && (c += b), (a >>= 1) && (b += b);
              return c;
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "ES6Array",
          [],
          function (a, b, c, d, e, f) {
            "use strict";
            __p && __p();
            a = {
              from: function (a) {
                __p && __p();
                if (a == null)
                  throw new TypeError("Object is null or undefined");
                var b = arguments[1],
                  c = arguments[2],
                  d = this,
                  e = Object(a),
                  f =
                    typeof Symbol === "function"
                      ? typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                      : "@@iterator",
                  g = typeof b === "function",
                  h = typeof e[f] === "function",
                  i = 0,
                  j,
                  k;
                if (h) {
                  j = typeof d === "function" ? new d() : [];
                  var l = e[f](),
                    m;
                  while (!(m = l.next()).done)
                    (k = m.value),
                      g && (k = b.call(c, k, i)),
                      (j[i] = k),
                      (i += 1);
                  j.length = i;
                  return j;
                }
                var n = e.length;
                (isNaN(n) || n < 0) && (n = 0);
                j = typeof d === "function" ? new d(n) : new Array(n);
                while (i < n)
                  (k = e[i]), g && (k = b.call(c, k, i)), (j[i] = k), (i += 1);
                j.length = i;
                return j;
              },
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "ES6ArrayPrototype",
          [],
          function (a, b, c, d, e, f) {
            __p && __p();
            var g = {
              find: function (a, b) {
                if (this == null)
                  throw new TypeError(
                    "Array.prototype.find called on null or undefined",
                  );
                if (typeof a !== "function")
                  throw new TypeError("predicate must be a function");
                a = g.findIndex.call(this, a, b);
                return a === -1 ? void 0 : this[a];
              },
              findIndex: function (a, b) {
                if (this == null)
                  throw new TypeError(
                    "Array.prototype.findIndex called on null or undefined",
                  );
                if (typeof a !== "function")
                  throw new TypeError("predicate must be a function");
                var c = Object(this),
                  d = c.length >>> 0;
                for (var e = 0; e < d; e++) if (a.call(b, c[e], e, c)) return e;
                return -1;
              },
              fill: function (a) {
                if (this == null)
                  throw new TypeError(
                    "Array.prototype.fill called on null or undefined",
                  );
                var b = Object(this),
                  c = b.length >>> 0,
                  d = arguments[1],
                  e = d >> 0,
                  f = e < 0 ? Math.max(c + e, 0) : Math.min(e, c),
                  g = arguments[2],
                  h = g === undefined ? c : g >> 0,
                  i = h < 0 ? Math.max(c + h, 0) : Math.min(h, c);
                while (f < i) (b[f] = a), f++;
                return b;
              },
            };
            e.exports = g;
          },
          null,
        );
        __d(
          "ES6DatePrototype",
          [],
          function (a, b, c, d, e, f) {
            function g(a) {
              return (a < 10 ? "0" : "") + a;
            }
            a = {
              toISOString: function () {
                if (!isFinite(this)) throw new Error("Invalid time value");
                var a = this.getUTCFullYear();
                a =
                  (a < 0 ? "-" : a > 9999 ? "+" : "") +
                  ("00000" + Math.abs(a)).slice(0 <= a && a <= 9999 ? -4 : -6);
                return (
                  a +
                  "-" +
                  g(this.getUTCMonth() + 1) +
                  "-" +
                  g(this.getUTCDate()) +
                  "T" +
                  g(this.getUTCHours()) +
                  ":" +
                  g(this.getUTCMinutes()) +
                  ":" +
                  g(this.getUTCSeconds()) +
                  "." +
                  (this.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) +
                  "Z"
                );
              },
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "ES6Number",
          [],
          function (a, b, c, d, e, f) {
            __p && __p();
            a = Math.pow(2, -52);
            b = Math.pow(2, 53) - 1;
            c = -1 * b;
            d = {
              isFinite: (function (a) {
                function b(b) {
                  return a.apply(this, arguments);
                }
                b.toString = function () {
                  return a.toString();
                };
                return b;
              })(function (a) {
                return typeof a === "number" && isFinite(a);
              }),
              isNaN: (function (a) {
                function b(b) {
                  return a.apply(this, arguments);
                }
                b.toString = function () {
                  return a.toString();
                };
                return b;
              })(function (a) {
                return typeof a === "number" && isNaN(a);
              }),
              isInteger: function (a) {
                return this.isFinite(a) && Math.floor(a) === a;
              },
              isSafeInteger: function (a) {
                return (
                  this.isFinite(a) &&
                  a >= this.MIN_SAFE_INTEGER &&
                  a <= this.MAX_SAFE_INTEGER &&
                  Math.floor(a) === a
                );
              },
              EPSILON: a,
              MAX_SAFE_INTEGER: b,
              MIN_SAFE_INTEGER: c,
            };
            e.exports = d;
          },
          null,
        );
        __d(
          "ES6Object",
          ["ie8DontEnum"],
          function (a, b, c, d, e, f, g) {
            __p && __p();
            var h = {}.hasOwnProperty;
            a = {
              assign: function (a) {
                __p && __p();
                if (a == null)
                  throw new TypeError(
                    "Object.assign target cannot be null or undefined",
                  );
                a = Object(a);
                for (
                  var b = 0;
                  b < (arguments.length <= 1 ? 0 : arguments.length - 1);
                  b++
                ) {
                  var c =
                    b + 1 < 1 || arguments.length <= b + 1
                      ? undefined
                      : arguments[b + 1];
                  if (c == null) continue;
                  c = Object(c);
                  for (var d in c) h.call(c, d) && (a[d] = c[d]);
                  g(c, function (b) {
                    return (a[b] = c[b]);
                  });
                }
                return a;
              },
              is: function (a, b) {
                if (a === b) return a !== 0 || 1 / a === 1 / b;
                else return a !== a && b !== b;
              },
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "ES7ArrayPrototype",
          ["ES5Array", "ES5ArrayPrototype"],
          function (a, b, c, d, e, f, g, h) {
            __p && __p();
            var i = g.isArray,
              j = h.indexOf;
            function k(a) {
              return Math.min(Math.max(l(a), 0), Number.MAX_SAFE_INTEGER);
            }
            function l(a) {
              a = Number(a);
              return isFinite(a) && a !== 0
                ? m(a) * Math.floor(Math.abs(a))
                : a;
            }
            function m(a) {
              return a >= 0 ? 1 : -1;
            }
            a = {
              includes: function (a) {
                "use strict";
                __p && __p();
                if (
                  a !== undefined &&
                  i(this) &&
                  !(typeof a === "number" && isNaN(a))
                )
                  return j.apply(this, arguments) !== -1;
                var b = Object(this),
                  c = b.length ? k(b.length) : 0;
                if (c === 0) return !1;
                var d = arguments.length > 1 ? l(arguments[1]) : 0,
                  e = d < 0 ? Math.max(c + d, 0) : d,
                  f = isNaN(a) && typeof a === "number";
                while (e < c) {
                  var g = b[e];
                  if (g === a || (typeof g === "number" && f && isNaN(g)))
                    return !0;
                  e++;
                }
                return !1;
              },
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "ES7Object",
          ["ie8DontEnum"],
          function (a, b, c, d, e, f, g) {
            __p && __p();
            var h = {}.hasOwnProperty;
            a = {};
            a.entries = function (a) {
              if (a == null)
                throw new TypeError("Object.entries called on non-object");
              var b = [];
              for (var c in a) h.call(a, c) && b.push([c, a[c]]);
              g(a, function (c) {
                return b.push([c, a[c]]);
              });
              return b;
            };
            a.values = function (a) {
              if (a == null)
                throw new TypeError("Object.values called on non-object");
              var b = [];
              for (var c in a) h.call(a, c) && b.push(a[c]);
              g(a, function (c) {
                return b.push(a[c]);
              });
              return b;
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "ES7StringPrototype",
          [],
          function (a, b, c, d, e, f) {
            a = {};
            a.trimLeft = function () {
              return this.replace(/^\s+/, "");
            };
            a.trimRight = function () {
              return this.replace(/\s+$/, "");
            };
            e.exports = a;
          },
          null,
        );
        /**
         * License: https://www.facebook.com/legal/license/szRD2xg2JXY/
         */
        __d(
          "json3-3.3.2",
          [],
          function (a, b, c, d, e, f) {
            "use strict";
            __p && __p();
            var g = {},
              h = { exports: g },
              i;
            function j() {
              __p && __p();
              (function () {
                __p && __p();
                var b = typeof i === "function" && i.amd,
                  c = { function: !0, object: !0 },
                  d = c[typeof g] && g && !g.nodeType && g,
                  e = (c[typeof window] && window) || this,
                  j =
                    d &&
                    c[typeof h] &&
                    h &&
                    !h.nodeType &&
                    typeof a == "object" &&
                    a;
                j &&
                  (j.global === j || j.window === j || j.self === j) &&
                  (e = j);
                function k(b, a) {
                  __p && __p();
                  b || (b = e.Object());
                  a || (a = e.Object());
                  var d = b.Number || e.Number,
                    g = b.String || e.String,
                    h = b.Object || e.Object,
                    i = b.Date || e.Date,
                    j = b.SyntaxError || e.SyntaxError,
                    l = b.TypeError || e.TypeError,
                    m = b.Math || e.Math;
                  b = b.JSON || e.JSON;
                  typeof b == "object" &&
                    b &&
                    ((a.stringify = b.stringify), (a.parse = b.parse));
                  b = h.prototype;
                  var n = b.toString,
                    o,
                    p,
                    q,
                    r = new i(-3509827334573292);
                  try {
                    r =
                      r.getUTCFullYear() == -109252 &&
                      r.getUTCMonth() === 0 &&
                      r.getUTCDate() === 1 &&
                      r.getUTCHours() == 10 &&
                      r.getUTCMinutes() == 37 &&
                      r.getUTCSeconds() == 6 &&
                      r.getUTCMilliseconds() == 708;
                  } catch (a) {}
                  function s(b) {
                    __p && __p();
                    if (s[b] !== q) return s[b];
                    var c;
                    if (b == "bug-string-char-index") c = "a"[0] != "a";
                    else if (b == "json")
                      c = s("json-stringify") && s("json-parse");
                    else {
                      var e,
                        f =
                          '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                      if (b == "json-stringify") {
                        var h = a.stringify,
                          j = typeof h == "function" && r;
                        if (j) {
                          (e = function () {
                            return 1;
                          }).toJSON = e;
                          try {
                            j =
                              h(0) === "0" &&
                              h(new d()) === "0" &&
                              h(new g()) == '""' &&
                              h(n) === q &&
                              h(q) === q &&
                              h() === q &&
                              h(e) === "1" &&
                              h([e]) == "[1]" &&
                              h([q]) == "[null]" &&
                              h(null) == "null" &&
                              h([q, n, null]) == "[null,null,null]" &&
                              h({ a: [e, !0, !1, null, "\0\b\n\f\r\t"] }) ==
                                f &&
                              h(null, e) === "1" &&
                              h([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                              h(new i(-864e13)) ==
                                '"-271821-04-20T00:00:00.000Z"' &&
                              h(new i(864e13)) ==
                                '"+275760-09-13T00:00:00.000Z"' &&
                              h(new i(-621987552e5)) ==
                                '"-000001-01-01T00:00:00.000Z"' &&
                              h(new i(-1)) == '"1969-12-31T23:59:59.999Z"';
                          } catch (a) {
                            j = !1;
                          }
                        }
                        c = j;
                      }
                      if (b == "json-parse") {
                        h = a.parse;
                        if (typeof h == "function")
                          try {
                            if (h("0") === 0 && !h(!1)) {
                              e = h(f);
                              var k = e.a.length == 5 && e.a[0] === 1;
                              if (k) {
                                try {
                                  k = !h('"\t"');
                                } catch (a) {}
                                if (k)
                                  try {
                                    k = h("01") !== 1;
                                  } catch (a) {}
                                if (k)
                                  try {
                                    k = h("1.") !== 1;
                                  } catch (a) {}
                              }
                            }
                          } catch (a) {
                            k = !1;
                          }
                        c = k;
                      }
                    }
                    return (s[b] = !!c);
                  }
                  if (!s("json")) {
                    var t = "[object Function]",
                      u = "[object Date]",
                      v = "[object Number]",
                      w = "[object String]",
                      x = "[object Array]",
                      y = "[object Boolean]",
                      z = s("bug-string-char-index");
                    if (!r)
                      var A = m.floor,
                        B = [
                          0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334,
                        ],
                        C = function (a, b) {
                          return (
                            B[b] +
                            365 * (a - 1970) +
                            A((a - 1969 + (b = +(b > 1))) / 4) -
                            A((a - 1901 + b) / 100) +
                            A((a - 1601 + b) / 400)
                          );
                        };
                    (o = b.hasOwnProperty) ||
                      (o = function (a) {
                        var b = {},
                          c;
                        ((b.__proto__ = null),
                        (b.__proto__ = { toString: 1 }),
                        b).toString != n
                          ? (o = function (a) {
                              var b = this.__proto__;
                              a = a in ((this.__proto__ = null), this);
                              this.__proto__ = b;
                              return a;
                            })
                          : ((c = b.constructor),
                            (o = function (a) {
                              var b = (this.constructor || c).prototype;
                              return a in this && !(a in b && this[a] === b[a]);
                            }));
                        return o.call(this, a);
                      });
                    p = function (a, b) {
                      __p && __p();
                      var d = 0,
                        e,
                        f;
                      (e = function () {
                        this.valueOf = 0;
                      }).prototype.valueOf = 0;
                      f = new e();
                      for (e in f) o.call(f, e) && d++;
                      f = null;
                      !d
                        ? ((f = [
                            "valueOf",
                            "toString",
                            "toLocaleString",
                            "propertyIsEnumerable",
                            "isPrototypeOf",
                            "hasOwnProperty",
                            "constructor",
                          ]),
                          (p = function (a, b) {
                            var d = n.call(a) == t,
                              e,
                              g =
                                (!d &&
                                  typeof a.constructor != "function" &&
                                  c[typeof a.hasOwnProperty] &&
                                  a.hasOwnProperty) ||
                                o;
                            for (e in a)
                              !(d && e == "prototype") && g.call(a, e) && b(e);
                            for (
                              d = f.length;
                              (e = f[--d]);
                              g.call(a, e) && b(e)
                            );
                          }))
                        : d == 2
                        ? (p = function (a, b) {
                            var c = {},
                              d = n.call(a) == t,
                              e;
                            for (e in a)
                              !(d && e == "prototype") &&
                                !o.call(c, e) &&
                                (c[e] = 1) &&
                                o.call(a, e) &&
                                b(e);
                          })
                        : (p = function (a, b) {
                            var c = n.call(a) == t,
                              d,
                              e;
                            for (d in a)
                              !(c && d == "prototype") &&
                                o.call(a, d) &&
                                !(e = d === "constructor") &&
                                b(d);
                            (e || o.call(a, (d = "constructor"))) && b(d);
                          });
                      return p(a, b);
                    };
                    if (!s("json-stringify")) {
                      var D = {
                          92: "\\\\",
                          34: '\\"',
                          8: "\\b",
                          12: "\\f",
                          10: "\\n",
                          13: "\\r",
                          9: "\\t",
                        },
                        E = "000000",
                        F = function (a, b) {
                          return (E + (b || 0)).slice(-a);
                        },
                        G = "\\u00",
                        H = function (a) {
                          __p && __p();
                          var b = '"',
                            c = 0,
                            d = a.length,
                            e = !z || d > 10,
                            f = e && (z ? a.split("") : a);
                          for (; c < d; c++) {
                            var g = a.charCodeAt(c);
                            switch (g) {
                              case 8:
                              case 9:
                              case 10:
                              case 12:
                              case 13:
                              case 34:
                              case 92:
                                b += D[g];
                                break;
                              default:
                                if (g < 32) {
                                  b += G + F(2, g.toString(16));
                                  break;
                                }
                                b += e ? f[c] : a.charAt(c);
                            }
                          }
                          return b + '"';
                        },
                        I = function (a, b, c, d, e, f, g) {
                          __p && __p();
                          var h, i, j, k, m, r, s, t, z, B;
                          try {
                            h = b[a];
                          } catch (a) {}
                          if (typeof h == "object" && h) {
                            i = n.call(h);
                            if (i == u && !o.call(h, "toJSON"))
                              if (h > -1 / 0 && h < 1 / 0) {
                                if (C) {
                                  m = A(h / 864e5);
                                  for (
                                    j = A(m / 365.2425) + 1970 - 1;
                                    C(j + 1, 0) <= m;
                                    j++
                                  );
                                  for (
                                    k = A((m - C(j, 0)) / 30.42);
                                    C(j, k + 1) <= m;
                                    k++
                                  );
                                  m = 1 + m - C(j, k);
                                  r = ((h % 864e5) + 864e5) % 864e5;
                                  s = A(r / 36e5) % 24;
                                  t = A(r / 6e4) % 60;
                                  z = A(r / 1e3) % 60;
                                  r = r % 1e3;
                                } else
                                  (j = h.getUTCFullYear()),
                                    (k = h.getUTCMonth()),
                                    (m = h.getUTCDate()),
                                    (s = h.getUTCHours()),
                                    (t = h.getUTCMinutes()),
                                    (z = h.getUTCSeconds()),
                                    (r = h.getUTCMilliseconds());
                                h =
                                  (j <= 0 || j >= 1e4
                                    ? (j < 0 ? "-" : "+") + F(6, j < 0 ? -j : j)
                                    : F(4, j)) +
                                  "-" +
                                  F(2, k + 1) +
                                  "-" +
                                  F(2, m) +
                                  "T" +
                                  F(2, s) +
                                  ":" +
                                  F(2, t) +
                                  ":" +
                                  F(2, z) +
                                  "." +
                                  F(3, r) +
                                  "Z";
                              } else h = null;
                            else
                              typeof h.toJSON == "function" &&
                                ((i != v && i != w && i != x) ||
                                  o.call(h, "toJSON")) &&
                                (h = h.toJSON(a));
                          }
                          c && (h = c.call(b, a, h));
                          if (h === null) return "null";
                          i = n.call(h);
                          if (i == y) return "" + h;
                          else if (i == v)
                            return h > -1 / 0 && h < 1 / 0 ? "" + h : "null";
                          else if (i == w) return H("" + h);
                          if (typeof h == "object") {
                            for (j = g.length; j--; ) if (g[j] === h) throw l();
                            g.push(h);
                            B = [];
                            k = f;
                            f += e;
                            if (i == x) {
                              for (m = 0, j = h.length; m < j; m++)
                                (s = I(m, h, c, d, e, f, g)),
                                  B.push(s === q ? "null" : s);
                              t = B.length
                                ? e
                                  ? "[\n" +
                                    f +
                                    B.join(",\n" + f) +
                                    "\n" +
                                    k +
                                    "]"
                                  : "[" + B.join(",") + "]"
                                : "[]";
                            } else
                              p(d || h, function (a) {
                                var b = I(a, h, c, d, e, f, g);
                                b !== q &&
                                  B.push(H(a) + ":" + (e ? " " : "") + b);
                              }),
                                (t = B.length
                                  ? e
                                    ? "{\n" +
                                      f +
                                      B.join(",\n" + f) +
                                      "\n" +
                                      k +
                                      "}"
                                    : "{" + B.join(",") + "}"
                                  : "{}");
                            g.pop();
                            return t;
                          }
                        };
                      a.stringify = function (a, b, d) {
                        __p && __p();
                        var e, f, g, h;
                        if (c[typeof b] && b)
                          if ((h = n.call(b)) == t) f = b;
                          else if (h == x) {
                            g = {};
                            for (
                              var i = 0, j = b.length, k;
                              i < j;
                              k = b[i++],
                                ((h = n.call(k)), h == w || h == v) &&
                                  (g[k] = 1)
                            );
                          }
                        if (d)
                          if ((h = n.call(d)) == v) {
                            if ((d -= d % 1) > 0)
                              for (
                                e = "", d > 10 && (d = 10);
                                e.length < d;
                                e += " "
                              );
                          } else
                            h == w && (e = d.length <= 10 ? d : d.slice(0, 10));
                        return I(
                          "",
                          ((k = {}), (k[""] = a), k),
                          f,
                          g,
                          e,
                          "",
                          [],
                        );
                      };
                    }
                    if (!s("json-parse")) {
                      var J = g.fromCharCode,
                        K = {
                          92: "\\",
                          34: '"',
                          47: "/",
                          98: "\b",
                          116: "\t",
                          110: "\n",
                          102: "\f",
                          114: "\r",
                        },
                        L,
                        M,
                        N = function () {
                          L = M = null;
                          throw j();
                        },
                        O = function () {
                          __p && __p();
                          var a = M,
                            b = a.length,
                            c,
                            d,
                            e,
                            f,
                            g;
                          while (L < b) {
                            g = a.charCodeAt(L);
                            switch (g) {
                              case 9:
                              case 10:
                              case 13:
                              case 32:
                                L++;
                                break;
                              case 123:
                              case 125:
                              case 91:
                              case 93:
                              case 58:
                              case 44:
                                c = z ? a.charAt(L) : a[L];
                                L++;
                                return c;
                              case 34:
                                for (c = "@", L++; L < b; ) {
                                  g = a.charCodeAt(L);
                                  if (g < 32) N();
                                  else if (g == 92) {
                                    g = a.charCodeAt(++L);
                                    switch (g) {
                                      case 92:
                                      case 34:
                                      case 47:
                                      case 98:
                                      case 116:
                                      case 110:
                                      case 102:
                                      case 114:
                                        c += K[g];
                                        L++;
                                        break;
                                      case 117:
                                        d = ++L;
                                        for (e = L + 4; L < e; L++)
                                          (g = a.charCodeAt(L)),
                                            (g >= 48 && g <= 57) ||
                                              (g >= 97 && g <= 102) ||
                                              (g >= 65 && g <= 70) ||
                                              N();
                                        c += J("0x" + a.slice(d, L));
                                        break;
                                      default:
                                        N();
                                    }
                                  } else {
                                    if (g == 34) break;
                                    g = a.charCodeAt(L);
                                    d = L;
                                    while (g >= 32 && g != 92 && g != 34)
                                      g = a.charCodeAt(++L);
                                    c += a.slice(d, L);
                                  }
                                }
                                if (a.charCodeAt(L) == 34) {
                                  L++;
                                  return c;
                                }
                                N();
                              default:
                                d = L;
                                g == 45 && ((f = !0), (g = a.charCodeAt(++L)));
                                if (g >= 48 && g <= 57) {
                                  g == 48 &&
                                    ((g = a.charCodeAt(L + 1)),
                                    g >= 48 && g <= 57) &&
                                    N();
                                  f = !1;
                                  for (
                                    ;
                                    L < b &&
                                    ((g = a.charCodeAt(L)), g >= 48 && g <= 57);
                                    L++
                                  );
                                  if (a.charCodeAt(L) == 46) {
                                    e = ++L;
                                    for (
                                      ;
                                      e < b &&
                                      ((g = a.charCodeAt(e)),
                                      g >= 48 && g <= 57);
                                      e++
                                    );
                                    e == L && N();
                                    L = e;
                                  }
                                  g = a.charCodeAt(L);
                                  if (g == 101 || g == 69) {
                                    g = a.charCodeAt(++L);
                                    (g == 43 || g == 45) && L++;
                                    for (
                                      e = L;
                                      e < b &&
                                      ((g = a.charCodeAt(e)),
                                      g >= 48 && g <= 57);
                                      e++
                                    );
                                    e == L && N();
                                    L = e;
                                  }
                                  return +a.slice(d, L);
                                }
                                f && N();
                                if (a.slice(L, L + 4) == "true") {
                                  L += 4;
                                  return !0;
                                } else if (a.slice(L, L + 5) == "false") {
                                  L += 5;
                                  return !1;
                                } else if (a.slice(L, L + 4) == "null") {
                                  L += 4;
                                  return null;
                                }
                                N();
                            }
                          }
                          return "$";
                        },
                        P = function (a) {
                          __p && __p();
                          var b, c;
                          a == "$" && N();
                          if (typeof a == "string") {
                            if ((z ? a.charAt(0) : a[0]) == "@")
                              return a.slice(1);
                            if (a == "[") {
                              b = [];
                              for (; ; c || (c = !0)) {
                                a = O();
                                if (a == "]") break;
                                c &&
                                  (a == ","
                                    ? ((a = O()), a == "]" && N())
                                    : N());
                                a == "," && N();
                                b.push(P(a));
                              }
                              return b;
                            } else if (a == "{") {
                              b = {};
                              for (; ; c || (c = !0)) {
                                a = O();
                                if (a == "}") break;
                                c &&
                                  (a == ","
                                    ? ((a = O()), a == "}" && N())
                                    : N());
                                (a == "," ||
                                  typeof a != "string" ||
                                  (z ? a.charAt(0) : a[0]) != "@" ||
                                  O() != ":") &&
                                  N();
                                b[a.slice(1)] = P(O());
                              }
                              return b;
                            }
                            N();
                          }
                          return a;
                        },
                        Q = function (a, b, c) {
                          c = R(a, b, c);
                          c === q ? delete a[b] : (a[b] = c);
                        },
                        R = function (a, b, c) {
                          var d = a[b],
                            e;
                          if (typeof d == "object" && d)
                            if (n.call(d) == x)
                              for (e = d.length; e--; ) Q(d, e, c);
                            else
                              p(d, function (a) {
                                Q(d, a, c);
                              });
                          return c.call(a, b, d);
                        };
                      a.parse = function (a, b) {
                        var c;
                        L = 0;
                        M = "" + a;
                        a = P(O());
                        O() != "$" && N();
                        L = M = null;
                        return b && n.call(b) == t
                          ? R(((c = {}), (c[""] = a), c), "", b)
                          : a;
                      };
                    }
                  }
                  a.runInContext = k;
                  return a;
                }
                if (d && !b) k(e, d);
                else {
                  var l = e.JSON,
                    m = e.JSON3,
                    n = !1,
                    o = k(
                      e,
                      (e.JSON3 = {
                        noConflict: function () {
                          n ||
                            ((n = !0),
                            (e.JSON = l),
                            (e.JSON3 = m),
                            (l = m = null));
                          return o;
                        },
                      }),
                    );
                  e.JSON = { parse: o.parse, stringify: o.stringify };
                }
                b &&
                  i(function () {
                    return o;
                  });
              }).call(this);
            }
            var k = !1,
              l = function () {
                k || ((k = !0), j());
                return h.exports;
              };
            b = function (a) {
              switch (a) {
                case undefined:
                  return l();
              }
            };
            e.exports = b;
          },
          null,
        );
        __d(
          "json3",
          ["json3-3.3.2"],
          function (a, b, c, d, e, f) {
            e.exports = b("json3-3.3.2")();
          },
          null,
        );
        __d(
          "ES",
          [
            "ES5Array",
            "ES5ArrayPrototype",
            "ES5Date",
            "ES5FunctionPrototype",
            "ES5Object",
            "ES5StringPrototype",
            "ES6Array",
            "ES6ArrayPrototype",
            "ES6DatePrototype",
            "ES6Number",
            "ES6Object",
            "ES7ArrayPrototype",
            "ES7Object",
            "ES7StringPrototype",
            "json3",
          ],
          function (
            a,
            b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
          ) {
            __p && __p();
            var v = {}.toString,
              w = { "JSON.stringify": u.stringify, "JSON.parse": u.parse };
            c = {
              "Array.prototype": h,
              "Function.prototype": j,
              "String.prototype": l,
              Object: k,
              Array: g,
              Date: i,
            };
            d = {
              Object: q,
              "Array.prototype": n,
              "Date.prototype": o,
              Number: p,
              Array: m,
            };
            f = { Object: s, "String.prototype": t, "Array.prototype": r };
            function a(a) {
              __p && __p();
              for (var b in a) {
                if (!Object.prototype.hasOwnProperty.call(a, b)) continue;
                var c = a[b],
                  d = b.split(".");
                if (d.length === 2) {
                  var e = d[0],
                    f = d[1];
                  if (!e || !f || !window[e] || !window[e][f]) {
                    var g = e ? window[e] : "-",
                      h = e && window[e] && f ? window[e][f] : "-";
                    throw new Error(
                      "Unexpected state (t11975770): " +
                        (e + ", " + f + ", " + g + ", " + h + ", " + b),
                    );
                  }
                }
                e = d.length === 2 ? window[d[0]][d[1]] : window[b];
                for (var i in c) {
                  if (!Object.prototype.hasOwnProperty.call(c, i)) continue;
                  if (typeof c[i] !== "function") {
                    w[b + "." + i] = c[i];
                    continue;
                  }
                  f = e[i];
                  w[b + "." + i] =
                    f && /\{\s+\[native code\]\s\}/.test(f) ? f : c[i];
                }
              }
            }
            a(c);
            a(d);
            a(f);
            function b(a, b, c) {
              var d = c ? v.call(a).slice(8, -1) + ".prototype" : a,
                e = w[d + "." + b] || a[b];
              if (typeof e === "function") {
                for (
                  var f = arguments.length,
                    g = new Array(f > 3 ? f - 3 : 0),
                    h = 3;
                  h < f;
                  h++
                )
                  g[h - 3] = arguments[h];
                return e.apply(a, g);
              } else if (e) return e;
              throw new Error(
                "Polyfill " + d + " does not have implementation of " + b,
              );
            }
            e.exports = b;
          },
          null,
        );
        __d(
          "ES5FunctionPrototype",
          [],
          function (a, b, c, d, e, f) {
            __p && __p();
            a = {};
            a.bind = function (a) {
              if (typeof this !== "function")
                throw new TypeError("Bind must be called on a function");
              var b = this,
                c = Array.prototype.slice.call(arguments, 1);
              function d() {
                return b.apply(
                  a,
                  c.concat(Array.prototype.slice.call(arguments)),
                );
              }
              d.displayName = "bound:" + (b.displayName || b.name || "(?)");
              d.toString = function () {
                return "bound: " + b;
              };
              return d;
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "ie8DontEnum",
          [],
          function (a, b, c, d, e, f) {
            var g = [
                "toString",
                "toLocaleString",
                "valueOf",
                "hasOwnProperty",
                "isPrototypeOf",
                "prototypeIsEnumerable",
                "constructor",
              ],
              h = {}.hasOwnProperty;
            a = function () {};
            ({ toString: !0 }).propertyIsEnumerable("toString") &&
              (a = function (a, b) {
                for (var c = 0; c < g.length; c++) {
                  var d = g[c];
                  h.call(a, d) && b(d);
                }
              });
            e.exports = a;
          },
          null,
        );
        __d(
          "ES5Object",
          ["ie8DontEnum"],
          function (a, b, c, d, e, f, g) {
            __p && __p();
            var h = {}.hasOwnProperty;
            a = {};
            function i() {}
            a.create = function (a) {
              var b = typeof a;
              if (b != "object" && b != "function")
                throw new TypeError(
                  "Object prototype may only be a Object or null",
                );
              i.prototype = a;
              return new i();
            };
            a.keys = function (a) {
              var b = typeof a;
              if ((b != "object" && b != "function") || a === null)
                throw new TypeError("Object.keys called on non-object");
              var c = [];
              for (var d in a) h.call(a, d) && c.push(d);
              g(a, function (a) {
                return c.push(a);
              });
              return c;
            };
            a.freeze = function (a) {
              return a;
            };
            a.isFrozen = function () {
              return !1;
            };
            a.seal = function (a) {
              return a;
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "ES6Object",
          ["ie8DontEnum"],
          function (a, b, c, d, e, f, g) {
            __p && __p();
            var h = {}.hasOwnProperty;
            a = {
              assign: function (a) {
                __p && __p();
                if (a == null)
                  throw new TypeError(
                    "Object.assign target cannot be null or undefined",
                  );
                a = Object(a);
                for (
                  var b = 0;
                  b < (arguments.length <= 1 ? 0 : arguments.length - 1);
                  b++
                ) {
                  var c =
                    b + 1 < 1 || arguments.length <= b + 1
                      ? undefined
                      : arguments[b + 1];
                  if (c == null) continue;
                  c = Object(c);
                  for (var d in c) h.call(c, d) && (a[d] = c[d]);
                  g(c, function (b) {
                    return (a[b] = c[b]);
                  });
                }
                return a;
              },
              is: function (a, b) {
                if (a === b) return a !== 0 || 1 / a === 1 / b;
                else return a !== a && b !== b;
              },
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "sdk.babelHelpers",
          ["ES5FunctionPrototype", "ES5Object", "ES6Object"],
          function (a, b, c, d, e, f, g, h, i) {
            __p && __p();
            a = {};
            var j = Object.prototype.hasOwnProperty;
            a.inherits = function (a, b) {
              i.assign(a, b);
              a.prototype = h.create(b && b.prototype);
              a.prototype.constructor = a;
              a.__superConstructor__ = b;
              return b;
            };
            a._extends = i.assign;
            a["extends"] = a._extends;
            a.objectWithoutProperties = function (a, b) {
              var c = {};
              for (var d in a) {
                if (!j.call(a, d) || b.indexOf(d) >= 0) continue;
                c[d] = a[d];
              }
              return c;
            };
            a.taggedTemplateLiteralLoose = function (a, b) {
              a.raw = b;
              return a;
            };
            a.bind = g.bind;
            e.exports = a;
          },
          null,
        );
        var ES = require("ES");
        var babelHelpers = require("sdk.babelHelpers");
        (function (a, b) {
          var c = "keys",
            d = "values",
            e = "entries",
            f = (function () {
              var a = h(Array),
                f;
              a ||
                (f = (function () {
                  function a(a, b) {
                    "use strict";
                    (this.$1 = a), (this.$2 = b), (this.$3 = 0);
                  }
                  a.prototype.next = function () {
                    "use strict";
                    if (this.$1 == null) return { value: b, done: !0 };
                    var a = this.$1,
                      f = this.$1.length,
                      g = this.$3,
                      h = this.$2;
                    if (g >= f) {
                      this.$1 = b;
                      return { value: b, done: !0 };
                    }
                    this.$3 = g + 1;
                    if (h === c) return { value: g, done: !1 };
                    else if (h === d) return { value: a[g], done: !1 };
                    else if (h === e) return { value: [g, a[g]], done: !1 };
                  };
                  a.prototype[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ] = function () {
                    "use strict";
                    return this;
                  };
                  return a;
                })());
              return {
                keys: a
                  ? function (a) {
                      return a.keys();
                    }
                  : function (a) {
                      return new f(a, c);
                    },
                values: a
                  ? function (a) {
                      return a.values();
                    }
                  : function (a) {
                      return new f(a, d);
                    },
                entries: a
                  ? function (a) {
                      return a.entries();
                    }
                  : function (a) {
                      return new f(a, e);
                    },
              };
            })(),
            g = (function () {
              var a = h(String),
                c;
              a ||
                (c = (function () {
                  function a(a) {
                    "use strict";
                    (this.$1 = a), (this.$2 = 0);
                  }
                  a.prototype.next = function () {
                    "use strict";
                    if (this.$1 == null) return { value: b, done: !0 };
                    var a = this.$2,
                      c = this.$1,
                      d = c.length;
                    if (a >= d) {
                      this.$1 = b;
                      return { value: b, done: !0 };
                    }
                    var e = c.charCodeAt(a);
                    if (e < 55296 || e > 56319 || a + 1 === d) e = c[a];
                    else {
                      d = c.charCodeAt(a + 1);
                      d < 56320 || d > 57343
                        ? (e = c[a])
                        : (e = c[a] + c[a + 1]);
                    }
                    this.$2 = a + e.length;
                    return { value: e, done: !1 };
                  };
                  a.prototype[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ] = function () {
                    "use strict";
                    return this;
                  };
                  return a;
                })());
              return {
                keys: function () {
                  throw TypeError(
                    "Strings default iterator doesn't implement keys.",
                  );
                },
                values: a
                  ? function (a) {
                      return a[
                        typeof Symbol === "function"
                          ? Symbol.iterator
                          : "@@iterator"
                      ]();
                    }
                  : function (a) {
                      return new c(a);
                    },
                entries: function () {
                  throw TypeError(
                    "Strings default iterator doesn't implement entries.",
                  );
                },
              };
            })();
          function h(a) {
            return (
              typeof a.prototype[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ] === "function" &&
              typeof a.prototype.values === "function" &&
              typeof a.prototype.keys === "function" &&
              typeof a.prototype.entries === "function"
            );
          }
          function i(a, b) {
            "use strict";
            (this.$1 = a),
              (this.$2 = b),
              (this.$3 = ES("Object", "keys", !1, a)),
              (this.$4 = 0);
          }
          i.prototype.next = function () {
            "use strict";
            var a = this.$3.length,
              f = this.$4,
              g = this.$2,
              h = this.$3[f];
            if (f >= a) {
              this.$1 = b;
              return { value: b, done: !0 };
            }
            this.$4 = f + 1;
            if (g === c) return { value: h, done: !1 };
            else if (g === d) return { value: this.$1[h], done: !1 };
            else if (g === e) return { value: [h, this.$1[h]], done: !1 };
          };
          i.prototype[
            typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
          ] = function () {
            "use strict";
            return this;
          };
          var j = {
            keys: function (a) {
              return new i(a, c);
            },
            values: function (a) {
              return new i(a, d);
            },
            entries: function (a) {
              return new i(a, e);
            },
          };
          function k(a, b) {
            if (typeof a === "string") return g[b || d](a);
            else if (ES("Array", "isArray", !1, a)) return f[b || d](a);
            else if (
              a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]
            )
              return a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
            else return j[b || e](a);
          }
          ES("Object", "assign", !1, k, {
            KIND_KEYS: c,
            KIND_VALUES: d,
            KIND_ENTRIES: e,
            keys: function (a) {
              return k(a, c);
            },
            values: function (a) {
              return k(a, d);
            },
            entries: function (a) {
              return k(a, e);
            },
            generic: j.entries,
          });
          a.FB_enumerate = k;
        })(typeof global === "undefined" ? this : global);
        (function (a, b) {
          var c = a.window || a;
          function d() {
            return (
              "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
            );
          }
          function e(a) {
            var b = a ? a.ownerDocument || a : document;
            b = b.defaultView || c;
            return !!(
              a &&
              (typeof b.Node === "function"
                ? a instanceof b.Node
                : typeof a === "object" &&
                  typeof a.nodeType === "number" &&
                  typeof a.nodeName === "string")
            );
          }
          function f(a) {
            a = c[a];
            if (a == null) return !0;
            if (typeof c.Symbol !== "function") return !0;
            var b = a.prototype;
            return (
              a == null ||
              typeof a !== "function" ||
              typeof b.clear !== "function" ||
              new a().size !== 0 ||
              typeof b.keys !== "function" ||
              typeof b.forEach !== "function"
            );
          }
          var g = a.FB_enumerate,
            h = (function () {
              if (!f("Map")) return c.Map;
              var i = "key",
                j = "value",
                k = "key+value",
                l = "$map_",
                m,
                n = "IE_HASH_";
              function a(a) {
                "use strict";
                if (!s(this)) throw new TypeError("Wrong map object type.");
                r(this);
                if (a != null) {
                  a = g(a);
                  var b;
                  while (!(b = a.next()).done) {
                    if (!s(b.value))
                      throw new TypeError(
                        "Expected iterable items to be pair objects.",
                      );
                    this.set(b.value[0], b.value[1]);
                  }
                }
              }
              a.prototype.clear = function () {
                "use strict";
                r(this);
              };
              a.prototype.has = function (a) {
                "use strict";
                a = p(this, a);
                return !!(a != null && this._mapData[a]);
              };
              a.prototype.set = function (a, b) {
                "use strict";
                var c = p(this, a);
                c != null && this._mapData[c]
                  ? (this._mapData[c][1] = b)
                  : ((c = this._mapData.push([a, b]) - 1),
                    q(this, a, c),
                    (this.size += 1));
                return this;
              };
              a.prototype.get = function (a) {
                "use strict";
                a = p(this, a);
                if (a == null) return b;
                else return this._mapData[a][1];
              };
              a.prototype["delete"] = function (a) {
                "use strict";
                var c = p(this, a);
                if (c != null && this._mapData[c]) {
                  q(this, a, b);
                  this._mapData[c] = b;
                  this.size -= 1;
                  return !0;
                } else return !1;
              };
              a.prototype.entries = function () {
                "use strict";
                return new o(this, k);
              };
              a.prototype.keys = function () {
                "use strict";
                return new o(this, i);
              };
              a.prototype.values = function () {
                "use strict";
                return new o(this, j);
              };
              a.prototype.forEach = function (a, c) {
                "use strict";
                if (typeof a !== "function")
                  throw new TypeError("Callback must be callable.");
                a = ES(a, "bind", !0, c || b);
                c = this._mapData;
                for (var d = 0; d < c.length; d++) {
                  var e = c[d];
                  e != null && a(e[1], e[0], this);
                }
              };
              a.prototype[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ] = function () {
                "use strict";
                return this.entries();
              };
              function o(a, b) {
                "use strict";
                if (!(s(a) && a._mapData))
                  throw new TypeError("Object is not a map.");
                if (ES([i, k, j], "indexOf", !0, b) === -1)
                  throw new Error("Invalid iteration kind.");
                this._map = a;
                this._nextIndex = 0;
                this._kind = b;
              }
              o.prototype.next = function () {
                "use strict";
                if (!this instanceof a)
                  throw new TypeError(
                    "Expected to be called on a MapIterator.",
                  );
                var c = this._map,
                  d = this._nextIndex,
                  e = this._kind;
                if (c == null) return t(b, !0);
                c = c._mapData;
                while (d < c.length) {
                  var f = c[d];
                  d += 1;
                  this._nextIndex = d;
                  if (f)
                    if (e === i) return t(f[0], !1);
                    else if (e === j) return t(f[1], !1);
                    else if (e) return t(f, !1);
                }
                this._map = b;
                return t(b, !0);
              };
              o.prototype[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ] = function () {
                "use strict";
                return this;
              };
              function p(a, c) {
                if (s(c)) {
                  var d = x(c);
                  return d ? a._objectIndex[d] : b;
                } else {
                  d = l + c;
                  if (typeof c === "string") return a._stringIndex[d];
                  else return a._otherIndex[d];
                }
              }
              function q(a, b, c) {
                var d = c == null;
                if (s(b)) {
                  var e = x(b);
                  e || (e = y(b));
                  d ? delete a._objectIndex[e] : (a._objectIndex[e] = c);
                } else {
                  e = l + b;
                  typeof b === "string"
                    ? d
                      ? delete a._stringIndex[e]
                      : (a._stringIndex[e] = c)
                    : d
                    ? delete a._otherIndex[e]
                    : (a._otherIndex[e] = c);
                }
              }
              function r(a) {
                (a._mapData = []),
                  (a._objectIndex = {}),
                  (a._stringIndex = {}),
                  (a._otherIndex = {}),
                  (a.size = 0);
              }
              function s(a) {
                return (
                  a != null &&
                  (typeof a === "object" || typeof a === "function")
                );
              }
              function t(a, b) {
                return { value: a, done: b };
              }
              a.__isES5 = (function () {
                try {
                  Object.defineProperty({}, "__.$#x", {});
                  return !0;
                } catch (a) {
                  return !1;
                }
              })();
              function u(b) {
                if (!a.__isES5 || !Object.isExtensible) return !0;
                else return Object.isExtensible(b);
              }
              function v(a) {
                var b;
                switch (a.nodeType) {
                  case 1:
                    b = a.uniqueID;
                    break;
                  case 9:
                    b = a.documentElement.uniqueID;
                    break;
                  default:
                    return null;
                }
                if (b) return n + b;
                else return null;
              }
              var w = d();
              function x(b) {
                if (b[w]) return b[w];
                else if (
                  !a.__isES5 &&
                  b.propertyIsEnumerable &&
                  b.propertyIsEnumerable[w]
                )
                  return b.propertyIsEnumerable[w];
                else if (!a.__isES5 && e(b) && v(b)) return v(b);
                else if (!a.__isES5 && b[w]) return b[w];
              }
              var y = (function () {
                var b = Object.prototype.propertyIsEnumerable,
                  c = 0;
                return function (d) {
                  if (u(d)) {
                    c += 1;
                    if (a.__isES5)
                      Object.defineProperty(d, w, {
                        enumerable: !1,
                        writable: !1,
                        configurable: !1,
                        value: c,
                      });
                    else if (d.propertyIsEnumerable)
                      (d.propertyIsEnumerable = function () {
                        return b.apply(this, arguments);
                      }),
                        (d.propertyIsEnumerable[w] = c);
                    else if (e(d)) d[w] = c;
                    else
                      throw new Error(
                        "Unable to set a non-enumerable property on object.",
                      );
                    return c;
                  } else
                    throw new Error(
                      "Non-extensible objects are not allowed as keys.",
                    );
                };
              })();
              return __annotator(a, { name: "Map" });
            })(),
            i = (function () {
              if (!f("Set")) return c.Set;
              function a(a) {
                "use strict";
                if (
                  this == null ||
                  (typeof this !== "object" && typeof this !== "function")
                )
                  throw new TypeError("Wrong set object type.");
                b(this);
                if (a != null) {
                  a = g(a);
                  var c;
                  while (!(c = a.next()).done) this.add(c.value);
                }
              }
              a.prototype.add = function (a) {
                "use strict";
                this._map.set(a, a);
                this.size = this._map.size;
                return this;
              };
              a.prototype.clear = function () {
                "use strict";
                b(this);
              };
              a.prototype["delete"] = function (a) {
                "use strict";
                a = this._map["delete"](a);
                this.size = this._map.size;
                return a;
              };
              a.prototype.entries = function () {
                "use strict";
                return this._map.entries();
              };
              a.prototype.forEach = function (a) {
                "use strict";
                var b = arguments[1],
                  c = this._map.keys(),
                  d;
                while (!(d = c.next()).done) a.call(b, d.value, d.value, this);
              };
              a.prototype.has = function (a) {
                "use strict";
                return this._map.has(a);
              };
              a.prototype.values = function () {
                "use strict";
                return this._map.values();
              };
              a.prototype.keys = function () {
                "use strict";
                return this.values();
              };
              a.prototype[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ] = function () {
                "use strict";
                return this.values();
              };
              function b(a) {
                (a._map = new h()), (a.size = a._map.size);
              }
              return __annotator(a, { name: "Set" });
            })();
          a.Map = h;
          a.Set = i;
        })(typeof global === "undefined" ? this : global);
        __d("AccountKitJSSDKRuntimeConfig", [], {
          locale: "en_US",
          rtl: false,
          sdkdomain: "www.accountkit.com",
          popupproxy: "/dialog/popup_proxy/r/7GVdtNcSUGk.js",
          pollingframe: "/dialog/polling_frame/r/yVxOP27oIoj.js",
        });
        __d("JSSDKRuntimeConfig", [], {
          locale: "en_US",
          revision: "4056814",
          rtl: false,
          sdkab: null,
          sdkns: "AccountKit",
          sdkurl:
            "https://sdk.accountkit.com/en_US/sdk.js?hash=8b73d238a64cb37d9651dcda4d596877",
        });
        __d("AccountKitJSSDKFeatureConfig", [], {
          features: {
            e_handler: true,
            e_login_resp_parse_failed: true,
            e_popup_not_opened: true,
            i_inited: { rate: 4 },
            i_login: { rate: 4 },
          },
        });
        __d(
          "sprintf",
          [],
          function (a, b, c, d, e, f) {
            function a(a) {
              for (
                var b = arguments.length,
                  c = new Array(b > 1 ? b - 1 : 0),
                  d = 1;
                d < b;
                d++
              )
                c[d - 1] = arguments[d];
              var e = 0;
              return a.replace(/%s/g, function () {
                return String(c[e++]);
              });
            }
            e.exports = a;
          },
          null,
        );
        __d(
          "Log",
          ["sprintf"],
          function (a, b, c, d, e, f, g) {
            b = { DEBUG: 3, INFO: 2, WARNING: 1, ERROR: 0 };
            function a(a, b) {
              var c = Array.prototype.slice.call(arguments, 2),
                d = g.apply(null, c),
                e = window.console;
              e && h.level >= b && e[a in e ? a : "log"](d);
            }
            var h = {
              level: -1,
              Level: b,
              debug: ES(a, "bind", !0, null, "debug", b.DEBUG),
              info: ES(a, "bind", !0, null, "info", b.INFO),
              warn: ES(a, "bind", !0, null, "warn", b.WARNING),
              error: ES(a, "bind", !0, null, "error", b.ERROR),
            };
            e.exports = h;
          },
          null,
        );
        __d(
          "guid",
          [],
          function (a, b, c, d, e, f) {
            function a() {
              return (
                "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
              );
            }
            e.exports = a;
          },
          18,
        );
        __d(
          "ObservableMixin",
          [],
          function (a, b, c, d, e, f) {
            __p && __p();
            function a() {
              this.__observableEvents = {};
            }
            a.prototype = {
              inform: function (a) {
                __p && __p();
                var b = Array.prototype.slice.call(arguments, 1),
                  c = Array.prototype.slice.call(this.getSubscribers(a));
                for (var d = 0; d < c.length; d++) {
                  if (c[d] === null) continue;
                  try {
                    c[d].apply(this, b);
                  } catch (a) {
                    setTimeout(function () {
                      throw a;
                    }, 0);
                  }
                }
                return this;
              },
              getSubscribers: function (a) {
                return (
                  this.__observableEvents[a] ||
                  (this.__observableEvents[a] = [])
                );
              },
              clearSubscribers: function (a) {
                a && (this.__observableEvents[a] = []);
                return this;
              },
              clearAllSubscribers: function () {
                this.__observableEvents = {};
                return this;
              },
              subscribe: function (a, b) {
                a = this.getSubscribers(a);
                a.push(b);
                return this;
              },
              unsubscribe: function (a, b) {
                a = this.getSubscribers(a);
                for (var c = 0; c < a.length; c++)
                  if (a[c] === b) {
                    a.splice(c, 1);
                    break;
                  }
                return this;
              },
              monitor: function (a, b) {
                if (!b()) {
                  var c = ES(
                    function (d) {
                      b.apply(b, arguments) && this.unsubscribe(a, c);
                    },
                    "bind",
                    !0,
                    this,
                  );
                  this.subscribe(a, c);
                }
                return this;
              },
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "ManagedError",
          [],
          function (a, b, c, d, e, f) {
            function a(a, b) {
              Error.prototype.constructor.call(this, a),
                (this.message = a),
                (this.innerError = b);
            }
            a.prototype = new Error();
            a.prototype.constructor = a;
            e.exports = a;
          },
          null,
        );
        __d(
          "AssertionError",
          ["ManagedError"],
          function (a, b, c, d, e, f, g) {
            function a(a) {
              g.prototype.constructor.apply(this, arguments);
            }
            a.prototype = new g();
            a.prototype.constructor = a;
            e.exports = a;
          },
          null,
        );
        __d(
          "Assert",
          ["AssertionError", "sprintf"],
          function (a, b, c, d, e, f, g, h) {
            __p && __p();
            function i(a, b) {
              if (typeof a !== "boolean" || !a) throw new g(b);
              return a;
            }
            function j(a, b, c) {
              __p && __p();
              var d;
              if (b === undefined) d = "undefined";
              else if (b === null) d = "null";
              else {
                var e = Object.prototype.toString.call(b);
                d = /\s(\w*)/.exec(e)[1].toLowerCase();
              }
              i(
                ES(a, "indexOf", !0, d) !== -1,
                c || h("Expression is of type %s, not %s", d, a),
              );
              return b;
            }
            function a(a, b, c) {
              i(b instanceof a, c || "Expression not instance of type");
              return b;
            }
            function k(a, b) {
              (l["is" + a] = b),
                (l["maybe" + a] = function (a, c) {
                  a != null && b(a, c);
                });
            }
            var l = {
              isInstanceOf: a,
              isTrue: i,
              isTruthy: function (a, b) {
                return i(!!a, b);
              },
              type: j,
              define: function (a, b) {
                (a =
                  a.substring(0, 1).toUpperCase() +
                  a.substring(1).toLowerCase()),
                  k(a, function (a, c) {
                    i(b(a), c);
                  });
              },
            };
            ES(
              [
                "Array",
                "Boolean",
                "Date",
                "Function",
                "Null",
                "Number",
                "Object",
                "Regexp",
                "String",
                "Undefined",
              ],
              "forEach",
              !0,
              function (a) {
                k(a, ES(j, "bind", !0, null, a.toLowerCase()));
              },
            );
            e.exports = l;
          },
          null,
        );
        __d(
          "Type",
          ["Assert"],
          function (a, b, c, d, e, f, g) {
            __p && __p();
            function h() {
              var a = this.__mixins;
              if (a)
                for (var b = 0; b < a.length; b++) a[b].apply(this, arguments);
            }
            function i(a, b) {
              if (b instanceof a) return !0;
              if (b instanceof h)
                for (var c = 0; c < b.__mixins.length; c++)
                  if (b.__mixins[c] == a) return !0;
              return !1;
            }
            function j(a, b) {
              var c = a.prototype;
              ES("Array", "isArray", !1, b) || (b = [b]);
              for (var a = 0; a < b.length; a++) {
                var d = b[a];
                typeof d === "function" &&
                  (c.__mixins.push(d), (d = d.prototype));
                ES(ES("Object", "keys", !1, d), "forEach", !0, function (a) {
                  c[a] = d[a];
                });
              }
            }
            function k(a, b, c) {
              __p && __p();
              var d =
                b && Object.prototype.hasOwnProperty.call(b, "constructor")
                  ? b.constructor
                  : function () {
                      this.parent.apply(this, arguments);
                    };
              g.isFunction(d);
              if (a && a.prototype instanceof h === !1)
                throw new Error("parent type does not inherit from Type");
              a = a || h;
              function e() {}
              e.prototype = a.prototype;
              d.prototype = new e();
              b && ES("Object", "assign", !1, d.prototype, b);
              d.prototype.constructor = d;
              d.parent = a;
              d.prototype.__mixins = a.prototype.__mixins
                ? Array.prototype.slice.call(a.prototype.__mixins)
                : [];
              c && j(d, c);
              d.prototype.parent = function () {
                (this.parent = a.prototype.parent), a.apply(this, arguments);
              };
              d.prototype.parentCall = function (b) {
                return a.prototype[b].apply(
                  this,
                  Array.prototype.slice.call(arguments, 1),
                );
              };
              d.extend = function (a, b) {
                return k(this, a, b);
              };
              return d;
            }
            ES("Object", "assign", !1, h.prototype, {
              instanceOf: function (a) {
                return i(a, this);
              },
            });
            ES("Object", "assign", !1, h, {
              extend: function (a, b) {
                return typeof a === "function"
                  ? k.apply(null, arguments)
                  : k(null, a, b);
              },
              instanceOf: i,
            });
            e.exports = h;
          },
          null,
        );
        __d(
          "sdk.Model",
          ["ObservableMixin", "Type"],
          function (a, b, c, d, e, f, g, h) {
            "use strict";
            __p && __p();
            a = h.extend(
              {
                constructor: function (a) {
                  __p && __p();
                  this.parent();
                  var b = {},
                    c = this;
                  ES(ES("Object", "keys", !1, a), "forEach", !0, function (d) {
                    (b[d] = a[d]),
                      (c["set" + d] = function (a) {
                        if (a === b[d]) return c;
                        b[d] = a;
                        c.inform(d + ".change", a);
                        return c;
                      }),
                      (c["get" + d] = function () {
                        return b[d];
                      });
                  });
                },
              },
              g,
            );
            e.exports = a;
          },
          null,
        );
        __d(
          "ak.Runtime",
          ["AccountKitJSSDKRuntimeConfig", "guid", "sdk.Model"],
          function (a, b, c, d, e, f, g, h, i) {
            a = new i({
              AppID: "",
              State: "",
              LoggingRef: h(),
              SDKName: "web",
              Initialized: !1,
              Debug: !1,
              FBAppEventsEnabled: !0,
              Locale: g.locale,
              Rtl: g.rtl,
              Domain: g.sdkdomain,
              PopupProxyPath: g.popupproxy,
              PollingFramePath: g.pollingframe,
              Version: "v1.2",
              Redirect: "",
              Display: "popup",
            });
            e.exports = a;
          },
          null,
        );
        __d(
          "sdk.UA",
          [],
          function (a, b, c, d, e, f) {
            __p && __p();
            a = navigator.userAgent;
            var g = {
                iphone: /\b(iPhone|iP[ao]d)/.test(a),
                ipad: /\b(iP[ao]d)/.test(a),
                android: /Android/i.test(a),
                nativeApp: /FBAN\/\w+;/i.test(a),
                nativeAndroidApp: /FB_IAB\/\w+;/i.test(a),
                nativeInstagramApp: /Instagram/i.test(a),
                ucBrowser: /UCBrowser/i.test(a),
              },
              h = /Mobile/i.test(a),
              i = {
                ie: "",
                firefox: "",
                chrome: "",
                webkit: "",
                osx: "",
                edge: "",
                operaMini: "",
                ucWeb: "",
              };
            b =
              /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
                a,
              );
            if (b) {
              i.ie = b[1] ? parseFloat(b[1]) : b[4] ? parseFloat(b[4]) : "";
              i.firefox = b[2] || "";
              i.webkit = b[3] || "";
              if (b[3]) {
                c = /(?:Chrome\/(\d+\.\d+))/.exec(a);
                i.chrome = c ? c[1] : "";
                d = /(?:Edge\/(\d+\.\d+))/.exec(a);
                i.edge = d ? d[1] : "";
              }
            }
            f = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
            f && (i.osx = f[1]);
            b = /(?:Opera Mini\/(\d+(?:\.\d+)?))/.exec(a);
            b && (i.operaMini = b[1]);
            c = /(?:UCWEB\/(\d+(?:\.\d+))?)/.exec(a);
            c && (i.ucWeb = c[1] || "2.0");
            function j(a) {
              return ES(a.split("."), "map", !0, function (a) {
                return parseFloat(a);
              });
            }
            var k = {};
            ES(ES("Object", "keys", !1, i), "map", !0, function (a) {
              (k[a] = function () {
                return parseFloat(i[a]);
              }),
                (k[a].getVersionParts = function () {
                  return j(i[a]);
                });
            });
            ES(ES("Object", "keys", !1, g), "map", !0, function (a) {
              k[a] = function () {
                return g[a];
              };
            });
            k.mobile = function () {
              return g.iphone || g.ipad || g.android || h;
            };
            k.mTouch = function () {
              return g.android || g.iphone || g.ipad;
            };
            k.facebookInAppBrowser = function () {
              return g.nativeApp || g.nativeAndroidApp;
            };
            k.inAppBrowser = function () {
              return g.nativeApp || g.nativeAndroidApp || g.nativeInstagramApp;
            };
            k.mBasic = function () {
              return !!(i.ucWeb || i.operaMini);
            };
            e.exports = k;
          },
          null,
        );
        __d(
          "getBlankIframeSrc",
          ["sdk.UA"],
          function (a, b, c, d, e, f, g) {
            function a() {
              return g.ie() < 10 ? "javascript:false" : "about:blank";
            }
            e.exports = a;
          },
          null,
        );
        __d(
          "DOMWrapper",
          [],
          function (a, b, c, d, e, f) {
            var g, h;
            a = {
              setRoot: function (a) {
                g = a;
              },
              getRoot: function () {
                return g || document.body;
              },
              setWindow: function (a) {
                h = a;
              },
              getWindow: function () {
                return h || self;
              },
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "dotAccess",
          [],
          function (a, b, c, d, e, f) {
            function a(a, b, c) {
              b = b.split(".");
              do {
                var d = b.shift();
                a = a[d] || (c && (a[d] = {}));
              } while (b.length && a);
              return a;
            }
            e.exports = a;
          },
          null,
        );
        __d(
          "wrapFunction",
          [],
          function (a, b, c, d, e, f) {
            __p && __p();
            var g = {};
            a = function (a, b, c) {
              return function () {
                var d = b in g ? g[b](a, c) : a;
                for (
                  var e = arguments.length, f = new Array(e), h = 0;
                  h < e;
                  h++
                )
                  f[h] = arguments[h];
                return d.apply(this, f);
              };
            };
            a.setWrapper = function (a, b) {
              g[b] = a;
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "GlobalCallback",
          ["DOMWrapper", "dotAccess", "guid", "wrapFunction"],
          function (a, b, c, d, e, f, g, h, i, j) {
            __p && __p();
            var k, l;
            a = {
              setPrefix: function (a) {
                (k = h(g.getWindow(), a, !0)), (l = a);
              },
              create: function (a, b) {
                k || this.setPrefix("__globalCallbacks");
                var c = i();
                k[c] = j(a, "entry", b || "GlobalCallback");
                return l + "." + c;
              },
              remove: function (a) {
                a = a.substring(l.length + 1);
                delete k[a];
              },
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "insertIframe",
          ["GlobalCallback", "getBlankIframeSrc", "guid"],
          function (a, b, c, d, e, f, g, h, i) {
            __p && __p();
            function a(a) {
              __p && __p();
              a.id = a.id || i();
              a.name = a.name || i();
              var b = !1,
                c = !1,
                d = function () {
                  b &&
                    !c &&
                    ((c = !0), a.onload && a.onload(a.root.firstChild));
                },
                e = g.create(d);
              if (document.attachEvent) {
                var f =
                  '<iframe id="' +
                  a.id +
                  '" name="' +
                  a.name +
                  '"' +
                  (a.title ? ' title="' + a.title + '"' : "") +
                  (a.className ? ' class="' + a.className + '"' : "") +
                  ' style="border:none;' +
                  (a.width ? "width:" + a.width + "px;" : "") +
                  (a.height ? "height:" + a.height + "px;" : "") +
                  '" src="' +
                  h() +
                  '" frameborder="0" scrolling="no" allowtransparency="true" onload="' +
                  e +
                  '()"></iframe>';
                a.root.innerHTML =
                  '<iframe src="' +
                  h() +
                  '" frameborder="0" scrolling="no" style="height:1px"></iframe>';
                b = !0;
                setTimeout(function () {
                  (a.root.innerHTML = f),
                    (a.root.firstChild.src = a.url),
                    a.onInsert && a.onInsert(a.root.firstChild);
                }, 0);
              } else {
                e = document.createElement("iframe");
                e.id = a.id;
                e.name = a.name;
                e.onload = d;
                e.scrolling = "no";
                e.style.border = "none";
                e.style.overflow = "hidden";
                a.title && (e.title = a.title);
                a.className && (e.className = a.className);
                a.height !== undefined && (e.style.height = a.height + "px");
                a.width !== undefined &&
                  (a.width == "100%"
                    ? (e.style.width = a.width)
                    : (e.style.width = a.width + "px"));
                a.root.appendChild(e);
                b = !0;
                e.src = a.url;
                a.onInsert && a.onInsert(e);
              }
            }
            e.exports = a;
          },
          null,
        );
        __d(
          "sdk.Runtime",
          ["JSSDKRuntimeConfig", "sdk.Model"],
          function (a, b, c, d, e, f, g, h) {
            __p && __p();
            var i = { UNKNOWN: 0, PAGETAB: 1, CANVAS: 2, PLATFORM: 4 },
              j = new h({
                AccessToken: "",
                AutoLogAppEvents: !1,
                ClientID: "",
                CookieUserID: "",
                Environment: i.UNKNOWN,
                Initialized: !1,
                IsVersioned: !1,
                KidDirectedSite: undefined,
                Locale: g.locale,
                LoggedIntoFacebook: undefined,
                LoginStatus: undefined,
                Revision: g.revision,
                Rtl: g.rtl,
                Scope: undefined,
                SDKAB: g.sdkab,
                SDKUrl: g.sdkurl,
                SDKNS: g.sdkns,
                Secure: undefined,
                UseCookie: !1,
                UserID: "",
                Version: undefined,
              });
            ES("Object", "assign", !1, j, {
              ENVIRONMENTS: i,
              isEnvironment: function (a) {
                var b = this.getEnvironment();
                return (a | b) === b;
              },
              isCanvasEnvironment: function () {
                return (
                  this.isEnvironment(i.CANVAS) || this.isEnvironment(i.PAGETAB)
                );
              },
            });
            (function () {
              var a = /app_runner/.test(window.name)
                ? i.PAGETAB
                : /iframe_canvas/.test(window.name)
                ? i.CANVAS
                : i.UNKNOWN;
              (a | i.PAGETAB) === a && (a |= i.CANVAS);
              j.setEnvironment(a);
            })();
            e.exports = j;
          },
          null,
        );
        __d(
          "sdk.domReady",
          ["sdk.Runtime"],
          function (a, b, c, d, e, f, g) {
            __p && __p();
            var h;
            b =
              "readyState" in document
                ? /loaded|complete/.test(document.readyState)
                : !!document.body;
            function i() {
              if (!h) return;
              var a;
              while ((a = h.shift())) a();
              h = null;
            }
            function a(a) {
              if (h) {
                h.push(a);
                return;
              } else a();
            }
            if (!b) {
              h = [];
              document.addEventListener
                ? (document.addEventListener("DOMContentLoaded", i, !1),
                  window.addEventListener("load", i, !1))
                : document.attachEvent &&
                  (document.attachEvent("onreadystatechange", i),
                  window.attachEvent("onload", i));
              if (document.documentElement.doScroll && window == window.top) {
                c = function a() {
                  try {
                    g.getRtl()
                      ? document.documentElement.doScroll("right")
                      : document.documentElement.doScroll("left");
                  } catch (b) {
                    setTimeout(a, 0);
                    return;
                  }
                  i();
                };
                c();
              }
            }
            e.exports = a;
          },
          3,
        );
        __d(
          "sdk.Content",
          ["Log", "sdk.domReady", "sdk.UA"],
          function (a, b, c, d, e, f, g, h, i) {
            __p && __p();
            var j,
              k = {
                append: function (a, b) {
                  b ||
                    (!j
                      ? ((j = b = document.getElementById("fb-root")),
                        b ||
                          (g.warn(
                            'The "fb-root" div has not been created, auto-creating',
                          ),
                          (j = b = document.createElement("div")),
                          (b.id = "fb-root"),
                          i.ie() || !document.body
                            ? h(function () {
                                document.body.appendChild(b);
                              })
                            : document.body.appendChild(b)),
                        (b.className += " fb_reset"))
                      : (b = j));
                  if (typeof a === "string") {
                    var c = document.createElement("div");
                    b.appendChild(c).innerHTML = a;
                    return c;
                  } else return b.appendChild(a);
                },
                appendHidden: function (a) {
                  if (!b) {
                    var b = document.createElement("div"),
                      c = b.style;
                    c.position = "absolute";
                    c.top = "-10000px";
                    c.width = c.height = 0;
                    b = k.append(b);
                  }
                  return k.append(a, b);
                },
                submitToTarget: function (a, b) {
                  __p && __p();
                  var c = document.createElement("form");
                  c.action = a.url;
                  c.target = a.target;
                  c.method = b ? "GET" : "POST";
                  k.appendHidden(c);
                  for (var d in a.params)
                    if (Object.prototype.hasOwnProperty.call(a.params, d)) {
                      b = a.params[d];
                      if (b !== null && b !== undefined) {
                        var e = document.createElement("input");
                        e.name = d;
                        e.value = b;
                        c.appendChild(e);
                      }
                    }
                  c.submit();
                  c.parentNode.removeChild(c);
                },
              };
            e.exports = k;
          },
          null,
        );
        __d(
          "QueryString",
          [],
          function (a, b, c, d, e, f) {
            __p && __p();
            function a(a) {
              __p && __p();
              var b = [];
              ES(
                ES("Object", "keys", !1, a).sort(),
                "forEach",
                !0,
                function (c) {
                  var d = a[c];
                  if (d === undefined) return;
                  if (d === null) {
                    b.push(c);
                    return;
                  }
                  b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d));
                },
              );
              return b.join("&");
            }
            function b(a, b) {
              __p && __p();
              b === void 0 && (b = !1);
              var c = {};
              if (a === "") return c;
              a = a.split("&");
              for (var d = 0; d < a.length; d++) {
                var e = a[d].split("=", 2),
                  f = decodeURIComponent(e[0]);
                if (b && Object.prototype.hasOwnProperty.call(c, f))
                  throw new URIError("Duplicate key: " + f);
                c[f] = e.length === 2 ? decodeURIComponent(e[1]) : null;
              }
              return c;
            }
            function c(a, b) {
              return (
                a +
                (ES(a, "indexOf", !0, "?") !== -1 ? "&" : "?") +
                (typeof b === "string" ? b : g.encode(b))
              );
            }
            var g = { encode: a, decode: b, appendToUrl: c };
            e.exports = g;
          },
          null,
        );
        __d(
          "URIRFC3986",
          [],
          function (a, b, c, d, e, f) {
            __p && __p();
            var g = new RegExp(
              "^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?",
            );
            a = {
              parse: function (a) {
                __p && __p();
                if (ES(a, "trim", !0) === "") return null;
                a = a.match(g);
                if (a == null) return null;
                var b = {};
                b.uri = a[0] ? a[0] : null;
                b.scheme = a[1] ? a[1].substr(0, a[1].length - 1) : null;
                b.authority = a[2] ? a[2].substr(2) : null;
                b.userinfo = a[3] ? a[3].substr(0, a[3].length - 1) : null;
                b.host = a[2] ? a[4] : null;
                b.port = a[5]
                  ? a[5].substr(1)
                    ? parseInt(a[5].substr(1), 10)
                    : null
                  : null;
                b.path = a[6] ? a[6] : null;
                b.query = a[7] ? a[7].substr(1) : null;
                b.fragment = a[8] ? a[8].substr(1) : null;
                b.isGenericURI = b.authority === null && !!b.scheme;
                return b;
              },
            };
            e.exports = a;
          },
          18,
        );
        __d(
          "createObjectFrom",
          [],
          function (a, b, c, d, e, f) {
            __p && __p();
            function g(a, b) {
              if (b === undefined) return g(a, !0);
              var c = {};
              if (ES("Array", "isArray", !1, b))
                for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];
              else for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b;
              return c;
            }
            e.exports = g;
          },
          18,
        );
        __d(
          "URISchemes",
          ["createObjectFrom"],
          function (a, b, c, d, e, f, g) {
            var h = g([
              "blob",
              "cmms",
              "fb",
              "fba",
              "fbatwork",
              "fb-ama",
              "fb-workchat",
              "fb-workchat-secure",
              "fb-messenger",
              "fb-messenger-public",
              "fb-messenger-group-thread",
              "fb-page-messages",
              "fb-pma",
              "fbcf",
              "fbconnect",
              "fbinternal",
              "fbmobilehome",
              "fbrpc",
              "file",
              "ftp",
              "http",
              "https",
              "mailto",
              "ms-app",
              "intent",
              "itms",
              "itms-apps",
              "itms-services",
              "market",
              "svn+ssh",
              "fbstaging",
              "tel",
              "sms",
              "pebblejs",
              "sftp",
              "whatsapp",
              "moments",
              "flash",
              "fblite",
              "chrome-extension",
              "webcal",
              "fb124024574287414",
              "fb124024574287414rc",
              "fb124024574287414master",
              "fb1576585912599779",
              "fb929757330408142",
              "designpack",
              "fbpixelcloud",
              "fbapi20130214",
              "fb1196383223757595",
              "tbauth",
              "oculus",
              "oculus.store",
              "skype",
              "callto",
              "workchat",
              "fb236786383180508",
              "fb1775440806014337",
              "data",
            ]);
            a = {
              isAllowed: function (a) {
                return !a
                  ? !0
                  : Object.prototype.hasOwnProperty.call(h, a.toLowerCase());
              },
            };
            e.exports = a;
          },
          18,
        );
        __d(
          "eprintf",
          [],
          function (a, b, c, d, e, f) {
            __p && __p();
            function g(a) {
              for (
                var b = arguments.length,
                  c = new Array(b > 1 ? b - 1 : 0),
                  d = 1;
                d < b;
                d++
              )
                c[d - 1] = arguments[d];
              var e = ES(c, "map", !0, function (a) {
                  return String(a);
                }),
                f = a.split("%s").length - 1;
              if (f !== e.length)
                return g(
                  "eprintf args number mismatch: %s",
                  ES("JSON", "stringify", !1, [a].concat(e)),
                );
              var h = 0;
              return a.replace(/%s/g, function () {
                return String(e[h++]);
              });
            }
            e.exports = g;
          },
          null,
        );
        __d(
          "ex",
          ["eprintf"],
          function (a, b, c, d, e, f, g) {
            function h(a) {
              for (
                var b = arguments.length,
                  c = new Array(b > 1 ? b - 1 : 0),
                  d = 1;
                d < b;
                d++
              )
                c[d - 1] = arguments[d];
              var e = ES(c, "map", !0, function (a) {
                  return String(a);
                }),
                f = a.split("%s").length - 1;
              return f !== e.length
                ? h(
                    "ex args number mismatch: %s",
                    ES("JSON", "stringify", !1, [a].concat(e)),
                  )
                : h._prefix +
                    ES("JSON", "stringify", !1, [a].concat(e)) +
                    h._suffix;
            }
            h._prefix = "<![EX[";
            h._suffix = "]]>";
            e.exports = h;
          },
          null,
        );
        __d(
          "javascript_shared_TAAL_OpCode",
          [],
          function (a, b, c, d, e, f) {
            e.exports = ES("Object", "freeze", !1, {
              PREVIOUS_FILE: 1,
              PREVIOUS_FRAME: 2,
              PREVIOUS_DIR: 3,
            });
          },
          null,
        );
        __d(
          "TAALOpcodes",
          ["javascript_shared_TAAL_OpCode"],
          function (a, b, c, d, e, f, g) {
            "use strict";
            a = {
              previousFile: function () {
                return g.PREVIOUS_FILE;
              },
              previousFrame: function () {
                return g.PREVIOUS_FRAME;
              },
              previousDirectory: function () {
                return g.PREVIOUS_DIR;
              },
              getString: function (a) {
                return a && a.length ? " TAAL[" + a.join(";") + "]" : "";
              },
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "TAAL",
          ["TAALOpcodes"],
          function (a, b, c, d, e, f, g) {
            "use strict";
            a = {
              blameToPreviousFile: function (a) {
                return this.applyOpcodes(a, [g.previousFile()]);
              },
              blameToPreviousFrame: function (a) {
                return this.applyOpcodes(a, [g.previousFrame()]);
              },
              blameToPreviousDirectory: function (a) {
                return this.applyOpcodes(a, [g.previousDirectory()]);
              },
              applyOpcodes: function (a, b) {
                return a + g.getString(b);
              },
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "invariant",
          ["TAAL", "ex", "sprintf"],
          function (a, b, c, d, e, f, g, h, i) {
            "use strict";
            __p && __p();
            var j = h;
            function a(a, b) {
              __p && __p();
              if (!a) {
                var c;
                if (b === undefined)
                  c = new Error(
                    g.blameToPreviousFrame(
                      "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
                    ),
                  );
                else {
                  for (
                    var d = arguments.length,
                      e = new Array(d > 2 ? d - 2 : 0),
                      f = 2;
                    f < d;
                    f++
                  )
                    e[f - 2] = arguments[f];
                  c = new Error(
                    g.blameToPreviousFrame(j.apply(undefined, [b].concat(e))),
                  );
                  c.name = "Invariant Violation";
                  c.messageWithParams = [b].concat(e);
                }
                throw c;
              }
            }
            e.exports = a;
          },
          null,
        );
        __d(
          "setHostSubdomain",
          [],
          function (a, b, c, d, e, f) {
            function a(a, b) {
              a = a.split(".");
              a.length < 3 ? a.unshift(b) : (a[0] = b);
              return a.join(".");
            }
            e.exports = a;
          },
          null,
        );
        __d(
          "URIBase",
          ["URIRFC3986", "URISchemes", "ex", "invariant", "setHostSubdomain"],
          function (a, b, c, d, e, f, g, h, i, j, k) {
            __p && __p();
            var l = new RegExp(
                "[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]",
              ),
              m = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");
            function n(a, b, c, d) {
              __p && __p();
              if (!b) return !0;
              if (b instanceof p) {
                a.setProtocol(b.getProtocol());
                a.setDomain(b.getDomain());
                a.setPort(b.getPort());
                a.setPath(b.getPath());
                a.setQueryData(d.deserialize(d.serialize(b.getQueryData())));
                a.setFragment(b.getFragment());
                a.setIsGeneric(b.getIsGeneric());
                a.setForceFragmentSeparator(b.getForceFragmentSeparator());
                return !0;
              }
              b = ES(b.toString(), "trim", !0);
              var e = g.parse(b) || { fragment: null, scheme: null };
              if (!c && !h.isAllowed(e.scheme)) return !1;
              a.setProtocol(e.scheme || "");
              if (!c && l.test(e.host || "")) return !1;
              a.setDomain(e.host || "");
              a.setPort(e.port || "");
              a.setPath(e.path || "");
              if (c) a.setQueryData(d.deserialize(e.query || "") || {});
              else
                try {
                  a.setQueryData(d.deserialize(e.query || "") || {});
                } catch (a) {
                  return !1;
                }
              a.setFragment(e.fragment || "");
              e.fragment === "" && a.setForceFragmentSeparator(!0);
              a.setIsGeneric(e.isGenericURI || !1);
              if (e.userinfo !== null)
                if (c)
                  throw new Error(
                    i(
                      "URI.parse: invalid URI (userinfo is not allowed in a URI): %s",
                      a.toString(),
                    ),
                  );
                else return !1;
              if (!a.getDomain() && ES(a.getPath(), "indexOf", !0, "\\") !== -1)
                if (c)
                  throw new Error(
                    i(
                      "URI.parse: invalid URI (no domain but multiple back-slashes): %s",
                      a.toString(),
                    ),
                  );
                else return !1;
              if (!a.getProtocol() && m.test(b))
                if (c)
                  throw new Error(
                    i(
                      "URI.parse: invalid URI (unsafe protocol-relative URLs): %s",
                      a.toString(),
                    ),
                  );
                else return !1;
              if (
                a.getDomain() &&
                a.getPath() &&
                !ES(a.getPath(), "startsWith", !0, "/")
              )
                if (c)
                  throw new Error(
                    i(
                      "URI.parse: invalid URI (domain and path where path lacks leading slash): %s",
                      a.toString(),
                    ),
                  );
                else return !1;
              return !0;
            }
            var o = [];
            p.tryParse = function (a, b) {
              "use strict";
              var c = new p(null, b);
              return n(c, a, !1, b) ? c : null;
            };
            p.isValid = function (a, b) {
              "use strict";
              return !!p.tryParse(a, b);
            };
            function p(a, b) {
              "use strict";
              b || j(0),
                (this.$9 = b),
                (this.$7 = ""),
                (this.$1 = ""),
                (this.$6 = ""),
                (this.$5 = ""),
                (this.$3 = ""),
                (this.$4 = !1),
                (this.$8 = {}),
                (this.$2 = !1),
                n(this, a, !0, b);
            }
            p.prototype.setProtocol = function (a) {
              "use strict";
              h.isAllowed(a) || j(0);
              this.$7 = a;
              return this;
            };
            p.prototype.getProtocol = function () {
              "use strict";
              return (this.$7 || "").toLowerCase();
            };
            p.prototype.setSecure = function (a) {
              "use strict";
              return this.setProtocol(a ? "https" : "http");
            };
            p.prototype.isSecure = function () {
              "use strict";
              return this.getProtocol() === "https";
            };
            p.prototype.setDomain = function (a) {
              "use strict";
              if (l.test(a))
                throw new Error(
                  i(
                    "URI.setDomain: unsafe domain specified: %s for url %s",
                    a,
                    this.toString(),
                  ),
                );
              this.$1 = a;
              return this;
            };
            p.prototype.getDomain = function () {
              "use strict";
              return this.$1;
            };
            p.prototype.setPort = function (a) {
              "use strict";
              this.$6 = a;
              return this;
            };
            p.prototype.getPort = function () {
              "use strict";
              return this.$6;
            };
            p.prototype.setPath = function (a) {
              "use strict";
              this.$5 = a;
              return this;
            };
            p.prototype.getPath = function () {
              "use strict";
              return this.$5;
            };
            p.prototype.addQueryData = function (a, b) {
              "use strict";
              Object.prototype.toString.call(a) === "[object Object]"
                ? ES("Object", "assign", !1, this.$8, a)
                : (this.$8[a] = b);
              return this;
            };
            p.prototype.setQueryData = function (a) {
              "use strict";
              this.$8 = a;
              return this;
            };
            p.prototype.getQueryData = function () {
              "use strict";
              return this.$8;
            };
            p.prototype.removeQueryData = function (a) {
              "use strict";
              ES("Array", "isArray", !1, a) || (a = [a]);
              for (var b = 0, c = a.length; b < c; ++b) delete this.$8[a[b]];
              return this;
            };
            p.prototype.setFragment = function (a) {
              "use strict";
              this.$3 = a;
              this.setForceFragmentSeparator(!1);
              return this;
            };
            p.prototype.getFragment = function () {
              "use strict";
              return this.$3;
            };
            p.prototype.setForceFragmentSeparator = function (a) {
              "use strict";
              this.$2 = a;
              return this;
            };
            p.prototype.getForceFragmentSeparator = function () {
              "use strict";
              return this.$2;
            };
            p.prototype.setIsGeneric = function (a) {
              "use strict";
              this.$4 = a;
              return this;
            };
            p.prototype.getIsGeneric = function () {
              "use strict";
              return this.$4;
            };
            p.prototype.isEmpty = function () {
              "use strict";
              return !(
                this.getPath() ||
                this.getProtocol() ||
                this.getDomain() ||
                this.getPort() ||
                ES("Object", "keys", !1, this.getQueryData()).length > 0 ||
                this.getFragment()
              );
            };
            p.prototype.toString = function () {
              "use strict";
              var a = this;
              for (var b = 0; b < o.length; b++) a = o[b](a);
              return a.$10();
            };
            p.prototype.$10 = function () {
              "use strict";
              __p && __p();
              var a = "",
                b = this.getProtocol();
              b && (a += b + ":" + (this.getIsGeneric() ? "" : "//"));
              b = this.getDomain();
              b && (a += b);
              b = this.getPort();
              b && (a += ":" + b);
              b = this.getPath();
              b ? (a += b) : a && (a += "/");
              b = this.$9.serialize(this.getQueryData());
              b && (a += "?" + b);
              b = this.getFragment();
              b
                ? (a += "#" + b)
                : this.getForceFragmentSeparator() && (a += "#");
              return a;
            };
            p.registerFilter = function (a) {
              "use strict";
              o.push(a);
            };
            p.prototype.getOrigin = function () {
              "use strict";
              var a = this.getPort();
              return (
                this.getProtocol() +
                "://" +
                this.getDomain() +
                (a ? ":" + a : "")
              );
            };
            p.prototype.getQualifiedURIBase = function () {
              "use strict";
              return new p(this, this.$9).qualify();
            };
            p.prototype.qualify = function () {
              "use strict";
              if (!this.getDomain()) {
                var a = new p(window.location.href, this.$9);
                this.setProtocol(a.getProtocol())
                  .setDomain(a.getDomain())
                  .setPort(a.getPort());
              }
              return this;
            };
            p.prototype.setSubdomain = function (a) {
              "use strict";
              var b = this.qualify().getDomain();
              return this.setDomain(k(b, a));
            };
            p.prototype.getSubdomain = function () {
              "use strict";
              if (!this.getDomain()) return "";
              var a = this.getDomain().split(".");
              if (a.length <= 2) return "";
              else return a[0];
            };
            e.exports = p;
          },
          null,
        );
        __d(
          "sdk.URI",
          ["Assert", "QueryString", "URIBase"],
          function (a, b, c, d, e, f, g, h, i) {
            __p && __p();
            var j,
              k = /\.facebook\.com$/,
              l = {
                serialize: function (a) {
                  return a ? h.encode(a) : "";
                },
                deserialize: function (a) {
                  return a ? h.decode(a) : {};
                },
              };
            b = babelHelpers.inherits(a, i);
            j = b && b.prototype;
            function a(a) {
              "use strict";
              g.isString(a, "The passed argument was of invalid type."),
                j.constructor.call(this, a, l);
            }
            a.prototype.isFacebookURI = function () {
              "use strict";
              return k.test(this.getDomain());
            };
            a.prototype.valueOf = function () {
              "use strict";
              return this.toString();
            };
            a.isValidURI = function (a) {
              "use strict";
              return i.isValid(a, l);
            };
            e.exports = a;
          },
          null,
        );
        __d(
          "ak.Impressions",
          [
            "ak.Runtime",
            "getBlankIframeSrc",
            "guid",
            "insertIframe",
            "sdk.Content",
            "sdk.URI",
          ],
          function (a, b, c, d, e, f, g, h, i, j, k, l) {
            __p && __p();
            function a(event, a) {
              __p && __p();
              a = a || {};
              var b =
                window.location.origin ||
                new l(window.location.href).getOrigin();
              a.origin = b;
              a.app_id = g.getAppID();
              a.version = g.getVersion();
              a.logging_ref = g.getLoggingRef();
              a.sdk = g.getSDKName();
              b = "https://" + g.getDomain() + "/impressions/" + event + "/";
              var c = new l(b).setQueryData(a).toString();
              if (c.length <= 2e3) {
                var d = new Image();
                d.src = c;
              } else {
                d = i();
                var e = k.appendHidden("");
                j({
                  url: h(),
                  root: e,
                  name: d,
                  className: "fb_hidden fb_invisible",
                  onload: function () {
                    e.parentNode.removeChild(e);
                  },
                });
                k.submitToTarget({ url: b, target: d, params: a });
              }
            }
            e.exports = { log: a };
          },
          null,
        );
        __d(
          "sdk.FeatureFunctor",
          ["invariant"],
          function (a, b, c, d, e, f, g) {
            __p && __p();
            function h(a, b, c) {
              if (a.features && b in a.features) {
                a = a.features[b];
                if (typeof a === "object" && typeof a.rate === "number")
                  if (a.rate && Math.random() * 100 <= a.rate)
                    return a.value || !0;
                  else return a.value ? null : !1;
                else return a;
              }
              return c;
            }
            function a(a) {
              return function (b, c) {
                arguments.length >= 2 || g(0);
                return h(a, b, c);
              };
            }
            e.exports = { create: a };
          },
          null,
        );
        __d(
          "ak.feature",
          ["AccountKitJSSDKFeatureConfig", "sdk.FeatureFunctor"],
          function (a, b, c, d, e, f, g, h) {
            e.exports = h.create(g);
          },
          null,
        );
        __d(
          "normalizeError",
          ["sdk.UA"],
          function (a, b, c, d, e, f, g) {
            function a(a) {
              var b = {
                line: a.lineNumber || a.line,
                message: a.message,
                name: a.name,
                script: a.fileName || a.sourceURL || a.script,
                stack: a.stackTrace || a.stack,
              };
              b._originalError = a;
              a = /([\w:\.\/]+\.js):(\d+)/.exec(a.stack);
              g.chrome() &&
                a &&
                ((b.script = a[1]), (b.line = parseInt(a[2], 10)));
              for (var c in b) b[c] == null && delete b[c];
              return b;
            }
            e.exports = a;
          },
          null,
        );
        __d(
          "sdk.ErrorHandler",
          ["ManagedError", "normalizeError", "wrapFunction"],
          function (a, b, c, d, e, f, g, h, i) {
            __p && __p();
            function a(a, b) {
              __p && __p();
              var c = "";
              function d(a) {
                var c = a._originalError;
                delete a._originalError;
                b(a);
                throw c;
              }
              function e(b, e) {
                __p && __p();
                return function () {
                  __p && __p();
                  if (!a) return b.apply(this, arguments);
                  try {
                    c = e;
                    return b.apply(this, arguments);
                  } catch (a) {
                    if (a instanceof g) throw a;
                    var f = h(a);
                    f.entry = e;
                    var i = ES(
                      Array.prototype.slice.call(arguments),
                      "map",
                      !0,
                      function (a) {
                        var b = Object.prototype.toString.call(a);
                        return /^\[object (String|Number|Boolean|Object|Date)\]$/.test(
                          b,
                        )
                          ? a
                          : a.toString();
                      },
                    );
                    f.args = ES("JSON", "stringify", !1, i).substring(0, 200);
                    d(f);
                  } finally {
                    c = "";
                  }
                };
              }
              function f(a) {
                a.__wrapper ||
                  (a.__wrapper = function () {
                    try {
                      return a.apply(this, arguments);
                    } catch (a) {
                      window.setTimeout(function () {
                        throw a;
                      }, 0);
                      return !1;
                    }
                  });
                return a.__wrapper;
              }
              function j(a) {
                try {
                  return a && a.callee && a.callee.caller
                    ? a.callee.caller.name
                    : "";
                } catch (a) {
                  return "";
                }
              }
              function k(a, b) {
                return function (d, e) {
                  var f =
                    b +
                    ":" +
                    (c || "[global]") +
                    ":" +
                    (d.name || "[anonymous]" + j(arguments));
                  return a(i(d, "entry", f), e);
                };
              }
              a &&
                ((setTimeout = k(setTimeout, "setTimeout")),
                (setInterval = k(setInterval, "setInterval")),
                i.setWrapper(e, "entry"));
              return { guard: e, unguard: f };
            }
            e.exports = { create: a };
          },
          null,
        );
        __d(
          "ak.ErrorHandling",
          ["ak.feature", "ak.Impressions", "sdk.ErrorHandler"],
          function (a, b, c, d, e, f, g, h, i) {
            a = g("e_handler", !1);
            e.exports = i.create(a, function (a) {
              h.log("e_handler", { details: a.name || a.message, error: a });
            });
          },
          null,
        );
        __d(
          "ak.protect",
          ["ak.ErrorHandling"],
          function (a, b, c, d, e, f, g) {
            __p && __p();
            function h(a, b, c, d) {
              __p && __p();
              return g.guard(function () {
                __p && __p();
                function e(a) {
                  if (ES("Array", "isArray", !1, a)) return ES(a, "map", !0, e);
                  return a && typeof a === "object" && a.__wrapped
                    ? a.__wrapped
                    : typeof a === "function" && /^function/.test(a.toString())
                    ? g.unguard(a)
                    : a;
                }
                var f = ES(Array.prototype.slice.call(arguments), "map", !0, e),
                  i = a.apply(d, f),
                  j,
                  k = !0;
                if (i && typeof i === "object") {
                  j = ES("Object", "create", !1, i);
                  j.__wrapped = i;
                  for (var c in i) {
                    var l = i[c];
                    if (typeof l !== "function" || c === "constructor")
                      continue;
                    k = !1;
                    j[c] = h(l, b + ":" + c, c, i);
                  }
                }
                return !k ? j : k ? i : j;
              }, b);
            }
            e.exports = h;
          },
          null,
        );
        __d(
          "AccountKit",
          ["Log", "ak.protect", "sdk.domReady"],
          function (a, b, c, d, e, f, g, h, i) {
            __p && __p();
            var j = (window.AccountKit = {});
            g.level = 0;
            i(function () {
              g.info("domReady");
            });
            function a(a) {
              ES(ES("Object", "keys", !1, a), "forEach", !0, function (b) {
                var c = a[b];
                if (typeof c === "function") {
                  var d = b;
                  c = h(c, d, b, a);
                  c && (j[b] = c);
                }
              });
            }
            e.exports = { provide: a };
          },
          null,
        );
        __d(
          "ak.init",
          [
            "ak.ErrorHandling",
            "ak.feature",
            "ak.Impressions",
            "ak.Runtime",
            "sdk.UA",
          ],
          function (a, b, c, d, e, f, g, h, i, j, k) {
            __p && __p();
            var l =
              "https://developers.facebook.com/docs/accountkit/integratingweb#configureloginhtml";
            function m(a) {
              var b =
                (typeof a === "number" && a > 0) ||
                (typeof a === "string" && /^[0-9]{1,21}$/.test(a));
              if (b) return a.toString();
              throw new Error(
                "Invalid App Id: Must be a number or numeric string representing the application id. For more details, see " +
                  l,
              );
            }
            function n(a) {
              if (typeof a === "string" && /^v\d+\.\d\d?$/.test(a)) return a;
              throw new Error(
                'Invalid version: must be in the form "v{major}.{minor}". For more details, see ' +
                  l,
              );
            }
            function a(a) {
              __p && __p();
              if (j.getInitialized())
                throw new Error(
                  "AccountKit.init has already been called. This indicates a problem in your code.",
                );
              var b = m(a.appId);
              j.setAppID(b);
              a.fbAppEventsEnabled === !1
                ? j.setFBAppEventsEnabled(!1)
                : j.setFBAppEventsEnabled(!0);
              a.redirect && j.setRedirect(a.redirect);
              k.inAppBrowser() || k.ucBrowser()
                ? j.setDisplay("modal")
                : a.display && j.setDisplay(a.display);
              a.debug && j.setDebug(a.debug);
              a.state && j.setState(a.state);
              b = n(a.version);
              j.setVersion(b);
              j.setInitialized(!0);
              h("i_inited", !0) && i.log("i_inited");
            }
            setTimeout(function () {
              typeof window.AccountKit_OnInteractive === "function" &&
                !window.AccountKit_OnInteractive.hasRun &&
                ((window.AccountKit_OnInteractive.hasRun = !0),
                g.unguard(window.AccountKit_OnInteractive)());
            }, 0);
            e.exports = a;
          },
          null,
        );
        __d(
          "legacy:ak.init.legacy",
          ["AccountKit", "ak.init"],
          function (a, b, c, d, e, f, g, h) {
            g.provide({ init: h });
          },
          3,
        );
        __d(
          "ak.PopupMonitor",
          ["ak.feature", "ak.Impressions"],
          function (a, b, c, d, e, f, g, h) {
            __p && __p();
            var i, j, k;
            function l(a, b) {
              var c = !1;
              try {
                !a || (a.closed && (j || (!j && k)))
                  ? b(j)
                  : a.closed && !j
                  ? ((k = !0), (c = !0))
                  : (c = !0);
              } catch (a) {
                g("e_popup_not_opened", !0) &&
                  h.log("e_popup_not_opened", { details: a.name || a.message });
              }
              c && !i
                ? (i = setInterval(ES(l, "bind", !0, this, a, b), 100))
                : !c && i && m();
            }
            function a(a, b) {
              (j = !1), (k = !1), l(a, b);
            }
            function m() {
              i && (clearInterval(i), (i = null));
            }
            function b() {
              j = !0;
            }
            e.exports = { monitor: a, cancel: m, setIsResponseReceived: b };
          },
          null,
        );
        __d(
          "ak.PopupWindow",
          ["ak.PopupMonitor", "sdk.UA"],
          function (a, b, c, d, e, f, g, h) {
            __p && __p();
            var i = "ak.close_iframe",
              j = null,
              k = 10,
              l = 430,
              m = 360;
            function a(a, b, c, d) {
              __p && __p();
              var e =
                  window.screenX !== undefined
                    ? window.screenX
                    : window.screenLeft,
                f =
                  window.screenY !== undefined
                    ? window.screenY
                    : window.screenTop,
                n =
                  window.outerWidth !== undefined
                    ? window.outerWidth
                    : document.documentElement.clientWidth,
                o =
                  window.outerHeight !== undefined
                    ? window.outerHeight
                    : document.documentElement.clientHeight - 22,
                p =
                  window.innerWidth !== undefined
                    ? window.innerWidth
                    : document.documentElement.clientWidth,
                q =
                  window.innerHeight !== undefined
                    ? window.innerHeight
                    : document.documentElement.clientHeight;
              j && (g.cancel(), j.close());
              if (c === "modal") {
                c = function () {
                  window.postMessage(i, "*");
                };
                var r = h.mobile() ? p - k * 2 : l,
                  s = h.mobile() ? q - k * 2 : m,
                  t = document.createElement("iframe");
                d &&
                  (t.onload = function () {
                    var a =
                      "If X-Frame-Options is set to deny, please update the origin URL in the Account Kit developer page. If the iframe loads properly, please disregard this message. Remember to turn off debug mode in production.";
                    !1;
                  });
                t.setAttribute("src", a);
                t.setAttribute("width", r + "px");
                t.setAttribute("height", s + "px");
                t.setAttribute("style", "border:none;");
                d = "height:" + s + "px;";
                d += "width:" + r + "px;";
                d += "position:absolute;";
                s =
                  window.scrollY ||
                  window.scollTop ||
                  document.getElementsByTagName("html")[0].scrollTop;
                h.mobile()
                  ? ((d += "top:" + (k + s) + "px;"),
                    (d += "left:" + k + "px;"))
                  : ((d += "top:" + (q / 2 - m / 2 + s) + "px;"),
                    (d += "left:" + (p / 2 - l / 2) + "px;"));
                d += "z-index:1000;";
                var u = document.createElement("div");
                r = "top:" + s + "px;";
                r += "left:0px;";
                r += "height:100%;";
                r += "width:100%;";
                r += "position:absolute;";
                r += "background-color:#000;";
                r += "opacity:0.5;";
                u.setAttribute("style", r);
                var v = document.createElement("div");
                v.setAttribute("style", d);
                v.appendChild(t);
                document.body !== null && document.body.appendChild(v);
                document.body !== null && document.body.appendChild(u);
                q = function a(event) {
                  event.data === i &&
                    (window.removeEventListener("message", a, !1),
                    v.remove(),
                    u.remove());
                };
                window.addEventListener("message", q, !1);
                u.addEventListener("click", c, !1);
              } else {
                p = h.mobile() ? 0 : l;
                s = h.mobile() ? 0 : m;
                r = [];
                d = e < 0 ? window.screen.width + e : e;
                t = parseInt(d + (n - p) / 2, 10);
                q = parseInt(f + (o - s) / 2.5, 10);
                p > 0 && r.push("width=" + p);
                s > 0 && r.push("height=" + s);
                r.push("left=" + t);
                r.push("top=" + q);
                r.push("scrollbars=1");
                r.push("status=1,toolbar=0");
                c = r.join(",");
                j = window.open(a, "AccountKit_Popup", c);
                if (!j) return;
                g.monitor(j, function (a) {
                  a || b();
                });
              }
            }
            function b() {
              j ? j.close() : window.postMessage(i, "*");
            }
            e.exports = { open: a, close: b, modalClosedMessage: i };
          },
          null,
        );
        __d(
          "emptyFunction",
          [],
          function (a, b, c, d, e, f) {
            __p && __p();
            function a(a) {
              return function () {
                return a;
              };
            }
            b = function () {};
            b.thatReturns = a;
            b.thatReturnsFalse = a(!1);
            b.thatReturnsTrue = a(!0);
            b.thatReturnsNull = a(null);
            b.thatReturnsThis = function () {
              return this;
            };
            b.thatReturnsArgument = function (a) {
              return a;
            };
            e.exports = b;
          },
          null,
        );
        __d(
          "sdk.DOMEventListener",
          ["emptyFunction", "invariant", "wrapFunction"],
          function (a, b, c, d, e, f, g, h, i) {
            __p && __p();
            var j = !1;
            try {
              a = Object.defineProperty({}, "passive", {
                get: function () {
                  j = !0;
                },
              });
              window.addEventListener("test", null, a);
            } catch (a) {}
            var k, l;
            window.addEventListener
              ? ((k = function (a, b, c, d) {
                  d === void 0 && (d = !1),
                    (c.wrapper = i(c, "entry", "DOMEventListener.add " + b)),
                    a.addEventListener(b, c.wrapper, j ? d : !1);
                }),
                (l = function (a, b, c, d) {
                  d === void 0 && (d = !1),
                    a.removeEventListener(b, c.wrapper, j ? d : !1);
                }))
              : window.attachEvent
              ? ((k = function (a, b, c) {
                  (c.wrapper = i(c, "entry", "DOMEventListener.add " + b)),
                    a.attachEvent || h(0),
                    a.attachEvent("on" + b, c.wrapper);
                }),
                (l = function (a, b, c) {
                  a.detachEvent || h(0), a.detachEvent("on" + b, c.wrapper);
                }))
              : (l = k = g);
            b = {
              add: function (a, b, c, d) {
                d === void 0 && (d = !1);
                k(a, b, c, d);
                return {
                  remove: function () {
                    l(a, b, c, d);
                  },
                };
              },
              remove: l,
            };
            e.exports = b;
          },
          null,
        );
        __d(
          "ak.getAuthCode",
          [
            "Log",
            "ak.feature",
            "ak.Impressions",
            "ak.PopupMonitor",
            "ak.PopupWindow",
            "ak.Runtime",
            "sdk.DOMEventListener",
            "sdk.UA",
            "sdk.URI",
          ],
          function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
            __p && __p();
            var p = "AK_DIALOG_RESPONSE:",
              q = "NOT_AUTHENTICATED";
            function r(event) {
              return (
                event.origin !== undefined &&
                new RegExp(/\.accountkit\.com$/).test(event.origin)
              );
            }
            function s(event, a) {
              __p && __p();
              function b() {
                a({ status: q });
              }
              j.setIsResponseReceived();
              var c = event.data;
              if (c && ES(c, "startsWith", !0, p)) {
                k.close();
                var d = c.substring(p.length);
                try {
                  d = ES("JSON", "parse", !1, d);
                  if (d && d.redirect) {
                    var e = new o(d.redirect);
                    window.location.href = e.toString();
                  } else a(d);
                } catch (a) {
                  h("e_login_resp_parse_failed", !0) &&
                    i.log("e_login_resp_parse_failed", { response: c }),
                    g.warn(a.toString()),
                    b();
                }
              } else
                h("e_login_resp_parse_failed", !0) &&
                  i.log("e_login_resp_parse_failed", { response: c }),
                  g.warn("Incorrect response body."),
                  b();
            }
            function t(a, b, c) {
              __p && __p();
              var d = a.endpoint;
              delete a.endpoint;
              var e =
                window.location.origin ||
                new o(window.location.href).getOrigin();
              a.origin = e;
              a.app_id = l.getAppID();
              a.state = l.getState();
              a.logging_ref = l.getLoggingRef();
              a.sdk = l.getSDKName();
              a.locale = l.getLocale();
              a.fb_app_events_enabled = l.getFBAppEventsEnabled();
              a.redirect = l.getRedirect();
              a.display = l.getDisplay();
              l.getDebug() && (a.debug = l.getDebug());
              e = l.getVersion();
              e = "https://" + l.getDomain() + "/" + e + d;
              d = new o(e).setQueryData(a).toString();
              var f = m.add(window, "message", function (event) {
                (r(event) === !0 || event.data === k.modalClosedMessage) &&
                  (s(event, b), f.remove());
              });
              k.open(
                d,
                function () {
                  f.remove(), c();
                },
                a.display,
                a.debug,
              );
            }
            function a(a, b, c) {
              h("i_login", !0) && i.log("i_login", a);
              if (n.ie() < 8) {
                b({ status: q });
                return;
              }
              t(a, b, c);
            }
            e.exports = a;
          },
          null,
        );
        __d(
          "ak.input-validators",
          [],
          function (a, b, c, d, e, f) {
            __p && __p();
            function a(a) {
              return a ? /^\+[0-9]{1,3}$/.test(a) : !1;
            }
            function b(a) {
              return a ? a != null && /^[0-9()\s-]{1,25}$/.test(a) : !1;
            }
            function c(a) {
              return a ? a != null && /^[0-9]{6}$/.test(a) : !1;
            }
            function d(a) {
              return a ? a != null && /^.+@.+\..+$/.test(a) : !1;
            }
            function f(a) {
              return a ? a != null && a.length > 0 : !1;
            }
            e.exports = {
              validateCountryCode: a,
              validatePhoneNumber: b,
              validateConfirmationCode: c,
              validateEmailAddress: d,
              validateNonEmptyString: f,
            };
          },
          null,
        );
        __d(
          "UserAgent_DEPRECATED",
          [],
          function (a, b, c, d, e, f) {
            __p && __p();
            var g = !1,
              h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              u,
              v;
            function w() {
              __p && __p();
              if (g) return;
              g = !0;
              var a = navigator.userAgent,
                b =
                  /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
                    a,
                  ),
                c = /(Mac OS X)|(Windows)|(Linux)/.exec(a);
              s = /\b(iPhone|iP[ao]d)/.exec(a);
              t = /\b(iP[ao]d)/.exec(a);
              q = /Android/i.exec(a);
              u = /FBAN\/\w+;/i.exec(a);
              v = /Mobile/i.exec(a);
              r = !!/Win64/.exec(a);
              if (b) {
                h = b[1] ? parseFloat(b[1]) : b[5] ? parseFloat(b[5]) : NaN;
                h &&
                  document &&
                  document.documentMode &&
                  (h = document.documentMode);
                var d = /(?:Trident\/(\d+.\d+))/.exec(a);
                m = d ? parseFloat(d[1]) + 4 : h;
                i = b[2] ? parseFloat(b[2]) : NaN;
                j = b[3] ? parseFloat(b[3]) : NaN;
                k = b[4] ? parseFloat(b[4]) : NaN;
                k
                  ? ((b = /(?:Chrome\/(\d+\.\d+))/.exec(a)),
                    (l = b && b[1] ? parseFloat(b[1]) : NaN))
                  : (l = NaN);
              } else h = i = j = l = k = NaN;
              if (c) {
                if (c[1]) {
                  d = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
                  n = d ? parseFloat(d[1].replace("_", ".")) : !0;
                } else n = !1;
                o = !!c[2];
                p = !!c[3];
              } else n = o = p = !1;
            }
            var x = {
              ie: function () {
                return w() || h;
              },
              ieCompatibilityMode: function () {
                return w() || m > h;
              },
              ie64: function () {
                return x.ie() && r;
              },
              firefox: function () {
                return w() || i;
              },
              opera: function () {
                return w() || j;
              },
              webkit: function () {
                return w() || k;
              },
              safari: function () {
                return x.webkit();
              },
              chrome: function () {
                return w() || l;
              },
              windows: function () {
                return w() || o;
              },
              osx: function () {
                return w() || n;
              },
              linux: function () {
                return w() || p;
              },
              iphone: function () {
                return w() || s;
              },
              mobile: function () {
                return w() || s || t || q || v;
              },
              nativeApp: function () {
                return w() || u;
              },
              android: function () {
                return w() || q;
              },
              ipad: function () {
                return w() || t;
              },
            };
            e.exports = x;
          },
          18,
        );
        __d(
          "hasNamePropertyBug",
          ["UserAgent_DEPRECATED", "guid"],
          function (a, b, c, d, e, f, g, h) {
            __p && __p();
            var i = g.ie() ? undefined : !1;
            function j() {
              var a = document.createElement("form"),
                b = a.appendChild(document.createElement("input"));
              b.name = h();
              i = b !== a.elements[b.name];
              a = b = null;
              return i;
            }
            function a() {
              return typeof i === "undefined" ? j() : i;
            }
            e.exports = a;
          },
          null,
        );
        __d(
          "isNumberLike",
          [],
          function (a, b, c, d, e, f) {
            function a(a) {
              return !isNaN(parseFloat(a)) && isFinite(a);
            }
            e.exports = a;
          },
          null,
        );
        __d(
          "sdk.createIframe",
          [
            "sdk.DOMEventListener",
            "getBlankIframeSrc",
            "guid",
            "hasNamePropertyBug",
            "isNumberLike",
          ],
          function (a, b, c, d, e, f, g, h, i, j, k) {
            __p && __p();
            function a(a) {
              __p && __p();
              a = ES("Object", "assign", !1, {}, a);
              var b,
                c = a.name || i(),
                d = a.root,
                e = a.style || { border: "none" },
                f = a.url,
                l = a.onload,
                m = a.onerror;
              j()
                ? (b = document.createElement('<iframe name="' + c + '"/>'))
                : ((b = document.createElement("iframe")), (b.name = c));
              delete a.style;
              delete a.name;
              delete a.url;
              delete a.root;
              delete a.onload;
              delete a.onerror;
              c = ES(
                "Object",
                "assign",
                !1,
                {
                  frameBorder: 0,
                  allowTransparency: !0,
                  allowFullscreen: !0,
                  scrolling: "no",
                  allow: "encrypted-media",
                },
                a,
              );
              c.width && k(c.width) && (b.width = c.width + "px");
              c.height && k(c.height) && (b.height = c.height + "px");
              delete c.height;
              delete c.width;
              for (var n in c)
                Object.prototype.hasOwnProperty.call(c, n) &&
                  b.setAttribute(n, c[n]);
              ES("Object", "assign", !1, b.style, e);
              b.src = h();
              d.appendChild(b);
              if (l)
                var o = g.add(b, "load", function () {
                  o.remove(), l();
                });
              if (m)
                var p = g.add(b, "error", function () {
                  p.remove(), m();
                });
              b.src = f;
              return b;
            }
            e.exports = a;
          },
          null,
        );
        __d(
          "ak.loginWithEmail",
          [
            "Log",
            "ak.getAuthCode",
            "ak.input-validators",
            "ak.Runtime",
            "sdk.Content",
            "sdk.createIframe",
            "sdk.UA",
          ],
          function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
            __p && __p();
            var n = !1,
              o = !1;
            function p(a) {
              return i.validateNonEmptyString(a);
            }
            function q() {
              if (n) return;
              var a = "https://" + j.getDomain() + j.getPollingFramePath(),
                b = k.appendHidden(document.createElement("div"));
              l({
                url: a,
                name: "ak_polling_frame_https",
                id: "ak_polling_frame_https",
                root: b,
                "aria-hidden": !0,
                title: "AccountKit Polling Frame",
                tabindex: -1,
              });
              n = !0;
            }
            function r() {
              if (o) return;
              var a = "https://" + j.getDomain() + j.getPopupProxyPath(),
                b = k.appendHidden(document.createElement("div"));
              l({
                url: a,
                name: "ak_xdm_frame_https",
                id: "ak_xdm_frame_https",
                root: b,
                "aria-hidden": !0,
                title: "AccountKit CrossDomain Popup Proxy",
                tabindex: -1,
              });
              o = !0;
            }
            function a(a, b) {
              __p && __p();
              if (a && !p(a)) {
                g.warn("Email address provided is wrong");
                b({ status: "BAD_PARAMS" });
                return;
              }
              var c = { endpoint: "/dialog/email_login/" };
              a && (c.email = a);
              q();
              (m.ie() >= 8 || m.edge()) && r();
              a = function () {
                return;
              };
              h(c, b, a);
            }
            e.exports = a;
          },
          null,
        );
        __d(
          "ak.utils",
          ["ak.input-validators"],
          function (a, b, c, d, e, f, g) {
            function a(event) {
              return (
                event.origin !== undefined &&
                new RegExp(/\.accountkit\.com$/).test(event.origin)
              );
            }
            function b(a, b) {
              if (b && !g.validatePhoneNumber(b)) return !1;
              return a && !g.validateCountryCode(a) ? !1 : !0;
            }
            e.exports = { isAccountKitEvent: a, isValidPhoneNumberParams: b };
          },
          null,
        );
        __d(
          "ak.loginWithPhone",
          [
            "Log",
            "ak.getAuthCode",
            "ak.Runtime",
            "ak.utils",
            "sdk.Content",
            "sdk.createIframe",
            "sdk.UA",
          ],
          function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
            __p && __p();
            var n = "NOT_AUTHENTICATED",
              o = !1;
            function p() {
              if (o) return;
              var a = "https://" + i.getDomain() + i.getPopupProxyPath(),
                b = k.appendHidden(document.createElement("div"));
              l({
                url: a,
                name: "ak_xdm_frame_https",
                id: "ak_xdm_frame_https",
                root: b,
                "aria-hidden": !0,
                title: "AccountKit CrossDomain Popup Proxy",
                tabindex: -1,
              });
              o = !0;
            }
            function a(a, b, c) {
              __p && __p();
              if (!j.isValidPhoneNumberParams(a, b)) {
                g.warn("Country code or phone number provided is wrong");
                c({ status: "BAD_PARAMS" });
                return;
              }
              var d = { endpoint: "/dialog/sms_login/" };
              a && (d.country_code = a);
              b && (d.phone_number = b);
              (m.ie() >= 8 || m.edge()) && p();
              a = function () {
                c({ status: n });
              };
              h(d, c, a);
            }
            e.exports = a;
          },
          null,
        );
        __d(
          "ak.login",
          ["ak.loginWithEmail", "ak.loginWithPhone", "ak.Runtime"],
          function (a, b, c, d, e, f, g, h, i) {
            __p && __p();
            var j = ES("Object", "freeze", !1, {
              PHONE: "PHONE",
              EMAIL: "EMAIL",
            });
            function a(a, b, c) {
              if (!i.getInitialized())
                throw new Error(
                  "AccountKit SDK was not initialized. Call AccountKit.init first.",
                );
              if (!j[a]) throw new Error("Unsupported login method: " + a);
              if (!b) throw new Error('"params" object is not provided.');
              j.PHONE === a
                ? h(b.countryCode, b.phoneNumber, c)
                : j.EMAIL === a && g(b.emailAddress, c);
            }
            e.exports = a;
          },
          null,
        );
        __d(
          "legacy:ak.login.legacy",
          ["AccountKit", "ak.login"],
          function (a, b, c, d, e, f, g, h) {
            g.provide({ login: h });
          },
          3,
        );
      }
    }).call(global);
  })(window.inDapIF ? parent.window : window, window);
} catch (e) {
  new Image().src =
    "https://www.facebook.com/" +
    "common/scribe_endpoint.php?c=jssdk_error&m=" +
    encodeURIComponent(
      '{"error":"LOAD", "extra": {"name":"' +
        e.name +
        '","line":"' +
        (e.lineNumber || e.line) +
        '","script":"' +
        (e.fileName || e.sourceURL || e.script) +
        '","stack":"' +
        (e.stackTrace || e.stack) +
        '","revision":"4056814","namespace":"AccountKit","message":"' +
        e.message +
        '"}}',
    );
}
