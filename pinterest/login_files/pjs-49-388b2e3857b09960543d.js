webpackJsonp([49], {
  "+QSN": function (d, $) {
    d.exports = function () {};
  },
  "+g4q": function (d, $, n) {
    var t = n("9SVM")("keys"),
      r = n("SfBK");
    d.exports = function (d) {
      return t[d] || (t[d] = r(d));
    };
  },
  "+ljj": function (d, $, n) {
    d.exports = { default: n("3W/k"), __esModule: !0 };
  },
  "/Zsc": function (d, $) {
    var n = Math.ceil,
      t = Math.floor;
    d.exports = function (d) {
      return isNaN((d = +d)) ? 0 : (d > 0 ? t : n)(d);
    };
  },
  "0TdB": function (d, $) {
    d.exports = function (d) {
      if ("function" != typeof d) throw TypeError(d + " is not a function!");
      return d;
    };
  },
  "0tRM": function (d, $, n) {
    var t = n("t8Mj"),
      r = n("fA59"),
      l = n("RfdV"),
      e = Object.defineProperty;
    $.f = n("xLBq")
      ? Object.defineProperty
      : function d($, n, u) {
          if ((t($), (n = l(n, !0)), t(u), r))
            try {
              return e($, n, u);
            } catch (d) {}
          if ("get" in u || "set" in u)
            throw TypeError("Accessors not supported!");
          return "value" in u && ($[n] = u.value), $;
        };
  },
  "0zEh": function (d, $, n) {
    n("WtAH");
    for (
      var t = n("tYqY"),
        r = n("3u/C"),
        l = n("gYSD"),
        e = n("GXhg")("toStringTag"),
        u = [
          "NodeList",
          "DOMTokenList",
          "MediaList",
          "StyleSheetList",
          "CSSRuleList",
        ],
        i = 0;
      i < 5;
      i++
    ) {
      var o = u[i],
        a = t[o],
        c = a && a.prototype;
      c && !c[e] && r(c, e, o), (l[o] = l.Array);
    }
  },
  "222Q": function (d, $, n) {
    "use strict";
    var t = n("Gts7"),
      r = n("teVV"),
      l = n("Rr8A"),
      e = {};
    n("3u/C")(e, n("GXhg")("iterator"), function () {
      return this;
    }),
      (d.exports = function (d, $, n) {
        (d.prototype = t(e, { next: r(1, n) })), l(d, $ + " Iterator");
      });
  },
  "2uO8": function (d, $, n) {
    "use strict";
    function t() {
      var d =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        $ = arguments[1];
      "string" == typeof $ && ($ = "^(?:" + $ + ")$");
      var n = d.match($);
      return n && n[0].length === d.length;
    }
    function r(d) {
      return d[0];
    }
    function l(d) {
      return d[1];
    }
    function e(d) {
      return d[2] || [];
    }
    function u(d) {
      return d[3];
    }
    function i(d) {
      return d[4];
    }
    function o(d) {
      var $ = d[5];
      return $ || ($ = u(d)), $;
    }
    function a(d) {
      return d[6];
    }
    function c(d) {
      return d[7];
    }
    function s(d) {
      return d[8];
    }
    function f(d) {
      return d[0];
    }
    function h(d) {
      return d[1];
    }
    function p(d) {
      return d[2] || [];
    }
    function _(d, $) {
      return d[3] || i($);
    }
    function v(d, $) {
      return d[4] || c($);
    }
    function y(d, $) {
      var n = _(d, $);
      return n && "$1" !== n && /\d/.test(n.replace("$1", "")) && !v(d, $);
    }
    function m(d) {
      return d[5] || h(d);
    }
    function g(d, $) {
      var n = $.country_phone_code_to_countries[d][0];
      return $.countries[n];
    }
    function x(d) {
      return d[9];
    }
    function M(d, $) {
      return x(d) ? x(d)[$] : void 0;
    }
    function b(d) {
      return M(d, 0);
    }
    function E(d) {
      return M(d, 1);
    }
    function S(d) {
      return M(d, 2);
    }
    function A(d) {
      return M(d, 3);
    }
    function O(d) {
      return M(d, 4);
    }
    function R(d) {
      return M(d, 5);
    }
    function w(d) {
      return M(d, 6);
    }
    function G(d) {
      return M(d, 7);
    }
    function I(d) {
      return M(d, 8);
    }
    function C(d) {
      return M(d, 9);
    }
    function T(d, $, n, t) {
      var l = k(d, $, n, t),
        e = l.input,
        u = l.format_type,
        i = l.metadata,
        o = void 0;
      e.country && (o = i.countries[e.country]);
      var a = H(e.phone, i),
        c = a.country_phone_code,
        s = a.number;
      if (c) {
        if (e.country && o && c !== r(o)) return e.phone;
        o = g(c, i);
      }
      if (!o) return e.phone;
      switch (u) {
        case "International":
          if (!s) return "+" + r(o);
          var f = N(s, "International", !1, o);
          return "+" + r(o) + " " + f;
        case "International_plaintext":
          return "+" + r(o) + e.phone;
        case "National":
          return s ? N(s, "National", !1, o) : "";
      }
    }
    function B(d, $, n, t, r) {
      var l = new RegExp(f($)),
        e = _($, r),
        u = !e || (e && v($, r) && !t);
      if (!n && !u) return d.replace(l, h($).replace(vd, e));
      var i = d.replace(l, n ? m($) : h($));
      return n ? P(i) : i;
    }
    function N(d, $, n, t) {
      var r = L(e(t), d);
      return r ? B(d, r, "International" === $, n, t) : d;
    }
    function L(d, $) {
      var n = !0,
        r = !1,
        l = void 0;
      try {
        for (var e = hd()(d), u; !(n = (u = e.next()).done); n = !0) {
          var i = u.value;
          if (p(i).length > 0) {
            var o = p(i)[p(i).length - 1];
            if (0 !== $.search(o)) continue;
          }
          if (t($, new RegExp(f(i)))) return i;
        }
      } catch (d) {
        (r = !0), (l = d);
      } finally {
        try {
          !n && e.return && e.return();
        } finally {
          if (r) throw l;
        }
      }
    }
    function P(d) {
      return d
        .replace(/[\(\)]/g, "")
        .replace(/\-/g, " ")
        .trim();
    }
    function k() {
      var d =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        $ = arguments[1],
        n = arguments[2],
        t = arguments[3],
        r = void 0,
        l = void 0,
        e = void 0;
      if ("string" == typeof d)
        if ("string" == typeof n)
          (r = { phone: d, country: $ }), (l = n), (e = t);
        else {
          if (((r = { phone: d }), "string" != typeof $))
            throw new Error("Format type argument not passed for `format()`");
          (l = $), (e = n);
        }
      else (r = d), (l = $), (e = n);
      if (!e) throw new Error("Metadata not passed");
      switch (l) {
        case "International":
        case "International_plaintext":
        case "National":
          break;
        default:
          throw new Error(
            'Unknown format type argument passed to "format()": "' + l + '"',
          );
      }
      return { input: r, format_type: l, metadata: e };
    }
    function F(d, $, n) {
      var e = J(d, $, n),
        u = e.text,
        i = e.options,
        o = e.metadata;
      if (
        (i || (i = _d()({}, kd)),
        i.country.default && !o.countries[i.country.default])
      )
        throw new Error("Unknown country code: " + i.country.default);
      if (i.country.restrict && !o.countries[i.country.restrict])
        throw new Error("Unknown country code: " + i.country.restrict);
      var a = U(u);
      if (!K(a)) return {};
      var c = H(a, o),
        s = c.country_phone_code,
        f = c.number;
      if (!s && !f) return {};
      var h = void 0,
        p = void 0,
        _ = !1;
      if (s) {
        if (
          ((_ = !0),
          i.country.restrict && s !== r(o.countries[i.country.restrict]))
        )
          return {};
        p = g(s, o);
      } else
        (i.country.restrict || i.country.default) &&
          ((h = i.country.restrict || i.country.default),
          (p = o.countries[h]),
          (f = D(u)));
      if (!p) return {};
      var v = V(f, p),
        y = v !== f;
      if (!_ && !y && q(v, p)) return {};
      if (!h) {
        if (!(h = Z(s, v, o))) return {};
        p = o.countries[h];
      }
      return v.length > Ld
        ? {}
        : t(v, new RegExp(l(p)))
        ? { country: h, phone: v }
        : {};
    }
    function D(d) {
      return j(d, Td);
    }
    function j(d, $) {
      var n = "",
        t = !0,
        r = !1,
        l = void 0;
      try {
        for (var e = hd()(d), u; !(t = (u = e.next()).done); t = !0) {
          var i = $[u.value.toUpperCase()];
          void 0 !== i && (n += i);
        }
      } catch (d) {
        (r = !0), (l = d);
      } finally {
        try {
          !t && e.return && e.return();
        } finally {
          if (r) throw l;
        }
      }
      return n;
    }
    function K(d) {
      return d.length >= Nd && t(d, wd);
    }
    function U(d) {
      if (!d || d.length > Pd) return "";
      var $ = d.search(Gd);
      return $ < 0 ? "" : d.slice($).replace(Id, "");
    }
    function Y(d) {
      if (!d) return "";
      var $ = Cd.test(d);
      return (d = D(d)), $ ? "+" + d : d;
    }
    function H(d, $) {
      if (!(d = Y(d))) return {};
      if ("+" !== d[0]) return { number: d };
      if ("0" === (d = d.slice(1))[0]) return {};
      for (var n = 1; n <= Bd && n <= d.length; ) {
        var t = d.slice(0, n);
        if ($.country_phone_code_to_countries[t])
          return { country_phone_code: t, number: d.slice(n) };
        n++;
      }
      return {};
    }
    function V(d, $) {
      var n = o($);
      if (!d || !n) return d;
      var r = new RegExp("^(?:" + n + ")"),
        e = r.exec(d);
      if (!e) return d;
      var u = a($),
        i = void 0,
        c = e[e.length - 1];
      i = u && c ? d.replace(r, u) : d.slice(e[0].length);
      var s = new RegExp(l($));
      return t(d, s) && !t(i, s) ? d : i;
    }
    function Z(d, $, n) {
      var t = n.country_phone_code_to_countries[d];
      if (1 === t.length) return t[0];
      var r = !0,
        l = !1,
        e = void 0;
      try {
        for (var u = hd()(t), i; !(r = (i = u.next()).done); r = !0) {
          var o = i.value,
            a = n.countries[o];
          if (s(a)) {
            if ($ && 0 === $.search(s(a))) return o;
          } else if (W($, o, n)) return o;
        }
      } catch (d) {
        (l = !0), (e = d);
      } finally {
        try {
          !r && u.return && u.return();
        } finally {
          if (l) throw e;
        }
      }
    }
    function W(d, $, n) {
      var t = n.countries[$];
      if (X(d, l(t)))
        return X(d, E(t))
          ? b(t) && b(t) !== E(t)
            ? "MOBILE"
            : "FIXED_LINE_OR_MOBILE"
          : X(d, b(t))
          ? E(t) && E(t) !== b(t)
            ? "FIXED_LINE"
            : "FIXED_LINE_OR_MOBILE"
          : X(d, S(t))
          ? "TOLL_FREE"
          : X(d, A(t))
          ? "PREMIUM_RATE"
          : X(d, O(t))
          ? "PERSONAL_NUMBER"
          : X(d, R(t))
          ? "VOICEMAIL"
          : X(d, w(t))
          ? "UAN"
          : X(d, G(t))
          ? "PAGER"
          : X(d, I(t))
          ? "VOIP"
          : X(d, C(t))
          ? "SHARED_COST"
          : void 0;
    }
    function X(d, $) {
      return t(d, $);
    }
    function q(d, $) {
      var n = L(e($), d);
      if (n) return y(n, $);
    }
    function J(d, $, n) {
      var t = void 0,
        r = void 0,
        l = void 0;
      if (("string" == typeof d && (t = d), "string" == typeof $)) {
        var e = $;
        (r = _d()({}, kd, { country: { restrict: e } })), (l = n);
      } else $ && $.countries ? (l = $) : ((r = $), (l = n));
      if (!l) throw new Error("Metadata not passed");
      return { text: t, options: r, metadata: l };
    }
    function Q(d, $, n) {
      var t = z(d, $, n),
        r = t.input,
        l = t.metadata;
      if (!l) throw new Error("Metadata not passed");
      return (
        !!r &&
        !!r.country &&
        !(x(l.countries[r.country]) && !W(r.phone, r.country, l))
      );
    }
    function z(d, $, n) {
      var t = void 0,
        r = void 0;
      return (
        "string" == typeof d
          ? "string" == typeof $
            ? ((r = n), K(d) && (t = F(d, $, r)))
            : ((r = $), K(d) && (t = F(d, r)))
          : (d && d.phone && K(d.phone) && (t = d), (r = $)),
        { input: t, metadata: r }
      );
    }
    function dd(d, $) {
      for (
        var n = d.slice(0, $), t = $d("(", n) - $d(")", n);
        t > 0 && $ < d.length;

      )
        ")" === d[$] && t--, $++;
      return d.slice(0, $);
    }
    function $d(d, $) {
      var n = 0,
        t = !0,
        r = !1,
        l = void 0;
      try {
        for (var e = hd()($), u; !(t = (u = e.next()).done); t = !0)
          u.value === d && n++;
      } catch (d) {
        (r = !0), (l = d);
      } finally {
        try {
          !t && e.return && e.return();
        } finally {
          if (r) throw l;
        }
      }
      return n;
    }
    function nd(d, $) {
      if ($ < 1) return "";
      for (var n = ""; $ > 1; ) 1 & $ && (n += d), ($ >>= 1), (d += d);
      return n + d;
    }
    function td() {
      var d = Array.prototype.slice.call(arguments);
      return d.push(sd.a), F.apply(this, d);
    }
    function rd() {
      var d = Array.prototype.slice.call(arguments);
      return d.push(sd.a), T.apply(this, d);
    }
    function ld() {
      var d = Array.prototype.slice.call(arguments);
      return d.push(sd.a), W.apply(this, d);
    }
    function ed() {
      return ud.apply(this, arguments);
    }
    function ud() {
      var d = Array.prototype.slice.call(arguments);
      return d.push(sd.a), Q.apply(this, d);
    }
    function id() {
      return ud.apply(this, arguments);
    }
    function od(d) {
      n$.call(this, d, sd.a);
    }
    function ad(d) {
      n$.call(this, d, sd.a);
    }
    Object.defineProperty($, "__esModule", { value: !0 });
    var cd = n("pjIt"),
      sd = n.n(cd),
      fd = n("Embx"),
      hd = n.n(fd),
      pd = n("hhme"),
      _d = n.n(pd),
      vd = /(\$\d)/,
      yd = "+＋",
      md = "0-9０-９٠-٩۰-۹",
      gd = "-‐-―−ー－",
      xd = "／/",
      Md = "．.",
      bd = "  ­​⁠　",
      Ed = "()（）［］\\[\\]",
      Sd = "~⁓∼～",
      Ad = "-‐-―−ー－／/．.  ­​⁠　()（）［］\\[\\]~⁓∼～",
      Od = "[0-9０-９٠-٩۰-۹]{" + Nd + "}",
      Rd = "[+＋]{0,1}(?:[" + Ad + "]*[" + md + "]){3,}[" + Ad + md + "]*",
      wd = new RegExp("^" + Od + "$|^" + Rd + "$", "i"),
      Gd = new RegExp("[+＋0-9０-９٠-٩۰-۹]"),
      Id = new RegExp("[^0-9０-９٠-٩۰-۹]+$"),
      Cd = new RegExp("^[+＋]+"),
      Td = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        "０": "0",
        "１": "1",
        "２": "2",
        "３": "3",
        "４": "4",
        "５": "5",
        "６": "6",
        "７": "7",
        "８": "8",
        "９": "9",
        "٠": "0",
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
      },
      Bd = 3,
      Nd = 2,
      Ld = 17,
      Pd = 250,
      kd = { country: {} },
      Fd = n("agei"),
      Dd = n.n(Fd),
      jd = n("bSob"),
      Kd = n.n(jd),
      Ud = "9",
      Yd = new RegExp("9", "g"),
      Hd = 15,
      Vd = nd("9", 15),
      Zd = "x",
      Wd = new RegExp("x"),
      Xd = new RegExp("x", "g"),
      qd = /\[([^\[\]])*\]/g,
      Jd = /\d(?=[^,}][^,}])/g,
      Qd = new RegExp("^[" + Ad + "]*(\\$\\d[" + Ad + "]*)+$"),
      zd = 3,
      d$ = "[+＋]{0,1}[" + Ad + md + "]*",
      $$ = new RegExp("^" + d$ + "$", "i"),
      n$ = (function () {
        function d($, n) {
          if ((Dd()(this, d), !n)) throw new Error("Metadata not passed");
          $ && n.countries[$] && (this.default_country = $),
            (this.metadata = n),
            this.reset();
        }
        return (
          Kd()(d, [
            {
              key: "input",
              value: function d($) {
                var n = U($);
                return (
                  n || ($ && $.indexOf("+") >= 0 && (n = "+")),
                  t(n, $$) ? this.process_input(Y(n)) : this.current_output
                );
              },
            },
            {
              key: "process_input",
              value: function d($) {
                if (
                  ("+" === $[0] &&
                    (this.parsed_input ||
                      ((this.parsed_input += "+"), this.reset_countriness()),
                    ($ = $.slice(1))),
                  (this.parsed_input += $),
                  (this.valid = !1),
                  (this.national_number += $),
                  this.is_international())
                )
                  if (this.country_phone_code)
                    this.country || this.determine_the_country();
                  else {
                    if (!this.extract_country_phone_code())
                      return this.parsed_input;
                    this.initialize_phone_number_formats_for_this_country_phone_code(),
                      this.reset_format(),
                      this.determine_the_country();
                  }
                else {
                  var n = this.national_prefix;
                  (this.national_number =
                    this.national_prefix + this.national_number),
                    this.extract_national_prefix(),
                    this.national_prefix !== n &&
                      ((this.matching_formats = this.available_formats),
                      this.reset_format());
                }
                this.match_formats_by_leading_digits();
                var t = this.format_national_phone_number($);
                return t ? this.full_phone_number(t) : this.parsed_input;
              },
            },
            {
              key: "format_national_phone_number",
              value: function d($) {
                var n = void 0;
                this.chosen_format &&
                  (n = this.format_next_national_number_digits($));
                var t = this.attempt_to_format_complete_phone_number();
                return t
                  ? (this.country && (this.valid = !0), t)
                  : this.choose_another_format()
                  ? this.reformat_national_number()
                  : n;
              },
            },
            {
              key: "reset",
              value: function d() {
                return (
                  (this.parsed_input = ""),
                  (this.current_output = ""),
                  (this.national_prefix = ""),
                  (this.national_number = ""),
                  this.reset_countriness(),
                  this.reset_format(),
                  (this.valid = !1),
                  this
                );
              },
            },
            {
              key: "reset_country",
              value: function d() {
                this.default_country && !this.is_international()
                  ? (this.country = this.default_country)
                  : (this.country = void 0);
              },
            },
            {
              key: "reset_countriness",
              value: function d() {
                this.reset_country(),
                  this.default_country && !this.is_international()
                    ? ((this.country_metadata =
                        this.metadata.countries[this.default_country]),
                      (this.country_phone_code =
                        this.country_metadata.phone_code),
                      this.initialize_phone_number_formats_for_this_country_phone_code())
                    : ((this.country_metadata = void 0),
                      (this.country_phone_code = void 0),
                      (this.available_formats = []),
                      (this.matching_formats = this.available_formats));
              },
            },
            {
              key: "reset_format",
              value: function d() {
                (this.chosen_format = void 0),
                  (this.template = void 0),
                  (this.partially_populated_template = void 0),
                  (this.last_match_position = -1);
              },
            },
            {
              key: "reformat_national_number",
              value: function d() {
                return this.format_next_national_number_digits(
                  this.national_number,
                );
              },
            },
            {
              key: "initialize_phone_number_formats_for_this_country_phone_code",
              value: function d() {
                (this.available_formats = e(this.country_metadata).filter(
                  function (d) {
                    return Qd.test(m(d));
                  },
                )),
                  (this.matching_formats = this.available_formats);
              },
            },
            {
              key: "match_formats_by_leading_digits",
              value: function d() {
                var $ = this.national_number,
                  n = $.length - 3;
                n < 0 && (n = 0),
                  (this.matching_formats =
                    this.get_relevant_phone_number_formats().filter(
                      function (d) {
                        var t = p(d).length;
                        if (0 === t) return !0;
                        var r = Math.min(n, t - 1),
                          l = p(d)[r];
                        return new RegExp("^(" + l + ")").test($);
                      },
                    )),
                  this.chosen_format &&
                    -1 === this.matching_formats.indexOf(this.chosen_format) &&
                    this.reset_format();
              },
            },
            {
              key: "get_relevant_phone_number_formats",
              value: function d() {
                return this.national_number.length <= 3
                  ? this.available_formats
                  : this.matching_formats;
              },
            },
            {
              key: "attempt_to_format_complete_phone_number",
              value: function d() {
                var $ = !0,
                  n = !1,
                  t = void 0;
                try {
                  for (
                    var r = hd()(this.get_relevant_phone_number_formats()), l;
                    !($ = (l = r.next()).done);
                    $ = !0
                  ) {
                    var e = l.value,
                      u = new RegExp("^(?:" + f(e) + ")$");
                    if (u.test(this.national_number)) {
                      if (this.validate_format(e)) {
                        this.reset_format(), (this.chosen_format = e);
                        var i = B(
                          this.national_number,
                          e,
                          this.is_international(),
                          this.national_prefix.length > 0,
                          this.country_metadata,
                        );
                        if (this.create_formatting_template(e))
                          this.reformat_national_number();
                        else {
                          var o = this.full_phone_number(i);
                          (this.template = o.replace(/[\d\+]/g, "x")),
                            (this.partially_populated_template = o);
                        }
                        return i;
                      }
                    } else if (
                      this.national_prefix &&
                      v(e, this.country_metadata)
                    ) {
                      if (!u.test(this.national_prefix + this.national_number))
                        continue;
                      (this.national_number =
                        this.national_prefix + this.national_number),
                        (this.national_prefix = "");
                    }
                  }
                } catch (d) {
                  (n = !0), (t = d);
                } finally {
                  try {
                    !$ && r.return && r.return();
                  } finally {
                    if (n) throw t;
                  }
                }
              },
            },
            {
              key: "full_phone_number",
              value: function d($) {
                return this.is_international()
                  ? "+" + this.country_phone_code + " " + $
                  : $;
              },
            },
            {
              key: "extract_country_phone_code",
              value: function d() {
                if (this.national_number) {
                  var $ = H(this.parsed_input, this.metadata),
                    n = $.country_phone_code,
                    t = $.number;
                  if (n)
                    return (
                      (this.country_phone_code = n),
                      (this.national_number = t),
                      (this.country_metadata = g(n, this.metadata))
                    );
                }
              },
            },
            {
              key: "extract_national_prefix",
              value: function d() {
                if (((this.national_prefix = ""), this.country_metadata)) {
                  var $ = o(this.country_metadata);
                  if ($) {
                    var n = this.national_number.match(
                      new RegExp("^(?:" + $ + ")"),
                    );
                    if (n && n[0]) {
                      var t = n[0].length;
                      return (
                        (this.national_prefix = this.national_number.slice(
                          0,
                          t,
                        )),
                        (this.national_number = this.national_number.slice(t)),
                        this.national_prefix
                      );
                    }
                  }
                }
              },
            },
            {
              key: "choose_another_format",
              value: function d() {
                var $ = !0,
                  n = !1,
                  t = void 0;
                try {
                  for (
                    var r = hd()(this.get_relevant_phone_number_formats()), l;
                    !($ = (l = r.next()).done);
                    $ = !0
                  ) {
                    var e = l.value;
                    if (this.chosen_format === e) return;
                    if (
                      this.validate_format(e) &&
                      this.create_formatting_template(e)
                    )
                      return (
                        (this.chosen_format = e),
                        (this.last_match_position = -1),
                        !0
                      );
                  }
                } catch (d) {
                  (n = !0), (t = d);
                } finally {
                  try {
                    !$ && r.return && r.return();
                  } finally {
                    if (n) throw t;
                  }
                }
                this.reset_country(), this.reset_format();
              },
            },
            {
              key: "validate_format",
              value: function d($) {
                if (
                  this.is_international() ||
                  this.national_prefix ||
                  !y($, this.country_metadata)
                )
                  return !0;
              },
            },
            {
              key: "create_formatting_template",
              value: function d($) {
                if (!(f($).indexOf("|") >= 0)) {
                  var n = _($, this.country_metadata),
                    t = f($).replace(qd, "\\d").replace(Jd, "\\d"),
                    r = Vd.match(t)[0];
                  if (!(this.national_number.length > r.length)) {
                    var l = this.get_format_format($);
                    if (this.national_prefix) {
                      var e = _($, this.country_metadata);
                      e && (l = l.replace(vd, e));
                    }
                    var u = r.replace(new RegExp(t, "g"), l).replace(Yd, "x");
                    return (
                      (this.partially_populated_template = u),
                      (u = this.is_international()
                        ? "x" +
                          nd("x", this.country_phone_code.length) +
                          " " +
                          u
                        : u.replace(/\d/g, "x")),
                      (this.template = u)
                    );
                  }
                }
              },
            },
            {
              key: "format_next_national_number_digits",
              value: function d($) {
                var n = !0,
                  t = !1,
                  r = void 0;
                try {
                  for (var l = hd()($), e; !(n = (e = l.next()).done); n = !0) {
                    var u = e.value;
                    if (
                      -1 ===
                      this.partially_populated_template
                        .slice(this.last_match_position + 1)
                        .search(Wd)
                    )
                      return (
                        (this.chosen_format = void 0),
                        (this.template = void 0),
                        void (this.partially_populated_template = void 0)
                      );
                    (this.last_match_position =
                      this.partially_populated_template.search(Wd)),
                      (this.partially_populated_template =
                        this.partially_populated_template.replace(Wd, u));
                  }
                } catch (d) {
                  (t = !0), (r = d);
                } finally {
                  try {
                    !n && l.return && l.return();
                  } finally {
                    if (t) throw r;
                  }
                }
                return dd(
                  this.partially_populated_template,
                  this.last_match_position + 1,
                ).replace(Xd, " ");
              },
            },
            {
              key: "is_international",
              value: function d() {
                return this.parsed_input && "+" === this.parsed_input[0];
              },
            },
            {
              key: "get_format_format",
              value: function d($) {
                return this.is_international() ? P(m($)) : h($);
              },
            },
            {
              key: "determine_the_country",
              value: function d() {
                this.country = Z(
                  this.country_phone_code,
                  this.national_number,
                  this.metadata,
                );
              },
            },
          ]),
          d
        );
      })();
    ((od.prototype = Object.create(n$.prototype, {})).constructor = od),
      ((ad.prototype = Object.create(n$.prototype, {})).constructor = ad);
    var t$ = ($.default = ad);
  },
  "3W/k": function (d, $, n) {
    n("UcuG"), (d.exports = n("ZzBv").Object.assign);
  },
  "3u/C": function (d, $, n) {
    var t = n("0tRM"),
      r = n("teVV");
    d.exports = n("xLBq")
      ? function (d, $, n) {
          return t.f(d, $, r(1, n));
        }
      : function (d, $, n) {
          return (d[$] = n), d;
        };
  },
  "4CUf": function (d, $, n) {
    var t = n("/Zsc"),
      r = Math.min;
    d.exports = function (d) {
      return d > 0 ? r(t(d), 9007199254740991) : 0;
    };
  },
  "5n4L": function (d, $, n) {
    var t = n("fkyO");
    d.exports = function (d) {
      return Object(t(d));
    };
  },
  "5t9m": function (d, $) {
    var n = {}.toString;
    d.exports = function (d) {
      return n.call(d).slice(8, -1);
    };
  },
  "7Qpb": function (d, $, n) {
    var t = n("xyN6");
    t(t.S + t.F * !n("xLBq"), "Object", { defineProperty: n("0tRM").f });
  },
  "8emv": function (d, $) {
    $.f = {}.propertyIsEnumerable;
  },
  "9SVM": function (d, $, n) {
    var t = n("tYqY"),
      r = "__core-js_shared__",
      l = t[r] || (t[r] = {});
    d.exports = function (d) {
      return l[d] || (l[d] = {});
    };
  },
  "A4C+": function (d, $) {
    d.exports = function (d) {
      return "object" == typeof d ? null !== d : "function" == typeof d;
    };
  },
  Dniw: function (d, $, n) {
    var t = n("tgIh"),
      r = n("4CUf"),
      l = n("HChx");
    d.exports = function (d) {
      return function ($, n, e) {
        var u = t($),
          i = r(u.length),
          o = l(e, i),
          a;
        if (d && n != n) {
          for (; i > o; ) if ((a = u[o++]) != a) return !0;
        } else
          for (; i > o; o++)
            if ((d || o in u) && u[o] === n) return d || o || 0;
        return !d && -1;
      };
    };
  },
  Embx: function (d, $, n) {
    d.exports = { default: n("XTRQ"), __esModule: !0 };
  },
  GXhg: function (d, $, n) {
    var t = n("9SVM")("wks"),
      r = n("SfBK"),
      l = n("tYqY").Symbol,
      e = "function" == typeof l;
    (d.exports = function (d) {
      return t[d] || (t[d] = (e && l[d]) || (e ? l : r)("Symbol." + d));
    }).store = t;
  },
  Gts7: function (d, $, n) {
    var t = n("t8Mj"),
      r = n("yDi0"),
      l = n("TBY5"),
      e = n("+g4q")("IE_PROTO"),
      u = function () {},
      i = "prototype",
      o = function () {
        var d = n("niNH")("iframe"),
          $ = l.length,
          t = ">",
          r;
        for (
          d.style.display = "none",
            n("xSmo").appendChild(d),
            d.src = "javascript:",
            (r = d.contentWindow.document).open(),
            r.write("<script>document.F=Object</script>"),
            r.close(),
            o = r.F;
          $--;

        )
          delete o[i][l[$]];
        return o();
      };
    d.exports =
      Object.create ||
      function d($, n) {
        var l;
        return (
          null !== $
            ? ((u[i] = t($)), (l = new u()), (u[i] = null), (l[e] = $))
            : (l = o()),
          void 0 === n ? l : r(l, n)
        );
      };
  },
  HChx: function (d, $, n) {
    var t = n("/Zsc"),
      r = Math.max,
      l = Math.min;
    d.exports = function (d, $) {
      return (d = t(d)) < 0 ? r(d + $, 0) : l(d, $);
    };
  },
  HG8D: function (d, $) {
    d.exports = function (d) {
      try {
        return !!d();
      } catch (d) {
        return !0;
      }
    };
  },
  IHGI: function (d, $, n) {
    var t = n("0TdB");
    d.exports = function (d, $, n) {
      if ((t(d), void 0 === $)) return d;
      switch (n) {
        case 1:
          return function (n) {
            return d.call($, n);
          };
        case 2:
          return function (n, t) {
            return d.call($, n, t);
          };
        case 3:
          return function (n, t, r) {
            return d.call($, n, t, r);
          };
      }
      return function () {
        return d.apply($, arguments);
      };
    };
  },
  Ra4A: function (d, $) {
    d.exports = function (d, $) {
      return { value: $, done: !!d };
    };
  },
  RfdV: function (d, $, n) {
    var t = n("A4C+");
    d.exports = function (d, $) {
      if (!t(d)) return d;
      var n, r;
      if ($ && "function" == typeof (n = d.toString) && !t((r = n.call(d))))
        return r;
      if ("function" == typeof (n = d.valueOf) && !t((r = n.call(d)))) return r;
      if (!$ && "function" == typeof (n = d.toString) && !t((r = n.call(d))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  Rr8A: function (d, $, n) {
    var t = n("0tRM").f,
      r = n("XeN5"),
      l = n("GXhg")("toStringTag");
    d.exports = function (d, $, n) {
      d &&
        !r((d = n ? d : d.prototype), l) &&
        t(d, l, { configurable: !0, value: $ });
    };
  },
  SfBK: function (d, $) {
    var n = 0,
      t = Math.random();
    d.exports = function (d) {
      return "Symbol(".concat(
        void 0 === d ? "" : d,
        ")_",
        (++n + t).toString(36),
      );
    };
  },
  TBY5: function (d, $) {
    d.exports =
      "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ",",
      );
  },
  UVEV: function (d, $, n) {
    var t = n("/Zsc"),
      r = n("fkyO");
    d.exports = function (d) {
      return function ($, n) {
        var l = String(r($)),
          e = t(n),
          u = l.length,
          i,
          o;
        return e < 0 || e >= u
          ? d
            ? ""
            : void 0
          : (i = l.charCodeAt(e)) < 55296 ||
            i > 56319 ||
            e + 1 === u ||
            (o = l.charCodeAt(e + 1)) < 56320 ||
            o > 57343
          ? d
            ? l.charAt(e)
            : i
          : d
          ? l.slice(e, e + 2)
          : o - 56320 + ((i - 55296) << 10) + 65536;
      };
    };
  },
  UcuG: function (d, $, n) {
    var t = n("xyN6");
    t(t.S + t.F, "Object", { assign: n("hFxK") });
  },
  WtAH: function (d, $, n) {
    "use strict";
    var t = n("+QSN"),
      r = n("Ra4A"),
      l = n("gYSD"),
      e = n("tgIh");
    (d.exports = n("rxhg")(
      Array,
      "Array",
      function (d, $) {
        (this._t = e(d)), (this._i = 0), (this._k = $);
      },
      function () {
        var d = this._t,
          $ = this._k,
          n = this._i++;
        return !d || n >= d.length
          ? ((this._t = void 0), r(1))
          : "keys" == $
          ? r(0, n)
          : "values" == $
          ? r(0, d[n])
          : r(0, [n, d[n]]);
      },
      "values",
    )),
      (l.Arguments = l.Array),
      t("keys"),
      t("values"),
      t("entries");
  },
  XTRQ: function (d, $, n) {
    n("0zEh"), n("dqFe"), (d.exports = n("fks3"));
  },
  XeN5: function (d, $) {
    var n = {}.hasOwnProperty;
    d.exports = function (d, $) {
      return n.call(d, $);
    };
  },
  ZzBv: function (d, $) {
    var n = (d.exports = { version: "2.4.0" });
    "number" == typeof __e && (__e = n);
  },
  agei: function (d, $, n) {
    "use strict";
    ($.__esModule = !0),
      ($.default = function (d, $) {
        if (!(d instanceof $))
          throw new TypeError("Cannot call a class as a function");
      });
  },
  bSob: function (d, $, n) {
    "use strict";
    function t(d) {
      return d && d.__esModule ? d : { default: d };
    }
    $.__esModule = !0;
    var r = t(n("d3xF"));
    $.default = (function () {
      function d(d, $) {
        for (var n = 0; n < $.length; n++) {
          var t = $[n];
          (t.enumerable = t.enumerable || !1),
            (t.configurable = !0),
            "value" in t && (t.writable = !0),
            (0, r.default)(d, t.key, t);
        }
      }
      return function ($, n, t) {
        return n && d($.prototype, n), t && d($, t), $;
      };
    })();
  },
  cMUD: function (d, $, n) {
    d.exports = n("3u/C");
  },
  cpIG: function (d, $, n) {
    n("7Qpb");
    var t = n("ZzBv").Object;
    d.exports = function d($, n, r) {
      return t.defineProperty($, n, r);
    };
  },
  d3xF: function (d, $, n) {
    d.exports = { default: n("cpIG"), __esModule: !0 };
  },
  dqFe: function (d, $, n) {
    "use strict";
    var t = n("UVEV")(!0);
    n("rxhg")(
      String,
      "String",
      function (d) {
        (this._t = String(d)), (this._i = 0);
      },
      function () {
        var d = this._t,
          $ = this._i,
          n;
        return $ >= d.length
          ? { value: void 0, done: !0 }
          : ((n = t(d, $)), (this._i += n.length), { value: n, done: !1 });
      },
    );
  },
  "e/8s": function (d, $) {
    d.exports = !0;
  },
  eftk: function (d, $, n) {
    var t = n("hrFx"),
      r = n("TBY5");
    d.exports =
      Object.keys ||
      function d($) {
        return t($, r);
      };
  },
  f1R7: function (d, $, n) {
    var t = n("5t9m");
    d.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (d) {
          return "String" == t(d) ? d.split("") : Object(d);
        };
  },
  fA59: function (d, $, n) {
    d.exports =
      !n("xLBq") &&
      !n("HG8D")(function () {
        return (
          7 !=
          Object.defineProperty(n("niNH")("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  "fO+O": function (d, $, n) {
    var t = n("5t9m"),
      r = n("GXhg")("toStringTag"),
      l =
        "Arguments" ==
        t(
          (function () {
            return arguments;
          })(),
        ),
      e = function (d, $) {
        try {
          return d[$];
        } catch (d) {}
      };
    d.exports = function (d) {
      var $, n, u;
      return void 0 === d
        ? "Undefined"
        : null === d
        ? "Null"
        : "string" == typeof (n = e(($ = Object(d)), r))
        ? n
        : l
        ? t($)
        : "Object" == (u = t($)) && "function" == typeof $.callee
        ? "Arguments"
        : u;
    };
  },
  fks3: function (d, $, n) {
    var t = n("t8Mj"),
      r = n("haz1");
    d.exports = n("ZzBv").getIterator = function (d) {
      var $ = r(d);
      if ("function" != typeof $) throw TypeError(d + " is not iterable!");
      return t($.call(d));
    };
  },
  fkyO: function (d, $) {
    d.exports = function (d) {
      if (void 0 == d) throw TypeError("Can't call method on  " + d);
      return d;
    };
  },
  gYSD: function (d, $) {
    d.exports = {};
  },
  hFxK: function (d, $, n) {
    "use strict";
    var t = n("eftk"),
      r = n("muf5"),
      l = n("8emv"),
      e = n("5n4L"),
      u = n("f1R7"),
      i = Object.assign;
    d.exports =
      !i ||
      n("HG8D")(function () {
        var d = {},
          $ = {},
          n = Symbol(),
          t = "abcdefghijklmnopqrst";
        return (
          (d[n] = 7),
          t.split("").forEach(function (d) {
            $[d] = d;
          }),
          7 != i({}, d)[n] || Object.keys(i({}, $)).join("") != t
        );
      })
        ? function d($, n) {
            for (
              var i = e($), o = arguments.length, a = 1, c = r.f, s = l.f;
              o > a;

            )
              for (
                var f = u(arguments[a++]),
                  h = c ? t(f).concat(c(f)) : t(f),
                  p = h.length,
                  _ = 0,
                  v;
                p > _;

              )
                s.call(f, (v = h[_++])) && (i[v] = f[v]);
            return i;
          }
        : i;
  },
  haz1: function (d, $, n) {
    var t = n("fO+O"),
      r = n("GXhg")("iterator"),
      l = n("gYSD");
    d.exports = n("ZzBv").getIteratorMethod = function (d) {
      if (void 0 != d) return d[r] || d["@@iterator"] || l[t(d)];
    };
  },
  hhme: function (d, $, n) {
    "use strict";
    function t(d) {
      return d && d.__esModule ? d : { default: d };
    }
    $.__esModule = !0;
    var r = t(n("+ljj"));
    $.default =
      r.default ||
      function (d) {
        for (var $ = 1; $ < arguments.length; $++) {
          var n = arguments[$];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (d[t] = n[t]);
        }
        return d;
      };
  },
  hrFx: function (d, $, n) {
    var t = n("XeN5"),
      r = n("tgIh"),
      l = n("Dniw")(!1),
      e = n("+g4q")("IE_PROTO");
    d.exports = function (d, $) {
      var n = r(d),
        u = 0,
        i = [],
        o;
      for (o in n) o != e && t(n, o) && i.push(o);
      for (; $.length > u; ) t(n, (o = $[u++])) && (~l(i, o) || i.push(o));
      return i;
    };
  },
  muf5: function (d, $) {
    $.f = Object.getOwnPropertySymbols;
  },
  niNH: function (d, $, n) {
    var t = n("A4C+"),
      r = n("tYqY").document,
      l = t(r) && t(r.createElement);
    d.exports = function (d) {
      return l ? r.createElement(d) : {};
    };
  },
  pjIt: function (d, $) {
    d.exports = {
      country_phone_code_to_countries: {
        1: [
          "US",
          "AG",
          "AI",
          "AS",
          "BB",
          "BM",
          "BS",
          "CA",
          "DM",
          "DO",
          "GD",
          "GU",
          "JM",
          "KN",
          "KY",
          "LC",
          "MP",
          "MS",
          "PR",
          "SX",
          "TC",
          "TT",
          "VC",
          "VG",
          "VI",
        ],
        7: ["RU", "KZ"],
        20: ["EG"],
        27: ["ZA"],
        30: ["GR"],
        31: ["NL"],
        32: ["BE"],
        33: ["FR"],
        34: ["ES"],
        36: ["HU"],
        39: ["IT", "VA"],
        40: ["RO"],
        41: ["CH"],
        43: ["AT"],
        44: ["GB", "GG", "IM", "JE"],
        45: ["DK"],
        46: ["SE"],
        47: ["NO", "SJ"],
        48: ["PL"],
        49: ["DE"],
        51: ["PE"],
        52: ["MX"],
        53: ["CU"],
        54: ["AR"],
        55: ["BR"],
        56: ["CL"],
        57: ["CO"],
        58: ["VE"],
        60: ["MY"],
        61: ["AU", "CC", "CX"],
        62: ["ID"],
        63: ["PH"],
        64: ["NZ"],
        65: ["SG"],
        66: ["TH"],
        81: ["JP"],
        82: ["KR"],
        84: ["VN"],
        86: ["CN"],
        90: ["TR"],
        91: ["IN"],
        92: ["PK"],
        93: ["AF"],
        94: ["LK"],
        95: ["MM"],
        98: ["IR"],
        211: ["SS"],
        212: ["MA", "EH"],
        213: ["DZ"],
        216: ["TN"],
        218: ["LY"],
        220: ["GM"],
        221: ["SN"],
        222: ["MR"],
        223: ["ML"],
        224: ["GN"],
        225: ["CI"],
        226: ["BF"],
        227: ["NE"],
        228: ["TG"],
        229: ["BJ"],
        230: ["MU"],
        231: ["LR"],
        232: ["SL"],
        233: ["GH"],
        234: ["NG"],
        235: ["TD"],
        236: ["CF"],
        237: ["CM"],
        238: ["CV"],
        239: ["ST"],
        240: ["GQ"],
        241: ["GA"],
        242: ["CG"],
        243: ["CD"],
        244: ["AO"],
        245: ["GW"],
        246: ["IO"],
        247: ["AC"],
        248: ["SC"],
        249: ["SD"],
        250: ["RW"],
        251: ["ET"],
        252: ["SO"],
        253: ["DJ"],
        254: ["KE"],
        255: ["TZ"],
        256: ["UG"],
        257: ["BI"],
        258: ["MZ"],
        260: ["ZM"],
        261: ["MG"],
        262: ["RE", "YT"],
        263: ["ZW"],
        264: ["NA"],
        265: ["MW"],
        266: ["LS"],
        267: ["BW"],
        268: ["SZ"],
        269: ["KM"],
        290: ["SH", "TA"],
        291: ["ER"],
        297: ["AW"],
        298: ["FO"],
        299: ["GL"],
        350: ["GI"],
        351: ["PT"],
        352: ["LU"],
        353: ["IE"],
        354: ["IS"],
        355: ["AL"],
        356: ["MT"],
        357: ["CY"],
        358: ["FI", "AX"],
        359: ["BG"],
        370: ["LT"],
        371: ["LV"],
        372: ["EE"],
        373: ["MD"],
        374: ["AM"],
        375: ["BY"],
        376: ["AD"],
        377: ["MC"],
        378: ["SM"],
        380: ["UA"],
        381: ["RS"],
        382: ["ME"],
        385: ["HR"],
        386: ["SI"],
        387: ["BA"],
        389: ["MK"],
        420: ["CZ"],
        421: ["SK"],
        423: ["LI"],
        500: ["FK"],
        501: ["BZ"],
        502: ["GT"],
        503: ["SV"],
        504: ["HN"],
        505: ["NI"],
        506: ["CR"],
        507: ["PA"],
        508: ["PM"],
        509: ["HT"],
        590: ["GP", "BL", "MF"],
        591: ["BO"],
        592: ["GY"],
        593: ["EC"],
        594: ["GF"],
        595: ["PY"],
        596: ["MQ"],
        597: ["SR"],
        598: ["UY"],
        599: ["CW", "BQ"],
        670: ["TL"],
        672: ["NF"],
        673: ["BN"],
        674: ["NR"],
        675: ["PG"],
        676: ["TO"],
        677: ["SB"],
        678: ["VU"],
        679: ["FJ"],
        680: ["PW"],
        681: ["WF"],
        682: ["CK"],
        683: ["NU"],
        685: ["WS"],
        686: ["KI"],
        687: ["NC"],
        688: ["TV"],
        689: ["PF"],
        690: ["TK"],
        691: ["FM"],
        692: ["MH"],
        800: ["001"],
        808: ["001"],
        850: ["KP"],
        852: ["HK"],
        853: ["MO"],
        855: ["KH"],
        856: ["LA"],
        870: ["001"],
        878: ["001"],
        880: ["BD"],
        881: ["001"],
        882: ["001"],
        883: ["001"],
        886: ["TW"],
        888: ["001"],
        960: ["MV"],
        961: ["LB"],
        962: ["JO"],
        963: ["SY"],
        964: ["IQ"],
        965: ["KW"],
        966: ["SA"],
        967: ["YE"],
        968: ["OM"],
        970: ["PS"],
        971: ["AE"],
        972: ["IL"],
        973: ["BH"],
        974: ["QA"],
        975: ["BT"],
        976: ["MN"],
        977: ["NP"],
        979: ["001"],
        992: ["TJ"],
        993: ["TM"],
        994: ["AZ"],
        995: ["GE"],
        996: ["KG"],
        998: ["UZ"],
      },
      countries: {
        AC: ["247", "[46]\\d{4}|[01589]\\d{5}"],
        AD: [
          "376",
          "[16]\\d{5,8}|[37-9]\\d{5}",
          [
            ["(\\d{3})(\\d{3})", "$1 $2", ["[137-9]|6[0-8]"]],
            ["(\\d{4})(\\d{4})", "$1 $2", ["180", "180[02]"]],
            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["690"]],
          ],
        ],
        AE: [
          "971",
          "[2-79]\\d{7,8}|800\\d{2,9}",
          [
            ["([2-4679])(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-4679][2-8]"]],
            ["(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"]],
            ["([479]00)(\\d)(\\d{5})", "$1 $2 $3", ["[479]0"], "$1"],
            ["([68]00)(\\d{2,9})", "$1 $2", ["60|8"], "$1"],
          ],
          "0",
          "0$1",
        ],
        AF: [
          "93",
          "[2-7]\\d{8}",
          [["([2-7]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"]]],
          "0",
          "0$1",
        ],
        AG: [
          "1",
          "[2589]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "268",
        ],
        AI: [
          "1",
          "[2589]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "264",
        ],
        AL: [
          "355",
          "[2-57]\\d{7}|6\\d{8}|8\\d{5,7}|9\\d{5}",
          [
            ["(4)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[0-6]"]],
            ["(6[6-9])(\\d{3})(\\d{4})", "$1 $2 $3", ["6"]],
            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4[7-9]"]],
            ["(\\d{3})(\\d{3,5})", "$1 $2", ["[235][16-9]|8[016-9]|[79]"]],
          ],
          "0",
          "0$1",
        ],
        AM: [
          "374",
          "[1-9]\\d{7}",
          [
            ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"]],
            ["(\\d{2})(\\d{6})", "$1 $2", ["4[1349]|[5-7]|9[1-9]"], "0$1"],
            ["(\\d{3})(\\d{5})", "$1 $2", ["[23]"]],
            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8|90"], "0 $1"],
          ],
          "0",
          "(0$1)",
        ],
        AO: ["244", "[29]\\d{8}", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3"]]],
        AR: [
          "54",
          "11\\d{8}|[2368]\\d{9}|9\\d{10}",
          [
            ["([68]\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"]],
            [
              "(9)(11)(\\d{4})(\\d{4})",
              "$2 15-$3-$4",
              ["911"],
              null,
              null,
              "$1 $2 $3-$4",
            ],
            [
              "(9)(\\d{3})(\\d{3})(\\d{4})",
              "$2 15-$3-$4",
              [
                "9(?:2[234689]|3[3-8])",
                "9(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578]))",
                "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))",
                "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))",
              ],
              null,
              null,
              "$1 $2 $3-$4",
            ],
            [
              "(9)(\\d{4})(\\d{2})(\\d{4})",
              "$2 15-$3-$4",
              ["9[23]"],
              null,
              null,
              "$1 $2 $3-$4",
            ],
            ["(11)(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], null, "true"],
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "$1 $2-$3",
              [
                "2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578])",
                "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))",
                "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))",
              ],
              null,
              "true",
            ],
            ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]"], null, "true"],
          ],
          "0",
          "0$1",
          "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?",
          "9$1",
        ],
        AS: [
          "1",
          "[5689]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "684",
        ],
        AT: [
          "43",
          "[1-9]\\d{3,12}",
          [
            ["(116\\d{3})", "$1", ["116"], "$1"],
            ["(1)(\\d{3,12})", "$1 $2", ["1"]],
            ["(5\\d)(\\d{3,5})", "$1 $2", ["5[079]"]],
            ["(5\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5[079]"]],
            ["(5\\d)(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5[079]"]],
            [
              "(\\d{3})(\\d{3,10})",
              "$1 $2",
              ["316|46|51|732|6(?:5[0-3579]|[6-9])|7(?:[28]0)|[89]"],
            ],
            [
              "(\\d{4})(\\d{3,9})",
              "$1 $2",
              [
                "2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:2[1-8]|35|4[1-8]|[5-79])",
              ],
            ],
          ],
          "0",
          "0$1",
        ],
        AU: [
          "61",
          "1\\d{4,9}|[2-578]\\d{8}",
          [
            ["([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]|14"], "0$1"],
            ["(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"],
            ["(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
            [
              "(1[389]\\d{2})(\\d{3})(\\d{3})",
              "$1 $2 $3",
              ["1(?:[38]0|90)", "1(?:[38]00|90)"],
              "$1",
            ],
            ["(180)(2\\d{3})", "$1 $2", ["180", "1802"], "$1"],
            ["(19\\d)(\\d{3})", "$1 $2", ["19[13]"], "$1"],
            ["(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"], "$1"],
            ["(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"], "$1"],
          ],
          "0",
          null,
          null,
          null,
          null,
          null,
          [
            "[237]\\d{8}|8(?:[6-8]\\d{3}|9(?:[02-9]\\d{2}|1(?:[0-57-9]\\d|6[0135-9])))\\d{4}",
            "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}",
            "180(?:0\\d{3}|2)\\d{3}",
            "19(?:0[0126]\\d|[679])\\d{5}",
            "500\\d{6}",
            null,
            null,
            "16\\d{3,7}",
            "550\\d{6}",
            "13(?:00\\d{3}|45[0-4]|\\d)\\d{3}",
          ],
        ],
        AW: ["297", "[25-9]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]],
        AX: [
          "358",
          "1\\d{5,11}|[35]\\d{5,9}|[27]\\d{4,9}|4\\d{5,10}|6\\d{7,9}|8\\d{6,9}",
          [
            ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]00|[6-8]0)"]],
            ["(116\\d{3})", "$1", ["116"], "$1"],
            ["(\\d{2})(\\d{4,10})", "$1 $2", ["[14]|2[09]|50|7[135]"]],
            ["(\\d)(\\d{4,11})", "$1 $2", ["[25689][1-8]|3"]],
          ],
          "0",
          "0$1",
          null,
          null,
          null,
          null,
          [
            "18[1-8]\\d{3,9}",
            "4\\d{5,10}|50\\d{4,8}",
            "800\\d{4,7}",
            "[67]00\\d{5,6}",
            null,
            null,
            "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})",
          ],
        ],
        AZ: [
          "994",
          "[1-9]\\d{8}",
          [
            [
              "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4",
              ["(?:1[28]|2(?:[45]2|[0-36])|365)"],
            ],
            [
              "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4",
              ["[4-8]"],
              "0$1",
            ],
            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
          ],
          "0",
          "(0$1)",
        ],
        BA: [
          "387",
          "[3-9]\\d{7,8}",
          [
            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"]],
            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"]],
            ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6[047]"]],
          ],
          "0",
          "0$1",
        ],
        BB: [
          "1",
          "[2589]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "246",
        ],
        BD: [
          "880",
          "[2-79]\\d{5,9}|1\\d{9}|8[0-7]\\d{4,8}",
          [
            ["(2)(\\d{7,8})", "$1-$2", ["2"]],
            ["(\\d{2})(\\d{4,6})", "$1-$2", ["[3-79]1"]],
            [
              "(\\d{4})(\\d{3,6})",
              "$1-$2",
              [
                "1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[016])",
              ],
            ],
            ["(\\d{3})(\\d{3,7})", "$1-$2", ["[3-79][2-9]|8"]],
          ],
          "0",
          "0$1",
        ],
        BE: [
          "32",
          "[1-9]\\d{7,8}",
          [
            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4[6-9]"]],
            [
              "(\\d)(\\d{3})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4",
              ["[23]|4[23]|9[2-4]"],
            ],
            [
              "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4",
              ["[156]|7[018]|8(?:0[1-9]|[1-79])"],
            ],
            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"]],
          ],
          "0",
          "0$1",
        ],
        BF: [
          "226",
          "[25-7]\\d{7}",
          [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]],
        ],
        BG: [
          "359",
          "[23567]\\d{5,7}|[489]\\d{6,8}",
          [
            ["(2)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"]],
            ["(2)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"]],
            ["(\\d{3})(\\d{4})", "$1 $2", ["43[124-7]|70[1-9]"]],
            ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[124-7]|70[1-9]"]],
            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[78]00"]],
            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["999"]],
            [
              "(\\d{2})(\\d{3})(\\d{2,3})",
              "$1 $2 $3",
              ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],
            ],
            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["48|8[7-9]|9[08]"]],
          ],
          "0",
          "0$1",
        ],
        BH: ["973", "[136-9]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2"]]],
        BI: [
          "257",
          "[267]\\d{7}",
          [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]],
        ],
        BJ: [
          "229",
          "[2689]\\d{7}|7\\d{3}",
          [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]],
        ],
        BL: [
          "590",
          "[56]\\d{8}",
          [["([56]90)(\\d{2})(\\d{4})", "$1 $2-$3"]],
          "0",
          null,
          null,
          null,
          null,
          null,
          ["590(?:2[7-9]|5[12]|87)\\d{4}", "690(?:0[0-7]|[1-9]\\d)\\d{4}"],
        ],
        BM: [
          "1",
          "[4589]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "441",
        ],
        BN: ["673", "[2-578]\\d{6}", [["([2-578]\\d{2})(\\d{4})", "$1 $2"]]],
        BO: [
          "591",
          "[23467]\\d{7}",
          [
            ["([234])(\\d{7})", "$1 $2", ["[234]"]],
            ["([67]\\d{7})", "$1", ["[67]"]],
          ],
          "0",
          null,
          "0(1\\d)?",
        ],
        BQ: [
          "599",
          "[347]\\d{6}",
          [
            ["(\\d{3})(\\d{4})", "$1 $2", ["[13-7]"]],
            ["(9)(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]],
          ],
          null,
          null,
          null,
          null,
          null,
          null,
          [
            "(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}",
            "(?:31(?:8[14-8]|9[14578])|416[145-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}",
          ],
        ],
        BR: [
          "55",
          "[1-46-9]\\d{7,10}|5(?:[0-4]\\d{7,9}|5(?:[2-8]\\d{7}|9\\d{7,8}))",
          [
            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)"],
            [
              "(\\d{2})(\\d{5})(\\d{4})",
              "$1 $2-$3",
              ["(?:[14689][1-9]|2[12478]|3[1-578]|5[1-5]|7[13-579])9"],
              "($1)",
            ],
            ["(\\d{4})(\\d{4})", "$1-$2", ["(?:300|40(?:0|20))"]],
            ["([3589]00)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1"],
          ],
          "0",
          null,
          "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?",
          "$2",
        ],
        BS: [
          "1",
          "[2589]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "242",
        ],
        BT: [
          "975",
          "[1-8]\\d{6,7}",
          [
            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1|77"]],
            ["([2-8])(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
          ],
        ],
        BW: [
          "267",
          "[2-79]\\d{6,7}",
          [
            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]],
            ["(7\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]],
            ["(90)(\\d{5})", "$1 $2", ["9"]],
          ],
        ],
        BY: [
          "375",
          "[1-4]\\d{8}|800\\d{3,7}|[89]\\d{9,10}",
          [
            [
              "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
              "$1 $2-$3-$4",
              [
                "17[0-3589]|2[4-9]|[34]",
                "17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]",
              ],
              "8 0$1",
            ],
            [
              "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
              "$1 $2-$3-$4",
              [
                "1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])",
                "1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])",
              ],
              "8 0$1",
            ],
            [
              "(\\d{4})(\\d{2})(\\d{3})",
              "$1 $2-$3",
              [
                "1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])",
                "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])",
              ],
              "8 0$1",
            ],
            ["([89]\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8[01]|9"], "8 $1"],
            ["(82\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["82"], "8 $1"],
            ["(800)(\\d{3})", "$1 $2", ["800"], "8 $1"],
            ["(800)(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
          ],
          "8",
          null,
          "8?0?",
        ],
        BZ: [
          "501",
          "[2-8]\\d{6}|0\\d{10}",
          [
            ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
            ["(0)(800)(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]],
          ],
        ],
        CA: [
          "1",
          "[2-9]\\d{9}|3\\d{6}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          null,
          [
            "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}|310\\d{4}",
            "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",
            "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}|310\\d{4}",
            "900[2-9]\\d{6}",
            "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",
          ],
        ],
        CC: [
          "61",
          "[1458]\\d{5,9}",
          [
            ["([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]|14"], "0$1"],
            ["(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"],
            ["(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
            [
              "(1[389]\\d{2})(\\d{3})(\\d{3})",
              "$1 $2 $3",
              ["1(?:[38]0|90)", "1(?:[38]00|90)"],
              "$1",
            ],
            ["(180)(2\\d{3})", "$1 $2", ["180", "1802"], "$1"],
            ["(19\\d)(\\d{3})", "$1 $2", ["19[13]"], "$1"],
            ["(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"], "$1"],
            ["(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"], "$1"],
          ],
          "0",
          null,
          null,
          null,
          null,
          null,
          [
            "89162\\d{4}",
            "14(?:5\\d|71)\\d{5}|4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}",
            "180(?:0\\d{3}|2)\\d{3}",
            "190[0126]\\d{6}",
            "500\\d{6}",
            null,
            null,
            null,
            "550\\d{6}",
            "13(?:00\\d{2})?\\d{4}",
          ],
        ],
        CD: [
          "243",
          "[2-6]\\d{6}|[18]\\d{6,8}|9\\d{8}",
          [
            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["12"]],
            ["([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[0-2459]|9"]],
            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"]],
            ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"]],
          ],
          "0",
          "0$1",
        ],
        CF: [
          "236",
          "[278]\\d{7}",
          [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]],
        ],
        CG: [
          "242",
          "[028]\\d{8}",
          [
            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]],
            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
          ],
        ],
        CH: [
          "41",
          "[2-9]\\d{8}|860\\d{9}",
          [
            [
              "([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4",
              ["[2-7]|[89]1"],
            ],
            ["([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"]],
            [
              "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4 $5",
              ["860"],
            ],
          ],
          "0",
          "0$1",
        ],
        CI: [
          "225",
          "[02-8]\\d{7}",
          [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]],
        ],
        CK: ["682", "[2-8]\\d{4}", [["(\\d{2})(\\d{3})", "$1 $2"]]],
        CL: [
          "56",
          "(?:[2-9]|600|123)\\d{7,8}",
          [
            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)"],
            [
              "(\\d{2})(\\d{3})(\\d{4})",
              "$1 $2 $3",
              ["[357]|4[1-35]|6[13-57]"],
              "($1)",
            ],
            ["(9)(\\d{4})(\\d{4})", "$1 $2 $3", ["9"]],
            ["(44)(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
            ["([68]00)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"], "$1"],
            ["(600)(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"], "$1"],
            ["(1230)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "$1"],
            ["(\\d{5})(\\d{4})", "$1 $2", ["219"], "($1)"],
          ],
          "0",
          "0$1",
          "0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))",
        ],
        CM: [
          "237",
          "[2368]\\d{7,8}",
          [
            [
              "([26])(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4 $5",
              ["[26]"],
            ],
            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|88"]],
            ["(800)(\\d{2})(\\d{3})", "$1 $2 $3", ["80"]],
          ],
        ],
        CN: [
          "86",
          "[1-7]\\d{6,11}|8[0-357-9]\\d{6,9}|9\\d{7,10}",
          [
            ["(80\\d{2})(\\d{4})", "$1 $2", ["80[2678]"], "0$1", "true"],
            ["([48]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"]],
            [
              "(\\d{2})(\\d{5,6})",
              "$1 $2",
              [
                "(?:10|2\\d)[19]",
                "(?:10|2\\d)(?:10|9[56])",
                "(?:10|2\\d)(?:100|9[56])",
              ],
              "0$1",
            ],
            [
              "(\\d{3})(\\d{5,6})",
              "$1 $2",
              ["[3-9]", "[3-9]\\d{2}[19]", "[3-9]\\d{2}(?:10|9[56])"],
              "0$1",
            ],
            ["(21)(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", "true"],
            [
              "([12]\\d)(\\d{4})(\\d{4})",
              "$1 $2 $3",
              [
                "10[1-9]|2[02-9]",
                "10[1-9]|2[02-9]",
                "10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]",
              ],
              "0$1",
              "true",
            ],
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "$1 $2 $3",
              [
                "3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])",
              ],
              "0$1",
              "true",
            ],
            [
              "(\\d{3})(\\d{4})(\\d{4})",
              "$1 $2 $3",
              [
                "3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98)",
              ],
              "0$1",
              "true",
            ],
            [
              "(\\d{4})(\\d{3})(\\d{4})",
              "$1 $2 $3",
              ["807", "8078"],
              "0$1",
              "true",
            ],
            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-578]"]],
            ["(10800)(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"]],
            ["(\\d{3})(\\d{7,8})", "$1 $2", ["950"]],
          ],
          "0",
          null,
          "(1(?:[129]\\d{3}|79\\d{2}))|0",
        ],
        CO: [
          "57",
          "(?:[13]\\d{0,3}|[24-8])\\d{7}",
          [
            [
              "(\\d)(\\d{7})",
              "$1 $2",
              [
                "1(?:8[2-9]|9[0-3]|[2-7])|[24-8]",
                "1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]",
              ],
              "($1)",
            ],
            ["(\\d{3})(\\d{7})", "$1 $2", ["3"]],
            [
              "(1)(\\d{3})(\\d{7})",
              "$1-$2-$3",
              ["1(?:80|9[04])", "1(?:800|9(?:0[01]|4[78]))"],
              "0$1",
              null,
              "$1 $2 $3",
            ],
          ],
          "0",
          null,
          "0([3579]|4(?:44|56))?",
        ],
        CR: [
          "506",
          "[24-9]\\d{7,9}",
          [
            ["(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"]],
            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]0"]],
          ],
          null,
          null,
          "(19(?:0[012468]|1[09]|20|66|77|99))",
        ],
        CU: [
          "53",
          "[2-57]\\d{5,7}",
          [
            ["(\\d)(\\d{6,7})", "$1 $2", ["7"]],
            ["(\\d{2})(\\d{4,6})", "$1 $2", ["[2-4]"]],
            ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"],
          ],
          "0",
          "(0$1)",
        ],
        CV: ["238", "[259]\\d{6}", [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3"]]],
        CW: [
          "599",
          "[169]\\d{6,7}",
          [
            ["(\\d{3})(\\d{4})", "$1 $2", ["[13-7]"]],
            ["(9)(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]],
          ],
          null,
          null,
          null,
          null,
          null,
          null,
          [
            "9(?:[48]\\d{2}|50\\d|7(?:2[0-24]|[34]\\d|6[35-7]|77|8[7-9]))\\d{4}",
            "9(?:5(?:[12467]\\d|3[01])|6(?:[15-9]\\d|3[01]))\\d{4}",
            null,
            null,
            null,
            null,
            null,
            "955\\d{5}",
            null,
            "60[0-2]\\d{4}",
          ],
        ],
        CX: [
          "61",
          "[1458]\\d{5,9}",
          [
            ["([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]|14"], "0$1"],
            ["(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"],
            ["(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
            [
              "(1[389]\\d{2})(\\d{3})(\\d{3})",
              "$1 $2 $3",
              ["1(?:[38]0|90)", "1(?:[38]00|90)"],
              "$1",
            ],
            ["(180)(2\\d{3})", "$1 $2", ["180", "1802"], "$1"],
            ["(19\\d)(\\d{3})", "$1 $2", ["19[13]"], "$1"],
            ["(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"], "$1"],
            ["(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"], "$1"],
          ],
          "0",
          null,
          null,
          null,
          null,
          null,
          [
            "89164\\d{4}",
            "14(?:5\\d|71)\\d{5}|4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}",
            "180(?:0\\d{3}|2)\\d{3}",
            "190[0126]\\d{6}",
            "500\\d{6}",
            null,
            null,
            null,
            "550\\d{6}",
            "13(?:00\\d{2})?\\d{4}",
          ],
        ],
        CY: ["357", "[257-9]\\d{7}", [["(\\d{2})(\\d{6})", "$1 $2"]]],
        CZ: [
          "420",
          "[2-8]\\d{8}|9\\d{8,11}",
          [
            ["([2-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
            ["(96\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["96"]],
            ["(9\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9[36]"]],
          ],
        ],
        DE: [
          "49",
          "[1-35-9]\\d{3,14}|4(?:[0-8]\\d{4,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,8})",
          [
            ["(1\\d{2})(\\d{7,8})", "$1 $2", ["1[67]"]],
            ["(15\\d{3})(\\d{6})", "$1 $2", ["15[0568]"]],
            ["(1\\d{3})(\\d{7})", "$1 $2", ["15"]],
            ["(\\d{2})(\\d{3,11})", "$1 $2", ["3[02]|40|[68]9"]],
            [
              "(\\d{3})(\\d{3,11})",
              "$1 $2",
              [
                "2(?:\\d1|0[2389]|1[24]|28|34)|3(?:[3-9][15]|40)|[4-8][1-9]1|9(?:06|[1-9]1)",
              ],
            ],
            [
              "(\\d{4})(\\d{2,11})",
              "$1 $2",
              [
                "[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])",
                "[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|4[1246]|6[1-4]|7[1346]|8[13568]|9[1246])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))",
              ],
            ],
            ["(3\\d{4})(\\d{1,10})", "$1 $2", ["3"]],
            ["(800)(\\d{7,12})", "$1 $2", ["800"]],
            [
              "(\\d{3})(\\d)(\\d{4,10})",
              "$1 $2 $3",
              ["(?:18|90)0|137", "1(?:37|80)|900[1359]"],
            ],
            ["(1\\d{2})(\\d{5,11})", "$1 $2", ["181"]],
            ["(18\\d{3})(\\d{6})", "$1 $2", ["185", "1850", "18500"]],
            ["(18\\d{2})(\\d{7})", "$1 $2", ["18[68]"]],
            ["(18\\d)(\\d{8})", "$1 $2", ["18[2-579]"]],
            ["(700)(\\d{4})(\\d{4})", "$1 $2 $3", ["700"]],
            ["(138)(\\d{4})", "$1 $2", ["138"]],
            ["(15[013-68])(\\d{2})(\\d{8})", "$1 $2 $3", ["15[013-68]"]],
            ["(15[279]\\d)(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"]],
            ["(1[67]\\d)(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"]],
          ],
          "0",
          "0$1",
        ],
        DJ: [
          "253",
          "[27]\\d{7}",
          [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]],
        ],
        DK: [
          "45",
          "[2-9]\\d{7}",
          [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]],
        ],
        DM: [
          "1",
          "[57-9]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "767",
        ],
        DO: [
          "1",
          "[589]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "8[024]9",
        ],
        DZ: [
          "213",
          "(?:[1-4]|[5-9]\\d)\\d{7}",
          [
            ["([1-4]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"]],
            ["([5-8]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"]],
            ["(9\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"]],
          ],
          "0",
          "0$1",
        ],
        EC: [
          "593",
          "1\\d{9,10}|[2-8]\\d{7}|9\\d{8}",
          [
            [
              "(\\d)(\\d{3})(\\d{4})",
              "$1 $2-$3",
              ["[247]|[356][2-8]"],
              null,
              null,
              "$1-$2-$3",
            ],
            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
            ["(1800)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"], "$1"],
          ],
          "0",
          "(0$1)",
        ],
        EE: [
          "372",
          "1\\d{3,4}|[3-9]\\d{6,7}|800\\d{6,7}",
          [
            [
              "([3-79]\\d{2})(\\d{4})",
              "$1 $2",
              [
                "[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]",
                "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]",
              ],
            ],
            ["(70)(\\d{2})(\\d{4})", "$1 $2 $3", ["70"]],
            ["(8000)(\\d{3})(\\d{3})", "$1 $2 $3", ["800", "8000"]],
            [
              "([458]\\d{3})(\\d{3,4})",
              "$1 $2",
              ["40|5|8(?:00|[1-5])", "40|5|8(?:00[1-9]|[1-5])"],
            ],
          ],
        ],
        EG: [
          "20",
          "1\\d{4,9}|[2456]\\d{8}|3\\d{7}|[89]\\d{8,9}",
          [
            ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"]],
            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[012]|[89]00"]],
            ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|[89][2-9]"]],
          ],
          "0",
          "0$1",
        ],
        EH: [
          "212",
          "[5-9]\\d{8}",
          [
            ["([5-7]\\d{2})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|[67]"]],
            [
              "([58]\\d{3})(\\d{5})",
              "$1-$2",
              [
                "5(?:2[2-489]|3[5-9]|92)|892",
                "5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892",
              ],
            ],
            ["(5\\d{4})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"]],
            [
              "([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4",
              ["5(?:4[067]|5[03])"],
            ],
            ["(8[09])(\\d{7})", "$1-$2", ["8(?:0|9[013-9])"]],
          ],
          "0",
          "0$1",
          null,
          null,
          null,
          "528[89]",
        ],
        ER: [
          "291",
          "[178]\\d{6}",
          [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3"]],
          "0",
          "0$1",
        ],
        ES: [
          "34",
          "[5-9]\\d{8}",
          [
            ["([89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
            [
              "([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4",
              ["[568]|[79][0-8]"],
            ],
          ],
        ],
        ET: [
          "251",
          "[1-59]\\d{8}",
          [["([1-59]\\d)(\\d{3})(\\d{4})", "$1 $2 $3"]],
          "0",
          "0$1",
        ],
        FI: [
          "358",
          "1\\d{4,11}|[2-9]\\d{4,10}",
          [
            ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]00|[6-8]0)"]],
            ["(116\\d{3})", "$1", ["116"], "$1"],
            ["(\\d{2})(\\d{4,10})", "$1 $2", ["[14]|2[09]|50|7[135]"]],
            ["(\\d)(\\d{4,11})", "$1 $2", ["[25689][1-8]|3"]],
          ],
          "0",
          "0$1",
          null,
          null,
          null,
          null,
          [
            "1(?:[3569][1-8]\\d{3,9}|[47]\\d{5,10})|2[1-8]\\d{3,9}|3(?:[1-8]\\d{3,9}|9\\d{4,8})|[5689][1-8]\\d{3,9}",
            "4\\d{5,10}|50\\d{4,8}",
            "800\\d{4,7}",
            "[67]00\\d{5,6}",
            null,
            null,
            "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})",
          ],
        ],
        FJ: [
          "679",
          "[36-9]\\d{6}|0\\d{10}",
          [
            ["(\\d{3})(\\d{4})", "$1 $2", ["[36-9]"]],
            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
          ],
        ],
        FK: ["500", "[2-7]\\d{4}"],
        FM: ["691", "[39]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]],
        FO: [
          "298",
          "[2-9]\\d{5}",
          [["(\\d{6})", "$1"]],
          null,
          null,
          "(10(?:01|[12]0|88))",
        ],
        FR: [
          "33",
          "[1-9]\\d{8}",
          [
            [
              "([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4 $5",
              ["[1-79]"],
            ],
            ["(8\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
          ],
          "0",
          "0$1",
        ],
        GA: [
          "241",
          "0?\\d{7}",
          [
            ["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
          ],
        ],
        GB: [
          "44",
          "\\d{7,10}",
          [
            [
              "(7\\d{3})(\\d{6})",
              "$1 $2",
              ["7(?:[1-5789]|62)", "7(?:[1-5789]|624)", "7(?:[1-5789]|6242)"],
            ],
            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]],
            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:1|\\d1)|3|9[018]"]],
            [
              "(\\d{5})(\\d{4,5})",
              "$1 $2",
              [
                "1(?:38|5[23]|69|76|94)",
                "1(?:387|5(?:24|39)|697|768|946)",
                "1(?:3873|5(?:242|39[456])|697[347]|768[347]|9467)",
              ],
            ],
            ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]],
            [
              "(800)(\\d{4})",
              "$1 $2",
              ["800", "8001", "80011", "800111", "8001111"],
            ],
            ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]],
            ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]],
            ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]],
            ["([58]00)(\\d{6})", "$1 $2", ["[58]00"]],
          ],
          "0",
          "0$1",
          null,
          null,
          null,
          null,
          [
            "2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[012])\\d{7}|1(?:(?:1(?:3[0-48]|[46][0-4]|5[0126-9]|7[0-49]|8[01349])|21[0-7]|31[0-8]|[459]1\\d|61[0-46-9]))\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-4789]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1235679]|9[24578])|4(?:0[03-9]|[28][02-5789]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1235-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-5789])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[023678]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-5789]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-5789]|4[2-9]|5[0-579]|6[234789]|7[0124578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-4789]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[015789]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[234678]\\d{2}|16977[23]\\d{3}",
            "7(?:[1-3]\\d{3}|4(?:[0-46-9]\\d{2}|5(?:[0-689]\\d|7[0-57-9]))|5(?:0[0-8]|[13-9]\\d|2[0-35-9])\\d|7(?:0(?:0[01]|[1-9]\\d)|[1-7]\\d{2}|8[02-9]\\d|9[0-689]\\d)|8(?:[014-9]\\d|[23][0-8])\\d|9(?:[024-9]\\d{2}|1(?:[02-9]\\d|1[028])|3[0-689]\\d))\\d{5}",
            "80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}",
            "(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}",
            "70\\d{8}",
            null,
            "(?:3[0347]|55)\\d{8}",
            "76(?:0[012]\\d|2(?:[356]\\d|4[013-9])|4[0134]\\d|5[49]\\d|6[0-369]\\d|77\\d|81\\d|9[39]\\d)\\d{5}",
            "56\\d{8}",
            "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})",
          ],
        ],
        GD: [
          "1",
          "[4589]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "473",
        ],
        GE: [
          "995",
          "[34578]\\d{8}",
          [
            [
              "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4",
              ["[348]"],
              "0$1",
            ],
            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"],
            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"], "$1"],
          ],
          "0",
        ],
        GF: [
          "594",
          "[56]\\d{8}",
          [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]],
          "0",
          "0$1",
        ],
        GG: [
          "44",
          "[135789]\\d{6,9}",
          [
            [
              "(7\\d{3})(\\d{6})",
              "$1 $2",
              ["7(?:[1-5789]|62)", "7(?:[1-5789]|624)", "7(?:[1-5789]|6242)"],
            ],
            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]],
            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:1|\\d1)|3|9[018]"]],
            [
              "(\\d{5})(\\d{4,5})",
              "$1 $2",
              [
                "1(?:38|5[23]|69|76|94)",
                "1(?:387|5(?:24|39)|697|768|946)",
                "1(?:3873|5(?:242|39[456])|697[347]|768[347]|9467)",
              ],
            ],
            ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]],
            [
              "(800)(\\d{4})",
              "$1 $2",
              ["800", "8001", "80011", "800111", "8001111"],
            ],
            ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]],
            ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]],
            ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]],
            ["([58]00)(\\d{6})", "$1 $2", ["[58]00"]],
          ],
          "0",
          "0$1",
          null,
          null,
          null,
          null,
          [
            "1481\\d{6}",
            "7(?:781\\d|839\\d|911[17])\\d{5}",
            "80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}",
            "(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}",
            "70\\d{8}",
            null,
            "(?:3[0347]|55)\\d{8}",
            "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",
            "56\\d{8}",
            "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})",
          ],
        ],
        GH: [
          "233",
          "[235]\\d{8}|8\\d{7}",
          [
            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"]],
            ["(\\d{3})(\\d{5})", "$1 $2", ["8"]],
          ],
          "0",
          "0$1",
        ],
        GI: ["350", "[2568]\\d{7}", [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]],
        GL: [
          "299",
          "[1-689]\\d{5}",
          [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3"]],
        ],
        GM: ["220", "[2-9]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]],
        GN: [
          "224",
          "[367]\\d{7,8}",
          [
            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]],
          ],
        ],
        GP: [
          "590",
          "[56]\\d{8}",
          [["([56]90)(\\d{2})(\\d{4})", "$1 $2-$3"]],
          "0",
          "0$1",
          null,
          null,
          null,
          null,
          [
            "590(?:0[13468]|1[012]|2[0-68]|3[28]|4[0-8]|5[579]|6[0189]|70|8[0-689]|9\\d)\\d{4}",
            "690(?:0[0-7]|[1-9]\\d)\\d{4}",
          ],
        ],
        GQ: [
          "240",
          "[23589]\\d{8}",
          [
            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
            ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]],
          ],
        ],
        GR: [
          "30",
          "[26-9]\\d{9}",
          [
            ["([27]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[2-9]1|[689]"]],
            ["(2\\d{3})(\\d{6})", "$1 $2", ["2[2-9][02-9]"]],
          ],
        ],
        GT: [
          "502",
          "[2-7]\\d{7}|1[89]\\d{9}",
          [
            ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
          ],
        ],
        GU: [
          "1",
          "[5689]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "671",
        ],
        GW: [
          "245",
          "(?:4(?:0\\d{5}|4\\d{7})|9\\d{8})",
          [
            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["44|9[567]"]],
            ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
          ],
        ],
        GY: ["592", "[2-46-9]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]],
        HK: [
          "852",
          "[235-7]\\d{7}|8\\d{7,8}|9\\d{4,10}",
          [
            ["(\\d{4})(\\d{4})", "$1 $2", ["[235-7]|[89](?:0[1-9]|[1-9])"]],
            ["(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["800"]],
            ["(900)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["900"]],
            ["(900)(\\d{2,5})", "$1 $2", ["900"]],
          ],
        ],
        HN: ["504", "[237-9]\\d{7}", [["(\\d{4})(\\d{4})", "$1-$2"]]],
        HR: [
          "385",
          "[1-7]\\d{5,8}|[89]\\d{6,8}",
          [
            ["(1)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"]],
            ["([2-5]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"]],
            ["(9\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"]],
            ["(6[01])(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"]],
            ["([67]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"]],
            ["(80[01])(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"]],
            ["(80[01])(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
          ],
          "0",
          "0$1",
        ],
        HT: [
          "509",
          "[2-489]\\d{7}",
          [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3"]],
        ],
        HU: [
          "36",
          "[1-9]\\d{7,8}",
          [
            ["(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"]],
          ],
          "06",
          "($1)",
        ],
        ID: [
          "62",
          "(?:[1-79]\\d{6,10}|8\\d{7,11})",
          [
            ["(\\d{2})(\\d{5,8})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
            [
              "(\\d{3})(\\d{5,8})",
              "$1 $2",
              ["[4579]|2[035-9]|[36][02-9]"],
              "(0$1)",
            ],
            ["(8\\d{2})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"]],
            ["(8\\d{2})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8[1-35-9]"]],
            ["(1)(500)(\\d{3})", "$1 $2 $3", ["15"], "$1"],
            ["(177)(\\d{6,8})", "$1 $2", ["17"]],
            ["(800)(\\d{5,7})", "$1 $2", ["800"]],
            ["(804)(\\d{3})(\\d{4})", "$1 $2 $3", ["804"]],
            ["(80\\d)(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80[79]"]],
          ],
          "0",
          "0$1",
        ],
        IE: [
          "353",
          "[124-9]\\d{6,9}",
          [
            ["(1)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]],
            ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"]],
            ["(\\d{3})(\\d{5})", "$1 $2", ["40[24]|50[45]"]],
            ["(48)(\\d{4})(\\d{4})", "$1 $2 $3", ["48"]],
            ["(818)(\\d{3})(\\d{3})", "$1 $2 $3", ["81"]],
            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[24-69]|7[14]"]],
            ["([78]\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["76|8[35-9]"], "0$1"],
            ["(700)(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
            [
              "(\\d{4})(\\d{3})(\\d{3})",
              "$1 $2 $3",
              ["1(?:8[059]|5)", "1(?:8[059]0|5)"],
              "$1",
            ],
          ],
          "0",
          "(0$1)",
        ],
        IL: [
          "972",
          "1\\d{6,11}|[2-589]\\d{3}(?:\\d{3,6})?|6\\d{3}|7\\d{6,9}",
          [
            ["([2-489])(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
            ["([57]\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
            ["(153)(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["153"]],
            ["(1)([7-9]\\d{2})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
            ["(1255)(\\d{3})", "$1-$2", ["125"]],
            ["(1200)(\\d{3})(\\d{3})", "$1-$2-$3", ["120"]],
            ["(1212)(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
            ["(1599)(\\d{6})", "$1-$2", ["15"]],
            ["(\\d{4})", "*$1", ["[2-689]"]],
          ],
          "0",
          "$1",
        ],
        IM: [
          "44",
          "[135789]\\d{6,9}",
          [
            [
              "(7\\d{3})(\\d{6})",
              "$1 $2",
              ["7(?:[1-5789]|62)", "7(?:[1-5789]|624)", "7(?:[1-5789]|6242)"],
            ],
            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]],
            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:1|\\d1)|3|9[018]"]],
            [
              "(\\d{5})(\\d{4,5})",
              "$1 $2",
              [
                "1(?:38|5[23]|69|76|94)",
                "1(?:387|5(?:24|39)|697|768|946)",
                "1(?:3873|5(?:242|39[456])|697[347]|768[347]|9467)",
              ],
            ],
            ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]],
            [
              "(800)(\\d{4})",
              "$1 $2",
              ["800", "8001", "80011", "800111", "8001111"],
            ],
            ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]],
            ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]],
            ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]],
            ["([58]00)(\\d{6})", "$1 $2", ["[58]00"]],
          ],
          "0",
          "0$1",
          null,
          null,
          null,
          null,
          [
            "1624\\d{6}",
            "7(?:4576|[59]24\\d)\\d{5}",
            "808162\\d{4}",
            "(?:872299|90[0167]624)\\d{4}",
            "70\\d{8}",
            null,
            "3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}",
            "76242\\d{5}",
            "56\\d{8}",
            "8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}",
          ],
        ],
        IN: [
          "91",
          "008\\d{9}|1\\d{7,12}|[2-9]\\d{9,10}",
          [
            [
              "(\\d{5})(\\d{5})",
              "$1 $2",
              [
                "600|7(?:[02-8]|19|9[037-9])|8(?:0[015-9]|[1-9]|20)|9",
                "600|7(?:[078]|19[0-5]|2(?:[02356-9]|[14][017-9]|9[389])|3(?:[025-9]|1[07-9]|[34][017-9])|4(?:[0-35689]|[47][017-9])|5(?:[02346-9]|1[017-9]|5[017-9])|6(?:[02-9]|1[0-257-9])|9(?:[089]|31|7[02-9]))|8(?:0(?:[01589]|6[67]|7[02-9])|1(?:[0-57-9]|6[07-9])|2(?:0[078]|[14][07-9]|[235-9])|3(?:[0357-9]|[126][07-9]|4[1-9])|[45]|6(?:[02457-9]|[136][07-9])|7(?:[078][07-9]|[1-69])|8(?:[0-25-9]|3[07-9]|4[047-9])|9(?:[02-9]|1[027-9]))|9",
                "600|7(?:0|19[0-5]|2(?:[0235679]|[14][017-9]|8(?:[0-569]|[78][089])|9[389])|3(?:[05-8]|1(?:[089]|7[5-9])|2(?:[5-8]|[0-49][089])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|[2345][089]|40|7[0189]))|4(?:[056]|1(?:[0135-9]|[23][089]|2[089]|4[089])|2(?:0[089]|[1-7][089]|[89])|3(?:[0-8][089]|9)|4(?:[089]|11|7[02-8])|7(?:[089]|11|7[02-8])|8(?:[0-24-7][089]|[389])|9(?:[0-7][089]|[89]))|5(?:[0346-9]|1[017-9]|2(?:[03-9]|[12][089])|5[017-9])|6(?:[0346-9]|1[0-257-9]|2(?:[0-4]\\d|[5-9][089])|5(?:[0-367][089]|[4589]))|7(?:0(?:[02-9]|1[089])|[1-9])|8(?:[0-79]|8(?:0[0189]|11|8[013-9]|9))|9(?:[089]|313|7(?:[02-8]|9[07-9])))|8(?:0(?:[01589]|6[67]|7(?:[02-8]|9[05-9]))|1(?:[02-57-9]|1(?:[0-35-9]|4[0-46-9])|6(?:[089]|7[02-8]))|2(?:0(?:[08]|7[02])|[14](?:[089]|7[02-8])|[235-9])|3(?:[0357-9]|1(?:[089]|7[02-6])|2(?:[09]|77|8[0-689])|4[1-9]|6(?:[089]|7[02-7]))|[45]|6(?:[02457-9]|1(?:[089]|7[02-8])|3(?:[089]|7[02358])|6(?:[08]|7[02-8]|9[01]))|7(?:0[07-9]|[1-69]|7(?:[089]|7[02-8])|8(?:[089]|7[02-8]))|8(?:[0-25-9]|3(?:[089]|7[02-8])|4(?:[0489]|7[02-68]))|9(?:[02-9]|1(?:[0289]|7[2-6])))|9",
              ],
            ],
            [
              "(\\d{2})(\\d{4})(\\d{4})",
              "$1 $2 $3",
              ["11|2[02]|33|4[04]|79[1-9]|80[2-46]"],
            ],
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "$1 $2 $3",
              [
                "1(?:2[0-249]|3[0-25]|4[145]|[569][14]|7[1257]|8[1346]|[68][1-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|[36][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2345]1|57|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)",
              ],
            ],
            [
              "(\\d{4})(\\d{3})(\\d{3})",
              "$1 $2 $3",
              ["1(?:[23579]|[468][1-9])|[2-8]"],
            ],
            ["(\\d{2})(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3 $4", ["008"]],
            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], "$1"],
            ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["160", "1600"], "$1"],
            ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], "$1"],
            ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["180", "1800"], "$1"],
            ["(\\d{4})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["186", "1860"], "$1"],
            [
              "(\\d{4})(\\d{3})(\\d{3})(\\d{3})",
              "$1 $2 $3 $4",
              ["18[06]"],
              "$1",
            ],
          ],
          "0",
          "0$1",
          null,
          null,
          !0,
        ],
        IO: ["246", "3\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]],
        IQ: [
          "964",
          "[1-7]\\d{7,9}",
          [
            ["(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
            ["([2-6]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"]],
            ["(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]],
          ],
          "0",
          "0$1",
        ],
        IR: [
          "98",
          "[1-8]\\d{9}|9(?:[0-4]\\d{8}|9\\d{2,8})",
          [
            ["(21)(\\d{3,5})", "$1 $2", ["21"]],
            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"]],
            ["(\\d{3})(\\d{3})", "$1 $2", ["9"]],
            ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["9"]],
            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"]],
          ],
          "0",
          "0$1",
        ],
        IS: [
          "354",
          "[4-9]\\d{6}|38\\d{7}",
          [
            ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
            ["(3\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]],
          ],
        ],
        IT: [
          "39",
          "[01589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9})",
          [
            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|55"]],
            ["(0[26])(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
            ["(0[26])(\\d{4,6})", "$1 $2", ["0[26]"]],
            ["(0\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]],
            [
              "(\\d{3})(\\d{3,6})",
              "$1 $2",
              [
                "0[13-57-9][0159]|8(?:03|4[17]|9[245])",
                "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))",
              ],
            ],
            ["(0\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["0[13-57-9][2-46-8]"]],
            ["(0\\d{3})(\\d{2,6})", "$1 $2", ["0[13-57-9][2-46-8]"]],
            [
              "(\\d{3})(\\d{3})(\\d{3,4})",
              "$1 $2 $3",
              ["[13]|8(?:00|4[08]|9[59])", "[13]|8(?:00|4[08]|9(?:5[5-9]|9))"],
            ],
            ["(\\d{4})(\\d{4})", "$1 $2", ["894", "894[5-9]"]],
            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]],
          ],
          null,
          null,
          null,
          null,
          null,
          null,
          [
            "0(?:[26]\\d{4,9}|(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7})",
            "3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})",
            "80(?:0\\d{6}|3\\d{3})",
            "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})",
            "1(?:78\\d|99)\\d{6}",
            null,
            null,
            null,
            "55\\d{8}",
            "84(?:[08]\\d{6}|[17]\\d{3})",
          ],
        ],
        JE: [
          "44",
          "[135789]\\d{6,9}",
          [
            [
              "(7\\d{3})(\\d{6})",
              "$1 $2",
              ["7(?:[1-5789]|62)", "7(?:[1-5789]|624)", "7(?:[1-5789]|6242)"],
            ],
            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]],
            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:1|\\d1)|3|9[018]"]],
            [
              "(\\d{5})(\\d{4,5})",
              "$1 $2",
              [
                "1(?:38|5[23]|69|76|94)",
                "1(?:387|5(?:24|39)|697|768|946)",
                "1(?:3873|5(?:242|39[456])|697[347]|768[347]|9467)",
              ],
            ],
            ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]],
            [
              "(800)(\\d{4})",
              "$1 $2",
              ["800", "8001", "80011", "800111", "8001111"],
            ],
            ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]],
            ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]],
            ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]],
            ["([58]00)(\\d{6})", "$1 $2", ["[58]00"]],
          ],
          "0",
          "0$1",
          null,
          null,
          null,
          null,
          [
            "1534\\d{6}",
            "7(?:509\\d|7(?:00[378]|97[7-9])|829\\d|937\\d)\\d{5}",
            "80(?:07(?:35|81)|8901)\\d{4}",
            "(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}",
            "701511\\d{4}",
            null,
            "3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}",
            "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",
            "56\\d{8}",
            "8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}",
          ],
        ],
        JM: [
          "1",
          "[589]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "876",
        ],
        JO: [
          "962",
          "[235-9]\\d{7,8}",
          [
            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
            ["(7)(\\d{4})(\\d{4})", "$1 $2 $3", ["7[457-9]"]],
            ["(\\d{3})(\\d{5,6})", "$1 $2", ["70|8[0158]|9"]],
          ],
          "0",
          "0$1",
        ],
        JP: [
          "81",
          "[1-9]\\d{8,9}|00(?:[36]\\d{7,14}|7\\d{5,7}|8\\d{7})",
          [
            ["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"]],
            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"]],
            ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]0|80[1-9]"]],
            [
              "(\\d{4})(\\d)(\\d{4})",
              "$1-$2-$3",
              [
                "1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|5(?:76|97)|499|746|8(?:3[89]|63|47|51)|9(?:49|80|9[16])",
                "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:76|97)9|499[2468]|7468|8(?:3(?:8[78]|96)|636|477|51[24])|9(?:496|802|9(?:1[23]|69))",
                "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:769|979[2-69])|499[2468]|7468|8(?:3(?:8[78]|96[2457-9])|636[2-57-9]|477|51[24])|9(?:496|802|9(?:1[23]|69))",
              ],
            ],
            [
              "(\\d{3})(\\d{2})(\\d{4})",
              "$1-$2-$3",
              [
                "1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])",
                "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:7[2-6]|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|[4-7]))",
                "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6[56]))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))",
                "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6(?:5[25]|60)))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))",
              ],
            ],
            [
              "(\\d{2})(\\d{3})(\\d{4})",
              "$1-$2-$3",
              [
                "1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:[2-589]|39)|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93)",
                "1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93[34])",
                "1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93(?:31|4))",
              ],
            ],
            [
              "(\\d{3})(\\d{2})(\\d{4})",
              "$1-$2-$3",
              ["2(?:9[14-79]|74|[34]7|[56]9)|82|993"],
            ],
            [
              "(\\d)(\\d{4})(\\d{4})",
              "$1-$2-$3",
              ["3|4(?:2[09]|7[01])|6[1-9]"],
            ],
            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2479][1-9]"]],
          ],
          "0",
          "0$1",
        ],
        KE: [
          "254",
          "20\\d{6,7}|[4-9]\\d{6,9}",
          [
            ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"]],
            ["(\\d{3})(\\d{6})", "$1 $2", ["7"]],
            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"]],
          ],
          "0",
          "0$1",
          "005|0",
        ],
        KG: [
          "996",
          "[235-8]\\d{8,9}",
          [
            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[25-7]|31[25]"]],
            ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[36]|[2-9])"]],
            ["(\\d{3})(\\d{3})(\\d)(\\d{3})", "$1 $2 $3 $4", ["8"]],
          ],
          "0",
          "0$1",
        ],
        KH: [
          "855",
          "[1-9]\\d{7,9}",
          [
            [
              "(\\d{2})(\\d{3})(\\d{3,4})",
              "$1 $2 $3",
              ["1\\d[1-9]|[2-9]"],
              "0$1",
            ],
            ["(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[89]0"]],
          ],
          "0",
        ],
        KI: ["686", "[2458]\\d{4}|3\\d{4,7}|7\\d{7}", [], null, null, "0"],
        KM: ["269", "[3478]\\d{6}", [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3"]]],
        KN: [
          "1",
          "[589]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "869",
        ],
        KP: [
          "850",
          "1\\d{9}|[28]\\d{7}",
          [
            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]],
            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
          ],
          "0",
          "0$1",
        ],
        KR: [
          "82",
          "007\\d{9,11}|[1-7]\\d{3,9}|8\\d{8}",
          [
            [
              "(\\d{2})(\\d{4})(\\d{4})",
              "$1-$2-$3",
              [
                "1(?:0|1[19]|[69]9|5[458])|[57]0",
                "1(?:0|1[19]|[69]9|5(?:44|59|8))|[57]0",
              ],
            ],
            [
              "(\\d{2})(\\d{3,4})(\\d{4})",
              "$1-$2-$3",
              [
                "1(?:[01]|5[1-4]|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]",
                "1(?:[01]|5(?:[1-3]|4[56])|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]",
              ],
            ],
            ["(\\d{3})(\\d)(\\d{4})", "$1-$2-$3", ["131", "1312"]],
            ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["131", "131[13-9]"]],
            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["13[2-9]"]],
            ["(\\d{2})(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3-$4", ["30"]],
            ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2[1-9]"]],
            ["(\\d)(\\d{3,4})", "$1-$2", ["21[0-46-9]"]],
            [
              "(\\d{2})(\\d{3,4})",
              "$1-$2",
              ["[3-6][1-9]1", "[3-6][1-9]1(?:[0-46-9])"],
            ],
            [
              "(\\d{4})(\\d{4})",
              "$1-$2",
              [
                "1(?:5[246-9]|6[04678]|8[03579])",
                "1(?:5(?:22|44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|33|55|77|99))",
              ],
              "$1",
            ],
          ],
          "0",
          "0$1",
          "0(8[1-46-8]|85\\d{2})?",
        ],
        KW: [
          "965",
          "[12569]\\d{6,7}",
          [
            [
              "(\\d{4})(\\d{3,4})",
              "$1 $2",
              ["[16]|2(?:[0-35-9]|4[0-35-9])|9[024-9]|52[25]"],
            ],
            ["(\\d{3})(\\d{5})", "$1 $2", ["244|5(?:[015]|66)"]],
          ],
        ],
        KY: [
          "1",
          "[3589]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "345",
        ],
        KZ: [
          "7",
          "(?:33\\d|7\\d{2}|80[09])\\d{7}",
          [
            [
              "([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})",
              "$1 $2-$3-$4",
              ["[34689]"],
            ],
            ["(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]],
          ],
          "8",
          null,
          null,
          null,
          null,
          null,
          [
            "33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}",
            "7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\d{7}",
            "800\\d{7}",
            "809\\d{7}",
            null,
            null,
            null,
            null,
            "751\\d{7}",
          ],
        ],
        LA: [
          "856",
          "[2-8]\\d{7,9}",
          [
            ["(20)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["20"]],
            ["([2-8]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"]],
            ["(30)(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30"]],
          ],
          "0",
          "0$1",
        ],
        LB: [
          "961",
          "[13-9]\\d{6,7}",
          [
            [
              "(\\d)(\\d{3})(\\d{3})",
              "$1 $2 $3",
              ["[13-6]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]|9"],
              "0$1",
            ],
            [
              "([7-9]\\d)(\\d{3})(\\d{3})",
              "$1 $2 $3",
              ["[89][01]|7(?:[01]|6[013-9]|8[89]|9[1-3])"],
            ],
          ],
          "0",
        ],
        LC: [
          "1",
          "[5789]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "758",
        ],
        LI: [
          "423",
          "6\\d{8}|[23789]\\d{6}",
          [
            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[23789]"]],
            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[56]"]],
            ["(69)(7\\d{2})(\\d{4})", "$1 $2 $3", ["697"]],
          ],
          "0",
          null,
          "0|10(?:01|20|66)",
        ],
        LK: [
          "94",
          "[1-9]\\d{8}",
          [
            ["(\\d{2})(\\d{1})(\\d{6})", "$1 $2 $3", ["[1-689]"]],
            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]],
          ],
          "0",
          "0$1",
        ],
        LR: [
          "231",
          "2\\d{7,8}|[378]\\d{8}|4\\d{6}|5\\d{6,8}",
          [
            ["(2\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
            ["([4-5])(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]"]],
            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"]],
          ],
          "0",
          "0$1",
        ],
        LS: ["266", "[2568]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2"]]],
        LT: [
          "370",
          "[3-9]\\d{7}",
          [
            ["([34]\\d)(\\d{6})", "$1 $2", ["37|4(?:1|5[45]|6[2-4])"]],
            [
              "([3-6]\\d{2})(\\d{5})",
              "$1 $2",
              ["3[148]|4(?:[24]|6[09])|528|6"],
            ],
            ["([7-9]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1"],
            ["(5)(2\\d{2})(\\d{4})", "$1 $2 $3", ["52[0-79]"]],
          ],
          "8",
          "(8-$1)",
          "[08]",
          null,
          !0,
        ],
        LU: [
          "352",
          "[24-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5[013-9]\\d{1,8})",
          [
            [
              "(\\d{2})(\\d{3})",
              "$1 $2",
              ["[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])"],
            ],
            [
              "(\\d{2})(\\d{2})(\\d{2})",
              "$1 $2 $3",
              ["[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])"],
            ],
            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20"]],
            [
              "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
              "$1 $2 $3 $4",
              ["2(?:[0367]|4[3-8])"],
            ],
            ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
            [
              "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
              "$1 $2 $3 $4 $5",
              ["2(?:[0367]|4[3-8])"],
            ],
            [
              "(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})",
              "$1 $2 $3 $4",
              [
                "2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:[1-9]|0[2-9])|9(?:[1-9]|0[2-46-9])",
              ],
            ],
            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["70|80[01]|90[015]"]],
            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
          ],
          null,
          null,
          "(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)",
        ],
        LV: [
          "371",
          "[2689]\\d{7}",
          [["([2689]\\d)(\\d{3})(\\d{3})", "$1 $2 $3"]],
        ],
        LY: [
          "218",
          "[25679]\\d{8}",
          [["([25679]\\d)(\\d{7})", "$1-$2"]],
          "0",
          "0$1",
        ],
        MA: [
          "212",
          "[5-9]\\d{8}",
          [
            ["([5-7]\\d{2})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|[67]"]],
            [
              "([58]\\d{3})(\\d{5})",
              "$1-$2",
              [
                "5(?:2[2-489]|3[5-9]|92)|892",
                "5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892",
              ],
            ],
            ["(5\\d{4})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"]],
            [
              "([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4",
              ["5(?:4[067]|5[03])"],
            ],
            ["(8[09])(\\d{7})", "$1-$2", ["8(?:0|9[013-9])"]],
          ],
          "0",
          "0$1",
          null,
          null,
          null,
          null,
          [
            "5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\d|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])\\d|4[067]\\d{2}|5[03]\\d{2})\\d{4}",
            "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[07][07]|6[12]))\\d{6}",
            "80\\d{7}",
            "89\\d{7}",
            null,
            null,
            null,
            null,
            "5924[01]\\d{4}",
          ],
        ],
        MC: [
          "377",
          "[34689]\\d{7,8}",
          [
            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"], "$1"],
            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"]],
            ["(6)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"]],
            ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["8"], "$1"],
          ],
          "0",
          "0$1",
        ],
        MD: [
          "373",
          "[235-9]\\d{7}",
          [
            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"]],
            ["([25-7]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["2[13-9]|[5-7]"]],
            ["([89]\\d{2})(\\d{5})", "$1 $2", ["[89]"]],
          ],
          "0",
          "0$1",
        ],
        ME: [
          "382",
          "[2-9]\\d{7,8}",
          [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]|6[036-9]"]]],
          "0",
          "0$1",
        ],
        MF: [
          "590",
          "[56]\\d{8}",
          [["([56]90)(\\d{2})(\\d{4})", "$1 $2-$3"]],
          "0",
          null,
          null,
          null,
          null,
          null,
          [
            "590(?:[02][79]|13|5[0-268]|[78]7)\\d{4}",
            "690(?:0[0-7]|[1-9]\\d)\\d{4}",
          ],
        ],
        MG: [
          "261",
          "[23]\\d{8}",
          [["([23]\\d)(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4"]],
          "0",
          "0$1",
        ],
        MH: ["692", "[2-6]\\d{6}", [["(\\d{3})(\\d{4})", "$1-$2"]], "1"],
        MK: [
          "389",
          "[2-578]\\d{7}",
          [
            ["(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]],
            ["([347]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"]],
            ["([58]\\d{2})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"]],
          ],
          "0",
          "0$1",
        ],
        ML: [
          "223",
          "[246-9]\\d{7}",
          [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[246-9]"]]],
        ],
        MM: [
          "95",
          "[1478]\\d{5,7}|[256]\\d{5,8}|9(?:[279]\\d{0,2}|[58]|[34]\\d{1,2}|6\\d?)\\d{6}",
          [
            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1|2[245]"]],
            ["(2)(\\d{4})(\\d{4})", "$1 $2 $3", ["251"]],
            ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"]],
            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["67|81"]],
            ["(\\d{2})(\\d{2})(\\d{3,4})", "$1 $2 $3", ["[4-8]"]],
            [
              "(9)(\\d{3})(\\d{4,6})",
              "$1 $2 $3",
              ["9(?:2[0-4]|[35-9]|4[137-9])"],
            ],
            ["(9)([34]\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:3[0-36]|4[0-57-9])"]],
            ["(9)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92[56]"]],
            ["(9)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["93"]],
          ],
          "0",
          "0$1",
        ],
        MN: [
          "976",
          "[12]\\d{7,9}|[57-9]\\d{7}",
          [
            ["([12]\\d)(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"]],
            ["([12]2\\d)(\\d{5,6})", "$1 $2", ["[12]2[1-3]"]],
            [
              "([12]\\d{3})(\\d{5})",
              "$1 $2",
              ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)2"],
            ],
            ["(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"], "$1"],
            [
              "([12]\\d{4})(\\d{4,5})",
              "$1 $2",
              ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)[4-9]"],
            ],
          ],
          "0",
          "0$1",
        ],
        MO: ["853", "[268]\\d{7}", [["([268]\\d{3})(\\d{4})", "$1 $2"]]],
        MP: [
          "1",
          "[5689]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "670",
        ],
        MQ: [
          "596",
          "[56]\\d{8}",
          [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]],
          "0",
          "0$1",
        ],
        MR: [
          "222",
          "[2-48]\\d{7}",
          [["([2-48]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]],
        ],
        MS: [
          "1",
          "[5689]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "664",
        ],
        MT: ["356", "[2357-9]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2"]]],
        MU: [
          "230",
          "[2-9]\\d{6,7}",
          [
            ["([2-46-9]\\d{2})(\\d{4})", "$1 $2", ["[2-46-9]"]],
            ["(5\\d{3})(\\d{4})", "$1 $2", ["5"]],
          ],
        ],
        MV: [
          "960",
          "[346-8]\\d{6,9}|9(?:00\\d{7}|\\d{6})",
          [
            ["(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9(?:[1-9]|0[1-9])"]],
            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]00"]],
          ],
        ],
        MW: [
          "265",
          "(?:1(?:\\d{2})?|[2789]\\d{2})\\d{6}",
          [
            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
            ["(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1789]"]],
          ],
          "0",
          "0$1",
        ],
        MX: [
          "52",
          "[1-9]\\d{9,10}",
          [
            ["([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["33|55|81"]],
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "$1 $2 $3",
              ["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"],
            ],
            [
              "(1)([358]\\d)(\\d{4})(\\d{4})",
              "044 $2 $3 $4",
              ["1(?:33|55|81)"],
              "$1",
              null,
              "$1 $2 $3 $4",
            ],
            [
              "(1)(\\d{3})(\\d{3})(\\d{4})",
              "044 $2 $3 $4",
              ["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"],
              "$1",
              null,
              "$1 $2 $3 $4",
            ],
          ],
          "01",
          "01 $1",
          "0[12]|04[45](\\d{10})",
          "1$1",
          !0,
        ],
        MY: [
          "60",
          "[13-9]\\d{7,9}",
          [
            ["([4-79])(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
            ["(3)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
            [
              "([18]\\d)(\\d{3})(\\d{3,4})",
              "$1-$2 $3",
              ["1[02-46-9][1-9]|8"],
              "0$1",
            ],
            ["(1)([36-8]00)(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]0"]],
            ["(11)(\\d{4})(\\d{4})", "$1-$2 $3", ["11"], "0$1"],
            ["(15[49])(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
          ],
          "0",
        ],
        MZ: [
          "258",
          "[28]\\d{7,8}",
          [
            ["([28]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-7]"]],
            ["(80\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["80"]],
          ],
        ],
        NA: [
          "264",
          "[68]\\d{7,8}",
          [
            ["(8\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["8[1235]"]],
            ["(6\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"]],
            ["(88)(\\d{3})(\\d{3})", "$1 $2 $3", ["88"]],
            ["(870)(\\d{3})(\\d{3})", "$1 $2 $3", ["870"]],
          ],
          "0",
          "0$1",
        ],
        NC: [
          "687",
          "[2-57-9]\\d{5}",
          [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-46-9]|5[0-4]"]]],
        ],
        NE: [
          "227",
          "[0289]\\d{7}",
          [
            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[289]|09"]],
            ["(08)(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
          ],
        ],
        NF: [
          "672",
          "[13]\\d{5}",
          [
            ["(\\d{2})(\\d{4})", "$1 $2", ["1"]],
            ["(\\d)(\\d{5})", "$1 $2", ["3"]],
          ],
        ],
        NG: [
          "234",
          "[1-6]\\d{5,8}|9\\d{5,9}|[78]\\d{5,13}",
          [
            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"]],
            [
              "(\\d{2})(\\d{3})(\\d{2,3})",
              "$1 $2 $3",
              ["[3-6]|7(?:[1-79]|0[1-9])|8[2-9]"],
            ],
            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["70|8[01]|90[235-9]"]],
            ["([78]00)(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]00"]],
            ["([78]00)(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]00"]],
            ["(78)(\\d{2})(\\d{3})", "$1 $2 $3", ["78"]],
          ],
          "0",
          "0$1",
        ],
        NI: ["505", "[12578]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2"]]],
        NL: [
          "31",
          "1\\d{4,8}|[2-7]\\d{8}|[89]\\d{6,9}",
          [
            [
              "([1-578]\\d)(\\d{3})(\\d{4})",
              "$1 $2 $3",
              ["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"],
            ],
            [
              "([1-5]\\d{2})(\\d{3})(\\d{3})",
              "$1 $2 $3",
              ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],
            ],
            ["(6)(\\d{8})", "$1 $2", ["6[0-57-9]"]],
            ["(66)(\\d{7})", "$1 $2", ["66"]],
            ["(14)(\\d{3,4})", "$1 $2", ["14"], "$1"],
            ["([89]0\\d)(\\d{4,7})", "$1 $2", ["80|9"]],
          ],
          "0",
          "0$1",
        ],
        NO: [
          "47",
          "0\\d{4}|[2-9]\\d{7}",
          [
            ["([489]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]],
            [
              "([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4",
              ["[235-7]"],
            ],
          ],
          null,
          null,
          null,
          null,
          null,
          null,
          [
            "(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}",
            "(?:4[015-8]|5[89]|87|9\\d)\\d{6}",
            "80[01]\\d{5}",
            "82[09]\\d{5}",
            "880\\d{5}",
            "81[23]\\d{5}",
            "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}",
            null,
            "85[0-5]\\d{5}",
            "810(?:0[0-6]|[2-8]\\d)\\d{3}",
          ],
        ],
        NP: [
          "977",
          "[1-8]\\d{7}|9(?:[1-69]\\d{6,8}|7[2-6]\\d{5,7}|8\\d{8})",
          [
            ["(1)(\\d{7})", "$1-$2", ["1[2-6]"]],
            ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-69]|7[15-9])"]],
            ["(9\\d{2})(\\d{7})", "$1-$2", ["9(?:6[013]|7[245]|8)"], "$1"],
          ],
          "0",
          "0$1",
        ],
        NR: ["674", "[458]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]],
        NU: ["683", "[1-5]\\d{3}"],
        NZ: [
          "64",
          "6[235-9]\\d{6}|[2-57-9]\\d{7,10}",
          [
            [
              "([34679])(\\d{3})(\\d{4})",
              "$1-$2 $3",
              ["[346]|7[2-57-9]|9[1-9]"],
            ],
            ["(24099)(\\d{3})", "$1 $2", ["240", "2409", "24099"]],
            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["21"]],
            [
              "(\\d{2})(\\d{3})(\\d{3,5})",
              "$1 $2 $3",
              ["2(?:1[1-9]|[69]|7[0-35-9])|70|86"],
            ],
            ["(2\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"]],
            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|5|[89]0"]],
          ],
          "0",
          "0$1",
        ],
        OM: [
          "968",
          "(?:5|[279]\\d)\\d{6}|800\\d{5,6}",
          [
            ["(2\\d)(\\d{6})", "$1 $2", ["2"]],
            ["([79]\\d{3})(\\d{4})", "$1 $2", ["[79]"]],
            ["([58]00)(\\d{4,6})", "$1 $2", ["[58]"]],
          ],
        ],
        PA: [
          "507",
          "[1-9]\\d{6,7}",
          [
            ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
            ["(\\d{4})(\\d{4})", "$1-$2", ["6"]],
          ],
        ],
        PE: [
          "51",
          "[14-9]\\d{7,8}",
          [
            ["(1)(\\d{7})", "$1 $2", ["1"]],
            ["([4-8]\\d)(\\d{6})", "$1 $2", ["[4-7]|8[2-4]"]],
            ["(\\d{3})(\\d{5})", "$1 $2", ["80"]],
            ["(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "$1"],
          ],
          "0",
          "(0$1)",
        ],
        PF: [
          "689",
          "4\\d{5,7}|8\\d{7}",
          [
            [
              "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4",
              ["4[09]|8[79]"],
            ],
            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
          ],
        ],
        PG: [
          "675",
          "[1-9]\\d{6,7}",
          [
            ["(\\d{3})(\\d{4})", "$1 $2", ["[13-689]|27"]],
            ["(\\d{4})(\\d{4})", "$1 $2", ["20|7"]],
          ],
        ],
        PH: [
          "63",
          "2\\d{5,7}|[3-9]\\d{7,9}|1800\\d{7,9}",
          [
            ["(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
            ["(2)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
            [
              "(\\d{4})(\\d{4,6})",
              "$1 $2",
              [
                "3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])",
                "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))",
              ],
              "(0$1)",
            ],
            [
              "(\\d{5})(\\d{4})",
              "$1 $2",
              ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"],
              "(0$1)",
            ],
            ["([3-8]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-8]"], "(0$1)"],
            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["81|9"], "0$1"],
            ["(1800)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
            ["(1800)(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]],
          ],
          "0",
        ],
        PK: [
          "92",
          "1\\d{8}|[2-8]\\d{5,11}|9(?:[013-9]\\d{4,9}|2\\d(?:111\\d{6}|\\d{3,7}))",
          [
            [
              "(\\d{2})(111)(\\d{3})(\\d{3})",
              "$1 $2 $3 $4",
              [
                "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1",
                "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11",
                "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111",
              ],
            ],
            [
              "(\\d{3})(111)(\\d{3})(\\d{3})",
              "$1 $2 $3 $4",
              [
                "2[349]|45|54|60|72|8[2-5]|9[2-9]",
                "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1",
                "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11",
                "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111",
              ],
            ],
            [
              "(\\d{2})(\\d{7,8})",
              "$1 $2",
              ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],
            ],
            [
              "(\\d{3})(\\d{6,7})",
              "$1 $2",
              [
                "2[349]|45|54|60|72|8[2-5]|9[2-9]",
                "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d[2-9]",
              ],
            ],
            ["(3\\d{2})(\\d{7})", "$1 $2", ["3"], "0$1"],
            ["([15]\\d{3})(\\d{5,6})", "$1 $2", ["58[12]|1"]],
            ["(586\\d{2})(\\d{5})", "$1 $2", ["586"]],
            ["([89]00)(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]00"], "0$1"],
          ],
          "0",
          "(0$1)",
        ],
        PL: [
          "48",
          "[12]\\d{6,8}|[3-57-9]\\d{8}|6\\d{5,8}",
          [
            [
              "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4",
              [
                "[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]",
              ],
            ],
            ["(\\d{2})(\\d{1})(\\d{4})", "$1 $2 $3", ["[12]2"]],
            [
              "(\\d{3})(\\d{3})(\\d{3})",
              "$1 $2 $3",
              ["26|39|5[0137]|6[0469]|7[02389]|8[08]"],
            ],
            ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
            ["(\\d{3})(\\d{3})", "$1 $2", ["64"]],
          ],
        ],
        PM: [
          "508",
          "[45]\\d{5}",
          [["([45]\\d)(\\d{2})(\\d{2})", "$1 $2 $3"]],
          "0",
          "0$1",
        ],
        PR: [
          "1",
          "[5789]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "787|939",
        ],
        PS: [
          "970",
          "[24589]\\d{7,8}|1(?:[78]\\d{8}|[49]\\d{2,3})",
          [
            ["([2489])(2\\d{2})(\\d{4})", "$1 $2 $3", ["[2489]"]],
            ["(5[69]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["5"]],
            ["(1[78]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[78]"], "$1"],
          ],
          "0",
          "0$1",
        ],
        PT: [
          "351",
          "[2-46-9]\\d{8}",
          [
            ["(2\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
            [
              "([2-46-9]\\d{2})(\\d{3})(\\d{3})",
              "$1 $2 $3",
              ["2[3-9]|[346-9]"],
            ],
          ],
        ],
        PW: ["680", "[2-8]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]],
        PY: [
          "595",
          "5[0-5]\\d{4,7}|[2-46-9]\\d{5,8}",
          [
            [
              "(\\d{2})(\\d{5})",
              "$1 $2",
              ["(?:[26]1|3[289]|4[124678]|7[123]|8[1236])"],
              "(0$1)",
            ],
            [
              "(\\d{2})(\\d{3})(\\d{3,4})",
              "$1 $2 $3",
              ["(?:[26]1|3[289]|4[124678]|7[123]|8[1236])"],
              "(0$1)",
            ],
            ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
            ["(\\d{3})(\\d{6})", "$1 $2", ["9[1-9]"], "0$1"],
            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8700"]],
            ["(\\d{3})(\\d{4,5})", "$1 $2", ["[2-8][1-9]"], "(0$1)"],
            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8][1-9]"], "0$1"],
          ],
          "0",
        ],
        QA: [
          "974",
          "[2-8]\\d{6,7}",
          [
            ["([28]\\d{2})(\\d{4})", "$1 $2", ["[28]"]],
            ["([3-7]\\d{3})(\\d{4})", "$1 $2", ["[3-7]"]],
          ],
        ],
        RE: [
          "262",
          "[268]\\d{8}",
          [["([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]],
          "0",
          "0$1",
          null,
          null,
          null,
          "262|6[49]|8",
        ],
        RO: [
          "40",
          "[23]\\d{5,8}|[7-9]\\d{8}",
          [
            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"]],
            ["(\\d{2})(\\d{4})", "$1 $2", ["[23]1"]],
            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23][3-7]|[7-9]"]],
            ["(2\\d{2})(\\d{3})", "$1 $2", ["2[3-6]"]],
          ],
          "0",
          "0$1",
        ],
        RS: [
          "381",
          "[126-9]\\d{4,11}|3(?:[0-79]\\d{3,10}|8[2-9]\\d{2,9})",
          [
            ["([23]\\d{2})(\\d{4,9})", "$1 $2", ["(?:2[389]|39)0"]],
            [
              "([1-3]\\d)(\\d{5,10})",
              "$1 $2",
              ["1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"],
            ],
            ["(6\\d)(\\d{6,8})", "$1 $2", ["6"]],
            ["([89]\\d{2})(\\d{3,9})", "$1 $2", ["[89]"]],
            ["(7[26])(\\d{4,9})", "$1 $2", ["7[26]"]],
            ["(7[08]\\d)(\\d{4,9})", "$1 $2", ["7[08]"]],
          ],
          "0",
          "0$1",
        ],
        RU: [
          "7",
          "[3489]\\d{9}",
          [
            [
              "([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})",
              "$1 $2-$3-$4",
              ["[34689]"],
            ],
            ["(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]],
          ],
          "8",
          "8 ($1)",
          null,
          null,
          !0,
          null,
          [
            "(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}",
            "9\\d{9}",
            "80[04]\\d{7}",
            "80[39]\\d{7}",
          ],
        ],
        RW: [
          "250",
          "[027-9]\\d{7,8}",
          [
            ["(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "$1"],
            ["([7-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"],
            ["(0\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
          ],
          "0",
        ],
        SA: [
          "966",
          "1\\d{7,8}|(?:[2-467]|92)\\d{7}|5\\d{8}|8\\d{9}",
          [
            ["([1-467])(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-467]"]],
            ["(1\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[1-467]"]],
            ["(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"]],
            ["(92\\d{2})(\\d{5})", "$1 $2", ["92"], "$1"],
            ["(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "$1"],
            ["(811)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"]],
          ],
          "0",
          "0$1",
        ],
        SB: [
          "677",
          "[1-9]\\d{4,6}",
          [["(\\d{2})(\\d{5})", "$1 $2", ["[7-9]"]]],
        ],
        SC: [
          "248",
          "[24689]\\d{5,6}",
          [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"]]],
        ],
        SD: [
          "249",
          "[19]\\d{8}",
          [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3"]],
          "0",
          "0$1",
        ],
        SE: [
          "46",
          "[1-35-9]\\d{5,11}|4\\d{6,8}",
          [
            [
              "(8)(\\d{2,3})(\\d{2,3})(\\d{2})",
              "$1-$2 $3 $4",
              ["8"],
              null,
              null,
              "$1 $2 $3 $4",
            ],
            [
              "([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})",
              "$1-$2 $3 $4",
              ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"],
              null,
              null,
              "$1 $2 $3 $4",
            ],
            [
              "([1-469]\\d)(\\d{3})(\\d{2})",
              "$1-$2 $3",
              ["1[136]|2[136]|3[356]|4[0246]|6[03]|90"],
              null,
              null,
              "$1 $2 $3",
            ],
            [
              "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
              "$1-$2 $3 $4",
              [
                "1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])",
              ],
              null,
              null,
              "$1 $2 $3 $4",
            ],
            [
              "(\\d{3})(\\d{2,3})(\\d{2})",
              "$1-$2 $3",
              [
                "1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])",
              ],
              null,
              null,
              "$1 $2 $3",
            ],
            [
              "(7\\d)(\\d{3})(\\d{2})(\\d{2})",
              "$1-$2 $3 $4",
              ["7"],
              null,
              null,
              "$1 $2 $3 $4",
            ],
            ["(77)(\\d{2})(\\d{2})", "$1-$2$3", ["7"], null, null, "$1 $2 $3"],
            [
              "(20)(\\d{2,3})(\\d{2})",
              "$1-$2 $3",
              ["20"],
              null,
              null,
              "$1 $2 $3",
            ],
            [
              "(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})",
              "$1-$2 $3 $4",
              ["9[034]"],
              null,
              null,
              "$1 $2 $3 $4",
            ],
            ["(9[034]\\d)(\\d{4})", "$1-$2", ["9[034]"], null, null, "$1 $2"],
            [
              "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
              "$1-$2 $3 $4 $5",
              ["25[245]|67[3-6]"],
              null,
              null,
              "$1 $2 $3 $4 $5",
            ],
          ],
          "0",
          "0$1",
        ],
        SG: [
          "65",
          "[36]\\d{7}|[17-9]\\d{7,10}",
          [
            ["([3689]\\d{3})(\\d{4})", "$1 $2", ["[369]|8[1-9]"]],
            ["(1[89]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[89]"]],
            ["(7000)(\\d{4})(\\d{3})", "$1 $2 $3", ["70"]],
            ["(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]],
          ],
        ],
        SH: [
          "290",
          "[256]\\d{4}",
          [],
          null,
          null,
          null,
          null,
          null,
          null,
          [
            "2(?:[0-57-9]\\d|6[4-9])\\d{2}",
            "[56]\\d{4}",
            null,
            null,
            null,
            null,
            null,
            null,
            "262\\d{2}",
          ],
        ],
        SI: [
          "386",
          "[1-7]\\d{6,7}|[89]\\d{4,7}",
          [
            [
              "(\\d)(\\d{3})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4",
              ["[12]|3[24-8]|4[24-8]|5[2-8]|7[3-8]"],
              "(0$1)",
            ],
            [
              "([3-7]\\d)(\\d{3})(\\d{3})",
              "$1 $2 $3",
              ["[37][01]|4[0139]|51|6"],
            ],
            ["([89][09])(\\d{3,6})", "$1 $2", ["[89][09]"]],
            ["([58]\\d{2})(\\d{5})", "$1 $2", ["59|8[1-3]"]],
          ],
          "0",
          "0$1",
        ],
        SJ: [
          "47",
          "0\\d{4}|[45789]\\d{7}",
          [
            ["([489]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]],
            [
              "([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4",
              ["[235-7]"],
            ],
          ],
          null,
          null,
          null,
          null,
          null,
          null,
          [
            "79\\d{6}",
            "(?:4[015-8]|5[89]|9\\d)\\d{6}",
            "80[01]\\d{5}",
            "82[09]\\d{5}",
            "880\\d{5}",
            "81[23]\\d{5}",
            "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}",
            null,
            "85[0-5]\\d{5}",
            "810(?:0[0-6]|[2-8]\\d)\\d{3}",
          ],
        ],
        SK: [
          "421",
          "(?:[2-68]\\d{5,8}|9\\d{6,8})",
          [
            ["(2)(1[67])(\\d{3,4})", "$1 $2 $3", ["21[67]"]],
            ["([3-5]\\d)(1[67])(\\d{2,3})", "$1 $2 $3", ["[3-5]"]],
            ["(2)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"]],
            ["([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"]],
            ["([689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"]],
            ["(9090)(\\d{3})", "$1 $2", ["9090"]],
          ],
          "0",
          "0$1",
        ],
        SL: [
          "232",
          "[2-9]\\d{7}",
          [["(\\d{2})(\\d{6})", "$1 $2"]],
          "0",
          "(0$1)",
        ],
        SM: [
          "378",
          "[05-7]\\d{7,9}",
          [
            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
            ["(0549)(\\d{6})", "$1 $2", ["0"], null, null, "($1) $2"],
            ["(\\d{6})", "0549 $1", ["[89]"], null, null, "(0549) $1"],
          ],
          null,
          null,
          "(?:0549)?([89]\\d{5})",
          "0549$1",
        ],
        SN: [
          "221",
          "[3789]\\d{8}",
          [
            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]],
            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
          ],
        ],
        SO: [
          "252",
          "[1-9]\\d{5,8}",
          [
            ["(\\d{6})", "$1", ["[134]"]],
            ["(\\d)(\\d{6})", "$1 $2", ["2[0-79]|[13-5]"]],
            ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]],
            ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
            ["(\\d{2})(\\d{5,7})", "$1 $2", ["15|28|6[1-35-9]|799|9[2-9]"]],
            [
              "(\\d{3})(\\d{3})(\\d{3})",
              "$1 $2 $3",
              ["3[59]|4[89]|6[24-6]|79|8[08]|90"],
            ],
          ],
          "0",
        ],
        SR: [
          "597",
          "[2-8]\\d{5,6}",
          [
            ["(\\d{3})(\\d{3})", "$1-$2", ["[2-4]|5[2-58]"]],
            ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
            ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]],
          ],
        ],
        SS: [
          "211",
          "[19]\\d{8}",
          [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", null, "0$1"]],
          "0",
        ],
        ST: ["239", "[29]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]],
        SV: [
          "503",
          "[267]\\d{7}|[89]\\d{6}(?:\\d{4})?",
          [
            ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
            ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]],
          ],
        ],
        SX: [
          "1",
          "[5789]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "721",
        ],
        SY: [
          "963",
          "[1-59]\\d{7,8}",
          [
            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"]],
            ["(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]],
          ],
          "0",
          "0$1",
          null,
          null,
          !0,
        ],
        SZ: ["268", "[027]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2", ["[027]"]]]],
        TA: [
          "290",
          "8\\d{3}",
          [],
          null,
          null,
          null,
          null,
          null,
          null,
          ["8\\d{3}"],
        ],
        TC: [
          "1",
          "[5689]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "649",
        ],
        TD: [
          "235",
          "[2679]\\d{7}",
          [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]],
        ],
        TG: [
          "228",
          "[29]\\d{7}",
          [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[29]"]]],
        ],
        TH: [
          "66",
          "[2-9]\\d{7,8}|1\\d{3}(?:\\d{5,6})?",
          [
            ["(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]],
            ["([13-9]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"]],
            ["(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1"], "$1"],
          ],
          "0",
          "0$1",
        ],
        TJ: [
          "992",
          "[3-57-9]\\d{8}",
          [
            ["([349]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"]],
            [
              "([457-9]\\d)(\\d{3})(\\d{4})",
              "$1 $2 $3",
              ["4[148]|[578]|9(?:1[59]|[0235-9])"],
            ],
            [
              "(331700)(\\d)(\\d{2})",
              "$1 $2 $3",
              ["331", "3317", "33170", "331700"],
            ],
            [
              "(\\d{4})(\\d)(\\d{4})",
              "$1 $2 $3",
              ["3[1-5]", "3(?:[1245]|3(?:[02-9]|1[0-589]))"],
            ],
          ],
          "8",
          "$1",
          null,
          null,
          !0,
        ],
        TK: ["690", "[2-47]\\d{3,6}"],
        TL: [
          "670",
          "[2-489]\\d{6}|7\\d{6,7}",
          [
            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]"]],
            ["(\\d{4})(\\d{4})", "$1 $2", ["7"]],
          ],
        ],
        TM: [
          "993",
          "[1-6]\\d{7}",
          [
            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"]],
            ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"],
            ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["13|[2-5]"]],
          ],
          "8",
          "(8 $1)",
        ],
        TN: [
          "216",
          "[2-57-9]\\d{7}",
          [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3"]],
        ],
        TO: [
          "676",
          "[02-8]\\d{4,6}",
          [
            ["(\\d{2})(\\d{3})", "$1-$2", ["[1-6]|7[0-4]|8[05]"]],
            ["(\\d{3})(\\d{4})", "$1 $2", ["7[5-9]|8[47-9]"]],
            ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
          ],
        ],
        TR: [
          "90",
          "[2-589]\\d{9}|444\\d{4}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4",
              ["[23]|4(?:[0-35-9]|4[0-35-9])"],
              "(0$1)",
              "true",
            ],
            [
              "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
              "$1 $2 $3 $4",
              ["5[02-69]"],
              "0$1",
              "true",
            ],
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "$1 $2 $3",
              ["51|[89]"],
              "0$1",
              "true",
            ],
            ["(444)(\\d{1})(\\d{3})", "$1 $2 $3", ["444"]],
          ],
          "0",
        ],
        TT: [
          "1",
          "[589]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "868",
        ],
        TV: ["688", "[279]\\d{4,6}"],
        TW: [
          "886",
          "2\\d{6,8}|[3-689]\\d{7,8}|7\\d{7,9}",
          [
            ["(20)(\\d)(\\d{4})", "$1 $2 $3", ["202"]],
            ["(20)(\\d{3})(\\d{4})", "$1 $2 $3", ["20[013-9]"]],
            [
              "([2-8])(\\d{3,4})(\\d{4})",
              "$1 $2 $3",
              ["2[23-8]|[3-6]|[78][1-9]"],
            ],
            ["([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["80|9"]],
            ["(70)(\\d{4})(\\d{4})", "$1 $2 $3", ["70"]],
          ],
          "0",
          "0$1",
        ],
        TZ: [
          "255",
          "\\d{9}",
          [
            ["([24]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"]],
            ["([67]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"]],
            ["([89]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"]],
          ],
          "0",
          "0$1",
        ],
        UA: [
          "380",
          "[3-9]\\d{8}",
          [
            [
              "([3-9]\\d)(\\d{3})(\\d{4})",
              "$1 $2 $3",
              [
                "[38]9|4(?:[45][0-5]|87)|5(?:0|6[37]|7[37])|6[36-8]|7|9[1-9]",
                "[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|7|9[1-9]",
              ],
            ],
            [
              "([3-689]\\d{2})(\\d{3})(\\d{3})",
              "$1 $2 $3",
              [
                "3[1-8]2|4[13678]2|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90",
                "3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90",
              ],
            ],
            [
              "([3-6]\\d{3})(\\d{5})",
              "$1 $2",
              [
                "3(?:5[013-9]|[1-46-8])|4(?:[137][013-9]|6|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6[0135-9]|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])",
                "3(?:5[013-9]|[1-46-8](?:22|[013-9]))|4(?:[137][013-9]|6(?:[013-9]|22)|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6(?:3[02389]|[015689])|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])",
              ],
            ],
          ],
          "0",
          "0$1",
        ],
        UG: [
          "256",
          "\\d{9}",
          [
            [
              "(\\d{3})(\\d{6})",
              "$1 $2",
              ["[7-9]|20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])"],
            ],
            ["(\\d{2})(\\d{7})", "$1 $2", ["3|4(?:[1-5]|6[0-36-9])"]],
            ["(2024)(\\d{5})", "$1 $2", ["2024"]],
          ],
          "0",
          "0$1",
        ],
        US: [
          "1",
          "[2-9]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          !0,
          null,
          [
            "(?:2(?:0[1-35-9]|1[02-9]|2[04589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6}",
            null,
            "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
            "900[2-9]\\d{6}",
            "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",
          ],
        ],
        UY: [
          "598",
          "[2489]\\d{6,7}",
          [
            ["(\\d{4})(\\d{4})", "$1 $2", ["[24]"]],
            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9[1-9]"], "0$1"],
            ["(\\d{3})(\\d{4})", "$1 $2", ["[89]0"], "0$1"],
          ],
          "0",
        ],
        UZ: [
          "998",
          "[679]\\d{8}",
          [["([679]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]],
          "8",
          "8 $1",
        ],
        VA: [
          "39",
          "(?:0(?:878\\d{5}|6698\\d{5})|[1589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9}))",
          [
            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|55"]],
            ["(0[26])(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
            ["(0[26])(\\d{4,6})", "$1 $2", ["0[26]"]],
            ["(0\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]],
            [
              "(\\d{3})(\\d{3,6})",
              "$1 $2",
              [
                "0[13-57-9][0159]|8(?:03|4[17]|9[245])",
                "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))",
              ],
            ],
            ["(0\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["0[13-57-9][2-46-8]"]],
            ["(0\\d{3})(\\d{2,6})", "$1 $2", ["0[13-57-9][2-46-8]"]],
            [
              "(\\d{3})(\\d{3})(\\d{3,4})",
              "$1 $2 $3",
              ["[13]|8(?:00|4[08]|9[59])", "[13]|8(?:00|4[08]|9(?:5[5-9]|9))"],
            ],
            ["(\\d{4})(\\d{4})", "$1 $2", ["894", "894[5-9]"]],
            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]],
          ],
          null,
          null,
          null,
          null,
          null,
          null,
          [
            "06698\\d{5}",
            "3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})",
            "80(?:0\\d{6}|3\\d{3})",
            "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})",
            "1(?:78\\d|99)\\d{6}",
            null,
            null,
            null,
            "55\\d{8}",
            "84(?:[08]\\d{6}|[17]\\d{3})",
          ],
        ],
        VC: [
          "1",
          "[5789]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "784",
        ],
        VE: [
          "58",
          "[24589]\\d{9}",
          [["(\\d{3})(\\d{7})", "$1-$2"]],
          "0",
          "0$1",
        ],
        VG: [
          "1",
          "[2589]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "284",
        ],
        VI: [
          "1",
          "[3589]\\d{9}",
          [
            [
              "(\\d{3})(\\d{3})(\\d{4})",
              "($1) $2-$3",
              null,
              null,
              null,
              "$1-$2-$3",
            ],
          ],
          "1",
          null,
          null,
          null,
          null,
          "340",
        ],
        VN: [
          "84",
          "[167]\\d{6,9}|[2-59]\\d{7,9}|8\\d{6,8}",
          [
            ["([17]99)(\\d{4})", "$1 $2", ["[17]99"]],
            [
              "([48])(\\d{4})(\\d{4})",
              "$1 $2 $3",
              ["4|8(?:[1-57]|[689][0-79])"],
            ],
            [
              "([235-7]\\d)(\\d{4})(\\d{3})",
              "$1 $2 $3",
              ["2[025-79]|3[0136-9]|5[2-9]|6[0-46-8]|7[02-79]"],
            ],
            ["(80)(\\d{5})", "$1 $2", ["80"]],
            ["(69\\d)(\\d{4,5})", "$1 $2", ["69"]],
            [
              "([235-7]\\d{2})(\\d{4})(\\d{3})",
              "$1 $2 $3",
              ["2[1348]|3[25]|5[01]|65|7[18]"],
            ],
            ["([89]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8[689]8|9"]],
            [
              "(1[2689]\\d)(\\d{3})(\\d{4})",
              "$1 $2 $3",
              ["1(?:[26]|8[68]|99)"],
            ],
            ["(1[89]00)(\\d{4,6})", "$1 $2", ["1[89]0"], "$1"],
          ],
          "0",
          "0$1",
          null,
          null,
          !0,
        ],
        VU: [
          "678",
          "[2-57-9]\\d{4,6}",
          [["(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]],
        ],
        WF: ["681", "[4-8]\\d{5}", [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3"]]],
        WS: [
          "685",
          "[2-8]\\d{4,6}",
          [
            ["(8\\d{2})(\\d{3,4})", "$1 $2", ["8"]],
            ["(7\\d)(\\d{5})", "$1 $2", ["7"]],
            ["(\\d{5})", "$1", ["[2-6]"]],
          ],
        ],
        YE: [
          "967",
          "[1-7]\\d{6,8}",
          [
            ["([1-7])(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"]],
            ["(7\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7[0137]"]],
          ],
          "0",
          "0$1",
        ],
        YT: [
          "262",
          "[268]\\d{8}",
          [["([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]],
          "0",
          "0$1",
          null,
          null,
          null,
          "269|63",
        ],
        ZA: [
          "27",
          "[1-79]\\d{8}|8\\d{4,8}",
          [
            ["(860)(\\d{3})(\\d{3})", "$1 $2 $3", ["860"]],
            ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"]],
            ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"]],
            [
              "(\\d{2})(\\d{3})(\\d{4})",
              "$1 $2 $3",
              ["[1-79]|8(?:[0-57]|6[1-9])"],
            ],
          ],
          "0",
          "0$1",
        ],
        ZM: [
          "260",
          "[289]\\d{8}",
          [
            ["([29]\\d)(\\d{7})", "$1 $2", ["[29]"]],
            ["(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
          ],
          "0",
          "0$1",
        ],
        ZW: [
          "263",
          "2(?:[012457-9]\\d{3,8}|6(?:[14]\\d{7}|\\d{4}))|[13-79]\\d{4,9}|8[06]\\d{8}",
          [
            ["([49])(\\d{3})(\\d{2,4})", "$1 $2 $3", ["4|9[2-9]"]],
            ["(7\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["7"]],
            ["(86\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["86[24]"]],
            [
              "([2356]\\d{2})(\\d{3,5})",
              "$1 $2",
              [
                "2(?:0[45]|2[278]|[49]8|[78])|3(?:08|17|3[78]|7[1569]|8[37]|98)|5[15][78]|6(?:[29]8|[38]7|6[78]|75|[89]8)",
              ],
            ],
            [
              "(\\d{3})(\\d{3})(\\d{3,4})",
              "$1 $2 $3",
              ["2(?:1[39]|2[0157]|6[14]|7[35]|84)|329"],
            ],
            [
              "([1-356]\\d)(\\d{3,5})",
              "$1 $2",
              ["1[3-9]|2[0569]|3[0-69]|5[05689]|6[0-46-9]"],
            ],
            ["([235]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[23]9|54"]],
            ["([25]\\d{3})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258[23]|5483"]],
            ["(8\\d{3})(\\d{6})", "$1 $2", ["86"]],
            ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]],
          ],
          "0",
          "0$1",
        ],
        "001": ["979", "\\d{9}", [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3"]]],
      },
    };
  },
  rxhg: function (d, $, n) {
    "use strict";
    var t = n("e/8s"),
      r = n("xyN6"),
      l = n("cMUD"),
      e = n("3u/C"),
      u = n("XeN5"),
      i = n("gYSD"),
      o = n("222Q"),
      a = n("Rr8A"),
      c = n("wZFm"),
      s = n("GXhg")("iterator"),
      f = !([].keys && "next" in [].keys()),
      h = "@@iterator",
      p = "keys",
      _ = "values",
      v = function () {
        return this;
      };
    d.exports = function (d, $, n, y, m, g, x) {
      o(n, $, y);
      var M = function (d) {
          if (!f && d in A) return A[d];
          switch (d) {
            case p:
              return function $() {
                return new n(this, d);
              };
            case _:
              return function $() {
                return new n(this, d);
              };
          }
          return function $() {
            return new n(this, d);
          };
        },
        b = $ + " Iterator",
        E = m == _,
        S = !1,
        A = d.prototype,
        O = A[s] || A[h] || (m && A[m]),
        R = O || M(m),
        w = m ? (E ? M("entries") : R) : void 0,
        G = "Array" == $ ? A.entries || O : O,
        I,
        C,
        T;
      if (
        (G &&
          (T = c(G.call(new d()))) !== Object.prototype &&
          (a(T, b, !0), t || u(T, s) || e(T, s, v)),
        E &&
          O &&
          O.name !== _ &&
          ((S = !0),
          (R = function d() {
            return O.call(this);
          })),
        (t && !x) || (!f && !S && A[s]) || e(A, s, R),
        (i[$] = R),
        (i[b] = v),
        m)
      )
        if (((I = { values: E ? R : M(_), keys: g ? R : M(p), entries: w }), x))
          for (C in I) C in A || l(A, C, I[C]);
        else r(r.P + r.F * (f || S), $, I);
      return I;
    };
  },
  t8Mj: function (d, $, n) {
    var t = n("A4C+");
    d.exports = function (d) {
      if (!t(d)) throw TypeError(d + " is not an object!");
      return d;
    };
  },
  tYqY: function (d, $) {
    var n = (d.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = n);
  },
  teVV: function (d, $) {
    d.exports = function (d, $) {
      return {
        enumerable: !(1 & d),
        configurable: !(2 & d),
        writable: !(4 & d),
        value: $,
      };
    };
  },
  tgIh: function (d, $, n) {
    var t = n("f1R7"),
      r = n("fkyO");
    d.exports = function (d) {
      return t(r(d));
    };
  },
  wZFm: function (d, $, n) {
    var t = n("XeN5"),
      r = n("5n4L"),
      l = n("+g4q")("IE_PROTO"),
      e = Object.prototype;
    d.exports =
      Object.getPrototypeOf ||
      function (d) {
        return (
          (d = r(d)),
          t(d, l)
            ? d[l]
            : "function" == typeof d.constructor && d instanceof d.constructor
            ? d.constructor.prototype
            : d instanceof Object
            ? e
            : null
        );
      };
  },
  xLBq: function (d, $, n) {
    d.exports = !n("HG8D")(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  xSmo: function (d, $, n) {
    d.exports = n("tYqY").document && document.documentElement;
  },
  xyN6: function (d, $, n) {
    var t = n("tYqY"),
      r = n("ZzBv"),
      l = n("IHGI"),
      e = n("3u/C"),
      u = "prototype",
      i = function (d, $, n) {
        var o = d & i.F,
          a = d & i.G,
          c = d & i.S,
          s = d & i.P,
          f = d & i.B,
          h = d & i.W,
          p = a ? r : r[$] || (r[$] = {}),
          _ = p[u],
          v = a ? t : c ? t[$] : (t[$] || {})[u],
          y,
          m,
          g;
        a && (n = $);
        for (y in n)
          ((m = !o && v && void 0 !== v[y]) && y in p) ||
            ((g = m ? v[y] : n[y]),
            (p[y] =
              a && "function" != typeof v[y]
                ? n[y]
                : f && m
                ? l(g, t)
                : h && v[y] == g
                ? (function (d) {
                    var $ = function ($, n, t) {
                      if (this instanceof d) {
                        switch (arguments.length) {
                          case 0:
                            return new d();
                          case 1:
                            return new d($);
                          case 2:
                            return new d($, n);
                        }
                        return new d($, n, t);
                      }
                      return d.apply(this, arguments);
                    };
                    return ($[u] = d[u]), $;
                  })(g)
                : s && "function" == typeof g
                ? l(Function.call, g)
                : g),
            s &&
              (((p.virtual || (p.virtual = {}))[y] = g),
              d & i.R && _ && !_[y] && e(_, y, g)));
      };
    (i.F = 1),
      (i.G = 2),
      (i.S = 4),
      (i.P = 8),
      (i.B = 16),
      (i.W = 32),
      (i.U = 64),
      (i.R = 128),
      (d.exports = i);
  },
  yDi0: function (d, $, n) {
    var t = n("0tRM"),
      r = n("t8Mj"),
      l = n("eftk");
    d.exports = n("xLBq")
      ? Object.defineProperties
      : function d($, n) {
          r($);
          for (var e = l(n), u = e.length, i = 0, o; u > i; )
            t.f($, (o = e[i++]), n[o]);
          return $;
        };
  },
});
