webpackJsonp([231], {
  "+1LB": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var o = {
        DEFAULT_TOGGLE: "DEFAULT_TOGGLE",
        NO_TOGGLE: "NO_TOGGLE",
        SMALL_TOGGLE: "SMALL_TOGGLE",
        NOT_NOW_BUTTON: "NOT_NOW_BUTTON",
      },
      r = void 0;
  },
  "+QQJ": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    }),
      n.d(t, "b", function () {
        return s;
      }),
      n.d(t, "c", function () {
        return c;
      });
    var o = n("IaRT"),
      r = n.n(o),
      a = n("OfNO"),
      i = {
        FACEBOOK: "facebook",
        GOOGLE_ONE_TAP: "google_one_tap",
        GOOGLE: "google",
        EMAIL: "email",
        OTHER: "other",
      },
      s = function e(t) {
        return t.facebook_id
          ? i.FACEBOOK
          : t.google_open_id_token
          ? i.GOOGLE_ONE_TAP
          : t.gplus_code
          ? i.GOOGLE
          : t.email
          ? i.EMAIL
          : i.OTHER;
      },
      l = r.a.shape({
        credentials: r.a.shape({}),
        userData: r.a.shape({}),
        type: r.a.oneOf(Object.values(i)),
      }),
      c = function e(t) {
        return t in a.a.settings.MINIMUM_AGE_BY_EU_COUNTRY;
      },
      u = void 0;
  },
  "+XcA": function (e, t, n) {
    "use strict";
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    var i = n("d6ZO"),
      s = n.n(i),
      l = n("CogI"),
      c = n("l6Jx"),
      u = n("W/Cr"),
      p = n("IaRT"),
      d = n.n(p),
      g = n("XzpH"),
      h = n("kc1m"),
      m = n("gEaE"),
      f = {
        input: {
          backgroundColor: "#fff",
          border: "solid 1px #ccc",
          WebkitBoxShadow: "none",
          boxShadow: "none",
          position: "relative",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          borderRadius: "3px",
          fontWeight: "bold",
          padding: "10px",
          WebkitBoxSizing: "border-box",
          boxSizing: "border-box",
          width: "100%",
          color: "#333",
          fontSize: "14px",
        },
        fieldset: { position: "relative" },
        errorIcon: { position: "absolute", right: "14px", top: "14px" },
        tooltipText: {
          overflowWrap: "break-word",
          wordWrap: "break-word",
          color: "white",
          fontWeight: "bold",
        },
        suggestedEmailSpan: { whiteSpace: "nowrap" },
        suggestedEmailLink: {
          display: "inline-block",
          font: "inherit",
          fontWeight: "bold",
          fontSize: "14",
          color: "#fff",
          cursor: "pointer",
          textDecoration: "underline",
          verticalAlign: "top",
          outline: "none",
          outlineOffset: "0",
        },
        fieldTitle: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          color: "#555",
          float: "left",
          fontFamily: h.b,
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "bold",
          margin: "15px 0px 5px 3px",
        },
        suggestedEmailTooltip: { width: "match-content" },
      },
      b = (function (e) {
        function t(n, a) {
          o(this, t);
          var i = r(this, e.call(this, n, a));
          return (
            (i.handleDomainErrorDismiss = function () {
              i.setState({ shouldTooltipOpen: !1 });
            }),
            (i.renderErrorIcon = function (e) {
              if (e)
                return s.a.createElement(
                  "div",
                  { className: "InputField__errorIcon", style: f.errorIcon },
                  s.a.createElement(m.m, {
                    accessibilityLabel: u.a._(
                      "Remove",
                      "Accessible label for error icon",
                    ),
                    color: "red",
                    icon: "remove",
                    inline: !0,
                    size: 14,
                  }),
                );
            }),
            (i.renderTooltip = function (e, t) {
              if (e && t)
                return i.props.useGestaltTooltip
                  ? s.a.createElement(c.a, { anchor: i._input, message: e })
                  : s.a.createElement(g.a, { message: e });
            }),
            (i.renderGestaltInputField = function () {
              var e = i.props,
                t = e.disabled,
                n = e.domainError,
                o = e.id,
                r = e.idealErrorDirection,
                a = e.inputRef,
                c = e.name,
                u = e.onBlur,
                p = e.onChange,
                d = e.onFocus,
                g = e.placeholder,
                h = e.type,
                f = e.updateEmail,
                b = e.useExperimentalTextfield,
                _ = e.value,
                y = i.props.hasError || i.props.tooltip ? i.props.tooltip : "";
              return b
                ? s.a.createElement(l.a, {
                    disabled: t,
                    error: n || y,
                    id: o,
                    name: c,
                    onBlur: u,
                    onChange: function e(t) {
                      var n = t.event,
                        o = t.value;
                      p(n);
                    },
                    onFocus: d,
                    placeholder: g,
                    ref: function e(t) {
                      (i._gestaltInput = t), a && a(t);
                    },
                    type: h,
                    onLabelTouch: f,
                    value: _,
                  })
                : s.a.createElement(m.J, {
                    disabled: t,
                    errorMessage: y,
                    id: o,
                    idealErrorDirection: r,
                    name: c,
                    onBlur: u,
                    onChange: function e(t) {
                      var n = t.event,
                        o = t.value;
                      p(n);
                    },
                    onFocus: d,
                    placeholder: g,
                    ref: function e(t) {
                      (i._gestaltInput = t), a && a(t);
                    },
                    type: h,
                    updateEmail: f,
                    value: _,
                  });
            }),
            (i.state = { initialFocus: i.props.focused || !1, gainFocus: !1 }),
            i
          );
        }
        return (
          a(t, e),
          (t.prototype.componentDidMount = function e() {
            this.state.initialFocus && this.focusInput();
          }),
          (t.prototype.componentWillReceiveProps = function e(t) {
            var n = this.props,
              o = n.domainError,
              r = n.type;
            t.hasError && !1 === this.props.hasError
              ? this.setState({ gainFocus: !0 })
              : this.setState({ gainFocus: !1 }),
              o &&
                r &&
                "email" === r &&
                this.setState({ shouldTooltipOpen: !0 });
          }),
          (t.prototype.componentDidUpdate = function e() {
            this.state.gainFocus && this.focusInput();
          }),
          (t.prototype.focusInput = function e() {
            this._input && this._input.focus(),
              this._gestaltInput &&
                this._gestaltInput.textfield &&
                this._gestaltInput.textfield.focus();
          }),
          (t.prototype.renderVanillaTextInputField = function e(t, n) {
            var o = this;
            return s.a.createElement(
              "div",
              null,
              s.a.createElement("input", {
                "aria-label":
                  this.props.accessibilityLabel || this.props.placeholder,
                autoComplete: this.props.autoComplete,
                className: t,
                name: this.props.name,
                onBlur: this.props.onBlur,
                onFocus: this.props.onFocus,
                onChange: this.props.onChange,
                onClick: this.props.onClick,
                placeholder: this.props.placeholder,
                ref: function e(t) {
                  (o._input = t), o.props.inputRef && o.props.inputRef(t);
                },
                style: n,
                type: this.props.type,
                value: this.props.value,
              }),
              this.renderErrorIcon(this.props.hasError),
              this.renderTooltip(this.props.tooltip, this.props.hasError),
            );
          }),
          (t.prototype.render = function e() {
            var t = f.input;
            this.props.inputStyleOverrides &&
              (t = Object.assign({}, t, this.props.inputStyleOverrides));
            var n = f.fieldset;
            this.props.fieldsetStyleOverrides &&
              (n = Object.assign({}, n, this.props.fieldsetStyleOverrides));
            var o = "";
            return (
              "gray" === this.props.placeholderColor
                ? (o = "UnauthTextInputField__gray")
                : "darkGray" === this.props.placeholderColor &&
                  (o = "UnauthTextInputField__darkGray"),
              s.a.createElement(
                "fieldset",
                { className: this.props.classNames, style: n },
                this.props.inputFieldTitle
                  ? s.a.createElement(
                      "div",
                      { style: f.fieldTitle },
                      this.props.inputFieldTitle,
                    )
                  : null,
                this.props.useGestalt
                  ? this.renderGestaltInputField()
                  : this.renderVanillaTextInputField(o, t),
              )
            );
          }),
          t
        );
      })(i.Component);
    (b.defaultProps = { autoComplete: "on", hasError: !1 }), (t.a = b);
  },
  "12R3": function (e, t, n) {
    "use strict";
    var o = n("BAXv"),
      r = n("UVpX"),
      a = n("PY0g"),
      i = n.n(a),
      s = n("Krtm"),
      l = n("FrUj"),
      c = this,
      u = {
        PhoneNumberAsYouTypeParser: null,
        csrf: Math.floor(0xffffffffffff * Math.random()).toString(16),
        phoneNumberValidators: [
          Object(l.q)({ message: "" }),
          Object(l.p)({ message: "" }),
        ],
        setupPhoneAuth: function e(t) {
          var n = u.csrf;
          (window.AccountKit_OnInteractive = function () {
            AccountKit.init({
              appId: o.a.GEN.templateConst.settings.FACEBOOK_API_KEY,
              state: n,
              version: "v1.1",
              fbAppEventsEnabled: !0,
            });
          }),
            (function (e, n, o) {
              var a = e.getElementsByTagName(n)[0];
              if (!e.getElementById(o)) {
                var i = e.createElement(n);
                (i.id = o),
                  (i.src =
                    "https://sdk.accountkit.com/" +
                    r.a.getLocaleString(t) +
                    "/sdk.js"),
                  a.parentNode.insertBefore(i, a);
              }
            })(document, "script", "accountkit-jssdk"),
            i()().then(function (e) {
              c.PhoneNumberAsYouTypeParser = e.default;
            });
        },
        runPhoneValidators: function e(t, n, o) {
          var r = Object(s.a)(t, u.phoneNumberValidators);
          if (!r)
            try {
              var a = u._extractCountryCode(n),
                i = new c.PhoneNumberAsYouTypeParser(a);
              i.input(t),
                AccountKit.login(
                  "PHONE",
                  {
                    countryCode: u._extractPhoneCountryCode(i),
                    phoneNumber: u._extractPhoneNumber(i),
                  },
                  o,
                );
            } catch (e) {
              return !0;
            }
          return r;
        },
        validateResponse: function e(t) {
          return (
            t && "PARTIALLY_AUTHENTICATED" === t.status && t.state === u.csrf
          );
        },
        _extractCountryCode: function e(t) {
          return t.slice(-2).toUpperCase() || "US";
        },
        _extractPhoneCountryCode: function e(t) {
          return t.country_phone_code
            ? "+" + t.country_phone_code
            : t.country && t.country_metadata.length > 0
            ? "+" + t.country_metadata[0]
            : "+1";
        },
        _extractPhoneNumber: function e(t) {
          return t.national_number;
        },
      };
    t.a = u;
  },
  "2eSi": function (e, t, n) {
    "use strict";
    var o = n("d6ZO"),
      r = n.n(o),
      a = n("7d2B"),
      i = n("nBsT"),
      s = n("yWAt"),
      l = n("1lmp"),
      c = n("5q/0"),
      u = n("IaRT"),
      p = n.n(u),
      d = n("fond"),
      g = n("S0eD"),
      h = n("+1LB"),
      m = n("XELL"),
      f = function e(t) {
        return Object(d.a)() + Object(a.a)() + Object(g.a)(!1) + Object(i.a)();
      },
      b = function e(t) {
        return r.a.createElement(
          c.a,
          { page: "login" },
          r.a.createElement(
            "div",
            { style: { marginTop: "100px" } },
            r.a.createElement(l.a, { unsafeCSS: f(!1) }),
            r.a.createElement(s.default, {
              AMPClientId: t.options.amp_client_id,
              container: "login_page",
              nextUrlParam: t.options.next || "/",
              removePinterestNumbers: !0,
              signupSource: m.a.login,
              toggleType: h.a.SMALL_TOGGLE,
              type: m.b.login,
            }),
          ),
        );
      };
    t.a = b;
  },
  4642: function (e, t, n) {
    "use strict";
    var o = n("SVkg"),
      r = n("ZtCB"),
      a = n.n(r);
    t.a = function (e) {
      var t = e.usernameOrEmail,
        n = e.contextLog,
        r = e.logOptions,
        i = e.callBack;
      n && r && n(o.a.requestEnd, r),
        a.a
          .create("UserResetPasswordResource", { username_or_email: t })
          .callCreate({ showError: !1 })
          .then(function (e) {
            n && r && n(o.a.request, r), i && i();
          });
    };
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
        "API_ERROR" === e.code && d.has(n) && (o = d.get(n)),
          Object(p.a)("unauth.login.error.API_ERROR." + o + "." + t);
      }
    }
    var r = n("oUjL"),
      a = n("BAXv"),
      i = n("WjSu"),
      s = n("kHbH"),
      l = n("ZtCB"),
      c = n.n(l),
      u = n("Gktc"),
      p = n("85jk"),
      d = new Map([
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
      g = n("+CHb"),
      h = n("+QQJ"),
      m = s.a.getLogger("UserLogin"),
      f = s.a.getLogger("AuthHandshake"),
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
      _ = function e(t, n) {
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
          i = n === Object(n) ? n.hybridTier : "tier_unknown",
          s = n === Object(n) ? n.container : "container_unknown";
        Object(p.a)("login.referrer." + o + "." + a),
          Object(p.a)("login.container." + s + "." + a),
          Object(p.a)("login.type." + a);
        var l = b(t) || "method_unknown",
          c = n.page || "page_unknown";
        t.gplus_autologin
          ? Object(p.a)("web_autologin_google")
          : t.facebook_autologin
          ? Object(p.a)("web_autologin_facebook")
          : Object(p.a)(
              "web_login." + l + ".success." + c + "." + s + "." + o + "." + i,
            );
      },
      y = function e(t, n) {
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
      E = function e(t) {
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
                    _(t, n),
                    f.debug("Cross domain login successful"),
                    Promise.resolve()
                  );
                },
                function (e) {
                  throw (
                    (f.error(
                      "Failed to set session for current user; " + e.message,
                    ),
                    e)
                  );
                },
              );
            }
            throw (
              (f.error("No custom access token in cross domain login response"),
              new Error())
            );
          },
          function (e) {
            throw (
              (!e.message &&
                e.response &&
                e.response.message &&
                (Object(p.a)("cctld_login_error_message"),
                (e.message = e.response.message)),
              f.error("Failed to login user; " + e.message),
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
          s = arguments[3];
        if (
          y(t, r) &&
          -1 !==
            a.a.GEN.templateConst.settings.CORS_HANDSHAKE_DOMAINS.indexOf(
              i.a.instance.origin,
            )
        )
          return E(t, n);
        var l = { showError: !1, async: !0 };
        return c.a
          .create("UserSessionResource", Object.assign({}, t, { seamless: s }))
          .callCreate(l)
          .then(
            function (e) {
              return (
                m.debug("Login, successful", e),
                _(t, n),
                Object(u.a)(),
                "undefined" != typeof window &&
                  void 0 !== window.localStorage &&
                  window.localStorage.setItem(g.a, !0),
                e
              );
            },
            function (e) {
              return o(e, n), Promise.reject(e);
            },
          );
      },
      w = (t.a = v);
  },
  "5q/0": function (e, t, n) {
    "use strict";
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    var i = n("d6ZO"),
      s = n.n(i),
      l = n("IaRT"),
      c = n.n(l),
      u = n("85jk"),
      p = n("nU3+"),
      d = "images",
      g = "unknown",
      h = "web",
      m = function e(t) {
        switch (t) {
          case "pin":
            return { viewType: 3 };
          case "board":
            return { viewType: 5, viewParameter: 3070 };
          case "article":
            return { viewType: 78 };
          case "explore":
            return { viewType: 22 };
          case "home":
            return { viewType: 1, viewParameter: 92 };
          case "login":
            return { viewType: 9 };
          case "klp":
          case "topic":
            return { viewType: 1, viewParameter: 136 };
          case "search":
            return { viewType: 2 };
          case "profile":
            return { viewType: 4 };
          default:
            return;
        }
      },
      f = function e(t, n) {
        return n || t === p.a.controlClosed
          ? "closed"
          : t === p.a.tier1
          ? "tier1"
          : t === p.a.tier2
          ? "tier2"
          : t === p.a.tier3
          ? "tier3"
          : "open";
      },
      b = (function (e) {
        function t() {
          return o(this, t), r(this, e.apply(this, arguments));
        }
        return (
          a(t, e),
          (t.prototype.getChildContext = function e() {
            var t = this.props,
              n = t.page,
              o = t.viewData,
              r = t.hybridTier,
              a = t.renderClose;
            return {
              logging: Object.assign({}, m(n), { viewData: o }),
              pageType: n,
              hybridTier: f(r, a),
            };
          }),
          (t.prototype.componentDidMount = function e() {
            var t = this.props.page;
            this.context.searchType === g
              ? Object(u.a)("search_type.unknown." + t)
              : this.context.searchType === h
              ? Object(u.a)("search_type.web." + t)
              : this.context.searchType === d &&
                (Object(u.a)("search_type.image." + t),
                Object(u.a)(
                  "image_search_query." + t + "." + this.context.searchQuery,
                ));
          }),
          (t.prototype.render = function e() {
            return this.props.children;
          }),
          t
        );
      })(i.Component);
    (t.a = b),
      (b.contextTypes = {
        searchQuery: c.a.string.isRequired,
        searchType: c.a.string.isRequired,
      }),
      (b.childContextTypes = {
        logging: c.a.shape({
          viewParameter: c.a.number,
          viewType: c.a.number.isRequired,
          viewData: c.a.shape({ interest: c.a.string }),
        }),
        pageType: c.a.string.isRequired,
        hybridTier: c.a.string,
      });
  },
  "63R5": function (e, t, n) {
    "use strict";
    function o(e) {
      return new Promise(function (t, n) {
        if (document.querySelector('script[src="' + e + '"]')) t();
        else {
          var o = document.createElement("script");
          (o.src = e),
            (o.async = !0),
            o.addEventListener("load", t),
            o.addEventListener("error", n),
            document.getElementsByTagName("head")[0].appendChild(o);
        }
      });
    }
    t.a = o;
  },
  "6Jd8": function (e, t, n) {
    "use strict";
    function o(e, t) {
      var n = s.a.GEN.templateConst.settings.EU_COUNTRIES,
        o = Object.assign({}, p.tosCommon, p.tosDark);
      e.dark || (o = Object.assign({}, p.tosCommon, p.tosLight));
      var r = e.noContainer ? {} : p.tosContainer;
      e.dynamicTopMargin && (r = Object.assign({}, r, { marginTop: "3%" })),
        e.disableWordBreak && (r = Object.assign({}, r, { hyphens: "none" })),
        e.large && (o = Object.assign({}, o, p.tosLarge));
      var c = void 0;
      return (
        (c =
          n.indexOf(t.country) > -1
            ? i.c(
                l.a._(
                  'By continuing, you agree to Pinterest\'s <a href="{{ tos_url }}">Terms of Service</a>, <a href="{{ privacy_policy_url }}">Privacy Policy</a> and <a href="{{ cookie_url }}"> Cookie use</a>.',
                ),
                {
                  tos_url: s.a.GEN.templateConst.settings.ABOUT_TERMS_PLAIN_URL,
                  privacy_policy_url:
                    s.a.GEN.templateConst.settings.ABOUT_PRIVACY_PLAIN_URL,
                  cookie_url: s.a.GEN.templateConst.settings.ABOUT_COOKIE_URL,
                },
              )
            : i.c(
                l.a._(
                  'By continuing, you agree to Pinterest\'s <a data-test-id="tos" href="{{ tos_url }}" target="_blank" >Terms of Service</a>, <a data-test-id="privacy" href="{{ privacy_policy_url }}" target="_blank">Privacy Policy</a>',
                ),
                {
                  tos_url: s.a.GEN.templateConst.settings.ABOUT_TERMS_PLAIN_URL,
                  privacy_policy_url:
                    s.a.GEN.templateConst.settings.ABOUT_PRIVACY_PLAIN_URL,
                },
              )),
        a.a.createElement(
          "div",
          { style: r },
          a.a.createElement(
            "span",
            { className: e.dark ? "" : "TermsOfService__light", style: o },
            a.a.createElement("span", {
              dangerouslySetInnerHTML: { __html: c },
            }),
          ),
        )
      );
    }
    var r = n("d6ZO"),
      a = n.n(r),
      i = n("5tOk"),
      s = n("BAXv"),
      l = n("W/Cr"),
      c = n("IaRT"),
      u = n.n(c),
      p = {
        tosContainer: { marginTop: "15px" },
        tosCommon: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          fontSize: "11px",
          fontWeight: "normal",
          textAlign: "center",
          WebkitTransition: "opacity .2s linear",
          transition: "opacity .2s linear",
        },
        tosLarge: { color: "#555", fontSize: "12px", lineHeight: "12px" },
        tosDark: { color: "#aaa", width: "224px" },
        tosLight: {
          color: "rgba(255,255,255,0.9)",
          lineHeight: "150%",
          margin: "10px auto",
          textShadow: "0 1px rgba(0,0,0,0.18)",
          width: "272px",
        },
      };
    (o.contextTypes = { country: u.a.string.isRequired }), (t.a = o);
  },
  "6oz1": function (e, t, n) {
    "use strict";
    function o(e) {
      var t = e.children;
      return t ? l.Children.only(t) : null;
    }
    function r(e) {
      var t = e.children;
      return t ? l.Children.only(t) : null;
    }
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function s(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    var l = n("d6ZO"),
      c = n.n(l),
      u = n("dnEF"),
      p = function e(t, n) {
        return (
          !!t &&
          (n.group
            ? Array.isArray(n.group)
              ? n.group.includes(t)
              : n.group === t
            : !!n.groupStartsWith &&
              (Array.isArray(n.groupStartsWith)
                ? n.groupStartsWith.some(function (e) {
                    return t && e && t.startsWith(e);
                  })
                : t.startsWith(n.groupStartsWith)))
        );
      },
      d = function e(t, n, o) {
        return (
          !("control" !== t && t && (o || !t)) ||
          (!!n.group &&
            (Array.isArray(n.group) ? n.group.includes(t) : n.group === t))
        );
      },
      g = (function (e) {
        function t() {
          return a(this, t), i(this, e.apply(this, arguments));
        }
        return (
          s(t, e),
          (t.prototype.componentDidMount = function e() {
            var t = this.props,
              n = t.activate,
              o = t.activateExperiment,
              r = t.isEligible,
              a = t.name;
            n && r && o(a);
          }),
          (t.prototype.render = function e() {
            var t = this.props,
              n = t.children,
              a = t.group,
              i = t.isEligible;
            if ("function" == typeof n) return n({ group: i ? a : "" });
            var s = void 0,
              c = void 0;
            return (
              l.Children.forEach(n, function (e) {
                !s &&
                  l.isValidElement(e) &&
                  (i && e.type === r && p(a, e.props) && (s = e),
                  e.type === o && d(a, e.props, i) && (c = e));
              }),
              s || c || null
            );
          }),
          t
        );
      })(l.Component);
    g.defaultProps = { activate: !0, isEligible: !0 };
    var h = g,
      m = n("dCTv"),
      f = function e(t) {
        var n = t.activate,
          o = t.children,
          r = t.experiments,
          a = t.isEligible,
          i = t.name,
          s = function e(t) {
            return r.activate(t);
          };
        return l.createElement(
          h,
          {
            activate: n,
            activateExperiment: s,
            group: r.v2GetGroup(i) || "",
            isEligible: a,
            name: i,
          },
          o,
        );
      },
      b = Object(m.b)(f),
      _ = n("IaRT"),
      y = n.n(_),
      E = function e(t) {
        var n = function e(n, o) {
          return l.createElement(
            t,
            Object.assign({ seoExperiments: o.seoExperiments }, n),
          );
        };
        return (
          (n.displayName =
            "WithSeoExperiments(" + (t.displayName || t.name) + ")"),
          (n.contextTypes = {
            seoExperiments: y.a.shape({
              v2GetGroup: y.a.func.isRequired,
              v2ActivateExperiment: y.a.func.isRequired,
            }).isRequired,
          }),
          n
        );
      },
      v = y.a.shape({
        v2GetGroup: y.a.func.isRequired,
        v2ActivateExperiment: y.a.func.isRequired,
      }).isRequired,
      w = E(function e(t) {
        var n = t.activate,
          o = t.children,
          r = t.seoExperiments,
          a = t.isEligible,
          i = t.name,
          s = function e(t) {
            return r.v2ActivateExperiment(t);
          };
        return l.createElement(
          h,
          {
            activate: n,
            activateExperiment: s,
            group: r.v2GetGroup(i) || "",
            isEligible: a,
            name: i,
          },
          o,
        );
      }),
      S = n("ok+N"),
      O = function e(t) {
        var n = t.activate,
          o = t.children,
          r = t.seoUnauthExperiments,
          a = t.isEligible,
          i = t.name,
          s = function e(t) {
            return r.v2ActivateExperiment(t);
          };
        return l.createElement(
          h,
          {
            activate: n,
            activateExperiment: s,
            group: r.v2GetGroup(i) || "",
            isEligible: a,
            name: i,
          },
          o,
        );
      },
      C = Object(S.b)(O);
    n.d(t, !1, function () {
      return o;
    }),
      n.d(t, "a", function () {
        return b;
      }),
      n.d(t, !1, function () {
        return w;
      }),
      n.d(t, "b", function () {
        return r;
      }),
      n.d(t, "c", function () {
        return C;
      });
  },
  "7d2B": function (e, t, n) {
    "use strict";
    var o = n("kc1m"),
      r = function e() {
        return (
          "\nhtml {\n  background-color: #efefef;\n}\n\nhtml, body {\n  font-family: " +
          o.b +
          ";\n  color: rgb(33, 25, 34);\n  font-size: 12px;\n  height: 100%;\n}\n\nbody {\n  position: relative;\n  overflow-y: scroll;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\na {\n  color: #717171;\n  font-weight: bold;\n  text-decoration: none;\n}\n\na:focus,\na:hover {\n  color: #8a8a8a;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nul li {\n  list-style: none;\n  padding: 0;\n}\n\n:focus {\n  outline: #d1d1d1 auto 1px\n}\n\nbutton, input, select, textarea {\n  font-family: " +
          o.b +
          ";\n  font-size: 100%;\n  vertical-align: middle;\n  margin: 0px;\n}\n\n.SkipToContent {\n  display: none;\n}\n\n.visuallyHidden {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n}\n\n"
        );
      };
    t.a = r;
  },
  AVO4: function (e, t, n) {
    "use strict";
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    var i = n("d6ZO"),
      s = n.n(i),
      l = n("BAXv"),
      c = n("W/Cr"),
      u = n("Wcb7"),
      p = n("Krtm"),
      d = n("gEaE"),
      g = s.a.createElement(d.b, { marginTop: 2 }),
      h = s.a.createElement(d.b, { marginTop: 3 }),
      m = function e(t) {
        var n = t.age,
          o = t.error,
          r = t.handleAgeChange,
          a = t.handleSubmit,
          i = t.inputRef;
        return s.a.createElement(
          d.b,
          null,
          s.a.createElement(
            "form",
            {
              method: "post",
              noValidate: !0,
              onSubmit: function e(t) {
                t.preventDefault(), a();
              },
            },
            s.a.createElement(
              d.b,
              null,
              s.a.createElement(
                d.H,
                { align: "left" },
                c.a._(
                  "How old are you?",
                  "Title for the age collection input field after connecting with Facebook or Google",
                ),
              ),
            ),
            g,
            s.a.createElement(
              d.b,
              null,
              s.a.createElement(d.J, {
                id: "age",
                errorMessage: o || "",
                onChange: r,
                placeholder: c.a._(
                  "Age",
                  "text field for user to enter their age",
                ),
                ref: function e(t) {
                  i && i(t);
                },
                type: "number",
              }),
            ),
            h,
            s.a.createElement(
              d.b,
              null,
              s.a.createElement(d.c, {
                color: "red",
                disabled: !n,
                text: c.a._("Continue"),
                type: "submit",
              }),
            ),
          ),
        );
      },
      f = n("SCJe"),
      b = n("FrUj"),
      _ = n("+QQJ"),
      y = { container: { margin: "0 auto", width: "268px" } },
      E = (function (e) {
        function t() {
          var n, a, i;
          o(this, t);
          for (var s = arguments.length, p = Array(s), d = 0; d < s; d++)
            p[d] = arguments[d];
          return (
            (n = a = r(this, e.call.apply(e, [this].concat(p)))),
            (a.state = { age: "", error: "" }),
            (a.handleAgeChange = function (e) {
              var t = e.value;
              a.setState({ age: t });
            }),
            (a.handleSignupSuccess = function () {
              u.a.handleSignupRedirect(
                a.props.nextUrlParam || window.location.pathname,
                !0,
              );
            }),
            (a.handleSignupFailure = function (e) {
              a.props.loadingIndicatorCallback &&
                a.props.loadingIndicatorCallback(!1);
              var t =
                e.message ||
                c.a._(
                  "Oops! Something went wrong… Click Continue to try again.",
                  "Error during signup during age collection step",
                );
              e.api_error_code === l.a.API_ERROR_UNDERAGE_REGISTER_ATTEMPT &&
                (t = c.a._(
                  "Uh oh... it looks like you’re not old enough just yet.",
                  "Underage error during signup",
                )),
                a.setState({ error: t });
            }),
            (a.handleSubmit = function () {
              var e = a.state.age,
                t = a.props.registrationCredentials,
                n = a.validateAge(e || "");
              n
                ? a.setState({ error: n })
                : (a.setState({ error: "" }),
                  a.props.loadingIndicatorCallback &&
                    a.props.loadingIndicatorCallback(!0),
                  t.type === _.a.FACEBOOK
                    ? f.a
                        .sendImmediateFbRegisterRequest(
                          t.userData,
                          Object.assign({}, t.credentialsAndLoggingData, {
                            age: e,
                          }),
                          null,
                          !1,
                        )
                        .then(a.handleSignupSuccess, a.handleSignupFailure)
                    : t.type === _.a.GOOGLE &&
                      f.a
                        .sendGPlusRegisterRequest(
                          t.credentialsAndLoggingData,
                          { age: e },
                          null,
                        )
                        .then(a.handleSignupSuccess, a.handleSignupFailure));
            }),
            (i = n),
            r(a, i)
          );
        }
        return (
          a(t, e),
          (t.prototype.componentDidMount = function e() {
            this.focusInputField();
          }),
          (t.prototype.focusInputField = function e() {
            this.inputRef &&
              this.inputRef.textfield &&
              this.inputRef.textfield.focus();
          }),
          (t.prototype.validateAge = function e(t) {
            return Object(p.a)(t, [
              Object(b.a)({ message: c.a._("Please enter a valid number.") }),
            ]);
          }),
          (t.prototype.render = function e() {
            var t = this,
              n = this.state,
              o = n.age,
              r = n.error;
            return s.a.createElement(
              "div",
              { style: y.container },
              s.a.createElement(m, {
                age: o,
                error: r,
                handleAgeChange: this.handleAgeChange,
                handleSubmit: this.handleSubmit,
                inputRef: function e(n) {
                  t.inputRef = n;
                },
              }),
            );
          }),
          t
        );
      })(i.Component),
      v = (t.a = E);
  },
  CelS: function (e, t, n) {
    "use strict";
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function l(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    var c = n("d6ZO"),
      u = n.n(c),
      p = n("dnEF"),
      d = n("W/Cr"),
      g = n("IaRT"),
      h = n.n(g),
      m = n("ZtCB"),
      f = n.n(m),
      b = n("85jk"),
      _ = n("gEaE"),
      y = {
        countryCode: {
          position: "absolute",
          zIndex: "1",
          fontSize: "16px",
          fontFamily: "HelveticaNeue",
          color: "#555555",
          width: "56px",
          marginTop: "3px",
          marginLeft: "3px",
          paddingTop: "7px",
          paddingBottom: "5px",
          backgroundColor: "white",
          textAlign: "center",
        },
      },
      E = u.a.createElement(_.b, { marginTop: 3 }),
      v = u.a.createElement(_.b, { marginTop: 5 }),
      w = (function (e) {
        function t(n) {
          o(this, t);
          var a = r(this, e.call(this, n));
          return (
            (a.handleCountryCodeSelectionChange = function (e) {
              var t = e.value;
              a.setState({ countryCode: t }),
                a.props.handleCountryCodeChange({ value: t });
            }),
            (a.state = { countryCodeOptions: [], countryCode: "" }),
            a
          );
        }
        return (
          a(t, e),
          (t.prototype.componentDidMount = function e() {
            var t = this;
            this.focusInputField(),
              f.a
                .create("CountriesPhoneCodesResource")
                .callGet()
                .then(function (e) {
                  var n = (e.resource_response.data || []).map(function (e) {
                    return { label: e.phone_code_label, value: e.phone_code };
                  });
                  t.setState({
                    countryCodeOptions: n,
                    countryCode: n[0].value,
                  }),
                    t.props.handleCountryCodeChange &&
                      t.props.handleCountryCodeChange({ value: n[0].value });
                }),
              Object(b.a)(
                "unauth.fb_phone_only_signup.email_or_phone_number_step",
              );
          }),
          (t.prototype.focusInputField = function e() {
            this.inputRef &&
              this.inputRef.textfield &&
              this.inputRef.textfield.focus();
          }),
          (t.prototype.render = function e() {
            var t = this,
              n = this.props,
              o = n.emailError,
              r = n.phoneError,
              a = n.handleEmailChange,
              i = n.handlePhoneNumberChange,
              s = n.handleSubmit;
            return u.a.createElement(
              _.b,
              { marginTop: 3 },
              u.a.createElement(
                "form",
                {
                  method: "post",
                  noValidate: !0,
                  onSubmit: function e(t) {
                    t.preventDefault(), s();
                  },
                },
                u.a.createElement(
                  _.H,
                  { align: "left" },
                  d.a._(
                    "Enter the email address or phone number you'd like to be connected to your Pinterest account",
                    "subtitle to explain the step on email or phone collection form",
                  ),
                ),
                E,
                u.a.createElement(
                  _.b,
                  null,
                  u.a.createElement(_.J, {
                    id: "email",
                    errorMessage: o,
                    onChange: a,
                    placeholder: d.a._(
                      "Email address",
                      "email placeholder in the email inputfield on email or phone collection form",
                    ),
                    ref: function e(n) {
                      t.inputRef = n;
                    },
                    type: "email",
                  }),
                ),
                u.a.createElement(
                  _.b,
                  { marginTop: 2, marginBottom: 2 },
                  u.a.createElement(
                    _.H,
                    { align: "center", bold: !0 },
                    d.a._(
                      "OR",
                      "word divider between email and phone text inputfields on email or phone collection form",
                    ),
                  ),
                ),
                u.a.createElement(
                  _.b,
                  { display: "flex", justifyContent: "between" },
                  u.a.createElement(
                    _.b,
                    { width: 88 },
                    u.a.createElement(
                      "div",
                      { style: y.countryCode },
                      this.state.countryCode,
                    ),
                    u.a.createElement(_.C, {
                      id: "countryCode",
                      onChange: this.handleCountryCodeSelectionChange,
                      options: this.state.countryCodeOptions,
                    }),
                  ),
                  u.a.createElement(
                    _.b,
                    { width: 170 },
                    u.a.createElement(_.J, {
                      id: "phoneNumber",
                      errorMessage: r,
                      type: "text",
                      onChange: i,
                      placeholder: d.a._(
                        "Phone number",
                        "email placeholder in the email inputfield on email or phone collection form",
                      ),
                    }),
                  ),
                ),
                v,
                u.a.createElement(_.c, {
                  text: d.a._("Continue", "word on the button"),
                  type: "submit",
                }),
              ),
            );
          }),
          t
        );
      })(c.Component),
      S = n("Wcb7"),
      O = n("Krtm"),
      C = n("SCJe"),
      x = n("ok+N"),
      T = n("+QQJ"),
      k = n("FrUj"),
      R = { container: { margin: "0 auto", width: "268px" } },
      A = { EMAIL: "email", PHONE: "phone" },
      P = 2e3,
      B = (function (e) {
        function t(n) {
          i(this, t);
          var o = s(this, e.call(this, n));
          return (
            (o.handleCountryCodeChange = function (e) {
              var t = e.value;
              o.setState({ countryCode: t });
            }),
            (o.handleEmailChange = function (e) {
              var t = e.value;
              o.setState({ email: t });
            }),
            (o.handlePhoneNumberChange = function (e) {
              var t = e.value;
              o.setState({ phoneNumber: t });
            }),
            (o.showError = function (e, t) {
              t === A.EMAIL
                ? o.setState({ emailError: e })
                : t === A.PHONE && o.setState({ phoneError: e });
            }),
            (o.handleSubmit = function () {
              if (
                (Object(b.a)(
                  "unauth.fb_phone_only_signup.submit_email_or_phone",
                ),
                o.state.email)
              )
                Object(b.a)("unauth.fb_phone_only_signup.submit_email"),
                  o.attemptEmailSignupOrLogin();
              else if (o.state.phoneNumber)
                Object(b.a)("unauth.fb_phone_only_signup.submit_phone"),
                  o.attemptPhoneSignupOrLogin();
              else {
                var e = d.a._(
                    "Email or phone number is required",
                    "email and phone number error message",
                  ),
                  t = d.a._(
                    "Email or phone number is required",
                    "email and phone number error message",
                  );
                o.setState({ emailError: e, phoneError: t });
              }
            }),
            (o.inFacebookRequireAgeExperiment = function () {
              return (
                o.props.seoUnauthExperiments.v2ActivateExperiment(
                  "unauth_web_facebook_signup_require_age_eu",
                ) || ""
              ).startsWith("enabled");
            }),
            (o.handleSignupSuccess = function () {
              S.a.handleSignupRedirect(
                o.props.nextUrlParam || window.location.pathname,
                !0,
              ),
                Object(b.a)("unauth.fb_phone_only_signup.signup_success");
            }),
            (o.handleSignupFailure = function (e) {
              return function (t) {
                var n =
                  t.message ||
                  d.a._(
                    "Oops! Something went wrong… Click Continue to try again.",
                    "Error during signup during FB email or phone collection step",
                  );
                o.showError(n, e),
                  Object(b.a)("unauth.fb_phone_only_signup.signup_failure");
              };
            }),
            (o.attemptEmailSignupOrLogin = function () {
              var e = o.state.email,
                t = [
                  Object(k.e)({
                    message: d.a._(
                      "Hmm... that doesn't look like an email address.",
                      "email error message",
                    ),
                  }),
                ],
                n = Object(O.a)(e, t);
              if (n)
                return (
                  Object(b.a)(
                    "unauth.fb_phone_only_signup.email_validation_failure",
                  ),
                  void o.setState({ emailError: n })
                );
              var r = o.props,
                a = r.registrationCredentials,
                i = a.type,
                s = a.credentialsAndLoggingData,
                l = r.showSocialSignupWithAgeStep,
                c = r.showEmailConfirmationStep,
                u = Object.assign(
                  {},
                  o.props.registrationCredentials.userData,
                  { email: e, access_token: s.facebook_token },
                );
              f.a
                .create("EmailExistsResource", { email: e })
                .callGet()
                .then(
                  function (t) {
                    !1 === t.resource_response.data
                      ? o.inFacebookRequireAgeExperiment()
                        ? l(i, u, s)
                        : C.a
                            .sendImmediateFbRegisterRequest(u, s, null, !1)
                            .then(
                              o.handleSignupSuccess,
                              o.handleSignupFailure(A.EMAIL),
                            )
                      : (f.a
                          .create("EmailLoginConfirmationResource", {
                            email: e,
                          })
                          .callGet(),
                        c(i, u, s),
                        Object(b.a)(
                          "unauth.fb_phone_only_signup.email_existed_confirmation",
                        ));
                  },
                  function () {
                    var e = d.a._(
                      "Hmm... that doesn't look like an email address.",
                      "email error message",
                    );
                    o.showError(e, A.EMAIL),
                      Object(b.a)(
                        "unauth.fb_phone_only_signup.email_exist_api_call_failure",
                      );
                  },
                );
            }),
            (o.attemptPhoneSignupOrLogin = function () {
              var e = o.state.countryCode,
                t = o.state.phoneNumber,
                n = e + (t = t.replace(/-/g, "")),
                r = [
                  Object(k.p)({
                    message: d.a._(
                      "Hmm... that doesn't look like a phone number.",
                      "phone number error message",
                    ),
                  }),
                ],
                a = Object(O.a)(n, r);
              if (a)
                return (
                  Object(b.a)(
                    "unauth.fb_phone_only_signup.phone_validation_failure",
                  ),
                  void o.setState({ phoneError: a })
                );
              var i = o.props,
                s = i.registrationCredentials,
                l = s.type,
                c = s.credentialsAndLoggingData,
                u = i.showSocialSignupWithAgeStep,
                p = Object.assign(
                  {},
                  o.props.registrationCredentials.userData,
                  {
                    email:
                      o.props.registrationCredentials.userData.id +
                      "@fb.pinterest.com",
                    access_token: c.facebook_token,
                    unverified_phone: n,
                  },
                );
              f.a
                .create("EmailExistsResource", {
                  email:
                    o.props.registrationCredentials.userData.id +
                    "@fb.pinterest.com",
                  phone: n,
                })
                .callGet()
                .then(
                  function (e) {
                    if (!1 === e.resource_response.data)
                      o.inFacebookRequireAgeExperiment()
                        ? u(l, p, c)
                        : C.a
                            .sendImmediateFbRegisterRequest(p, c, null, !1)
                            .then(
                              o.handleSignupSuccess,
                              o.handleSignupFailure(A.PHONE),
                            );
                    else {
                      var t = d.a._(
                        "Whoops! There is already an account associated with that phone number",
                        "phone number error message",
                      );
                      o.showError(t, A.PHONE),
                        setTimeout(o.props.showLoginStep, P),
                        Object(b.a)(
                          "unauth.fb_phone_only_signup.phone_existed_confirmation",
                        );
                    }
                  },
                  function () {
                    var e = d.a._(
                      "Hmm... that doesn't look like a phone number",
                      "phone number error message",
                    );
                    o.showError(e, A.PHONE),
                      Object(b.a)(
                        "unauth.fb_phone_only_signup.phone_exist_api_call_failure",
                      );
                  },
                );
            }),
            (o.state = {
              countryCode: "",
              email: "",
              phoneNumber: "",
              emailError: "",
              phoneError: "",
            }),
            o
          );
        }
        return (
          l(t, e),
          (t.prototype.componentDidMount = function e() {
            this.props.loadingIndicatorCallback &&
              this.props.loadingIndicatorCallback(!1);
          }),
          (t.prototype.render = function e() {
            return u.a.createElement(
              "div",
              { style: R.container },
              u.a.createElement(w, {
                emailError: this.state.emailError,
                phoneError: this.state.phoneError,
                handleCountryCodeChange: this.handleCountryCodeChange,
                handleEmailChange: this.handleEmailChange,
                handlePhoneNumberChange: this.handlePhoneNumberChange,
                handleSubmit: this.handleSubmit,
              }),
            );
          }),
          t
        );
      })(c.Component),
      L = (t.a = B);
  },
  CogI: function (e, t, n) {
    "use strict";
    function o(e, t) {
      var n = {};
      for (var o in e)
        t.indexOf(o) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]));
      return n;
    }
    var r = n("d6ZO"),
      a = n.n(r),
      i = n("gEaE"),
      s = r.createElement(
        i.H,
        { color: "orange", bold: !0, inline: !0 },
        r.createElement("span", { "aria-hidden": "true" }, "*"),
      ),
      l = function e(t) {
        var n = t.children,
          o = t.description,
          a = t.error,
          l = t.id,
          c = t.label,
          u = t.required,
          p = t.onLabelTouch;
        return r.createElement(
          i.b,
          null,
          r.createElement(
            i.b,
            { marginBottom: 1 },
            r.createElement(
              i.p,
              { htmlFor: l },
              r.createElement(
                i.H,
                { color: a ? "orange" : "darkGray" },
                c,
                u && s,
              ),
            ),
          ),
          n,
          (a || o) &&
            r.createElement(
              i.p,
              { htmlFor: l },
              r.createElement(
                i.b,
                { marginTop: 1 },
                p
                  ? r.createElement(
                      i.M,
                      { onTouch: p },
                      r.createElement(
                        i.H,
                        {
                          bold: !0,
                          color: a ? "orange" : "darkGray",
                          size: "sm",
                        },
                        a || o,
                      ),
                    )
                  : r.createElement(
                      i.H,
                      { color: a ? "orange" : "darkGray", size: "sm" },
                      a || o,
                    ),
              ),
            ),
        );
      },
      c = function e(t) {
        var n = t.description,
          r = t.error,
          s = t.id,
          c = t.label,
          u = t.required,
          p = void 0 !== u && u,
          d = t.onLabelTouch,
          g = o(t, [
            "description",
            "error",
            "id",
            "label",
            "required",
            "onLabelTouch",
          ]);
        return a.a.createElement(
          l,
          {
            description: n,
            error: r,
            id: s,
            label: c,
            required: p,
            onLabelTouch: d,
          },
          a.a.createElement(
            i.J,
            Object.assign({}, g, { hasError: !!r, id: s }),
          ),
        );
      },
      u = (t.a = c);
  },
  CvvH: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n("d6ZO"),
      r = n.n(o),
      a = n("2eSi"),
      i = n("Xafg"),
      s = n("MQ2h"),
      l = n.n(s),
      c = function e(t) {
        var n = t.location,
          r = t.route,
          i = t.params;
        return r && n
          ? o.createElement(a.a, {
              context: r.legacy_server_context,
              options: {
                next: n.query.next,
                auto_follow: n.query.auto_follow,
                prev: n.query.prev,
                amp_client_id: n.query.amp_client_id,
              },
            })
          : o.createElement(a.a, {
              options: {
                next: i.next,
                prev: i.prev,
                auto_follow: i.auto_follow,
                amp_client_id: i.amp_client_id,
              },
            });
      };
    t.default = Object(s.compose)(
      Object(i.a)({
        name: "UnauthLoginReactWrapper",
        routeContextLog: function e() {
          return { view_type: 9 };
        },
      }),
    )(c);
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
          m.iterable &&
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
      function i(e) {
        return new Promise(function (t, n) {
          (e.onload = function () {
            t(e.result);
          }),
            (e.onerror = function () {
              n(e.error);
            });
        });
      }
      function s(e) {
        var t = new FileReader();
        return t.readAsArrayBuffer(e), i(t);
      }
      function l(e) {
        var t = new FileReader();
        return t.readAsText(e), i(t);
      }
      function c() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (e) {
            if (((this._bodyInit = e), "string" == typeof e))
              this._bodyText = e;
            else if (m.blob && Blob.prototype.isPrototypeOf(e))
              this._bodyBlob = e;
            else if (m.formData && FormData.prototype.isPrototypeOf(e))
              this._bodyFormData = e;
            else if (
              m.searchParams &&
              URLSearchParams.prototype.isPrototypeOf(e)
            )
              this._bodyText = e.toString();
            else if (e) {
              if (!m.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e))
                throw new Error("unsupported BodyInit type");
            } else this._bodyText = "";
            this.headers.get("content-type") ||
              ("string" == typeof e
                ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                : this._bodyBlob && this._bodyBlob.type
                ? this.headers.set("content-type", this._bodyBlob.type)
                : m.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(e) &&
                  this.headers.set(
                    "content-type",
                    "application/x-www-form-urlencoded;charset=UTF-8",
                  ));
          }),
          m.blob
            ? ((this.blob = function () {
                var e = a(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]));
              }),
              (this.arrayBuffer = function () {
                return this.blob().then(s);
              }),
              (this.text = function () {
                var e = a(this);
                if (e) return e;
                if (this._bodyBlob) return l(this._bodyBlob);
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }))
            : (this.text = function () {
                var e = a(this);
                return e || Promise.resolve(this._bodyText);
              }),
          m.formData &&
            (this.formData = function () {
              return this.text().then(d);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      function u(e) {
        var t = e.toUpperCase();
        return f.indexOf(t) > -1 ? t : e;
      }
      function p(e, t) {
        var n = (t = t || {}).body;
        if (p.prototype.isPrototypeOf(e)) {
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
          (this.method = u(t.method || this.method || "GET")),
          (this.mode = t.mode || this.mode || null),
          (this.referrer = null),
          ("GET" === this.method || "HEAD" === this.method) && n)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(n);
      }
      function d(e) {
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
      function g(e) {
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
        var m = {
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
          m.iterable && (r.prototype[Symbol.iterator] = r.prototype.entries);
        var f = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        (p.prototype.clone = function () {
          return new p(this);
        }),
          c.call(p.prototype),
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
          (e.Request = p),
          (e.Response = h),
          (e.fetch = function (e, t) {
            return new Promise(function (n, o) {
              function r() {
                return "responseURL" in i
                  ? i.responseURL
                  : /^X-Request-URL:/m.test(i.getAllResponseHeaders())
                  ? i.getResponseHeader("X-Request-URL")
                  : void 0;
              }
              var a;
              a = p.prototype.isPrototypeOf(e) && !t ? e : new p(e, t);
              var i = new XMLHttpRequest();
              (i.onload = function () {
                var e = {
                    status: i.status,
                    statusText: i.statusText,
                    headers: g(i),
                    url: r(),
                  },
                  t = "response" in i ? i.response : i.responseText;
                n(new h(t, e));
              }),
                (i.onerror = function () {
                  o(new TypeError("Network request failed"));
                }),
                (i.ontimeout = function () {
                  o(new TypeError("Network request failed"));
                }),
                i.open(a.method, a.url, !0),
                "include" === a.credentials && (i.withCredentials = !0),
                "responseType" in i && m.blob && (i.responseType = "blob"),
                a.headers.forEach(function (e, t) {
                  i.setRequestHeader(t, e);
                }),
                i.send(void 0 === a._bodyInit ? null : a._bodyInit);
            });
          }),
          (e.fetch.polyfill = !0);
      }
    })("undefined" != typeof self ? self : this);
  },
  FGUD: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    var o = function e(t) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent("handleErrorMessage", !0, !0, t),
          window.dispatchEvent(n);
      },
      r = function e(t, n) {
        o({ message: t, href: n });
      },
      a = r;
  },
  Krtm: function (e, t, n) {
    "use strict";
    var o = function e(t, n) {
      var o = void 0;
      return (
        n.some(function (e) {
          var n = e(t);
          return n.errors.length > 0 && ((o = n.errors[0]), !0);
        }),
        o
      );
    };
    t.a = o;
  },
  KuQ8: function (e, t, n) {
    e.exports = function () {
      return new Promise(function (e) {
        n.e(50)
          .then(
            function (t) {
              e(n("6lCA"));
            }.bind(null, n),
          )
          .catch(n.oe);
      });
    };
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
  O734: function (e, t, n) {
    "use strict";
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    var i = n("d6ZO"),
      s = n.n(i),
      l = n("/2tF"),
      c = n("BAXv"),
      u = n("W/Cr"),
      p = n("5JMz"),
      d = n("Wcb7"),
      g = n("IaRT"),
      h = n.n(g),
      m = n("Krtm"),
      f = n("+XcA"),
      b = n("85jk"),
      _ = n("suNN"),
      y = n("FGUD"),
      E = n("FrUj"),
      v = c.a.GEN.templateConst.settings.PASSWORD_RESET_URL,
      w = {
        loginForm: {
          borderTop: "solid 1px #ccc",
          minHeight: "350px",
          padding: "20px 10px",
        },
        loginText: { fontSize: "14px", margin: "24px 0", textAlign: "left" },
        loginTitleContainer: { margin: "0 auto 25px" },
        loginTitle: {
          fontSize: "28px",
          fontWeight: "bold",
          letterSpacing: "-1px",
        },
        loginContainer: { margin: "0 auto", marginTop: "45px", width: "268px" },
        loginFooterContainer: { marginTop: "15px", color: "#555" },
        signupButton: { width: "100%" },
      },
      S = "loginmfa",
      O = (function (e) {
        function t(n) {
          o(this, t);
          var a = r(this, e.call(this, n));
          return (
            (a.state = { codeValidationError: null, loading: !1 }),
            (a.codeValidators = [
              Object(E.q)({
                message: u.a._(
                  "You missed a spot! Don't forget to add your verification code.",
                ),
              }),
              Object(E.l)({
                message: u.a._(
                  "Hmm...that doesn't look like a verification code.",
                ),
              }),
            ]),
            a
          );
        }
        return (
          a(t, e),
          (t.prototype.componentDidMount = function e() {
            this.context.isAuthenticated &&
              d.a.handleRedirect(this.props.nextUrlParam);
          }),
          (t.prototype._getLocationForLoginRedirect = function e() {
            var t =
              window.location.pathname !== v ? window.location.pathname : "/";
            return this.props.nextUrlParam || t;
          }),
          (t.prototype.handleButtonClick = function e(t) {
            var n = Object(m.a)(this.props.code, this.codeValidators);
            n
              ? (this.setState({ codeValidationError: n }),
                Object(b.a)(
                  "unauth.login.error.ClIENT_ERROR.wrongcode.loginmfa",
                ))
              : (this.setState({ codeValidationError: null }),
                this.loginUser());
          }),
          (t.prototype.handleResendCode = function e(t) {
            var n = this;
            t.preventDefault(), this.setState({ loading: !0 });
            var o = this.props.creds;
            o
              ? (o.mfa_resend = !0)
              : (o = {
                  mfa_resend: !0,
                  username_or_email: this.props.email,
                  password: this.props.password,
                });
            var r = {
              container: this.props.container,
              hybridTier: this.context.hybridTier,
              page: this.context.pageType,
            };
            Object(p.a)(o, r).then(
              function () {
                n.setState({ loading: !1 });
              },
              function (e) {
                n.setState({ loading: !1 }),
                  e.message
                    ? n.setState({ codeValidationError: e.message })
                    : Object(y.a)(
                        u.a._("Sorry! Something went wrong on our end."),
                      );
              },
            );
          }),
          (t.prototype.loginUser = function e(t) {
            var n = this;
            this.setState({ loading: !0 });
            var o = t || this.props.creds;
            o
              ? (o.mfa_token = this.props.code)
              : (o = {
                  mfa_token: this.props.code,
                  username_or_email: this.props.email,
                  password: this.props.password,
                }),
              Object(p.a)(o, this.props.container).then(
                function () {
                  d.a.handleRedirect(n._getLocationForLoginRedirect());
                },
                function (e) {
                  e.message
                    ? n.setState({
                        codeValidationError: e.message,
                        loading: !1,
                      })
                    : (Object(y.a)(
                        u.a._("Sorry! Something went wrong on our end."),
                      ),
                      n.setState({ loading: !1 }));
                },
              );
          }),
          (t.prototype.render = function e() {
            var t = this,
              n = w.loginContainer,
              o = u.a._("Continue"),
              r = this.props.phoneNumberEnd,
              a = r
                ? Object(_.b)(
                    u.a._(
                      "Please check your phone with the number ending in {{ phoneNumberEnd }} for a code and enter it in the field below to log in.",
                    ),
                    {
                      phoneNumberEnd: s.a.createElement(
                        "strong",
                        { key: "phone" },
                        r,
                      ),
                    },
                  )
                : u.a._(
                    "Please check your phone for a code and enter it in the field below to log in.",
                  );
            return s.a.createElement(
              "div",
              { style: n },
              s.a.createElement("p", { style: w.loginText }, a),
              s.a.createElement(
                "form",
                {
                  method: "POST",
                  noValidate: !0,
                  onSubmit: function e(n) {
                    n.preventDefault(), t.handleButtonClick(n);
                  },
                },
                s.a.createElement(f.a, {
                  autoComplete: "off",
                  focused: !0,
                  hasError: !!this.state.codeValidationError,
                  id: "mfaCode",
                  inputStyleOverrides: this.props.inputStyleOverrides,
                  name: "code",
                  onChange: this.props.onCodeChange,
                  placeholder: u.a._("Verification code"),
                  tooltip: this.state.codeValidationError,
                  type: "text",
                  value: this.props.code,
                  useGestaltTooltip: this.props.useGestaltTooltip,
                }),
                s.a.createElement(
                  l.a,
                  {
                    accessibilityLabel: o,
                    className: "red SignupButton",
                    loading: this.state.loading,
                    styleOverrides: w.signupButton,
                    type: "submit",
                  },
                  s.a.createElement("div", null, o),
                ),
              ),
              s.a.createElement(
                "div",
                { style: w.loginFooterContainer },
                Object(_.b)(
                  u.a._("If you didn't get it, we can {{ resendCode }}."),
                  {
                    resendCode: s.a.createElement(
                      "a",
                      {
                        onClick: this.handleResendCode.bind(this),
                        href: "",
                        key: "code",
                      },
                      u.a._("resend the code"),
                    ),
                  },
                ),
              ),
            );
          }),
          t
        );
      })(i.Component);
    (O.defaultProps = { container: "unknown" }),
      (O.contextTypes = {
        isAuthenticated: h.a.bool.isRequired,
        locale: h.a.string.isRequired,
        hybridTier: h.a.string,
        pageType: h.a.string,
      }),
      (t.a = O);
  },
  P9bn: function (e, t, n) {
    "use strict";
    function o(e, t) {
      var n = e.text || i.a._("OR"),
        o = Object.assign({}, c.alternativesSeparator, e.css);
      e.dynamicMargin &&
        (o = Object.assign({}, o, { marginBottom: "2%", marginTop: "2%" }));
      var r = "";
      return (
        e.signupSeparatorContinuous && (r = "AlternativesSeparatorContinuous"),
        a.a.createElement("p", { className: r, style: o }, n)
      );
    }
    var r = n("d6ZO"),
      a = n.n(r),
      i = n("W/Cr"),
      s = n("IaRT"),
      l = n.n(s),
      c = {
        alternativesSeparator: {
          marginBottom: "3px",
          overflow: "hidden",
          textAlign: "center",
          color: "#555",
          fontWeight: "bold",
        },
      };
    (o.defaultProps = { css: {} }),
      (o.contextTypes = {
        pageType: l.a.string,
        userAgent: l.a.shape({ isMobile: l.a.bool.isRequired }).isRequired,
      }),
      (t.a = o);
  },
  PY0g: function (e, t, n) {
    e.exports = function () {
      return new Promise(function (e) {
        n.e(49)
          .then(
            function (t) {
              e(n("2uO8"));
            }.bind(null, n),
          )
          .catch(n.oe);
      });
    };
  },
  Q4UA: function (e, t, n) {
    "use strict";
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    n.d(t, "a", function () {
      return R;
    });
    var i = n("d6ZO"),
      s = n.n(i),
      l = n("/2tF"),
      c = n("BAXv"),
      u = n("Lgi6"),
      p = n("W/Cr"),
      d = n("5JMz"),
      g = n("Wcb7"),
      h = n("IaRT"),
      m = n.n(h),
      f = n("XzpH"),
      b = n("85jk"),
      _ = n("SCJe"),
      y = n("MQ2h"),
      E = n.n(y),
      v = n("kc1m"),
      w = n("FGUD"),
      S = n("kzic"),
      O = n("ok+N"),
      C = n("+QQJ"),
      x = {
        button: {
          padding: "1px",
          marginBottom: "9px",
          marginRight: "0px",
          textAlign: "left",
          backgroundClip: "padding-box",
          display: "block",
          transition: "opacity .2s linear",
          position: "relative",
          outline: "none",
          width: "100%",
          marginTop: "0px",
          backgroundColor: "#4285f4",
          height: "40px",
          borderRadius: "2px",
        },
        icon: {
          borderRadius: "2px",
          backgroundColor: "#fff",
          display: "inline-block",
          height: "25px",
          marginLeft: "7px",
          textAlign: "center",
          width: "25px",
        },
        iconContainer: {
          position: "relative",
          margin: "auto",
          marginTop: "2px",
        },
        text: {
          color: "#fff",
          display: "inline-block",
          fontFamily: v.b,
          position: "absolute",
          textAlign: "center",
          top: "50%",
          transform: "translateY(-50%)",
          verticalAlign: "top",
          WebkitFontSmoothing: "auto",
          width: "83%",
        },
        tooltip: { top: "12px", left: "100%", position: "absolute" },
      },
      T = "postmessage",
      k = "profile email",
      R = "google",
      A = s.a.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        s.a.createElement("path", {
          d: "M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z",
          fill: "#4285f4",
        }),
        s.a.createElement("path", {
          d: "M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z",
          fill: "#34a853",
        }),
        s.a.createElement("path", {
          d: "M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z",
          fill: "#fbbc05",
        }),
        s.a.createElement("path", {
          d: "M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z",
          fill: "#ea4335",
        }),
        s.a.createElement("path", { d: "M20 20h472v472H20V20z" }),
      ),
      P = (function (e) {
        function t() {
          var n, a, i;
          o(this, t);
          for (var l = arguments.length, u = Array(l), d = 0; d < l; d++)
            u[d] = arguments[d];
          return (
            (n = a = r(this, e.call.apply(e, [this].concat(u)))),
            (a.onSignInCallback = function (e, t, n) {
              var o = {
                gplus_id_token: e.id_token,
                gplus_access_token: e.access_token,
                gplus_expires_at: e.expires_at,
              };
              e.status.signed_in &&
                a.login(o).then(
                  function () {
                    t && Object(b.a)("autologin.google"), a.onLoginSuccess(e);
                  },
                  function (t) {
                    if (t.api_error_code === c.a.LOGIN_MFA_REQUIRED)
                      a.props.onLoginWithMfa &&
                        a.props.onLoginWithMfa(t.data, o);
                    else if (t.api_error_code === c.a.LOGIN_USER_NOT_FOUND) {
                      if (a.props.preventRegister)
                        return void a.props.preventRegister(R);
                      a.onLoginError(t, e, n);
                    } else
                      t &&
                        t.api_error_code &&
                        Object(b.a)(
                          "google_connect_button.failed_login." +
                            t.api_error_code,
                        ),
                        Object(w.a)(
                          p.a._(
                            "Sorry, we can't log you in.",
                            "error message when user failed to login caused by suspend/deactivated etc.",
                          ),
                        );
                  },
                );
            }),
            (a.onLoginSuccess = function (e) {
              g.a.handleRedirect(
                a.props.nextUrlParam || window.location.pathname,
              );
            }),
            (a.renderTooltip = function (e) {
              return e
                ? s.a.createElement(
                    "div",
                    { style: x.tooltip },
                    s.a.createElement(f.a, { message: e }),
                  )
                : null;
            }),
            (i = n),
            r(a, i)
          );
        }
        return (
          a(t, e),
          (t.prototype.componentDidMount = function e() {
            var t = this;
            "undefined" != typeof window &&
              (window.googleOnSignInCallbacks
                ? window.googleOnSignInCallbacks.push(this.onSignInCallback)
                : (window.googleOnSignInCallbacks = [this.onSignInCallback])),
              (this.readyForConnect = !1),
              (this.autoLogin = !1),
              u.a.get(function (e) {
                e.signin.render(t.googleButton, {
                  scope: "profile email",
                  clientid: c.a.GEN.templateConst.settings.GPLUS_CLIENT_ID,
                  apppackagename:
                    c.a.GEN.templateConst.settings.GPLUS_APP_PACKAGE_NAME,
                  redirecturi: "postmessage",
                  accesstype: "offline",
                  cookiepolicy: "single_host_origin",
                  callback: function (t) {
                    this.readyForConnect &&
                      window.googleOnSignInCallbacks &&
                      window.googleOnSignInCallbacks[
                        window.googleOnSignInCallbacks.length - 1
                      ] &&
                      window.googleOnSignInCallbacks[
                        window.googleOnSignInCallbacks.length - 1
                      ](t, this.autoLogin, e),
                      (this.readyForConnect = !0),
                      (this.autoLogin = !1);
                  }.bind(t),
                });
              }),
              (window.googleConnectButtonContainer = this.props.container
                ? this.props.container
                : "");
          }),
          (t.prototype.componentWillUnmount = function e() {
            if (
              "undefined" != typeof window &&
              window.googleOnSignInCallbacks
            ) {
              var t = window.googleOnSignInCallbacks.indexOf(
                this.onSignInCallback,
              );
              t >= 0 && window.googleOnSignInCallbacks.splice(t, 1);
            }
            delete window.googleConnectButtonContainer;
          }),
          (t.prototype.onLoginError = function e(t, n, o) {
            var r = this,
              a = this.context.country,
              i = this.props.seoUnauthExperiments,
              s = {
                gplus_code: n.code,
                gplus_redirect_uri: "postmessage",
                container: window.googleConnectButtonContainer,
                hybridTier: this.context.hybridTier,
                page: this.context.pageType,
              };
            this.props.onSocialConnectVerified && Object(C.c)(a)
              ? this.props.onSocialConnectVerified(C.a.GOOGLE, {}, s)
              : _.a.register(s, i, !1).then(function (e) {
                  g.a.handleSignupRedirect(
                    r.props.nextUrlParam,
                    r.props.disablePostSignupNextUrl,
                  );
                });
          }),
          (t.prototype.login = function e(t) {
            var n = {
              container: window.googleConnectButtonContainer,
              hybridTier: this.context.hybridTier,
              page: this.context.pageType,
            };
            return Object(d.a)(t, n, this.props.seoUnauthExperiments);
          }),
          (t.prototype.logo = function e(t) {
            return s.a.createElement(
              "svg",
              {
                height: t,
                viewBox: "0 0 512 512",
                width: t,
                xmlns: "http://www.w3.org/2000/svg",
              },
              A,
            );
          }),
          (t.prototype.render = function e() {
            var t = this,
              n = this.props.inline,
              o = x.button;
            n &&
              (o = Object.assign({}, o, {
                width: "48%",
                display: "inline-block",
              }));
            var r = p.a._("Continue with Google");
            return s.a.createElement(
              l.a,
              {
                buttonRef: function e(n) {
                  t.googleButton = n;
                },
                className: "GoogleConnectButton",
                styleOverrides: o,
                type: "button",
              },
              s.a.createElement(
                "div",
                { style: x.icon },
                s.a.createElement(
                  "div",
                  { style: x.iconContainer },
                  this.logo(20),
                ),
              ),
              s.a.createElement("span", { style: x.text }, r),
              this.renderTooltip(this.props.tooltip),
            );
          }),
          t
        );
      })(i.Component);
    (P.defaultProps = { inline: !1 }),
      (P.contextTypes = {
        country: m.a.string,
        hybridTier: m.a.string,
        pageType: m.a.string,
      }),
      (t.b = Object(y.compose)(O.b, S.withRouter)(P));
  },
  S0eD: function (e, t, n) {
    "use strict";
    var o = function e() {
        return "\n.AlternativesSeparatorContinuous:before, .AlternativesSeparatorContinuous:after {\n  background: rgba(0,0,0,0.2);\n  -webkit-box-shadow: 0 1px 0 rgba(255,255,255,0.5);\n  box-shadow: 0 1px 0 rgba(255,255,255,0.5);\n  content: '';\n  display: inline-block;\n  height: 1px;\n  position: relative;\n  vertical-align: middle;\n  width: 37%;\n}\n";
      },
      r = function e() {
        return "\n.red.active:focus,\n.red.active:hover {\n  background-color: #d50c22 !important;\n}\n.lightGrey.active:focus,\n.lightGrey.active:hover {\n  background-color: #f5f3f3 !important;\n}\n.darkGrey.active:focus,\n.darkGrey.active:hover {\n  background-color: #5e5e5e !important;\n}\n.blueTransparent.active:focus,\n.blueTransparent.active:hover {\n  background-color: #0077e6 !important;\n}\n.white.active:focus,\n.white.active:hover {\n  background-color: #e6e6e6 !important;\n}\n@keyframes loadingSpinner {\n  to {transform: rotate(360deg);}\n}\n\n.loadingSpinner:before {\n  content: '';\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 50%;\n  border-top: 2px solid white;\n  border-right: 2px solid transparent;\n  animation: loadingSpinner 1s linear infinite;\n}\n";
      },
      a = function e() {
        return "\n.FullPageSignup__signupToggle {\n  color: #717171;\n}\n\n.FullPageSignup__signupToggle:focus,\n.FullPageSignup__signupToggle:hover  {\n  color: #8a8a8a;\n}\n\n";
      },
      i = function e() {
        return "\n.Gender__customGenderTooltip:after, .customGenderTooltip:before {\n  bottom: 100%;\n  left: 92.5%;\n  border: solid transparent;\n  content: ' ';\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.Gender__customGenderTooltip:after {\n  border-color: rgba(255, 255, 255, 0);\n  border-bottom-color: #ffffff;\n  border-width: 10px;\n  margin-left: -10px;\n}\n.Gender__customGenderTooltip:before {\n  border-color: rgba(145, 145, 145, 0);\n  border-bottom-color: #919191;\n  border-width: 11px;\n  margin-left: -11px;\n}\n.Gender__customGenderTooltipMobile:after, .customGenderTooltip:before {\n  bottom: 100%;\n  left: 92.5%;\n  border: solid transparent;\n  content: ' ';\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.Gender__customGenderTooltipMobile:after {\n  border-color: rgba(255, 255, 255, 0);\n  border-width: 10px;\n  margin-left: -10px;\n}\n.Gender__customGenderTooltipMobile:before {\n  border-color: rgba(145, 145, 145, 0);\n  border-bottom-color: #919191;\n  border-width: 11px;\n  margin-left: -11px;\n}\n.Gender__customGenderTooltipText:after, .customGenderTooltip:before {\n  bottom: 100%;\n  left: 92.5%;\n  border: solid transparent;\n  content: ' ';\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.Gender__customGenderTooltipText:after {\n  border-color: rgba(255, 255, 255, 0);\n  border-width: 10px;\n  margin-left: 5px;\n  margin-top: 10px;\n}\n.Gender__customGenderTooltipText:before {\n  border-color: rgba(145, 145, 145, 0);\n  border-bottom-color: #919191;\n  border-width: 11px;\n  margin-left: 5px;\n  margin-top: 10px;\n}\n";
      },
      s = function e() {
        return "\n.TermsOfService__light a {\n  color: rgba(255,255,255,0.9);\n}\n";
      },
      l = function e() {
        return "\n.Tooltip_message:before, .Tooltip_message:after {\n  border-style: solid;\n  content: '';\n  display: block;\n  margin-top: -8px;\n  position: absolute;\n  right: 100%;\n  top: 17px;\n  width: 0;\n}\n.Tooltip_message:before {\n  border-color: transparent rgba(0,0,0,0.48);\n  border-width: 8px 10px 8px 0;\n}\n.Tooltip_message:after {\n  border-color: transparent #fff;\n  border-width: 8px 10px 8px 0;\n  margin-right: -1px;\n}\n.Tooltip_suggestionMessage:before, .Tooltip_suggestionMessage:after {\n  border-style: solid;\n  content: '';\n  display: block;\n  margin-top: -8px;\n  position: absolute;\n  right: 100%;\n  top: 17px;\n  width: 0;\n}\n.Tooltip_suggestionMessage:before {\n  border-color: transparent rgba(0,0,0,0.48);\n  border-width: 8px 10px 8px 0;\n}\n.Tooltip_suggestionMessage:after {\n  border-color: transparent #E2780D;\n  border-width: 8px 10px 8px 0;\n}\n.Tooltip_mobileMessage:before, .Tooltip_message:after {\n  border-style: solid;\n  display: block;\n  margin-top: -8px;\n  position: absolute;\n  right: 100%;\n  top: 17px;\n  width: 0;\n}\n.Tooltip_mobileMessage:before {\n  border-color: transparent rgba(0,0,0,0.48);\n  border-width: 8px 10px 8px 0;\n}\n.Tooltip_mobileMessage:after {\n  border-color: transparent #fff;\n  border-width: 8px 10px 8px 0;\n  margin-right: -1px;\n}\n.Tooltip_wrapper {\n  position: absolute;\n  left: calc(100% + 12px);\n  z-index: 1;\n}\n.Tooltip_mobileWrapper {\n  margin-top: 7px;\n  z-index: 1;\n}\n";
      },
      c = function e() {
        return o() + i() + l() + s() + r() + a();
      },
      u = (t.a = c);
  },
  SCJe: function (e, t, n) {
    "use strict";
    var o = n("FqaO"),
      r = n("tQ0j"),
      a = n.n(r),
      i = n("oUjL"),
      s = n("FHH+"),
      l = n("BAXv"),
      c = n("WjSu"),
      u = n("hVsM"),
      p = n("SnoN"),
      d = n("/4D9"),
      g = n.n(d),
      h = n("YtuQ"),
      m = n("W/Cr"),
      f = n("kHbH"),
      b = n("ZtCB"),
      _ = n.n(b),
      y = n("Gktc"),
      E = n("KuQ8"),
      v = n.n(E),
      w = n("ieR2"),
      S = n("85jk"),
      O = n("FJZF"),
      C = n("EAiy"),
      x = n("zF3j"),
      T = n("+QQJ"),
      k = n("tvce"),
      R = n("/dip"),
      A = f.a.getLogger("AuthHandshake"),
      P = f.a.getLogger("UserRegistration"),
      B = 0,
      L = {
        register: function e(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            o = arguments[2],
            r = w.b.localStorage.getItem("visitedPages");
          return (
            r && (t.visited_pages = JSON.stringify(r)),
            (t.user_behavior_data = Object(k.b)()),
            L.shouldPerformCrossDomainRegister(t, n) &&
            -1 !==
              l.a.GEN.templateConst.settings.CORS_HANDSHAKE_DOMAINS.indexOf(
                c.a.instance.origin,
              )
              ? (Object(S.a)("unauth_cross_domain_register_debugging_counter"),
                L.crossDomainRegister(t))
              : (o &&
                  !L.authAppPromise &&
                  (L.authAppPromise = Promise.all(Object(R.a)(null, !0))),
                Object.assign(t, { seamless: o }),
                L.getResource(t)
                  .callCreate()
                  .then(
                    L.onRegisterSuccess.bind(null, t),
                    L.onRegisterError.bind(null, t),
                  ))
          );
        },
        crossDomainRegister: function e(t) {
          return i.a.registerUser(t).then(
            function (e) {
              if ((L.onRegisterSuccess(t, e), e.data))
                return i.a.exchangeTokenAndSetSession(e.data).then(
                  function (e) {
                    A.debug("Cross domain register successful");
                  },
                  function (e) {
                    throw (
                      (A.error(
                        "Failed to set session for current user; " + e.message,
                      ),
                      e)
                    );
                  },
                );
              A.error(
                "No custom access token in cross domain register response",
              );
              var n = m.a._(
                "We were able to create your account, but there was a problem logging you in. Try refreshing the page to continue.",
              );
              throw new Error(n);
            },
            function (e) {
              A.error("Failed to register new user; " + e.message),
                L.onRegisterError(t, e);
            },
          );
        },
        setUserStateOpenExp: function e() {
          c.a.instance.is_open_experience &&
            _.a
              .create("UserStateResource", {
                state: "AU_OPEN_EXPERIMENT",
                value: 1,
              })
              .callCreate();
        },
        onRegisterSuccess: function e(t, n) {
          w.b.sessionStorage.removeItem("d_pif_invite"),
            P.debug("Login, successful", n),
            Object(y.a)(),
            o.set("ujr", "1"),
            L.trackRegister(t),
            L.setUserStateOpenExp();
          var r = L.authAppPromise;
          return r
            ? r.then(function () {
                return n;
              })
            : n;
        },
        onRegisterError: function e(t, n) {
          if (
            (n.api_error_code === l.a.API_ERROR_UNDERAGE_REGISTER_ATTEMPT &&
              (Object(S.a)("multi_step_set_age_restrict_cookie"),
              o.set("r_r", "1", 87600),
              o.set("_pinterest_pfob", "disabled")),
            (a.a.isEmpty(n.api_error_code) ||
              a.a.contains(
                [l.a.API_SERVER_ERROR, l.a.API_REQUEST_TIMEOUT],
                n.api_error_code,
              )) &&
              B < 3)
          )
            return (B += 1), L.register(t);
          throw n;
        },
        trackRegister: function e(t) {
          var n = void 0;
          switch (t.container) {
            case "home_page":
              (n = u.a.fromEventType(1750)), Object(S.a)("signup_home_page");
              break;
            case "mweb_homepage":
              (n = u.a.fromEventType(1750)),
                Object(S.a)("signup_mweb_home_page");
              break;
            case "plain_signup_modal":
              (n = u.a.fromEventType(1751)), Object(S.a)("signup_plain_modal");
              break;
            case "closeup_signup_modal":
              (n = u.a.fromEventType(1752)),
                Object(S.a)("signup_closeup_modal");
              break;
            case "widescreen_signup_modal":
              (n = u.a.fromEventType(1753)),
                Object(S.a)("signup_widescreen_modal");
              break;
            case "pinit_button_landing":
              (n = u.a.fromEventType(1755)),
                Object(S.a)("signup_pinit_button_landing");
              break;
            case "inspired_banner":
              Object(S.a)("signup_inspired_banner");
              break;
            case "category_jump_banner":
              Object(S.a)("signup_category_jump_banner");
              break;
            case "send_pin_banner":
              (n = u.a.fromEventType(1756)), Object(S.a)("send_pin_banner");
              break;
            default:
              (n = u.a.fromEventType(1754)),
                Object(S.a)("signup_unknown_placement");
          }
          var o = t.container || "container_unknown";
          Object(S.a)("signup.container." + o);
          var r = t.signupSource || "signupSource_unknown";
          Object(S.a)("signup.source." + r), n && p.a.getInstance().addEvent(n);
          var a = document.referrer,
            i = void 0;
          (i = a
            ? a.indexOf("/t.co/") > -1
              ? "twitter"
              : a.indexOf("google.") > -1
              ? "google"
              : a.indexOf("bing.") > -1
              ? "bing"
              : a.indexOf("facebook.") > -1
              ? "facebook"
              : "other"
            : "direct"),
            Object(S.a)("signup_referrer." + i);
          var s = O.a.getQueryStringParams().referrer || Object(h.a)();
          Object(S.a)("signup_referrer_module." + s);
          var l = c.a.instance.user_agent_platform;
          "ios" === l
            ? Object(S.a)("signup_mweb.iphone_web")
            : "ipad" === l
            ? Object(S.a)("signup_mweb.ipad_web")
            : "android" === l && Object(S.a)("signup_mweb.android_web");
          var d = t.hybridTier || "tier_unknown",
            g = t.page || "page_unknown",
            m = Object(T.b)(t);
          Object(S.a)(
            "web_signup." + m + ".success." + g + "." + o + "." + i + "." + d,
          );
        },
        getResource: function e(t) {
          return _.a.create("UserRegisterResource", t);
        },
        redirectAfterRegister: function e(t) {
          (t = O.a.absolutify(t)),
            Object(S.a)("setting_new_window_location"),
            Object(s.a)(t, !1);
        },
        fastTrackSocialRegistration: function e(t, n) {
          var o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            r = arguments[3];
          return v()().then(function (e) {
            var a = e.default;
            if (t === a.FACEBOOK)
              return L.fetchNetworkData(t).then(function (e) {
                return e.email
                  ? L.sendImmediateFbRegisterRequest(e, n, o, r)
                  : Promise.reject({
                      error: new Error("Email required to sign up."),
                      socialConnectData: e,
                    });
              });
          });
        },
        verifyRequiredSocialRegistrationFields: function e(t) {
          return v()().then(function (e) {
            var n = e.default;
            if (t === n.FACEBOOK)
              return L.fetchNetworkData(t).then(function (e) {
                return e.email
                  ? Promise.resolve(e)
                  : Promise.reject({
                      error: new Error("Email required to sign up."),
                      socialConnectData: e,
                    });
              });
          });
        },
        sendImmediateFbRegisterRequest: function e(t, n) {
          var o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            r = arguments[3],
            a = {
              first_name: t.first_name,
              last_name: t.last_name,
              email: t.email,
              gender: t.gender,
              image_url: t.image_url,
              facebook_id: t.id,
              facebook_token: t.access_token,
              country: null,
              unverified_phone: t.unverified_phone,
              birthday: Object(x.c)(t.birthday),
            };
          return (
            n && Object.assign(a, n),
            v()().then(function (e) {
              var t = e.default;
              return L.addExtraSocialParams(t.FACEBOOK, a), L.register(a, o, r);
            })
          );
        },
        sendGPlusRegisterRequest: function e(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            r = Object.assign({}, t);
          return n && Object.assign(r, n), L.register(r, o, !1);
        },
        fetchNetworkData: function e(t) {
          return v()()
            .then(function (e) {
              var n = e.default;
              return t !== n.FACEBOOK
                ? Promise.reject(new Error("Unsupported social network: " + t))
                : g()();
            })
            .then(function (e) {
              var t = e.default;
              return new Promise(function (e, n) {
                t.ensureInit(function (t) {
                  t.getLoginStatus(function (o) {
                    if (!o.authResponse) return n(new Error("not authed"));
                    var r =
                      "/me?fields=" +
                      [
                        "picture.type(large)",
                        "id",
                        "first_name",
                        "last_name",
                        "email",
                        "gender",
                        "birthday",
                      ].join(",");
                    t.api(r, function (t) {
                      return !t || t.error
                        ? n(new Error("FB.api errored: " + t.error))
                        : (t.picture &&
                            t.picture.data &&
                            t.picture.data.url &&
                            !t.picture.data.is_silhouette &&
                            (t.image_url = t.picture.data.url),
                          e(t));
                    });
                  }, !0);
                }, C.a);
              });
            });
        },
        addExtraSocialParams: function e(t, n) {
          var o = w.b.sessionStorage.getItem("_fbid"),
            r = w.b.sessionStorage.getItem("_fbt");
          o &&
            (n.facebook_id || (n.facebook_id = o),
            w.b.sessionStorage.removeItem("_fbid")),
            r &&
              (n.facebook_token || (n.facebook_token = r),
              w.b.sessionStorage.removeItem("_fbt"));
          var a = w.b.sessionStorage.getItem("d_pif_invite");
          a &&
            (a.invite_follow_board &&
              (n.board_to_follow = a.invite_follow_board),
            a.invite_follow_user && (n.user_to_follow = a.invite_follow_user));
        },
        shouldPerformCrossDomainRegister: function e(t, n) {
          return (
            !t.business_name &&
            (t.facebook_id
              ? n &&
                !(
                  n.v2ActivateExperiment("bypass_cctld_register_facebook") || ""
                ).startsWith("enabled")
              : t.gplus_code
              ? n &&
                !(
                  n.v2ActivateExperiment("bypass_cctld_register_gplus") || ""
                ).startsWith("enabled")
              : n &&
                !(
                  n.v2ActivateExperiment("bypass_cctld_register_email") || ""
                ).startsWith("enabled"))
          );
        },
      };
    t.a = L;
  },
  SVkg: function (e, t, n) {
    "use strict";
    t.a = { request: 51, requestBegin: 6935, requestEnd: 6936 };
  },
  TbCV: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return l;
    }),
      n.d(t, "d", function () {
        return u;
      }),
      n.d(t, "b", function () {
        return p;
      }),
      n.d(t, "c", function () {
        return d;
      });
    var o = n("63R5"),
      r = "_facebookConnect",
      a = !0,
      i = "274266067164",
      s = [
        "picture.type(large)",
        "id",
        "first_name",
        "last_name",
        "email",
        "gender",
        "birthday",
      ],
      l = [
        "public_profile",
        "email",
        "user_likes",
        "user_birthday",
        "user_friends",
      ],
      c = function e(t) {
        var n = t;
        switch ((n = n.replace(/-/g, "_"))) {
          case "de":
            n = "de_DE";
            break;
          case "fr":
            n = "fr_FR";
            break;
          case "it":
            n = "it_IT";
            break;
          case "ja":
            n = "ja_JP";
            break;
          case "nl":
            n = "nl_NL";
            break;
          case "tr":
            n = "tr_TR";
            break;
          case "en_AU":
            n = "en_US";
            break;
          case "es_419":
          case "es_AR":
            n = "es_LA";
        }
        return n;
      },
      u = function e(t) {
        return Object(o.a)("//connect.facebook.net/" + c(t) + "/sdk.js").then(
          function () {
            window.FB.init({
              appId: "274266067164",
              status: !0,
              xfbml: !0,
              version: "v2.7",
            });
          },
        );
      },
      p = function e() {
        return new Promise(function (e) {
          window.FB.getLoginStatus(e);
        });
      },
      d = function e(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise(function (e, o) {
          if ("connected" === t.status) {
            var r = t.authResponse,
              a = {
                facebook_id: r.userID,
                facebook_token: r.accessToken,
                facebook_autologin: n.autologin || !1,
              },
              i = s;
            n.requestPhone && i.push("user_mobile_phone");
            var l = "/me?fields=" + i.join(",");
            window.FB.api(l, function (t) {
              e({
                creds: a,
                data: Object.assign(
                  {},
                  t,
                  a,
                  t.picture && !t.picture.data.is_silhouette
                    ? { image_url: t.picture.data.url }
                    : {},
                ),
              });
            });
          } else o({ status: t.status || "unknown" });
        });
      },
      g = function e() {
        return new Promise(function (e) {
          window.FB.login(e, { scope: l.join(",") });
        }).then(d);
      };
  },
  UUel: function (e, t, n) {
    "use strict";
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    n.d(t, "e", function () {
      return w;
    }),
      n.d(t, "b", function () {
        return S;
      }),
      n.d(t, "a", function () {
        return O;
      }),
      n.d(t, "d", function () {
        return x;
      }),
      n.d(t, "c", function () {
        return T;
      });
    var i = n("d6ZO"),
      s = n.n(i),
      l = n("BAXv"),
      c = n("gVmS"),
      u = n("W/Cr"),
      p = n("4642"),
      d = n("IaRT"),
      g = n.n(d),
      h = n("FTnl"),
      m = n("suNN"),
      f = n("a993"),
      b = n("Q4UA"),
      _ = n("gEaE"),
      y,
      E = function e(t) {
        var n = u.a._("Reset password", "Request a password reset email");
        return i.createElement(_.c, {
          accessibilityLabel: n,
          color: t.color || "red",
          inline: t.inline,
          onClick: function e() {
            Object(p.a)({ usernameOrEmail: t.email, callBack: t.callBack });
          },
          text: t.overrideText || n,
        });
      },
      v = "?source=account_recovery",
      w = {
        SOFT_BANNED: 0,
        RATE_LIMITED: 1,
        LOGIN_ASSISTANCE: 2,
        PASSWORD_RESET_SENT: 3,
        PREVENT_FACEBOOK_REGISTER: 4,
        PREVENT_GOOGLE_REGISTER: 5,
      },
      S =
        ((y = {}),
        (y[l.a.API_EVENT_BLOCKED_ERROR] = w.RATE_LIMITED),
        (y[l.a.API_LIMIT_EXCEEDED_ERROR] = w.RATE_LIMITED),
        (y[l.a.LOGIN_BAD_PASSWORD_ASK_RESET] = w.LOGIN_ASSISTANCE),
        (y[l.a.LOGIN_HARD_BANNED_USER] = w.SOFT_BANNED),
        (y[l.a.USER_IN_SAFE_MODE] = w.SOFT_BANNED),
        (y[l.a.RESPONSE_CODE_TOO_MANY_REQUESTS] = w.RATE_LIMITED),
        y),
      O = Object.keys(S).map(function (e) {
        return parseInt(e, 10);
      }),
      C = O.filter(function (e) {
        return e !== l.a.LOGIN_BAD_PASSWORD_ASK_RESET;
      }),
      x = [].concat(C, [l.a.INVALID_PASSWORD_ERROR_CODE]),
      T = (function (e) {
        function t() {
          var n, a, s;
          o(this, t);
          for (var d = arguments.length, g = Array(d), y = 0; y < d; y++)
            g[y] = arguments[y];
          return (
            (n = a = r(this, e.call.apply(e, [this].concat(g)))),
            (a.state = { showToast: !1 }),
            (a.modalId = null),
            (a.buildModal = function (e) {
              var t = e.accessibilityModalLabel,
                n = e.additionalButton,
                o = e.additionalText,
                r = e.autoSend,
                s = e.buttonOverride,
                l = void 0 === s ? {} : s,
                c = e.heading,
                d = e.resetOrLogin,
                g = a.props.email;
              a.modalId = a.context.showInModal({
                accessibilityCloseLabel: u.a._("Close", "Close modal"),
                accessibilityModalLabel: t,
                heading: c,
                onDismiss: a.dismissModal,
                role: "alertdialog",
                size: "md",
                children: i.createElement(
                  _.b,
                  { paddingX: 6, marginBottom: 4 },
                  o,
                  r &&
                    i.createElement(
                      _.b,
                      null,
                      i.createElement(
                        _.H,
                        null,
                        Object(m.b)(
                          u.a._(
                            "We sent an email to {{ email }} to help you get back in.",
                            "",
                          ),
                          {
                            email: i.createElement(
                              _.H,
                              { inline: !0, bold: !0, key: "emailAddress" },
                              g,
                            ),
                          },
                        ),
                      ),
                      i.createElement(
                        _.b,
                        { paddingY: 3 },
                        i.createElement(_.c, {
                          inline: !0,
                          onClick: function e() {
                            return Object(p.a)({
                              usernameOrEmail: g,
                              callBack: a.showPasswordResetSent,
                            });
                          },
                          text: u.a._(
                            "Resend email",
                            "Button to allow the user to request a password reset email",
                          ),
                        }),
                      ),
                    ),
                  i.createElement(
                    _.b,
                    { marginBottom: 4 },
                    i.createElement(
                      _.H,
                      null,
                      d
                        ? u.a._(
                            "Reset your password or log in with Facebook or Google to get back into your account",
                            "Prompt to take action to reset password or upsell login with Facebook/Google",
                          )
                        : u.a._(
                            "Or log in with Facebook or Google.",
                            "Upsell to use Facebook or Google for login",
                          ),
                    ),
                  ),
                  n,
                  a.renderSocialButtons(),
                  i.createElement(
                    _.b,
                    { marginTop: 4 },
                    i.createElement(_.c, {
                      accessibilityLabel:
                        l.accessibilityLabel ||
                        u.a._(
                          "Got it",
                          "Acknowledge protected account modal message",
                        ),
                      color: "gray",
                      onClick: a.dismissModal,
                      text:
                        l.text ||
                        u.a._(
                          "Got it",
                          "Acknowledge protected account modal message",
                        ),
                    }),
                  ),
                ),
              });
            }),
            (a.dismissModal = function () {
              a.context.removeModal(a.modalId),
                (a.modalId = null),
                a.props.updateAccountRecoveryModal(null);
            }),
            (a.showPasswordResetSent = function () {
              return a.props.updateAccountRecoveryModal(w.PASSWORD_RESET_SENT);
            }),
            (a.showLoginWithFailed = function (e) {
              e === f.a
                ? a.props.updateAccountRecoveryModal(
                    w.PREVENT_FACEBOOK_REGISTER,
                  )
                : e === b.a &&
                  a.props.updateAccountRecoveryModal(w.PREVENT_GOOGLE_REGISTER);
            }),
            (a.toggleToast = function () {
              return a.setState(function (e) {
                return { showToast: !e.showToast };
              });
            }),
            (a.renderLoginAssistance = function () {
              a.buildModal({
                accessibilityModalLabel: u.a._(
                  "Login with Facebook or Google?",
                  "Modal accessibility label for when a user has failed login three times",
                ),
                autoSend: !0,
                heading: u.a._(
                  "Looks like you’re having trouble logging in",
                  "Modal heading for user who have attempted to login three times",
                ),
              });
            }),
            (a.renderLoginRateLimited = function () {
              var e = u.a._(
                "I’ll wait",
                "Button text acknowledging login rate limiting",
              );
              a.buildModal({
                accessibilityModalLabel: u.a._(
                  "Login limit reached",
                  "Modal accessibility label for users who have been login rate limited",
                ),
                autoSend: !1,
                additionalButton: i.createElement(E, {
                  email: a.props.email,
                  callBack: a.showPasswordResetSent,
                }),
                additionalText: i.createElement(
                  _.b,
                  { marginBottom: 4 },
                  i.createElement(
                    _.H,
                    { inline: !0, leading: "tall" },
                    u.a._(
                      "It looks like you’re logging in a lot. Log in with Facebook or Google if you’re connected, or reset your password. Or you can wait 30 minutes and try again.",
                      "Statement that the users is login limited",
                    ),
                  ),
                ),
                buttonOverride: { accessibilityLabel: e, text: e },
                heading: u.a._(
                  "Oops! Too fast",
                  "Modal heading for user who have been login rate limited",
                ),
                showUpsellText: !1,
              });
            }),
            (a.renderPasswordResetSent = function () {
              var e = u.a._(
                  "Password reset email sent",
                  "Modal label for confirmation of password reset send",
                ),
                t = {
                  accessibilityCloseLabel: u.a._("Close", "Close modal"),
                  accessibilityModalLabel: e,
                  heading: e,
                  onDismiss: a.dismissModal,
                  role: "alertdialog",
                  size: "md",
                  children: i.createElement(
                    _.b,
                    { paddingX: 6, marginBottom: 4 },
                    i.createElement(
                      _.H,
                      { overflow: "normal" },
                      Object(m.b)(
                        u.a._(
                          "We sent instructions to pick a new password to {{ email }}.",
                          "Statement that a password reset email has been sent to the user",
                        ),
                        {
                          email: i.createElement(
                            _.H,
                            {
                              inline: !0,
                              bold: !0,
                              overflow: "normal",
                              key: "emailAddress",
                            },
                            a.props.email,
                          ),
                        },
                      ),
                    ),
                    i.createElement(
                      _.b,
                      { paddingY: 4 },
                      i.createElement(E, {
                        inline: !0,
                        color: "gray",
                        email: a.props.email,
                        callBack: a.toggleToast,
                        overrideText: u.a._(
                          "Resend email",
                          "Button to allow the user to request a password reset email",
                        ),
                      }),
                    ),
                    i.createElement(
                      _.b,
                      null,
                      i.createElement(
                        _.b,
                        { marginBottom: 4 },
                        i.createElement(
                          _.H,
                          null,
                          Object(m.b)(
                            u.a._(
                              "Didn’t get the email? Try these {{ tips }}",
                              "Direction to help center if the password reset email failed",
                            ),
                            {
                              tips: i.createElement(
                                _.r,
                                {
                                  inline: !0,
                                  key: "helpCenterLink",
                                  target: "blank",
                                  href:
                                    l.a.GEN.templateConst.settings
                                      .HELP_PASSWORD_RESET_URL + v,
                                },
                                i.createElement(
                                  _.H,
                                  { bold: !0, inline: !0, key: "helpCenter" },
                                  u.a._(
                                    "tips from our Help Center",
                                    "Link text to go to help center",
                                  ),
                                ),
                              ),
                            },
                          ),
                        ),
                      ),
                      i.createElement(
                        _.b,
                        { marginBottom: 4 },
                        i.createElement(
                          _.H,
                          null,
                          Object(m.b)(
                            u.a._(
                              "Not your email address? {{ tryAgain }}",
                              "Link to password reset flow for users who make an incorrect password reset request",
                            ),
                            {
                              tryAgain: i.createElement(
                                _.r,
                                {
                                  inline: !0,
                                  key: "passwordResetLink",
                                  href: l.a.GEN.templateConst.settings
                                    .PASSWORD_RESET_URL,
                                },
                                i.createElement(
                                  _.H,
                                  { bold: !0, inline: !0, key: "tryAgain" },
                                  u.a._(
                                    "Try another",
                                    "Link text to enter the password reset flow for a different email address/username",
                                  ),
                                ),
                              ),
                            },
                          ),
                        ),
                      ),
                    ),
                    i.createElement(
                      _.b,
                      null,
                      i.createElement(_.c, {
                        accessibilityLabel: u.a._(
                          "Got it",
                          "Acknowledge protected account modal message",
                        ),
                        color: "red",
                        onClick: a.dismissModal,
                        text: u.a._(
                          "Got it",
                          "Acknowledge protected account modal message",
                        ),
                      }),
                    ),
                    i.createElement(
                      _.b,
                      {
                        fit: !0,
                        dangerouslySetInlineStyle: {
                          __style: {
                            bottom: "50%",
                            left: "50%",
                            transform: "translateX(-50%)",
                          },
                        },
                        paddingX: 1,
                        position: "fixed",
                      },
                      a.state.showToast &&
                        i.createElement(h.a, {
                          onHide: a.toggleToast,
                          text: u.a._("Email sent!"),
                          duration: 3500,
                        }),
                    ),
                  ),
                };
              a.modalId
                ? a.context.updateModal(a.modalId, t)
                : (a.modalId = a.context.showInModal(t));
            }),
            (a.renderSoftBanned = function () {
              a.buildModal({
                accessibilityModalLabel: u.a._(
                  "Recover your account",
                  "Modal accessibility label for account recovery",
                ),
                additionalButton: i.createElement(E, {
                  email: a.props.email,
                  callBack: a.showPasswordResetSent,
                }),
                additionalText: i.createElement(
                  _.b,
                  { marginBottom: 4 },
                  i.createElement(
                    _.H,
                    { inline: !0, leading: "tall" },
                    u.a._(
                      "We noticed some strange activity on your Pinterest account so we reset your password and logged everyone out (including you).",
                      "Statement that we detected suspicious activity",
                    ),
                  ),
                ),
                autoSend: !1,
                heading: u.a._(
                  "We protected your account",
                  "Modal heading for user who need to recover their accounts",
                ),
                resetOrLogin: !0,
              });
            }),
            (a.renderLoginWithFailed = function (e) {
              var t = void 0;
              "facebook" === e
                ? (t = u.a._(
                    "We couldn’t match your Facebook account to any Pinterest account. Try resetting your password instead.",
                    "Notice that no Pinterest account exists for the Facebook account used to attempt login",
                  ))
                : "google" === e &&
                  (t = u.a._(
                    "We couldn’t match your Google account to any Pinterest account. Try resetting your password instead.",
                    "Notice that no Pinterest account exists for the Facebook account used to attempt login",
                  )),
                a.context.updateModal(a.modalId, {
                  accessibilityCloseLabel: u.a._("Close", "Close modal"),
                  accessibilityModalLabel: u.a._(
                    "No matching account",
                    "Modal accessibility label for account recovery",
                  ),
                  heading: u.a._("Oops! Something went wrong", "Modal heading"),
                  onDismiss: a.dismissModal,
                  role: "alertdialog",
                  size: "md",
                  children: i.createElement(
                    _.b,
                    { paddingX: 6, marginBottom: 4 },
                    i.createElement(
                      _.b,
                      { marginBottom: 6 },
                      i.createElement(_.H, null, t),
                    ),
                    i.createElement(E, {
                      email: a.props.email,
                      callBack: a.showPasswordResetSent,
                    }),
                    i.createElement(
                      _.b,
                      { marginTop: 2 },
                      i.createElement(_.c, {
                        accessibilityLabel: u.a._(
                          "Got it",
                          "Acknowledge protected account modal message",
                        ),
                        color: "gray",
                        onClick: a.dismissModal,
                        text: u.a._(
                          "Got it",
                          "Acknowledge protected account modal message",
                        ),
                      }),
                    ),
                  ),
                });
            }),
            (a.renderSocialButtons = function () {
              return i.createElement(
                _.b,
                null,
                i.createElement(f.b, {
                  buttonText: u.a._(
                    "Continue with Facebook",
                    "Facebook login button text",
                  ),
                  container: c.a.ACCOUNT_RECOVERY,
                  disablePostSignupNextUrl: !0,
                  onLoginWithMfa: a.props.onLoginWithMfa,
                  showFallback: !0,
                  preventRegister: a.showLoginWithFailed,
                }),
                i.createElement(
                  _.b,
                  { marginTop: 1 },
                  i.createElement(b.b, {
                    container: c.a.ACCOUNT_RECOVERY,
                    disablePostSignupNextUrl: !0,
                    onLoginWithMfa: a.props.onLoginWithMfa,
                    preventRegister: a.showLoginWithFailed,
                  }),
                ),
              );
            }),
            (s = n),
            r(a, s)
          );
        }
        return (
          a(t, e),
          (t.prototype.componentDidUpdate = function e(t, n) {
            var o = this;
            (t.modalType === this.props.modalType &&
              n.showToast === this.state.showToast) ||
              (function (e) {
                switch (e) {
                  case w.LOGIN_ASSISTANCE:
                    o.renderLoginAssistance();
                    break;
                  case w.PASSWORD_RESET_SENT:
                    o.renderPasswordResetSent();
                    break;
                  case w.RATE_LIMITED:
                    o.renderLoginRateLimited();
                    break;
                  case w.SOFT_BANNED:
                    o.renderSoftBanned();
                    break;
                  case w.PREVENT_FACEBOOK_REGISTER:
                    o.renderLoginWithFailed(f.a);
                    break;
                  case w.PREVENT_GOOGLE_REGISTER:
                    o.renderLoginWithFailed(b.a);
                }
              })(this.props.modalType);
          }),
          (t.prototype.render = function e() {
            return null;
          }),
          t
        );
      })(i.Component);
    T.contextTypes = {
      removeModal: g.a.func.isRequired,
      showInModal: g.a.func.isRequired,
      updateModal: g.a.func.isRequired,
    };
    var k = T;
  },
  XELL: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return a;
      });
    var o = n("IaRT"),
      r = {
        login: "login",
        loginMfa: "loginMfa",
        signup: "signup",
        socialSignupWithAge: "socialSignupWithAge",
        FBEmailOrPhoneCollection: "FBEmailOrPhoneCollection",
        emailConfirmation: "emailConfirmation",
      },
      a = {
        boardPage: "boardPage",
        defaultSource: "defaultSource",
        homePage: "homePage",
        mwebDefaultSource: "mwebDefaultSource",
        invite: "invite",
        login: "login",
        userFollow: "userFollow",
        userProfilePage: "userProfilePage",
        saveButton: "saveButton",
        signupButton: "signupButton",
        navigateBoard: "navigateBoard",
        navigatePin: "navigatePin",
        navigateInterest: "navigateInterest",
        unauthHeader: "unauthHeader",
        unauthBanner: "unauthBanner",
        giftWrap: "giftWrap",
      },
      i = n
        .n(o)
        .a.oneOf([
          a.boardPage,
          a.defaultSource,
          a.giftWrap,
          a.homePage,
          a.invite,
          a.login,
          a.mwebDefaultSource,
          a.navigateBoard,
          a.navigatePin,
          a.navigateInterest,
          a.saveButton,
          a.signupButton,
          a.unauthBanner,
          a.unauthHeader,
          a.userFollow,
          a.userProfilePage,
        ]);
  },
  Xafg: function (e, t, n) {
    "use strict";
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function l(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function c(e) {
      var t = e.name,
        n = e.upwtActionName,
        o = e.resourceDependencies,
        r =
          void 0 === o
            ? function () {
                return [];
              }
            : o,
        a = e.routeContextLog,
        c =
          void 0 === a
            ? function (e, t, n) {
                return null;
              }
            : a,
        p = e.metatagResource,
        d =
          void 0 === p
            ? function () {
                return null;
              }
            : p,
        g = e.placementId,
        h = void 0 === g ? null : g,
        f = e.redirect,
        b =
          void 0 === f
            ? function () {
                return null;
              }
            : f,
        _ = e.getRenderError,
        y =
          void 0 === _
            ? function () {
                return null;
              }
            : _;
      return function e(o) {
        var a, p;
        return (
          (p = a =
            (function (e) {
              function t() {
                return i(this, t), s(this, e.apply(this, arguments));
              }
              return (
                l(t, e),
                (t.prototype.render = function e() {
                  var t = this.props,
                    n = t.params,
                    r = t.location,
                    a = void 0 === r ? {} : r,
                    i = (this.props.route || {}).legacy_server_context;
                  return u.createElement(
                    m,
                    { log: c(i || {}, n || {}, a || {}) },
                    u.createElement(o, this.props),
                  );
                }),
                t
              );
            })(u.Component)),
          (a.displayName = "StaticRouteData"),
          (a.WrappedComponent = o),
          (a.routeName = t),
          (a.upwtActionName = n),
          (a.getResourceDependencies = r),
          (a.getContextLog = c),
          (a.getMetatagResource = d),
          (a.placementId = h),
          (a.getRedirect = b),
          (a.getRenderError = y),
          p
        );
      };
    }
    var u = n("d6ZO"),
      p = n.n(u),
      d = n("WjSu"),
      g = n("hVsM"),
      h = n("SnoN"),
      m = (function (e) {
        function t() {
          return o(this, t), r(this, e.apply(this, arguments));
        }
        return (
          a(t, e),
          (t.prototype.componentDidMount = function e() {
            var t = this.props.log;
            if (t) {
              var n = g.a.fromPlainObject(t);
              n.setEventType(13),
                n.setRequestIdentifier(
                  d.a.initialPageContext.PAGE_LOAD_REQUEST_IDENTIFIER,
                ),
                h.a.getInstance().addEvent(n);
            }
          }),
          (t.prototype.render = function e() {
            return this.props.children;
          }),
          t
        );
      })(u.Component),
      f = n("9FEF");
    t.a = c;
  },
  XzpH: function (e, t, n) {
    "use strict";
    function o(e, t) {
      var n = "Tooltip_wrapper",
        o = "Tooltip_message";
      e.isSuggestionTooltip && (o = "Tooltip_suggestionMessage"),
        t.userAgent.isMobile &&
          ((n = "Tooltip_mobileWrapper"), (o = "Tooltip_mobileMessage"));
      var r = Object.assign({}, l.invisibleWrapper, e.customWrapperStyles),
        i = e.isSuggestionTooltip
          ? Object.assign({}, l.message, l.suggestionTooltipMessage)
          : l.message;
      return a.a.createElement(
        "div",
        {
          className: n,
          "data-test-tooltip": !0,
          "data-test-id": "tooltip",
          style: r,
        },
        a.a.createElement(
          "div",
          { className: o, style: i },
          e.children
            ? a.a.createElement("span", { style: l.text }, e.children)
            : a.a.createElement("span", {
                dangerouslySetInnerHTML: { __html: e.message },
                style: l.text,
              }),
        ),
        c,
      );
    }
    t.a = o;
    var r = n("d6ZO"),
      a = n.n(r),
      i = n("IaRT"),
      s = n.n(i),
      l = {
        invisibleWrapper: { top: "0px", width: "215px" },
        message: {
          background: "#fff",
          borderRadius: "6px",
          WebkitBoxShadow:
            "0 0 2px rgba(0,0,0,0.38),0 1px 3px rgba(0,0,0,0.32)",
          boxShadow: "0 0 2px rgba(0,0,0,0.38),0 1px 3px rgba(0,0,0,0.32)",
          color: "#000",
          fontStyle: "normal",
          fontWeight: "normal",
          lineHeight: "150%",
          padding: "8px 14px",
          textAlign: "left",
          maxWidth: "215px",
          display: "inline-block",
          float: "left",
        },
        suggestionTooltipMessage: {
          boxShadow: "none",
          background: "#E2780D",
          color: "#fff",
          fontSize: "14px",
          WebkitBoxShadow: "none",
        },
        text: { overflowWrap: "break-word", wordWrap: "break-word" },
      },
      c = a.a.createElement("div", null);
    o.contextTypes = {
      message: s.a.string,
      userAgent: s.a.shape({ isMobile: s.a.bool.isRequired }).isRequired,
    };
  },
  a993: function (e, t, n) {
    "use strict";
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    var s = n("d6ZO"),
      l = n.n(s),
      c = n("/2tF"),
      u = n("BAXv"),
      p = n("UVpX"),
      d = n("l6Jx"),
      g = n("W/Cr"),
      h = n("5JMz"),
      m = n("Wcb7"),
      f = n("IaRT"),
      b = n.n(f),
      _ = n("/4D9"),
      y = n.n(_),
      E = n("Cjb7"),
      v = n("KtTI"),
      w = n("FGUD"),
      S = (function () {
        function e() {
          o(this, e);
        }
        return (
          (e.prototype.connect = function e(t, n) {
            var o = this;
            if (
              (window.addEventListener("message", function (e) {
                var t =
                  window.location.protocol +
                  "//" +
                  window.location.hostname +
                  (window.location.port ? ":" + window.location.port : "");
                e.origin === t &&
                  "social-connect-complete" === e.data.type &&
                  o.complete(e.data);
              }),
              n.rerequest_facebook_email)
            )
              y()().then(function (e) {
                e.default.ensureInit(function (e) {
                  e.login(
                    function (e) {
                      var t = e.authResponse,
                        o = void 0,
                        r = void 0;
                      t &&
                        ((o = t.grantedScopes) && (o = o.split(",")),
                        (r = t.userID));
                      var a = o.indexOf("email") > -1,
                        i = { id: r };
                      "connected" === e.status && a ? n.success(i) : n.error(i),
                        n.complete();
                    },
                    {
                      scope: "email",
                      auth_type: "rerequest",
                      return_scopes: !0,
                    },
                  );
                }, v.a);
              });
            else {
              var r = this.getWindowOptions(),
                a = window.open("/connect/" + t + "/", "", r);
              if (!a)
                return (
                  Object(w.a)(g.a._("You must enable popups!")),
                  void n.error({ network: t, alertedUpstream: !0 })
                );
              var i = setInterval(function () {
                a.closed &&
                  (clearInterval(i),
                  o.handleComplete({
                    network: t,
                    error_message: "Window closed.",
                  }));
              }, 1e3);
              E.a.instance.subscribe(
                "site",
                "socialConnectCompleted",
                function (e, t, o) {
                  clearInterval(i),
                    o.error_message ? n.error(o) : n.success(o),
                    "complete" in n && n.complete();
                },
              );
            }
          }),
          (e.prototype.getWindowOptions = function e() {
            var t = 580,
              n = 400,
              o = screen.width,
              r = screen.height;
            return (
              "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=580,height=400,left=" +
              Math.round((o - 580) / 2) +
              ",top=" +
              (r > 400 ? Math.round((r - 400) / 2) : 0)
            );
          }),
          (e.prototype.complete = function e(t) {
            this.handleComplete(t);
          }),
          (e.prototype.handleComplete = function e(t) {
            if ("facebook" === t.network) {
              var n = t.id;
              n &&
                "string" != typeof n &&
                (t.error_message = "Facebook id must be of string type");
            }
            E.a.instance.publish("site", "socialConnectCompleted", t);
          }),
          e
        );
      })(),
      O = n("XzpH"),
      C = n("SCJe"),
      x = n("MQ2h"),
      T = n.n(x),
      k = n("kc1m"),
      R = n("TbCV"),
      A = n("gEaE"),
      P = n("zF3j"),
      B = n("kzic"),
      L = n("85jk"),
      I = n("ok+N"),
      j = n("+QQJ");
    n.d(t, "a", function () {
      return N;
    });
    var F = {
        button: {
          backgroundClip: "padding-box",
          backgroundColor: "#4267b2",
          borderRadius: "2px",
          display: "block",
          fontWeight: "normal",
          height: "40px",
          marginBottom: "9px",
          padding: "0px 0px 0px 8px",
          position: "absolute",
          textAlign: "left",
          transition: "opacity .2s linear",
          width: "100%",
        },
        container: { position: "relative" },
        tooltip: { top: "12px", left: "100%", position: "absolute" },
        icon: { display: "inline-block", margin: "8px" },
        text: {
          color: "#fff",
          display: "inline-block",
          fontFamily: k.b,
          fontSize: "15px",
          fontWeight: "bold",
          letterSpacing: "normal",
          lineHeight: "16px",
          paddingLeft: "4px",
          paddingTop: "1px",
          textAlign: "center",
          verticalAlign: "text-bottom",
          WebkitFontSmoothing: "auto",
          whiteSpace: "normal",
          width: "88%",
        },
        fbProfileButton: {
          height: "40px",
          paddingTop: "10px",
          paddingBottom: "4px",
          textAlign: "left",
        },
      },
      N = "facebook",
      G = 18,
      U = (function (e) {
        function t() {
          var n, o, i;
          r(this, t);
          for (var s = arguments.length, c = Array(s), p = 0; p < s; p++)
            c[p] = arguments[p];
          return (
            (n = o = a(this, e.call.apply(e, [this].concat(c)))),
            (o.getContainerName = function () {
              var e = void 0;
              return (
                window.fbConnectButtonContainerStack &&
                  window.fbConnectButtonContainerStack[
                    window.fbConnectButtonContainerStack.length - 1
                  ] &&
                  (e =
                    window.fbConnectButtonContainerStack[
                      window.fbConnectButtonContainerStack.length - 1
                    ]),
                e
              );
            }),
            (o.profilePicButtonConnectSuccess = function (e) {
              o.props.loadingIndicatorCallback &&
                o.props.loadingIndicatorCallback(!0);
              var t = { facebook_id: e.userID, facebook_token: e.accessToken },
                n = {
                  container: o.getContainerName(),
                  hybridTier: o.context.hybridTier,
                  page: o.context.pageType,
                };
              Object(h.a)(t, n, o.props.seoUnauthExperiments).then(
                function () {
                  Object(L.d)("login.facebook"), o.navigateAfterLogin();
                  var e = o.props.handlePostSuccessConnect;
                  e && e();
                },
                function (e) {
                  e.api_error_code === u.a.LOGIN_MFA_REQUIRED
                    ? (o.props.loadingIndicatorCallback &&
                        o.props.loadingIndicatorCallback(!1),
                      Object(L.d)("login.facebook"),
                      o.props.onLoginWithMfa &&
                        o.props.onLoginWithMfa(e.data, t))
                    : e.api_error_code === u.a.LOGIN_USER_NOT_FOUND ||
                      e.api_error_code === u.a.FACEBOOK_ACCOUNT_NOT_LINKED
                    ? o.profilePicButtonRegisterWithFacebook(e, t, n)
                    : (e &&
                        e.api_error_code &&
                        Object(L.a)(
                          "facebook_button.failed_login_" + e.api_error_code,
                        ),
                      Object(w.a)(g.a._("Sorry, we can't log you in.")));
                },
              );
            }),
            (o.statusChangeCallback = function (e) {
              var t = "";
              "connected" === e.status
                ? (o.profilePicButtonConnectSuccess(e.authResponse),
                  (t = "success"))
                : "not_authorized" === e.status
                ? (Object(w.a)(g.a.commonStrings.connectError),
                  (t = "not_authorized"))
                : (Object(w.a)(g.a.commonStrings.connectError),
                  (t = "other_error"));
              var n = o.props.handlePostConnectClick;
              n && n(t);
            }),
            (o.handleConnectClick = function () {
              Object(L.a)("fallback_facebook_button.click");
              var e = new S();
              return (
                Object(L.d)("login.facebook_connect.attempt"),
                e.connect(j.a.FACEBOOK, {
                  success: function e(t) {
                    o.onFacebookConnectSuccess(t);
                  },
                  error: function e(t) {
                    t.alertedUpstream ||
                      Object(w.a)(g.a.commonStrings.connectError);
                  },
                  rerequest_facebook_email: o.rerequestFacebookEmail,
                }),
                !1
              );
            }),
            (o.inFacebookGDPRAgeOptimizationExperiment = function () {
              return (
                o.props.seoUnauthExperiments.v2ActivateExperiment(
                  "web_unauth_gdpr_optimization_fb",
                ) || ""
              ).startsWith("enabled");
            }),
            (o.inFacebookPhoneOnlySignupExperiment = function () {
              return (
                o.props.seoUnauthExperiments.v2ActivateExperiment(
                  "unauth_desktop_fb_phone_only_sign_up",
                ) || ""
              ).startsWith("enabled");
            }),
            (o.profilePicButtonRegisterWithFacebook = function (e, t, n) {
              var r = o.context.country,
                a = function r(a) {
                  if (
                    o.props.onFBPhoneOnlyConnectVerified &&
                    a.socialConnectData &&
                    o.inFacebookPhoneOnlySignupExperiment()
                  ) {
                    var i = Object.assign({}, t, n);
                    o.props.onFBPhoneOnlyConnectVerified(
                      j.a.FACEBOOK,
                      a.socialConnectData,
                      i,
                    );
                  } else
                    o.props.loadingIndicatorCallback &&
                      o.props.loadingIndicatorCallback(!1),
                      e
                        ? (Object(w.a)(
                            g.a._("Email required for registration."),
                          ),
                          FB.login(
                            function (e) {
                              this.statusChangeCallback(e);
                            },
                            { auth_type: "rerequest", scope: R.a.join(",") },
                          ))
                        : o.navigate("/join/register/facebook/");
                },
                i = function e(t) {
                  m.a.handleSignupRedirect(
                    o.props.nextUrlParam,
                    o.props.disablePostSignupNextUrl,
                  );
                };
              o.props.onSocialConnectVerified && Object(j.c)(r)
                ? C.a
                    .verifyRequiredSocialRegistrationFields(S.FACEBOOK)
                    .then(function (e) {
                      if (
                        e.birthday &&
                        Object(P.d)(e.birthday, G) &&
                        o.inFacebookGDPRAgeOptimizationExperiment()
                      )
                        C.a
                          .fastTrackSocialRegistration(
                            S.FACEBOOK,
                            Object.assign({}, t, n),
                            o.props.seoUnauthExperiments,
                            !1,
                          )
                          .then(i, a);
                      else {
                        o.props.loadingIndicatorCallback &&
                          o.props.loadingIndicatorCallback(!1);
                        var r = Object.assign({}, t, n);
                        o.props.onSocialConnectVerified(j.a.FACEBOOK, e, r);
                      }
                    }, a)
                : C.a
                    .fastTrackSocialRegistration(
                      S.FACEBOOK,
                      Object.assign({}, t, n),
                      o.props.seoUnauthExperiments,
                      !1,
                    )
                    .then(i, a);
            }),
            (o.registerWithFacebook = function (e, t) {
              var n = o.context.country,
                r = function n(r) {
                  o.props.onFBPhoneOnlyConnectVerified &&
                  r.socialConnectData &&
                  o.inFacebookPhoneOnlySignupExperiment()
                    ? o.props.onFBPhoneOnlyConnectVerified(
                        j.a.FACEBOOK,
                        r.socialConnectData,
                        t,
                      )
                    : (o.props.loadingIndicatorCallback &&
                        o.props.loadingIndicatorCallback(!1),
                      e
                        ? ((o.rerequestFacebookEmail = !0),
                          Object(w.a)(
                            g.a._("Email required for registration."),
                          ))
                        : o.navigate("/join/register/facebook/"));
                },
                a = function e() {
                  m.a.handleSignupRedirect(
                    o.props.nextUrlParam || window.location.pathname,
                    o.props.disablePostSignupNextUrl,
                  );
                };
              o.props.onSocialConnectVerified && Object(j.c)(n)
                ? C.a
                    .verifyRequiredSocialRegistrationFields(S.FACEBOOK)
                    .then(function (e) {
                      o.props.onSocialConnectVerified(j.a.FACEBOOK, e, t);
                    }, r)
                : C.a
                    .fastTrackSocialRegistration(
                      S.FACEBOOK,
                      t,
                      o.props.seoUnauthExperiments,
                    )
                    .then(a, r);
            }),
            (o.navigateAfterLogin = function () {
              m.a.handleRedirect(
                o.props.nextUrlParam || window.location.pathname,
              );
            }),
            (o.renderTooltip = function (e) {
              return e
                ? o.props.useGestaltTooltip
                  ? l.a.createElement(d.a, {
                      anchor: o._fallbackButton,
                      message: e,
                    })
                  : l.a.createElement(
                      "div",
                      { style: F.tooltip },
                      l.a.createElement(O.a, { message: e }),
                    )
                : null;
            }),
            (i = n),
            a(o, i)
          );
        }
        return (
          i(t, e),
          (t.prototype.componentDidMount = function e() {
            var t = this;
            "undefined" != typeof window &&
              ((window.statusChangeCallback = this.statusChangeCallback),
              (window.checkLoginState = this.checkLoginState),
              window.fbConnectButtonContainerStack
                ? window.fbConnectButtonContainerStack.push(
                    this.props.container,
                  )
                : (window.fbConnectButtonContainerStack = [
                    this.props.container,
                  ]),
              (window.nextUrlParam = this.props.nextUrlParam),
              (window.fbButtonMounted = window.fbButtonMounted
                ? window.fbButtonMounted + 1
                : 1));
            var n = this.context.userAgent;
            n.isMobile && "ios" !== n.platform && "ipad" !== n.platform
              ? setTimeout(function () {
                  window.__branchRedirectToStore ||
                  !window.__branchPinterestStarted
                    ? t.initializeFB()
                    : (window.onbeforeunload = function () {
                        window.__branchRedirectToStore && t.initializeFB();
                      });
                }, 50)
              : this.initializeFB();
          }),
          (t.prototype.componentDidUpdate = function e() {
            window.nextUrlParam = this.props.nextUrlParam;
          }),
          (t.prototype.componentWillUnmount = function e() {
            if ("undefined" != typeof window) {
              if (
                ((window.fbButtonMounted -= 1),
                window.fbConnectButtonContainerStack)
              ) {
                var t = window.fbConnectButtonContainerStack.indexOf(
                  this.props.container,
                );
                t >= 0 && window.fbConnectButtonContainerStack.splice(t, 1);
              }
              0 === window.fbButtonMounted &&
                (delete window.statusChangeCallback,
                delete window.checkLoginState,
                delete window.nextUrlParam);
            }
          }),
          (t.prototype.onFacebookConnectSuccess = function e(t) {
            var n = this,
              o = this.props,
              r = o.preventRegister,
              a = o.container;
            Object(L.d)("login.facebook_connect.success", t);
            var i = { facebook_id: t.id, facebook_token: t.access_token },
              s = {
                container: a,
                hybridTier: this.context.hybridTier,
                page: this.context.pageType,
              };
            Object(h.a)(i, s, this.props.seoUnauthExperiments).then(
              function () {
                Object(L.d)("login.facebook"), n.navigateAfterLogin();
              },
              function (e) {
                if (e.api_error_code === u.a.LOGIN_MFA_REQUIRED)
                  Object(L.d)("login.facebook"),
                    n.props.onLoginWithMfa && n.props.onLoginWithMfa(e.data, i);
                else if (
                  e.api_error_code === u.a.LOGIN_USER_NOT_FOUND ||
                  e.api_error_code === u.a.FACEBOOK_ACCOUNT_NOT_LINKED
                ) {
                  if (r) return void r(N);
                  n.registerWithFacebook(e, s);
                } else
                  e &&
                    e.api_error_code &&
                    Object(L.a)(
                      "facebook_button.failed_login_" + e.api_error_code,
                    ),
                    Object(w.a)(
                      g.a._(
                        "Sorry, we can't log you in.",
                        "error message when user failed to login caused by suspend/deactivated etc.",
                      ),
                    );
              },
            );
          }),
          (t.prototype.initializeFB = function e() {
            var t = this;
            null !== this.profilePicButton &&
              ("undefined" != typeof FB && null !== FB
                ? FB.XFBML.parse()
                : ((window.fbAsyncInit = function () {
                    FB.init({
                      appId: u.a.GEN.templateConst.settings.FACEBOOK_API_KEY,
                      status: !0,
                      xfbml: !0,
                      version: "v2.7",
                    });
                  }),
                  (function (e, n, o) {
                    var r = e.getElementsByTagName(n)[0];
                    if (!e.getElementById(o)) {
                      var a = e.createElement(n);
                      (a.id = o),
                        (a.src =
                          "//connect.facebook.net/" +
                          p.a.getLocaleString(t.context.locale) +
                          "/sdk.js"),
                        r.parentNode.insertBefore(a, r);
                    }
                  })(document, "script", "facebook-jssdk")));
          }),
          (t.prototype.checkLoginState = function e() {
            FB.getLoginStatus(function (e) {
              this.statusChangeCallback(e);
            });
          }),
          (t.prototype.login = function e(t) {
            var n = this;
            return Object(h.a)(
              t,
              "fbconnectbtn",
              this.props.seoUnauthExperiments,
            ).then(function () {
              n.navigateAfterLogin();
            });
          }),
          (t.prototype.renderProfilePicButtonWithFallback = function e() {
            var t = this,
              n = this.props.showFallback,
              o = this.props.type,
              r =
                '<div class="fb-login-button" data-scope="' +
                R.a.join(",") +
                '" onlogin="checkLoginState"data-button-type="' +
                ("login" === o ? "login_with" : "continue_with") +
                '" data-use-continue-as="' +
                ("login" === o ? "false" : "true") +
                '" data-width="' +
                (this.props.showHybridStyle ? "376px" : "268px") +
                '"data-size="large"></div>',
              a = this.props,
              i = a.buttonText,
              s = a.inline,
              u = F.button;
            s &&
              (u = Object.assign({}, u, {
                width: "48%",
                display: "inline-block",
              })),
              n && (u = Object.assign({}, u, { position: "relative" }));
            var p = F.fbProfileButton;
            return l.a.createElement(
              "div",
              {
                ref: function e(n) {
                  t._fallbackButton = n;
                },
              },
              l.a.createElement(
                c.a,
                {
                  className: "FacebookConnectButton",
                  onClick: this.handleConnectClick,
                  styleOverrides: u,
                  type: "button",
                },
                l.a.createElement(A.m, {
                  accessibilityLabel: g.a._(
                    "facebook",
                    "accessible label for facebook icon",
                  ),
                  color: "white",
                  icon: "facebook",
                  inline: !0,
                  size: 24,
                }),
                l.a.createElement("span", { style: F.text }, i),
              ),
              !n &&
                l.a.createElement("div", {
                  dangerouslySetInnerHTML: { __html: r },
                  ref: function e(n) {
                    t.profilePicButton = n;
                  },
                  style: p,
                }),
            );
          }),
          (t.prototype.render = function e() {
            return (
              this.inFacebookGDPRAgeOptimizationExperiment(),
              l.a.createElement(
                "div",
                { style: F.container },
                this.renderProfilePicButtonWithFallback(),
                this.renderTooltip(this.props.tooltip),
              )
            );
          }),
          t
        );
      })(s.Component),
      D = (t.b = Object(x.compose)(I.b, B.withRouter)(U));
    (U.defaultProps = { inline: !1 }),
      (U.contextTypes = {
        country: b.a.string,
        locale: b.a.string.isRequired,
        userAgent: b.a.shape({
          browserName: b.a.string.isRequired,
          isMobile: b.a.bool.isRequired,
          platform: b.a.string.isRequired,
        }).isRequired,
        hybridTier: b.a.string,
        pageType: b.a.string,
      });
  },
  fond: function (e, t, n) {
    "use strict";
    var o = function e() {
      return "\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nsection,\nul {\n  display: block;\n}\n\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n}\n\naudio:not([controls]) {\n  display: none;\n}\n\nhtml {\n  font-size: 100%;\n  text-size-adjust: none;\n}\n\na:hover,\na:active {\n  outline: 0;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n\nimg {\n  max-width: 100%;\n  width: auto9;\n  height: auto;\n\n  vertical-align: middle;\n  border: 0;\n  -ms-interpolation-mode: bicubic;\n}\n\n#map_canvas img {\n  max-width: none;\n}\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n  margin: 0;\n  vertical-align: middle;\n}\nbutton,\ninput {\n  overflow: visible;\n  line-height: normal;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\nbutton,\ninput[type='button'],\ninput[type='reset'],\ninput[type='submit'] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\ninput[type='search'] {\n  box-sizing: content-box;\n  -webkit-appearance: textfield;\n}\ninput[type='search']::-webkit-search-decoration,\ninput[type='search']::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n}\nbody {\n  margin: 0;\n}\nh1, h2, h3, h4, h5, h6 {\n  margin: 0;\n}\n";
    };
    t.a = o;
  },
  gVmS: function (e, t, n) {
    "use strict";
    var o = {
      ACCOUNT_RECOVERY: "account_recovery",
      CLOSEUP: "closeup",
      CLOSEUP_BANNER: "closeup_banner",
      FACEBOOK_TWO_TAP: "facebook_two_tap",
      FOLLOW_BUTTON: "followbtn",
      GOOGLE_ONE_TAP: "google_one_tap_modal",
      LOGIN_PAGE: "login_page",
      INSPIRED_BANNER: "inspired_banner",
      MFA_LOGIN_PAGE: "mfa_login_page",
      HYBRID_CLICKTHROUGH: "hybrid_clickthrough",
      HYBRID_BANNER: "hybrid_banner",
      PIN_CLICKTHROUGH: "pin_clickthrough",
      PIN_GRID: "pin_grid",
      PIN_IMAGE: "pin_image",
      RECIPE_CONTENT: "recipe_content",
      TOPIC_PICKER: "topic_picker",
      UNAUTH_BANNER: "unauth_banner",
      UNAUTH_HEADER: "unauth_header",
      ON_PAGE_SCROLL: "on_page_scroll",
    };
    t.a = o;
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
  kc1m: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return o;
    }),
      n.d(t, "a", function () {
        return r;
      });
    var o = [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        "Oxygen-Sans",
        "Ubuntu",
        "Cantarell",
        '"Fira Sans"',
        '"Droid Sans"',
        '"Helvetica Neue"',
        "Helvetica",
        '"ヒラギノ角ゴ Pro W3"',
        '"Hiragino Kaku Gothic Pro"',
        "メイリオ",
        "Meiryo",
        '"ＭＳ Ｐゴシック"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      r = [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        "Oxygen-Sans",
        "Ubuntu",
        "Cantarell",
        '"Fira Sans"',
        '"Droid Sans"',
        '"Helvetica Neue Bold"',
        "Helvetica",
        '"ヒラギノ角ゴ Pro W3"',
        '"Hiragino Kaku Gothic Pro"',
        "メイリオ",
        "Meiryo",
        '"ＭＳ Ｐゴシック"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(",");
  },
  l6Jx: function (e, t, n) {
    "use strict";
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    var i = n("d6ZO"),
      s = n.n(i),
      l = n("IaRT"),
      c = n.n(l),
      u = n("gEaE"),
      p = {
        tooltipText: {
          overflowWrap: "break-word",
          wordWrap: "break-word",
          color: "white",
          fontWeight: "bold",
        },
      },
      d = (function (e) {
        function t(n, a) {
          o(this, t);
          var i = r(this, e.call(this, n, a));
          return (i.state = { tooltipIsOpen: !!n.message }), i;
        }
        return (
          a(t, e),
          (t.prototype.componentWillReceiveProps = function e(t) {
            t.message !== this.props.message &&
              this.setState({ tooltipIsOpen: !!t.message });
          }),
          (t.prototype.render = function e() {
            var t = this,
              n = this.props.message;
            return this.state.tooltipIsOpen
              ? s.a.createElement(
                  u.L,
                  {
                    anchor: this.props.anchor,
                    idealDirection: "right",
                    onDismiss: function e() {
                      return t.setState({ tooltipIsOpen: !0 });
                    },
                  },
                  this.props.children
                    ? s.a.createElement(
                        "span",
                        { style: p.text },
                        this.props.children,
                      )
                    : s.a.createElement("span", {
                        dangerouslySetInnerHTML: { __html: n },
                        style: p.tooltipText,
                      }),
                )
              : null;
          }),
          t
        );
      })(i.Component);
    t.a = d;
  },
  mjwP: function (e, t, n) {
    "use strict";
    var o = n("d6ZO"),
      r = n.n(o),
      a = n("BAXv"),
      i = n("W/Cr"),
      s = n("4642"),
      l = n("suNN"),
      c = n("gEaE"),
      u = function e(t, n, r) {
        return o.createElement(
          "button",
          {
            style: {
              background: "transparent",
              border: "none",
              verticalAlign: "inherit",
              padding: 0,
            },
            onClick: function e() {
              Object(s.a)({ usernameOrEmail: n, callBack: r });
            },
          },
          o.createElement(
            c.H,
            {
              bold: !0,
              inline: !0,
              color: "orange",
              size: "sm",
              key: "err_text",
            },
            t,
          ),
        );
      };
    t.a = function (e) {
      var t = e.api_error_code,
        n = e.errorMessage,
        r = e.handleTouch,
        s = e.source,
        p = e.userSearch,
        d = function e(t) {
          return u(t, p, r);
        };
      return (function (e) {
        switch (e) {
          case a.a.API_EVENT_BLOCKED_ERROR:
          case a.a.API_LIMIT_EXCEEDED_ERROR:
          case a.a.RESPONSE_CODE_TOO_MANY_REQUESTS:
            return Object(l.b)(
              i.a._(
                "You’ve entered a lot of incorrect passwords. To get back into your account, {{ resetPasswordLink }}. Or you can wait 30 minutes and try again.",
                "Error message when login limited",
              ),
              {
                resetPasswordLink: d(
                  i.a._("reset your password", "Link text for password reset"),
                ),
              },
            );
          case a.a.LOGIN_HARD_BANNED_USER:
          case a.a.USER_IN_SAFE_MODE:
            return Object(l.b)(
              i.a._(
                "We noticed some strange activity on your account.  {{ resetPasswordLink }} or log in with Facebook or Google to get back into your account.",
                "Error message when user is soft banned",
              ),
              {
                resetPasswordLink: d(
                  i.a._("Reset your password", "Link text for password reset"),
                ),
              },
            );
          case a.a.INVALID_PASSWORD_ERROR_CODE:
            return "emailPasswordStep" === s
              ? Object(l.b)(
                  i.a._(
                    "Oops, that email’s taken or your password’s incorrect. {{ resetPasswordLink }}",
                  ),
                  {
                    resetPasswordLink: d(
                      i.a._("Reset it?", "Link text for password reset"),
                    ),
                  },
                )
              : Object(l.b)(
                  i.a._(
                    "The password you entered is incorrect. Try again or {{ resetPasswordLink }}",
                  ),
                  {
                    resetPasswordLink: d(
                      i.a._(
                        "Reset your password",
                        "Link text for password reset",
                      ),
                    ),
                  },
                );
          default:
            return [n];
        }
      })(t).map(function (e, t) {
        return o.createElement(
          c.H,
          { inline: !0, color: "orange", size: "sm", key: "err_message_" + t },
          e,
        );
      });
    };
  },
  nBsT: function (e, t, n) {
    "use strict";
    var o = function e() {
      return "\n.FullPageModal__scroller {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n";
    };
    t.a = o;
  },
  "nU3+": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "d", function () {
        return r;
      }),
      n.d(t, "c", function () {
        return a;
      }),
      n.d(t, "b", function () {
        return i;
      });
    var o = {
        tier1: "tier1",
        tier2: "tier2",
        tier3: "tier3",
        controlOpen: "control_open",
        controlClosed: "control_closed",
      },
      r = new Set(["AU", "US"]),
      a = new Set(["CA", "IE", "NL", "NZ", "GB"]),
      i = 60;
  },
  nWYF: function (e, t, n) {
    "use strict";
    var o = n("d6ZO"),
      r = n.n(o),
      a = r.a.createElement("circle", {
        cx: "38",
        cy: "38",
        fill: "white",
        r: "40",
      }),
      i = function e(t, n, o) {
        var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          s =
            "M27.5 71c3.3 1 6.7 1.6 10.3 1.6C57 72.6 72.6 57 72.6 37.8 72.6 18.6 57 3 37.8 3 18.6 3 3 18.6 3 37.8c0 14.8 9.3 27.5 22.4 32.5-.3-2.7-.6-7.2 0-10.3l4-17.2s-1-2-1-5.2c0-4.8 3-8.4 6.4-8.4 3 0 4.4 2.2 4.4 5 0 3-2 7.3-3 11.4C35.6 49 38 52 41.5 52c6.2 0 11-6.6 11-16 0-8.3-6-14-14.6-14-9.8 0-15.6 7.3-15.6 15 0 3 1 6 2.6 8 .3.2.3.5.2 1l-1 3.8c0 .6-.4.8-1 .4-4.4-2-7-8.3-7-13.4 0-11 7.8-21 22.8-21 12 0 21.3 8.6 21.3 20 0 12-7.4 21.6-18 21.6-3.4 0-6.7-1.8-7.8-4L32 61.7c-.8 3-3 7-4.5 9.4z",
          l = a,
          c = void 0;
        c = n ? "-3 -3 82 82" : "3 3 70 70";
        var u = void 0;
        return (
          (u = o || "#BD081C"),
          i
            ? r.a.createElement(
                "svg",
                { height: t, viewBox: c, width: t },
                n ? l : null,
                r.a.createElement("path", {
                  d: s,
                  fill: u,
                  fillRule: "evenodd",
                }),
              )
            : r.a.createElement(
                "svg",
                {
                  height: t,
                  style: { display: "block" },
                  viewBox: c,
                  width: t,
                },
                n ? l : null,
                r.a.createElement("path", {
                  d: s,
                  fill: u,
                  fillRule: "evenodd",
                }),
              )
        );
      };
    t.a = i;
  },
  o4o0: function (e, t, n) {
    "use strict";
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    var i = n("d6ZO"),
      s = n.n(i),
      l = n("/2tF"),
      c = [
        "gmail.com",
        "hotmail.com",
        "hotmail.com.ar",
        "yahoo.com.ar",
        "live.com.ar",
        "outlook.com",
        "live.com",
        "bigpond.com",
        "yahoo.com",
        "icloud.com",
        "yahoo.com.au",
        "yahoo.com.br",
        "bol.com.br",
        "yahoo.ca",
        "hotmail.ca",
        "web.de",
        "gmx.de",
        "t-online.de",
        "hotmail.de",
        "hotmail.es",
        "yahoo.es",
        "hotmail.fr",
        "orange.fr",
        "yahoo.fr",
        "live.fr",
        "free.fr",
        "laposte.net",
        "wanadoo.fr",
        "outlook.fr",
        "hotmail.co.uk",
        "rediffmail.com",
        "yahoo.co.in",
        "yahoo.in",
        "libero.it",
        "hotmail.it",
        "alice.it",
        "yahoo.co.jp",
        "ezweb.ne.jp",
        "docomo.ne.jp",
        "i.softbank.jp",
        "softbank.ne.jp",
        "live.com.mx",
        "outlook.es",
        "aol.com",
        "outlook.com",
        "comcast.net",
      ],
      u = n("W/Cr"),
      p = function (e, t) {
        var n = t.split("@");
        if (0 === e.length) return n[1].length;
        if (0 === n[1].length) return e.length;
        var o = [],
          r = void 0;
        for (r = 0; r <= n[1].length; r += 1) o[r] = [r];
        var a = void 0;
        for (a = 0; a <= e.length; a += 1) o[0][a] = a;
        for (r = 1; r <= n[1].length; r += 1)
          for (a = 1; a <= e.length; a += 1)
            n[1].charAt(r - 1) === e.charAt(a - 1)
              ? (o[r][a] = o[r - 1][a - 1])
              : (o[r][a] = Math.min(
                  o[r - 1][a - 1] + 1,
                  Math.min(o[r][a - 1] + 1, o[r - 1][a] + 1),
                ));
        return o[n[1].length][e.length];
      },
      d = n("IaRT"),
      g = n.n(d),
      h = n("+XcA"),
      m = n("suNN"),
      f = n("6oz1"),
      b = {
        signupButton: { width: "100%" },
        wrapperVisible: {
          WebkitTransition: "opacity 0.5s linear",
          transition: "opacity 0.5s linear",
          display: "flex",
          opacity: 1,
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        },
        wrapperHidden: {
          WebkitTransition: "opacity 0.5s linear",
          transition: "opacity 0.5s linear",
          pointerEvents: "none",
          display: "none",
          opacity: 0,
        },
      },
      _ = (function (e) {
        function t() {
          var n, a, i;
          o(this, t);
          for (var s = arguments.length, l = Array(s), d = 0; d < s; d++)
            l[d] = arguments[d];
          return (
            (n = a = r(this, e.call.apply(e, [this].concat(l)))),
            (a.state = { domainError: "", newEmail: "" }),
            (a.updateEmail = function () {
              a.state.newEmail &&
                a.props.onEmailChange({ target: { value: a.state.newEmail } });
            }),
            (a.handleEmailBlur = function (e) {
              return function () {
                var t = a.props,
                  n = t.email,
                  o = t.onEmailBlur;
                if ((o && o(), e)) {
                  var r = n && -1 !== n.indexOf("@") ? n.split("@") : [];
                  if (
                    ((n && n !== a.state.newEmail) ||
                      a.setState({ domainError: "" }),
                    n && r && n.length < 60)
                  ) {
                    var i =
                      r[1] &&
                      c
                        .map(function (t) {
                          var o = p(t, n);
                          return 2 === e
                            ? 2 === o || 1 === o
                              ? t
                              : null
                            : 1 === e && 1 === o
                            ? t
                            : null;
                        })
                        .filter(function (e) {
                          return "string" == typeof e;
                        });
                    if (i && i.length) {
                      var s = i[0] ? r[0] + "@" + i[0] : "",
                        l = Object(m.b)(u.a._("Did you mean {{ newEmail }}?"), {
                          newEmail: s,
                        }).join("");
                      a.setState({ domainError: l, newEmail: s }),
                        n === s && a.setState({ domainError: "" });
                    }
                  }
                }
              };
            }),
            (i = n),
            r(a, i)
          );
        }
        return (
          a(t, e),
          (t.getDerivedStateFromProps = function e(t, n) {
            return t.email === n.newEmail
              ? { domainError: "", newEmail: "" }
              : null;
          }),
          (t.prototype.render = function e() {
            var t = this,
              n = this.props,
              o = n.age,
              r = n.ageValidationError,
              a = n.buttonText,
              s = n.buttonTextLabel,
              c = n.disableEmailLogin,
              p = n.email,
              d = n.emailLabel,
              g = n.emailText,
              m = n.emailValidationError,
              _ = n.hideFacebookButton,
              y = n.hideGoogleButton,
              E = n.hidePasswordField,
              v = n.inputStyleOverrides,
              w = n.loading,
              S = n.onAgeBlur,
              O = n.onAgeChange,
              C = n.onButtonClick,
              x = n.onEmailChange,
              T = n.onPasswordBlur,
              k = n.onPasswordChange,
              R = n.password,
              A = n.passwordFieldVisible,
              P = n.passwordText,
              B = n.passwordValidationError,
              L = n.showAgeInput,
              I = n.useExperimentalTextfield,
              j = n.useGestalt,
              F = b.wrapperVisible;
            !1 === A && (F = b.wrapperHidden);
            var N = m;
            return (
              N ||
                (!E && !c) ||
                (_ || y
                  ? !_ && y
                    ? (N = u.a._(
                        "Your account is connected to Facebook - use the Facebook button to log in",
                        "Customized desktop login for users with Facebook",
                      ))
                    : _ &&
                      !y &&
                      (N = u.a._(
                        "Your account is connected to Google - use the Google button to log in",
                        "Customized desktop login for users with Google",
                      ))
                  : (N = u.a._(
                      "Your account is connected to Facebook and Google - use the buttons to log in",
                      "Customized desktop login for users with FB and Google",
                    ))),
              i.createElement(
                "form",
                {
                  method: "POST",
                  noValidate: !0,
                  onSubmit: function e(t) {
                    t.preventDefault(), C(t);
                  },
                },
                i.createElement(
                  f.c,
                  { name: "web_login_signup_email_typo" },
                  function (e) {
                    var n = e.group,
                      o =
                        (n.startsWith("enabled_by_one") && 1) ||
                        (n.startsWith("enabled_by_two") && 2) ||
                        0;
                    return i.createElement(h.a, {
                      accessibilityLabel: d,
                      autoComplete: "username",
                      fieldsetStyleOverrides: { marginBottom: "7px" },
                      focused: !0,
                      hasError: !!m,
                      domainError: t.state.domainError,
                      id: "email",
                      inputStyleOverrides: v,
                      name: "id",
                      onBlur: t.handleEmailBlur(o),
                      onChange: x,
                      placeholder: g,
                      tooltip: N,
                      type: "email",
                      value: p,
                      updateEmail: t.updateEmail,
                      useExperimentalTextfield: I,
                      useGestalt: j,
                    });
                  },
                ),
                !E &&
                  i.createElement(h.a, {
                    autoComplete: "current-password",
                    disabled: c,
                    hasError: !!B,
                    id: "password",
                    inputStyleOverrides: Object.assign({}, v, F),
                    name: "password",
                    onBlur: T,
                    onChange: k,
                    placeholder: P,
                    tooltip: B,
                    type: "password",
                    value: R,
                    useExperimentalTextfield: I,
                    useGestalt: j,
                  }),
                !E && L
                  ? i.createElement(h.a, {
                      accessibilityLabel: "age",
                      autoComplete: "off",
                      fieldsetStyleOverrides: { marginTop: "7px" },
                      hasError: !!r,
                      id: "age",
                      inputStyleOverrides: Object.assign({}, v),
                      name: "age",
                      onBlur: S,
                      onChange: O,
                      placeholder: u.a._("Age"),
                      tooltip: r,
                      type: "text",
                      value: o,
                      useExperimentalTextfield: I,
                      useGestalt: j,
                    })
                  : null,
                !E &&
                  i.createElement(
                    l.a,
                    {
                      accessibilityLabel: s,
                      className: "red SignupButton",
                      disabled: c,
                      loading: w,
                      styleOverrides: b.signupButton,
                      type: "submit",
                    },
                    i.createElement("div", null, a),
                  ),
              )
            );
          }),
          t
        );
      })(i.Component),
      y = (t.a = _);
  },
  oUjL: function (e, t, n) {
    "use strict";
    var o = n("DMk0"),
      r = n.n(o),
      a = n("BAXv"),
      i = n("WjSu"),
      s = n("kHbH"),
      l = n("ZtCB"),
      c = n.n(l),
      u = n("FJZF"),
      p = s.a.getLogger("AuthHandshake"),
      d = {};
    (d._parseJson = function (e) {
      return e.json();
    }),
      (d._throwError = function (e) {
        var t = new Error(e.statusText);
        throw ((t.response = e), t);
      }),
      (d._checkStatus = function (e) {
        return 200 === e.status || 401 === e.status
          ? e
          : (d._throwError(e), {});
      }),
      (d._crossDomainRequest = function (e, t, n) {
        if ("GET" !== n && "POST" !== n) return Promise.resolve();
        var o = { credentials: "include", mode: "cors" };
        return (
          "POST" === n &&
            ((o.method = "POST"),
            (o.body = t),
            (o.headers = {
              "Content-type":
                "application/x-www-form-urlencoded; charset=UTF-8",
              "X-Pinterest-InstallId": i.a.instance.unauth_id,
            })),
          fetch(e, o)
            .then(d._checkStatus)
            .then(d._parseJson)
            .then(function (e) {
              return "success" === e.status
                ? Promise.resolve(e)
                : e.code === a.a.LOGIN_MFA_REQUIRED
                ? ((e.api_error_code = e.code), Promise.reject(e))
                : (d._throwError(e), {});
            })
            .catch(function (e) {
              throw e;
            })
        );
      }),
      (d._verifyAndGetToken = function () {
        var e =
          a.a.GEN.templateConst.settings.ACCOUNTS_PINTEREST_URL +
          "/v3/handshake/verify/";
        return d._crossDomainRequest(e, "", "GET");
      }),
      (d.exchangeTokenAndSetSession = function (e) {
        return c.a
          .create("HandshakeSessionResource", { token: e })
          .callCreate();
      }),
      (d.verifyLoggedInStatus = function () {
        d._verifyAndGetToken().then(
          function (e) {
            if (e && e.data) {
              var t = e.data;
              d.exchangeTokenAndSetSession(t).then(
                function (e) {
                  window.location.reload();
                },
                function (e) {
                  p.error(
                    "Failed to set session for current user; " + e.message,
                  );
                },
              );
            } else
              p.error("No custom access token in cross domain verify response");
          },
          function (e) {},
        );
      }),
      (d._setUpRegisterParameters = function (e) {
        var t = {};
        if (
          ((t.email = e.email || ""),
          (t.username = e.username || ""),
          (t.password = e.password || ""),
          (t.first_name = e.first_name || ""),
          (t.last_name = e.last_name || ""),
          (t.country = e.country || ""),
          (t.locale = i.a.instance.locale),
          (t.referrer = i.a.instance.referrer),
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
          i.a.instance.invite_code &&
            (t.invite_code = i.a.instance.invite_code),
          e.facebook_id)
        ) {
          var r = i.a.instance.facebook_token || e.facebook_token || "";
          r || p.debug("Facebook token is not being set during login call."),
            (t.facebook_id = e.facebook_id),
            (t.facebook_token = r),
            (t.social_username = e.social_username || "");
        } else
          e.gplus_code &&
            ((t.password = e.password || ""),
            (t.one_time_code = e.gplus_code),
            (t.redirect_uri = e.gplus_redirect_uri));
        return u.a.getQueryStringFromObject(t);
      }),
      (d._setUpLoginParameters = function (e) {
        var t = {};
        if (
          (e.username_or_email &&
            ((t.username_or_email = e.username_or_email.trim()),
            (t.password = e.password),
            (t.referrer = i.a.instance.referrer)),
          e.facebook_id)
        ) {
          var n = i.a.instance.facebook_token || e.facebook_token || "";
          n || p.debug("Facebook token is not being set during login call."),
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
          u.a.getQueryStringFromObject(t)
        );
      }),
      (d._getRegisterRequestUrl = function (e) {
        var t = "/v3/register/email/handshake/";
        return (
          e.facebook_id && (t = "/v3/register/facebook/handshake/"),
          e.gplus_code && (t = "/v3/register/gplus/handshake/"),
          a.a.GEN.templateConst.settings.ACCOUNTS_PINTEREST_URL + t
        );
      }),
      (d._getLoginRequestUrl = function (e) {
        var t = "/v3/login/handshake/";
        return (
          e.facebook_id && (t = "/v3/login/facebook/handshake/"),
          e.gplus_id_token && (t = "/v3/login/gplus/handshake/"),
          e.mfa_token && (t = "/v3/login/mfa/handshake/"),
          a.a.GEN.templateConst.settings.ACCOUNTS_PINTEREST_URL + t
        );
      }),
      (d.registerUser = function (e) {
        var t = d._getRegisterRequestUrl(e),
          n = d._setUpRegisterParameters(e);
        return d._crossDomainRequest(t, n, "POST");
      }),
      (d.loginUser = function (e) {
        var t = d._getLoginRequestUrl(e),
          n = d._setUpLoginParameters(e);
        return d._crossDomainRequest(t, n, "POST");
      }),
      (t.a = d);
  },
  rOKQ: function (e, t, n) {
    "use strict";
    function o(e) {
      var t = e.split("@")[0],
        n = "";
      return (
        (n = t.includes(".")
          ? t.replace(".", " ")
          : t.includes("_")
          ? t.replace("_", " ")
          : t),
        (n = n.replace(/[0-9]/g, "")),
        (n = n.replace(/\w\S*/g, function (e) {
          return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
        }))
      );
    }
    t.a = o;
  },
  sXYb: function (e, t, n) {
    "use strict";
    var o = n("d6ZO"),
      r = n.n(o),
      a = n("W/Cr"),
      i = n("gEaE"),
      s = {
        loadingIndicatorMask: {
          position: "absolute",
          backgroundColor: "#fff",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          opacity: "0.7",
          borderRadius: "8px",
          zIndex: "100",
        },
        spinner: {
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          opacity: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "101",
        },
      },
      l = function e(t) {
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(
            "div",
            { style: s.spinner },
            r.a.createElement(i.D, {
              accessibilityLabel: a.a._("Loading"),
              show: !0,
            }),
          ),
          r.a.createElement("div", { style: s.loadingIndicatorMask }),
        );
      };
    t.a = l;
  },
  sfmt: function (e, t, n) {
    "use strict";
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function l(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function c(e, t) {
      var n = e.onGenderSaved,
        o = t.country;
      return S.createElement(
        J.b,
        { color: "white", position: "relative" },
        S.createElement(J.J, {
          id: "customGender",
          name: "custom_gender",
          placeholder: A.a._("Custom gender"),
          onChange: function e(t) {
            var o = t.value;
            n(o);
          },
        }),
      );
    }
    function u(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function p(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function d(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function g(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function h(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function m(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function f(e) {
      return !e || [ve, Ee, ""].includes(e.toLowerCase());
    }
    function b(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function _(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function y(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function E(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function v(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function w(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    var S = n("d6ZO"),
      O = n.n(S),
      C = n("P9bn"),
      x = n("FHH+"),
      T = n("BAXv"),
      k = n("a993"),
      R = n("Q4UA"),
      A = n("W/Cr"),
      P = n("5JMz"),
      B = n("Wcb7"),
      L = n("12R3"),
      I = n("IaRT"),
      j = n.n(I),
      F = n("o4o0"),
      N = n("ZtCB"),
      G = n.n(N),
      U = n("Krtm"),
      D = n("6Jd8"),
      M = n("mjwP"),
      W = n("85jk"),
      V = n("SCJe"),
      H = n("kc1m"),
      z = n("+QQJ"),
      q = n("FGUD"),
      K = n("kzic"),
      Y = n("ok+N"),
      Q = n("UUel"),
      X = n("FrUj"),
      J = n("gEaE"),
      Z = {
        hybridSignupContainer: { margin: "0 12px 0 0" },
        emailButtonStyles: {
          height: "40px",
          width: "100%",
          borderRadius: "2px",
        },
        emailButtonTextStyles: {
          fontFamily: H.a,
          textAlign: "center",
          fontSize: "15px",
          WebkitFontSmoothing: "auto",
        },
        spaceBetweenTextAndSocial: { height: "11px" },
        signupContainer: { margin: "0 auto", width: "268px" },
        socialButtonSeparator: { height: "5px" },
      },
      $ = "emailpwdstep",
      ee = [].concat(Q.a, [
        T.a.INVALID_PASSWORD_FB_USER,
        T.a.INVALID_PASSWORD_GOOGLE_USER,
        T.a.LOGIN_VOLUNTARILY_DEACTIVATED_USER,
        T.a.INVALID_PASSWORD_ERROR_CODE,
      ]),
      te = O.a.createElement(
        J.b,
        { marginBottom: 1, marginTop: 3 },
        O.a.createElement(J.i, null),
      ),
      ne = (function (e) {
        function t(n, a) {
          o(this, t);
          var i = r(this, e.call(this, n, a));
          (i.handleButtonClick = function (e) {
            var t = L.a.runPhoneValidators(
              i.props.email,
              i.context.locale,
              i._loginFacebookAccountKit.bind(i),
            );
            i.setState({
              facebookValidationError: null,
              googleValidationError: null,
            }),
              t &&
                (Object(W.a)("unauth_email_validation_attempt"),
                (t = Object(U.a)(i.props.email, i.emailValidators))
                  ? (i.setState({ emailValidationError: t }),
                    Object(W.a)(
                      "unauth.login.error.ClIENT_ERROR.malformemail." + $,
                    ))
                  : ((t = Object(U.a)(
                      i.props.password,
                      i.loginPasswordValidators,
                    ))
                      ? (i.setState({ passwordValidationError: t }),
                        Object(W.a)(
                          "unauth.login.error.ClIENT_ERROR.malformpwd." + $,
                        ))
                      : (i.setState({ passwordValidationError: null }),
                        i.validateEmailAvailable(e)),
                    i.setState({ emailValidationError: null }),
                    i.props.setNameFromEmail &&
                      !i.context.userAgent.isMobile &&
                      i.props.setNameFromEmail()));
          }),
            (i.handleEmailChange = function (e) {
              i.props.onEmailChange && i.props.onEmailChange(e);
            }),
            (i._loginFacebookAccountKit = function (e) {
              if (L.a.validateResponse(e)) {
                var t = { phone_number: i.props.email, fb_auth_code: e.code };
                i.login(t);
              } else
                i.setState({
                  emailValidationError: A.a._(
                    "Enter your email or phone number to try again.",
                  ),
                  loading: !1,
                });
            }),
            (i.handleAgeBucketChange = function (e) {
              i.setState({ age: e });
            }),
            (i.register = function () {
              i.setState({ loading: !0 });
              var e = i.props,
                t = e.age,
                n = e.container,
                o = e.email,
                r = e.name,
                a = e.password,
                s = e.seoUnauthExperiments,
                l = e.signupSource,
                c = {
                  container: n,
                  email: o,
                  password: a,
                  age: t,
                  country: i.context.country,
                  signupSource: l,
                  first_name: r,
                  last_name: "",
                  hybridTier: i.context.hybridTier,
                  page: i.context.pageType,
                };
              Object(W.a)("one_step_age_signup_complete"),
                V.a
                  .register(c, s, !1)
                  .then(i.redirectAfterSignup, function (e) {
                    e.api_error_code === T.a.API_ERROR_UNDERAGE_REGISTER_ATTEMPT
                      ? ((
                          s.v2GetGroup("web_gdpr_age_email_signup") || ""
                        ).startsWith("enabled")
                          ? i.setState({
                              validationError: null,
                              nameError: !1,
                              ageValidationError: A.a._(
                                "Uh oh! You’re not old enough to use Pinterest yet.",
                              ),
                              loading: !1,
                            })
                          : Object(x.a)("/restricted/age/", !1),
                        i.setState({ loading: !1 }))
                      : (i.setState({
                          validationError: null,
                          nameError: !1,
                          ageError: !1,
                          loading: !1,
                        }),
                        Object(q.a)(
                          A.a._("Sorry! Something went wrong on our end."),
                        ));
                  });
            }),
            (i.redirectAfterSignup = function (e) {
              Object(W.a)("unauth.signup_one_step.completed"),
                B.a.handleSignupRedirect(
                  i.props.nextUrlParam,
                  i.props.disablePostSignupNextUrl,
                );
            }),
            (i.updateAccountRecoveryModal = function (e) {
              return i.setState({ accountRecoveryModalType: e });
            }),
            (i.renderSocialButtons = function () {
              var e = i.props.sm;
              return O.a.createElement(
                "div",
                null,
                O.a.createElement(k.b, {
                  buttonText: A.a._("Continue with Facebook"),
                  container: i.props.container,
                  disablePostSignupNextUrl: i.props.disablePostSignupNextUrl,
                  onSocialConnectVerified: i.props.onSocialConnectVerified,
                  onFBPhoneOnlyConnectVerified:
                    i.props.onFBPhoneOnlyConnectVerified,
                  loadingIndicatorCallback: i.props.loadingIndicatorCallback,
                  onLoginWithMfa: i.props.onLoginWithMfa,
                  showHybridStyle: i.props.showHybridStyle,
                  tooltip: i.state.facebookValidationError,
                  useGestaltTooltip: !0,
                }),
                O.a.createElement("div", { style: Z.socialButtonSeparator }),
                O.a.createElement(
                  "div",
                  {
                    ref: function e(t) {
                      i.googleButton = t;
                    },
                  },
                  "1" !== e &&
                    O.a.createElement(R.b, {
                      action: "signup",
                      container: i.props.container,
                      disablePostSignupNextUrl:
                        i.props.disablePostSignupNextUrl,
                      nextUrlParam: "/",
                      onSocialConnectVerified: i.props.onSocialConnectVerified,
                      onLoginWithMfa: i.props.onLoginWithMfa,
                      tooltip: i.state.googleValidationError,
                    }),
                ),
              );
            }),
            (i.renderSignupForm = function () {
              var e = i.props,
                t = e.age,
                n = e.email,
                o = e.inputStyleOverrides,
                r = e.newEmail,
                a = e.onAgeChange,
                s = e.onPasswordChange,
                l = e.password,
                c = e.updateEmail;
              return O.a.createElement(F.a, {
                age: t,
                ageValidationError: i.state.ageValidationError,
                buttonText: i.getButtonText(),
                buttonTextLabel: A.a._(
                  "Continue creating your Pinterest account",
                  "Accessiblity button text to continue creating an account",
                ),
                email: n,
                emailText: A.a._("Email"),
                emailLabel: A.a._(
                  "Enter your email",
                  "Accessiblity input text on login screen",
                ),
                emailValidationError: i.state.emailValidationError,
                inputStyleOverrides: o,
                loading: i.state.loading,
                newEmail: r,
                onAgeChange: a,
                onButtonClick: i.handleButtonClick.bind(i),
                onEmailChange: i.handleEmailChange,
                onPasswordBlur: i.handleBlur.bind(i, "password"),
                onPasswordChange: s,
                password: l,
                passwordText: A.a._("Create a password"),
                passwordValidationError: i.state.passwordValidationError,
                showAgeInput: Object(z.c)(i.context.country),
                useExperimentalTextfield: !0,
                updateEmail: c,
                useGestalt: !0,
              });
            }),
            (i.renderReorderedButtons = function () {
              var e = { marginBottom: "10px" },
                t = i.props.signupSeparatorContinuous;
              return O.a.createElement(
                "div",
                null,
                i.renderSocialButtons(),
                O.a.createElement(
                  "div",
                  { style: e },
                  O.a.createElement(C.a, { signupSeparatorContinuous: t }),
                ),
                i.renderSignupForm(),
              );
            }),
            (i.renderSocialButtonsOnly = function () {
              i.renderSocialButtons();
            }),
            (i.renderHybridDesign = function () {
              return O.a.createElement(
                "div",
                null,
                i.renderSignupForm(),
                te,
                i.renderSocialButtons(),
              );
            }),
            (i.renderHybridSideBarForm = function () {
              var e = i.props.shouldRenderHybridSideBarForm;
              return O.a.createElement(
                "div",
                null,
                i.renderSignupForm(),
                i.renderSocialButtons(),
                O.a.createElement(C.a, { dynamicMargin: e }),
              );
            }),
            (i.renderOriginalForm = function () {
              var e = i.props.signupSeparatorContinuous;
              return O.a.createElement(
                "div",
                null,
                i.renderSignupForm(),
                O.a.createElement(C.a, { signupSeparatorContinuous: e }),
                i.renderSocialButtons(),
              );
            }),
            (i.renderButtons = function () {
              var e = i.props.showHybridStyle,
                t = i.props.shouldRenderHybridSideBarForm,
                n = i.props.sm;
              return "2" === n
                ? i.renderReorderedButtons()
                : "1" === n
                ? i.renderSocialButtonsOnly()
                : e
                ? i.renderHybridDesign()
                : t
                ? i.renderHybridSideBarForm()
                : i.renderOriginalForm();
            }),
            (i.state = {
              ageValidationError: n.ageValidationError || null,
              accountRecoveryModalType: null,
              emailValidationError: n.emailValidationError || null,
              facebookValidationError: null,
              googleValidationError: null,
              loading: !1,
              passwordValidationError: n.passwordValidationError || null,
            }),
            (i.emailValidators = [
              Object(X.q)({
                message: A.a._(
                  "You missed a spot! Don't forget to add your email.",
                ),
              }),
              Object(X.e)({
                message: A.a._(
                  "Hmm... that doesn't look like an email address.",
                ),
              }),
            ]);
          var s = A.a._("Your password is too short! You need 6+ characters."),
            l = A.a._("Oh @*&#! No zany characters allowed."),
            c = A.a._("You missed a spot! Let us know how old you are.");
          return (
            (i.passwordValidators = [
              Object(X.q)({ message: s }),
              Object(X.b)({ message: l }),
              Object(X.n)({
                shortPassStr: s,
                badPassStyle: A.a._(
                  "Your password does not have the proper style.",
                ),
                samePasswordStr: A.a._(
                  "Please make your username and password different.",
                ),
                blackPassStr: A.a._("Please make a stronger password."),
              }),
            ]),
            (i.loginPasswordValidators = [
              Object(X.q)({ message: s }),
              Object(X.b)({ message: l }),
              Object(X.j)({ messages: { min: s }, min: 6 }),
            ]),
            Object(z.c)(i.context.country)
              ? (i.ageValidators = [
                  Object(X.q)({ message: c }),
                  Object(X.a)({
                    message: A.a._("Please enter a valid number."),
                  }),
                ])
              : (i.ageValidators = [
                  Object(X.a)({
                    message: A.a._("Please enter a valid number."),
                  }),
                ]),
            i
          );
        }
        return (
          a(t, e),
          (t.prototype.componentDidMount = function e() {
            L.a.setupPhoneAuth(this.context.locale);
          }),
          (t.prototype.componentWillReceiveProps = function e(t) {
            var n = t.ageValidationError,
              o = t.emailValidationError,
              r = t.passwordValidationError,
              a = {};
            o !== this.props.emailValidationError
              ? (a = { emailValidationError: o })
              : r !== this.props.passwordValidationError
              ? (a = { passwordValidationError: r })
              : n !== this.props.ageValidationError &&
                (a = { ageValidationError: n }),
              this.setState(a);
          }),
          (t.prototype.getButtonText = function e() {
            var t = A.a._("Continue", "Continue button on web");
            return (
              this.context.userAgent.isMobile &&
                (t = A.a._("Continue", "Continue button on mobile web")),
              t
            );
          }),
          (t.prototype.handleBlur = function e(t) {
            "id" === t
              ? this.setState({ emailValidationError: null })
              : "password" === t
              ? this.setState({ passwordValidationError: null })
              : "age" === t && this.setState({ ageValidationError: null }),
              this.setState({
                facebookValidationError: null,
                googleValidationError: null,
              });
          }),
          (t.prototype.handleLoginFailure = function e(t, n) {
            var o = this,
              r =
                t.http_status === T.a.RESPONSE_CODE_TOO_MANY_REQUESTS
                  ? T.a.RESPONSE_CODE_TOO_MANY_REQUESTS
                  : t.api_error_code;
            if (r === T.a.LOGIN_MFA_REQUIRED)
              return (
                B.a.storeLoginCredentialsToBrowser(n),
                void this.props.onLoginWithMfa(t.data)
              );
            var a = []
                .concat(Q.a, [T.a.INVALID_PASSWORD_ERROR_CODE])
                .includes(r),
              i = void 0,
              s = {
                emailValidationError: (i = ee.includes(r)
                  ? a && Q.d.includes(r)
                    ? Object(M.a)({
                        api_error_code: r,
                        errorMessage: t.message,
                        handleTouch: function e() {
                          return o.updateAccountRecoveryModal(
                            Q.e.PASSWORD_RESET_SENT,
                          );
                        },
                        source: "emailPasswordStep",
                        userSearch: this.props.email,
                      })
                    : t.message
                  : A.a._(
                      "Deja vu! That email's taken. Forgot your password?",
                    )),
              };
            r === T.a.INVALID_PASSWORD_FB_USER
              ? (s = {
                  facebookValidationError: i,
                })
              : r === T.a.INVALID_PASSWORD_GOOGLE_USER &&
                (s = { googleValidationError: i }),
              this.setState(
                Object.assign({ accountRecoveryModalType: Q.b[r] }, s, {
                  loading: !1,
                }),
              );
          }),
          (t.prototype.handleLoginSuccess = function e(t) {
            B.a.storeLoginCredentialsToBrowser(t), window.location.reload();
          }),
          (t.prototype.login = function e(t) {
            var n = this;
            this.setState({ loading: !0 });
            var o = t || {
                username_or_email: this.props.email,
                password: this.props.password,
              },
              r = {
                container: this.props.container,
                hybridTier: this.context.hybridTier,
                page: this.context.pageType,
              };
            Object(P.a)(o, r, this.props.seoUnauthExperiments).then(
              function () {
                n.handleLoginSuccess(o);
              },
              function (e) {
                e.api_error_code === T.a.INVALID_PASSWORD_ERROR_CODE
                  ? n.setState({
                      passwordValidationError: e.message,
                      loading: !1,
                    })
                  : e.api_error_code === T.a.INVALID_PASSWORD_FB_USER
                  ? n.setState({
                      facebookValidationError: e.message,
                      loading: !1,
                    })
                  : e.api_error_code === T.a.INVALID_PASSWORD_GOOGLE_USER
                  ? n.setState({ googleValidationError: e.message, loding: !1 })
                  : e.api_error_code === T.a.LOGIN_MFA_REQUIRED
                  ? (B.a.storeLoginCredentialsToBrowser(o),
                    n.props.onLoginWithMfa(e.data))
                  : n.setState({
                      emailValidationError: e.message,
                      loading: !1,
                    });
              },
            );
          }),
          (t.prototype.validateEmailAvailable = function e(t) {
            var n = this;
            this.setState({ loading: !0 });
            var o = this.context,
              r = o.country,
              a = o.hybridTier,
              i = o.pageType,
              s = o.userAgent;
            G.a
              .create("EmailExistsResource", { email: this.props.email })
              .callGet({ showError: !1 })
              .then(
                function (e) {
                  if (!1 === e.resource_response.data) {
                    if (!s.isMobile && Object(z.c)(r)) {
                      var o = Object(U.a)(n.props.age || "", n.ageValidators);
                      if (o)
                        return (
                          n.setState({ ageValidationError: o, loading: !1 }),
                          void Object(W.a)(
                            "unauth.login.error.ClIENT_ERROR.invalidage." + $,
                          )
                        );
                    }
                    var l = Object(U.a)(n.props.password, n.passwordValidators);
                    if (l)
                      return (
                        n.setState({ passwordValidationError: l, loading: !1 }),
                        void Object(W.a)(
                          "unauth.login.error.ClIENT_ERROR.malformpwd." + $,
                        )
                      );
                    n.setState({ emailValidationError: null, loading: !1 }),
                      Object(W.a)("unauth.signup_step_1.completed"),
                      s.isMobile ? n.props.onRegisterClick(t) : n.register();
                  } else {
                    var c = {
                        username_or_email: n.props.email,
                        password: n.props.password,
                      },
                      u = {
                        container: n.props.container,
                        hybridTier: a,
                        page: i,
                      };
                    Object(P.a)(c, u, n.props.seoUnauthExperiments).then(
                      function (e) {
                        n.handleLoginSuccess(c);
                      },
                      function (e) {
                        n.handleLoginFailure(e, c);
                      },
                    );
                  }
                },
                function () {
                  var e = A.a._(
                    "Hmm...that doesn't look like an email address",
                  );
                  n.setState({ emailValidationError: e });
                },
              );
          }),
          (t.prototype.render = function e() {
            var t = this.props,
              n = t.additionalChildren,
              o = t.dark,
              r = t.showHybridStyle,
              a = t.shouldRenderHybridSideBarForm,
              i = r ? Z.hybridSignupContainer : Z.signupContainer,
              s = O.a.createElement(Q.c, {
                modalType: this.state.accountRecoveryModalType,
                updateAccountRecoveryModal: this.updateAccountRecoveryModal,
                email: this.props.email,
                onLoginWithMfa: this.props.onLoginWithMfa,
              });
            return a
              ? O.a.createElement(
                  "div",
                  { style: i },
                  s,
                  this.renderButtons(),
                  n,
                  O.a.createElement(D.a, { dark: o, dynamicTopMargin: !0 }),
                )
              : O.a.createElement(
                  "div",
                  { style: i },
                  s,
                  this.renderButtons(),
                  O.a.createElement(D.a, { dark: o }),
                  n,
                );
          }),
          t
        );
      })(S.Component);
    ne.contextTypes = {
      country: j.a.string,
      locale: j.a.string.isRequired,
      userAgent: j.a.shape({ isMobile: j.a.bool.isRequired }).isRequired,
      hybridTier: j.a.string,
      pageType: j.a.string,
    };
    var oe = Object(K.withRouter)(Object(Y.b)(ne)),
      re = n("/2tF"),
      ae = n("ieR2"),
      ie = n("+XcA"),
      se = n("MQ2h"),
      le = n.n(se),
      ce = n("WjSu"),
      ue = 250,
      pe = {
        customGender: {
          backgroundColor: "#fff",
          borderRadius: "6px",
          boxShadow:
            "0 0 2px rgba(0, 0, 0, 0.38), 0 1px 3px rgba(0, 0, 0, 0.32)",
          textAlign: "left",
          top: "28px",
          padding: "8px 14px",
          zIndex: "10",
          position: "absolute",
          color: "rgb(33, 25, 34)",
        },
        customGenderInFlyout: {
          backgroundColor: "#fff",
          textAlign: "left",
          color: "rgb(33, 25, 34)",
          top: "0",
          padding: "8px 14px",
          borderRadius: "0px",
          zIndex: "10",
        },
        customGenderHeader: { fontSize: "1.5em", marginBottom: "7px" },
        customGenderText: { fontSize: "12px" },
        customGenderFormInput: {
          display: "inline-block",
          width: "250px",
          height: "36px",
        },
        customGenderFormInputInFlyout: {
          display: "inline-block",
          height: "36px",
          width: "236px",
        },
        customGenderFormButton: {
          display: "inline-block",
          width: "100px",
          marginTop: "0px",
          float: "right",
        },
        germanyCustomGenderText: {
          fontSize: "14px",
          fontWeight: "bold",
          lineHeight: "1.43",
          letterSpacing: "-0.3px",
        },
        closeButton: { float: "right" },
      },
      de = (function (e) {
        function t() {
          var n, o, r;
          i(this, t);
          for (var a = arguments.length, l = Array(a), c = 0; c < a; c++)
            l[c] = arguments[c];
          return (
            (n = o = s(this, e.call.apply(e, [this].concat(l)))),
            (o.state = { customGender: "" }),
            (o._hasFocus = !0),
            (o._mouseOutTimer = null),
            (r = n),
            s(o, r)
          );
        }
        return (
          l(t, e),
          (t.prototype.componentWillUnmount = function e() {
            this._mouseOutTimer && clearTimeout(this._mouseOutTimer);
          }),
          (t.prototype.renderGermanyCustomGenderText = function e() {
            return O.a.createElement(
              "p",
              { style: pe.germanyCustomGenderText },
              A.a._(
                "Tell us what gender you identify with to help us provide better recommendations for you.",
              ),
            );
          }),
          (t.prototype.renderCustomGenderText = function e() {
            return O.a.createElement(
              "div",
              null,
              O.a.createElement(
                "h2",
                { style: pe.customGenderHeader },
                A.a._("Tell us a little about you"),
              ),
              O.a.createElement(
                "p",
                { style: pe.customGenderText },
                A.a._(
                  "Knowing your gender helps us show you better search results and recommendations. Choose male or female, or customize your gender:",
                ),
              ),
            );
          }),
          (t.prototype.renderDesktopInputContainer = function e() {
            var t = this;
            return O.a.createElement(
              J.b,
              { display: "flex", alignItems: "center" },
              this.renderInputField(),
              O.a.createElement(
                J.b,
                { width: 100, display: "inlineBlock", marginLeft: 5 },
                O.a.createElement(J.c, {
                  size: "sm",
                  accessibilityLabel: A.a._(
                    "Save your custom gender",
                    "Accessibility label to save your custom gender",
                  ),
                  onClick: function e(n) {
                    t.props.onGenderSaved(t.state.customGender);
                  },
                  text: A.a._("Save"),
                  color: "red",
                  disabled: !this.state.customGender,
                }),
              ),
            );
          }),
          (t.prototype.renderMobileInputContainer = function e() {
            var t = this,
              n = Object.assign({}, pe.customGenderFormButton, {
                marginTop: "5px",
              });
            return O.a.createElement(
              "div",
              null,
              this.renderInputField(),
              O.a.createElement(
                re.a,
                {
                  accessibilityLabel: A.a._(
                    "Save your custom gender",
                    "Accessibility label to save your custom gender",
                  ),
                  className: "red saveButton",
                  onClick: function e(n) {
                    t.props.onGenderSaved(t.state.customGender);
                  },
                  styleOverrides: n,
                },
                A.a._("Save"),
              ),
            );
          }),
          (t.prototype.renderInputField = function e() {
            var t = this,
              n = this.props.useGestaltFlyout
                ? pe.customGenderFormInputInFlyout
                : pe.customGenderFormInput;
            return O.a.createElement(ie.a, {
              fieldsetStyleOverrides: n,
              focused: !0,
              id: "customGender",
              inputStyleOverrides: n,
              name: "custom_gender",
              onChange: function e(n) {
                t.setState({ customGender: n.currentTarget.value });
              },
              placeholder: A.a._("Custom Gender"),
              type: "text",
              onFocus: function e() {
                (t._hasFocus = !0),
                  t._mouseOutTimer &&
                    (clearTimeout(t._mouseOutTimer), (t._mouseOutTimer = null));
              },
              onBlur: function e() {
                t._hasFocus = !1;
              },
            });
          }),
          (t.prototype.render = function e() {
            var t = this,
              n = this.props.useGestaltFlyout
                ? pe.customGenderInFlyout
                : pe.customGender,
              o = "Gender__customGenderTooltipText";
            return (
              this.context.userAgent.isMobile
                ? ((n = Object.assign({}, n, {
                    width: "250px",
                    right: "-75px",
                  })),
                  (o = "Gender__customGenderTooltipMobile"))
                : (n = Object.assign({}, n, {
                    width: "375px",
                    left: "-366px",
                  })),
              O.a.createElement(
                "div",
                {
                  className: o,
                  "data-test-customGenderTooltip": !0,
                  "data-test-id": "customGenderTooltip",
                  onMouseOver: function e() {
                    t._mouseOutTimer &&
                      (clearTimeout(t._mouseOutTimer),
                      (t._mouseOutTimer = null));
                  },
                  onMouseOut: function e() {
                    t._hasFocus ||
                      (t._mouseOutTimer && clearTimeout(t._mouseOutTimer),
                      (t._mouseOutTimer = setTimeout(function () {
                        t.props.onClose();
                      }, 250)));
                  },
                  style: n,
                },
                O.a.createElement(
                  "div",
                  { style: pe.closeButton },
                  O.a.createElement(J.n, {
                    accessibilityLabel: A.a._(
                      "Close custom gender",
                      "accessible label for closing the custom gender dialog",
                    ),
                    icon: "cancel",
                    onClick: this.props.onClose,
                  }),
                ),
                "DE" === ce.a.instance.country
                  ? this.renderGermanyCustomGenderText()
                  : this.renderCustomGenderText(),
                this.context.userAgent.isMobile
                  ? this.renderMobileInputContainer()
                  : this.renderDesktopInputContainer(),
              )
            );
          }),
          t
        );
      })(S.Component);
    de.contextTypes = {
      userAgent: j.a.shape({ isMobile: j.a.bool.isRequired }).isRequired,
    };
    var ge = de,
      he = c,
      me = (function (e) {
        function t() {
          var n, o, r;
          u(this, t);
          for (var a = arguments.length, i = Array(a), s = 0; s < a; s++)
            i[s] = arguments[s];
          return (
            (n = o = p(this, e.call.apply(e, [this].concat(i)))),
            (o._customGender = ""),
            (r = n),
            p(o, r)
          );
        }
        return (
          d(t, e),
          (t.prototype.renderDescription = function e() {
            var t = A.a._(
              "Knowing your gender helps us show you better search results and recommendations. Choose male or female, or customize your gender:",
            );
            return (
              "DE" === this.context.country &&
                (t = A.a._(
                  "Tell us what gender you identify with to help us provide better recommendations for you.",
                )),
              O.a.createElement(J.H, { size: "sm" }, t)
            );
          }),
          (t.prototype.render = function e() {
            var t = this;
            return O.a.createElement(
              J.b,
              { color: "white", padding: 7, position: "relative" },
              O.a.createElement(
                J.b,
                null,
                O.a.createElement(
                  J.b,
                  { marginRight: 11 },
                  O.a.createElement(
                    J.H,
                    { bold: !0, size: "xl" },
                    A.a._("Tell us a little bit about you."),
                  ),
                ),
              ),
              O.a.createElement(
                J.b,
                { marginRight: 3, marginTop: 4 },
                this.renderDescription(),
              ),
              O.a.createElement(
                J.b,
                { marginTop: 4 },
                O.a.createElement(J.J, {
                  id: "customGender",
                  name: "custom_gender",
                  placeholder: A.a._("Custom gender"),
                  onChange: function e(n) {
                    var o = n.value;
                    t._customGender = o;
                  },
                }),
              ),
              O.a.createElement(
                J.b,
                { marginTop: 4 },
                O.a.createElement(J.c, {
                  accessibilityLabel: A.a._(
                    "Save your custom gender",
                    "Accessibility label to save your custom gender",
                  ),
                  color: "red",
                  onClick: function e() {
                    t.props.onGenderSaved(t._customGender);
                  },
                  size: "md",
                  text: A.a._("Save"),
                }),
              ),
              O.a.createElement(
                J.b,
                {
                  position: "absolute",
                  marginTop: 4,
                  marginRight: 4,
                  right: !0,
                  top: !0,
                },
                O.a.createElement(J.n, {
                  accessibilityLabel: A.a._(
                    "Close custom gender",
                    "accessible label for closing the custom gender dialog",
                  ),
                  icon: "cancel",
                  onClick: this.props.onClose,
                }),
              ),
            );
          }),
          t
        );
      })(S.Component);
    me.contextTypes = { country: j.a.string };
    var fe = me,
      be = n("l6Jx"),
      _e = n("XzpH"),
      ye = {
        genderField: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          margin: "0 10px 0 0",
          display: "inline-block",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          padding: "15px 0",
        },
        radio: {
          height: "auto",
          padding: "10px",
          marginRight: "8px",
          fontSize: "12px",
        },
        text: { verticalAlign: "middle", textAlign: "center", color: "#555" },
        customGenderText: {
          position: "relative",
          display: "inline-block",
          overflowWrap: "break-word",
          width: "268px",
        },
        infoButton: {
          width: "14px",
          height: "14px",
          cursor: "pointer",
          verticalAlign: "middle",
          display: "inline-block",
          position: "relative",
        },
        infoWrapper: { display: "inline-block", position: "relative" },
        clearButton: {
          cursor: "pointer",
          verticalAlign: "middle",
          display: "inline-block",
        },
        closeButton: { float: "right" },
        wrapperStyles: { top: "10px" },
      },
      Ee = "male",
      ve = "female",
      we = "custom",
      Se = "gender",
      Oe = O.a.createElement(
        "legend",
        { className: "visuallyHidden" },
        "Select your gender",
      ),
      Ce = (function (e) {
        function t() {
          var n, o, r;
          g(this, t);
          for (var a = arguments.length, i = Array(a), s = 0; s < a; s++)
            i[s] = arguments[s];
          return (
            (n = o = h(this, e.call.apply(e, [this].concat(i)))),
            (o.state = {
              customGenderChecked: !1,
              showCustomGenderTooltip: !1,
            }),
            (o.onToggleCustomGenderTooltip = function () {
              o.setState({
                customGenderChecked: !0,
                showCustomGenderTooltip: !o.state.showCustomGenderTooltip,
              }),
                o.clearGenderValue();
            }),
            (o.onRemoveCustomGender = function () {
              o.clearGenderValue();
            }),
            (o.closeCustomGenderTooltip = function () {
              o.setState({ showCustomGenderTooltip: !1 });
            }),
            (o.tooltipMessage = function () {
              return A.a._("How would you describe yourself?");
            }),
            (o.renderTooltip = function (e, t) {
              if (e && !t)
                return O.a.createElement(be.a, {
                  anchor: o._input,
                  message: o.tooltipMessage(),
                });
            }),
            (r = n),
            h(o, r)
          );
        }
        return (
          m(t, e),
          (t.prototype.clearGenderValue = function e() {
            this.props.onGenderChange({ target: { value: void 0 } });
          }),
          (t.prototype.renderGestaltRadio = function e(t, n) {
            var o = this,
              r = this.props,
              a = r.customGenderFlyoutAnchor,
              i = r.gender,
              s = r.genderError,
              l = r.useInlineCustomGenderTooltip,
              c = this.state.showCustomGenderTooltip,
              u = null;
            if (!f(i) && !l) return this.renderCustomGenderLabel(n);
            var p =
              this.state.customGenderChecked &&
              this.props.gender.toLowerCase() !== Ee &&
              this.props.gender.toLowerCase() !== ve;
            return (
              c &&
                p &&
                (u = l
                  ? O.a.createElement(
                      "div",
                      {
                        className: "inline-block",
                        ref: function e(t) {
                          o._customGenderTextField = t;
                        },
                      },
                      O.a.createElement(he, {
                        onGenderSaved: function e(t) {
                          o.props.onGenderChange({ target: { value: t } });
                        },
                      }),
                    )
                  : O.a.createElement(
                      J.j,
                      {
                        anchor: a || this._customGenderButton,
                        onDismiss: this.closeCustomGenderTooltip,
                        size: "md",
                        idealDirection: "down",
                      },
                      O.a.createElement(fe, {
                        onClose: this.closeCustomGenderTooltip,
                        onGenderSaved: function e(t) {
                          o.closeCustomGenderTooltip(),
                            o.props.onGenderChange({ target: { value: t } });
                        },
                      }),
                    )),
              O.a.createElement(
                J.b,
                null,
                O.a.createElement(
                  "fieldset",
                  {
                    ref: function e(t) {
                      o._input = t;
                    },
                    style: { width: "100%" },
                    onBlur: this.props.onBlur,
                  },
                  O.a.createElement(
                    "legend",
                    { className: "visuallyHidden" },
                    A.a._("Select your gender"),
                  ),
                  O.a.createElement(
                    J.b,
                    {
                      role: "list",
                      display: "flex",
                      direction: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    O.a.createElement(
                      J.b,
                      {
                        alignItems: "center",
                        paddingY: 4,
                        display: "flex",
                        direction: "row",
                      },
                      O.a.createElement(
                        J.b,
                        null,
                        O.a.createElement(J.y, {
                          checked: this.props.gender.toLowerCase() === Ee,
                          id: Ee,
                          name: Se,
                          onChange: function e(t) {
                            var n = t.event;
                            o.closeCustomGenderTooltip(),
                              o.props.onGenderChange(n);
                          },
                          size: "sm",
                          value: Ee,
                        }),
                      ),
                      O.a.createElement(
                        J.b,
                        { paddingX: 2, flex: "grow" },
                        O.a.createElement(
                          J.p,
                          { htmlFor: Ee },
                          O.a.createElement(
                            J.H,
                            { bold: !0, size: "md" },
                            A.a._("Male"),
                          ),
                        ),
                      ),
                    ),
                    O.a.createElement(
                      J.b,
                      {
                        alignItems: "center",
                        paddingY: 4,
                        display: "flex",
                        direction: "row",
                      },
                      O.a.createElement(
                        J.b,
                        null,
                        O.a.createElement(J.y, {
                          checked: this.props.gender.toLowerCase() === ve,
                          id: ve,
                          name: Se,
                          onChange: function e(t) {
                            var n = t.event;
                            o.closeCustomGenderTooltip(),
                              o.props.onGenderChange(n);
                          },
                          size: "sm",
                          value: ve,
                        }),
                      ),
                      O.a.createElement(
                        J.b,
                        { paddingX: 2, flex: "grow" },
                        O.a.createElement(
                          J.p,
                          { htmlFor: ve },
                          O.a.createElement(
                            J.H,
                            { bold: !0, size: "md" },
                            A.a._("Female"),
                          ),
                        ),
                      ),
                    ),
                    O.a.createElement(
                      J.b,
                      {
                        alignItems: "center",
                        paddingY: 4,
                        display: "flex",
                        direction: "row",
                      },
                      O.a.createElement(
                        J.b,
                        null,
                        O.a.createElement(J.y, {
                          checked: p,
                          id: we,
                          name: Se,
                          onChange: this.onToggleCustomGenderTooltip,
                          size: "sm",
                          value: we,
                        }),
                      ),
                      O.a.createElement(
                        "div",
                        {
                          className: "inline-block",
                          ref: function e(t) {
                            o._customGenderButton = t;
                          },
                        },
                        O.a.createElement(
                          J.b,
                          { paddingX: 2, flex: "grow" },
                          O.a.createElement(
                            J.p,
                            { htmlFor: we },
                            O.a.createElement(
                              J.H,
                              { bold: !0, size: "md" },
                              A.a._("Custom"),
                            ),
                          ),
                        ),
                      ),
                      s
                        ? O.a.createElement(
                            J.j,
                            {
                              anchor: this._customGenderTextField
                                ? this._customGenderTextField
                                : this._customGenderButton,
                              color: "orange",
                              idealDirection: "right",
                              onDismiss: this.props.onBlur,
                            },
                            O.a.createElement(
                              J.b,
                              { padding: 3 },
                              O.a.createElement(
                                J.H,
                                { bold: !0, color: "white" },
                                O.a.createElement(
                                  "span",
                                  null,
                                  this.tooltipMessage(),
                                ),
                              ),
                            ),
                          )
                        : null,
                    ),
                  ),
                ),
                u,
              )
            );
          }),
          (t.prototype.renderRadio = function e(t, n) {
            var o = this,
              r = this.props,
              a = r.gender,
              i = r.genderError,
              s = this.state.showCustomGenderTooltip;
            if (!f(a)) return this.renderCustomGenderLabel(n);
            var l = null;
            s &&
              (l = O.a.createElement(ge, {
                onClose: function e(t) {
                  o.setState({ showCustomGenderTooltip: !1 });
                },
                onGenderSaved: function e(t) {
                  o.setState({ showCustomGenderTooltip: !1 }),
                    o.props.onGenderChange({ target: { value: t } });
                },
              }));
            var c =
              this.state.customGenderChecked &&
              this.props.gender.toLowerCase() !== Ee &&
              this.props.gender.toLowerCase() !== ve;
            return O.a.createElement(
              "fieldset",
              {
                ref: function e(t) {
                  o._input = t;
                },
                style: { width: "100%" },
                onBlur: this.props.onBlur,
              },
              Oe,
              O.a.createElement(
                "label",
                { className: "Gender__tooltip", style: ye.genderField },
                O.a.createElement("input", {
                  checked: this.props.gender.toLowerCase() === Ee,
                  name: Se,
                  onChange: this.props.onGenderChange,
                  style: ye.radio,
                  type: "radio",
                  value: Ee,
                }),
                O.a.createElement("span", { style: t }, A.a._("Male")),
              ),
              O.a.createElement(
                "label",
                { className: "Gender__tooltip", style: ye.genderField },
                O.a.createElement("input", {
                  checked: this.props.gender.toLowerCase() === ve,
                  name: Se,
                  onChange: this.props.onGenderChange,
                  style: ye.radio,
                  type: "radio",
                  value: ve,
                }),
                O.a.createElement("span", { style: t }, A.a._("Female")),
              ),
              O.a.createElement(
                "div",
                {
                  ref: function e(t) {
                    o._customGenderButton = t;
                  },
                  style: ye.infoWrapper,
                },
                O.a.createElement(
                  "label",
                  { className: "Gender__tooltip", style: ye.genderField },
                  O.a.createElement("input", {
                    checked: c,
                    name: Se,
                    onClick: this.onToggleCustomGenderTooltip,
                    style: ye.radio,
                    type: "radio",
                    value: we,
                  }),
                  O.a.createElement(
                    "span",
                    { style: t },
                    A.a._("Custom"),
                    O.a.createElement(
                      "div",
                      { style: { fontSize: "12px" } },
                      i && !s
                        ? O.a.createElement(_e.a, {
                            message: "<b>" + this.tooltipMessage() + "</b>",
                            customWrapperStyles: ye.wrapperStyles,
                          })
                        : null,
                    ),
                  ),
                ),
              ),
              l,
            );
          }),
          (t.prototype.renderCustomGenderLabel = function e(t) {
            return O.a.createElement(
              "div",
              null,
              O.a.createElement(
                "fieldset",
                null,
                O.a.createElement(
                  "label",
                  { style: ye.genderField },
                  O.a.createElement(
                    "span",
                    {
                      "data-test-customGenderSpan": !0,
                      "data-test-id": "customGenderSpan",
                      style: t,
                    },
                    this.props.gender,
                  ),
                ),
                O.a.createElement(
                  "a",
                  {
                    className: "Gender__iconSearchClear",
                    onClick: this.onRemoveCustomGender,
                    style: ye.clearButton,
                  },
                  O.a.createElement(J.m, {
                    accessibilityLabel: A.a._(
                      "clear custom gender",
                      "accessible label for icon",
                    ),
                    icon: "clear",
                    inline: !0,
                    size: 15,
                  }),
                ),
              ),
            );
          }),
          (t.prototype.render = function e() {
            var t = ye.text;
            this.props.dark || (t = Object.assign({}, t, { color: "#fff" }));
            var n = Object.assign({}, t, ye.customGenderText);
            return this.props.useGestalt
              ? this.renderGestaltRadio(t, n)
              : this.renderRadio(t, n);
          }),
          t
        );
      })(S.Component);
    Ce.defaultProps = { gender: "" };
    var xe = Ce,
      Te = {
        backLink: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          color: "#555",
          fontSize: "14px",
          fontWeight: "600",
          marginTop: "15px",
          paddingBottom: "15px",
          cursor: "pointer",
        },
        businessLink: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          color: "#555",
          margin: "22px 0 0",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "16px",
          display: "block",
          width: "100%",
          textAlign: "center",
        },
        comeOnInButton: { width: "100%" },
        secondarySignupForm: { margin: "0 auto", width: "268px" },
        emailText: {
          color: "#555",
          marginBottom: "10px",
          display: "inline-block",
        },
        nameInput: { dispay: "inline", width: "75%", float: "left" },
        ageInput: { dispay: "inline", width: "22%" },
      },
      ke = O.a.createElement(
        J.b,
        {
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          marginTop: 2,
          marginBottom: 2,
        },
        O.a.createElement(J.b, { width: "70%" }, O.a.createElement(J.i, null)),
      ),
      Re = (function (e) {
        function t(n) {
          b(this, t);
          var o = _(this, e.call(this, n));
          (o.handleButtonClick = function (e) {
            e.preventDefault();
            var t = o.props,
              n = t.age,
              r = t.gender,
              a = t.name,
              i = Object(U.a)(a, o.nameValidators);
            if (i)
              return (
                ae.b.localStorage.setItem("signupTriedSkipInputName", !0),
                void o.setState({
                  validationError: i,
                  nameError: !0,
                  ageError: !1,
                  genderError: !1,
                })
              );
            (i = Object(U.a)(n || "", o.ageValidators))
              ? o.setState({
                  validationError: i,
                  nameError: !1,
                  ageError: !0,
                  genderError: !1,
                })
              : (i = Object(U.a)(r, o.genderValidators))
              ? o.setState({
                  validationError: i,
                  nameError: !1,
                  ageError: !1,
                  genderError: !0,
                })
              : o.register();
          }),
            (o.redirectAfterSignup = function (e) {
              Object(W.a)("unauth.signup_step_2.completed"),
                B.a.handleSignupRedirect(
                  o.props.nextUrlParam,
                  o.props.disablePostSignupNextUrl,
                );
            }),
            (o.register = function () {
              o.setState({ loading: !0 });
              var e = {
                container: o.props.container,
                email: o.props.email,
                password: o.props.password,
                age: o.props.age,
                country: o.context.country,
                signupSource: o.props.signupSource,
                hybridTier: o.context.hybridTier,
                page: o.context.pageType,
              };
              if (o.props.name) {
                var t = o.props.name.trim().split(" ");
                "" === t[0] && t.shift(),
                  t.length > 0 && (e.first_name = t[0] || ""),
                  t.length > 1 && (e.last_name = t[1] || "");
              }
              o.props.gender &&
                (f(o.props.gender)
                  ? (e.gender = o.props.gender.toLowerCase())
                  : (e.custom_gender = o.props.gender)),
                Object(W.a)("multi_step_step_2_complete"),
                V.a
                  .register(e, o.props.seoUnauthExperiments)
                  .then(o.redirectAfterSignup, function (e) {
                    e.api_error_code === T.a.API_ERROR_UNDERAGE_REGISTER_ATTEMPT
                      ? (Object(x.a)("/restricted/age/", !1),
                        o.setState({ loading: !1 }))
                      : (o.setState({
                          validationError: null,
                          nameError: !1,
                          ageError: !1,
                          loading: !1,
                        }),
                        Object(q.a)(
                          A.a._("Sorry! Something went wrong on our end."),
                        ));
                  });
            }),
            (o.state = {
              nameError: !1,
              ageError: !1,
              genderError: !1,
              validationError: null,
              loading: !1,
            });
          var r = A.a._("And your name is...?");
          return (
            (o.nameValidators = [
              Object(X.q)({ message: r }),
              Object(X.m)({ message: r }),
            ]),
            (o.ageValidators = [
              Object(X.a)({ message: A.a._("Please enter a valid number.") }),
            ]),
            (o.genderValidators = [
              Object(X.q)({ message: A.a._("And your gender is...?") }),
            ]),
            o
          );
        }
        return (
          y(t, e),
          (t.prototype.handleBlur = function e(t) {
            "name" === t && !0 === this.state.nameError
              ? this.setState({ nameError: !1, validationError: null })
              : "age" === t && !0 === this.state.ageError
              ? this.setState({ ageError: !1, validationError: null })
              : "gender" === t &&
                !0 === this.state.genderError &&
                this.setState({ genderError: !1 });
          }),
          (t.prototype.renderBusinessLink = function e(t) {
            var n = "/business/create";
            return O.a.createElement(
              "div",
              null,
              O.a.createElement(
                "a",
                { href: "/business/create", style: t, target: "_blank" },
                A.a._("Continue as a business"),
              ),
            );
          }),
          (t.prototype.renderDefaultAgeGender = function e(t, n) {
            var o = this.props,
              r = o.inputStyleOverrides,
              a = o.name,
              i = o.onAgeChange,
              s = o.onNameChange,
              l = o.seoUnauthExperiments,
              c = null,
              u = null,
              p = A.a._("Full name"),
              d = A.a._("Age");
            return (
              (l.v2GetGroup("guess_name_with_email") || "").startsWith(
                "enabled",
              ) &&
                ((c = A.a._("Full name")),
                (u = A.a._("Age")),
                (p = null),
                (d = null)),
              O.a.createElement(
                "div",
                null,
                O.a.createElement(ie.a, {
                  fieldsetStyleOverrides: t,
                  focused: !0,
                  hasError: this.state.nameError,
                  id: "name",
                  inputFieldTitle: c,
                  inputStyleOverrides: r,
                  name: "full_name",
                  onBlur: this.handleBlur.bind(this, "name"),
                  onChange: s,
                  placeholder: p,
                  tooltip: this.state.validationError,
                  type: "text",
                  useGestalt: !0,
                  idealErrorDirection: "up",
                  value: a,
                }),
                O.a.createElement(ie.a, {
                  fieldsetStyleOverrides: n,
                  hasError: this.state.ageError,
                  id: "age",
                  inputFieldTitle: u,
                  inputStyleOverrides: r,
                  name: "age",
                  onBlur: this.handleBlur.bind(this, "age"),
                  onChange: i,
                  placeholder: d,
                  tooltip: this.state.validationError,
                  type: "text",
                  useGestalt: !0,
                }),
              )
            );
          }),
          (t.prototype.render = function e() {
            var t = this,
              n = Te.backLink,
              o = Te.businessLink;
            this.props.dark ||
              ((n = Object.assign({}, n, { color: "#fff" })),
              (o = Object.assign({}, o, { color: "#fff" })));
            var r = Te.ageInput,
              a = Te.nameInput;
            this.context.userAgent.isMobile
              ? ((a = Object.assign({}, a, {
                  marginBottom: "5px",
                  marginRight: "5px",
                })),
                (r = Object.assign({}, r, { float: "left" })))
              : (r = Object.assign({}, r, { float: "right" }));
            var i = A.a._("Sign up"),
              s = this.renderDefaultAgeGender(a, r),
              l = (
                this.props.seoUnauthExperiments.v2GetGroup(
                  "web_unauth_partner_signup",
                ) || ""
              ).startsWith("enabled");
            return O.a.createElement(
              "div",
              null,
              O.a.createElement(
                "div",
                {
                  style: { display: "inline-block" },
                  ref: function e(n) {
                    t._subtitleEmail = n;
                  },
                },
                O.a.createElement(
                  J.b,
                  { marginBottom: 3 },
                  O.a.createElement(
                    J.H,
                    {
                      align: "center",
                      color: this.props.dark ? "darkGray" : "white",
                    },
                    this.props.email,
                  ),
                ),
              ),
              O.a.createElement(
                "form",
                {
                  method: "post",
                  noValidate: !0,
                  onSubmit: function e(n) {
                    n.preventDefault(), t.handleButtonClick(n);
                  },
                  style: Te.secondarySignupForm,
                },
                s,
                O.a.createElement(xe, {
                  customGenderFlyoutAnchor: this._subtitleEmail,
                  dark: this.props.dark,
                  gender: this.props.gender || "",
                  genderError: this.state.genderError,
                  onBlur: function e() {
                    return t.handleBlur("gender");
                  },
                  onGenderChange: this.props.onGenderChange,
                  tooltip: this.state.validationError,
                  useGestalt: !0,
                  useInlineCustomGenderTooltip: !0,
                }),
                O.a.createElement(
                  re.a,
                  {
                    className: "red comeOnInButton",
                    loading: this.state.loading,
                    styleOverrides: Te.comeOnInButton,
                    type: "submit",
                  },
                  O.a.createElement("div", null, i),
                ),
              ),
              O.a.createElement(
                "div",
                {
                  onClick: this.props.onBackClick,
                  role: "button",
                  style: n,
                  tabIndex: "0",
                },
                A.a._("Back"),
              ),
              !l && ke,
              !l && this.renderBusinessLink(o),
              this.props.additionalChildren,
            );
          }),
          t
        );
      })(S.Component);
    Re.contextTypes = {
      country: j.a.string,
      pageType: j.a.string,
      userAgent: j.a.shape({ isMobile: j.a.bool.isRequired }).isRequired,
      hybridTier: j.a.string,
    };
    var Ae = Object(se.compose)(Y.b)(Re),
      Pe = {
        signup: { margin: "0 auto", position: "relative", textAlign: "center" },
      },
      Be = (function (e) {
        function t() {
          var n, o, r;
          E(this, t);
          for (var a = arguments.length, i = Array(a), s = 0; s < a; s++)
            i[s] = arguments[s];
          return (
            (n = o = v(this, e.call.apply(e, [this].concat(i)))),
            (o.state = { step: "signup" }),
            (r = n),
            v(o, r)
          );
        }
        return (
          w(t, e),
          (t.prototype.setModalType = function e(t, n) {
            this.setState({ step: t }),
              this.props.onStepChange && this.props.onStepChange(t);
          }),
          (t.prototype.showStep = function e(t) {
            return "signup" === t
              ? O.a.createElement(oe, {
                  additionalChildren:
                    this.props.additionalEmailPasswordChildren,
                  age: this.props.age || this.state.googleAge,
                  container: this.props.container,
                  dark: this.props.dark,
                  disablePostSignupNextUrl: this.props.disablePostSignupNextUrl,
                  email: this.props.email,
                  emailValidationError: this.props.emailValidationError,
                  loadingIndicatorCallback: this.props.loadingIndicatorCallback,
                  name: this.props.name,
                  newEmail: this.state.newEmail,
                  nextUrlParam: this.props.nextUrlParam,
                  passwordValidationError: this.props.passwordValidationError,
                  inputStyleOverrides: this.props.inputStyleOverrides,
                  onAgeChange: this.props.onAgeChange,
                  onEmailChange: this.props.onEmailChange,
                  onFBPhoneOnlyConnectVerified:
                    this.props.onFBPhoneOnlyConnectVerified,
                  onSocialConnectVerified: this.props.onSocialConnectVerified,
                  onLoginWithMfa: this.props.onLoginWithMfa,
                  onPasswordChange: this.props.onPasswordChange,
                  onRegisterClick: this.setModalType.bind(
                    this,
                    "age_and_gender",
                  ),
                  password: this.props.password,
                  setNameFromEmail: this.props.setNameFromEmail,
                  shouldRenderHybridSideBarForm:
                    this.props.shouldRenderHybridSideBarForm,
                  signupSeparatorContinuous:
                    this.props.signupSeparatorContinuous,
                  signupSource: this.props.signupSource,
                  sm: this.props.sm,
                })
              : "age_and_gender" === t
              ? O.a.createElement(Ae, {
                  additionalChildren:
                    this.props.additionalNameAgeGenderChildren,
                  age: this.props.age || this.state.googleAge,
                  container: this.props.container,
                  dark: this.props.dark,
                  disablePostSignupNextUrl: this.props.disablePostSignupNextUrl,
                  email: this.props.email,
                  gender: this.props.gender,
                  inputStyleOverrides: this.props.inputStyleOverrides,
                  name: this.props.name,
                  nextUrlParam: this.props.nextUrlParam,
                  onAgeChange: this.props.onAgeChange,
                  onBackClick: this.setModalType.bind(this, "signup"),
                  onGenderChange: this.props.onGenderChange,
                  onNameChange: this.props.onNameChange,
                  password: this.props.password,
                  signupSource: this.props.signupSource,
                })
              : void 0;
          }),
          (t.prototype.render = function e() {
            return O.a.createElement(
              "div",
              {
                "data-test-signup": !0,
                "data-test-id": "signup",
                style: Pe.signup,
              },
              this.showStep(this.state.step),
            );
          }),
          t
        );
      })(S.Component);
    (Be.defaultProps = { dark: !0 }),
      (Be.contextTypes = {
        userAgent: j.a.shape({ isMobile: j.a.bool.isRequired }).isRequired,
      });
    var Le = (t.a = Be);
  },
  tvce: function (e, t, n) {
    "use strict";
    function o(e) {
      var t = {};
      return (
        e.forEach(function (e) {
          var n = i.b.localStorage.getItem(e);
          n &&
            ("signupInterestsPickerStartTime" === e
              ? (t.signupInterestsPickerTimeSpent = Date.now() - n)
              : (t[e] = n));
        }),
        JSON.stringify(t)
      );
    }
    function r() {
      return o([
        "signupInterestsPickerScrollDown",
        "signupInterestsPickerStartTime",
      ]);
    }
    function a() {
      return o([
        "signupTriedSkipInputName",
        "signupTriedSkipGender",
        "unauthTopicsFollowed",
      ]);
    }
    (t.a = r), (t.b = a);
    var i = n("ieR2");
  },
  yWAt: function (e, t, n) {
    "use strict";
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function i(e) {
      var t = e.css,
        n = Object.assign({}, re.separator, t);
      return d.a.createElement("div", { style: n });
    }
    function s(e) {
      var t = e.buttonColorOverride,
        n = e.buttonText,
        o = e.fullWidth,
        r = e.link,
        a = e.onClick,
        i = e.title,
        s = e.titleStylesOverride,
        l = e.useSmallButton,
        c = "darkGrey";
      t && (c = t);
      var u = ie.header;
      s && (u = Object.assign({}, u, s));
      var p = o
          ? Object.assign({}, ie.button, { width: "100%", marginTop: "0" })
          : ie.button,
        g = d.a.createElement(
          f.a,
          {
            className: c,
            href: r,
            onClick: a,
            styleOverrides: p,
            type: "button",
          },
          n,
        ),
        h = {};
      return (
        l &&
          ((u = Object.assign({}, u, { float: "left" })),
          (h = { margin: "0 auto", width: "fit-content" }),
          (g = d.a.createElement(
            "a",
            { onClick: a, style: { cursor: "pointer", marginLeft: "5px" } },
            n,
          ))),
        d.a.createElement(
          "div",
          { style: h },
          i && d.a.createElement("h5", { style: u }, i),
          g,
        )
      );
    }
    function l(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function c(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function u(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var p = n("d6ZO"),
      d = n.n(p),
      g = n("DUIN"),
      h = n("5tOk"),
      m = n("ylKE"),
      f = n("/2tF"),
      b = n("z8rO"),
      _ = n("CelS"),
      y = n("W/Cr"),
      E = n("sXYb"),
      v = n("P9bn"),
      w = n("BAXv"),
      S = n("a993"),
      O = n("Q4UA"),
      C = n("5JMz"),
      x = n("Wcb7"),
      T = n("12R3"),
      k = n("IaRT"),
      R = n.n(k),
      A = n("o4o0"),
      P = n("Krtm"),
      B = n("mjwP"),
      L = n("85jk"),
      I = n("Kqaz"),
      j = n("ok+N"),
      F = n("kc1m"),
      N = n("MQ2h"),
      G = n.n(N),
      U = n("/dip"),
      D = n("FGUD"),
      M = n("kzic"),
      W = n("dCTv"),
      V = n("UUel"),
      H = n("FrUj"),
      z = w.a.GEN.templateConst.settings.PASSWORD_RESET_URL,
      q = w.a.GEN.templateConst.settings.PARTNER_SITE_SIGNUP,
      K = "loginmodal",
      Y = {
        emailButtonStyles: {
          height: "40px",
          width: "100%",
          borderRadius: "2px",
        },
        emailButtonTextStyles: {
          fontFamily: F.a,
          textAlign: "center",
          fontSize: "15px",
          WebkitFontSmoothing: "auto",
        },
        spaceBetweenTextAndSocial: { height: "11px" },
        loginForm: {
          borderTop: "solid 1px #ccc",
          minHeight: "350px",
          padding: "20px 10px",
        },
        loginTitleContainer: { margin: "0 auto 25px" },
        loginTitle: {
          fontSize: "28px",
          fontWeight: "bold",
          letterSpacing: "-1px",
        },
        loginContainer: { margin: "0 auto", width: "268px" },
        loginFooterContainer: { marginTop: "15px", color: "#555" },
        socialButtonSeparator: { height: "5px" },
        verticalCenter: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        },
      },
      Q = (function (e) {
        function t(n, a) {
          o(this, t);
          var i = r(this, e.call(this, n, a));
          J.call(i),
            (i.state = {
              accountRecoveryModalType: null,
              emailValidationError: n.emailValidationError || null,
              passwordValidationError: n.passwordValidationError || null,
              facebookValidationError: null,
              googleValidationError: null,
              loading: !1,
              passwordFieldVisible: !1,
            });
          var s = y.a._(
              "You missed a spot! Don't forget to add your email or phone number.",
            ),
            l = y.a._(
              "Hmm...that doesn't look like an email address or phone number.",
            ),
            c = y.a._("Oh @*&#! No zany characters allowed.");
          i.emailValidators = [
            Object(H.q)({ message: s }),
            Object(H.e)({ message: l }),
          ];
          var u = y.a._("The password you entered is incorrect.");
          return (
            (i.passwordValidators = [
              Object(H.b)({ message: c }),
              Object(H.o)({
                shortPassStr: u,
                badPassStyle: u,
                samePasswordStr: u,
                blackPassStr: u,
              }),
            ]),
            i
          );
        }
        return (
          a(t, e),
          (t.prototype.componentDidMount = function e() {
            this.context.isAuthenticated &&
              2 !== this.context.loginState &&
              x.a.handleRedirect(this.props.nextUrlParam),
              T.a.setupPhoneAuth(this.context.locale);
          }),
          (t.prototype.componentWillReceiveProps = function e(t) {
            var n = t.emailValidationError,
              o = t.passwordValidationError,
              r = {};
            n !== this.props.emailValidationError
              ? (r = { emailValidationError: n })
              : o !== this.props.passwordValidationError &&
                (r = { passwordValidationError: o }),
              this.setState(r);
          }),
          (t.prototype.handleBlur = function e(t) {
            "password" === t &&
              this.setState({ passwordValidationError: null }),
              this.setState({
                facebookValidationError: null,
                googleValidationError: null,
              });
          }),
          (t.prototype.loginUser = function e(t) {
            var n = this;
            this.setState({ loading: !0 });
            var o = t || {
                username_or_email: this.props.email,
                password: this.props.password,
              },
              r = void 0,
              a = void 0,
              i = this.props,
              s = i.params,
              l = i.routes,
              c = l && l[l.length - 1];
            c &&
              c.authBundleLoader &&
              c.authResources &&
              (
                this.props.seoUnauthExperiments.getGroup(
                  "web_seamless_login_v2",
                ) || ""
              ).startsWith("enabled") &&
              ((r = {
                authResources: c.authResources,
                authBundleLoader: c.authBundleLoader,
              }),
              (a = s));
            var u = {
              container: this.props.container,
              hybridTier: this.context.hybridTier,
              page: this.context.pageType,
            };
            Object(C.a)(o, u, this.props.seoUnauthExperiments, !!r).then(
              function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.client_context,
                  i = e.resource_response;
                x.a.storeLoginCredentialsToBrowser(o);
                var s = n.props.nextUrlParam || x.a.defaultLoginRedirectUrl();
                if (r && t) {
                  var l = i.data.css_bundles;
                  Object(U.b)({
                    authContext: t,
                    cssBundles: l,
                    nextUrl: s,
                    routeParams: a,
                    authLoaderData: r,
                  });
                } else
                  x.a.storeLoginCredentialsToBrowser(o), x.a.handleRedirect(s);
              },
              function (e) {
                return n.handleLoginFailure(e, o);
              },
            );
          }),
          (t.prototype.render = function e() {
            var t = this,
              n = this.props,
              o = n.additionalChildren,
              r = n.email,
              a = n.shouldRenderHybridSideBarForm
                ? Object.assign({}, Y.loginFooterContainer, { marginTop: "3%" })
                : Y.loginFooterContainer;
            return d.a.createElement(
              "div",
              { style: Y.loginContainer },
              d.a.createElement(V.c, {
                modalType: this.state.accountRecoveryModalType,
                updateAccountRecoveryModal: this.updateAccountRecoveryModal,
                email: r,
                onLoginWithMfa: this.props.onLoginWithMfa,
              }),
              this.renderButtons(),
              o,
              d.a.createElement(
                "div",
                { style: a },
                d.a.createElement(
                  "a",
                  {
                    href: z + (r ? "?q=" + r : ""),
                    onClick: function e() {
                      return Object(L.a)("login_modal_forget_account");
                    },
                  },
                  y.a._("Forgot your password?"),
                ),
                d.a.createElement(
                  "div",
                  null,
                  d.a.createElement(
                    "span",
                    null,
                    y.a._("Are you a business? "),
                    d.a.createElement(
                      "a",
                      {
                        href: q,
                        target: "_blank",
                        onClick: function e() {
                          Object(L.a)("unauth.business_link.click"),
                            t.props.contextLog(101, {
                              component: 13096,
                              element: 10281,
                            });
                        },
                      },
                      y.a._("Get started here"),
                    ),
                  ),
                ),
              ),
            );
          }),
          t
        );
      })(p.Component),
      X = d.a.createElement(v.a, null),
      J = function e() {
        var t = this;
        (this.handleButtonClick = function (e) {
          var n = T.a.runPhoneValidators(
            t.props.email,
            t.context.locale,
            t._loginFacebookAccountKit.bind(t),
          );
          t.setState({
            facebookValidationError: null,
            googleValidationError: null,
          }),
            n &&
              ((n = Object(P.a)(t.props.email, t.emailValidators))
                ? (t.setState({ emailValidationError: n }),
                  Object(L.a)(
                    "unauth.login.error.ClIENT_ERROR.malformemail." + K,
                  ))
                : (t.setState({ emailValidationError: null }),
                  (n = Object(P.a)(t.props.password, t.passwordValidators))
                    ? (t.setState({ passwordValidationError: n }),
                      Object(L.a)(
                        "unauth.login.error.ClIENT_ERROR.malformpwd." + K,
                      ))
                    : (t.setState({ passwordValidationError: null }),
                      t.loginUser())));
        }),
          (this.updateAccountRecoveryModal = function (e) {
            return t.setState({ accountRecoveryModalType: e });
          }),
          (this.handleLoginFailure = function (e, n) {
            var o =
              e.http_status === w.a.RESPONSE_CODE_TOO_MANY_REQUESTS
                ? w.a.RESPONSE_CODE_TOO_MANY_REQUESTS
                : e.api_error_code;
            if (o === w.a.LOGIN_MFA_REQUIRED)
              return (
                Object(L.a)("multi_step_login"),
                x.a.storeLoginCredentialsToBrowser(n),
                void t.props.onLoginWithMfa(e.data)
              );
            if (!e.message)
              return (
                Object(D.a)(y.a._("Sorry! Something went wrong on our end.")),
                t.setState({ loading: !1 }),
                void Object(L.a)(
                  "unauth.login.error.SERVER_ERROR.unknown." + o + "." + K,
                )
              );
            var r = void 0;
            r = [].concat(V.a, [w.a.INVALID_PASSWORD_ERROR_CODE]).includes(o)
              ? V.d.includes(o)
                ? Object(B.a)({
                    api_error_code: o,
                    errorMessage: e.message,
                    handleTouch: function e() {
                      return t.updateAccountRecoveryModal(
                        V.e.PASSWORD_RESET_SENT,
                      );
                    },
                    source: "login",
                    userSearch: t.props.email,
                  })
                : e.message
              : o === w.a.LOGIN_HARD_BANNED_USER
              ? e.message +
                '<a href="/password/reset/" style="color: #bd081c; font: bold;" target="_blank">\n              ' +
                y.a._("Reset your password") +
                "</a>"
              : e.message;
            var a = void 0;
            (a =
              o === w.a.INVALID_PASSWORD_ERROR_CODE
                ? { passwordValidationError: r }
                : o === w.a.INVALID_PASSWORD_FB_USER
                ? { facebookValidationError: r }
                : o === w.a.INVALID_PASSWORD_GOOGLE_USER
                ? { googleValidationError: r }
                : { emailValidationError: r }),
              t.setState(
                Object.assign({ accountRecoveryModalType: V.b[o] }, a, {
                  loading: !1,
                }),
              );
          }),
          (this._loginFacebookAccountKit = function (e) {
            if (T.a.validateResponse(e)) {
              var n = { phone_number: t.props.email, fb_auth_code: e.code };
              t.loginUser(n);
            } else
              t.setState({
                emailValidationError: y.a._(
                  "Enter your email or phone number to try again.",
                ),
                loading: !1,
              });
          }),
          (this.handleEmailChange = function (e) {
            t.props.onEmailChange && t.props.onEmailChange(e);
          }),
          (this.renderSocialButtons = function () {
            return d.a.createElement(
              "div",
              null,
              !t.props.hideFacebookButton &&
                d.a.createElement(S.b, {
                  buttonText: y.a._("Continue with Facebook"),
                  container: t.props.container,
                  disablePostSignupNextUrl: t.props.disablePostSignupNextUrl,
                  loadingIndicatorCallback: t.props.loadingIndicatorCallback,
                  nextUrlParam: t.props.nextUrlParam,
                  onSocialConnectVerified: t.props.onSocialConnectVerified,
                  onLoginWithMfa: t.props.onLoginWithMfa,
                  tooltip: t.state.facebookValidationError,
                  useGestaltTooltip: !0,
                }),
              d.a.createElement("div", { style: Y.socialButtonSeparator }),
              !t.props.hideGoogleButton &&
                d.a.createElement(
                  "div",
                  {
                    ref: function e(n) {
                      t.googleButton = n;
                    },
                  },
                  d.a.createElement(O.b, {
                    container: t.props.container,
                    disablePostSignupNextUrl: t.props.disablePostSignupNextUrl,
                    nextUrlParam: t.props.nextUrlParam,
                    onLoginWithMfa: t.props.onLoginWithMfa,
                    onSocialConnectVerified: t.props.onSocialConnectVerified,
                    tooltip: t.state.googleValidationError,
                  }),
                ),
            );
          }),
          (this.renderRegisterForm = function () {
            var e = t.props,
              n = e.email,
              o = e.inputStyleOverrides,
              r = e.onPasswordChange,
              a = e.password;
            return d.a.createElement(A.a, {
              buttonText: y.a._("Log in"),
              disableEmailLogin: t.props.disableEmailLogin,
              email: n,
              emailText: y.a._("Email or phone number"),
              emailValidationError: t.state.emailValidationError,
              hidePasswordField: t.props.hidePasswordField,
              hideFacebookButton: t.props.hideFacebookButton,
              hideGoogleButton: t.props.hideGoogleButton,
              inputStyleOverrides: o,
              loading: t.state.loading,
              onButtonClick: t.handleButtonClick,
              onEmailBlur: t.handleBlur.bind(t, "email"),
              onEmailChange: t.handleEmailChange.bind(t),
              onPasswordBlur: t.handleBlur.bind(t, "password"),
              onPasswordChange: r,
              password: a,
              passwordText: y.a._("Password"),
              passwordValidationError: t.state.passwordValidationError,
              useExperimentalTextfield: !0,
              useGestalt: !0,
            });
          }),
          (this.renderHybridSideBarForm = function () {
            return d.a.createElement(
              "div",
              null,
              t.renderRegisterForm(),
              t.renderSocialButtons(),
              d.a.createElement(v.a, {
                dynamicMargin: t.props.shouldRenderHybridSideBarForm,
              }),
            );
          }),
          (this.renderOriginalForm = function () {
            return d.a.createElement(
              "div",
              null,
              t.renderRegisterForm(),
              !t.props.hidePasswordField && X,
              t.renderSocialButtons(),
            );
          }),
          (this.renderButtons = function () {
            return t.props.shouldRenderHybridSideBarForm
              ? t.renderHybridSideBarForm()
              : t.renderOriginalForm();
          });
      };
    (Q.defaultProps = { container: "unknown" }),
      (Q.contextTypes = {
        isAuthenticated: R.a.bool.isRequired,
        locale: R.a.string.isRequired,
        loginState: R.a.number,
        userAgent: R.a.shape({ isMobile: R.a.bool.isRequired }).isRequired,
        hybridTier: R.a.string,
        pageType: R.a.string,
      });
    var Z = Object(N.compose)(W.b, j.b, I.a, M.withRouter)(Q),
      $ = n("O734"),
      ee = n("nWYF"),
      te = n("rOKQ"),
      ne = n("ZtCB"),
      oe = n.n(ne),
      re = {
        separator: {
          borderBottom: "#dedede 1px solid",
          margin: "5px auto",
          width: "110px",
        },
      };
    i.defaultProps = { css: {} };
    var ae = n("sfmt"),
      ie = {
        header: { color: "#5a5a5a", fontWeight: 500, fontSize: "12px" },
        button: { width: "160px", fontSize: "14px", padding: "10px 20px" },
      },
      se = n("AVO4"),
      le = n("ieR2"),
      ce = n("FJZF"),
      ue = n("EAiy"),
      pe = n("+1LB"),
      de = n("Cjb7"),
      ge = n("+QQJ"),
      he = n("XELL"),
      me = n("gEaE"),
      fe = function e(t, n, o) {
        var r = {
            defaultSource: y.a._(
              "Sign up to see more",
              "sigup copy default includes pin click and scrolling",
            ),
            userFollow: y.a._(
              "Sign up to see more of this profile",
              "signup copy user follow",
            ),
            userProfilePage: y.a._(
              "Sign up to see more of this profile",
              "signup copy profile page",
            ),
            saveButton: y.a._("Sign up to see more", "signup copy save button"),
            signupButton: y.a._(
              "Sign up to see more",
              "signup copy signup button",
            ),
            homePage: y.a._("Welcome to Pinterest"),
          },
          a = {
            invite: y.a._("Log in to invite friends"),
            login: y.a._("Log in to see more"),
            saveButton: y.a._("Log in to see more"),
            homePage: y.a._("Welcome to Pinterest"),
          },
          i = { login: y.a._("Two-Factor Authentication Required") },
          e = void 0;
        return (
          (e =
            t === he.b.signup
              ? r[n] || r[he.a.defaultSource]
              : t === he.b.loginMfa
              ? i[n] || i[he.a.login]
              : a[n] || a[he.a.login]),
          e
        );
      },
      be = {
        signup: {
          backgroundColor: "#fff",
          borderRadius: "8px",
          position: "relative",
          textAlign: "center",
          width: "404px",
          margin: "auto",
          minHeight: "520px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.45)",
        },
        hybridSignup: {
          backgroundColor: "#fff",
          position: "relative",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          margin: "auto",
          height: "100%",
          boxShadow: "0 2px 10px rgba(0,0,0,0.45)",
        },
        signupMobile: {
          backgroundColor: "#fff",
          position: "absolute",
          left: "0",
          right: "0",
          top: "0",
          minHeight: "100vh",
          textAlign: "center",
        },
        signupModal: { textAlign: "center" },
        signupForm: { minHeight: "400px", padding: "20px 10px" },
        hybridSignupForm: { padding: "14% 56px" },
        signupTitleContainer: { margin: "0 auto 25px", width: "270px" },
        hybridsignupTitleContainer: { marginTop: "5%", marginBottom: "5%" },
        hybridsignupSubTitleContainer: {
          marginBottom: "5%",
          textAlign: "left",
        },
        signupTitleMfaContainer: { padding: "0 10px" },
        signupTitle: {
          color: "#555",
          fontSize: "32px",
          fontWeight: "bold",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          letterSpacing: "-1.2px",
        },
        haveAccountText: { display: "inline-block", marginRight: "4px" },
        toggleButton: {
          border: "none",
          backgroundColor: "transparent",
          fontWeight: "bold",
          textDecoration: "none",
          verticalAlign: "baseline",
        },
        logoContainer: {
          display: "block",
          height: "45px",
          margin: "5px auto",
          width: "45px",
        },
        hybridLogoContainer: {
          display: "block",
          height: "45px",
          width: "45px",
        },
        pinterestLogo: {
          textAlign: "center",
          paddingTop: "20px",
          display: "inline-block",
        },
        inputFields: {
          backgroundColor: "#f0f0f0",
          border: "0px",
          outline: "none",
        },
        separator: {
          borderBottom: "#efefef 1px solid",
          margin: "20px 0px 15px -68px",
          width: "404px",
        },
        separatorFullWidth: {
          borderBottom: "#efefef 1px solid",
          marginTop: "20px",
          marginBottom: "15px",
          width: "100%",
        },
        signupLoginToggle: {
          color: "#555",
          fontSize: "14px",
          fontWeight: "normal",
          marginBottom: "5px",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        profilePic: { margin: "0 auto 16px", width: "108px" },
        personalizedModalContainer: {
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "40px 0",
          position: "relative",
          textAlign: "center",
          width: "400px",
          margin: "auto",
          boxShadow: "0 2px 10px rgba(0,0,0,0.45)",
        },
        notYouLink: {
          color: "#555",
          fontSize: "12px",
          marginTop: "16px",
          lineHeight: "16px",
        },
        notYouLinkBold: { fontWeight: "bold" },
        onClickLoginButton: { width: "288px" },
        closeButton: {
          backgroundColor: "transparent",
          backgroundRepeat: "no-repeat",
          border: "none",
          outline: "none",
          overflow: "hidden",
          padding: "10px",
          position: "absolute",
          right: "10px",
          top: "10px",
        },
        notNowButton: {
          border: "none",
          color: "#717171",
          fontWeight: "bold",
          textDecoration: "none",
          backgroundColor: "#eee",
          height: "36px",
          borderRadius: "5px",
          fontSize: "16px",
          width: "268px",
          marginTop: "10px",
        },
        onClickEmailConfirmationButton: { width: "270px", marginTop: "40px" },
        signupLink: { cursor: "pointer", fontWeight: "bold" },
        notOnPinterestText: {
          verticalAlign: "middle",
          color: "rgb(85, 85, 85)",
        },
        signupSubtitles: {
          textAlign: "center",
          color: "#555",
          fontSize: "16px",
          fontWeight: "normal",
          margin: "-15px 0 20px",
        },
        brandFlyoutWrapper: { bottom: "0", left: "100%", position: "absolute" },
        hybridBrandFlyoutWrapper: {
          top: "35%",
          right: "100%",
          marginRight: "16px",
          position: "absolute",
          transform: "scaleX(-1)",
        },
        cancelButtonWrapper: {
          position: "absolute",
          zIndex: "1",
          paddingLeft: "25px",
          paddingTop: "35%",
        },
      },
      _e = d.a.createElement(E.a, null),
      ye = d.a.createElement(
        me.b,
        { marginTop: 4, marginBottom: 5 },
        d.a.createElement(me.i, null),
      ),
      Ee = (function (e) {
        function t(n) {
          l(this, t);
          var o = c(this, e.call(this, n));
          (o.getSignupTitleStyles = function () {
            var e = o.props,
              t = e.hybridSideBar,
              n = e.darkSignupTitle,
              r = be.signupTitle;
            return (
              n && (r = Object.assign({}, r, { color: "#000" })),
              t &&
                (r = Object.assign({}, r, {
                  textAlign: "left",
                  fontSize: "38px",
                })),
              r
            );
          }),
            (o.showAdditionalStep = function (e) {
              return function (t, n, r) {
                o.setState({
                  type: e,
                  socialRegistrationCredentials: {
                    type: t,
                    userData: n,
                    credentialsAndLoggingData: r,
                  },
                });
              };
            }),
            (o.handleNotNowButtonClick = function (e) {
              o.trackScopedAction("not_now_button_click"),
                o.props.handleCloseClick && o.props.handleCloseClick(e);
            }),
            (o.toggleLoadingIndicator = function (e) {
              o.setState({ isLoading: e });
            }),
            (o.handleLoginToggleButtonClick = function (e) {
              o.trackScopedAction("login_toggle_click"),
                o.setModalType(he.b.login, e);
            }),
            (o.handleSignupToggleButtonClick = function (e) {
              o.trackScopedAction("signup_toggle_click"),
                o.setModalType(he.b.signup, e);
            }),
            (o.handleConfirmationPageButtonClick = function (e) {
              o.setModalType(he.b.login, e);
            }),
            (o.updateEmail = function (e) {
              o.setState({ email: e, clearError: !0 });
            }),
            (o.stringsToTranslate = function () {
              y.a._("Not now", "Button to dismiss the log in modal"),
                y.a._("Not now", "Button to dismiss the sign up modal"),
                y.a._("Log in to see more", "Title on desktop login modal");
            });
          var r = ce.a.getQueryStringParams();
          return (
            (o.state = {
              clearError: !1,
              type: "signup" === r.type ? he.b.signup : o.props.type,
              email: n.email || "",
              password: "",
              age: void 0,
              gender: "",
              hideFacebookButton: !1,
              hideGoogleButton: !1,
              hidePasswordField: !1,
              mfaCode: "",
              mfaCreds: n.mfaCreds || null,
              mfaPhoneNumberEnd: "",
              name: "",
              loggedOutUserInfo: null,
              isPersonalizedModal: null,
              isLoading: !1,
              socialRegistrationCredentials:
                o.props.socialRegistrationCredentials,
              step: "signup",
            }),
            o
          );
        }
        return (
          u(t, e),
          (t.prototype.componentDidMount = function e() {
            this.logModalShown(this.state.type),
              this.context.logging &&
                this.props.dispatch(
                  Object(b.a)(1771, {
                    view: this.context.logging.viewType,
                    viewParameter: this.context.logging.viewParameter,
                  }),
                ),
              this.props.AMPClientId &&
                Object(L.c)("signup_page_from_amp", {
                  amp_client_id: this.props.AMPClientId,
                }),
              this.setLoggedOutUserInfo(),
              (this.socialOnlyExpGroup =
                this.props.seoUnauthExperiments.v2GetGroup(
                  "unauth_social_only",
                ) || "");
          }),
          (t.prototype.componentWillReceiveProps = function e(t) {
            this.setState({
              type: t.type,
              email: t.email || "",
              password: "",
              age: void 0,
              gender: "",
              mfaCode: "",
              mfaCreds: t.mfaCreds || null,
              mfaPhoneNumberEnd: "",
              name: "",
              socialRegistrationCredentials: t.socialRegistrationCredentials,
            });
          }),
          (t.prototype.componentWillUpdate = function e(t, n) {
            n.type !== this.state.type && this.logModalShown(n.type);
          }),
          (t.prototype.setLoggedOutUserInfo = function e() {
            var t = le.b.localStorage.getItem("unauthLoggedOutInfoStorage");
            t &&
              (this.setState({ isPersonalizedModal: !0, userInfo: t }),
              this.state.type !== he.b.loginMfa &&
                this.setState({ type: "personalized" }));
          }),
          (t.prototype.getSignupStyles = function e() {
            var t = this.context.userAgent.isMobile,
              n = this.props.modal,
              o = this.props.hybridSideBar ? be.hybridSignup : be.signup;
            return n ? be.signupModal : t ? be.signupMobile : o;
          }),
          (t.prototype.setModalType = function e(t, n) {
            this.setState({ type: t });
          }),
          (t.prototype.setNameFromEmail = function e() {
            this.setState({ name: Object(te.a)(this.state.email) });
          }),
          (t.prototype.logModalShown = function e(t) {
            Object(L.a)(
              "unauth.authentication_modal.shown." +
                this.props.toggleType +
                "." +
                t,
            );
          }),
          (t.prototype.trackScopedAction = function e(t) {
            Object(L.a)(
              "unauth.authentication_modal." +
                t +
                "." +
                this.props.toggleType +
                "." +
                this.state.type,
            );
          }),
          (t.prototype.handleDataChange = function e(t, n) {
            var o = this,
              r = this.state,
              a = this.props.seoUnauthExperiments;
            "email" === t &&
              r.email.length > n.target.value.length &&
              (r.hideFacebookButton ||
                r.hideGoogleButton ||
                r.hidePasswordField) &&
              this.setState({
                hideFacebookButton: !1,
                hideGoogleButton: !1,
                hidePasswordField: !1,
              });
            var i = {};
            (i[t] = n.target.value),
              this.setState(i),
              "email" === t &&
                (n.target.value.endsWith(".com") ||
                  n.target.value.endsWith(".net")) &&
                this.socialOnlyExpGroup &&
                (a.v2ActivateExperiment("unauth_social_only"),
                this.socialOnlyExpGroup.startsWith("enabled") &&
                  oe.a
                    .create("EmailUserDataResource", { email: n.target.value })
                    .callGet({ showError: !1 })
                    .then(function (e) {
                      var t = e.resource_response.data;
                      if (Object.keys(t).length > 0 && !t.has_password) {
                        var n = !t.connected_to_facebook,
                          r = !t.connected_to_google;
                        n && r && ((n = !1), (r = !1)),
                          o.setState({
                            hideFacebookButton: n,
                            hideGoogleButton: r,
                            hidePasswordField: !t.has_password,
                          });
                      }
                    }));
          }),
          (t.prototype.handleLoginWithMfa = function e(t, n) {
            var o = { mfaCreds: n };
            t &&
              t.phone_number_end &&
              (o.mfaPhoneNumberEnd = t.phone_number_end),
              this.setState(o),
              this.setModalType(he.b.loginMfa);
          }),
          (t.prototype.handleNotYouClick = function e() {
            this.setState({ headerStyle: "default" }),
              le.b.localStorage.removeItem("unauthLoggedOutInfoStorage"),
              ue.a.logoutWithOptions("/login/", null, !1);
          }),
          (t.prototype.changeStep = function e(t) {
            this.setState({ step: t });
          }),
          (t.prototype.disableDenzelProfileHeader = function e() {
            de.b.publish("profile", "signupButtonClicked", {});
          }),
          (t.prototype.renderLoadingIndicator = function e() {
            return this.state.isLoading ? _e : null;
          }),
          (t.prototype.renderBrandUpsellFlyout = function e() {
            var t = this.props,
              n = t.showBrandUpsellFlyout,
              o = t.hybridSideBar,
              r = t.handleBrandUpsellClick,
              a = t.handleCancelClick,
              i = t.showCancelButton,
              s = o ? be.hybridBrandFlyoutWrapper : be.brandFlyoutWrapper;
            return n && r
              ? d.a.createElement(
                  "div",
                  { style: s },
                  i
                    ? d.a.createElement(
                        "div",
                        { style: be.cancelButtonWrapper },
                        d.a.createElement(me.n, {
                          accessibilityLabel: "cancel",
                          icon: "cancel",
                          iconColor: "white",
                          onClick: a,
                          size: "xs",
                        }),
                      )
                    : null,
                  d.a.createElement(m.a, {
                    background: "red",
                    onClick: r,
                    bubbleOnLeft: o,
                  }),
                )
              : null;
          }),
          (t.prototype.renderPersonalizedLogin = function e() {
            return d.a.createElement(
              "div",
              {
                "data-test-login": !0,
                "data-test-id": "login",
                style: be.personalizedModalContainer,
              },
              d.a.createElement(
                "div",
                { style: be.profilePic },
                d.a.createElement(me.a, {
                  src: this.state.userInfo.image_large_url,
                  name: this.state.userInfo.first_name,
                }),
              ),
              d.a.createElement(
                "div",
                { style: be.signupTitleContainer },
                d.a.createElement(
                  "h3",
                  { style: this.getSignupTitleStyles() },
                  this.state.userInfo.first_name,
                ),
              ),
              d.a.createElement(
                f.a,
                {
                  className: "red",
                  onClick: x.a.oneClickLogin,
                  styleOverrides: be.onClickLoginButton,
                },
                h.h(y.a._("Continue as {{name}}"), {
                  name: this.state.userInfo.first_name,
                }),
              ),
              d.a.createElement(
                me.M,
                { onTouch: x.a.handleNotYouClick, fullWidth: !1 },
                d.a.createElement(
                  "div",
                  { style: be.notYouLink },
                  y.a._("Not you?"),
                  d.a.createElement(
                    "span",
                    { style: be.notYouLinkBold },
                    " ",
                    y.a._("Log in with a different account"),
                  ),
                ),
              ),
            );
          }),
          (t.prototype.renderDefaultSignup = function e() {
            var t = this.props,
              n = t.container,
              o = t.emailValidationError,
              r = t.passwordValidationError,
              a = t.signupSource,
              l = t.seoUnauthExperiments,
              c = t.hybridSideBar,
              u = t.valuePropType,
              p =
                this.props.customSignupTagline ||
                (a
                  ? fe(this.state.type, a, l)
                  : fe(this.state.type, he.a.defaultSource, l)),
              g = this.getSignupTitleStyles(),
              h = this.getSignupStyles(),
              m = c ? be.hybridSignupForm : be.signupForm,
              b = c ? be.hybridLogoContainer : be.logoContainer,
              _ =
                "login_page" !== n
                  ? Object.assign({}, be.signupTitleContainer, {
                      width: "320px",
                    })
                  : be.signupTitleContainer,
              E = c
                ? be.hybridsignupSubTitleContainer
                : be.signupTitleContainer,
              v = c
                ? Object.assign({}, be.signupSubtitles, {
                    textAlign: "left",
                    fontSize: "16px",
                    margin: "0 0 2%",
                  })
                : be.signupSubtitles,
              w = d.a.createElement(
                "div",
                null,
                d.a.createElement(i, { css: be.separator }),
                d.a.createElement(
                  "div",
                  null,
                  d.a.createElement(s, {
                    buttonColorOverride: "lightGrey",
                    buttonText: y.a._("Log in"),
                    link: "/login/",
                    onClick: this.handleLoginToggleButtonClick,
                    title: y.a._("Already a member?"),
                    titleStylesOverride: be.signupLoginToggle,
                    useSmallButton: !0,
                  }),
                ),
              );
            c
              ? (w = d.a.createElement(s, {
                  buttonColorOverride: "lightGrey",
                  buttonText: y.a._("Log in"),
                  link: "/login/",
                  onClick: this.handleLoginToggleButtonClick,
                  titleStylesOverride: be.signupLoginToggle,
                  fullWidth: !0,
                }))
              : this.props.toggleType === pe.a.NOT_NOW_BUTTON &&
                (w = d.a.createElement(
                  "div",
                  null,
                  d.a.createElement(i, { css: be.separator }),
                  d.a.createElement(
                    "div",
                    null,
                    d.a.createElement(s, {
                      buttonColorOverride: "lightGrey",
                      buttonText: y.a._("Log in"),
                      link: "/login/",
                      onClick: this.handleLoginToggleButtonClick,
                      title: y.a._("Already a member?"),
                      titleStylesOverride: be.signupLoginToggle,
                      useSmallButton: !0,
                    }),
                  ),
                  d.a.createElement(
                    "div",
                    null,
                    d.a.createElement(
                      f.a,
                      {
                        className: "lightGrey",
                        onClick: this.handleNotNowButtonClick,
                        styleOverrides: be.notNowButton,
                      },
                      y.a._("Not now"),
                    ),
                  ),
                ));
            var S = 40;
            a === he.a.homePage && (S = 50);
            var O = y.a._(
                "Access our best ideas with a free account",
                "Value prop on desktop signup modal",
              ),
              C = y.a._(
                "Free, unlimited access to content",
                "Value prop 1 on desktop signup modal",
              ),
              x = y.a._(
                "Discover new ideas to try",
                "Value prop 2 on desktop signup modal",
              ),
              T = y.a._(
                "Access Pinterest's best ideas with a free account",
                "Value prop 3 on desktop signup modal",
              ),
              k = u ? T : C,
              R = u ? null : x;
            return d.a.createElement(
              "div",
              { "data-test-signup": !0, "data-test-id": "signup", style: h },
              this.renderLoadingIndicator(),
              d.a.createElement(
                "div",
                { style: m },
                d.a.createElement("div", { style: b }, Object(ee.a)(S, !0)),
                d.a.createElement(
                  "div",
                  { style: _ },
                  d.a.createElement(
                    "h3",
                    { style: g },
                    "login_page" !== n ? O : p,
                  ),
                ),
                d.a.createElement(
                  "div",
                  { style: E },
                  d.a.createElement(
                    "h3",
                    { style: v },
                    "login_page" !== n ? p : k,
                  ),
                  d.a.createElement(
                    "h3",
                    { style: v },
                    "login_page" !== n ? null : R,
                  ),
                ),
                d.a.createElement(ae.a, {
                  additionalEmailPasswordChildren: w,
                  age: this.state.age,
                  clearError: this.state.clearError,
                  container: this.props.container,
                  dark: !0,
                  disablePostSignupNextUrl: !0,
                  email: this.state.email,
                  emailValidationError: o,
                  loadingIndicatorCallback: this.toggleLoadingIndicator,
                  passwordValidationError: r,
                  gender: this.state.gender,
                  inputStyleOverrides: be.inputFields,
                  name: this.state.name,
                  nextUrlParam:
                    this.props.postSignupUrlParam || this.props.nextUrlParam,
                  onAgeChange: this.handleDataChange.bind(this, "age"),
                  onEmailChange: this.handleDataChange.bind(this, "email"),
                  onFBPhoneOnlyConnectVerified: this.showAdditionalStep(
                    he.b.FBEmailOrPhoneCollection,
                  ),
                  onSocialConnectVerified: this.showAdditionalStep(
                    he.b.socialSignupWithAge,
                  ),
                  onGenderChange: this.handleDataChange.bind(this, "gender"),
                  onLoginWithMfa: this.handleLoginWithMfa.bind(this),
                  onNameChange: this.handleDataChange.bind(this, "name"),
                  onPasswordChange: this.handleDataChange.bind(
                    this,
                    "password",
                  ),
                  onStepChange: this.changeStep.bind(this),
                  setNameFromEmail: this.setNameFromEmail.bind(this),
                  signupSource: a,
                  shouldRenderHybridSideBarForm: c,
                  password: this.state.password,
                  updateEmail: this.updateEmail.bind(this),
                }),
              ),
              this.renderBrandUpsellFlyout(),
            );
          }),
          (t.prototype.renderDefaultLogin = function e() {
            var t = this.context.userAgent.isMobile,
              n = this.props,
              o = n.customLoginTagline,
              r = n.emailValidationError,
              a = n.passwordValidationError,
              l = n.hybridSideBar,
              c = n.valuePropType,
              u = n.seoUnauthExperiments,
              p = n.signupSource,
              g =
                o ||
                (p
                  ? fe(this.state.type, p, u)
                  : fe(this.state.type, he.a.login, u)),
              h = l ? be.hybridLogoContainer : be.logoContainer,
              m = l ? be.hybridsignupTitleContainer : be.signupTitleContainer,
              b = 40;
            p === he.a.homePage && (b = 50);
            var _ = t ? { height: "75px" } : null,
              E = this.getSignupStyles(),
              v = l ? be.hybridSignupForm : be.signupForm,
              w = l
                ? be.hybridsignupSubTitleContainer
                : be.signupTitleContainer,
              S = l
                ? Object.assign({}, be.signupSubtitles, {
                    textAlign: "left",
                    fontSize: "16px",
                    margin: "0 0 2%",
                  })
                : be.signupSubtitles,
              O = "lightGrey",
              C = Object.assign({}, be.separator, { marginLeft: "-10px" }),
              x = d.a.createElement(
                "div",
                null,
                d.a.createElement(i, { css: C }),
                d.a.createElement(
                  "div",
                  null,
                  d.a.createElement(s, {
                    buttonColorOverride: "lightGrey",
                    buttonText: y.a._("Sign up"),
                    link: "/signup/",
                    onClick: this.handleSignupToggleButtonClick,
                    title: y.a._("Not on Pinterest yet?"),
                    titleStylesOverride: be.signupLoginToggle,
                    useSmallButton: !0,
                  }),
                ),
              );
            this.props.toggleType === pe.a.NOT_NOW_BUTTON
              ? (x = d.a.createElement(
                  "div",
                  null,
                  d.a.createElement(i, { css: { margin: "10px auto" } }),
                  d.a.createElement(
                    "div",
                    { style: be.haveAccountText },
                    d.a.createElement(
                      "span",
                      { style: be.notOnPinterestText },
                      y.a._("Not on Pinterest yet? "),
                    ),
                    d.a.createElement(
                      f.a,
                      {
                        className: "noButtonStyles",
                        onClick: this.handleSignupToggleButtonClick,
                        styleOverrides: be.signupLink,
                      },
                      y.a._("Sign up"),
                    ),
                  ),
                  d.a.createElement(
                    "div",
                    null,
                    d.a.createElement(
                      f.a,
                      {
                        className: "lightGrey",
                        onClick: this.handleNotNowButtonClick,
                        styleOverrides: be.notNowButton,
                      },
                      y.a._("Not now"),
                    ),
                  ),
                  d.a.createElement("div", { style: _ }),
                ))
              : this.props.toggleType === pe.a.NO_TOGGLE || l
              ? (x = null)
              : this.props.toggleType === pe.a.SMALL_TOGGLE &&
                (x = d.a.createElement(
                  "div",
                  null,
                  d.a.createElement(i, { css: { margin: "10px auto" } }),
                  d.a.createElement(
                    "span",
                    { style: be.haveAccountText },
                    y.a._("Not on Pinterest yet? "),
                  ),
                  d.a.createElement(
                    "button",
                    {
                      className: "FullPageSignup__signupToggle",
                      onClick: this.handleSignupToggleButtonClick,
                      style: be.toggleButton,
                    },
                    y.a._("Sign Up"),
                  ),
                  d.a.createElement("div", { style: _ }),
                ));
            var T = y.a._(
                "Free, unlimited access to content",
                "Value prop 1 on desktop login modal",
              ),
              k = y.a._(
                "Discover new ideas to try",
                "Value prop 2 on desktop login modal",
              ),
              R = y.a._(
                "Access Pinterest's best ideas with a free account",
                "Value prop 3 on desktop login modal",
              ),
              A = c ? R : T,
              P = c ? null : k,
              B = null;
            return (
              l &&
                (B = d.a.createElement(s, {
                  buttonColorOverride: "lightGrey",
                  buttonText: y.a._("Sign up"),
                  link: "/signup/",
                  onClick: this.handleSignupToggleButtonClick,
                  titleStylesOverride: be.signupLoginToggle,
                  fullWidth: !0,
                })),
              d.a.createElement(
                "div",
                { "data-test-login": !0, "data-test-id": "login", style: E },
                this.renderLoadingIndicator(),
                d.a.createElement(
                  "div",
                  { style: v },
                  d.a.createElement("div", { style: h }, Object(ee.a)(b, !0)),
                  d.a.createElement(
                    "div",
                    { style: m },
                    d.a.createElement(
                      "h3",
                      { style: this.getSignupTitleStyles() },
                      g,
                    ),
                  ),
                  d.a.createElement(
                    "div",
                    { style: w },
                    d.a.createElement("h3", { style: S }, A),
                    d.a.createElement("h3", { style: S }, P),
                  ),
                  d.a.createElement(Z, {
                    additionalChildren: B,
                    container: this.props.container,
                    disablePostSignupNextUrl: !0,
                    disableEmailLogin:
                      this.state.hidePasswordField &&
                      this.socialOnlyExpGroup.startsWith("enabled_disable"),
                    email: this.state.email,
                    emailValidationError: r,
                    hideFacebookButton: this.state.hideFacebookButton,
                    hideGoogleButton: this.state.hideGoogleButton,
                    hidePasswordField:
                      this.state.hidePasswordField &&
                      this.socialOnlyExpGroup.startsWith("enabled_hide"),
                    loadingIndicatorCallback: this.toggleLoadingIndicator,
                    passwordValidationError: a,
                    inputStyleOverrides: be.inputFields,
                    nextUrlParam: this.props.nextUrlParam,
                    onEmailChange: this.handleDataChange.bind(this, "email"),
                    onSocialConnectVerified: this.showAdditionalStep(
                      he.b.socialSignupWithAge,
                    ),
                    onLoginWithMfa: this.handleLoginWithMfa.bind(this),
                    onPasswordChange: this.handleDataChange.bind(
                      this,
                      "password",
                    ),
                    password: this.state.password,
                    shouldRenderHybridSideBarForm: l,
                  }),
                  x,
                ),
                this.renderBrandUpsellFlyout(),
              )
            );
          }),
          (t.prototype.renderLoginMfa = function e() {
            var t = this.props,
              n = t.seoUnauthExperiments,
              o = t.hybridSideBar,
              r = fe(this.state.type, he.a.loginMfa, n),
              a = this.getSignupStyles(),
              i = o ? be.hybridSignupForm : be.signupForm,
              s = o ? be.hybridLogoContainer : be.logoContainer,
              l = this.getSignupTitleStyles();
            return d.a.createElement(
              "div",
              { "data-test-login": !0, "data-test-id": "login", style: a },
              d.a.createElement(
                "div",
                { style: i },
                d.a.createElement("div", { style: s }, Object(ee.a)(40, !0)),
                d.a.createElement(
                  "div",
                  {
                    style: Object.assign(
                      {},
                      be.signupTitleContainer,
                      be.signupTitleMfaContainer,
                    ),
                  },
                  d.a.createElement("h3", { style: l }, r),
                ),
                d.a.createElement($.a, {
                  container: this.props.container,
                  code: this.state.mfaCode,
                  creds: this.state.mfaCreds,
                  email: this.state.email,
                  inputStyleOverrides: be.inputFields,
                  nextUrlParam: this.props.nextUrlParam,
                  onCodeChange: this.handleDataChange.bind(this, "mfaCode"),
                  password: this.state.password,
                  phoneNumberEnd: this.state.mfaPhoneNumberEnd,
                }),
              ),
            );
          }),
          (t.prototype.renderSocialSignupWithAge = function e() {
            var t = this.state.socialRegistrationCredentials,
              n = this.props.nextUrlParam,
              o = y.a._(
                "Sign up to see more",
                "Age collection signup step for Facebook/G+ authentication",
              );
            return d.a.createElement(
              "div",
              {
                "data-test-login": !0,
                "data-test-id": "login",
                style: be.signup,
              },
              this.renderLoadingIndicator(),
              d.a.createElement(
                "div",
                { style: be.signupForm },
                d.a.createElement(
                  "div",
                  { style: be.logoContainer },
                  Object(ee.a)(40, !0),
                ),
                d.a.createElement(
                  "div",
                  { style: be.signupTitleContainer },
                  d.a.createElement("h3", { style: be.signupTitle }, o),
                ),
                d.a.createElement(se.a, {
                  disablePostSignupNextUrl: !0,
                  loadingIndicatorCallback: this.toggleLoadingIndicator,
                  nextUrlParam: n,
                  registrationCredentials: t,
                }),
              ),
              d.a.createElement(
                "div",
                null,
                ye,
                d.a.createElement(
                  "div",
                  null,
                  d.a.createElement(s, {
                    buttonColorOverride: "lightGrey",
                    buttonText: y.a._("Log in"),
                    link: "/login/",
                    onClick: this.handleLoginToggleButtonClick,
                    title: y.a._("Already a member?"),
                    titleStylesOverride: be.signupLoginToggle,
                    useSmallButton: !0,
                  }),
                ),
              ),
            );
          }),
          (t.prototype.renderFBEmailOrPhoneCollection = function e() {
            var t = this.state.socialRegistrationCredentials,
              n = this.props,
              o = n.nextUrlParam,
              r = n.seoUnauthExperiments,
              a = y.a._(
                "Link your account",
                "email or phone collection step for Facebook cellphone only sign up",
              );
            return d.a.createElement(
              "div",
              {
                "data-test-login": !0,
                "data-test-id": "login",
                style: be.signup,
              },
              this.renderLoadingIndicator(),
              d.a.createElement(
                "div",
                { style: be.signupForm },
                d.a.createElement(
                  "div",
                  { style: be.logoContainer },
                  Object(ee.a)(40, !0),
                ),
                d.a.createElement(
                  "div",
                  { style: be.signupTitleContainer },
                  d.a.createElement("h3", { style: be.signupTitle }, a),
                ),
                d.a.createElement(_.a, {
                  nextUrlParam: o,
                  loadingIndicatorCallback: this.toggleLoadingIndicator,
                  showEmailConfirmationStep: this.showAdditionalStep(
                    he.b.emailConfirmation,
                  ),
                  showLoginStep: this.showAdditionalStep(he.b.login),
                  showSocialSignupWithAgeStep: this.showAdditionalStep(
                    he.b.socialSignupWithAge,
                  ),
                  registrationCredentials: t,
                  seoUnauthExperiments: r,
                }),
              ),
            );
          }),
          (t.prototype.renderEmailConfirmation = function e() {
            var t = this.state.socialRegistrationCredentials.userData.email,
              n = y.a._(
                "Check your email",
                "email confirmation tagline for Facebook cellphone only sign up",
              ),
              o = y.a._(
                "We've sent a confirmation email to ",
                "email confirmation message for Facebook cellphone only sign up",
              ),
              r = Object.assign({}, be.signupSubtitles, { marginTop: "24px" });
            return d.a.createElement(
              "div",
              {
                "data-test-login": !0,
                "data-test-id": "login",
                style: be.signup,
              },
              d.a.createElement(
                "div",
                { style: be.signupForm },
                d.a.createElement(
                  "div",
                  { style: be.logoContainer },
                  Object(ee.a)(40, !0),
                ),
                d.a.createElement(
                  "div",
                  { style: be.signupTitleContainer },
                  d.a.createElement("h3", { style: be.signupTitle }, n),
                  d.a.createElement("h3", { style: r }, o, t),
                ),
                d.a.createElement(
                  f.a,
                  {
                    className: "red",
                    onClick: this.handleConfirmationPageButtonClick,
                    styleOverrides: be.onClickEmailConfirmationButton,
                  },
                  y.a._(
                    "Done",
                    "word on the button in email confirmatiobn page",
                  ),
                ),
              ),
            );
          }),
          (t.prototype.render = function e() {
            return this.state.isPersonalizedModal
              ? this.renderPersonalizedLogin()
              : this.state.type === he.b.signup
              ? (this.props.signupSource === he.a.userProfilePage &&
                  this.disableDenzelProfileHeader(),
                this.renderDefaultSignup())
              : this.state.type === he.b.login
              ? this.renderDefaultLogin()
              : this.state.type === he.b.loginMfa
              ? this.renderLoginMfa()
              : this.state.type === he.b.socialSignupWithAge
              ? this.renderSocialSignupWithAge()
              : this.state.type === he.b.FBEmailOrPhoneCollection
              ? this.renderFBEmailOrPhoneCollection()
              : this.state.type === he.b.emailConfirmation
              ? this.renderEmailConfirmation()
              : void 0;
          }),
          t
        );
      })(p.Component);
    (Ee.defaultProps = {
      signupSource: he.a.defaultSource,
      showBrandUpsellFlyout: !1,
      toggleType: pe.a.DEFAULT_TOGGLE,
      type: he.b.signup,
      valuePropType: "discover_free",
    }),
      (Ee.contextTypes = {
        logging: R.a.shape({
          viewParameter: R.a.number,
          viewType: R.a.number.isRequired,
        }),
        userAgent: R.a.shape({ isMobile: R.a.bool.isRequired }).isRequired,
      });
    var ve = (t.default = Object(g.connect)()(Object(j.b)(Ee)));
  },
  ylKE: function (e, t, n) {
    "use strict";
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    var i = n("d6ZO"),
      s = n.n(i),
      l = n("/2tF"),
      c = n("W/Cr"),
      u = n("IaRT"),
      p = n.n(u),
      d = n("85jk"),
      g = n("gEaE"),
      h = {
        bubble: {
          position: "relative",
          padding: "10px",
          minWidth: "250px",
          minHeight: "250px",
          width: "auto",
          height: "auto",
          marginLeft: "25px",
          borderRadius: "50% 50% 50% 10%",
          display: "flex",
          flexDirection: "column",
        },
        dynamicButton: {
          height: "auto",
          paddingTop: "8px",
          paddingBottom: "8px",
        },
        wrapper: {
          position: "absolute",
          left: "0",
          bottom: "0",
          padding: "25px",
          textAlign: "left",
        },
      },
      m = (function (e) {
        function t() {
          var n, a, i;
          o(this, t);
          for (var s = arguments.length, l = Array(s), u = 0; u < s; u++)
            l[u] = arguments[u];
          return (
            (n = a = r(this, e.call.apply(e, [this].concat(l)))),
            (a.handleClick = function () {
              a.track("click"), a.props.onClick();
            }),
            (a.stringsToTranslate = function () {
              c.a._(
                "Pinterest helps you find ideas to try.",
                "Title in the red about Pinterest bubble",
              );
            }),
            (i = n),
            r(a, i)
          );
        }
        return (
          a(t, e),
          (t.prototype.componentDidMount = function e() {
            this.track("shown");
          }),
          (t.prototype.track = function e(t) {
            Object(d.a)(
              "unauth.brand_upsell.flyout_" + this.props.background + "." + t,
            );
          }),
          (t.prototype.render = function e() {
            var t = Object.assign({}, h.bubble, {
                backgroundColor:
                  "red" === this.props.background
                    ? "rgb(189, 8, 28)"
                    : "rgba(85, 85, 85, 0.85)",
                marginLeft: this.props.bubbleOnLeft ? "0px" : "25px",
              }),
              n = this.props.bubbleOnLeft
                ? Object.assign({}, h.wrapper, {
                    textAlign: "right",
                    transform: "scaleX(-1)",
                  })
                : h.wrapper,
              o = this.props.bubbleOnLeft ? 0 : 2,
              r = this.props.bubbleOnLeft ? 0 : 6,
              a = this.props.bubbleOnLeft ? "right" : "left";
            return s.a.createElement(
              "div",
              { style: t },
              s.a.createElement(
                "div",
                { style: n },
                s.a.createElement(
                  g.b,
                  {
                    marginTop: 2,
                    marginRight: o,
                    marginLeft: 2,
                    marginBottom: 2,
                  },
                  s.a.createElement(
                    g.H,
                    {
                      align: a,
                      bold: !0,
                      color: "white",
                      overflow: "breakWord",
                      size: "xl",
                    },
                    c.a._(
                      "Pinterest helps you find ideas to try.",
                      "Word prompt in the bubble flyout, which is on the right side of login form",
                    ),
                  ),
                ),
                s.a.createElement(
                  g.b,
                  {
                    marginTop: 2,
                    marginRight: r,
                    marginBottom: 2,
                    marginLeft: 2,
                  },
                  s.a.createElement(
                    l.a,
                    {
                      className: "transparent",
                      onClick: this.handleClick,
                      styleOverrides: h.dynamicButton,
                    },
                    c.a._(
                      "How it works",
                      "description on the button leading to the brand about page",
                    ),
                  ),
                ),
              ),
            );
          }),
          t
        );
      })(i.Component);
    t.a = m;
  },
});
