webpackJsonp([22], {
  "+QQJ": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    }),
      n.d(t, "b", function () {
        return i;
      }),
      n.d(t, "c", function () {
        return c;
      });
    var o = n("IaRT"),
      r = n.n(o),
      a = n("OfNO"),
      s = {
        FACEBOOK: "facebook",
        GOOGLE_ONE_TAP: "google_one_tap",
        GOOGLE: "google",
        EMAIL: "email",
        OTHER: "other",
      },
      i = function e(t) {
        return t.facebook_id
          ? s.FACEBOOK
          : t.google_open_id_token
          ? s.GOOGLE_ONE_TAP
          : t.gplus_code
          ? s.GOOGLE
          : t.email
          ? s.EMAIL
          : s.OTHER;
      },
      u = r.a.shape({
        credentials: r.a.shape({}),
        userData: r.a.shape({}),
        type: r.a.oneOf(Object.values(s)),
      }),
      c = function e(t) {
        return t in a.a.settings.MINIMUM_AGE_BY_EU_COUNTRY;
      },
      l = void 0;
  },
  "/dip": function (e, t, n) {
    "use strict";
    function o() {
      window.location.reload(!0);
    }
    function r(e) {
      e = P.context.instance.css_bundles || e;
      var t = document.getElementsByTagName("head")[0];
      return e
        ? Promise.all(
            e.map(function (e) {
              var n = document.createElement("link");
              return (
                n.setAttribute("id", "dynamicStyleSheet"),
                n.setAttribute("rel", "stylesheet"),
                n.setAttribute("type", "text/css"),
                n.setAttribute("href", e),
                t.appendChild(n),
                new Promise(function (e, t) {
                  var o = setTimeout(function () {
                    t();
                  }, b);
                  n.onload = function () {
                    clearTimeout(o), e();
                  };
                })
              );
            }),
          )
        : Promise.resolve(null);
    }
    function a(e, t) {
      return Promise.all(
        e.map(function (e) {
          var n = e.name,
            o = e.options;
          return h.a
            .create(n, o(t) || {})
            .callGet()
            .then(function (e) {
              var r = e.bookmarks,
                a = e.resource_response;
              return {
                name: n,
                options: o(t),
                data: a && a.data,
                nextBookmark: r && r[0],
              };
            })
            .catch(function () {
              return Promise.resolve(null);
            });
        }),
      );
    }
    function s(e) {
      var t = e.nextUrl,
        n = e.routes,
        r = e.Main,
        a = e.convertToAuthState,
        s = e.authContext,
        i = e.localeLoader,
        u = e.resources;
      Object.assign(s, { visible_url: t }),
        window.history.pushState({}, "", t),
        s.user.is_partner
          ? o()
          : ((window.__INITIAL_STATE__ = a({
              state: p.a.instance.getState(),
              context: s,
              moreResources: u,
            })),
            i(P.startArgs.locale)(function () {
              Object(d.unmountComponentAtNode)(
                document.querySelector("*[data-reactcontainer]"),
              );
              var e = {
                context: s,
                initialPageInfo: P.startArgs.initialPageInfo,
                user: s.user,
                gaAccountNumbers: P.startArgs.gaAccountNumbers,
                isLoggedIn: !0,
                initialPageContext: P.startArgs.initialPageContext,
                traceLoggerData: P.startArgs.traceLoggerData,
              };
              r.start(e, n);
            }));
    }
    function i(e, t) {
      return [
        n.e(45).then(n.bind(null, "Rxig")),
        n.e(144).then(n.bind(null, "eMvM")),
        n.e(46).then(n.bind(null, "Clwn")),
        n.e(47).then(n.bind(null, "B7dn")),
        t
          ? n.e(48).then(n.bind(null, "Dryq"))
          : e && e.authBundleLoader && e.authBundleLoader(),
        r(),
      ];
    }
    function u(e) {
      var t = e.authContext,
        i = e.cssBundles,
        u = e.authLoaderData,
        c = e.nextUrl,
        l = e.routeParams;
      if (!m) {
        (m = !0), t.is_authenticated || o();
        var d = u.authBundleLoader,
          _ = u.authResources;
        Promise.all([
          n.e(45).then(n.bind(null, "Rxig")),
          n.e(144).then(n.bind(null, "eMvM")),
          n.e(46).then(n.bind(null, "Clwn")),
          n.e(47).then(n.bind(null, "B7dn")),
          _ && a(_, l),
          d && d(),
          r(i),
        ])
          .then(function (e) {
            var n = e[0].default,
              o = e[1].default,
              r = e[2].default,
              a = e[3].default,
              i = e[4];
            return s({
              nextUrl: c,
              routes: n,
              Main: r,
              convertToAuthState: a,
              authContext: t,
              localeLoader: o,
              resources: i,
            });
          })
          .catch(o);
      }
    }
    function c(e) {
      var t = e.authContext;
      if (!m) {
        m = !0;
        var r = "/";
        Promise.all([
          n.e(45).then(n.bind(null, "Rxig")),
          n.e(144).then(n.bind(null, "eMvM")),
          n.e(46).then(n.bind(null, "Clwn")),
          n.e(47).then(n.bind(null, "B7dn")),
        ])
          .then(function (e) {
            var n = e[0].default,
              o = e[1].default;
            return s({
              nextUrl: "/",
              routes: n,
              Main: e[2].default,
              convertToAuthState: e[3].default,
              authContext: t,
              localeLoader: o,
              resources: [],
            });
          })
          .catch(o);
      }
    }
    function l(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = e && e[e.length - 1];
      return (
        !(!(o && o.authBundleLoader && o.authResources) || n) &&
        (t.getGroup("web_seamless_signup_v2") || "").startsWith("enabled")
      );
    }
    (t.a = i), (t.b = u), (t.c = c);
    var d = n("RklN"),
      _ = n.n(d),
      f = n("ZtCB"),
      h = n.n(f),
      p = n("4Qfy"),
      g = n("WjSu"),
      b = 1e4,
      m = !1;
  },
  "5JMz": function (e, t, n) {
    "use strict";
    function o(e, t) {
      if (e) {
        var n =
            e.http_status === a.a.RESPONSE_CODE_TOO_MANY_REQUESTS
              ? a.a.RESPONSE_CODE_TOO_MANY_REQUESTS
              : e.api_error_code,
          o = n;
        "API_ERROR" === e.code && _.has(n) && (o = _.get(n)),
          Object(d.a)("unauth.login.error.API_ERROR." + o + "." + t);
      }
    }
    var r = n("oUjL"),
      a = n("BAXv"),
      s = n("WjSu"),
      i = n("kHbH"),
      u = n("ZtCB"),
      c = n.n(u),
      l = n("Gktc"),
      d = n("85jk"),
      _ = new Map([
        [1, "INVALID_PARAMETERS"],
        [100, "INVALID_NETWORK_ACCESS_TOKEN"],
        [105, "FACEBOOK_ACCOUNT_NOT_LINKED"],
        [12, "API_SERVER_ERROR"],
        [1202, "LOGIN_MFA_TOKEN_INVALID"],
        [1203, "MFA_CONNECTION_ERROR"],
        [13, "API_DOWN"],
        [181, "GPLUS_CONNECTION_ERROR"],
        [14, "API_SERVER_SPAM_CONTENT"],
        [16, "API_REQUEST_TIMEOUT"],
        [50, "API_ERROR_PIN_NOT_FOUND"],
        [77, "INVALID_PASSWORD_FB_USER"],
        [78, "INVALID_PASSWORD_ERROR_CODE"],
        [79, "INVALID_EMAIL_ERROR_CODE"],
        [80, "INVALID_EMAIL_OR_PASSWORD"],
        [82, "LOGIN_DEACTIVATED_USER"],
        [83, "LOGIN_POLICY_VIOLATION_USER"],
        [85, "AUTO_PASSWORD_RESET_ERROR_CODE"],
        [86, "LOGIN_PANICKED_USER"],
        [87, "LOGIN_SOFT_BANNED_USER"],
        [93, "API_ERROR_UNDERAGE_REGISTER_ATTEMPT"],
        [99, "LOGIN_PASSWORD_NOT_CREATED"],
        [8, "API_LIMIT_EXCEEDED_ERROR"],
        [9, "API_EVENT_BLOCKED_ERROR"],
        [19, "USER_IN_SAFE_MODE"],
        [84, "LOGIN_VOLUNTARILY_DEACTIVATED_USER"],
        [85, "LOGIN_BAD_PASSWORD_ASK_RESET"],
        [1201, "LOGIN_MFA_REQUIRED"],
        [30, "LOGIN_USER_NOT_FOUND"],
        [88, "LOGIN_HARD_BANNED_USER"],
        [429, "RESPONSE_CODE_TOO_MANY_REQUESTS"],
      ]),
      f = n("+CHb"),
      h = n("+QQJ"),
      p = i.a.getLogger("UserLogin"),
      g = i.a.getLogger("AuthHandshake"),
      b = function e(t) {
        return t.mfa_token
          ? "mfa_token"
          : t.mfa_resend
          ? "mfa_resend"
          : t.facebook_id
          ? h.a.FACEBOOK
          : t.google_open_id_token
          ? h.a.GOOGLE_ONE_TAP
          : t.gplus_id_token
          ? h.a.GOOGLE
          : t.phone_number
          ? "phone_number"
          : t.username_or_email
          ? h.a.EMAIL
          : h.a.OTHER;
      },
      m = function e(t, n) {
        var o = "referrer_unknown";
        try {
          var r = document.referrer;
          o = r
            ? r.indexOf("/t.co/") > -1
              ? "twitter"
              : r.indexOf("google.") > -1
              ? "google"
              : r.indexOf("bing.") > -1
              ? "bing"
              : r.indexOf("facebook.") > -1
              ? "facebook"
              : "other"
            : "direct";
        } catch (e) {}
        var a = b(t),
          s = n === Object(n) ? n.hybridTier : "tier_unknown",
          i = n === Object(n) ? n.container : "container_unknown";
        Object(d.a)("login.referrer." + o + "." + a),
          Object(d.a)("login.container." + i + "." + a),
          Object(d.a)("login.type." + a);
        var u = b(t) || "method_unknown",
          c = n.page || "page_unknown";
        t.gplus_autologin
          ? Object(d.a)("web_autologin_google")
          : t.facebook_autologin
          ? Object(d.a)("web_autologin_facebook")
          : Object(d.a)(
              "web_login." + u + ".success." + c + "." + i + "." + o + "." + s,
            );
      },
      E = function e(t, n) {
        return (
          !t.mfa_resend &&
          (t.username_or_email
            ? n &&
              !(
                n.v2ActivateExperiment("bypass_cctld_login_email") || ""
              ).startsWith("enabled")
            : t.facebook_id
            ? n &&
              !(
                n.v2ActivateExperiment("bypass_cctld_login_facebook") || ""
              ).startsWith("enabled")
            : !!t.gplus_id_token &&
              n &&
              !(
                n.v2ActivateExperiment("bypass_cctld_login_gplus") || ""
              ).startsWith("enabled"))
        );
      },
      O = function e(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "unknown";
        return r.a.loginUser(t).then(
          function (e) {
            if (e.data) {
              var o = e.data;
              return r.a.exchangeTokenAndSetSession(o).then(
                function (e) {
                  return (
                    m(t, n),
                    g.debug("Cross domain login successful"),
                    Promise.resolve()
                  );
                },
                function (e) {
                  throw (
                    (g.error(
                      "Failed to set session for current user; " + e.message,
                    ),
                    e)
                  );
                },
              );
            }
            throw (
              (g.error("No custom access token in cross domain login response"),
              new Error())
            );
          },
          function (e) {
            throw (
              (!e.message &&
                e.response &&
                e.response.message &&
                (Object(d.a)("cctld_login_error_message"),
                (e.message = e.response.message)),
              g.error("Failed to login user; " + e.message),
              e)
            );
          },
        );
      },
      v = function e(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "unknown",
          r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          i = arguments[3];
        if (
          E(t, r) &&
          -1 !==
            a.a.GEN.templateConst.settings.CORS_HANDSHAKE_DOMAINS.indexOf(
              s.a.instance.origin,
            )
        )
          return O(t, n);
        var u = { showError: !1, async: !0 };
        return c.a
          .create("UserSessionResource", Object.assign({}, t, { seamless: i }))
          .callCreate(u)
          .then(
            function (e) {
              return (
                p.debug("Login, successful", e),
                m(t, n),
                Object(l.a)(),
                "undefined" != typeof window &&
                  void 0 !== window.localStorage &&
                  window.localStorage.setItem(f.a, !0),
                e
              );
            },
            function (e) {
              return o(e, n), Promise.reject(e);
            },
          );
      },
      y = (t.a = v);
  },
  DMk0: function (e, t) {
    !(function (e) {
      "use strict";
      function t(e) {
        if (
          ("string" != typeof e && (e = String(e)),
          /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))
        )
          throw new TypeError("Invalid character in header field name");
        return e.toLowerCase();
      }
      function n(e) {
        return "string" != typeof e && (e = String(e)), e;
      }
      function o(e) {
        var t = {
          next: function () {
            var t = e.shift();
            return { done: void 0 === t, value: t };
          },
        };
        return (
          p.iterable &&
            (t[Symbol.iterator] = function () {
              return t;
            }),
          t
        );
      }
      function r(e) {
        (this.map = {}),
          e instanceof r
            ? e.forEach(function (e, t) {
                this.append(t, e);
              }, this)
            : e &&
              Object.getOwnPropertyNames(e).forEach(function (t) {
                this.append(t, e[t]);
              }, this);
      }
      function a(e) {
        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0;
      }
      function s(e) {
        return new Promise(function (t, n) {
          (e.onload = function () {
            t(e.result);
          }),
            (e.onerror = function () {
              n(e.error);
            });
        });
      }
      function i(e) {
        var t = new FileReader();
        return t.readAsArrayBuffer(e), s(t);
      }
      function u(e) {
        var t = new FileReader();
        return t.readAsText(e), s(t);
      }
      function c() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (e) {
            if (((this._bodyInit = e), "string" == typeof e))
              this._bodyText = e;
            else if (p.blob && Blob.prototype.isPrototypeOf(e))
              this._bodyBlob = e;
            else if (p.formData && FormData.prototype.isPrototypeOf(e))
              this._bodyFormData = e;
            else if (
              p.searchParams &&
              URLSearchParams.prototype.isPrototypeOf(e)
            )
              this._bodyText = e.toString();
            else if (e) {
              if (!p.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e))
                throw new Error("unsupported BodyInit type");
            } else this._bodyText = "";
            this.headers.get("content-type") ||
              ("string" == typeof e
                ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                : this._bodyBlob && this._bodyBlob.type
                ? this.headers.set("content-type", this._bodyBlob.type)
                : p.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(e) &&
                  this.headers.set(
                    "content-type",
                    "application/x-www-form-urlencoded;charset=UTF-8",
                  ));
          }),
          p.blob
            ? ((this.blob = function () {
                var e = a(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]));
              }),
              (this.arrayBuffer = function () {
                return this.blob().then(i);
              }),
              (this.text = function () {
                var e = a(this);
                if (e) return e;
                if (this._bodyBlob) return u(this._bodyBlob);
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }))
            : (this.text = function () {
                var e = a(this);
                return e || Promise.resolve(this._bodyText);
              }),
          p.formData &&
            (this.formData = function () {
              return this.text().then(_);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      function l(e) {
        var t = e.toUpperCase();
        return g.indexOf(t) > -1 ? t : e;
      }
      function d(e, t) {
        var n = (t = t || {}).body;
        if (d.prototype.isPrototypeOf(e)) {
          if (e.bodyUsed) throw new TypeError("Already read");
          (this.url = e.url),
            (this.credentials = e.credentials),
            t.headers || (this.headers = new r(e.headers)),
            (this.method = e.method),
            (this.mode = e.mode),
            n || ((n = e._bodyInit), (e.bodyUsed = !0));
        } else this.url = e;
        if (
          ((this.credentials = t.credentials || this.credentials || "omit"),
          (!t.headers && this.headers) || (this.headers = new r(t.headers)),
          (this.method = l(t.method || this.method || "GET")),
          (this.mode = t.mode || this.mode || null),
          (this.referrer = null),
          ("GET" === this.method || "HEAD" === this.method) && n)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(n);
      }
      function _(e) {
        var t = new FormData();
        return (
          e
            .trim()
            .split("&")
            .forEach(function (e) {
              if (e) {
                var n = e.split("="),
                  o = n.shift().replace(/\+/g, " "),
                  r = n.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(o), decodeURIComponent(r));
              }
            }),
          t
        );
      }
      function f(e) {
        var t = new r();
        return (
          (e.getAllResponseHeaders() || "")
            .trim()
            .split("\n")
            .forEach(function (e) {
              var n = e.trim().split(":"),
                o = n.shift().trim(),
                r = n.join(":").trim();
              t.append(o, r);
            }),
          t
        );
      }
      function h(e, t) {
        t || (t = {}),
          (this.type = "default"),
          (this.status = t.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = t.statusText),
          (this.headers =
            t.headers instanceof r ? t.headers : new r(t.headers)),
          (this.url = t.url || ""),
          this._initBody(e);
      }
      if (!e.fetch) {
        var p = {
          searchParams: "URLSearchParams" in e,
          iterable: "Symbol" in e && "iterator" in Symbol,
          blob:
            "FileReader" in e &&
            "Blob" in e &&
            (function () {
              try {
                return new Blob(), !0;
              } catch (e) {
                return !1;
              }
            })(),
          formData: "FormData" in e,
          arrayBuffer: "ArrayBuffer" in e,
        };
        (r.prototype.append = function (e, o) {
          (e = t(e)), (o = n(o));
          var r = this.map[e];
          r || ((r = []), (this.map[e] = r)), r.push(o);
        }),
          (r.prototype.delete = function (e) {
            delete this.map[t(e)];
          }),
          (r.prototype.get = function (e) {
            var n = this.map[t(e)];
            return n ? n[0] : null;
          }),
          (r.prototype.getAll = function (e) {
            return this.map[t(e)] || [];
          }),
          (r.prototype.has = function (e) {
            return this.map.hasOwnProperty(t(e));
          }),
          (r.prototype.set = function (e, o) {
            this.map[t(e)] = [n(o)];
          }),
          (r.prototype.forEach = function (e, t) {
            Object.getOwnPropertyNames(this.map).forEach(function (n) {
              this.map[n].forEach(function (o) {
                e.call(t, o, n, this);
              }, this);
            }, this);
          }),
          (r.prototype.keys = function () {
            var e = [];
            return (
              this.forEach(function (t, n) {
                e.push(n);
              }),
              o(e)
            );
          }),
          (r.prototype.values = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(t);
              }),
              o(e)
            );
          }),
          (r.prototype.entries = function () {
            var e = [];
            return (
              this.forEach(function (t, n) {
                e.push([n, t]);
              }),
              o(e)
            );
          }),
          p.iterable && (r.prototype[Symbol.iterator] = r.prototype.entries);
        var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        (d.prototype.clone = function () {
          return new d(this);
        }),
          c.call(d.prototype),
          c.call(h.prototype),
          (h.prototype.clone = function () {
            return new h(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new r(this.headers),
              url: this.url,
            });
          }),
          (h.error = function () {
            var e = new h(null, { status: 0, statusText: "" });
            return (e.type = "error"), e;
          });
        var b = [301, 302, 303, 307, 308];
        (h.redirect = function (e, t) {
          if (-1 === b.indexOf(t)) throw new RangeError("Invalid status code");
          return new h(null, { status: t, headers: { location: e } });
        }),
          (e.Headers = r),
          (e.Request = d),
          (e.Response = h),
          (e.fetch = function (e, t) {
            return new Promise(function (n, o) {
              function r() {
                return "responseURL" in s
                  ? s.responseURL
                  : /^X-Request-URL:/m.test(s.getAllResponseHeaders())
                  ? s.getResponseHeader("X-Request-URL")
                  : void 0;
              }
              var a;
              a = d.prototype.isPrototypeOf(e) && !t ? e : new d(e, t);
              var s = new XMLHttpRequest();
              (s.onload = function () {
                var e = {
                    status: s.status,
                    statusText: s.statusText,
                    headers: f(s),
                    url: r(),
                  },
                  t = "response" in s ? s.response : s.responseText;
                n(new h(t, e));
              }),
                (s.onerror = function () {
                  o(new TypeError("Network request failed"));
                }),
                (s.ontimeout = function () {
                  o(new TypeError("Network request failed"));
                }),
                s.open(a.method, a.url, !0),
                "include" === a.credentials && (s.withCredentials = !0),
                "responseType" in s && p.blob && (s.responseType = "blob"),
                a.headers.forEach(function (e, t) {
                  s.setRequestHeader(t, e);
                }),
                s.send(void 0 === a._bodyInit ? null : a._bodyInit);
            });
          }),
          (e.fetch.polyfill = !0);
      }
    })("undefined" != typeof self ? self : this);
  },
  Lgi6: function (e, t, n) {
    "use strict";
    var o = n("hSTm"),
      r = n.n(o),
      a = {
        get: function e(t) {
          var n = "gplus";
          r()().then(function (e) {
            var n = e.default;
            n.load([], "https://apis.google.com/js/client:plusone.js", "gplus"),
              n.ready("gplus", function () {
                t(window.gapi);
              });
          });
        },
      };
    t.a = a;
  },
  WK9n: function (e, t, n) {
    "use strict";
    function o(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = arguments[3],
        r = arguments[4],
        s = void 0;
      if (
        (Object(_.a)("autologin.facebook_attempt." + t),
        !a.get("fba") && "connected" === e.status)
      ) {
        var u = e.authResponse;
        if (!u) return void Object(_.a)("autologin.facebook_fail");
        m("facebook"),
          Object(d.a)(
            {
              facebook_id: u.userID,
              facebook_token: u.accessToken,
              facebook_autologin: !0,
            },
            "autologinfb",
            null,
            !!o,
          ).then(
            function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.client_context,
                a = e.resource_response,
                i = window.nextUrlParam;
              n ||
                (o && t
                  ? ((s = a.data && a.data.css_bundles),
                    Object(h.b)({
                      authContext: t,
                      cssBundles: s,
                      authLoaderData: o,
                      nextUrl: g(i),
                      routeParams: r,
                    }))
                  : b(i));
            },
            function (e) {
              if (e.api_error_code !== i.a.LOGIN_MFA_REQUIRED) throw e;
            },
          );
      }
    }
    function r(e, t, n) {
      var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = arguments[4],
        a = arguments[5];
      l.a.get(function (s) {
        s.signin.render(e, {
          scope: "profile email",
          clientid: t.GPLUS_CLIENT_ID,
          apppackagename: t.GPLUS_APP_PACKAGE_NAME,
          redirecturi: "postmessage",
          accesstype: "offline",
          cookiepolicy: "single_host_origin",
          callback: function e(t) {
            Object(_.a)("autologin.google_attempt." + n);
            var s = {
              gplus_id_token: t.id_token,
              gplus_access_token: t.access_token,
              gplus_expires_at: t.expires_at,
              gplus_autologin: !0,
            };
            if (t.status.signed_in) {
              var u = void 0;
              m("google"),
                Object(d.a)(s, "autologingoogle", null, !!r).then(
                  function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = e.client_context,
                      n = e.resource_response,
                      s = window.nextUrlParam;
                    o ||
                      (r && t
                        ? ((u = n.data && n.data.css_bundles),
                          Object(h.b)({
                            authContext: t,
                            cssBundles: u,
                            authLoaderData: r,
                            nextUrl: g(s),
                            routeParams: a,
                          }))
                        : b(s));
                  },
                  function (e) {
                    if (e.api_error_code !== i.a.LOGIN_MFA_REQUIRED) throw e;
                  },
                );
            } else Object(_.a)("autologin.google_fail");
          },
        });
      });
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.fbAutologinCallback = o),
      (t.googleAutologin = r);
    var a = n("FqaO"),
      s = n("FHH+"),
      i = n("BAXv"),
      u = n("hVsM"),
      c = n("SnoN"),
      l = n("Lgi6"),
      d = n("5JMz"),
      _ = n("85jk"),
      f = n("FJZF"),
      h = n("/dip"),
      p = function e(t) {
        f.a.isTrustedOrigin(t) || ((t = "/"), Object(_.a)("url_reset")),
          Object(s.a)(t, !1);
      },
      g = function e(t) {
        var n = { autologin: !0 };
        if (
          !t &&
          ((t = window.location.pathname || "/"),
          Object.assign(n, f.a.getQueryStringParams()),
          n)
        ) {
          var o = n.next;
          o && ((t = o), delete n.next);
        }
        return f.a.appendQueryString(t, n);
      },
      b = function e(t) {
        (t = g(t)), p(t);
      },
      m = function e(t) {
        Object(_.a)("autologin." + t);
        var n = u.a.fromPlainObject({ event_type: 38, view_type: 9 });
        n.updateAuxData({ login_provider: t, unauth_data: { autologin: !0 } }),
          c.a.getInstance().addEvent(n);
      };
  },
  hSTm: function (e, t, n) {
    e.exports = function () {
      return new Promise(function (e) {
        n.e(51)
          .then(
            function (t) {
              e(n("Bq5V"));
            }.bind(null, n),
          )
          .catch(n.oe);
      });
    };
  },
  oUjL: function (e, t, n) {
    "use strict";
    var o = n("DMk0"),
      r = n.n(o),
      a = n("BAXv"),
      s = n("WjSu"),
      i = n("kHbH"),
      u = n("ZtCB"),
      c = n.n(u),
      l = n("FJZF"),
      d = i.a.getLogger("AuthHandshake"),
      _ = {};
    (_._parseJson = function (e) {
      return e.json();
    }),
      (_._throwError = function (e) {
        var t = new Error(e.statusText);
        throw ((t.response = e), t);
      }),
      (_._checkStatus = function (e) {
        return 200 === e.status || 401 === e.status
          ? e
          : (_._throwError(e), {});
      }),
      (_._crossDomainRequest = function (e, t, n) {
        if ("GET" !== n && "POST" !== n) return Promise.resolve();
        var o = { credentials: "include", mode: "cors" };
        return (
          "POST" === n &&
            ((o.method = "POST"),
            (o.body = t),
            (o.headers = {
              "Content-type":
                "application/x-www-form-urlencoded; charset=UTF-8",
              "X-Pinterest-InstallId": s.a.instance.unauth_id,
            })),
          fetch(e, o)
            .then(_._checkStatus)
            .then(_._parseJson)
            .then(function (e) {
              return "success" === e.status
                ? Promise.resolve(e)
                : e.code === a.a.LOGIN_MFA_REQUIRED
                ? ((e.api_error_code = e.code), Promise.reject(e))
                : (_._throwError(e), {});
            })
            .catch(function (e) {
              throw e;
            })
        );
      }),
      (_._verifyAndGetToken = function () {
        var e =
          a.a.GEN.templateConst.settings.ACCOUNTS_PINTEREST_URL +
          "/v3/handshake/verify/";
        return _._crossDomainRequest(e, "", "GET");
      }),
      (_.exchangeTokenAndSetSession = function (e) {
        return c.a
          .create("HandshakeSessionResource", { token: e })
          .callCreate();
      }),
      (_.verifyLoggedInStatus = function () {
        _._verifyAndGetToken().then(
          function (e) {
            if (e && e.data) {
              var t = e.data;
              _.exchangeTokenAndSetSession(t).then(
                function (e) {
                  window.location.reload();
                },
                function (e) {
                  d.error(
                    "Failed to set session for current user; " + e.message,
                  );
                },
              );
            } else
              d.error("No custom access token in cross domain verify response");
          },
          function (e) {},
        );
      }),
      (_._setUpRegisterParameters = function (e) {
        var t = {};
        if (
          ((t.email = e.email || ""),
          (t.username = e.username || ""),
          (t.password = e.password || ""),
          (t.first_name = e.first_name || ""),
          (t.last_name = e.last_name || ""),
          (t.country = e.country || ""),
          (t.locale = s.a.instance.locale),
          (t.referrer = s.a.instance.referrer),
          e.age)
        ) {
          var n = new Date();
          n.setFullYear(n.getFullYear() - e.age);
          var o = parseInt(n / 1e3, 10);
          t.birthday = o.toString();
        }
        if (
          (e.custom_gender && (t.custom_gender = e.custom_gender),
          e.gender && (t.gender = e.gender),
          s.a.instance.invite_code &&
            (t.invite_code = s.a.instance.invite_code),
          e.facebook_id)
        ) {
          var r = s.a.instance.facebook_token || e.facebook_token || "";
          r || d.debug("Facebook token is not being set during login call."),
            (t.facebook_id = e.facebook_id),
            (t.facebook_token = r),
            (t.social_username = e.social_username || "");
        } else
          e.gplus_code &&
            ((t.password = e.password || ""),
            (t.one_time_code = e.gplus_code),
            (t.redirect_uri = e.gplus_redirect_uri));
        return l.a.getQueryStringFromObject(t);
      }),
      (_._setUpLoginParameters = function (e) {
        var t = {};
        if (
          (e.username_or_email &&
            ((t.username_or_email = e.username_or_email.trim()),
            (t.password = e.password),
            (t.referrer = s.a.instance.referrer)),
          e.facebook_id)
        ) {
          var n = s.a.instance.facebook_token || e.facebook_token || "";
          n || d.debug("Facebook token is not being set during login call."),
            (t.facebook_id = e.facebook_id),
            (t.facebook_token = n),
            (t.facebook_autologin = e.facebook_autologin || !1);
        }
        return (
          e.gplus_id_token &&
            ((t.gplus_id_token = e.gplus_id_token),
            (t.gplus_access_token = e.gplus_access_token),
            (t.gplus_expires_at = e.gplus_expires_at),
            (t.gplus_autologin = e.gplus_autologin || !1)),
          e.mfa_token && (t.mfa_token = e.mfa_token),
          l.a.getQueryStringFromObject(t)
        );
      }),
      (_._getRegisterRequestUrl = function (e) {
        var t = "/v3/register/email/handshake/";
        return (
          e.facebook_id && (t = "/v3/register/facebook/handshake/"),
          e.gplus_code && (t = "/v3/register/gplus/handshake/"),
          a.a.GEN.templateConst.settings.ACCOUNTS_PINTEREST_URL + t
        );
      }),
      (_._getLoginRequestUrl = function (e) {
        var t = "/v3/login/handshake/";
        return (
          e.facebook_id && (t = "/v3/login/facebook/handshake/"),
          e.gplus_id_token && (t = "/v3/login/gplus/handshake/"),
          e.mfa_token && (t = "/v3/login/mfa/handshake/"),
          a.a.GEN.templateConst.settings.ACCOUNTS_PINTEREST_URL + t
        );
      }),
      (_.registerUser = function (e) {
        var t = _._getRegisterRequestUrl(e),
          n = _._setUpRegisterParameters(e);
        return _._crossDomainRequest(t, n, "POST");
      }),
      (_.loginUser = function (e) {
        var t = _._getLoginRequestUrl(e),
          n = _._setUpLoginParameters(e);
        return _._crossDomainRequest(t, n, "POST");
      }),
      (t.a = _);
  },
});
