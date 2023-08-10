if (self.CavalryLogger) {
  CavalryLogger.start_js(["p0usZ"]);
}

self.__DEV__ = self.__DEV__ || 0;
("use strict");
Array.from ||
  (Array.from = function (a) {
    if (a == null) throw new TypeError("Object is null or undefined");
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
        (k = m.value), g && (k = b.call(c, k, i)), (j[i] = k), (i += 1);
      j.length = i;
      return j;
    }
    var n = e.length;
    (isNaN(n) || n < 0) && (n = 0);
    j = typeof d === "function" ? new d(n) : new Array(n);
    while (i < n) (k = e[i]), g && (k = b.call(c, k, i)), (j[i] = k), (i += 1);
    j.length = i;
    return j;
  });

("use strict");
(function (a) {
  function b(a, b) {
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
  }
  Array.prototype.findIndex || (Array.prototype.findIndex = b);
  Array.prototype.find ||
    (Array.prototype.find = function (c, d) {
      if (this == null)
        throw new TypeError("Array.prototype.find called on null or undefined");
      c = b.call(this, c, d);
      return c === -1 ? a : this[c];
    });
  Array.prototype.fill ||
    (Array.prototype.fill = function (b) {
      if (this == null)
        throw new TypeError("Array.prototype.fill called on null or undefined");
      var c = Object(this),
        d = c.length >>> 0,
        e = arguments[1],
        f = e >> 0,
        g = f < 0 ? Math.max(d + f, 0) : Math.min(f, d),
        h = arguments[2],
        i = h === a ? d : h >> 0,
        j = i < 0 ? Math.max(d + i, 0) : Math.min(i, d);
      while (g < j) (c[g] = b), g++;
      return c;
    });
})();

(function () {
  "use strict";
  var a = Array.prototype.indexOf;
  Array.prototype.includes ||
    (Array.prototype.includes = function (d) {
      "use strict";
      if (d !== undefined && Array.isArray(this) && !Number.isNaN(d))
        return a.apply(this, arguments) !== -1;
      var e = Object(this),
        f = e.length ? b(e.length) : 0;
      if (f === 0) return !1;
      var g = arguments.length > 1 ? c(arguments[1]) : 0,
        h = g < 0 ? Math.max(f + g, 0) : g,
        i = Number.isNaN(d);
      while (h < f) {
        var j = e[h];
        if (j === d || (i && Number.isNaN(j))) return !0;
        h++;
      }
      return !1;
    });
  function b(a) {
    return Math.min(Math.max(c(a), 0), Number.MAX_SAFE_INTEGER);
  }
  function c(a) {
    a = Number(a);
    return Number.isFinite(a) && a !== 0 ? d(a) * Math.floor(Math.abs(a)) : a;
  }
  function d(a) {
    return a >= 0 ? 1 : -1;
  }
})();
var __p;
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
                      return /\?/.test(a) ? "?" + a.replace("?", "") : a;
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
          (f.callId = f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
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

(function () {
  if (Object.assign) return;
  var a = Object.prototype.hasOwnProperty,
    b;
  Object.keys && Object.keys.name !== "object_keys_polyfill"
    ? (b = function (a, b) {
        var c = Object.keys(b);
        for (var d = 0; d < c.length; d++) a[c[d]] = b[c[d]];
      })
    : (b = function (b, c) {
        for (var d in c) a.call(c, d) && (b[d] = c[d]);
      });
  Object.assign = function (a, c) {
    if (a == null)
      throw new TypeError("Object.assign target cannot be null or undefined");
    var d = Object(a);
    for (var e = 1; e < arguments.length; e++) {
      var f = arguments[e];
      f != null && b(d, Object(f));
    }
    return d;
  };
})();
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
            typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
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
              d < 56320 || d > 57343 ? (e = c[a]) : (e = c[a] + c[a + 1]);
            }
            this.$2 = a + e.length;
            return { value: e, done: !1 };
          };
          a.prototype[
            typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
          ] = function () {
            "use strict";
            return this;
          };
          return a;
        })());
      return {
        keys: function () {
          throw TypeError("Strings default iterator doesn't implement keys.");
        },
        values: a
          ? function (a) {
              return a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
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
    (this.$1 = a), (this.$2 = b), (this.$3 = Object.keys(a)), (this.$4 = 0);
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
  i.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
    function () {
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
    else if (Array.isArray(a)) return f[b || d](a);
    else if (a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"])
      return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
    else return j[b || e](a);
  }
  Object.assign(k, {
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
    return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "");
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
        a = a.bind(c || b);
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
        if (!(s(a) && a._mapData)) throw new TypeError("Object is not a map.");
        if ([i, k, j].indexOf(b) === -1)
          throw new Error("Invalid iteration kind.");
        this._map = a;
        this._nextIndex = 0;
        this._kind = b;
      }
      o.prototype.next = function () {
        "use strict";
        if (!this instanceof a)
          throw new TypeError("Expected to be called on a MapIterator.");
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
        return a != null && (typeof a === "object" || typeof a === "function");
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
            throw new Error("Non-extensible objects are not allowed as keys.");
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

typeof window !== "undefined" &&
  window.JSON &&
  JSON.stringify(["\u2028\u2029"]) === '["\u2028\u2029"]' &&
  (JSON.stringify = (function (a) {
    var b = /\u2028/g,
      c = /\u2029/g;
    return function (d, e, f) {
      d = a.call(this, d, e, f);
      d &&
        (-1 < d.indexOf("\u2028") && (d = d.replace(b, "\\u2028")),
        -1 < d.indexOf("\u2029") && (d = d.replace(c, "\\u2029")));
      return d;
    };
  })(JSON.stringify));

(function () {
  var a = Object.prototype.hasOwnProperty;
  Object.entries = function (b) {
    if (b == null) throw new TypeError("Object.entries called on non-object");
    var c = [];
    for (var d in b) a.call(b, d) && c.push([d, b[d]]);
    return c;
  };
  Object.values = function (b) {
    if (b == null) throw new TypeError("Object.values called on non-object");
    var c = [];
    for (var d in b) a.call(b, d) && c.push(b[d]);
    return c;
  };
})();

(function (a) {
  a.__m = function (a, b) {
    a.__SMmeta = b;
    return a;
  };
})(this);
typeof String.fromCodePoint !== "function" &&
  (String.fromCodePoint = function () {
    var a = [];
    for (var b = 0; b < arguments.length; b++) {
      var c = Number(b < 0 || arguments.length <= b ? undefined : arguments[b]);
      if (!isFinite(c) || Math.floor(c) != c || c < 0 || 1114111 < c)
        throw RangeError("Invalid code point " + c);
      c < 65536
        ? a.push(String.fromCharCode(c))
        : ((c -= 65536),
          a.push(
            String.fromCharCode((c >> 10) + 55296),
            String.fromCharCode((c % 1024) + 56320),
          ));
    }
    return a.join("");
  });
String.prototype.startsWith ||
  (String.prototype.startsWith = function (a) {
    "use strict";
    if (this == null) throw TypeError();
    var b = String(this),
      c = arguments.length > 1 ? Number(arguments[1]) || 0 : 0,
      d = Math.min(Math.max(c, 0), b.length);
    return b.indexOf(String(a), c) == d;
  }),
  String.prototype.endsWith ||
    (String.prototype.endsWith = function (a) {
      "use strict";
      if (this == null) throw TypeError();
      var b = String(this),
        c = b.length,
        d = String(a),
        e = arguments.length > 1 ? Number(arguments[1]) || 0 : c,
        f = Math.min(Math.max(e, 0), c),
        g = f - d.length;
      return g < 0 ? !1 : b.lastIndexOf(d, g) == g;
    }),
  String.prototype.includes ||
    (String.prototype.includes = function (a) {
      "use strict";
      if (this == null) throw TypeError();
      var b = String(this),
        c = arguments.length > 1 ? Number(arguments[1]) || 0 : 0;
      return b.indexOf(String(a), c) != -1;
    }),
  String.prototype.repeat ||
    (String.prototype.repeat = function (a) {
      "use strict";
      if (this == null) throw TypeError();
      var b = String(this);
      a = Number(a) || 0;
      if (a < 0 || a === Infinity) throw RangeError();
      if (a === 1) return b;
      var c = "";
      while (a) a & 1 && (c += b), (a >>= 1) && (b += b);
      return c;
    }),
  String.prototype.codePointAt ||
    (String.prototype.codePointAt = function (a) {
      "use strict";
      if (this == null) throw TypeError("Invalid context: " + this);
      var b = String(this),
        c = b.length;
      a = Number(a) || 0;
      if (a < 0 || c <= a) return undefined;
      var d = b.charCodeAt(a);
      if (55296 <= d && d <= 56319 && c > a + 1) {
        c = b.charCodeAt(a + 1);
        if (56320 <= c && c <= 57343)
          return (d - 55296) * 1024 + c - 56320 + 65536;
      }
      return d;
    });
String.prototype.contains ||
  (String.prototype.contains = String.prototype.includes);
String.prototype.padStart ||
  (String.prototype.padStart = function (a, b) {
    a = a >> 0;
    b = String(b || " ");
    if (this.length > a) return String(this);
    else {
      a = a - this.length;
      a > b.length && (b += b.repeat(a / b.length));
      return b.slice(0, a) + String(this);
    }
  }),
  String.prototype.padEnd ||
    (String.prototype.padEnd = function (a, b) {
      a = a >> 0;
      b = String(b || " ");
      if (this.length > a) return String(this);
      else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return String(this) + b.slice(0, a);
      }
    });
String.prototype.trimLeft ||
  (String.prototype.trimLeft = function () {
    return this.replace(/^\s+/, "");
  }),
  String.prototype.trimRight ||
    (String.prototype.trimRight = function () {
      return this.replace(/\s+$/, "");
    });

(function (a) {
  a = a.babelHelpers = {};
  var b = Object.prototype.hasOwnProperty;
  a.inherits = function (a, b) {
    Object.assign(a, b);
    a.prototype = Object.create(b && b.prototype);
    a.prototype.constructor = a;
    a.__superConstructor__ = b;
    return b;
  };
  a._extends = Object.assign;
  a["extends"] = a._extends;
  a.construct = function (a, b) {
    return new (Function.prototype.bind.apply(a, [null].concat(b)))();
  };
  a.objectWithoutProperties = function (a, c) {
    var d = {};
    for (var e in a) {
      if (!b.call(a, e) || c.indexOf(e) >= 0) continue;
      d[e] = a[e];
    }
    return d;
  };
  a.taggedTemplateLiteralLoose = function (a, b) {
    b || (b = a.slice(0));
    a.raw = b;
    return a;
  };
  a.bind = Function.prototype.bind;
})(typeof global === "undefined" ? self : global);
(function (a) {
  if (a.require) return;
  var b = (a.Env || {}).gk_require_dic,
    c = null,
    d = [],
    e = b ? Object.create(null) : {},
    f = b ? Object.create(null) : {},
    g = 0,
    h = 0,
    i = 0,
    j = 1,
    k = 2,
    l = 4,
    m = 8,
    n = 16,
    o = {},
    p = Object.prototype.hasOwnProperty,
    q = Object.prototype.toString;
  function r(a) {
    a = Array.prototype.slice.call(a);
    var b = {},
      c,
      d,
      f,
      g;
    while (a.length) {
      d = a.shift();
      if (b[d]) continue;
      b[d] = !0;
      f = e[d];
      if (!f || R(f)) continue;
      if (f.dependencies)
        for (c = 0; c < f.dependencies.length; c++)
          (g = f.dependencies[c]), R(g) || a.push(g.id);
    }
    for (d in b) p.call(b, d) && a.push(d);
    b = [];
    for (c = 0; c < a.length; c++) {
      d = a[c];
      var h = d;
      f = e[d];
      if (!f || !f.dependencies) h += " is not defined";
      else if (R(f)) h += " is ready";
      else {
        d = [];
        for (var i = 0; i < f.dependencies.length; i++)
          (g = f.dependencies[i]), (!e[g] || !R(e[g])) && d.push(g.id);
        h += " is waiting for " + d.join(", ");
      }
      b.push(h);
    }
    return b.join("\n");
  }
  function s(a) {
    (this.name = "ModuleError"),
      (this.message = a),
      (this.stack = Error(a).stack),
      (this.framesToPop = 2);
  }
  s.prototype = Object.create(Error.prototype);
  s.prototype.constructor = s;
  var t = (a.Env || {}).profile_require_factories,
    u = a.performance || a.msPerformance || a.webkitPerformance || {},
    v;
  if (u.now && u.timing && u.timing.navigationStart) {
    var w = u.timing.navigationStart;
    v = function () {
      return u.now() + w;
    };
  } else
    v = function () {
      return Date.now();
    };
  var x = 0,
    y = 0;
  function z(a) {
    y++;
    var b = e[a];
    if (b && b.exports != null) {
      b.refcount-- === 1 && (e[a] = void 0);
      return b.exports;
    }
    return B(a);
  }
  function A(b) {
    var c = e[b];
    b = f[b];
    if (c.factoryLength === -1) {
      var d = t && a.ProfilingCounters,
        g;
      d && (g = d.startTiming("FACTORY_COMPILE_TIME"));
      c.factoryLength = c.factory.length;
      g != null && ((d = d.stopTiming(g)), (b.compileTime += d));
    }
    return c.factoryLength;
  }
  function B(b) {
    if (a.ErrorUtils && !a.ErrorUtils.inGuard())
      return a.ErrorUtils.applyWithGuard(B, null, [b]);
    var d = e[b];
    if (!d) {
      var g = 'Requiring unknown module "' + b + '"';
      throw new s(g);
    }
    var h;
    if (d.hasError)
      throw new s(
        'Requiring module "' +
          b +
          '" which threw an exception: ' +
          d.error.message,
      );
    if (!R(d))
      throw new s(
        'Requiring module "' + b + '" with unresolved dependencies: ' + r([b]),
      );
    g = d.exports = {};
    var i = d.factory;
    if (q.call(i) === "[object Function]") {
      var j = d.dependencies,
        l = j.length;
      try {
        try {
          W(d);
        } catch (a) {
          C(a, b);
        }
        var n = [],
          p = l;
        d.special & m &&
          ((n = c.slice(0)),
          (n[c.length - 2] = d),
          (n[c.length - 1] = g),
          (p += n.length));
        if (d.special & k) {
          g = A(b);
          p = Math.min(l + n.length, g);
        }
        for (var g = 0; g < l; g++) {
          var u = j[g];
          n.length < p && n.push(z.call(null, u.id));
        }
        ++x;
        u = t && a.ProfilingCounters;
        var w;
        u &&
          (u.incrementCounter("FACTORY_COUNT", 1),
          (w = u.startTiming("FACTORY_EXEC_TIME")));
        try {
          p = i.apply(d.context || a, n);
        } catch (a) {
          C(a, b);
        } finally {
          if (t) {
            j = v();
            l = 0;
            w != null && (l = u.stopTiming(w));
            g = f[d.id];
            g.factoryTime = l;
            g.factoryEnd = j;
            if (i.__SMmeta)
              for (var y in i.__SMmeta)
                Object.prototype.hasOwnProperty.call(i.__SMmeta, y) &&
                  (g[y] = i.__SMmeta[y]);
          }
        }
      } catch (a) {
        d.hasError = !0;
        d.error = a;
        d.exports = null;
        throw a;
      }
      p && (d.exports = p);
      if (typeof d.exports === "function") {
        n = d.exports;
        u = n.__superConstructor__;
        (!n.displayName || (u && u.displayName === n.displayName)) &&
          (n.displayName = (n.name || "(anonymous)") + " [from " + b + "]");
      }
      d.factoryFinished = !0;
    } else d.exports = i;
    l = "__isRequired__" + b;
    j = e[l];
    j && !R(j) && I(l, o);
    d.refcount-- === 1 && (e[b] = void 0);
    return d.exports;
  }
  function C(a, b) {
    a instanceof Error || (a = new Error(a));
    if (e.ex && e.erx) {
      var c = z.call(null, "ex"),
        d = z.call(null, "erx");
      d = d(a.message);
      d[0].indexOf(' from module "%s"') < 0 &&
        ((d[0] += ' from module "%s"'), (d[d.length] = b));
      a.message = c.apply(null, d);
    }
    throw a;
  }
  function D() {
    var a = 0;
    for (var b in f)
      Object.prototype.hasOwnProperty.call(f, b) && (a += f[b].factoryTime);
    return a;
  }
  function E() {
    var a = 0;
    for (var b in f)
      Object.prototype.hasOwnProperty.call(f, b) && (a += f[b].compileTime);
    return a;
  }
  function F() {
    return x;
  }
  function G() {
    return y;
  }
  function H() {
    var a = {};
    for (var b in f)
      Object.prototype.hasOwnProperty.call(f, b) && (a[b] = f[b]);
    return a;
  }
  function I(a, b, c, g, h, i, j) {
    b === undefined
      ? ((b = []), (c = a), (a = N()))
      : c === undefined &&
        ((c = b),
        q.call(a) === "[object Array]"
          ? ((b = a), (a = N(b.join(","))))
          : (b = []));
    var k = { cancel: L.bind(this, a) },
      l = e[a];
    if (!b && !c && i) {
      J(a).refcount += i;
      return k;
    }
    f[a] = {
      id: a,
      dependencies: b,
      meta: j,
      category: g,
      defined: t ? v() : null,
      compileTime: null,
      factoryTime: null,
      factoryEnd: null,
    };
    j = b.map(J);
    l = e[a];
    if (l) {
      if (l.dependencies && !l.reload) return k;
      i && (l.refcount += i);
      l.factory = c;
      l.dependencies = j;
      l.context = h;
      l.special = g;
    } else (l = new K(a, i || 0, null, c, j, h, g)), (e[a] = l);
    V(l);
    if (d.length > 0) {
      b = d;
      d = [];
      while (b.length > 0) z.call(null, b.pop().id);
    }
    return k;
  }
  function J(a) {
    var b = e[a];
    if (b) return b;
    b = new K(a, 0);
    e[a] = b;
    return b;
  }
  function K(a, b, c, d, e, f, g) {
    (this.id = a),
      (this.refcount = b),
      (this.exports = c || null),
      (this.factory = d),
      (this.factoryLength = -1),
      (this.factoryFinished = !1),
      (this.dependencies = e),
      (this.depPosition = 0),
      (this.context = f),
      (this.special = g || 0),
      (this.hasError = !1),
      (this.error = null),
      (this.ranRecursiveSideEffects = !1),
      (this.sideEffectDependencyException = null),
      (this.nextDepWaitingHead = null),
      (this.nextDepWaitingNext = null),
      (this.tarjanGeneration = -1),
      (this.tarjanLow = 0),
      (this.tarjanIndex = 0),
      (this.tarjanOnStack = !1);
  }
  function L(a) {
    if (!e[a]) return;
    var b = e[a];
    e[a] = void 0;
    if (b.dependencies)
      for (var a = 0; a < b.dependencies.length; a++) {
        var c = b.dependencies[a];
        c.refcount-- === 1 && L(c.id);
      }
  }
  function M(a, b, c) {
    return I(
      "__requireLazy__" + (a.length > 0 ? a.join(",") + "__" : "") + g++,
      a,
      $()(b, "requireLazy", { propagationType: 0 }),
      j,
      c,
      1,
    );
  }
  function N(a) {
    return "__mod__" + (a ? a + "__" : "") + g++;
  }
  function O(a, b, c) {
    c.tarjanGeneration != h &&
      ((c.tarjanGeneration = h),
      (c.tarjanLow = c.tarjanIndex = i++),
      (c.tarjanOnStack = !0),
      b.push(c));
    if (c.dependencies != null)
      for (var d = c.depPosition; d < c.dependencies.length; d++) {
        var e = c.dependencies[d];
        e.tarjanGeneration != h
          ? (O(a, b, e), (c.tarjanLow = Math.min(c.tarjanLow, e.tarjanLow)))
          : e.tarjanOnStack &&
            (c.tarjanLow = Math.min(c.tarjanLow, e.tarjanIndex));
      }
    if (c.tarjanLow == c.tarjanIndex) {
      e = [];
      do {
        d = b.pop();
        d.tarjanOnStack = !1;
        e.push(d);
        if (c == b[0] && d != c && d.dependencies != null)
          for (var f = d.depPosition; f < d.dependencies.length; f++) {
            var g = d.dependencies[f];
            !R(g) &&
              a.indexOf(g) == -1 &&
              b.indexOf(g) == -1 &&
              e.indexOf(g) == -1 &&
              a.push(g);
          }
      } while (d != c);
    }
  }
  function P(a) {
    h++, O(a.dependencies, [], a), a.depPosition++, V(a);
  }
  function Q(a, b) {
    var c = b;
    while (!0) {
      if (c.dependencies && c.depPosition != c.dependencies.length)
        c = c.dependencies[c.depPosition];
      else break;
      if (c == a) {
        P(a);
        return;
      }
    }
    a.nextDepWaitingNext = b.nextDepWaitingHead;
    b.nextDepWaitingHead = a;
  }
  function R(a) {
    return a.dependencies != null && a.depPosition >= a.dependencies.length;
  }
  function S(a) {
    a.depPosition++, V(a);
  }
  function T(a) {
    var b = a.nextDepWaitingHead;
    a.nextDepWaitingHead = null;
    while (b !== null) {
      a = b;
      b = a.nextDepWaitingNext;
      a.nextDepWaitingNext = null;
      var c = !e[a.id];
      c || S(a);
    }
  }
  function U(b) {
    return (
      b.special & j ||
      (a.Env && a.Env.www_js_hf_run_when_ready && b.special & n)
    );
  }
  function V(a) {
    while (a.depPosition < a.dependencies.length) {
      var b = a.dependencies[a.depPosition],
        c = R(b);
      if (!c && a != b) {
        Q(a, b);
        return;
      }
      a.depPosition++;
    }
    U(a) && d.push(a);
    a.nextDepWaitingHead !== null && T(a);
  }
  function W(a) {
    if (a.sideEffectDependencyException) throw a.sideEffectDependencyException;
    if (a.ranRecursiveSideEffects) return;
    a.ranRecursiveSideEffects = !0;
    var b = a.dependencies;
    if (b)
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        try {
          W(d);
        } catch (b) {
          a.sideEffectDependencyException = b;
          throw b;
        }
        if (d.special & l)
          try {
            z.call(null, d.id);
          } catch (b) {
            a.sideEffectDependencyException = b;
            throw b;
          }
      }
  }
  function X(a, b) {
    (e[a] = new K(a, 0, b)),
      (f[a] = {
        id: a,
        dependencies: [],
        category: 0,
        compileTime: null,
        factoryLengthAccessTime: null,
        factoryTime: null,
        factoryEnd: null,
      });
  }
  X("module", 0);
  X("exports", 0);
  X("define", I);
  X("global", a);
  X("require", z);
  X("requireDynamic", Y);
  X("requireLazy", M);
  X("requireWeak", aa);
  X("ifRequired", Z);
  c = [
    z.call(null, "global"),
    z.call(null, "require"),
    z.call(null, "requireDynamic"),
    z.call(null, "requireLazy"),
    null,
    null,
  ];
  I.amd = {};
  a.define = I;
  a.require = z;
  a.requireDynamic = Y;
  a.requireLazy = M;
  function Y(a, b) {
    throw new ReferenceError("requireDynamic is not defined");
  }
  function aa(a, b) {
    Z.call(
      null,
      a,
      function (a) {
        b(a);
      },
      function () {
        I(
          "__requireWeak__" + a + "__" + g++,
          ["__isRequired__" + a],
          $()(function () {
            b(e[a].exports);
          }, "requireWeak"),
          j,
          null,
          1,
        );
      },
    );
  }
  function Z(a, b, c) {
    a = e[a];
    if (a && a.factoryFinished) {
      if (typeof b === "function") return b(a.exports);
    } else if (typeof c === "function") return c();
  }
  b = {
    getModules: function () {
      var a = {};
      for (var b in e)
        e[b] && Object.prototype.hasOwnProperty.call(e, b) && (a[b] = e[b]);
      return a;
    },
    modulesMap: e,
    debugUnresolvedDependencies: r,
  };
  function ba(a) {
    return a;
  }
  function $() {
    return (a.TimeSlice && a.TimeSlice.guard) || ba;
  }
  X("__getFactoryTime", D);
  X("__getCompileTime", E);
  X("__getTotalFactories", F);
  X("__getTotalRequireCalls", G);
  X("__getModuleTimeDetails", H);
  X("__debug", b);
  a.__d = function (a, b, c, d) {
    $()(
      function () {
        I(a, b, c, (d || k) | m, null, null, null);
      },
      "define " + a,
      { root: !0 },
    )();
  };
})(this);

(function (a) {
  var b = a.performance;
  b &&
    b.setResourceTimingBufferSize &&
    (b.setResourceTimingBufferSize(1e5),
    (b.onresourcetimingbufferfull = function () {
      a.__isresourcetimingbufferfull = !0;
    }),
    (b.setResourceTimingBufferSize = function () {}));
})(this);
__d(
  "javascript_shared_TAAL_OpCode",
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
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
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      previousFile: function () {
        return b("javascript_shared_TAAL_OpCode").PREVIOUS_FILE;
      },
      previousFrame: function () {
        return b("javascript_shared_TAAL_OpCode").PREVIOUS_FRAME;
      },
      previousDirectory: function () {
        return b("javascript_shared_TAAL_OpCode").PREVIOUS_DIR;
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
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      blameToPreviousFile: function (a) {
        return this.applyOpcodes(a, [b("TAALOpcodes").previousFile()]);
      },
      blameToPreviousFrame: function (a) {
        return this.applyOpcodes(a, [b("TAALOpcodes").previousFrame()]);
      },
      blameToPreviousDirectory: function (a) {
        return this.applyOpcodes(a, [b("TAALOpcodes").previousDirectory()]);
      },
      applyOpcodes: function (a, c) {
        return a + b("TAALOpcodes").getString(c);
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "eprintf",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      var e = c.map(function (a) {
          return String(a);
        }),
        f = a.split("%s").length - 1;
      if (f !== e.length)
        return g(
          "eprintf args number mismatch: %s",
          JSON.stringify([a].concat(e)),
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
  function (a, b, c, d, e, f) {
    function g(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      var e = c.map(function (a) {
          return String(a);
        }),
        f = a.split("%s").length - 1;
      return f !== e.length
        ? g("ex args number mismatch: %s", JSON.stringify([a].concat(e)))
        : g._prefix + JSON.stringify([a].concat(e)) + g._suffix;
    }
    g._prefix = "<![EX[";
    g._suffix = "]]>";
    e.exports = g;
  },
  null,
);
__d(
  "$-core",
  ["TAAL", "ex"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      return g(a, typeof a === "string" ? document.getElementById(a) : a);
    }
    function c(a) {
      return g(a, typeof a === "string" ? document.getElementById(a) : a);
    }
    function g(a, c) {
      if (!c)
        throw new Error(
          b("TAAL").blameToPreviousFile(
            b("ex")(
              'Tried to get element with id of "%s" but it is not present on the page',
              a,
            ),
          ),
        );
      return c;
    }
    a.fromIDOrElement = c;
    e.exports = a;
  },
  null,
);
__d(
  "$",
  ["$-core"],
  function (a, b, c, d, e, f) {
    e.exports = b("$-core");
  },
  null,
);
__d(
  "sprintf",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
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
  "invariant",
  ["TAAL", "ex", "sprintf"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = b("ex");
    function a(a, c) {
      __p && __p();
      if (!a) {
        var d;
        if (c === undefined)
          d = new Error(
            b("TAAL").blameToPreviousFrame(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            ),
          );
        else {
          for (
            var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), h = 2;
            h < e;
            h++
          )
            f[h - 2] = arguments[h];
          d = new Error(
            b("TAAL").blameToPreviousFrame(g.apply(undefined, [c].concat(f))),
          );
          d.name = "Invariant Violation";
          d.messageWithParams = [c].concat(f);
        }
        throw d;
      }
    }
    e.exports = a;
  },
  null,
);
__d(
  "CSSCore",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h(a, b) {
      var c = a;
      while (c.parentNode) c = c.parentNode;
      if (c instanceof Element) {
        c = c.querySelectorAll(b);
        return Array.prototype.indexOf.call(c, a) !== -1;
      }
      return !1;
    }
    var i = {
      addClass: function (a, b) {
        /\s/.test(b) && g(0);
        b &&
          (a.classList
            ? a.classList.add(b)
            : i.hasClass(a, b) || (a.className = a.className + " " + b));
        return a;
      },
      removeClass: function (a, b) {
        /\s/.test(b) && g(0);
        b &&
          (a.classList
            ? a.classList.remove(b)
            : i.hasClass(a, b) &&
              (a.className = a.className
                .replace(new RegExp("(^|\\s)" + b + "(?:\\s|$)", "g"), "$1")
                .replace(/\s+/g, " ")
                .replace(/^\s*|\s*$/g, "")));
        return a;
      },
      conditionClass: function (a, b, c) {
        return (c ? i.addClass : i.removeClass)(a, b);
      },
      hasClass: function (a, b) {
        /\s/.test(b) && g(0);
        return a.classList
          ? !!b && a.classList.contains(b)
          : (" " + a.className + " ").indexOf(" " + b + " ") > -1;
      },
      matchesSelector: function (a, b) {
        var c =
          a.matches ||
          a.webkitMatchesSelector ||
          a.mozMatchesSelector ||
          a.msMatchesSelector ||
          function (b) {
            return h(a, b);
          };
        return c.call(a, b);
      },
    };
    e.exports = i;
  },
  18,
);
__d(
  "CSS",
  ["CSSCore", "$"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = "hidden_elem",
      h = {
        setClass: function (a, c) {
          b("$").fromIDOrElement(a).className = c || "";
          return a;
        },
        hasClass: function (a, c) {
          return a instanceof Document || a instanceof Text
            ? !1
            : b("CSSCore").hasClass(b("$").fromIDOrElement(a), c);
        },
        matchesSelector: function (a, c) {
          return a instanceof Document || a instanceof Text
            ? !1
            : b("CSSCore").matchesSelector(b("$").fromIDOrElement(a), c);
        },
        addClass: function (a, c) {
          return b("CSSCore").addClass(b("$").fromIDOrElement(a), c);
        },
        removeClass: function (a, c) {
          return b("CSSCore").removeClass(b("$").fromIDOrElement(a), c);
        },
        conditionClass: function (a, c, d) {
          return b("CSSCore").conditionClass(b("$").fromIDOrElement(a), c, !!d);
        },
        toggleClass: function (a, b) {
          return h.conditionClass(a, b, !h.hasClass(a, b));
        },
        shown: function (a) {
          return !h.hasClass(a, g);
        },
        hide: function (a) {
          return h.addClass(a, g);
        },
        show: function (a) {
          return h.removeClass(a, g);
        },
        toggle: function (a) {
          return h.toggleClass(a, g);
        },
        conditionShow: function (a, b) {
          return h.conditionClass(a, g, !b);
        },
      };
    e.exports = h;
  },
  null,
);
__d(
  "cx",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      throw new Error("cx: Unexpected class transformation.");
    }
    e.exports = a;
  },
  18,
);
__d(
  "PluginContinueAsButton",
  ["cx", "CSS"],
  function (a, b, c, d, e, f, g) {
    a = {
      resize: function (a) {
        a.clientHeight > 18 && b("CSS").addClass(a, "_4lqf");
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "ArbiterToken",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    function a(a, b) {
      (this.$1 = a), (this.$2 = b);
    }
    a.prototype.unsubscribe = function () {
      for (var a = 0; a < this.$2.length; a++) this.$2[a].remove();
      this.$2.length = 0;
    };
    a.prototype.isForArbiterInstance = function (a) {
      this.$1 || g(0);
      return this.$1 === a;
    };
    e.exports = a;
  },
  18,
);
__d(
  "Env",
  [],
  function (a, b, c, d, e, f) {
    b = { start: Date.now(), nocatch: !1, ajaxpipe_token: null };
    a.Env && Object.assign(b, a.Env);
    a.Env = b;
    e.exports = b;
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
  "LogviewForcedKeyError",
  ["ManagedError"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b("ManagedError"));
    g = c && c.prototype;
    function a(a, b) {
      "use strict";
      g.constructor.call(this, b, a);
    }
    a.prototype.getCause = function () {
      "use strict";
      return this.innerError;
    };
    a.prototype.getForcedCategoryKey = function () {
      "use strict";
      return this.message;
    };
    e.exports = a;
  },
  null,
);
__d(
  "erx",
  ["ex"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      __p && __p();
      if (typeof a !== "string") return a;
      var c = a.indexOf(b("ex")._prefix),
        d = a.lastIndexOf(b("ex")._suffix);
      if (c < 0 || d < 0) return [a];
      var e = c + b("ex")._prefix.length,
        f = d + b("ex")._suffix.length;
      if (e >= d) return ["erx slice failure: %s", a];
      c = a.substring(0, c);
      f = a.substring(f);
      a = a.substring(e, d);
      try {
        e = JSON.parse(a);
        e[0] = c + e[0] + f;
        return e;
      } catch (b) {
        return ["erx parse failure: %s", a];
      }
    }
    e.exports = a;
  },
  null,
);
__d(
  "removeFromArray",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      b = a.indexOf(b);
      b !== -1 && a.splice(b, 1);
    }
    e.exports = a;
  },
  null,
);
__d(
  "ErrorUtils",
  [
    "Env",
    "LogviewForcedKeyError",
    "eprintf",
    "erx",
    "removeFromArray",
    "sprintf",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = "<anonymous guard>",
      h = "<generated guard>",
      i = typeof window === "undefined" ? "<self.onerror>" : "<window.onerror>",
      j = "<global.react>",
      k = /^https?:\/\//i,
      l = /^Type Mismatch for/,
      m = /(.*)[@\s][^\s]+$/,
      n = /^at .*eval eval (at .*\:\d+\:\d+), .*$/,
      o = [],
      p,
      q = [],
      r = 50,
      s = [],
      t = !1,
      u = !1,
      v = !1,
      w = /\bnocatch\b/.test(location.search),
      x = ["Unknown script code", "Function code", "eval code"];
    b("Env").stack_trace_limit &&
      Error.stackTraceLimit != null &&
      (Error.stackTraceLimit = b("Env").stack_trace_limit);
    function y(a) {
      a = a.columnNumber || a.column;
      return a != null ? String(a) : "";
    }
    function z(a) {
      return (a[0] && a[0].column) || "";
    }
    function A(a) {
      for (var b = 0; b < x.length; b++) {
        var c = " " + x[b];
        if (a.endsWith(c)) return [a, a.substring(0, a.length - c.length)];
      }
      return null;
    }
    function B(a) {
      a = a.lineNumber || a.line;
      return a != null ? String(a) : "";
    }
    function C(a) {
      return (a[0] && a[0].line) || "";
    }
    function D(a) {
      a = a.fileName || a.sourceURL;
      return a != null ? String(a) : "";
    }
    function E(a) {
      return (a[0] && a[0].script) || "";
    }
    function F(a) {
      if (!a) return null;
      a = a.split("\n");
      a.splice(0, 1);
      return a.map(function (a) {
        return a.trim();
      });
    }
    function G(a) {
      __p && __p();
      var b = a.stackTrace || a.stack;
      if (b == null) return [];
      a = a.message;
      var c = b.replace(/^[\w \.\<\>:]+:\s/, "");
      a =
        a != null && c.startsWith(a)
          ? c.substr(a.length + 1)
          : c !== b
          ? c.replace(/^.*?\n/, "")
          : b;
      return a
        .split(/\n\n/)[0]
        .replace(/[\(\)]|\[.*?\]/g, "")
        .split("\n")
        .map(function (a) {
          __p && __p();
          a = a.trim();
          var b = a.match(n);
          b && (a = b[1]);
          var c, d;
          b = a.match(/:(\d+)(?::(\d+))?$/);
          b && ((c = b[1]), (d = b[2]), (a = a.slice(0, -b[0].length)));
          var e;
          b = A(a) || a.match(m);
          if (b) {
            a = a.substring(b[1].length + 1);
            b = b[1].match(/(?:at)?\s*(.*)(?:[^\s]+|$)/);
            e = b ? b[1] : "";
          }
          a.includes("charset=utf-8;base64,") && (a = "<inlined-file>");
          b = { column: d, identifier: e, line: c, script: a };
          p && p(b);
          a =
            "    at" +
            (b.identifier ? " " + b.identifier + " (" : " ") +
            b.script +
            (b.line ? ":" + b.line : "") +
            (b.column ? ":" + b.column : "") +
            (b.identifier ? ")" : "");
          return babelHelpers["extends"]({}, b, { text: a });
        });
    }
    function H(a) {
      s.unshift(a), (t = !0);
    }
    function I() {
      s.shift(), (t = s.length !== 0);
    }
    var J = {
      ANONYMOUS_GUARD_TAG: g,
      GENERATED_GUARD_TAG: h,
      GLOBAL_ERROR_HANDLER_TAG: i,
      history: q,
      addListener: function (a, b) {
        b === void 0 && (b = !1),
          o.push(a),
          b ||
            q.forEach(function (b) {
              return a(b.error, b.loggingType);
            });
      },
      removeListener: function (a) {
        b("removeFromArray")(o, a);
      },
      setSourceResolver: function (a) {
        p = a;
      },
      applyWithGuard: function (c, d, e, f, h, i) {
        __p && __p();
        H(h || g);
        b("Env").nocatch && (w = !0);
        if (w) {
          try {
            h = c.apply(d, e || []);
          } finally {
            I();
          }
          return h;
        }
        try {
          return c.apply(d, e || []);
        } catch (g) {
          h = g;
          if (h == null)
            try {
              var j = d,
                k = function (a) {
                  __p && __p();
                  if (a == null) return "<unset>";
                  else if (typeof a === "object" && a.toString)
                    return a.toString();
                  else if (typeof a === "boolean" && a.toString)
                    return a.toString();
                  else if (typeof a === "number" && a.toString)
                    return a.toString();
                  else if (typeof a === "string") return a;
                  else if (typeof a === "symbol" && a.toString)
                    return a.toString();
                  else if (typeof a === "function" && a.toString)
                    return a.toString();
                  return "<unset>";
                };
              if (d != null)
                if (d == window) j = "[The window object]";
                else if (d == a) j = "[The global object]";
                else {
                  var l = d,
                    m = {};
                  Object.keys(l).map(function (a, b) {
                    b = l[a];
                    m[a] = k(b);
                  });
                  j = m;
                }
              d = (e || []).map(k);
              var n =
                  "applyWithGuard threw null or undefined:\nFunc: %s\nContext: %s\nArgs: %s",
                o = c.toString && c.toString().substr(0, 1024);
              j = JSON.stringify(j).substr(0, 1024);
              d = JSON.stringify(d).substr(0, 1024);
              var p = b("sprintf")(
                n,
                o ? o : "this function does not support toString",
                j,
                d,
              );
              h = new Error(p);
              h.messageWithParams = b("Env").reliability_fixederrors_2018
                ? [n, o ? o : "this function does not support toString", j, d]
                : [n];
            } catch (a) {
              p =
                "applyWithGuard threw null or undefined with unserializable data:\nFunc: %s\nMetaEx: %s";
              o = c.toString && c.toString().substr(0, 1024);
              j = b("sprintf")(
                p,
                o ? o : "this function does not support toString",
                a.message,
              );
              h = new Error(j);
              h.messageWithParams = b("Env").reliability_fixederrors_2018
                ? [
                    j,
                    o ? o : "this function does not support toString",
                    a.message,
                  ]
                : [j];
            }
          i && i.deferredSource && (h.deferredSource = i.deferredSource);
          d = J.normalizeError(h);
          f && f(d);
          d.extra || (d.extra = {});
          if (c)
            try {
              d.extra[c.toString().substring(0, 100)] = "function";
            } catch (a) {}
          e && (d.extra[Array.from(e).toString().substring(0, 100)] = "args");
          d.guard = s[0];
          d.guardList = s.slice();
          J.reportError(d, !1, "GUARDED");
        } finally {
          I();
        }
      },
      guard: function (a, b, c) {
        b = b || a.name || h;
        function d() {
          return J.applyWithGuard(
            a,
            c || this,
            [].concat(Array.prototype.slice.call(arguments)),
            null,
            b,
          );
        }
        a.__SMmeta && (d.__SMmeta = a.__SMmeta);
        return d;
      },
      inGuard: function () {
        return t;
      },
      normalizeError: function (a) {
        __p && __p();
        var c = a;
        a = a != null ? a : {};
        if (Object.prototype.hasOwnProperty.call(a, "_originalError")) return a;
        var d = G(a),
          e = !1;
        if (a.framesToPop) {
          var f = a.framesToPop,
            g;
          while (f > 0 && d.length > 0) (g = d.shift()), f--, (e = !0);
          l.test(a.message) &&
            a.framesToPop === 2 &&
            g &&
            k.test(g.script) &&
            (a.message +=
              " at " +
              g.script +
              (g.line ? ":" + g.line : "") +
              (g.column ? ":" + g.column : ""));
        }
        f = F(a.reactComponentStackForLogging);
        var h =
          a instanceof b("LogviewForcedKeyError")
            ? a.getForcedCategoryKey()
            : null;
        c = {
          _originalError: c,
          column: e ? z(d) : y(a) || z(d),
          deferredSource: a.deferredSource,
          extra: a.extra,
          fbloggerMetadata: a.fbloggerMetadata,
          forcedLogviewKey: h,
          guard: a.guard,
          guardList: a.guardList,
          line: e ? C(d) : B(a) || C(d),
          message: a.message,
          messageWithParams: a.messageWithParams,
          name: a.name,
          reactComponentStack: f,
          script: e ? E(d) : D(a) || E(d),
          serverHash: a.serverHash,
          snapshot: a.snapshot,
          stack: d
            .map(function (a) {
              return a.text;
            })
            .join("\n"),
          stackFrames: d,
          type: a.type,
        };
        typeof c.message === "string"
          ? (c.messageWithParams = c.messageWithParams || b("erx")(c.message))
          : ((c.messageObject = c.message),
            (c.message = String(c.message) + " (" + typeof c.message + ")"));
        c.messageWithParams &&
          (c.message = b("eprintf").apply(undefined, c.messageWithParams));
        typeof window !== "undefined" &&
          window &&
          window.location &&
          (c.windowLocationURL = window.location.href);
        p && p(c);
        for (var i in c) c[i] == null && delete c[i];
        return c;
      },
      onerror: function (a, b, c, d, e) {
        (e = e || {}),
          (e.message = e.message || a),
          (e.script = e.script || b),
          (e.line = e.line || c),
          (e.column = e.column || d),
          (e.guard = i),
          (e.guardList = [i]),
          J.reportError(e, !0, "FATAL");
      },
      reportError: function (b, c, d) {
        __p && __p();
        c === void 0 && (c = !1);
        d === void 0 && (d = "DEPRECATED");
        if (u) {
          !1;
          return !1;
        }
        b.reactComponentStack && H(j);
        s.length > 0 &&
          ((b.guard = b.guard || s[0]), (b.guardList = s.slice()));
        b.reactComponentStack && I();
        b = J.normalizeError(b);
        if (!c) {
          c = a.console;
          var e = b._originalError;
          e = e != null ? "" + e.message : "";
          if ((!c[b.type] || b.type === "error") && !v) {
            e = e.length > 80 ? e.slice(0, 77) + "..." : e;
            c.error(
              'ErrorUtils caught an error: "' +
                e +
                "\". Subsequent errors won't be logged; see https://fburl.com/debugjs.",
            );
            v = !0;
          }
        }
        q.length > r && q.splice(r / 2, 1);
        q.push({ error: b, loggingType: d });
        u = !0;
        for (var c = 0; c < o.length; c++)
          try {
            o[c](b, d);
          } catch (a) {
            !1;
          }
        u = !1;
        return !0;
      },
    };
    a.onerror = J.onerror;
    e.exports = a.ErrorUtils = J;
    typeof __t === "function" &&
      __t.setHandler &&
      __t.setHandler(J.reportError);
  },
  3,
);
__d(
  "CallbackDependencyManager",
  ["ErrorUtils"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      "use strict";
      (this.$1 = new Map()),
        (this.$2 = new Map()),
        (this.$3 = 1),
        (this.$4 = new Map());
    }
    a.prototype.$5 = function (a, b) {
      "use strict";
      __p && __p();
      var c = 0,
        d = new Set();
      for (var e = 0, f = b.length; e < f; e++) d.add(b[e]);
      for (
        var b = d.keys(),
          e = Array.isArray(b),
          f = 0,
          b = e
            ? b
            : b[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        if (e) {
          if (f >= b.length) break;
          d = b[f++];
        } else {
          f = b.next();
          if (f.done) break;
          d = f.value;
        }
        d = d;
        if (this.$4.get(d)) continue;
        c++;
        var g = this.$1.get(d);
        g === undefined && ((g = new Map()), this.$1.set(d, g));
        g.set(a, (g.get(a) || 0) + 1);
      }
      return c;
    };
    a.prototype.$6 = function (a) {
      "use strict";
      __p && __p();
      a = this.$1.get(a);
      if (!a) return;
      for (
        var c = a.entries(),
          d = Array.isArray(c),
          e = 0,
          c = d
            ? c
            : c[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= c.length) break;
          f = c[e++];
        } else {
          e = c.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        var g = f[0];
        f = f[1] - 1;
        a.set(g, f);
        f <= 0 && a["delete"](g);
        f = this.$2.get(g);
        if (f !== undefined) {
          f.$7--;
          if (f.$7 <= 0) {
            f = f.$8;
            this.$2["delete"](g);
            b("ErrorUtils").applyWithGuard(f);
          }
        }
      }
    };
    a.prototype.addDependenciesToExistingCallback = function (a, b) {
      "use strict";
      var c = this.$2.get(a);
      if (!c) return null;
      b = this.$5(a, b);
      c.$7 += b;
      return a;
    };
    a.prototype.isPersistentDependencySatisfied = function (a) {
      "use strict";
      return !!this.$4.get(a);
    };
    a.prototype.satisfyPersistentDependency = function (a) {
      "use strict";
      this.$4.set(a, 1), this.$6(a);
    };
    a.prototype.satisfyNonPersistentDependency = function (a) {
      "use strict";
      var b = this.$4.get(a) === 1;
      b || this.$4.set(a, 1);
      this.$6(a);
      b || this.$4["delete"](a);
    };
    a.prototype.registerCallback = function (a, c) {
      "use strict";
      __p && __p();
      var d = this.$3;
      this.$3++;
      c = this.$5(d, c);
      if (c === 0) {
        b("ErrorUtils").applyWithGuard(a);
        return null;
      }
      this.$2.set(d, { $8: a, $7: c });
      return d;
    };
    a.prototype.unsatisfyPersistentDependency = function (a) {
      "use strict";
      this.$4["delete"](a);
    };
    e.exports = a;
  },
  null,
);
__d(
  "EventSubscription",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      this.subscriber = a;
    }
    a.prototype.remove = function () {
      this.subscriber &&
        (this.subscriber.removeSubscription(this), (this.subscriber = null));
    };
    e.exports = a;
  },
  null,
);
__d(
  "EmitterSubscription",
  ["EventSubscription"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    c = babelHelpers.inherits(a, b("EventSubscription"));
    g = c && c.prototype;
    function a(a, b, c) {
      g.constructor.call(this, a), (this.listener = b), (this.context = c);
    }
    e.exports = a;
  },
  null,
);
__d(
  "EventSubscriptionVendor",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    function a() {
      this.$1 = {};
    }
    a.prototype.addSubscription = function (a, b) {
      b.subscriber === this || g(0);
      this.$1[a] || (this.$1[a] = []);
      var c = this.$1[a].length;
      this.$1[a].push(b);
      b.eventType = a;
      b.key = c;
      return b;
    };
    a.prototype.removeAllSubscriptions = function (a) {
      a === undefined ? (this.$1 = {}) : delete this.$1[a];
    };
    a.prototype.removeSubscription = function (a) {
      var b = a.eventType;
      a = a.key;
      b = this.$1[b];
      b && delete b[a];
    };
    a.prototype.getSubscriptionsForType = function (a) {
      return this.$1[a];
    };
    e.exports = a;
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
  "BaseEventEmitter",
  [
    "invariant",
    "EmitterSubscription",
    "ErrorUtils",
    "EventSubscriptionVendor",
    "emptyFunction",
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a() {
      "use strict";
      (this.$2 = new (b("EventSubscriptionVendor"))()), (this.$1 = null);
    }
    a.prototype.addListener = function (a, c, d) {
      "use strict";
      return this.$2.addSubscription(
        a,
        new (b("EmitterSubscription"))(this.$2, c, d),
      );
    };
    a.prototype.once = function (a, b, c) {
      "use strict";
      var d = this;
      return this.addListener(a, function () {
        d.removeCurrentListener(), b.apply(c, arguments);
      });
    };
    a.prototype.removeAllListeners = function (a) {
      "use strict";
      this.$2.removeAllSubscriptions(a);
    };
    a.prototype.removeCurrentListener = function () {
      "use strict";
      !this.$1 && g(0), this.$2.removeSubscription(this.$1);
    };
    a.prototype.listeners = function (a) {
      "use strict";
      a = this.$2.getSubscriptionsForType(a);
      return a
        ? a.filter(b("emptyFunction").thatReturnsTrue).map(function (a) {
            return a.listener;
          })
        : [];
    };
    a.prototype.emit = function (a) {
      "use strict";
      __p && __p();
      var b = this.$2.getSubscriptionsForType(a);
      if (b) {
        var c = Object.keys(b),
          d;
        for (var e = 0; e < c.length; e++) {
          var f = c[e],
            g = b[f];
          if (g) {
            this.$1 = g;
            if (d == null) {
              d = [g, a];
              for (
                var h = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1;
                h < i;
                h++
              )
                d[h + 2] =
                  h + 1 < 1 || arguments.length <= h + 1
                    ? undefined
                    : arguments[h + 1];
            } else d[0] = g;
            this.__emitToSubscription.apply(this, d);
          }
        }
        this.$1 = null;
      }
    };
    a.prototype.__emitToSubscription = function (a, c) {
      "use strict";
      for (
        var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2;
        f < d;
        f++
      )
        e[f - 2] = arguments[f];
      b("ErrorUtils").applyWithGuard(
        a.listener,
        a.context,
        e,
        null,
        "EventEmitter " + c + " event",
      );
    };
    e.exports = a;
  },
  null,
);
__d(
  "EventEmitter",
  ["BaseEventEmitter"],
  function (a, b, c, d, e, f) {
    var g;
    g = babelHelpers.inherits(a, b("BaseEventEmitter"));
    g && g.prototype;
    function a() {
      "use strict";
      g.apply(this, arguments);
    }
    e.exports = a;
  },
  null,
);
__d(
  "EventEmitterWithHolding",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    function a(a, b) {
      (this.$1 = a),
        (this.$2 = b),
        (this.$3 = null),
        (this.$4 = []),
        (this.$5 = 0);
    }
    a.prototype.addListener = function (a, b, c) {
      return this.$1.addListener(a, b, c);
    };
    a.prototype.once = function (a, b, c) {
      return this.$1.once(a, b, c);
    };
    a.prototype.addRetroactiveListener = function (a, b, c) {
      var d = this.$1.addListener(a, b, c),
        e = this.$4;
      e.push(!1);
      this.$5++;
      this.$2.emitToListener(a, b, c);
      this.$5--;
      e[e.length - 1] && d.remove();
      e.pop();
      return d;
    };
    a.prototype.removeAllListeners = function (a) {
      this.$1.removeAllListeners(a);
    };
    a.prototype.removeCurrentListener = function () {
      if (this.$5) {
        var a = this.$4;
        a[a.length - 1] = !0;
      } else this.$1.removeCurrentListener();
    };
    a.prototype.listeners = function (a) {
      return this.$1.listeners(a);
    };
    a.prototype.emit = function (a, b, c, d, e, f, g) {
      this.$1.emit(a, b, c, d, e, f, g);
    };
    a.prototype.emitAndHold = function (a, b, c, d, e, f, g) {
      (this.$3 = this.$2.holdEvent(a, b, c, d, e, f, g)),
        this.$1.emit(a, b, c, d, e, f, g),
        (this.$3 = null);
    };
    a.prototype.releaseCurrentEvent = function () {
      this.$3 !== null
        ? this.$2.releaseEvent(this.$3)
        : this.$5 && this.$2.releaseCurrentEvent();
    };
    a.prototype.releaseHeldEventType = function (a) {
      this.$2.releaseEventType(a);
    };
    e.exports = a;
  },
  null,
);
__d(
  "EventHolder",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    function a() {
      (this.$1 = {}), (this.$2 = []);
    }
    a.prototype.holdEvent = function (a, b, c, d, e, f, g) {
      this.$1[a] = this.$1[a] || [];
      var h = this.$1[a];
      a = { eventType: a, index: h.length };
      h.push([b, c, d, e, f, g]);
      return a;
    };
    a.prototype.emitToListener = function (a, b, c) {
      var d = this.$1[a];
      if (!d) return;
      d.forEach(
        function (d, e) {
          if (!d) return;
          this.$2.push({ eventType: a, index: e });
          b.apply(c, d);
          this.$2.pop();
        }.bind(this),
      );
    };
    a.prototype.releaseCurrentEvent = function () {
      this.$2.length || g(0), this.releaseEvent(this.$2[this.$2.length - 1]);
    };
    a.prototype.releaseEvent = function (a) {
      delete this.$1[a.eventType][a.index];
    };
    a.prototype.releaseEventType = function (a) {
      this.$1[a] = [];
    };
    e.exports = a;
  },
  null,
);
__d(
  "Arbiter",
  [
    "invariant",
    "ArbiterToken",
    "CallbackDependencyManager",
    "ErrorUtils",
    "EventEmitter",
    "EventEmitterWithHolding",
    "EventHolder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h;
    function i(a) {
      return Array.isArray(a) ? a : [a];
    }
    function j() {
      var a = new (b("EventEmitter"))();
      this.$1 = new k();
      this.$2 = new (b("EventEmitterWithHolding"))(a, this.$1);
      this.$3 = new (b("CallbackDependencyManager"))();
      this.$4 = [];
    }
    j.prototype.subscribe = function (a, c, d) {
      __p && __p();
      a = i(a);
      a.forEach(function (a) {
        (a && typeof a === "string") || g(0);
      });
      typeof c === "function" || g(0);
      d = d || j.SUBSCRIBE_ALL;
      d === j.SUBSCRIBE_NEW || d === j.SUBSCRIBE_ALL || g(0);
      a = a.map(function (a) {
        var b = this.$5.bind(this, c, a);
        b.__SMmeta = c.__SMmeta;
        if (d === j.SUBSCRIBE_NEW) return this.$2.addListener(a, b);
        this.$4.push({});
        a = this.$2.addRetroactiveListener(a, b);
        this.$4.pop();
        return a;
      }, this);
      return new (b("ArbiterToken"))(this, a);
    };
    j.prototype.$5 = function (a, c, d) {
      var e = this.$4[this.$4.length - 1];
      if (e[c] === !1) return;
      a = b("ErrorUtils").applyWithGuard(a, null, [c, d]);
      a === !1 && this.$2.releaseCurrentEvent();
      e[c] = a;
    };
    j.prototype.unsubscribeCurrentSubscription = function () {
      this.$2.removeCurrentListener();
    };
    j.prototype.releaseCurrentPersistentEvent = function () {
      this.$2.releaseCurrentEvent();
    };
    j.prototype.subscribeOnce = function (a, b, c) {
      a = this.subscribe(
        a,
        function (a, c) {
          this.unsubscribeCurrentSubscription();
          return b(a, c);
        }.bind(this),
        c,
      );
      return a;
    };
    j.prototype.unsubscribe = function (a) {
      a.isForArbiterInstance(this) || g(0), a.unsubscribe();
    };
    j.prototype.inform = function (a, b, c) {
      __p && __p();
      var d = Array.isArray(a);
      a = i(a);
      c = c || j.BEHAVIOR_EVENT;
      var e = c === j.BEHAVIOR_STATE || c === j.BEHAVIOR_PERSISTENT;
      this.$4.push({});
      for (var f = 0; f < a.length; f++) {
        var h = a[f];
        h || g(0);
        this.$1.setHoldingBehavior(h, c);
        this.$2.emitAndHold(h, b);
        this.$6(h, b, e);
      }
      h = this.$4.pop();
      return d ? h : h[a[0]];
    };
    j.prototype.query = function (a) {
      var b = this.$1.getHoldingBehavior(a);
      !b || b === j.BEHAVIOR_STATE || g(0);
      b = null;
      this.$1.emitToListener(a, function (a) {
        b = a;
      });
      return b;
    };
    j.prototype.registerCallback = function (a, b) {
      if (typeof a === "function") return this.$3.registerCallback(a, b);
      else return this.$3.addDependenciesToExistingCallback(a, b);
    };
    j.prototype.$6 = function (a, b, c) {
      if (b === null) return;
      c
        ? this.$3.satisfyPersistentDependency(a)
        : this.$3.satisfyNonPersistentDependency(a);
    };
    a = babelHelpers.inherits(k, b("EventHolder"));
    h = a && a.prototype;
    function k() {
      h.constructor.call(this), (this.$ArbiterEventHolder1 = {});
    }
    k.prototype.setHoldingBehavior = function (a, b) {
      this.$ArbiterEventHolder1[a] = b;
    };
    k.prototype.getHoldingBehavior = function (a) {
      return this.$ArbiterEventHolder1[a];
    };
    k.prototype.holdEvent = function (a, b, c, d, e) {
      var f = this.$ArbiterEventHolder1[a];
      f !== j.BEHAVIOR_PERSISTENT && this.$ArbiterEventHolder2(a);
      if (f !== j.BEHAVIOR_EVENT) return h.holdEvent.call(this, a, b, c, d, e);
    };
    k.prototype.$ArbiterEventHolder2 = function (a) {
      this.emitToListener(a, this.releaseCurrentEvent, this);
    };
    k.prototype.releaseEvent = function (a) {
      a && h.releaseEvent.call(this, a);
    };
    Object.assign(j, {
      SUBSCRIBE_NEW: "new",
      SUBSCRIBE_ALL: "all",
      BEHAVIOR_EVENT: "event",
      BEHAVIOR_STATE: "state",
      BEHAVIOR_PERSISTENT: "persistent",
    });
    Object.keys(j.prototype).forEach(function (a) {
      j[a] = function () {
        var b = this instanceof j ? this : j;
        return j.prototype[a].apply(b, arguments);
      };
    });
    j.call(j);
    e.exports = j;
  },
  null,
);
__d(
  "DOMEvent",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h(a) {
      "use strict";
      (this.event = a || window.event),
        typeof this.event.srcElement !== "unknown" || g(0),
        (this.target = this.event.target || this.event.srcElement);
    }
    h.prototype.preventDefault = function () {
      "use strict";
      var a = this.event;
      a.preventDefault
        ? (a.preventDefault(),
          "defaultPrevented" in a || (a.defaultPrevented = !0))
        : (a.returnValue = !1);
      return this;
    };
    h.prototype.isDefaultPrevented = function () {
      "use strict";
      var a = this.event;
      return "defaultPrevented" in a
        ? a.defaultPrevented
        : a.returnValue === !1;
    };
    h.prototype.stopPropagation = function () {
      "use strict";
      var a = this.event;
      a.stopPropagation ? a.stopPropagation() : (a.cancelBubble = !0);
      return this;
    };
    h.prototype.kill = function () {
      "use strict";
      this.stopPropagation().preventDefault();
      return this;
    };
    h.killThenCall = function (a) {
      "use strict";
      return function (b) {
        new h(b).kill();
        return a();
      };
    };
    e.exports = h;
  },
  null,
);
__d(
  "requireWeak",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      d && d.call(null, [a], b);
    }
    e.exports = a;
  },
  null,
);
__d(
  "gkx",
  ["invariant", "emptyFunction", "requireWeak"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = {};
    function a(a) {
      var c = h[a];
      c != null || g(0);
      b("requireWeak")("Banzai", function (b) {
        var d = c.exposureLogged;
        (d == null || d === !1) &&
          ((c.exposureLogged = !0),
          b.post("gk2_exposure", { identifier: a, hash: c.hash }));
      });
      return c.result;
    }
    a.add = function (a) {
      for (var b in a) b in h || (h[b] = a[b]);
    };
    c = b("emptyFunction");
    a.setPass = c;
    a.setFail = c;
    e.exports = a;
  },
  null,
);
__d(
  "dedupString",
  ["gkx"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var c;
      return !b("gkx")(
        "AT416ehE3mw1ywphqzeoc8-sSvcWOXWjwXQ3ibWkBpwpByhwGjdm9WHBt1oIZ43TE4bKo4d3LF402n5EQceIgzie",
      )
        ? a
        : Object.keys(((c = {}), (c[a] = 0), c))[0];
    }
    e.exports = a;
  },
  18,
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
        for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++)
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
  "DOMEventListener",
  ["invariant", "dedupString", "emptyFunction", "wrapFunction"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = !1;
    try {
      a = Object.defineProperty({}, "passive", {
        get: function () {
          h = !0;
        },
      });
      window.addEventListener("test", null, a);
    } catch (a) {}
    var i, j;
    window.addEventListener
      ? ((i = function (a, c, d, e) {
          e === void 0 && (e = !1),
            (d.wrapper = b("wrapFunction")(
              d,
              "entry",
              b("dedupString")("DOMEventListener.add " + c),
            )),
            a.addEventListener(c, d.wrapper, h ? e : !1);
        }),
        (j = function (a, b, c, d) {
          d === void 0 && (d = !1),
            a.removeEventListener(b, c.wrapper, h ? d : !1);
        }))
      : window.attachEvent
      ? ((i = function (a, c, d) {
          (d.wrapper = b("wrapFunction")(
            d,
            "entry",
            "DOMEventListener.add " + c,
          )),
            a.attachEvent || g(0),
            a.attachEvent("on" + c, d.wrapper);
        }),
        (j = function (a, b, c) {
          a.detachEvent || g(0), a.detachEvent("on" + b, c.wrapper);
        }))
      : (j = i = b("emptyFunction"));
    c = {
      add: function (a, b, c, d) {
        d === void 0 && (d = !1);
        i(a, b, c, d);
        return {
          remove: function () {
            j(a, b, c, d);
          },
        };
      },
      remove: j,
    };
    e.exports = c;
  },
  18,
);
__d(
  "FBLoggerMetadata",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [];
    function a() {
      this.metadata = [].concat(g);
    }
    a.prototype.addMetadata = function (a, b, c) {
      this.metadata.push([a, b, c]);
      return this;
    };
    a.prototype.isEmpty = function () {
      return this.metadata.length === 0;
    };
    a.prototype.getAll = function () {
      __p && __p();
      var a = [],
        b = this.metadata.filter(function (b) {
          if (b == null) return !1;
          var c = b.filter(function (a) {
            return a && a.indexOf(":") > -1;
          });
          if (c.length > 0) {
            a.push(b);
            return !1;
          }
          return !0;
        });
      return { invalidMetadata: a, validMetadata: b };
    };
    a.addGlobalMetadata = function (a, b, c) {
      g.push([a, b, c]);
    };
    e.exports = a;
  },
  null,
);
__d(
  "FBLogMessage",
  ["ErrorUtils", "FBLoggerMetadata", "TAAL", "TAALOpcodes", "ex", "sprintf"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = { mustfix: "error", warn: "warn", info: "log" },
      h = b("ex"),
      i = function a(b) {
        return function (c) {
          b > 0 && (c(), a(b - 1)(c));
        };
      };
    function j(a) {
      (this.project = a),
        (this.metadata = new (b("FBLoggerMetadata"))()),
        (this.taalOpcodes = []);
    }
    j.prototype.$1 = function (a, c) {
      __p && __p();
      var d = 2;
      if (c === undefined) {
        var e = new j("fblogger");
        i(d)(function () {
          return e.blameToPreviousFrame();
        });
        e.mustfix(
          "You provided an undefined format string to FBLogger, dropping log line",
        );
        return;
      }
      var f;
      for (
        var k = arguments.length, l = new Array(k > 2 ? k - 2 : 0), m = 2;
        m < k;
        m++
      )
        l[m - 2] = arguments[m];
      if (this.error) {
        f = this.error;
        var n = c + " from %s: %s";
        l.push(f.name);
        l.push(f.message);
        f.message = h.apply(undefined, [n].concat(l));
      } else {
        i(d)(
          function () {
            return this.taalOpcodes.unshift(b("TAALOpcodes").previousFrame());
          }.bind(this),
        );
        if (this.taalOpcodes) {
          var o = b("TAAL").applyOpcodes(c, this.taalOpcodes);
          f = new Error(h.apply(undefined, [o].concat(l)));
        } else f = new Error(h.apply(undefined, [c].concat(l)));
      }
      var p = "FBLogger" + (this.error ? " caught " + f.name : "");
      f.name = b("sprintf")("<level:%s> <name:%s> %s", a, this.project, p);
      f = b("ErrorUtils").normalizeError(f);
      if (!this.metadata.isEmpty()) {
        var q = this.metadata.getAll(),
          r = q.invalidMetadata,
          s = q.validMetadata;
        if (r.length > 0) {
          var t = new j("fblogger");
          i(d)(function () {
            return t.blameToPreviousFrame();
          });
          t.warn(
            "Metadata cannot contain colon %s",
            r
              .map(function (a) {
                return a.join(":");
              })
              .join(" "),
          );
        }
        f.fbloggerMetadata = s.map(function (a) {
          return a.join(":");
        });
      }
      var u = g[a];
      f.type = u;
      if (this.error && this.taalOpcodes && this.taalOpcodes.length) {
        var v = new j("fblogger");
        i(d)(function () {
          return v.blameToPreviousFrame();
        });
        v.warn(
          "Calling blame helpers doesn't work with catching, if you want to properly categorize a caught error please apply a TAAL rule on the Error message at the site where it is thrown.  Ignoring the blame methods for this call.",
        );
      }
      b("ErrorUtils").reportError(f, !1, "FBLOGGER");
    };
    j.prototype.mustfix = function (a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      this.$1.apply(this, ["mustfix", a].concat(c));
    };
    j.prototype.warn = function (a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      this.$1.apply(this, ["warn", a].concat(c));
    };
    j.prototype.info = function (a) {};
    j.prototype.debug = function (a) {};
    j.prototype.catching = function (a) {
      !(a instanceof Error)
        ? new j("fblogger")
            .blameToPreviousFrame()
            .warn(
              "You provided an error to .catching that was not an Error object, ignoring...",
            )
        : (this.error = a);
      return this;
    };
    j.prototype.blameToPreviousFile = function () {
      this.taalOpcodes.push(b("TAALOpcodes").previousFile());
      return this;
    };
    j.prototype.blameToPreviousFrame = function () {
      this.taalOpcodes.push(b("TAALOpcodes").previousFrame());
      return this;
    };
    j.prototype.blameToPreviousDirectory = function () {
      this.taalOpcodes.push(b("TAALOpcodes").previousDirectory());
      return this;
    };
    j.prototype.addMetadata = function (a, b, c) {
      this.metadata.addMetadata(a, b, c);
      return this;
    };
    e.exports = j;
  },
  null,
);
__d(
  "FBLogger",
  ["FBLoggerMetadata", "FBLogMessage"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a) {
      return new (b("FBLogMessage"))(a);
    };
    a.addGlobalMetadata = function (a, c, d) {
      b("FBLoggerMetadata").addGlobalMetadata(a, c, d);
    };
    e.exports = a;
  },
  null,
);
__d(
  "isNode",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      var b = a ? a.ownerDocument || a : document;
      b = b.defaultView || window;
      return !!(
        a &&
        (typeof b.Node === "function"
          ? a instanceof b.Node
          : typeof a === "object" &&
            typeof a.nodeType === "number" &&
            typeof a.nodeName === "string")
      );
    }
    e.exports = a;
  },
  18,
);
__d(
  "isTextNode",
  ["isNode"],
  function (a, b, c, d, e, f) {
    function a(a) {
      return b("isNode")(a) && a.nodeType == 3;
    }
    e.exports = a;
  },
  18,
);
__d(
  "containsNode",
  ["isTextNode"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, c) {
      __p && __p();
      if (!a || !c) return !1;
      else if (a === c) return !0;
      else if (b("isTextNode")(a)) return !1;
      else if (b("isTextNode")(c)) return g(a, c.parentNode);
      else if ("contains" in a) return a.contains(c);
      else if (a.compareDocumentPosition)
        return !!(a.compareDocumentPosition(c) & 16);
      else return !1;
    }
    e.exports = g;
  },
  18,
);
__d(
  "createArrayFromMixed",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h(a) {
      __p && __p();
      var b = a.length;
      (!Array.isArray(a) &&
        (typeof a === "object" || typeof a === "function")) ||
        g(0);
      typeof b === "number" || g(0);
      b === 0 || b - 1 in a || g(0);
      typeof a.callee !== "function" || g(0);
      if (a.hasOwnProperty)
        try {
          return Array.prototype.slice.call(a);
        } catch (a) {}
      var c = Array(b);
      for (var d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    function i(a) {
      return (
        !!a &&
        (typeof a === "object" || typeof a === "function") &&
        "length" in a &&
        !("setInterval" in a) &&
        typeof a.nodeType !== "number" &&
        (Array.isArray(a) || "callee" in a || "item" in a)
      );
    }
    function a(a) {
      if (!i(a)) return [a];
      else if (Array.isArray(a)) return a.slice();
      else return h(a);
    }
    e.exports = a;
  },
  null,
);
__d(
  "createObjectFrom",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, b) {
      if (b === undefined) return g(a, !0);
      var c = {};
      if (Array.isArray(b))
        for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];
      else for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b;
      return c;
    }
    e.exports = g;
  },
  18,
);
__d(
  "ge",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b, c) {
      if (typeof a !== "string") return a;
      else if (!b) return document.getElementById(a);
      else return g(a, b, c);
    }
    function g(a, b, c) {
      __p && __p();
      var d;
      if (h(b) == a) return b;
      else if (b.getElementsByTagName) {
        c = b.getElementsByTagName(c || "*");
        for (d = 0; d < c.length; d++) if (h(c[d]) == a) return c[d];
      } else {
        c = b.childNodes;
        for (d = 0; d < c.length; d++) {
          b = g(a, c[d]);
          if (b) return b;
        }
      }
      return null;
    }
    function h(a) {
      return a.getAttribute ? a.getAttribute("id") : null;
    }
    e.exports = a;
  },
  null,
);
__d(
  "ifRequired",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      var e;
      d &&
        d.call(null, [a], function (a) {
          e = a;
        });
      if (e && b) return b(e);
      else if (!e && c) return c();
    }
    e.exports = a;
  },
  null,
);
__d(
  "isElementNode",
  ["isNode"],
  function (a, b, c, d, e, f) {
    function a(a) {
      return b("isNode")(a) && a.nodeType == 1;
    }
    e.exports = a;
  },
  null,
);
__d(
  "DOMQuery",
  [
    "CSS",
    "FBLogger",
    "containsNode",
    "createArrayFromMixed",
    "createObjectFrom",
    "ge",
    "ifRequired",
    "isElementNode",
    "isNode",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = /^\.-?[_a-zA-Z]+[\w-]*$/;
    function h(a, b) {
      return a.hasAttribute ? a.hasAttribute(b) : a.getAttribute(b) !== null;
    }
    var i = {
      find: function (a, b) {
        a = i.scry(a, b);
        return a[0];
      },
      findPushSafe: function (a, b, c) {
        b = i.scry(a, b);
        a = i.scry(a, c);
        b.length === 1 && a.length === 1 && b[0] === a[0]
          ? (c = b)
          : (c = b.concat(a));
        return c[0];
      },
      scry: function (a, c) {
        __p && __p();
        if (!a || !a.getElementsByTagName) return [];
        c = c.split(" ");
        var d = [a];
        for (var e = 0; e < c.length; e++) {
          if (d.length === 0) break;
          if (c[e] === "") continue;
          var f = c[e],
            i = c[e],
            j = [],
            k = !1;
          if (f.charAt(0) == "^")
            if (e === 0) (k = !0), (f = f.slice(1));
            else return [];
          f = f.replace(
            /\[(?:[^=\]]*=(?:\"[^\"]*\"|\'[^\']*\'))?|[.#]/g,
            " $&",
          );
          f = f.split(" ");
          var l = f[0] || "*",
            m = l == "*",
            n = f[1] && f[1].charAt(0) == "#";
          if (n) {
            n = b("ge")(f[1].slice(1), a, l);
            if (n && (m || n.tagName.toLowerCase() == l))
              for (var o = 0; o < d.length; o++)
                if (k && b("containsNode")(n, d[o])) {
                  j = [n];
                  break;
                } else if (
                  document == d[o] ||
                  (b("containsNode")(d[o], n) && d[o] !== n)
                ) {
                  j = [n];
                  break;
                }
          } else {
            n = [];
            o = d.length;
            var p,
              q = !k && i.indexOf("[") < 0 && document.querySelectorAll;
            for (var r = 0; r < o; r++) {
              if (k) {
                p = [];
                var s = d[r].parentNode;
                while (b("isElementNode")(s))
                  (m || s.tagName.toLowerCase() == l) && p.push(s),
                    (s = s.parentNode);
              } else
                q
                  ? g.test(i)
                    ? (p = d[r].getElementsByClassName(i.substring(1)))
                    : (p = d[r].querySelectorAll(i))
                  : (p = d[r].getElementsByTagName(l));
              s = p.length;
              for (var t = 0; t < s; t++) n.push(p[t]);
            }
            if (!q)
              for (var p = 1; p < f.length; p++) {
                s = f[p];
                t = s.charAt(0) == ".";
                m = s.substring(1);
                for (r = 0; r < n.length; r++) {
                  o = n[r];
                  if (!o || o.nodeType !== 1) continue;
                  if (t) {
                    b("CSS").hasClass(o, m) || delete n[r];
                    continue;
                  } else {
                    i = s.slice(1, s.length - 1);
                    l = i.indexOf("=");
                    if (l < 0) {
                      if (!h(o, i)) {
                        delete n[r];
                        continue;
                      }
                    } else {
                      q = i.substr(0, l);
                      i = i.substr(l + 1);
                      i = i.slice(1, i.length - 1);
                      if (o.getAttribute(q) != i) {
                        delete n[r];
                        continue;
                      }
                    }
                  }
                }
              }
            for (r = 0; r < n.length; r++)
              if (n[r]) {
                j.push(n[r]);
                if (k) break;
              }
          }
          d = j;
        }
        return d;
      },
      getSelection: function () {
        var a = window.getSelection;
        if (a) return a() + "";
        else {
          a = document.selection;
          if (a) return a.createRange().text;
        }
        return null;
      },
      contains: function (a, c) {
        (typeof a === "string" || typeof c === "string") &&
          b("FBLogger")("dom_query").info(
            "Support for node IDs is deprecated. Use containsNode(ge(<id1>), ge(<id2>)) instead",
          );
        return b("containsNode")(b("ge")(a), b("ge")(c));
      },
      getRootElement: function () {
        var a = b("ifRequired")("Quickling", function (a) {
          return a.isActive() ? b("ge")("content") : null;
        });
        return a || document.body;
      },
      isNodeOfType: function (a, c) {
        c = b("createArrayFromMixed")(c).join("|").toUpperCase().split("|");
        c = b("createObjectFrom")(c);
        return b("isNode")(a) && a.nodeName in c;
      },
      isInputNode: function (a) {
        return (
          i.isNodeOfType(a, ["input", "textarea"]) ||
          a.contentEditable === "true"
        );
      },
    };
    e.exports = i;
  },
  18,
);
__d(
  "ExecutionContextObservers",
  [],
  function (a, b, c, d, e, f) {
    a = {
      MUTATION_COUNTING: 0,
      PROFILING_COUNTERS: 1,
      REFERENCE_COUNTING: 2,
      HEARTBEAT: 3,
      CALL_STACK: 4,
      ASYNC_PROFILER: 5,
      TIMESLICE_EXECUTION_LOGGER: 6,
    };
    b = {
      MUTATION_COUNTING: 0,
      REFERENCE_COUNTING: 1,
      PROFILING_COUNTERS: 2,
      HEARTBEAT: 3,
      CALL_STACK: 4,
      ASYNC_PROFILER: 5,
      TIMESLICE_EXECUTION_LOGGER: 6,
    };
    c = { beforeIDs: a, afterIDs: b };
    e.exports = c;
  },
  null,
);
__d(
  "uniqueID",
  [],
  function (a, b, c, d, e, f) {
    var g = "js_",
      h = 36,
      i = 0;
    function a() {
      return g + (i++).toString(h);
    }
    e.exports = a;
  },
  null,
);
__d(
  "CallStackExecutionObserver",
  ["ExecutionContextObservers", "ifRequired", "uniqueID"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    function g(event, a) {
      __p && __p();
      if (a) {
        var b = a.id,
          c = a.name;
        a = a.interactions;
        var d = Error.stackTraceLimit;
        Error.stackTraceLimit = 1e3;
        var e = new Error().stack;
        Error.stackTraceLimit = d;
        a.forEach(function (a) {
          a.inform(event + ":" + c, { rawStackTrace: e }).addStringAnnotation(
            "id",
            b,
          );
        });
      }
    }
    a = {
      onNewContextCreated: function (a, c, d) {
        __p && __p();
        a = b("ifRequired")("TimeSliceAutoclosedInteraction", function (a) {
          return a;
        });
        a = a ? a.getInteractionsActiveRightNow() : [];
        a = a.filter(function (a) {
          return a.isEnabledForMode("full");
        });
        if (d && d.isContinuation && a.length) {
          var e = b("uniqueID")();
          d = Error.stackTraceLimit;
          Error.stackTraceLimit = 1e3;
          var f = new Error().stack;
          Error.stackTraceLimit = d;
          a.forEach(function (a) {
            a
              .inform("created_continuation:" + c, { rawStackTrace: f })
              .addStringAnnotation("id", e),
              a.trace().addStringAnnotation("has_stack_trace", "1");
          });
          return { id: e, name: c, interactions: a };
        }
        return null;
      },
      onContextCanceled: function (a, b) {
        g("cancelling_continuation", b);
      },
      onBeforeContextStarted: function (a, b, c) {
        return null;
      },
      onAfterContextStarted: function (a, b, c, d) {
        g("executing_continuation", b);
        return null;
      },
      onAfterContextEnded: function (a, b, c, d) {
        g("executing_continuation_end", b);
      },
      getBeforeID: function () {
        return b("ExecutionContextObservers").beforeIDs.CALL_STACK;
      },
      getAfterID: function () {
        return b("ExecutionContextObservers").afterIDs.CALL_STACK;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "CircularBuffer",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a) {
      "use strict";
      a > 0 || g(0),
        (this.$1 = a),
        (this.$2 = 0),
        (this.$3 = []),
        (this.$4 = []);
    }
    a.prototype.write = function (a) {
      "use strict";
      this.$3.length < this.$1
        ? this.$3.push(a)
        : (this.$4.forEach(
            function (a) {
              return a(this.$3[this.$2]);
            }.bind(this),
          ),
          (this.$3[this.$2] = a),
          this.$2++,
          (this.$2 %= this.$1));
      return this;
    };
    a.prototype.onEvict = function (a) {
      "use strict";
      this.$4.push(a);
      return this;
    };
    a.prototype.read = function () {
      "use strict";
      return this.$3.slice(this.$2).concat(this.$3.slice(0, this.$2));
    };
    a.prototype.expand = function (a) {
      "use strict";
      if (a > this.$1) {
        var b = this.read();
        this.$2 = 0;
        this.$3 = b;
        this.$1 = a;
      }
      return this;
    };
    a.prototype.dropFirst = function (a) {
      "use strict";
      if (a <= this.$1) {
        var b = this.read();
        this.$2 = 0;
        b.splice(0, a);
        this.$3 = b;
      }
      return this;
    };
    a.prototype.clear = function () {
      "use strict";
      this.$2 = 0;
      this.$3 = [];
      return this;
    };
    a.prototype.currentSize = function () {
      "use strict";
      return this.$3.length;
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntervalTrackingBoundedBuffer",
  ["CircularBuffer", "ErrorUtils"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 5e3;
    function a(a) {
      __p && __p();
      this.$6 = 0;
      if (a != null) {
        if (a <= 0)
          throw new Error("Size for a buffer must be greater than zero.");
      } else a = g;
      this.$4 = a;
      this.$1 = new (b("CircularBuffer"))(a);
      this.$1.onEvict(
        function () {
          return this.$6++;
        }.bind(this),
      );
      this.$2 = [];
      this.$3 = 1;
      this.$5 = 0;
    }
    a.prototype.open = function () {
      __p && __p();
      var a = this.$3++,
        b = !1,
        c,
        d = this.$5,
        e = {
          id: a,
          startIdx: d,
          hasOverflown: function () {
            return e.getOverflowSize() > 0;
          },
          getOverflowSize: function () {
            return c != null ? c : Math.max(this.$6 - d, 0);
          }.bind(this),
          close: function () {
            if (b) return [];
            else {
              b = !0;
              c = this.$6 - d;
              return this.$7(a);
            }
          }.bind(this),
        };
      this.$2.push(e);
      return e;
    };
    a.prototype.pushElement = function (a) {
      this.$2.length > 0 && (this.$1.write(a), this.$5++);
      return this;
    };
    a.prototype.isActive = function () {
      return this.$2.length > 0;
    };
    a.prototype.$8 = function (a) {
      return Math.max(a - this.$6, 0);
    };
    a.prototype.$7 = function (a) {
      __p && __p();
      var c, d, e, f;
      for (var g = 0; g < this.$2.length; g++) {
        var h = this.$2[g],
          i = h.startIdx;
        h = h.id;
        h === a ? ((e = g), (f = i)) : (d == null || i < d) && (d = i);
        (c == null || i < c) && (c = i);
      }
      if (e == null || c == null || f == null) {
        b("ErrorUtils").reportError(
          new Error("messed up state inside IntervalTrackingBoundedBuffer"),
        );
        return [];
      }
      this.$2.splice(e, 1);
      h = this.$8(f);
      i = this.$1.read().slice(h);
      g = this.$8(d == null ? this.$5 : d) - this.$8(c);
      g > 0 && (this.$1.dropFirst(g), (this.$6 += g));
      return i;
    };
    e.exports = a;
  },
  null,
);
__d(
  "WorkerUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function b() {
      try {
        return "WorkerGlobalScope" in a && a instanceof a.WorkerGlobalScope;
      } catch (a) {
        return !1;
      }
    }
    e.exports = { isWorkerContext: b };
  },
  null,
);
__d(
  "getReusableTimeSliceContinuation",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    function a(a, b, c) {
      __p && __p();
      var d = !1,
        e = a.getGuardedContinuation(c),
        f = function (b) {
          e(function () {
            d || (e = a.getGuardedContinuation(c)), b();
          });
        };
      f.last = function (a) {
        var b = e;
        g();
        b(a);
      };
      f[b] = {
        cancel: function () {
          d || (a.cancel(e), g(), (d = !0));
        },
        tokens: [],
        invoked: !1,
      };
      function g() {
        (d = !0),
          (e = function (a) {
            a();
          });
      }
      return f;
    }
    e.exports = a;
  },
  null,
);
__d(
  "nullthrows",
  [],
  function (a, b, c, d, e, f) {
    a = function (a, b) {
      b === void 0 && (b = "Got unexpected null or undefined");
      if (a != null) return a;
      a = new Error(b);
      a.framesToPop = 1;
      throw a;
    };
    e.exports = a;
  },
  null,
);
__d(
  "ExecutionEnvironment",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = !!(
      typeof window !== "undefined" &&
      window.document &&
      window.document.createElement
    );
    b = {
      canUseDOM: a,
      canUseWorkers: typeof Worker !== "undefined",
      canUseEventListeners:
        a && !!(window.addEventListener || window.attachEvent),
      canUseViewport: a && !!window.screen,
      isInWorker: !a,
    };
    e.exports = b;
  },
  null,
);
__d(
  "performance",
  ["ExecutionEnvironment"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    b("ExecutionEnvironment").canUseDOM &&
      (g =
        window.performance || window.msPerformance || window.webkitPerformance);
    e.exports = g || {};
  },
  null,
);
__d(
  "performanceAbsoluteNow",
  ["performance"],
  function (a, b, c, d, e, f) {
    if (
      b("performance").now &&
      b("performance").timing &&
      b("performance").timing.navigationStart
    ) {
      var g = b("performance").timing.navigationStart;
      a = function () {
        return b("performance").now() + g;
      };
    } else
      a = function () {
        return Date.now();
      };
    e.exports = a;
  },
  null,
);
__d(
  "TimeSlice",
  [
    "invariant",
    "CallStackExecutionObserver",
    "CircularBuffer",
    "Env",
    "ErrorUtils",
    "FBLogger",
    "IntervalTrackingBoundedBuffer",
    "WorkerUtils",
    "getReusableTimeSliceContinuation",
    "nullthrows",
    "performanceAbsoluteNow",
    "wrapFunction",
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = [],
      i = [],
      j = "key" + Math.random(),
      k = 1,
      l = !1,
      m = 0,
      n = 1,
      o = 2,
      p = {},
      q = m,
      r = new (b("CircularBuffer"))(100),
      s = 0,
      t = 0;
    c = b("Env").timesliceBufferSize;
    c == null && (c = 5e3);
    var u = new (b("IntervalTrackingBoundedBuffer"))(c),
      v = "stackTraceLimit" in Error,
      w = [],
      x = [],
      y = [];
    function z() {
      return A(w);
    }
    function A(a) {
      return a.length > 0 ? a[a.length - 1] : null;
    }
    function B(a, c) {
      var d = {};
      b("ErrorUtils").applyWithGuard(F, null, [a, c, d]);
      b("ErrorUtils").applyWithGuard(G, null, [a, c, d]);
      w.push(a);
      x.push(c);
      y.push(d);
    }
    function C(a, b, c) {
      h.forEach(function (d) {
        var e = d.onNewContextCreated(z(), b, c);
        a[d.getBeforeID()] = e;
      });
    }
    function D(a, b) {
      h.forEach(function (c) {
        c.onContextCanceled(a, b[c.getBeforeID()]);
      });
    }
    function E(a, b, c) {
      i.forEach(function (d) {
        d.onAfterContextEnded(
          a,
          b[d.getBeforeID()],
          c[d.getBeforeID()],
          a.meta,
        );
      });
    }
    function F(a, b, c) {
      h.forEach(function (d) {
        var e = d.onBeforeContextStarted(a, b[d.getBeforeID()], a.meta);
        c[d.getBeforeID()] = e;
      });
    }
    function G(a, b, c) {
      h.forEach(function (d) {
        var e = d.onAfterContextStarted(
          a,
          b[d.getBeforeID()],
          c[d.getBeforeID()],
          a.meta,
        );
        c[d.getBeforeID()] = e;
      });
    }
    function H() {
      __p && __p();
      var a = z(),
        c = A(x),
        d = A(y);
      if (a == null || c == null || d == null) {
        b("FBLogger")("TimeSlice").mustfix(
          "popped too many times off the timeslice stack",
        );
        l = !1;
        return;
      }
      b("ErrorUtils").applyWithGuard(E, null, [a, c, d]);
      l = !a.isRoot;
      w.pop();
      x.pop();
      y.pop();
    }
    var I = {
      PropagationType: { CONTINUATION: 0, EXECUTION: 1, ORPHAN: 2 },
      guard: function (a, c, d) {
        __p && __p();
        typeof a === "function" || g(0);
        typeof c === "string" || g(0);
        var e = J(d);
        if (a[j]) return a;
        e.root || I.checkCoverage();
        var f;
        l && (f = z());
        var h = {},
          i = 0,
          m = undefined,
          n = b("Env").deferred_stack_trace_rate || 0;
        n !== 0 &&
          Math.random() * n <= 1 &&
          b("Env").timeslice_heartbeat_config &&
          b("Env").timeslice_heartbeat_config.isArtilleryOn &&
          d &&
          d.registerCallStack &&
          (m = b("ErrorUtils").normalizeError(
            new Error("deferred execution source"),
          ));
        var o = {
          cancel: function () {
            o.invoked || b("ErrorUtils").applyWithGuard(D, null, [c, h]);
          },
          tokens: [],
          invoked: !1,
        };
        n = function () {
          __p && __p();
          var d = b("performanceAbsoluteNow")(),
            g,
            j = k++,
            n = {
              contextID: j,
              name: c,
              isRoot: !l,
              executionNumber: i++,
              meta: e,
              absBeginTimeMs: d,
            };
          o.invoked ||
            ((o.invoked = !0),
            o.tokens.length &&
              (o.tokens.forEach(function (a) {
                delete p[a];
              }),
              (o.tokens = [])));
          B(n, h);
          if (f != null) {
            var q = !!e.isContinuation;
            f.isRoot
              ? ((n.indirectParentID = f.contextID), (n.isEdgeContinuation = q))
              : ((n.indirectParentID = f.indirectParentID),
                (n.isEdgeContinuation = !!(q && f.isEdgeContinuation)));
          }
          var r = b("WorkerUtils").isWorkerContext();
          l = !0;
          try {
            if (!n.isRoot || r) return a.apply(this, arguments);
            else {
              var s = "TimeSlice" + (c ? ": " + c : "");
              g = b("ErrorUtils").applyWithGuard(
                a,
                this,
                [].concat(Array.prototype.slice.call(arguments)),
                null,
                s,
                { deferredSource: m },
              );
              return g;
            }
          } finally {
            var v = z();
            if (v == null)
              b("FBLogger")("TimeSlice").mustfix(
                "timeslice stack misaligned, not logging the block",
              ),
                (l = !1);
            else {
              var w = v.isRoot,
                x = v.contextID,
                y = v.indirectParentID,
                A = v.isEdgeContinuation,
                C = b("performanceAbsoluteNow")();
              v.absEndTimeMs = C;
              if (w && d != null) {
                t += C - d;
                var D = babelHelpers["extends"](
                  {
                    begin: d,
                    end: C,
                    id: x,
                    indirectParentID: y,
                    representsExecution: !0,
                    isEdgeContinuation: f && A,
                    guard: c,
                  },
                  e,
                  a.__SMmeta,
                );
                u.pushElement(D);
              }
              H();
            }
          }
        };
        n = n;
        n[j] = o;
        b("ErrorUtils").applyWithGuard(C, null, [h, c, e]);
        return n;
      },
      copyGuardForWrapper: function (a, b) {
        a && a[j] && (b[j] = a[j]);
        return b;
      },
      cancel: function (a) {
        a = a ? a[j] : null;
        a &&
          !a.invoked &&
          (a.cancel(),
          a.tokens.forEach(function (a) {
            delete p[a];
          }),
          (a.invoked = !0));
      },
      cancelWithToken: function (a) {
        p[a] && I.cancel(p[a]);
      },
      registerForCancelling: function (a, b) {
        a &&
          b[j] &&
          (p[a] || b[j].invoked || ((p[a] = b), b[j].tokens.push(a)));
      },
      inGuard: function () {
        return l;
      },
      checkCoverage: function () {
        var a;
        if (q !== o && !l) {
          v && ((a = Error.stackTraceLimit), (Error.stackTraceLimit = 50));
          var c = new Error("Missing TimeSlice coverage");
          v && (Error.stackTraceLimit = a);
          q === n && Math.random() < s
            ? b("FBLogger")("TimeSlice")
                .catching(c)
                .debug("Missing TimeSlice coverage")
            : q === m && b("nullthrows")(r).write(c);
        }
      },
      setLogging: function (a, c) {
        if (q !== m) return;
        s = c;
        a
          ? ((q = n),
            b("nullthrows")(r)
              .read()
              .forEach(function (a) {
                Math.random() < s &&
                  b("FBLogger")("TimeSlice")
                    .catching(a)
                    .warn("error from logging buffer");
              }))
          : (q = o);
        b("nullthrows")(r).clear();
        r = undefined;
      },
      getContext: function () {
        return z();
      },
      getTotalTime: function () {
        return t;
      },
      getGuardedContinuation: function (a) {
        return I.guard(
          function (a) {
            for (
              var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
              d < b;
              d++
            )
              c[d - 1] = arguments[d];
            return a.apply(this, c);
          },
          a,
          { propagationType: I.PropagationType.CONTINUATION },
        );
      },
      getReusableContinuation: function (a) {
        return b("getReusableTimeSliceContinuation")(I, j, a);
      },
      getGuardNameStack: function () {
        return w.map(function (a) {
          return a.name;
        });
      },
      registerExecutionContextObserver: function (a) {
        __p && __p();
        var b = !1;
        for (var c = 0; c < h.length; c++)
          if (h[c].getBeforeID() > a.getBeforeID()) {
            h.splice(c, 0, a);
            b = !0;
            break;
          }
        b || h.push(a);
        for (var c = 0; c < i.length; c++)
          if (i[c].getAfterID() > a.getAfterID()) {
            i.splice(c, 0, a);
            return;
          }
        i.push(a);
      },
      catchUpOnDemandExecutionContextObservers: function (a) {
        for (var b = 0; b < w.length; b++) {
          var c = w[b],
            d = x[b],
            e = y[b] || {};
          d = a.onBeforeContextStartedWhileEnabled(
            c,
            d[a.getBeforeID()],
            c.meta,
          );
          e[a.getBeforeID()] = d;
          y[b] = e;
        }
      },
      getBuffer: function () {
        return u;
      },
    };
    function J(a) {
      __p && __p();
      var b = {};
      a &&
        a.propagateCounterAttribution !== undefined &&
        (b.propagateCounterAttribution = a.propagateCounterAttribution);
      a && a.root !== undefined && (b.root = a.root);
      switch (a && a.propagationType) {
        case I.PropagationType.CONTINUATION:
          b.isContinuation = !0;
          b.extendsExecution = !0;
          break;
        case I.PropagationType.ORPHAN:
          b.isContinuation = !1;
          b.extendsExecution = !1;
          break;
        case I.PropagationType.EXECUTION:
        default:
          (b.isContinuation = !1), (b.extendsExecution = !0);
      }
      return b;
    }
    b("Env").sample_continuation_stacktraces &&
      I.registerExecutionContextObserver(b("CallStackExecutionObserver"));
    b("wrapFunction").setWrapper(I.guard, "entry");
    a.TimeSlice = I;
    e.exports = I;
  },
  3,
);
__d(
  "VersionRange",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = /\./,
      i = /\|\|/,
      j = /\s+\-\s+/,
      k = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
      l = /^(\d*)(.*)/;
    function m(a, b) {
      var c = a.split(i);
      if (c.length > 1)
        return c.some(function (a) {
          return D.contains(a, b);
        });
      else {
        a = c[0].trim();
        return n(a, b);
      }
    }
    function n(a, b) {
      a = a.split(j);
      (a.length > 0 && a.length <= 2) || g(0);
      if (a.length === 1) return o(a[0], b);
      else {
        var c = a[0];
        a = a[1];
        (x(c) && x(a)) || g(0);
        return o(">=" + c, b) && o("<=" + a, b);
      }
    }
    function o(a, b) {
      __p && __p();
      a = a.trim();
      if (a === "") return !0;
      b = b.split(h);
      a = v(a);
      var c = a.modifier;
      a = a.rangeComponents;
      switch (c) {
        case "<":
          return p(b, a);
        case "<=":
          return q(b, a);
        case ">=":
          return s(b, a);
        case ">":
          return t(b, a);
        case "~":
        case "~>":
          return u(b, a);
        default:
          return r(b, a);
      }
    }
    function p(a, b) {
      return C(a, b) === -1;
    }
    function q(a, b) {
      a = C(a, b);
      return a === -1 || a === 0;
    }
    function r(a, b) {
      return C(a, b) === 0;
    }
    function s(a, b) {
      a = C(a, b);
      return a === 1 || a === 0;
    }
    function t(a, b) {
      return C(a, b) === 1;
    }
    function u(a, b) {
      var c = b.slice();
      b = b.slice();
      b.length > 1 && b.pop();
      var d = b.length - 1,
        e = parseInt(b[d], 10);
      w(e) && (b[d] = e + 1 + "");
      return s(a, c) && p(a, b);
    }
    function v(a) {
      a = a.split(h);
      var b = a[0].match(k);
      b || g(0);
      return { modifier: b[1], rangeComponents: [b[2]].concat(a.slice(1)) };
    }
    function w(a) {
      return !isNaN(a) && isFinite(a);
    }
    function x(a) {
      return !v(a).modifier;
    }
    function y(a, b) {
      for (var c = a.length; c < b; c++) a[c] = "0";
    }
    function z(a, b) {
      __p && __p();
      a = a.slice();
      b = b.slice();
      y(a, b.length);
      for (var c = 0; c < b.length; c++) {
        var d = b[c].match(/^[x*]$/i);
        if (d) {
          b[c] = a[c] = "0";
          if (d[0] === "*" && c === b.length - 1)
            for (var d = c; d < a.length; d++) a[d] = "0";
        }
      }
      y(b, a.length);
      return [a, b];
    }
    function A(a, b) {
      var c = a.match(l)[1],
        d = b.match(l)[1];
      c = parseInt(c, 10);
      d = parseInt(d, 10);
      if (w(c) && w(d) && c !== d) return B(c, d);
      else return B(a, b);
    }
    function B(a, b) {
      typeof a === typeof b || g(0);
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    }
    function C(a, b) {
      a = z(a, b);
      b = a[0];
      a = a[1];
      for (var c = 0; c < a.length; c++) {
        var d = A(b[c], a[c]);
        if (d) return d;
      }
      return 0;
    }
    var D = {
      contains: function (a, b) {
        return m(a.trim(), b.trim());
      },
    };
    e.exports = D;
  },
  null,
);
__d(
  "mapObject",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = Object.prototype.hasOwnProperty;
    function h(a, b, c) {
      if (!a) return null;
      var d = {};
      for (var e in a) {
        var f = e;
        g.call(a, f) && (d[f] = b.call(c, a[f], f, a));
      }
      return d;
    }
    function a(a, b, c) {
      return h(a, b, c);
    }
    function b(a, b, c) {
      return h(a, b, c);
    }
    h.untyped = a;
    h.shape = b;
    e.exports = h;
  },
  18,
);
__d(
  "memoizeStringOnly",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = {};
      return function (c) {
        Object.prototype.hasOwnProperty.call(b, c) || (b[c] = a.call(this, c));
        return b[c];
      };
    }
    e.exports = a;
  },
  18,
);
__d(
  "UserAgent",
  ["UserAgentData", "VersionRange", "mapObject", "memoizeStringOnly"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    function g(a, c, d, e) {
      __p && __p();
      if (a === d) return !0;
      if (!d.startsWith(a)) return !1;
      d = d.slice(a.length);
      if (c) {
        d = e ? e(d) : d;
        return b("VersionRange").contains(d, c);
      }
      return !1;
    }
    function h(a) {
      return b("UserAgentData").platformName === "Windows"
        ? a.replace(/^\s*NT/, "")
        : a;
    }
    a = {
      isBrowser: function (a) {
        return g(
          b("UserAgentData").browserName,
          b("UserAgentData").browserFullVersion,
          a,
        );
      },
      isBrowserArchitecture: function (a) {
        return g(b("UserAgentData").browserArchitecture, null, a);
      },
      isDevice: function (a) {
        return g(b("UserAgentData").deviceName, null, a);
      },
      isEngine: function (a) {
        return g(
          b("UserAgentData").engineName,
          b("UserAgentData").engineVersion,
          a,
        );
      },
      isPlatform: function (a) {
        return g(
          b("UserAgentData").platformName,
          b("UserAgentData").platformFullVersion,
          a,
          h,
        );
      },
      isPlatformArchitecture: function (a) {
        return g(b("UserAgentData").platformArchitecture, null, a);
      },
    };
    e.exports = b("mapObject")(a, b("memoizeStringOnly"));
  },
  18,
);
__d(
  "performanceNow",
  ["performance"],
  function (a, b, c, d, e, f) {
    b("performance").now
      ? (a = function () {
          return b("performance").now();
        })
      : (a = function () {
          return Date.now();
        });
    e.exports = a;
  },
  null,
);
__d(
  "TimerStorage",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      ANIMATION_FRAME: "ANIMATION_FRAME",
      IDLE_CALLBACK: "IDLE_CALLBACK",
      IMMEDIATE: "IMMEDIATE",
      INTERVAL: "INTERVAL",
      TIMEOUT: "TIMEOUT",
    };
    var g = {};
    Object.keys(a).forEach(function (a) {
      return (g[a] = {});
    });
    b = babelHelpers["extends"]({}, a, {
      set: function (a, b) {
        g[a][b] = !0;
      },
      unset: function (a, b) {
        delete g[a][b];
      },
      clearAll: function (a, b) {
        Object.keys(g[a]).forEach(b), (g[a] = {});
      },
      getStorages: function () {
        return {};
      },
    });
    e.exports = b;
  },
  18,
);
__d(
  "setIntervalAcrossTransitions",
  ["TimeSlice"],
  function (a, b, c, d, e, f) {
    var g = a.setInterval.nativeBackup || a.setInterval;
    function c(c, d) {
      var e = b("TimeSlice").guard(c, "setInterval");
      for (
        var f = arguments.length, h = new Array(f > 2 ? f - 2 : 0), i = 2;
        i < f;
        i++
      )
        h[i - 2] = arguments[i];
      return Function.prototype.apply.call(g, a, [e, d].concat(h));
    }
    e.exports = c;
  },
  18,
);
__d(
  "setInterval",
  ["TimerStorage", "setIntervalAcrossTransitions"],
  function (a, b, c, d, e, f) {
    function a(a, c) {
      for (
        var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2;
        f < d;
        f++
      )
        e[f - 2] = arguments[f];
      var g = b("setIntervalAcrossTransitions").apply(
        undefined,
        [a, c].concat(e),
      );
      b("TimerStorage").set(b("TimerStorage").INTERVAL, g);
      return g;
    }
    e.exports = a;
  },
  18,
);
__d(
  "setTimeoutAcrossTransitions",
  ["TimerStorage", "TimeSlice"],
  function (a, b, c, d, e, f) {
    var g = a.setTimeout.nativeBackup || a.setTimeout,
      h = b("TimerStorage").TIMEOUT;
    function c(c, d) {
      var e = b("TimeSlice").guard(c, "setTimeout", {
        propagationType: b("TimeSlice").PropagationType.CONTINUATION,
        registerCallStack: !0,
      });
      for (
        var f = arguments.length, i = new Array(f > 2 ? f - 2 : 0), j = 2;
        j < f;
        j++
      )
        i[j - 2] = arguments[j];
      var k = Function.prototype.apply.call(g, a, [e, d].concat(i)),
        l = h + k;
      b("TimeSlice").registerForCancelling(l, e);
      return k;
    }
    e.exports = c;
  },
  18,
);
__d(
  "setTimeout",
  ["TimerStorage", "TimeSlice", "setTimeoutAcrossTransitions"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c) {
      __p && __p();
      var d,
        e = function () {
          b("TimerStorage").unset(b("TimerStorage").TIMEOUT, d);
          for (var c = arguments.length, e = new Array(c), f = 0; f < c; f++)
            e[f] = arguments[f];
          Function.prototype.apply.call(a, this, e);
        };
      b("TimeSlice").copyGuardForWrapper(a, e);
      for (
        var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), h = 2;
        h < f;
        h++
      )
        g[h - 2] = arguments[h];
      d = b("setTimeoutAcrossTransitions").apply(undefined, [e, c].concat(g));
      b("TimerStorage").set(b("TimerStorage").TIMEOUT, d);
      return d;
    }
    e.exports = a;
  },
  18,
);
__d(
  "throttle",
  [
    "TimeSlice",
    "TimeSliceInteractionSV",
    "setTimeout",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c, d) {
      return g(a, c, d, b("setTimeout"), !1);
    }
    Object.assign(a, {
      acrossTransitions: function (a, c, d) {
        return g(a, c, d, b("setTimeoutAcrossTransitions"), !1);
      },
      withBlocking: function (a, c, d) {
        return g(a, c, d, b("setTimeout"), !0);
      },
      acrossTransitionsWithBlocking: function (a, c, d) {
        return g(a, c, d, b("setTimeoutAcrossTransitions"), !0);
      },
    });
    function g(a, c, d, e, f) {
      __p && __p();
      var g = c == null ? 100 : c,
        h,
        i,
        j = 0,
        k = null,
        l = [],
        m = b("TimeSlice").guard(
          function () {
            __p && __p();
            j = Date.now();
            if (i) {
              var b = function (b) {
                  a.apply(h, b);
                }.bind(null, i),
                c = l.length;
              while (--c >= 0) b = l[c].bind(null, b);
              l = [];
              b();
              i = null;
              k = e(m, g);
            } else k = null;
          },
          "throttle_" + g + "_ms",
          { propagationType: b("TimeSlice").PropagationType.EXECUTION },
        );
      m.__SMmeta = a.__SMmeta;
      return function () {
        b("TimeSliceInteractionSV").ref_counting_fix &&
          l.push(
            b("TimeSlice").getGuardedContinuation("throttleWithContinuation"),
          ),
          (i = arguments),
          (h = this),
          d !== undefined && (h = d),
          (k === null || Date.now() - j > g) && (f ? m() : (k = e(m, 0)));
      };
    }
    e.exports = a;
  },
  18,
);
/**
 * License: https://www.facebook.com/legal/license/2v2plzJQoTQ/
 */
__d(
  "IntersectionObserverFallback",
  [
    "FBLogger",
    "TimeSlice",
    "UserAgent",
    "gkx",
    "performanceNow",
    "setInterval",
    "throttle",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = document.documentElement,
      h = [];
    function i(a, b) {
      var c = Math.max(a.top, b.top),
        d = Math.min(a.bottom, b.bottom),
        e = Math.max(a.left, b.left);
      a = Math.min(a.right, b.right);
      b = a - e;
      var f = d - c;
      return b >= 0 && f >= 0
        ? { top: c, bottom: d, left: e, right: a, width: b, height: f }
        : undefined;
    }
    function j() {
      return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
    }
    function k(a) {
      __p && __p();
      this.time = a.time;
      this.target = a.target;
      this.rootBounds = a.rootBounds;
      this.boundingClientRect = a.boundingClientRect;
      this.intersectionRect = a.intersectionRect || j();
      this.isIntersecting = !!a.intersectionRect;
      a = this.boundingClientRect;
      a = a.width * a.height;
      var b = this.intersectionRect.width * this.intersectionRect.height;
      a
        ? (this.intersectionRatio = b / a)
        : (this.intersectionRatio = this.isIntersecting ? 1 : 0);
    }
    function a(a, c) {
      __p && __p();
      this.THROTTLE_TIMEOUT = 100;
      this.POLL_INTERVAL = null;
      this.$12 = b("TimeSlice").guard(
        b("throttle")(
          function () {
            __p && __p();
            var a = this.$14(),
              c = a ? this.$15() : j();
            this.$6.forEach(
              function (d) {
                __p && __p();
                var e = d.element,
                  f;
                if (
                  b("gkx")(
                    "AT7IsskI4XB9V3_ZpKFnRxAvs6BVPIgSDbDcq24b8ToUAOY2pCaSzuagN7f_cNx9vGp7vgNftn1_SRfogFUNGS0K",
                  )
                )
                  try {
                    f = e.getBoundingClientRect();
                  } catch (a) {
                    if (b("UserAgent").isBrowser("IE")) f = j();
                    else throw a;
                  }
                else f = e.getBoundingClientRect();
                var g = this.$16(e),
                  h = d.entry,
                  i = a && g && !this.$2 && this.$17(e, c);
                d = d.entry = new k({
                  time: b("performanceNow")(),
                  target: e,
                  boundingClientRect: f,
                  rootBounds: c,
                  intersectionRect: i,
                });
                !h
                  ? this.$7.push(d)
                  : a && g
                  ? this.$18(h, d) && this.$7.push(d)
                  : h && h.isIntersecting && this.$7.push(d);
              }.bind(this),
            );
            this.$7.length && this.$1(this.takeRecords(), this);
          }.bind(this),
          this.THROTTLE_TIMEOUT,
        ),
        "IntersectionObserverFallback: checkForIntersections",
      );
      this.$2 = !1;
      try {
        window.top.document;
      } catch (a) {
        this.$2 = !0;
      }
      c = c || {};
      this.$1 = a;
      this.$4 = !1;
      this.$6 = [];
      this.$7 = [];
      this.$8 = this.$9(c.rootMargin);
      this.thresholds = this.$10(c.threshold);
      this.root = c.root || null;
      this.rootMargin = this.$8
        .map(function (a) {
          return a.value + a.unit;
        })
        .join(" ");
    }
    a.prototype.$10 = function (a) {
      a = a || [0];
      Array.isArray(a) || (a = [a]);
      return a.sort().filter(function (a, b, c) {
        return a !== c[b - 1];
      });
    };
    a.prototype.$9 = function (a) {
      a = a || "0px";
      a = a.split(/\s+/).map(function (a) {
        a = /^(-?\d*\.?\d+)(px|%)$/.exec(a);
        return { value: parseFloat(a[1]), unit: a[2] };
      });
      a[1] = a[1] || a[0];
      a[2] = a[2] || a[0];
      a[3] = a[3] || a[1];
      return a;
    };
    a.prototype.$11 = function () {
      this.$4 ||
        ((this.$4 = !0),
        this.$12(),
        this.POLL_INTERVAL
          ? (this.$5 = b("setInterval")(this.$12, this.POLL_INTERVAL))
          : (window.addEventListener("resize", this.$12),
            document.addEventListener("scroll", this.$12),
            "MutationObserver" in window &&
              ((this.$3 = new MutationObserver(this.$12)),
              this.$3.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))));
    };
    a.prototype.$13 = function () {
      this.$4 &&
        ((this.$4 = !1),
        this.$5 && (clearInterval(this.$5), (this.$5 = undefined)),
        window.removeEventListener("resize", this.$12),
        document.removeEventListener("scroll", this.$12),
        this.$3 && (this.$3.disconnect(), (this.$3 = undefined)));
    };
    a.prototype.$17 = function (a, c) {
      __p && __p();
      if (window.getComputedStyle(a).display == "none") return undefined;
      var d;
      if (
        b("gkx")(
          "AT7IsskI4XB9V3_ZpKFnRxAvs6BVPIgSDbDcq24b8ToUAOY2pCaSzuagN7f_cNx9vGp7vgNftn1_SRfogFUNGS0K",
        )
      )
        try {
          d = a.getBoundingClientRect();
        } catch (a) {
          if (b("UserAgent").isBrowser("IE")) d = j();
          else throw a;
        }
      else d = a.getBoundingClientRect();
      d = d;
      a = a.parentElement;
      var e = !1;
      while (!e) {
        var f = null;
        a == this.root || (a && a.nodeType != 1)
          ? ((e = !0), (f = c))
          : window.getComputedStyle(a).overflow != "visible" &&
            (f = a && a.getBoundingClientRect());
        if (f) {
          d = i(f, d);
          if (!d) break;
        }
        a = a && a.parentElement;
      }
      return d;
    };
    a.prototype.$15 = function () {
      var a;
      if (this.root) a = this.root.getBoundingClientRect();
      else {
        var b = document.documentElement,
          c = document.body,
          d = (b && b.clientWidth) || (c && c.clientWidth);
        b = (b && b.clientHeight) || (c && c.clientHeight);
        a = { top: 0, left: 0, right: d, width: d, bottom: b, height: b };
      }
      return this.$19(a);
    };
    a.prototype.$19 = function (a) {
      var b = this.$8.map(function (b, c) {
        return b.unit == "px"
          ? b.value
          : (b.value * (c % 2 ? a.width : a.height)) / 100;
      });
      b = {
        top: a.top - b[0],
        right: a.right + b[1],
        bottom: a.bottom + b[2],
        left: a.left - b[3],
        width: 0,
        height: 0,
      };
      b.width = b.right - b.left;
      b.height = b.bottom - b.top;
      return b;
    };
    a.prototype.$18 = function (a, b) {
      __p && __p();
      a = a && a.isIntersecting ? a.intersectionRatio || 0 : -1;
      b = b.isIntersecting ? b.intersectionRatio || 0 : -1;
      if (a === b) return !1;
      for (var c = 0; c < this.thresholds.length; c++) {
        var d = this.thresholds[c];
        if (d == a || d == b || d < a !== d < b) return !0;
      }
      return !1;
    };
    a.prototype.$14 = function () {
      return !this.root || (g !== null && g.contains(this.root));
    };
    a.prototype.$16 = function (a) {
      var b = this.root || g;
      return b !== null && b.contains(a);
    };
    a.prototype.$20 = function () {
      h.indexOf(this) < 0 && h.push(this);
    };
    a.prototype.$21 = function () {
      var a = h.indexOf(this);
      a != -1 && h.splice(a, 1);
    };
    a.prototype.observe = function (a) {
      __p && __p();
      if (!a) {
        b("FBLogger")("io").warn(
          "IntersectionObserverFallback target does not exist",
        );
        return;
      }
      if (
        this.$6.some(function (b) {
          return b.element == a;
        })
      )
        return;
      this.$20();
      this.$6.push({ element: a, entry: null });
      this.$11();
      this.$12();
    };
    a.prototype.unobserve = function (a) {
      (this.$6 = this.$6.filter(function (b) {
        return b.element != a;
      })),
        this.$6.length || (this.$13(), this.$21());
    };
    a.prototype.disconnect = function () {
      (this.$6 = []), this.$13(), this.$21();
    };
    a.prototype.takeRecords = function () {
      var a = this.$7.slice();
      this.$7 = [];
      return a;
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntersectionObserver",
  ["IntersectionObserverFallback"],
  function (a, b, c, d, e, f) {
    "use strict";
    a =
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype;
    e.exports = a
      ? window.IntersectionObserver
      : b("IntersectionObserverFallback");
  },
  null,
);
__d(
  "StrSet",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      "use strict";
      (this.$2 = {}), (this.$1 = 0), a && this.addAll(a);
    }
    g.prototype.add = function (a) {
      "use strict";
      Object.prototype.hasOwnProperty.call(this.$2, a) ||
        ((this.$2[a] = !0), this.$1++);
      return this;
    };
    g.prototype.addAll = function (a) {
      "use strict";
      a.forEach(this.add, this);
      return this;
    };
    g.prototype.remove = function (a) {
      "use strict";
      Object.prototype.hasOwnProperty.call(this.$2, a) &&
        (delete this.$2[a], this.$1--);
      return this;
    };
    g.prototype.removeAll = function (a) {
      "use strict";
      a.forEach(this.remove, this);
      return this;
    };
    g.prototype.toArray = function () {
      "use strict";
      return Object.keys(this.$2);
    };
    g.prototype.toMap = function (a) {
      "use strict";
      var b = {};
      Object.keys(this.$2).forEach(function (c) {
        b[c] = typeof a === "function" ? a(c) : a || !0;
      });
      return b;
    };
    g.prototype.contains = function (a) {
      "use strict";
      return Object.prototype.hasOwnProperty.call(this.$2, a);
    };
    g.prototype.count = function () {
      "use strict";
      return this.$1;
    };
    g.prototype.clear = function () {
      "use strict";
      this.$2 = {};
      this.$1 = 0;
      return this;
    };
    g.prototype.clone = function () {
      "use strict";
      return new g(this);
    };
    g.prototype.forEach = function (a, b) {
      "use strict";
      Object.keys(this.$2).forEach(a, b);
    };
    g.prototype.map = function (a, b) {
      "use strict";
      return Object.keys(this.$2).map(a, b);
    };
    g.prototype.some = function (a, b) {
      "use strict";
      return Object.keys(this.$2).some(a, b);
    };
    g.prototype.every = function (a, b) {
      "use strict";
      return Object.keys(this.$2).every(a, b);
    };
    g.prototype.filter = function (a, b) {
      "use strict";
      return new g(Object.keys(this.$2).filter(a, b));
    };
    g.prototype.union = function (a) {
      "use strict";
      return this.clone().addAll(a);
    };
    g.prototype.intersect = function (a) {
      "use strict";
      return this.filter(function (b) {
        return a.contains(b);
      });
    };
    g.prototype.difference = function (a) {
      "use strict";
      return a.filter(
        function (a) {
          return !this.contains(a);
        }.bind(this),
      );
    };
    g.prototype.equals = function (a) {
      "use strict";
      __p && __p();
      var b = function (a, b) {
          return a === b ? 0 : a < b ? -1 : 1;
        },
        c = this.toArray();
      a = a.toArray();
      if (c.length !== a.length) return !1;
      var d = c.length;
      c = c.sort(b);
      a = a.sort(b);
      while (d--) if (c[d] !== a[d]) return !1;
      return !0;
    };
    e.exports = g;
  },
  null,
);
__d(
  "getObjectValues",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      var b = [];
      for (var c in a) b.push(a[c]);
      return b;
    }
    e.exports = a;
  },
  null,
);
__d(
  "PlatformBaseVersioning",
  ["invariant", "PlatformVersions", "StrSet", "getObjectValues"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = new (b("StrSet"))(
      b("getObjectValues")(b("PlatformVersions").versions),
    );
    c = location.pathname;
    d = c.substring(1, c.indexOf("/", 1));
    var i = h.contains(d) ? d : b("PlatformVersions").versions.UNVERSIONED;
    function j(a, c) {
      if (c == b("PlatformVersions").versions.UNVERSIONED) return a;
      h.contains(c) || g(0);
      a.indexOf("/") !== 0 && (a = "/" + a);
      return "/" + c + a;
    }
    function a(a) {
      return h.contains(a.substring(1, a.indexOf("/", 1)))
        ? a.substring(a.indexOf("/", 1))
        : a;
    }
    f = {
      addVersionToPath: j,
      getLatestVersion: function () {
        return b("PlatformVersions").LATEST;
      },
      versionAwareURI: function (a) {
        return a.setPath(j(a.getPath(), i));
      },
      versionAwarePath: function (a) {
        return j(a, i);
      },
      getUnversionedPath: a,
    };
    e.exports = f;
  },
  null,
);
__d(
  "PlatformWidgetEndpoint",
  ["PlatformBaseVersioning"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c) {
      return b("PlatformBaseVersioning").versionAwarePath(
        "/dialog/" + a + (c ? "/" + c : ""),
      );
    }
    function c(a, c) {
      return b("PlatformBaseVersioning").versionAwarePath(
        "/plugins/" + a + (c ? "/" + c : ""),
      );
    }
    function d(a) {
      return /^\/plugins\//.test(
        b("PlatformBaseVersioning").getUnversionedPath(a),
      );
    }
    function f(a) {
      return /^\/dialog\//.test(
        b("PlatformBaseVersioning").getUnversionedPath(a),
      );
    }
    a = { dialog: a, plugins: c, isPluginEndpoint: d, isDialogEndpoint: f };
    e.exports = a;
  },
  null,
);
__d(
  "ArbiterFrame",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      inform: function (a, b, c) {
        var d = parent.frames,
          e = d.length,
          f;
        b.crossFrame = !0;
        for (var g = 0; g < e; g++) {
          f = d[g];
          try {
            if (!f || f == window) continue;
            f.require
              ? f.require("Arbiter").inform(a, b, c)
              : f.ServerJSAsyncLoader && f.ServerJSAsyncLoader.wakeUp(a, b, c);
          } catch (a) {}
        }
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "Plugin",
  ["Arbiter", "ArbiterFrame"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      CONNECT: "platform/plugins/connect",
      DISCONNECT: "platform/plugins/disconnect",
      ERROR: "platform/plugins/error",
      RELOAD: "platform/plugins/reload",
      DIALOG: "platform/plugins/dialog",
      connect: function (a, c) {
        a = { identifier: a, href: a, story_fbid: c };
        b("Arbiter").inform(g.CONNECT, a);
        b("ArbiterFrame").inform(g.CONNECT, a);
      },
      disconnect: function (a, c) {
        a = { identifier: a, href: a, story_fbid: c };
        b("Arbiter").inform(g.DISCONNECT, a);
        b("ArbiterFrame").inform(g.DISCONNECT, a);
      },
      error: function (a, c) {
        b("Arbiter").inform(g.ERROR, { action: a, content: c });
      },
      reload: function (a) {
        b("Arbiter").inform(g.RELOAD, { reloadUrl: a || "" }),
          b("ArbiterFrame").inform(g.RELOAD, { reloadUrl: a || "" });
      },
      reloadOtherPlugins: function (a, c) {
        b("ArbiterFrame").inform(g.RELOAD, {
          reloadUrl: "",
          reload: a || "",
          identifier: c || "",
        });
      },
    };
    e.exports = g;
  },
  null,
);
__d(
  "Banzai",
  ["BanzaiRefactored"],
  function (a, b, c, d, e, f) {
    e.exports = b("BanzaiRefactored").module;
  },
  18,
);
__d(
  "GeneratedLoggerUtils",
  ["invariant", "Banzai"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    a = b("Banzai").post;
    window.location.search.indexOf("showlog") > -1 &&
      (a = function (a, c, d) {
        b("Banzai").post(a, c, d), !1;
      });
    c = {
      log: a,
      serializeVector: function (a) {
        __p && __p();
        if (!a) return a;
        if (Array.isArray(a)) return a;
        if (a.toArray) {
          var b = a;
          return b.toArray();
        }
        if (
          typeof a === "object" &&
          a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]
        )
          return Array.from(a);
        g(0);
      },
      serializeMap: function (a) {
        __p && __p();
        if (!a) return a;
        if (a.toJS) {
          var b = a;
          return b.toJS();
        }
        if (
          typeof a === "object" &&
          a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]
        ) {
          b = a;
          var c = {};
          for (
            var b = b,
              d = Array.isArray(b),
              e = 0,
              b = d
                ? b
                : b[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var f;
            if (d) {
              if (e >= b.length) break;
              f = b[e++];
            } else {
              e = b.next();
              if (e.done) break;
              f = e.value;
            }
            f = f;
            c[f[0]] = f[1];
          }
          return c;
        }
        if (Object.prototype.toString.call(a) === "[object Object]") return a;
        g(0);
      },
      checkExtraDataFieldNames: function (a, b) {
        Object.keys(a).forEach(function (a) {
          Object.prototype.hasOwnProperty.call(b, a) && g(0);
        });
      },
      warnForInvalidFieldNames: function (a, b, c, d) {},
      throwIfNull: function (a, b) {
        a || g(0);
        return a;
      },
    };
    e.exports = c;
  },
  null,
);
__d(
  "PluginLoginButtonEventsTypedLogger",
  ["Banzai", "GeneratedLoggerUtils", "nullthrows"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    function a() {
      this.clear();
    }
    a.prototype.log = function () {
      b("GeneratedLoggerUtils").log(
        "logger:PluginLoginButtonEventsLoggerConfig",
        this.$1,
        b("Banzai").BASIC,
      );
    };
    a.prototype.logVital = function () {
      b("GeneratedLoggerUtils").log(
        "logger:PluginLoginButtonEventsLoggerConfig",
        this.$1,
        b("Banzai").VITAL,
      );
    };
    a.prototype.logImmediately = function () {
      b("GeneratedLoggerUtils").log(
        "logger:PluginLoginButtonEventsLoggerConfig",
        this.$1,
        { signal: !0 },
      );
    };
    a.prototype.clear = function () {
      this.$1 = {};
      return this;
    };
    a.prototype.getData = function () {
      return babelHelpers["extends"]({}, this.$1);
    };
    a.prototype.updateData = function (a) {
      this.$1 = babelHelpers["extends"]({}, this.$1, a);
      return this;
    };
    a.prototype.setAppID = function (a) {
      this.$1.app_id = a;
      return this;
    };
    a.prototype.setAutoLogoutLink = function (a) {
      this.$1.auto_logout_link = a;
      return this;
    };
    a.prototype.setButtonType = function (a) {
      this.$1.button_type = a;
      return this;
    };
    a.prototype.setEvent = function (a) {
      this.$1.event = a;
      return this;
    };
    a.prototype.setIsLegacy = function (a) {
      this.$1.is_legacy = a;
      return this;
    };
    a.prototype.setIsTosed = function (a) {
      this.$1.is_tosed = a;
      return this;
    };
    a.prototype.setLoggerID = function (a) {
      this.$1.logger_id = a;
      return this;
    };
    a.prototype.setShowFaces = function (a) {
      this.$1.show_faces = a;
      return this;
    };
    a.prototype.setSize = function (a) {
      this.$1.size = a;
      return this;
    };
    a.prototype.setUseContinueAs = function (a) {
      this.$1.use_continue_as = a;
      return this;
    };
    a.prototype.setVC = function (a) {
      this.$1.vc = a;
      return this;
    };
    a.prototype.setWidth = function (a) {
      this.$1.width = a;
      return this;
    };
    c = {
      app_id: !0,
      auto_logout_link: !0,
      button_type: !0,
      event: !0,
      is_legacy: !0,
      is_tosed: !0,
      logger_id: !0,
      show_faces: !0,
      size: !0,
      use_continue_as: !0,
      vc: !0,
      width: !0,
    };
    e.exports = a;
  },
  null,
);
__d(
  "Log",
  ["sprintf"],
  function (a, b, c, d, e, f) {
    c = { DEBUG: 3, INFO: 2, WARNING: 1, ERROR: 0 };
    function a(a, c) {
      var d = Array.prototype.slice.call(arguments, 2),
        e = b("sprintf").apply(null, d),
        f = window.console;
      f && g.level >= c && f[a in f ? a : "log"](e);
    }
    var g = {
      level: -1,
      Level: c,
      debug: a.bind(null, "debug", c.DEBUG),
      info: a.bind(null, "info", c.INFO),
      warn: a.bind(null, "warn", c.WARNING),
      error: a.bind(null, "error", c.ERROR),
    };
    e.exports = g;
  },
  null,
);
__d(
  "PlatformDialog",
  ["cx", "CSS", "DOMEvent", "DOMEventListener"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    a.getInstance = function () {
      "use strict";
      return h;
    };
    function a(a, c, d) {
      "use strict";
      (h = this),
        (this.$1 = a),
        (this.$2 = c),
        (this.$3 = !1),
        b("DOMEventListener").add(
          this.$1,
          "submit",
          function (c) {
            if (this.$3) {
              new (b("DOMEvent"))(c).kill();
              return;
            }
            this.$3 = !0;
            d && b("CSS").addClass(a, "_32qa");
          }.bind(this),
        );
    }
    a.prototype.getForm = function () {
      "use strict";
      return this.$1;
    };
    a.prototype.getDisplay = function () {
      "use strict";
      return this.$2;
    };
    a.prototype.hasBeenSubmitted = function () {
      "use strict";
      return this.$3;
    };
    a.RESPONSE = "platform/dialog/response";
    e.exports = a;
  },
  null,
);
__d(
  "flattenPHPQueryData",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a) {
      return h(a, "", {});
    }
    function h(a, b, c) {
      if (a === null || a === undefined) c[b] = undefined;
      else if (typeof a === "object") {
        typeof a.appendChild !== "function" || g(0);
        for (var d in a)
          d !== "$$typeof" &&
            Object.prototype.hasOwnProperty.call(a, d) &&
            a[d] !== undefined &&
            h(a[d], b ? b + "[" + d + "]" : d, c);
      } else c[b] = a;
      return c;
    }
    e.exports = a;
  },
  18,
);
__d(
  "PHPQuerySerializer",
  ["invariant", "flattenPHPQueryData"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a) {
      var c = [];
      a = b("flattenPHPQueryData")(a);
      for (var d in a)
        if (Object.prototype.hasOwnProperty.call(a, d)) {
          var e = h(d);
          a[d] === undefined ? c.push(e) : c.push(e + "=" + h(String(a[d])));
        }
      return c.join("&");
    }
    function h(a) {
      return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[");
    }
    var i = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;
    function j(a) {
      return a === "hasOwnProperty" || a === "__proto__" ? "\ud83d\udf56" : a;
    }
    function c(a) {
      __p && __p();
      if (!a) return {};
      var b = {};
      a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      a = a.split("&");
      var c = Object.prototype.hasOwnProperty;
      for (var d = 0, e = a.length; d < e; d++) {
        var f = a[d].match(i);
        if (!f) {
          var g = a[d].split("=");
          b[k(g[0])] = g[1] === undefined ? null : k(g[1]);
        } else {
          g = f[2].split(/\]\[|\[|\]/).slice(0, -1);
          var h = f[1];
          f = k(f[3] || "");
          g[0] = h;
          h = b;
          for (var l = 0; l < g.length - 1; l++) {
            var m = j(g[l]);
            if (m) {
              if (!c.call(h, m)) {
                var n = g[l + 1] && !g[l + 1].match(/^\d{1,3}$/) ? {} : [];
                h[m] = n;
                if (h[m] !== n) return b;
              }
              h = h[m];
            } else
              g[l + 1] && !g[l + 1].match(/^\d{1,3}$/)
                ? h.push({})
                : h.push([]),
                (h = h[h.length - 1]);
          }
          h instanceof Array && g[g.length - 1] === ""
            ? h.push(f)
            : (h[j(g[g.length - 1])] = f);
        }
      }
      return b;
    }
    function k(a) {
      try {
        return decodeURIComponent(a.replace(/\+/g, " "));
      } catch (b) {
        return a;
      }
    }
    d = {
      serialize: a,
      encodeComponent: h,
      deserialize: c,
      decodeComponent: k,
    };
    e.exports = d;
  },
  18,
);
__d(
  "ReloadPage",
  [],
  function (a, b, c, d, e, f) {
    b = {
      now: function (b) {
        a.window.location.reload(b);
      },
      delay: function (b) {
        a.setTimeout(this.now.bind(this), b);
      },
    };
    e.exports = b;
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
        if (a.trim() === "") return null;
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
  "URISchemes",
  ["createObjectFrom"],
  function (a, b, c, d, e, f) {
    var g = b("createObjectFrom")([
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
          : Object.prototype.hasOwnProperty.call(g, a.toLowerCase());
      },
    };
    e.exports = a;
  },
  18,
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
  ["invariant", "URIRFC3986", "URISchemes", "ex", "setHostSubdomain"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = new RegExp(
        "[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]",
      ),
      i = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");
    function j(a, c, d, e) {
      __p && __p();
      if (!c) return !0;
      if (c instanceof l) {
        a.setProtocol(c.getProtocol());
        a.setDomain(c.getDomain());
        a.setPort(c.getPort());
        a.setPath(c.getPath());
        a.setQueryData(e.deserialize(e.serialize(c.getQueryData())));
        a.setFragment(c.getFragment());
        a.setIsGeneric(c.getIsGeneric());
        a.setForceFragmentSeparator(c.getForceFragmentSeparator());
        return !0;
      }
      c = c.toString().trim();
      var f = b("URIRFC3986").parse(c) || { fragment: null, scheme: null };
      if (!d && !b("URISchemes").isAllowed(f.scheme)) return !1;
      a.setProtocol(f.scheme || "");
      if (!d && h.test(f.host || "")) return !1;
      a.setDomain(f.host || "");
      a.setPort(f.port || "");
      a.setPath(f.path || "");
      if (d) a.setQueryData(e.deserialize(f.query || "") || {});
      else
        try {
          a.setQueryData(e.deserialize(f.query || "") || {});
        } catch (a) {
          return !1;
        }
      a.setFragment(f.fragment || "");
      f.fragment === "" && a.setForceFragmentSeparator(!0);
      a.setIsGeneric(f.isGenericURI || !1);
      if (f.userinfo !== null)
        if (d)
          throw new Error(
            b("ex")(
              "URI.parse: invalid URI (userinfo is not allowed in a URI): %s",
              a.toString(),
            ),
          );
        else return !1;
      if (!a.getDomain() && a.getPath().indexOf("\\") !== -1)
        if (d)
          throw new Error(
            b("ex")(
              "URI.parse: invalid URI (no domain but multiple back-slashes): %s",
              a.toString(),
            ),
          );
        else return !1;
      if (!a.getProtocol() && i.test(c))
        if (d)
          throw new Error(
            b("ex")(
              "URI.parse: invalid URI (unsafe protocol-relative URLs): %s",
              a.toString(),
            ),
          );
        else return !1;
      if (a.getDomain() && a.getPath() && !a.getPath().startsWith("/"))
        if (d)
          throw new Error(
            b("ex")(
              "URI.parse: invalid URI (domain and path where path lacks leading slash): %s",
              a.toString(),
            ),
          );
        else return !1;
      return !0;
    }
    var k = [];
    l.tryParse = function (a, b) {
      "use strict";
      var c = new l(null, b);
      return j(c, a, !1, b) ? c : null;
    };
    l.isValid = function (a, b) {
      "use strict";
      return !!l.tryParse(a, b);
    };
    function l(a, b) {
      "use strict";
      b || g(0),
        (this.$9 = b),
        (this.$7 = ""),
        (this.$1 = ""),
        (this.$6 = ""),
        (this.$5 = ""),
        (this.$3 = ""),
        (this.$4 = !1),
        (this.$8 = {}),
        (this.$2 = !1),
        j(this, a, !0, b);
    }
    l.prototype.setProtocol = function (a) {
      "use strict";
      b("URISchemes").isAllowed(a) || g(0);
      this.$7 = a;
      return this;
    };
    l.prototype.getProtocol = function () {
      "use strict";
      return (this.$7 || "").toLowerCase();
    };
    l.prototype.setSecure = function (a) {
      "use strict";
      return this.setProtocol(a ? "https" : "http");
    };
    l.prototype.isSecure = function () {
      "use strict";
      return this.getProtocol() === "https";
    };
    l.prototype.setDomain = function (a) {
      "use strict";
      if (h.test(a))
        throw new Error(
          b("ex")(
            "URI.setDomain: unsafe domain specified: %s for url %s",
            a,
            this.toString(),
          ),
        );
      this.$1 = a;
      return this;
    };
    l.prototype.getDomain = function () {
      "use strict";
      return this.$1;
    };
    l.prototype.setPort = function (a) {
      "use strict";
      this.$6 = a;
      return this;
    };
    l.prototype.getPort = function () {
      "use strict";
      return this.$6;
    };
    l.prototype.setPath = function (a) {
      "use strict";
      this.$5 = a;
      return this;
    };
    l.prototype.getPath = function () {
      "use strict";
      return this.$5;
    };
    l.prototype.addQueryData = function (a, b) {
      "use strict";
      Object.prototype.toString.call(a) === "[object Object]"
        ? Object.assign(this.$8, a)
        : (this.$8[a] = b);
      return this;
    };
    l.prototype.setQueryData = function (a) {
      "use strict";
      this.$8 = a;
      return this;
    };
    l.prototype.getQueryData = function () {
      "use strict";
      return this.$8;
    };
    l.prototype.removeQueryData = function (a) {
      "use strict";
      Array.isArray(a) || (a = [a]);
      for (var b = 0, c = a.length; b < c; ++b) delete this.$8[a[b]];
      return this;
    };
    l.prototype.setFragment = function (a) {
      "use strict";
      this.$3 = a;
      this.setForceFragmentSeparator(!1);
      return this;
    };
    l.prototype.getFragment = function () {
      "use strict";
      return this.$3;
    };
    l.prototype.setForceFragmentSeparator = function (a) {
      "use strict";
      this.$2 = a;
      return this;
    };
    l.prototype.getForceFragmentSeparator = function () {
      "use strict";
      return this.$2;
    };
    l.prototype.setIsGeneric = function (a) {
      "use strict";
      this.$4 = a;
      return this;
    };
    l.prototype.getIsGeneric = function () {
      "use strict";
      return this.$4;
    };
    l.prototype.isEmpty = function () {
      "use strict";
      return !(
        this.getPath() ||
        this.getProtocol() ||
        this.getDomain() ||
        this.getPort() ||
        Object.keys(this.getQueryData()).length > 0 ||
        this.getFragment()
      );
    };
    l.prototype.toString = function () {
      "use strict";
      var a = this;
      for (var b = 0; b < k.length; b++) a = k[b](a);
      return a.$10();
    };
    l.prototype.$10 = function () {
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
      b ? (a += "#" + b) : this.getForceFragmentSeparator() && (a += "#");
      return a;
    };
    l.registerFilter = function (a) {
      "use strict";
      k.push(a);
    };
    l.prototype.getOrigin = function () {
      "use strict";
      var a = this.getPort();
      return this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "");
    };
    l.prototype.getQualifiedURIBase = function () {
      "use strict";
      return new l(this, this.$9).qualify();
    };
    l.prototype.qualify = function () {
      "use strict";
      if (!this.getDomain()) {
        var a = new l(window.location.href, this.$9);
        this.setProtocol(a.getProtocol())
          .setDomain(a.getDomain())
          .setPort(a.getPort());
      }
      return this;
    };
    l.prototype.setSubdomain = function (a) {
      "use strict";
      var c = this.qualify().getDomain();
      return this.setDomain(b("setHostSubdomain")(c, a));
    };
    l.prototype.getSubdomain = function () {
      "use strict";
      if (!this.getDomain()) return "";
      var a = this.getDomain().split(".");
      if (a.length <= 2) return "";
      else return a[0];
    };
    e.exports = l;
  },
  null,
);
__d(
  "areSameOrigin",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      if (a.isEmpty() || b.isEmpty()) return !1;
      if (a.getProtocol() && a.getProtocol() != b.getProtocol()) return !1;
      if (a.getDomain() && a.getDomain() != b.getDomain()) return !1;
      return a.getPort() && a.getPort().toString() !== b.getPort().toString()
        ? !1
        : !0;
    }
    e.exports = a;
  },
  null,
);
__d(
  "isFacebookURI",
  [],
  function (a, b, c, d, e, f) {
    var g = null,
      h = ["http", "https"];
    function a(a) {
      g || (g = new RegExp("(^|\\.)facebook\\.com$", "i"));
      if (a.isEmpty() && a.toString() !== "#") return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !0
        : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
    }
    a.setRegex = function (a) {
      g = a;
    };
    e.exports = a;
  },
  null,
);
__d(
  "memoize",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b = a,
        c;
      return function () {
        arguments.length && g(0);
        b && ((c = b()), (b = null));
        return c;
      };
    }
    e.exports = a;
  },
  null,
);
__d(
  "unqualifyURI",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      a.setProtocol(null).setDomain(null).setPort(null);
    }
    e.exports = a;
  },
  null,
);
__d(
  "URI",
  [
    "PHPQuerySerializer",
    "ReloadPage",
    "URIBase",
    "areSameOrigin",
    "ifRequired",
    "isFacebookURI",
    "memoize",
    "unqualifyURI",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = b("memoize")(function () {
        return new k(window.location.href);
      });
    function i() {
      return b("ifRequired")("PageTransitions", function (a) {
        if (a.isInitialized()) return a;
      });
    }
    function j(c, d, e, f) {
      c = new k(c);
      var g = c.toString();
      c = d ? d : window;
      b("ifRequired")("PageNavigationStageLogger", function (b) {
        e ? b.setNote("force") : a.PageTransitions || b.setNote("no_pagetrans"),
          b.setCookieForNavigation(g);
      });
      !e && a.PageTransitions
        ? a.PageTransitions.go(g, f)
        : window.location.href === g
        ? b("ReloadPage").now()
        : f
        ? c.location.replace(g)
        : (c.location.href = g);
    }
    c = babelHelpers.inherits(k, b("URIBase"));
    g = c && c.prototype;
    function k(a) {
      "use strict";
      g.constructor.call(this, a || "", b("PHPQuerySerializer"));
    }
    k.prototype.setPath = function (a) {
      "use strict";
      this.path = a;
      return g.setPath.call(this, a);
    };
    k.prototype.getPath = function () {
      "use strict";
      var a = g.getPath.call(this);
      return a ? a.replace(/^\/+/, "/") : a;
    };
    k.prototype.setProtocol = function (a) {
      "use strict";
      this.protocol = a;
      return g.setProtocol.call(this, a);
    };
    k.prototype.setDomain = function (a) {
      "use strict";
      this.domain = a;
      return g.setDomain.call(this, a);
    };
    k.prototype.setPort = function (a) {
      "use strict";
      this.port = a;
      return g.setPort.call(this, a);
    };
    k.prototype.setFragment = function (a) {
      "use strict";
      this.fragment = a;
      return g.setFragment.call(this, a);
    };
    k.prototype.stripTrailingSlash = function () {
      "use strict";
      this.setPath(this.getPath().replace(/\/$/, ""));
      return this;
    };
    k.prototype.valueOf = function () {
      "use strict";
      return this.toString();
    };
    k.prototype.isSubdomainOfDomain = function (a) {
      "use strict";
      __p && __p();
      var b = this.getDomain();
      if (a === "" || b === "") return !1;
      if (b.endsWith(a)) {
        var c = b.length,
          d = a.length,
          e = c - d - 1;
        if (c === d || b[e] === ".") return k.isValidURI(a);
      }
      return !1;
    };
    k.prototype.getRegisteredDomain = function () {
      "use strict";
      if (!this.getDomain()) return "";
      if (!b("isFacebookURI")(this)) return null;
      var a = this.getDomain().split("."),
        c = a.indexOf("facebook");
      c === -1 && (c = a.indexOf("workplace"));
      return a.slice(c).join(".");
    };
    k.prototype.getUnqualifiedURI = function () {
      "use strict";
      var a = new k(this);
      b("unqualifyURI")(a);
      return a;
    };
    k.prototype.getQualifiedURI = function () {
      "use strict";
      return new k(this).qualify();
    };
    k.prototype.isSameOrigin = function (a) {
      "use strict";
      a = a;
      !a ? (a = h()) : a instanceof k || (a = new k(a.toString()));
      return b("areSameOrigin")(this, a);
    };
    k.go = function (a, b, c) {
      "use strict";
      j(a, window, b, c);
    };
    k.prototype.go = function (a, b) {
      "use strict";
      k.go(this, a, b);
    };
    k.tryParseURI = function (a) {
      "use strict";
      a = b("URIBase").tryParse(a, b("PHPQuerySerializer"));
      return a ? new k(a) : null;
    };
    k.isValidURI = function (a) {
      "use strict";
      return b("URIBase").isValid(a, b("PHPQuerySerializer"));
    };
    k.getRequestURI = function (a, b) {
      "use strict";
      a = a === undefined || a;
      if (a) {
        a = i();
        if (a) return a.getCurrentURI(!!b).getQualifiedURI();
      }
      return new k(window.location.href);
    };
    k.getMostRecentURI = function () {
      "use strict";
      var a = i();
      return a
        ? a.getMostRecentURI().getQualifiedURI()
        : new k(window.location.href);
    };
    k.getNextURI = function () {
      "use strict";
      var a = i();
      return a ? a.getNextURI().getQualifiedURI() : new k(window.location.href);
    };
    k.encodeComponent = function (a) {
      "use strict";
      return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[");
    };
    k.decodeComponent = function (a) {
      "use strict";
      return decodeURIComponent(a.replace(/\+/g, " "));
    };
    Object.assign(k, {
      expression:
        /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/,
      arrayQueryExpression: /^(\w+)((?:\[\w*\])+)=?(.*)/,
    });
    e.exports = k;
  },
  null,
);
__d(
  "PluginReturn",
  [
    "invariant",
    "Arbiter",
    "Log",
    "PlatformDialog",
    "PlatformWidgetEndpoint",
    "Plugin",
    "URI",
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    b("Arbiter").subscribe(b("PlatformDialog").RESPONSE, function (event, a) {
      if (a.error_code) {
        b("Log").debug(
          "Plugin Return Error (%s): %s",
          a.error_code,
          a.error_message || a.error_description,
        );
        return;
      }
      b("Plugin").reload(a.plugin_reload);
    });
    var h = {
      auto: function () {
        b("Arbiter").subscribe(b("Plugin").RELOAD, function (event, a) {
          a = typeof a === "object" ? a.reloadUrl : a;
          h.reload(a);
        });
      },
      syncPlugins: function () {
        b("Arbiter").subscribe(b("Plugin").RELOAD, function (event, a) {
          a.crossFrame && h.reload(a.reloadUrl, a.reload, a.identifier);
        });
      },
      reload: function (a, c, d) {
        d = b("URI")
          .getRequestURI()
          .removeQueryData("ret")
          .removeQueryData("act")
          .removeQueryData("hash")
          .addQueryData("reload", c)
          .addQueryData("id", d);
        if (a) {
          var c = new (b("URI"))(a);
          b("PlatformWidgetEndpoint").isPluginEndpoint(c.getPath()) || g(0);
          d.setPath(c.getPath()).addQueryData(c.getQueryData());
        }
        window.location.replace(d.toString());
      },
    };
    e.exports = h;
  },
  null,
);
__d(
  "isEmpty",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    function a(a) {
      __p && __p();
      if (Array.isArray(a)) return a.length === 0;
      else if (typeof a === "object") {
        if (a) {
          !h(a) || a.size === undefined || g(0);
          for (var b in a) return !1;
        }
        return !0;
      } else return !a;
    }
    function h(a) {
      return typeof Symbol === "undefined"
        ? !1
        : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"];
    }
    e.exports = a;
  },
  null,
);
__d(
  "DataStore",
  ["DataStoreConfig", "isEmpty"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b("DataStoreConfig").useExpando,
      h = {},
      i = 1;
    function j(a) {
      if (typeof a === "string") return "str_" + a;
      else return "elem_" + (a.__FB_TOKEN || (a.__FB_TOKEN = [i++]))[0];
    }
    function k(a) {
      if (g && typeof a === "object")
        return a.__FB_STORE || (a.__FB_STORE = {});
      a = j(a);
      return h[a] || (h[a] = {});
    }
    var l = {
      set: function (a, b, c) {
        if (!a)
          throw new TypeError(
            "DataStore.set: namespace is required, got " + typeof a,
          );
        var d = k(a);
        d[b] = c;
        return a;
      },
      get: function (a, b, c) {
        __p && __p();
        if (!a)
          throw new TypeError(
            "DataStore.get: namespace is required, got " + typeof a,
          );
        var d = k(a),
          e = d[b];
        if (typeof e === "undefined" && a.getAttribute)
          if (a.hasAttribute && !a.hasAttribute("data-" + b)) e = undefined;
          else {
            a = a.getAttribute("data-" + b);
            e = null === a ? undefined : a;
          }
        c !== undefined && e === undefined && (e = d[b] = c);
        return e;
      },
      remove: function (a, c) {
        if (!a)
          throw new TypeError(
            "DataStore.remove: namespace is required, got " + typeof a,
          );
        var d = k(a),
          e = d[c];
        delete d[c];
        b("isEmpty")(d) && l.purge(a);
        return e;
      },
      purge: function (a) {
        g && typeof a === "object" ? delete a.__FB_STORE : delete h[j(a)];
      },
      _storage: h,
    };
    e.exports = l;
  },
  18,
);
__d(
  "getMarkupWrap",
  ["invariant", "ExecutionEnvironment"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = b("ExecutionEnvironment").canUseDOM
        ? document.createElement("div")
        : null,
      i = {};
    c = [1, '<select multiple="true">', "</select>"];
    d = [1, "<table>", "</table>"];
    f = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
    var j = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
      k = {
        "*": [1, "?<div>", "</div>"],
        area: [1, "<map>", "</map>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        param: [1, "<object>", "</object>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        optgroup: c,
        option: c,
        caption: d,
        colgroup: d,
        tbody: d,
        tfoot: d,
        thead: d,
        td: f,
        th: f,
      };
    b = [
      "circle",
      "clipPath",
      "defs",
      "ellipse",
      "g",
      "image",
      "line",
      "linearGradient",
      "mask",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "text",
      "tspan",
    ];
    b.forEach(function (a) {
      (k[a] = j), (i[a] = !0);
    });
    function a(a) {
      !h && g(0);
      Object.prototype.hasOwnProperty.call(k, a) || (a = "*");
      Object.prototype.hasOwnProperty.call(i, a) ||
        (a === "*"
          ? (h.innerHTML = "<link />")
          : (h.innerHTML = "<" + a + "></" + a + ">"),
        (i[a] = !h.firstChild));
      return i[a] ? k[a] : null;
    }
    e.exports = a;
  },
  null,
);
__d(
  "createNodesFromMarkup",
  ["invariant", "ExecutionEnvironment", "getMarkupWrap"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = b("ExecutionEnvironment").canUseDOM
        ? document.createElement("div")
        : null,
      i = /^\s*<(\w+)/;
    function j(a) {
      a = a.match(i);
      return a && a[1].toLowerCase();
    }
    function a(a, c) {
      __p && __p();
      var d = h;
      !h && g(0);
      var e = j(a);
      e = e && b("getMarkupWrap")(e);
      if (e) {
        d.innerHTML = e[1] + a + e[2];
        e = e[0];
        while (e--) d = d.lastChild;
      } else d.innerHTML = a;
      e = d.getElementsByTagName("script");
      e.length && (c || g(0), Array.from(e).forEach(c));
      a = Array.from(d.childNodes);
      while (d.lastChild) d.removeChild(d.lastChild);
      return a;
    }
    e.exports = a;
  },
  null,
);
__d(
  "evalGlobal",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      __p && __p();
      if (typeof a !== "string")
        throw new TypeError(
          "JS sent to evalGlobal is not a string. Only strings are permitted.",
        );
      if (!a) return;
      var b = document.createElement("script");
      try {
        b.appendChild(document.createTextNode(a));
      } catch (c) {
        b.text = a;
      }
      a = document.getElementsByTagName("head")[0] || document.documentElement;
      a.appendChild(b);
      a.removeChild(b);
    }
    e.exports = a;
  },
  null,
);
__d(
  "HTML",
  [
    "invariant",
    "Bootloader",
    "createNodesFromMarkup",
    "emptyFunction",
    "evalGlobal",
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = /(<(\w+)[^>]*?)\/>/g,
      i = {
        abbr: !0,
        area: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
      };
    function j(a) {
      "use strict";
      __p && __p();
      a && typeof a.__html === "string" && (!1, (a = a.__html));
      if (!(this instanceof j)) return a instanceof j ? a : new j(a);
      if (a) {
        var c = typeof a;
        c === "string" || g(0);
      }
      this._markup = a || "";
      this._defer = !1;
      this._nodes = null;
      this._inlineJS = b("emptyFunction");
      this._rootNode = null;
    }
    j.prototype.toString = function () {
      "use strict";
      return this._markup;
    };
    j.prototype.getContent = function () {
      "use strict";
      return this._markup;
    };
    j.prototype.getNodes = function () {
      "use strict";
      this._fillCache();
      return this._nodes;
    };
    j.prototype.getRootNode = function () {
      "use strict";
      __p && __p();
      this._rootNode && g(0);
      var a = this.getNodes();
      if (a.length === 1) this._rootNode = a[0];
      else {
        var b = document.createDocumentFragment();
        for (var c = 0; c < a.length; c++) b.appendChild(a[c]);
        this._rootNode = b;
      }
      return this._rootNode;
    };
    j.prototype.getAction = function () {
      "use strict";
      this._fillCache();
      var a = function () {
        this._inlineJS();
      }.bind(this);
      return this._defer
        ? function () {
            setTimeout(a, 0);
          }
        : a;
    };
    j.prototype._fillCache = function () {
      "use strict";
      __p && __p();
      if (this._nodes !== null) return;
      if (!this._markup) {
        this._nodes = [];
        return;
      }
      var a = this._markup.replace(h, function (a, b, c) {
          return i[c.toLowerCase()] ? a : b + "></" + c + ">";
        }),
        c = null;
      a = b("createNodesFromMarkup")(a, function (a) {
        (c = c || []),
          c.push(
            a.src
              ? b(
                  "Bootloader",
                ).requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(
                  b("Bootloader"),
                  a.src,
                )
              : b("evalGlobal").bind(null, a.innerHTML),
          ),
          a.parentNode.removeChild(a);
      });
      c &&
        (this._inlineJS = function () {
          for (var a = 0; a < c.length; a++) c[a]();
        });
      this._nodes = a;
    };
    j.prototype.setDeferred = function (a) {
      "use strict";
      this._defer = !!a;
      return this;
    };
    j.isHTML = function (a) {
      "use strict";
      return !!a && (a instanceof j || a.__html !== undefined);
    };
    j.replaceJSONWrapper = function (a) {
      "use strict";
      return a && a.__html !== undefined ? new j(a.__html) : a;
    };
    e.exports = j;
  },
  null,
);
__d(
  "CSRFGuard",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "for (;;);";
    var g = /^for ?\(;;\);/;
    b = {
      length: a.length,
      regex: g,
      exists: function (a) {
        return !!a.match(g);
      },
      clean: function (a) {
        var b = a.match(g);
        return b ? a.substr(b[0].length) : b;
      },
    };
    e.exports = b;
  },
  null,
);
__d(
  "ResourceTypes",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { JS: "js", CSS: "css", XHR: "xhr" };
    e.exports = a;
  },
  18,
);
__d(
  "TimingAnnotations",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    a.prototype.addStringAnnotation = function (a, b) {
      "use strict";
      return this;
    };
    a.prototype.addSetAnnotation = function (a, b) {
      "use strict";
      return this;
    };
    a.prototype.addSetElement = function (a, b) {
      "use strict";
      return this;
    };
    a.prototype.registerOnBeforeSend = function (a) {
      "use strict";
      return this;
    };
    a.prototype.addVectorAnnotation = function (a, b) {
      "use strict";
      return this;
    };
    a.prototype.addVectorElement = function (a, b) {
      "use strict";
      return this;
    };
    function a() {
      "use strict";
    }
    function b() {
      "use strict";
      (this.$1 = null), (this.$2 = null), (this.$3 = null), (this.$4 = []);
    }
    b.prototype.addStringAnnotation = function (a, b) {
      "use strict";
      this.$2 = this.$2 || new Map();
      this.$2.set(a, b);
      return this;
    };
    b.prototype.addSetAnnotation = function (a, b) {
      "use strict";
      var c = this.$1 || new Map(),
        d = c.get(a) || new Set();
      b.forEach(function (a) {
        return d.add(a);
      });
      c.set(a, d);
      this.$1 = c;
      return this;
    };
    b.prototype.addSetElement = function (a, b) {
      "use strict";
      var c = this.$1 || new Map(),
        d = c.get(a) || new Set();
      d.add(b);
      c.set(a, d);
      this.$1 = c;
      return this;
    };
    b.prototype.addVectorAnnotation = function (a, b) {
      "use strict";
      this.$3 = this.$3 || new Map();
      this.$3.set(a, b);
      return this;
    };
    b.prototype.addVectorElement = function (a, b) {
      "use strict";
      var c = (this.$3 = this.$3 || new Map()),
        d = this.$3.get(a) || [];
      d.push(b);
      c.set(a, d);
      return this;
    };
    b.prototype.registerOnBeforeSend = function (a) {
      "use strict";
      this.$4.push(a);
      return this;
    };
    b.prototype.prepareToSend = function () {
      "use strict";
      __p && __p();
      this.$4.forEach(
        function (a) {
          return a(this);
        }.bind(this),
      );
      this.$4 = [];
      var a = {};
      if (this.$1 != null)
        for (
          var b = this.$1,
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          var f = e[0];
          e = e[1];
          a[f] = Array.from(e.values());
        }
      f = {};
      if (this.$2 != null)
        for (
          var e = this.$2,
            d = Array.isArray(e),
            c = 0,
            e = d
              ? e
              : e[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          if (d) {
            if (c >= e.length) break;
            b = e[c++];
          } else {
            c = e.next();
            if (c.done) break;
            b = c.value;
          }
          b = b;
          var g = b[0];
          b = b[1];
          f[g] = b;
        }
      g = {};
      if (this.$3 != null)
        for (
          var b = this.$3,
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          var h = e[0];
          e = e[1];
          g[h] = e;
        }
      return { setProps: a, stringProps: f, vectorProps: g };
    };
    b.combine = function (a, b) {
      "use strict";
      var c;
      a != null && b != null
        ? ((a.stringProps = babelHelpers["extends"](
            {},
            b.stringProps,
            a.stringProps,
          )),
          (a.setProps = babelHelpers["extends"]({}, b.setProps, a.setProps)),
          (c = a))
        : a != null
        ? (c = a)
        : b != null && (c = b);
      return c;
    };
    b.EmptyTimingAnnotations = a;
    b.EmptyTraceTimingAnnotations = a;
    b.TraceTimingAnnotations = b;
    e.exports = b;
  },
  18,
);
__d(
  "ResourceTimingsStore",
  [
    "CircularBuffer",
    "ResourceTypes",
    "TimingAnnotations",
    "URI",
    "performanceAbsoluteNow",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 1e3,
      h = new (b("TimingAnnotations").EmptyTimingAnnotations)(),
      i = {},
      j = {};
    Object.keys(b("ResourceTypes")).forEach(function (a) {
      a = b("ResourceTypes")[a];
      var c = new (b("CircularBuffer"))(g),
        d = new Map();
      c.onEvict(function (a) {
        return d["delete"](a);
      });
      i[a] = { idx: 1, entries: c };
      j[a] = d;
    });
    function k(a, c, d) {
      __p && __p();
      var e;
      switch (a) {
        case "css":
        case "js":
          var f = l.parseMakeHasteURL(c);
          f = f == null ? "unknown_resource" : f[0];
          e = d + "_" + f;
          break;
        case "xhr":
          f = new (b("URI"))(c).getQualifiedURI();
          c = f.getDomain() + f.getPath();
          e = d + "_" + c;
          break;
        default:
          a, (e = "never here");
      }
      return e;
    }
    var l = {
      getUID: function (a, b) {
        var c = i[a],
          d = k(a, b, c.idx);
        c.entries.write(d);
        j[a].set(d, { uri: b, uid: d });
        c.idx++;
        return d;
      },
      updateURI: function (a, b, c) {
        a = j[a].get(b);
        a != null && (a.uri = c);
      },
      getMapFor: function (a) {
        return j[a];
      },
      parseMakeHasteURL: function (a) {
        a = a.match(/\/rsrc\.php\/.*\/([^\?]+)/);
        if (!a) return null;
        a = a[1];
        var b = "",
          c = a.match(/\.(\w+)$/);
        c && (b = c[1]);
        return [a, b];
      },
      measureRequestSent: function (a, c) {
        a = j[a];
        a = a.get(c);
        if (a == null || a.requestSent != null) return;
        else a.requestSent = b("performanceAbsoluteNow")();
      },
      measureResponseReceived: function (a, c) {
        a = j[a];
        a = a.get(c);
        if (a == null || a.requestSent == null || a.responseReceived != null)
          return;
        else a.responseReceived = b("performanceAbsoluteNow")();
      },
      annotate: function (a, c) {
        __p && __p();
        a = j[a];
        a = a.get(c);
        if (!a) return h;
        else {
          c = a.annotations;
          if (c != null) return c;
          else {
            c = new (b("TimingAnnotations"))();
            a.annotations = c;
            return c;
          }
        }
      },
      getAnnotationsFor: function (a, b) {
        a = j[a];
        a = a.get(b);
        if (!a) return null;
        else {
          b = a.annotations;
          return b != null ? b.prepareToSend() : null;
        }
      },
    };
    e.exports = l;
  },
  18,
);
__d(
  "clearInterval",
  ["TimerStorage", "TimeSlice"],
  function (a, b, c, d, e, f) {
    var g = a.clearTimeout.nativeBackup || a.clearTimeout;
    function c(a) {
      if (a != null) {
        b("TimerStorage").unset(b("TimerStorage").INTERVAL, a);
        var c = b("TimerStorage").TIMEOUT + String(a);
        b("TimeSlice").cancelWithToken(c);
      }
      g(a);
    }
    e.exports = c;
  },
  18,
);
__d(
  "CSSLoader",
  [
    "CSSLoaderConfig",
    "ResourceTimingsStore",
    "TimeSlice",
    "clearInterval",
    "ifRequired",
    "isEmpty",
    "setIntervalAcrossTransitions",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 20,
      h = b("CSSLoaderConfig").timeout,
      i = b("CSSLoaderConfig").loadEventSupported,
      j,
      k = {},
      l = [],
      m,
      n = {};
    function o(a) {
      if (j) return;
      j = !0;
      var b = document.createElement("link");
      b.onload = function () {
        (i = !0), b.parentNode.removeChild(b);
      };
      b.rel = "stylesheet";
      b.href = "data:text/css;base64,";
      a.appendChild(b);
    }
    function p() {
      __p && __p();
      var a,
        c = [],
        d = [];
      if (Date.now() >= m) {
        for (a in n) d.push(n[a].signal), c.push(n[a].error);
        n = {};
      } else
        for (a in n) {
          var e = n[a].signal,
            f = window.getComputedStyle
              ? getComputedStyle(e, null)
              : e.currentStyle;
          f &&
            parseInt(f.height, 10) > 1 &&
            (c.push(n[a].load), d.push(e), delete n[a]);
        }
      for (var f = 0; f < d.length; f++) d[f].parentNode.removeChild(d[f]);
      if (!b("isEmpty")(c)) {
        for (f = 0; f < c.length; f++) c[f]();
        m = Date.now() + h;
      }
      return b("isEmpty")(n);
    }
    function q(a, c, d, e) {
      var f = document.createElement("meta");
      f.id = "bootloader_" + a.replace(/[^a-z0-9]/gi, "_");
      c.appendChild(f);
      c = !b("isEmpty")(n);
      m = Date.now() + h;
      n[a] = { signal: f, load: d, error: e };
      if (!c)
        var i = b("setIntervalAcrossTransitions")(function () {
          p() && b("clearInterval")(i);
        }, g);
    }
    a = {
      loadStyleSheet: function (a, c, d, e, f, g) {
        __p && __p();
        if (k[a])
          throw new Error(
            "CSS component " + a + " has already been requested.",
          );
        var h = b("ResourceTimingsStore").getUID("css", c);
        b("ifRequired")("TimeSliceAutoclosedInteraction", function (a) {
          return a.getInteractionsActiveRightNow().forEach(function (a) {
            return a
              .forResourceRequest(h)
              .addStringAnnotation("requested_in_continuation", "true");
          });
        });
        b("ResourceTimingsStore")
          .annotate("css", h)
          .addStringAnnotation("name", a)
          .addStringAnnotation("source", c)
          .addStringAnnotation("caller", "CSSLoader.loadStyleSheet");
        b("ifRequired")("TimeSliceInteraction", function (b) {
          b.informGlobally("CSSLoader.loadStyleSheet")
            .addStringAnnotation("source", c)
            .addStringAnnotation("name", a);
        });
        b("ResourceTimingsStore").measureRequestSent("css", h);
        var j = function () {
          b("ResourceTimingsStore").measureResponseReceived("css", h), f && f();
        };
        if (document.createStyleSheet) {
          var m;
          for (var n = 0; n < l.length; n++)
            if (l[n].imports.length < 31) {
              m = n;
              break;
            }
          if (m === undefined) {
            try {
              l.push(document.createStyleSheet());
            } catch (a) {
              g();
              return;
            }
            m = l.length - 1;
          }
          l[m].addImport(c);
          k[a] = { styleSheet: l[m], uri: c };
          q(a, d, j, g);
          return;
        }
        var p = document.createElement("link");
        p.rel = "stylesheet";
        p.type = "text/css";
        p.href = c;
        e && (p.crossOrigin = "anonymous");
        k[a] = { link: p };
        n = b("TimeSlice").getGuardedContinuation("CSSLoader link.onresponse");
        i
          ? ((p.onload = n.bind(undefined, function () {
              (p.onload = p.onerror = null), j();
            })),
            (p.onerror = n.bind(undefined, function () {
              (p.onload = p.onerror = null), g();
            })))
          : (q(a, d, j, g), i === undefined && o(d));
        d.appendChild(p);
      },
      registerLoadedStyleSheet: function (a, b) {
        if (k[a]) return !1;
        k[a] = { link: b };
        return !0;
      },
      unloadStyleSheet: function (a) {
        __p && __p();
        var b = k[a];
        if (b == null) return;
        var c = b.link;
        if (c) (c.onload = c.onerror = null), c.parentNode.removeChild(c);
        else {
          c = b.styleSheet;
          for (var d = 0; d < c.imports.length; d++)
            if (c.imports[d].href == b.uri) {
              c.removeImport(d);
              break;
            }
        }
        delete n[a];
        delete k[a];
      },
      moduleName: function (a) {
        return b("CSSLoaderConfig").modulePrefix + a;
      },
    };
    e.exports = a;
  },
  18,
);
__d(
  "EventEmitterWithValidation",
  ["BaseEventEmitter"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b("BaseEventEmitter"));
    g = c && c.prototype;
    function a(a) {
      g.constructor.call(this),
        (this.$EventEmitterWithValidation1 = Object.keys(a));
    }
    a.prototype.emit = function (a) {
      h(a, this.$EventEmitterWithValidation1);
      return g.emit.apply(this, arguments);
    };
    function h(a, b) {
      if (b.indexOf(a) === -1) throw new TypeError(i(a, b));
    }
    function i(a, b) {
      a = 'Unknown event type "' + a + '". ';
      a += "Known event types: " + b.join(", ") + ".";
      return a;
    }
    e.exports = a;
  },
  null,
);
__d(
  "mixInEventEmitter",
  [
    "invariant",
    "EventEmitterWithHolding",
    "EventEmitterWithValidation",
    "EventHolder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    function a(a, b) {
      b || g(0);
      var c = a.prototype || a;
      c.__eventEmitter && g(0);
      a = a.constructor;
      a && (a === Object || a === Function || g(0));
      c.__types = babelHelpers["extends"]({}, c.__types, b);
      Object.assign(c, h);
    }
    var h = {
      emit: function (a, b, c, d, e, f, g) {
        return this.__getEventEmitter().emit(a, b, c, d, e, f, g);
      },
      emitAndHold: function (a, b, c, d, e, f, g) {
        return this.__getEventEmitter().emitAndHold(a, b, c, d, e, f, g);
      },
      addListener: function (a, b, c) {
        return this.__getEventEmitter().addListener(a, b, c);
      },
      once: function (a, b, c) {
        return this.__getEventEmitter().once(a, b, c);
      },
      addRetroactiveListener: function (a, b, c) {
        return this.__getEventEmitter().addRetroactiveListener(a, b, c);
      },
      listeners: function (a) {
        return this.__getEventEmitter().listeners(a);
      },
      removeAllListeners: function () {
        this.__getEventEmitter().removeAllListeners();
      },
      removeCurrentListener: function () {
        this.__getEventEmitter().removeCurrentListener();
      },
      releaseHeldEventType: function (a) {
        this.__getEventEmitter().releaseHeldEventType(a);
      },
      __getEventEmitter: function () {
        if (!this.__eventEmitter) {
          var a = new (b("EventEmitterWithValidation"))(this.__types),
            c = new (b("EventHolder"))();
          this.__eventEmitter = new (b("EventEmitterWithHolding"))(a, c);
        }
        return this.__eventEmitter;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "Visibility",
  ["TimeSlice", "mixInEventEmitter"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g, h;
    document.hidden !== undefined
      ? ((g = "hidden"), (h = "visibilitychange"))
      : document.mozHidden !== undefined
      ? ((g = "mozHidden"), (h = "mozvisibilitychange"))
      : document.msHidden !== undefined
      ? ((g = "msHidden"), (h = "msvisibilitychange"))
      : document.webkitHidden !== undefined &&
        ((g = "webkitHidden"), (h = "webkitvisibilitychange"));
    function i() {
      return g ? document[g] : !1;
    }
    function a() {
      return document.addEventListener && h !== undefined;
    }
    var j = {
      HIDDEN: "hidden",
      VISIBLE: "visible",
      isHidden: i,
      isSupported: a,
    };
    b("mixInEventEmitter")(j, { visible: !0, hidden: !0 });
    a() &&
      document.addEventListener(
        h,
        b("TimeSlice").guard(function (a) {
          j.emit(i() ? j.HIDDEN : j.VISIBLE, { changeTime: a.timeStamp });
        }, "visibility change"),
      );
    e.exports = j;
  },
  null,
);
__d(
  "CurrentCommunity",
  ["CurrentCommunityInitialData"],
  function (a, b, c, d, e, f) {
    a = {
      getID: function () {
        return b("CurrentCommunityInitialData").COMMUNITY_ID || "0";
      },
      getName: function () {
        return b("CurrentCommunityInitialData").COMMUNITY_NAME || "";
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "DTSG",
  ["invariant", "DTSGInitialData"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("DTSGInitialData").token || null;
    a = {
      getToken: function () {
        return h;
      },
      setToken: function (a) {
        h = a;
      },
      refresh: function () {
        g(0);
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "BitMap",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    function a() {
      "use strict";
      this.$1 = [];
    }
    a.prototype.set = function (a) {
      "use strict";
      this.$1[a] = 1;
      return this;
    };
    a.prototype.toString = function () {
      "use strict";
      var a = [];
      for (var b = 0; b < this.$1.length; b++) a.push(this.$1[b] ? 1 : 0);
      return a.length ? i(a.join("")) : "";
    };
    a.prototype.toCompressedString = function () {
      "use strict";
      __p && __p();
      if (this.$1.length === 0) return "";
      var a = [],
        b = 1,
        c = this.$1[0] || 0,
        d = c.toString(2);
      for (var e = 1; e < this.$1.length; e++) {
        var f = this.$1[e] || 0;
        f === c ? b++ : (a.push(h(b)), (c = f), (b = 1));
      }
      b && a.push(h(b));
      return i(d + a.join(""));
    };
    function h(a) {
      a = a.toString(2);
      var b = "0".repeat(a.length - 1);
      return b + a;
    }
    function i(a) {
      a = (a + "00000").match(/[01]{6}/g);
      var b = "";
      for (var c = 0; c < a.length; c++) b += g[parseInt(a[c], 2)];
      return b;
    }
    e.exports = a;
  },
  null,
);
__d(
  "replaceTransportMarkers",
  ["ErrorUtils", "ge", "memoize"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, c, e) {
      __p && __p();
      var f = e !== undefined ? c[e] : c,
        h;
      if (Array.isArray(f)) for (h = 0; h < f.length; h++) g(a, f, h);
      else if (f && typeof f === "object")
        if (f.__m)
          f.__lazy
            ? (c[e] = b("memoize")(b.bind(null, f.__m)))
            : (c[e] = b.call(null, f.__m));
        else if (f.__deferredElement) {
          var i = [],
            j;
          d.call(null, [f.__deferredElement], function (a) {
            (j = a),
              i.length &&
                (i.forEach(
                  b("ErrorUtils").guard(
                    function (b) {
                      b(a);
                    },
                    "JS::deferredElement callback: '" +
                      f.__deferredElement +
                      "'",
                  ),
                ),
                (i.length = 0));
          });
          h = {
            then: function (a) {
              j ? a(j) : i.push(a);
            },
          };
          c[e] = h;
        } else if (f.__e) c[e] = b("ge")(f.__e);
        else if (f.__rel) c[e] = a.relativeTo;
        else if (f.__bigPipeContext) c[e] = a.bigPipeContext;
        else {
          for (var k in f) g(a, f, k);
          if (f.__map) c[e] = new Map(f.__map);
          else if (f.__set) c[e] = new Set(f.__set);
          else if (f.__imm) {
            h = f.__imm;
            a = h.module;
            var l = h.method;
            h = h.value;
            c[e] = a[l](h);
          }
        }
    }
    e.exports = g;
  },
  18,
);
__d(
  "ServerJSDefine",
  ["BitMap", "replaceTransportMarkers"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 2,
      h = new (b("BitMap"))(),
      i = {
        getLoadedModuleHash: function () {
          return h.toCompressedString();
        },
        handleDefine: function (a, c, d, e, f) {
          e !== -42 && h.set(e),
            define(
              a,
              c,
              function () {
                b("replaceTransportMarkers")({ relativeTo: f }, d);
                if (e === -42) throw new Error(a + ": " + d.__throw8367__);
                return d;
              },
              g,
            );
        },
        handleDefines: function (a, b) {
          a.forEach(function (a) {
            b && a.push(b), i.handleDefine.apply(null, a);
          });
        },
      };
    e.exports = i;
  },
  null,
);
__d(
  "StaticSiteData",
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      pkg_cohort_key: "__pc",
      be_key: "__be",
      spin_rev_key: "__spin_r",
      spin_time_key: "__spin_t",
      spin_branch_key: "__spin_b",
      spin_mhenv_key: "__spin_dev_mhenv",
    };
  },
  null,
);
__d(
  "asyncParams",
  [],
  function (a, b, c, d, e, f) {
    var g = {};
    a = {
      add: function (a, b) {
        g[a] = b;
      },
      get: function () {
        return g;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "isSocialPlugin",
  ["CSSCore"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return !!document.body && b("CSSCore").hasClass(document.body, "plugin");
    }
    e.exports = a;
  },
  null,
);
__d(
  "getAsyncParams",
  [
    "CurrentCommunity",
    "CurrentUserInitialData",
    "DTSG",
    "ISB",
    "LSD",
    "ServerJSDefine",
    "SiteData",
    "SprinkleConfig",
    "StaticSiteData",
    "asyncParams",
    "isSocialPlugin",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 1;
    function a(a) {
      __p && __p();
      var c,
        d = babelHelpers["extends"](
          {},
          b("asyncParams").get(),
          ((c = {
            __user: b("CurrentUserInitialData").USER_ID,
            __a: 1,
            __dyn: b("ServerJSDefine").getLoadedModuleHash(),
            __req: (g++).toString(36),
          }),
          (c[b("StaticSiteData").be_key] = b("SiteData").be_mode),
          (c[b("StaticSiteData").pkg_cohort_key] = b("SiteData").pkg_cohort),
          (c.__rev = b("SiteData").client_revision),
          c),
        );
      window.location.search
        .slice(1)
        .split("&")
        .forEach(function (a) {
          a = a.split("=");
          var b = a[0];
          a = a[1];
          (b === "locale" ||
            b === "cxobfus" ||
            b === "js_debug" ||
            b === "binast" ||
            b.substr(0, 4) === "tfc_" ||
            b.substr(0, 4) === "tfi_" ||
            b.substr(0, 3) === "mh_") &&
            (d[b] = a);
        });
      if (a == "POST") {
        c = b("DTSG").getCachedToken
          ? b("DTSG").getCachedToken()
          : b("DTSG").getToken();
        if (c) {
          d.fb_dtsg = c;
          a = "";
          for (var c = 0; c < d.fb_dtsg.length; c++)
            a += d.fb_dtsg.charCodeAt(c);
          b("SprinkleConfig").param_name &&
            (d[b("SprinkleConfig").param_name] = "2" + a);
        }
        b("LSD").token && (d.lsd = b("LSD").token);
      }
      b("ISB").token && (d.fb_isb = b("ISB").token);
      b("CurrentCommunity").getID() !== "0" &&
        (d.__cid = b("CurrentCommunity").getID());
      b("isSocialPlugin")() && (d.__sp = 1);
      b("SiteData").spin &&
        ((d[b("StaticSiteData").spin_rev_key] =
          b("SiteData")[b("StaticSiteData").spin_rev_key]),
        (d[b("StaticSiteData").spin_branch_key] =
          b("SiteData")[b("StaticSiteData").spin_branch_key]),
        (d[b("StaticSiteData").spin_time_key] =
          b("SiteData")[b("StaticSiteData").spin_time_key]),
        b("SiteData")[b("StaticSiteData").spin_mhenv_key] &&
          (d[b("StaticSiteData").spin_mhenv_key] =
            b("SiteData")[b("StaticSiteData").spin_mhenv_key]));
      return d;
    }
    e.exports = a;
  },
  null,
);
__d(
  "getSameOriginTransport",
  ["ex"],
  function (a, b, c, d, e, f) {
    function c() {
      try {
        return a.XMLHttpRequest
          ? new a.XMLHttpRequest()
          : new ActiveXObject("MSXML2.XMLHTTP.3.0");
      } catch (a) {
        throw new Error(b("ex")("getSameOriginTransport: %s", a.message));
      }
    }
    e.exports = c;
  },
  null,
);
__d(
  "ix",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = {};
    function a(a) {
      a = h[a];
      !a && g(0);
      return a;
    }
    a.add = function (a) {
      var b = !1;
      for (var c in a) c in h || (h[c] = a[c]);
    };
    e.exports = a;
  },
  null,
);
__d(
  "Bootloader",
  [
    "ix",
    "Arbiter",
    "BootloaderConfig",
    "CallbackDependencyManager",
    "CSRFGuard",
    "CSSLoader",
    "ErrorUtils",
    "FBLogger",
    "ResourceTimingsStore",
    "ServerJS",
    "TimeSlice",
    "Visibility",
    "ex",
    "getAsyncParams",
    "getSameOriginTransport",
    "gkx",
    "ifRequired",
    "performanceAbsoluteNow",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = function () {},
      i = {},
      j = {},
      k = {},
      l = {},
      m = null,
      n = {},
      o = {},
      p = {},
      q = {},
      r = {},
      s = [],
      t = {},
      u = {},
      v = {},
      w = {},
      x = !1,
      y = !1,
      z = [],
      A = new (b("CallbackDependencyManager"))(),
      B = 0,
      C = b("BootloaderConfig").jsRetries || [],
      D = b("BootloaderConfig").jsRetryAbortNum,
      E = b("BootloaderConfig").jsRetryAbortTime,
      F = C.length > 0,
      G = Object.freeze({ BOOTLOAD: "bootloader/bootload" });
    b("ErrorUtils").addListener(function (a) {
      a.loadingUrls = Object.keys(o);
    }, !0);
    function H(a) {
      var c = k[a];
      if (c) return c;
      throw new Error(b("ex")("Bootloader: %s is not in the component map", a));
    }
    function I() {
      m ||
        (m =
          document.head ||
          document.getElementsByTagName("head")[0] ||
          document.body);
      return m;
    }
    function J() {
      if (!F) return !1;
      var a = s.length;
      if (a < D) return !0;
      a = s[a - 1] - s[a - D];
      a < E && (b("FBLogger")("FIXME").warn("JS retry abort"), (F = !1));
      return F;
    }
    function K(a, c, d, e) {
      __p && __p();
      var f = document.createElement("script");
      f.src = a;
      f.async = !0;
      c != null && n[c].crossOrigin && (f.crossOrigin = "anonymous");
      var g = b("performanceAbsoluteNow")(),
        h = b("TimeSlice").getGuardedContinuation(
          "Bootloader script.onresponse",
        ),
        i = b("ResourceTimingsStore").getUID("js", a);
      b("ifRequired")("TimeSliceAutoclosedInteraction", function (a) {
        return a.getInteractionsActiveRightNow().forEach(function (a) {
          return a
            .forResourceRequest(i)
            .addStringAnnotation("requested_in_continuation", "true");
        });
      });
      b("ResourceTimingsStore")
        .annotate("js", i)
        .addStringAnnotation("name", c != null ? c : "")
        .addStringAnnotation("source", a);
      b("ifRequired")("TimeSliceInteraction", function (b) {
        b.informGlobally("bootloader._loadJS")
          .addStringAnnotation("source", a)
          .addStringAnnotation("name", c != null ? c : "");
      });
      b("ResourceTimingsStore").measureRequestSent("js", i);
      f.onload = h.bind(undefined, function () {
        r[a] &&
          b("FBLogger")("FIXME").info(
            "JS retry success [%s] at %s | time: %s | retries: %s",
            c,
            a,
            b("performanceAbsoluteNow")() - g,
            r[a],
          ),
          b("ResourceTimingsStore").measureResponseReceived("js", i),
          d();
      });
      f.onreadystatechange = function () {
        ["loaded", "complete"].includes(this.readyState) &&
          (b("ResourceTimingsStore").measureResponseReceived("js", i),
          h.bind(undefined, d)());
      }.bind(this);
      f.onerror = h.bind(undefined, function () {
        b("ResourceTimingsStore").measureResponseReceived("js", i),
          r[a] || (r[a] = 0),
          J() && r[a] < C.length
            ? (s.push(b("performanceAbsoluteNow")()),
              setTimeout(function () {
                if (!J()) return;
                var b = f.parentNode;
                b.removeChild(f);
                K(a, c, d, b);
              }, C[r[a]]),
              r[a]++)
            : ((q[a] = !0),
              b("FBLogger")("FIXME").warn(
                "JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s",
                c,
                a,
                b("performanceAbsoluteNow")() - g,
                r[a],
                Object.keys(o).length,
              ),
              d());
      });
      !b("Visibility").isHidden() && b("BootloaderConfig").staggerJsDownloads
        ? O(f)
        : e.appendChild(f);
      return f;
    }
    var L = !1,
      M = [],
      N = !1;
    function O(a) {
      L ? (M.push(a), N || ((N = !0), P())) : (I().appendChild(a), (L = !0));
    }
    function P() {
      __p && __p();
      b("setTimeoutAcrossTransitions")(
        b("TimeSlice").guard(
          function () {
            __p && __p();
            var a = M.shift();
            I().appendChild(a);
            if (M.length === 0) (L = !1), (N = !1);
            else if (b("Visibility").isHidden()) {
              while (M.length) I().appendChild(M.shift());
              L = !1;
              N = !1;
            } else P();
          },
          "Bootloader staggered download scheduler",
          { propagationType: b("TimeSlice").PropagationType.ORPHAN },
        ),
        0,
      );
    }
    function Q(a, c, d, e) {
      __p && __p();
      var f = function () {
        return X.done([d], c);
      };
      o[c] = b("performanceAbsoluteNow")();
      if (a === "js") K(c, d, f, e);
      else if (a === "async") R(c, f);
      else if (a === "css") {
        a = d != null && n[d].crossOrigin;
        b("CSSLoader").loadStyleSheet(d, c, e, a, f, function () {
          b("FBLogger")("FIXME").warn(
            "CSS timeout [%s] at %s | concurrency: %s",
            d,
            c,
            Object.keys(o).length,
          ),
            (q[c] = !0),
            f();
        });
      }
    }
    function R(a, c) {
      __p && __p();
      var d = b("getAsyncParams")("GET");
      for (var e in d) {
        var f = encodeURIComponent(e),
          g = encodeURIComponent(d[e]);
        a += "&" + f + "=" + g;
      }
      var h = b("getSameOriginTransport")();
      h.open("GET", a, !0);
      var i = b("TimeSlice").getGuardedContinuation(
        "Bootloader _requestHastePayload",
      );
      h.onreadystatechange = function () {
        h.readyState === 4 &&
          i(function () {
            var d =
                h.status === 200
                  ? JSON.parse(b("CSRFGuard").clean(h.responseText))
                  : {},
              e = S();
            e(d, a, c);
          });
      };
      h.send();
    }
    function S() {
      __p && __p();
      return b("TimeSlice").guard(
        function (a, c, d) {
          __p && __p();
          var e = a.jsmods;
          c = a.resource_map;
          var f = a.bootloadable,
            h = a.ixData,
            i = a.gkxData;
          a = a.allResources;
          c && X.setResourceMap(c);
          h && g.add(h);
          i && b("gkx").add(i);
          f && X.enableBootload(f);
          X.loadResources(a || [], function () {
            new (b("ServerJS"))().handle(e || {}), d();
          });
        },
        "Bootloader receiveEndpointData",
        { propagationType: b("TimeSlice").PropagationType.CONTINUATION },
      );
    }
    function T(a) {
      if (!n[a]) {
        b("FBLogger")("FIXME").mustfix("Missing unloading resource %s", a);
        return;
      }
      n[a].type === "css" &&
        (b("CSSLoader").unloadStyleSheet(a),
        delete i[a],
        A.unsatisfyPersistentDependency(a),
        t[a] && (t[a].cancel(), delete t[a]));
    }
    function U(a, c, d, e) {
      __p && __p();
      var f = {},
        g = {},
        h = {},
        k = window.CavalryLogger && window.CavalryLogger.getInstance();
      a.forEach(function (a) {
        var c = n[a];
        if (!c) {
          b("FBLogger")("FIXME").mustfix("Unable to resolve resource %s.", a);
          return;
        }
        c.nonblocking && !b("BootloaderConfig").assumeNotNonblocking
          ? (h[a] = !0)
          : (g[a] = !0);
        i[a] ||
          ((i[a] = !0),
          (c.permanent || b("BootloaderConfig").assumePermanent) && (j[a] = !0),
          (f[a] = c),
          k && k.measureResources({ name: a, type: c.type }, d));
      });
      a = c;
      if (e) {
        var l = b("performanceAbsoluteNow")();
        a = function () {
          var a = Math.round(b("performanceAbsoluteNow")() - l),
            d = Object.keys(g).length,
            i = Object.keys(f);
          i = {
            blocking_resources_downloaded: i.filter(function (a) {
              return a in g;
            }).length,
            blocking_resources_count: d,
            all_resources_downloaded: i.length,
            all_resources_count: d + Object.keys(h).length,
            err_count: Object.values(f).filter(function (a) {
              a = a.src;
              return a in q;
            }).length,
          };
          d = b("TimeSlice").getContext();
          i = babelHelpers["extends"]({}, e, i, {
            timeslice_context: d && d.name,
            start_time: l,
            duration: a,
          });
          b("Arbiter").inform(G.BOOTLOAD, i, b("Arbiter").BEHAVIOR_PERSISTENT);
          c && c();
        };
      }
      a && A.registerCallback(a, Object.keys(g));
      var m = document.createDocumentFragment();
      Object.entries(f).forEach(function (a) {
        var b = a[0];
        a = a[1];
        var c = a.type;
        a = a.src;
        Q(c, a, b, m);
      });
      I().appendChild(m);
    }
    function V() {
      return b("TimeSlice").guard(
        function (a, c, d, e) {
          if (c) {
            for (
              var f = arguments.length, g = new Array(f > 4 ? f - 4 : 0), h = 4;
              h < f;
              h++
            )
              g[h - 4] = arguments[h];
            c.apply(a, g);
          }
          e &&
            b("FBLogger")("FIXME").warn(
              "JS loading error [%s] at %s",
              d,
              a.src,
            );
          X.done([d]);
        },
        "Bootloader _onScriptDone",
        { propagationType: b("TimeSlice").PropagationType.CONTINUATION },
      );
    }
    function W() {
      __p && __p();
      if (x) return;
      x = !0;
      Array.from(document.getElementsByTagName("link")).forEach(function (a) {
        var c;
        (c = a.getAttribute("data-bootloader-hash")) &&
          ((n[c] = { src: a.href, type: "css" }),
          (a.getAttribute("data-permanent") ||
            b("BootloaderConfig").assumePermanent) &&
            ((n[c].permanent = 1), (j[c] = !0)),
          b("CSSLoader").registerLoadedStyleSheet(c, a) ||
            b("FBLogger")("FIXME").warn(
              "Duplicate CSS link loaded for [%s]: %s",
              c,
              a.href,
            ),
          X.done([c]),
          (w[c] = !0));
      });
      Array.from(document.getElementsByTagName("script")).forEach(function (a) {
        __p && __p();
        var b;
        if ((b = a.getAttribute("data-bootloader-hash"))) {
          n[b] = { src: a.src, type: "js" };
          if (a.getAttribute("async"))
            if (window._btldr && window._btldr[b]) X.done([b]);
            else {
              var c = V();
              a.onload = c.bind(null, a, a.onload, b, !1);
              a.onerror = c.bind(null, a, a.onerror, b, !0);
              i[b] = !0;
            }
          else X.done([b]);
          w[b] = !0;
        }
      });
    }
    var X = {
      loadModules: function (a, c, e) {
        __p && __p();
        c === void 0 && (c = h);
        e === void 0 && (e = "loadModules: unknown caller");
        var f = function () {
            return c.apply(undefined, arguments);
          },
          g = {
            remove: function () {
              c = h;
            },
          };
        if (!y) {
          var i = "Deferred: Bootloader.loadModules";
          i = b("TimeSlice").getGuardedContinuation(i);
          z.push([a, f, e, i]);
          return g;
        }
        var j = b("performanceAbsoluteNow")();
        i = JSON.stringify([e, a]);
        var k = !1;
        i in v || ((k = !0), (v[i] = j));
        var m = [],
          o = [],
          p = [];
        i = !1;
        var q = 0;
        a.forEach(function (a) {
          var c = H(a);
          c.needsAsync &&
            (q++,
            a in l
              ? o.push(l[a])
              : b("ifRequired").call(null, a, null, function () {
                  p.push(a);
                }));
          a in u || ((i = !0), (u[a] = j));
          c.module && m.push(a);
          o.push.apply(o, c.resources);
        });
        if (p.length > 0) {
          var r = b("BootloaderConfig").payloadEndpointURI,
            s = "async:" + B++,
            t = encodeURIComponent(p.join(",")),
            w = r.indexOf("?") > -1 ? "&" : "?";
          n[s] = { src: "" + r + w + "modules=" + t, type: "async" };
          o.push(s);
          p.forEach(function (a) {
            l[a] = s;
          });
        }
        b("ifRequired")("TimeSliceInteraction", function (b) {
          b.informGlobally("Bootloader.loadResources")
            .addSetAnnotation("requested_hashes", o)
            .addStringAnnotation("bootloader_reference", e)
            .addSetAnnotation("requested_components", a);
        });
        r = null;
        (k || !b("BootloaderConfig").fixMemoryLeaks) &&
          (r = {
            ref: e,
            components: a,
            has_new_component: i,
            first_identical_request: k,
            async_resources_count: q,
            async_resources_downloaded: p.length,
          });
        U(o, d.bind(null, m, f), null, r);
        return g;
      },
      loadResources: function (a, b, c, d) {
        __p && __p();
        W();
        if (c) {
          var e = {};
          a.forEach(function (a) {
            e[a] = !0;
          });
          for (var f in i) f in j || f in e || f in w || T(f);
          w = {};
        }
        U(a, b, d);
      },
      requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN: function (a) {
        Q("js", a, null, I());
      },
      done: function (a, c) {
        c != null &&
          ((p[c] = b("performanceAbsoluteNow")() - o[c]), delete o[c]),
          window.CavalryLogger && window.CavalryLogger.done_js(a),
          a.forEach(function (a) {
            a != null &&
              ((i[a] = !0),
              A.satisfyPersistentDependency(a),
              n[a] &&
                n[a].type === "css" &&
                !t[a] &&
                (t[a] = define(
                  b("CSSLoader").moduleName(a),
                  [],
                  "x",
                  2,
                  null,
                  1,
                )));
          });
      },
      enableBootload: function (a) {
        for (var b in a) k[b] || (k[b] = a[b]);
        y ||
          (W(),
          (y = !0),
          z.forEach(function (a) {
            a[3](function () {
              X.loadModules.apply(X, a);
            });
          }),
          (z = []));
      },
      setResourceMap: function (a) {
        for (var b in a) n[b] || (n[b] = a[b]);
      },
      getURLToHashMap: function () {
        var a = {};
        for (var b in n) a[n[b].src] = b;
        return a;
      },
      loadPredictedResources: function (a, b) {
        a.forEach(function (a) {
          w[a] = !0;
        }),
          U(a, b);
      },
      loadPredictedResourceMap: function (a, b) {
        X.setResourceMap(a), X.loadPredictedResources(Object.keys(a), b);
      },
      getLoadingUrls: function () {
        var a = {},
          c = b("performanceAbsoluteNow")();
        for (var d in o) a[d] = c - o[d];
        return a;
      },
      getBootloadedComponents: function () {
        return u;
      },
      getLoadedUrlTimes: function () {
        return p;
      },
      getErrorUrls: function () {
        return Object.keys(q);
      },
      __debug: {
        callbackManager: A,
        componentMap: k,
        requested: i,
        resources: n,
        retries: r,
        errors: q,
        loading: o,
        predictedResources: w,
        bootloaded: u,
      },
      Events: G,
    };
    e.exports = X;
  },
  18,
);
__d(
  "Parent",
  ["CSS"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      byTag: function (a, b) {
        b = b.toUpperCase();
        a = g.find(a, function (a) {
          return a.nodeName === b;
        });
        return a instanceof Element ? a : null;
      },
      byClass: function (a, c) {
        a = g.find(a, function (a) {
          return a instanceof Element && b("CSS").hasClass(a, c);
        });
        return a instanceof Element ? a : null;
      },
      bySelector: function (a, b) {
        __p && __p();
        a = a;
        if (typeof a.matches === "function") {
          while (a && a !== document && !a.matches(b)) a = a.parentNode;
          return a instanceof Element ? a : null;
        } else if (typeof a.msMatchesSelector === "function") {
          while (a && a !== document && !a.msMatchesSelector(b))
            a = a.parentNode;
          return a instanceof Element ? a : null;
        } else return g.bySelector_SLOW(a, b);
      },
      bySelector_SLOW: function (a, b) {
        __p && __p();
        a = a;
        var c = a;
        while (c.parentNode) c = c.parentNode;
        if (!(c instanceof Element) && !(c instanceof Document)) return null;
        c = c.querySelectorAll(b);
        while (a) {
          if (Array.prototype.indexOf.call(c, a) !== -1)
            return a instanceof Element ? a : null;
          a = a.parentNode;
        }
        return a instanceof Element ? a : null;
      },
      byAttribute: function (a, b) {
        a = g.find(a, function (a) {
          return a instanceof Element && !!a.getAttribute(b);
        });
        return a instanceof Element ? a : null;
      },
      find: function (a, b) {
        a = a;
        while (a) {
          if (b(a)) return a;
          a = a.parentNode;
        }
        return null;
      },
    };
    e.exports = g;
  },
  null,
);
__d(
  "ContextualComponent",
  ["Parent"],
  function (a, b, c, d, e, f) {
    __p && __p();
    g.forNode = function (a) {
      "use strict";
      return g.$1.get(a) || null;
    };
    g.closestToNode = function (a) {
      "use strict";
      a = b("Parent").find(a, function (a) {
        return !!g.forNode(a);
      });
      return a ? g.forNode(a) : null;
    };
    g.register = function (a) {
      "use strict";
      return new g(a);
    };
    function g(a) {
      var b = a.element,
        c = a.isRoot;
      a = a.parent;
      this.$2 = c;
      this.$3 = b;
      this.$4 = a;
      this.$5 = new Set();
      this.$6 = [];
      this.$7 = [];
      this.$8();
    }
    g.prototype.onCleanup = function (a) {
      "use strict";
      this.$6.push(a);
    };
    g.prototype.onUnmount = function (a) {
      "use strict";
      this.$7.push(a);
    };
    g.prototype.cleanup = function () {
      "use strict";
      this.$5.forEach(function (a) {
        return a.cleanup();
      }),
        this.$6.forEach(function (a) {
          return a();
        }),
        (this.$6 = []);
    };
    g.prototype.unmount = function () {
      "use strict";
      this.cleanup();
      this.$5.forEach(function (a) {
        return a.unmount();
      });
      this.$7.forEach(function (a) {
        return a();
      });
      this.$7 = [];
      var a = this.$4;
      a && (g.$1["delete"](this.$3), a.$9(this));
    };
    g.prototype.reinitialize = function () {
      "use strict";
      var a = this.$4;
      a && (a.$9(this), (this.$4 = undefined));
      g.$1["delete"](this.$3);
      this.$8();
    };
    g.prototype.$8 = function () {
      "use strict";
      if (!this.$2 && !this.$4) {
        var a = g.closestToNode(this.$3);
        a && (this.$4 = a);
      }
      this.$4 && this.$4.$10(this);
      g.$1.set(this.$3, this);
    };
    g.prototype.$10 = function (a) {
      "use strict";
      this.$5.add(a);
    };
    g.prototype.$9 = function (a) {
      "use strict";
      this.$5["delete"](a);
    };
    g.$1 = new Map();
    e.exports = g;
  },
  18,
);
__d(
  "__debug",
  [],
  function (a, b, c, d, e, f) {
    e.exports = {};
  },
  null,
);
__d(
  "ServerJS",
  [
    "ContextualComponent",
    "ErrorUtils",
    "LogviewForcedKeyError",
    "ServerJSDefine",
    "TimeSlice",
    "ex",
    "ge",
    "replaceTransportMarkers",
    "__debug",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 1,
      h = 2,
      i = 0;
    function a() {
      "use strict";
      (this.$1 = {}), (this.$2 = null), (this.$3 = {}), (this.$4 = undefined);
    }
    a.prototype.handle = function (a, b) {
      "use strict";
      __p && __p();
      this.$4 = b;
      if (a.__guard)
        throw new Error(
          "ServerJS.handle called on data that has already been handled",
        );
      a.__guard = !0;
      k(a.define || [], this.$5, this);
      k(a.markup || [], this.$6, this);
      k(a.elements || [], this.$7, this);
      this.$8(a.contexts || []);
      k(a.instances || [], this.$9, this);
      var c = k(a.pre_display_requires || [], this.$10, this);
      c = c.concat(k(a.require || [], this.$10, this));
      return {
        cancel: function () {
          for (var a = 0; a < c.length; a++) c[a] && c[a].cancel();
        },
      };
    };
    a.prototype.handlePartial = function (a, b) {
      "use strict";
      (a.instances || []).forEach(m.bind(null, this.$1, 3));
      (a.markup || []).forEach(m.bind(null, this.$1, 2));
      (a.elements || []).forEach(m.bind(null, this.$1, 2));
      return this.handle(a, b);
    };
    a.prototype.setRelativeTo = function (a) {
      "use strict";
      this.$2 = a;
      return this;
    };
    a.prototype.setServerFeatures = function () {
      "use strict";
      return this;
    };
    a.prototype.cleanup = function () {
      "use strict";
      __p && __p();
      var a = Object.keys(this.$1);
      d.call(
        null,
        a,
        b("TimeSlice").guard(n, "SeverJS Cleanup requireLazy", {
          propagationType: b("TimeSlice").PropagationType.ORPHAN,
        }),
      );
      this.$1 = {};
      function c(c) {
        var d = this.$3[c],
          a = d[0],
          f = d[1];
        d = d[2];
        delete this.$3[c];
        f = f
          ? 'JS::call("' + a + '", "' + f + '", ...)'
          : 'JS::requireModule("' + a + '")';
        a = b("__debug").debugUnresolvedDependencies([a, c]);
        c = b("ex")(
          "%s did not fire because it has missing dependencies.\n%s",
          f,
          a,
        );
        throw j(
          new (b("LogviewForcedKeyError"))(
            c,
            "Missing dependencies: " + f + " | " + a,
          ),
          d,
        );
      }
      for (var f in this.$3)
        b("ErrorUtils").applyWithGuard(
          c,
          this,
          [f],
          null,
          "ServerJS:cleanup id: " + f,
        );
    };
    a.prototype.$5 = function (a, c, d, e) {
      "use strict";
      return b("ErrorUtils").applyWithGuard(
        b("ServerJSDefine").handleDefine,
        b("ServerJSDefine"),
        [a, c, d, e, this.$2],
        null,
        "JS::define",
      );
    };
    a.prototype.$10 = function (a, c, d, e) {
      "use strict";
      return b("ErrorUtils").applyWithGuard(
        this.$11,
        this,
        [a, c, d, e],
        null,
        c ? "JS::call" : "JS::requireModule",
      );
    };
    a.prototype.$11 = function (a, c, d, f) {
      "use strict";
      __p && __p();
      a = a.split("@");
      var k = a[0],
        l = a[1];
      typeof c === "object" && ((d = c), (c = undefined));
      a = [k].concat(d || []);
      var m;
      c ? (m = "__call__" + k + "." + c) : (m = "__requireModule__" + k);
      m += "__" + i++;
      this.$3[m] = [k, c, l];
      var n = this.$4 && this.$4.bigPipeContext,
        o = b("ErrorUtils").guard(
          function (a) {
            __p && __p();
            var a = b.call(null, k);
            delete this.$3[m];
            f &&
              b("replaceTransportMarkers")(
                { relativeTo: this.$2, bigPipeContext: n },
                f,
              );
            if (c) {
              if (!a[c])
                throw j(
                  new TypeError(b("ex")('Module %s has no method "%s"', k, c)),
                  l,
                );
              a[c].apply(a, f || []);
              o.__SMmeta = a[c].__SMmeta || {};
              o.__SMmeta.module = o.__SMmeta.module || k;
              o.__SMmeta.name = o.__SMmeta.name || c;
            }
          }.bind(this),
          c
            ? "JS::call('" + k + "', '" + c + "', ...)"
            : "JS::requireModule('" + k + "')",
        );
      return define(m, a, o, g | h, this, 1, this.$4);
    };
    a.prototype.$9 = function (a, c, d, e) {
      "use strict";
      return b("ErrorUtils").applyWithGuard(
        this.$12,
        this,
        [a, c, d, e],
        null,
        "JS::instance",
      );
    };
    a.prototype.$12 = function (a, c, d, e) {
      "use strict";
      __p && __p();
      var f = null;
      a = a.split("@");
      var g = a[0];
      a = a[1];
      if (c) {
        var i = this.$4 && this.$4.bigPipeContext;
        f = function () {
          var a = b.call(null, c[0]);
          b("replaceTransportMarkers")(
            { relativeTo: this.$2, bigPipeContext: i },
            d,
          );
          var e = Object.create(a.prototype);
          a.apply(e, d);
          return e;
        }.bind(this);
      }
      define(g, c, f, h, null, e);
    };
    a.prototype.$6 = function (a, c, d) {
      "use strict";
      return b("ErrorUtils").applyWithGuard(
        this.$13,
        this,
        [a, c, d],
        null,
        "JS::markup",
      );
    };
    a.prototype.$13 = function (a, b, c) {
      "use strict";
      a = a.split("@");
      var d = a[0];
      a = a[1];
      define(
        d,
        ["HTML"],
        function (c) {
          try {
            return c.replaceJSONWrapper(b).getRootNode();
          } catch (b) {
            throw j(b, a);
          }
        },
        0,
        null,
        c,
      );
    };
    a.prototype.$7 = function (a, c, d, e) {
      "use strict";
      return b("ErrorUtils").applyWithGuard(
        this.$14,
        this,
        [a, c, d, e],
        null,
        "JS::element",
      );
    };
    a.prototype.$14 = function (a, c, d, e) {
      "use strict";
      __p && __p();
      a = a.split("@");
      var f = a[0],
        h = a[1];
      if (c === null && d) {
        define(f, null, null, 0, null, d);
        return;
      }
      a = [];
      var i = 0;
      e && (a.push(e), (i = g), d++);
      define(
        f,
        a,
        function (a) {
          a = b("ge")(c, a);
          if (!a) {
            var d = "";
            throw j(
              new Error(b("ex")('Could not find element "%s"%s', c, d)),
              h,
            );
          }
          return a;
        },
        i,
        null,
        d,
      );
    };
    a.prototype.$8 = function (a) {
      "use strict";
      b("ErrorUtils").applyWithGuard(
        this.$15,
        this,
        [a],
        null,
        "ContextualComponents",
      );
    };
    a.prototype.$15 = function (a) {
      "use strict";
      __p && __p();
      var c = this.$4 && this.$4.bigPipeContext;
      a.map(
        function (a) {
          b("replaceTransportMarkers")(
            { relativeTo: this.$2, bigPipeContext: c },
            a,
          );
          var d = a[0];
          return [a, l(d)];
        }.bind(this),
      )
        .sort(function (a, b) {
          return a[1] - b[1];
        })
        .forEach(function (a) {
          a = a[0];
          var c = a[0];
          a = a[1];
          b("ContextualComponent").register({ element: c, isRoot: a });
        });
    };
    function j(a, b) {
      a.serverHash = b;
      return a;
    }
    (function () {
      d(["HTML"], function (a) {});
    });
    function k(a, b, c) {
      return a.map(function (a) {
        return b.apply(c, a);
      });
    }
    function l(a) {
      var b = 0;
      while (a) (a = a.parentElement), b++;
      return b;
    }
    function m(b, c, a) {
      var d = a[0];
      d in b || (a[c] = (a[c] || 0) + 1);
      b[d] = !0;
    }
    function n() {
      return {};
    }
    e.exports = a;
  },
  18,
);
__d(
  "MutationObserver",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    b.prototype.observe = function (a, b) {
      "use strict";
    };
    b.prototype.disconnect = function () {
      "use strict";
    };
    b.prototype.takeRecords = function () {
      "use strict";
      return null;
    };
    function b() {
      "use strict";
    }
    c = a.MutationObserver || a.WebKitMutationObserver || b;
    e.exports = c;
  },
  18,
);
__d(
  "PageDOMMutationObserver",
  ["ExecutionEnvironment", "MutationObserver"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = new (b("MutationObserver"))(function () {}),
      h = !1,
      i = {
        tryStart: function () {
          __p && __p();
          var a = typeof g.takeRecords === "function";
          if (!b("ExecutionEnvironment").canUseDOM || !a) {
            i.tryStart = function () {};
            i.consumePendingDOMMutations = function () {
              return 0;
            };
            return;
          }
          if (!window.Env || !document.body) return;
          i.tryStart = function () {};
          if (!window.Env.dom_mutation_flag) return;
          h = !0;
          g.observe(document.body, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0,
          });
        },
        consumePendingDOMMutations: function () {
          var a = g.takeRecords();
          return a != null ? a.length : 0;
        },
        isSupported: function () {
          return h;
        },
      };
    e.exports = i;
  },
  18,
);
__d(
  "OnDemandExecutionContextObserver",
  ["TimeSlice"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    function a() {
      (this.$5 = !1),
        (this.$4 = !1),
        (this.$1 = 0),
        (this.$2 = {}),
        (this.$3 = 0);
    }
    a.prototype.onNewContextCreatedWhileEnabled = function (a, b, c) {
      throw Error("unimplemented abstract method");
    };
    a.prototype.onNewContextCreatedWhileDisabled = function (a, b, c) {};
    a.prototype.onContextCanceled = function (a, b) {};
    a.prototype.onBeforeContextStartedWhileEnabled = function (a, b, c) {
      throw Error("unimplemented abstract method");
    };
    a.prototype.onBeforeContextStartedWhileDisabled = function (a, b, c) {};
    a.prototype.onAfterContextStartedWhileEnabled = function (a, b, c, d) {
      throw Error("unimplemented abstract method");
    };
    a.prototype.onAfterContextStartedWhileDisabled = function (a, b, c, d) {};
    a.prototype.onAfterContextEndedWhileEnabled = function (a, b, c, d) {
      throw Error("unimplemented abstract method");
    };
    a.prototype.onAfterContextEndedWhileDisabled = function (a, b, c, d) {};
    a.prototype.onNewContextCreated = function (a, b, c) {
      if (this.isEnabled())
        return this.onNewContextCreatedWhileEnabled(a, b, c);
      else {
        this.onNewContextCreatedWhileDisabled(a, b, c);
        return null;
      }
    };
    a.prototype.onBeforeContextStarted = function (a, b, c) {
      if (this.isEnabled())
        return this.onBeforeContextStartedWhileEnabled(a, b, c);
      else {
        this.onBeforeContextStartedWhileDisabled(a, b, c);
        return null;
      }
    };
    a.prototype.onAfterContextStarted = function (a, b, c, d) {
      c = c;
      if (this.isEnabled())
        return this.onAfterContextStartedWhileEnabled(a, b, c, d);
      else {
        this.onAfterContextStartedWhileDisabled(a, b, c, d);
        return null;
      }
    };
    a.prototype.onAfterContextEnded = function (a, b, c, d) {
      if (this.isEnabled()) {
        var e = c;
        this.onAfterContextEndedWhileEnabled(a, b, e, d);
      } else this.onAfterContextEndedWhileDisabled(a, b, c, d);
      this.$4 && !this.$5 && a.isRoot && (this.onDisable(), (this.$4 = !1));
    };
    a.prototype.onDisable = function () {};
    a.prototype.onEnable = function () {};
    a.prototype.getBeforeID = function () {
      throw Error("unimplemented abstract method");
    };
    a.prototype.getAfterID = function () {
      throw Error("unimplemented abstract method");
    };
    a.prototype.isEnabled = function () {
      return this.$4;
    };
    a.prototype.__getExpiryCallback = function () {
      var a = ++this.$1;
      this.$2[a] = !0;
      this.$3++;
      return function () {
        this.$2[a] &&
          (delete this.$2[a], this.$3--, this.$3 === 0 && (this.$5 = !1));
      }.bind(this);
    };
    a.prototype.expressInterest = function () {
      var a = this.__getExpiryCallback();
      this.isEnabled() ||
        (this.onEnable(),
        b("TimeSlice").catchUpOnDemandExecutionContextObservers(this));
      this.$4 = !0;
      this.$5 = !0;
      return a;
    };
    e.exports = a;
  },
  null,
);
__d(
  "ProfilingCountersStore",
  ["IntervalTrackingBoundedBuffer"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = new (b("IntervalTrackingBoundedBuffer"))(),
      h = {
        getInstance: function () {
          return g;
        },
        toMap: function (a) {
          var b = {};
          a.forEach(function (a) {
            return (b[a.getTimeSliceContextID()] = a);
          });
          return b;
        },
        getNestedTotals: function (a) {
          return h._accumulateOverNestedActiveCounters(
            a,
            function (a, b) {
              h._addOnto(b, a.getActiveCounters().getTotals());
              return b;
            },
            {},
          );
        },
        _accumulateOverNestedActiveCounters: function (a, b, c) {
          __p && __p();
          c = c;
          a.hasActiveCounters() && (c = b(a, c));
          if (a.processedNestedContexts != null)
            for (
              var a = a.processedNestedContexts,
                d = Array.isArray(a),
                e = 0,
                a = d
                  ? a
                  : a[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              var f;
              if (d) {
                if (e >= a.length) break;
                f = a[e++];
              } else {
                e = a.next();
                if (e.done) break;
                f = e.value;
              }
              f = f;
              c = h._accumulateOverNestedActiveCounters(f, b, c);
            }
          return c;
        },
        _getMaximumAttribution: function (a, b) {
          __p && __p();
          if (a.length === 0) return null;
          for (
            var c = a,
              d = Array.isArray(c),
              e = 0,
              c = d
                ? c
                : c[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var f;
            if (d) {
              if (e >= c.length) break;
              f = c[e++];
            } else {
              e = c.next();
              if (e.done) break;
              f = e.value;
            }
            f = f;
            if (b.propagatedAttributions && b.propagatedAttributions[f] != null)
              return f;
          }
          f = null;
          e = null;
          for (
            var d = a,
              c = Array.isArray(d),
              a = 0,
              d = c
                ? d
                : d[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var g;
            if (c) {
              if (a >= d.length) break;
              g = d[a++];
            } else {
              a = d.next();
              if (a.done) break;
              g = a.value;
            }
            g = g;
            if (b.newAttributions && b.newAttributions[g] != null) {
              var h = b.newAttributions[g].newCounterIdx;
              (e == null || h < e) && ((f = g), (e = h));
            }
          }
          return f;
        },
        getNestedTotalsByAttributions: function (a, b) {
          __p && __p();
          return h._accumulateOverNestedActiveCounters(
            a,
            function (a, c) {
              __p && __p();
              var d = h._getMaximumAttribution(b, a);
              if (d) {
                d = h._getAttributedAndUnattributedForThisContext(d, a);
                var e = d.attributed;
                d = d.unattributed;
                e != null && h._addOnto(c.attributed, e);
                d != null && h._addOnto(c.unattributed, d);
              } else
                h._addOnto(c.unattributed, a.getActiveCounters().getTotals());
              return c;
            },
            { attributed: {}, unattributed: {} },
          );
        },
        _getAttributedAndUnattributedForThisContext: function (a, b) {
          __p && __p();
          var c = b.getActiveCounters().getTotals();
          if (
            b.propagatedAttributions != null &&
            b.propagatedAttributions[a] != null
          )
            return { attributed: c, unattributed: null };
          else if (b.newAttributions != null && b.newAttributions[a] != null) {
            b = b.newAttributions[a].snapshotAtStart;
            if (b != null) {
              a = Object.entries(b);
              for (var d = 0; d < a.length; d++) {
                var e = a[d],
                  f = e[0];
                e = e[1];
                e = c[f] - e;
                e === 0 ? delete c[f] : (c[f] = e);
              }
              return { attributed: c, unattributed: b };
            } else return { attributed: c, unattributed: null };
          } else return { attributed: null, unattributed: c };
        },
        _addOnto: function (a, b) {
          b = Object.entries(b);
          for (var c = 0; c < b.length; c++) {
            var d = b[c],
              e = d[0];
            d = d[1];
            a[e] = (a[e] || 0) + d;
          }
        },
      };
    e.exports = h;
  },
  18,
);
__d(
  "ProfilingCounters",
  [
    "ErrorUtils",
    "ExecutionContextObservers",
    "OnDemandExecutionContextObserver",
    "ProfilingCountersStore",
    "TimeSlice",
    "TimeSliceInteractionSV",
    "performanceAbsoluteNow",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    b("performanceAbsoluteNow")();
    var h = {
        ALL: "ALL",
        ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC:
          "ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC",
      },
      i = 100,
      j = [];
    g = babelHelpers.inherits(k, b("OnDemandExecutionContextObserver"));
    g && g.prototype;
    k.prototype.onNewContextCreatedWhileEnabled = function (a, b, c) {
      "use strict";
      return l
        .currentContext()
        .getPropagatedContextForChild(!!(c && c.isContinuation));
    };
    k.prototype.onBeforeContextStartedWhileEnabled = function (a, b, c) {
      "use strict";
      __p && __p();
      var d = c && c.propagateCounterAttribution,
        e = null;
      if (a.executionNumber > 0 && b) {
        var f = Object.entries(b);
        for (var g = 0; g < f.length; g++) {
          var i = f[g],
            j = i[0];
          i = i[1];
          var k = i.propagationType;
          k !== "ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC" &&
            ((e = e || {}), (e[j] = i));
        }
      } else e = b;
      k = l.currentContext().getExecutionContext(!!(c && c.isContinuation), e);
      j = new l(!1, k, a.contextID);
      d != null && j.addAttribution(d, h.ALL);
      l.nestContext(j);
      return null;
    };
    k.prototype.onAfterContextStartedWhileEnabled = function (a, b, c, d) {
      "use strict";
      return null;
    };
    k.prototype.onAfterContextEndedWhileEnabled = function (a, c, d, e) {
      "use strict";
      c = l.unnestContext();
      a.isRoot && b("ProfilingCountersStore").getInstance().pushElement(c);
    };
    k.prototype.getBeforeID = function () {
      "use strict";
      return b("ExecutionContextObservers").beforeIDs.PROFILING_COUNTERS;
    };
    k.prototype.getAfterID = function () {
      "use strict";
      return b("ExecutionContextObservers").afterIDs.PROFILING_COUNTERS;
    };
    k.prototype.onDisable = function () {
      "use strict";
      l.resetState();
    };
    function k() {
      "use strict";
      g.apply(this, arguments);
    }
    l.getObserver = function () {
      "use strict";
      l.$2 || (l.$2 = new k());
      return l.$2;
    };
    l.wrapInSingleContext = function (a) {
      "use strict";
      var b = new l(!1, null, 0);
      a.forEach(function (a) {
        return b.$3(a, !1);
      });
      return b;
    };
    l.startTimingInContext = function (a, b) {
      "use strict";
      if (!l.getObserver().isEnabled()) return null;
      for (var c = 0; c < j.length; c++) {
        var d = j[c];
        if (d.getTimeSliceContextID() === b)
          return d.getActiveCounters().startTiming(a);
      }
      return null;
    };
    l.stopTimingInContext = function (a, b) {
      "use strict";
      __p && __p();
      if (!l.getObserver().isEnabled()) return;
      for (var c = 0; c < j.length; c++) {
        var d = j[c];
        if (d.getTimeSliceContextID() === b) {
          d.getActiveCounters().stopTiming(a);
          return;
        }
      }
      return;
    };
    l.startTiming = function (a) {
      "use strict";
      return l.currentContext().getActiveCounters().startTiming(a);
    };
    l.stopTiming = function (a) {
      "use strict";
      return l.currentContext().getActiveCounters().stopTiming(a);
    };
    l.incrementCounter = function (a, b) {
      "use strict";
      l.currentContext().getActiveCounters().incrementCounter(a, b);
    };
    l.currentContext = function () {
      "use strict";
      return j[j.length - 1];
    };
    function l(a, b, c) {
      "use strict";
      (this.isGlobal = a),
        (this.propagatedAttributions = b),
        (this.newAttributions = null),
        (this.active = null),
        (this.processedNestedContexts = null),
        (this.newAttributionsCount = 0),
        (this.$1 = c);
    }
    l.prototype.addAttribution = function (a, b) {
      "use strict";
      this.$4(a) ||
        (this.newAttributions == null && (this.newAttributions = {}),
        (this.newAttributions[a] = {
          newCounterIdx: this.newAttributionsCount,
          propagationType: b,
          snapshotAtStart: this.hasActiveCounters()
            ? this.getActiveCounters().getTotals()
            : null,
        }),
        this.newAttributionsCount++);
      return this;
    };
    l.prototype.$5 = function (a, b) {
      "use strict";
      return b != null && b[a] != null;
    };
    l.prototype.$4 = function (a) {
      "use strict";
      return (
        this.$5(a, this.propagatedAttributions) ||
        this.$5(a, this.newAttributions)
      );
    };
    l.$6 = function (a, b, c) {
      "use strict";
      for (var d = 0; d < c.length; d++) {
        var e = c[d],
          f = e[0];
        e = e[1];
        var g = e.propagationType;
        (g === h.ALL || b) && (a[f] = e);
      }
    };
    l.prototype.getPropagatedContextForChild = function (a) {
      "use strict";
      __p && __p();
      var b;
      if (this.newAttributions == null)
        if (this.propagatedAttributions == null || a)
          return this.propagatedAttributions;
        else {
          b = Object.entries(this.propagatedAttributions);
          var c = !0;
          for (var d = 0; d < b.length; d++) {
            var e = b[d];
            e[0];
            e = e[1];
            if (e.propagationType === h.ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC) {
              c = !1;
              break;
            }
          }
          if (c) return this.propagatedAttributions;
        }
      e = {};
      this.propagatedAttributions != null &&
        l.$6(e, a, b || Object.entries(this.propagatedAttributions));
      this.newAttributions != null &&
        l.$6(e, a, Object.entries(this.newAttributions));
      return e;
    };
    l.prototype.getExecutionContext = function (a, b) {
      "use strict";
      var c = a ? this.getPropagatedContextForChild(a) || {} : {};
      b && l.$6(c, a, Object.entries(b));
      return c;
    };
    l.prototype.getActiveCounters = function () {
      "use strict";
      this.active == null && (this.active = new m());
      return this.active;
    };
    l.prototype.$7 = function () {
      "use strict";
      return this.isGlobal;
    };
    l.prototype.hasActiveCounters = function () {
      "use strict";
      return this.active != null;
    };
    l.nestContext = function (a) {
      "use strict";
      j.push(a);
    };
    l.unnestContext = function () {
      "use strict";
      if (j.length === 1) throw new Error("popping off the global context");
      var a = j.pop();
      if (a.hasActiveCounters()) var b = a.getActiveCounters();
      (a.hasActiveCounters() || a.processedNestedContexts != null) &&
        l.currentContext().$3(a);
      return a;
    };
    l.prototype.$3 = function (a, b) {
      b === void 0 && (b = !0);
      if (this.$7()) return;
      else
        (b &&
          this.processedNestedContexts != null &&
          this.processedNestedContexts.length >= i) ||
          ((this.processedNestedContexts = this.processedNestedContexts || []),
          this.processedNestedContexts.push(a));
    };
    l.prototype.getTimeSliceContextID = function () {
      "use strict";
      return this.$1;
    };
    l.resetState = function () {
      "use strict";
      j = [new l(!0, null, 0)];
    };
    l.getHandle = function () {
      "use strict";
      return n;
    };
    l.AttributionPropagation = h;
    function m() {
      "use strict";
      (this.$1 = null), (this.$2 = null), (this.$3 = null), (this.$4 = null);
    }
    m.prototype.startTiming = function (a) {
      "use strict";
      __p && __p();
      var c = m.$5++;
      a = { value: 0, counter: a, id: c, lastStartTime: 0 };
      var d = this.$1 || [];
      this.$2 = this.$2 || {};
      this.$2[c] = d.length;
      d.push(a);
      var e = b("performanceAbsoluteNow")();
      a.lastStartTime = e;
      if (d.length > 1) {
        a = d[d.length - 2];
        a.value += e - a.lastStartTime;
      }
      this.$1 = d;
      return c;
    };
    m.prototype.stopTiming = function (a) {
      "use strict";
      __p && __p();
      var c = b("performanceAbsoluteNow")(),
        d = this.$2,
        e = this.$1;
      if (d == null || e == null) {
        b("ErrorUtils").reportError(
          new Error("token does not match the counter context"),
        );
        return 0;
      }
      var f = d[a];
      delete d[a];
      if (f == null || e[f] == null) return 0;
      a = null;
      var g = 0;
      while (e.length - 1 > f) {
        var h = e.pop();
        g += h.value;
        delete d[h.id];
        a == null && h.lastStartTime != null && (a = h.lastStartTime);
      }
      h = e.pop();
      h.value += c - (a || h.lastStartTime);
      h.value += g;
      f = this.$4 || {};
      f[h.counter] = f[h.counter] || 0;
      f[h.counter] += h.value;
      e.length > 0 && (e[e.length - 1].lastStartTime = c);
      this.$1 = e;
      this.$4 = f;
      this.$2 = d;
      return h.value;
    };
    m.prototype.incrementCounter = function (a, b) {
      "use strict";
      var c = this.$3 || {};
      c[a] = c[a] || 0;
      c[a] += b;
      this.$3 = c;
    };
    m.prototype.getTotals = function () {
      "use strict";
      return babelHelpers["extends"]({}, this.$4 || {}, this.$3 || {});
    };
    m.prototype.openCounterCount = function () {
      "use strict";
      return this.$1 != null ? this.$1.length : 0;
    };
    m.$5 = 1;
    j.push(new l(!0, null, 0));
    b("TimeSlice").registerExecutionContextObserver(l.getObserver());
    var n = l.getObserver().expressInterest();
    a.ProfilingCounters = l;
    e.exports = l;
  },
  3,
);
__d(
  "ArtilleryJSPointTypes",
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      ASYNC_REQUEST_SENT: 1,
      ASYNC_RESPONSE_RECEIVED: 2,
      TRACE_STARTED: 3,
      TRACE_ENDED: 4,
    });
  },
  null,
);
/**
 * License: https://www.facebook.com/legal/license/Xw9uo4x52zr/
 */
__d(
  "Alea",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g() {
      __p && __p();
      var a = 4022871197,
        b = function (b) {
          __p && __p();
          b = b.toString();
          for (var c = 0; c < b.length; c++) {
            a += b.charCodeAt(c);
            var d = 0.02519603282416938 * a;
            a = d >>> 0;
            d -= a;
            d *= a;
            a = d >>> 0;
            d -= a;
            a += d * 4294967296;
          }
          return (a >>> 0) * 23283064365386963e-26;
        };
      b.version = "Mash 0.9";
      return b;
    }
    function a() {
      __p && __p();
      return (function (a) {
        __p && __p();
        var b = 0,
          c = 0,
          d = 0,
          e = 1;
        a.length === 0 && (a = [new Date()]);
        var f = new g();
        b = f(" ");
        c = f(" ");
        d = f(" ");
        for (var h = 0; h < a.length; h++)
          (b -= f(a[h])),
            b < 0 && (b += 1),
            (c -= f(a[h])),
            c < 0 && (c += 1),
            (d -= f(a[h])),
            d < 0 && (d += 1);
        f = null;
        h = function () {
          var a = 2091639 * b + e * 23283064365386963e-26;
          b = c;
          c = d;
          d = a - (e = a | 0);
          return d;
        };
        h.version = "Alea 0.9";
        h.args = a;
        return h;
      })(Array.prototype.slice.call(arguments));
    }
    e.exports = a;
  },
  null,
);
__d(
  "ArtilleryTraceIDUtils",
  ["Alea", "FBLogger", "ServerNonce"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      h = b("Alea")(b("ServerNonce").ServerNonce),
      i = function () {
        var a = 0,
          b = 0,
          c = "";
        for (var d = 10; d >= 0; d--)
          a < 6 && ((b = Math.floor(2147483648 * h())), (a = 32)),
            d === 0 && (b &= 7),
            (c = g.charAt(b & 63) + c),
            (b >>= 6),
            (a -= 6);
        return c;
      };
    a = {
      newTraceId: function () {
        var a;
        for (var c = 3; c > 0; c--) {
          a = i();
          if (a != this.getDummyId()) return a;
        }
        b("FBLogger")("FIXME").mustfix("failed to generate valid Fbtrace id");
        return this.getDummyId();
      },
      newObjectId: function () {
        return this.newTraceId();
      },
      getDummyId: function () {
        return "AAAAAAAAAAA";
      },
      traceIdToBucket: function (a) {
        a = a.charAt(a.length - 1);
        return g.indexOf(a) % 32;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "LogBuffer",
  ["CircularBuffer"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = a.setTimeout.nativeBackup || a.setTimeout,
      h = 5e3,
      i = {},
      j = {};
    c = {
      write: function (a, c) {
        var d = (i[a] = i[a] || new (b("CircularBuffer"))(h));
        d.write(c);
        j[a] &&
          j[a].forEach(function (a) {
            try {
              a(c);
            } catch (a) {}
          });
      },
      read: function (a) {
        if (!i[a]) return [];
        else return i[a].read();
      },
      tail: function (a, b) {
        __p && __p();
        if (typeof b !== "function") return;
        j[a] = j[a] || [];
        j[a].push(b);
        if (i[a]) {
          a = i[a];
          a.read().forEach(function (a) {
            try {
              b(a);
            } catch (a) {}
          });
        }
      },
      expand: function (a, c) {
        var d = i[a];
        d ? d.expand(c) : (i[a] = new (b("CircularBuffer"))(c));
      },
      clear: function (a) {
        i[a] &&
          g(function () {
            i[a].clear();
          }, 0);
      },
    };
    e.exports = c;
  },
  null,
);
__d(
  "Heartbeat",
  [
    "Env",
    "ExecutionContextObservers",
    "FBLogger",
    "LogBuffer",
    "OnDemandExecutionContextObserver",
    "TimeSlice",
    "performanceAbsoluteNow",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g;
    d = babelHelpers.inherits(c, b("OnDemandExecutionContextObserver"));
    g = d && d.prototype;
    function c() {
      var a, b;
      for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
        d[e] = arguments[e];
      return (
        (b = (a = g.constructor).call.apply(a, [this].concat(d))),
        (this.$HeartbeatObserver1 = null),
        (this.$HeartbeatObserver2 = 33),
        (this.$HeartbeatObserver3 = 60),
        (this.$HeartbeatObserver4 = null),
        (this.$HeartbeatObserver5 = null),
        (this.$HeartbeatObserver6 = {}),
        (this.$HeartbeatObserver7 = null),
        (this.$HeartbeatObserver8 = []),
        (this.$HeartbeatObserver9 = 1),
        (this.$HeartbeatObserver10 = null),
        b
      );
    }
    c.prototype.onNewContextCreatedWhileEnabled = function (a, b, c) {
      return null;
    };
    c.prototype.onBeforeContextStartedWhileEnabled = function (a, b, c) {
      return null;
    };
    c.prototype.onAfterContextStartedWhileEnabled = function (a, b, c, d) {
      return null;
    };
    c.prototype.onAfterContextEndedWhileEnabled = function (a, b, c, d) {
      b = a.absBeginTimeMs;
      c = a.absEndTimeMs;
      d = a.name;
      a = a.isRoot;
      a &&
        b != null &&
        c != null &&
        (this.$HeartbeatObserver6[d]
          ? (this.$HeartbeatObserver11({ type: "ignored_exec", timeMs: b }, !0),
            this.$HeartbeatObserver11({ type: "ignored_exec", timeMs: c }, !1))
          : (this.$HeartbeatObserver11({ type: "exec", timeMs: b }, !0),
            this.$HeartbeatObserver11({ type: "exec", timeMs: c }, !1)));
    };
    c.prototype.__getExpiryCallback = function () {
      var a = g.__getExpiryCallback.call(this),
        c = b("performanceAbsoluteNow")();
      this.$HeartbeatObserver8.push([c, a]);
      return function () {
        a(), this.$HeartbeatObserver12();
      }.bind(this);
    };
    c.prototype.onEnable = function () {
      __p && __p();
      var c = b("Env").timeslice_heartbeat_config || {};
      this.$HeartbeatObserver2 = c.pollIntervalMs || this.$HeartbeatObserver2;
      this.$HeartbeatObserver3 =
        c.idleGapThresholdMs || this.$HeartbeatObserver3;
      this.$HeartbeatObserver6 =
        c.ignoredTimesliceNames || this.$HeartbeatObserver6;
      c = a.setInterval.nativeBackup || a.setInterval;
      this.$HeartbeatObserver5 = c(
        this.$HeartbeatObserver13.bind(this),
        this.$HeartbeatObserver2,
      );
      c = b("performanceAbsoluteNow")();
      this.$HeartbeatObserver4 = { type: "beat", timeMs: c };
      this.$HeartbeatObserver7 = c + this.$HeartbeatObserver2;
      this.$HeartbeatObserver10 = c;
    };
    c.prototype.onDisable = function () {
      this.$HeartbeatObserver5 && clearInterval(this.$HeartbeatObserver5),
        (this.$HeartbeatObserver5 = null);
    };
    c.prototype.getBeforeID = function () {
      return b("ExecutionContextObservers").beforeIDs.HEARTBEAT;
    };
    c.prototype.getAfterID = function () {
      return b("ExecutionContextObservers").afterIDs.HEARTBEAT;
    };
    c.prototype.$HeartbeatObserver14 = function (event) {
      return event.type == "beat" || event.type == "ignored_exec";
    };
    c.prototype.$HeartbeatObserver11 = function (a, c) {
      __p && __p();
      if (this.$HeartbeatObserver4 == null) {
        b("FBLogger")("FIXME").mustfix("lastEvent should never be null");
        this.$HeartbeatObserver4 = a;
        return;
      }
      var d = this.$HeartbeatObserver4.timeMs,
        e = a.timeMs;
      if (c) {
        c = this.$HeartbeatObserver7 + this.$HeartbeatObserver3;
        c = e > c;
        if (this.$HeartbeatObserver4.type === "exec")
          a.type === "exec"
            ? this.$HeartbeatObserver15(
                d,
                e,
                c ? "likely_btwn_exec" : "btwn_exec",
              )
            : this.$HeartbeatObserver14(a) &&
              this.$HeartbeatObserver15(
                d,
                e,
                c ? "likely_post_exec" : "post_exec",
              );
        else if (this.$HeartbeatObserver14(this.$HeartbeatObserver4))
          if (a.type === "exec")
            this.$HeartbeatObserver15(d, e, c ? "likely_pre_exec" : "pre_exec");
          else if (this.$HeartbeatObserver14(a) && c) {
            c =
              a.type === "beat" ? "delayed_beat" : "delayed_beat_btwn_ignored";
            this.$HeartbeatObserver15(d, e, c);
          }
      }
      this.$HeartbeatObserver4 = a;
    };
    c.prototype.$HeartbeatObserver15 = function (a, c, d) {
      a < c &&
        b("LogBuffer").write("time_slice_heartbeat", {
          begin: a,
          end: c,
          id: this.$HeartbeatObserver9++,
          parentID: null,
          guard: "browser time: " + d,
          representsExecution: !1,
        });
    };
    c.prototype.$HeartbeatObserver13 = function () {
      var a = b("performanceAbsoluteNow")();
      this.$HeartbeatObserver12(a);
      this.$HeartbeatObserver11({ type: "beat", timeMs: a }, !0);
      this.$HeartbeatObserver7 = a + this.$HeartbeatObserver2;
    };
    c.prototype.$HeartbeatObserver12 = function (a) {
      __p && __p();
      a = a || b("performanceAbsoluteNow")();
      while (this.$HeartbeatObserver8.length > 0) {
        var c = this.$HeartbeatObserver8[0],
          d = c[0];
        c = c[1];
        if (a - d > i.MAX_SINGLE_INTEREST_TIME_MS)
          c(), this.$HeartbeatObserver8.shift();
        else break;
      }
      d = this.$HeartbeatObserver10;
      a - d > i.MAX_ENABLE_TO_DISABLE_TIME_MS && this.$HeartbeatObserver16();
    };
    c.prototype.$HeartbeatObserver16 = function () {
      __p && __p();
      for (
        var a = this.$HeartbeatObserver8,
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var d;
        if (b) {
          if (c >= a.length) break;
          d = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          d = c.value;
        }
        d = d;
        d[0];
        d = d[1];
        d();
      }
      this.$HeartbeatObserver8 = [];
    };
    var h = new c();
    b("TimeSlice").registerExecutionContextObserver(h);
    var i = {
      MAX_SINGLE_INTEREST_TIME_MS: 6e4,
      MAX_ENABLE_TO_DISABLE_TIME_MS: 4 * 6e4,
      get: function () {
        return h;
      },
      enableHeartbeat: function () {},
      disablePageHeartbeat: function () {},
    };
    e.exports = i;
  },
  3,
);
__d(
  "ArtilleryAsyncRequestTracingAnnotator",
  [
    "FBLogger",
    "IntervalTrackingBoundedBuffer",
    "ResourceTimingsStore",
    "ResourceTypes",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [1e3],
      h = new (b("IntervalTrackingBoundedBuffer"))(),
      i = "FB-ART-INFO",
      j = new Map();
    function k(a, b) {
      return b != null && b.artillery_join_data != null
        ? { uid: a, ids_for_timings: b.artillery_join_data }
        : null;
    }
    a = {
      startTracingWindow: function (a, b, c) {
        c === void 0 && (c = null);
        var d = h.open();
        c = c || g;
        j.set(a, { trace_id: a, interaction_name: b, tracing_levels: c });
        return {
          finishTracingWindow: function () {
            j["delete"](a);
            return d.close();
          },
        };
      },
      registerAsyncRequest: function (a, c) {
        if (j.size === 0) return function () {};
        else {
          var d = JSON.stringify(Array.from(j.values()));
          a.setRequestHeader(i, d);
          return function (a) {
            a = k(c, a);
            a != null
              ? h.pushElement(a)
              : (b("FBLogger")("ArtilleryAsyncRequestTracingAnnotator").debug(
                  "expected a payload back in the response from the server containing trace information, but nothing arrived.",
                ),
                b("ResourceTimingsStore")
                  .annotate(b("ResourceTypes").XHR, c)
                  .addStringAnnotation(
                    "join_error",
                    "join_data_expected_but_not_found",
                  ));
          };
        }
      },
      __active: function () {
        throw new Error("__active should only be available in __DEV__");
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "TimeSliceInteractionExtraSaver",
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      EXAMPLE_COMPONENT_SAVER: "example_component_saver",
      ADS_WAIT_TIME_SAVER: "ads_wait_time_saver",
      ADS_FLUX_PROFILER_SAVER: "ads_flux_profiler_saver",
      TIMESLICE_EXECUTION_SAVER: "timeslice_execution_saver",
      INTERACTION_ASYNC_REQUEST_JOIN_DATA:
        "interaction_async_request_join_data",
      RESOURCES_SAVER: "resources_saver",
      USER_TIMING_SAVER: "user_timing_saver",
    });
  },
  null,
);
__d(
  "InteractionAsyncRequestJoinDataSource",
  [
    "ArtilleryAsyncRequestTracingAnnotator",
    "FBLogger",
    "TimeSliceInteractionExtraSaver",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = {
      registerInteraction: function (a) {
        __p && __p();
        a.countDown();
        var c = a.traceID,
          d = a.name;
        if (c == null) {
          b("FBLogger")("InteractionAsyncRequestJoinDataSource").mustfix(
            "got a null trace_id for interaction " +
              d +
              ". Typically this indicates that only lite tracing was on, which this hook does not support",
          );
          return;
        }
        var e = b("ArtilleryAsyncRequestTracingAnnotator").startTracingWindow(
          c,
          d,
        );
        a.registerOnBeforeFinish(function (a) {
          var c = e.finishTracingWindow();
          a.recordWithExtraSaver(
            b("TimeSliceInteractionExtraSaver")
              .INTERACTION_ASYNC_REQUEST_JOIN_DATA,
            "entries",
            c,
          );
        });
        a.registerOnCleanup(function () {
          e.finishTracingWindow();
        });
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "Random",
  ["Alea", "ServerNonce"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 4294967296;
    a = b("ServerNonce").ServerNonce;
    var h = b("Alea")(a),
      i = {
        random: function () {
          if (window !== undefined && window.Uint32Array !== undefined) {
            var a = new window.Uint32Array(1),
              b = window.crypto || window.msCrypto;
            if (b && b.getRandomValues) {
              b.getRandomValues(a);
              return a[0] / g;
            }
          }
          return h();
        },
        uint32: function () {
          return Math.floor(this.random() * g);
        },
        coinflip: function (a) {
          if (a === 0) return !1;
          return a <= 1 ? !0 : i.random() * a <= 1;
        },
      };
    e.exports = i;
  },
  null,
);
__d(
  "TimeSliceExecutionLogger",
  [
    "ExecutionContextObservers",
    "IntervalTrackingBoundedBuffer",
    "OnDemandExecutionContextObserver",
    "TimeSlice",
    "TimingAnnotations",
    "performanceAbsoluteNow",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g,
      h = 1e4,
      i = { BEGIN: "b", END: "e" },
      j = new (b("TimingAnnotations"))(),
      k;
    c = babelHelpers.inherits(a, b("OnDemandExecutionContextObserver"));
    g = c && c.prototype;
    function a() {
      var a, c;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
        e[f] = arguments[f];
      return (
        (c = (a = g.constructor).call.apply(a, [this].concat(e))),
        (this.$TimeSliceExecutionLogger1 = new (b(
          "IntervalTrackingBoundedBuffer",
        ))(h)),
        c
      );
    }
    a.prototype.onNewContextCreatedWhileEnabled = function (a, c, d) {
      if (a) return b("performanceAbsoluteNow")();
      else return null;
    };
    a.prototype.onBeforeContextStartedWhileEnabled = function (a, b, c) {
      c = { type: i.BEGIN, ts: a.absBeginTimeMs };
      b !== null && (c.creation = b);
      this.$TimeSliceExecutionLogger1.pushElement(c);
      a = k;
      k = null;
      return a;
    };
    a.prototype.onAfterContextStartedWhileEnabled = function (a, b, c, d) {
      return c;
    };
    a.prototype.onAfterContextEndedWhileEnabled = function (a, b, c, d) {
      b = a.absEndTimeMs;
      d = { type: i.END, ts: b, name: a.name, id: a.contextID };
      k && (d.annotations = k.prepareToSend());
      this.$TimeSliceExecutionLogger1.pushElement(d);
      k = c;
    };
    a.prototype.annotateCurrentExecution = function () {
      if (!this.isEnabled()) return j;
      k == null && (k = new (b("TimingAnnotations"))());
      return k;
    };
    a.prototype.getBeforeID = function () {
      return b("ExecutionContextObservers").beforeIDs
        .TIMESLICE_EXECUTION_LOGGER;
    };
    a.prototype.getAfterID = function () {
      return b("ExecutionContextObservers").afterIDs.TIMESLICE_EXECUTION_LOGGER;
    };
    a.prototype.getBuffer = function () {
      return this.$TimeSliceExecutionLogger1;
    };
    d = new a();
    b("TimeSlice").registerExecutionContextObserver(d);
    e.exports = d;
  },
  null,
);
__d(
  "TimeSliceExecutionDataSource",
  [
    "TimeSliceExecutionLogger",
    "TimeSliceInteractionExtraSaver",
    "performanceAbsoluteNow",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = {
      registerInteraction: function (a) {
        a.countDown();
        var c = b("performanceAbsoluteNow")(),
          d = b("TimeSliceExecutionLogger").getBuffer().open(),
          e = b("TimeSliceExecutionLogger").expressInterest();
        a.registerOnBeforeFinish(function (a) {
          e();
          var f = d.close(),
            g = d.hasOverflown();
          a.recordWithExtraSaver(
            b("TimeSliceInteractionExtraSaver").TIMESLICE_EXECUTION_SAVER,
            "entries",
            { startTime: c, entries: f, hasOverflown: g },
          );
        });
        a.registerOnCleanup(function () {
          e(), d.close();
        });
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "TimeSliceInteractionBootloadForPost",
  ["Bootloader"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      b("Bootloader").loadModules(
        [
          "Banzai",
          "BanzaiStream",
          "BanzaiODS",
          "ResourceTimingBootloaderHelper",
          "TimeSliceHelper",
          "SnappyCompressUtil",
          "PerfXSharedFields",
        ],
        a,
        "TimeSliceInteractionBootloadForPost",
      );
    }
    e.exports = a;
  },
  null,
);
__d(
  "TimeSliceInteractionReliability",
  ["ifRequired"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = "timeslice_interactions",
      h = !0,
      i = new Map();
    function j(a, b, c) {
      return b + ":" + c + ":" + a;
    }
    function a(a, c, d) {
      a = j(a, c, d);
      var f = b("ifRequired")("BanzaiODS", function (a) {
        return a;
      });
      if (!f) {
        c = i.get(a) || 0;
        i.set(a, c + 1);
      } else
        h &&
          (i.forEach(function (a, b) {
            return f.bumpEntityKey(g, b, a);
          }),
          (h = !1)),
          f.bumpEntityKey(g, a, 1);
    }
    e.exports = { bumpLifecycleCounter: a };
  },
  null,
);
__d(
  "compactArray",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = [];
      for (var c = 0; c < a.length; ++c) {
        var d = a[c];
        d != null && b.push(d);
      }
      return b;
    }
    e.exports = a;
  },
  null,
);
__d(
  "performanceNavigationStart",
  ["performance"],
  function (a, b, c, d, e, f) {
    __p && __p();
    if (b("performance").now)
      if (b("performance").timing && b("performance").timing.navigationStart)
        a = function () {
          return b("performance").timing.navigationStart;
        };
      else if (typeof window._cstart === "number")
        a = function () {
          return window._cstart;
        };
      else {
        var g = Date.now();
        a = function () {
          return g;
        };
      }
    else
      a = function () {
        return 0;
      };
    e.exports = a;
  },
  null,
);
__d(
  "nativeRequestAnimationFrame",
  [],
  function (a, b, c, d, e, f) {
    b =
      (a.requestAnimationFrame && a.requestAnimationFrame.nativeBackup) ||
      a.requestAnimationFrame ||
      a.webkitRequestAnimationFrame ||
      a.mozRequestAnimationFrame ||
      a.oRequestAnimationFrame ||
      a.msRequestAnimationFrame;
    e.exports = b;
  },
  18,
);
__d(
  "requestAnimationFramePolyfill",
  ["emptyFunction", "nativeRequestAnimationFrame"],
  function (a, b, c, d, e, f) {
    var g = 0;
    c =
      b("nativeRequestAnimationFrame") ||
      function (b) {
        var c = Date.now(),
          d = Math.max(0, 16 - (c - g));
        g = c + d;
        return a.setTimeout(function () {
          b(Date.now());
        }, d);
      };
    c(b("emptyFunction"));
    e.exports = c;
  },
  18,
);
__d(
  "IdleCallbackImplementation",
  ["performanceNow", "requestAnimationFramePolyfill"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = [],
      h = 0,
      i = 0,
      j = -1,
      k = !1,
      l = 1e3 / 60,
      m = 2;
    function n(a) {
      return a;
    }
    function o(a) {
      return a;
    }
    function c(b, c) {
      var d = i++;
      g[d] = b;
      q();
      if (c != null && c.timeout > 0) {
        var e = n(d);
        a.setTimeout(function () {
          return w(e);
        }, c.timeout);
      }
      return n(d);
    }
    function p(a) {
      a = o(a);
      g[a] = null;
    }
    function q() {
      k ||
        ((k = !0),
        b("requestAnimationFramePolyfill")(function (a) {
          (k = !1), s(b("performanceNow")() - a);
        }));
    }
    function r(a) {
      var b = l - m;
      if (a < b) return b - a;
      a = a % l;
      if (a > b || a < m) return 0;
      else return b - a;
    }
    function s(a) {
      __p && __p();
      var c = b("performanceNow")();
      if (c > j) {
        a = r(a);
        if (a > 0) {
          c = c + a;
          v(c);
          j = c;
        }
      }
      t() && q();
    }
    function t() {
      return h < g.length;
    }
    function u() {
      while (t()) {
        var a = g[h];
        h++;
        if (a) return a;
      }
    }
    function v(a) {
      var c;
      while (b("performanceNow")() < a && (c = u())) c(new x(a));
    }
    function w(a) {
      var b = o(a);
      b = g[b];
      b && (p(a), b(new x(null)));
    }
    function x(a) {
      "use strict";
      (this.didTimeout = a == null), (this.$1 = a);
    }
    x.prototype.timeRemaining = function () {
      "use strict";
      var a = this.$1;
      if (a != null) {
        var c = b("performanceNow")();
        if (c < a) return a - c;
      }
      return 0;
    };
    e.exports = { requestIdleCallback: c, cancelIdleCallback: p };
  },
  null,
);
__d(
  "requestIdleCallbackAcrossTransitions",
  ["IdleCallbackImplementation", "TimerStorage", "TimeSlice"],
  function (a, b, c, d, e, f) {
    var g =
        a.requestIdleCallback ||
        b("IdleCallbackImplementation").requestIdleCallback,
      h = b("TimerStorage").IDLE_CALLBACK;
    e.exports = function (c, d) {
      c = b("TimeSlice").guard(c, "requestIdleCallback", {
        propagationType: b("TimeSlice").PropagationType.CONTINUATION,
        registerCallStack: !0,
      });
      d = g.call(a, c, d);
      var e = h + String(d);
      b("TimeSlice").registerForCancelling(e, c);
      return d;
    };
  },
  null,
);
__d(
  "TimeSliceInteraction",
  [
    "invariant",
    "Arbiter",
    "ArtilleryComponentSaverOptions",
    "ArtilleryJSPointTypes",
    "ArtilleryTraceIDUtils",
    "Bootloader",
    "CircularBuffer",
    "ErrorUtils",
    "FBLogger",
    "Heartbeat",
    "InteractionAsyncRequestJoinDataSource",
    "ProfilingCounters",
    "ProfilingCountersStore",
    "Random",
    "ResourceTimingsStore",
    "ResourceTypes",
    "TimeSlice",
    "TimeSliceExecutionDataSource",
    "TimeSliceInteractionBootloadForPost",
    "TimeSliceInteractionExtraSaver",
    "TimeSliceInteractionReliability",
    "TimeSliceInteractionSV",
    "TimingAnnotations",
    "Visibility",
    "compactArray",
    "nullthrows",
    "performance",
    "performanceAbsoluteNow",
    "performanceNavigationStart",
    "requestIdleCallbackAcrossTransitions",
    "requireWeak",
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    b("requireWeak")("AsyncProfiler", function (a) {
      h = a;
    });
    var i;
    b("requireWeak")("ArtilleryUserTimingProfiler", function (a) {
      i = a;
    });
    var j = { pointGroup: null, type: null, isPointOfInterest: null };
    d = 250;
    var k = new (b("CircularBuffer"))(d);
    new Map();
    f = 100;
    var l = new (b("CircularBuffer"))(f),
      m = new Map(),
      n = !1,
      o = null;
    b("Arbiter").subscribe("perf_nub_interaction_trace", function (a, b) {
      if (o) return;
      n = !0;
    });
    var p = new (b("TimingAnnotations").EmptyTimingAnnotations)(),
      q = new (b("TimingAnnotations").EmptyTraceTimingAnnotations)(),
      r = "artillery_javascript_actions",
      s = "artillery_javascript_lite_actions";
    function c(a) {
      var b = "visibility_state_" + a,
        c = { isPointOfInterest: !0, pointGroup: "visibility_state_changes" };
      return function () {
        return z.informGlobally(b, c);
      };
    }
    b("Visibility") &&
      b("Visibility").addListener &&
      (b("Visibility").addListener(b("Visibility").HIDDEN, c("hidden")),
      b("Visibility").addListener(b("Visibility").VISIBLE, c("visible")));
    function t(a) {
      if (b("Visibility")) {
        var c = b("Visibility").isHidden()
          ? b("Visibility").HIDDEN
          : b("Visibility").VISIBLE;
        a.inform("visibility_state_" + c, {
          pointGroup: "visibility_state_changes",
        });
      }
    }
    function u(a) {
      return n && a === "Event";
    }
    function v(a) {
      __p && __p();
      var c = b("TimeSliceInteractionSV").interaction_to_coinflip,
        d = b("TimeSliceInteractionSV").interaction_to_lite_coinflip,
        e;
      u(a)
        ? (e = 1)
        : (e = Object.prototype.hasOwnProperty.call(c, a)
            ? c[a]
            : b("TimeSliceInteractionSV").default_rate);
      c = Object.prototype.hasOwnProperty.call(d, a)
        ? d[a]
        : b("TimeSliceInteractionSV").lite_default_rate;
      d = new Set();
      b("Random").coinflip(c) && d.add("lite");
      b("Random").coinflip(e) && d.add("full");
      a = 0;
      d.has("full") ? (a = 1 / e) : e === 0 ? (a = 0) : (a = 1 - 1 / e);
      e = 0;
      d.has("lite") && (e = 1 / c);
      return { modes: d, probability: a, liteProbability: e };
    }
    function w() {
      return m.size !== 0;
    }
    function x(a) {
      return babelHelpers["extends"]({}, a, {
        annotations: a.annotations.prepareToSend(),
      });
    }
    function y(a, c) {
      __p && __p();
      c = b("ProfilingCountersStore").getNestedTotalsByAttributions(c, a);
      a = c.attributed;
      c = c.unattributed;
      var d = {};
      a = Object.entries(a);
      for (var e = 0; e < a.length; e++) {
        var f = a[e],
          g = f[0];
        f = f[1];
        d["internal:" + g] = f;
      }
      g = Object.entries(c);
      for (var f = 0; f < g.length; f++) {
        a = g[f];
        e = a[0];
        c = a[1];
        d["external:" + e] = c;
      }
      return d;
    }
    z.create = function (a, b, c) {
      b === void 0 && (b = []);
      c === void 0 && (c = !1);
      a = new z(a, b, c);
      a.trace().addStringAnnotation("initiatorType", "manually_ended");
      return a;
    };
    z.informGlobally = function (a, c) {
      "use strict";
      if (!w()) return p;
      var d = b("performanceAbsoluteNow")(),
        e = new (b("TimingAnnotations"))(),
        f = babelHelpers["extends"](
          {
            ts: d,
            name: a,
            annotations: e,
            rawStackTrace: (c && c.rawStackTrace) || null,
            guardStack: b("TimeSlice").getGuardNameStack(),
          },
          j,
          c,
        );
      e.addStringAnnotation("global_point", "1");
      m.forEach(function (a) {
        return a.push(f);
      });
      return e;
    };
    z.informOnPage = function (a, c) {
      "use strict";
      var d = b("performanceAbsoluteNow")(),
        e = new (b("TimingAnnotations"))();
      d = babelHelpers["extends"](
        {
          ts: d,
          name: a,
          annotations: e,
          rawStackTrace: (c && c.rawStackTrace) || null,
          guardStack: [],
        },
        j,
        c,
      );
      k.write(d);
      return e;
    };
    function z(a, c, d) {
      __p && __p();
      c === void 0 && (c = []);
      d === void 0 && (d = !1);
      this.$2 = null;
      this.$4 = !0;
      this.$5 = null;
      this.$6 = [];
      this.$7 = !1;
      this.$8 = null;
      this.$12 = [];
      this.$13 = [];
      this.$14 = [];
      this.$15 = [];
      this.$16 = new (b("TimingAnnotations").TraceTimingAnnotations)();
      this.$17 = new Map();
      this.$20 = null;
      this.$21 = 1;
      this.$24 = 1;
      this.$28 = !0;
      this.$29 = {};
      var e = v(a),
        f = e.modes,
        g = e.probability;
      e = e.liteProbability;
      this.$18 = f;
      this.$1 = a;
      this.$22 = g;
      this.$23 = e;
      this.$19 = d
        ? b("performanceNavigationStart")()
        : b("performanceAbsoluteNow")();
      this.$27 = new Map();
      this.$11 = new Set();
      g = this.inform("trace_started", {
        type: b("ArtilleryJSPointTypes").TRACE_STARTED,
        pointGroup: "e2e",
        isPointOfInterest: !0,
        ts: this.$19,
      });
      b("performance") &&
        b("performance").now &&
        g.addStringAnnotation(
          "offset_from_start_of_req_ms",
          b("performance").now().toString(),
        );
      t(this);
      m.set(this, []);
      if (this.isEnabledForMode("full")) {
        b("TimeSliceInteractionSV").enable_heartbeat &&
          (this.$5 = b("Heartbeat").get().expressInterest());
        h && h.enabled() && (this.$9 = h.startRecording());
        e = b("TimeSliceInteractionSV").user_timing_coinflip || 0;
        i && e && b("Random").coinflip(e) && (this.$10 = i.startRecording());
        this.$3 = b("ArtilleryTraceIDUtils").newTraceId();
      }
      f.has("full") &&
        l.write({ interaction: this, ts: b("performanceAbsoluteNow")() });
      if (f.size === 0) this.disable(!0);
      else {
        if (this.isEnabledForMode("full")) {
          b("TimeSliceInteractionSV").enable_heartbeat &&
            (this.$5 = b("Heartbeat").get().expressInterest());
          b("TimeSliceInteractionSV").force_async_request_tracing_on &&
            c.push(b("InteractionAsyncRequestJoinDataSource"));
          d = b("ProfilingCounters").getObserver().expressInterest();
          this.$14.push(d);
          u(a) && ((o = b("nullthrows")(this.$3)), (n = !1));
          this.$25 = b("ProfilingCountersStore").getInstance().open();
          this.$26 = b("TimeSlice").getBuffer().open();
          this.$14.push(
            function () {
              this.$26 && this.$26.close(), this.$25 && this.$25.close();
            }.bind(this),
          );
        }
        var j = {
          trace: function () {
            return this.trace();
          }.bind(this),
          countDown: function () {
            return this.countDown();
          }.bind(this),
          forceFinish: function () {
            return this.finish(!0);
          }.bind(this),
          registerOnBeforeFinish: function (a) {
            return this.registerOnBeforeFinish(a);
          }.bind(this),
          registerOnCleanup: function (a) {
            return this.registerOnCleanUp(a);
          }.bind(this),
          traceID: this.$3,
          name: a,
        };
        b("TimeSliceInteractionSV").also_record_new_timeslice_format &&
          c.push(b("TimeSliceExecutionDataSource"));
        var k = b("compactArray")(
          c.map(
            function (a) {
              this.$24++;
              return a.registerInteraction(j);
            }.bind(this),
          ),
        );
        this.$14.push(function () {
          k.forEach(function (a) {
            return a.remove();
          });
        });
        this.$13.push(
          function () {
            this.trace().addStringAnnotation("wait_for_count", "" + this.$24);
          }.bind(this),
        );
      }
      for (
        var g = f,
          e = Array.isArray(g),
          d = 0,
          g = e
            ? g
            : g[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        if (e) {
          if (d >= g.length) break;
          c = g[d++];
        } else {
          d = g.next();
          if (d.done) break;
          c = d.value;
        }
        f = c;
        b("TimeSliceInteractionReliability").bumpLifecycleCounter(
          "starting",
          a,
          f,
        );
      }
    }
    z.prototype.recordWithExtraSaver = function (a, b, c) {
      "use strict";
      if (this.isEnabled()) {
        var d = this.$27.get(a) || {};
        b != null && c != null && (d[b] = c);
        this.$27.set(a, d);
      }
      return this;
    };
    z.prototype.countDown = function () {
      "use strict";
      this.$24--,
        this.$24 === 0
          ? this.$20 && this.$20()
          : this.$24 < 0 &&
            b("FBLogger")("FIXME").mustfix("some hook counted down twice");
    };
    z.prototype.countUp = function () {
      "use strict";
      this.$24 > 0
        ? ++this.$24
        : b("FBLogger")("FIXME").mustfix(
            "Attempting to countUp on finished interaction",
          );
    };
    z.prototype.inform = function (a, c) {
      "use strict";
      var d = c != null && c.isPointOfInterest;
      if (
        !this.isEnabledForMode("full") &&
        !(this.isEnabledForMode("lite") && d)
      )
        return p;
      d = (c && c.ts) || b("performanceAbsoluteNow")();
      var e = new (b("TimingAnnotations"))(),
        f = this.isEnabledForMode("full")
          ? b("TimeSlice").getGuardNameStack()
          : [];
      this.$12.push(
        babelHelpers["extends"](
          {
            ts: d,
            name: a,
            annotations: e,
            rawStackTrace: (c && c.rawStackTrace) || null,
            guardStack: f,
          },
          j,
          c,
        ),
      );
      return e;
    };
    z.prototype.informPointWithOverride = function (a, c) {
      "use strict";
      __p && __p();
      var d = b("performanceAbsoluteNow")(),
        e = c != null && c.isPointOfInterest;
      if (
        (!this.isEnabledForMode("full") &&
          !(this.isEnabledForMode("lite") && e)) ||
        !this.$29
      )
        return p;
      e = this.isEnabledForMode("full")
        ? b("TimeSlice").getGuardNameStack()
        : [];
      var f = this.$29[a];
      c && (c.rawStackTrace = c.rawStackTrace || null);
      if (f) (f.ts = d), (f.guardStack = e), Object.assign(f, c || {});
      else {
        f = new (b("TimingAnnotations"))();
        this.$29[a] = babelHelpers["extends"](
          {
            ts: d,
            name: a,
            annotations: f,
            rawStackTrace: (c && c.rawStackTrace) || null,
            guardStack: e,
          },
          j,
          c,
        );
      }
      return this.$29[a].annotations;
    };
    z.prototype.invokeWithProfiling = function (c, d) {
      "use strict";
      if (!this.isEnabledForMode("full")) return d();
      var e = this.inform("start_" + c);
      this.$6.push(e);
      e = b("ErrorUtils").applyWithGuard(d, a, null, null, c);
      this.inform("finished_" + c);
      this.$6.pop();
      return e;
    };
    z.prototype.getCurrentInvocation = function () {
      "use strict";
      if (!this.isEnabledForMode("full")) return p;
      else if (this.$6.length < 1) return p;
      else return this.$6[this.$6.length - 1];
    };
    z.prototype.finish = function (a) {
      "use strict";
      __p && __p();
      if (!this.$4) return;
      if (a && this.$20) {
        this.$20();
        return;
      }
      if (this.$7)
        b("FBLogger")("FIXME").mustfix("Trace was already marked as ended");
      else {
        t(this);
        this.$15.forEach(
          function (a) {
            return a(this);
          }.bind(this),
        );
        for (
          var c = this.$18,
            d = Array.isArray(c),
            e = 0,
            c = d
              ? c
              : c[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var f;
          if (d) {
            if (e >= c.length) break;
            f = c[e++];
          } else {
            e = c.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          b("TimeSliceInteractionReliability").bumpLifecycleCounter(
            "finishing",
            this.$1,
            f,
          );
        }
        this.inform("trace_ended", {
          type: b("ArtilleryJSPointTypes").TRACE_ENDED,
          pointGroup: "e2e",
          isPointOfInterest: !0,
        });
        var i = this.isEnabledForMode("lite"),
          j = this.isEnabledForMode("full");
        j &&
          this.trace().addStringAnnotation(
            "weight",
            "" + 1 / (this.$21 * this.$22),
          );
        i &&
          this.trace().addStringAnnotation(
            "lite_weight",
            "" + 1 / (this.$21 * this.$23),
          );
        navigator &&
          navigator.connection &&
          (typeof navigator.connection.downlink === "number" &&
            this.trace().addStringAnnotation(
              "browser_downlink_megabits",
              navigator.connection.downlink.toString(),
            ),
          typeof navigator.connection.rtt === "number" &&
            this.trace().addStringAnnotation(
              "browser_rtt_ms",
              navigator.connection.rtt.toString(),
            ),
          typeof navigator.connection.effectiveType === "string" &&
            this.trace().addStringAnnotation(
              "browser_effective_connection_type",
              navigator.connection.effectiveType,
            ));
        var k = b("performanceAbsoluteNow")(),
          l = m.get(this);
        m["delete"](this);
        this.$5 && this.$5();
        var n = this.$25 != null ? this.$25.close() : [],
          p = this.$26 != null ? this.$26.close() : [],
          q = this.$26 != null ? this.$26.hasOverflown() : !1,
          r = this.$26 != null ? this.$26.getOverflowSize() : 0,
          s = this.$10 != null ? this.$10.close() : null;
        if (i || j) {
          var u = function (a) {
              i && this.$30(l),
                j &&
                  (s != null &&
                    this.recordWithExtraSaver(
                      b("TimeSliceInteractionExtraSaver").USER_TIMING_SAVER,
                      "data",
                      s,
                    ),
                  this.$31(k, l, a, n, p, q, r)),
                o &&
                  o === this.$3 &&
                  (b("Arbiter").inform("time_slice_trace_posted", {
                    traceId: this.$3,
                  }),
                  (o = null)),
                this.$32();
            }.bind(this),
            v = u;
          if (this.$9 !== undefined) {
            h || g(0);
            var w = h.stopRecording(this.$9);
            v = function () {
              w["catch"](function (a) {
                setTimeout(function () {
                  throw a;
                }, 0);
              }).then(u);
            };
          }
          a
            ? v()
            : (this.$20 = function () {
                return b("requestIdleCallbackAcrossTransitions")(function () {
                  return v();
                });
              });
        }
        this.countDown();
        this.$7 = !0;
      }
    };
    z.prototype.registerOnBeforeSend = function (a) {
      "use strict";
      this.$4 && this.$13.push(a);
      return this;
    };
    z.prototype.registerOnBeforeFinish = function (a) {
      "use strict";
      this.$4 && this.$15.push(a);
      return this;
    };
    z.prototype.registerOnCleanUp = function (a) {
      "use strict";
      this.$4 && this.$14.push(a);
      return this;
    };
    z.prototype.trace = function () {
      "use strict";
      return !this.$4 ? q : this.$16;
    };
    z.prototype.getTraceID = function () {
      "use strict";
      return this.$4 ? this.$3 : null;
    };
    z.prototype.setExtraSampleRate = function (a) {
      "use strict";
      this.$21 = a;
      return this;
    };
    z.prototype.isEnabled = function () {
      "use strict";
      return this.$4;
    };
    z.prototype.disable = function (a) {
      __p && __p();
      a === void 0 && (a = !1);
      m["delete"](this);
      this.$5 && this.$5();
      this.$9 !== undefined && (h || g(0), h.stopRecording(this.$9));
      if (!a && this.$4)
        for (
          var a = this.$18,
            c = Array.isArray(a),
            d = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= a.length) break;
            e = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          b("TimeSliceInteractionReliability").bumpLifecycleCounter(
            "disabled",
            this.$1,
            e,
          );
        }
      this.$4 = !1;
      this.$32();
    };
    z.prototype.disableBanzaiStream = function () {
      "use strict";
      this.$28 = !1;
    };
    z.getPageLoadPoints = function (a, b) {
      "use strict";
      var c = [],
        d = k.read();
      for (var e = d.length - 1; e >= 0; e--) {
        var f = d[e];
        if (f.ts < a) return c;
        else f.ts < b && c.push(x(f));
      }
      return c;
    };
    z.getInteractionIDsBetween = function (a, b) {
      "use strict";
      __p && __p();
      var c = [],
        d = l.read();
      for (var e = d.length - 1; e >= 0; e--) {
        var f = d[e],
          g = f.interaction;
        f = f.ts;
        g = g.getTraceID();
        if (f < a) return c;
        else f < b && g != null && c.push(g);
      }
      return c;
    };
    z.prototype.receiveAsyncResponse = function (a) {
      "use strict";
      a != null && a.artillery_info && this.isEnabledForMode("full")
        ? this.$33(a.artillery_info.artillery_join_points)
        : this.disable();
      return this;
    };
    z.prototype.addArtilleryIDHeader = function (a) {
      "use strict";
      this.$4 &&
        a.setRequestHeader(
          "X-ARTILLERY-REQ-METADATA",
          JSON.stringify({ trace_id: this.$3 }),
        );
      return this;
    };
    z.prototype.forResourceRequest = function (a) {
      "use strict";
      __p && __p();
      if (!this.isEnabledForMode("full")) return p;
      else {
        var c = this.$17.get(a);
        if (c) return c;
        else {
          c = new (b("TimingAnnotations"))();
          this.$17.set(a, c);
          return c;
        }
      }
    };
    z.prototype.addProfilingCounterAttribution = function (a) {
      "use strict";
      this.$11.add(a);
      return this;
    };
    z.prototype.$33 = function (a) {
      "use strict";
      if (!this.isEnabledForMode("full")) return this;
      this.$2 = a;
      return this;
    };
    z.prototype.$30 = function (a) {
      "use strict";
      __p && __p();
      this.$13.forEach(function (a) {
        return a();
      });
      this.$13 = [];
      if (!this.isEnabled()) return;
      var c = [];
      a = this.$12.concat(Object.values(this.$29)).concat(a || []);
      a.forEach(function (a) {
        a.isPointOfInterest &&
          c.push({
            ts: a.ts,
            name: a.name,
            pointGroup: a.pointGroup,
            annotations: a.annotations.prepareToSend(),
          });
      });
      var d = {
        trace_id: this.$3,
        action_name: this.$1,
        trace_annotations: this.$16.prepareToSend(),
        points: c,
      };
      b("Bootloader").loadModules(
        ["Banzai", "BanzaiODS", "PerfXSharedFields"],
        function (a, c, e) {
          b("TimeSliceInteractionReliability").bumpLifecycleCounter(
            "posting",
            this.$1,
            "lite",
          ),
            a.post(s, e.addCommonValues(d), a.VITAL);
        }.bind(this),
        "TimeSliceInteraction",
      );
    };
    z.prototype.$31 = function (a, c, d, e, f, g, h) {
      "use strict";
      __p && __p();
      this.$13.forEach(function (a) {
        return a();
      });
      this.$13 = [];
      if (!this.isEnabled()) return;
      c = c != null ? this.$12.concat(c) : this.$12;
      c.push.apply(c, Object.values(this.$29));
      var i = c.map(x),
        j = Array.from(this.$11.keys()),
        k = new Map(this.$27.entries());
      b("TimeSliceInteractionBootloadForPost")(
        function (c, l, m, n, o, p, q) {
          __p && __p();
          b("TimeSliceInteractionReliability").bumpLifecycleCounter(
            "posting",
            this.$1,
            "full",
          );
          m = o.getMetrics(
            this.$19,
            a,
            b("TimeSliceInteractionSV").maxBlockMergeDuration,
            b("TimeSliceInteractionSV").maxBlockMergeDistance,
            f,
            b("ProfilingCountersStore").toMap(e),
            {
              includeRefTreeIDs: !0,
              counterFunction: function (a) {
                return y(j, a);
              },
            },
          );
          this.$16.addStringAnnotation(
            "overflown_timeslice_buffer",
            g ? "1" : "0",
          );
          this.$16.addStringAnnotation(
            "overflown_timeslice_entry_count",
            "" + h,
          );
          if (
            b("performance") &&
            b("performance").timing &&
            b("performance").timing.navigationStart
          ) {
            var s = f.length > 0 ? f[0].begin : null;
            n = n.getMetrics(
              s != null && s < this.$19 ? s : this.$19,
              !1,
              null,
              a,
              !0,
              !0,
            );
            s = n.data;
            n = n.diagnostics;
            n &&
              (this.$16.addStringAnnotation(
                "number_of_valid_entries",
                n.numValidEntries.toString(),
              ),
              this.$16.addStringAnnotation(
                "number_of_success_metrics",
                n.numSuccessfulMetrics.toString(),
              ));
            Object.values(s).forEach(
              function (a) {
                return a.forEach(
                  function (a) {
                    var c = a.desc,
                      d = a.type,
                      e = this.$17.get(c);
                    e = e && e.prepareToSend();
                    if (
                      d === b("ResourceTypes").JS ||
                      d === b("ResourceTypes").CSS ||
                      d === b("ResourceTypes").XHR
                    ) {
                      d = b("ResourceTimingsStore").getAnnotationsFor(d, c);
                      e = b("TimingAnnotations").combine(e, d);
                    }
                    a.annotations = e;
                  }.bind(this),
                );
              }.bind(this),
            );
          } else s = {};
          var t = {};
          k.forEach(function (a, c) {
            __p && __p();
            var d = b("ArtilleryComponentSaverOptions").options[c];
            d = !!(d && d.shouldCompress);
            if (d) {
              d = p.compressStringToSnappy(JSON.stringify(a));
              if (d != null) {
                t[c] = { data: d, isCompressed: !0 };
                return;
              }
            }
            t[c] = { isCompressed: !1, data: a };
          });
          n = {
            trace_id: this.$3,
            join_points: this.$2,
            action_name: this.$1,
            points: i,
            traceAnnotations: this.$16.prepareToSend(),
            timeslices: o.formatMetricsForTransport(m),
            resource_timings: s,
            sampler_profile: d,
            extra_savers: t,
          };
          n = q.addCommonValues(n);
          b("TimeSliceInteractionSV").compression_enabled &&
            (n = this.$34(p, n));
          o = b("TimeSliceInteractionSV").banzai_stream_coinflip || 0;
          this.$28 &&
          b("TimeSliceInteractionSV").enable_banzai_stream &&
          b("Random").coinflip(o)
            ? l.post(r, n, { compress: !1 })
            : c.post(r, n, { compress: !1 });
        }.bind(this),
      );
    };
    z.prototype.$34 = function (a, b) {
      "use strict";
      __p && __p();
      var c = ["points", "timeslices", "resource_timings", "sampler_profile"],
        d = {};
      c.forEach(function (c) {
        var e = b[c];
        if (e == null) return;
        e = JSON.stringify(e);
        e = a.compressStringToSnappy(e);
        e !== null && ((d[c] = e), delete b[c]);
      });
      return babelHelpers["extends"]({}, b, { miny: d });
    };
    z.prototype.$32 = function () {
      "use strict";
      delete this.$12,
        (this.$13 = []),
        this.$14 &&
          (this.$14.forEach(function (a) {
            return a();
          }),
          (this.$14 = [])),
        (this.$15 = []),
        delete this.$29,
        delete this.$20,
        delete this.$27;
    };
    z.prototype.isEnabledForMode = function (a) {
      "use strict";
      return this.$4 && !this.$7 && this.$18.has(a);
    };
    z.prototype.isDone = function () {
      "use strict";
      return this.$7;
    };
    z.getAllActiveInteractions = function () {
      "use strict";
      return m.keys();
    };
    e.exports = z;
  },
  null,
);
__d(
  "TimeSliceReferenceCounting",
  [
    "ExecutionContextObservers",
    "OnDemandExecutionContextObserver",
    "ProfilingCounters",
    "TimeSlice",
    "requestIdleCallbackAcrossTransitions",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = [],
      i = [];
    c = null;
    var j = null,
      k = 1,
      l = [];
    function m(a) {
      if (a == null || a.length === 0) return;
      a = a.filter(function (a) {
        return --a.openReferenceCount == 0;
      });
      a.length > 0 &&
        (l.push.apply(l, a),
        b("requestIdleCallbackAcrossTransitions")(
          b("TimeSlice").guard(n, "invoking onAllChildrenFinished callbacks", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN,
          }),
        ));
    }
    function n() {
      while (l.length) l.pop().finish();
    }
    function o(a, b) {
      "use strict";
      (this.$2 = o.$1++),
        (this.$3 = a),
        (this.$4 = []),
        (this.$5 = !1),
        (this.$6 = b),
        (this.openReferenceCount = 1),
        (this.timeslices = [a]);
    }
    o.prototype.isProfiling = function () {
      "use strict";
      return this.$6;
    };
    o.prototype.addCallback = function (a) {
      "use strict";
      !this.$5 ? this.$4.push(a) : a();
      return this;
    };
    o.prototype.finish = function () {
      "use strict";
      this.$5 ||
        ((this.$5 = !0),
        this.$4.forEach(function (a) {
          return a();
        }),
        delete this.$4);
    };
    o.prototype.getContinuationExecutionCounterID = function () {
      "use strict";
      return this.$2;
    };
    o.prototype.isInsideContinuationExecution = function () {
      "use strict";
      return i.indexOf(this) !== -1;
    };
    o.prototype.getTimeSliceContextsThisCounted = function () {
      "use strict";
      return this.timeslices;
    };
    o.prototype.getRootContextID = function () {
      "use strict";
      return this.$3;
    };
    o.$1 = 1;
    function p(a, b) {
      a.forEach(function (a) {
        var c = a.getContinuationExecutionCounterID(),
          d = b.find(function (a) {
            return a.getContinuationExecutionCounterID() === c;
          });
        d || b.push(a);
      });
    }
    g = babelHelpers.inherits(a, b("OnDemandExecutionContextObserver"));
    g && g.prototype;
    a.prototype.onNewContextCreatedWhileEnabled = function (a, b, c) {
      "use strict";
      var d;
      c.isContinuation &&
        ((d = i),
        d.forEach(function (a) {
          return a.openReferenceCount++;
        }));
      a = {
        hasBeenInvoked: !1,
        hasExecutionBeenCounted: !1,
        parentReferenceCounters: d,
        creationID: k++,
      };
      return a;
    };
    a.prototype.onContextCanceled = function (a, b) {
      "use strict";
      a = b || {};
      a.hasBeenInvoked ||
        (m(a.parentReferenceCounters), (a.hasBeenInvoked = !0));
    };
    a.prototype.onBeforeContextStartedWhileEnabled = function (a, c, d) {
      "use strict";
      __p && __p();
      var e = {
        callerProfilingCounterID: j,
        callerReferenceCounters: h,
        callerExecutionCounters: i.slice(),
      };
      c = c || { hasBeenInvoked: !1, creationID: -1 };
      c.hasBeenInvoked = !0;
      a.executionNumber > 0 ? (h = []) : (h = c.parentReferenceCounters || []);
      d.extendsExecution ? p(h, i) : (i = []);
      i.forEach(function (b) {
        return b.timeslices.push(a.contextID);
      });
      h.filter(function (a) {
        return a.isProfiling();
      }).length > 0 && a.executionNumber === 0
        ? (j = b("ProfilingCounters").startTimingInContext(
            "REF_COUNTED_TIMESLICE_TIME",
            a.contextID,
          ))
        : (j = null);
      return e;
    };
    a.prototype.onDisable = function () {
      "use strict";
      (j = null), (h = []), (i = []);
    };
    a.prototype.onAfterContextStartedWhileEnabled = function (a, b, c, d) {
      "use strict";
      return c;
    };
    a.prototype.onAfterContextEndedWhileEnabled = function (a, c, d, e) {
      "use strict";
      c = a.contextID;
      j != null &&
        (b("ProfilingCounters").stopTimingInContext(j, c), (j = null));
      m(h);
      h = d.callerReferenceCounters;
      i = d.callerExecutionCounters;
      j = d.callerProfilingCounterID;
    };
    a.prototype.getBeforeID = function () {
      "use strict";
      return b("ExecutionContextObservers").beforeIDs.REFERENCE_COUNTING;
    };
    a.prototype.getAfterID = function () {
      "use strict";
      return b("ExecutionContextObservers").afterIDs.REFERENCE_COUNTING;
    };
    function a() {
      "use strict";
      g.apply(this, arguments);
    }
    var q = {
        onAllChildrenFinished: function (a, b) {
          b === void 0 && (b = !1);
          var c = q.getObserver().expressInterest();
          return q.onAllChildrenFinishedWithoutAutoTurningObserverOn(a, c, b);
        },
        onAllChildrenFinishedWithoutAutoTurningObserverOn: function (a, d, e) {
          __p && __p();
          var f = b("TimeSlice").getContext();
          if (f == null) {
            d();
            return null;
          }
          f = f.contextID;
          c = new o(f, e);
          c.addCallback(d);
          a && c.addCallback(a);
          h = h.slice();
          h.push(c);
          i = i.slice();
          i.push(c);
          j == null &&
            c.isProfiling() &&
            (j = b("ProfilingCounters").startTimingInContext(
              "REF_COUNTED_TIMESLICE_TIME",
              f,
            ));
          return c;
        },
        getObserver: function () {
          return r;
        },
      },
      r = new a();
    b("TimeSlice").registerExecutionContextObserver(r);
    e.exports = q;
  },
  null,
);
__d(
  "clearTimeout",
  ["TimerStorage", "TimeSlice"],
  function (a, b, c, d, e, f) {
    var g = a.clearTimeout.nativeBackup || a.clearTimeout,
      h = b("TimerStorage").TIMEOUT;
    function c(a) {
      if (a != null) {
        b("TimerStorage").unset(h, a);
        var c = h + String(a);
        b("TimeSlice").cancelWithToken(c);
      }
      g(a);
    }
    e.exports = c;
  },
  18,
);
__d(
  "TimeSliceAutoclosedInteraction",
  [
    "ErrorUtils",
    "ProfilingCounters",
    "TimeSlice",
    "TimeSliceInteraction",
    "TimeSliceInteractionExtraSaver",
    "TimeSliceInteractionSV",
    "TimeSliceReferenceCounting",
    "clearTimeout",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g,
      h = 70 * 1e3;
    c = babelHelpers.inherits(a, b("TimeSliceInteraction"));
    g = c && c.prototype;
    function a(a, c) {
      __p && __p();
      c === void 0 && (c = []);
      g.constructor.call(this, a, c);
      this.$TimeSliceAutoclosedInteraction1 = new Map();
      this.$TimeSliceAutoclosedInteraction2 = 0;
      this.$TimeSliceAutoclosedInteraction3 = !0;
      this.$TimeSliceAutoclosedInteraction4 = [];
      this.$TimeSliceAutoclosedInteraction5 = new Set();
      if (this.isEnabled()) {
        this.trace().addStringAnnotation("initiatorType", "autoclosed");
        var d = b("setTimeoutAcrossTransitions")(
          b("TimeSlice").guard(
            function () {
              this.isDone() ||
                (this.trace().addStringAnnotation(
                  "terminated_by_timeout_ms",
                  h.toString(),
                ),
                this.finish());
            }.bind(this),
            "timeout for action " + a,
            { propagationType: b("TimeSlice").PropagationType.EXECUTION },
          ),
          h,
        );
        this.registerOnBeforeSend(
          function () {
            this.trace()
              .addStringAnnotation(
                "ref_counting_trees",
                "" + this.$TimeSliceAutoclosedInteraction2,
              )
              .addStringAnnotation(
                "ref_counters_pending_count",
                "" + this.$TimeSliceAutoclosedInteraction1.size,
              ),
              b("clearTimeout")(d);
          }.bind(this),
        );
        c = b("TimeSliceReferenceCounting").onAllChildrenFinished(null, !0);
        if (c == null)
          this.disable(),
            b("ErrorUtils").reportError(
              new Error(
                "starting autoclosed interaction outside of a timeslice.",
              ),
            );
        else {
          this.waitForReferenceCounter(c);
          this.trace().addStringAnnotation(
            "on_demand_reference_counting",
            b("TimeSliceInteractionSV").on_demand_reference_counting
              ? "1"
              : "0",
          );
          a = "timeslice_interaction_" + this.getTraceID();
          this.isEnabledForMode("full") &&
            (b("ProfilingCounters")
              .currentContext()
              .addAttribution(
                a,
                b("ProfilingCounters").AttributionPropagation
                  .ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC,
              ),
            this.addProfilingCounterAttribution(a));
        }
      }
    }
    a.getInteractionsActiveRightNow = function () {
      return Array.from(
        b("TimeSliceInteraction").getAllActiveInteractions(),
      ).filter(function (a) {
        return (
          a.$TimeSliceAutoclosedInteraction3 &&
          a.hasActiveReferenceCountingHandle()
        );
      });
    };
    a.prototype.waitForReferenceCounter = function (a) {
      __p && __p();
      if (!this.isEnabled()) return this;
      var c = a.getContinuationExecutionCounterID();
      this.$TimeSliceAutoclosedInteraction1.set(c, a);
      this.$TimeSliceAutoclosedInteraction2++;
      a.addCallback(
        function () {
          b("TimeSliceInteractionSV").also_record_new_timeslice_format &&
            this.$TimeSliceAutoclosedInteraction1.has(c) &&
            a.getTimeSliceContextsThisCounted().forEach(
              function (a) {
                return this.$TimeSliceAutoclosedInteraction5.add(a);
              }.bind(this),
            ),
            this.$TimeSliceAutoclosedInteraction1["delete"](c) &&
              this.$TimeSliceAutoclosedInteraction1.size === 0 &&
              (this.$TimeSliceAutoclosedInteraction4.forEach(function (a) {
                return a();
              }),
              (this.$TimeSliceAutoclosedInteraction4 = []),
              this.isEnabled() &&
                !this.isDone() &&
                (b("TimeSliceInteractionSV").also_record_new_timeslice_format &&
                  this.recordWithExtraSaver(
                    b("TimeSliceInteractionExtraSaver")
                      .TIMESLICE_EXECUTION_SAVER,
                    "reference_counted_contexts",
                    Array.from(this.$TimeSliceAutoclosedInteraction5.values()),
                  ),
                this.finish()));
        }.bind(this),
      );
      return this;
    };
    a.prototype.onReferenceCountedExecutionFinished = function (a) {
      this.$TimeSliceAutoclosedInteraction4.push(a);
    };
    a.prototype.hasActiveReferenceCountingHandle = function () {
      __p && __p();
      for (
        var a = this.$TimeSliceAutoclosedInteraction1.values(),
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var d;
        if (b) {
          if (c >= a.length) break;
          d = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          d = c.value;
        }
        d = d;
        if (d.isInsideContinuationExecution()) return !0;
      }
      return !1;
    };
    e.exports = a;
  },
  null,
);
__d(
  "Keys",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = Object.freeze({
      BACKSPACE: 8,
      TAB: 9,
      RETURN: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      PAUSE_BREAK: 19,
      CAPS_LOCK: 20,
      ESC: 27,
      SPACE: 32,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      INSERT: 45,
      DELETE: 46,
      ZERO: 48,
      ONE: 49,
      TWO: 50,
      THREE: 51,
      FOUR: 52,
      FIVE: 53,
      SIX: 54,
      SEVEN: 55,
      EIGHT: 56,
      NINE: 57,
      A: 65,
      B: 66,
      C: 67,
      D: 68,
      E: 69,
      F: 70,
      G: 71,
      H: 72,
      I: 73,
      J: 74,
      K: 75,
      L: 76,
      M: 77,
      N: 78,
      O: 79,
      P: 80,
      Q: 81,
      R: 82,
      S: 83,
      T: 84,
      U: 85,
      V: 86,
      W: 87,
      X: 88,
      Y: 89,
      Z: 90,
      LEFT_WINDOW_KEY: 91,
      RIGHT_WINDOW_KEY: 92,
      SELECT_KEY: 93,
      NUMPAD_0: 96,
      NUMPAD_1: 97,
      NUMPAD_2: 98,
      NUMPAD_3: 99,
      NUMPAD_4: 100,
      NUMPAD_5: 101,
      NUMPAD_6: 102,
      NUMPAD_7: 103,
      NUMPAD_8: 104,
      NUMPAD_9: 105,
      MULTIPLY: 106,
      ADD: 107,
      SUBTRACT: 109,
      DECIMAL_POINT: 110,
      DIVIDE: 111,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      NUM_LOCK: 144,
      SCROLL_LOCK: 145,
      SEMI_COLON: 186,
      EQUAL_SIGN: 187,
      COMMA: 188,
      DASH: 189,
      PERIOD: 190,
      FORWARD_SLASH: 191,
      GRAVE_ACCENT: 192,
      OPEN_BRACKET: 219,
      BACK_SLASH: 220,
      CLOSE_BRAKET: 221,
      SINGLE_QUOTE: 222,
    });
  },
  null,
);
/**
 * License: https://www.facebook.com/legal/license/YRMpr4GrYU7/
 */
__d(
  "ImmediateImplementation",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    (function (b, c) {
      "use strict";
      __p && __p();
      var d = 1,
        e = {},
        g = {},
        h = g,
        i = !1,
        j = b.document,
        k;
      function l(a) {
        var b = a[0];
        a = Array.prototype.slice.call(a, 1);
        e[d] = function () {
          b.apply(c, a);
        };
        h = h.next = { handle: d++ };
        return h.handle;
      }
      function m() {
        __p && __p();
        var a, b;
        while (!i && (a = g.next)) {
          g = a;
          if ((b = e[a.handle])) {
            i = !0;
            try {
              b(), (i = !1);
            } finally {
              n(a.handle), i && ((i = !1), g.next && k(m));
            }
          }
        }
      }
      function n(a) {
        delete e[a];
      }
      function o() {
        __p && __p();
        if (b.postMessage && !b.importScripts) {
          var a = !0,
            c = function c() {
              (a = !1),
                b.removeEventListener
                  ? b.removeEventListener("message", c, !1)
                  : b.detachEvent("onmessage", c);
            };
          if (b.addEventListener) b.addEventListener("message", c, !1);
          else if (b.attachEvent) b.attachEvent("onmessage", c);
          else return !1;
          b.postMessage("", "*");
          return a;
        }
      }
      function p() {
        var a = "setImmediate$" + Math.random() + "$",
          c = function (event) {
            event.source === b &&
              typeof event.data === "string" &&
              event.data.indexOf(a) === 0 &&
              m();
          };
        b.addEventListener
          ? b.addEventListener("message", c, !1)
          : b.attachEvent("onmessage", c);
        k = function () {
          var c = l(arguments);
          b.postMessage(a + c, "*");
          return c;
        };
      }
      function q() {
        var a = new MessageChannel();
        a.port1.onmessage = m;
        k = function () {
          var b = l(arguments);
          a.port2.postMessage(b);
          return b;
        };
      }
      function r() {
        var a = j.documentElement;
        k = function () {
          var b = l(arguments),
            c = j.createElement("script");
          c.onreadystatechange = function () {
            (c.onreadystatechange = null), a.removeChild(c), (c = null), m();
          };
          a.appendChild(c);
          return b;
        };
      }
      function s() {
        k = function () {
          setTimeout(m, 0);
          return l(arguments);
        };
      }
      o()
        ? p()
        : b.MessageChannel
        ? q()
        : j &&
          j.createElement &&
          "onreadystatechange" in j.createElement("script")
        ? r()
        : s();
      f.setImmediate = k;
      f.clearImmediate = n;
    })(Function("return this")());
  },
  null,
);
__d(
  "clearImmediatePolyfill",
  ["ImmediateImplementation"],
  function (a, b, c, d, e, f) {
    e.exports = a.clearImmediate || b("ImmediateImplementation").clearImmediate;
  },
  null,
);
__d(
  "clearImmediate",
  ["TimerStorage", "TimeSlice", "clearImmediatePolyfill"],
  function (a, b, c, d, e, f) {
    var g = b("TimerStorage").IMMEDIATE;
    function a(a) {
      if (a != null) {
        b("TimerStorage").unset(b("TimerStorage").IMMEDIATE, a);
        var c = g + String(a);
        b("TimeSlice").cancelWithToken(c);
      }
      b("clearImmediatePolyfill")(a);
    }
    e.exports = a;
  },
  null,
);
__d(
  "setImmediatePolyfill",
  ["invariant", "PromiseUsePolyfillSetImmediateGK", "ImmediateImplementation"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = a.setImmediate;
    if (
      b("PromiseUsePolyfillSetImmediateGK")
        .www_always_use_polyfill_setimmediate ||
      !h
    ) {
      d = b("ImmediateImplementation");
      h = d.setImmediate;
    }
    function c(a) {
      typeof a === "function" || g(0);
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      return h.apply(undefined, [a].concat(c));
    }
    e.exports = c;
  },
  null,
);
__d(
  "setImmediateAcrossTransitions",
  ["TimerStorage", "TimeSlice", "setImmediatePolyfill"],
  function (a, b, c, d, e, f) {
    var g = b("TimerStorage").IMMEDIATE;
    function a(a) {
      var c = b("TimeSlice").guard(a, "setImmediate", {
        propagationType: b("TimeSlice").PropagationType.CONTINUATION,
        registerCallStack: !0,
      });
      for (
        var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1;
        f < d;
        f++
      )
        e[f - 1] = arguments[f];
      var h = b("setImmediatePolyfill").apply(undefined, [c].concat(e)),
        i = g + String(h);
      b("TimeSlice").registerForCancelling(i, c);
      return h;
    }
    e.exports = a;
  },
  null,
);
__d(
  "TimeSliceInteractionCancelHook",
  ["Keys", "clearImmediate", "requireWeak", "setImmediateAcrossTransitions"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [];
    a = {
      registerInteraction: function (a) {
        var c = b("setImmediateAcrossTransitions")(function () {
            g.push(a);
          }),
          d = !1;
        return {
          remove: function () {
            if (d) return;
            d = !0;
            b("clearImmediate")(c);
            var e = g.indexOf(a);
            e !== -1 && g.splice(e, 1);
          },
        };
      },
    };
    b("requireWeak")("Event", function (a) {
      a.listen(document, "click", function () {
        g.forEach(function (a) {
          a.trace().addStringAnnotation("clicked_during_interaction", "1");
        });
      }),
        a.listen(document, "keydown", function (c) {
          a.getKeyCode(c) === b("Keys").ESC &&
            g.forEach(function (a) {
              a.trace().addStringAnnotation("escaped_during_interaction", "1");
            });
        });
    });
    e.exports = a;
  },
  null,
);
__d(
  "CurrentEventMeta",
  [],
  function (a, b, c, d, e, f) {
    var g = null,
      h = {};
    a = {
      __setCurrentEventID: function (a) {
        g = a;
      },
      __informEventDataReady: function (a, b) {
        h[a] &&
          (h[a].forEach(function (a) {
            return a(b);
          }),
          delete h[a]);
      },
      hasCurrentEvent: function () {
        return !!g;
      },
      registerForCurrentEventData: function (a) {
        g && ((h[g] = h[g] || []), h[g].push(a));
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "TimeSliceInteractionEventHook",
  ["CurrentEventMeta"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      registerInteraction: function (a) {
        b("CurrentEventMeta").hasCurrentEvent() &&
          (a.countUp(),
          b("CurrentEventMeta").registerForCurrentEventData(function (b) {
            Object.keys(b).forEach(function (c) {
              var d = "" + b[c];
              a.trace().addStringAnnotation(c, d);
            }),
              a.countDown();
          }));
        return null;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "PageEvents",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      NATIVE_ONLOAD: "onload/onload",
      BIGPIPE_ONLOAD: "onload/onload_callback",
      AJAXPIPE_ONLOAD: "ajaxpipe/onload_callback",
      NATIVE_DOMREADY: "onload/dom_content_ready",
      BIGPIPE_DOMREADY: "onload/domcontent_callback",
      AJAXPIPE_DOMREADY: "ajaxpipe/domcontent_callback",
      NATIVE_ONBEFOREUNLOAD: "onload/beforeunload",
      NATIVE_ONUNLOAD: "onload/unload",
      AJAXPIPE_ONUNLOAD: "onload/exit",
      AJAXPIPE_SEND: "ajaxpipe/send",
      AJAXPIPE_FIRST_RESPONSE: "ajaxpipe/first_response",
      AJAXPIPE_ONBEFORECLEARCANVAS: "ajaxpipe/onbeforeclearcanvas",
    });
    e.exports = a;
  },
  18,
);
__d(
  "createCancelableFunction",
  ["emptyFunction"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      var c = a;
      a = function () {
        for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++)
          b[d] = arguments[d];
        return c.apply(this, b);
      };
      a.cancel = function () {
        c = b("emptyFunction");
      };
      return a;
    }
    e.exports = a;
  },
  18,
);
__d(
  "Run",
  [
    "Arbiter",
    "BigPipe",
    "ContextualComponent",
    "ExecutionEnvironment",
    "PageEvents",
    "TimeSlice",
    "createCancelableFunction",
    "emptyFunction",
    "performanceAbsoluteNow",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = "onunloadhooks",
      h = "onafterunloadhooks",
      i = b("Arbiter").BEHAVIOR_STATE;
    function j(b, c) {
      var d = a.CavalryLogger;
      d = d && d.getInstance();
      if (!d) return;
      c ? d.setAbsTimeStamp && d.setAbsTimeStamp(b, c) : d.setTimeStamp(b);
    }
    function k() {
      return !window.loading_page_chrome;
    }
    function c(c) {
      var d = a.PageHooks;
      if (window.domready && d) {
        d.runHook(c, "domreadyhooks:late");
        return { remove: b("emptyFunction") };
      } else return q("domreadyhooks", c);
    }
    function d(b) {
      var c = a.PageHooks;
      if (window.loaded && c) {
        var d = setTimeout(function () {
          c.runHook(b, "onloadhooks:late");
        }, 0);
        return {
          remove: function () {
            return clearTimeout(d);
          },
        };
      } else return q("onloadhooks", b);
    }
    function f(a, b) {
      b === undefined && (b = k());
      return b ? q("onbeforeleavehooks", a) : q("onbeforeunloadhooks", a);
    }
    function l(a, c) {
      window.onunload ||
        (window.onunload = b("TimeSlice").guard(function () {
          b("Arbiter").inform(b("PageEvents").NATIVE_ONUNLOAD, !0, i);
        }, "window.onunload"));
      return q(a, c);
    }
    function m(a) {
      return l(g, a);
    }
    function n(a) {
      return l(h, a);
    }
    function o(a) {
      return q("onleavehooks", a);
    }
    function p(a, c) {
      var d = b("createCancelableFunction")(c);
      c = function () {
        d(), d.cancel();
      };
      a = b("ContextualComponent").closestToNode(a);
      a && a.onCleanup(c);
      window.onleavehooks = (window.onleavehooks || []).concat(c);
      return {
        remove: function () {
          d.cancel();
        },
      };
    }
    function q(a, c) {
      c = b("createCancelableFunction")(c);
      window[a] = (window[a] || []).concat(c);
      return {
        remove: function () {
          c.cancel();
        },
      };
    }
    function r(a) {
      window[a] = [];
    }
    var s = b("TimeSlice").guard(function () {
      b("Arbiter").inform(b("PageEvents").NATIVE_DOMREADY, !0, i);
    }, "DOMContentLoaded");
    a._domcontentready = s;
    function t() {
      __p && __p();
      var a = document,
        c = window;
      if (a.addEventListener) {
        var d = /AppleWebKit.(\d+)/.exec(navigator.userAgent);
        if (d && d[1] < 525)
          var e = setInterval(function () {
            /loaded|complete/.test(a.readyState) && (s(), clearInterval(e));
          }, 10);
        else a.addEventListener("DOMContentLoaded", s, !0);
      } else {
        d = "javascript:void(0)";
        c.location.protocol == "https:" && (d = "//:");
        a.write(
          '<script onreadystatechange="if (this.readyState==\'complete\') {this.parentNode.removeChild(this);_domcontentready();}" defer="defer" src="' +
            d +
            '"></',
        );
        a.write("script>");
      }
      var f = c.onload;
      c.onload = b("TimeSlice").guard(function () {
        j("t_layout"),
          f && f(),
          b("Arbiter").inform(b("PageEvents").NATIVE_ONLOAD, !0, i);
      }, "window.onload");
      c.onbeforeunload = b("TimeSlice").guard(function () {
        var a = {};
        b("Arbiter").inform(b("PageEvents").NATIVE_ONBEFOREUNLOAD, a, i);
        a.warn ||
          b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONUNLOAD, {
            transition_type: "normal",
          });
        return a.warn;
      }, "window.onbeforeunload");
    }
    function u() {
      var a = b("performanceAbsoluteNow")();
      window.console &&
        console.timeStamp &&
        console.timeStamp(
          'perf_trace {"name": "e2e", "parent": "PageEvents.BIGPIPE_ONLOAD"}',
        );
      j("t_onload", a);
      b("Arbiter").inform(b("PageEvents").BIGPIPE_ONLOAD, { ts: a }, i);
    }
    var v = b("Arbiter").registerCallback(
        function () {
          b("BigPipe").getCurrentInstance()
            ? b("Arbiter").subscribeOnce(b("BigPipe").Events.displayed, u)
            : u();
        },
        [b("PageEvents").NATIVE_ONLOAD],
      ),
      w = b("Arbiter").registerCallback(
        function () {
          j("t_domcontent");
          var a = { timeTriggered: Date.now() };
          b("Arbiter").inform(b("PageEvents").BIGPIPE_DOMREADY, a, i);
        },
        [b("PageEvents").NATIVE_DOMREADY],
      );
    b("ExecutionEnvironment").canUseDOM && t();
    t = {
      onLoad: c,
      onAfterLoad: d,
      onLeave: o,
      onBeforeUnload: f,
      onUnload: m,
      onAfterUnload: n,
      onCleanupOrLeave: p,
      __domContentCallback: w,
      __onloadCallback: v,
      __removeHook: r,
    };
    e.exports = t;
  },
  18,
);
__d(
  "BigPipePlugins",
  ["DataStore"],
  function (a, b, c, d, e, f) {
    __p && __p();
    g.runPluginOnPagelet = function (a) {
      "use strict";
      g.getPluginList().forEach(function (b) {
        b(a);
      });
    };
    g.getPluginList = function () {
      "use strict";
      return [g.$1];
    };
    g.$1 = function (a) {
      "use strict";
      if (!a) return;
      a = a.querySelectorAll("div[data-fte]");
      for (var b = 0, c = a.length; b < c; b++)
        g.$2(a[b], "data-ft", "data-ft");
    };
    g.$2 = function (a, c, d) {
      "use strict";
      var e = a.getAttribute(c);
      e && (b("DataStore").set(a, d, e), a.removeAttribute(c));
    };
    function g() {
      "use strict";
    }
    e.exports = g;
  },
  null,
);
__d(
  "JSCC",
  [],
  function $module_JSCC(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    __p && __p();
    var factories = {};
    function createFactory(constructor) {
      var instance,
        constructed = !1;
      return function () {
        constructed || ((instance = constructor()), (constructed = !0));
        return instance;
      };
    }
    var JSCC = {
      get: function get(key) {
        if (!factories[key]) {
          !1;
          throw new Error("JSCC entry is missing");
        }
        return factories[key]();
      },
      init: function init(constructors) {
        for (var key in constructors)
          factories[key] = createFactory(constructors[key]);
        return function clearJSCC() {
          for (var key in constructors) delete factories[key];
        };
      },
      parse: function parse(jsccMapString) {
        return eval(jsccMapString);
      },
    };
    module.exports = JSCC;
  },
  null,
);
__d(
  "PageletEventConstsJS",
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      ARRIVE_START: "prearrive",
      ARRIVE_END: "arrive",
      CSS_START: "css",
      CSS_END: "css_load",
      DISPLAY_START: "display_start",
      DISPLAY_END: "display",
      JS_START: "jsstart",
      JS_END: "jsdone",
      ONLOAD_START: "preonload",
      ONLOAD_END: "onload",
      SETUP: "setup",
    });
  },
  18,
);
__d(
  "PageletSet",
  ["Arbiter"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {},
      h = {
        hasPagelet: function (a) {
          return Object.prototype.hasOwnProperty.call(g, a);
        },
        getPagelet: function (a) {
          return g[a];
        },
        getOrCreatePagelet: function (a) {
          if (!h.hasPagelet(a)) {
            var b = new j(a);
            g[a] = b;
          }
          return h.getPagelet(a);
        },
        getPageletIDs: function () {
          return Object.keys(g);
        },
        removePagelet: function (a) {
          if (h.hasPagelet(a)) {
            var b = h.getPagelet(a);
            delete g[a];
            b.destroy();
          }
        },
      };
    function i(a, b) {
      return a.contains ? a.contains(b) : !!(a.compareDocumentPosition(b) & 16);
    }
    function j(a) {
      "use strict";
      (this.id = a),
        (this.$1 = null),
        (this.$2 = []),
        this.addDestructor(
          function () {
            b("Arbiter").inform("pagelet/destroy", {
              id: this.id,
              root: this.$1,
            });
          }.bind(this),
        );
    }
    j.prototype.getRoot = function () {
      "use strict";
      return this.$1;
    };
    j.prototype.setRoot = function (a) {
      "use strict";
      this.$1 = a;
    };
    j.prototype.$3 = function () {
      "use strict";
      __p && __p();
      var a = [],
        b = this.$1;
      if (!b) return a;
      var c = h.getPageletIDs();
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        if (e === this.id) continue;
        e = g[e];
        var f = e.getRoot();
        f && i(b, f) && a.push(e);
      }
      return a;
    };
    j.prototype.addDestructor = function (a) {
      "use strict";
      this.$2.push(a);
    };
    j.prototype.destroy = function () {
      "use strict";
      __p && __p();
      var a = this.$3();
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        h.hasPagelet(c.id) && h.removePagelet(c.id);
      }
      for (var c = 0; c < this.$2.length; c++) {
        a = this.$2[c]();
        a && a();
      }
    };
    e.exports = h;
  },
  18,
);
__d(
  "UserTimingUtils",
  ["performance"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g =
      typeof b("performance").mark === "function" &&
      typeof b("performance").clearMarks === "function" &&
      typeof b("performance").measure === "function" &&
      typeof b("performance").clearMeasures === "function";
    function a(a) {
      g && b("performance").mark(a);
    }
    function c(a, c) {
      if (g) {
        try {
          b("performance").measure(a, c);
        } catch (a) {
          !1;
        }
        b("performance").clearMarks(c);
        b("performance").clearMeasures(a);
      }
    }
    e.exports = { measureStart: a, measureEnd: c };
  },
  18,
);
__d(
  "__getCompileTime",
  [],
  function (a, b, c, d, e, f) {
    e.exports = {};
  },
  null,
);
__d(
  "__getFactoryTime",
  [],
  function (a, b, c, d, e, f) {
    e.exports = {};
  },
  null,
);
__d(
  "__getTotalFactories",
  [],
  function (a, b, c, d, e, f) {
    e.exports = {};
  },
  null,
);
__d(
  "captureUsageSnapshot",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function () {
      var a = window.__bodyWrapper;
      if (!a.getCodeUsage) return {};
      a = babelHelpers["extends"]({}, a.getCodeUsage());
      var b = window.document.body.outerHTML,
        c = {};
      Array.from(document.styleSheets).forEach(function (a) {
        a.href && (c[a.href] = !0);
      });
      return { js_calls: a, document_html: b, stylesheets: c };
    };
    e.exports = a;
  },
  18,
);
__d(
  "fastDeepCopy",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    function a(a) {
      return typeof a === "object" && a !== null ? g(a) : a;
    }
    function g(a) {
      __p && __p();
      var b = typeof a.constructor === "function" ? a.constructor() : {};
      if (Array.isArray(a))
        for (var c = 0; c < a.length; ++c) {
          var d = a[c];
          b[c] = typeof d === "object" && d !== null ? g(d) : d;
        }
      else
        for (var e in a) {
          d = a[e];
          b[e] = typeof d === "object" && d !== null ? g(d) : d;
        }
      return b;
    }
    e.exports = a;
  },
  null,
);
__d(
  "requestAnimationFrameAcrossTransitions",
  [
    "Env",
    "ErrorUtils",
    "TimerStorage",
    "TimeSlice",
    "clearTimeout",
    "requestAnimationFramePolyfill",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b("TimerStorage").ANIMATION_FRAME,
      h = 100,
      i = null,
      j = null,
      k = b("Env").gk_require_dic ? Object.create(null) : {},
      l = b("Env").gk_require_dic ? Object.create(null) : {},
      m = {
        DEFAULT: 0,
        QUERY_THEN_MUTATE: 1,
        FORCE_CLIENT_REFLOW: 2,
        DISPLAY_DONE_LOGGING: 3,
        SIZE: 4,
      };
    function n(c) {
      __p && __p();
      l = k;
      k = b("Env").gk_require_dic ? Object.create(null) : {};
      i = null;
      j && (b("clearTimeout")(j), (j = null));
      for (var d = 0; d < m.SIZE; d++) {
        var e = function (e) {
          var f = l[e];
          if (d === m.FORCE_CLIENT_REFLOW) {
            b("Env").gk_raf_force_client_reflow &&
              window.document.body &&
              window.document.body.getClientRects();
            return "break";
          }
          if (f.deleted || f.priority !== d) return "continue";
          b("ErrorUtils").applyWithGuard(function () {
            f.call(a, c);
          });
        };
        _loop: for (var f in l) {
          var g = e(f);
          switch (g) {
            case "break":
              break _loop;
            case "continue":
              continue;
          }
        }
      }
      l = null;
    }
    function o(a, c) {
      __p && __p();
      c = (c && c.priority) || m.DEFAULT;
      i ||
        (i = b("requestAnimationFramePolyfill")(function (a) {
          (i = null), n(a);
        }));
      !j &&
        c > m.DEFAULT &&
        (j = b("setTimeoutAcrossTransitions")(
          b("TimeSlice").guard(
            function () {
              (j = null), n(Date.now());
            },
            "requestAnimationFrame priorityRAFCallback setTimeout",
            { propagationType: b("TimeSlice").PropagationType.ORPHAN },
          ),
          h,
        ));
      a = b("TimeSlice").guard(a, "requestAnimationFrame", {
        propagationType: b("TimeSlice").PropagationType.CONTINUATION,
        registerCallStack: !0,
      });
      a.priority = c;
      a.deleted &&
        b("ErrorUtils").applyWithGuard(function () {
          throw new Error("Scheduling a deleted callback");
        });
      c = b("requestAnimationFramePolyfill")(function () {});
      k[c] = a;
      return c;
    }
    function p(a) {
      a = b("TimeSlice").guard(a, "requestAnimationFrame", {
        propagationType: b("TimeSlice").PropagationType.CONTINUATION,
      });
      var c = b("requestAnimationFramePolyfill")(a);
      b("TimeSlice").registerForCancelling(g + c, a);
      return c;
    }
    e.exports = function (a, c) {
      if (b("Env").gk_raf_flush) return o(a, c);
      else return p(a);
    };
    e.exports.Priorities = m;
    e.exports.cancelVirtualRAF = function (a) {
      if (b("Env").gk_raf_flush) {
        b("TimeSlice").cancel(k[a]);
        delete k[a];
        if (l) {
          a = l[a];
          a && (a.deleted = !0);
        }
      }
    };
  },
  18,
);
__d(
  "requestAnimationFrame",
  ["TimerStorage", "TimeSlice", "requestAnimationFrameAcrossTransitions"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c) {
      var d;
      function e(c) {
        b("TimerStorage").unset(b("TimerStorage").ANIMATION_FRAME, d), a(c);
      }
      b("TimeSlice").copyGuardForWrapper(a, e);
      e.__originalCallback = a;
      d = b("requestAnimationFrameAcrossTransitions")(e, c);
      b("TimerStorage").set(b("TimerStorage").ANIMATION_FRAME, d);
      return d;
    }
    e.exports = a;
  },
  18,
);
__d(
  "BigPipe",
  [
    "ix",
    "Arbiter",
    "BigPipeExperiments",
    "BigPipePlugins",
    "Bootloader",
    "Env",
    "ErrorUtils",
    "FBLogger",
    "JSCC",
    "PageEvents",
    "PageletEventConstsJS",
    "PageletSet",
    "Run",
    "ServerJS",
    "TimeSlice",
    "UserTimingUtils",
    "$",
    "captureUsageSnapshot",
    "clearTimeout",
    "fastDeepCopy",
    "ge",
    "gkx",
    "performanceAbsoluteNow",
    "requestAnimationFrame",
    "requestAnimationFrameAcrossTransitions",
    "setTimeout",
    "__getTotalFactories",
    "__getCompileTime",
    "__getFactoryTime",
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h =
        document.documentMode ||
        +(/MSIE.(\d+)/.exec(navigator.userAgent) || [])[1],
      i = b("Arbiter").BEHAVIOR_STATE,
      j = b("Arbiter").BEHAVIOR_PERSISTENT,
      k =
        console.timeStamp && window.location.search.indexOf("pagelet_ts=1") > 0;
    function l(a, c) {
      b("UserTimingUtils").measureStart(a + " " + c);
    }
    function m(a, c, d) {
      b("UserTimingUtils").measureEnd(
        "\u26cf " + a + " [" + c + "][phase " + d + "]",
        a + " " + c,
      );
    }
    function n(a, c) {
      if (a)
        for (var d = 0; d < a.length; d++)
          b("ErrorUtils").applyWithGuard(new Function(a[d]), c);
    }
    var o = 1;
    function p(a) {
      "use strict";
      (this._onDisplayDone = function (a) {
        this.arbiter.registerCallback(a, ["display_done"]);
      }.bind(this)),
        Object.assign(
          this,
          {
            arbiter: b("Arbiter"),
            rootNodeID: "content",
            lid: null,
            isAjax: !1,
            domContentCallback: b("Run").__domContentCallback,
            onloadCallback: b("Run").__onloadCallback,
            domContentEvt: b("PageEvents").BIGPIPE_DOMREADY,
            onloadEvt: b("PageEvents").BIGPIPE_ONLOAD,
            forceFinish: !1,
            config: {},
            _currentPhase: 0,
            _lastPhaseOfLastResponse: -1,
            _lastPhaseBeforeLastResponse: -1,
            _livePagelets: {},
            _phases: {},
            _orderedPhases: [],
            _maxPhase: 0,
            _displayDoneFired: !1,
            _displayDone: !1,
            _awaitingLIDEventQueue: [],
          },
          a,
        ),
        this.config || (this.config = {}),
        this.automatic
          ? (this._relevant_instance = p._current_instance)
          : (p._current_instance = this),
        (this._serverJS = new (b("ServerJS"))()),
        this._informEventExternal(
          p.Events.init,
          { arbiter: this.arbiter },
          b("Arbiter"),
        ),
        (this._displayDoneCallback = this.arbiter.registerCallback(
          function () {
            var a = b("captureUsageSnapshot")();
            this._informEventExternal(p.Events.displayed, {
              rid: this.rid,
              ajax: this.isAjax,
              usageSnapshot: a,
            });
          }.bind(this),
          ["display_done"],
        )),
        this.arbiter.registerCallback(this.domContentCallback, [
          "pagelet_displayed_all",
        ]),
        this._beginPhase(0),
        this.arbiter.registerCallback(this.onloadCallback, [
          "bigpipe_e2e_reported",
        ]),
        (this._loadedCallback = this.arbiter.registerCallback(
          function () {
            this._informEventExternal(p.Events.loaded, {
              rid: this.rid,
              ajax: this.isAjax,
            }),
              this.arbiter.inform("bigpipe_e2e_reported", !0);
          }.bind(this),
          ["pagelet_displayed_all"],
        )),
        this.arbiter.registerCallback(
          function () {
            return this._serverJS.cleanup();
          }.bind(this),
          [this.onloadEvt, "bigpipe_e2e_reported"],
        );
    }
    p.prototype._beginPhase = function (a) {
      "use strict";
      var b = this._getOrCreatePhase(a);
      b.begun = !0;
      this._informEventExternal("phase_begin", { phase: a });
      this.arbiter.inform("phase_begin_" + a, !0, i);
    };
    p.prototype._getOrCreatePhase = function (a) {
      "use strict";
      __p && __p();
      if (this._phases[a]) return this._phases[a];
      var b = { pagelets: [], begun: !1, complete: !1 };
      this._phases[a] = b;
      var c = 0;
      while (c < this._orderedPhases.length) {
        if (a < this._orderedPhases[c]) break;
        c++;
      }
      this._orderedPhases.splice(c, 0, a);
      return b;
    };
    p.prototype._tryRenderingNextPhase = function () {
      "use strict";
      __p && __p();
      var a = this._phases[this._currentPhase];
      if (a && a.begun && !a.complete) return;
      for (
        var a = this._orderedPhases,
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var d;
        if (b) {
          if (c >= a.length) break;
          d = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          d = c.value;
        }
        d = d;
        var e = this._phases[d];
        if (e.begun)
          if (e.complete) continue;
          else return;
        else {
          this._currentPhase = d;
          this._beginPhase(d);
          return;
        }
      }
    };
    p.prototype._displayPageletHandler = function (a) {
      "use strict";
      this.displayCallback
        ? this.displayCallback(this._displayPagelet.bind(this, a))
        : this._displayPagelet(a);
    };
    p.prototype._displayPagelet = function (a) {
      "use strict";
      __p && __p();
      l(a.id, "display");
      a.displayStarted = !0;
      this._informPageletEvent(b("PageletEventConstsJS").DISPLAY_START, a);
      var c = this._getPagelet(a),
        d = [],
        e = {};
      for (var f in a.content) {
        var g = a.content[f];
        a.append && (f = this._getPageletRootID(a));
        var h = b("ge")(f);
        if (!h) {
          var j = "Root element %s is missing for pagelet %s";
          !1;
          continue;
        }
        f === c.id && c.setRoot(h);
        if (g) {
          if (a.append) s(h, g, d);
          else if (g.nodeType) (h.innerHTML = ""), s(h, g, d);
          else {
            j = q(g);
            h.innerHTML = j;
            e[f] = j;
            d.push(h);
          }
          b("BigPipeExperiments").enable_bigpipe_plugins &&
            b("BigPipePlugins").runPluginOnPagelet(h);
        }
        g = h.getAttribute("data-referrer");
        g || h.setAttribute("data-referrer", f);
      }
      j = null;
      if (a.static_templates) {
        g = b("ge")("static_templates");
        !g ? !1 : ((j = q(a.static_templates)), s(g, j, d));
      }
      this._informPageletDisplayDetails(a.id, a.jsmods, e, j);
      a.displayed = !0;
      if (a.jsmods) {
        h = this._serverJS.handlePartial(a.jsmods, {
          pagelet: a.id,
          bigPipeContext: { onDisplayDone: this._onDisplayDone },
        });
        c.addDestructor(h.cancel.bind(h));
      }
      var k = [];
      d.forEach(function (a) {
        if (typeof a.getElementsByTagName === "function") {
          a = a.getElementsByTagName("img");
          for (var b = 0; b < a.length; b++) k.push(a[b].src);
        }
      });
      k.length > 0 &&
        this._informEventExternal("images_displayed", {
          pagelet: a.id,
          timeslice: b("TimeSlice").getContext()
            ? b("TimeSlice").getContext().contextID
            : null,
          images: k,
        });
      this._informPageletEvent(b("PageletEventConstsJS").DISPLAY_END, a);
      m(a.id, "display", a.phase);
      this.arbiter.inform(a.id + "_displayed", !0, i);
    };
    p.prototype._onPhaseDisplayEnd = function (a) {
      "use strict";
      __p && __p();
      var c = this._getOrCreatePhase(a);
      c.complete = !0;
      if (a === this._ttiPhase) {
        c = b("Bootloader").__debug.predictedResources;
        var d = b("Bootloader").__debug.requested,
          e = 0;
        for (var f in d) e += !(f in c);
        d = { pre_tti_non_ef_resources: e };
        c = b("captureUsageSnapshot")();
        this.isAjax ||
          ((d.cjs_factory_count_tti = b("__getTotalFactories")()),
          (d.cjs_compile_time_tti = b("__getCompileTime")()),
          (d.cjs_factory_time_tti = b("__getFactoryTime")()));
        this._informEventExternal(p.Events.tti, {
          phase: this._ttiPhase,
          rid: this.rid,
          ajax: this.isAjax,
          metrics: d,
          usageSnapshot: c,
        });
        this.arbiter.inform("tti_pagelet_displayed", !0, i);
      }
      e = b("gkx")(
        "AT4kYIk7PhRqUACJJM8qs58t-WNCoM2ZYe35b1xv03xf3OtmC7RfXVIT9hWB6yTOgfA",
      );
      var g = !1;
      this._isRelevant() &&
        (a === this._lastPhaseBeforeLastResponse &&
          ((g = e),
          this._fireDisplayDone(
            function () {
              g && this._nextPhase();
            }.bind(this),
          )),
        a === this._lastPhaseOfLastResponse &&
          (this._displayDoneFired ||
            ((g = e), this._fireDisplayDone(function () {})),
          this.arbiter.inform("pagelet_displayed_all", !0, i)));
      !g && a !== this._lastPhaseOfLastResponse && this._nextPhase();
    };
    p.prototype._nextPhase = function () {
      "use strict";
      this.config.flush_pagelets_asap
        ? h <= 8
          ? b("setTimeout")(this._tryRenderingNextPhase.bind(this), 20)
          : this._tryRenderingNextPhase()
        : (this._currentPhase++,
          h <= 8
            ? b("setTimeout")(
                this._beginPhase.bind(this, this._currentPhase),
                20,
              )
            : this._beginPhase(this._currentPhase));
    };
    p.prototype._fireDisplayDone = function (a) {
      "use strict";
      (this._displayDoneFired = !0),
        b("Env").gk_raf_flush
          ? b("requestAnimationFrame")(
              function () {
                this.arbiter.inform("display_done", !0),
                  (this._displayDone = !0),
                  a();
              }.bind(this),
              {
                priority: b("requestAnimationFrameAcrossTransitions").Priorities
                  .DISPLAY_DONE_LOGGING,
              },
            )
          : (this.arbiter.inform("display_done", !0),
            (this._displayDone = !0),
            a()),
        this.lid && m("display_done", this.lid, "all");
    };
    p.prototype._downloadJsForPagelet = function (a) {
      "use strict";
      __p && __p();
      this._informPageletEvent(b("PageletEventConstsJS").JS_START, a),
        b("Bootloader").loadResources(
          a.allResources || [],
          function () {
            this._informPageletEvent(b("PageletEventConstsJS").JS_END, a);
            a.requires = a.requires || [];
            (!this.isAjax || a.phase >= 1) && a.requires.push("uipage_onload");
            var c = function () {
                this._informPageletEvent(
                  b("PageletEventConstsJS").ONLOAD_START,
                  a,
                ),
                  this._isRelevantPagelet(a) && n(a.onload),
                  this._informPageletEvent(
                    b("PageletEventConstsJS").ONLOAD_END,
                    a,
                  ),
                  this.arbiter.inform("pagelet_onload", !0),
                  a.provides && this.arbiter.inform(a.provides, !0, i);
              }.bind(this),
              d = function () {
                this._isRelevantPagelet(a) && n(a.onafterload);
              }.bind(this);
            this.arbiter.registerCallback(c, a.requires);
            this.arbiter.registerCallback(d, [this.onloadEvt]);
          }.bind(this),
          !1,
          a.id,
        );
    };
    p.prototype._getPagelet = function (a) {
      "use strict";
      a = this._getPageletRootID(a);
      return b("PageletSet").getPagelet(a);
    };
    p.prototype._getPageletRootID = function (a) {
      "use strict";
      return a.append || Object.keys(a.content)[0] || null;
    };
    p.prototype._isRelevant = function () {
      "use strict";
      return (
        this == p._current_instance ||
        (this.automatic && this._relevant_instance == p._current_instance) ||
        this.jsNonBlock ||
        this.forceFinish ||
        (p._current_instance && p._current_instance.allowIrrelevantRequests)
      );
    };
    p.prototype._isRelevantPagelet = function (a) {
      "use strict";
      if (!this._isRelevant()) return !1;
      a = this._getPageletRootID(a);
      return !!this._livePagelets[a];
    };
    p.prototype._informEventExternal = function (a, c, d) {
      "use strict";
      (c = c || {}),
        (d = d || this.arbiter),
        (c.ts = b("performanceAbsoluteNow")()),
        k &&
          console.timeStamp &&
          console.timeStamp(
            a +
              " " +
              (Object.prototype.hasOwnProperty.call(c, "arbiter")
                ? JSON.stringify(
                    babelHelpers["extends"]({}, c, { arbiter: null }),
                  )
                : JSON.stringify(c)),
          ),
        this.lid === null
          ? this._awaitingLIDEventQueue.push([d, a, c])
          : ((c.lid = this.lid), d.inform(a, c, j));
    };
    p.prototype._informPageletEvent = function (a, b) {
      "use strict";
      a = { event: a, id: b.id };
      b.phase && (a.phase = b.phase);
      b.categories && (a.categories = b.categories);
      b.allResources && (a.allResources = b.allResources);
      b.displayResources && (a.displayResources = b.displayResources);
      this._informEventExternal("pagelet_event", a);
    };
    p.prototype._informPageletDisplayDetails = function (a, c, d, e) {
      "use strict";
      if (this.config.dispatch_pagelet_replayable_actions)
        try {
          this._informEventExternal("pagelet_performing_replayable_actions", {
            id: a,
            jsmods: b("fastDeepCopy")(c),
            contentMap: d,
            staticTemplates: e,
          });
        } catch (a) {
          b("FBLogger")("bigpipe_pagelet_replay")
            .catching(a)
            .warn("failed at _informPageletDisplayDetails"),
            this._informEventExternal(
              "pagelet_performing_replayable_actions_failed",
              {},
            );
        }
    };
    p.getCurrentInstance = function () {
      "use strict";
      return p._current_instance;
    };
    Object.assign(p.prototype, {
      beforePageletArrive: function (a) {
        b("TimeSlice").guard(
          function () {
            return this._informPageletEvent(
              b("PageletEventConstsJS").ARRIVE_START,
              { id: a },
            );
          }.bind(this),
          "beforePageletArrive " + a,
          { root: !0 },
        )();
      },
      setPageID: function (a) {
        (this.lid = a),
          this._awaitingLIDEventQueue.forEach(function (b) {
            var c = b[0],
              d = b[1];
            b = b[2];
            b.lid = a;
            c.inform(d, b, j);
          }),
          (this._awaitingLIDEventQueue = []),
          this.lid && l("display_done", this.lid);
      },
      onPageletArrive: b("ErrorUtils").guard(function (a) {
        __p && __p();
        this._informPageletEvent(b("PageletEventConstsJS").ARRIVE_END, a);
        a.content = a.content || {};
        var c = a.phase;
        if (a.all_phases)
          for (
            var d = a.all_phases,
              e = Array.isArray(d),
              f = 0,
              d = e
                ? d
                : d[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var h;
            if (e) {
              if (f >= d.length) break;
              h = d[f++];
            } else {
              f = d.next();
              if (f.done) break;
              h = f.value;
            }
            h = h;
            this._getOrCreatePhase(h);
          }
        h = this._getOrCreatePhase(c);
        h.pagelets.push(a.id);
        this._maxPhase = Math.max(c, this._maxPhase);
        (a.is_last || a.last_in_phase) &&
          this.arbiter.registerCallback(
            function () {
              return this._onPhaseDisplayEnd(c);
            }.bind(this),
            h.pagelets.map(function (a) {
              return a + "_displayed";
            }),
          );
        f = this._getPageletRootID(a);
        var j = b("PageletSet").getOrCreatePagelet(f);
        a.last_pagelet && (this._lastPhaseBeforeLastResponse = this._maxPhase);
        a.the_end && (this._lastPhaseOfLastResponse = c);
        a.tti_phase !== undefined && (this._ttiPhase = a.tti_phase);
        this._livePagelets[j.id] = !0;
        j.addDestructor(
          function () {
            delete this._livePagelets[j.id];
          }.bind(this),
        );
        if (a.jscc_map) {
          e = b("JSCC").parse(a.jscc_map);
          d = b("JSCC").init(e);
          j.addDestructor(d);
        }
        g.add(a.ixData);
        b("gkx").add(a.gkxData);
        b("Bootloader").setResourceMap(a.resource_map || {});
        a.bootloadable && b("Bootloader").enableBootload(a.bootloadable);
        var k,
          l = [];
        h =
          !a.the_end ||
          this._displayDone ||
          !b("gkx")(
            "AT42vHZv2FMRQFxjYy8soPYLMZQ4FvEb3npoHjDNtK5L_ed7xyu66vqbi4snBVFxLSGN0ZKY0U-z6rBE6MS3Ht3lEToi6aqMBaQBAYDf8hAjMw",
          );
        if (a.jsmods && h) {
          f = a.jsmods.define;
          e = a.jsmods.instances;
          d = a.jsmods.markup;
          var m = a.jsmods.pre_display_requires;
          delete a.jsmods.define;
          delete a.jsmods.instances;
          delete a.jsmods.markup;
          delete a.jsmods.pre_display_requires;
          var n = 19e3;
          n = function () {
            if (a.displayStarted) {
              b("FBLogger")("BigPipe").warn(
                "registerToBlockDisplayUntilDone_DONOTUSE called after pagelet %s was displayed. This is a no-op.",
                a.id,
              );
              return function () {};
            }
            var c,
              d,
              e = o + "_preDisplayEvent";
            o++;
            k ? this.arbiter.registerCallback(k, [e]) : l.push(e);
            return b("TimeSlice").guard(
              function () {
                (d = !0), b("clearTimeout")(c), this.arbiter.inform(e, !0, i);
              }.bind(this),
              "BigPipeDisplayBlockingEvent " + e,
              { propagationType: b("TimeSlice").PropagationType.EXECUTION },
            );
          }.bind(this);
          this._informPageletDisplayDetails(
            a.id,
            { define: f, instances: e, markup: d, pre_display_requires: m },
            {},
          );
          this._serverJS.handlePartial(
            { define: f, instances: e, markup: d, pre_display_requires: m },
            {
              pagelet: a.id,
              bigPipeContext: {
                onDisplayDone: this._onDisplayDone,
                registerToBlockDisplayUntilDone_DONOTUSE: n,
              },
            },
          );
        }
        this._informPageletEvent(b("PageletEventConstsJS").SETUP, a);
        if (a.display_out_of_phase === "asap")
          l = l.concat(["first_response_displayed", a.id + "_css_end"]);
        else if (a.display_out_of_phase === "after_tti") {
          var p = a.id + "_greedy_render";
          l = l.concat(["first_response_displayed", a.id + "_css_end", p]);
          var q = !1;
          f = function () {
            if (q) return;
            this.arbiter.inform(p, !0, i);
          }.bind(this);
          this.arbiter.registerCallback(f, ["tti_pagelet_displayed"]);
          this.arbiter.registerCallback(f, ["phase_begin_" + c]);
        } else l = l.concat(["phase_begin_" + a.phase, a.id + "_css_end"]);
        (a.display_dependency || []).forEach(function (a) {
          return l.push(a + "_displayed");
        });
        if (a.display_group) {
          e = document.body.getElementsByClassName("pagelet-group");
          for (var d = 0; d < e.length; d++) {
            m = e[d];
            if (m.id === a.id) break;
            m.getAttribute("data-display-group") === a.display_group &&
              l.push(m.id + "_displayed");
          }
        }
        k = this.arbiter.registerCallback(
          function () {
            this._displayPageletHandler(a);
          }.bind(this),
          l,
        );
        var r = !1;
        n = function () {
          if (r) return;
          r = !0;
          this._informPageletEvent(b("PageletEventConstsJS").CSS_START, a);
          var c = a.displayResources || [];
          b("Bootloader").loadResources(
            c,
            function () {
              this._informPageletEvent(b("PageletEventConstsJS").CSS_END, a),
                this.arbiter.inform(a.id + "_css_end", !0, i);
            }.bind(this),
            !1,
            a.id,
          );
        }.bind(this);
        this.config.flush_pagelets_asap && h
          ? n()
          : this.arbiter.registerCallback(n, ["phase_begin_" + c]);
        this.arbiter.registerCallback(this._loadedCallback, ["pagelet_onload"]);
        f = [a.id + "_displayed"];
        this.jsNonBlock || f.push(this.domContentEvt);
        this.arbiter.registerCallback(
          this._downloadJsForPagelet.bind(this, a),
          f,
        );
      }, "BigPipe#onPageletArrive"),
    });
    p.Events = {
      init: "BigPipe/init",
      tti: "tti_bigpipe",
      displayed: "all_pagelets_displayed",
      loaded: "all_pagelets_loaded",
    };
    function q(a) {
      __p && __p();
      if (!a || typeof a === "string") return a;
      if (a.container_id) {
        var c = b("$")(a.container_id);
        a = r(c) || "";
        c.parentNode.removeChild(c);
        return a;
      }
      a.nodeType && !1;
      return null;
    }
    function r(a) {
      __p && __p();
      if (!a.firstChild) {
        !1;
        b("Bootloader").loadModules(
          ["ErrorSignal"],
          function (a) {
            a.sendErrorSignal("bigpipe", "Pagelet markup container is empty.");
          },
          "BigPipe",
        );
        return null;
      }
      if (a.firstChild.nodeType !== 8) {
        !1;
        return null;
      }
      a = a.firstChild.nodeValue;
      a = a.substring(1, a.length - 1);
      return a.replace(/\\([\s\S]|$)/g, "$1");
    }
    function s(a, b, c) {
      b = t(b);
      for (var d = 0; d < b.childNodes.length; d++) c.push(b.childNodes[d]);
      a.appendChild(b);
    }
    function t(a) {
      __p && __p();
      if (a.nodeType) return a;
      var b = document.createDocumentFragment();
      a = q(a);
      if (a) {
        var c = document.createElement("div");
        c.innerHTML = a;
        while (c.firstChild) b.appendChild(c.firstChild);
      }
      return b;
    }
    e.exports = p;
  },
  18,
);
__d(
  "TimeSliceInteractionLeaveHook",
  ["Run"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [];
    a = {
      registerInteraction: function (a) {
        g.push(a);
        return {
          remove: function () {
            var b = g.indexOf(a);
            b !== -1 && g.splice(b, 1);
          },
        };
      },
    };
    b("Run").onUnload(function () {
      g.forEach(function (a) {
        a
          .trace()
          .addStringAnnotation("ended_early_because_page_is_unloading", "1"),
          a.finish(!0);
      });
    });
    e.exports = a;
  },
  null,
);
__d(
  "pageID",
  [],
  function (a, b, c, d, e, f) {
    e.exports = Math.floor(2147483648 * Math.random()).toString(36);
  },
  18,
);
__d(
  "NavigationMetricsCore",
  ["mixInEventEmitter", "pageID"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
        NAVIGATION_DONE: "NAVIGATION_DONE",
        EVENT_OCCURRED: "EVENT_OCCURRED",
      },
      h = {
        tti: "tti",
        e2e: "e2e",
        all_pagelets_loaded: "all_pagelets_loaded",
        all_pagelets_displayed: "all_pagelets_displayed",
      },
      i = 0,
      j = {};
    function k() {
      "use strict";
      (this.eventTimings = {
        tti: null,
        e2e: null,
        all_pagelets_loaded: null,
        all_pagelets_displayed: null,
      }),
        (this.lid = b("pageID") + ":" + i++),
        (this.extras = {});
    }
    k.prototype.getLID = function () {
      "use strict";
      return this.lid;
    };
    k.prototype.setRequestStart = function (a) {
      "use strict";
      this.start = a;
      return this;
    };
    k.prototype.setTTI = function (a) {
      "use strict";
      this.eventTimings.tti = a;
      this.$1(h.tti, a);
      return this;
    };
    k.prototype.setE2E = function (a) {
      "use strict";
      this.eventTimings.e2e = a;
      this.$1(h.e2e, a);
      return this;
    };
    k.prototype.setExtra = function (a, b) {
      "use strict";
      this.extras[a] = b;
      return this;
    };
    k.prototype.setDisplayDone = function (a) {
      "use strict";
      this.eventTimings.all_pagelets_displayed = a;
      this.setExtra("all_pagelets_displayed", a);
      this.$1(h.all_pagelets_displayed, a);
      return this;
    };
    k.prototype.setAllPageletsLoaded = function (a) {
      "use strict";
      this.eventTimings.all_pagelets_loaded = a;
      this.setExtra("all_pagelets_loaded", a);
      this.$1(h.all_pagelets_loaded, a);
      return this;
    };
    k.prototype.setServerLID = function (a) {
      "use strict";
      this.serverLID = a;
      return this;
    };
    k.prototype.$1 = function (event, a) {
      "use strict";
      var b = {};
      j != null &&
        this.serverLID != null &&
        j[this.serverLID] != null &&
        (b = j[this.serverLID]);
      b = babelHelpers["extends"]({}, b, { event: event, timestamp: a });
      l.emitAndHold(g.EVENT_OCCURRED, this.serverLID, b);
      return this;
    };
    k.prototype.doneNavigation = function () {
      "use strict";
      var a = babelHelpers["extends"](
        { start: this.start, extras: this.extras },
        this.eventTimings,
      );
      if (this.serverLID && j[this.serverLID]) {
        var b = this.serverLID;
        Object.assign(a, j[b]);
        delete j[b];
      }
      l.emitAndHold(g.NAVIGATION_DONE, this.lid, a);
    };
    var l = {
      Events: g,
      postPagelet: function (a, b, c) {},
      siteInit: function (a) {
        a(k);
      },
      setPage: function (a) {
        if (!a.serverLID) return;
        j[a.serverLID] = {
          page: a.page,
          pageType: a.page_type,
          pageURI: a.page_uri,
          serverLID: a.serverLID,
        };
      },
      getFullPageLoadLid: function () {
        throw new Error("getFullPageLoadLid is not implemented on this site");
      },
    };
    b("mixInEventEmitter")(l, g);
    e.exports = l;
  },
  18,
);
__d(
  "NavigationMetrics",
  ["Arbiter", "BigPipe", "NavigationMetricsCore", "PageEvents", "performance"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = "0";
    b("NavigationMetricsCore").getFullPageLoadLid = function () {
      return g;
    };
    b("NavigationMetricsCore").siteInit(function (a) {
      __p && __p();
      var c = new a(),
        d = !0;
      b("Arbiter").subscribe(b("BigPipe").Events.init, function (e, f) {
        __p && __p();
        var h = d ? c : new a();
        d && (g = f.lid);
        d = !1;
        h.setServerLID(f.lid);
        e = f.arbiter;
        e.subscribe(b("BigPipe").Events.tti, function (a, b) {
          a = b.ts;
          h.setTTI(a);
        });
        e.subscribe(b("PageEvents").AJAXPIPE_SEND, function (a, b) {
          a = b.ts;
          h.setRequestStart(a);
        });
        e.subscribe(b("PageEvents").AJAXPIPE_ONLOAD, function (a, b) {
          a = b.ts;
          h.setE2E(a).doneNavigation();
        });
        e.subscribe(b("BigPipe").Events.displayed, function (a, b) {
          a = b.ts;
          h.setDisplayDone(a);
        });
        e.subscribe(b("BigPipe").Events.loaded, function (a, b) {
          a = b.ts;
          h.setAllPageletsLoaded(a);
        });
      });
      b("Arbiter").subscribe(b("PageEvents").BIGPIPE_ONLOAD, function (a, e) {
        a = e.ts;
        d = !1;
        c.setRequestStart(
          b("performance").timing && b("performance").timing.navigationStart,
        )
          .setE2E(a)
          .doneNavigation();
      });
    });
    e.exports = b("NavigationMetricsCore");
  },
  18,
);
__d(
  "TimeSliceInteractionPageStatsHook",
  ["NavigationMetrics"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g,
      h = [];
    b("NavigationMetrics").addRetroactiveListener(
      b("NavigationMetrics").Events.NAVIGATION_DONE,
      function (a, b) {
        if (b.pageType !== "normal") return;
        g = {
          start: b.start,
          dd: b.all_pagelets_displayed,
          tti: b.tti,
          e2e: b.e2e,
        };
        for (var a = 0; a < h.length; a++) {
          b = h[a];
          i(b);
          b.countDown();
        }
        h = [];
      },
    );
    function i(a) {
      g
        ? (a.trace().addStringAnnotation("page_start", "" + g.start),
          a.trace().addStringAnnotation("page_tti", "" + g.tti),
          a.trace().addStringAnnotation("page_dd", "" + g.dd),
          a.trace().addStringAnnotation("page_e2e", "" + g.e2e))
        : (a.countUp(), h.push(a));
    }
    a = {
      registerInteraction: function (a) {
        i(a);
        return {
          remove: function () {
            var b = h.indexOf(a);
            b !== -1 && h.splice(b, 1);
          },
        };
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "TimeSliceInteractionResourcesDataSource",
  ["SiteData", "TimeSliceInteractionExtraSaver"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      registerInteraction: function (a) {
        a.countDown(),
          a.registerOnBeforeFinish(function (a) {
            a.recordWithExtraSaver(
              b("TimeSliceInteractionExtraSaver").RESOURCES_SAVER,
              "info",
              {
                client_revision: b("SiteData").client_revision,
                pkg_cohort: b("SiteData").pkg_cohort,
              },
            );
          });
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "BrowserEventBasedInteraction",
  [
    "Bootloader",
    "FBLogger",
    "PageDOMMutationObserver",
    "TimeSliceAutoclosedInteraction",
    "TimeSliceInteractionCancelHook",
    "TimeSliceInteractionEventHook",
    "TimeSliceInteractionLeaveHook",
    "TimeSliceInteractionPageStatsHook",
    "TimeSliceInteractionResourcesDataSource",
    "performanceAbsoluteNow",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g,
      h = [
        b("TimeSliceInteractionCancelHook"),
        b("TimeSliceInteractionEventHook"),
        b("TimeSliceInteractionLeaveHook"),
        b("TimeSliceInteractionPageStatsHook"),
      ];
    a = babelHelpers.inherits(i, b("TimeSliceAutoclosedInteraction"));
    g = a && a.prototype;
    function i(a, c, d) {
      __p && __p();
      g.constructor.call(this, "Event", [
        b("TimeSliceInteractionResourcesDataSource"),
      ]);
      this.$BrowserEventBasedInteraction2 = [];
      this.$BrowserEventBasedInteraction4 = null;
      this.$BrowserEventBasedInteraction5 = null;
      this.$BrowserEventBasedInteraction6 = null;
      this.$BrowserEventBasedInteraction7 = 0;
      this.$BrowserEventBasedInteraction8 = 0;
      this.$BrowserEventBasedInteraction1 = c;
      [].push.apply(this.$BrowserEventBasedInteraction2, a);
      this.setExtraSampleRate(d);
      var e = h.map(
        function (a) {
          a.registerInteraction(this);
        }.bind(this),
      );
      this.registerOnCleanUp(function () {
        e.forEach(function (a) {
          return a && a.remove();
        });
      });
      this.registerOnBeforeSend(
        function () {
          this.trace().addVectorAnnotation(
            "interaction_ids",
            this.$BrowserEventBasedInteraction2,
          );
        }.bind(this),
      );
      this.trace().addStringAnnotation(
        "is_mutation_observer_supported",
        b("PageDOMMutationObserver").isSupported() ? "1" : "0",
      );
    }
    i.prototype.getEventType = function () {
      return this.$BrowserEventBasedInteraction1;
    };
    i.prototype.tagAsInteractionID = function (a) {
      this.$BrowserEventBasedInteraction2.push(a);
    };
    i.prototype.hasInteractionIDs = function (a) {
      __p && __p();
      for (
        var a = a,
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var d;
        if (b) {
          if (c >= a.length) break;
          d = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          d = c.value;
        }
        d = d;
        if (!this.$BrowserEventBasedInteraction2.includes(d)) return !1;
      }
      return !0;
    };
    i.prototype.addEagerExecution = function (a, b, c) {
      this.waitForReferenceCounter(a),
        this.addProfilingCounterAttribution(b),
        [].push.apply(this.$BrowserEventBasedInteraction2, c);
    };
    i.prototype.setManualStartAndEnd = function (a, b, c, d) {
      this.$BrowserEventBasedInteraction7++,
        this.$BrowserEventBasedInteraction8++,
        (this.$BrowserEventBasedInteraction3 = a),
        (this.$BrowserEventBasedInteraction4 = b),
        (this.$BrowserEventBasedInteraction5 = c),
        (this.$BrowserEventBasedInteraction6 = d),
        this.isEnabled()
          ? this.addManualInstrumentationData()
          : d || this.logManualInstrumentationData();
    };
    i.prototype.markManualStart = function (a, c) {
      this.$BrowserEventBasedInteraction7++,
        this.$BrowserEventBasedInteraction4 ||
          ((this.$BrowserEventBasedInteraction4 =
            c || b("performanceAbsoluteNow")()),
          (this.$BrowserEventBasedInteraction3 = a),
          this.isEnabled() &&
            (this.countUp(),
            this.registerOnBeforeFinish(
              function () {
                this.addManualInstrumentationData();
              }.bind(this),
            )));
    };
    i.prototype.markManualEnd = function (a) {
      if (!this.$BrowserEventBasedInteraction4) {
        b("FBLogger")("event_profiler").warn(
          "Attempting to mark end for interaction which never had start marked",
        );
        return;
      }
      this.$BrowserEventBasedInteraction8++;
      this.$BrowserEventBasedInteraction5 = a || b("performanceAbsoluteNow")();
      this.$BrowserEventBasedInteraction6 =
        this.hasActiveReferenceCountingHandle();
      !this.isEnabled() && !this.$BrowserEventBasedInteraction6
        ? this.logManualInstrumentationData()
        : this.isEnabled() &&
          this.$BrowserEventBasedInteraction8 === 1 &&
          this.countDown();
    };
    i.prototype.getManualInstrumentationData = function () {
      var a = {};
      this.$BrowserEventBasedInteraction4 &&
        this.$BrowserEventBasedInteraction3 &&
        ((a.manual_instrumentation_start =
          "" + this.$BrowserEventBasedInteraction4),
        (a.manual_instrumentation_marked_start_count =
          "" + this.$BrowserEventBasedInteraction7),
        (a.manual_instrumentation_start_reference_counted = "1"));
      this.$BrowserEventBasedInteraction5 &&
        ((a.manual_instrumentation_end =
          "" + this.$BrowserEventBasedInteraction5),
        (a.manual_instrumentation_marked_end_count =
          "" + this.$BrowserEventBasedInteraction8),
        (a.manual_instrumentation_end_reference_counted = this
          .$BrowserEventBasedInteraction6
          ? "1"
          : "0"));
      this.$BrowserEventBasedInteraction4 &&
        this.$BrowserEventBasedInteraction5 &&
        (a.manual_instrumentation_duration =
          "" +
          (this.$BrowserEventBasedInteraction5 -
            this.$BrowserEventBasedInteraction4));
      return a;
    };
    i.prototype.addManualInstrumentationData = function () {
      var a = this.getManualInstrumentationData();
      Object.keys(a).forEach(
        function (b) {
          this.trace().addStringAnnotation(b, a[b]);
        }.bind(this),
      );
      this.trace().addVectorAnnotation(
        "manual_instrumentation_interaction_ids",
        this.$BrowserEventBasedInteraction3 || [],
      );
      a.manual_instrumentation_start &&
        this.inform("manual_instrumentation_start", {
          ts: parseFloat(a.manual_instrumentation_start),
        }).addStringAnnotation("visual_role", "global_signpost");
      a.manual_instrumentation_end &&
        this.inform("manual_instrumentation_end", {
          ts: parseFloat(a.manual_instrumentation_end),
        }).addStringAnnotation("visual_role", "global_signpost");
    };
    i.prototype.logManualInstrumentationData = function () {
      var a = this.$BrowserEventBasedInteraction3 || [],
        c = this.getManualInstrumentationData();
      c.lite_weight = "1";
      b("Bootloader").loadModules(
        ["TimeSliceInteractionsLiteTypedLogger", "PerfXSharedFields"],
        function (b, d) {
          new b()
            .setActionName("Event")
            .setTraceAnnotations({
              stringProps: c,
              setProps: {},
              vectorProps: {
                manual_instrumentation_interaction_ids: a,
                interaction_ids: this.$BrowserEventBasedInteraction2,
              },
            })
            .updateData(d.getCommonData())
            .logVital();
        }.bind(this),
        "BrowserEventBasedInteraction",
      );
    };
    i.prototype.getActiveBrowserEventBasedInteractions = function () {
      return b("TimeSliceAutoclosedInteraction")
        .getInteractionsActiveRightNow()
        .filter(function (a) {
          return a instanceof i;
        });
    };
    e.exports = i;
  },
  null,
);
__d(
  "EventProfilerAdsSessionProvider",
  ["AdsInterfacesSessionConfig"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = { sessionID: b("AdsInterfacesSessionConfig").sessionID };
  },
  null,
);
__d(
  "EventProfilerEagerExecution",
  [
    "EventConfig",
    "FBLogger",
    "ProfilingCounters",
    "TimeSliceReferenceCounting",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 0,
      h = {},
      i = 0,
      j = {};
    function k(a, c, d) {
      __p && __p();
      this.interaction = null;
      this.$2 = [];
      this.$3 = [];
      this.$4 = [];
      this.$5 = [];
      this.id = i++;
      this.$6 = a;
      for (var d = 0; d < a.length; d++)
        j[a[d]] &&
          b("FBLogger")("event_profiler")
            .blameToPreviousDirectory()
            .mustfix(
              "Declaring multiple eager executions for the same interaction not supported: %s",
              a[d],
            ),
          (j[a[d]] = this);
      d = "eagerly_executed_tree_" + ++g;
      b("EventConfig").profile_eager_execution &&
        ((this.handle = b("TimeSliceReferenceCounting").onAllChildrenFinished(
          function () {
            this.finish();
          }.bind(this),
          c !== 0,
        )),
        c &&
          b("ProfilingCounters")
            .currentContext()
            .addAttribution(
              d,
              b("ProfilingCounters").AttributionPropagation
                .ONLY_ON_CONTINUATIONS,
            ));
      this.sampleWeight = c;
      this.$1 = d;
      h[this.id] = this;
    }
    k.prototype.hasInteractionIDs = function (a) {
      __p && __p();
      for (
        var a = a,
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var d;
        if (b) {
          if (c >= a.length) break;
          d = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          d = c.value;
        }
        d = d;
        if (!this.$6.includes(d)) return !1;
      }
      return !0;
    };
    k.prototype.__registerInteractionWePotentiallyEagerlyExecutedFor =
      function (a) {
        this.$2.push(a);
      };
    k.prototype.attributeToCurrentlyActiveInteraction = function () {
      __p && __p();
      var a = this,
        b = this.handle;
      if (!b) return;
      var c = function () {
        __p && __p();
        if (e) {
          if (f >= d.length) return "break";
          g = d[f++];
        } else {
          f = d.next();
          if (f.done) return "break";
          g = f.value;
        }
        var c = g;
        if (c.hasActiveReferenceCountingHandle()) {
          c.addEagerExecution(b, a.$1, a.$3.slice());
          a.interaction = c;
          a.$4.forEach(function (a) {
            return a(c);
          });
          a.$4 = [];
          return "break";
        }
      };
      for (
        var d = this.$2,
          e = Array.isArray(d),
          f = 0,
          d = e
            ? d
            : d[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var g,
          h = c();
        if (h === "break") break;
      }
    };
    k.prototype.tagAsInteractionID = function (a) {
      this.$3.push(a);
    };
    k.prototype.withInteraction = function (a) {
      !this.interaction ? this.$4.push(a) : a(this.interaction);
    };
    k.prototype.isActive = function () {
      return !!(this.handle && this.handle.isInsideContinuationExecution());
    };
    k.prototype.onFinish = function (a) {
      this.$5.push(a);
    };
    k.prototype.finish = function () {
      delete h[this.id],
        this.$5.forEach(function (a) {
          return a();
        }),
        (this.$5 = []);
    };
    a = {
      declareEagerExecution: function (a, b, c) {
        a = new k(a, c, b);
        var d = a.id;
        return function () {
          h[d] && h[d].attributeToCurrentlyActiveInteraction();
        };
      },
      getEagerExecution: function (a, b) {
        var c = a
          .map(function (a) {
            return j[a];
          })
          .filter(function (b) {
            return b && b.hasInteractionIDs(a);
          });
        b = c.filter(function (a, b) {
          return b === c.indexOf(a);
        });
        return b.length == 1 ? b[0] : null;
      },
      getActiveExecutions: function () {
        return Object.values(h).filter(function (a) {
          return a.handle && a.handle.isInsideContinuationExecution();
        });
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "EventProfilerInteractionTracker",
  [
    "Bootloader",
    "BrowserEventBasedInteraction",
    "EventProfilerEagerExecution",
    "EventConfig",
    "performanceAbsoluteNow",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [],
      h =
        b("EventConfig").profile_eager_execution &&
        b("EventConfig").manual_instrumentation;
    a = {
      createNewInteraction: function (a, c, d, e) {
        __p && __p();
        if (!a.length) return null;
        var f = (e && e.sampleWeight) || 0,
          i;
        (h || d || f) &&
          (i = new (b("BrowserEventBasedInteraction"))(a, c, 1 / (f || d)));
        if (i && e) {
          var j = e;
          j.__registerInteractionWePotentiallyEagerlyExecutedFor(i);
          i.registerOnBeforeSend(function () {
            i &&
              i !== j.interaction &&
              (d ? i.setExtraSampleRate(1 / d) : i.disable());
          });
        }
        if (i) {
          var k = i;
          g.push(i);
          i.onReferenceCountedExecutionFinished(function () {
            var a = g.indexOf(k);
            a !== -1 && g.splice(a, 1);
          });
        }
        f === 0 && d === 0 && i && i.disable();
        return d === 0 ? null : i;
      },
      markManualStart: function (a, c, d) {
        __p && __p();
        if (!h) return { markManualEnd: function () {} };
        var e = g.filter(function (b) {
            return b.hasInteractionIDs(a) && b.getEventType() === c;
          }),
          f = b("EventProfilerEagerExecution").getActiveExecutions();
        if (e.length === 1) return i(e[0], a, d);
        else if (f.length === 1) return l(f[0], a, d);
        else {
          e.forEach(function (a) {
            a.trace().addStringAnnotation(
              "has_manual_instrumentation_conflict",
              "1",
            );
          });
          return j(a, e.length + f.length, d);
        }
      },
    };
    function i(a, b, c) {
      a.markManualStart(b, c);
      return {
        markManualEnd: function (b) {
          a.markManualEnd(b);
        },
      };
    }
    function j(a, c, d) {
      var e = d || b("performanceAbsoluteNow")();
      return {
        markManualEnd: function (d) {
          d = d || b("performanceAbsoluteNow")();
          k(e, d, a, c);
        },
      };
    }
    function k(a, c, d, e) {
      var f = {
        manual_instrumentation_start: "" + a,
        manual_instrumentation_end: "" + c,
        manual_instrumentation_duration: "" + (c - a),
        manual_instrumentation_start_reference_counted: "0",
        manual_instrumentation_end_reference_counted: "0",
        lite_weight: "1",
      };
      e && (f.manual_instrumentation_conflicts = "" + e);
      b("Bootloader").loadModules(
        ["TimeSliceInteractionsLiteTypedLogger", "PerfXSharedFields"],
        function (a, b) {
          new a()
            .setActionName("Event")
            .setTraceAnnotations({
              stringProps: f,
              setProps: {},
              vectorProps: { manual_instrumentation_interaction_ids: d },
            })
            .updateData(b.getCommonData())
            .logVital();
        },
        "EventProfilerInteractionTracker",
      );
    }
    function l(a, c, d) {
      __p && __p();
      var e = d || b("performanceAbsoluteNow")(),
        f,
        g,
        h,
        i = !1;
      function j() {
        f &&
          g !== undefined &&
          !i &&
          h !== undefined &&
          ((i = !0), g ? g.setManualStartAndEnd(c, e, f, h) : k(e, f, c));
      }
      var l;
      a.withInteraction(function (a) {
        (l = a),
          a.onReferenceCountedExecutionFinished(function () {
            a.hasInteractionIDs(c) ? (g = a) : (g = null), j();
          });
      });
      a.onFinish(function () {
        l || ((g = !1), j());
      });
      return {
        markManualEnd: function (c) {
          if (f) return;
          h = a.isActive() || (l && l.hasActiveReferenceCountingHandle()) || !1;
          f = c || b("performanceAbsoluteNow")();
          j();
        },
      };
    }
    e.exports = a;
  },
  null,
);
__d(
  "EventProfilerSampler",
  ["EventConfig"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = b("EventConfig").interaction_boost,
      h = b("EventConfig").event_types,
      i = b("EventConfig").sampling || {},
      j = b("EventConfig").page_sampling_boost || 1,
      k = [];
    Object.keys(b("EventConfig").interaction_regexes).forEach(function (a) {
      k.push({
        id: a,
        regex: new RegExp(b("EventConfig").interaction_regexes[a]),
      });
    });
    a = "click";
    c = "mouseup";
    var l = [a, c],
      m = a;
    d = {
      canSample: function (a) {
        return !!i[a];
      },
      getEventSampleWeights: function (event, a) {
        event.__samplingWeights == undefined &&
          (event.__samplingWeights = {
            interaction: n(this.getInteractionWeight(event, a)),
            event: n(this.getEventWeight(event)),
          });
        return event.__samplingWeights;
      },
      getInteractionWeight: function (event, a) {
        __p && __p();
        var b = event.type in i ? i[event.type] : 1;
        if (!b || !a || !a.length) return 0;
        var c = 1;
        for (
          var a = a,
            d = Array.isArray(a),
            e = 0,
            a = d
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var f;
          if (d) {
            if (e >= a.length) break;
            f = a[e++];
          } else {
            e = a.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          if (g[f]) {
            c = g[f];
            break;
          }
        }
        return (b * i.__interactionDefault) / c;
      },
      getEventWeight: function (event) {
        var a = event.type in i ? i[event.type] : 1;
        a /= j;
        return a * i.__eventDefault;
      },
      getEventInteractionIDs: function (a, b) {
        __p && __p();
        if (l.indexOf(a) === -1) return [];
        var c = [];
        for (
          var b = b,
            d = Array.isArray(b),
            e = 0,
            b = d
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var f;
          if (d) {
            if (e >= b.length) break;
            f = b[e++];
          } else {
            e = b.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          for (var g = 0; g < k.length; g++) {
            var i = k[g];
            if (i.regex.test(f)) {
              var j = h[i.id];
              if (j) {
                if (j.indexOf(a) === -1) continue;
              } else if (a !== m) continue;
              c.push(i.id);
            }
          }
        }
        return c;
      },
    };
    function n(a) {
      if (a === 0) return 0;
      var b = i.__min || 1;
      a = Math.round(Math.max(b, a));
      return Math.random() * a < 1 ? a : 0;
    }
    e.exports = d;
  },
  null,
);
__d(
  "SubscriptionList",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a, b) {
      "use strict";
      (this.$1 = []), (this.$2 = a), (this.$3 = b);
    }
    a.prototype.add = function (a) {
      "use strict";
      var b = { callback: a };
      this.$1.push(b);
      this.$2 && this.$1.length === 1 && this.$2();
      return {
        remove: function () {
          var a = this.$1.indexOf(b);
          a !== -1 || g(0);
          this.$1.splice(a, 1);
          this.$3 && this.$1.length === 0 && this.$3();
        }.bind(this),
      };
    };
    a.prototype.getCallbacks = function () {
      "use strict";
      return this.$1.map(function (a) {
        return a.callback;
      });
    };
    a.prototype.fireCallbacks = function (a) {
      "use strict";
      this.getCallbacks().forEach(function (b) {
        b(a);
      });
    };
    e.exports = a;
  },
  18,
);
__d(
  "TimeSpentPageTransitionCause",
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      PAGE_LOAD: "load",
      PAGE_UNLOAD: "unload",
      TRANSITION: "transition",
      OPEN_OVERLAY_VIEW: "open_overlay_view",
      REPLACE_OVERLAY_VIEW: "replace_overlay_view",
      CLOSE_OVERLAY_VIEW: "close_overlay_view",
    });
  },
  null,
);
__d(
  "WebStorage",
  ["ErrorUtils", "ex"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {},
      h = {};
    function i(a, b, c) {
      Object.prototype.hasOwnProperty.call(g, c) || (g[c] = b(c));
      return g[c];
    }
    function j(a) {
      try {
        return window[a];
      } catch (a) {
        !1;
      }
      return null;
    }
    function k(a) {
      __p && __p();
      try {
        a = window[a];
        if (a) {
          var b = "__test__" + Date.now();
          a.setItem(b, "");
          a.removeItem(b);
        }
        return a;
      } catch (a) {
        !1;
      }
      return null;
    }
    function l(a) {
      var b = [];
      for (var c = 0; c < a.length; c++) b.push(a.key(c) || "");
      return b;
    }
    function a(a, c, d) {
      var e = null;
      try {
        a.setItem(c, d);
      } catch (g) {
        var f = l(a).map(function (b) {
          var c = (a.getItem(b) || "").length;
          return b + "(" + c + ")";
        });
        e = new Error(
          b("ex")(
            "%sStorage quota exceeded while setting %s(%s). Items(length) follows: %s",
            g.name ? g.name + ": " : "",
            c,
            d.length,
            f.join(),
          ),
        );
        b("ErrorUtils").reportError(e);
      }
      return e;
    }
    c = {
      getLocalStorage: function () {
        return i(g, k, "localStorage");
      },
      getSessionStorage: function () {
        return i(g, k, "sessionStorage");
      },
      getLocalStorageForRead: function () {
        return i(h, j, "localStorage");
      },
      getSessionStorageForRead: function () {
        return i(h, j, "sessionStorage");
      },
      setItemGuarded: a,
    };
    e.exports = c;
  },
  18,
);
__d(
  "isInIframe",
  [],
  function (a, b, c, d, e, f) {
    var g = window != window.top;
    function a() {
      return g;
    }
    e.exports = a;
  },
  18,
);
__d(
  "ScriptPath",
  [
    "ErrorUtils",
    "SubscriptionList",
    "TimeSlice",
    "TimeSpentPageTransitionCause",
    "WebStorage",
    "isInIframe",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = "sp_pi",
      h = 1e3 * 30,
      i = null,
      j = null,
      k = new (b("SubscriptionList"))(),
      l = null,
      m = [],
      n = b("TimeSlice").guard(
        function (a, c) {
          k.getCallbacks().forEach(function (d) {
            b("ErrorUtils").applyWithGuard(function () {
              d({ source: i, dest: j, cause: a, extraData: c });
            });
          });
        },
        "ScriptPath Notifying callbacks",
        { propagationType: b("TimeSlice").PropagationType.ORPHAN },
      );
    function o() {
      return j ? j.scriptPath : undefined;
    }
    function p() {
      var a = b("WebStorage").getSessionStorage();
      if (!a || b("isInIframe")()) return;
      a.setItem(
        g,
        JSON.stringify({ pageInfo: j, clickPoint: l, time: Date.now() }),
      );
    }
    function a() {
      var a = b("WebStorage").getSessionStorageForRead();
      if (!a) return;
      var c = a.getItem(g);
      if (c) {
        c = JSON.parse(c);
        c &&
          (c.time < Date.now() - h &&
            ((a = b("WebStorage").getSessionStorage()), a && a.removeItem(g)),
          (j = c.pageInfo),
          (l = c.clickPoint),
          j && (j.restored = !0));
      }
    }
    a();
    c = {
      set: function (a, b, c) {
        (i = j),
          (j = { scriptPath: a, categoryToken: b, extraData: c || {} }),
          (m = []),
          (window._script_path = a),
          n();
      },
      openOverlayView: function (a, c, d) {
        if (!a) return;
        var e = m.length;
        (e === 0 || m[e - 1] !== a) &&
          ((i = Object.assign({}, j)),
          j && (j.topViewEndpoint = a),
          d && d.replaceTopOverlay && e > 0
            ? ((m[e - 1] = a),
              n(b("TimeSpentPageTransitionCause").REPLACE_OVERLAY_VIEW, c))
            : (m.push(a),
              n(b("TimeSpentPageTransitionCause").OPEN_OVERLAY_VIEW, c)));
      },
      closeOverlayView: function (a, c) {
        a = m.lastIndexOf(a);
        if (a === -1) return;
        i = Object.assign({}, j);
        j &&
          (a > 0 ? (j.topViewEndpoint = m[a - 1]) : (j.topViewEndpoint = null));
        m = m.slice(0, a);
        n(b("TimeSpentPageTransitionCause").CLOSE_OVERLAY_VIEW, c);
      },
      setClickPointInfo: function (a) {
        (l = a), p();
      },
      getClickPointInfo: function () {
        return l;
      },
      getScriptPath: o,
      getCategoryToken: function () {
        return j ? j.categoryToken : undefined;
      },
      getTopViewEndpoint: function () {
        var a = m.length;
        return a > 0 ? m[a - 1] : o();
      },
      getPageInfo: function () {
        return j;
      },
      getSourcePageInfo: function () {
        return i;
      },
      subscribe: function (a) {
        return k.add(b("TimeSlice").guard(a, "ScriptPath.subscribe"));
      },
      shutdown: function () {
        p();
      },
    };
    e.exports = c;
  },
  18,
);
__d(
  "getParentClassesForEventProfiler",
  ["cx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    function h(a) {
      __p && __p();
      if (!a || !(a instanceof HTMLElement)) return "";
      var b = a.id,
        c = a.nodeName,
        d = a.getAttribute("class");
      c = c ? c.replace(/^#/, "") : "unknown";
      b = b ? "#" + b : "";
      d = d ? " " + d.replace(/\s+/g, " ").trim() : "";
      if (a.getAttribute("rel") === "theater") {
        a = "_342u";
        d = d.length ? d + " " + a : a;
      }
      return ":" + c + b + d;
    }
    function a(a) {
      var b = [];
      while (a && a instanceof HTMLElement) b.push(h(a)), (a = a.parentElement);
      b.reverse();
      return b;
    }
    e.exports = a;
  },
  null,
);
__d(
  "EventProfiler",
  [
    "Arbiter",
    "Bootloader",
    "BrowserEventBasedInteraction",
    "CurrentEventMeta",
    "EventConfig",
    "EventProfilerAdsSessionProvider",
    "EventProfilerEagerExecution",
    "EventProfilerInteractionTracker",
    "EventProfilerSampler",
    "Parent",
    "ScriptPath",
    "TimeSlice",
    "TimeSliceAutoclosedInteraction",
    "UserAgent",
    "getParentClassesForEventProfiler",
    "performanceAbsoluteNow",
    "requestAnimationFrameAcrossTransitions",
    "setTimeoutAcrossTransitions",
    "uniqueID",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {},
      h = {},
      i = {},
      j = !0,
      k = new Set(["click", "keydown", "mousewheel", "scroll"]),
      l = null,
      m = null,
      n = function (a, b) {},
      o = null,
      p = null,
      q = !1;
    b("Arbiter").subscribe("perf_nub_interaction_trace", function (a, b) {
      q = !0;
    });
    var r = {
      __wrapEventListenHandler: function (a) {
        __p && __p();
        return b("EventConfig").disable_event_profiler
          ? a
          : function (c, event) {
              __p && __p();
              if (!b("EventProfilerSampler").canSample(c))
                return a.call(this, c, event);
              var d,
                e = { interaction: 0, event: 0 },
                f = b("performanceAbsoluteNow")();
              event.id = event.id || b("uniqueID")();
              var p = event.id;
              b("CurrentEventMeta").__setCurrentEventID(p);
              var r = i[p],
                v = null;
              if (h[p] === undefined && !r) {
                v = b("getParentClassesForEventProfiler")(event.target);
                var w = b("EventProfilerSampler").getEventInteractionIDs(c, v);
                d = b("EventProfilerEagerExecution").getEagerExecution(w, c);
                q && c === "click"
                  ? (w.push("PerfNubTrace"),
                    (e = { interaction: 1, event: 1 }),
                    (q = !1))
                  : (e = b("EventProfilerSampler").getEventSampleWeights(
                      event,
                      w,
                    ));
                l = b("EventProfilerInteractionTracker").createNewInteraction(
                  w,
                  c,
                  e.interaction,
                  d,
                );
                w = a.call(this, c, event);
                i[p] = b("TimeSlice").getGuardedContinuation(
                  "Event Bubble Continuation",
                );
              } else
                (e = b("EventProfilerSampler").getEventSampleWeights(
                  event,
                  [],
                )),
                  (w = r(
                    function () {
                      i[p] = b("TimeSlice").getGuardedContinuation(
                        "Event Bubble Continuation",
                      );
                      return a.call(this, c, event);
                    }.bind(this),
                  ));
              d = b("performanceAbsoluteNow")();
              if (h[p] === undefined) {
                v = v;
                r = t(event);
                r = r || f;
                var x = Math.max(f - r, 0),
                  y = u(event.target, "data-referrer"),
                  z = null;
                b("UserAgent").isBrowser("Chrome") && (z = !!event.cancelable);
                var A =
                  z &&
                  (!!event.deliberateSync ||
                    b("UserAgent").isBrowser("Chrome < 51"));
                h[p] = {
                  event_name: c,
                  event_start_ms: Math.round(r),
                  main_thread_wait_ms: Math.round(x),
                  event_handlers_runtime_ms: 0,
                  script_path: b("ScriptPath").getScriptPath() || "<unknown>",
                  request_animation_frame_wait_ms: 0,
                  set_timeout_wait_ms: 0,
                };
                g[p] = {
                  event_target_raw: v,
                  weight: e.event,
                  cancelable: z,
                  deliberate_sync: A,
                  ad_account_id: m,
                  event_end_ms: 0,
                };
                r = b("EventProfilerAdsSessionProvider").sessionID;
                r && (g[p].ads_session_id = r);
                o != null && o(g[p]);
                k.has(c) &&
                  ((g[p].is_first_in_frame = j), (j = !1), n(c, event.target));
                if (l) {
                  x = l.trace();
                  x.addVectorAnnotation(
                    "event_target_stack",
                    v,
                  ).addVectorAnnotation("pagelets", y);
                }
                var B = l;
                b("requestAnimationFrameAcrossTransitions")(function () {
                  __p && __p();
                  l = null;
                  var a = b("performanceAbsoluteNow")();
                  h[p].request_animation_frame_wait_ms = Math.round(
                    a - g[p].event_end_ms,
                  );
                  delete g[p].event_end_ms;
                  b("setTimeoutAcrossTransitions")(function () {
                    __p && __p();
                    b("setTimeoutAcrossTransitions")(function () {
                      j = !0;
                    }, 50);
                    var c = b("performanceAbsoluteNow")();
                    h[p].set_timeout_wait_ms = Math.round(c - a);
                    s(p, f, c);
                    c = i[p];
                    c && (b("TimeSlice").cancel(c), delete i[p]);
                    B && B.inform("TTI", { isPointOfInterest: !0 });
                    delete h[p];
                    delete g[p];
                  }, 0);
                });
              }
              h[p].event_handlers_runtime_ms += d - f;
              g[p].event_end_ms = d;
              b("CurrentEventMeta").__setCurrentEventID(null);
              l &&
                l.informPointWithOverride("tti_ts", { isPointOfInterest: !0 });
              return w;
            };
      },
      tagCurrentActiveInteractionsAs: function (a) {
        r.getActiveInteractions().forEach(function (b) {
          b.tagAsInteractionID(a);
        }),
          b("EventProfilerEagerExecution")
            .getActiveExecutions()
            .forEach(function (b) {
              return b.tagAsInteractionID(a);
            });
      },
      informManualInteractionTimestamp: function (a, b, c) {},
      markManualStart: function (a, c, d) {
        return b("EventProfilerInteractionTracker").markManualStart(a, c, d);
      },
      getActiveInteractions: function () {
        return b("TimeSliceAutoclosedInteraction")
          .getInteractionsActiveRightNow()
          .filter(function (a) {
            return (
              a instanceof b("BrowserEventBasedInteraction") && a.isEnabled()
            );
          });
      },
      informPointOnActiveInteractions: function (a, b, c) {
        r.getActiveInteractions().map(function (d) {
          d = d.inform(a, b);
          c && d.addStringAnnotation("is_goal_point", "1");
        });
      },
      notifyRunningEagerInteraction: function (a, c) {
        var d = b("EventProfilerSampler").getEventSampleWeights({ type: c }, a);
        return b("EventProfilerEagerExecution").declareEagerExecution(
          a,
          c,
          d.interaction,
        );
      },
      setCurrentAdAccountId: function (a) {
        m = a;
      },
      setAdsEventListener: function (a) {
        n = a;
      },
      setApplyAdsLoggingFields: function (a) {
        o = a;
      },
      setAdsLogInteraction: function (a) {
        p = a;
      },
    };
    function s(a, c, d) {
      c = h[a];
      c.event_handlers_runtime_ms = Math.round(c.event_handlers_runtime_ms);
      var e = Object.assign({}, h[a], g[a]);
      p != null && p(e);
      e.weight &&
        b("Bootloader").loadModules(
          ["WebSpeedInteractionsTypedLogger", "PerfXSharedFields"],
          function (a, b) {
            b.addCommonValues(e), new a().updateData(e).log();
          },
          "EventProfiler",
        );
      b("CurrentEventMeta").__informEventDataReady(a, h[a]);
    }
    var t = (function () {
      function b(event) {
        return null;
      }
      if (
        !a.performance ||
        !a.performance.now ||
        !a.performance.timing ||
        !a.performance.timing.navigationStart
      )
        return b;
      var c = a.performance.timing.navigationStart,
        d =
          a.CustomEvent &&
          (typeof a.CustomEvent === "function" ||
            a.CustomEvent.toString().indexOf("CustomEventConstructor") > -1);
      d = d
        ? new a.CustomEvent("test").timeStamp
        : a.document.createEvent("KeyboardEvent").timeStamp;
      return d && d <= a.performance.now()
        ? function (event) {
            return event.timeStamp + c;
          }
        : b;
    })();
    function u(a, c) {
      var d = [];
      while (a && a instanceof HTMLElement) {
        var e = a.getAttribute(c);
        e && d.push(e);
        a = b("Parent").byAttribute(a.parentNode, c);
      }
      return d.reverse();
    }
    e.exports = r;
  },
  18,
);
__d(
  "Scroll",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, b) {
      return !!b && (a === b.documentElement || a === b.body);
    }
    a = {
      getTop: function (a) {
        var b = a.ownerDocument;
        return g(a, b)
          ? b.body.scrollTop || b.documentElement.scrollTop
          : a.scrollTop;
      },
      setTop: function (a, b) {
        var c = a.ownerDocument;
        g(a, c)
          ? (c.body.scrollTop = c.documentElement.scrollTop = b)
          : (a.scrollTop = b);
      },
      getLeft: function (a) {
        var b = a.ownerDocument;
        return g(a, b)
          ? b.body.scrollLeft || b.documentElement.scrollLeft
          : a.scrollLeft;
      },
      setLeft: function (a, b) {
        var c = a.ownerDocument;
        g(a, c)
          ? (c.body.scrollLeft = c.documentElement.scrollLeft = b)
          : (a.scrollLeft = b);
      },
    };
    e.exports = a;
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
        h && document && document.documentMode && (h = document.documentMode);
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
  "clickRefAction",
  ["Arbiter"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(b, a, c, d, e) {
      var f = b + "/" + a;
      this.ue = f;
      this._ue_ts = b;
      this._ue_count = a;
      this._context = c;
      this._ns = null;
      this._node = d;
      this._type = e;
    }
    g.prototype.set_namespace = function (a) {
      this._ns = a;
      return this;
    };
    g.prototype.coalesce_namespace = function (a) {
      this._ns === null && (this._ns = a);
      return this;
    };
    g.prototype.add_event = function () {
      return this;
    };
    var h = 0,
      i = [],
      j = Date.now() + 6e4;
    function c(a, c, event, d, e) {
      __p && __p();
      var f = Date.now(),
        k = event && event.type;
      e = e || {};
      !c && event && (c = event.getTarget());
      var l = 50;
      if (c && d != "FORCE")
        for (var m = i.length - 1; m >= 0 && f - i[m]._ue_ts < l; --m)
          if (i[m]._node == c && i[m]._type == k) return i[m];
      m = new g(f, h, a, c, k);
      i.push(m);
      while (i[0]._ue_ts + l < f || i.length > 10) i.shift();
      k =
        f < j ? b("Arbiter").BEHAVIOR_PERSISTENT : b("Arbiter").BEHAVIOR_EVENT;
      a == "contextmenu"
        ? b("Arbiter").inform(
            "ClickRefAction/contextmenu",
            { cfa: m, node: c, mode: d, event: event, extra_data: e },
            k,
          )
        : a == "middleclick"
        ? b("Arbiter").inform(
            "ClickRefAction/middleclick",
            { cfa: m, node: c, mode: d, event: event, extra_data: e },
            k,
          )
        : b("Arbiter").inform(
            "ClickRefAction/new",
            { cfa: m, node: c, mode: d, event: event, extra_data: e },
            k,
          );
      h++;
      return m;
    }
    e.exports = a.clickRefAction = c;
  },
  null,
);
__d(
  "event-form-bubbling",
  [],
  function (a, b, c, d, e, f) {
    (a.Event = a.Event || function () {}),
      (a.Event.__inlineSubmit = function (b, event) {
        var c = a.Event.__getHandler && a.Event.__getHandler(b, "submit");
        return c && c !== b.onsubmit ? null : a.Event.__bubbleSubmit(b, event);
      }),
      (a.Event.__bubbleSubmit = function (b, event) {
        if (document.documentElement.attachEvent) {
          var c;
          while (c !== !1 && (b = b.parentNode))
            c = b.onsubmit
              ? b.onsubmit(event)
              : a.Event.__fire && a.Event.__fire(b, "submit", event);
          return c;
        }
      });
  },
  3,
);
__d(
  "getDocumentScrollElement",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g =
      typeof navigator !== "undefined" &&
      navigator.userAgent.indexOf("AppleWebKit") > -1;
    function a(a) {
      a = a || document;
      return a.scrollingElement
        ? a.scrollingElement
        : !g && a.compatMode === "CSS1Compat"
        ? a.documentElement
        : a.body;
    }
    e.exports = a;
  },
  18,
);
__d(
  "Event",
  [
    "invariant",
    "event-form-bubbling",
    "Arbiter",
    "DataStore",
    "DOMEvent",
    "DOMEventListener",
    "DOMQuery",
    "ErrorUtils",
    "EventProfiler",
    "ExecutionEnvironment",
    "FBLogger",
    "Parent",
    "Scroll",
    "TAAL",
    "TimeSlice",
    "UserAgent",
    "UserAgent_DEPRECATED",
    "$",
    "clickRefAction",
    "dedupString",
    "getDocumentScrollElement",
    "getObjectValues",
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    b("event-form-bubbling");
    var h = a.Event,
      i = "Event.listeners";
    h.prototype || (h.prototype = {});
    function j(a) {
      (a.type === "click" || a.type === "mouseover" || a.type === "keydown") &&
        b("Arbiter").inform("Event/stop", { event: a });
    }
    function k(a, b, c) {
      (this.target = a), (this.type = b), (this.data = c);
    }
    Object.assign(k.prototype, {
      getData: function () {
        this.data = this.data || {};
        return this.data;
      },
      stop: function () {
        return h.stop(this);
      },
      prevent: function () {
        return h.prevent(this);
      },
      isDefaultPrevented: function () {
        return h.isDefaultPrevented(this);
      },
      kill: function () {
        return h.kill(this);
      },
      getTarget: function () {
        return new (b("DOMEvent"))(this).target || null;
      },
    });
    function l(a) {
      if (a instanceof k) return a;
      a ||
        (!window.addEventListener && document.createEventObject
          ? (a = window.event ? document.createEventObject(window.event) : {})
          : (a = {}));
      if (!a._inherits_from_prototype)
        for (var b in h.prototype)
          try {
            a[b] = h.prototype[b];
          } catch (a) {}
      return a;
    }
    Object.assign(
      h.prototype,
      {
        _inherits_from_prototype: !0,
        getRelatedTarget: function () {
          var a =
            this.relatedTarget ||
            (this.fromElement === this.srcElement
              ? this.toElement
              : this.fromElement);
          return a && a.nodeType ? a : null;
        },
        getModifiers: function () {
          var a = {
            control: !!this.ctrlKey,
            shift: !!this.shiftKey,
            alt: !!this.altKey,
            meta: !!this.metaKey,
          };
          a.access = b("UserAgent_DEPRECATED").osx() ? a.control : a.alt;
          a.any = a.control || a.shift || a.alt || a.meta;
          return a;
        },
        isRightClick: function () {
          return this.which
            ? this.which === 3
            : this.button && this.button === 2;
        },
        isMiddleClick: function () {
          return this.which
            ? this.which === 2
            : this.button && this.button === 4;
        },
        isDefaultRequested: function () {
          return (
            this.getModifiers().any ||
            this.isMiddleClick() ||
            this.isRightClick()
          );
        },
      },
      k.prototype,
    );
    Object.assign(h, {
      listen: function (a, c, d, e, f) {
        __p && __p();
        typeof d === "function" &&
          (d = b("TimeSlice").guard(
            d,
            b("dedupString")("Event.js " + c + " handler"),
          ));
        !f || typeof f === "boolean"
          ? (f = { passive: !1 })
          : (f = { passive: f.passive || !1 });
        if (!b("ExecutionEnvironment").canUseDOM)
          return new t(a, d, k, c, e, l, f);
        typeof a === "string" && (a = b("$")(a));
        typeof e === "undefined" && (e = h.Priority.NORMAL);
        if (typeof c === "object") {
          var g = {};
          for (var j in c) g[j] = h.listen(a, j, c[j], e, f);
          return g;
        }
        if (c.match(/^on/i))
          throw new TypeError(
            "Bad event name `" + c + "': use `click', not `onclick'.",
          );
        if (!a) {
          g = new Error(
            b("TAAL").blameToPreviousFrame(
              "Cannot listen to an undefined element.",
            ),
          );
          b("FBLogger")("event")
            .catching(g)
            .mustfix("Tried to listen to element of type %s", c);
          throw g;
        }
        if (a.nodeName == "LABEL" && c == "click") {
          g = a.getElementsByTagName("input");
          a = g.length == 1 ? g[0] : a;
        } else if (a === window && c === "scroll") {
          g = b("getDocumentScrollElement")();
          g !== document.documentElement && g !== document.body && (a = g);
        }
        var k = b("DataStore").get(a, i, {});
        g = n[c];
        g && ((c = g.base), g.wrap && (d = g.wrap(d)));
        p(a, k, c, f);
        g = k[c];
        e in g || (g[e] = []);
        var l = g[e].length;
        d = new t(a, d, k, c, e, l, f);
        g[e][l] = d;
        g.numHandlers++;
        f.passive || (g.numNonPassiveHandlers++, o(a, k[c], c));
        return d;
      },
      stop: function (a) {
        var c = new (b("DOMEvent"))(a).stopPropagation();
        j(c.event);
        return a;
      },
      prevent: function (a) {
        new (b("DOMEvent"))(a).preventDefault();
        return a;
      },
      isDefaultPrevented: function (a) {
        return new (b("DOMEvent"))(a).isDefaultPrevented(a);
      },
      kill: function (a) {
        a = new (b("DOMEvent"))(a).kill();
        j(a.event);
        return !1;
      },
      getKeyCode: function (event) {
        __p && __p();
        event = new (b("DOMEvent"))(event).event;
        if (!event) return !1;
        switch (event.keyCode) {
          case 63232:
            return 38;
          case 63233:
            return 40;
          case 63234:
            return 37;
          case 63235:
            return 39;
          case 63272:
          case 63273:
          case 63275:
            return null;
          case 63276:
            return 33;
          case 63277:
            return 34;
        }
        if (event.shiftKey)
          switch (event.keyCode) {
            case 33:
            case 34:
            case 37:
            case 38:
            case 39:
            case 40:
              return null;
          }
        return event.keyCode;
      },
      getPriorities: function () {
        if (!m) {
          var a = b("getObjectValues")(h.Priority);
          a.sort(function (a, b) {
            return a - b;
          });
          m = a;
        }
        return m;
      },
      fire: function (a, b, c) {
        c = new k(a, b, c);
        var d;
        do {
          var e = h.__getHandler(a, b);
          e && (d = e(c));
          a = a.parentNode;
        } while (a && d !== !1 && !c.cancelBubble);
        return d !== !1;
      },
      __fire: function (a, b, event) {
        a = h.__getHandler(a, b);
        if (a) return a(l(event));
      },
      __getHandler: function (a, c) {
        var d = b("DataStore").get(a, i);
        return d && d[c] ? d[c].domHandler : a["on" + c];
      },
      getPosition: function (a) {
        a = new (b("DOMEvent"))(a).event;
        var c = b("getDocumentScrollElement")(),
          d = a.clientX + b("Scroll").getLeft(c);
        a = a.clientY + b("Scroll").getTop(c);
        return { x: d, y: a };
      },
    });
    var m = null;
    c = function (a) {
      return function (c) {
        if (!b("DOMQuery").contains(this, c.getRelatedTarget()))
          return a.call(this, c);
      };
    };
    var n;
    !window.navigator.msPointerEnabled
      ? (n = {
          mouseenter: { base: "mouseover", wrap: c },
          mouseleave: { base: "mouseout", wrap: c },
        })
      : (n = {
          mousedown: { base: "MSPointerDown" },
          mousemove: { base: "MSPointerMove" },
          mouseup: { base: "MSPointerUp" },
          mouseover: { base: "MSPointerOver" },
          mouseout: { base: "MSPointerOut" },
          mouseenter: { base: "MSPointerOver", wrap: c },
          mouseleave: { base: "MSPointerOut", wrap: c },
        });
    if (b("UserAgent_DEPRECATED").firefox()) {
      d = function (a, event) {
        event = l(event);
        var b = event.getTarget();
        while (b) h.__fire(b, a, event), (b = b.parentNode);
      };
      document.documentElement.addEventListener(
        "focus",
        d.bind(null, "focusin"),
        !0,
      );
      document.documentElement.addEventListener(
        "blur",
        d.bind(null, "focusout"),
        !0,
      );
    }
    var o = function (a, c, d) {
        var e = c.numNonPassiveHandlers == 0;
        e != c.options.passive &&
          (c.domHandlerRemover.remove(),
          (c.options.passive = e),
          (c.domHandlerRemover = b("DOMEventListener").add(a, d, c.domHandler, {
            passive: e,
          })));
      },
      p = function (a, c, d, e) {
        __p && __p();
        if (d in c) return;
        var f = b("TimeSlice").guard(
          s.bind(a, d),
          b("dedupString")("Event listenHandler " + d),
        );
        c[d] = {
          numHandlers: 0,
          numNonPassiveHandlers: 0,
          domHandlerRemover: b("DOMEventListener").add(a, d, f, e),
          domHandler: f,
          options: e,
        };
        c = "on" + d;
        if (a[c]) {
          f =
            a === document.documentElement
              ? h.Priority._BUBBLE
              : h.Priority.TRADITIONAL;
          var g = a[c];
          a[c] = null;
          h.listen(a, d, g, f, e);
        }
        a.nodeName === "FORM" &&
          d === "submit" &&
          b("UserAgent").isBrowser("IE < 9") &&
          h.listen(a, d, h.__bubbleSubmit.bind(null, a), h.Priority._BUBBLE, e);
      };
    function q(a) {
      return !a.href.endsWith("#")
        ? !1
        : a.href === document.location.href ||
            a.href === document.location.href + "#";
    }
    function r(a, b) {
      return a.nodeName === "INPUT" && a.type === b;
    }
    var s = b("EventProfiler").__wrapEventListenHandler(function (a, event) {
      __p && __p();
      event = l(event);
      if (!b("DataStore").get(this, i))
        throw new Error("Bad listenHandler context.");
      var c = b("DataStore").get(this, i)[a];
      if (!c) throw new Error("No registered handlers for `" + a + "'.");
      if (
        a == "click" ||
        a == "contextmenu" ||
        (a == "mousedown" && event.which == 2)
      ) {
        var d = event.getTarget(),
          e = b("Parent").byTag(d, "a");
        e instanceof HTMLAnchorElement &&
          e.href &&
          q(e) &&
          !r(d, "file") &&
          !r(d, "submit") &&
          event.prevent();
        a == "click" && b("clickRefAction")("click", e, event);
        a == "contextmenu" && b("clickRefAction")("contextmenu", e, event);
        a == "mousedown" &&
          event.which == 2 &&
          b("clickRefAction")("middleclick", e, event);
      }
      d = h.getPriorities();
      for (var a = 0; a < d.length; a++) {
        e = d[a];
        if (e in c) {
          e = c[e];
          for (var f = 0; f < e.length; f++) {
            if (!e[f]) continue;
            var g = e[f].fire(this, event);
            if (g === !1) return event.kill();
            else event.cancelBubble && event.stop();
          }
        }
      }
      return event.returnValue;
    });
    h.Priority = { URGENT: -20, TRADITIONAL: -10, NORMAL: 0, _BUBBLE: 1e3 };
    function t(a, b, c, d, e, f, g) {
      (this._element = a),
        (this._handler = b),
        (this._handlers = c),
        (this._type = d),
        (this._priority = e),
        (this._id = f),
        (this._options = g);
    }
    Object.assign(t.prototype, {
      remove: function () {
        if (b("ExecutionEnvironment").canUseDOM) {
          this._handlers || g(0);
          var a = this._handlers[this._type];
          a.numHandlers <= 1
            ? (a.domHandlerRemover.remove(), delete this._handlers[this._type])
            : (delete a[this._priority][this._id],
              a.numHandlers--,
              this._options.passive ||
                (a.numNonPassiveHandlers--,
                o(this._element, this._handlers[this._type], this._type)));
          this._handlers = null;
        }
      },
      fire: function (a, event) {
        return b("ExecutionEnvironment").canUseDOM
          ? b("ErrorUtils").applyWithGuard(
              this._handler,
              a,
              [event],
              function (b) {
                (b.event_type = event.type),
                  (b.dom_element = a.name || a.id),
                  (b.category = "eventhandler");
              },
            )
          : !0;
      },
    });
    a.$E = h.$E = l;
    e.exports = h;
  },
  18,
);
__d(
  "killswitch",
  ["KSConfig"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return b("KSConfig").killed.has(a);
    }
    a.override = function (a, c) {
      c ? b("KSConfig").killed.add(a) : b("KSConfig").killed["delete"](a);
    };
    e.exports = a;
  },
  null,
);
__d(
  "FbtResultBase",
  ["FBLogger", "killswitch"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      b("FBLogger")("fbt")
        .blameToPreviousFile()
        .mustfix(
          "Error using fbt string. Used method %s on Fbt string. Fbt string is designed to be immutable and should not be manipulated.",
          a,
        );
    }
    function h(a) {
      "use strict";
      (this.$1 = a), (this.$2 = null);
    }
    h.prototype.flattenToArray = function () {
      "use strict";
      return h.flattenToArray(this.$1);
    };
    h.prototype.getContents = function () {
      "use strict";
      return this.$1;
    };
    h.prototype.toString = function () {
      "use strict";
      __p && __p();
      if (this.$2 !== null) return this.$2;
      var a = "",
        c = this.flattenToArray();
      for (var d = 0; d < c.length; ++d) {
        var e = c[d];
        if (typeof e === "string" || e instanceof h) a += e;
        else {
          var f = "Context not logged.";
          if (!b("killswitch")("JS_RELIABILITY_FBT_LOGGING"))
            try {
              f = JSON.stringify(e).substr(0, 250);
            } catch (a) {
              f = a.message;
            }
          b("FBLogger")("fbt")
            .blameToPreviousFile()
            .mustfix("Converting to a string will drop content data. %s", f);
        }
      }
      Object.isFrozen(this) || (this.$2 = a);
      return a;
    };
    h.prototype.toJSON = function () {
      "use strict";
      return this.toString();
    };
    h.flattenToArray = function (a) {
      "use strict";
      var b = [];
      for (var c = 0; c < a.length; ++c) {
        var d = a[c];
        Array.isArray(d)
          ? b.push.apply(b, h.flattenToArray(d))
          : d instanceof h
          ? b.push.apply(b, d.flattenToArray())
          : b.push(d);
      }
      return b;
    };
    [
      "replace",
      "split",
      "toLowerCase",
      "toUpperCase",
      "indexOf",
      "charAt",
      "charCodeAt",
      "substr",
      "substring",
      "trim",
      "lastIndexOf",
      "search",
      "match",
      "slice",
      "codePointAt",
      "endsWith",
      "includes",
      "localeCompare",
      "normalize",
      "repeat",
      "startsWith",
      "toLocaleLowerCase",
      "toLocaleUpperCase",
      "trimLeft",
      "trimRight",
      "link",
      "anchor",
      "fontcolor",
      "fontsize",
      "big",
      "blink",
      "bold",
      "fixed",
      "italics",
      "small",
      "strike",
      "sub",
      "sup",
      "contains",
    ].forEach(
      function (a) {
        h.prototype[a] = function () {
          "use strict";
          g(a);
          return this.toString()[a].apply(this, arguments);
        };
      }.bind(this),
    );
    e.exports = h;
  },
  18,
);
__d(
  "isScalar",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return /string|number|boolean/.test(typeof a);
    }
    e.exports = a;
  },
  null,
);
__d(
  "DOM",
  [
    "DOMQuery",
    "Event",
    "FBLogger",
    "FbtResultBase",
    "HTML",
    "TAAL",
    "UserAgent_DEPRECATED",
    "$",
    "createArrayFromMixed",
    "isNode",
    "isScalar",
    "isTextNode",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      create: function (a, b, c) {
        a = document.createElement(a);
        b && g.setAttributes(a, b);
        c != null && g.setContent(a, c);
        return a;
      },
      setAttributes: function (a, c) {
        c.type && (a.type = c.type);
        for (var d in c) {
          var e = c[d],
            f = /^on/i.test(d);
          f &&
            typeof e !== "function" &&
            b("FBLogger")("dom").warn(
              "Handlers passed to DOM.setAttributes must be functions. Handler passed for %s was %s",
              d,
              typeof e,
            );
          if (d == "type") continue;
          else
            d == "style"
              ? typeof e === "string"
                ? (a.style.cssText = e)
                : Object.assign(a.style, e)
              : f
              ? b("Event").listen(a, d.substr(2), e)
              : d in a
              ? (a[d] = e)
              : a.setAttribute && a.setAttribute(d, e);
        }
      },
      prependContent: function (a, c) {
        if (!a)
          throw new Error(
            b("TAAL").blameToPreviousFile("reference element is not a node"),
          );
        return i(c, a, function (b) {
          a.firstChild ? a.insertBefore(b, a.firstChild) : a.appendChild(b);
        });
      },
      insertAfter: function (a, c) {
        if (!a || !a.parentNode)
          throw new Error(
            b("TAAL").blameToPreviousFile(
              "reference element does not have a parent",
            ),
          );
        var d = a.parentNode;
        return i(c, d, function (b) {
          a.nextSibling ? d.insertBefore(b, a.nextSibling) : d.appendChild(b);
        });
      },
      insertBefore: function (a, c) {
        if (!a || !a.parentNode)
          throw new Error(
            b("TAAL").blameToPreviousFile(
              "reference element does not have a parent",
            ),
          );
        var d = a.parentNode;
        return i(c, d, function (b) {
          d.insertBefore(b, a);
        });
      },
      setContent: function (a, c) {
        if (!a)
          throw new Error(
            b("TAAL").blameToPreviousFile("reference element is not a node"),
          );
        while (a.firstChild) h(a.firstChild);
        return g.appendContent(a, c);
      },
      appendContent: function (a, c) {
        if (!a)
          throw new Error(
            b("TAAL").blameToPreviousFile("reference element is not a node"),
          );
        return i(c, a, function (b) {
          a.appendChild(b);
        });
      },
      replace: function (a, c) {
        if (!a || !a.parentNode)
          throw new Error(
            b("TAAL").blameToPreviousFile(
              "reference element does not have a parent",
            ),
          );
        var d = a.parentNode;
        return i(c, d, function (b) {
          d.replaceChild(b, a);
        });
      },
      remove: function (a) {
        h(typeof a === "string" ? b("$")(a) : a);
      },
      empty: function (a) {
        a = typeof a === "string" ? b("$")(a) : a;
        while (a.firstChild) h(a.firstChild);
      },
    };
    Object.assign(g, b("DOMQuery"));
    function h(a) {
      a.parentNode && a.parentNode.removeChild(a);
    }
    function i(a, c, d) {
      __p && __p();
      a = b("HTML").replaceJSONWrapper(a);
      if (
        a instanceof b("HTML") &&
        c.firstChild === null &&
        -1 === a.toString().indexOf("<script")
      ) {
        var e = b("UserAgent_DEPRECATED").ie();
        if (
          !e ||
          (e > 7 &&
            !b("DOMQuery").isNodeOfType(c, [
              "table",
              "tbody",
              "thead",
              "tfoot",
              "tr",
              "select",
              "fieldset",
            ]))
        ) {
          var f = e ? '<em style="display:none;">&nbsp;</em>' : "";
          c.innerHTML = f + a;
          e && c.removeChild(c.firstChild);
          return Array.from(c.childNodes);
        }
      } else if (b("isTextNode")(c)) {
        c.data = a;
        return [a];
      }
      f = document.createDocumentFragment();
      var g;
      e = [];
      c = [];
      a = b("createArrayFromMixed")(a);
      a.length === 1 &&
        a[0] instanceof b("FbtResultBase") &&
        (a = a[0].getContents());
      for (var h = 0; h < a.length; h++) {
        g = b("HTML").replaceJSONWrapper(a[h]);
        if (g instanceof b("HTML")) {
          c.push(g.getAction());
          var i = g.getNodes();
          for (var j = 0; j < i.length; j++) e.push(i[j]), f.appendChild(i[j]);
        } else if (b("isScalar")(g) || g instanceof b("FbtResultBase")) {
          j = document.createTextNode(g);
          e.push(j);
          f.appendChild(j);
        } else
          b("isNode")(g)
            ? (e.push(g), f.appendChild(g))
            : (Array.isArray(g) &&
                b("FBLogger")("dom").warn("Nest arrays not supported"),
              g !== null &&
                b("FBLogger")("dom").warn("No way to set content %s", g));
      }
      d(f);
      c.forEach(function (a) {
        a();
      });
      return e;
    }
    e.exports = g;
  },
  18,
);
__d(
  "camelize",
  [],
  function (a, b, c, d, e, f) {
    var g = /-(.)/g;
    function a(a) {
      return a.replace(g, function (a, b) {
        return b.toUpperCase();
      });
    }
    e.exports = a;
  },
  null,
);
__d(
  "getOpacityStyleName",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = !1,
      h = null;
    function a() {
      __p && __p();
      if (!g) {
        if (document.body && "opacity" in document.body.style) h = "opacity";
        else {
          var a = document.createElement("div");
          a.style.filter = "alpha(opacity=100)";
          a.style.filter && (h = "filter");
        }
        g = !0;
      }
      return h;
    }
    e.exports = a;
  },
  null,
);
__d(
  "hyphenate",
  [],
  function (a, b, c, d, e, f) {
    var g = /([A-Z])/g;
    function a(a) {
      return a.replace(g, "-$1").toLowerCase();
    }
    e.exports = a;
  },
  null,
);
__d(
  "getStyleProperty",
  ["camelize", "hyphenate"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      return a == null ? a : String(a);
    }
    function a(a, c) {
      __p && __p();
      var d;
      if (window.getComputedStyle) {
        d = window.getComputedStyle(a, null);
        if (d) return g(d.getPropertyValue(b("hyphenate")(c)));
      }
      if (document.defaultView && document.defaultView.getComputedStyle) {
        d = document.defaultView.getComputedStyle(a, null);
        if (d) return g(d.getPropertyValue(b("hyphenate")(c)));
        if (c === "display") return "none";
      }
      return a.currentStyle
        ? c === "float"
          ? g(a.currentStyle.cssFloat || a.currentStyle.styleFloat)
          : g(a.currentStyle[b("camelize")(c)])
        : g(a.style && a.style[b("camelize")(c)]);
    }
    e.exports = a;
  },
  null,
);
__d(
  "StyleCore",
  [
    "invariant",
    "camelize",
    "containsNode",
    "ex",
    "getOpacityStyleName",
    "getStyleProperty",
    "hyphenate",
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h(a, b) {
      a = n.get(a, b);
      return a === "auto" || a === "scroll";
    }
    var i = new RegExp(
      "\\s*([^\\s:]+)\\s*:\\s*([^;('\"]*(?:(?:\\([^)]*\\)|\"[^\"]*\"|'[^']*')[^;(?:'\"]*)*)(?:;|$)",
      "g",
    );
    function j(a) {
      var b = {};
      a.replace(i, function (a, c, d) {
        b[c] = d;
        return d;
      });
      return b;
    }
    function k(a) {
      var b = "";
      for (var c in a) a[c] && (b += c + ":" + a[c] + ";");
      return b;
    }
    function l(a) {
      return a !== "" ? "alpha(opacity=" + a * 100 + ")" : "";
    }
    function m(a, c, d) {
      switch (b("hyphenate")(c)) {
        case "font-weight":
        case "line-height":
        case "opacity":
        case "z-index":
        case "animation-iteration-count":
        case "-webkit-animation-iteration-count":
          break;
        case "width":
        case "height":
          a = parseInt(d, 10) < 0;
          a && g(0);
        default:
          isNaN(d) || !d || d === "0" || g(0);
          break;
      }
    }
    var n = {
      set: function (a, c, d) {
        __p && __p();
        m("Style.set", c, d);
        a = a.style;
        switch (c) {
          case "opacity":
            b("getOpacityStyleName")() === "filter"
              ? (a.filter = l(d))
              : (a.opacity = d);
            break;
          case "float":
            a.cssFloat = a.styleFloat = d || "";
            break;
          default:
            try {
              a[b("camelize")(c)] = d;
            } catch (a) {
              throw new Error(
                b("ex")('Style.set: "%s" argument is invalid: %s', c, d),
              );
            }
        }
      },
      apply: function (a, c) {
        __p && __p();
        var d;
        for (d in c) m("Style.apply", d, c[d]);
        "opacity" in c &&
          b("getOpacityStyleName")() === "filter" &&
          ((c.filter = l(c.opacity)), delete c.opacity);
        var e = j(a.style.cssText);
        for (d in c) {
          var f = c[d];
          delete c[d];
          var g = b("hyphenate")(d);
          for (var h in e) (h === g || h.indexOf(g + "-") === 0) && delete e[h];
          c[g] = f;
        }
        Object.assign(e, c);
        a.style.cssText = k(e);
      },
      get: b("getStyleProperty"),
      getFloat: function (a, b) {
        return parseFloat(n.get(a, b), 10);
      },
      getOpacity: function (a) {
        if (b("getOpacityStyleName")() === "filter") {
          var c = n.get(a, "filter");
          if (c) {
            c = /(\d+(?:\.\d+)?)/.exec(c);
            if (c) return parseFloat(c.pop()) / 100;
          }
        }
        return n.getFloat(a, "opacity") || 1;
      },
      isFixed: function (a) {
        while (b("containsNode")(document.body, a)) {
          if (n.get(a, "position") === "fixed") return !0;
          a = a.parentNode;
        }
        return !1;
      },
      getScrollParent: function (a) {
        if (!a) return null;
        while (a && a !== document.body) {
          if (h(a, "overflow") || h(a, "overflowY") || h(a, "overflowX"))
            return a;
          a = a.parentNode;
        }
        return window;
      },
    };
    e.exports = n;
  },
  null,
);
__d(
  "Style",
  ["StyleCore", "$"],
  function (a, b, c, d, e, f) {
    a = babelHelpers["extends"]({}, b("StyleCore"), {
      get: function (a, c) {
        typeof a === "string" && (!1, (a = b("$")(a)));
        return b("StyleCore").get(a, c);
      },
      getFloat: function (a, c) {
        typeof a === "string" && (!1, (a = b("$")(a)));
        return b("StyleCore").getFloat(a, c);
      },
    });
    e.exports = a;
  },
  null,
);
__d(
  "DOMDimensions",
  ["Style", "getDocumentScrollElement"],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      getElementDimensions: function (a) {
        return { width: a.offsetWidth || 0, height: a.offsetHeight || 0 };
      },
      getDocumentDimensions: function (a) {
        a = b("getDocumentScrollElement")(a);
        var c = a.scrollWidth || 0;
        a = a.scrollHeight || 0;
        return { width: c, height: a };
      },
      measureElementBox: function (a, c, d, e, f) {
        __p && __p();
        var g;
        switch (c) {
          case "left":
          case "right":
          case "top":
          case "bottom":
            g = [c];
            break;
          case "width":
            g = ["left", "right"];
            break;
          case "height":
            g = ["top", "bottom"];
            break;
          default:
            throw Error("Invalid plane: " + c);
        }
        c = function (c, d) {
          var e = 0;
          for (var f = 0; f < g.length; f++)
            e += parseFloat(b("Style").get(a, c + "-" + g[f] + d)) || 0;
          return e;
        };
        return (
          (d ? c("padding", "") : 0) +
          (e ? c("border", "-width") : 0) +
          (f ? c("margin", "") : 0)
        );
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "Queue",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {};
    function h(a) {
      "use strict";
      (this._opts = babelHelpers["extends"](
        { interval: 0, processor: null },
        a,
      )),
        (this._queue = []),
        (this._stopped = !0);
    }
    h.prototype._dispatch = function (a) {
      "use strict";
      __p && __p();
      if (this._stopped || this._queue.length === 0) return;
      if (!this._opts.processor) {
        this._stopped = !0;
        throw new Error("No processor available");
      }
      if (this._opts.interval)
        this._opts.processor.call(this, this._queue.shift()),
          (this._timeout = setTimeout(
            this._dispatch.bind(this),
            this._opts.interval,
          ));
      else
        while (this._queue.length)
          this._opts.processor.call(this, this._queue.shift());
    };
    h.prototype.enqueue = function (a) {
      "use strict";
      this._opts.processor && !this._stopped
        ? this._opts.processor.call(this, a)
        : this._queue.push(a);
      return this;
    };
    h.prototype.start = function (a) {
      "use strict";
      a && (this._opts.processor = a);
      this._stopped = !1;
      this._dispatch();
      return this;
    };
    h.prototype.isStarted = function () {
      "use strict";
      return !this._stopped;
    };
    h.prototype.dispatch = function () {
      "use strict";
      this._dispatch(!0);
    };
    h.prototype.stop = function (a) {
      "use strict";
      this._stopped = !0;
      a && clearTimeout(this._timeout);
      return this;
    };
    h.prototype.merge = function (a, b) {
      "use strict";
      this._queue[b ? "unshift" : "push"].apply(this._queue, a._queue);
      a._queue = [];
      this._dispatch();
      return this;
    };
    h.prototype.getLength = function () {
      "use strict";
      return this._queue.length;
    };
    h.get = function (a, b) {
      "use strict";
      var c;
      a in g ? (c = g[a]) : (c = g[a] = new h(b));
      return c;
    };
    h.exists = function (a) {
      "use strict";
      return a in g;
    };
    h.remove = function (a) {
      "use strict";
      return delete g[a];
    };
    e.exports = h;
  },
  null,
);
__d(
  "resolveWindow",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      __p && __p();
      var b = window;
      a = a.split(".");
      try {
        for (var c = 0; c < a.length; c++) {
          var d = a[c],
            e = /^frames\[[\'\"]?([a-zA-Z0-9\-_]+)[\'\"]?\]$/.exec(d);
          if (e) b = b.frames[e[1]];
          else if (d === "opener" || d === "parent" || d === "top") b = b[d];
          else return null;
        }
      } catch (a) {
        return null;
      }
      return b;
    }
    e.exports = a;
  },
  null,
);
__d(
  "XD",
  [
    "Arbiter",
    "DOM",
    "DOMDimensions",
    "Log",
    "PHPQuerySerializer",
    "Queue",
    "URI",
    "isFacebookURI",
    "isInIframe",
    "resolveWindow",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = "fb_xdm_frame_" + location.protocol.replace(":", ""),
      h = {
        _callbacks: [],
        _opts: {
          autoResize: !1,
          allowShrink: !0,
          channelUrl: null,
          hideOverflow: !1,
          resizeTimeout: 1e3,
          resizeWidth: !1,
          expectResizeAck: !1,
          resizeAckTimeout: 6e3,
        },
        _lastResizeAckId: 0,
        _resizeCount: 0,
        _resizeTimestamp: 0,
        _shrinker: null,
        init: function (a) {
          (this._opts = babelHelpers["extends"]({}, this._opts, a)),
            this._opts.autoResize && this._startResizeMonitor(),
            b("Arbiter").subscribe(
              "Connect.Unsafe.resize.ack",
              function (a, b) {
                b.id || (b.id = this._resizeCount),
                  b.id > this._lastResizeAckId &&
                    (this._lastResizeAckId = b.id);
              }.bind(this),
            );
        },
        getQueue: function () {
          this._queue || (this._queue = new (b("Queue"))());
          return this._queue;
        },
        setChannelUrl: function (a) {
          this.getQueue().start(
            function (b) {
              return this.send(b, a);
            }.bind(this),
          );
        },
        send: function (a, c) {
          __p && __p();
          c = c || this._opts.channelUrl;
          if (!c) {
            this.getQueue().enqueue(a);
            return;
          }
          var d = {};
          c = new (b("URI"))(c);
          Object.assign(
            d,
            a,
            b("PHPQuerySerializer").deserialize(c.getFragment()),
          );
          var e = new (b("URI"))(d.origin).getOrigin(),
            f = b("resolveWindow")(d.relation.replace(/^parent\./, "")),
            h = 50;
          a = function a() {
            var c = f.frames[g];
            try {
              c.proxyMessage(b("PHPQuerySerializer").serialize(d), e);
            } catch (c) {
              --h
                ? setTimeout(a, 100)
                : b("Log").warn('No such frame "' + g + '" to proxyMessage to');
            }
          };
          a();
        },
        _computeSize: function () {
          __p && __p();
          var a = b("DOMDimensions").getDocumentDimensions(),
            c = 0;
          if (this._opts.resizeWidth) {
            var d = document.body;
            if (d.clientWidth < d.scrollWidth) c = a.width;
            else {
              d = d.childNodes;
              for (var e = 0; e < d.length; e++) {
                var f = d[e];
                f = f.offsetLeft + f.offsetWidth;
                f > c && (c = f);
              }
            }
            c = Math.max(c, h.forced_min_width);
          }
          a.width = c;
          this._opts.allowShrink &&
            (this._shrinker || (this._shrinker = b("DOM").create("div")),
            b("DOM").appendContent(document.body, this._shrinker),
            (a.height = Math.max(this._shrinker.offsetTop, 0)));
          return a;
        },
        _startResizeMonitor: function () {
          __p && __p();
          var a,
            c = document.documentElement;
          this._opts.hideOverflow &&
            ((c.style.overflow = "hidden"),
            (document.body.style.overflow = "hidden"));
          c = function () {
            __p && __p();
            var c = this._computeSize(),
              d = Date.now(),
              e =
                this._lastResizeAckId < this._resizeCount &&
                d - this._resizeTimestamp > this._opts.resizeAckTimeout;
            if (
              !a ||
              (this._opts.expectResizeAck && e) ||
              (this._opts.allowShrink && a.width != c.width) ||
              (!this._opts.allowShrink && a.width < c.width) ||
              (this._opts.allowShrink && a.height != c.height) ||
              (!this._opts.allowShrink && a.height < c.height)
            ) {
              a = c;
              this._resizeCount++;
              this._resizeTimestamp = d;
              e = {
                type: "resize",
                height: c.height,
                ackData: { id: this._resizeCount },
              };
              c.width && c.width != 0 && (e.width = c.width);
              try {
                if (
                  b("isFacebookURI")(new (b("URI"))(document.referrer)) &&
                  b("isInIframe")() &&
                  window.name &&
                  window.parent.location &&
                  window.parent.location.toString &&
                  b("isFacebookURI")(new (b("URI"))(window.parent.location))
                ) {
                  d = window.parent.document.getElementsByTagName("iframe");
                  for (var c = 0; c < d.length; c = c + 1)
                    d[c].name == window.name &&
                      (this._opts.resizeWidth &&
                        (d[c].style.width = e.width + "px"),
                      (d[c].style.height = e.height + "px"));
                }
                this.send(e);
              } catch (a) {
                this.send(e);
              }
            }
          }.bind(this);
          c();
          setInterval(c, this._opts.resizeTimeout);
        },
      };
    c = babelHelpers["extends"]({}, h);
    e.exports.UnverifiedXD = c;
    e.exports.XD = h;
    a.UnverifiedXD = c;
    a.XD = h;
  },
  null,
);
__d(
  "UnverifiedXD",
  ["XD"],
  function (a, b, c, d, e, f) {
    a = b("XD").UnverifiedXD;
    e.exports = a;
  },
  null,
);
__d(
  "PluginLoginButton",
  [
    "Arbiter",
    "DOMEvent",
    "DOMEventListener",
    "DOMQuery",
    "IntersectionObserver",
    "PlatformWidgetEndpoint",
    "Plugin",
    "PluginLoginButtonEventsTypedLogger",
    "PluginReturn",
    "UnverifiedXD",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      redirect: function (a) {
        window.parent.location.replace(a);
      },
      submit: function (a, c, d) {
        new (b("PluginLoginButtonEventsTypedLogger"))()
          .setEvent("logout_click")
          .setAppID(c)
          .setLoggerID(d)
          .logVital(),
          a.submit();
      },
      registration: function (a, c) {
        b("DOMEventListener").add(a, "click", g.redirect.bind(null, c));
      },
      connect: function (a, c, d) {
        c = g.submit.bind(null, b("DOMQuery").find(a, "^form"), c, d);
        b("DOMEventListener").add(a, "click", c);
      },
      logout: function (a, c, d) {
        c = g.submit.bind(null, b("DOMQuery").find(a, "^form"), c, d);
        b("DOMEventListener").add(a, "click", c);
      },
      oauth: function (a, c, d, e, f, g, h, i, j, k, l) {
        __p && __p();
        e = function (event, a) {
          if (k) {
            var c = b("PlatformWidgetEndpoint").plugins("login_button");
            b("PluginReturn").reload(c + (a.crossFrame ? "" : "?ret=perms"));
          }
        };
        b("Arbiter").subscribe(b("Plugin").RELOAD, e);
        b("Arbiter").subscribe("Connect.Unsafe.loginReload", e);
        f = new (b("IntersectionObserver"))(
          function (a, d) {
            a.forEach(function (a) {
              a.isIntersecting && a.intersectionRatio === 1
                ? new (b("PluginLoginButtonEventsTypedLogger"))()
                    .setEvent("became_visible")
                    .setAppID(c)
                    .setLoggerID(l)
                    .logVital()
                : !a.isIntersecting &&
                  a.intersectionRatio === 0 &&
                  new (b("PluginLoginButtonEventsTypedLogger"))()
                    .setEvent("became_hidden")
                    .setAppID(c)
                    .setLoggerID(l)
                    .logVital();
            });
          },
          { threshold: [0, 1] },
        );
        f.observe(a);
        this.action(a, function (event) {
          new (b("DOMEvent"))(event).kill();
          var a = {
            scope: d,
            response_type: "none",
            ref: g,
            auth_type: h,
            default_audience: i,
            locale: j,
            method: "permissions.oauth",
            display: "popup",
            logger_id: l,
          };
          b("UnverifiedXD").send({
            type: "login_button_dialog_open",
            params: JSON.stringify(a),
          });
          new (b("PluginLoginButtonEventsTypedLogger"))()
            .setEvent("click")
            .setAppID(c)
            .setLoggerID(l)
            .logVital();
        });
      },
      action: function (a, c) {
        b("DOMEventListener").add(a, "click", c),
          b("DOMEventListener").add(a, "keydown", function (a) {
            a = new (b("DOMEvent"))(a);
            var d = a.event.which || a.event.keyCode;
            (d === 32 || d === 13) && c(a);
          });
      },
    };
    e.exports = g;
  },
  null,
);
__d(
  "PluginLoggedOutUserTypedLogger",
  ["Banzai", "GeneratedLoggerUtils", "nullthrows"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    function a() {
      this.clear();
    }
    a.prototype.log = function () {
      b("GeneratedLoggerUtils").log(
        "logger:PluginLoggedOutUserLoggerConfig",
        this.$1,
        b("Banzai").BASIC,
      );
    };
    a.prototype.logVital = function () {
      b("GeneratedLoggerUtils").log(
        "logger:PluginLoggedOutUserLoggerConfig",
        this.$1,
        b("Banzai").VITAL,
      );
    };
    a.prototype.logImmediately = function () {
      b("GeneratedLoggerUtils").log(
        "logger:PluginLoggedOutUserLoggerConfig",
        this.$1,
        { signal: !0 },
      );
    };
    a.prototype.clear = function () {
      this.$1 = {};
      return this;
    };
    a.prototype.getData = function () {
      return babelHelpers["extends"]({}, this.$1);
    };
    a.prototype.updateData = function (a) {
      this.$1 = babelHelpers["extends"]({}, this.$1, a);
      return this;
    };
    a.prototype.setHref = function (a) {
      this.$1.href = a;
      return this;
    };
    a.prototype.setIsSDK = function (a) {
      this.$1.is_sdk = a;
      return this;
    };
    a.prototype.setPluginAppID = function (a) {
      this.$1.plugin_app_id = a;
      return this;
    };
    a.prototype.setPluginName = function (a) {
      this.$1.plugin_name = a;
      return this;
    };
    a.prototype.setRefererURL = function (a) {
      this.$1.referer_url = a;
      return this;
    };
    a.prototype.setVC = function (a) {
      this.$1.vc = a;
      return this;
    };
    a.prototype.updateExtraData = function (a) {
      a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
      b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
      this.$1 = babelHelpers["extends"]({}, this.$1, a);
      return this;
    };
    a.prototype.addToExtraData = function (a, b) {
      var c = {};
      c[a] = b;
      return this.updateExtraData(c);
    };
    var g = {
      href: !0,
      is_sdk: !0,
      plugin_app_id: !0,
      plugin_name: !0,
      referer_url: !0,
      vc: !0,
    };
    e.exports = a;
  },
  null,
);
__d(
  "PluginMessage",
  ["DOMEventListener"],
  function (a, b, c, d, e, f) {
    a = {
      listen: function () {
        b("DOMEventListener").add(window, "message", function (event) {
          if (
            /\.facebook\.com$/.test(event.origin) &&
            /^FB_POPUP:/.test(event.data)
          ) {
            var a = JSON.parse(event.data.substring(9));
            "reload" in a &&
              /^https?:/.test(a.reload) &&
              document.location.replace(a.reload);
          }
        });
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "guid",
  [],
  function (a, b, c, d, e, f) {
    function a() {
      return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "");
    }
    e.exports = a;
  },
  18,
);
__d(
  "ArbiterMixin",
  ["Arbiter", "guid"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = "arbiter$" + b("guid")(),
      h = Object.prototype.hasOwnProperty;
    a = {
      _getArbiterInstance: function () {
        return h.call(this, g) ? this[g] : (this[g] = new (b("Arbiter"))());
      },
      inform: function (a, b, c) {
        return this._getArbiterInstance().inform(a, b, c);
      },
      subscribe: function (a, b, c) {
        return this._getArbiterInstance().subscribe(a, b, c);
      },
      subscribeOnce: function (a, b, c) {
        return this._getArbiterInstance().subscribeOnce(a, b, c);
      },
      unsubscribe: function (a) {
        this._getArbiterInstance().unsubscribe(a);
      },
      unsubscribeCurrentSubscription: function () {
        this._getArbiterInstance().unsubscribeCurrentSubscription();
      },
      releaseCurrentPersistentEvent: function () {
        this._getArbiterInstance().releaseCurrentPersistentEvent();
      },
      registerCallback: function (a, b) {
        return this._getArbiterInstance().registerCallback(a, b);
      },
      query: function (a) {
        return this._getArbiterInstance().query(a);
      },
    };
    e.exports = a;
  },
  18,
);
__d(
  "BehaviorsMixin",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      "use strict";
      (this.$1 = a), (this.$2 = !1);
    }
    g.prototype.enable = function () {
      "use strict";
      this.$2 || ((this.$2 = !0), this.$1.enable());
    };
    g.prototype.disable = function () {
      "use strict";
      this.$2 && ((this.$2 = !1), this.$1.disable());
    };
    var h = 1;
    function i(a) {
      a.__BEHAVIOR_ID || (a.__BEHAVIOR_ID = h++);
      return a.__BEHAVIOR_ID;
    }
    a = {
      enableBehavior: function (a) {
        this._behaviors || (this._behaviors = {});
        var b = i(a);
        this._behaviors[b] || (this._behaviors[b] = new g(new a(this)));
        this._behaviors[b].enable();
        return this;
      },
      disableBehavior: function (a) {
        if (this._behaviors) {
          a = i(a);
          this._behaviors[a] && this._behaviors[a].disable();
        }
        return this;
      },
      enableBehaviors: function (a) {
        a.forEach(this.enableBehavior, this);
        return this;
      },
      destroyBehaviors: function () {
        if (this._behaviors) {
          for (var a in this._behaviors) this._behaviors[a].disable();
          this._behaviors = {};
        }
      },
      hasBehavior: function (a) {
        return this._behaviors && i(a) in this._behaviors;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "isValidReactElement",
  [],
  function (a, b, c, d, e, f) {
    var g =
      (typeof Symbol === "function" &&
        Symbol["for"] &&
        Symbol["for"]("react.element")) ||
      60103;
    function a(a) {
      return !!(typeof a === "object" && a !== null && a.$$typeof === g);
    }
    e.exports = a;
  },
  null,
);
__d(
  "BootloadedReact",
  ["Bootloader", "isValidReactElement"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = function (a) {
      b("Bootloader").loadModules(["ReactDOM"], a, "BootloadedReact");
    };
    a = {
      isValidElement: function (a) {
        return b("isValidReactElement")(a);
      },
      render: function (a, b, c) {
        g(function (d) {
          d.render(a, b, function () {
            c && c(this);
          });
        });
      },
      unmountComponentAtNode: function (a, b) {
        g(function (c) {
          c.unmountComponentAtNode(a), b && b();
        });
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "getOrCreateDOMID",
  ["uniqueID"],
  function (a, b, c, d, e, f) {
    function a(a) {
      a.id || (a.id = b("uniqueID")());
      return a.id;
    }
    e.exports = a;
  },
  null,
);
__d(
  "ContextualThing",
  ["CSS", "containsNode", "ge", "getOrCreateDOMID"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      register: function (a, c) {
        a.setAttribute("data-ownerid", b("getOrCreateDOMID")(c));
      },
      containsIncludingLayers: function (a, c) {
        c = c;
        while (c) {
          if (b("containsNode")(a, c)) return !0;
          c = g.getContext(c);
        }
        return !1;
      },
      getContext: function (a) {
        a = a;
        var c;
        while (a) {
          if (a.getAttribute && (c = a.getAttribute("data-ownerid")))
            return b("ge")(c);
          a = a.parentNode;
        }
        return null;
      },
      parentByClass: function (a, c) {
        a = a;
        var d;
        while (a && !b("CSS").hasClass(a, c))
          a.getAttribute && (d = a.getAttribute("data-ownerid"))
            ? (a = b("ge")(d))
            : (a = a.parentNode);
        return a;
      },
    };
    e.exports = g;
  },
  null,
);
__d(
  "getElementText",
  ["isElementNode", "isTextNode"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null;
    function a(a) {
      __p && __p();
      if (b("isTextNode")(a)) return a.data;
      else if (b("isElementNode")(a)) {
        if (g === null) {
          var c = document.createElement("div");
          g = c.textContent != null ? "textContent" : "innerText";
        }
        return a[g];
      } else return "";
    }
    e.exports = a;
  },
  null,
);
__d(
  "isContentEditable",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    function a(a) {
      a = a;
      while (a instanceof HTMLElement) {
        if (
          a.contentEditable === "true" ||
          a.contentEditable === "plaintext-only"
        )
          return !0;
        a = a.parentElement;
      }
      return !1;
    }
    e.exports = a;
  },
  null,
);
__d(
  "isElementInteractive",
  ["isContentEditable"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = new Set(["EMBED", "INPUT", "OBJECT", "SELECT", "TEXTAREA"]),
      h = new Set(["button", "checkbox", "radio", "submit"]);
    function a(a) {
      if (!a instanceof HTMLElement) return !1;
      var c = b("isContentEditable")(a),
        d = g.has(a.nodeName);
      a = a instanceof HTMLInputElement && h.has(a.type);
      return (c || d) && !a;
    }
    e.exports = a;
  },
  null,
);
__d(
  "KeyEventController",
  [
    "Bootloader",
    "DOMQuery",
    "Event",
    "Run",
    "emptyFunction",
    "getElementText",
    "isContentEditable",
    "isElementInteractive",
    "isEmpty",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null,
      h = {
        BACKSPACE: [8],
        TAB: [9],
        RETURN: [13],
        ALT: [18],
        ESCAPE: [27],
        LEFT: [37, 63234],
        UP: [38, 63232],
        RIGHT: [39, 63235],
        DOWN: [40, 63233],
        NUMPAD_ADD: [43],
        NUMPAD_SUBSTRACT: [45],
        DELETE: [46],
        COMMA: [188],
        PERIOD: [190],
        SLASH: [191],
        "`": [192],
        "[": [219],
        "]": [221],
        PAGE_UP: [33],
        PAGE_DOWN: [34],
        END: [35],
        HOME: [36],
        SPACE: [32],
        KP_DOT: [46, 110],
        "-": [189],
        "=": [187],
        FORWARD_SLASH: [191],
      },
      i = {
        8: 1,
        9: 1,
        13: 1,
        27: 1,
        32: 1,
        37: 1,
        63234: 1,
        38: 1,
        63232: 1,
        39: 1,
        63235: 1,
        40: 1,
        63233: 1,
        46: 1,
      };
    function j() {
      "use strict";
      (this.handlers = {}),
        (document.onkeyup = this.onkeyevent.bind(this, "onkeyup")),
        (document.onkeydown = this.onkeyevent.bind(this, "onkeydown")),
        (document.onkeypress = this.onkeyevent.bind(this, "onkeypress"));
    }
    j.prototype.mapKey = function (a) {
      "use strict";
      if (a >= 0 && a <= 9) {
        typeof a !== "number" && (a = a.charCodeAt(0) - 48);
        return [48 + a, 96 + a];
      }
      var b = h[a.toUpperCase()];
      return b ? b : [a.toUpperCase().charCodeAt(0)];
    };
    j.prototype.onkeyevent = function (a, c) {
      "use strict";
      __p && __p();
      c = b("Event").$E(c);
      var d = this.handlers[c.keyCode] || this.handlers[c.which],
        e,
        f;
      if (d)
        for (var g = 0; g < d.length; g++) {
          e = d[g].callback;
          f = d[g].filter;
          try {
            if (!f || f(c, a)) {
              var h = (function () {
                f = e(c, a);
                var d = c.which || c.keyCode;
                b("Bootloader").loadModules(
                  ["KeyEventTypedLogger"],
                  function (a) {
                    new a()
                      .setAction("key_shortcut")
                      .setKey(c.key || "")
                      .setKeyChar(String.fromCharCode(d))
                      .setKeyCode(d)
                      .addToExtraData("is_trusted", c.isTrusted)
                      .log();
                  },
                  "KeyEventController",
                );
                if (f === !1) return { v: b("Event").kill(c) };
              })();
              if (typeof h === "object") return h.v;
            }
          } catch (a) {
            !1;
          }
        }
      return !0;
    };
    j.prototype.resetHandlers = function () {
      "use strict";
      for (var a in this.handlers)
        if (Object.prototype.hasOwnProperty.call(this.handlers, a)) {
          var b = this.handlers[a].filter(function (a) {
            return a.preserve();
          });
          b.length ? (this.handlers[a] = b) : delete this.handlers[a];
        }
    };
    j.getInstance = function () {
      "use strict";
      return g || (g = new j());
    };
    j.defaultFilter = function (event, a) {
      "use strict";
      event = b("Event").$E(event);
      return (
        j.filterEventTypes(event, a) &&
        j.filterEventTargets(event, a) &&
        j.filterEventModifiers(event, a)
      );
    };
    j.filterEventTypes = function (event, a) {
      "use strict";
      return a === "onkeydown" ? !0 : !1;
    };
    j.filterEventTargets = function (event, a) {
      "use strict";
      a = event.getTarget();
      return (
        !b("isElementInteractive")(a) ||
        (event.keyCode in i &&
          ((b("DOMQuery").isNodeOfType(a, ["input", "textarea"]) &&
            a.value.length === 0) ||
            (b("isContentEditable")(a) && b("getElementText")(a).length === 0)))
      );
    };
    j.filterEventModifiers = function (event, a) {
      "use strict";
      return event.ctrlKey || event.altKey || event.metaKey || event.repeat
        ? !1
        : !0;
    };
    j.registerKey = function (a, c, d, e, f) {
      __p && __p();
      d === void 0 && (d = j.defaultFilter);
      e === void 0 && (e = !1);
      f === void 0 && (f = b("emptyFunction").thatReturnsFalse);
      var g = j.getInstance(),
        h = g.mapKey(a);
      b("isEmpty")(g.handlers) && b("Run").onLeave(g.resetHandlers.bind(g));
      var i = {};
      for (var k = 0; k < h.length; k++) {
        a = h[k];
        (!g.handlers[a] || e) && (g.handlers[a] = []);
        var l = { callback: c, filter: d, preserve: f };
        i[a] = l;
        g.handlers[a].push(l);
      }
      return {
        remove: function () {
          for (var a in i) {
            if (g.handlers[a] && g.handlers[a].length) {
              var b = g.handlers[a].indexOf(i[a]);
              b >= 0 && g.handlers[a].splice(b, 1);
            }
            delete i[a];
          }
        },
      };
    };
    e.exports = j;
  },
  null,
);
__d(
  "KeyStatus",
  ["Event", "ExecutionEnvironment"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null,
      h = null;
    function i() {
      h ||
        (h = b("Event").listen(window, "blur", function () {
          (g = null), j();
        }));
    }
    function j() {
      h && (h.remove(), (h = null));
    }
    function a(event) {
      (g = b("Event").getKeyCode(event)), i();
    }
    function c() {
      (g = null), j();
    }
    if (b("ExecutionEnvironment").canUseDOM) {
      d = document.documentElement;
      if (d)
        if (d.addEventListener)
          d.addEventListener("keydown", a, !0),
            d.addEventListener("keyup", c, !0);
        else if (d.attachEvent) {
          f = d.attachEvent;
          f("onkeydown", a);
          f("onkeyup", c);
        }
    }
    d = {
      isKeyDown: function () {
        return !!g;
      },
      getKeyDownCode: function () {
        return g;
      },
    };
    e.exports = d;
  },
  null,
);
__d(
  "mixin",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b, c, d, e, f, g, h, i, j, k) {
      __p && __p();
      k = function () {};
      a = [a, b, c, d, e, f, g, h, i, j];
      b = 0;
      while (a[b]) {
        c = a[b];
        for (var l in c)
          Object.prototype.hasOwnProperty.call(c, l) && (k.prototype[l] = c[l]);
        b += 1;
      }
      return k;
    }
    e.exports = a;
  },
  18,
);
__d(
  "setImmediate",
  ["TimerStorage", "TimeSlice", "setImmediateAcrossTransitions"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      __p && __p();
      var c,
        d = function () {
          b("TimerStorage").unset(b("TimerStorage").IMMEDIATE, c);
          for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
            e[f] = arguments[f];
          Function.prototype.apply.call(a, this, e);
        };
      b("TimeSlice").copyGuardForWrapper(a, d);
      for (
        var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1;
        g < e;
        g++
      )
        f[g - 1] = arguments[g];
      c = b("setImmediateAcrossTransitions").apply(undefined, [d].concat(f));
      b("TimerStorage").set(b("TimerStorage").IMMEDIATE, c);
      return c;
    }
    e.exports = a;
  },
  null,
);
__d(
  "Layer",
  [
    "invariant",
    "KeyStatus",
    "ArbiterMixin",
    "BehaviorsMixin",
    "BootloadedReact",
    "ContextualThing",
    "CSS",
    "DataStore",
    "DOM",
    "Event",
    "FBLogger",
    "HTML",
    "KeyEventController",
    "Parent",
    "Style",
    "ge",
    "isNode",
    "mixin",
    "removeFromArray",
    "setImmediate",
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    b("KeyStatus");
    var i = [];
    a = babelHelpers.inherits(
      j,
      b("mixin")(b("ArbiterMixin"), b("BehaviorsMixin")),
    );
    h = a && a.prototype;
    function j(a, c) {
      "use strict";
      h.constructor.call(this);
      this._config = a || {};
      if (c) {
        this._configure(this._config, c);
        a = this._config.addedBehaviors || [];
        this.enableBehaviors(this._getDefaultBehaviors().concat(a));
      } else
        b("FBLogger")("layer").warn(
          "The markup param wasn't provided to the Layer constructor",
        );
    }
    j.prototype.init = function (a) {
      "use strict";
      this._configure(this._config, a);
      a = this._config.addedBehaviors || [];
      this.enableBehaviors(this._getDefaultBehaviors().concat(a));
      this._initialized = !0;
      return this;
    };
    j.prototype._configure = function (a, c) {
      "use strict";
      __p && __p();
      if (c) {
        var d = b("isNode")(c),
          e = typeof c === "string" || b("HTML").isHTML(c);
        this.containsReactComponent = b("BootloadedReact").isValidElement(c);
        !d &&
          !e &&
          !this.containsReactComponent &&
          b("FBLogger")("layer").warn(
            "Layer must be init with HTML, DOM node or React instance",
          );
        if (e) c = b("HTML")(c).getRootNode();
        else if (this.containsReactComponent) {
          d = document.createElement("div");
          var f = !0;
          b("BootloadedReact").render(
            c,
            d,
            function () {
              this.inform("reactshow"), f || this.updatePosition();
            }.bind(this),
          );
          f = !1;
          c = this._reactContainer = d;
        }
      }
      this._root = this._buildWrapper(a, c);
      a.attributes && b("DOM").setAttributes(this._root, a.attributes);
      a.classNames &&
        a.classNames.forEach(b("CSS").addClass.bind(null, this._root));
      b("CSS").addClass(this._root, "uiLayer");
      a.causalElement && (this._causalElement = b("ge")(a.causalElement));
      a.permanent && (this._permanent = a.permanent);
      a.isStrictlyControlled &&
        (this._isStrictlyControlled = a.isStrictlyControlled);
      b("DataStore").set(this._root, "layer", this);
      return this;
    };
    j.prototype._getDefaultBehaviors = function () {
      "use strict";
      return [];
    };
    j.prototype.getCausalElement = function () {
      "use strict";
      return this._causalElement;
    };
    j.prototype.setCausalElement = function (a) {
      "use strict";
      this._causalElement = a;
      return this;
    };
    j.prototype.getInsertParent = function () {
      "use strict";
      return this._insertParent || document.body;
    };
    j.prototype.getRoot = function () {
      "use strict";
      this._root ||
        (this._destroyed
          ? b("FBLogger")("layer").warn(
              "No root node for this Layer. It has either not yet been set or the Layer has been destroyed.  This layer has been destroyed.",
            )
          : b("FBLogger")("layer").warn(
              "No root node for this Layer. It has probably not been set.",
            ));
      return this._root;
    };
    j.prototype.getContentRoot = function () {
      "use strict";
      return this.getRoot();
    };
    j.prototype._buildWrapper = function (a, b) {
      "use strict";
      return b;
    };
    j.prototype.setInsertParent = function (a) {
      "use strict";
      a &&
        (this._shown &&
          a !== this.getInsertParent() &&
          (b("DOM").appendContent(a, this.getRoot()), this.updatePosition()),
        (this._insertParent = a));
      return this;
    };
    j.prototype.showAfterDelay = function (a) {
      "use strict";
      setTimeout(this.show.bind(this), a);
    };
    j.prototype.show = function () {
      "use strict";
      __p && __p();
      if (this._shown) return this;
      var a = this.getRoot();
      a != null || g(0);
      this.inform("beforeshow");
      b("Style").set(a, "visibility", "hidden");
      b("Style").set(a, "overflow", "hidden");
      b("CSS").show(a);
      b("DOM").appendContent(this.getInsertParent(), a);
      this.updatePosition() !== !1
        ? ((this._shown = !0),
          this.inform("show"),
          j.inform("show", this),
          this._permanent ||
            setTimeout(
              function () {
                this._shown && i.push(this);
              }.bind(this),
              0,
            ))
        : b("CSS").hide(a);
      b("Style").set(a, "visibility", "");
      b("Style").set(a, "overflow", "");
      b("Style").set(a, "opacity", "1");
      this.inform("aftershow");
      return this;
    };
    j.prototype.hide = function (a) {
      "use strict";
      if (this._isStrictlyControlled) {
        this._shown && this.inform("runhide", a);
        return this;
      }
      return this._hide();
    };
    j.prototype._hide = function () {
      "use strict";
      if (this._hiding || !this._shown || this.inform("beforehide") === !1)
        return this;
      this._hiding = !0;
      this.inform("starthide") !== !1 && this.finishHide();
      return this;
    };
    j.prototype.conditionShow = function (a) {
      "use strict";
      return a ? this.show() : this._hide();
    };
    j.prototype.finishHide = function () {
      "use strict";
      __p && __p();
      if (this._shown) {
        this._permanent || b("removeFromArray")(i, this);
        this._hiding = !1;
        this._shown = !1;
        var a = this.getRoot();
        a != null || g(0);
        b("CSS").hide(a);
        this.inform("hide");
        j.inform("hide", this);
      }
    };
    j.prototype.isShown = function () {
      "use strict";
      return this._shown;
    };
    j.prototype.updatePosition = function () {
      "use strict";
      return !0;
    };
    j.prototype.destroy = function () {
      "use strict";
      __p && __p();
      this.containsReactComponent &&
        b("BootloadedReact").unmountComponentAtNode(this._reactContainer);
      this.finishHide();
      var a = this.getRoot();
      b("DOM").remove(a);
      this.destroyBehaviors();
      this.inform("destroy");
      j.inform("destroy", this);
      b("DataStore").remove(a, "layer");
      this._root = this._causalElement = null;
      this._destroyed = !0;
    };
    j.init = function (a, b) {
      "use strict";
      a.init(b);
    };
    j.initAndShow = function (a, b) {
      "use strict";
      a.init(b).show();
    };
    j.show = function (a) {
      "use strict";
      a.show();
    };
    j.showAfterDelay = function (a, b) {
      "use strict";
      a.showAfterDelay(b);
    };
    j.getTopmostLayer = function () {
      "use strict";
      return i[i.length - 1];
    };
    Object.assign(j, b("ArbiterMixin"));
    Object.assign(j.prototype, {
      _destroyed: !1,
      _initialized: !1,
      _root: null,
      _shown: !1,
      _hiding: !1,
      _causalElement: null,
      _reactContainer: null,
    });
    b("Event").listen(
      document.documentElement,
      "keydown",
      function (event) {
        if (b("KeyEventController").filterEventTargets(event, "keydown"))
          for (var a = i.length - 1; a >= 0; a--)
            if (i[a].inform("key", event) === !1) return !1;
        return !0;
      },
      b("Event").Priority.URGENT,
    );
    var k;
    b("Event").listen(document.documentElement, "mousedown", function (event) {
      k = event.getTarget();
    });
    var l;
    b("Event").listen(document.documentElement, "mouseup", function (event) {
      (l = event.getTarget()),
        b("setImmediate")(function () {
          (k = null), (l = null);
        });
    });
    b("Event").listen(document.documentElement, "click", function (event) {
      __p && __p();
      var a = k,
        c = l;
      k = null;
      l = null;
      var d = i.length;
      if (!d) return;
      var e = event.getTarget();
      if (e !== c || e !== a) return;
      if (!b("DOM").contains(document.documentElement, e)) return;
      if (e.offsetWidth != null && !e.offsetWidth) return;
      if (b("Parent").byClass(e, "generic_dialog")) return;
      while (d--) {
        c = i[d];
        a = c.getContentRoot();
        a != null || g(0);
        if (b("ContextualThing").containsIncludingLayers(a, e)) return;
        if (c.inform("blur", { target: e }) === !1 || c.isShown()) return;
      }
    });
    e.exports = j;
  },
  null,
);
__d(
  "Popup",
  [],
  function (a, b, c, d, e, f) {
    a = {
      open: function (a, b, c, d) {
        var e = document.body,
          f = "screenX" in window ? window.screenX : window.screenLeft,
          g = "screenY" in window ? window.screenY : window.screenTop,
          h = "outerWidth" in window ? window.outerWidth : e.clientWidth;
        e = "outerHeight" in window ? window.outerHeight : e.clientHeight - 22;
        f = Math.floor(f + (h - b) / 2);
        h = Math.floor(g + (e - c) / 2.5);
        g = [
          "width=" + b,
          "height=" + c,
          "left=" + f,
          "top=" + h,
          "scrollbars",
        ];
        return window.open(a, d || "_blank", g.join(","));
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "getViewportDimensions",
  ["UserAgent", "gkx"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    function g() {
      var a;
      document.documentElement && (a = document.documentElement.clientWidth);
      !a && document.body && (a = document.body.clientWidth);
      return a || 0;
    }
    function h() {
      var a;
      document.documentElement && (a = document.documentElement.clientHeight);
      !a && document.body && (a = document.body.clientHeight);
      return a || 0;
    }
    function i() {
      return {
        width: window.innerWidth || g(),
        height: window.innerHeight || h(),
      };
    }
    i.withoutScrollbars = function () {
      return (b("UserAgent").isPlatform("iOS") ||
        b("UserAgent").isPlatform("Android")) &&
        b("gkx")(
          "AT6pL_xvmKcglNeVwU3ceBbLXrQSVtHi-U3b6_RC1aULyn__B9oBtR-gXP2MrLURZ1Vk9LGqeJudSxVqn_Ov4DNbwo3DZY70m9Cjr7lwqmOdag",
        )
        ? i()
        : { width: g(), height: h() };
    };
    e.exports = i;
  },
  null,
);
__d(
  "PopupWindow",
  ["DOMDimensions", "DOMQuery", "Layer", "Popup", "getViewportDimensions"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      _opts: {
        allowShrink: !0,
        strategy: "vector",
        timeout: 100,
        widthElement: null,
      },
      init: function (a) {
        Object.assign(g._opts, a), setInterval(g._resizeCheck, g._opts.timeout);
      },
      _resizeCheck: function () {
        __p && __p();
        var a = b("getViewportDimensions")(),
          c = g._getDocumentSize(),
          d = b("Layer").getTopmostLayer();
        if (d) {
          d = d.getRoot().firstChild;
          var e = b("DOMDimensions").getElementDimensions(d);
          e.height += b("DOMDimensions").measureElementBox(
            d,
            "height",
            !0,
            !0,
            !0,
          );
          e.width += b("DOMDimensions").measureElementBox(
            d,
            "width",
            !0,
            !0,
            !0,
          );
          c.height = Math.max(c.height, e.height);
          c.width = Math.max(c.width, e.width);
        }
        d = c.height - a.height;
        e = c.width - a.width;
        e < 0 && !g._opts.widthElement && (e = 0);
        e = e > 1 ? e : 0;
        !g._opts.allowShrink && d < 0 && (d = 0);
        if (d || e)
          try {
            window.console && window.console.firebug && !1,
              window.resizeBy(e, d),
              e && window.moveBy(e / -2, 0);
          } catch (a) {}
      },
      _getDocumentSize: function () {
        var c = b("DOMDimensions").getDocumentDimensions();
        g._opts.strategy === "offsetHeight" &&
          (c.height = document.body.offsetHeight);
        if (g._opts.widthElement) {
          var d = b("DOMQuery").scry(document.body, g._opts.widthElement)[0];
          d && (c.width = b("DOMDimensions").getElementDimensions(d).width);
        }
        d = a.Dialog;
        d &&
          d.max_bottom &&
          d.max_bottom > c.height &&
          (c.height = d.max_bottom);
        return c;
      },
      open: function (a, c, d, e) {
        return b("Popup").open(a, d, c, e);
      },
    };
    e.exports = g;
  },
  null,
);
__d(
  "PluginOptin",
  [
    "DOMEvent",
    "DOMEventListener",
    "PlatformWidgetEndpoint",
    "PluginLoggedOutUserTypedLogger",
    "PluginMessage",
    "PopupWindow",
    "URI",
    "UserAgent_DEPRECATED",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, c) {
      Object.assign(this, {
        return_params: b("URI").getRequestURI().getQueryData(),
        login_params: {},
        optin_params: {},
        plugin: a,
        api_key: c,
      }),
        this.addReturnParams({ ret: "optin" }),
        delete this.return_params.hash;
    }
    Object.assign(g.prototype, {
      addReturnParams: function (a) {
        Object.assign(this.return_params, a);
        return this;
      },
      addLoginParams: function (a) {
        Object.assign(this.login_params, a);
        return this;
      },
      addOptinParams: function (a) {
        Object.assign(this.optin_params, a);
        return this;
      },
      start: function () {
        var a = this.api_key || 127760087237610;
        b("URI").getRequestURI().getQueryData().kid_directed_site &&
          (this.login_params.kid_directed_site = !0);
        this.login_params.referrer = document.referrer;
        var c = new (b("URI"))(
          b("PlatformWidgetEndpoint").dialog("plugin.optin"),
        )
          .addQueryData(this.optin_params)
          .addQueryData({
            app_id: a,
            secure: b("URI").getRequestURI().isSecure(),
            social_plugin: this.plugin,
            return_params: JSON.stringify(this.return_params),
            login_params: JSON.stringify(this.login_params),
          });
        b("UserAgent_DEPRECATED").mobile()
          ? c.setSubdomain("m")
          : c.addQueryData({ display: "popup" });
        this.return_params.act !== null &&
          this.return_params.act === "send" &&
          new (b("PluginLoggedOutUserTypedLogger"))()
            .setPluginAppID(a)
            .setPluginName(this.return_params.act)
            .setHref(this.return_params.href)
            .logVital();
        this.popup = b("PopupWindow").open(c.toString(), 420, 450);
        b("PluginMessage").listen();
        return this;
      },
    });
    g.starter = function (a, b, c, d) {
      a = new g(a);
      a.addReturnParams(b || {});
      a.addLoginParams(c || {});
      a.addOptinParams(d || {});
      return a.start.bind(a);
    };
    g.listen = function (a, c, d, e, f) {
      b("DOMEventListener").add(a, "click", function (a) {
        new (b("DOMEvent"))(a).kill(), g.starter(c, d, e, f)();
      });
    };
    e.exports = g;
  },
  null,
);
__d(
  "CookieCore",
  [
    "CookieCoreConfig",
    "CookieCoreLoggingConfig",
    "FBLogger",
    "Random",
    "gkx",
    "performanceNow",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g =
        /^.*(\.(facebook|messenger|oculus|instagram|facebookcorewwwi|workplace)\..*)$/i,
      h = /_js_(.*)/,
      i = "",
      j = 0,
      k = 10 * 1e3;
    function l(a) {
      return window.self != window.top ? !1 : !0;
    }
    var m = {
      set: function (a, b) {
        if (!p(a)) return;
        m.setWithoutChecks(a, b, r(a), s(a), q(a));
      },
      setWithoutChecks: function (a, b, c, d, e) {
        __p && __p();
        var f = Date.now();
        if (c != null)
          if (c > f) c -= f;
          else if (c == 1) {
            m.clear(a, d);
            return;
          }
        document.cookie =
          a +
          "=" +
          encodeURIComponent(b) +
          "; " +
          (c ? "expires=" + new Date(f + c).toUTCString() + "; " : "") +
          "path=" +
          d +
          "; domain=" +
          window.location.hostname.replace(g, "$1") +
          (e ? "; secure" : "");
        u();
      },
      setIfFirstPartyContext: function (a, b) {
        if (!l(a)) return;
        m.set(a, b);
      },
      setWithoutChecksIfFirstPartyContext: function (a, b, c, d, e) {
        if (!l(a)) return;
        m.setWithoutChecks(a, b, c, d, e);
      },
      clear: function (a, b) {
        b === void 0 && (b = "/"),
          (b = b || "/"),
          (document.cookie =
            a +
            "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" +
            b +
            "; domain=" +
            window.location.hostname.replace(g, "$1")),
          u();
      },
      get: function (a) {
        if (!p(a)) return null;
        a = t().match("(?:^|;\\s*)" + a + "=(.*?)(?:;|$)");
        return a ? decodeURIComponent(a[1]) : a;
      },
    };
    function n(a) {
      return { insecure: a.i || !1, path: a.p || "/", ttlSeconds: a.t || 0 };
    }
    function o(a) {
      if (b("CookieCoreConfig")[a] !== undefined)
        return n(b("CookieCoreConfig")[a]);
      a = a.match(h);
      return a && a.length > 1 ? o(a[1]) : null;
    }
    function p(a) {
      return o(a) !== null;
    }
    function q(a) {
      a = o(a);
      return a == null ? !0 : !a.insecure;
    }
    function r(a) {
      a = o(a);
      return a == null ? null : a.ttlSeconds * 1e3;
    }
    function s(a) {
      a = o(a);
      return a == null ? "/" : a.path;
    }
    function t() {
      if (
        b("gkx")(
          "AT5tMpZqIKh0vdvJexCKKhPqDfMAWQPHLQnR8CgtajZUMLAZP8rj8YnSD9bEFc4BrmsaxTBmOCxn2mR6tM_ew1hH",
        )
      ) {
        j + k < Date.now() && v();
        return i;
      } else return w();
    }
    function u() {
      j = 0;
    }
    function v() {
      (i = w()), (j = Date.now());
    }
    function w() {
      if (b("CookieCoreLoggingConfig").sampleRate > 0) {
        var a = b("performanceNow")(),
          c = document.cookie;
        a = b("performanceNow")() - a;
        var d =
          a > b("CookieCoreLoggingConfig").maximumIgnorableStallMs &&
          b("Random").coinflip(1 / b("CookieCoreLoggingConfig").sampleRate);
        d &&
          b("FBLogger")("cookie_infra")
            .addMetadata("COOKIE_INFRA", "WALL_TIME", String(a))
            .warn(
              "Cookie read exceeded %s milliseconds.",
              b("CookieCoreLoggingConfig").maximumIgnorableStallMs,
            );
        return c;
      } else return document.cookie;
    }
    e.exports = m;
  },
  null,
);
__d(
  "Cookie",
  ["Bootloader", "CookieCore", "Env"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      if (b("Env").no_cookies) return !1;
      if (b("Env").defer_cookies) {
        b("Bootloader").loadModules(
          ["BanzaiODS"],
          function (b) {
            b.bumpEntityKey("defer_cookies", "set." + a);
          },
          "Cookie",
        );
        return !1;
      }
      return !0;
    }
    function a(a, c) {
      if (!g(a)) return;
      b("CookieCore").set(a, c);
    }
    function c(a, c, d, e, f) {
      if (!g(a)) return;
      b("CookieCore").setWithoutChecks(a, c, d, e, f);
    }
    e.exports = babelHelpers["extends"]({}, b("CookieCore"), {
      set: a,
      setWithoutChecks: c,
    });
  },
  null,
);
__d(
  "CurrentUser",
  ["Cookie", "CurrentUserInitialData"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      getID: function () {
        return b("CurrentUserInitialData").USER_ID;
      },
      getAccountID: function () {
        return b("CurrentUserInitialData").ACCOUNT_ID;
      },
      getWorkUserID: function () {
        return b("CurrentUserInitialData").WORK_USER_ID;
      },
      getName: function () {
        return b("CurrentUserInitialData").NAME;
      },
      getShortName: function () {
        return b("CurrentUserInitialData").SHORT_NAME;
      },
      isLoggedIn: function () {
        return (
          b("CurrentUserInitialData").USER_ID &&
          b("CurrentUserInitialData").USER_ID !== "0"
        );
      },
      isLoggedInNow: function () {
        if (!g.isLoggedIn()) return !1;
        if (b("CurrentUserInitialData").IS_INTERN_SITE) return !0;
        if (b("CurrentUserInitialData").IS_WORK_USER) return !0;
        return b("CurrentUserInitialData").ORIGINAL_USER_ID
          ? b("CurrentUserInitialData").ORIGINAL_USER_ID ===
              b("Cookie").get("c_user")
          : b("CurrentUserInitialData").USER_ID === b("Cookie").get("c_user");
      },
      isEmployee: function () {
        return !!b("CurrentUserInitialData").IS_EMPLOYEE;
      },
      hasWorkUser: function () {
        return !!b("CurrentUserInitialData").HAS_WORK_USER;
      },
      isWorkUser: function () {
        return !!b("CurrentUserInitialData").IS_WORK_USER;
      },
      isGray: function () {
        return !!b("CurrentUserInitialData").IS_GRAY;
      },
      isUnderage: function () {
        return !!b("CurrentUserInitialData").IS_UNDERAGE;
      },
      isMessengerOnlyUser: function () {
        return !!b("CurrentUserInitialData").IS_MESSENGER_ONLY_USER;
      },
      isDeactivatedAllowedOnMessenger: function () {
        return !!b("CurrentUserInitialData")
          .IS_DEACTIVATED_ALLOWED_ON_MESSENGER;
      },
    };
    e.exports = g;
  },
  18,
);
__d(
  "QueryString",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      __p && __p();
      var b = [];
      Object.keys(a)
        .sort()
        .forEach(function (c) {
          var d = a[c];
          if (d === undefined) return;
          if (d === null) {
            b.push(c);
            return;
          }
          b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d));
        });
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
        (a.indexOf("?") !== -1 ? "&" : "?") +
        (typeof b === "string" ? b : g.encode(b))
      );
    }
    var g = { encode: a, decode: b, appendToUrl: c };
    e.exports = g;
  },
  null,
);
/**
 * License: https://www.facebook.com/legal/license/qZmK4zWM8-v/
 */
__d(
  "SnappyCompress",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    (function a(b, c, d) {
      __p && __p();
      function e(g, h) {
        __p && __p();
        if (!c[g]) {
          if (!b[g]) {
            var i = typeof requireSnappy == "function" && requireSnappy;
            if (!h && i) return i(g, !0);
            if (f) return f(g, !0);
            h = new Error("Cannot find module '" + g + "'");
            throw ((h.code = "MODULE_NOT_FOUND"), h);
          }
          i = c[g] = { exports: {} };
          b[g][0].call(
            i.exports,
            function (a) {
              var c = b[g][1][a];
              return e(c ? c : a);
            },
            i,
            i.exports,
            a,
            b,
            c,
            d,
          );
        }
        return c[g].exports;
      }
      var f = typeof requireSnappy == "function" && requireSnappy;
      for (var g = 0; g < d.length; g++) e(d[g]);
      return e;
    })(
      {
        1: [
          function (c, a, b) {
            a = window.SnappyJS || {};
            (a.uncompress = c("./index").uncompress),
              (a.compress = c("./index").compress),
              (window.SnappyJS = a);
          },
          { "./index": 2 },
        ],
        2: [
          function (c, a, b) {
            "use strict";
            __p && __p();
            function a() {
              return "object" == typeof process &&
                "object" == typeof process.versions &&
                "undefined" != typeof process.versions.node
                ? !0
                : !1;
            }
            function d(a) {
              return a instanceof Uint8Array && (!k || !Buffer.isBuffer(a));
            }
            function g(a) {
              return a instanceof ArrayBuffer;
            }
            function h(a) {
              return k ? Buffer.isBuffer(a) : !1;
            }
            function i(a) {
              __p && __p();
              if (!d(a) && !g(a) && !h(a)) throw new TypeError(n);
              var b = !1,
                c = !1;
              d(a) ? (b = !0) : g(a) && ((c = !0), (a = new Uint8Array(a)));
              a = new l(a);
              var e = a.readUncompressedLength();
              if (-1 === e) throw new Error("Invalid Snappy bitstream");
              if (b) {
                if (((b = new Uint8Array(e)), !a.uncompressToBuffer(b)))
                  throw new Error("Invalid Snappy bitstream");
              } else if (c) {
                if (
                  ((b = new ArrayBuffer(e)),
                  (c = new Uint8Array(b)),
                  !a.uncompressToBuffer(c))
                )
                  throw new Error("Invalid Snappy bitstream");
              } else if (((b = new Buffer(e)), !a.uncompressToBuffer(b)))
                throw new Error("Invalid Snappy bitstream");
              return b;
            }
            function j(a) {
              if (!d(a) && !g(a) && !h(a)) throw new TypeError(n);
              var b = !1,
                c = !1;
              d(a) ? (b = !0) : g(a) && ((c = !0), (a = new Uint8Array(a)));
              var e;
              a = new m(a);
              var f = a.maxCompressedLength();
              return (
                b
                  ? ((b = new Uint8Array(f)), (e = a.compressToBuffer(b)))
                  : c
                  ? ((b = new ArrayBuffer(f)),
                    (c = new Uint8Array(b)),
                    (e = a.compressToBuffer(c)))
                  : ((b = new Buffer(f)), (e = a.compressToBuffer(b))),
                b.slice(0, e)
              );
            }
            var k = a(),
              l = c("./snappy_decompressor").SnappyDecompressor,
              m = c("./snappy_compressor").SnappyCompressor,
              n =
                "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
            (b.uncompress = i), (b.compress = j);
          },
          { "./snappy_compressor": 3, "./snappy_decompressor": 4 },
        ],
        3: [
          function (c, a, b) {
            "use strict";
            __p && __p();
            function d(a, b) {
              return (506832829 * a) >>> b;
            }
            function g(a, b) {
              return (
                a[b] + (a[b + 1] << 8) + (a[b + 2] << 16) + (a[b + 3] << 24)
              );
            }
            function h(a, b, c) {
              return (
                a[b] === a[c] &&
                a[b + 1] === a[c + 1] &&
                a[b + 2] === a[c + 2] &&
                a[b + 3] === a[c + 3]
              );
            }
            function i(a, b, c, d, e) {
              var f;
              for (f = 0; e > f; f++) c[d + f] = a[b + f];
            }
            function j(a, b, c, d, e) {
              return (
                60 >= c
                  ? ((d[e] = (c - 1) << 2), (e += 1))
                  : 256 > c
                  ? ((d[e] = 240), (d[e + 1] = c - 1), (e += 2))
                  : ((d[e] = 244),
                    (d[e + 1] = (c - 1) & 255),
                    (d[e + 2] = (c - 1) >>> 8),
                    (e += 3)),
                i(a, b, d, e, c),
                e + c
              );
            }
            function k(a, b, c, d) {
              return 12 > d && 2048 > c
                ? ((a[b] = 1 + ((d - 4) << 2) + ((c >>> 8) << 5)),
                  (a[b + 1] = 255 & c),
                  b + 2)
                : ((a[b] = 2 + ((d - 1) << 2)),
                  (a[b + 1] = 255 & c),
                  (a[b + 2] = c >>> 8),
                  b + 3);
            }
            function l(a, b, c, d) {
              for (; d >= 68; ) (b = k(a, b, c, 64)), (d -= 64);
              return d > 64 && ((b = k(a, b, c, 60)), (d -= 60)), k(a, b, c, d);
            }
            function m(a, b, c, e, f) {
              __p && __p();
              for (var i = 1; c >= 1 << i && p >= i; ) i += 1;
              i -= 1;
              var k = 32 - i;
              "undefined" == typeof q[i] && (q[i] = new Uint16Array(1 << i));
              var m;
              i = q[i];
              for (m = 0; m < i.length; m++) i[m] = 0;
              var n, o, r, s, t;
              m = b + c;
              var u = b,
                v = b,
                w = !0,
                x = 15;
              if (c >= x)
                for (c = m - x, b += 1, x = d(g(a, b), k); w; ) {
                  (s = 32), (o = b);
                  do {
                    if (
                      ((b = o),
                      (n = x),
                      (t = s >>> 5),
                      (s += 1),
                      (o = b + t),
                      b > c)
                    ) {
                      w = !1;
                      break;
                    }
                    (x = d(g(a, o), k)), (r = u + i[n]), (i[n] = b - u);
                  } while (!h(a, b, r));
                  if (!w) break;
                  f = j(a, v, b - v, e, f);
                  do {
                    for (t = b, n = 4; m > b + n && a[b + n] === a[r + n]; )
                      n += 1;
                    if (
                      ((b += n),
                      (o = t - r),
                      (f = l(e, f, o, n)),
                      (v = b),
                      b >= c)
                    ) {
                      w = !1;
                      break;
                    }
                    (s = d(g(a, b - 1), k)),
                      (i[s] = b - 1 - u),
                      (t = d(g(a, b), k)),
                      (r = u + i[t]),
                      (i[t] = b - u);
                  } while (h(a, b, r));
                  if (!w) break;
                  (b += 1), (x = d(g(a, b), k));
                }
              return m > v && (f = j(a, v, m - v, e, f)), f;
            }
            function n(a, b, c) {
              do (b[c] = 127 & a), (a >>>= 7), a > 0 && (b[c] += 128), (c += 1);
              while (a > 0);
              return c;
            }
            function c(a) {
              this.array = a;
            }
            a = 16;
            var o = 1 << a,
              p = 14,
              q = new Array(p + 1);
            (c.prototype.maxCompressedLength = function () {
              var a = this.array.length;
              return 32 + a + Math.floor(a / 6);
            }),
              (c.prototype.compressToBuffer = function (a) {
                var b,
                  c = this.array,
                  d = c.length,
                  e = 0,
                  f = 0;
                for (f = n(d, a, f); d > e; )
                  (b = Math.min(d - e, o)), (f = m(c, e, b, a, f)), (e += b);
                return f;
              }),
              (b.SnappyCompressor = c);
          },
          {},
        ],
        4: [
          function (c, a, b) {
            "use strict";
            __p && __p();
            function d(a, b, c, d, e) {
              var f;
              for (f = 0; e > f; f++) c[d + f] = a[b + f];
            }
            function g(a, b, c, d) {
              var e;
              for (e = 0; d > e; e++) a[b + e] = a[b - c + e];
            }
            function c(a) {
              (this.array = a), (this.pos = 0);
            }
            var h = [0, 255, 65535, 16777215, 4294967295];
            (c.prototype.readUncompressedLength = function () {
              for (
                var a, b, c = 0, d = 0;
                32 > d && this.pos < this.array.length;

              ) {
                if (
                  ((a = this.array[this.pos]),
                  (this.pos += 1),
                  (b = 127 & a),
                  (b << d) >>> d !== b)
                )
                  return -1;
                if (((c |= b << d), 128 > a)) return c;
                d += 7;
              }
              return -1;
            }),
              (c.prototype.uncompressToBuffer = function (a) {
                __p && __p();
                for (
                  var b,
                    c,
                    e,
                    f,
                    i = this.array,
                    j = i.length,
                    k = this.pos,
                    l = 0;
                  k < i.length;

                )
                  if (((b = i[k]), (k += 1), 0 === (3 & b))) {
                    if (((c = (b >>> 2) + 1), c > 60)) {
                      if (k + 3 >= j) return !1;
                      (e = c - 60),
                        (c =
                          i[k] +
                          (i[k + 1] << 8) +
                          (i[k + 2] << 16) +
                          (i[k + 3] << 24)),
                        (c = (c & h[e]) + 1),
                        (k += e);
                    }
                    if (k + c > j) return !1;
                    d(i, k, a, l, c), (k += c), (l += c);
                  } else {
                    switch (3 & b) {
                      case 1:
                        (c = ((b >>> 2) & 7) + 4),
                          (f = i[k] + ((b >>> 5) << 8)),
                          (k += 1);
                        break;
                      case 2:
                        if (k + 1 >= j) return !1;
                        (c = (b >>> 2) + 1),
                          (f = i[k] + (i[k + 1] << 8)),
                          (k += 2);
                        break;
                      case 3:
                        if (k + 3 >= j) return !1;
                        (c = (b >>> 2) + 1),
                          (f =
                            i[k] +
                            (i[k + 1] << 8) +
                            (i[k + 2] << 16) +
                            (i[k + 3] << 24)),
                          (k += 4);
                    }
                    if (0 === f || f > l) return !1;
                    g(a, l, f, c), (l += c);
                  }
                return !0;
              }),
              (b.SnappyDecompressor = c);
          },
          {},
        ],
      },
      {},
      [1],
    ),
      (e.exports = SnappyJS);
  },
  null,
);
__d(
  "SnappyCompressUtil",
  ["SnappyCompress"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = {
      compressUint8ArrayToSnappy: function (a) {
        __p && __p();
        if (a == null) return null;
        var c = null;
        try {
          c = b("SnappyCompress").compress(a);
        } catch (a) {
          return null;
        }
        a = "";
        for (var d = 0; d < c.length; d++) a += String.fromCharCode(c[d]);
        return window.btoa(a);
      },
      compressStringToSnappy: function (a) {
        __p && __p();
        if (window.Uint8Array === undefined || window.btoa === undefined)
          return null;
        var b = new window.Uint8Array(a.length);
        for (var c = 0; c < a.length; c++) {
          var d = a.charCodeAt(c);
          if (d > 127) return null;
          b[c] = d;
        }
        return g.compressUint8ArrayToSnappy(b);
      },
    };
    e.exports = g;
  },
  null,
);
__d(
  "getCrossOriginTransport",
  ["invariant", "ex"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h() {
      try {
        var a = new XMLHttpRequest();
        !("withCredentials" in a) &&
          typeof XDomainRequest !== "undefined" &&
          (a = new XDomainRequest());
        return a;
      } catch (a) {
        throw new Error(b("ex")("getCrossOriginTransport: %s", a.message));
      }
    }
    h.withCredentials = function () {
      var a = h();
      "withCredentials" in a || g(0);
      var b = a.open;
      a.open = function () {
        b.apply(this, arguments), (this.withCredentials = !0);
      };
      return a;
    };
    e.exports = h;
  },
  null,
);
__d(
  "ZeroRewrites",
  [
    "URI",
    "ZeroRewriteRules",
    "getCrossOriginTransport",
    "getSameOriginTransport",
    "isFacebookURI",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      rewriteURI: function (a) {
        if (!b("isFacebookURI")(a) || g._isWhitelisted(a)) return a;
        var c = g._getRewrittenSubdomain(a);
        c !== null && c !== undefined && (a = a.setSubdomain(c));
        return a;
      },
      getTransportBuilderForURI: function (a) {
        return g._isRewritten(a)
          ? b("getCrossOriginTransport").withCredentials
          : b("getSameOriginTransport");
      },
      isRewriteSafe: function (a) {
        if (
          Object.keys(b("ZeroRewriteRules").rewrite_rules).length === 0 ||
          !b("isFacebookURI")(a)
        )
          return !1;
        var c = g._getCurrentURI().getDomain(),
          d = new (b("URI"))(a).qualify().getDomain();
        return c === d || g._isRewritten(a);
      },
      _isWhitelisted: function (a) {
        a = a.getPath();
        a.endsWith("/") || (a += "/");
        return (
          b("ZeroRewriteRules").whitelist &&
          b("ZeroRewriteRules").whitelist[a] == 1
        );
      },
      _getRewrittenSubdomain: function (a) {
        a = new (b("URI"))(a).qualify().getSubdomain();
        return b("ZeroRewriteRules").rewrite_rules[a];
      },
      _isRewritten: function (a) {
        a = new (b("URI"))(a).qualify();
        if (
          Object.keys(b("ZeroRewriteRules").rewrite_rules).length === 0 ||
          !b("isFacebookURI")(a) ||
          g._isWhitelisted(a)
        )
          return !1;
        var c = a.getSubdomain(),
          d = g._getCurrentURI(),
          e = g._getRewrittenSubdomain(d);
        return a.getDomain() !== d.getDomain() && c === e;
      },
      _getCurrentURI: function () {
        return new (b("URI"))("/").qualify();
      },
    };
    e.exports = g;
  },
  null,
);
__d(
  "BanzaiAdapter",
  [
    "Arbiter",
    "CurrentUser",
    "QueryString",
    "Run",
    "SiteData",
    "SnappyCompressUtil",
    "URI",
    "UserAgent",
    "ZeroRewrites",
    "getAsyncParams",
    "BanzaiConfig",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = [],
      h = new (b("Arbiter"))(),
      i = "/ajax/bz",
      j = "POST",
      k = {},
      l = (k.adapter = {
        config: b("BanzaiConfig"),
        endpoint: i,
        getUserID: function () {
          return b("CurrentUser").getID();
        },
        inform: function (a) {
          h.inform(a);
        },
        subscribe: function (a, b) {
          return h.subscribe(a, b);
        },
        cleanup: function () {
          var a = g;
          g = [];
          a.forEach(function (a) {
            a.readyState < 4 && a.abort();
          });
        },
        readyToSend: function () {
          return b("UserAgent").isBrowser("IE <= 8") || navigator.onLine;
        },
        send: function (a, c, d, e) {
          __p && __p();
          var f = b("ZeroRewrites").rewriteURI(new (b("URI"))(i)),
            h = b("ZeroRewrites").getTransportBuilderForURI(f)();
          h.open(j, f.toString(), !0);
          h.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded",
          );
          h.onreadystatechange = function () {
            if (h.readyState >= 4) {
              var a = g.indexOf(h);
              a >= 0 && g.splice(a, 1);
              try {
                a = h.status;
              } catch (b) {
                a = 0;
              }
              a == 200
                ? (c && c(), e || l.inform(k.OK))
                : (d && d(a), e || l.inform(k.ERROR));
            }
          };
          g.push(h);
          h.send(l.prepForTransit(a));
        },
        addRequestAuthData: function (a) {
          return a;
        },
        prepForTransit: function (a) {
          var c = b("getAsyncParams")(j);
          c.q = JSON.stringify(a);
          c.ts = Date.now();
          c.ph = b("SiteData").push_phase;
          return b("QueryString").encode(c);
        },
        prepWadForTransit: function (a) {
          if (a.snappy == null || a.snappy === !0) {
            var c = Date.now(),
              d = JSON.stringify(a.posts),
              e = b("SnappyCompressUtil").compressStringToSnappy(d);
            e != null && e.length < d.length
              ? ((a.posts = e), (a.snappy_ms = Date.now() - c))
              : delete a.snappy;
          }
        },
        setHooks: function () {},
        setUnloadHook: function () {
          b("Run").onAfterUnload(k._unload);
        },
        onUnload: function (a) {
          b("Run").onAfterUnload(a);
        },
        isOkToSendViaBeacon: function () {
          return !0;
        },
      });
    e.exports = k;
  },
  18,
);
__d(
  "BanzaiStreamPayloads",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {};
    a = {
      addPayload: function (a, b) {
        g[a] = b;
      },
      removePayload: function (a) {
        delete g[a];
      },
      unload: function (a) {
        Object.keys(g).forEach(function (b) {
          b = g[b];
          a(b.route, b.payload);
        });
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "FBJSON",
  [],
  function (a, b, c, d, e, f) {
    e.exports = { parse: JSON.parse, stringify: JSON.stringify };
  },
  null,
);
__d(
  "cancelIdleCallback",
  ["IdleCallbackImplementation", "TimerStorage", "TimeSlice"],
  function (a, b, c, d, e, f) {
    var g = b("TimerStorage").IDLE_CALLBACK;
    function a(a) {
      b("TimerStorage").unset(g, a);
      var c = g + String(a);
      b("TimeSlice").cancelWithToken(c);
      b("IdleCallbackImplementation").cancelIdleCallback(a);
    }
    e.exports = a;
  },
  null,
);
__d(
  "SetIdleTimeoutAcrossTransitions",
  [
    "NavigationMetrics",
    "cancelIdleCallback",
    "clearTimeout",
    "nullthrows",
    "requestIdleCallbackAcrossTransitions",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = !1,
      h = new Map();
    c = {
      start: function (a, c) {
        if (g) {
          var d = b("setTimeoutAcrossTransitions")(function () {
            var c = b("requestIdleCallbackAcrossTransitions")(function () {
              a(), h["delete"](c);
            });
            h.set(d, c);
          }, c);
          return d;
        } else return b("setTimeoutAcrossTransitions")(a, c);
      },
      clear: function (a) {
        b("clearTimeout")(a),
          h.has(a) &&
            (b("cancelIdleCallback")(b("nullthrows")(h.get(a))),
            h["delete"](a));
      },
    };
    b("NavigationMetrics").addRetroactiveListener(
      b("NavigationMetrics").Events.EVENT_OCCURRED,
      function (b, c) {
        c.event === "all_pagelets_loaded" && (g = !!a.requestIdleCallback);
      },
    );
    e.exports = c;
  },
  18,
);
__d(
  "WebStorageMutex",
  ["WebStorage", "clearTimeout", "pageID", "setTimeoutAcrossTransitions"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null,
      h = !1,
      i = b("pageID");
    function j() {
      h || ((h = !0), (g = b("WebStorage").getLocalStorage()));
      return g;
    }
    function a(a) {
      "use strict";
      this.name = a;
    }
    a.testSetPageID = function (a) {
      "use strict";
      i = a;
    };
    a.prototype.$1 = function () {
      "use strict";
      if (!j()) return i;
      var a = j().getItem("mutex_" + this.name);
      a = a ? a.split(":") : null;
      return a && a[1] >= Date.now() ? a[0] : null;
    };
    a.prototype.$2 = function (a) {
      "use strict";
      if (!j()) return;
      a = Date.now() + (a || 1e4);
      b("WebStorage").setItemGuarded(j(), "mutex_" + this.name, i + ":" + a);
    };
    a.prototype.hasLock = function () {
      "use strict";
      return this.$1() == i;
    };
    a.prototype.lock = function (a, c, d) {
      "use strict";
      this.$3 && b("clearTimeout")(this.$3),
        i == (this.$1() || i) && this.$2(d),
        (this.$3 = b("setTimeoutAcrossTransitions")(
          function () {
            this.$3 = null;
            var b = this.hasLock() ? a : c;
            b && b(this);
          }.bind(this),
          0,
        ));
    };
    a.prototype.unlock = function () {
      "use strict";
      this.$3 && b("clearTimeout")(this.$3),
        j() && this.hasLock() && j().removeItem("mutex_" + this.name);
    };
    e.exports = a;
  },
  null,
);
__d(
  "lowerFacebookDomain",
  [],
  function (a, b, c, d, e, f) {
    b = window.location.hostname.match(
      /\.(facebook\.sg|facebookcorewwwi\.onion)$/,
    );
    var g = b ? b[1] : "facebook.com";
    a.setDomain = function (a) {
      g = a;
    };
    a.isValidDocumentDomain = function () {
      return document.domain == g ? !0 : !1;
    };
    function a() {
      document.domain = g;
    }
    e.exports = a;
  },
  18,
);
__d(
  "requestIdleCallback",
  ["TimerStorage", "TimeSlice", "requestIdleCallbackAcrossTransitions"],
  function (a, b, c, d, e, f) {
    e.exports = function (c, d) {
      var e;
      function f(a) {
        b("TimerStorage").unset(b("TimerStorage").IDLE_CALLBACK, e), c(a);
      }
      b("TimeSlice").copyGuardForWrapper(c, f);
      e = b("requestIdleCallbackAcrossTransitions").call(a, f, d);
      b("TimerStorage").set(b("TimerStorage").IDLE_CALLBACK, e);
      return e;
    };
  },
  null,
);
__d(
  "onAfterDisplay",
  ["NavigationMetrics", "TimeSlice", "requestIdleCallback"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = [],
      h = !1;
    function a(a) {
      a = b("TimeSlice").guard(a, "onAfterDisplay invocation", {
        propagationType: b("TimeSlice").PropagationType.ORPHAN,
      });
      h ? b("requestIdleCallback")(a) : g.push(a);
    }
    b("NavigationMetrics").addRetroactiveListener(
      b("NavigationMetrics").Events.EVENT_OCCURRED,
      function (a, c) {
        ["all_pagelets_displayed", "e2e"].indexOf(c.event) > -1 &&
          !h &&
          ((h = !0),
          g.forEach(function (a) {
            b("requestIdleCallback")(a);
          }));
      },
    );
    e.exports = a;
  },
  null,
);
__d(
  "BanzaiOld",
  [
    "BanzaiAdapter",
    "BanzaiStreamPayloads",
    "CurrentUser",
    "ErrorUtils",
    "ExecutionEnvironment",
    "FBJSON",
    "FBLogger",
    "NavigationMetrics",
    "SetIdleTimeoutAcrossTransitions",
    "TimeSlice",
    "Visibility",
    "WebStorage",
    "emptyFunction",
    "gkx",
    "isInIframe",
    "lowerFacebookDomain",
    "onAfterDisplay",
    "pageID",
    "WebStorageMutex",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b("BanzaiAdapter").adapter,
      h = b("isInIframe")(),
      i = "bz:",
      j = "ods:banzai",
      k = "send_via_beacon_failure",
      l = 0,
      m = 1,
      n = 2,
      o,
      p,
      q = [],
      r = null,
      s = [];
    function t(a) {
      return (
        a[2] >= Date.now() - (g.config.EXPIRY || b("BanzaiAdapter").EXPIRY)
      );
    }
    function u(a, b) {
      (a.__meta.status = l),
        (a[3] = (a[3] || 0) + 1),
        !a.__meta.retry && b >= 400 && b < 600 && q.push(a);
    }
    function v(a, c, d, e) {
      a = [a, c, d, 0];
      a.__meta = {
        retry: e === !0,
        pageID: b("pageID"),
        userID: b("CurrentUser").getID(),
        status: l,
      };
      return a;
    }
    function w() {
      __p && __p();
      var a = [];
      s.forEach(function (b) {
        var c = b.cb();
        c.forEach(function (c) {
          var d = b.route;
          if (d) {
            d = v(d, c, Date.now());
            d.__meta.onSuccess = b.onSuccess;
            d.__meta.onFailure = b.onFailure;
            a.push(d);
          }
        });
      });
      s = [];
      var c = [],
        d = [];
      B(c, d, !0, a);
      if (c.length > 0) {
        c[0].send_method = "beacon";
        c.map(g.prepWadForTransit);
        c = new Blob([g.addRequestAuthData(g.prepForTransit(c))], {
          type: "application/x-www-form-urlencoded",
        });
        c = navigator.sendBeacon(b("BanzaiAdapter").adapter.endpoint, c);
        c
          ? d.forEach(function (b) {
              return a.__meta && b.__meta.onSuccess && b.__meta.onSuccess();
            })
          : d.forEach(function (b) {
              return a.__meta && b.__meta.onFailure && b.__meta.onFailure();
            });
      }
    }
    function x(a) {
      __p && __p();
      var c = Date.now() + a;
      if (!p || c < p) {
        p = c;
        b("SetIdleTimeoutAcrossTransitions").clear(o);
        c = function () {
          o = b("SetIdleTimeoutAcrossTransitions").start(y, a);
        };
        b("gkx")(
          "AT6Afdq0Tt2jEesGOMGnSRKoZIl2eQfQBS7ISXiYFG3RHN4ykkPiZeyWuKALtD0ObEVGeeZuAFKdYpfxlBzUUPkd",
        )
          ? b("onAfterDisplay")(c)
          : c();
        return !0;
      }
      return !1;
    }
    var y = b("TimeSlice").guard(
      function () {
        z(null, null);
      },
      "Banzai.send",
      { propagationType: b("TimeSlice").PropagationType.ORPHAN },
    );
    function z(a, c) {
      __p && __p();
      p = null;
      x(b("BanzaiAdapter").BASIC.delay);
      if (!g.readyToSend()) {
        c && c();
        return;
      }
      g.inform(b("BanzaiAdapter").SEND);
      var d = [],
        e = [];
      q = B(d, e, !0, q);
      if (d.length <= 0) {
        g.inform(b("BanzaiAdapter").OK);
        a && a();
        return;
      }
      d[0].trigger = r;
      r = null;
      d[0].send_method = "ajax";
      d.map(g.prepWadForTransit);
      g.send(
        d,
        function () {
          e.forEach(function (a) {
            (a.__meta.status = n), a.__meta.callback && a.__meta.callback();
          }),
            a && a();
        },
        function (a) {
          e.forEach(function (b) {
            u(b, a);
          }),
            c && c();
        },
      );
    }
    function A() {
      __p && __p();
      if (!(navigator && navigator.sendBeacon && g.isOkToSendViaBeacon()))
        return;
      var a = [],
        c = [];
      q = B(a, c, !1, q);
      if (a.length <= 0) return;
      a[0].send_method = "beacon";
      a.map(g.prepWadForTransit);
      a = new Blob([g.addRequestAuthData(g.prepForTransit(a))], {
        type: "application/x-www-form-urlencoded",
      });
      a = navigator.sendBeacon(b("BanzaiAdapter").adapter.endpoint, a);
      if (!a) {
        c.forEach(function (a) {
          q.push(a);
        });
        q.push(v(j, ((a = {}), (a[k] = [1]), a), Date.now()));
      }
    }
    function B(a, b, c, d) {
      __p && __p();
      var e = {};
      return d.filter(function (d) {
        __p && __p();
        var f = d.__meta;
        if (f.status >= n || !t(d)) return !1;
        if (f.status >= m) return !0;
        var g = f.compress != null ? f.compress : !0,
          h = f.pageID + f.userID + (g ? "compress" : ""),
          i = e[h];
        i ||
          ((i = { user: f.userID, page_id: f.pageID, posts: [], snappy: g }),
          (e[h] = i),
          a.push(i));
        f.status = m;
        i.posts.push(d);
        b.push(d);
        return c && f.retry;
      });
    }
    var C,
      D,
      E = !1;
    function F() {
      E || ((E = !0), (D = b("WebStorage").getLocalStorage()));
      return D;
    }
    function G() {
      __p && __p();
      C ||
        (!h
          ? (C = {
              store: function () {
                var a = F();
                if (!a || q.length <= 0) return;
                var c = q.map(function (a) {
                  return [a[0], a[1], a[2], a[3] || 0, a.__meta];
                });
                q = [];
                a.setItem(
                  i + b("pageID") + "." + Date.now(),
                  b("FBJSON").stringify(c),
                );
              },
              restore: function () {
                __p && __p();
                var a = F();
                if (!a) return;
                var c = b("WebStorageMutex");
                new c("banzai").lock(function (c) {
                  __p && __p();
                  var d = [];
                  for (var f = 0; f < a.length; f++) {
                    var g = a.key(f);
                    g.indexOf(i) === 0 && g.indexOf("bz:__") !== 0 && d.push(g);
                  }
                  d.forEach(function (c) {
                    __p && __p();
                    var d = a.getItem(c);
                    a.removeItem(c);
                    if (!d) return;
                    c = b("FBJSON").parse(d, e.id);
                    c.forEach(function (a) {
                      if (!a) return;
                      var c = (a.__meta = a.pop()),
                        d = t(a);
                      if (!d) return;
                      d = b("CurrentUser").getID();
                      (c.userID === d || d === "0") &&
                        ((c.status = l), q.push(a));
                    });
                  });
                  c.unlock();
                });
              },
            })
          : (C = { store: b("emptyFunction"), restore: b("emptyFunction") }));
    }
    b("BanzaiAdapter").SEND = "Banzai:SEND";
    b("BanzaiAdapter").OK = "Banzai:OK";
    b("BanzaiAdapter").ERROR = "Banzai:ERROR";
    b("BanzaiAdapter").SHUTDOWN = "Banzai:SHUTDOWN";
    b("BanzaiAdapter").VITAL_WAIT = 1e3;
    b("BanzaiAdapter").BASIC_WAIT = 6e4;
    b("BanzaiAdapter").EXPIRY = 30 * 6e4;
    b("BanzaiAdapter").VITAL = {
      delay: g.config.MIN_WAIT || b("BanzaiAdapter").VITAL_WAIT,
    };
    b("BanzaiAdapter").BASIC = {
      delay: g.config.MAX_WAIT || b("BanzaiAdapter").BASIC_WAIT,
    };
    b("BanzaiAdapter").isEnabled = function (a) {
      return g.config.gks && g.config.gks[a];
    };
    b("BanzaiAdapter").post = function (c, d, e) {
      __p && __p();
      c ||
        b("FBLogger")("banzai").mustfix(
          "Banzai.post called without specifying a route",
        );
      e = e || {};
      var f = e.retry;
      if (g.config.disabled) return;
      if (!b("ExecutionEnvironment").canUseDOM) return;
      var i = g.config.blacklist;
      if (
        i &&
        i.indexOf &&
        typeof i.indexOf === "function" &&
        i.indexOf(c) != -1
      )
        return;
      if (h && b("lowerFacebookDomain").isValidDocumentDomain()) {
        var j;
        try {
          j = a.top.require("Banzai");
        } catch (a) {
          j = null;
        }
        if (j) {
          j.post.apply(j, arguments);
          return;
        }
      }
      var k = v(c, d, Date.now(), f);
      e.callback && (k.__meta.callback = e.callback);
      e.compress != null && (k.__meta.compress = e.compress);
      var l = e.delay;
      l == null && (l = b("BanzaiAdapter").BASIC_WAIT);
      if (e.signal) {
        k.__meta.status = m;
        var o = [
          {
            user: b("CurrentUser").getID(),
            page_id: b("pageID"),
            posts: [k],
            trigger: c,
          },
        ];
        g.send(
          o,
          function () {
            (k.__meta.status = n), k.__meta.callback && k.__meta.callback();
          },
          function (a) {
            u(k, a);
          },
          !0,
        );
        if (!f) return;
      }
      q.push(k);
      (x(l) || !r) && (r = c);
    };
    b("BanzaiAdapter").registerToSendWithBeacon = function (a, c, d, e) {
      if (!(navigator && navigator.sendBeacon && g.isOkToSendViaBeacon()))
        return !1;
      if (!a) {
        b("FBLogger")("banzai").mustfix(
          "Banzai.registerToSendWithBeacon called without specifying a route",
        );
        return !1;
      }
      s.push({ cb: c, route: a, onSuccess: d, onFailure: e });
      return !0;
    };
    b("BanzaiAdapter").flush = function (a, c) {
      b("SetIdleTimeoutAcrossTransitions").clear(o), (o = 0), z(a, c);
    };
    b("BanzaiAdapter").subscribe = g.subscribe;
    b("BanzaiAdapter").canUseNavigatorBeacon = function () {
      return navigator && navigator.sendBeacon && g.isOkToSendViaBeacon();
    };
    b("BanzaiAdapter")._schedule = x;
    b("BanzaiAdapter")._store = function (a) {
      G(), b("ErrorUtils").applyWithGuard(C.store, C);
    };
    b("BanzaiAdapter")._restore = function (a) {
      G(),
        b("ErrorUtils").applyWithGuard(C.restore, C),
        x(g.config.RESTORE_WAIT || b("BanzaiAdapter").VITAL_WAIT);
    };
    b("BanzaiAdapter")._unload = function () {
      b("BanzaiStreamPayloads").unload(b("BanzaiAdapter").post),
        navigator && navigator.sendBeacon && g.isOkToSendViaBeacon() && w(),
        g.cleanup(),
        g.inform(b("BanzaiAdapter").SHUTDOWN),
        b("BanzaiAdapter").isEnabled("beacon_hailmary") && q.length > 0 && A(),
        q.length > 0 && (G(), b("ErrorUtils").applyWithGuard(C.store, C));
    };
    b("BanzaiAdapter")._testState = function () {
      return { postBuffer: q, triggerRoute: r };
    };
    (b("BanzaiAdapter")._initialize = function () {
      b("ExecutionEnvironment").canUseDOM &&
        (b("BanzaiAdapter").isEnabled("beacon_hailmary") &&
        b("Visibility").isSupported()
          ? b("Visibility").addListener(b("Visibility").HIDDEN, function () {
              q.length > 0 && A(),
                q.length > 0 &&
                  (G(), b("ErrorUtils").applyWithGuard(C.store, C));
            })
          : g.setHooks(),
        g.setUnloadHook(),
        b("NavigationMetrics").addListener(
          b("NavigationMetrics").Events.NAVIGATION_DONE,
          function (a, c) {
            if (c.pageType !== "normal") return;
            b("BanzaiAdapter")._restore();
            b("NavigationMetrics").removeCurrentListener();
          },
        ));
    })();
    e.exports = b("BanzaiAdapter");
  },
  18,
);
__d(
  "BanzaiODS",
  ["invariant", "Banzai"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a() {
      __p && __p();
      var a = {},
        c = {};
      function d(b, d, e, f) {
        __p && __p();
        e === undefined && (e = 1);
        f === undefined && (f = 1);
        if (b in c)
          if (c[b] <= 0) return;
          else e /= c[b];
        var g = a[b] || (a[b] = {}),
          h = g[d] || (g[d] = [0]);
        e = Number(e);
        f = Number(f);
        if (!isFinite(e) || !isFinite(f)) return;
        h[0] += e;
        arguments.length >= 4 && (h[1] || (h[1] = 0), (h[1] += f));
      }
      return {
        setEntitySample: function (a, b) {
          c[a] = Math.random() < b ? b : 0;
        },
        bumpEntityKey: function (a, b, c) {
          d(a, b, c);
        },
        bumpFraction: function (a, b, c, e) {
          d(a, b, c, e);
        },
        flush: function (c) {
          for (var d in a) b("Banzai").post("ods:" + d, a[d], c);
          a = {};
        },
      };
    }
    c = a();
    c.create = a;
    b("Banzai").subscribe(b("Banzai").SEND, c.flush.bind(c, null));
    e.exports = c;
  },
  18,
);
__d(
  "SessionName",
  ["SessionNameConfig", "isInIframe"],
  function (a, b, c, d, e, f) {
    var g = "_e_",
      h;
    function i() {
      (h = (window.name || "").toString()),
        h.length == 7 && h.substr(0, 3) == g
          ? (h = h.substr(3))
          : ((h = b("SessionNameConfig").seed || ""),
            b("isInIframe")() || (window.name = g + h));
    }
    e.exports = {
      TOKEN: g,
      getName: function () {
        h === undefined && i();
        return h;
      },
    };
  },
  null,
);
__d(
  "AbstractErrorSignal",
  ["invariant", "BanzaiODS", "ScriptPath", "SessionName", "SiteData"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = !0;
    function i() {
      this.constructor !== i || g(0);
    }
    i.prototype.logJSError = function (a, c) {
      __p && __p();
      c = c || {};
      c.svn_rev = b("SiteData").client_revision;
      c.push_phase = b("SiteData").push_phase;
      c.script_path = b("ScriptPath").getScriptPath();
      c.extra = c.extra || {};
      c.extra.hrm = b("SiteData").be_mode;
      var d = c.extra.type || "error";
      h &&
        a === "onerror" &&
        d === "error" &&
        ((c.extra.extra = c.extra.extra || []),
        c.extra.extra.push("first_error"),
        (h = !1));
      d = (b("SessionName").getName() || "-") + "/-";
      this.sendErrorSignal(
        "javascript_error",
        JSON.stringify({ c: a, a: d, m: c }),
      );
    };
    i.prototype.sendBeaconErrorSignal = function () {
      var a = "beacon_error",
        c = (b("SessionName").getName() || "-") + "/-",
        d = {};
      d.error = a;
      d.svn_rev = b("SiteData").client_revision;
      d.push_phase = b("SiteData").push_phase;
      d.script_path = b("ScriptPath").getScriptPath();
      d.extra = { message: a, type: "info" };
      this.sendErrorSignal(a, JSON.stringify({ c: a, a: c, m: d }));
    };
    i.prototype.sendErrorSignal = function (a, b) {
      this.performCounterLogging(a);
      switch (a) {
        case "async_error":
          var c = JSON.parse(b),
            d = c.err_code;
          c = c.path;
          d in { 1004: 1, 12029: 1, 12031: 1, 12152: 1 } &&
            c.indexOf("scribe_endpoint.php") == -1 &&
            this.performSignalLogging(a, b);
          break;
        default:
          this.performSignalLogging(a, b);
      }
    };
    i.prototype.performCounterLogging = function (a) {
      b("BanzaiODS").bumpEntityKey(
        "js_error_reporting",
        "error_signal.category." + a,
      );
      switch (a) {
        case "beacon_error":
          b("BanzaiODS").bumpEntityKey(
            "js_error_reporting",
            "beacon_error_signal.sent",
          );
          break;
        case "javascript_error":
          b("BanzaiODS").bumpEntityKey(
            "js_error_reporting",
            "error_signal.sent",
          );
          break;
      }
    };
    i.prototype.performSignalLogging = function (a, b) {
      g(0);
    };
    e.exports = i;
  },
  null,
);
__d(
  "errorCode",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      throw new Error(
        'errorCode("' + a + '"): This should not happen. Oh noes!',
      );
    }
    e.exports = a;
  },
  null,
);
__d(
  "AsyncResponse",
  ["errorCode", "invariant", "Bootloader", "SiteData"],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    function i(a, b) {
      "use strict";
      (this.error = 0),
        (this.errorSummary = null),
        (this.errorDescription = null),
        (this.onload = null),
        (this.replay = !1),
        (this.payload = b),
        (this.request = a),
        (this.silentError = !1),
        (this.transientError = !1),
        (this.blockedAction = !1),
        (this.is_last = !0),
        (this.responseHeaders = null);
    }
    i.prototype.getRequest = function () {
      "use strict";
      return this.request;
    };
    i.prototype.getPayload = function () {
      "use strict";
      return this.payload;
    };
    i.prototype.toError = function () {
      "use strict";
      this.error !== 0 || h(0);
      var a = this.errorSummary || "",
        b = this.errorDescription || "",
        c = new Error(a.toString() + ": " + b.toString());
      Object.assign(c, {
        code: this.error,
        description: b,
        response: this,
        summary: a,
        isSilent: this.silentError,
        isTransient: this.transientError,
      });
      return c;
    };
    i.prototype.getError = function () {
      "use strict";
      return this.error;
    };
    i.prototype.getErrorSummary = function () {
      "use strict";
      return this.errorSummary;
    };
    i.prototype.setErrorSummary = function (a) {
      "use strict";
      a = a === undefined ? null : a;
      this.errorSummary = a;
      return this;
    };
    i.prototype.getErrorDescription = function () {
      "use strict";
      return this.errorDescription;
    };
    i.prototype.getErrorIsWarning = function () {
      "use strict";
      return !!this.errorIsWarning;
    };
    i.prototype.isTransient = function () {
      "use strict";
      return !!this.transientError;
    };
    i.prototype.isBlockedAction = function () {
      "use strict";
      return !!this.blockedAction;
    };
    i.prototype.getResponseHeader = function (a) {
      "use strict";
      __p && __p();
      var b = this.responseHeaders;
      if (!b) return null;
      b = b.replace(/^\n/, "");
      a = a.toLowerCase();
      b = b.split("\r\n");
      for (var c = 0; c < b.length; ++c) {
        var d = b[c],
          e = d.indexOf(": ");
        if (e <= 0) continue;
        var f = d.substring(0, e).toLowerCase();
        if (f === a) return d.substring(e + 2);
      }
      return null;
    };
    i.prototype.logError = function (c, d) {
      "use strict";
      var e = a.ErrorSignal;
      if (e && this.request) {
        var f = this.request.getURI(),
          g = {
            err_code: this.error,
            vip: b("SiteData").vip || "-",
            path: f || "-",
            aid: this.request ? this.request.userActionID : null,
          };
        d && ((g.duration = d.duration), (g.xfb_ip = d.xfb_ip));
        f &&
          f.indexOf("scribe_endpoint.php") != -1 &&
          (c = "async_error_double");
        e.sendErrorSignal(c, JSON.stringify(g));
      }
    };
    i.prototype.logErrorByGroup = function (a, b) {
      "use strict";
      Math.floor(Math.random() * b) === 0 &&
        (this.error == 1357010 || this.error < 15e3
          ? this.logError("async_error_oops_" + a)
          : this.logError("async_error_logic_" + a));
    };
    i.defaultErrorHandler = function (a) {
      "use strict";
      try {
        !a.silentError
          ? i.verboseErrorHandler(a)
          : a.logErrorByGroup("silent", 10);
      } catch (b) {
        alert(a);
      }
    };
    i.verboseErrorHandler = function (a, c) {
      "use strict";
      b("Bootloader").loadModules(
        ["ExceptionDialog"],
        function (b) {
          return b.showAsyncError(a, c);
        },
        "AsyncResponse",
      );
    };
    e.exports = i;
  },
  null,
);
__d(
  "FetchStreamConfig",
  [],
  function (a, b, c, d, e, f) {
    e.exports = { delim: "/*<!-- fetch-stream -->*/" };
  },
  null,
);
__d(
  "Promise",
  [
    "invariant",
    "TimeSlice",
    "setImmediateAcrossTransitions",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    function h() {}
    var i = null,
      j = {};
    function k(a) {
      try {
        return a.then;
      } catch (a) {
        i = a;
        return j;
      }
    }
    function l(a, b) {
      try {
        return a(b);
      } catch (a) {
        i = a;
        return j;
      }
    }
    function m(a, b, c) {
      try {
        a(b, c);
      } catch (a) {
        i = a;
        return j;
      }
    }
    function n(a) {
      __p && __p();
      if (typeof this !== "object")
        throw new TypeError("Promises must be constructed via new");
      if (typeof a !== "function") throw new TypeError("not a function");
      this._state = 0;
      this._value = null;
      this._deferreds = [];
      if (a === h) return;
      u(a, this);
    }
    n._noop = h;
    n.prototype.then = function (a, b) {
      if (this.constructor !== n) return o(this, a, b);
      var c = new n(h);
      p(this, new t(a, b, c));
      return c;
    };
    function o(a, b, c) {
      return new a.constructor(function (d, e) {
        var f = new n(h);
        f.then(d, e);
        p(a, new t(b, c, f));
      });
    }
    function p(a, c) {
      __p && __p();
      while (a._state === 3) a = a._value;
      if (a._state === 0) {
        a._deferreds.push(c);
        return;
      }
      b("setImmediateAcrossTransitions")(function () {
        var b = a._state === 1 ? c.onFulfilled : c.onRejected;
        if (b === null) {
          c.continuation(function () {});
          a._state === 1 ? q(c.promise, a._value) : r(c.promise, a._value);
          return;
        }
        b = l(c.continuation.bind(null, b), a._value);
        b === j ? r(c.promise, i) : q(c.promise, b);
      });
    }
    function q(a, b) {
      __p && __p();
      if (b === a)
        return r(a, new TypeError("A promise cannot be resolved with itself."));
      if (b && (typeof b === "object" || typeof b === "function")) {
        var c = k(b);
        if (c === j) return r(a, i);
        if (c === a.then && b instanceof n) {
          a._state = 3;
          a._value = b;
          s(a);
          return;
        } else if (typeof c === "function") {
          u(c.bind(b), a);
          return;
        }
      }
      a._state = 1;
      a._value = b;
      s(a);
    }
    function r(a, b) {
      (a._state = 2), (a._value = b), s(a);
    }
    function s(a) {
      for (var b = 0; b < a._deferreds.length; b++) p(a, a._deferreds[b]);
      a._deferreds = null;
    }
    function t(a, c, d) {
      (this.onFulfilled = typeof a === "function" ? a : null),
        (this.onRejected = typeof c === "function" ? c : null),
        (this.continuation =
          b("TimeSlice").getGuardedContinuation("Promise Handler")),
        (this.promise = d);
    }
    function u(a, b) {
      __p && __p();
      var c = !1;
      a = m(
        a,
        function (a) {
          if (c) return;
          c = !0;
          q(b, a);
        },
        function (a) {
          if (c) return;
          c = !0;
          r(b, a);
        },
      );
      !c && a === j && ((c = !0), r(b, i));
    }
    n.prototype.done = function (a, c) {
      var d = new Error("Promise.done"),
        e = arguments.length ? this.then.apply(this, arguments) : this;
      e.then(null, function (a) {
        b("setTimeoutAcrossTransitions")(function () {
          if (a instanceof Error) throw a;
          else {
            d.message = "" + a;
            throw d;
          }
        }, 0);
      });
    };
    var v = B(!0),
      w = B(!1),
      x = B(null),
      y = B(undefined),
      z = B(0),
      A = B("");
    function B(a) {
      var b = new n(n._noop);
      b._state = 1;
      b._value = a;
      return b;
    }
    n.resolve = function (a) {
      __p && __p();
      if (a instanceof n) return a;
      if (a === null) return x;
      if (a === undefined) return y;
      if (a === !0) return v;
      if (a === !1) return w;
      if (a === 0) return z;
      if (a === "") return A;
      if (typeof a === "object" || typeof a === "function")
        try {
          var b = a.then;
          if (typeof b === "function") return new n(b.bind(a));
        } catch (a) {
          return new n(function (b, c) {
            c(a);
          });
        }
      return B(a);
    };
    n.all = function (a) {
      __p && __p();
      Array.isArray(a) ||
        (a = [
          new n(function () {
            throw new TypeError("Promise.all must be passed an iterable.");
          }),
        ]);
      var b = Array.prototype.slice.call(a);
      return new n(function (a, c) {
        __p && __p();
        if (b.length === 0) return a([]);
        var d = b.length;
        function e(f, g) {
          __p && __p();
          if (g && (typeof g === "object" || typeof g === "function"))
            if (g instanceof n && g.then === n.prototype.then) {
              while (g._state === 3) g = g._value;
              if (g._state === 1) return e(f, g._value);
              g._state === 2 && c(g._value);
              g.then(function (a) {
                e(f, a);
              }, c);
              return;
            } else {
              var h = g.then;
              if (typeof h === "function") {
                h = new n(h.bind(g));
                h.then(function (a) {
                  e(f, a);
                }, c);
                return;
              }
            }
          b[f] = g;
          --d === 0 && a(b);
        }
        for (var f = 0; f < b.length; f++) e(f, b[f]);
      });
    };
    n.reject = function (a) {
      return new n(function (b, c) {
        c(a);
      });
    };
    n.race = function (a) {
      return new n(function (b, c) {
        a.forEach(function (a) {
          n.resolve(a).then(b, c);
        });
      });
    };
    n.prototype["catch"] = function (a) {
      return this.then(null, a);
    };
    e.exports = n;
  },
  null,
);
__d(
  "regeneratorRuntime",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = Object.prototype.hasOwnProperty,
      h =
        (typeof Symbol === "function" &&
          (typeof Symbol === "function" ? Symbol.iterator : "@@iterator")) ||
        "@@iterator",
      i = e.exports;
    function j(a, b, c, d) {
      b = Object.create((b || q).prototype);
      d = new z(d || []);
      b._invoke = w(a, c, d);
      return b;
    }
    i.wrap = j;
    function k(a, b, c) {
      try {
        return { type: "normal", arg: a.call(b, c) };
      } catch (a) {
        return { type: "throw", arg: a };
      }
    }
    var l = "suspendedStart",
      m = "suspendedYield",
      n = "executing",
      o = "completed",
      p = {};
    function q() {}
    function r() {}
    function s() {}
    var t = (s.prototype = q.prototype);
    r.prototype = t.constructor = s;
    s.constructor = r;
    r.displayName = "GeneratorFunction";
    function a(a) {
      ["next", "throw", "return"].forEach(function (b) {
        a[b] = function (a) {
          return this._invoke(b, a);
        };
      });
    }
    i.isGeneratorFunction = function (a) {
      a = typeof a === "function" && a.constructor;
      return a
        ? a === r || (a.displayName || a.name) === "GeneratorFunction"
        : !1;
    };
    i.mark = function (a) {
      Object.setPrototypeOf ? Object.setPrototypeOf(a, s) : Object.assign(a, s);
      a.prototype = Object.create(t);
      return a;
    };
    i.awrap = function (a) {
      return new u(a);
    };
    function u(a) {
      this.arg = a;
    }
    function v(a) {
      __p && __p();
      function c(c, f) {
        var g = a[c](f);
        c = g.value;
        return c instanceof u
          ? b("Promise").resolve(c.arg).then(d, e)
          : b("Promise")
              .resolve(c)
              .then(function (a) {
                g.value = a;
                return g;
              });
      }
      typeof process === "object" &&
        process.domain &&
        (c = process.domain.bind(c));
      var d = c.bind(a, "next"),
        e = c.bind(a, "throw");
      c.bind(a, "return");
      var f;
      function g(a, d) {
        var e = f
          ? f.then(function () {
              return c(a, d);
            })
          : new (b("Promise"))(function (b) {
              b(c(a, d));
            });
        f = e["catch"](function (a) {});
        return e;
      }
      this._invoke = g;
    }
    a(v.prototype);
    i.async = function (a, b, c, d) {
      var e = new v(j(a, b, c, d));
      return i.isGeneratorFunction(b)
        ? e
        : e.next().then(function (a) {
            return a.done ? a.value : e.next();
          });
    };
    function w(a, b, c) {
      __p && __p();
      var d = l;
      return function (e, f) {
        __p && __p();
        if (d === n) throw new Error("Generator is already running");
        if (d === o) {
          if (e === "throw") throw f;
          return B();
        }
        while (!0) {
          var g = c.delegate;
          if (g) {
            if (
              e === "return" ||
              (e === "throw" && g.iterator[e] === undefined)
            ) {
              c.delegate = null;
              var h = g.iterator["return"];
              if (h) {
                h = k(h, g.iterator, f);
                if (h.type === "throw") {
                  e = "throw";
                  f = h.arg;
                  continue;
                }
              }
              if (e === "return") continue;
            }
            h = k(g.iterator[e], g.iterator, f);
            if (h.type === "throw") {
              c.delegate = null;
              e = "throw";
              f = h.arg;
              continue;
            }
            e = "next";
            f = undefined;
            var i = h.arg;
            if (i.done) (c[g.resultName] = i.value), (c.next = g.nextLoc);
            else {
              d = m;
              return i;
            }
            c.delegate = null;
          }
          if (e === "next") d === m ? (c.sent = f) : (c.sent = undefined);
          else if (e === "throw") {
            if (d === l) {
              d = o;
              throw f;
            }
            c.dispatchException(f) && ((e = "next"), (f = undefined));
          } else e === "return" && c.abrupt("return", f);
          d = n;
          h = k(a, b, c);
          if (h.type === "normal") {
            d = c.done ? o : m;
            var i = { value: h.arg, done: c.done };
            if (h.arg === p) c.delegate && e === "next" && (f = undefined);
            else return i;
          } else h.type === "throw" && ((d = o), (e = "throw"), (f = h.arg));
        }
      };
    }
    a(t);
    t[h] = function () {
      return this;
    };
    t.toString = function () {
      return "[object Generator]";
    };
    function x(a) {
      var b = { tryLoc: a[0] };
      1 in a && (b.catchLoc = a[1]);
      2 in a && ((b.finallyLoc = a[2]), (b.afterLoc = a[3]));
      this.tryEntries.push(b);
    }
    function y(a) {
      var b = a.completion || {};
      b.type = "normal";
      delete b.arg;
      a.completion = b;
    }
    function z(a) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        a.forEach(x, this),
        this.reset(!0);
    }
    i.keys = function (a) {
      __p && __p();
      var b = [];
      for (var c in a) b.push(c);
      b.reverse();
      return function c() {
        __p && __p();
        while (b.length) {
          var d = b.pop();
          if (d in a) {
            c.value = d;
            c.done = !1;
            return c;
          }
        }
        c.done = !0;
        return c;
      };
    };
    function A(a) {
      __p && __p();
      if (a) {
        var b = a[h];
        if (b) return b.call(a);
        if (typeof a.next === "function") return a;
        if (!isNaN(a.length)) {
          var c = -1;
          b = function b() {
            while (++c < a.length)
              if (g.call(a, c)) {
                b.value = a[c];
                b.done = !1;
                return b;
              }
            b.value = undefined;
            b.done = !0;
            return b;
          };
          return (b.next = b);
        }
      }
      return { next: B };
    }
    i.values = A;
    function B() {
      return { value: undefined, done: !0 };
    }
    z.prototype = {
      constructor: z,
      reset: function (a) {
        this.prev = 0;
        this.next = 0;
        this.sent = undefined;
        this.done = !1;
        this.delegate = null;
        this.tryEntries.forEach(y);
        if (!a)
          for (var b in this)
            b.charAt(0) === "t" &&
              g.call(this, b) &&
              !isNaN(+b.slice(1)) &&
              (this[b] = undefined);
      },
      stop: function () {
        this.done = !0;
        var a = this.tryEntries[0];
        a = a.completion;
        if (a.type === "throw") throw a.arg;
        return this.rval;
      },
      dispatchException: function (a) {
        __p && __p();
        if (this.done) throw a;
        var b = this;
        function c(c, d) {
          f.type = "throw";
          f.arg = a;
          b.next = c;
          return !!d;
        }
        for (var d = this.tryEntries.length - 1; d >= 0; --d) {
          var e = this.tryEntries[d],
            f = e.completion;
          if (e.tryLoc === "root") return c("end");
          if (e.tryLoc <= this.prev) {
            var h = g.call(e, "catchLoc"),
              i = g.call(e, "finallyLoc");
            if (h && i) {
              if (this.prev < e.catchLoc) return c(e.catchLoc, !0);
              else if (this.prev < e.finallyLoc) return c(e.finallyLoc);
            } else if (h) {
              if (this.prev < e.catchLoc) return c(e.catchLoc, !0);
            } else if (i) {
              if (this.prev < e.finallyLoc) return c(e.finallyLoc);
            } else throw new Error("try statement without catch or finally");
          }
        }
      },
      abrupt: function (a, b) {
        __p && __p();
        for (var c = this.tryEntries.length - 1; c >= 0; --c) {
          var d = this.tryEntries[c];
          if (
            d.tryLoc <= this.prev &&
            g.call(d, "finallyLoc") &&
            this.prev < d.finallyLoc
          ) {
            var e = d;
            break;
          }
        }
        e &&
          (a === "break" || a === "continue") &&
          e.tryLoc <= b &&
          b <= e.finallyLoc &&
          (e = null);
        d = e ? e.completion : {};
        d.type = a;
        d.arg = b;
        e ? (this.next = e.finallyLoc) : this.complete(d);
        return p;
      },
      complete: function (a, b) {
        if (a.type === "throw") throw a.arg;
        a.type === "break" || a.type === "continue"
          ? (this.next = a.arg)
          : a.type === "return"
          ? ((this.rval = a.arg), (this.next = "end"))
          : a.type === "normal" && b && (this.next = b);
      },
      finish: function (a) {
        for (var b = this.tryEntries.length - 1; b >= 0; --b) {
          var c = this.tryEntries[b];
          if (c.finallyLoc === a) {
            this.complete(c.completion, c.afterLoc);
            y(c);
            return p;
          }
        }
      },
      catch: function (a) {
        __p && __p();
        for (var b = this.tryEntries.length - 1; b >= 0; --b) {
          var c = this.tryEntries[b];
          if (c.tryLoc === a) {
            var d = c.completion;
            if (d.type === "throw") {
              var e = d.arg;
              y(c);
            }
            return e;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (a, b, c) {
        this.delegate = { iterator: A(a), resultName: b, nextLoc: c };
        return p;
      },
    };
  },
  null,
);
__d(
  "StreamBlockReader",
  ["Promise", "regeneratorRuntime"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      "use strict";
      __p && __p();
      if (!a.getReader)
        throw new Error("No getReader method found on given object");
      this.$3 = a.getReader();
      this.$1 = "";
      this.$2 = null;
      this.$4 = !1;
      this.$5 = "utf-8";
      this.$6 = "";
      this.$9 = !1;
      this.$8 = function () {
        return b("Promise").reject(
          "Sorry, you are somehow using this too early.",
        );
      };
      this.$7 = new (b("Promise"))(
        function (a, b) {
          this.$8 = a;
        }.bind(this),
      );
    }
    a.prototype.changeEncoding = function (a) {
      "use strict";
      if (this.$2)
        throw new Error("Decoder already in use, encoding cannot be changed");
      this.$5 = a;
    };
    a.prototype.$10 = function () {
      "use strict";
      if (!self.TextDecoder)
        throw new Error("TextDecoder is not supported here");
      this.$2 || (this.$2 = new self.TextDecoder(this.$5));
      return this.$2;
    };
    a.prototype.$11 = function () {
      "use strict";
      if (this.$9)
        throw new Error("Something else is already reading from this reader");
      this.$9 = !0;
    };
    a.prototype.$12 = function () {
      "use strict";
      this.$9 = !1;
    };
    a.prototype.isDone = function () {
      "use strict";
      return this.$4;
    };
    a.prototype.$13 = function () {
      "use strict";
      __p && __p();
      var a, c, d, e;
      return b("regeneratorRuntime").async(
        function (f) {
          __p && __p();
          while (1)
            switch ((f.prev = f.next)) {
              case 0:
                if (!(this.$6 !== "")) {
                  f.next = 4;
                  break;
                }
                a = this.$6;
                this.$6 = "";
                return f.abrupt("return", a);
              case 4:
                if (!this.isDone()) {
                  f.next = 6;
                  break;
                }
                throw new Error("You cannot read from a stream that is done");
              case 6:
                f.next = 8;
                return b("regeneratorRuntime").awrap(this.$3.read());
              case 8:
                c = f.sent;
                d = c.done;
                e = c.value;
                this.$4 = d;
                d && this.$8();
                return f.abrupt(
                  "return",
                  e ? this.$10().decode(e, { stream: !d }) : "",
                );
              case 14:
              case "end":
                return f.stop();
            }
        },
        null,
        this,
      );
    };
    a.prototype.readNextBlock = function () {
      "use strict";
      __p && __p();
      var a;
      return b("regeneratorRuntime").async(
        function (b) {
          while (1)
            switch ((b.prev = b.next)) {
              case 0:
                this.$11();
                a = this.$13();
                this.$12();
                return b.abrupt("return", a);
              case 4:
              case "end":
                return b.stop();
            }
        },
        null,
        this,
      );
    };
    a.prototype.readUntilStringOrEnd = function (a) {
      "use strict";
      return b("regeneratorRuntime").async(
        function (c) {
          while (1)
            switch ((c.prev = c.next)) {
              case 0:
                c.next = 2;
                return b("regeneratorRuntime").awrap(
                  this.readUntilOneOfStringOrEnd_DO_NOT_USE([a]),
                );
              case 2:
                return c.abrupt("return", c.sent);
              case 3:
              case "end":
                return c.stop();
            }
        },
        null,
        this,
      );
    };
    a.prototype.readUntilStringOrThrow = function (a) {
      "use strict";
      __p && __p();
      var c, d, e;
      return b("regeneratorRuntime").async(
        function (f) {
          __p && __p();
          while (1)
            switch ((f.prev = f.next)) {
              case 0:
                if (a) {
                  f.next = 2;
                  break;
                }
                throw new Error("cannot read empty string");
              case 2:
                this.$11(), (c = ""), (d = 0);
              case 5:
                if (this.isDone()) {
                  f.next = 22;
                  break;
                }
                f.next = 8;
                return b("regeneratorRuntime").awrap(this.$13());
              case 8:
                c += f.sent;
                if (!(c.length < a.length)) {
                  f.next = 11;
                  break;
                }
                return f.abrupt("continue", 5);
              case 11:
                e = c.substring(d).indexOf(a);
                if (!(e !== -1)) {
                  f.next = 19;
                  break;
                }
                e += d;
                this.$6 = c.substring(e + a.length);
                this.$12();
                return f.abrupt("return", c.substring(0, e));
              case 19:
                d = c.length - a.length + 1;
              case 20:
                f.next = 5;
                break;
              case 22:
                this.$6 = c;
                this.$12();
                throw new Error("Breakpoint not found");
              case 25:
              case "end":
                return f.stop();
            }
        },
        null,
        this,
      );
    };
    a.prototype.readUntilOneOfStringOrEnd_DO_NOT_USE = function (a) {
      "use strict";
      __p && __p();
      var c, d, e, f;
      return b("regeneratorRuntime").async(
        function (g) {
          __p && __p();
          while (1)
            switch ((g.prev = g.next)) {
              case 0:
                this.$11(), (c = "");
              case 2:
                if (this.isDone()) {
                  g.next = 19;
                  break;
                }
                g.next = 5;
                return b("regeneratorRuntime").awrap(this.$13());
              case 5:
                (c += g.sent), (d = 0);
              case 7:
                if (!(d < a.length)) {
                  g.next = 17;
                  break;
                }
                e = a[d];
                f = c.indexOf(e);
                if (!(f !== -1)) {
                  g.next = 14;
                  break;
                }
                this.$6 = c.substring(f + e.length);
                this.$12();
                return g.abrupt("return", c.substring(0, f));
              case 14:
                d++;
                g.next = 7;
                break;
              case 17:
                g.next = 2;
                break;
              case 19:
                this.$12();
                return g.abrupt("return", c);
              case 21:
              case "end":
                return g.stop();
            }
        },
        null,
        this,
      );
    };
    a.prototype.waitUntilDone = function () {
      "use strict";
      return b("regeneratorRuntime").async(
        function (a) {
          while (1)
            switch ((a.prev = a.next)) {
              case 0:
                return a.abrupt("return", this.$7);
              case 1:
              case "end":
                return a.stop();
            }
        },
        null,
        this,
      );
    };
    e.exports = a;
  },
  null,
);
__d(
  "FetchStreamTransport",
  [
    "regeneratorRuntime",
    "ArbiterMixin",
    "FBLogger",
    "FetchStreamConfig",
    "StreamBlockReader",
    "TimeSlice",
    "URI",
    "mixin",
    "nullthrows",
  ],
  function $module_FetchStreamTransport(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    __p && __p();
    var _mixin,
      _superProto,
      instance_count = 0;
    _mixin = babelHelpers.inherits(
      FetchStreamTransport,
      require("mixin")(require("ArbiterMixin")),
    );
    _superProto = _mixin && _mixin.prototype;
    function FetchStreamTransport(uri) {
      "use strict";
      __p && __p();
      if (!self.ReadableStream || !self.fetch || !Request || !TextDecoder)
        throw new Error("fetch stream transport is not supported here");
      _superProto.constructor.call(this);
      this.$FetchStreamTransport6 = null;
      this.$FetchStreamTransport1 = uri;
      this.$FetchStreamTransport3 = !1;
      this.$FetchStreamTransport4 = !1;
      this.$FetchStreamTransport5 = !1;
      this.$FetchStreamTransport2 = ++instance_count;
      return this;
    }
    FetchStreamTransport.prototype.hasFinished = function () {
      "use strict";
      return this.$FetchStreamTransport5;
    };
    FetchStreamTransport.prototype.getRequestURI = function () {
      "use strict";
      return new (require("URI"))(this.$FetchStreamTransport1).addQueryData({
        __a: 1,
        __adt: this.$FetchStreamTransport2,
        __req: "fetchstream_" + this.$FetchStreamTransport2,
        ajaxpipe_fetch_stream: 1,
      });
    };
    FetchStreamTransport.prototype.send = function () {
      "use strict";
      if (this.$FetchStreamTransport3)
        throw new Error("FetchStreamTransport instances cannot be re-used.");
      this.$FetchStreamTransport3 = !0;
      var req = new Request(this.getRequestURI().toString(), {
        mode: "same-origin",
        credentials: "include",
      });
      this.$FetchStreamTransport6 = require("TimeSlice").getGuardedContinuation(
        "FetchStreamTransport: waiting on first response",
      );
      var fetchPromise = self.fetch(req, { redirect: "follow" });
      this.$FetchStreamTransport7(fetchPromise);
    };
    FetchStreamTransport.prototype.$FetchStreamTransport7 = function _callee(
      fetchPromise,
    ) {
      __p && __p();
      var _this = this,
        response,
        reader,
        first,
        _loop,
        _ret;
      return require("regeneratorRuntime").async(
        function _callee$(_context2) {
          __p && __p();
          while (1)
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return require("regeneratorRuntime").awrap(fetchPromise);
              case 3:
                response = _context2.sent;
                _context2.next = 9;
                break;
              case 6:
                (_context2.prev = 6),
                  (_context2.t0 = _context2["catch"](0)),
                  this.abort();
              case 9:
                if (!(!response || !response.body || !response.ok)) {
                  _context2.next = 12;
                  break;
                }
                this.abort();
                return _context2.abrupt("return");
              case 12:
                (reader = new (require("StreamBlockReader"))(response.body)),
                  (first = !0),
                  (_loop = function _loop() {
                    __p && __p();
                    var nextData;
                    return require("regeneratorRuntime").async(
                      function _loop$(_context) {
                        __p && __p();
                        while (1)
                          switch ((_context.prev = _context.next)) {
                            case 0:
                              _context.next = 2;
                              return require("regeneratorRuntime").awrap(
                                reader.readUntilStringOrEnd(
                                  require("FetchStreamConfig").delim,
                                ),
                              );
                            case 2:
                              nextData = _context.sent;
                              if (!_this.$FetchStreamTransport4) {
                                _context.next = 5;
                                break;
                              }
                              return _context.abrupt("return", "break");
                            case 5:
                              require("nullthrows")(
                                _this.$FetchStreamTransport6,
                              )(
                                function () {
                                  __p && __p();
                                  if (first && nextData.startsWith("<")) {
                                    require("FBLogger")(
                                      "FetchStreamTransport",
                                    ).mustfix(
                                      "Endpoint: %s is sending a raw HTML response instead of properly formatted payload",
                                      this.$FetchStreamTransport1.toString(),
                                    );
                                    var node = document.createElement("div");
                                    node.innerHTML = nextData;
                                    var scripts =
                                      node.getElementsByTagName("script");
                                    for (var i = 0; i < scripts.length; i++)
                                      eval(scripts[i].innerHTML);
                                    this.$FetchStreamTransport5 = !0;
                                    return;
                                  }
                                  first = !1;
                                  var parsedResponse = JSON.parse(nextData);
                                  reader.isDone() || parsedResponse.finished
                                    ? (this.$FetchStreamTransport5 = !0)
                                    : (this.$FetchStreamTransport6 =
                                        require("TimeSlice").getGuardedContinuation(
                                          "FetchStreamTransport: waiting on next response",
                                        ));
                                  this.inform(
                                    "response",
                                    parsedResponse.content,
                                  );
                                }.bind(_this),
                              );
                            case 6:
                            case "end":
                              return _context.stop();
                          }
                      },
                      null,
                      this,
                    );
                  });
              case 15:
                if (
                  !(
                    !this.$FetchStreamTransport5 && !this.$FetchStreamTransport4
                  )
                ) {
                  _context2.next = 23;
                  break;
                }
                _context2.next = 18;
                return require("regeneratorRuntime").awrap(_loop());
              case 18:
                _ret = _context2.sent;
                if (!(_ret === "break")) {
                  _context2.next = 21;
                  break;
                }
                return _context2.abrupt("break", 23);
              case 21:
                _context2.next = 15;
                break;
              case 23:
              case "end":
                return _context2.stop();
            }
        },
        null,
        this,
        [[0, 6]],
      );
    };
    FetchStreamTransport.prototype.abort = function () {
      "use strict";
      __p && __p();
      if (this.$FetchStreamTransport4 || this.$FetchStreamTransport5) return;
      this.$FetchStreamTransport4 = !0;
      this.$FetchStreamTransport5 = !0;
      if (this.$FetchStreamTransport6) {
        var continuation = this.$FetchStreamTransport6;
        continuation(
          function () {
            this.inform("abort");
          }.bind(this),
        );
      } else this.inform("abort");
    };
    module.exports = FetchStreamTransport;
  },
  null,
);
__d(
  "HTTPErrors",
  ["emptyFunction"],
  function (a, b, c, d, e, f) {
    a = { get: b("emptyFunction"), getAll: b("emptyFunction") };
    e.exports = a;
  },
  null,
);
__d(
  "JSONPTransport",
  ["ArbiterMixin", "DOM", "HTML", "TimeSlice", "URI", "mixin"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = {},
      i = 2,
      j = "jsonp",
      k = "iframe";
    function l(a) {
      delete h[a];
    }
    d = babelHelpers.inherits(c, b("mixin")(b("ArbiterMixin")));
    g = d && d.prototype;
    function c(a, b) {
      "use strict";
      g.constructor.call(this),
        (this._type = a),
        (this._uri = b),
        (this._hasResponse = !1),
        (h[this.getID()] = this);
    }
    c.prototype.getID = function () {
      "use strict";
      return this._id || (this._id = i++);
    };
    c.prototype.hasFinished = function () {
      "use strict";
      return !(this.getID() in h);
    };
    c.prototype.getRequestURI = function () {
      "use strict";
      return new (b("URI"))(this._uri).addQueryData({
        __a: 1,
        __adt: this.getID(),
        __req: "jsonp_" + this.getID(),
      });
    };
    c.prototype.getTransportFrame = function () {
      "use strict";
      if (this._iframe) return this._iframe;
      var a = "transport_frame_" + this.getID();
      a = b("HTML")(
        '<iframe class="hidden_elem" name="' +
          a +
          '" src="javascript:void(0)" />',
      );
      return (this._iframe = b("DOM").appendContent(document.body, a)[0]);
    };
    c.prototype.send = function () {
      "use strict";
      this._type === j
        ? setTimeout(
            function () {
              b("DOM").appendContent(
                document.body,
                b("DOM").create("script", {
                  src: this.getRequestURI().toString(),
                  type: "text/javascript",
                }),
              );
            }.bind(this),
            0,
          )
        : ((this.getTransportFrame().onload = this._checkForErrors.bind(this)),
          (this.getTransportFrame().src = this.getRequestURI().toString())),
        (this._continuation = b("TimeSlice").getGuardedContinuation(
          "JSONPTransport: waiting for first response",
        ));
    };
    c.prototype.createContinuationForFileForm_DO_NOT_USE = function () {
      "use strict";
      this._continuation = b("TimeSlice").getGuardedContinuation(
        "JSONPTransport: waiting for first response",
      );
    };
    c.prototype.handleResponse = function (a) {
      "use strict";
      this._continuation(
        function () {
          this.inform("response", a),
            this.hasFinished()
              ? setTimeout(this._cleanup.bind(this), 0)
              : (this._continuation = b("TimeSlice").getGuardedContinuation(
                  "JSONPTransport: waiting for next response",
                ));
        }.bind(this),
      );
    };
    c.prototype.abort = function () {
      "use strict";
      if (this._aborted) return;
      this._aborted = !0;
      this._cleanup();
      l(this.getID());
      this.inform("abort");
      this._continuation && b("TimeSlice").cancel(this._continuation);
    };
    c.prototype._checkForErrors = function () {
      "use strict";
      this._hasResponse || this.abort();
    };
    c.prototype._cleanup = function () {
      "use strict";
      this._iframe && (b("DOM").remove(this._iframe), (this._iframe = null));
    };
    c.respond = function (b, c, d) {
      "use strict";
      var e = h[b];
      if (e)
        (e._hasResponse = !0),
          d || l(b),
          e._type == k &&
            (typeof c === "string"
              ? (c = JSON.parse(c))
              : (c = JSON.parse(JSON.stringify(c)))),
          e.handleResponse(c);
      else {
        e = a.ErrorSignal;
        e &&
          !d &&
          e.logJSError("ajax", {
            error: "UnexpectedJsonResponse",
            extra: { id: b, uri: (c.payload && c.payload.uri) || "" },
          });
      }
    };
    c.respond = b("TimeSlice").guard(c.respond, "JSONPTransport.respond", {
      root: !0,
    });
    e.exports = c;
  },
  null,
);
__d(
  "PixelRatioConst",
  [],
  function (a, b, c, d, e, f) {
    e.exports = { cookieName: "dpr" };
  },
  null,
);
__d(
  "WebPixelRatio",
  ["Cookie", "DOMEventListener", "PixelRatioConst", "Run"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b("PixelRatioConst").cookieName,
      h,
      i = !1,
      j = !1,
      k = !1;
    function l() {
      return window.devicePixelRatio || 1;
    }
    function m() {
      b("Cookie").set(g, String(l()));
    }
    function n() {
      b("Cookie").clear(g);
    }
    function o() {
      if (j) return;
      j = !0;
      k && n();
      l() !== 1 ? m() : n();
    }
    a = {
      startDetecting: function (a, c) {
        h = a || 1;
        c && (k = !0);
        if (i) return;
        i = !0;
        "onpagehide" in window &&
          b("DOMEventListener").add(window, "pagehide", o);
        b("Run").onBeforeUnload(o, !1);
      },
      get: function () {
        return h || l();
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "bind",
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b) {
      __p && __p();
      var c = Array.prototype.slice.call(arguments, 2);
      if (typeof b !== "string")
        return Function.prototype.bind.apply(b, [a].concat(c));
      function d() {
        var d = c.concat(Array.prototype.slice.call(arguments));
        if (a[b]) return a[b].apply(a, d);
      }
      d.toString = function () {
        return "bound lazily: " + a[b];
      };
      return d;
    }
    e.exports = a;
  },
  null,
);
__d(
  "executeAfter",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      return function () {
        a.apply(c || this, arguments), b.apply(c || this, arguments);
      };
    }
    e.exports = a;
  },
  null,
);
__d(
  "IntlVariations",
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      BITMASK_NUMBER: 28,
      BITMASK_GENDER: 3,
      NUMBER_ZERO: 16,
      NUMBER_ONE: 4,
      NUMBER_TWO: 8,
      NUMBER_FEW: 20,
      NUMBER_MANY: 12,
      NUMBER_OTHER: 24,
      GENDER_MALE: 1,
      GENDER_FEMALE: 2,
      GENDER_UNKNOWN: 3,
    };
  },
  null,
);
__d(
  "FbtNumberType",
  ["IntlNumberTypeConfig", "IntlVariations"],
  function (a, b, c, d, e, f) {
    a = new Function(
      "IntlVariations",
      '"use strict"; return (function(n) {' +
        b("IntlNumberTypeConfig").impl +
        "});",
    )(b("IntlVariations"));
    e.exports = { getNumberVariationType: a };
  },
  null,
);
__d(
  "FbtReactUtil",
  [],
  function (a, b, c, d, e, f) {
    a =
      (typeof Symbol === "function" &&
        Symbol["for"] &&
        Symbol["for"]("react.element")) ||
      60103;
    var g = !1;
    b = {
      REACT_ELEMENT_TYPE: a,
      defineProperty: function (a, b, c) {
        g
          ? Object.defineProperty(a, b, {
              configurable: !1,
              enumerable: !1,
              writable: !1,
              value: c,
            })
          : (a[b] = c);
      },
    };
    e.exports = b;
  },
  18,
);
__d(
  "FbtResult",
  ["FbtReactUtil", "FbtResultBase"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b("FbtResultBase"));
    g = c && c.prototype;
    function a(a) {
      "use strict";
      g.constructor.call(this, a),
        (this.props = { content: a }),
        (this.key = null),
        (this.ref = null);
    }
    d = function (a) {
      return a.content;
    };
    a.prototype.type = d;
    a.prototype.$$typeof = b("FbtReactUtil").REACT_ELEMENT_TYPE;
    e.exports = a;
  },
  18,
);
__d(
  "GenderConst",
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      NOT_A_PERSON: 0,
      FEMALE_SINGULAR: 1,
      MALE_SINGULAR: 2,
      FEMALE_SINGULAR_GUESS: 3,
      MALE_SINGULAR_GUESS: 4,
      MIXED_SINGULAR: 5,
      MIXED_PLURAL: 5,
      NEUTER_SINGULAR: 6,
      UNKNOWN_SINGULAR: 7,
      FEMALE_PLURAL: 8,
      MALE_PLURAL: 9,
      NEUTER_PLURAL: 10,
      UNKNOWN_PLURAL: 11,
      UNKNOWN: 0,
    };
  },
  null,
);
__d(
  "I18nAssets",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a.prototype.isComponentScriptFastI18nAvailable = function () {
      return !1;
    };
    a.prototype.getStringFromHashKey = function (a) {
      return "";
    };
    a.prototype.isNativeModuleAvailable = function () {
      return !1;
    };
    a.prototype.getString = function (a) {
      return "";
    };
    function a() {}
    e.exports = new a();
  },
  18,
);
__d(
  "InlineFbtResult",
  ["cx", "FbtReactUtil", "FbtResultBase"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    function i(a, c, d, e) {
      var f = "_4qba";
      e &&
        (c === "TRANSLATION"
          ? (f = "_4qbb")
          : c === "APPROVE"
          ? (f = "_4qbc")
          : c === "REPORT" && (f = "_4qbd"));
      return {
        $$typeof: b("FbtReactUtil").REACT_ELEMENT_TYPE,
        type: "em",
        key: null,
        ref: null,
        props: {
          className: f,
          "data-intl-hash": e,
          "data-intl-translation": d,
          "data-intl-trid": "",
          children: a,
          suppressHydrationWarning: !0,
        },
        _owner: null,
      };
    }
    c = function (a) {
      return i(a.content, a.inlineMode, a.translation, a.hash);
    };
    d = babelHelpers.inherits(a, b("FbtResultBase"));
    h = d && d.prototype;
    function a(a, b, c, d) {
      "use strict";
      h.constructor.call(this, a),
        (this.props = { content: a, inlineMode: b, translation: c, hash: d }),
        (this.key = null),
        (this.ref = null);
    }
    a.prototype.type = c;
    a.prototype.$$typeof = b("FbtReactUtil").REACT_ELEMENT_TYPE;
    e.exports = a;
  },
  null,
);
__d(
  "escapeRegex",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a.replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1");
    }
    e.exports = a;
  },
  null,
);
__d(
  "intlNumUtils",
  ["NumberFormatConfig", "escapeRegex"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 3;
    f = [
      "\u0433\u0440\u043d.",
      "\u0434\u0435\u043d.",
      "\u043b\u0432.",
      "\u043c\u0430\u043d.",
      "\u0564\u0580.",
      "\u062c.\u0645.",
      "\u062f.\u0625.",
      "\u062f.\u0627.",
      "\u062f.\u0628.",
      "\u062f.\u062a.",
      "\u062f.\u062c.",
      "\u062f.\u0639.",
      "\u062f.\u0643.",
      "\u062f.\u0644.",
      "\u062f.\u0645.",
      "\u0631.\u0633.",
      "\u0631.\u0639.",
      "\u0631.\u0642.",
      "\u0631.\u064a.",
      "\u0644.\u0633.",
      "\u0644.\u0644.",
      "\u0783.",
      "B/.",
      "Bs.",
      "Fr.",
      "kr.",
      "L.",
      "p.",
      "S/.",
    ];
    var h = {};
    function i(a) {
      h[a] || (h[a] = new RegExp(a, "i"));
      return h[a];
    }
    var j = i(
      f.reduce(function (a, c, d) {
        return a + (d ? "|" : "") + "(" + b("escapeRegex")(c) + ")";
      }, ""),
    );
    function k(a, c, d, e, f, h, j) {
      __p && __p();
      d = d || "";
      e = e || ".";
      f = f || 0;
      h = h || { primaryGroupSize: g, secondaryGroupSize: g };
      var k = h.primaryGroupSize || g;
      h = h.secondaryGroupSize || k;
      j = j && j.digits;
      c === undefined || c === null
        ? (a = a.toString())
        : typeof a === "string"
        ? (a = p(a, c))
        : (a = n(a, c));
      c = a.toString().split(".");
      a = c[0];
      c = c[1];
      if (Math.abs(parseInt(a, 10)).toString().length >= f) {
        f = "$1" + d + "$2$3";
        k = "(\\d)(\\d{" + (k - 0) + "})($|\\D)";
        k = a.replace(i(k), f);
        if (k != a) {
          a = k;
          h = "(\\d)(\\d{" + (h - 0) + "})(" + b("escapeRegex")(d) + ")";
          d = i(h);
          while ((k = a.replace(d, f)) != a) a = k;
        }
      }
      j && ((a = l(a, j)), (c = c && l(c, j)));
      h = a;
      c && (h += e + c);
      return h;
    }
    function l(a, b) {
      var c = "";
      for (var d = 0; d < a.length; ++d) {
        var e = b[a.charCodeAt(d) - 48];
        c += e !== undefined ? e : a[d];
      }
      return c;
    }
    function a(a, c) {
      return k(
        a,
        c,
        "",
        b("NumberFormatConfig").decimalSeparator,
        b("NumberFormatConfig").minDigitsForThousandsSeparator,
        b("NumberFormatConfig").standardDecimalPatternInfo,
        b("NumberFormatConfig").numberingSystemData,
      );
    }
    function m(a, c) {
      return k(
        a,
        c,
        b("NumberFormatConfig").numberDelimiter,
        b("NumberFormatConfig").decimalSeparator,
        b("NumberFormatConfig").minDigitsForThousandsSeparator,
        b("NumberFormatConfig").standardDecimalPatternInfo,
        b("NumberFormatConfig").numberingSystemData,
      );
    }
    function c(a, b, c) {
      var d = Math.floor(Math.log(a) / Math.LN10),
        e = a;
      d < c && (e = a * Math.pow(10, -d + c));
      a = Math.pow(10, Math.floor(Math.log(e) / Math.LN10) - c + 1);
      e = Math.round(e / a) * a;
      d < c && (e /= Math.pow(10, -d + c));
      return m(e, b);
    }
    function n(a, b) {
      __p && __p();
      b = b == null ? 0 : b;
      var c = Math.pow(10, b);
      a = a;
      a = Math.round(a * c) / c;
      a = a + "";
      if (!b) return a;
      if (a.indexOf("e-") !== -1) return a;
      c = a.indexOf(".");
      var d;
      c == -1 ? ((a += "."), (d = b)) : (d = b - (a.length - c - 1));
      for (var b = 0, c = d; b < c; b++) a += "0";
      return a;
    }
    var o = function (a, b) {
      for (var c = 0; c < b; c++) a += "0";
      return a;
    };
    function p(a, b) {
      var c = a.indexOf("."),
        d = c === -1 ? a : a.slice(0, c);
      a = c === -1 ? "" : a.slice(c + 1);
      return b ? d + "." + o(a.slice(0, b), b - a.length) : d;
    }
    var q = {};
    (function (a) {
      q[a] ||
        (q[a] = new RegExp(
          "([^\\/p]|^)" + b("escapeRegex")(a) + "(\\d*).*",
          "i",
        ));
      return q[a];
    });
    function r(a, c, d) {
      __p && __p();
      var e = t();
      e &&
        (a = a
          .split("")
          .map(function (a) {
            return e[a] || a;
          })
          .join("")
          .trim());
      a = a.replace(/^[^\d]*\-/, "\x02");
      a = a.replace(j, "");
      d = d || "";
      c = b("escapeRegex")(c);
      d = b("escapeRegex")(d);
      var f = i("^[^\\d]*\\d.*" + c + ".*\\d[^\\d]*$");
      if (!f.test(a)) {
        f = i("(^[^\\d]*)" + c + "(\\d*[^\\d]*$)");
        if (f.test(a)) {
          a = a.replace(f, "$1\x01$2");
          return s(a);
        }
        f = i("^[^\\d]*[\\d " + b("escapeRegex")(d) + "]*[^\\d]*$");
        f.test(a) || (a = "");
        return s(a);
      }
      f = i("(^[^\\d]*[\\d " + d + "]*)" + c + "(\\d*[^\\d]*$)");
      a = f.test(a) ? a.replace(f, "$1\x01$2") : "";
      return s(a);
    }
    function s(a) {
      a = a
        .replace(/[^0-9\u0001\u0002]/g, "")
        .replace("\x01", ".")
        .replace("\x02", "-");
      var b = Number(a);
      return a === "" || isNaN(b) ? null : b;
    }
    function t() {
      var a = {},
        c =
          b("NumberFormatConfig").numberingSystemData &&
          b("NumberFormatConfig").numberingSystemData.digits;
      if (!c) return null;
      for (var d = 0; d < c.length; d++) a[c.charAt(d)] = d.toString();
      return a;
    }
    function d(a) {
      return r(
        a,
        b("NumberFormatConfig").decimalSeparator || ".",
        b("NumberFormatConfig").numberDelimiter,
      );
    }
    var u = {
      formatNumber: a,
      formatNumberRaw: k,
      formatNumberWithThousandDelimiters: m,
      formatNumberWithLimitedSigFig: c,
      parseNumber: d,
      parseNumberRaw: r,
      truncateLongNumber: p,
      getFloatString: function (a, b, c) {
        a = String(a);
        a = a.split(".");
        b = u.getIntegerString(a[0], b);
        return a.length === 1 ? b : b + c + a[1];
      },
      getIntegerString: function (a, b) {
        b === "" && (b = ",");
        a = String(a);
        var c = /(\d+)(\d{3})/;
        while (c.test(a)) a = a.replace(c, "$1" + b + "$2");
        return a;
      },
    };
    e.exports = u;
  },
  null,
);
__d(
  "Intl",
  ["IntlPhonologicalRules", "memoize"],
  function (a, b, c, d, e, f) {
    __p && __p();
    d = "[.!?\u3002\uff01\uff1f\u0964\u2026\u0eaf\u1801\u0e2f\uff0e]";
    var g = new RegExp(
        d +
          "[)\"'\xbb\u0f3b\u0f3d\u2019\u201d\u203a\u3009\u300b\u300d\u300f\u3011\u3015\u3017\u3019\u301b\u301e\u301f\ufd3f\uff07\uff09\uff3d\\s]*$",
      ),
      h = b("memoize")(function () {
        __p && __p();
        var a = [];
        for (var c in b("IntlPhonologicalRules").patterns) {
          var d = b("IntlPhonologicalRules").patterns[c];
          for (var e in b("IntlPhonologicalRules").meta) {
            var f = new RegExp(e.slice(1, -1), "g"),
              g = b("IntlPhonologicalRules").meta[e];
            c = c.replace(f, g);
            d = d.replace(f, g);
          }
          d === "javascript" &&
            (d = function (a) {
              return a.slice(1).toLowerCase();
            });
          a.push([new RegExp(c.slice(1, -1), "g"), d]);
        }
        return a;
      });
    function a(a) {
      var b = h();
      for (var c = 0; c < b.length; c++) {
        var d = b[c],
          e = d[0];
        d = d[1];
        a = a.replace(e, d);
      }
      return a.replace(/\x01/g, "");
    }
    function c(a) {
      return typeof a !== "string" ? !1 : g.test(a);
    }
    e.exports = {
      PUNCT_CHAR_CLASS: d,
      endsInPunct: c,
      applyPhonologicalRules: a,
    };
  },
  18,
);
__d(
  "substituteTokens",
  ["invariant", "Intl"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = new RegExp(
      "\\{([^}]+)\\}(" + b("Intl").PUNCT_CHAR_CLASS + "*)",
      "g",
    );
    function i(a) {
      return a;
    }
    function a(a, c) {
      __p && __p();
      var d = c;
      if (!d) return a;
      typeof d === "object" || g(0);
      var e = [],
        f = [];
      c = a
        .replace(h, function (a, c, g) {
          a = d[c];
          if (a && typeof a === "object") {
            e.push(a);
            f.push(c);
            return "\x17" + g;
          } else if (a === null) return "";
          return a + (b("Intl").endsInPunct(a) ? "" : g);
        })
        .split("\x17")
        .map(b("Intl").applyPhonologicalRules);
      if (c.length === 1) return c[0];
      a = [c[0]];
      for (var j = 0; j < e.length; j++) a.push(i(e[j]), c[j + 1]);
      return a;
    }
    e.exports = a;
  },
  18,
);
__d(
  "fbt",
  [
    "invariant",
    "Banzai",
    "FbtLogger",
    "FbtNumberType",
    "FbtQTOverrides",
    "FbtResult",
    "FbtResultGK",
    "GenderConst",
    "I18nAssets",
    "InlineFbtResult",
    "IntlHoldoutGK",
    "IntlVariations",
    "IntlViewerContext",
    "intlNumUtils",
    "substituteTokens",
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = b("FbtLogger").logger,
      i = b("FbtQTOverrides").overrides,
      j = !1,
      k = { INDEX: 0, SUBSTITUTION: 1 },
      l = { NUMBER: 0, GENDER: 1 },
      m = { OBJECT: 0, POSSESSIVE: 1, REFLEXIVE: 2, SUBJECT: 3 },
      n = "_1",
      o = {},
      p = function () {};
    p._ = function (a, c, d) {
      __p && __p();
      if (d && d.hash_key) {
        if (j) return { text: a, fbt: !0, hashKey: d.hash_key };
        var e = null;
        b("I18nAssets").isComponentScriptFastI18nAvailable() &&
          (e = b("I18nAssets").getStringFromHashKey(d.hash_key));
        e == null &&
          b("I18nAssets").isNativeModuleAvailable() &&
          ((e = b("I18nAssets").getString(d.hash_key)),
          e && (e = JSON.parse(e)));
        a = e || a;
      }
      d = {};
      e = a;
      a.__vcg &&
        ((c = c || []),
        c.unshift([[b("IntlViewerContext").GENDER, "*"], null]));
      c && ((e = this._accessTable(a, d, c, 0)), e !== null || g(0));
      a = e;
      c = null;
      b("I18nAssets").isComponentScriptFastI18nAvailable()
        ? "\nNote: Certain fbt constructs such as fbt.plural() and the third positional `variations` argument to fbt.param() are currently disallowed"
        : "";
      typeof e === "string" || Array.isArray(e) || g(0);
      if (Array.isArray(e)) {
        a = e[0];
        c = e[1];
        e = "1_" + c;
        a = i[e] || a;
        i[e] && p.logQTImpression(c);
        p.logImpression(c);
      }
      e = o[a];
      var f = this._hasKeys(d);
      if (e && !f) return e;
      else {
        e = b("substituteTokens")(a, d);
        d = t(e, a, c);
        f || (o[a] = d);
        return d;
      }
    };
    p._hasKeys = function (a) {
      for (var b in a) return !0;
      return !1;
    };
    p._accessTable = function (a, b, c, d) {
      __p && __p();
      if (d >= c.length) return a;
      else if (a == null) return null;
      var e = null,
        f = c[d],
        g = f[k.INDEX];
      if (Array.isArray(g))
        for (var h = 0; h < g.length; ++h) {
          var i = a[g[h]];
          e = this._accessTable(i, b, c, d + 1);
          if (e != null) break;
        }
      else (a = g !== null ? a[g] : a), (e = this._accessTable(a, b, c, d + 1));
      e != null && Object.assign(b, f[k.SUBSTITUTION]);
      return e;
    };
    function q(a) {
      if (b("IntlHoldoutGK").inIntlHoldout) return a === 1 ? [n, "*"] : ["*"];
      var c = b("FbtNumberType").getNumberVariationType(a);
      c & b("IntlVariations").BITMASK_NUMBER || g(0);
      return a === 1 ? [n, c, "*"] : [c, "*"];
    }
    function r(a) {
      if (b("IntlHoldoutGK").inIntlHoldout) return ["*"];
      a & b("IntlVariations").BITMASK_GENDER || g(0);
      return [a, "*"];
    }
    p._enum = function (a, b) {
      return [a, null];
    };
    p._subject = function (a) {
      return [r(a), null];
    };
    p._param = function (a, c, d) {
      __p && __p();
      var e = null,
        f = !1;
      if (d)
        if (d[0] === l.NUMBER) {
          var h = d.length > 1 ? d[1] : c;
          typeof h === "number" || g(0);
          e = q(h);
          f = !0;
        } else d[0] === l.GENDER ? (d.length > 1 || g(0), (e = r(d[1]))) : g(0);
      h = {};
      h[a] =
        f && typeof c === "number"
          ? b("intlNumUtils").formatNumberWithThousandDelimiters(c)
          : c;
      return [e, h];
    };
    p._plural = function (a, c, d) {
      var e = q(a),
        f = {};
      c &&
        (typeof d === "number"
          ? (f[c] = b("intlNumUtils").formatNumberWithThousandDelimiters(d))
          : (f[c] =
              d || b("intlNumUtils").formatNumberWithThousandDelimiters(a)));
      return [e, f];
    };
    p._pronoun = function (a, c, d) {
      c !== b("GenderConst").NOT_A_PERSON || !d || !d.human || g(0);
      d = s(a, c);
      return [[d, "*"], null];
    };
    function s(a, c) {
      switch (c) {
        case b("GenderConst").NOT_A_PERSON:
          return a === m.OBJECT || a === m.REFLEXIVE
            ? b("GenderConst").NOT_A_PERSON
            : b("GenderConst").UNKNOWN_PLURAL;
        case b("GenderConst").FEMALE_SINGULAR:
        case b("GenderConst").FEMALE_SINGULAR_GUESS:
          return b("GenderConst").FEMALE_SINGULAR;
        case b("GenderConst").MALE_SINGULAR:
        case b("GenderConst").MALE_SINGULAR_GUESS:
          return b("GenderConst").MALE_SINGULAR;
        case b("GenderConst").MIXED_SINGULAR:
        case b("GenderConst").FEMALE_PLURAL:
        case b("GenderConst").MALE_PLURAL:
        case b("GenderConst").NEUTER_PLURAL:
        case b("GenderConst").UNKNOWN_PLURAL:
          return b("GenderConst").UNKNOWN_PLURAL;
        case b("GenderConst").NEUTER_SINGULAR:
        case b("GenderConst").UNKNOWN_SINGULAR:
          return a === m.REFLEXIVE
            ? b("GenderConst").NOT_A_PERSON
            : b("GenderConst").UNKNOWN_PLURAL;
      }
      return b("GenderConst").NOT_A_PERSON;
    }
    p._name = function (a, b, c) {
      c = r(c);
      var d = {};
      d[a] = b;
      return [c, d];
    };
    p.logImpression = function (a) {
      h && h.logImpression(a);
      return a;
    };
    p.logQTImpression = function (a) {
      b("Banzai").post("intl_qt_event", { hash: a });
      return a;
    };
    function t(a, c, d) {
      if (
        !b("FbtResultGK").shouldReturnFbtResult &&
        b("FbtResultGK").inlineMode !== "REPORT"
      )
        return a;
      a = typeof a === "string" ? [a] : a;
      return b("FbtResultGK").inlineMode &&
        b("FbtResultGK").inlineMode !== "NO_INLINE"
        ? new (b("InlineFbtResult"))(a, b("FbtResultGK").inlineMode, c, d)
        : new (b("FbtResult"))(a);
    }
    p.enableJsonExportMode = function () {
      j = !0;
    };
    p.disableJsonExportMode = function () {
      j = !1;
    };
    e.exports = p;
  },
  18,
);
__d(
  "getAsyncHeaders",
  ["ZeroCategoryHeader", "isFacebookURI"],
  function (a, b, c, d, e, f) {
    function a(a) {
      var c = {};
      b("isFacebookURI")(a) &&
        b("ZeroCategoryHeader").value &&
        (c[b("ZeroCategoryHeader").header] = b("ZeroCategoryHeader").value);
      return c;
    }
    e.exports = a;
  },
  null,
);
__d(
  "goURI",
  ["URI"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("URI").go;
  },
  null,
);
__d(
  "isBonfireURI",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)(get|my)bonfire\\.com$", "i"),
      h = ["https"];
    function a(a) {
      if (a.isEmpty() && a.toString() !== "#") return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
    }
    e.exports = a;
  },
  null,
);
__d(
  "isMessengerDotComURI",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)messenger\\.com$", "i"),
      h = ["https"];
    function a(a) {
      if (a.isEmpty() && a.toString() !== "#") return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
    }
    e.exports = a;
  },
  null,
);
__d(
  "AsyncRequest",
  [
    "errorCode",
    "fbt",
    "invariant",
    "ix",
    "Promise",
    "Arbiter",
    "ArtilleryAsyncRequestTracingAnnotator",
    "AsyncRequestConfig",
    "AsyncResponse",
    "Bootloader",
    "CSS",
    "DTSG",
    "Env",
    "ErrorUtils",
    "Event",
    "FBLogger",
    "FetchStreamTransport",
    "HTTPErrors",
    "JSCC",
    "Parent",
    "PHPQuerySerializer",
    "PixelRatioConst",
    "ProfilingCounters",
    "ResourceTimingsStore",
    "ResourceTypes",
    "ServerJS",
    "SessionName",
    "TimeSlice",
    "URI",
    "UserAgent_DEPRECATED",
    "WebPixelRatio",
    "ZeroRewrites",
    "bind",
    "clearTimeout",
    "emptyFunction",
    "evalGlobal",
    "executeAfter",
    "ge",
    "getAsyncHeaders",
    "getAsyncParams",
    "gkx",
    "goURI",
    "ifRequired",
    "isBonfireURI",
    "isEmpty",
    "isFacebookURI",
    "isMessengerDotComURI",
    "replaceTransportMarkers",
    "setTimeout",
    "setTimeoutAcrossTransitions",
  ],
  function $module_AsyncRequest(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
    errorCode,
    fbt,
    invariant,
    ix,
  ) {
    __p && __p();
    function hasUnloaded() {
      try {
        return !window.domready;
      } catch (ignore) {
        return !0;
      }
    }
    function supportsUploadProgress(transport) {
      return "upload" in transport && "onprogress" in transport.upload;
    }
    function supportsCrossOrigin(transport) {
      return "withCredentials" in transport;
    }
    function isNetworkError(transport) {
      return (
        transport.status in { 0: 1, 12029: 1, 12030: 1, 12031: 1, 12152: 1 }
      );
    }
    function validateResponseHandler(handler) {
      var valid = !handler || typeof handler === "function";
      valid ||
        require("FBLogger")("asyncresponse").mustfix(
          "AsyncRequest response handlers must be functions. Pass a function, or use bind() to build one.",
        );
      return valid;
    }
    var last_id = 2,
      id_threshold = last_id;
    require("Arbiter").subscribe("page_transition", function (_, message) {
      id_threshold = message.id;
    });
    function AsyncRequest(uri) {
      "use strict";
      __p && __p();
      (this._allowIrrelevantRequests = !1),
        (this._shouldReplaceTransportMarkers = require("gkx")(
          "AT5Memmu70UpIS1xI3COUT3lBXzz0iUY-TObKzqdfQ0mqqF7VWsxqMFktNJB3nlXh6uBge6Yp5VEZXjYuakRkhRV8mqhGab4muDzekdMtZuu2w",
        )),
        (this._dispatchErrorResponse = function (asyncResponse, errorHandler) {
          __p && __p();
          var error = asyncResponse.getError();
          this.clearStatusIndicator();
          var log_data = this._sendTimeStamp && {
            duration: Date.now() - this._sendTimeStamp,
            xfb_ip: this._xFbServer || "-",
          };
          asyncResponse.logError("async_error", log_data);
          if (!this._isRelevant() || error === 1010) {
            !1;
            this.abort();
            return;
          }
          if (
            error == 1357008 ||
            error == 1357007 ||
            error == 1357041 ||
            error == 1442002 ||
            error == 1357001
          ) {
            var is_confirmation = error == 1357008 || error == 1357007;
            this.interceptHandler(asyncResponse);
            error == 1357041
              ? this._solveQuicksandChallenge(asyncResponse)
              : error == 1357007
              ? this._displayServerDialog(asyncResponse, is_confirmation, !0)
              : this._displayServerDialog(asyncResponse, is_confirmation);
          } else if (this.initialHandler(asyncResponse) !== !1) {
            require("clearTimeout")(this.timer);
            try {
              errorHandler(asyncResponse);
            } catch (e) {
              this.finallyHandler(asyncResponse);
              throw e;
            }
            this.finallyHandler(asyncResponse);
          }
        }.bind(this)),
        (this._onStateChange = function () {
          __p && __p();
          var transport = this.transport;
          if (!transport) return;
          try {
            AsyncRequest._inflightCount--;
            require("ResourceTimingsStore").measureResponseReceived(
              require("ResourceTypes").XHR,
              this.resourceTimingStoreUID,
            );
            try {
              typeof transport.getResponseHeader !== "undefined" &&
                transport.getResponseHeader("X-FB-Debug") &&
                (this._xFbServer = transport.getResponseHeader("X-FB-Debug"));
            } catch (ignore) {}
            if (transport.status >= 200 && transport.status < 300)
              (AsyncRequest.lastSuccessTime = Date.now()),
                this._handleXHRResponse(transport);
            else if (
              require("UserAgent_DEPRECATED").webkit() &&
              typeof transport.status === "undefined"
            )
              this._invokeErrorHandler(1002);
            else if (
              require("AsyncRequestConfig").retryOnNetworkError &&
              isNetworkError(transport) &&
              this.remainingRetries > 0 &&
              !this._requestTimeout
            ) {
              this.remainingRetries--;
              delete this.transport;
              this.send(!0);
              return;
            } else this._invokeErrorHandler();
            this.getOption("asynchronous_DEPRECATED") !== !1 &&
              delete this.transport;
          } catch (exception) {
            if (hasUnloaded()) return;
            delete this.transport;
            if (this.remainingRetries > 0)
              this.remainingRetries--, this.send(!0);
            else {
              this.getOption("suppressErrorAlerts") ||
                require("FBLogger")("AsyncRequest")
                  .catching(exception)
                  .mustfix(
                    "AsyncRequest exception when attempting to handle a state change",
                  );
              var ErrorSignal = global.ErrorSignal;
              ErrorSignal &&
                ErrorSignal.sendErrorSignal(
                  "async_xport_resp",
                  [
                    1007,
                    this._xFbServer || "-",
                    this.getURI(),
                    exception.message,
                  ].join(":"),
                );
              this._invokeErrorHandler(1007);
            }
          }
        }.bind(this)),
        (this.transport = null),
        (this.method = "POST"),
        (this.uri = ""),
        (this.timeout = null),
        (this.timer = null),
        (this.initialHandler = require("emptyFunction")),
        (this.handler = null),
        (this.uploadProgressHandler = null),
        (this.errorHandler = require("AsyncResponse").defaultErrorHandler),
        (this.transportErrorHandler = null),
        (this.timeoutHandler = null),
        (this.interceptHandler = require("emptyFunction")),
        (this.finallyHandler = require("emptyFunction")),
        (this.abortHandler = require("emptyFunction")),
        (this.serverDialogCancelHandler = null),
        (this.relativeTo = null),
        (this.statusElement = null),
        (this.statusClass = ""),
        (this.data = {}),
        (this.headers = {}),
        (this.file = null),
        (this.context = {}),
        (this.readOnly = !1),
        (this.writeRequiredParams = []),
        (this.remainingRetries = 0),
        (this.userActionID = "-"),
        (this.logErrorsEnabled = require("AsyncRequestConfig").logAsyncRequest),
        (this.allowInteractionServerTracing = !0),
        (this.resourceTimingStoreUID = require("ResourceTimingsStore").getUID(
          require("ResourceTypes").XHR,
          uri != null ? uri.toString() : "",
        )),
        (this._warningList = [500, 1010, 1004]),
        (this.option = {
          asynchronous_DEPRECATED: !0,
          suppressErrorHandlerWarning: !1,
          suppressEvaluation: !1,
          suppressErrorAlerts: !1,
          retries: 0,
          jsonp: !1,
          bundle: !1,
          useIframeTransport: !1,
          handleErrorAfterUnload: !1,
          useFetchWithIframeFallback: !1,
        }),
        (this.transportErrorHandler = require("bind")(this, "errorHandler")),
        uri !== undefined && this.setURI(uri),
        this.setAllowCrossPageTransition(
          require("AsyncRequestConfig")
            .asyncRequestsSurviveTransitionsDefault || !1,
        );
    }
    AsyncRequest.prototype._dispatchResponse = function (asyncResponse) {
      "use strict";
      __p && __p();
      this.clearStatusIndicator();
      if (!this._isRelevant()) {
        this._invokeErrorHandler(1010);
        return;
      }
      if (this.initialHandler(asyncResponse) === !1) return;
      require("clearTimeout")(this.timer);
      if (asyncResponse.jscc_map) {
        var jsccMap = require("JSCC").parse(asyncResponse.jscc_map);
        require("JSCC").init(jsccMap);
      }
      var suppress_js,
        handler = this.getHandler();
      if (handler)
        try {
          suppress_js = this._shouldSuppressJS(handler(asyncResponse));
        } catch (e) {
          asyncResponse.is_last && this.finallyHandler(asyncResponse);
          throw e;
        }
      suppress_js || this._handleJSResponse(asyncResponse);
      asyncResponse.is_last && this.finallyHandler(asyncResponse);
    };
    AsyncRequest.prototype._shouldSuppressJS = function (handler_return_value) {
      "use strict";
      return handler_return_value === AsyncRequest.suppressOnloadToken;
    };
    AsyncRequest.prototype._handleJSResponse = function (asyncResponse) {
      "use strict";
      __p && __p();
      var relativeTo = this.getRelativeTo(),
        domOps = asyncResponse.domops,
        dtsgToken = asyncResponse.dtsgToken,
        jsMods = asyncResponse.jsmods,
        serverJS = new (require("ServerJS"))();
      serverJS.setRelativeTo(relativeTo);
      var requires;
      jsMods &&
        jsMods.require &&
        ((requires = jsMods.require), delete jsMods.require);
      var contexts;
      jsMods &&
        jsMods.contexts &&
        ((contexts = jsMods.contexts), delete jsMods.contexts);
      var pre_display_requires;
      domOps &&
        jsMods &&
        jsMods.pre_display_requires &&
        ((pre_display_requires = jsMods.pre_display_requires),
        delete jsMods.pre_display_requires);
      jsMods && serverJS.handle(jsMods);
      dtsgToken && require("DTSG").setToken(dtsgToken);
      var finishHandleResp = function (AsyncDOM) {
        domOps && AsyncDOM && AsyncDOM.invoke(domOps, relativeTo),
          (contexts || requires) &&
            serverJS.handle({
              contexts: contexts,
              pre_display_requires: pre_display_requires,
              require: requires,
            }),
          this._handleJSRegisters(asyncResponse, "onload"),
          this._handleJSRegisters(asyncResponse, "onafterload"),
          serverJS.cleanup();
      }.bind(this);
      domOps
        ? require("Bootloader").loadModules(
            ["AsyncDOM"],
            finishHandleResp,
            "AsyncRequest",
          )
        : finishHandleResp(null);
    };
    AsyncRequest.prototype._handleJSRegisters = function (
      asyncResponse,
      phase,
    ) {
      "use strict";
      var registers = asyncResponse[phase];
      if (registers)
        for (var ii = 0; ii < registers.length; ii++)
          require("ErrorUtils").applyWithGuard(
            new Function(registers[ii]),
            this,
          );
    };
    AsyncRequest.prototype.invokeResponseHandler = function (interpreted) {
      "use strict";
      __p && __p();
      if (typeof interpreted.redirect !== "undefined") {
        require("setTimeout")(
          function () {
            this.setURI(interpreted.redirect).send();
          }.bind(this),
          0,
        );
        return;
      }
      if (interpreted.bootloadOnly !== undefined) {
        var toBootload =
            typeof interpreted.bootloadOnly === "string"
              ? JSON.parse(interpreted.bootloadOnly)
              : interpreted.bootloadOnly,
          _loop = function _loop() {
            __p && __p();
            if (_isArray) {
              if (_i >= _iterator.length) return "break";
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) return "break";
              _ref = _i.value;
            }
            var rsrcs = _ref;
            require("TimeSlice").guard(
              function () {
                require("Bootloader").loadPredictedResourceMap(rsrcs);
              },
              "Bootloader.loadPredictedResourceMap",
              { root: !0 },
            )();
          };
        for (
          var _iterator = toBootload,
            _isArray = Array.isArray(_iterator),
            _i = 0,
            _iterator = _isArray
              ? _iterator
              : _iterator[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var _ref,
            _ret = _loop();
          if (_ret === "break") break;
        }
        return;
      }
      if (!this.handler && !this.errorHandler && !this.transportErrorHandler)
        return;
      var response = interpreted.asyncResponse;
      if (typeof response !== "undefined") {
        this._artilleryHandle != null && this._artilleryHandle(response);
        if (!this._isRelevant()) {
          this._invokeErrorHandler(1010);
          return;
        }
        response.inlinejs && require("evalGlobal")(response.inlinejs);
        response.lid &&
          ((this._responseTime = Date.now()),
          global.CavalryLogger &&
            (this.cavalry = global.CavalryLogger.getInstance(response.lid)),
          (this.lid = response.lid));
        ix.add(response.ixData);
        require("gkx").add(response.gkxData);
        response.resource_map &&
          require("Bootloader").setResourceMap(response.resource_map);
        response.bootloadable &&
          require("Bootloader").enableBootload(response.bootloadable);
        var dispatch, arbiter_event;
        if (response.getError() && !response.getErrorIsWarning()) {
          var handler = this.getErrorHandler().bind(this);
          dispatch = require("ErrorUtils").guard(
            this._dispatchErrorResponse,
            "AsyncRequest#_dispatchErrorResponse for " + this.getURI(),
          );
          dispatch = dispatch.bind(this, response, handler);
          this._logError(response);
          arbiter_event = "error";
        } else
          (dispatch = require("ErrorUtils").guard(
            this._dispatchResponse.bind(this),
            "AsyncRequest#_dispatchResponse for " + this.getURI(),
          )),
            (dispatch = dispatch.bind(this, response)),
            (arbiter_event = "response");
        dispatch = require("executeAfter")(
          dispatch,
          function () {
            require("Arbiter").inform("AsyncRequest/" + arbiter_event, {
              request: this,
              response: response,
            });
          }.bind(this),
        );
        var replace = !1;
        this.preBootloadHandler &&
          (replace = this.preBootloadHandler(response));
        response.css = response.css || [];
        response.js = response.js || [];
        require("Bootloader").loadResources(
          response.css.concat(response.js),
          require("AsyncRequestConfig").immediateDispatch
            ? dispatch
            : function () {
                require("setTimeout")(dispatch, 0);
              },
          replace,
          this.getURI(),
        );
      } else
        typeof interpreted.transportError !== "undefined"
          ? this._xFbServer
            ? this._invokeErrorHandler(1008)
            : this._invokeErrorHandler(1012)
          : this._invokeErrorHandler(1007);
    };
    AsyncRequest.prototype._logError = function (response) {
      "use strict";
      __p && __p();
      if (this.logErrorsEnabled && !this.getOption("suppressErrorAlerts")) {
        var message;
        try {
          message = JSON.stringify(response);
        } catch (e) {
          try {
            message = JSON.stringify({
              error: response.error,
              errorSummary: response.errorSummary,
              errorDescription: response.errorDescription,
            });
          } catch (ex) {
            require("FBLogger")("AsyncRequest")
              .catching(ex)
              .mustfix("Failed to stringify message");
            return;
          }
        }
        require("FBLogger")("asyncresponse").mustfix(
          "Async error response %s",
          message,
        );
      }
    };
    AsyncRequest.prototype._invokeErrorHandler = function (explicitError) {
      "use strict";
      __p && __p();
      var transport = this.transport;
      if (!transport) return;
      var error;
      if (this.responseText === "") error = 1002;
      else if (this._requestAborted) error = 1011;
      else {
        try {
          error = explicitError || transport.status || 1004;
        } catch (e2) {
          error = 1005;
        }
        !1 === navigator.onLine && (error = 1006);
      }
      var desc,
        summary,
        silent = !0;
      if (error === 1006)
        (summary = fbt._("No Network Connection")),
          (desc = fbt._(
            "Your browser appears to be offline. Please check your internet connection and try again.",
          ));
      else if (error >= 300 && error <= 399) {
        summary = fbt._("Redirection");
        desc = fbt._(
          "Your access to Facebook was redirected or blocked by a third party at this time, please contact your ISP or reload.",
        );
        var location = transport.getResponseHeader("Location");
        location && require("goURI")(location, !0);
        silent = !0;
      } else
        (summary = fbt._("Oops")),
          (desc = fbt._(
            "Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again.",
          ));
      var async_response = new (require("AsyncResponse"))(this, transport);
      Object.assign(async_response, {
        error: error,
        errorSummary: summary,
        errorDescription: desc,
        silentError: silent,
      });
      this._logError(async_response);
      require("setTimeout")(
        function () {
          require("Arbiter").inform("AsyncRequest/error", {
            request: this,
            response: async_response,
          });
        }.bind(this),
        0,
      );
      if (hasUnloaded() && !this.getOption("handleErrorAfterUnload")) return;
      if (!this.transportErrorHandler) {
        require("FBLogger")("asyncresponse").mustfix(
          "Async request to %s failed with a %d error, but there was no error handler available to deal with it.",
          this.getURI(),
          error,
        );
        return;
      }
      var error_handler = this.getTransportErrorHandler().bind(this);
      !(
        this.getOption("suppressErrorAlerts") ||
        this._warningList.indexOf(error) > -1
      )
        ? require("FBLogger")("asyncresponse").mustfix(
            "Async request failed with error %s: %s when requesting %s",
            error,
            desc.toString(),
            this.getURI(),
          )
        : this._warningList.indexOf(error) > -1 &&
          require("FBLogger")("asyncresponse").warn(
            "Async request failed with error %s: %s when requesting %s",
            error,
            desc.toString(),
            this.getURI(),
          );
      require("ErrorUtils").applyWithGuard(this._dispatchErrorResponse, this, [
        async_response,
        error_handler,
      ]);
    };
    AsyncRequest.prototype._solveQuicksandChallenge = function (
      async_response,
    ) {
      "use strict";
      var payload = async_response.getPayload();
      require("Bootloader").loadModules(
        ["QuickSandSolver"],
        function (QuickSandSolver) {
          QuickSandSolver.solveAndSendRequestBack(this, payload);
        }.bind(this),
        "AsyncRequest",
      );
    };
    AsyncRequest.prototype._displayServerDialog = function (
      async_response,
      is_confirmation,
      allow_get,
    ) {
      __p && __p();
      allow_get === void 0 && (allow_get = !1);
      var payload = async_response.getPayload();
      if (payload.__dialog !== undefined) {
        this._displayServerLegacyDialog(async_response, is_confirmation);
        return;
      }
      var json = payload.__dialogx;
      new (require("ServerJS"))().handle(json);
      require("Bootloader").loadModules(
        ["ConfirmationDialog"],
        function (ConfirmationDialog) {
          ConfirmationDialog.setupConfirmation(async_response, this, allow_get);
        }.bind(this),
        "AsyncRequest",
      );
    };
    AsyncRequest.prototype._displayServerLegacyDialog = function (
      async_response,
      is_confirmation,
    ) {
      "use strict";
      __p && __p();
      var model = async_response.getPayload().__dialog;
      require("Bootloader").loadModules(
        ["Dialog"],
        function (Dialog) {
          var dialog = new Dialog(model);
          is_confirmation &&
            dialog.setHandler(
              this._displayConfirmationHandler.bind(this, dialog),
            );
          dialog
            .setCancelHandler(
              function () {
                var handler = this.getServerDialogCancelHandler();
                try {
                  handler && handler(async_response);
                } catch (e) {
                  throw e;
                } finally {
                  this.finallyHandler(async_response);
                }
              }.bind(this),
            )
            .setCausalElement(this.relativeTo)
            .show();
        }.bind(this),
        "AsyncRequest",
      );
    };
    AsyncRequest.prototype._displayConfirmationHandler = function (dialog) {
      "use strict";
      (this.data.confirmed = 1),
        Object.assign(this.data, dialog.getFormData()),
        this.send();
    };
    AsyncRequest.prototype.setJSONPTransport = function (transport) {
      "use strict";
      transport.subscribe("response", this._handleJSONPResponse.bind(this)),
        transport.subscribe("abort", this._handleJSONPAbort.bind(this)),
        (this.transport = transport);
    };
    AsyncRequest.prototype._handleJSONPResponse = function (_, data) {
      "use strict";
      var transport = this.transport;
      if (!transport) return;
      data.bootloadOnly || (this.is_first = this.is_first === undefined);
      var interpreted = this._interpretResponse(data);
      interpreted.asyncResponse &&
        ((interpreted.asyncResponse.is_first = this.is_first),
        (interpreted.asyncResponse.is_last = transport.hasFinished()));
      this.invokeResponseHandler(interpreted);
      transport.hasFinished() && delete this.transport;
    };
    AsyncRequest.prototype._handleJSONPAbort = function () {
      "use strict";
      this._invokeErrorHandler(), delete this.transport;
    };
    AsyncRequest.prototype._handleXHRResponse = function (transport) {
      "use strict";
      __p && __p();
      var interpreted;
      if (this.getOption("suppressEvaluation"))
        interpreted = {
          asyncResponse: new (require("AsyncResponse"))(this, transport),
        };
      else {
        var text = transport.responseText,
          error = null;
        try {
          var safe_text = this._unshieldResponseText(text);
          try {
            var _response = eval("(" + safe_text + ")");
            interpreted = this._interpretResponse(_response);
          } catch (exception) {
            (error = "excep"),
              (interpreted = {
                transportError: "eval() failed on async to " + this.getURI(),
              });
          }
        } catch (exception) {
          (error = "empty"),
            (interpreted = { transportError: exception.message });
        }
        if (error) {
          var ErrorSignal = global.ErrorSignal;
          ErrorSignal &&
            ErrorSignal.sendErrorSignal(
              "async_xport_resp",
              [
                (this._xFbServer ? "1008_" : "1012_") + error,
                this._xFbServer || "-",
                this.getURI(),
                text.length,
                text.substr(0, 1600),
              ].join(":"),
            );
        }
      }
      this.invokeResponseHandler(interpreted);
    };
    AsyncRequest.prototype._unshieldResponseText = function (text) {
      "use strict";
      var shield = "for (;;);",
        shieldlen = shield.length;
      if (text.length <= shieldlen)
        throw new Error("Response too short on async to " + this.getURI());
      var offset = 0;
      while (text.charAt(offset) == " " || text.charAt(offset) == "\n")
        offset++;
      offset && text.substring(offset, offset + shieldlen) == shield && !1;
      return text.substring(offset + shieldlen);
    };
    AsyncRequest.prototype._interpretResponse = function (response) {
      "use strict";
      __p && __p();
      if (response.redirect) return { redirect: response.redirect };
      if (response.bootloadOnly) return { bootloadOnly: response.bootloadOnly };
      this._shouldReplaceTransportMarkers &&
        response.payload &&
        require("replaceTransportMarkers")(
          { relativeTo: this.getRelativeTo(), bigPipeContext: null },
          response.payload,
        );
      var r = new (require("AsyncResponse"))(this);
      if (response.__ar != 1)
        require("FBLogger")("AsyncRequest").warn(
          "AsyncRequest to endpoint %s returned a JSON response, but it is not properly formatted. The endpoint needs to provide a response using the AsyncResponse class in PHP.",
          this.getURI(),
        ),
          (r.payload = response);
      else {
        Object.assign(r, response);
        var transport = this.transport;
        transport &&
          transport.getAllResponseHeaders !== undefined &&
          (r.responseHeaders = transport.getAllResponseHeaders());
      }
      return { asyncResponse: r };
    };
    AsyncRequest.prototype._isMultiplexable = function () {
      "use strict";
      __p && __p();
      if (
        this.getOption("jsonp") ||
        this.getOption("useIframeTransport") ||
        this.getOption("useFetchWithIframeFallback")
      ) {
        require("FBLogger")("AsyncRequest").mustfix(
          "You cannot bundle AsyncRequest that uses jsonp or iframe transport.",
        );
        return !1;
      }
      if (!require("isFacebookURI")(new (require("URI"))(this.uri))) {
        require("FBLogger")("AsyncRequest").mustfix(
          "You can not bundle AsyncRequest sent to non-facebook URIs.  Uri: %s",
          this.getURI(),
        );
        return !1;
      }
      if (!this.getOption("asynchronous_DEPRECATED")) {
        require("FBLogger")("AsyncRequest").mustfix(
          "We cannot bundle synchronous AsyncRequests",
        );
        return !1;
      }
      return !0;
    };
    AsyncRequest.prototype.handleResponse = function (response) {
      "use strict";
      var interpreted = this._interpretResponse(response);
      this.invokeResponseHandler(interpreted);
    };
    AsyncRequest.prototype.setMethod = function (m) {
      "use strict";
      this.method = m.toString().toUpperCase();
      return this;
    };
    AsyncRequest.prototype.getMethod = function () {
      "use strict";
      return this.method;
    };
    AsyncRequest.prototype.setData = function (obj) {
      "use strict";
      this.data = obj;
      return this;
    };
    AsyncRequest.prototype.setRequestHeader = function (name, value) {
      "use strict";
      this.headers[name] = value;
      return this;
    };
    AsyncRequest.prototype.setRawData = function (raw_data) {
      "use strict";
      this.rawData = raw_data;
      return this;
    };
    AsyncRequest.prototype.getData = function () {
      "use strict";
      return this.data;
    };
    AsyncRequest.prototype.setContextData = function (key, value, enabled) {
      "use strict";
      enabled = enabled === undefined ? !0 : enabled;
      enabled && (this.context["_log_" + key] = value);
      return this;
    };
    AsyncRequest.prototype._setUserActionID = function () {
      "use strict";
      this.userActionID = (require("SessionName").getName() || "-") + "/-";
    };
    AsyncRequest.prototype.setURI = function (uri) {
      "use strict";
      __p && __p();
      typeof uri === "string" &&
        uri.match(/^\/?u_\d+_\d+/) &&
        require("FBLogger")("asyncrequest").warn("Invalid URI %s", uri);
      var uri_obj = new (require("URI"))(uri);
      if (
        (this.getOption("useIframeTransport") ||
          this.getOption("useFetchWithIframeFallback")) &&
        !require("isFacebookURI")(uri_obj)
      ) {
        !1;
        return this;
      }
      if (
        !this._allowCrossOrigin &&
        !this.getOption("jsonp") &&
        !this.getOption("useIframeTransport") &&
        !this.getOption("useFetchWithIframeFallback") &&
        !uri_obj.isSameOrigin()
      ) {
        !1;
        return this;
      }
      this._setUserActionID();
      if (!uri || uri_obj.isEmpty()) {
        !1;
        var ErrorSignal = global.ErrorSignal;
        if (ErrorSignal) {
          var data = {
            err_code: 1013,
            vip: "-",
            duration: 0,
            xfb_ip: "-",
            path: window.location.href,
            aid: this.userActionID,
          };
          ErrorSignal.sendErrorSignal("async_error", JSON.stringify(data));
          ErrorSignal.sendErrorSignal(
            "async_xport_stack",
            [
              1013,
              window.location.href,
              null,
              require("ErrorUtils").normalizeError(new Error()).stack,
            ].join(":"),
          );
        }
        return this;
      }
      this.uri = require("ZeroRewrites").rewriteURI(uri_obj);
      return this;
    };
    AsyncRequest.prototype.getURI = function () {
      "use strict";
      return this.uri.toString();
    };
    AsyncRequest.prototype.setInitialHandler = function (fn) {
      "use strict";
      this.initialHandler = fn;
      return this;
    };
    AsyncRequest.prototype.setPayloadHandler = function (fn) {
      "use strict";
      this.setHandler(function (response) {
        return fn(response.payload);
      });
      return this;
    };
    AsyncRequest.prototype.setHandler = function (fn) {
      "use strict";
      validateResponseHandler(fn) && (this.handler = fn);
      return this;
    };
    AsyncRequest.prototype.getHandler = function () {
      "use strict";
      return this.handler || require("emptyFunction");
    };
    AsyncRequest.prototype.setUploadProgressHandler = function (fn) {
      "use strict";
      validateResponseHandler(fn) && (this.uploadProgressHandler = fn);
      return this;
    };
    AsyncRequest.prototype.setErrorHandler = function (fn) {
      "use strict";
      validateResponseHandler(fn) && (this.errorHandler = fn);
      return this;
    };
    AsyncRequest.prototype.setTransportErrorHandler = function (fn) {
      "use strict";
      this.transportErrorHandler = fn;
      return this;
    };
    AsyncRequest.prototype.getErrorHandler = function () {
      "use strict";
      return this.errorHandler || require("emptyFunction");
    };
    AsyncRequest.prototype.getTransportErrorHandler = function () {
      "use strict";
      return this.transportErrorHandler || require("emptyFunction");
    };
    AsyncRequest.prototype.setTimeoutHandler = function (timeout, fn) {
      "use strict";
      validateResponseHandler(fn) &&
        ((this.timeout = timeout), (this.timeoutHandler = fn));
      return this;
    };
    AsyncRequest.prototype.resetTimeout = function (timeout) {
      "use strict";
      __p && __p();
      if (this.timeoutHandler === null) !1;
      else if (timeout === null)
        (this.timeout = null),
          require("clearTimeout")(this.timer),
          (this.timer = null);
      else {
        var clear_on_quickling_event = !this._allowCrossPageTransition;
        this.timeout = timeout;
        require("clearTimeout")(this.timer);
        clear_on_quickling_event
          ? (this.timer = require("setTimeout")(
              this._handleTimeout.bind(this),
              this.timeout,
            ))
          : (this.timer = require("setTimeoutAcrossTransitions")(
              this._handleTimeout.bind(this),
              this.timeout,
            ));
      }
      return this;
    };
    AsyncRequest.prototype._handleTimeout = function () {
      "use strict";
      this._requestTimeout = !0;
      var func = this.timeoutHandler;
      this.abandon();
      func && func(this);
      this._logError({ timeout: this });
      require("setTimeout")(
        function () {
          require("Arbiter").inform("AsyncRequest/timeout", { request: this });
        }.bind(this),
        0,
      );
    };
    AsyncRequest.prototype.disableInteractionServerTracing = function () {
      "use strict";
      this.allowInteractionServerTracing = !1;
      return this;
    };
    AsyncRequest.prototype.setNewSerial = function () {
      "use strict";
      this.id = ++last_id;
      return this;
    };
    AsyncRequest.prototype.setInterceptHandler = function (fn) {
      "use strict";
      this.interceptHandler = fn;
      return this;
    };
    AsyncRequest.prototype.setFinallyHandler = function (fn) {
      "use strict";
      this.finallyHandler = fn;
      return this;
    };
    AsyncRequest.prototype.setAbortHandler = function (fn) {
      "use strict";
      this.abortHandler = fn;
      return this;
    };
    AsyncRequest.prototype.getServerDialogCancelHandler = function () {
      "use strict";
      return this.serverDialogCancelHandler;
    };
    AsyncRequest.prototype.setServerDialogCancelHandler = function (fn) {
      "use strict";
      this.serverDialogCancelHandler = fn;
      return this;
    };
    AsyncRequest.prototype.setPreBootloadHandler = function (fn) {
      "use strict";
      this.preBootloadHandler = fn;
      return this;
    };
    AsyncRequest.prototype.setReadOnly = function (readOnly) {
      "use strict";
      typeof readOnly !== "boolean" ? !1 : (this.readOnly = readOnly);
      return this;
    };
    AsyncRequest.prototype.getReadOnly = function () {
      "use strict";
      return this.readOnly;
    };
    AsyncRequest.prototype.setRelativeTo = function (element) {
      "use strict";
      this.relativeTo = element;
      return this;
    };
    AsyncRequest.prototype.getRelativeTo = function () {
      "use strict";
      return this.relativeTo;
    };
    AsyncRequest.prototype.setStatusClass = function (c) {
      "use strict";
      this.statusClass = c;
      return this;
    };
    AsyncRequest.prototype.setStatusElement = function (element) {
      "use strict";
      this.statusElement = element;
      return this;
    };
    AsyncRequest.prototype.getStatusElement = function () {
      "use strict";
      return require("ge")(this.statusElement);
    };
    AsyncRequest.prototype._isRelevant = function () {
      "use strict";
      if (this._allowCrossPageTransition) return !0;
      return !this.id ? !0 : this.id > id_threshold;
    };
    AsyncRequest.prototype.clearStatusIndicator = function () {
      "use strict";
      var statusElem = this.getStatusElement();
      statusElem &&
        (require("CSS").removeClass(statusElem, "async_saving"),
        require("CSS").removeClass(statusElem, this.statusClass));
    };
    AsyncRequest.prototype.addStatusIndicator = function () {
      "use strict";
      var statusElem = this.getStatusElement();
      statusElem &&
        (require("CSS").addClass(statusElem, "async_saving"),
        require("CSS").addClass(statusElem, this.statusClass));
    };
    AsyncRequest.prototype.specifiesWriteRequiredParams = function () {
      "use strict";
      return this.writeRequiredParams.every(function (param) {
        this.data[param] =
          this.data[param] ||
          require("Env")[param] ||
          (require("ge")(param) || {}).value;
        return this.data[param] !== undefined ? !0 : !1;
      }, this);
    };
    AsyncRequest.prototype.setOption = function (opt, v) {
      "use strict";
      typeof this.option[opt] !== "undefined" ? (this.option[opt] = v) : !1;
      return this;
    };
    AsyncRequest.prototype.getOption = function (opt) {
      "use strict";
      typeof this.option[opt] === "undefined" && !1;
      return this.option[opt];
    };
    AsyncRequest.prototype.abort = function () {
      "use strict";
      __p && __p();
      var transport = this.transport;
      if (transport) {
        var old_handler = this.getTransportErrorHandler();
        this.setOption("suppressErrorAlerts", !0);
        this.setTransportErrorHandler(require("emptyFunction"));
        this._requestAborted = !0;
        transport.abort();
        this.setTransportErrorHandler(old_handler);
      }
      this.abortHandler();
      AsyncMultiplex.unschedule(this);
    };
    AsyncRequest.prototype.abandon = function () {
      "use strict";
      require("clearTimeout")(this.timer),
        this.setOption("suppressErrorAlerts", !0)
          .setHandler(require("emptyFunction"))
          .setErrorHandler(require("emptyFunction"))
          .setTransportErrorHandler(require("emptyFunction")),
        this.transport && ((this._requestAborted = !0), this.transport.abort()),
        this.abortHandler(),
        AsyncMultiplex.unschedule(this);
    };
    AsyncRequest.prototype.setNectarData = function (nctrParams) {
      "use strict";
      nctrParams &&
        (this.data.nctr === undefined && (this.data.nctr = {}),
        Object.assign(this.data.nctr, nctrParams));
      return this;
    };
    AsyncRequest.prototype.setNectarModuleDataSafe = function (elem) {
      "use strict";
      var setNectarModuleData = this.setNectarModuleData;
      setNectarModuleData && setNectarModuleData.call(this, elem);
      return this;
    };
    AsyncRequest.prototype.setAllowCrossPageTransition = function (allow) {
      "use strict";
      this._allowCrossPageTransition = !!allow;
      this.timer && this.resetTimeout(this.timeout);
      return this;
    };
    AsyncRequest.prototype.getAllowIrrelevantRequests = function () {
      "use strict";
      return this._allowIrrelevantRequests;
    };
    AsyncRequest.prototype.setAllowIrrelevantRequests = function (
      allowIrrelevantRequests,
    ) {
      "use strict";
      this._allowIrrelevantRequests = allowIrrelevantRequests;
      return this;
    };
    AsyncRequest.prototype.setAllowCrossOrigin = function (allow) {
      "use strict";
      this._allowCrossOrigin = allow;
      return this;
    };
    AsyncRequest.prototype.setAllowCredentials = function (allow) {
      "use strict";
      this._allowCredentials = allow;
      return this;
    };
    AsyncRequest.prototype.setIsBackgroundRequest = function (
      isBackgroundRequest,
    ) {
      "use strict";
      this._isBackgroundRequest = isBackgroundRequest;
      return this;
    };
    AsyncRequest.prototype.setReplaceTransportMarkers = function (value) {
      value === void 0 && (value = !0);
      this._shouldReplaceTransportMarkers = value;
      return this;
    };
    AsyncRequest.prototype.send = function (isRetry) {
      __p && __p();
      var _this$uri$addQueryDat;
      isRetry = isRetry || !1;
      if (!this.uri) {
        !1;
        return !1;
      }
      !this.errorHandler &&
        !this.getOption("suppressErrorHandlerWarning") &&
        !1;
      this.getOption("jsonp") && this.method != "GET" && this.setMethod("GET");
      (this.getOption("useIframeTransport") ||
        this.getOption("useFetchWithIframeFallback")) &&
        this.method != "GET" &&
        (!1, this.setMethod("GET"));
      this.timeoutHandler !== null &&
        (this.getOption("jsonp") ||
          this.getOption("useIframeTransport") ||
          this.getOption("useFetchWithIframeFallback")) &&
        !1;
      if (!this.getReadOnly()) {
        this.specifiesWriteRequiredParams();
        if (this.method != "POST") {
          !1;
          return !1;
        }
      }
      if (document.location.search.toString().includes(this.uri.toString())) {
        !1;
        return !1;
      }
      Object.assign(this.data, require("getAsyncParams")(this.method));
      this.allowInteractionServerTracing &&
        (this._artilleryHandle =
          require("ArtilleryAsyncRequestTracingAnnotator").registerAsyncRequest(
            this,
            this.resourceTimingStoreUID,
          ));
      require("isEmpty")(this.context) ||
        (Object.assign(this.data, this.context), (this.data.ajax_log = 1));
      require("Env").force_param &&
        Object.assign(this.data, require("Env").force_param);
      this._setUserActionID();
      if (this.getOption("bundle") && this._isMultiplexable()) {
        AsyncMultiplex.schedule(this);
        return !0;
      }
      this.setNewSerial();
      this.getOption("asynchronous_DEPRECATED") ||
        this.uri.addQueryData({ __s: 1 });
      this.uri.addQueryData(
        ((_this$uri$addQueryDat = {}),
        (_this$uri$addQueryDat[require("PixelRatioConst").cookieName] =
          require("WebPixelRatio").get()),
        _this$uri$addQueryDat),
      );
      require("Arbiter").inform("AsyncRequest/send", { request: this });
      var uri_str, query;
      this.method == "GET" || this.rawData
        ? ((uri_str = this.uri.addQueryData(this.data).toString()),
          (query = this.rawData || ""))
        : (this._allowCrossOrigin && this.uri.addQueryData({ __a: 1 }),
          (uri_str = this.uri.toString()),
          (query = require("PHPQuerySerializer").serialize(this.data)));
      if (this.transport) {
        !1;
        return !1;
      }
      if (this.getOption("useFetchWithIframeFallback"))
        try {
          var _transport = new (require("FetchStreamTransport"))(this.uri);
          this.setJSONPTransport(_transport);
          this._markRequestSent();
          _transport.send();
          this.setOption("useIframeTransport", !1);
          return !0;
        } catch (_e) {
          this.setOption("useFetchWithIframeFallback", !1),
            this.setOption("useIframeTransport", !0);
        }
      if (this.getOption("jsonp") || this.getOption("useIframeTransport")) {
        requireLazy(
          ["JSONPTransport"],
          function (JSONPTransport) {
            var transport = new JSONPTransport(
              this.getOption("jsonp") ? "jsonp" : "iframe",
              this.uri,
            );
            this.setJSONPTransport(transport);
            this._markRequestSent();
            transport.send();
            require("ProfilingCounters").incrementCounter(
              "ASYNC_REQUEST_COUNT",
              1,
            );
          }.bind(this),
        );
        return !0;
      }
      var transport = require("ZeroRewrites").getTransportBuilderForURI(
        this.uri,
      )();
      if (!transport) {
        !1;
        return !1;
      }
      var guardedOnReadyStateChange = require("TimeSlice").guard(
        this._onStateChange,
        "XHR.onreadystatechange",
        { propagationType: require("TimeSlice").PropagationType.CONTINUATION },
      );
      transport.onreadystatechange = function () {
        transport.readyState === 4 && guardedOnReadyStateChange();
      };
      this.uploadProgressHandler &&
        supportsUploadProgress(transport) &&
        (transport.upload.onprogress = this.uploadProgressHandler.bind(this));
      isRetry || (this.remainingRetries = this.getOption("retries"));
      global.ErrorSignal &&
        (this._sendTimeStamp = this._sendTimeStamp || Date.now());
      this.transport = transport;
      try {
        transport.open(
          this.method,
          uri_str,
          this.getOption("asynchronous_DEPRECATED"),
        );
      } catch (exception) {
        !1;
        return !1;
      }
      if (
        !this.uri.isSameOrigin() &&
        !this.getOption("jsonp") &&
        !this.getOption("useIframeTransport") &&
        !this.getOption("useFetchWithIframeFallback")
      ) {
        if (!supportsCrossOrigin(transport)) {
          !1;
          return !1;
        }
        this._canSendCredentials() && (transport.withCredentials = !0);
      }
      this.method == "POST" &&
        !this.rawData &&
        transport.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded",
        );
      this._isBackgroundRequest &&
        transport.setRequestHeader("X_FB_BACKGROUND_STATE", "1");
      var asyncHeaders = require("getAsyncHeaders")(this.uri);
      Object.keys(asyncHeaders).forEach(function (name) {
        transport && transport.setRequestHeader(name, asyncHeaders[name]);
      });
      require("Arbiter").inform("AsyncRequest/will_send", { request: this });
      if (transport)
        for (var headerName in this.headers)
          Object.prototype.hasOwnProperty.call(this.headers, headerName) &&
            transport.setRequestHeader(headerName, this.headers[headerName]);
      this.addStatusIndicator();
      this._markRequestSent();
      transport.send(query);
      this.timeout !== null && this.resetTimeout(this.timeout);
      AsyncRequest._inflightCount++;
      require("ProfilingCounters").incrementCounter("ASYNC_REQUEST_COUNT", 1);
      return !0;
    };
    AsyncRequest.prototype._canSendCredentials = function () {
      "use strict";
      if (this._allowCredentials === !1) return !1;
      var uri = new (require("URI"))(this.uri);
      return (
        require("isFacebookURI")(uri) ||
        require("isMessengerDotComURI")(uri) ||
        require("isBonfireURI")(uri)
      );
    };
    AsyncRequest.prototype._markRequestSent = function () {
      "use strict";
      var fullURI = new (require("URI"))(this.getURI())
        .getQualifiedURI()
        .toString();
      require("ResourceTimingsStore").updateURI(
        require("ResourceTypes").XHR,
        this.resourceTimingStoreUID,
        fullURI,
      );
      require("ResourceTimingsStore")
        .annotate(require("ResourceTypes").XHR, this.resourceTimingStoreUID)
        .addStringAnnotation("uri", fullURI);
      require("ifRequired")(
        "TimeSliceAutoclosedInteraction",
        function (TimeSliceAutoclosedInteraction) {
          return TimeSliceAutoclosedInteraction.getInteractionsActiveRightNow().forEach(
            function (interaction) {
              return interaction
                .forResourceRequest(this.resourceTimingStoreUID)
                .addStringAnnotation("requested_in_continuation", "true");
            }.bind(this),
          );
        }.bind(this),
      );
      require("ResourceTimingsStore").measureRequestSent(
        require("ResourceTypes").XHR,
        this.resourceTimingStoreUID,
      );
    };
    AsyncRequest.prototype.exec = function (isRetry) {
      "use strict";
      if (
        this.getHandler() !== require("emptyFunction") ||
        this.getErrorHandler() !== require("AsyncResponse").defaultErrorHandler
      )
        throw new Error(
          "exec is an async function and does not allow previously set handlers",
        );
      return new (require("Promise"))(
        function (resolve, reject) {
          this.setHandler(resolve).setErrorHandler(reject).send(isRetry);
        }.bind(this),
      );
    };
    AsyncRequest.bootstrap = function (href, elem, is_post) {
      "use strict";
      __p && __p();
      var method = "GET",
        readonly = !0,
        data = {};
      (is_post || (elem && elem.rel == "async-post")) &&
        ((method = "POST"),
        (readonly = !1),
        href &&
          ((href = new (require("URI"))(href)),
          (data = href.getQueryData()),
          href.setQueryData({})));
      var status_elem = require("Parent").byClass(elem, "stat_elem") || elem;
      if (status_elem && require("CSS").hasClass(status_elem, "async_saving"))
        return !1;
      var async = new AsyncRequest(href)
        .setReadOnly(readonly)
        .setMethod(method)
        .setData(data)
        .setNectarModuleDataSafe(elem)
        .setRelativeTo(elem);
      elem &&
        (async.setHandler(function (response) {
          require("Event").fire(elem, "success", { response: response });
        }),
        async.setErrorHandler(function (response) {
          require("Event").fire(elem, "error", { response: response }) !== !1 &&
            require("AsyncResponse").defaultErrorHandler(response);
        }));
      if (status_elem instanceof HTMLElement) {
        async.setStatusElement(status_elem);
        var status_class = status_elem.getAttribute("data-status-class");
        status_class && async.setStatusClass(status_class);
      }
      async.send();
      return !1;
    };
    AsyncRequest.post = function (href, data) {
      "use strict";
      new AsyncRequest(href)
        .setReadOnly(!1)
        .setMethod("POST")
        .setData(data)
        .send();
      return !1;
    };
    AsyncRequest.getLastID = function () {
      "use strict";
      return last_id;
    };
    AsyncRequest.getInflightCount = function () {
      "use strict";
      return this._inflightCount;
    };
    AsyncRequest._inflightCount = 0;
    var _asyncMultiplex,
      _pendingAsyncMultiplexes = [];
    function AsyncMultiplex() {
      "use strict";
      this._requests = [];
    }
    AsyncMultiplex.prototype.add = function (request) {
      "use strict";
      this._requests.push(request);
    };
    AsyncMultiplex.prototype.remove = function (request) {
      "use strict";
      var requests = this._requests,
        requestsSent = this._requestsSent;
      for (var ii = 0, jj = requests.length; ii < jj; ii++)
        requests[ii] === request &&
          (requestsSent ? (requests[ii] = null) : requests.splice(ii, 1));
    };
    AsyncMultiplex.prototype.send = function () {
      "use strict";
      __p && __p();
      this._requestsSent && invariant(0);
      this._requestsSent = !0;
      this._wrapperRequest = null;
      var requests = this._requests;
      if (!requests.length) return;
      var request;
      if (requests.length === 1) request = requests[0];
      else {
        var data = requests.filter(Boolean).map(function (request) {
          return [
            request.uri.getPath(),
            require("PHPQuerySerializer").serialize(request.data),
          ];
        });
        request = this._wrapperRequest = new AsyncRequest("/ajax/proxy.php")
          .setAllowCrossPageTransition(!0)
          .setData({ data: data })
          .setHandler(this._handler.bind(this))
          .setTransportErrorHandler(this._transportErrorHandler.bind(this));
      }
      request && request.setOption("bundle", !1).send();
    };
    AsyncMultiplex.prototype._handler = function (response) {
      "use strict";
      __p && __p();
      var responses = response.getPayload().responses;
      if (responses.length !== this._requests.length) {
        !1;
        return;
      }
      for (var ii = 0; ii < this._requests.length; ii++) {
        var _request = this._requests[ii];
        if (!_request) continue;
        var request_path = _request.uri.getPath();
        this._wrapperRequest && (_request.id = this._wrapperRequest.id);
        if (responses[ii][0] !== request_path) {
          _request.invokeResponseHandler({
            transportError:
              "Wrong response order in bundled request to " + request_path,
          });
          continue;
        }
        _request.handleResponse(responses[ii][1]);
      }
      _pendingAsyncMultiplexes.splice(
        _pendingAsyncMultiplexes.indexOf(this, 1),
      );
    };
    AsyncMultiplex.prototype._transportErrorHandler = function (response) {
      "use strict";
      var interpreted = { transportError: response.errorDescription },
        paths = this._requests.filter(Boolean).map(function (request) {
          this._wrapperRequest && (request.id = this._wrapperRequest.id);
          request.invokeResponseHandler(interpreted);
          return request.uri.getPath();
        }, this);
      !1;
    };
    AsyncMultiplex.schedule = function (request) {
      "use strict";
      _asyncMultiplex ||
        ((_asyncMultiplex = new AsyncMultiplex()),
        _pendingAsyncMultiplexes.push(_asyncMultiplex),
        require("setTimeout")(function () {
          _asyncMultiplex && (_asyncMultiplex.send(), (_asyncMultiplex = null));
        }, 0));
      _asyncMultiplex.add(request);
      return _asyncMultiplex;
    };
    AsyncMultiplex.unschedule = function (request) {
      "use strict";
      _pendingAsyncMultiplexes.forEach(function (asyncMultiplex) {
        asyncMultiplex.remove(request);
      });
    };
    AsyncRequest.suppressOnloadToken = {};
    global.AsyncRequest = AsyncRequest;
    module.exports = AsyncRequest;
  },
  null,
);
__d(
  "isAdsExcelAddinURI",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)fbaddins\\.com$", "i"),
      h = ["https"];
    function a(a) {
      if (a.isEmpty() && a.toString() !== "#") return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
    }
    e.exports = a;
  },
  null,
);
__d(
  "isValidURI",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp(
        "((^|\\.)atlassolutions\\.com$)|((^|\\.)instagram\\.com$)|((^|\\.)wit\\.ai$)|((^|\\.)accountkit\\.com$)",
        "i",
      ),
      h = ["https"];
    function a(a) {
      if (a.isEmpty() && a.toString() !== "#") return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : h.includes(a.getProtocol()) && g.test(a.getDomain());
    }
    e.exports = a;
  },
  null,
);
__d(
  "promiseDone",
  ["TAAL", "setTimeoutAcrossTransitions"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c, d) {
      var e = new Error("promiseDone"),
        f = arguments.length > 1 ? a.then(c, d) : a;
      f.then(null, function (a) {
        b("setTimeoutAcrossTransitions")(function () {
          if (a instanceof Error) throw a;
          else {
            e.message = b("TAAL").blameToPreviousFile(a);
            throw e;
          }
        }, 0);
      });
    }
    e.exports = a;
  },
  null,
);
__d(
  "AsyncSignal",
  [
    "Promise",
    "ErrorUtils",
    "QueryString",
    "Run",
    "TimeSlice",
    "TrackingConfig",
    "URI",
    "ZeroRewrites",
    "getAsyncParams",
    "isAdsExcelAddinURI",
    "isBonfireURI",
    "isFacebookURI",
    "isMessengerDotComURI",
    "isValidURI",
    "memoize",
    "promiseDone",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    function a(a, c) {
      (this.data = c || {}),
        (this.uri = a.toString()),
        b("TrackingConfig").domain &&
          this.uri.charAt(0) == "/" &&
          (this.uri = b("TrackingConfig").domain + this.uri);
    }
    a.prototype.setHandler = function (a) {
      this.handler = a;
      return this;
    };
    a.prototype.setTimeout = function (a) {
      this.timeout = a;
      return this;
    };
    a.prototype.send = function () {
      b("TimeSlice").guard(this._send.bind(this), "AsyncSignal send", {
        propagationType: b("TimeSlice").PropagationType.ORPHAN,
      })();
    };
    a.prototype._send = function () {
      __p && __p();
      var a = this.handler,
        c = this.data;
      c.asyncSignal = ((Math.random() * 1e4) | 0) + 1;
      var d = b("ZeroRewrites").rewriteURI(new (b("URI"))(this.uri));
      d =
        b("isFacebookURI")(d) ||
        b("isMessengerDotComURI")(d) ||
        b("isBonfireURI")(d) ||
        b("isAdsExcelAddinURI")(d) ||
        b("isValidURI")(d);
      if (d) Object.assign(c, b("getAsyncParams")("POST"));
      else
        throw new Error(
          "'" +
            this.uri +
            "' is an external URL, you should not send async signals to offsite links.",
        );
      var e = b("QueryString").appendToUrl(this.uri, c);
      g ||
        (g = new (b("Promise"))(function (a) {
          b("Run").onAfterLoad(a);
        }));
      d = g.then(function () {
        return new (b("Promise"))(function (a, b) {
          var c = new Image();
          c.onload = a;
          c.onerror = c.onabort = b;
          c.src = e;
        });
      });
      if (a) {
        var f = !1,
          h = b("memoize")(function () {
            b("ErrorUtils").applyWithGuard(a, null, [f]);
          });
        b("promiseDone")(
          d.then(function () {
            (f = !0), h();
          }, h),
        );
        this.timeout && setTimeout(h, this.timeout);
      }
      return this;
    };
    e.exports = a;
  },
  null,
);
__d(
  "XJavaScriptLogviewSiteCategory",
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      MBASIC: "m_basic",
      MTOUCH: "m_touch",
      WWW: "www",
    });
  },
  null,
);
__d(
  "ErrorSignal",
  [
    "AbstractErrorSignal",
    "AsyncRequest",
    "AsyncSignal",
    "BanzaiODS",
    "ErrorSignalConfig",
    "XJavaScriptLogviewSiteCategory",
    "emptyFunction",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g, h;
    g = babelHelpers.inherits(c, b("AbstractErrorSignal"));
    h = g && g.prototype;
    c.prototype.performCounterLogging = function (a) {
      "use strict";
      h.performCounterLogging.call(this, a);
      switch (a) {
        case "javascript_error":
          b("BanzaiODS").bumpEntityKey(
            "js_error_reporting",
            "error_signal." + b("XJavaScriptLogviewSiteCategory").WWW + ".sent",
          );
          break;
      }
    };
    c.prototype.performSignalLogging = function (a, c) {
      "use strict";
      switch (a) {
        case "async_error":
          new (b("AsyncRequest"))()
            .setURI(b("ErrorSignalConfig").uri)
            .setData({ c: "async_error", m: c })
            .setMethod("GET")
            .setReadOnly(!0)
            .setOption("suppressEvaluation", !0)
            .setOption("suppressErrorAlerts", !0)
            .setHandler(b("emptyFunction"))
            .setErrorHandler(b("emptyFunction"))
            .send(!0);
          break;
        default:
          new (b("AsyncSignal"))(b("ErrorSignalConfig").uri, {
            c: a,
            m: c,
          }).send();
          break;
      }
    };
    function c() {
      "use strict";
      g.apply(this, arguments);
    }
    d = new c();
    e.exports = d;
    a.ErrorSignal = d;
  },
  null,
);
__d(
  "ErrorLogging",
  [
    "ErrorSignal",
    "ErrorUtils",
    "JSErrorExtra",
    "JSErrorLoggingConfig",
    "JSErrorPlatformColumns",
    "throttle",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      var c = a.extra || {},
        d = {};
      Object.keys(b("JSErrorExtra")).forEach(function (a) {
        b("JSErrorExtra")[a] && (d[a] = !0);
      });
      Object.keys(c).forEach(function (a) {
        c[a] ? (d[a] = !0) : d[a] && delete d[a];
      });
      a.extra = Object.keys(d);
    }
    function h(a) {
      b("JSErrorPlatformColumns").app_id !== undefined &&
        (a.app_id = b("JSErrorPlatformColumns").app_id),
        b("JSErrorPlatformColumns").access_token !== undefined &&
          (a.access_token = b("JSErrorPlatformColumns").access_token);
    }
    function a(a) {
      g(a);
      h(a);
      var c = a.category || "onerror";
      b("ErrorSignal").logJSError(c, { error: a.name || a.message, extra: a });
    }
    d = b("JSErrorLoggingConfig").reportInterval;
    var i = d > 0 ? b("throttle")(a, d, null) : a;
    function c(a) {
      if (a.message && a.message.toLowerCase().startsWith("script error"))
        return;
      i(a);
    }
    b("ErrorUtils").addListener(c);
    e.exports = { defaultJSErrorHandler: c };
  },
  null,
);
__d(
  "XControllerURIBuilder",
  ["invariant", "URI", "gkx"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h(a, b) {
      "use strict";
      (this.$1 = a), (this.$2 = b), (this.$3 = {});
    }
    h.prototype.setInt = function (a, b) {
      "use strict";
      return this.__setParam(a, "Int", b);
    };
    h.prototype.setFBID = function (a, b) {
      "use strict";
      return this.__setParam(a, "FBID", b);
    };
    h.prototype.setFloat = function (a, b) {
      "use strict";
      return this.__setParam(a, "Float", b);
    };
    h.prototype.setString = function (a, b) {
      "use strict";
      return this.__setParam(a, "String", b);
    };
    h.prototype.setExists = function (a, b) {
      "use strict";
      b === !1 && (b = undefined);
      return this.__setParam(a, "Exists", b);
    };
    h.prototype.setBool = function (a, b) {
      "use strict";
      return this.__setParam(a, "Bool", b);
    };
    h.prototype.setEnum = function (a, b) {
      "use strict";
      return this.__setParam(a, "Enum", b);
    };
    h.prototype.setIntVector = function (a, b) {
      "use strict";
      return this.__setParam(a, "IntVector", b);
    };
    h.prototype.setIntKeyset = function (a, b) {
      "use strict";
      return this.__setParam(a, "IntKeyset", b);
    };
    h.prototype.setIntSet = function (a, b) {
      "use strict";
      return this.__setParam(a, "IntSet", b.join(","));
    };
    h.prototype.setFloatVector = function (a, b) {
      "use strict";
      return this.__setParam(a, "FloatVector", b);
    };
    h.prototype.setFloatSet = function (a, b) {
      "use strict";
      return this.__setParam(a, "FloatSet", b.join(","));
    };
    h.prototype.setStringVector = function (a, b) {
      "use strict";
      return this.__setParam(a, "StringVector", b);
    };
    h.prototype.setStringKeyset = function (a, b) {
      "use strict";
      return this.__setParam(a, "StringKeyset", b);
    };
    h.prototype.setStringSet = function (a, b) {
      "use strict";
      return this.__setParam(a, "StringSet", b);
    };
    h.prototype.setFBIDVector = function (a, b) {
      "use strict";
      return this.__setParam(a, "FBIDVector", b);
    };
    h.prototype.setFBIDSet = function (a, b) {
      "use strict";
      return this.__setParam(a, "FBIDSet", b);
    };
    h.prototype.setFBIDKeyset = function (a, b) {
      "use strict";
      return this.__setParam(a, "FBIDKeyset", b);
    };
    h.prototype.setEnumVector = function (a, b) {
      "use strict";
      return this.__setParam(a, "EnumVector", b);
    };
    h.prototype.setEnumSet = function (a, b) {
      "use strict";
      return this.__setParam(a, "EnumSet", b);
    };
    h.prototype.setEnumKeyset = function (a, b) {
      "use strict";
      return this.__setParam(a, "EnumKeyset", b);
    };
    h.prototype.setIntToIntMap = function (a, b) {
      "use strict";
      return this.__setParam(a, "IntToIntMap", b);
    };
    h.prototype.setIntToFloatMap = function (a, b) {
      "use strict";
      return this.__setParam(a, "IntToFloatMap", b);
    };
    h.prototype.setIntToStringMap = function (a, b) {
      "use strict";
      return this.__setParam(a, "IntToStringMap", b);
    };
    h.prototype.setIntToBoolMap = function (a, b) {
      "use strict";
      return this.__setParam(a, "IntToBoolMap", b);
    };
    h.prototype.setStringToIntMap = function (a, b) {
      "use strict";
      return this.__setParam(a, "StringToIntMap", b);
    };
    h.prototype.setStringToFloatMap = function (a, b) {
      "use strict";
      return this.__setParam(a, "StringToFloatMap", b);
    };
    h.prototype.setStringToStringMap = function (a, b) {
      "use strict";
      return this.__setParam(a, "StringToStringMap", b);
    };
    h.prototype.setStringToNullableStringMap = function (a, b) {
      "use strict";
      return this.__setParam(a, "StringToNullableStringMap", b);
    };
    h.prototype.setStringToBoolMap = function (a, b) {
      "use strict";
      return this.__setParam(a, "StringToBoolMap", b);
    };
    h.prototype.setEnumToStringVectorMap = function (a, b) {
      "use strict";
      return this.__setParam(a, "EnumToStringVectorMap", b);
    };
    h.prototype.setEnumToBoolMap = function (a, b) {
      "use strict";
      return this.__setParam(a, "EnumToBoolMap", b);
    };
    h.prototype.setEnumToFBIDVectorMap = function (a, b) {
      "use strict";
      return this.__setParam(a, "EnumToFBIDVectorMap", b);
    };
    h.prototype.setHackType = function (a, b) {
      "use strict";
      return this.__setParam(a, "HackType", b);
    };
    h.prototype.setTypeAssert = function (a, b) {
      "use strict";
      return this.__setParam(a, "TypeAssert", b);
    };
    h.prototype.__validateRequiredParamsExistence = function () {
      "use strict";
      for (var a in this.$2)
        !this.$2[a].required ||
          Object.prototype.hasOwnProperty.call(this.$3, a) ||
          g(0);
    };
    h.prototype.setParams = function (a) {
      "use strict";
      for (var b in a) {
        this.__assertParamExists(b);
        var c = this.$2[b].type;
        this.__setParam(b, c, a[b]);
      }
      return this;
    };
    h.prototype.__assertParamExists = function (a) {
      "use strict";
      a in this.$2 || g(0);
    };
    h.prototype.__setParam = function (a, b, c) {
      "use strict";
      this.__assertParamExists(a);
      var d = this.$2[a].type;
      d === b || g(0);
      this.__setParamInt(a, c);
      return this;
    };
    h.prototype.__setParamInt = function (a, b) {
      "use strict";
      this.$3[a] = b;
    };
    h.prototype.getRequest = function (a) {
      "use strict";
      b("gkx")(
        "AT4miIiW4pJzE0dukYVRr93bo-U7aeRzegmes3xLz6J7QfAO9xBCVDCcWNxQBaSegngcbU8UJ8KqD-c2mDX0kNsMkP4Db418yITqzzh_hAbRIA",
      ) && (a = a.setReplaceTransportMarkers());
      return a.setURI(this.getURI());
    };
    h.prototype.getURI = function () {
      "use strict";
      __p && __p();
      this.__validateRequiredParamsExistence();
      var a = {},
        c = "",
        d = /^(.*)?\{(\?)?(\*)?(.+?)\}(.*)?$/,
        e = this.$1.split("/"),
        f = !1;
      for (var h = 0; h < e.length; h++) {
        var i = e[h];
        if (i === "") continue;
        var j = d.exec(i);
        if (!j) c += "/" + i;
        else {
          i = j[2] === "?";
          var k = j[4],
            l = this.$2[k];
          l || g(0);
          if (i && f) continue;
          if (this.$3[k] == null && i) {
            f = !0;
            continue;
          }
          this.$3[k] != null || g(0);
          l = j[1] ? j[1] : "";
          i = j[5] ? j[5] : "";
          c += "/" + l + this.$3[k] + i;
          a[k] = !0;
        }
      }
      this.$1.slice(-1) === "/" && (c += "/");
      c === "" && (c = "/");
      j = new (b("URI"))(c);
      for (var m in this.$3) {
        l = this.$3[m];
        if (!a[m] && l != null) {
          i = this.$2[m];
          j.addQueryData(m, i && i.type === "Exists" ? null : l);
        }
      }
      return j;
    };
    h.prototype.getLookasideURI = function () {
      "use strict";
      var a = "origincache.facebook.com";
      b("gkx")(
        "AT68bJwSI-83elN-7JSMMH9zt32KbiF6pW-XMlf6NViAJ3CbAk_16Vq8cK1tl1029_ApvFwINR8hmoci3nMKFTDhDCBp1wrvYQbOKq0pCjZpqA",
      ) && (a = "lookaside.internmc.facebook.com");
      return this.getURI().setDomain(a).setProtocol("https");
    };
    h.create = function (a, b) {
      return h.bind(null, a, b);
    };
    e.exports = h;
  },
  18,
);
__d(
  "XRequest",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = function a(b, c, d) {
      __p && __p();
      var e;
      switch (b) {
        case "Bool":
          e = (c && c !== "false" && c !== "0") || !1;
          break;
        case "Int":
          e = c.toString();
          /-?\d+/.test(e) || g(0);
          break;
        case "Float":
          e = parseFloat(c, 10);
          isNaN(e) && g(0);
          break;
        case "FBID":
          e = c.toString();
          for (var f = 0; f < e.length; ++f) {
            var h = e.charCodeAt(f);
            (48 <= h && h <= 57) || g(0);
          }
          break;
        case "String":
          e = c.toString();
          break;
        case "Enum":
          d === 0
            ? (e = a("Int", c, null))
            : d === 1
            ? (e = a("String", c, null))
            : d === 2
            ? (e = c)
            : g(0);
          break;
        default:
          if ((h = /^Nullable(\w+)$/.exec(b)))
            c === null ? (e = null) : (e = a(h[1], c, d));
          else if ((f = /^(\w+)Vector$/.exec(b))) {
            !Array.isArray(c)
              ? ((e = c.toString()), (e = e === "" ? [] : e.split(",")))
              : (e = c);
            var i = f[1];
            typeof i === "string" || g(0);
            e = e.map(function (b) {
              return a(i, b, d && d.member);
            });
          } else if ((h = /^(\w+)(Set|Keyset)$/.exec(b)))
            !Array.isArray(c)
              ? ((e = c.toString()), (e = e === "" ? [] : e.split(",")))
              : (e = c),
              (e = e.reduce(function (a, b) {
                a[b] = b;
                return a;
              }, {})),
              (i = h[1]),
              typeof i === "string" || g(0),
              (e = Object.keys(e).map(function (b) {
                return a(i, e[b], d && d.member);
              }));
          else if ((f = /^(\w+)To(\w+)Map$/.exec(b))) {
            e = {};
            var j = f[1],
              k = f[2];
            (typeof j === "string" && typeof k === "string") || g(0);
            Object.keys(c).forEach(function (b) {
              e[a(j, b, d && d.key)] = a(k, c[b], d && d.value);
            });
          } else g(0);
      }
      return e;
    };
    function a(a, b, c) {
      "use strict";
      __p && __p();
      this.$1 = b;
      this.$2 = babelHelpers["extends"]({}, c.getQueryData());
      b = a.split("/").filter(function (a) {
        return a;
      });
      a = c
        .getPath()
        .split("/")
        .filter(function (a) {
          return a;
        });
      for (var c = 0; c < b.length; ++c) {
        var d = /^\{(\?)?(\*)?(\w+)\}$/.exec(b[c]);
        if (!d) {
          b[c] === a[c] || g(0);
          continue;
        }
        var e = !!d[1],
          f = !!d[2];
        !f || c === b.length - 1 || g(0);
        d = d[3];
        Object.prototype.hasOwnProperty.call(this.$1, d) || g(0);
        this.$1[d].required ? e && g(0) : e || g(0);
        a[c] && (this.$2[d] = f ? a.slice(c).join("/") : a[c]);
      }
      Object.keys(this.$1).forEach(function (a) {
        !this.$1[a].required ||
          Object.prototype.hasOwnProperty.call(this.$2, a) ||
          g(0);
      }, this);
    }
    a.prototype.getExists = function (a) {
      "use strict";
      return this.$2[a] !== undefined;
    };
    a.prototype.getBool = function (a) {
      "use strict";
      return this.$3(a, "Bool");
    };
    a.prototype.getInt = function (a) {
      "use strict";
      return this.$3(a, "Int");
    };
    a.prototype.getFloat = function (a) {
      "use strict";
      return this.$3(a, "Float");
    };
    a.prototype.getFBID = function (a) {
      "use strict";
      return this.$3(a, "FBID");
    };
    a.prototype.getString = function (a) {
      "use strict";
      return this.$3(a, "String");
    };
    a.prototype.getEnum = function (a) {
      "use strict";
      return this.$3(a, "Enum");
    };
    a.prototype.getOptionalInt = function (a) {
      "use strict";
      return this.$4(a, "Int");
    };
    a.prototype.getOptionalFloat = function (a) {
      "use strict";
      return this.$4(a, "Float");
    };
    a.prototype.getOptionalFBID = function (a) {
      "use strict";
      return this.$4(a, "FBID");
    };
    a.prototype.getOptionalString = function (a) {
      "use strict";
      return this.$4(a, "String");
    };
    a.prototype.getOptionalEnum = function (a) {
      "use strict";
      return this.$4(a, "Enum");
    };
    a.prototype.getIntVector = function (a) {
      "use strict";
      return this.$3(a, "IntVector");
    };
    a.prototype.getFloatVector = function (a) {
      "use strict";
      return this.$3(a, "FloatVector");
    };
    a.prototype.getFBIDVector = function (a) {
      "use strict";
      return this.$3(a, "FBIDVector");
    };
    a.prototype.getStringVector = function (a) {
      "use strict";
      return this.$3(a, "StringVector");
    };
    a.prototype.getEnumVector = function (a) {
      "use strict";
      return this.$3(a, "EnumVector");
    };
    a.prototype.getOptionalIntVector = function (a) {
      "use strict";
      return this.$4(a, "IntVector");
    };
    a.prototype.getOptionalFloatVector = function (a) {
      "use strict";
      return this.$4(a, "FloatVector");
    };
    a.prototype.getOptionalFBIDVector = function (a) {
      "use strict";
      return this.$4(a, "FBIDVector");
    };
    a.prototype.getOptionalStringVector = function (a) {
      "use strict";
      return this.$4(a, "StringVector");
    };
    a.prototype.getOptionalEnumVector = function (a) {
      "use strict";
      return this.$4(a, "EnumVector");
    };
    a.prototype.getIntSet = function (a) {
      "use strict";
      return this.$3(a, "IntSet");
    };
    a.prototype.getFBIDSet = function (a) {
      "use strict";
      return this.$3(a, "FBIDSet");
    };
    a.prototype.getFBIDKeyset = function (a) {
      "use strict";
      return this.$3(a, "FBIDKeyset");
    };
    a.prototype.getStringSet = function (a) {
      "use strict";
      return this.$3(a, "StringSet");
    };
    a.prototype.getEnumKeyset = function (a) {
      "use strict";
      return this.$3(a, "EnumKeyset");
    };
    a.prototype.getOptionalIntSet = function (a) {
      "use strict";
      return this.$4(a, "IntSet");
    };
    a.prototype.getOptionalFBIDSet = function (a) {
      "use strict";
      return this.$4(a, "FBIDSet");
    };
    a.prototype.getOptionalFBIDKeyset = function (a) {
      "use strict";
      return this.$4(a, "FBIDKeyset");
    };
    a.prototype.getOptionalStringSet = function (a) {
      "use strict";
      return this.$4(a, "StringSet");
    };
    a.prototype.getEnumToBoolMap = function (a) {
      "use strict";
      return this.$3(a, "EnumToBoolMap");
    };
    a.prototype.getEnumToEnumMap = function (a) {
      "use strict";
      return this.$3(a, "EnumToEnumMap");
    };
    a.prototype.getEnumToFloatMap = function (a) {
      "use strict";
      return this.$3(a, "EnumToFloatMap");
    };
    a.prototype.getEnumToIntMap = function (a) {
      "use strict";
      return this.$3(a, "EnumToIntMap");
    };
    a.prototype.getEnumToStringMap = function (a) {
      "use strict";
      return this.$3(a, "EnumToStringMap");
    };
    a.prototype.getIntToBoolMap = function (a) {
      "use strict";
      return this.$3(a, "IntToBoolMap");
    };
    a.prototype.getIntToEnumMap = function (a) {
      "use strict";
      return this.$3(a, "IntToEnumMap");
    };
    a.prototype.getIntToFloatMap = function (a) {
      "use strict";
      return this.$3(a, "IntToFloatMap");
    };
    a.prototype.getIntToIntMap = function (a) {
      "use strict";
      return this.$3(a, "IntToIntMap");
    };
    a.prototype.getIntToStringMap = function (a) {
      "use strict";
      return this.$3(a, "IntToStringMap");
    };
    a.prototype.getStringToBoolMap = function (a) {
      "use strict";
      return this.$3(a, "StringToBoolMap");
    };
    a.prototype.getStringToEnumMap = function (a) {
      "use strict";
      return this.$3(a, "StringToEnumMap");
    };
    a.prototype.getStringToFloatMap = function (a) {
      "use strict";
      return this.$3(a, "StringToFloatMap");
    };
    a.prototype.getStringToIntMap = function (a) {
      "use strict";
      return this.$3(a, "StringToIntMap");
    };
    a.prototype.getStringToStringMap = function (a) {
      "use strict";
      return this.$3(a, "StringToStringMap");
    };
    a.prototype.getOptionalEnumToBoolMap = function (a) {
      "use strict";
      return this.$4(a, "EnumToBoolMap");
    };
    a.prototype.getOptionalEnumToEnumMap = function (a) {
      "use strict";
      return this.$4(a, "EnumToEnumMap");
    };
    a.prototype.getOptionalEnumToFloatMap = function (a) {
      "use strict";
      return this.$4(a, "EnumToFloatMap");
    };
    a.prototype.getOptionalEnumToIntMap = function (a) {
      "use strict";
      return this.$4(a, "EnumToIntMap");
    };
    a.prototype.getOptionalEnumToStringMap = function (a) {
      "use strict";
      return this.$4(a, "EnumToStringMap");
    };
    a.prototype.getOptionalIntToBoolMap = function (a) {
      "use strict";
      return this.$4(a, "IntToBoolMap");
    };
    a.prototype.getOptionalIntToEnumMap = function (a) {
      "use strict";
      return this.$4(a, "IntToEnumMap");
    };
    a.prototype.getOptionalIntToFloatMap = function (a) {
      "use strict";
      return this.$4(a, "IntToFloatMap");
    };
    a.prototype.getOptionalIntToIntMap = function (a) {
      "use strict";
      return this.$4(a, "IntToIntMap");
    };
    a.prototype.getOptionalIntToStringMap = function (a) {
      "use strict";
      return this.$4(a, "IntToStringMap");
    };
    a.prototype.getOptionalStringToBoolMap = function (a) {
      "use strict";
      return this.$4(a, "StringToBoolMap");
    };
    a.prototype.getOptionalStringToEnumMap = function (a) {
      "use strict";
      return this.$4(a, "StringToEnumMap");
    };
    a.prototype.getOptionalStringToFloatMap = function (a) {
      "use strict";
      return this.$4(a, "StringToFloatMap");
    };
    a.prototype.getOptionalStringToIntMap = function (a) {
      "use strict";
      return this.$4(a, "StringToIntMap");
    };
    a.prototype.getOptionalStringToStringMap = function (a) {
      "use strict";
      return this.$4(a, "StringToStringMap");
    };
    a.prototype.getEnumToNullableEnumMap = function (a) {
      "use strict";
      return this.$3(a, "EnumToNullableEnumMap");
    };
    a.prototype.getEnumToNullableFloatMap = function (a) {
      "use strict";
      return this.$3(a, "EnumToNullableFloatMap");
    };
    a.prototype.getEnumToNullableIntMap = function (a) {
      "use strict";
      return this.$3(a, "EnumToNullableIntMap");
    };
    a.prototype.getEnumToNullableStringMap = function (a) {
      "use strict";
      return this.$3(a, "EnumToNullableStringMap");
    };
    a.prototype.getIntToNullableEnumMap = function (a) {
      "use strict";
      return this.$3(a, "IntToNullableEnumMap");
    };
    a.prototype.getIntToNullableFloatMap = function (a) {
      "use strict";
      return this.$3(a, "IntToNullableFloatMap");
    };
    a.prototype.getIntToNullableIntMap = function (a) {
      "use strict";
      return this.$3(a, "IntToNullableIntMap");
    };
    a.prototype.getIntToNullableStringMap = function (a) {
      "use strict";
      return this.$3(a, "IntToNullableStringMap");
    };
    a.prototype.getStringToNullableEnumMap = function (a) {
      "use strict";
      return this.$3(a, "StringToNullableEnumMap");
    };
    a.prototype.getStringToNullableFloatMap = function (a) {
      "use strict";
      return this.$3(a, "StringToNullableFloatMap");
    };
    a.prototype.getStringToNullableIntMap = function (a) {
      "use strict";
      return this.$3(a, "StringToNullableIntMap");
    };
    a.prototype.getStringToNullableStringMap = function (a) {
      "use strict";
      return this.$3(a, "StringToNullableStringMap");
    };
    a.prototype.getOptionalEnumToNullableEnumMap = function (a) {
      "use strict";
      return this.$4(a, "EnumToNullableEnumMap");
    };
    a.prototype.getOptionalEnumToNullableFloatMap = function (a) {
      "use strict";
      return this.$4(a, "EnumToNullableFloatMap");
    };
    a.prototype.getOptionalEnumToNullableIntMap = function (a) {
      "use strict";
      return this.$4(a, "EnumToNullableIntMap");
    };
    a.prototype.getOptionalEnumToNullableStringMap = function (a) {
      "use strict";
      return this.$4(a, "EnumToNullableStringMap");
    };
    a.prototype.getOptionalIntToNullableEnumMap = function (a) {
      "use strict";
      return this.$4(a, "IntToNullableEnumMap");
    };
    a.prototype.getOptionalIntToNullableFloatMap = function (a) {
      "use strict";
      return this.$4(a, "IntToNullableFloatMap");
    };
    a.prototype.getOptionalIntToNullableIntMap = function (a) {
      "use strict";
      return this.$4(a, "IntToNullableIntMap");
    };
    a.prototype.getOptionalIntToNullableStringMap = function (a) {
      "use strict";
      return this.$4(a, "IntToNullableStringMap");
    };
    a.prototype.getOptionalStringToNullableEnumMap = function (a) {
      "use strict";
      return this.$4(a, "StringToNullableEnumMap");
    };
    a.prototype.getOptionalStringToNullableFloatMap = function (a) {
      "use strict";
      return this.$4(a, "StringToNullableFloatMap");
    };
    a.prototype.getOptionalStringToNullableIntMap = function (a) {
      "use strict";
      return this.$4(a, "StringToNullableIntMap");
    };
    a.prototype.getOptionalStringToNullableStringMap = function (a) {
      "use strict";
      return this.$4(a, "StringToNullableStringMap");
    };
    a.prototype.$3 = function (a, b) {
      "use strict";
      this.$5(a, b);
      var c = this.$1[a];
      if (
        !Object.prototype.hasOwnProperty.call(this.$2, a) &&
        c.defaultValue != null
      ) {
        c.required && g(0);
        return h(b, c.defaultValue, c.enumType);
      }
      c.required || b === "Bool" || c.defaultValue != null || g(0);
      return h(b, this.$2[a], c.enumType);
    };
    a.prototype.$4 = function (a, b) {
      "use strict";
      this.$5(a, b);
      var c = this.$1[a];
      c.required && g(0);
      c.defaultValue && g(0);
      return Object.prototype.hasOwnProperty.call(this.$2, a)
        ? h(b, this.$2[a], c.enumType)
        : null;
    };
    a.prototype.$5 = function (a, b) {
      "use strict";
      Object.prototype.hasOwnProperty.call(this.$1, a) || g(0),
        this.$1[a].type === b || g(0);
    };
    e.exports = a;
  },
  null,
);
__d(
  "XController",
  ["XControllerURIBuilder", "XRequest"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, b) {
      "use strict";
      (this.$1 = a), (this.$2 = b);
    }
    g.prototype.getURIBuilder = function (a) {
      "use strict";
      __p && __p();
      var c = new (b("XControllerURIBuilder"))(this.$1, this.$2);
      if (a) {
        var d = this.getRequest(a);
        Object.keys(this.$2).forEach(function (a) {
          var b = this.$2[a],
            e = "";
          !b.required &&
            !Object.prototype.hasOwnProperty.call(b, "defaultValue") &&
            (e = "Optional");
          e = "get" + e + b.type;
          e = d[e](a);
          if (
            e == null ||
            (Object.prototype.hasOwnProperty.call(b, "defaultValue") &&
              e === b.defaultValue)
          )
            return;
          b = "set" + b.type;
          c[b](a, e);
        }, this);
      }
      return c;
    };
    g.prototype.getRequest = function (a) {
      "use strict";
      return new (b("XRequest"))(this.$1, this.$2, a);
    };
    g.create = function (a, b) {
      "use strict";
      return new g(a, b);
    };
    e.exports = g;
  },
  18,
);
__d(
  "XLynxAsyncCallbackController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/si/linkclick/ajax_callback/", {
      lynx_uri: { type: "String" },
    });
  },
  null,
);
__d(
  "FBLynxLogging",
  [
    "AsyncRequest",
    "AsyncResponse",
    "BanzaiODS",
    "XLynxAsyncCallbackController",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      log: function (a) {
        var c = b("XLynxAsyncCallbackController").getURIBuilder().getURI();
        new (b("AsyncRequest"))(c)
          .setData({ lynx_uri: a })
          .setErrorHandler(function (a) {
            a = a.getError();
            b("BanzaiODS").bumpEntityKey(
              "linkshim",
              "click_log.post.fail." + a,
            );
          })
          .setTransportErrorHandler(function (a) {
            a = a.getError();
            b("BanzaiODS").bumpEntityKey(
              "linkshim",
              "click_log.post.transport_fail." + a,
            );
          })
          .send();
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "isLinkshimURI",
  ["isBonfireURI", "isFacebookURI", "isMessengerDotComURI"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var c = a.getPath();
      return (c === "/l.php" ||
        c.indexOf("/si/ajax/l/") === 0 ||
        c.indexOf("/l/") === 0 ||
        c.indexOf("l/") === 0) &&
        (b("isFacebookURI")(a) ||
          b("isMessengerDotComURI")(a) ||
          b("isBonfireURI")(a))
        ? !0
        : !1;
    }
    e.exports = a;
  },
  null,
);
__d(
  "FBLynxBase",
  ["FBLynxLogging", "LinkshimHandlerConfig", "URI", "$", "isLinkshimURI"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    function g(a) {
      if (!b("isLinkshimURI")(a)) return null;
      a = a.getQueryData().u;
      return !a ? null : a;
    }
    var h = {
      logAsyncClick: function (a) {
        h.swapLinkWithUnshimmedLink(a);
        a = a.getAttribute("data-lynx-uri");
        if (!a) return;
        b("FBLynxLogging").log(a);
      },
      originReferrerPolicyClick: function (a) {
        var c = b("$")("meta_referrer");
        c.content = b("LinkshimHandlerConfig").switched_meta_referrer_policy;
        h.logAsyncClick(a);
        setTimeout(function () {
          c.content = b("LinkshimHandlerConfig").default_meta_referrer_policy;
        }, 100);
      },
      swapLinkWithUnshimmedLink: function (a) {
        var c = a.href,
          d = g(new (b("URI"))(c));
        if (!d) return;
        a.setAttribute("data-lynx-uri", c);
        a.href = d;
      },
      revertSwapIfLynxURIPresent: function (a) {
        var b = a.getAttribute("data-lynx-uri");
        if (!b) return;
        a.removeAttribute("data-lynx-uri");
        a.href = b;
      },
    };
    e.exports = h;
  },
  null,
);
__d(
  "FBLynx",
  ["Event", "FBLynxBase", "LinkshimHandlerConfig", "Parent"],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = {
      alreadySetup: !1,
      setupDelegation: function (a) {
        __p && __p();
        a === void 0 && (a = !1);
        if (document.body == null) {
          if (a) return;
          setTimeout(function () {
            g.setupDelegation(!0);
          }, 100);
          return;
        }
        if (g.alreadySetup) return;
        g.alreadySetup = !0;
        var c = function (event) {
          __p && __p();
          var a = g.getMaybeLynxLink(event.target);
          if (!a) return;
          var c = a[0];
          a = a[1];
          switch (c) {
            case "async":
            case "asynclazy":
              b("FBLynxBase").logAsyncClick(a);
              break;
            case "origin":
              b("FBLynxBase").originReferrerPolicyClick(a);
              break;
            case "hover":
              g.hoverClick(a);
              break;
          }
        };
        b("Event").listen(document.body, "click", c);
        b("LinkshimHandlerConfig").middle_click_requires_event &&
          b("Event").listen(document.body, "mouseup", function (event) {
            event.button == 1 && c(event);
          });
        b("Event").listen(document.body, "mouseover", function (event) {
          var a = g.getMaybeLynxLink(event.target);
          if (!a) return;
          var b = a[0];
          a = a[1];
          switch (b) {
            case "async":
            case "asynclazy":
            case "origin":
            case "hover":
              g.mouseover(a);
              break;
          }
        });
        b("Event").listen(document.body, "contextmenu", function (event) {
          var a = g.getMaybeLynxLink(event.target);
          if (!a) return;
          var b = a[0];
          a = a[1];
          switch (b) {
            case "async":
            case "hover":
            case "origin":
              g.contextmenu(a);
              break;
            case "asynclazy":
              break;
          }
        });
      },
      getMaybeLynxLink: function (a) {
        a = b("Parent").byAttribute(a, "data-lynx-mode");
        if (a instanceof HTMLAnchorElement) {
          var c = a.getAttribute("data-lynx-mode");
          switch (c) {
            case "async":
            case "asynclazy":
            case "hover":
            case "origin":
              return [c, a];
            default:
              return null;
          }
        }
        return null;
      },
      hoverClick: function (a) {
        b("FBLynxBase").revertSwapIfLynxURIPresent(a);
      },
      mouseover: function (a) {
        b("FBLynxBase").swapLinkWithUnshimmedLink(a);
      },
      contextmenu: function (a) {
        b("FBLynxBase").revertSwapIfLynxURIPresent(a);
      },
    };
    e.exports = g;
  },
  null,
);
__d(
  "BanzaiLogger",
  ["Banzai"],
  function (a, b, c, d, e, f) {
    var g = "logger";
    function a(a) {
      return {
        log: function (c, d) {
          b("Banzai").post(h._getRoute(c), d, a);
        },
        registerToSendWithBeacon: function (a, c, d, e) {
          b("Banzai").registerToSendWithBeacon(h._getRoute(a), c, d, e);
        },
        _getRoute: function (a) {
          return g + ":" + a;
        },
      };
    }
    var h = a();
    h.create = a;
    e.exports = h;
  },
  null,
);
__d(
  "FbtLoggerImpl",
  ["BanzaiLogger", "ScriptPath"],
  function (a, b, c, d, e, f) {
    a = {
      logImpression: function (a) {
        b("BanzaiLogger").log("FbtImpressionsLoggerConfig", {
          hash: a,
          sample_rate: 1,
          script_path: b("ScriptPath").getScriptPath(),
        });
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType01",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType02",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 0 || a === 1) return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType03",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 0 || a === 1) return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType04",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a >= 0 && a <= 1) return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType05",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 1) return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType06",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 0 || a === 1) return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType07",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a >= 0 && a <= 1) return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType08",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if ((a >= 0 && a <= 1) || (a >= 11 && a <= 99))
          return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType09",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 1) return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType10",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 1) return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType11",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a % 10 === 1 && a % 100 !== 11)
          return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType12",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a % 10 === 1) return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType13",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (
          a === 1 ||
          a === 2 ||
          a === 3 ||
          (a % 10 !== 4 && a % 10 !== 6 && a % 10 !== 9)
        )
          return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType14",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a % 10 === 0 || (a % 100 >= 11 && a % 100 <= 19))
          return b("IntlVariations").NUMBER_ZERO;
        else if (a % 10 === 1 && a % 100 !== 11)
          return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType15",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 0) return b("IntlVariations").NUMBER_ZERO;
        else if (a === 1) return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType16",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 0) return b("IntlVariations").NUMBER_ZERO;
        else if (a === 1) return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType17",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 1) return b("IntlVariations").NUMBER_ONE;
        else if (a === 2) return b("IntlVariations").NUMBER_TWO;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType18",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 0 || a === 1) return b("IntlVariations").NUMBER_ONE;
        else if (a >= 2 && a <= 10) return b("IntlVariations").NUMBER_FEW;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType19",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 1) return b("IntlVariations").NUMBER_ONE;
        else if (a === 0 || (a !== 1 && a % 100 >= 1 && a % 100 <= 19))
          return b("IntlVariations").NUMBER_FEW;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType20",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a % 10 === 1 && a % 100 !== 11)
          return b("IntlVariations").NUMBER_ONE;
        else if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 12 || a % 100 > 14))
          return b("IntlVariations").NUMBER_FEW;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType21",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 1 || a === 11) return b("IntlVariations").NUMBER_ONE;
        else if (a === 2 || a === 12) return b("IntlVariations").NUMBER_TWO;
        else if ((a >= 3 && a <= 10) || (a >= 13 && a <= 19))
          return b("IntlVariations").NUMBER_FEW;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType22",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a % 100 === 1) return b("IntlVariations").NUMBER_ONE;
        else if (a % 100 === 2) return b("IntlVariations").NUMBER_TWO;
        else if (a % 100 >= 3 && a % 100 <= 4)
          return b("IntlVariations").NUMBER_FEW;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType23",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a % 100 === 1) return b("IntlVariations").NUMBER_ONE;
        else if (a % 100 === 2) return b("IntlVariations").NUMBER_TWO;
        else if (a % 100 >= 3 && a % 100 <= 4)
          return b("IntlVariations").NUMBER_FEW;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType24",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 1) return b("IntlVariations").NUMBER_ONE;
        else if (a === 2) return b("IntlVariations").NUMBER_TWO;
        else if ((a < 0 || a > 10) && a % 10 === 0)
          return b("IntlVariations").NUMBER_MANY;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType25",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 1) return b("IntlVariations").NUMBER_ONE;
        else if (a >= 2 && a <= 4) return b("IntlVariations").NUMBER_FEW;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType26",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 1) return b("IntlVariations").NUMBER_ONE;
        else if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 12 || a % 100 > 14))
          return b("IntlVariations").NUMBER_FEW;
        else return b("IntlVariations").NUMBER_MANY;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType27",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a % 10 === 1 && a % 100 !== 11)
          return b("IntlVariations").NUMBER_ONE;
        else if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 12 || a % 100 > 14))
          return b("IntlVariations").NUMBER_FEW;
        else return b("IntlVariations").NUMBER_MANY;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType28",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a % 10 === 1 && (a % 100 < 11 || a % 100 > 19))
          return b("IntlVariations").NUMBER_ONE;
        else if (a % 10 >= 2 && a % 10 <= 9 && (a % 100 < 11 || a % 100 > 19))
          return b("IntlVariations").NUMBER_FEW;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType29",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 1) return b("IntlVariations").NUMBER_ONE;
        else if (a === 0 || (a % 100 >= 2 && a % 100 <= 10))
          return b("IntlVariations").NUMBER_FEW;
        else if (a % 100 >= 11 && a % 100 <= 19)
          return b("IntlVariations").NUMBER_MANY;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType30",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a % 10 === 1 && a % 100 !== 11)
          return b("IntlVariations").NUMBER_ONE;
        else if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 12 || a % 100 > 14))
          return b("IntlVariations").NUMBER_FEW;
        else return b("IntlVariations").NUMBER_MANY;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType31",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      getNumberVariationType: function (a) {
        if (a % 10 === 1 && a % 100 !== 11 && a % 100 !== 71 && a % 100 !== 91)
          return b("IntlVariations").NUMBER_ONE;
        else if (
          a % 10 === 2 &&
          a % 100 !== 12 &&
          a % 100 !== 72 &&
          a % 100 !== 92
        )
          return b("IntlVariations").NUMBER_TWO;
        else if (
          ((a % 10 >= 3 && a % 10 <= 4) || a % 10 === 9) &&
          (a % 100 < 10 || a % 100 > 19) &&
          (a % 100 < 70 || a % 100 > 79) &&
          (a % 100 < 90 || a % 100 > 99)
        )
          return b("IntlVariations").NUMBER_FEW;
        else if (a !== 0 && a % 1e6 === 0)
          return b("IntlVariations").NUMBER_MANY;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType32",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      getNumberVariationType: function (a) {
        if (a === 1) return b("IntlVariations").NUMBER_ONE;
        else if (a === 2) return b("IntlVariations").NUMBER_TWO;
        else if (a >= 3 && a <= 6) return b("IntlVariations").NUMBER_FEW;
        else if (a >= 7 && a <= 10) return b("IntlVariations").NUMBER_MANY;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType33",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a % 10 === 1) return b("IntlVariations").NUMBER_ONE;
        else if (a % 10 === 2) return b("IntlVariations").NUMBER_TWO;
        else if (
          a % 100 === 0 ||
          a % 100 === 20 ||
          a % 100 === 40 ||
          a % 100 === 60 ||
          a % 100 === 80
        )
          return b("IntlVariations").NUMBER_FEW;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType34",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      getNumberVariationType: function (a) {
        __p && __p();
        if (a === 0) return b("IntlVariations").NUMBER_ZERO;
        else if (a === 1) return b("IntlVariations").NUMBER_ONE;
        else if (a === 2) return b("IntlVariations").NUMBER_TWO;
        else if (a % 100 >= 3 && a % 100 <= 10)
          return b("IntlVariations").NUMBER_FEW;
        else if (a % 100 >= 11 && a % 100 <= 99)
          return b("IntlVariations").NUMBER_MANY;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType35",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      getNumberVariationType: function (a) {
        __p && __p();
        if (a === 0) return b("IntlVariations").NUMBER_ZERO;
        else if (a === 1) return b("IntlVariations").NUMBER_ONE;
        else if (a === 2) return b("IntlVariations").NUMBER_TWO;
        else if (a === 3) return b("IntlVariations").NUMBER_FEW;
        else if (a === 6) return b("IntlVariations").NUMBER_MANY;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType36",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 0 || a === 1) return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType37",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 1) return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType38",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 0 || a === 1) return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType39",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType40",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 1) return b("IntlVariations").NUMBER_ONE;
        else if (a === 2) return b("IntlVariations").NUMBER_TWO;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType41",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a % 10 === 1 && a % 100 !== 11)
          return b("IntlVariations").NUMBER_ONE;
        else return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType42",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        return b("IntlVariations").NUMBER_OTHER;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "IntlCLDRNumberType43",
  ["IntlVariations"],
  function (a, b, c, d, e, f) {
    a = {
      getNumberVariationType: function (a) {
        if (a === 1) return b("IntlVariations").NUMBER_ONE;
        else if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 12 || a % 100 > 14))
          return b("IntlVariations").NUMBER_FEW;
        else return b("IntlVariations").NUMBER_MANY;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  "PluginXDReady",
  ["Arbiter", "UnverifiedXD"],
  function (a, b, c, d, e, f) {
    c = {
      handleMessage: function (a) {
        if (!a.method) return;
        try {
          b("Arbiter").inform(
            "Connect.Unsafe." + a.method,
            JSON.parse(a.params),
            b("Arbiter").BEHAVIOR_PERSISTENT,
          );
        } catch (a) {}
      },
    };
    a.XdArbiter = c;
    b("UnverifiedXD").send({ xd_action: "plugin_ready", name: window.name });
    e.exports = null;
  },
  null,
);
__d(
  "legacy:bootloader",
  ["Bootloader"],
  function (a, b, c, d, e, f) {
    a.Bootloader = b("Bootloader");
  },
  19,
);
__d(
  "LinkshimAsyncLink",
  ["AsyncSignal", "DOM", "LinkshimHandlerConfig", "UserAgent_DEPRECATED", "$"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      swap: function (a, c) {
        var d = b("UserAgent_DEPRECATED").ie() <= 8;
        if (d) {
          var e = b("DOM").create("wbr", {}, null);
          b("DOM").appendContent(a, e);
        }
        a.href = c;
        d && b("DOM").remove(e);
      },
      referrer_log: function (a, c, d) {
        var e = b("$")("meta_referrer");
        e.content = b("LinkshimHandlerConfig").switched_meta_referrer_policy;
        g.swap(a, c);
        setTimeout(function () {
          (e.content = b("LinkshimHandlerConfig").default_meta_referrer_policy),
            new (b("AsyncSignal"))(d, {}).send();
        }, 100);
      },
    };
    e.exports = g;
  },
  null,
);
__d(
  "legacy:dom-asynclinkshim",
  ["LinkshimAsyncLink"],
  function (a, b, c, d, e, f) {
    a.LinkshimAsyncLink = b("LinkshimAsyncLink");
  },
  3,
);
__d(
  "lowerDomain",
  ["lowerFacebookDomain"],
  function (a, b, c, d, e, f) {
    document.domain.toLowerCase().match(/(^|\.)facebook\..*/) &&
      b("lowerFacebookDomain")();
  },
  18,
);
__d(
  "markJSEnabled",
  [],
  function (a, b, c, d, e, f) {
    a = document.documentElement;
    a.className = a.className.replace("no_js", "");
  },
  18,
);
__d(
  "wait_for_load",
  ["Run"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function c(a, c, d) {
      __p && __p();
      d = d.bind(a, c);
      if (window.domready) return d();
      switch ((c || event).type) {
        case "load":
        case "focus":
          b("Run").onAfterLoad(d);
          return;
        case "click":
          var e = a.style,
            f = document.body.style;
          e.cursor = f.cursor = "progress";
          b("Run").onAfterLoad(function () {
            (e.cursor = f.cursor = ""),
              a.tagName.toLowerCase() == "a"
                ? !1 !== d() && a.href && (window.location.href = a.href)
                : a.click && a.click();
          });
          break;
      }
      return !1;
    }
    a.wait_for_load = c;
  },
  19,
);

__d(
  "Locale",
  ["ExecutionEnvironment", "SiteData"],
  function (a, b, c, d, e, f) {
    function a() {
      if (!b("ExecutionEnvironment").canUseDOM) return !1;
      else return b("SiteData").is_rtl;
    }
    e.exports = { isRTL: a };
  },
  null,
);
__d(
  "getOffsetParent",
  ["Style"],
  function (a, b, c, d, e, f) {
    function g(a) {
      a = a.parentNode;
      if (!a || a === document.documentElement) return document.documentElement;
      return b("Style").get(a, "position") !== "static"
        ? a
        : a === document.body
        ? document.documentElement
        : g(a);
    }
    e.exports = g;
  },
  null,
);
__d(
  "PluginResize",
  ["Locale", "Log", "UnverifiedXD", "getOffsetParent", "getStyleProperty"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      a = a || document.body;
      var c = 0,
        d = b("getOffsetParent")(a);
      b("Locale").isRTL() && d
        ? (c = d.offsetWidth - a.offsetLeft - a.offsetWidth)
        : b("Locale").isRTL() || (c = a.offsetLeft);
      return h(a) + c;
    }
    function h(a) {
      return (
        Math.ceil(parseFloat(b("getStyleProperty")(a, "width"))) ||
        a.offsetWidth
      );
    }
    function i(a) {
      a = a || document.body;
      return a.offsetHeight + a.offsetTop;
    }
    function j(a, b, event) {
      (this.calcWidth = a || g),
        (this.calcHeight = b || i),
        (this.width = undefined),
        (this.height = undefined),
        (this.event = event || "resize");
    }
    Object.assign(j.prototype, {
      resize: function () {
        var a = this.calcWidth(),
          c = this.calcHeight();
        (a !== this.width || c !== this.height) &&
          (b("Log").debug(
            "Resizing Plugin: (%s, %s, %s, %s)",
            a,
            c,
            this.event,
          ),
          (this.width = a),
          (this.height = c),
          b("UnverifiedXD").send({ type: this.event, width: a, height: c }));
        return this;
      },
      auto: function (a) {
        setInterval(this.resize.bind(this), a || 250);
        return this;
      },
    });
    j.auto = function (a, event, b) {
      return new j(g.bind(null, a), i.bind(null, a), event).resize().auto(b);
    };
    j.autoHeight = function (a, b, event, c) {
      return new j(
        function () {
          return a;
        },
        i.bind(null, b),
        event,
      )
        .resize()
        .auto(c);
    };
    j.getElementWidth = h;
    e.exports = j;
  },
  null,
);
__d(
  "DOMControl",
  ["DataStore", "$"],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      "use strict";
      (this.root = b("$").fromIDOrElement(a)),
        (this.updating = !1),
        b("DataStore").set(a, "DOMControl", this);
    }
    a.prototype.getRoot = function () {
      "use strict";
      return this.root;
    };
    a.prototype.beginUpdate = function () {
      "use strict";
      if (this.updating) return !1;
      this.updating = !0;
      return !0;
    };
    a.prototype.endUpdate = function () {
      "use strict";
      this.updating = !1;
    };
    a.prototype.update = function (a) {
      "use strict";
      if (!this.beginUpdate()) return this;
      this.onupdate(a);
      this.endUpdate();
    };
    a.prototype.onupdate = function (a) {
      "use strict";
    };
    a.getInstance = function (a) {
      "use strict";
      return b("DataStore").get(a, "DOMControl");
    };
    e.exports = a;
  },
  null,
);
__d(
  "Input",
  ["CSS", "DOMControl", "DOMQuery"],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      isWhiteSpaceOnly: function (a) {
        return !/\S/.test(a || "");
      },
      isEmpty: function (a) {
        return g.isWhiteSpaceOnly(a.value);
      },
      getValue: function (a) {
        return g.isEmpty(a) ? "" : a.value;
      },
      getValueRaw: function (a) {
        return a.value;
      },
      setValue: function (a, c) {
        a.value = c || "";
        c = b("DOMControl").getInstance(a);
        c && c.resetHeight && c.resetHeight();
      },
      setPlaceholder: function (a, b) {
        a.setAttribute("aria-label", b), a.setAttribute("placeholder", b);
      },
      reset: function (a) {
        (a.value = ""), (a.style.height = "");
      },
      setSubmitOnEnter: function (a, c) {
        b("CSS").conditionClass(a, "enter_submit", c);
      },
      getSubmitOnEnter: function (a) {
        return b("CSS").hasClass(a, "enter_submit");
      },
      setMaxLength: function (a, b) {
        b > 0 ? a.setAttribute("maxlength", b) : a.removeAttribute("maxlength");
      },
    };
    e.exports = g;
  },
  null,
);
__d(
  "idx",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    function a(a, d) {
      try {
        return d(a);
      } catch (a) {
        if (a instanceof TypeError)
          if (b(a)) return null;
          else if (c(a)) return undefined;
        throw a;
      }
    }
    var g;
    function b(a) {
      a = a.message;
      g || (g = i("null"));
      return g.test(a);
    }
    var h;
    function c(a) {
      a = a.message;
      h || (h = i("undefined"));
      return h.test(a);
    }
    function i(a) {
      return new RegExp("^" + a + " | " + a + "$|^[^\\(]* " + a + " ");
    }
    e.exports = a;
  },
  null,
);
__d(
  "normalizeBoundingClientRect",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    function a(a, b) {
      a = a.ownerDocument.documentElement;
      var c = a ? a.clientLeft : 0;
      a = a ? a.clientTop : 0;
      var d = Math.round(b.left) - c;
      c = Math.round(b.right) - c;
      var e = Math.round(b.top) - a;
      b = Math.round(b.bottom) - a;
      return {
        left: d,
        right: c,
        top: e,
        bottom: b,
        width: c - d,
        height: b - e,
      };
    }
    e.exports = a;
  },
  null,
);
__d(
  "getElementRect",
  ["containsNode", "gkx", "normalizeBoundingClientRect"],
  function (a, b, c, d, e, f) {
    function a(a) {
      var c;
      c = b("gkx")(
        "AT7IsskI4XB9V3_ZpKFnRxAvs6BVPIgSDbDcq24b8ToUAOY2pCaSzuagN7f_cNx9vGp7vgNftn1_SRfogFUNGS0K",
      )
        ? (c = a) != null
          ? (c = c.ownerDocument) != null
            ? c.documentElement
            : c
          : c
        : a.ownerDocument.documentElement;
      return !a || !("getBoundingClientRect" in a) || !b("containsNode")(c, a)
        ? { left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0 }
        : b("normalizeBoundingClientRect")(a, a.getBoundingClientRect());
    }
    e.exports = a;
  },
  null,
);
__d(
  "getElementPosition",
  ["getElementRect"],
  function (a, b, c, d, e, f) {
    function a(a) {
      a = b("getElementRect")(a);
      return {
        x: a.left,
        y: a.top,
        width: a.right - a.left,
        height: a.bottom - a.top,
      };
    }
    e.exports = a;
  },
  null,
);
__d(
  "Form",
  [
    "DataStore",
    "DOM",
    "DOMQuery",
    "DTSG",
    "Input",
    "LSD",
    "PHPQuerySerializer",
    "Random",
    "URI",
    "getElementPosition",
    "isFacebookURI",
    "isNode",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = "FileList" in window,
      h = "FormData" in window;
    function i(a) {
      var c = {};
      b("PHPQuerySerializer")
        .serialize(a)
        .split("&")
        .forEach(function (a) {
          if (a) {
            a = /^([^=]*)(?:=(.*))?$/.exec(a);
            var d = b("URI").decodeComponent(a[1]),
              e = a[2] !== undefined;
            e = e ? b("URI").decodeComponent(a[2]) : null;
            c[d] = e;
          }
        });
      return c;
    }
    var j = {
      getInputs: function (a) {
        a === void 0 && (a = document);
        return [].concat(
          b("DOMQuery").scry(a, "input"),
          b("DOMQuery").scry(a, "select"),
          b("DOMQuery").scry(a, "textarea"),
          b("DOMQuery").scry(a, "button"),
        );
      },
      getInputsByName: function (a) {
        var b = {};
        j.getInputs(a).forEach(function (a) {
          var c = b[a.name];
          b[a.name] = typeof c === "undefined" ? a : [a].concat(c);
        });
        return b;
      },
      getSelectValue: function (a) {
        return a.options[a.selectedIndex].value;
      },
      setSelectValue: function (a, b) {
        for (var c = 0; c < a.options.length; ++c)
          if (a.options[c].value == b) {
            a.selectedIndex = c;
            break;
          }
      },
      getRadioValue: function (a) {
        for (var b = 0; b < a.length; b++) if (a[b].checked) return a[b].value;
        return null;
      },
      getElements: function (a) {
        return a.tagName == "FORM" && a.elements != a
          ? Array.from(a.elements)
          : j.getInputs(a);
      },
      getAttribute: function (a, b) {
        return (a.getAttributeNode(b) || {}).value || null;
      },
      setDisabled: function (a, c) {
        j.getElements(a).forEach(function (a) {
          if (a.disabled !== undefined) {
            var d = b("DataStore").get(a, "origDisabledState");
            c
              ? (d === undefined &&
                  b("DataStore").set(a, "origDisabledState", a.disabled),
                (a.disabled = c))
              : d === !1 && (a.disabled = !1);
          }
        });
      },
      forEachValue: function (a, c, d) {
        __p && __p();
        j.getElements(a).forEach(function (a) {
          __p && __p();
          if (!a.name || a.disabled) return;
          if (a.type === "submit") return;
          if (a.type === "reset" || a.type === "button" || a.type === "image")
            return;
          if ((a.type === "radio" || a.type === "checkbox") && !a.checked)
            return;
          if (a.nodeName === "SELECT") {
            for (var c = 0, e = a.options.length; c < e; c++) {
              var f = a.options[c];
              f.selected && d("select", a.name, f.value);
            }
            return;
          }
          if (a.type === "file") {
            if (g) {
              f = a.files;
              for (var c = 0; c < f.length; c++) d("file", a.name, f.item(c));
            }
            return;
          }
          d(a.type, a.name, b("Input").getValue(a));
        }),
          c &&
            c.name &&
            c.type === "submit" &&
            b("DOMQuery").contains(a, c) &&
            b("DOMQuery").isNodeOfType(c, ["input", "button"]) &&
            d("submit", c.name, c.value);
      },
      createFormData: function (a, c) {
        __p && __p();
        if (!h) return null;
        var d = new FormData();
        if (a)
          if (b("isNode")(a))
            j.forEachValue(a, c, function (b, a, c) {
              d.append(a, c);
            });
          else {
            c = i(a);
            for (var e in c) c[e] == null ? d.append(e, "") : d.append(e, c[e]);
          }
        return d;
      },
      serialize: function (a, b) {
        var c = {};
        j.forEachValue(a, b, function (a, b, d) {
          if (a === "file") return;
          j._serializeHelper(c, b, d);
        });
        return j._serializeFix(c);
      },
      _serializeHelper: function (a, b, c) {
        __p && __p();
        var d = Object.prototype.hasOwnProperty,
          e = /([^\]]+)\[([^\]]*)\](.*)/.exec(b);
        if (e) {
          if (!a[e[1]] || !d.call(a, e[1])) {
            a[e[1]] = d = {};
            if (a[e[1]] !== d) return;
          }
          d = 0;
          if (e[2] === "") while (a[e[1]][d] !== undefined) d++;
          else d = e[2];
          e[3] === ""
            ? (a[e[1]][d] = c)
            : j._serializeHelper(a[e[1]], d.concat(e[3]), c);
        } else a[b] = c;
      },
      _serializeFix: function (a) {
        __p && __p();
        for (var b in a)
          a[b] instanceof Object && (a[b] = j._serializeFix(a[b]));
        var c = Object.keys(a);
        if (c.length === 0 || c.some(isNaN)) return a;
        c.sort(function (a, b) {
          return a - b;
        });
        var d = 0,
          e = c.every(function (a) {
            return +a === d++;
          });
        return e
          ? c.map(function (b) {
              return a[b];
            })
          : a;
      },
      post: function (a, c, d, e) {
        __p && __p();
        e === void 0 && (e = !0);
        a = new (b("URI"))(a);
        var f = document.createElement("form");
        f.action = a.toString();
        f.method = "POST";
        f.style.display = "none";
        var g = !b("isFacebookURI")(a);
        if (d) {
          if (g) {
            f.rel = "noopener";
            if (d === "_blank") {
              d = btoa(b("Random").uint32());
              var h = window.open("about:blank", d);
              h === undefined || (h.opener = null);
            }
          }
          f.target = d;
        }
        e &&
          !g &&
          a.getSubdomain() !== "apps" &&
          ((c.fb_dtsg = b("DTSG").getToken()),
          b("LSD").token && (c.lsd = b("LSD").token));
        j.createHiddenInputs(c, f);
        b("DOMQuery").getRootElement().appendChild(f);
        f.submit();
        return !1;
      },
      createHiddenInputs: function (a, c, d, e) {
        __p && __p();
        e === void 0 && (e = !1);
        d = d || {};
        a = i(a);
        for (var f in a) {
          if (a[f] === null) continue;
          if (d[f] && e) d[f].value = a[f];
          else {
            var g = b("DOM").create("input", {
              type: "hidden",
              name: f,
              value: a[f],
            });
            d[f] = g;
            c.appendChild(g);
          }
        }
        return d;
      },
      getFirstElement: function (a, c) {
        __p && __p();
        c === void 0 &&
          (c = [
            'input[type="text"]',
            "textarea",
            'input[type="password"]',
            'input[type="button"]',
            'input[type="submit"]',
          ]);
        var d = [];
        for (var e = 0; e < c.length; e++) {
          d = b("DOMQuery").scry(a, c[e]);
          for (var f = 0; f < d.length; f++) {
            var g = d[f];
            try {
              var h = b("getElementPosition")(g);
              if (h.y > 0 && h.x > 0) return g;
            } catch (a) {}
          }
        }
        return null;
      },
      focusFirst: function (a) {
        a = j.getFirstElement(a);
        if (a) {
          a.focus();
          return !0;
        }
        return !1;
      },
    };
    e.exports = j;
  },
  null,
);
__d(
  "areJSONRepresentationsEqual",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      return JSON.stringify(a) == JSON.stringify(b);
    }
    e.exports = a;
  },
  null,
);
__d(
  "UIForm",
  [
    "ArbiterMixin",
    "BehaviorsMixin",
    "DOM",
    "Event",
    "Form",
    "Run",
    "areJSONRepresentationsEqual",
    "mixin",
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    d = babelHelpers.inherits(
      c,
      b("mixin")(b("ArbiterMixin"), b("BehaviorsMixin")),
    );
    g = d && d.prototype;
    function c(a, c, d, e, f) {
      "use strict";
      __p && __p();
      g.constructor.call(this);
      this._root = a;
      this.controller = a;
      this._message = c;
      e &&
        ((this._confirm_dialog = e),
        e.subscribe("confirm", this._handleDialogConfirm.bind(this)),
        b("DOM").prependContent(
          this._root,
          b("DOM").create("input", {
            type: "hidden",
            name: "confirmed",
            value: "true",
          }),
        ));
      b("Run").onAfterLoad(
        function () {
          this._originalState = b("Form").serialize(this._root);
        }.bind(this),
      );
      this._forceDirty = d;
      this._confirmed = !1;
      this._submitted = !1;
      b("Event").listen(this._root, "submit", this._handleSubmit.bind(this));
      f && f.length && this.enableBehaviors(f);
      a = !0;
      b("Run").onBeforeUnload(this.checkUnsaved.bind(this), a);
    }
    c.prototype.getRoot = function () {
      "use strict";
      return this._root;
    };
    c.prototype._handleSubmit = function () {
      "use strict";
      if (this._confirm_dialog && !this._confirmed) {
        this._confirm_dialog.show();
        return !1;
      }
      if (this.inform("submit") === !1) return !1;
      this._submitted = !0;
      return !0;
    };
    c.prototype._handleDialogConfirm = function () {
      "use strict";
      (this._confirmed = !0),
        this._confirm_dialog.hide(),
        this._root.getAttribute("ajaxify")
          ? b("Event").fire(this._root, "submit")
          : this._handleSubmit() && this._root.submit();
    };
    c.prototype.reset = function () {
      "use strict";
      this.inform("reset"), (this._submitted = !1), (this._confirmed = !1);
    };
    c.prototype.isDirty = function () {
      "use strict";
      if (this._submitted || !b("DOM").contains(document.body, this._root))
        return !1;
      if (this._forceDirty) return !0;
      if (!this._originalState) return !1;
      var a = b("Form").serialize(this._root);
      return !b("areJSONRepresentationsEqual")(a, this._originalState);
    };
    c.prototype.checkUnsaved = function () {
      "use strict";
      return this.isDirty() ? this._message : null;
    };
    e.exports = a.UIForm || c;
  },
  null,
);
