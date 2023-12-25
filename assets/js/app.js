/******/ (function () {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./public/_web/js/jquery.toast.js":
      /*!****************************************!*\
  !*** ./public/_web/js/jquery.toast.js ***!
  \****************************************/
      /***/ function (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) {
        /* provided dependency */ var jQuery = __webpack_require__(
          /*! jquery */ "./node_modules/jquery/dist/jquery.js"
        );
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        "function" != typeof Object.create &&
          (Object.create = function (t) {
            function o() {}
            return (o.prototype = t), new o();
          }),
          (function (t, o, i, s) {
            "use strict";

            var n = {
              _positionClasses: [
                "bottom-left",
                "bottom-right",
                "top-right",
                "top-left",
                "bottom-center",
                "top-center",
                "mid-center",
              ],
              _defaultIcons: ["success", "error", "info", "warning"],
              init: function init(o, i) {
                this.prepareOptions(o, t.toast.options), this.process();
              },
              prepareOptions: function prepareOptions(o, i) {
                var s = {};
                "string" == typeof o || o instanceof Array
                  ? (s.text = o)
                  : (s = o),
                  (this.options = t.extend({}, i, s));
              },
              process: function process() {
                this.setup(),
                  this.addToDom(),
                  this.position(),
                  this.bindToast(),
                  this.animate();
              },
              setup: function setup() {
                var o = "";
                if (
                  ((this._toastEl =
                    this._toastEl ||
                    t("<div></div>", {
                      class: "jq-toast-single",
                    })),
                  (o += '<span class="jq-toast-loader"></span>'),
                  this.options.allowToastClose &&
                    (o += '<span class="close-jq-toast-single">&times;</span>'),
                  this.options.text instanceof Array)
                ) {
                  this.options.heading &&
                    (o +=
                      '<h2 class="jq-toast-heading">' +
                      this.options.heading +
                      "</h2>"),
                    (o += '<ul class="jq-toast-ul">');
                  for (var i = 0; i < this.options.text.length; i++) {
                    o +=
                      '<li class="jq-toast-li" id="jq-toast-item-' +
                      i +
                      '">' +
                      this.options.text[i] +
                      "</li>";
                  }
                  o += "</ul>";
                } else
                  this.options.heading &&
                    (o +=
                      '<h2 class="jq-toast-heading">' +
                      this.options.heading +
                      "</h2>"),
                    (o += this.options.text);
                this._toastEl.html(o),
                  !1 !== this.options.bgColor &&
                    this._toastEl.css("background-color", this.options.bgColor),
                  !1 !== this.options.textColor &&
                    this._toastEl.css("color", this.options.textColor),
                  this.options.textAlign &&
                    this._toastEl.css("text-align", this.options.textAlign),
                  !1 !== this.options.icon &&
                    (this._toastEl.addClass("jq-has-icon"),
                    -1 !== t.inArray(this.options.icon, this._defaultIcons) &&
                      this._toastEl.addClass("jq-icon-" + this.options.icon)),
                  !1 !== this.options["class"] &&
                    this._toastEl.addClass(this.options["class"]);
              },
              position: function position() {
                "string" == typeof this.options.position &&
                -1 !== t.inArray(this.options.position, this._positionClasses)
                  ? "bottom-center" === this.options.position
                    ? this._container.css({
                        left:
                          t(o).outerWidth() / 2 -
                          this._container.outerWidth() / 2,
                        bottom: 20,
                      })
                    : "top-center" === this.options.position
                    ? this._container.css({
                        left:
                          t(o).outerWidth() / 2 -
                          this._container.outerWidth() / 2,
                        top: 20,
                      })
                    : "mid-center" === this.options.position
                    ? this._container.css({
                        left:
                          t(o).outerWidth() / 2 -
                          this._container.outerWidth() / 2,
                        top:
                          t(o).outerHeight() / 2 -
                          this._container.outerHeight() / 2,
                      })
                    : this._container.addClass(this.options.position)
                  : "object" == _typeof(this.options.position)
                  ? this._container.css({
                      top: this.options.position.top
                        ? this.options.position.top
                        : "auto",
                      bottom: this.options.position.bottom
                        ? this.options.position.bottom
                        : "auto",
                      left: this.options.position.left
                        ? this.options.position.left
                        : "auto",
                      right: this.options.position.right
                        ? this.options.position.right
                        : "auto",
                    })
                  : this._container.addClass("bottom-left");
              },
              bindToast: function bindToast() {
                var t = this;
                this._toastEl.on("afterShown", function () {
                  t.processLoader();
                }),
                  this._toastEl
                    .find(".close-jq-toast-single")
                    .on("click", function (o) {
                      o.preventDefault(),
                        "fade" === t.options.showHideTransition
                          ? (t._toastEl.trigger("beforeHide"),
                            t._toastEl.fadeOut(function () {
                              t._toastEl.trigger("afterHidden");
                            }))
                          : "slide" === t.options.showHideTransition
                          ? (t._toastEl.trigger("beforeHide"),
                            t._toastEl.slideUp(function () {
                              t._toastEl.trigger("afterHidden");
                            }))
                          : (t._toastEl.trigger("beforeHide"),
                            t._toastEl.hide(function () {
                              t._toastEl.trigger("afterHidden");
                            }));
                    }),
                  "function" == typeof this.options.beforeShow &&
                    this._toastEl.on("beforeShow", function () {
                      t.options.beforeShow(t._toastEl);
                    }),
                  "function" == typeof this.options.afterShown &&
                    this._toastEl.on("afterShown", function () {
                      t.options.afterShown(t._toastEl);
                    }),
                  "function" == typeof this.options.beforeHide &&
                    this._toastEl.on("beforeHide", function () {
                      t.options.beforeHide(t._toastEl);
                    }),
                  "function" == typeof this.options.afterHidden &&
                    this._toastEl.on("afterHidden", function () {
                      t.options.afterHidden(t._toastEl);
                    }),
                  "function" == typeof this.options.onClick &&
                    this._toastEl.on("click", function () {
                      t.options.onClick(t._toastEl);
                    });
              },
              addToDom: function addToDom() {
                var o = t(".jq-toast-wrap");
                if (
                  (0 === o.length
                    ? ((o = t("<div></div>", {
                        class: "jq-toast-wrap",
                        role: "alert",
                        "aria-live": "polite",
                      })),
                      t("body").append(o))
                    : (this.options.stack &&
                        !isNaN(parseInt(this.options.stack, 10))) ||
                      o.empty(),
                  o.find(".jq-toast-single:hidden").remove(),
                  o.append(this._toastEl),
                  this.options.stack &&
                    !isNaN(parseInt(this.options.stack), 10))
                ) {
                  var i =
                    o.find(".jq-toast-single").length - this.options.stack;
                  i > 0 &&
                    t(".jq-toast-wrap")
                      .find(".jq-toast-single")
                      .slice(0, i)
                      .remove();
                }
                this._container = o;
              },
              canAutoHide: function canAutoHide() {
                return (
                  !1 !== this.options.hideAfter &&
                  !isNaN(parseInt(this.options.hideAfter, 10))
                );
              },
              processLoader: function processLoader() {
                if (!this.canAutoHide() || !1 === this.options.loader)
                  return !1;
                var t = this._toastEl.find(".jq-toast-loader"),
                  o = (this.options.hideAfter - 400) / 1e3 + "s",
                  i = this.options.loaderBg,
                  s = t.attr("style") || "";
                (s = s.substring(0, s.indexOf("-webkit-transition"))),
                  (s +=
                    "-webkit-transition: width " +
                    o +
                    " ease-in;                       -o-transition: width " +
                    o +
                    " ease-in;                       transition: width " +
                    o +
                    " ease-in;                       background-color: " +
                    i +
                    ";"),
                  t.attr("style", s).addClass("jq-toast-loaded");
              },
              animate: function animate() {
                t = this;
                if (
                  (this._toastEl.hide(),
                  this._toastEl.trigger("beforeShow"),
                  "fade" === this.options.showHideTransition.toLowerCase()
                    ? this._toastEl.fadeIn(function () {
                        t._toastEl.trigger("afterShown");
                      })
                    : "slide" === this.options.showHideTransition.toLowerCase()
                    ? this._toastEl.slideDown(function () {
                        t._toastEl.trigger("afterShown");
                      })
                    : this._toastEl.show(function () {
                        t._toastEl.trigger("afterShown");
                      }),
                  this.canAutoHide())
                ) {
                  var t = this;
                  o.setTimeout(function () {
                    "fade" === t.options.showHideTransition.toLowerCase()
                      ? (t._toastEl.trigger("beforeHide"),
                        t._toastEl.fadeOut(function () {
                          t._toastEl.trigger("afterHidden");
                        }))
                      : "slide" === t.options.showHideTransition.toLowerCase()
                      ? (t._toastEl.trigger("beforeHide"),
                        t._toastEl.slideUp(function () {
                          t._toastEl.trigger("afterHidden");
                        }))
                      : (t._toastEl.trigger("beforeHide"),
                        t._toastEl.hide(function () {
                          t._toastEl.trigger("afterHidden");
                        }));
                  }, this.options.hideAfter);
                }
              },
              reset: function reset(o) {
                "all" === o
                  ? t(".jq-toast-wrap").remove()
                  : this._toastEl.remove();
              },
              update: function update(t) {
                this.prepareOptions(t, this.options),
                  this.setup(),
                  this.bindToast();
              },
              close: function close() {
                this._toastEl.find(".close-jq-toast-single").click();
              },
            };
            (t.toast = function (t) {
              var o = Object.create(n);
              return (
                o.init(t, this),
                {
                  reset: function reset(t) {
                    o.reset(t);
                  },
                  update: function update(t) {
                    o.update(t);
                  },
                  close: function close() {
                    o.close();
                  },
                }
              );
            }),
              (t.toast.options = {
                text: "",
                heading: "",
                showHideTransition: "fade",
                allowToastClose: !0,
                hideAfter: 3e3,
                loader: !0,
                loaderBg: "#9EC600",
                stack: 5,
                position: "bottom-left",
                bgColor: !1,
                textColor: !1,
                textAlign: "left",
                icon: !1,
                beforeShow: function beforeShow() {},
                afterShown: function afterShown() {},
                beforeHide: function beforeHide() {},
                afterHidden: function afterHidden() {},
                onClick: function onClick() {},
              });
          })(jQuery, window, document);

        /***/
      },

    /***/ "./public/_web/js/jquery.validate.js":
      /*!*******************************************!*\
  !*** ./public/_web/js/jquery.validate.js ***!
  \*******************************************/
      /***/ function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        !(function (a) {
          true
            ? !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(
                  /*! jquery */ "./node_modules/jquery/dist/jquery.js"
                ),
              ]),
              (__WEBPACK_AMD_DEFINE_FACTORY__ = a),
              (__WEBPACK_AMD_DEFINE_RESULT__ =
                typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function"
                  ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                      exports,
                      __WEBPACK_AMD_DEFINE_ARRAY__
                    )
                  : __WEBPACK_AMD_DEFINE_FACTORY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
            : 0;
        })(function (a) {
          a.extend(a.fn, {
            validate: function validate(b) {
              if (!this.length)
                return void (
                  b &&
                  b.debug &&
                  window.console &&
                  console.warn(
                    "Nothing selected, can't validate, returning nothing."
                  )
                );
              var c = a.data(this[0], "validator");
              return c
                ? c
                : (this.attr("novalidate", "novalidate"),
                  (c = new a.validator(b, this[0])),
                  a.data(this[0], "validator", c),
                  c.settings.onsubmit &&
                    (this.on("click.validate", ":submit", function (b) {
                      (c.submitButton = b.currentTarget),
                        a(this).hasClass("cancel") && (c.cancelSubmit = !0),
                        void 0 !== a(this).attr("formnovalidate") &&
                          (c.cancelSubmit = !0);
                    }),
                    this.on("submit.validate", function (b) {
                      function d() {
                        var d, e;
                        return (
                          c.submitButton &&
                            (c.settings.submitHandler || c.formSubmitted) &&
                            (d = a("<input type='hidden'/>")
                              .attr("name", c.submitButton.name)
                              .val(a(c.submitButton).val())
                              .appendTo(c.currentForm)),
                          !(c.settings.submitHandler && !c.settings.debug) ||
                            ((e = c.settings.submitHandler.call(
                              c,
                              c.currentForm,
                              b
                            )),
                            d && d.remove(),
                            void 0 !== e && e)
                        );
                      }
                      return (
                        c.settings.debug && b.preventDefault(),
                        c.cancelSubmit
                          ? ((c.cancelSubmit = !1), d())
                          : c.form()
                          ? c.pendingRequest
                            ? ((c.formSubmitted = !0), !1)
                            : d()
                          : (c.focusInvalid(), !1)
                      );
                    })),
                  c);
            },
            valid: function valid() {
              var b, c, d;
              return (
                a(this[0]).is("form")
                  ? (b = this.validate().form())
                  : ((d = []),
                    (b = !0),
                    (c = a(this[0].form).validate()),
                    this.each(function () {
                      (b = c.element(this) && b),
                        b || (d = d.concat(c.errorList));
                    }),
                    (c.errorList = d)),
                b
              );
            },
            rules: function rules(b, c) {
              var d,
                e,
                f,
                g,
                h,
                i,
                j = this[0],
                k =
                  "undefined" != typeof this.attr("contenteditable") &&
                  "false" !== this.attr("contenteditable");
              if (
                null != j &&
                (!j.form &&
                  k &&
                  ((j.form = this.closest("form")[0]),
                  (j.name = this.attr("name"))),
                null != j.form)
              ) {
                if (b)
                  switch (
                    ((d = a.data(j.form, "validator").settings),
                    (e = d.rules),
                    (f = a.validator.staticRules(j)),
                    b)
                  ) {
                    case "add":
                      a.extend(f, a.validator.normalizeRule(c)),
                        delete f.messages,
                        (e[j.name] = f),
                        c.messages &&
                          (d.messages[j.name] = a.extend(
                            d.messages[j.name],
                            c.messages
                          ));
                      break;
                    case "remove":
                      return c
                        ? ((i = {}),
                          a.each(c.split(/\s/), function (a, b) {
                            (i[b] = f[b]), delete f[b];
                          }),
                          i)
                        : (delete e[j.name], f);
                  }
                return (
                  (g = a.validator.normalizeRules(
                    a.extend(
                      {},
                      a.validator.classRules(j),
                      a.validator.attributeRules(j),
                      a.validator.dataRules(j),
                      a.validator.staticRules(j)
                    ),
                    j
                  )),
                  g.required &&
                    ((h = g.required),
                    delete g.required,
                    (g = a.extend(
                      {
                        required: h,
                      },
                      g
                    ))),
                  g.remote &&
                    ((h = g.remote),
                    delete g.remote,
                    (g = a.extend(g, {
                      remote: h,
                    }))),
                  g
                );
              }
            },
          });
          var b = function b(a) {
            return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          };
          a.extend(a.expr.pseudos || a.expr[":"], {
            blank: function blank(c) {
              return !b("" + a(c).val());
            },
            filled: function filled(c) {
              var d = a(c).val();
              return null !== d && !!b("" + d);
            },
            unchecked: function unchecked(b) {
              return !a(b).prop("checked");
            },
          }),
            (a.validator = function (b, c) {
              (this.settings = a.extend(!0, {}, a.validator.defaults, b)),
                (this.currentForm = c),
                this.init();
            }),
            (a.validator.format = function (b, c) {
              return 1 === arguments.length
                ? function () {
                    var c = a.makeArray(arguments);
                    return c.unshift(b), a.validator.format.apply(this, c);
                  }
                : void 0 === c
                ? b
                : (arguments.length > 2 &&
                    c.constructor !== Array &&
                    (c = a.makeArray(arguments).slice(1)),
                  c.constructor !== Array && (c = [c]),
                  a.each(c, function (a, c) {
                    b = b.replace(
                      new RegExp("\\{" + a + "\\}", "g"),
                      function () {
                        return c;
                      }
                    );
                  }),
                  b);
            }),
            a.extend(a.validator, {
              defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: a([]),
                errorLabelContainer: a([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function onfocusin(a) {
                  (this.lastActive = a),
                    this.settings.focusCleanup &&
                      (this.settings.unhighlight &&
                        this.settings.unhighlight.call(
                          this,
                          a,
                          this.settings.errorClass,
                          this.settings.validClass
                        ),
                      this.hideThese(this.errorsFor(a)));
                },
                onfocusout: function onfocusout(a) {
                  this.checkable(a) ||
                    (!(a.name in this.submitted) && this.optional(a)) ||
                    this.element(a);
                },
                onkeyup: function onkeyup(b, c) {
                  var d = [
                    16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225,
                  ];
                  (9 === c.which && "" === this.elementValue(b)) ||
                    a.inArray(c.keyCode, d) !== -1 ||
                    ((b.name in this.submitted || b.name in this.invalid) &&
                      this.element(b));
                },
                onclick: function onclick(a) {
                  a.name in this.submitted
                    ? this.element(a)
                    : a.parentNode.name in this.submitted &&
                      this.element(a.parentNode);
                },
                highlight: function highlight(b, c, d) {
                  "radio" === b.type
                    ? this.findByName(b.name).addClass(c).removeClass(d)
                    : a(b).addClass(c).removeClass(d);
                },
                unhighlight: function unhighlight(b, c, d) {
                  "radio" === b.type
                    ? this.findByName(b.name).removeClass(c).addClass(d)
                    : a(b).removeClass(c).addClass(d);
                },
              },
              setDefaults: function setDefaults(b) {
                a.extend(a.validator.defaults, b);
              },
              messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: a.validator.format(
                  "Please enter no more than {0} characters."
                ),
                minlength: a.validator.format(
                  "Please enter at least {0} characters."
                ),
                rangelength: a.validator.format(
                  "Please enter a value between {0} and {1} characters long."
                ),
                range: a.validator.format(
                  "Please enter a value between {0} and {1}."
                ),
                max: a.validator.format(
                  "Please enter a value less than or equal to {0}."
                ),
                min: a.validator.format(
                  "Please enter a value greater than or equal to {0}."
                ),
                step: a.validator.format("Please enter a multiple of {0}."),
              },
              autoCreateRanges: !1,
              prototype: {
                init: function init() {
                  function b(b) {
                    var c =
                      "undefined" != typeof a(this).attr("contenteditable") &&
                      "false" !== a(this).attr("contenteditable");
                    if (
                      (!this.form &&
                        c &&
                        ((this.form = a(this).closest("form")[0]),
                        (this.name = a(this).attr("name"))),
                      d === this.form)
                    ) {
                      var e = a.data(this.form, "validator"),
                        f = "on" + b.type.replace(/^validate/, ""),
                        g = e.settings;
                      g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b);
                    }
                  }
                  (this.labelContainer = a(this.settings.errorLabelContainer)),
                    (this.errorContext =
                      (this.labelContainer.length && this.labelContainer) ||
                      a(this.currentForm)),
                    (this.containers = a(this.settings.errorContainer).add(
                      this.settings.errorLabelContainer
                    )),
                    (this.submitted = {}),
                    (this.valueCache = {}),
                    (this.pendingRequest = 0),
                    (this.pending = {}),
                    (this.invalid = {}),
                    this.reset();
                  var c,
                    d = this.currentForm,
                    e = (this.groups = {});
                  a.each(this.settings.groups, function (b, c) {
                    "string" == typeof c && (c = c.split(/\s/)),
                      a.each(c, function (a, c) {
                        e[c] = b;
                      });
                  }),
                    (c = this.settings.rules),
                    a.each(c, function (b, d) {
                      c[b] = a.validator.normalizeRule(d);
                    }),
                    a(this.currentForm)
                      .on(
                        "focusin.validate focusout.validate keyup.validate",
                        ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                        b
                      )
                      .on(
                        "click.validate",
                        "select, option, [type='radio'], [type='checkbox']",
                        b
                      ),
                    this.settings.invalidHandler &&
                      a(this.currentForm).on(
                        "invalid-form.validate",
                        this.settings.invalidHandler
                      );
                },
                form: function form() {
                  return (
                    this.checkForm(),
                    a.extend(this.submitted, this.errorMap),
                    (this.invalid = a.extend({}, this.errorMap)),
                    this.valid() ||
                      a(this.currentForm).triggerHandler("invalid-form", [
                        this,
                      ]),
                    this.showErrors(),
                    this.valid()
                  );
                },
                checkForm: function checkForm() {
                  this.prepareForm();
                  for (
                    var a = 0, b = (this.currentElements = this.elements());
                    b[a];
                    a++
                  ) {
                    this.check(b[a]);
                  }
                  return this.valid();
                },
                element: function element(b) {
                  var c,
                    d,
                    e = this.clean(b),
                    f = this.validationTargetFor(e),
                    g = this,
                    h = !0;
                  return (
                    void 0 === f
                      ? delete this.invalid[e.name]
                      : (this.prepareElement(f),
                        (this.currentElements = a(f)),
                        (d = this.groups[f.name]),
                        d &&
                          a.each(this.groups, function (a, b) {
                            b === d &&
                              a !== f.name &&
                              ((e = g.validationTargetFor(
                                g.clean(g.findByName(a))
                              )),
                              e &&
                                e.name in g.invalid &&
                                (g.currentElements.push(e),
                                (h = g.check(e) && h)));
                          }),
                        (c = this.check(f) !== !1),
                        (h = h && c),
                        c
                          ? (this.invalid[f.name] = !1)
                          : (this.invalid[f.name] = !0),
                        this.numberOfInvalids() ||
                          (this.toHide = this.toHide.add(this.containers)),
                        this.showErrors(),
                        a(b).attr("aria-invalid", !c)),
                    h
                  );
                },
                showErrors: function showErrors(b) {
                  if (b) {
                    var c = this;
                    a.extend(this.errorMap, b),
                      (this.errorList = a.map(this.errorMap, function (a, b) {
                        return {
                          message: a,
                          element: c.findByName(b)[0],
                        };
                      })),
                      (this.successList = a.grep(
                        this.successList,
                        function (a) {
                          return !(a.name in b);
                        }
                      ));
                  }
                  this.settings.showErrors
                    ? this.settings.showErrors.call(
                        this,
                        this.errorMap,
                        this.errorList
                      )
                    : this.defaultShowErrors();
                },
                resetForm: function resetForm() {
                  a.fn.resetForm && a(this.currentForm).resetForm(),
                    (this.invalid = {}),
                    (this.submitted = {}),
                    this.prepareForm(),
                    this.hideErrors();
                  var b = this.elements()
                    .removeData("previousValue")
                    .removeAttr("aria-invalid");
                  this.resetElements(b);
                },
                resetElements: function resetElements(a) {
                  var b;
                  if (this.settings.unhighlight)
                    for (b = 0; a[b]; b++) {
                      this.settings.unhighlight.call(
                        this,
                        a[b],
                        this.settings.errorClass,
                        ""
                      ),
                        this.findByName(a[b].name).removeClass(
                          this.settings.validClass
                        );
                    }
                  else
                    a.removeClass(this.settings.errorClass).removeClass(
                      this.settings.validClass
                    );
                },
                numberOfInvalids: function numberOfInvalids() {
                  return this.objectLength(this.invalid);
                },
                objectLength: function objectLength(a) {
                  var b,
                    c = 0;
                  for (b in a) {
                    void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
                  }
                  return c;
                },
                hideErrors: function hideErrors() {
                  this.hideThese(this.toHide);
                },
                hideThese: function hideThese(a) {
                  a.not(this.containers).text(""), this.addWrapper(a).hide();
                },
                valid: function valid() {
                  return 0 === this.size();
                },
                size: function size() {
                  return this.errorList.length;
                },
                focusInvalid: function focusInvalid() {
                  if (this.settings.focusInvalid)
                    try {
                      a(
                        this.findLastActive() ||
                          (this.errorList.length &&
                            this.errorList[0].element) ||
                          []
                      )
                        .filter(":visible")
                        .trigger("focus")
                        .trigger("focusin");
                    } catch (b) {}
                },
                findLastActive: function findLastActive() {
                  var b = this.lastActive;
                  return (
                    b &&
                    1 ===
                      a.grep(this.errorList, function (a) {
                        return a.element.name === b.name;
                      }).length &&
                    b
                  );
                },
                elements: function elements() {
                  var b = this,
                    c = {};
                  return a(this.currentForm)
                    .find("input, select, textarea, [contenteditable]")
                    .not(":submit, :reset, :image, :disabled")
                    .not(this.settings.ignore)
                    .filter(function () {
                      var d = this.name || a(this).attr("name"),
                        e =
                          "undefined" !=
                            typeof a(this).attr("contenteditable") &&
                          "false" !== a(this).attr("contenteditable");
                      return (
                        !d &&
                          b.settings.debug &&
                          window.console &&
                          console.error("%o has no name assigned", this),
                        e &&
                          ((this.form = a(this).closest("form")[0]),
                          (this.name = d)),
                        this.form === b.currentForm &&
                          !(d in c || !b.objectLength(a(this).rules())) &&
                          ((c[d] = !0), !0)
                      );
                    });
                },
                clean: function clean(b) {
                  return a(b)[0];
                },
                errors: function errors() {
                  var b = this.settings.errorClass.split(" ").join(".");
                  return a(
                    this.settings.errorElement + "." + b,
                    this.errorContext
                  );
                },
                resetInternals: function resetInternals() {
                  (this.successList = []),
                    (this.errorList = []),
                    (this.errorMap = {}),
                    (this.toShow = a([])),
                    (this.toHide = a([]));
                },
                reset: function reset() {
                  this.resetInternals(), (this.currentElements = a([]));
                },
                prepareForm: function prepareForm() {
                  this.reset(),
                    (this.toHide = this.errors().add(this.containers));
                },
                prepareElement: function prepareElement(a) {
                  this.reset(), (this.toHide = this.errorsFor(a));
                },
                elementValue: function elementValue(b) {
                  var c,
                    d,
                    e = a(b),
                    f = b.type,
                    g =
                      "undefined" != typeof e.attr("contenteditable") &&
                      "false" !== e.attr("contenteditable");
                  return "radio" === f || "checkbox" === f
                    ? this.findByName(b.name).filter(":checked").val()
                    : "number" === f && "undefined" != typeof b.validity
                    ? b.validity.badInput
                      ? "NaN"
                      : e.val()
                    : ((c = g ? e.text() : e.val()),
                      "file" === f
                        ? "C:\\fakepath\\" === c.substr(0, 12)
                          ? c.substr(12)
                          : ((d = c.lastIndexOf("/")),
                            d >= 0
                              ? c.substr(d + 1)
                              : ((d = c.lastIndexOf("\\")),
                                d >= 0 ? c.substr(d + 1) : c))
                        : "string" == typeof c
                        ? c.replace(/\r/g, "")
                        : c);
                },
                check: function check(b) {
                  b = this.validationTargetFor(this.clean(b));
                  var c,
                    d,
                    e,
                    f,
                    g = a(b).rules(),
                    h = a.map(g, function (a, b) {
                      return b;
                    }).length,
                    i = !1,
                    j = this.elementValue(b);
                  "function" == typeof g.normalizer
                    ? (f = g.normalizer)
                    : "function" == typeof this.settings.normalizer &&
                      (f = this.settings.normalizer),
                    f && ((j = f.call(b, j)), delete g.normalizer);
                  for (d in g) {
                    e = {
                      method: d,
                      parameters: g[d],
                    };
                    try {
                      if (
                        ((c = a.validator.methods[d].call(
                          this,
                          j,
                          b,
                          e.parameters
                        )),
                        "dependency-mismatch" === c && 1 === h)
                      ) {
                        i = !0;
                        continue;
                      }
                      if (((i = !1), "pending" === c))
                        return void (this.toHide = this.toHide.not(
                          this.errorsFor(b)
                        ));
                      if (!c) return this.formatAndAdd(b, e), !1;
                    } catch (k) {
                      throw (
                        (this.settings.debug &&
                          window.console &&
                          console.log(
                            "Exception occurred when checking element " +
                              b.id +
                              ", check the '" +
                              e.method +
                              "' method.",
                            k
                          ),
                        k instanceof TypeError &&
                          (k.message +=
                            ".  Exception occurred when checking element " +
                            b.id +
                            ", check the '" +
                            e.method +
                            "' method."),
                        k)
                      );
                    }
                  }
                  if (!i)
                    return this.objectLength(g) && this.successList.push(b), !0;
                },
                customDataMessage: function customDataMessage(b, c) {
                  return (
                    a(b).data(
                      "msg" +
                        c.charAt(0).toUpperCase() +
                        c.substring(1).toLowerCase()
                    ) || a(b).data("msg")
                  );
                },
                customMessage: function customMessage(a, b) {
                  var c = this.settings.messages[a];
                  return c && (c.constructor === String ? c : c[b]);
                },
                findDefined: function findDefined() {
                  for (var a = 0; a < arguments.length; a++) {
                    if (void 0 !== arguments[a]) return arguments[a];
                  }
                },
                defaultMessage: function defaultMessage(b, c) {
                  "string" == typeof c &&
                    (c = {
                      method: c,
                    });
                  var d = this.findDefined(
                      this.customMessage(b.name, c.method),
                      this.customDataMessage(b, c.method),
                      (!this.settings.ignoreTitle && b.title) || void 0,
                      a.validator.messages[c.method],
                      "<strong>Warning: No message defined for " +
                        b.name +
                        "</strong>"
                    ),
                    e = /\$?\{(\d+)\}/g;
                  return (
                    "function" == typeof d
                      ? (d = d.call(this, c.parameters, b))
                      : e.test(d) &&
                        (d = a.validator.format(
                          d.replace(e, "{$1}"),
                          c.parameters
                        )),
                    d
                  );
                },
                formatAndAdd: function formatAndAdd(a, b) {
                  var c = this.defaultMessage(a, b);
                  this.errorList.push({
                    message: c,
                    element: a,
                    method: b.method,
                  }),
                    (this.errorMap[a.name] = c),
                    (this.submitted[a.name] = c);
                },
                addWrapper: function addWrapper(a) {
                  return (
                    this.settings.wrapper &&
                      (a = a.add(a.parent(this.settings.wrapper))),
                    a
                  );
                },
                defaultShowErrors: function defaultShowErrors() {
                  var a, b, c;
                  for (a = 0; this.errorList[a]; a++) {
                    (c = this.errorList[a]),
                      this.settings.highlight &&
                        this.settings.highlight.call(
                          this,
                          c.element,
                          this.settings.errorClass,
                          this.settings.validClass
                        ),
                      this.showLabel(c.element, c.message);
                  }
                  if (
                    (this.errorList.length &&
                      (this.toShow = this.toShow.add(this.containers)),
                    this.settings.success)
                  )
                    for (a = 0; this.successList[a]; a++) {
                      this.showLabel(this.successList[a]);
                    }
                  if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++) {
                      this.settings.unhighlight.call(
                        this,
                        b[a],
                        this.settings.errorClass,
                        this.settings.validClass
                      );
                    }
                  (this.toHide = this.toHide.not(this.toShow)),
                    this.hideErrors(),
                    this.addWrapper(this.toShow).show();
                },
                validElements: function validElements() {
                  return this.currentElements.not(this.invalidElements());
                },
                invalidElements: function invalidElements() {
                  return a(this.errorList).map(function () {
                    return this.element;
                  });
                },
                showLabel: function showLabel(b, c) {
                  var d,
                    e,
                    f,
                    g,
                    h = this.errorsFor(b),
                    i = this.idOrName(b),
                    j = a(b).attr("aria-describedby");
                  h.length
                    ? (h
                        .removeClass(this.settings.validClass)
                        .addClass(this.settings.errorClass),
                      h.html(c))
                    : ((h = a("<" + this.settings.errorElement + ">")
                        .attr("id", i + "-error")
                        .addClass(this.settings.errorClass)
                        .html(c || "")),
                      (d = h),
                      this.settings.wrapper &&
                        (d = h
                          .hide()
                          .show()
                          .wrap("<" + this.settings.wrapper + "/>")
                          .parent()),
                      this.labelContainer.length
                        ? this.labelContainer.append(d)
                        : this.settings.errorPlacement
                        ? this.settings.errorPlacement.call(this, d, a(b))
                        : d.insertAfter(b),
                      h.is("label")
                        ? h.attr("for", i)
                        : 0 ===
                            h.parents(
                              "label[for='" + this.escapeCssMeta(i) + "']"
                            ).length &&
                          ((f = h.attr("id")),
                          j
                            ? j.match(
                                new RegExp(
                                  "\\b" + this.escapeCssMeta(f) + "\\b"
                                )
                              ) || (j += " " + f)
                            : (j = f),
                          a(b).attr("aria-describedby", j),
                          (e = this.groups[b.name]),
                          e &&
                            ((g = this),
                            a.each(g.groups, function (b, c) {
                              c === e &&
                                a(
                                  "[name='" + g.escapeCssMeta(b) + "']",
                                  g.currentForm
                                ).attr("aria-describedby", h.attr("id"));
                            })))),
                    !c &&
                      this.settings.success &&
                      (h.text(""),
                      "string" == typeof this.settings.success
                        ? h.addClass(this.settings.success)
                        : this.settings.success(h, b)),
                    (this.toShow = this.toShow.add(h));
                },
                errorsFor: function errorsFor(b) {
                  var c = this.escapeCssMeta(this.idOrName(b)),
                    d = a(b).attr("aria-describedby"),
                    e = "label[for='" + c + "'], label[for='" + c + "'] *";
                  return (
                    d &&
                      (e =
                        e +
                        ", #" +
                        this.escapeCssMeta(d).replace(/\s+/g, ", #")),
                    this.errors().filter(e)
                  );
                },
                escapeCssMeta: function escapeCssMeta(a) {
                  return a.replace(
                    /([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,
                    "\\$1"
                  );
                },
                idOrName: function idOrName(a) {
                  return (
                    this.groups[a.name] ||
                    (this.checkable(a) ? a.name : a.id || a.name)
                  );
                },
                validationTargetFor: function validationTargetFor(b) {
                  return (
                    this.checkable(b) && (b = this.findByName(b.name)),
                    a(b).not(this.settings.ignore)[0]
                  );
                },
                checkable: function checkable(a) {
                  return /radio|checkbox/i.test(a.type);
                },
                findByName: function findByName(b) {
                  return a(this.currentForm).find(
                    "[name='" + this.escapeCssMeta(b) + "']"
                  );
                },
                getLength: function getLength(b, c) {
                  switch (c.nodeName.toLowerCase()) {
                    case "select":
                      return a("option:selected", c).length;
                    case "input":
                      if (this.checkable(c))
                        return this.findByName(c.name).filter(":checked")
                          .length;
                  }
                  return b.length;
                },
                depend: function depend(a, b) {
                  return (
                    !this.dependTypes[_typeof(a)] ||
                    this.dependTypes[_typeof(a)](a, b)
                  );
                },
                dependTypes: {
                  boolean: function boolean(a) {
                    return a;
                  },
                  string: function string(b, c) {
                    return !!a(b, c.form).length;
                  },
                  function: function _function(a, b) {
                    return a(b);
                  },
                },
                optional: function optional(b) {
                  var c = this.elementValue(b);
                  return (
                    !a.validator.methods.required.call(this, c, b) &&
                    "dependency-mismatch"
                  );
                },
                startRequest: function startRequest(b) {
                  this.pending[b.name] ||
                    (this.pendingRequest++,
                    a(b).addClass(this.settings.pendingClass),
                    (this.pending[b.name] = !0));
                },
                stopRequest: function stopRequest(b, c) {
                  this.pendingRequest--,
                    this.pendingRequest < 0 && (this.pendingRequest = 0),
                    delete this.pending[b.name],
                    a(b).removeClass(this.settings.pendingClass),
                    c &&
                    0 === this.pendingRequest &&
                    this.formSubmitted &&
                    this.form()
                      ? (a(this.currentForm).submit(),
                        this.submitButton &&
                          a(
                            "input:hidden[name='" +
                              this.submitButton.name +
                              "']",
                            this.currentForm
                          ).remove(),
                        (this.formSubmitted = !1))
                      : !c &&
                        0 === this.pendingRequest &&
                        this.formSubmitted &&
                        (a(this.currentForm).triggerHandler("invalid-form", [
                          this,
                        ]),
                        (this.formSubmitted = !1));
                },
                previousValue: function previousValue(b, c) {
                  return (
                    (c = ("string" == typeof c && c) || "remote"),
                    a.data(b, "previousValue") ||
                      a.data(b, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(b, {
                          method: c,
                        }),
                      })
                  );
                },
                destroy: function destroy() {
                  this.resetForm(),
                    a(this.currentForm)
                      .off(".validate")
                      .removeData("validator")
                      .find(".validate-equalTo-blur")
                      .off(".validate-equalTo")
                      .removeClass("validate-equalTo-blur")
                      .find(".validate-lessThan-blur")
                      .off(".validate-lessThan")
                      .removeClass("validate-lessThan-blur")
                      .find(".validate-lessThanEqual-blur")
                      .off(".validate-lessThanEqual")
                      .removeClass("validate-lessThanEqual-blur")
                      .find(".validate-greaterThanEqual-blur")
                      .off(".validate-greaterThanEqual")
                      .removeClass("validate-greaterThanEqual-blur")
                      .find(".validate-greaterThan-blur")
                      .off(".validate-greaterThan")
                      .removeClass("validate-greaterThan-blur");
                },
              },
              classRuleSettings: {
                required: {
                  required: !0,
                },
                email: {
                  email: !0,
                },
                url: {
                  url: !0,
                },
                date: {
                  date: !0,
                },
                dateISO: {
                  dateISO: !0,
                },
                number: {
                  number: !0,
                },
                digits: {
                  digits: !0,
                },
                creditcard: {
                  creditcard: !0,
                },
              },
              addClassRules: function addClassRules(b, c) {
                b.constructor === String
                  ? (this.classRuleSettings[b] = c)
                  : a.extend(this.classRuleSettings, b);
              },
              classRules: function classRules(b) {
                var c = {},
                  d = a(b).attr("class");
                return (
                  d &&
                    a.each(d.split(" "), function () {
                      this in a.validator.classRuleSettings &&
                        a.extend(c, a.validator.classRuleSettings[this]);
                    }),
                  c
                );
              },
              normalizeAttributeRule: function normalizeAttributeRule(
                a,
                b,
                c,
                d
              ) {
                /min|max|step/.test(c) &&
                  (null === b || /number|range|text/.test(b)) &&
                  ((d = Number(d)), isNaN(d) && (d = void 0)),
                  d || 0 === d
                    ? (a[c] = d)
                    : b === c && "range" !== b && (a[c] = !0);
              },
              attributeRules: function attributeRules(b) {
                var c,
                  d,
                  e = {},
                  f = a(b),
                  g = b.getAttribute("type");
                for (c in a.validator.methods) {
                  "required" === c
                    ? ((d = b.getAttribute(c)), "" === d && (d = !0), (d = !!d))
                    : (d = f.attr(c)),
                    this.normalizeAttributeRule(e, g, c, d);
                }
                return (
                  e.maxlength &&
                    /-1|2147483647|524288/.test(e.maxlength) &&
                    delete e.maxlength,
                  e
                );
              },
              dataRules: function dataRules(b) {
                var c,
                  d,
                  e = {},
                  f = a(b),
                  g = b.getAttribute("type");
                for (c in a.validator.methods) {
                  (d = f.data(
                    "rule" +
                      c.charAt(0).toUpperCase() +
                      c.substring(1).toLowerCase()
                  )),
                    "" === d && (d = !0),
                    this.normalizeAttributeRule(e, g, c, d);
                }
                return e;
              },
              staticRules: function staticRules(b) {
                var c = {},
                  d = a.data(b.form, "validator");
                return (
                  d.settings.rules &&
                    (c =
                      a.validator.normalizeRule(d.settings.rules[b.name]) ||
                      {}),
                  c
                );
              },
              normalizeRules: function normalizeRules(b, c) {
                return (
                  a.each(b, function (d, e) {
                    if (e === !1) return void delete b[d];
                    if (e.param || e.depends) {
                      var f = !0;
                      switch (_typeof(e.depends)) {
                        case "string":
                          f = !!a(e.depends, c.form).length;
                          break;
                        case "function":
                          f = e.depends.call(c, c);
                      }
                      f
                        ? (b[d] = void 0 === e.param || e.param)
                        : (a.data(c.form, "validator").resetElements(a(c)),
                          delete b[d]);
                    }
                  }),
                  a.each(b, function (a, d) {
                    b[a] =
                      "function" == typeof d && "normalizer" !== a ? d(c) : d;
                  }),
                  a.each(["minlength", "maxlength"], function () {
                    b[this] && (b[this] = Number(b[this]));
                  }),
                  a.each(["rangelength", "range"], function () {
                    var a;
                    b[this] &&
                      (Array.isArray(b[this])
                        ? (b[this] = [Number(b[this][0]), Number(b[this][1])])
                        : "string" == typeof b[this] &&
                          ((a = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                          (b[this] = [Number(a[0]), Number(a[1])])));
                  }),
                  a.validator.autoCreateRanges &&
                    (null != b.min &&
                      null != b.max &&
                      ((b.range = [b.min, b.max]), delete b.min, delete b.max),
                    null != b.minlength &&
                      null != b.maxlength &&
                      ((b.rangelength = [b.minlength, b.maxlength]),
                      delete b.minlength,
                      delete b.maxlength)),
                  b
                );
              },
              normalizeRule: function normalizeRule(b) {
                if ("string" == typeof b) {
                  var c = {};
                  a.each(b.split(/\s/), function () {
                    c[this] = !0;
                  }),
                    (b = c);
                }
                return b;
              },
              addMethod: function addMethod(b, c, d) {
                (a.validator.methods[b] = c),
                  (a.validator.messages[b] =
                    void 0 !== d ? d : a.validator.messages[b]),
                  c.length < 3 &&
                    a.validator.addClassRules(b, a.validator.normalizeRule(b));
              },
              methods: {
                required: function required(b, c, d) {
                  if (!this.depend(d, c)) return "dependency-mismatch";
                  if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0;
                  }
                  return this.checkable(c)
                    ? this.getLength(b, c) > 0
                    : void 0 !== b && null !== b && b.length > 0;
                },
                email: function email(a, b) {
                  return (
                    this.optional(b) ||
                    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                      a
                    )
                  );
                },
                url: function url(a, b) {
                  return (
                    this.optional(b) ||
                    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(
                      a
                    )
                  );
                },
                date: (function () {
                  var a = !1;
                  return function (b, c) {
                    return (
                      a ||
                        ((a = !0),
                        this.settings.debug &&
                          window.console &&
                          console.warn(
                            "The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`."
                          )),
                      this.optional(c) ||
                        !/Invalid|NaN/.test(new Date(b).toString())
                    );
                  };
                })(),
                dateISO: function dateISO(a, b) {
                  return (
                    this.optional(b) ||
                    /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
                      a
                    )
                  );
                },
                number: function number(a, b) {
                  return (
                    this.optional(b) ||
                    /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
                  );
                },
                digits: function digits(a, b) {
                  return this.optional(b) || /^\d+$/.test(a);
                },
                minlength: function minlength(a, b, c) {
                  var d = Array.isArray(a) ? a.length : this.getLength(a, b);
                  return this.optional(b) || d >= c;
                },
                maxlength: function maxlength(a, b, c) {
                  var d = Array.isArray(a) ? a.length : this.getLength(a, b);
                  return this.optional(b) || d <= c;
                },
                rangelength: function rangelength(a, b, c) {
                  var d = Array.isArray(a) ? a.length : this.getLength(a, b);
                  return this.optional(b) || (d >= c[0] && d <= c[1]);
                },
                min: function min(a, b, c) {
                  return this.optional(b) || a >= c;
                },
                max: function max(a, b, c) {
                  return this.optional(b) || a <= c;
                },
                range: function range(a, b, c) {
                  return this.optional(b) || (a >= c[0] && a <= c[1]);
                },
                step: function step(b, c, d) {
                  var e,
                    f = a(c).attr("type"),
                    g =
                      "Step attribute on input type " +
                      f +
                      " is not supported.",
                    h = ["text", "number", "range"],
                    i = new RegExp("\\b" + f + "\\b"),
                    j = f && !i.test(h.join()),
                    k = function k(a) {
                      var b = ("" + a).match(/(?:\.(\d+))?$/);
                      return b && b[1] ? b[1].length : 0;
                    },
                    l = function l(a) {
                      return Math.round(a * Math.pow(10, e));
                    },
                    m = !0;
                  if (j) throw new Error(g);
                  return (
                    (e = k(d)),
                    (k(b) > e || l(b) % l(d) !== 0) && (m = !1),
                    this.optional(c) || m
                  );
                },
                equalTo: function equalTo(b, c, d) {
                  var e = a(d);
                  return (
                    this.settings.onfocusout &&
                      e.not(".validate-equalTo-blur").length &&
                      e
                        .addClass("validate-equalTo-blur")
                        .on("blur.validate-equalTo", function () {
                          a(c).valid();
                        }),
                    b === e.val()
                  );
                },
                remote: function remote(b, c, d, e) {
                  if (this.optional(c)) return "dependency-mismatch";
                  e = ("string" == typeof e && e) || "remote";
                  var f,
                    g,
                    h,
                    i = this.previousValue(c, e);
                  return (
                    this.settings.messages[c.name] ||
                      (this.settings.messages[c.name] = {}),
                    (i.originalMessage =
                      i.originalMessage || this.settings.messages[c.name][e]),
                    (this.settings.messages[c.name][e] = i.message),
                    (d =
                      ("string" == typeof d && {
                        url: d,
                      }) ||
                      d),
                    (h = a.param(
                      a.extend(
                        {
                          data: b,
                        },
                        d.data
                      )
                    )),
                    i.old === h
                      ? i.valid
                      : ((i.old = h),
                        (f = this),
                        this.startRequest(c),
                        (g = {}),
                        (g[c.name] = b),
                        a.ajax(
                          a.extend(
                            !0,
                            {
                              mode: "abort",
                              port: "validate" + c.name,
                              dataType: "json",
                              data: g,
                              context: f.currentForm,
                              success: function success(a) {
                                var d,
                                  g,
                                  h,
                                  j = a === !0 || "true" === a;
                                (f.settings.messages[c.name][e] =
                                  i.originalMessage),
                                  j
                                    ? ((h = f.formSubmitted),
                                      f.resetInternals(),
                                      (f.toHide = f.errorsFor(c)),
                                      (f.formSubmitted = h),
                                      f.successList.push(c),
                                      (f.invalid[c.name] = !1),
                                      f.showErrors())
                                    : ((d = {}),
                                      (g =
                                        a ||
                                        f.defaultMessage(c, {
                                          method: e,
                                          parameters: b,
                                        })),
                                      (d[c.name] = i.message = g),
                                      (f.invalid[c.name] = !0),
                                      f.showErrors(d)),
                                  (i.valid = j),
                                  f.stopRequest(c, j);
                              },
                            },
                            d
                          )
                        ),
                        "pending")
                  );
                },
              },
            });
          var c,
            d = {};
          return (
            a.ajaxPrefilter
              ? a.ajaxPrefilter(function (a, b, c) {
                  var e = a.port;
                  "abort" === a.mode && (d[e] && d[e].abort(), (d[e] = c));
                })
              : ((c = a.ajax),
                (a.ajax = function (b) {
                  var e = ("mode" in b ? b : a.ajaxSettings).mode,
                    f = ("port" in b ? b : a.ajaxSettings).port;
                  return "abort" === e
                    ? (d[f] && d[f].abort(),
                      (d[f] = c.apply(this, arguments)),
                      d[f])
                    : c.apply(this, arguments);
                })),
            a
          );
        });

        /***/
      },

    /***/ "./public/_web/js/script.js":
      /*!**********************************!*\
  !*** ./public/_web/js/script.js ***!
  \**********************************/
      /***/ function (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) {
        /* provided dependency */ var __webpack_provided_window_dot_jQuery =
          __webpack_require__(
            /*! jquery */ "./node_modules/jquery/dist/jquery.js"
          );
        /* provided dependency */ var $ = __webpack_require__(
          /*! jquery */ "./node_modules/jquery/dist/jquery.js"
        );
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        window.getCookie = function (n) {
          for (
            var t = n + "=", e = document.cookie.split(";"), r = 0;
            r < e.length;
            r++
          ) {
            for (var i = e[r]; " " == i.charAt(0); ) {
              i = i.substring(1, i.length);
            }
            if (0 == i.indexOf(t)) return i.substring(t.length, i.length);
          }
          return null;
        };
        !(function (o) {
          var t = o.fn.select2.amd.require("select2/defaults");
          o.extend(t.defaults, {
            dropdownPosition: "auto",
          });
          var e = o.fn.select2.amd.require("select2/dropdown/attachBody");
          e.prototype._positionDropdown;
          e.prototype._positionDropdown = function () {
            var t = o(window),
              e = this.$dropdown.hasClass("select2-dropdown--above"),
              s = this.$dropdown.hasClass("select2-dropdown--below"),
              n = null,
              r = this.$container.offset();
            r.bottom = r.top + this.$container.outerHeight(!1);
            var i = {
              height: this.$container.outerHeight(!1),
            };
            (i.top = r.top), (i.bottom = r.top + i.height);
            var d = this.$dropdown.outerHeight(!1),
              a = t.scrollTop(),
              l = t.scrollTop() + t.height(),
              p = a < r.top - d,
              c = l > r.bottom + d,
              w = {
                left: r.left,
                top: i.bottom,
              },
              h = this.$dropdownParent;
            "static" === h.css("position") && (h = h.offsetParent());
            var b = h.offset();
            (w.top -= b.top), (w.left -= b.left);
            var f = this.options.get("dropdownPosition");
            "above" === f || "below" === f
              ? (n = f)
              : (e || s || (n = "below"),
                c || !p || e ? !p && c && e && (n = "below") : (n = "above")),
              ("above" == n || (e && "below" !== n)) &&
                (w.top = i.top - b.top - d),
              null != n &&
                (this.$dropdown
                  .removeClass(
                    "select2-dropdown--below select2-dropdown--above"
                  )
                  .addClass("select2-dropdown--" + n),
                this.$container
                  .removeClass(
                    "select2-container--below select2-container--above"
                  )
                  .addClass("select2-container--" + n)),
              this.$dropdownContainer.css(w);
          };
        })(__webpack_provided_window_dot_jQuery);
        window.init_select2 = function () {
          $("select.select2:not(.select2-hidden-accessible)").select2({
            placeholder: function placeholder() {
              return $(this).data("placeholder");
            },
            dropdownPosition: "below",
            minimumResultsForSearch: -1,
            language: {
              noResults: function noResults() {
                return "KhÃ´ng cÃ³ káº¿t quáº£ phÃ¹ há»£p";
              },
            },
            escapeMarkup: function escapeMarkup(markup) {
              return markup;
            },
          });
          $("select.select2-search:not(.select2-hidden-accessible)").select2({
            placeholder: function placeholder() {
              return $(this).data("placeholder");
            },
            dropdownPosition: "below",
            minimumResultsForSearch: 1,
            language: {
              noResults: function noResults() {
                return "KhÃ´ng cÃ³ káº¿t quáº£ phÃ¹ há»£p";
              },
            },
            escapeMarkup: function escapeMarkup(markup) {
              return markup;
            },
          });
          $("select.select2-html:not(.select2-hidden-accessible)").select2({
            templateResult: function templateResult(data) {
              return $(data.element).data("html");
            },
            placeholder: function placeholder() {
              return $(this).data("placeholder");
            },
            dropdownPosition: "below",
            dropdownAutoWidth: false,
            minimumResultsForSearch: 1,
            language: {
              noResults: function noResults() {
                return "KhÃ´ng cÃ³ káº¿t quáº£ phÃ¹ há»£p";
              },
            },
            escapeMarkup: function escapeMarkup(markup) {
              return markup;
            },
          });
        };
        init_select2();
        window.set_select2_multiple = function () {
          var value =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : null;
          var select2_multiple = $(
            "select.select2-multiple:not(.select2-hidden-accessible)"
          );
          select2_multiple
            .select2({
              multiple: true,
              placeholder: function placeholder() {
                return $(this).data("placeholder");
              },
              dropdownPosition: "below",
              minimumResultsForSearch: -1,
              language: {
                noResults: function noResults() {
                  return "KhÃ´ng cÃ³ káº¿t quáº£ phÃ¹ há»£p";
                },
              },
              escapeMarkup: function escapeMarkup(markup) {
                return markup;
              },
            })
            .val(value)
            .trigger("change");
          select2_multiple.on("select2:select", function (event) {
            var element = event.params.data.element;
            var $element = $(element);
            window.setTimeout(function () {
              if (select2_multiple.find(":selected").length > 1) {
                var $second = select2_multiple.find(":selected").eq(-2);
                $element.detach();
                $second.after($element);
              } else {
                $element.detach();
                select2_multiple.prepend($element);
              }
              select2_multiple.trigger("change");
            }, 1);
          });
          select2_multiple.on("select2:unselect", function (event) {
            if (select2_multiple.find(":selected").length) {
              var element = event.params.data.element;
              var $element = $(element);
              select2_multiple.append($element);
              select2_multiple.trigger("change");
            }
          });
        };
        $(document).on("click", ".input-group-text", function (e) {
          e.preventDefault();
          if (!$(this).siblings("input").is(":disabled"))
            $(this).siblings("input").trigger("click");
        });
        $.ajaxSetup({
          headers: {
            "X-CSRF-TOKEN": getCookie("_code"),
          },
          beforeSend: function beforeSend(xhr) {},
        });
        $(document).on({
          ajaxStart: function ajaxStart() {
            $("body").append(decodeURIComponent(getCookie("_gifLoading")));
          },
          ajaxStop: function ajaxStop() {
            $("#ajax-loading").remove();
          },
        });
        window.notify_success = function () {
          var text =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : null;
          var heading =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : false;
          if (text) {
            $.toast({
              text: text,
              hideAfter: 10000,
              allowToastClose: false,
              loader: true,
              showHideTransition: "fade",
              stack: 3,
              loaderBg: "#00000057",
              position: {
                bottom: 82,
                right: 5,
              },
              // icon: 'success',
            });
          }
        };

        window.notify_warning = function () {
          var text =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : null;
          var heading =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : false;
          if (text) {
            $.toast({
              text: text,
              hideAfter: 10000,
              allowToastClose: false,
              loader: true,
              showHideTransition: "fade",
              stack: 3,
              loaderBg: "#00000057",
              position: {
                bottom: 82,
                right: 5,
              },
              // icon: 'warning',
            });
          }
        };

        window.notify_error = function () {
          var text =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : null;
          var heading =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : false;
          if (text) {
            $.toast({
              text: text,
              hideAfter: 10000,
              allowToastClose: false,
              loader: true,
              showHideTransition: "fade",
              stack: 3,
              loaderBg: "#00000057",
              position: {
                bottom: 82,
                right: 5,
              },
              // icon: 'error',
            });
          }
        };

        window.notify_info = function () {
          var text =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : null;
          var heading =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : false;
          if (text) {
            $.toast({
              text: text,
              hideAfter: 10000,
              allowToastClose: false,
              loader: true,
              showHideTransition: "fade",
              stack: 3,
              loaderBg: "#00000057",
              position: {
                bottom: 82,
                right: 5,
              },
              // icon: 'info',
            });
          }
        };

        window.notify = function () {
          var text =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : null;
          var heading =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : false;
          if (text) {
            $.toast({
              text: text,
              hideAfter: 10000,
              allowToastClose: false,
              loader: true,
              showHideTransition: "fade",
              stack: 3,
              loaderBg: "#00000057",
              position: {
                bottom: 82,
                right: 5,
              },
            });
          }
        };
        window.notify_confirm = function (text, callback) {
          if (text) {
            return Swal.fire({
              icon: "warning",
              title: text,
              showCancelButton: true,
              confirmButtonColor: "",
              confirmButtonText: "Äá»“ng Ã½",
              cancelButtonText: "Há»§y",
            }).then(function (confirmed) {
              callback(confirmed && confirmed.value == true);
            });
          }
        };
        window.create_notify_error = function () {
          var res =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : null;
          if (res.responseJSON) {
            if (res.responseJSON.errors) {
              $.each(res.responseJSON.errors, function (index, value) {
                $('[name="' + index + '"]').addClass("error");
                $('[name="' + index + '"]').after(
                  '<span class="text-error">' + value + "</span>"
                );
                $(document).on(
                  "change click keyup input paste",
                  'input[name="' + index + '"]',
                  function (e) {
                    $(this).removeClass("error");
                    $(this).siblings(".text-error").remove();
                  }
                );
              });
            }
            if (res.responseJSON.error) notify_error(res.responseJSON.error);
          } else {
            notify_error(_messageErrorDefault);
          }
        };
        window.redirect_url = function () {
          var url =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : null;
          var timer =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : 0;
          if (url) {
            setTimeout(
              function (_url) {
                window.location.href = _url;
              },
              timer,
              url
            );
          }
        };
        window.reload_page = function () {
          var timer =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 0;
          setTimeout(function () {
            var url = window.location.href.split("?")[0];
            window.location.href = url;
          }, timer);
        };
        window.loadPageParamCurrent = function () {
          var url_string = window.location.href;
          var url_current = new URL(url_string);
          var page = url_current.searchParams.get("page");
          return page ? page : false;
        };
        var sweetAlertButton = Swal.mixin({
          allowOutsideClick: false,
          customClass: {
            confirmButton: "btn btn-sm btn-success mgr-5",
            cancelButton: "btn btn-sm btn-danger",
          },
          padding: "15px",
          buttonsStyling: false,
        });
        window.copyToClipboard = function (element) {
          var $temp = $("<input>"),
            $value = $(element).data("copy")
              ? $(element).data("copy")
              : $(element).val()
              ? $(element).val()
              : $(element).text()
              ? $(element).text()
              : "";
          $("body").append($temp);
          $temp.val($value).select();
          document.execCommand("copy");
          $temp.remove();
          notify_success("ÄÃ£ sao chÃ©p vÃ o Clipboard !");
        };
        $.fn.hasId = function (id) {
          return this.attr("id") == id;
        };
        $(document).on("click", ".badge,.copy", function (e) {
          e.preventDefault();
          copyToClipboard($(this));
        });
        window.isInteger = function (x) {
          if (typeof x == "number" && !isNaN(x)) {
            if (Number.isInteger(x)) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        };
        window.isFloat = function (x) {
          if (typeof x == "number" && !isNaN(x)) {
            if (Number.isInteger(x)) {
              return false;
            } else {
              return true;
            }
          } else {
            return false;
          }
        };
        $.validator.addMethod(
          "validatePassword",
          function (value, element) {
            return (
              this.optional(element) ||
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/i.test(value)
            );
          },
          "Password nÃªn tá»« 6 Ä‘áº¿n 30 kÃ½ tá»± bao gá»“m chá»¯ hoa, chá»¯ thÆ°á»ng vÃ  Ã­t nháº¥t má»™t chá»¯ sá»‘"
        );
        $.validator.addMethod(
          "validateEmail",
          function (value, element) {
            return (
              this.optional(element) ||
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                value
              )
            );
          },
          "Email khÃ´ng Ä‘Ãºng Ä‘á»‹nh dáº¡ng"
        );
        $.validator.addMethod(
          "validatePhoneVN",
          function (value, element) {
            return (
              this.optional(element) ||
              /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/.test(value)
            );
          },
          "Sá»‘ Ä‘iá»‡n thoáº¡i khÃ´ng Ä‘Ãºng Ä‘á»‹nh dáº¡ng"
        );
        window.removeAscent = function (str) {
          if (str === null || str === undefined) return str;
          str = str.toLowerCase();
          str = str.replace(
            /Ã |Ã¡|áº¡|áº£|Ã£|Ã¢|áº§|áº¥|áº­|áº©|áº«|Äƒ|áº±|áº¯|áº·|áº³|áºµ/g,
            "a"
          );
          str = str.replace(/Ã¨|Ã©|áº¹|áº»|áº½|Ãª|á»|áº¿|á»‡|á»ƒ|á»…/g, "e");
          str = str.replace(/Ã¬|Ã­|á»‹|á»‰|Ä©/g, "i");
          str = str.replace(
            /Ã²|Ã³|á»|á»|Ãµ|Ã´|á»“|á»‘|á»™|á»•|á»—|Æ¡|á»|á»›|á»£|á»Ÿ|á»¡/g,
            "o"
          );
          str = str.replace(/Ã¹|Ãº|á»¥|á»§|Å©|Æ°|á»«|á»©|á»±|á»­|á»¯/g, "u");
          str = str.replace(/á»³|Ã½|á»µ|á»·|á»¹/g, "y");
          str = str.replace(/Ä‘/g, "d");
          return str;
        };
        $.validator.addMethod(
          "validateName",
          function (value, element) {
            return (
              this.optional(element) ||
              /^[a-zA-Z ]{3,32}$/i.test(removeAscent(value))
            );
          },
          "Há» tÃªn tá»« 3 tá»›i 32 kÃ½ tá»±, bao gá»“m chá»¯ chá»¯ hoa, chá»¯ thÆ°á»ng vÃ  khoáº£ng trá»‘ng."
        );
        $.validator.addMethod(
          "validateUserName",
          function (value, element) {
            return (
              this.optional(element) || /^[0-9a-zA-Z_]{6,30}$/i.test(value)
            );
          },
          "TÃªn Ä‘Äƒng nháº­p tá»« 6 tá»›i 30 kÃ½ tá»±, bao gá»“m chá»¯ sá»‘, chá»¯ cÃ¡i in hoa, in thÆ°á»ng khÃ´ng dáº¥u vÃ  dáº¥u gáº¡ch dÆ°á»›i."
        );
        window.checkChildWindow = function (window, onclose) {
          var infinite = setTimeout(function () {
              checkChildWindow(window, onclose);
            }, 100),
            closing = false;
          try {
            if (window.closed || window.top == null) closing = true;
          } catch (e) {
            closing = true;
          }
          if (closing) {
            clearTimeout(infinite);
            onclose();
          }
        };
        var first_load = true;
        var allow_get_data_one = true;
        window.get_data_one = function () {
          var animate =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : true;
          if (!allow_get_data_one) return;
          $.ajax({
            type: "POST",
            url: _route_getDataOne,
            data: null,
            global: false,
            success: function success(res, status) {
              if (res.data) {
                var data = JSON.parse(res.data);
                if (data.gameLevelOne && data.gameLevelOnePrevious)
                  set_result_one(
                    data.gameLevelOne,
                    data.gameLevelOnePrevious,
                    animate
                  );
              }
            },
            error: function error(res) {
              create_notify_error(res);
              reload_page();
            },
            complete: function complete() {},
          });
        };
        var gameTimerOneInterval;
        window.set_result_one = function () {
          var gameLevel =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : null;
          var gameLevelPrevious =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : null;
          var animate =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : true;
          if (gameLevel && gameLevelPrevious) {
            if (first_load == false) {
              $("#data__LevelOne-bom1").text("-");
              $("#data__LevelOne-bom2").text("-");
              $("#data__LevelOne-bom3").text("-");
              $("#data__LevelOne-bom4").text("-");
              $("#data__LevelOne-bom5").text("-");
            }
            if (_typeof(gameLevel.seconds) !== undefined) {
              if (gameTimerOneInterval) clearInterval(gameTimerOneInterval);
              var timer = gameLevel.seconds,
                minutes,
                seconds;
              gameTimerOneInterval = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                $("#data__LevelOne-timer").text(minutes + ":" + seconds);
                if (--timer < 0) {
                  $("#formNotify").addClass("active");
                  setTimeout(function () {
                    $("#formNotify").removeClass("active");
                  }, 10000);
                  get_data_one();
                  clearInterval(gameTimerOneInterval);
                }
              }, 1000);
            }
            if (_typeof(gameLevel.id) !== undefined) {
              $("#button__LevelOne").attr("data-game", gameLevel.id);
              if ($("#button__LevelOne").hasClass("active"))
                $("#formBet__ID").val(gameLevel.id);
            }
            if (_typeof(gameLevel.no) !== undefined)
              $("#data__LevelOne-noNext").text(gameLevel.no);
            if (_typeof(gameLevelPrevious.no) !== undefined)
              $("#data__LevelOne-noCurrent").text(gameLevelPrevious.no);
            if (_typeof(gameLevelPrevious.bom_1) !== undefined) {
              if (animate == true && first_load == false) {
                setTimeout(function () {
                  $("#data__LevelOne-bom1").text(gameLevelPrevious.bom_1);
                }, 300);
              } else {
                $("#data__LevelOne-bom1").text(gameLevelPrevious.bom_1);
              }
            }
            if (_typeof(gameLevelPrevious.bom_2) !== undefined) {
              if (animate == true && first_load == false) {
                setTimeout(function () {
                  $("#data__LevelOne-bom2").text(gameLevelPrevious.bom_2);
                }, 600);
              } else {
                $("#data__LevelOne-bom2").text(gameLevelPrevious.bom_2);
              }
            }
            if (_typeof(gameLevelPrevious.bom_3) !== undefined) {
              if (animate == true && first_load == false) {
                setTimeout(function () {
                  $("#data__LevelOne-bom3").text(gameLevelPrevious.bom_3);
                }, 900);
              } else {
                $("#data__LevelOne-bom3").text(gameLevelPrevious.bom_3);
              }
            }
            if (_typeof(gameLevelPrevious.bom_4) !== undefined) {
              if (animate == true && first_load == false) {
                setTimeout(function () {
                  $("#data__LevelOne-bom4").text(gameLevelPrevious.bom_4);
                }, 1200);
              } else {
                $("#data__LevelOne-bom4").text(gameLevelPrevious.bom_4);
              }
            }
            if (_typeof(gameLevelPrevious.bom_5) !== undefined) {
              if (animate == true && first_load == false) {
                setTimeout(function () {
                  $("#data__LevelOne-bom5").text(gameLevelPrevious.bom_5);
                }, 1500);
              } else {
                $("#data__LevelOne-bom5").text(gameLevelPrevious.bom_5);
              }
            }
            allow_get_data_one = true;
          }
        };
        var allow_get_data_three = true;
        window.get_data_three = function () {
          var animate =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : true;
          if (!allow_get_data_three) return;
          $.ajax({
            type: "POST",
            url: _route_getDataThree,
            data: null,
            global: false,
            success: function success(res, status) {
              if (res.data) {
                var data = JSON.parse(res.data);
                if (data.gameLevelThree && data.gameLevelThreePrevious)
                  set_result_three(
                    data.gameLevelThree,
                    data.gameLevelThreePrevious,
                    animate
                  );
              }
            },
            error: function error(res) {
              create_notify_error(res);
              reload_page();
            },
            complete: function complete() {},
          });
        };
        var gameTimerThreeInterval;
        window.set_result_three = function () {
          var gameLevel =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : null;
          var gameLevelPrevious =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : null;
          var animate =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : true;
          if (gameLevel && gameLevelPrevious) {
            if (first_load == false) {
              $("#data__LevelThree-bom1").text("-");
              $("#data__LevelThree-bom2").text("-");
              $("#data__LevelThree-bom3").text("-");
              $("#data__LevelThree-bom4").text("-");
              $("#data__LevelThree-bom5").text("-");
            }
            if (_typeof(gameLevel.seconds) !== undefined) {
              if (_gameTimerThreeInterval)
                clearInterval(_gameTimerThreeInterval);
              var timer = gameLevel.seconds,
                minutes,
                seconds;
              var _gameTimerThreeInterval = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                $("#data__LevelThree-timer").text(minutes + ":" + seconds);
                if (--timer < 0) {
                  $("#formNotify").addClass("active");
                  setTimeout(function () {
                    $("#formNotify").removeClass("active");
                  }, 10000);
                  get_data_three();
                  clearInterval(_gameTimerThreeInterval);
                }
              }, 1000);
            }
            if (_typeof(gameLevel.id) !== undefined) {
              $("#button__LevelThree").attr("data-game", gameLevel.id);
              if ($("#button__LevelThree").hasClass("active"))
                $("#formBet__ID").val(gameLevel.id);
            }
            if (_typeof(gameLevel.no) !== undefined)
              $("#data__LevelThree-noNext").text(gameLevel.no);
            if (_typeof(gameLevelPrevious.no) !== undefined)
              $("#data__LevelThree-noCurrent").text(gameLevelPrevious.no);
            if (_typeof(gameLevelPrevious.bom_1) !== undefined) {
              if (animate == true && first_load == false) {
                setTimeout(function () {
                  $("#data__LevelThree-bom1").text(gameLevelPrevious.bom_1);
                }, 300);
              } else {
                $("#data__LevelThree-bom1").text(gameLevelPrevious.bom_1);
              }
            }
            if (_typeof(gameLevelPrevious.bom_2) !== undefined) {
              if (animate == true && first_load == false) {
                setTimeout(function () {
                  $("#data__LevelThree-bom2").text(gameLevelPrevious.bom_2);
                }, 600);
              } else {
                $("#data__LevelThree-bom2").text(gameLevelPrevious.bom_2);
              }
            }
            if (_typeof(gameLevelPrevious.bom_3) !== undefined) {
              if (animate == true && first_load == false) {
                setTimeout(function () {
                  $("#data__LevelThree-bom3").text(gameLevelPrevious.bom_3);
                }, 900);
              } else {
                $("#data__LevelThree-bom3").text(gameLevelPrevious.bom_3);
              }
            }
            if (_typeof(gameLevelPrevious.bom_4) !== undefined) {
              if (animate == true && first_load == false) {
                setTimeout(function () {
                  $("#data__LevelThree-bom4").text(gameLevelPrevious.bom_4);
                }, 1200);
              } else {
                $("#data__LevelThree-bom4").text(gameLevelPrevious.bom_4);
              }
            }
            if (_typeof(gameLevelPrevious.bom_5) !== undefined) {
              if (animate == true && first_load == false) {
                setTimeout(function () {
                  $("#data__LevelThree-bom5").text(gameLevelPrevious.bom_5);
                }, 1500);
              } else {
                $("#data__LevelThree-bom5").text(gameLevelPrevious.bom_5);
              }
            }
            allow_get_data_three = true;
          }
        };
        var allow_get_data_five = true;
        window.get_data_five = function () {
          var animate =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : true;
          if (!allow_get_data_five) return;
          $.ajax({
            type: "POST",
            url: _route_getDataFive,
            data: null,
            global: false,
            success: function success(res, status) {
              if (res.data) {
                var data = JSON.parse(res.data);
                if (data.gameLevelFive && data.gameLevelFivePrevious)
                  set_result_five(
                    data.gameLevelFive,
                    data.gameLevelFivePrevious,
                    animate
                  );
              }
            },
            error: function error(res) {
              create_notify_error(res);
              reload_page();
            },
            complete: function complete() {},
          });
        };
        var gameTimerFiveInterval;
        window.set_result_five = function () {
          var gameLevel =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : null;
          var gameLevelPrevious =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : null;
          var animate =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : true;
          if (gameLevel && gameLevelPrevious) {
            if (first_load == false) {
              $("#data__LevelFive-bom1").text("-");
              $("#data__LevelFive-bom2").text("-");
              $("#data__LevelFive-bom3").text("-");
              $("#data__LevelFive-bom4").text("-");
              $("#data__LevelFive-bom5").text("-");
            }
            if (_typeof(gameLevel.seconds) !== undefined) {
              if (_gameTimerFiveInterval) clearInterval(_gameTimerFiveInterval);
              var timer = gameLevel.seconds,
                minutes,
                seconds;
              var _gameTimerFiveInterval = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                $("#data__LevelFive-timer").text(minutes + ":" + seconds);
                if (--timer < 0) {
                  $("#formNotify").addClass("active");
                  setTimeout(function () {
                    $("#formNotify").removeClass("active");
                  }, 10000);
                  get_data_five();
                  clearInterval(_gameTimerFiveInterval);
                }
              }, 1000);
            }
            if (_typeof(gameLevel.id) !== undefined) {
              $("#button__LevelFive").attr("data-game", gameLevel.id);
              if ($("#button__LevelThree").hasClass("active"))
                $("#formBet__ID").val(gameLevel.id);
            }
            if (_typeof(gameLevel.no) !== undefined)
              $("#data__LevelFive-noNext").text(gameLevel.no);
            if (_typeof(gameLevelPrevious.no) !== undefined)
              $("#data__LevelFive-noCurrent").text(gameLevelPrevious.no);
            if (_typeof(gameLevelPrevious.bom_1) !== undefined) {
              if (animate == true && first_load == false) {
                setTimeout(function () {
                  $("#data__LevelFive-bom1").text(gameLevelPrevious.bom_1);
                }, 300);
              } else {
                $("#data__LevelFive-bom1").text(gameLevelPrevious.bom_1);
              }
            }
            if (_typeof(gameLevelPrevious.bom_2) !== undefined) {
              if (animate == true && first_load == false) {
                setTimeout(function () {
                  $("#data__LevelFive-bom2").text(gameLevelPrevious.bom_2);
                }, 600);
              } else {
                $("#data__LevelFive-bom2").text(gameLevelPrevious.bom_2);
              }
            }
            if (_typeof(gameLevelPrevious.bom_3) !== undefined) {
              if (animate == true && first_load == false) {
                setTimeout(function () {
                  $("#data__LevelFive-bom3").text(gameLevelPrevious.bom_3);
                }, 900);
              } else {
                $("#data__LevelFive-bom3").text(gameLevelPrevious.bom_3);
              }
            }
            if (_typeof(gameLevelPrevious.bom_4) !== undefined) {
              if (animate == true && first_load == false) {
                setTimeout(function () {
                  $("#data__LevelFive-bom4").text(gameLevelPrevious.bom_4);
                }, 1200);
              } else {
                $("#data__LevelFive-bom4").text(gameLevelPrevious.bom_4);
              }
            }
            if (_typeof(gameLevelPrevious.bom_5) !== undefined) {
              if (animate == true && first_load == false) {
                setTimeout(function () {
                  $("#data__LevelFive-bom5").text(gameLevelPrevious.bom_5);
                }, 1500);
              } else {
                $("#data__LevelFive-bom5").text(gameLevelPrevious.bom_5);
              }
            }
            allow_get_data_five = true;
          }
        };
        var allow_get_data = true;
        window.get_data = function () {
          var animate =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : true;
          if (!allow_get_data) return;
          $.ajax({
            type: "POST",
            url: _route_getData,
            data: null,
            global: false,
            success: function success(res, status) {
              if (res.data) {
                var data = JSON.parse(res.data);
                if (data.userID) {
                  $("#data__ID").text(data.userID);
                  $("#account__ID").text(data.userID);
                }
                if (data.userBalance) {
                  $("#data__balance").text(data.userBalance);
                  $("#account__balance").text(data.userBalance);
                }
                $(".formBet__pick-item.default").trigger("click");
                if (data.gameLevelOne && data.gameLevelOnePrevious)
                  set_result_one(
                    data.gameLevelOne,
                    data.gameLevelOnePrevious,
                    animate
                  );
                if (data.gameLevelThree && data.gameLevelThreePrevious)
                  set_result_three(
                    data.gameLevelThree,
                    data.gameLevelThreePrevious,
                    animate
                  );
                if (data.gameLevelFive && data.gameLevelFivePrevious)
                  set_result_five(
                    data.gameLevelFive,
                    data.gameLevelFivePrevious,
                    animate
                  );
              }
            },
            error: function error(res) {
              notify_error(_messageErrorDefault);
            },
            complete: function complete() {
              allow_get_data = true;
            },
          });
        };
        get_data(false);
        var allow_get_trend = true;
        window.get_trend = function () {
          if (!allow_get_trend) return;
          allow_get_trend = false;
          $.ajax({
            type: "POST",
            url: _route_getTrend,
            data: null,
            global: false,
            success: function success(res, status) {
              if (res.data.gamesOne)
                $("#trend__LevelOne__content").html(res.data.gamesOne);
              if (res.data.gamesThree)
                $("#trend__LevelThree__content").html(res.data.gamesThree);
              if (res.data.gamesFive)
                $("#trend__LevelFive__content").html(res.data.gamesFive);
            },
            error: function error(res) {
              create_notify_error(res);
              reload_page();
            },
            complete: function complete() {
              allow_get_trend = true;
            },
          });
        };
        var allow_bet = true;
        $(document).on("click", "#formBet__button-submit", function (e) {
          e.preventDefault();
          var form = $("#formBet__form");
          form
            .submit(function (e) {
              e.preventDefault();
              if (!allow_bet) return;
              allow_bet = false;
              var formData = $(this).serialize();
              var formAction = $(this).prop("action");
              $.ajax({
                type: "POST",
                url: formAction,
                data: formData,
                enctype: "multipart/form-data",
                processData: false,
                global: false,
                success: function success(res, status) {
                  if (res.message) {
                    notify_success(res.message);
                  }
                  if (res.user_balance) {
                    $("#data__balance").text(res.user_balance);
                    $("#account__balance").text(res.user_balance);
                  }
                },
                error: function error(res) {
                  var responseText = JSON.parse(res.responseText);
                  if (responseText.error) {
                    notify_warning(responseText.error);
                  } else {
                    notify_error(_messageErrorDefault);
                    reload_page();
                  }
                },
                complete: function complete() {
                  $("#formBet").removeClass("active");
                  allow_bet = true;
                },
              });
            })
            .trigger("submit");
        });
        var allow_get_notify = true;
        var count_notify = 0;
        window.get_notify = function () {
          if (!allow_get_notify) return;
          allow_get_notify = false;
          $.ajax({
            type: "POST",
            url: _route_getNotify,
            data: null,
            global: false,
            success: function success(res, status) {
              if (res.messages) {
                $.each(res.messages, function (key, item) {
                  if (key === "1" || key === 1) {
                    Swal.fire({
                      icon: "success",
                      title: item,
                      showCancelButton: false,
                      confirmButtonColor: "",
                      confirmButtonText: "OK",
                      // cancelButtonText: 'Há»§y',
                    });
                  } else {
                    notify_info(item);
                  }
                });
              }
              if (res.user_balance) {
                $("#data__balance").text(res.user_balance);
                $("#account__balance").text(res.user_balance);
              }
              if (count_notify > 200) redirect_url(_baseUrl);
            },
            error: function error(res) {
              reload_page();
            },
            complete: function complete() {
              allow_get_notify = true;
              count_notify++;
            },
          });
        };
        get_notify();
        var getNotifyInterval = setInterval(function () {
          get_notify();
        }, 5000);
        var allow_history_bet = true;
        window.history_bet = function () {
          if (!allow_history_bet) return;
          allow_history_bet = false;
          $.ajax({
            type: "POST",
            url: _route_historyBet,
            data: null,
            global: false,
            success: function success(res, status) {
              if (res.html) {
                $("#historyBet__content").html(res.html);
              }
            },
            error: function error(res) {
              reload_page();
            },
            complete: function complete() {
              allow_history_bet = true;
            },
          });
        };
        var allow_history_recharge = true;
        window.history_recharge = function () {
          if (!allow_history_recharge) return;
          allow_history_recharge = false;
          $.ajax({
            type: "POST",
            url: _route_historyRecharge,
            data: null,
            global: false,
            success: function success(res, status) {
              if (res.html) {
                $("#historyRecharge__content").html(res.html);
              }
            },
            error: function error(res) {
              reload_page();
            },
            complete: function complete() {
              allow_history_recharge = true;
            },
          });
        };
        var allow_history_balance = true;
        window.history_balance = function () {
          if (!allow_history_balance) return;
          allow_history_balance = false;
          $.ajax({
            type: "POST",
            url: _route_historyBalance,
            data: null,
            global: false,
            success: function success(res, status) {
              if (res.html) {
                $("#historyBalance__content").html(res.html);
              }
            },
            error: function error(res) {
              reload_page();
            },
            complete: function complete() {
              allow_history_balance = true;
            },
          });
        };
        var allow_history_withdrawal = true;
        window.history_withdrawal = function () {
          if (!allow_history_withdrawal) return;
          allow_history_withdrawal = false;
          $.ajax({
            type: "POST",
            url: _route_historyWithdrawal,
            data: null,
            global: false,
            success: function success(res, status) {
              if (res.html) {
                $("#historyWithdrawal__content").html(res.html);
              }
            },
            error: function error(res) {
              reload_page();
            },
            complete: function complete() {
              allow_history_withdrawal = true;
            },
          });
        };
        var allow_bank = true;
        window.bank = function () {
          if (!allow_bank) return;
          allow_bank = false;
          $.ajax({
            type: "POST",
            url: _route_bank,
            data: null,
            global: false,
            success: function success(res, status) {
              if (res.html) {
                $("#bank__content").html(res.html);
                init_select2();
                init_bank__form();
                $("select").on("select2:close", function (e) {
                  $(this).valid();
                });
              }
            },
            error: function error(res) {
              reload_page();
            },
            complete: function complete() {
              allow_bank = true;
            },
          });
        };
        var allow_bank_store = true;
        window.init_bank__form = function () {
          $("#bank__form").validate({
            ignore: [],
            errorClass: "error",
            errorElement: "span",
            errorPlacement: function errorPlacement(error, e) {
              e.parents(".bank__form-item").append(error);
            },
            rules: {
              bank_id: {
                required: true,
              },
              bank_user: {
                required: true,
                maxlength: 100,
              },
              bank_number: {
                required: true,
                maxlength: 100,
              },
            },
            messages: {
              bank_id: {
                required: "*NgÃ¢n hÃ ng lÃ  báº¯t buá»™c.",
              },
              bank_user: {
                required: "*TÃªn chá»§ tÃ i khoáº£n lÃ  báº¯t buá»™c.",
                maxlength: "*TÃªn chá»§ tÃ i khoáº£n tá»‘i Ä‘a 100 kÃ­ tá»±.",
              },
              bank_number: {
                required: "*Sá»‘ tÃ i khoáº£n lÃ  báº¯t buá»™c.",
                maxlength: "*Sá»‘ tÃ i khoáº£n tá»‘i Ä‘a 100 kÃ­ tá»±.",
              },
            },
            submitHandler: function submitHandler(form) {
              if (!allow_bank_store) return;
              allow_bank_store = false;
              var formData = $(form).serialize();
              var formAction = $(form).prop("action");
              $.ajax({
                type: "POST",
                url: formAction,
                data: formData,
                success: function success(res, status) {
                  if (res.message) {
                    notify_success(res.message);
                  }
                  $("#bank").hide().removeClass("active");
                },
                error: function error(res) {
                  create_notify_error(res);
                },
                complete: function complete() {
                  allow_bank_store = true;
                },
              });
            },
          });
        };
        var allow_change_password = true;
        window.change_password = function () {
          if (!allow_change_password) return;
          allow_change_password = false;
          $.ajax({
            type: "POST",
            url: _route_changePassword,
            data: null,
            global: false,
            success: function success(res, status) {
              if (res.html) {
                $("#changePassword__content").html(res.html);
                init_select2();
                init_changePassword__form();
              }
            },
            error: function error(res) {
              reload_page();
            },
            complete: function complete() {
              allow_change_password = true;
            },
          });
        };
        var allow_change_password_store = true;
        window.init_changePassword__form = function () {
          $("#changePassword__form").validate({
            ignore: [],
            errorClass: "error",
            errorElement: "span",
            errorPlacement: function errorPlacement(error, e) {
              e.parents(".changePassword__form-item").append(error);
            },
            rules: {
              old_password: {
                required: true,
                minlength: 6,
                maxlength: 30,
              },
              password: {
                required: true,
                minlength: 6,
                maxlength: 30,
              },
              password_confirmation: {
                equalTo: "#password",
                minlength: 6,
                maxlength: 30,
              },
            },
            messages: {
              old_password: {
                required: "Máº­t kháº©u cÅ© lÃ  báº¯t buá»™c.",
                minlength: "Máº­t kháº©u cÅ© tá»« 6 tá»›i 30 kÃ­ tá»±.",
                maxlength: "Máº­t kháº©u cÅ© tá»« 6 tá»›i 30 kÃ­ tá»±.",
              },
              password: {
                required: "Máº­t kháº©u má»›i lÃ  báº¯t buá»™c.",
                minlength: "Máº­t kháº©u má»›i tá»« 6 tá»›i 30 kÃ­ tá»±.",
                maxlength: "Máº­t kháº©u má»›i tá»« 6 tá»›i 30 kÃ­ tá»±.",
              },
              password_confirmation: {
                equalTo:
                  "XÃ¡c nháº­n máº­t kháº©u khÃ´ng khá»›p vá»›i máº­t kháº©u má»›i.",
                minlength: "XÃ¡c nháº­n máº­t kháº©u tá»« 6 tá»›i 30 kÃ­ tá»±.",
                maxlength: "XÃ¡c nháº­n máº­t kháº©u tá»« 6 tá»›i 30 kÃ­ tá»±.",
              },
            },
            submitHandler: function submitHandler(form) {
              if (!allow_change_password_store) return;
              allow_change_password_store = false;
              var formData = $(form).serialize();
              var formAction = $(form).prop("action");
              $.ajax({
                type: "POST",
                url: formAction,
                data: formData,
                success: function success(res, status) {
                  if (res.message) {
                    notify_success(res.message);
                  }
                  $("#changePassword").hide().removeClass("active");
                },
                error: function error(res) {
                  create_notify_error(res);
                },
                complete: function complete() {
                  allow_change_password_store = true;
                },
              });
            },
          });
        };
        $(document).on("click", ".changePassword__form-item i", function (e) {
          e.preventDefault();
          var inputPassword = $(this).siblings("input");
          if (inputPassword.attr("type") == "password") {
            inputPassword.attr("type", "text");
            $(this).removeClass("fa-eye").addClass("fa-eye-slash");
          } else {
            inputPassword.attr("type", "password");
            $(this).removeClass("fa-eye-slash").addClass("fa-eye");
          }
        });
        var allow_withdrawal = true;
        window.withdrawal = function () {
          if (!allow_withdrawal) return;
          allow_withdrawal = false;
          $.ajax({
            type: "POST",
            url: _route_withdrawal,
            data: null,
            global: false,
            success: function success(res, status) {
              if (res.html) {
                $("#withdrawal__content").html(res.html);
                $("#withdrawal_balance").trigger("change");
              }
              ("");
            },
            error: function error(res) {
              reload_page();
            },
            complete: function complete() {
              allow_withdrawal = true;
            },
          });
        };
        var allow_withdrawal_store = true;
        $(document).on("click", "#withdrawal__form-submit", function (e) {
          e.preventDefault();
          var form = $("#withdrawal__form");
          form
            .submit(function (e) {
              e.preventDefault();
              if (!allow_withdrawal_store) return;
              allow_withdrawal_store = false;
              var formData = $(this).serialize();
              var formAction = $(this).prop("action");
              $.ajax({
                type: "POST",
                url: formAction,
                data: formData,
                enctype: "multipart/form-data",
                processData: false,
                global: false,
                success: function success(res, status) {
                  if (res.message) {
                    notify_success(res.message);
                  }
                  if (res.user_balance) {
                    $("#data__balance").text(res.user_balance);
                    $("#account__balance").text(res.user_balance);
                  }
                  $("#withdrawal").hide().removeClass("active");
                },
                error: function error(res) {
                  create_notify_error(res);
                  reload_page();
                },
                complete: function complete() {
                  $("#formBet").removeClass("active");
                  allow_withdrawal_store = true;
                },
              });
            })
            .trigger("submit");
        });
        window.handle_bank_user = function (string) {
          var result;
          result = string.toLowerCase();
          result = result.replace(
            /Ã¡|Ã |áº£|áº¡|Ã£|Äƒ|áº¯|áº±|áº³|áºµ|áº·|Ã¢|áº¥|áº§|áº©|áº«|áº­/gi,
            "a"
          );
          result = result.replace(
            /Ã©|Ã¨|áº»|áº½|áº¹|Ãª|áº¿|á»|á»ƒ|á»…|á»‡/gi,
            "e"
          );
          result = result.replace(/i|Ã­|Ã¬|á»‰|Ä©|á»‹/gi, "i");
          result = result.replace(
            /Ã³|Ã²|á»|Ãµ|á»|Ã´|á»‘|á»“|á»•|á»—|á»™|Æ¡|á»›|á»|á»Ÿ|á»¡|á»£/gi,
            "o"
          );
          result = result.replace(
            /Ãº|Ã¹|á»§|Å©|á»¥|Æ°|á»©|á»«|á»­|á»¯|á»±/gi,
            "u"
          );
          result = result.replace(/Ã½|á»³|á»·|á»¹|á»µ/gi, "y");
          result = result.replace(/Ä‘/gi, "d");
          result = result.replace(
            /\-\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
            ""
          );
          result = result.replace(/  +/g, " ");
          return result.toUpperCase().replace(/[^A-Z\s]/g, "");
        };
        window.handle_bank_number = function (string) {
          var result;
          result = string.toLowerCase();
          result = result.replace(
            /Ã¡|Ã |áº£|áº¡|Ã£|Äƒ|áº¯|áº±|áº³|áºµ|áº·|Ã¢|áº¥|áº§|áº©|áº«|áº­/gi,
            "a"
          );
          result = result.replace(
            /Ã©|Ã¨|áº»|áº½|áº¹|Ãª|áº¿|á»|á»ƒ|á»…|á»‡/gi,
            "e"
          );
          result = result.replace(/i|Ã­|Ã¬|á»‰|Ä©|á»‹/gi, "i");
          result = result.replace(
            /Ã³|Ã²|á»|Ãµ|á»|Ã´|á»‘|á»“|á»•|á»—|á»™|Æ¡|á»›|á»|á»Ÿ|á»¡|á»£/gi,
            "o"
          );
          result = result.replace(
            /Ãº|Ã¹|á»§|Å©|á»¥|Æ°|á»©|á»«|á»­|á»¯|á»±/gi,
            "u"
          );
          result = result.replace(/Ã½|á»³|á»·|á»¹|á»µ/gi, "y");
          result = result.replace(/Ä‘/gi, "d");
          result = result.replace(
            /Ã|Ã€|áº¢|áº |Ãƒ|Ä‚|áº®|áº°|áº²|áº´|áº¶|Ã‚|áº¤|áº¦|áº¨|áºª|áº¬/gi,
            "A"
          );
          result = result.replace(
            /Ã‰|Ãˆ|áºº|áº¼|áº¸|ÃŠ|áº¾|á»€|á»‚|á»„|á»†/gi,
            "E"
          );
          result = result.replace(/I|Ã|ÃŒ|á»ˆ|Ä¨|á»Š/gi, "I");
          result = result.replace(
            /Ã“|Ã’|á»Ž|Ã•|á»Œ|Ã”|á»|á»’|á»”|á»–|á»˜|Æ |á»š|á»œ|á»ž|á» |á»¢/gi,
            "O"
          );
          result = result.replace(
            /Ãš|Ã™|á»¦|Å¨|á»¤|Æ¯|á»¨|á»ª|á»¬|á»®|á»°/gi,
            "U"
          );
          result = result.replace(/Ã|á»²|á»¶|á»¸|á»´/gi, "Y");
          result = result.replace(/Ä/gi, "D");
          result = result.replace(
            /\-\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
            ""
          );
          result = result.replace(/  +/g, "");
          return result.replace(/[^A-Za-z0-9]/g, "");
        };
        $(document).on(
          "change click keyup input paste",
          "#bank_user",
          function () {
            $(this).val(function (index, value) {
              return handle_bank_user(value);
            });
          }
        );
        $(document).on(
          "change click keyup input paste",
          "#bank_number",
          function () {
            $(this).val(function (index, value) {
              return handle_bank_number(value);
            });
          }
        );
        $(document).on("click", ".tab__main-item:not(#cskh)", function (event) {
          event.preventDefault();
          if ($(this).data("screen") == "#screen__trend") get_trend();
          $(this)
            .addClass("active")
            .siblings(".tab__main-item")
            .removeClass("active");
          $(".screen:not(" + $(this).data("screen") + ")")
            .hide()
            .removeClass("active");
          $($(this).data("screen")).show().addClass("active");
        });
        $(".tab__main-item.active").trigger("click");
        $(document).on("click", ".level__item", function (event) {
          event.preventDefault();
          $("#formBet__ID").val($(this).attr("data-game"));
          $('input[name="formBet__level"]').val($(this).data("level"));
          localStorage.setItem("level__item__active", $(this).attr("id"));
          if (first_load) {
            first_load = false;
            $(this)
              .addClass("active")
              .siblings(".level__item")
              .removeClass("active");
            $(".result:not(" + $(this).data("open") + ")")
              .hide()
              .removeClass("active");
            $($(this).data("open")).show().addClass("active");
          } else {
            reload_page();
          }
        });
        if (localStorage.getItem("level__item__active")) {
          $("#" + localStorage.getItem("level__item__active")).trigger("click");
        } else {
          $(".level__item.active").trigger("click");
        }
        $(document).on("click", ".bet__type-item", function (event) {
          event.preventDefault();
          $(this)
            .addClass("active")
            .siblings(".bet__type-item")
            .removeClass("active");
          $(".bet__select:not(" + $(this).data("open") + ")")
            .hide()
            .removeClass("active");
          $($(this).data("open"))
            .show()
            .addClass("active")
            .find(".bet__row-item.active")
            .trigger("click");
          localStorage.setItem("bet__type__item__active", $(this).attr("id"));
        });
        if (localStorage.getItem("bet__type__item__active")) {
          $("#" + localStorage.getItem("bet__type__item__active")).trigger(
            "click"
          );
        } else {
          $(".bet__type-item.active").trigger("click");
        }
        $(document).on("click", ".bet__row-item", function (event) {
          event.preventDefault();
          $(this)
            .addClass("active")
            .siblings(".bet__row-item")
            .removeClass("active");
          $('input[name="formBet__row"]').val($(this).data("key"));
          localStorage.setItem("bet__row__item__active", $(this).data("key"));
        });
        if (localStorage.getItem("bet__row__item__active")) {
          $(
            '[data-key="' +
              localStorage.getItem("bet__row__item__active") +
              '"]'
          ).trigger("click");
        } else {
          $(".bet__select.active .bet__row-item.active").trigger("click");
        }
        $(document).on("click", ".bet__item", function (event) {
          event.preventDefault();
          $(this)
            .addClass("active")
            .closest(".bet__select")
            .find(".bet__item")
            .removeClass("active");
          $('input[name="formBet__key"]').val($(this).data("key"));
          $(".formBet__pick-item.default").trigger("click");
          $("#formBet").addClass("active");
          $("#formBet__ID").val($(".level__item.active").attr("data-game"));
        });
        $(document).on(
          "click",
          ".formBet__button-close,.formBet__background",
          function (event) {
            event.preventDefault();
            $("#formBet").removeClass("active");
          }
        );
        $(document).on(
          "click",
          ".formNotify__button-close,.formNotify__background",
          function (event) {
            event.preventDefault();
            $("#formNotify").removeClass("active");
          }
        );
        window.isInteger = function (x) {
          if (typeof x == "number" && !isNaN(x)) {
            if (Number.isInteger(x)) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        };
        window.isFloat = function (x) {
          if (typeof x == "number" && !isNaN(x)) {
            if (Number.isInteger(x)) {
              return false;
            } else {
              return true;
            }
          } else {
            return false;
          }
        };
        window.isNumeric = function (value) {
          return /^-?\d+$/.test(value);
        };
        window.countDecimals = function (value) {
          if (Math.floor(value) === value) return 0;
          return value.toString().split(".")[1].length || 0;
        };
        window.formatNumberUnsignedFloat = function (value) {
          var count_decimal = countDecimals(parseFloat(value));
          value = parseFloat(value).toFixed(
            count_decimal > 2 ? 2 : count_decimal
          );
          var arr = value.toString().match(/^(\d+)((?:\.\d+)?)$/);
          return (
            arr[1].replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") + arr[2]
          ).replace(/^0+/, "");
        };
        $(document).on(
          "click keyup input paste",
          "#formBet__balance",
          function (e) {
            e.preventDefault();
            $(this).val(function (index, value) {
              var value_real = value ? value.replace(/[^0-9.]/g, "") : 0;
              var data__balance = $("#data__balance").text();
              var balance = data__balance
                ? data__balance.replace(/[^0-9.]/g, "")
                : 0;
              if (parseFloat(balance) < parseFloat(value_real)) {
                $("#formBet__button-submit")
                  .prop("disabled", true)
                  .prop("readonly", true);
                $("#formBet__notify").text("Sá»‘ dÆ° khÃ´ng Ä‘á»§");
                $(this).addClass("error");
              } else if (parseFloat(value_real) === 0) {
                $("#formBet__button-submit")
                  .prop("disabled", true)
                  .prop("readonly", true);
                $("#formBet__notify").text("");
                $(this).addClass("error");
              } else {
                $("#formBet__button-submit")
                  .prop("disabled", false)
                  .prop("readonly", false);
                $("#formBet__notify").text("");
                $(this).removeClass("error");
              }
              return parseFloat(value_real) > 0
                ? value_real.replace(/^0+/, "")
                : 0;
            });
          }
        );
        $(document).on("change", "#formBet__balance", function (e) {
          e.preventDefault();
          $(this).val(function (index, value) {
            var value_real = value ? value.replace(/[^0-9.]/g, "") : 0;
            var data__balance = $("#data__balance").text();
            var balance = data__balance
              ? data__balance.replace(/[^0-9.]/g, "")
              : 0;
            if (parseFloat(balance) < parseFloat(value_real)) {
              $("#formBet__button-submit")
                .prop("disabled", true)
                .prop("readonly", true);
              $("#formBet__notify").text("Sá»‘ dÆ° khÃ´ng Ä‘á»§");
              $(this).addClass("error");
            } else if (parseFloat(value_real) === 0) {
              $("#formBet__button-submit")
                .prop("disabled", true)
                .prop("readonly", true);
              $("#formBet__notify").text("");
              $(this).addClass("error");
            } else {
              $("#formBet__button-submit")
                .prop("disabled", false)
                .prop("readonly", false);
              $("#formBet__notify").text("");
              $(this).removeClass("error");
            }
            return parseFloat(value_real) > 0
              ? formatNumberUnsignedFloat(value_real)
              : 0;
          });
        });
        $(document).on("click", ".formBet__pick-item", function (event) {
          event.preventDefault();
          $(this)
            .addClass("active")
            .siblings(".formBet__pick-item")
            .removeClass("active");
          $("#formBet__balance").val($(this).data("value")).trigger("change");
        });
        $(document).on("click", "#formBet__money-minus", function (event) {
          event.preventDefault();
          $("#formBet__balance")
            .val(
              parseFloat(
                Math.ceil(
                  $("#formBet__balance")
                    .val()
                    .replace(/[^0-9.]/g, "") / 2
                )
              )
            )
            .trigger("change");
        });
        $(document).on("click", "#formBet__money-plus", function (event) {
          event.preventDefault();
          $("#formBet__balance")
            .val(
              parseFloat(
                Math.ceil(
                  $("#formBet__balance")
                    .val()
                    .replace(/[^0-9.]/g, "") * 2
                )
              )
            )
            .trigger("change");
        });
        $(document).on("click", ".trend__level-item", function (event) {
          event.preventDefault();
          get_trend();
          $(this)
            .addClass("active")
            .siblings(".trend__level-item")
            .removeClass("active");
          $(".trend__result:not(" + $(this).data("open") + ")")
            .hide()
            .removeClass("active");
          $($(this).data("open")).show().addClass("active");
          localStorage.setItem(
            "trend__level__item__active",
            $(this).attr("id")
          );
        });
        if (localStorage.getItem("trend__level__item__active")) {
          $("#" + localStorage.getItem("trend__level__item__active")).trigger(
            "click"
          );
        } else {
          $(".trend__level-item.active").trigger("click");
        }
        $(document).on("click", ".btn-open-rules", function (event) {
          event.preventDefault();
          $("#rules").addClass("active");
        });
        $(document).on("click", ".btn-close-rules", function (event) {
          event.preventDefault();
          $("#rules").removeClass("active");
        });
        $(document).on("click", ".account__transaction-item", function (event) {
          event.preventDefault();
          if ($(this).data("open") === "#withdrawal") withdrawal();
          $(this)
            .addClass("active")
            .siblings(".account__transaction-item")
            .removeClass("active");
          $(".account__screen:not(" + $(this).data("open") + ")")
            .hide()
            .removeClass("active");
          $($(this).data("open")).show().addClass("active");
        });
        $(document).on(
          "click",
          ".recharge__button button,.recharge__background",
          function (event) {
            event.preventDefault();
            $($(this).data("close")).hide().removeClass("active");
          }
        );
        $(document).on("click", ".account__menu-item", function (event) {
          event.preventDefault();
          $(this)
            .addClass("active")
            .siblings(".account__menu-item")
            .removeClass("active");
          if ($(this).data("open")) {
            if ($(this).data("open") === "#historyBet") history_bet();
            if ($(this).data("open") === "#historyRecharge") history_recharge();
            if ($(this).data("open") === "#historyWithdrawal")
              history_withdrawal();
            if ($(this).data("open") === "#bank") bank();
            if ($(this).data("open") === "#changePassword") change_password();
            if ($(this).data("open") === "#historyBalance") history_balance();
            $(".account__screen:not(" + $(this).data("open") + ")")
              .hide()
              .removeClass("active");
            $($(this).data("open")).show().addClass("active");
          }
          if ($(this).data("link")) {
            redirect_url($(this).data("link"));
          }
        });
        $(document).on(
          "click",
          ".historyBet__heading i,.withdrawal__heading i,.withdrawal__form-close,.historyRecharge__heading i,.historyBalance__heading i,.historyWithdrawal__heading i,.bank__heading i,.bank__form-close,.changePassword__heading i,.changePassword__form-close",
          function (event) {
            event.preventDefault();
            $($(this).data("close")).hide().removeClass("active");
          }
        );
        $(document).on("click", ".historyBet__item", function (event) {
          event.preventDefault();
          $("#historyBetDetail__content-level").text($(this).data("level"));
          $("#historyBetDetail__content-no").text($(this).data("no"));
          $("#historyBetDetail__content-type").text($(this).data("type"));
          $("#historyBetDetail__content-result").text($(this).data("result"));
          $("#historyBetDetail__content-balance").text($(this).data("balance"));
          $("#historyBetDetail__content-win").text($(this).data("win"));
          $($(this).data("open")).show().addClass("active");
        });
        $(document).on(
          "click",
          ".historyBetDetail__button button,.historyBetDetail__background",
          function (event) {
            event.preventDefault();
            $($(this).data("close")).hide().removeClass("active");
          }
        );
        $(document).on(
          "click keyup input paste",
          "#withdrawal_balance",
          function (e) {
            e.preventDefault();
            $(this).val(function (index, value) {
              var value_real = value ? value.replace(/[^0-9.]/g, "") : 0;
              var data__balance = $("#data__balance").text();
              var balance = data__balance
                ? data__balance.replace(/[^0-9.]/g, "")
                : 0;
              if (parseFloat(balance) < parseFloat(value_real)) {
                $("#withdrawal__form-submit")
                  .prop("disabled", true)
                  .prop("readonly", true);
                $("#withdrawal__form-notify").text("Sá»‘ dÆ° khÃ´ng Ä‘á»§");
                $(this).addClass("error");
              } else if (parseFloat(value_real) === 0) {
                $("#withdrawal__form-submit")
                  .prop("disabled", true)
                  .prop("readonly", true);
                $("#withdrawal__form-notify").text("");
                $(this).addClass("error");
              } else {
                $("#withdrawal__form-submit")
                  .prop("disabled", false)
                  .prop("readonly", false);
                $("#withdrawal__form-notify").text("");
                $(this).removeClass("error");
              }
              return parseFloat(value_real) > 0
                ? value_real.replace(/^0+/, "")
                : 0;
            });
          }
        );
        $(document).on("change", "#withdrawal_balance", function (e) {
          e.preventDefault();
          $(this).val(function (index, value) {
            var value_real = value ? value.replace(/[^0-9.]/g, "") : 0;
            var data__balance = $("#data__balance").text();
            var balance = data__balance
              ? data__balance.replace(/[^0-9.]/g, "")
              : 0;
            if (parseFloat(balance) < parseFloat(value_real)) {
              $("#withdrawal__form-submit")
                .prop("disabled", true)
                .prop("readonly", true);
              $("#withdrawal__form-notify").text("Sá»‘ dÆ° khÃ´ng Ä‘á»§");
              $(this).addClass("error");
            } else if (parseFloat(value_real) === 0) {
              $("#withdrawal__form-submit")
                .prop("disabled", true)
                .prop("readonly", true);
              $("#withdrawal__form-notify").text("");
              $(this).addClass("error");
            } else {
              $("#withdrawal__form-submit")
                .prop("disabled", false)
                .prop("readonly", false);
              $("#withdrawal__form-notify").text("");
              $(this).removeClass("error");
            }
            return parseFloat(value_real) > 0
              ? formatNumberUnsignedFloat(value_real)
              : 0;
          });
        });

        /***/
      },

    /***/ "./public/_web/js/select2.js":
      /*!***********************************!*\
  !*** ./public/_web/js/select2.js ***!
  \***********************************/
      /***/ function (module, exports, __webpack_require__) {
        /* provided dependency */ var $ = __webpack_require__(
          /*! jquery */ "./node_modules/jquery/dist/jquery.js"
        );
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        !(function (n) {
          true
            ? !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(
                  /*! jquery */ "./node_modules/jquery/dist/jquery.js"
                ),
              ]),
              (__WEBPACK_AMD_DEFINE_FACTORY__ = n),
              (__WEBPACK_AMD_DEFINE_RESULT__ =
                typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function"
                  ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                      exports,
                      __WEBPACK_AMD_DEFINE_ARRAY__
                    )
                  : __WEBPACK_AMD_DEFINE_FACTORY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
            : 0;
        })(function (t) {
          var e,
            n,
            p,
            o,
            _r,
            h,
            f,
            g,
            m,
            v,
            y,
            s,
            i,
            _,
            a,
            a =
              (t &&
                t.fn &&
                t.fn.select2 &&
                t.fn.select2.amd &&
                (u = t.fn.select2.amd),
              (u && u.requirejs) ||
                (u ? (n = u) : (u = {}),
                (g = {}),
                (m = {}),
                (v = {}),
                (y = {}),
                (s = Object.prototype.hasOwnProperty),
                (i = [].slice),
                (_ = /\.js$/),
                (h = function h(e, t) {
                  var n,
                    s,
                    i = c(e),
                    o = i[0],
                    t = t[1];
                  return (
                    (e = i[1]),
                    o && (n = x((o = l(o, t)))),
                    o
                      ? (e =
                          n && n.normalize
                            ? n.normalize(
                                e,
                                ((s = t),
                                function (e) {
                                  return l(e, s);
                                })
                              )
                            : l(e, t))
                      : ((o = (i = c((e = l(e, t))))[0]),
                        (e = i[1]),
                        o && (n = x(o))),
                    {
                      f: o ? o + "!" + e : e,
                      n: e,
                      pr: o,
                      p: n,
                    }
                  );
                }),
                (f = {
                  require: function require(e) {
                    return w(e);
                  },
                  exports: function exports(e) {
                    var t = g[e];
                    return void 0 !== t ? t : (g[e] = {});
                  },
                  module: function module(e) {
                    return {
                      id: e,
                      uri: "",
                      exports: g[e],
                      config:
                        ((t = e),
                        function () {
                          return (v && v.config && v.config[t]) || {};
                        }),
                    };
                    var t;
                  },
                }),
                (o = function o(e, t, n, s) {
                  var i,
                    o,
                    r,
                    a,
                    l,
                    c = [],
                    u = _typeof(n),
                    d = A((s = s || e));
                  if ("undefined" == u || "function" == u) {
                    for (
                      t =
                        !t.length && n.length
                          ? ["require", "exports", "module"]
                          : t,
                        a = 0;
                      a < t.length;
                      a += 1
                    ) {
                      if ("require" === (o = (r = h(t[a], d)).f))
                        c[a] = f.require(e);
                      else if ("exports" === o) (c[a] = f.exports(e)), (l = !0);
                      else if ("module" === o) i = c[a] = f.module(e);
                      else if (b(g, o) || b(m, o) || b(y, o)) c[a] = x(o);
                      else {
                        if (!r.p) throw new Error(e + " missing " + o);
                        r.p.load(
                          r.n,
                          w(s, !0),
                          (function (t) {
                            return function (e) {
                              g[t] = e;
                            };
                          })(o),
                          {}
                        ),
                          (c[a] = g[o]);
                      }
                    }
                    (u = n ? n.apply(g[e], c) : void 0),
                      e &&
                        (i && i.exports !== p && i.exports !== g[e]
                          ? (g[e] = i.exports)
                          : (u === p && l) || (g[e] = u));
                  } else e && (g[e] = n);
                }),
                (e =
                  n =
                  _r =
                    function r(e, t, n, s, i) {
                      if ("string" == typeof e)
                        return f[e] ? f[e](t) : x(h(e, A(t)).f);
                      if (!e.splice) {
                        if (((v = e).deps && _r(v.deps, v.callback), !t))
                          return;
                        t.splice ? ((e = t), (t = n), (n = null)) : (e = p);
                      }
                      return (
                        (t = t || function () {}),
                        "function" == typeof n && ((n = s), (s = i)),
                        s
                          ? o(p, e, t, n)
                          : setTimeout(function () {
                              o(p, e, t, n);
                            }, 4),
                        _r
                      );
                    }),
                (_r.config = function (e) {
                  return _r(e);
                }),
                (e._defined = g),
                ((a = function a(e, t, n) {
                  if ("string" != typeof e)
                    throw new Error(
                      "See almond README: incorrect module build, no module name"
                    );
                  t.splice || ((n = t), (t = [])),
                    b(g, e) || b(m, e) || (m[e] = [e, t, n]);
                }).amd = {
                  jQuery: !0,
                }),
                (u.requirejs = e),
                (u.require = n),
                (u.define = a)),
              u.define("almond", function () {}),
              u.define("jquery", [], function () {
                var e = t || $;
                return (
                  null == e &&
                    console &&
                    console.error &&
                    console.error(
                      "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
                    ),
                  e
                );
              }),
              u.define("select2/utils", ["jquery"], function (o) {
                var s = {};
                function c(e) {
                  var t,
                    n = e.prototype,
                    s = [];
                  for (t in n) {
                    "function" == typeof n[t] &&
                      "constructor" !== t &&
                      s.push(t);
                  }
                  return s;
                }
                (s.Extend = function (e, t) {
                  var n,
                    s = {}.hasOwnProperty;
                  function i() {
                    this.constructor = e;
                  }
                  for (n in t) {
                    s.call(t, n) && (e[n] = t[n]);
                  }
                  return (
                    (i.prototype = t.prototype),
                    (e.prototype = new i()),
                    (e.__super__ = t.prototype),
                    e
                  );
                }),
                  (s.Decorate = function (s, i) {
                    var e = c(i),
                      t = c(s);
                    function o() {
                      var e = Array.prototype.unshift,
                        t = i.prototype.constructor.length,
                        n = s.prototype.constructor;
                      0 < t &&
                        (e.call(arguments, s.prototype.constructor),
                        (n = i.prototype.constructor)),
                        n.apply(this, arguments);
                    }
                    (i.displayName = s.displayName),
                      (o.prototype = new (function () {
                        this.constructor = o;
                      })());
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      o.prototype[r] = s.prototype[r];
                    }
                    for (var a = 0; a < e.length; a++) {
                      var l = e[a];
                      o.prototype[l] = (function (e) {
                        var t = function t() {};
                        e in o.prototype && (t = o.prototype[e]);
                        var n = i.prototype[e];
                        return function () {
                          return (
                            Array.prototype.unshift.call(arguments, t),
                            n.apply(this, arguments)
                          );
                        };
                      })(l);
                    }
                    return o;
                  });
                function e() {
                  this.listeners = {};
                }
                (e.prototype.on = function (e, t) {
                  (this.listeners = this.listeners || {}),
                    e in this.listeners
                      ? this.listeners[e].push(t)
                      : (this.listeners[e] = [t]);
                }),
                  (e.prototype.trigger = function (e) {
                    var t = Array.prototype.slice,
                      n = t.call(arguments, 1);
                    (this.listeners = this.listeners || {}),
                      null == n && (n = []),
                      0 === n.length && n.push({}),
                      (n[0]._type = e) in this.listeners &&
                        this.invoke(this.listeners[e], t.call(arguments, 1)),
                      "*" in this.listeners &&
                        this.invoke(this.listeners["*"], arguments);
                  }),
                  (e.prototype.invoke = function (e, t) {
                    for (var n = 0, s = e.length; n < s; n++) {
                      e[n].apply(this, t);
                    }
                  }),
                  (s.Observable = e),
                  (s.generateChars = function (e) {
                    for (var t = "", n = 0; n < e; n++) {
                      t += Math.floor(36 * Math.random()).toString(36);
                    }
                    return t;
                  }),
                  (s.bind = function (e, t) {
                    return function () {
                      e.apply(t, arguments);
                    };
                  }),
                  (s._convertData = function (e) {
                    for (var t in e) {
                      var n = t.split("-"),
                        s = e;
                      if (1 !== n.length) {
                        for (var i = 0; i < n.length; i++) {
                          var o = n[i];
                          (o =
                            o.substring(0, 1).toLowerCase() + o.substring(1)) in
                            s || (s[o] = {}),
                            i == n.length - 1 && (s[o] = e[t]),
                            (s = s[o]);
                        }
                        delete e[t];
                      }
                    }
                    return e;
                  }),
                  (s.hasScroll = function (e, t) {
                    var n = o(t),
                      s = t.style.overflowX,
                      i = t.style.overflowY;
                    return (
                      (s !== i || ("hidden" !== i && "visible" !== i)) &&
                      ("scroll" === s ||
                        "scroll" === i ||
                        n.innerHeight() < t.scrollHeight ||
                        n.innerWidth() < t.scrollWidth)
                    );
                  }),
                  (s.escapeMarkup = function (e) {
                    var t = {
                      "\\": "&#92;",
                      "&": "&amp;",
                      "<": "&lt;",
                      ">": "&gt;",
                      '"': "&quot;",
                      "'": "&#39;",
                      "/": "&#47;",
                    };
                    return "string" != typeof e
                      ? e
                      : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                          return t[e];
                        });
                  }),
                  (s.__cache = {});
                var n = 0;
                return (
                  (s.GetUniqueElementId = function (e) {
                    var t = e.getAttribute("data-select2-id");
                    return (
                      null != t ||
                        ((t = e.id
                          ? "select2-data-" + e.id
                          : "select2-data-" +
                            (++n).toString() +
                            "-" +
                            s.generateChars(4)),
                        e.setAttribute("data-select2-id", t)),
                      t
                    );
                  }),
                  (s.StoreData = function (e, t, n) {
                    e = s.GetUniqueElementId(e);
                    s.__cache[e] || (s.__cache[e] = {}), (s.__cache[e][t] = n);
                  }),
                  (s.GetData = function (e, t) {
                    var n = s.GetUniqueElementId(e);
                    return t
                      ? s.__cache[n] && null != s.__cache[n][t]
                        ? s.__cache[n][t]
                        : o(e).data(t)
                      : s.__cache[n];
                  }),
                  (s.RemoveData = function (e) {
                    var t = s.GetUniqueElementId(e);
                    null != s.__cache[t] && delete s.__cache[t],
                      e.removeAttribute("data-select2-id");
                  }),
                  (s.copyNonInternalCssClasses = function (e, t) {
                    var n = (n = e
                        .getAttribute("class")
                        .trim()
                        .split(/\s+/)).filter(function (e) {
                        return 0 === e.indexOf("select2-");
                      }),
                      t = (t = t
                        .getAttribute("class")
                        .trim()
                        .split(/\s+/)).filter(function (e) {
                        return 0 !== e.indexOf("select2-");
                      }),
                      t = n.concat(t);
                    e.setAttribute("class", t.join(" "));
                  }),
                  s
                );
              }),
              u.define(
                "select2/results",
                ["jquery", "./utils"],
                function (d, p) {
                  function s(e, t, n) {
                    (this.$element = e),
                      (this.data = n),
                      (this.options = t),
                      s.__super__.constructor.call(this);
                  }
                  return (
                    p.Extend(s, p.Observable),
                    (s.prototype.render = function () {
                      var e = d(
                        '<ul class="select2-results__options" role="listbox"></ul>'
                      );
                      return (
                        this.options.get("multiple") &&
                          e.attr("aria-multiselectable", "true"),
                        (this.$results = e)
                      );
                    }),
                    (s.prototype.clear = function () {
                      this.$results.empty();
                    }),
                    (s.prototype.displayMessage = function (e) {
                      var t = this.options.get("escapeMarkup");
                      this.clear(), this.hideLoading();
                      var n = d(
                          '<li role="alert" aria-live="assertive" class="select2-results__option"></li>'
                        ),
                        s = this.options.get("translations").get(e.message);
                      n.append(t(s(e.args))),
                        (n[0].className += " select2-results__message"),
                        this.$results.append(n);
                    }),
                    (s.prototype.hideMessages = function () {
                      this.$results.find(".select2-results__message").remove();
                    }),
                    (s.prototype.append = function (e) {
                      this.hideLoading();
                      var t = [];
                      if (null != e.results && 0 !== e.results.length) {
                        e.results = this.sort(e.results);
                        for (var n = 0; n < e.results.length; n++) {
                          var s = e.results[n],
                            s = this.option(s);
                          t.push(s);
                        }
                        this.$results.append(t);
                      } else
                        0 === this.$results.children().length &&
                          this.trigger("results:message", {
                            message: "noResults",
                          });
                    }),
                    (s.prototype.position = function (e, t) {
                      t.find(".select2-results").append(e);
                    }),
                    (s.prototype.sort = function (e) {
                      return this.options.get("sorter")(e);
                    }),
                    (s.prototype.highlightFirstItem = function () {
                      var e = this.$results.find(
                          ".select2-results__option--selectable"
                        ),
                        t = e.filter(".select2-results__option--selected");
                      (0 < t.length ? t : e).first().trigger("mouseenter"),
                        this.ensureHighlightVisible();
                    }),
                    (s.prototype.setClasses = function () {
                      var t = this;
                      this.data.current(function (e) {
                        var s = e.map(function (e) {
                          return e.id.toString();
                        });
                        t.$results
                          .find(".select2-results__option--selectable")
                          .each(function () {
                            var e = d(this),
                              t = p.GetData(this, "data"),
                              n = "" + t.id;
                            (null != t.element && t.element.selected) ||
                            (null == t.element && -1 < s.indexOf(n))
                              ? (this.classList.add(
                                  "select2-results__option--selected"
                                ),
                                e.attr("aria-selected", "true"))
                              : (this.classList.remove(
                                  "select2-results__option--selected"
                                ),
                                e.attr("aria-selected", "false"));
                          });
                      });
                    }),
                    (s.prototype.showLoading = function (e) {
                      this.hideLoading();
                      (e = {
                        disabled: !0,
                        loading: !0,
                        text: this.options.get("translations").get("searching")(
                          e
                        ),
                      }),
                        (e = this.option(e));
                      (e.className += " loading-results"),
                        this.$results.prepend(e);
                    }),
                    (s.prototype.hideLoading = function () {
                      this.$results.find(".loading-results").remove();
                    }),
                    (s.prototype.option = function (e) {
                      var t = document.createElement("li");
                      t.classList.add("select2-results__option"),
                        t.classList.add("select2-results__option--selectable");
                      var n,
                        s = {
                          role: "option",
                        },
                        i =
                          window.Element.prototype.matches ||
                          window.Element.prototype.msMatchesSelector ||
                          window.Element.prototype.webkitMatchesSelector;
                      for (n in (((null != e.element &&
                        i.call(e.element, ":disabled")) ||
                        (null == e.element && e.disabled)) &&
                        ((s["aria-disabled"] = "true"),
                        t.classList.remove(
                          "select2-results__option--selectable"
                        ),
                        t.classList.add("select2-results__option--disabled")),
                      null == e.id &&
                        t.classList.remove(
                          "select2-results__option--selectable"
                        ),
                      null != e._resultId && (t.id = e._resultId),
                      e.title && (t.title = e.title),
                      e.children &&
                        ((s.role = "group"),
                        (s["aria-label"] = e.text),
                        t.classList.remove(
                          "select2-results__option--selectable"
                        ),
                        t.classList.add("select2-results__option--group")),
                      s)) {
                        var o = s[n];
                        t.setAttribute(n, o);
                      }
                      if (e.children) {
                        var r = d(t),
                          a = document.createElement("strong");
                        (a.className = "select2-results__group"),
                          this.template(e, a);
                        for (var l = [], c = 0; c < e.children.length; c++) {
                          var u = e.children[c],
                            u = this.option(u);
                          l.push(u);
                        }
                        i = d("<ul></ul>", {
                          class:
                            "select2-results__options select2-results__options--nested",
                          role: "none",
                        });
                        i.append(l), r.append(a), r.append(i);
                      } else this.template(e, t);
                      return p.StoreData(t, "data", e), t;
                    }),
                    (s.prototype.bind = function (t, e) {
                      var i = this,
                        n = t.id + "-results";
                      this.$results.attr("id", n),
                        t.on("results:all", function (e) {
                          i.clear(),
                            i.append(e.data),
                            t.isOpen() &&
                              (i.setClasses(), i.highlightFirstItem());
                        }),
                        t.on("results:append", function (e) {
                          i.append(e.data), t.isOpen() && i.setClasses();
                        }),
                        t.on("query", function (e) {
                          i.hideMessages(), i.showLoading(e);
                        }),
                        t.on("select", function () {
                          t.isOpen() &&
                            (i.setClasses(),
                            i.options.get("scrollAfterSelect") &&
                              i.highlightFirstItem());
                        }),
                        t.on("unselect", function () {
                          t.isOpen() &&
                            (i.setClasses(),
                            i.options.get("scrollAfterSelect") &&
                              i.highlightFirstItem());
                        }),
                        t.on("open", function () {
                          i.$results.attr("aria-expanded", "true"),
                            i.$results.attr("aria-hidden", "false"),
                            i.setClasses(),
                            i.ensureHighlightVisible();
                        }),
                        t.on("close", function () {
                          i.$results.attr("aria-expanded", "false"),
                            i.$results.attr("aria-hidden", "true"),
                            i.$results.removeAttr("aria-activedescendant");
                        }),
                        t.on("results:toggle", function () {
                          var e = i.getHighlightedResults();
                          0 !== e.length && e.trigger("mouseup");
                        }),
                        t.on("results:select", function () {
                          var e,
                            t = i.getHighlightedResults();
                          0 !== t.length &&
                            ((e = p.GetData(t[0], "data")),
                            t.hasClass("select2-results__option--selected")
                              ? i.trigger("close", {})
                              : i.trigger("select", {
                                  data: e,
                                }));
                        }),
                        t.on("results:previous", function () {
                          var e,
                            t = i.getHighlightedResults(),
                            n = i.$results.find(
                              ".select2-results__option--selectable"
                            ),
                            s = n.index(t);
                          s <= 0 ||
                            ((e = s - 1),
                            0 === t.length && (e = 0),
                            (s = n.eq(e)).trigger("mouseenter"),
                            (t = i.$results.offset().top),
                            (n = s.offset().top),
                            (s = i.$results.scrollTop() + (n - t)),
                            0 === e
                              ? i.$results.scrollTop(0)
                              : n - t < 0 && i.$results.scrollTop(s));
                        }),
                        t.on("results:next", function () {
                          var e,
                            t = i.getHighlightedResults(),
                            n = i.$results.find(
                              ".select2-results__option--selectable"
                            ),
                            s = n.index(t) + 1;
                          s >= n.length ||
                            ((e = n.eq(s)).trigger("mouseenter"),
                            (t =
                              i.$results.offset().top +
                              i.$results.outerHeight(!1)),
                            (n = e.offset().top + e.outerHeight(!1)),
                            (e = i.$results.scrollTop() + n - t),
                            0 === s
                              ? i.$results.scrollTop(0)
                              : t < n && i.$results.scrollTop(e));
                        }),
                        t.on("results:focus", function (e) {
                          e.element[0].classList.add(
                            "select2-results__option--highlighted"
                          ),
                            e.element[0].setAttribute("aria-selected", "true");
                        }),
                        t.on("results:message", function (e) {
                          i.displayMessage(e);
                        }),
                        d.fn.mousewheel &&
                          this.$results.on("mousewheel", function (e) {
                            var t = i.$results.scrollTop(),
                              n = i.$results.get(0).scrollHeight - t + e.deltaY,
                              t = 0 < e.deltaY && t - e.deltaY <= 0,
                              n = e.deltaY < 0 && n <= i.$results.height();
                            t
                              ? (i.$results.scrollTop(0),
                                e.preventDefault(),
                                e.stopPropagation())
                              : n &&
                                (i.$results.scrollTop(
                                  i.$results.get(0).scrollHeight -
                                    i.$results.height()
                                ),
                                e.preventDefault(),
                                e.stopPropagation());
                          }),
                        this.$results.on(
                          "mouseup",
                          ".select2-results__option--selectable",
                          function (e) {
                            var t = d(this),
                              n = p.GetData(this, "data");
                            t.hasClass("select2-results__option--selected")
                              ? i.options.get("multiple")
                                ? i.trigger("unselect", {
                                    originalEvent: e,
                                    data: n,
                                  })
                                : i.trigger("close", {})
                              : i.trigger("select", {
                                  originalEvent: e,
                                  data: n,
                                });
                          }
                        ),
                        this.$results.on(
                          "mouseenter",
                          ".select2-results__option--selectable",
                          function (e) {
                            var t = p.GetData(this, "data");
                            i
                              .getHighlightedResults()
                              .removeClass(
                                "select2-results__option--highlighted"
                              )
                              .attr("aria-selected", "false"),
                              i.trigger("results:focus", {
                                data: t,
                                element: d(this),
                              });
                          }
                        );
                    }),
                    (s.prototype.getHighlightedResults = function () {
                      return this.$results.find(
                        ".select2-results__option--highlighted"
                      );
                    }),
                    (s.prototype.destroy = function () {
                      this.$results.remove();
                    }),
                    (s.prototype.ensureHighlightVisible = function () {
                      var e,
                        t,
                        n,
                        s,
                        i = this.getHighlightedResults();
                      0 !== i.length &&
                        ((e = this.$results
                          .find(".select2-results__option--selectable")
                          .index(i)),
                        (s = this.$results.offset().top),
                        (t = i.offset().top),
                        (n = this.$results.scrollTop() + (t - s)),
                        (s = t - s),
                        (n -= 2 * i.outerHeight(!1)),
                        e <= 2
                          ? this.$results.scrollTop(0)
                          : (s > this.$results.outerHeight() || s < 0) &&
                            this.$results.scrollTop(n));
                    }),
                    (s.prototype.template = function (e, t) {
                      var n = this.options.get("templateResult"),
                        s = this.options.get("escapeMarkup"),
                        e = n(e, t);
                      null == e
                        ? (t.style.display = "none")
                        : "string" == typeof e
                        ? (t.innerHTML = s(e))
                        : d(t).append(e);
                    }),
                    s
                  );
                }
              ),
              u.define("select2/keys", [], function () {
                return {
                  BACKSPACE: 8,
                  TAB: 9,
                  ENTER: 13,
                  SHIFT: 16,
                  CTRL: 17,
                  ALT: 18,
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
                  DELETE: 46,
                };
              }),
              u.define(
                "select2/selection/base",
                ["jquery", "../utils", "../keys"],
                function (n, s, i) {
                  function o(e, t) {
                    (this.$element = e),
                      (this.options = t),
                      o.__super__.constructor.call(this);
                  }
                  return (
                    s.Extend(o, s.Observable),
                    (o.prototype.render = function () {
                      var e = n(
                        '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
                      );
                      return (
                        (this._tabindex = 0),
                        null != s.GetData(this.$element[0], "old-tabindex")
                          ? (this._tabindex = s.GetData(
                              this.$element[0],
                              "old-tabindex"
                            ))
                          : null != this.$element.attr("tabindex") &&
                            (this._tabindex = this.$element.attr("tabindex")),
                        e.attr("title", this.$element.attr("title")),
                        e.attr("tabindex", this._tabindex),
                        e.attr("aria-disabled", "false"),
                        (this.$selection = e)
                      );
                    }),
                    (o.prototype.bind = function (e, t) {
                      var n = this,
                        s = e.id + "-results";
                      (this.container = e),
                        this.$selection.on("focus", function (e) {
                          n.trigger("focus", e);
                        }),
                        this.$selection.on("blur", function (e) {
                          n._handleBlur(e);
                        }),
                        this.$selection.on("keydown", function (e) {
                          n.trigger("keypress", e),
                            e.which === i.SPACE && e.preventDefault();
                        }),
                        e.on("results:focus", function (e) {
                          n.$selection.attr(
                            "aria-activedescendant",
                            e.data._resultId
                          );
                        }),
                        e.on("selection:update", function (e) {
                          n.update(e.data);
                        }),
                        e.on("open", function () {
                          n.$selection.attr("aria-expanded", "true"),
                            n.$selection.attr("aria-owns", s),
                            n._attachCloseHandler(e);
                        }),
                        e.on("close", function () {
                          n.$selection.attr("aria-expanded", "false"),
                            n.$selection.removeAttr("aria-activedescendant"),
                            n.$selection.removeAttr("aria-owns"),
                            n.$selection.trigger("focus"),
                            n._detachCloseHandler(e);
                        }),
                        e.on("enable", function () {
                          n.$selection.attr("tabindex", n._tabindex),
                            n.$selection.attr("aria-disabled", "false");
                        }),
                        e.on("disable", function () {
                          n.$selection.attr("tabindex", "-1"),
                            n.$selection.attr("aria-disabled", "true");
                        });
                    }),
                    (o.prototype._handleBlur = function (e) {
                      var t = this;
                      window.setTimeout(function () {
                        document.activeElement == t.$selection[0] ||
                          n.contains(t.$selection[0], document.activeElement) ||
                          t.trigger("blur", e);
                      }, 1);
                    }),
                    (o.prototype._attachCloseHandler = function (e) {
                      n(document.body).on(
                        "mousedown.select2." + e.id,
                        function (e) {
                          var t = n(e.target).closest(".select2");
                          n(".select2.select2-container--open").each(
                            function () {
                              this != t[0] &&
                                s.GetData(this, "element").select2("close");
                            }
                          );
                        }
                      );
                    }),
                    (o.prototype._detachCloseHandler = function (e) {
                      n(document.body).off("mousedown.select2." + e.id);
                    }),
                    (o.prototype.position = function (e, t) {
                      t.find(".selection").append(e);
                    }),
                    (o.prototype.destroy = function () {
                      this._detachCloseHandler(this.container);
                    }),
                    (o.prototype.update = function (e) {
                      throw new Error(
                        "The `update` method must be defined in child classes."
                      );
                    }),
                    (o.prototype.isEnabled = function () {
                      return !this.isDisabled();
                    }),
                    (o.prototype.isDisabled = function () {
                      return this.options.get("disabled");
                    }),
                    o
                  );
                }
              ),
              u.define(
                "select2/selection/single",
                ["jquery", "./base", "../utils", "../keys"],
                function (e, t, n, s) {
                  function i() {
                    i.__super__.constructor.apply(this, arguments);
                  }
                  return (
                    n.Extend(i, t),
                    (i.prototype.render = function () {
                      var e = i.__super__.render.call(this);
                      return (
                        e[0].classList.add("select2-selection--single"),
                        e.html(
                          '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                        ),
                        e
                      );
                    }),
                    (i.prototype.bind = function (t, e) {
                      var n = this;
                      i.__super__.bind.apply(this, arguments);
                      var s = t.id + "-container";
                      this.$selection
                        .find(".select2-selection__rendered")
                        .attr("id", s)
                        .attr("role", "textbox")
                        .attr("aria-readonly", "true"),
                        this.$selection.attr("aria-labelledby", s),
                        this.$selection.attr("aria-controls", s),
                        this.$selection.on("mousedown", function (e) {
                          1 === e.which &&
                            n.trigger("toggle", {
                              originalEvent: e,
                            });
                        }),
                        this.$selection.on("focus", function (e) {}),
                        this.$selection.on("blur", function (e) {}),
                        t.on("focus", function (e) {
                          t.isOpen() || n.$selection.trigger("focus");
                        });
                    }),
                    (i.prototype.clear = function () {
                      var e = this.$selection.find(
                        ".select2-selection__rendered"
                      );
                      e.empty(), e.removeAttr("title");
                    }),
                    (i.prototype.display = function (e, t) {
                      var n = this.options.get("templateSelection");
                      return this.options.get("escapeMarkup")(n(e, t));
                    }),
                    (i.prototype.selectionContainer = function () {
                      return e("<span></span>");
                    }),
                    (i.prototype.update = function (e) {
                      var t, n;
                      0 !== e.length
                        ? ((n = e[0]),
                          (t = this.$selection.find(
                            ".select2-selection__rendered"
                          )),
                          (e = this.display(n, t)),
                          t.empty().append(e),
                          (n = n.title || n.text)
                            ? t.attr("title", n)
                            : t.removeAttr("title"))
                        : this.clear();
                    }),
                    i
                  );
                }
              ),
              u.define(
                "select2/selection/multiple",
                ["jquery", "./base", "../utils"],
                function (i, e, c) {
                  function o(e, t) {
                    o.__super__.constructor.apply(this, arguments);
                  }
                  return (
                    c.Extend(o, e),
                    (o.prototype.render = function () {
                      var e = o.__super__.render.call(this);
                      return (
                        e[0].classList.add("select2-selection--multiple"),
                        e.html('<ul class="select2-selection__rendered"></ul>'),
                        e
                      );
                    }),
                    (o.prototype.bind = function (e, t) {
                      var n = this;
                      o.__super__.bind.apply(this, arguments);
                      var s = e.id + "-container";
                      this.$selection
                        .find(".select2-selection__rendered")
                        .attr("id", s),
                        this.$selection.on("click", function (e) {
                          n.trigger("toggle", {
                            originalEvent: e,
                          });
                        }),
                        this.$selection.on(
                          "click",
                          ".select2-selection__choice__remove",
                          function (e) {
                            var t;
                            n.isDisabled() ||
                              ((t = i(this).parent()),
                              (t = c.GetData(t[0], "data")),
                              n.trigger("unselect", {
                                originalEvent: e,
                                data: t,
                              }));
                          }
                        ),
                        this.$selection.on(
                          "keydown",
                          ".select2-selection__choice__remove",
                          function (e) {
                            n.isDisabled() || e.stopPropagation();
                          }
                        );
                    }),
                    (o.prototype.clear = function () {
                      var e = this.$selection.find(
                        ".select2-selection__rendered"
                      );
                      e.empty(), e.removeAttr("title");
                    }),
                    (o.prototype.display = function (e, t) {
                      var n = this.options.get("templateSelection");
                      return this.options.get("escapeMarkup")(n(e, t));
                    }),
                    (o.prototype.selectionContainer = function () {
                      return i(
                        '<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>'
                      );
                    }),
                    (o.prototype.update = function (e) {
                      if ((this.clear(), 0 !== e.length)) {
                        for (
                          var t = [],
                            n =
                              this.$selection
                                .find(".select2-selection__rendered")
                                .attr("id") + "-choice-",
                            s = 0;
                          s < e.length;
                          s++
                        ) {
                          var i = e[s],
                            o = this.selectionContainer(),
                            r = this.display(i, o),
                            a = n + c.generateChars(4) + "-";
                          i.id ? (a += i.id) : (a += c.generateChars(4)),
                            o
                              .find(".select2-selection__choice__display")
                              .append(r)
                              .attr("id", a);
                          var l = i.title || i.text;
                          l && o.attr("title", l);
                          (r = this.options
                            .get("translations")
                            .get("removeItem")),
                            (l = o.find(".select2-selection__choice__remove"));
                          l.attr("title", r()),
                            l.attr("aria-label", r()),
                            l.attr("aria-describedby", a),
                            c.StoreData(o[0], "data", i),
                            t.push(o);
                        }
                        this.$selection
                          .find(".select2-selection__rendered")
                          .append(t);
                      }
                    }),
                    o
                  );
                }
              ),
              u.define("select2/selection/placeholder", [], function () {
                function e(e, t, n) {
                  (this.placeholder = this.normalizePlaceholder(
                    n.get("placeholder")
                  )),
                    e.call(this, t, n);
                }
                return (
                  (e.prototype.normalizePlaceholder = function (e, t) {
                    return (
                      "string" == typeof t &&
                        (t = {
                          id: "",
                          text: t,
                        }),
                      t
                    );
                  }),
                  (e.prototype.createPlaceholder = function (e, t) {
                    var n = this.selectionContainer();
                    n.html(this.display(t)),
                      n[0].classList.add("select2-selection__placeholder"),
                      n[0].classList.remove("select2-selection__choice");
                    t = t.title || t.text || n.text();
                    return (
                      this.$selection
                        .find(".select2-selection__rendered")
                        .attr("title", t),
                      n
                    );
                  }),
                  (e.prototype.update = function (e, t) {
                    var n = 1 == t.length && t[0].id != this.placeholder.id;
                    if (1 < t.length || n) return e.call(this, t);
                    this.clear();
                    t = this.createPlaceholder(this.placeholder);
                    this.$selection
                      .find(".select2-selection__rendered")
                      .append(t);
                  }),
                  e
                );
              }),
              u.define(
                "select2/selection/allowClear",
                ["jquery", "../keys", "../utils"],
                function (i, s, a) {
                  function e() {}
                  return (
                    (e.prototype.bind = function (e, t, n) {
                      var s = this;
                      e.call(this, t, n),
                        null == this.placeholder &&
                          this.options.get("debug") &&
                          window.console &&
                          console.error &&
                          console.error(
                            "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                          ),
                        this.$selection.on(
                          "mousedown",
                          ".select2-selection__clear",
                          function (e) {
                            s._handleClear(e);
                          }
                        ),
                        t.on("keypress", function (e) {
                          s._handleKeyboardClear(e, t);
                        });
                    }),
                    (e.prototype._handleClear = function (e, t) {
                      if (!this.isDisabled()) {
                        var n = this.$selection.find(
                          ".select2-selection__clear"
                        );
                        if (0 !== n.length) {
                          t.stopPropagation();
                          var s = a.GetData(n[0], "data"),
                            i = this.$element.val();
                          this.$element.val(this.placeholder.id);
                          var o = {
                            data: s,
                          };
                          if ((this.trigger("clear", o), o.prevented))
                            this.$element.val(i);
                          else {
                            for (var r = 0; r < s.length; r++) {
                              if (
                                ((o = {
                                  data: s[r],
                                }),
                                this.trigger("unselect", o),
                                o.prevented)
                              )
                                return void this.$element.val(i);
                            }
                            this.$element.trigger("input").trigger("change"),
                              this.trigger("toggle", {});
                          }
                        }
                      }
                    }),
                    (e.prototype._handleKeyboardClear = function (e, t, n) {
                      n.isOpen() ||
                        (t.which != s.DELETE && t.which != s.BACKSPACE) ||
                        this._handleClear(t);
                    }),
                    (e.prototype.update = function (e, t) {
                      var n, s;
                      e.call(this, t),
                        this.$selection
                          .find(".select2-selection__clear")
                          .remove(),
                        this.$selection[0].classList.remove(
                          "select2-selection--clearable"
                        ),
                        0 <
                          this.$selection.find(
                            ".select2-selection__placeholder"
                          ).length ||
                          0 === t.length ||
                          ((n = this.$selection
                            .find(".select2-selection__rendered")
                            .attr("id")),
                          (s = this.options
                            .get("translations")
                            .get("removeAllItems")),
                          (e = i(
                            '<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>'
                          )).attr("title", s()),
                          e.attr("aria-label", s()),
                          e.attr("aria-describedby", n),
                          a.StoreData(e[0], "data", t),
                          this.$selection.prepend(e),
                          this.$selection[0].classList.add(
                            "select2-selection--clearable"
                          ));
                    }),
                    e
                  );
                }
              ),
              u.define(
                "select2/selection/search",
                ["jquery", "../utils", "../keys"],
                function (s, a, l) {
                  function e(e, t, n) {
                    e.call(this, t, n);
                  }
                  return (
                    (e.prototype.render = function (e) {
                      var t = this.options.get("translations").get("search"),
                        n = s(
                          '<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>'
                        );
                      (this.$searchContainer = n),
                        (this.$search = n.find("textarea")),
                        this.$search.prop(
                          "autocomplete",
                          this.options.get("autocomplete")
                        ),
                        this.$search.attr("aria-label", t());
                      e = e.call(this);
                      return (
                        this._transferTabIndex(),
                        e.append(this.$searchContainer),
                        e
                      );
                    }),
                    (e.prototype.bind = function (e, t, n) {
                      var s = this,
                        i = t.id + "-results",
                        o = t.id + "-container";
                      e.call(this, t, n),
                        s.$search.attr("aria-describedby", o),
                        t.on("open", function () {
                          s.$search.attr("aria-controls", i),
                            s.$search.trigger("focus");
                        }),
                        t.on("close", function () {
                          s.$search.val(""),
                            s.resizeSearch(),
                            s.$search.removeAttr("aria-controls"),
                            s.$search.removeAttr("aria-activedescendant"),
                            s.$search.trigger("focus");
                        }),
                        t.on("enable", function () {
                          s.$search.prop("disabled", !1), s._transferTabIndex();
                        }),
                        t.on("disable", function () {
                          s.$search.prop("disabled", !0);
                        }),
                        t.on("focus", function (e) {
                          s.$search.trigger("focus");
                        }),
                        t.on("results:focus", function (e) {
                          e.data._resultId
                            ? s.$search.attr(
                                "aria-activedescendant",
                                e.data._resultId
                              )
                            : s.$search.removeAttr("aria-activedescendant");
                        }),
                        this.$selection.on(
                          "focusin",
                          ".select2-search--inline",
                          function (e) {
                            s.trigger("focus", e);
                          }
                        ),
                        this.$selection.on(
                          "focusout",
                          ".select2-search--inline",
                          function (e) {
                            s._handleBlur(e);
                          }
                        ),
                        this.$selection.on(
                          "keydown",
                          ".select2-search--inline",
                          function (e) {
                            var t;
                            e.stopPropagation(),
                              s.trigger("keypress", e),
                              (s._keyUpPrevented = e.isDefaultPrevented()),
                              e.which !== l.BACKSPACE ||
                                "" !== s.$search.val() ||
                                (0 <
                                  (t = s.$selection
                                    .find(".select2-selection__choice")
                                    .last()).length &&
                                  ((t = a.GetData(t[0], "data")),
                                  s.searchRemoveChoice(t),
                                  e.preventDefault()));
                          }
                        ),
                        this.$selection.on(
                          "click",
                          ".select2-search--inline",
                          function (e) {
                            s.$search.val() && e.stopPropagation();
                          }
                        );
                      var t = document.documentMode,
                        r = t && t <= 11;
                      this.$selection.on(
                        "input.searchcheck",
                        ".select2-search--inline",
                        function (e) {
                          r
                            ? s.$selection.off("input.search input.searchcheck")
                            : s.$selection.off("keyup.search");
                        }
                      ),
                        this.$selection.on(
                          "keyup.search input.search",
                          ".select2-search--inline",
                          function (e) {
                            var t;
                            r && "input" === e.type
                              ? s.$selection.off(
                                  "input.search input.searchcheck"
                                )
                              : (t = e.which) != l.SHIFT &&
                                t != l.CTRL &&
                                t != l.ALT &&
                                t != l.TAB &&
                                s.handleSearch(e);
                          }
                        );
                    }),
                    (e.prototype._transferTabIndex = function (e) {
                      this.$search.attr(
                        "tabindex",
                        this.$selection.attr("tabindex")
                      ),
                        this.$selection.attr("tabindex", "-1");
                    }),
                    (e.prototype.createPlaceholder = function (e, t) {
                      this.$search.attr("placeholder", t.text);
                    }),
                    (e.prototype.update = function (e, t) {
                      var n = this.$search[0] == document.activeElement;
                      this.$search.attr("placeholder", ""),
                        e.call(this, t),
                        this.resizeSearch(),
                        n && this.$search.trigger("focus");
                    }),
                    (e.prototype.handleSearch = function () {
                      var e;
                      this.resizeSearch(),
                        this._keyUpPrevented ||
                          ((e = this.$search.val()),
                          this.trigger("query", {
                            term: e,
                          })),
                        (this._keyUpPrevented = !1);
                    }),
                    (e.prototype.searchRemoveChoice = function (e, t) {
                      this.trigger("unselect", {
                        data: t,
                      }),
                        this.$search.val(t.text),
                        this.handleSearch();
                    }),
                    (e.prototype.resizeSearch = function () {
                      this.$search.css("width", "25px");
                      var e = "100%";
                      "" === this.$search.attr("placeholder") &&
                        (e = 0.75 * (this.$search.val().length + 1) + "em"),
                        this.$search.css("width", e);
                    }),
                    e
                  );
                }
              ),
              u.define(
                "select2/selection/selectionCss",
                ["../utils"],
                function (n) {
                  function e() {}
                  return (
                    (e.prototype.render = function (e) {
                      var t = e.call(this),
                        e = this.options.get("selectionCssClass") || "";
                      return (
                        -1 !== e.indexOf(":all:") &&
                          ((e = e.replace(":all:", "")),
                          n.copyNonInternalCssClasses(t[0], this.$element[0])),
                        t.addClass(e),
                        t
                      );
                    }),
                    e
                  );
                }
              ),
              u.define(
                "select2/selection/eventRelay",
                ["jquery"],
                function (r) {
                  function e() {}
                  return (
                    (e.prototype.bind = function (e, t, n) {
                      var s = this,
                        i = [
                          "open",
                          "opening",
                          "close",
                          "closing",
                          "select",
                          "selecting",
                          "unselect",
                          "unselecting",
                          "clear",
                          "clearing",
                        ],
                        o = [
                          "opening",
                          "closing",
                          "selecting",
                          "unselecting",
                          "clearing",
                        ];
                      e.call(this, t, n),
                        t.on("*", function (e, t) {
                          var n;
                          -1 !== i.indexOf(e) &&
                            ((t = t || {}),
                            (n = r.Event("select2:" + e, {
                              params: t,
                            })),
                            s.$element.trigger(n),
                            -1 !== o.indexOf(e) &&
                              (t.prevented = n.isDefaultPrevented()));
                        });
                    }),
                    e
                  );
                }
              ),
              u.define(
                "select2/translation",
                ["jquery", "require"],
                function (t, n) {
                  function s(e) {
                    this.dict = e || {};
                  }
                  return (
                    (s.prototype.all = function () {
                      return this.dict;
                    }),
                    (s.prototype.get = function (e) {
                      return this.dict[e];
                    }),
                    (s.prototype.extend = function (e) {
                      this.dict = t.extend({}, e.all(), this.dict);
                    }),
                    (s._cache = {}),
                    (s.loadPath = function (e) {
                      var t;
                      return (
                        e in s._cache || ((t = n(e)), (s._cache[e] = t)),
                        new s(s._cache[e])
                      );
                    }),
                    s
                  );
                }
              ),
              u.define("select2/diacritics", [], function () {
                return {
                  "â’¶": "A",
                  "ï¼¡": "A",
                  "Ã€": "A",
                  "Ã": "A",
                  "Ã‚": "A",
                  "áº¦": "A",
                  "áº¤": "A",
                  áºª: "A",
                  "áº¨": "A",
                  Ãƒ: "A",
                  "Ä€": "A",
                  "Ä‚": "A",
                  "áº°": "A",
                  "áº®": "A",
                  "áº´": "A",
                  "áº²": "A",
                  "È¦": "A",
                  "Ç ": "A",
                  "Ã„": "A",
                  Çž: "A",
                  "áº¢": "A",
                  "Ã…": "A",
                  Çº: "A",
                  "Ç": "A",
                  "È€": "A",
                  "È‚": "A",
                  "áº ": "A",
                  "áº¬": "A",
                  "áº¶": "A",
                  "á¸€": "A",
                  "Ä„": "A",
                  Èº: "A",
                  "â±¯": "A",
                  "êœ²": "AA",
                  "Ã†": "AE",
                  "Ç¼": "AE",
                  "Ç¢": "AE",
                  "êœ´": "AO",
                  "êœ¶": "AU",
                  "êœ¸": "AV",
                  êœº: "AV",
                  "êœ¼": "AY",
                  "â’·": "B",
                  "ï¼¢": "B",
                  "á¸‚": "B",
                  "á¸„": "B",
                  "á¸†": "B",
                  Éƒ: "B",
                  "Æ‚": "B",
                  "Æ": "B",
                  "â’¸": "C",
                  "ï¼£": "C",
                  "Ä†": "C",
                  Äˆ: "C",
                  ÄŠ: "C",
                  ÄŒ: "C",
                  "Ã‡": "C",
                  "á¸ˆ": "C",
                  "Æ‡": "C",
                  "È»": "C",
                  "êœ¾": "C",
                  "â’¹": "D",
                  "ï¼¤": "D",
                  "á¸Š": "D",
                  ÄŽ: "D",
                  "á¸Œ": "D",
                  "á¸": "D",
                  "á¸’": "D",
                  "á¸Ž": "D",
                  "Ä": "D",
                  "Æ‹": "D",
                  ÆŠ: "D",
                  "Æ‰": "D",
                  "ê¹": "D",
                  "Ç±": "DZ",
                  "Ç„": "DZ",
                  "Ç²": "Dz",
                  "Ç…": "Dz",
                  "â’º": "E",
                  "ï¼¥": "E",
                  Ãˆ: "E",
                  "Ã‰": "E",
                  ÃŠ: "E",
                  "á»€": "E",
                  "áº¾": "E",
                  "á»„": "E",
                  "á»‚": "E",
                  "áº¼": "E",
                  "Ä’": "E",
                  "á¸”": "E",
                  "á¸–": "E",
                  "Ä”": "E",
                  "Ä–": "E",
                  "Ã‹": "E",
                  áºº: "E",
                  Äš: "E",
                  "È„": "E",
                  "È†": "E",
                  "áº¸": "E",
                  "á»†": "E",
                  "È¨": "E",
                  "á¸œ": "E",
                  "Ä˜": "E",
                  "á¸˜": "E",
                  "á¸š": "E",
                  "Æ": "E",
                  ÆŽ: "E",
                  "â’»": "F",
                  "ï¼¦": "F",
                  "á¸ž": "F",
                  "Æ‘": "F",
                  "ê»": "F",
                  "â’¼": "G",
                  "ï¼§": "G",
                  "Ç´": "G",
                  Äœ: "G",
                  "á¸ ": "G",
                  Äž: "G",
                  "Ä ": "G",
                  "Ç¦": "G",
                  "Ä¢": "G",
                  "Ç¤": "G",
                  "Æ“": "G",
                  "êž ": "G",
                  "ê½": "G",
                  "ê¾": "G",
                  "â’½": "H",
                  "ï¼¨": "H",
                  "Ä¤": "H",
                  "á¸¢": "H",
                  "á¸¦": "H",
                  Èž: "H",
                  "á¸¤": "H",
                  "á¸¨": "H",
                  "á¸ª": "H",
                  "Ä¦": "H",
                  "â±§": "H",
                  "â±µ": "H",
                  "êž": "H",
                  "â’¾": "I",
                  "ï¼©": "I",
                  ÃŒ: "I",
                  "Ã": "I",
                  ÃŽ: "I",
                  "Ä¨": "I",
                  Äª: "I",
                  "Ä¬": "I",
                  "Ä°": "I",
                  "Ã": "I",
                  "á¸®": "I",
                  "á»ˆ": "I",
                  "Ç": "I",
                  Èˆ: "I",
                  ÈŠ: "I",
                  "á»Š": "I",
                  "Ä®": "I",
                  "á¸¬": "I",
                  "Æ—": "I",
                  "â’¿": "J",
                  "ï¼ª": "J",
                  "Ä´": "J",
                  Éˆ: "J",
                  "â“€": "K",
                  "ï¼«": "K",
                  "á¸°": "K",
                  "Ç¨": "K",
                  "á¸²": "K",
                  "Ä¶": "K",
                  "á¸´": "K",
                  "Æ˜": "K",
                  "â±©": "K",
                  "ê€": "K",
                  "ê‚": "K",
                  "ê„": "K",
                  "êž¢": "K",
                  "â“": "L",
                  "ï¼¬": "L",
                  "Ä¿": "L",
                  "Ä¹": "L",
                  "Ä½": "L",
                  "á¸¶": "L",
                  "á¸¸": "L",
                  "Ä»": "L",
                  "á¸¼": "L",
                  "á¸º": "L",
                  "Å": "L",
                  "È½": "L",
                  "â±¢": "L",
                  "â± ": "L",
                  "êˆ": "L",
                  "ê†": "L",
                  "êž€": "L",
                  "Ç‡": "LJ",
                  Çˆ: "Lj",
                  "â“‚": "M",
                  "ï¼­": "M",
                  "á¸¾": "M",
                  "á¹€": "M",
                  "á¹‚": "M",
                  "â±®": "M",
                  Æœ: "M",
                  "â“ƒ": "N",
                  "ï¼®": "N",
                  "Ç¸": "N",
                  Åƒ: "N",
                  "Ã‘": "N",
                  "á¹„": "N",
                  "Å‡": "N",
                  "á¹†": "N",
                  "Å…": "N",
                  "á¹Š": "N",
                  "á¹ˆ": "N",
                  "È ": "N",
                  "Æ": "N",
                  "êž": "N",
                  "êž¤": "N",
                  ÇŠ: "NJ",
                  "Ç‹": "Nj",
                  "â“„": "O",
                  "ï¼¯": "O",
                  "Ã’": "O",
                  "Ã“": "O",
                  "Ã”": "O",
                  "á»’": "O",
                  "á»": "O",
                  "á»–": "O",
                  "á»”": "O",
                  "Ã•": "O",
                  "á¹Œ": "O",
                  "È¬": "O",
                  "á¹Ž": "O",
                  ÅŒ: "O",
                  "á¹": "O",
                  "á¹’": "O",
                  ÅŽ: "O",
                  "È®": "O",
                  "È°": "O",
                  "Ã–": "O",
                  Èª: "O",
                  "á»Ž": "O",
                  "Å": "O",
                  "Ç‘": "O",
                  ÈŒ: "O",
                  ÈŽ: "O",
                  "Æ ": "O",
                  "á»œ": "O",
                  "á»š": "O",
                  "á» ": "O",
                  "á»ž": "O",
                  "á»¢": "O",
                  "á»Œ": "O",
                  "á»˜": "O",
                  Çª: "O",
                  "Ç¬": "O",
                  "Ã˜": "O",
                  "Ç¾": "O",
                  "Æ†": "O",
                  ÆŸ: "O",
                  "êŠ": "O",
                  "êŒ": "O",
                  "Å’": "OE",
                  "Æ¢": "OI",
                  "êŽ": "OO",
                  "È¢": "OU",
                  "â“…": "P",
                  "ï¼°": "P",
                  "á¹”": "P",
                  "á¹–": "P",
                  "Æ¤": "P",
                  "â±£": "P",
                  "ê": "P",
                  "ê’": "P",
                  "ê”": "P",
                  "â“†": "Q",
                  "ï¼±": "Q",
                  "ê–": "Q",
                  "ê˜": "Q",
                  ÉŠ: "Q",
                  "â“‡": "R",
                  "ï¼²": "R",
                  "Å”": "R",
                  "á¹˜": "R",
                  "Å˜": "R",
                  "È": "R",
                  "È’": "R",
                  "á¹š": "R",
                  "á¹œ": "R",
                  "Å–": "R",
                  "á¹ž": "R",
                  ÉŒ: "R",
                  "â±¤": "R",
                  "êš": "R",
                  "êž¦": "R",
                  "êž‚": "R",
                  "â“ˆ": "S",
                  "ï¼³": "S",
                  áºž: "S",
                  Åš: "S",
                  "á¹¤": "S",
                  Åœ: "S",
                  "á¹ ": "S",
                  "Å ": "S",
                  "á¹¦": "S",
                  "á¹¢": "S",
                  "á¹¨": "S",
                  "È˜": "S",
                  Åž: "S",
                  "â±¾": "S",
                  "êž¨": "S",
                  "êž„": "S",
                  "â“‰": "T",
                  "ï¼´": "T",
                  "á¹ª": "T",
                  "Å¤": "T",
                  "á¹¬": "T",
                  Èš: "T",
                  "Å¢": "T",
                  "á¹°": "T",
                  "á¹®": "T",
                  "Å¦": "T",
                  "Æ¬": "T",
                  "Æ®": "T",
                  "È¾": "T",
                  "êž†": "T",
                  "êœ¨": "TZ",
                  "â“Š": "U",
                  "ï¼µ": "U",
                  "Ã™": "U",
                  Ãš: "U",
                  "Ã›": "U",
                  "Å¨": "U",
                  "á¹¸": "U",
                  Åª: "U",
                  "á¹º": "U",
                  "Å¬": "U",
                  Ãœ: "U",
                  "Ç›": "U",
                  "Ç—": "U",
                  "Ç•": "U",
                  "Ç™": "U",
                  "á»¦": "U",
                  "Å®": "U",
                  "Å°": "U",
                  "Ç“": "U",
                  "È”": "U",
                  "È–": "U",
                  "Æ¯": "U",
                  "á»ª": "U",
                  "á»¨": "U",
                  "á»®": "U",
                  "á»¬": "U",
                  "á»°": "U",
                  "á»¤": "U",
                  "á¹²": "U",
                  "Å²": "U",
                  "á¹¶": "U",
                  "á¹´": "U",
                  "É„": "U",
                  "â“‹": "V",
                  "ï¼¶": "V",
                  "á¹¼": "V",
                  "á¹¾": "V",
                  "Æ²": "V",
                  "êž": "V",
                  "É…": "V",
                  "ê ": "VY",
                  "â“Œ": "W",
                  "ï¼·": "W",
                  "áº€": "W",
                  "áº‚": "W",
                  "Å´": "W",
                  "áº†": "W",
                  "áº„": "W",
                  áºˆ: "W",
                  "â±²": "W",
                  "â“": "X",
                  "ï¼¸": "X",
                  áºŠ: "X",
                  áºŒ: "X",
                  "â“Ž": "Y",
                  "ï¼¹": "Y",
                  "á»²": "Y",
                  "Ã": "Y",
                  "Å¶": "Y",
                  "á»¸": "Y",
                  "È²": "Y",
                  áºŽ: "Y",
                  "Å¸": "Y",
                  "á»¶": "Y",
                  "á»´": "Y",
                  "Æ³": "Y",
                  ÉŽ: "Y",
                  "á»¾": "Y",
                  "â“": "Z",
                  "ï¼º": "Z",
                  "Å¹": "Z",
                  "áº": "Z",
                  "Å»": "Z",
                  "Å½": "Z",
                  "áº’": "Z",
                  "áº”": "Z",
                  Æµ: "Z",
                  "È¤": "Z",
                  "â±¿": "Z",
                  "â±«": "Z",
                  "ê¢": "Z",
                  "â“": "a",
                  "ï½": "a",
                  áºš: "a",
                  "Ã ": "a",
                  "Ã¡": "a",
                  "Ã¢": "a",
                  "áº§": "a",
                  "áº¥": "a",
                  "áº«": "a",
                  "áº©": "a",
                  "Ã£": "a",
                  "Ä": "a",
                  Äƒ: "a",
                  "áº±": "a",
                  "áº¯": "a",
                  áºµ: "a",
                  "áº³": "a",
                  "È§": "a",
                  "Ç¡": "a",
                  "Ã¤": "a",
                  ÇŸ: "a",
                  "áº£": "a",
                  "Ã¥": "a",
                  "Ç»": "a",
                  ÇŽ: "a",
                  "È": "a",
                  Èƒ: "a",
                  "áº¡": "a",
                  "áº­": "a",
                  "áº·": "a",
                  "á¸": "a",
                  "Ä…": "a",
                  "â±¥": "a",
                  "É": "a",
                  "êœ³": "aa",
                  "Ã¦": "ae",
                  "Ç½": "ae",
                  "Ç£": "ae",
                  êœµ: "ao",
                  "êœ·": "au",
                  "êœ¹": "av",
                  "êœ»": "av",
                  "êœ½": "ay",
                  "â“‘": "b",
                  "ï½‚": "b",
                  "á¸ƒ": "b",
                  "á¸…": "b",
                  "á¸‡": "b",
                  "Æ€": "b",
                  Æƒ: "b",
                  "É“": "b",
                  "â“’": "c",
                  "ï½ƒ": "c",
                  "Ä‡": "c",
                  "Ä‰": "c",
                  "Ä‹": "c",
                  "Ä": "c",
                  "Ã§": "c",
                  "á¸‰": "c",
                  Æˆ: "c",
                  "È¼": "c",
                  "êœ¿": "c",
                  "â†„": "c",
                  "â““": "d",
                  "ï½„": "d",
                  "á¸‹": "d",
                  "Ä": "d",
                  "á¸": "d",
                  "á¸‘": "d",
                  "á¸“": "d",
                  "á¸": "d",
                  "Ä‘": "d",
                  ÆŒ: "d",
                  "É–": "d",
                  "É—": "d",
                  "êº": "d",
                  "Ç³": "dz",
                  "Ç†": "dz",
                  "â“”": "e",
                  "ï½…": "e",
                  "Ã¨": "e",
                  "Ã©": "e",
                  Ãª: "e",
                  "á»": "e",
                  "áº¿": "e",
                  "á»…": "e",
                  "á»ƒ": "e",
                  "áº½": "e",
                  "Ä“": "e",
                  "á¸•": "e",
                  "á¸—": "e",
                  "Ä•": "e",
                  "Ä—": "e",
                  "Ã«": "e",
                  "áº»": "e",
                  "Ä›": "e",
                  "È…": "e",
                  "È‡": "e",
                  "áº¹": "e",
                  "á»‡": "e",
                  "È©": "e",
                  "á¸": "e",
                  "Ä™": "e",
                  "á¸™": "e",
                  "á¸›": "e",
                  "É‡": "e",
                  "É›": "e",
                  "Ç": "e",
                  "â“•": "f",
                  "ï½†": "f",
                  "á¸Ÿ": "f",
                  "Æ’": "f",
                  "ê¼": "f",
                  "â“–": "g",
                  "ï½‡": "g",
                  Çµ: "g",
                  "Ä": "g",
                  "á¸¡": "g",
                  ÄŸ: "g",
                  "Ä¡": "g",
                  "Ç§": "g",
                  "Ä£": "g",
                  "Ç¥": "g",
                  "É ": "g",
                  "êž¡": "g",
                  "áµ¹": "g",
                  "ê¿": "g",
                  "â“—": "h",
                  "ï½ˆ": "h",
                  "Ä¥": "h",
                  "á¸£": "h",
                  "á¸§": "h",
                  ÈŸ: "h",
                  "á¸¥": "h",
                  "á¸©": "h",
                  "á¸«": "h",
                  "áº–": "h",
                  "Ä§": "h",
                  "â±¨": "h",
                  "â±¶": "h",
                  "É¥": "h",
                  "Æ•": "hv",
                  "â“˜": "i",
                  "ï½‰": "i",
                  "Ã¬": "i",
                  "Ã­": "i",
                  "Ã®": "i",
                  "Ä©": "i",
                  "Ä«": "i",
                  "Ä­": "i",
                  "Ã¯": "i",
                  "á¸¯": "i",
                  "á»‰": "i",
                  "Ç": "i",
                  "È‰": "i",
                  "È‹": "i",
                  "á»‹": "i",
                  "Ä¯": "i",
                  "á¸­": "i",
                  "É¨": "i",
                  "Ä±": "i",
                  "â“™": "j",
                  "ï½Š": "j",
                  Äµ: "j",
                  "Ç°": "j",
                  "É‰": "j",
                  "â“š": "k",
                  "ï½‹": "k",
                  "á¸±": "k",
                  "Ç©": "k",
                  "á¸³": "k",
                  "Ä·": "k",
                  "á¸µ": "k",
                  "Æ™": "k",
                  "â±ª": "k",
                  "ê": "k",
                  "êƒ": "k",
                  "ê…": "k",
                  "êž£": "k",
                  "â“›": "l",
                  "ï½Œ": "l",
                  "Å€": "l",
                  Äº: "l",
                  "Ä¾": "l",
                  "á¸·": "l",
                  "á¸¹": "l",
                  "Ä¼": "l",
                  "á¸½": "l",
                  "á¸»": "l",
                  "Å¿": "l",
                  "Å‚": "l",
                  Æš: "l",
                  "É«": "l",
                  "â±¡": "l",
                  "ê‰": "l",
                  "êž": "l",
                  "ê‡": "l",
                  "Ç‰": "lj",
                  "â“œ": "m",
                  "ï½": "m",
                  "á¸¿": "m",
                  "á¹": "m",
                  "á¹ƒ": "m",
                  "É±": "m",
                  "É¯": "m",
                  "â“": "n",
                  "ï½Ž": "n",
                  "Ç¹": "n",
                  "Å„": "n",
                  "Ã±": "n",
                  "á¹…": "n",
                  Åˆ: "n",
                  "á¹‡": "n",
                  "Å†": "n",
                  "á¹‹": "n",
                  "á¹‰": "n",
                  Æž: "n",
                  "É²": "n",
                  "Å‰": "n",
                  "êž‘": "n",
                  "êž¥": "n",
                  ÇŒ: "nj",
                  "â“ž": "o",
                  "ï½": "o",
                  "Ã²": "o",
                  "Ã³": "o",
                  "Ã´": "o",
                  "á»“": "o",
                  "á»‘": "o",
                  "á»—": "o",
                  "á»•": "o",
                  Ãµ: "o",
                  "á¹": "o",
                  "È­": "o",
                  "á¹": "o",
                  "Å": "o",
                  "á¹‘": "o",
                  "á¹“": "o",
                  "Å": "o",
                  "È¯": "o",
                  "È±": "o",
                  "Ã¶": "o",
                  "È«": "o",
                  "á»": "o",
                  "Å‘": "o",
                  "Ç’": "o",
                  "È": "o",
                  "È": "o",
                  "Æ¡": "o",
                  "á»": "o",
                  "á»›": "o",
                  "á»¡": "o",
                  "á»Ÿ": "o",
                  "á»£": "o",
                  "á»": "o",
                  "á»™": "o",
                  "Ç«": "o",
                  "Ç­": "o",
                  "Ã¸": "o",
                  "Ç¿": "o",
                  "É”": "o",
                  "ê‹": "o",
                  "ê": "o",
                  Éµ: "o",
                  "Å“": "oe",
                  "Æ£": "oi",
                  "È£": "ou",
                  "ê": "oo",
                  "â“Ÿ": "p",
                  "ï½": "p",
                  "á¹•": "p",
                  "á¹—": "p",
                  "Æ¥": "p",
                  "áµ½": "p",
                  "ê‘": "p",
                  "ê“": "p",
                  "ê•": "p",
                  "â“ ": "q",
                  "ï½‘": "q",
                  "É‹": "q",
                  "ê—": "q",
                  "ê™": "q",
                  "â“¡": "r",
                  "ï½’": "r",
                  "Å•": "r",
                  "á¹™": "r",
                  "Å™": "r",
                  "È‘": "r",
                  "È“": "r",
                  "á¹›": "r",
                  "á¹": "r",
                  "Å—": "r",
                  "á¹Ÿ": "r",
                  "É": "r",
                  "É½": "r",
                  "ê›": "r",
                  "êž§": "r",
                  êžƒ: "r",
                  "â“¢": "s",
                  "ï½“": "s",
                  ÃŸ: "s",
                  "Å›": "s",
                  "á¹¥": "s",
                  "Å": "s",
                  "á¹¡": "s",
                  "Å¡": "s",
                  "á¹§": "s",
                  "á¹£": "s",
                  "á¹©": "s",
                  "È™": "s",
                  ÅŸ: "s",
                  "È¿": "s",
                  "êž©": "s",
                  "êž…": "s",
                  "áº›": "s",
                  "â“£": "t",
                  "ï½”": "t",
                  "á¹«": "t",
                  "áº—": "t",
                  "Å¥": "t",
                  "á¹­": "t",
                  "È›": "t",
                  "Å£": "t",
                  "á¹±": "t",
                  "á¹¯": "t",
                  "Å§": "t",
                  "Æ­": "t",
                  Êˆ: "t",
                  "â±¦": "t",
                  "êž‡": "t",
                  "êœ©": "tz",
                  "â“¤": "u",
                  "ï½•": "u",
                  "Ã¹": "u",
                  Ãº: "u",
                  "Ã»": "u",
                  "Å©": "u",
                  "á¹¹": "u",
                  "Å«": "u",
                  "á¹»": "u",
                  "Å­": "u",
                  "Ã¼": "u",
                  Çœ: "u",
                  "Ç˜": "u",
                  "Ç–": "u",
                  Çš: "u",
                  "á»§": "u",
                  "Å¯": "u",
                  "Å±": "u",
                  "Ç”": "u",
                  "È•": "u",
                  "È—": "u",
                  "Æ°": "u",
                  "á»«": "u",
                  "á»©": "u",
                  "á»¯": "u",
                  "á»­": "u",
                  "á»±": "u",
                  "á»¥": "u",
                  "á¹³": "u",
                  "Å³": "u",
                  "á¹·": "u",
                  "á¹µ": "u",
                  "Ê‰": "u",
                  "â“¥": "v",
                  "ï½–": "v",
                  "á¹½": "v",
                  "á¹¿": "v",
                  "Ê‹": "v",
                  "êŸ": "v",
                  ÊŒ: "v",
                  "ê¡": "vy",
                  "â“¦": "w",
                  "ï½—": "w",
                  "áº": "w",
                  áºƒ: "w",
                  Åµ: "w",
                  "áº‡": "w",
                  "áº…": "w",
                  "áº˜": "w",
                  "áº‰": "w",
                  "â±³": "w",
                  "â“§": "x",
                  "ï½˜": "x",
                  "áº‹": "x",
                  "áº": "x",
                  "â“¨": "y",
                  "ï½™": "y",
                  "á»³": "y",
                  "Ã½": "y",
                  "Å·": "y",
                  "á»¹": "y",
                  "È³": "y",
                  "áº": "y",
                  "Ã¿": "y",
                  "á»·": "y",
                  "áº™": "y",
                  "á»µ": "y",
                  "Æ´": "y",
                  "É": "y",
                  "á»¿": "y",
                  "â“©": "z",
                  "ï½š": "z",
                  Åº: "z",
                  "áº‘": "z",
                  "Å¼": "z",
                  "Å¾": "z",
                  "áº“": "z",
                  "áº•": "z",
                  "Æ¶": "z",
                  "È¥": "z",
                  "É€": "z",
                  "â±¬": "z",
                  "ê£": "z",
                  "Î†": "Î‘",
                  Îˆ: "Î•",
                  "Î‰": "Î—",
                  ÎŠ: "Î™",
                  Îª: "Î™",
                  ÎŒ: "ÎŸ",
                  ÎŽ: "Î¥",
                  "Î«": "Î¥",
                  "Î": "Î©",
                  "Î¬": "Î±",
                  "Î­": "Îµ",
                  "Î®": "Î·",
                  "Î¯": "Î¹",
                  ÏŠ: "Î¹",
                  "Î": "Î¹",
                  ÏŒ: "Î¿",
                  "Ï": "Ï…",
                  "Ï‹": "Ï…",
                  "Î°": "Ï…",
                  ÏŽ: "Ï‰",
                  "Ï‚": "Ïƒ",
                  "â€™": "'",
                };
              }),
              u.define("select2/data/base", ["../utils"], function (n) {
                function s(e, t) {
                  s.__super__.constructor.call(this);
                }
                return (
                  n.Extend(s, n.Observable),
                  (s.prototype.current = function (e) {
                    throw new Error(
                      "The `current` method must be defined in child classes."
                    );
                  }),
                  (s.prototype.query = function (e, t) {
                    throw new Error(
                      "The `query` method must be defined in child classes."
                    );
                  }),
                  (s.prototype.bind = function (e, t) {}),
                  (s.prototype.destroy = function () {}),
                  (s.prototype.generateResultId = function (e, t) {
                    e = e.id + "-result-";
                    return (
                      (e += n.generateChars(4)),
                      null != t.id
                        ? (e += "-" + t.id.toString())
                        : (e += "-" + n.generateChars(4)),
                      e
                    );
                  }),
                  s
                );
              }),
              u.define(
                "select2/data/select",
                ["./base", "../utils", "jquery"],
                function (e, a, l) {
                  function n(e, t) {
                    (this.$element = e),
                      (this.options = t),
                      n.__super__.constructor.call(this);
                  }
                  return (
                    a.Extend(n, e),
                    (n.prototype.current = function (e) {
                      var t = this;
                      e(
                        Array.prototype.map.call(
                          this.$element[0].querySelectorAll(":checked"),
                          function (e) {
                            return t.item(l(e));
                          }
                        )
                      );
                    }),
                    (n.prototype.select = function (i) {
                      var e,
                        o = this;
                      if (
                        ((i.selected = !0),
                        null != i.element &&
                          "option" === i.element.tagName.toLowerCase())
                      )
                        return (
                          (i.element.selected = !0),
                          void this.$element.trigger("input").trigger("change")
                        );
                      this.$element.prop("multiple")
                        ? this.current(function (e) {
                            var t = [];
                            (i = [i]).push.apply(i, e);
                            for (var n = 0; n < i.length; n++) {
                              var s = i[n].id;
                              -1 === t.indexOf(s) && t.push(s);
                            }
                            o.$element.val(t),
                              o.$element.trigger("input").trigger("change");
                          })
                        : ((e = i.id),
                          this.$element.val(e),
                          this.$element.trigger("input").trigger("change"));
                    }),
                    (n.prototype.unselect = function (i) {
                      var o = this;
                      if (this.$element.prop("multiple")) {
                        if (
                          ((i.selected = !1),
                          null != i.element &&
                            "option" === i.element.tagName.toLowerCase())
                        )
                          return (
                            (i.element.selected = !1),
                            void this.$element
                              .trigger("input")
                              .trigger("change")
                          );
                        this.current(function (e) {
                          for (var t = [], n = 0; n < e.length; n++) {
                            var s = e[n].id;
                            s !== i.id && -1 === t.indexOf(s) && t.push(s);
                          }
                          o.$element.val(t),
                            o.$element.trigger("input").trigger("change");
                        });
                      }
                    }),
                    (n.prototype.bind = function (e, t) {
                      var n = this;
                      (this.container = e).on("select", function (e) {
                        n.select(e.data);
                      }),
                        e.on("unselect", function (e) {
                          n.unselect(e.data);
                        });
                    }),
                    (n.prototype.destroy = function () {
                      this.$element.find("*").each(function () {
                        a.RemoveData(this);
                      });
                    }),
                    (n.prototype.query = function (t, e) {
                      var n = [],
                        s = this;
                      this.$element.children().each(function () {
                        var e;
                        ("option" !== this.tagName.toLowerCase() &&
                          "optgroup" !== this.tagName.toLowerCase()) ||
                          ((e = l(this)),
                          (e = s.item(e)),
                          null !== (e = s.matches(t, e)) && n.push(e));
                      }),
                        e({
                          results: n,
                        });
                    }),
                    (n.prototype.addOptions = function (e) {
                      this.$element.append(e);
                    }),
                    (n.prototype.option = function (e) {
                      var t;
                      e.children
                        ? ((t = document.createElement("optgroup")).label =
                            e.text)
                        : void 0 !==
                          (t = document.createElement("option")).textContent
                        ? (t.textContent = e.text)
                        : (t.innerText = e.text),
                        void 0 !== e.id && (t.value = e.id),
                        e.disabled && (t.disabled = !0),
                        e.selected && (t.selected = !0),
                        e.title && (t.title = e.title);
                      e = this._normalizeItem(e);
                      return (e.element = t), a.StoreData(t, "data", e), l(t);
                    }),
                    (n.prototype.item = function (e) {
                      var t = {};
                      if (null != (t = a.GetData(e[0], "data"))) return t;
                      var n = e[0];
                      if ("option" === n.tagName.toLowerCase())
                        t = {
                          id: e.val(),
                          text: e.text(),
                          disabled: e.prop("disabled"),
                          selected: e.prop("selected"),
                          title: e.prop("title"),
                        };
                      else if ("optgroup" === n.tagName.toLowerCase()) {
                        t = {
                          text: e.prop("label"),
                          children: [],
                          title: e.prop("title"),
                        };
                        for (
                          var s = e.children("option"), i = [], o = 0;
                          o < s.length;
                          o++
                        ) {
                          var r = l(s[o]),
                            r = this.item(r);
                          i.push(r);
                        }
                        t.children = i;
                      }
                      return (
                        ((t = this._normalizeItem(t)).element = e[0]),
                        a.StoreData(e[0], "data", t),
                        t
                      );
                    }),
                    (n.prototype._normalizeItem = function (e) {
                      e !== Object(e) &&
                        (e = {
                          id: e,
                          text: e,
                        });
                      return (
                        null !=
                          (e = l.extend(
                            {},
                            {
                              text: "",
                            },
                            e
                          )).id && (e.id = e.id.toString()),
                        null != e.text && (e.text = e.text.toString()),
                        null == e._resultId &&
                          e.id &&
                          null != this.container &&
                          (e._resultId = this.generateResultId(
                            this.container,
                            e
                          )),
                        l.extend(
                          {},
                          {
                            selected: !1,
                            disabled: !1,
                          },
                          e
                        )
                      );
                    }),
                    (n.prototype.matches = function (e, t) {
                      return this.options.get("matcher")(e, t);
                    }),
                    n
                  );
                }
              ),
              u.define(
                "select2/data/array",
                ["./select", "../utils", "jquery"],
                function (e, t, c) {
                  function s(e, t) {
                    (this._dataToConvert = t.get("data") || []),
                      s.__super__.constructor.call(this, e, t);
                  }
                  return (
                    t.Extend(s, e),
                    (s.prototype.bind = function (e, t) {
                      s.__super__.bind.call(this, e, t),
                        this.addOptions(
                          this.convertToOptions(this._dataToConvert)
                        );
                    }),
                    (s.prototype.select = function (n) {
                      var e = this.$element
                        .find("option")
                        .filter(function (e, t) {
                          return t.value == n.id.toString();
                        });
                      0 === e.length &&
                        ((e = this.option(n)), this.addOptions(e)),
                        s.__super__.select.call(this, n);
                    }),
                    (s.prototype.convertToOptions = function (e) {
                      var t = this,
                        n = this.$element.find("option"),
                        s = n
                          .map(function () {
                            return t.item(c(this)).id;
                          })
                          .get(),
                        i = [];
                      for (var o = 0; o < e.length; o++) {
                        var r,
                          a,
                          l = this._normalizeItem(e[o]);
                        0 <= s.indexOf(l.id)
                          ? ((r = n.filter(
                              (function (e) {
                                return function () {
                                  return c(this).val() == e.id;
                                };
                              })(l)
                            )),
                            (a = this.item(r)),
                            (a = c.extend(!0, {}, l, a)),
                            (a = this.option(a)),
                            r.replaceWith(a))
                          : ((a = this.option(l)),
                            l.children &&
                              ((l = this.convertToOptions(l.children)),
                              a.append(l)),
                            i.push(a));
                      }
                      return i;
                    }),
                    s
                  );
                }
              ),
              u.define(
                "select2/data/ajax",
                ["./array", "../utils", "jquery"],
                function (e, t, o) {
                  function n(e, t) {
                    (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
                      null != this.ajaxOptions.processResults &&
                        (this.processResults = this.ajaxOptions.processResults),
                      n.__super__.constructor.call(this, e, t);
                  }
                  return (
                    t.Extend(n, e),
                    (n.prototype._applyDefaults = function (e) {
                      var t = {
                        data: function data(e) {
                          return o.extend({}, e, {
                            q: e.term,
                          });
                        },
                        transport: function transport(e, t, n) {
                          e = o.ajax(e);
                          return e.then(t), e.fail(n), e;
                        },
                      };
                      return o.extend({}, t, e, !0);
                    }),
                    (n.prototype.processResults = function (e) {
                      return e;
                    }),
                    (n.prototype.query = function (t, n) {
                      var s = this;
                      null != this._request &&
                        ("function" == typeof this._request.abort &&
                          this._request.abort(),
                        (this._request = null));
                      var i = o.extend(
                        {
                          type: "GET",
                        },
                        this.ajaxOptions
                      );
                      function e() {
                        var e = i.transport(
                          i,
                          function (e) {
                            e = s.processResults(e, t);
                            s.options.get("debug") &&
                              window.console &&
                              console.error &&
                              ((e && e.results && Array.isArray(e.results)) ||
                                console.error(
                                  "Select2: The AJAX results did not return an array in the `results` key of the response."
                                )),
                              n(e);
                          },
                          function () {
                            ("status" in e &&
                              (0 === e.status || "0" === e.status)) ||
                              s.trigger("results:message", {
                                message: "errorLoading",
                              });
                          }
                        );
                        s._request = e;
                      }
                      "function" == typeof i.url &&
                        (i.url = i.url.call(this.$element, t)),
                        "function" == typeof i.data &&
                          (i.data = i.data.call(this.$element, t)),
                        this.ajaxOptions.delay && null != t.term
                          ? (this._queryTimeout &&
                              window.clearTimeout(this._queryTimeout),
                            (this._queryTimeout = window.setTimeout(
                              e,
                              this.ajaxOptions.delay
                            )))
                          : e();
                    }),
                    n
                  );
                }
              ),
              u.define("select2/data/tags", ["jquery"], function (t) {
                function e(e, t, n) {
                  var s = n.get("tags"),
                    i = n.get("createTag");
                  void 0 !== i && (this.createTag = i);
                  i = n.get("insertTag");
                  if (
                    (void 0 !== i && (this.insertTag = i),
                    e.call(this, t, n),
                    Array.isArray(s))
                  )
                    for (var o = 0; o < s.length; o++) {
                      var r = s[o],
                        r = this._normalizeItem(r),
                        r = this.option(r);
                      this.$element.append(r);
                    }
                }
                return (
                  (e.prototype.query = function (e, c, u) {
                    var d = this;
                    this._removeOldTags(),
                      null != c.term && null == c.page
                        ? e.call(this, c, function e(t, n) {
                            for (var s = t.results, i = 0; i < s.length; i++) {
                              var o = s[i],
                                r =
                                  null != o.children &&
                                  !e(
                                    {
                                      results: o.children,
                                    },
                                    !0
                                  );
                              if (
                                (o.text || "").toUpperCase() ===
                                  (c.term || "").toUpperCase() ||
                                r
                              )
                                return !n && ((t.data = s), void u(t));
                            }
                            if (n) return !0;
                            var a,
                              l = d.createTag(c);
                            null != l &&
                              ((a = d.option(l)).attr(
                                "data-select2-tag",
                                "true"
                              ),
                              d.addOptions([a]),
                              d.insertTag(s, l)),
                              (t.results = s),
                              u(t);
                          })
                        : e.call(this, c, u);
                  }),
                  (e.prototype.createTag = function (e, t) {
                    if (null == t.term) return null;
                    t = t.term.trim();
                    return "" === t
                      ? null
                      : {
                          id: t,
                          text: t,
                        };
                  }),
                  (e.prototype.insertTag = function (e, t, n) {
                    t.unshift(n);
                  }),
                  (e.prototype._removeOldTags = function (e) {
                    this.$element
                      .find("option[data-select2-tag]")
                      .each(function () {
                        this.selected || t(this).remove();
                      });
                  }),
                  e
                );
              }),
              u.define("select2/data/tokenizer", ["jquery"], function (c) {
                function e(e, t, n) {
                  var s = n.get("tokenizer");
                  void 0 !== s && (this.tokenizer = s), e.call(this, t, n);
                }
                return (
                  (e.prototype.bind = function (e, t, n) {
                    e.call(this, t, n),
                      (this.$search =
                        t.dropdown.$search ||
                        t.selection.$search ||
                        n.find(".select2-search__field"));
                  }),
                  (e.prototype.query = function (e, t, n) {
                    var s = this;
                    t.term = t.term || "";
                    var i = this.tokenizer(t, this.options, function (e) {
                      var t,
                        n = s._normalizeItem(e);
                      s.$element.find("option").filter(function () {
                        return c(this).val() === n.id;
                      }).length ||
                        ((t = s.option(n)).attr("data-select2-tag", !0),
                        s._removeOldTags(),
                        s.addOptions([t])),
                        (t = n),
                        s.trigger("select", {
                          data: t,
                        });
                    });
                    i.term !== t.term &&
                      (this.$search.length &&
                        (this.$search.val(i.term),
                        this.$search.trigger("focus")),
                      (t.term = i.term)),
                      e.call(this, t, n);
                  }),
                  (e.prototype.tokenizer = function (e, t, n, s) {
                    for (
                      var i = n.get("tokenSeparators") || [],
                        o = t.term,
                        r = 0,
                        a =
                          this.createTag ||
                          function (e) {
                            return {
                              id: e.term,
                              text: e.term,
                            };
                          };
                      r < o.length;

                    ) {
                      var l = o[r];
                      -1 !== i.indexOf(l)
                        ? ((l = o.substr(0, r)),
                          null !=
                          (l = a(
                            c.extend({}, t, {
                              term: l,
                            })
                          ))
                            ? (s(l), (o = o.substr(r + 1) || ""), (r = 0))
                            : r++)
                        : r++;
                    }
                    return {
                      term: o,
                    };
                  }),
                  e
                );
              }),
              u.define("select2/data/minimumInputLength", [], function () {
                function e(e, t, n) {
                  (this.minimumInputLength = n.get("minimumInputLength")),
                    e.call(this, t, n);
                }
                return (
                  (e.prototype.query = function (e, t, n) {
                    (t.term = t.term || ""),
                      t.term.length < this.minimumInputLength
                        ? this.trigger("results:message", {
                            message: "inputTooShort",
                            args: {
                              minimum: this.minimumInputLength,
                              input: t.term,
                              params: t,
                            },
                          })
                        : e.call(this, t, n);
                  }),
                  e
                );
              }),
              u.define("select2/data/maximumInputLength", [], function () {
                function e(e, t, n) {
                  (this.maximumInputLength = n.get("maximumInputLength")),
                    e.call(this, t, n);
                }
                return (
                  (e.prototype.query = function (e, t, n) {
                    (t.term = t.term || ""),
                      0 < this.maximumInputLength &&
                      t.term.length > this.maximumInputLength
                        ? this.trigger("results:message", {
                            message: "inputTooLong",
                            args: {
                              maximum: this.maximumInputLength,
                              input: t.term,
                              params: t,
                            },
                          })
                        : e.call(this, t, n);
                  }),
                  e
                );
              }),
              u.define("select2/data/maximumSelectionLength", [], function () {
                function e(e, t, n) {
                  (this.maximumSelectionLength = n.get(
                    "maximumSelectionLength"
                  )),
                    e.call(this, t, n);
                }
                return (
                  (e.prototype.bind = function (e, t, n) {
                    var s = this;
                    e.call(this, t, n),
                      t.on("select", function () {
                        s._checkIfMaximumSelected();
                      });
                  }),
                  (e.prototype.query = function (e, t, n) {
                    var s = this;
                    this._checkIfMaximumSelected(function () {
                      e.call(s, t, n);
                    });
                  }),
                  (e.prototype._checkIfMaximumSelected = function (e, t) {
                    var n = this;
                    this.current(function (e) {
                      e = null != e ? e.length : 0;
                      0 < n.maximumSelectionLength &&
                      e >= n.maximumSelectionLength
                        ? n.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                              maximum: n.maximumSelectionLength,
                            },
                          })
                        : t && t();
                    });
                  }),
                  e
                );
              }),
              u.define(
                "select2/dropdown",
                ["jquery", "./utils"],
                function (t, e) {
                  function n(e, t) {
                    (this.$element = e),
                      (this.options = t),
                      n.__super__.constructor.call(this);
                  }
                  return (
                    e.Extend(n, e.Observable),
                    (n.prototype.render = function () {
                      var e = t(
                        '<span class="select2-dropdown"><span class="select2-results"></span></span>'
                      );
                      return (
                        e.attr("dir", this.options.get("dir")),
                        (this.$dropdown = e)
                      );
                    }),
                    (n.prototype.bind = function () {}),
                    (n.prototype.position = function (e, t) {}),
                    (n.prototype.destroy = function () {
                      this.$dropdown.remove();
                    }),
                    n
                  );
                }
              ),
              u.define("select2/dropdown/search", ["jquery"], function (o) {
                function e() {}
                return (
                  (e.prototype.render = function (e) {
                    var t = e.call(this),
                      n = this.options.get("translations").get("search"),
                      e = o(
                        '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
                      );
                    return (
                      (this.$searchContainer = e),
                      (this.$search = e.find("input")),
                      this.$search.prop(
                        "autocomplete",
                        this.options.get("autocomplete")
                      ),
                      this.$search.attr("aria-label", n()),
                      t.prepend(e),
                      t
                    );
                  }),
                  (e.prototype.bind = function (e, t, n) {
                    var s = this,
                      i = t.id + "-results";
                    e.call(this, t, n),
                      this.$search.on("keydown", function (e) {
                        s.trigger("keypress", e),
                          (s._keyUpPrevented = e.isDefaultPrevented());
                      }),
                      this.$search.on("input", function (e) {
                        o(this).off("keyup");
                      }),
                      this.$search.on("keyup input", function (e) {
                        s.handleSearch(e);
                      }),
                      t.on("open", function () {
                        s.$search.attr("tabindex", 0),
                          s.$search.attr("aria-controls", i),
                          s.$search.trigger("focus"),
                          window.setTimeout(function () {
                            s.$search.trigger("focus");
                          }, 0);
                      }),
                      t.on("close", function () {
                        s.$search.attr("tabindex", -1),
                          s.$search.removeAttr("aria-controls"),
                          s.$search.removeAttr("aria-activedescendant"),
                          s.$search.val(""),
                          s.$search.trigger("blur");
                      }),
                      t.on("focus", function () {
                        t.isOpen() || s.$search.trigger("focus");
                      }),
                      t.on("results:all", function (e) {
                        (null != e.query.term && "" !== e.query.term) ||
                          (s.showSearch(e)
                            ? s.$searchContainer[0].classList.remove(
                                "select2-search--hide"
                              )
                            : s.$searchContainer[0].classList.add(
                                "select2-search--hide"
                              ));
                      }),
                      t.on("results:focus", function (e) {
                        e.data._resultId
                          ? s.$search.attr(
                              "aria-activedescendant",
                              e.data._resultId
                            )
                          : s.$search.removeAttr("aria-activedescendant");
                      });
                  }),
                  (e.prototype.handleSearch = function (e) {
                    var t;
                    this._keyUpPrevented ||
                      ((t = this.$search.val()),
                      this.trigger("query", {
                        term: t,
                      })),
                      (this._keyUpPrevented = !1);
                  }),
                  (e.prototype.showSearch = function (e, t) {
                    return !0;
                  }),
                  e
                );
              }),
              u.define("select2/dropdown/hidePlaceholder", [], function () {
                function e(e, t, n, s) {
                  (this.placeholder = this.normalizePlaceholder(
                    n.get("placeholder")
                  )),
                    e.call(this, t, n, s);
                }
                return (
                  (e.prototype.append = function (e, t) {
                    (t.results = this.removePlaceholder(t.results)),
                      e.call(this, t);
                  }),
                  (e.prototype.normalizePlaceholder = function (e, t) {
                    return (
                      "string" == typeof t &&
                        (t = {
                          id: "",
                          text: t,
                        }),
                      t
                    );
                  }),
                  (e.prototype.removePlaceholder = function (e, t) {
                    for (var n = t.slice(0), s = t.length - 1; 0 <= s; s--) {
                      var i = t[s];
                      this.placeholder.id === i.id && n.splice(s, 1);
                    }
                    return n;
                  }),
                  e
                );
              }),
              u.define(
                "select2/dropdown/infiniteScroll",
                ["jquery"],
                function (n) {
                  function e(e, t, n, s) {
                    (this.lastParams = {}),
                      e.call(this, t, n, s),
                      (this.$loadingMore = this.createLoadingMore()),
                      (this.loading = !1);
                  }
                  return (
                    (e.prototype.append = function (e, t) {
                      this.$loadingMore.remove(),
                        (this.loading = !1),
                        e.call(this, t),
                        this.showLoadingMore(t) &&
                          (this.$results.append(this.$loadingMore),
                          this.loadMoreIfNeeded());
                    }),
                    (e.prototype.bind = function (e, t, n) {
                      var s = this;
                      e.call(this, t, n),
                        t.on("query", function (e) {
                          (s.lastParams = e), (s.loading = !0);
                        }),
                        t.on("query:append", function (e) {
                          (s.lastParams = e), (s.loading = !0);
                        }),
                        this.$results.on(
                          "scroll",
                          this.loadMoreIfNeeded.bind(this)
                        );
                    }),
                    (e.prototype.loadMoreIfNeeded = function () {
                      var e = n.contains(
                        document.documentElement,
                        this.$loadingMore[0]
                      );
                      !this.loading &&
                        e &&
                        ((e =
                          this.$results.offset().top +
                          this.$results.outerHeight(!1)),
                        this.$loadingMore.offset().top +
                          this.$loadingMore.outerHeight(!1) <=
                          e + 50 && this.loadMore());
                    }),
                    (e.prototype.loadMore = function () {
                      this.loading = !0;
                      var e = n.extend(
                        {},
                        {
                          page: 1,
                        },
                        this.lastParams
                      );
                      e.page++, this.trigger("query:append", e);
                    }),
                    (e.prototype.showLoadingMore = function (e, t) {
                      return t.pagination && t.pagination.more;
                    }),
                    (e.prototype.createLoadingMore = function () {
                      var e = n(
                          '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'
                        ),
                        t = this.options.get("translations").get("loadingMore");
                      return e.html(t(this.lastParams)), e;
                    }),
                    e
                  );
                }
              ),
              u.define(
                "select2/dropdown/attachBody",
                ["jquery", "../utils"],
                function (u, r) {
                  function e(e, t, n) {
                    (this.$dropdownParent = u(
                      n.get("dropdownParent") || document.body
                    )),
                      e.call(this, t, n);
                  }
                  return (
                    (e.prototype.bind = function (e, t, n) {
                      var s = this;
                      e.call(this, t, n),
                        t.on("open", function () {
                          s._showDropdown(),
                            s._attachPositioningHandler(t),
                            s._bindContainerResultHandlers(t);
                        }),
                        t.on("close", function () {
                          s._hideDropdown(), s._detachPositioningHandler(t);
                        }),
                        this.$dropdownContainer.on("mousedown", function (e) {
                          e.stopPropagation();
                        });
                    }),
                    (e.prototype.destroy = function (e) {
                      e.call(this), this.$dropdownContainer.remove();
                    }),
                    (e.prototype.position = function (e, t, n) {
                      t.attr("class", n.attr("class")),
                        t[0].classList.remove("select2"),
                        t[0].classList.add("select2-container--open"),
                        t.css({
                          position: "absolute",
                          top: -999999,
                        }),
                        (this.$container = n);
                    }),
                    (e.prototype.render = function (e) {
                      var t = u("<span></span>"),
                        e = e.call(this);
                      return t.append(e), (this.$dropdownContainer = t);
                    }),
                    (e.prototype._hideDropdown = function (e) {
                      this.$dropdownContainer.detach();
                    }),
                    (e.prototype._bindContainerResultHandlers = function (
                      e,
                      t
                    ) {
                      var n;
                      this._containerResultsHandlersBound ||
                        ((n = this),
                        t.on("results:all", function () {
                          n._positionDropdown(), n._resizeDropdown();
                        }),
                        t.on("results:append", function () {
                          n._positionDropdown(), n._resizeDropdown();
                        }),
                        t.on("results:message", function () {
                          n._positionDropdown(), n._resizeDropdown();
                        }),
                        t.on("select", function () {
                          n._positionDropdown(), n._resizeDropdown();
                        }),
                        t.on("unselect", function () {
                          n._positionDropdown(), n._resizeDropdown();
                        }),
                        (this._containerResultsHandlersBound = !0));
                    }),
                    (e.prototype._attachPositioningHandler = function (e, t) {
                      var n = this,
                        s = "scroll.select2." + t.id,
                        i = "resize.select2." + t.id,
                        o = "orientationchange.select2." + t.id,
                        t = this.$container.parents().filter(r.hasScroll);
                      t.each(function () {
                        r.StoreData(this, "select2-scroll-position", {
                          x: u(this).scrollLeft(),
                          y: u(this).scrollTop(),
                        });
                      }),
                        t.on(s, function (e) {
                          var t = r.GetData(this, "select2-scroll-position");
                          u(this).scrollTop(t.y);
                        }),
                        u(window).on(s + " " + i + " " + o, function (e) {
                          n._positionDropdown(), n._resizeDropdown();
                        });
                    }),
                    (e.prototype._detachPositioningHandler = function (e, t) {
                      var n = "scroll.select2." + t.id,
                        s = "resize.select2." + t.id,
                        t = "orientationchange.select2." + t.id;
                      this.$container.parents().filter(r.hasScroll).off(n),
                        u(window).off(n + " " + s + " " + t);
                    }),
                    (e.prototype._positionDropdown = function () {
                      var e = u(window),
                        t = this.$dropdown[0].classList.contains(
                          "select2-dropdown--above"
                        ),
                        n = this.$dropdown[0].classList.contains(
                          "select2-dropdown--below"
                        ),
                        s = null,
                        i = this.$container.offset();
                      i.bottom = i.top + this.$container.outerHeight(!1);
                      var o = {
                        height: this.$container.outerHeight(!1),
                      };
                      (o.top = i.top), (o.bottom = i.top + o.height);
                      var r = this.$dropdown.outerHeight(!1),
                        a = e.scrollTop(),
                        l = e.scrollTop() + e.height(),
                        c = a < i.top - r,
                        e = l > i.bottom + r,
                        a = {
                          left: i.left,
                          top: o.bottom,
                        },
                        l = this.$dropdownParent;
                      "static" === l.css("position") && (l = l.offsetParent());
                      i = {
                        top: 0,
                        left: 0,
                      };
                      (u.contains(document.body, l[0]) || l[0].isConnected) &&
                        (i = l.offset()),
                        (a.top -= i.top),
                        (a.left -= i.left),
                        t || n || (s = "below"),
                        e || !c || t
                          ? !c && e && t && (s = "below")
                          : (s = "above"),
                        ("above" == s || (t && "below" !== s)) &&
                          (a.top = o.top - i.top - r),
                        null != s &&
                          (this.$dropdown[0].classList.remove(
                            "select2-dropdown--below"
                          ),
                          this.$dropdown[0].classList.remove(
                            "select2-dropdown--above"
                          ),
                          this.$dropdown[0].classList.add(
                            "select2-dropdown--" + s
                          ),
                          this.$container[0].classList.remove(
                            "select2-container--below"
                          ),
                          this.$container[0].classList.remove(
                            "select2-container--above"
                          ),
                          this.$container[0].classList.add(
                            "select2-container--" + s
                          )),
                        this.$dropdownContainer.css(a);
                    }),
                    (e.prototype._resizeDropdown = function () {
                      var e = {
                        width: this.$container.outerWidth(!1) + "px",
                      };
                      this.options.get("dropdownAutoWidth") &&
                        ((e.minWidth = e.width),
                        (e.position = "relative"),
                        (e.width = "auto")),
                        this.$dropdown.css(e);
                    }),
                    (e.prototype._showDropdown = function (e) {
                      this.$dropdownContainer.appendTo(this.$dropdownParent),
                        this._positionDropdown(),
                        this._resizeDropdown();
                    }),
                    e
                  );
                }
              ),
              u.define(
                "select2/dropdown/minimumResultsForSearch",
                [],
                function () {
                  function e(e, t, n, s) {
                    (this.minimumResultsForSearch = n.get(
                      "minimumResultsForSearch"
                    )),
                      this.minimumResultsForSearch < 0 &&
                        (this.minimumResultsForSearch = 1 / 0),
                      e.call(this, t, n, s);
                  }
                  return (
                    (e.prototype.showSearch = function (e, t) {
                      return (
                        !(
                          (function e(t) {
                            for (var n = 0, s = 0; s < t.length; s++) {
                              var i = t[s];
                              i.children ? (n += e(i.children)) : n++;
                            }
                            return n;
                          })(t.data.results) < this.minimumResultsForSearch
                        ) && e.call(this, t)
                      );
                    }),
                    e
                  );
                }
              ),
              u.define(
                "select2/dropdown/selectOnClose",
                ["../utils"],
                function (s) {
                  function e() {}
                  return (
                    (e.prototype.bind = function (e, t, n) {
                      var s = this;
                      e.call(this, t, n),
                        t.on("close", function (e) {
                          s._handleSelectOnClose(e);
                        });
                    }),
                    (e.prototype._handleSelectOnClose = function (e, t) {
                      if (t && null != t.originalSelect2Event) {
                        var n = t.originalSelect2Event;
                        if ("select" === n._type || "unselect" === n._type)
                          return;
                      }
                      n = this.getHighlightedResults();
                      n.length < 1 ||
                        (null != (n = s.GetData(n[0], "data")).element &&
                          n.element.selected) ||
                        (null == n.element && n.selected) ||
                        this.trigger("select", {
                          data: n,
                        });
                    }),
                    e
                  );
                }
              ),
              u.define("select2/dropdown/closeOnSelect", [], function () {
                function e() {}
                return (
                  (e.prototype.bind = function (e, t, n) {
                    var s = this;
                    e.call(this, t, n),
                      t.on("select", function (e) {
                        s._selectTriggered(e);
                      }),
                      t.on("unselect", function (e) {
                        s._selectTriggered(e);
                      });
                  }),
                  (e.prototype._selectTriggered = function (e, t) {
                    var n = t.originalEvent;
                    (n && (n.ctrlKey || n.metaKey)) ||
                      this.trigger("close", {
                        originalEvent: n,
                        originalSelect2Event: t,
                      });
                  }),
                  e
                );
              }),
              u.define(
                "select2/dropdown/dropdownCss",
                ["../utils"],
                function (n) {
                  function e() {}
                  return (
                    (e.prototype.render = function (e) {
                      var t = e.call(this),
                        e = this.options.get("dropdownCssClass") || "";
                      return (
                        -1 !== e.indexOf(":all:") &&
                          ((e = e.replace(":all:", "")),
                          n.copyNonInternalCssClasses(t[0], this.$element[0])),
                        t.addClass(e),
                        t
                      );
                    }),
                    e
                  );
                }
              ),
              u.define(
                "select2/dropdown/tagsSearchHighlight",
                ["../utils"],
                function (s) {
                  function e() {}
                  return (
                    (e.prototype.highlightFirstItem = function (e) {
                      var t = this.$results.find(
                        ".select2-results__option--selectable:not(.select2-results__option--selected)"
                      );
                      if (0 < t.length) {
                        var n = t.first(),
                          t = s.GetData(n[0], "data").element;
                        if (
                          t &&
                          t.getAttribute &&
                          "true" === t.getAttribute("data-select2-tag")
                        )
                          return void n.trigger("mouseenter");
                      }
                      e.call(this);
                    }),
                    e
                  );
                }
              ),
              u.define("select2/i18n/en", [], function () {
                return {
                  errorLoading: function errorLoading() {
                    return "The results could not be loaded.";
                  },
                  inputTooLong: function inputTooLong(e) {
                    var t = e.input.length - e.maximum,
                      e = "Please delete " + t + " character";
                    return 1 != t && (e += "s"), e;
                  },
                  inputTooShort: function inputTooShort(e) {
                    return (
                      "Please enter " +
                      (e.minimum - e.input.length) +
                      " or more characters"
                    );
                  },
                  loadingMore: function loadingMore() {
                    return "Loading more resultsâ€¦";
                  },
                  maximumSelected: function maximumSelected(e) {
                    var t = "You can only select " + e.maximum + " item";
                    return 1 != e.maximum && (t += "s"), t;
                  },
                  noResults: function noResults() {
                    return "No results found";
                  },
                  searching: function searching() {
                    return "Searchingâ€¦";
                  },
                  removeAllItems: function removeAllItems() {
                    return "Remove all items";
                  },
                  removeItem: function removeItem() {
                    return "Remove item";
                  },
                  search: function search() {
                    return "Search";
                  },
                };
              }),
              u.define(
                "select2/defaults",
                [
                  "jquery",
                  "./results",
                  "./selection/single",
                  "./selection/multiple",
                  "./selection/placeholder",
                  "./selection/allowClear",
                  "./selection/search",
                  "./selection/selectionCss",
                  "./selection/eventRelay",
                  "./utils",
                  "./translation",
                  "./diacritics",
                  "./data/select",
                  "./data/array",
                  "./data/ajax",
                  "./data/tags",
                  "./data/tokenizer",
                  "./data/minimumInputLength",
                  "./data/maximumInputLength",
                  "./data/maximumSelectionLength",
                  "./dropdown",
                  "./dropdown/search",
                  "./dropdown/hidePlaceholder",
                  "./dropdown/infiniteScroll",
                  "./dropdown/attachBody",
                  "./dropdown/minimumResultsForSearch",
                  "./dropdown/selectOnClose",
                  "./dropdown/closeOnSelect",
                  "./dropdown/dropdownCss",
                  "./dropdown/tagsSearchHighlight",
                  "./i18n/en",
                ],
                function (
                  l,
                  o,
                  r,
                  a,
                  c,
                  u,
                  d,
                  p,
                  h,
                  f,
                  g,
                  t,
                  m,
                  v,
                  y,
                  _,
                  b,
                  w,
                  $,
                  x,
                  A,
                  D,
                  S,
                  O,
                  L,
                  E,
                  C,
                  T,
                  q,
                  I,
                  e
                ) {
                  function n() {
                    this.reset();
                  }
                  return (
                    (n.prototype.apply = function (e) {
                      var t;
                      null ==
                        (e = l.extend(!0, {}, this.defaults, e)).dataAdapter &&
                        (null != e.ajax
                          ? (e.dataAdapter = y)
                          : null != e.data
                          ? (e.dataAdapter = v)
                          : (e.dataAdapter = m),
                        0 < e.minimumInputLength &&
                          (e.dataAdapter = f.Decorate(e.dataAdapter, w)),
                        0 < e.maximumInputLength &&
                          (e.dataAdapter = f.Decorate(e.dataAdapter, $)),
                        0 < e.maximumSelectionLength &&
                          (e.dataAdapter = f.Decorate(e.dataAdapter, x)),
                        e.tags &&
                          (e.dataAdapter = f.Decorate(e.dataAdapter, _)),
                        (null == e.tokenSeparators && null == e.tokenizer) ||
                          (e.dataAdapter = f.Decorate(e.dataAdapter, b))),
                        null == e.resultsAdapter &&
                          ((e.resultsAdapter = o),
                          null != e.ajax &&
                            (e.resultsAdapter = f.Decorate(
                              e.resultsAdapter,
                              O
                            )),
                          null != e.placeholder &&
                            (e.resultsAdapter = f.Decorate(
                              e.resultsAdapter,
                              S
                            )),
                          e.selectOnClose &&
                            (e.resultsAdapter = f.Decorate(
                              e.resultsAdapter,
                              C
                            )),
                          e.tags &&
                            (e.resultsAdapter = f.Decorate(
                              e.resultsAdapter,
                              I
                            ))),
                        null == e.dropdownAdapter &&
                          (e.multiple
                            ? (e.dropdownAdapter = A)
                            : ((t = f.Decorate(A, D)), (e.dropdownAdapter = t)),
                          0 !== e.minimumResultsForSearch &&
                            (e.dropdownAdapter = f.Decorate(
                              e.dropdownAdapter,
                              E
                            )),
                          e.closeOnSelect &&
                            (e.dropdownAdapter = f.Decorate(
                              e.dropdownAdapter,
                              T
                            )),
                          null != e.dropdownCssClass &&
                            (e.dropdownAdapter = f.Decorate(
                              e.dropdownAdapter,
                              q
                            )),
                          (e.dropdownAdapter = f.Decorate(
                            e.dropdownAdapter,
                            L
                          ))),
                        null == e.selectionAdapter &&
                          (e.multiple
                            ? (e.selectionAdapter = a)
                            : (e.selectionAdapter = r),
                          null != e.placeholder &&
                            (e.selectionAdapter = f.Decorate(
                              e.selectionAdapter,
                              c
                            )),
                          e.allowClear &&
                            (e.selectionAdapter = f.Decorate(
                              e.selectionAdapter,
                              u
                            )),
                          e.multiple &&
                            (e.selectionAdapter = f.Decorate(
                              e.selectionAdapter,
                              d
                            )),
                          null != e.selectionCssClass &&
                            (e.selectionAdapter = f.Decorate(
                              e.selectionAdapter,
                              p
                            )),
                          (e.selectionAdapter = f.Decorate(
                            e.selectionAdapter,
                            h
                          ))),
                        (e.language = this._resolveLanguage(e.language)),
                        e.language.push("en");
                      for (var n = [], s = 0; s < e.language.length; s++) {
                        var i = e.language[s];
                        -1 === n.indexOf(i) && n.push(i);
                      }
                      return (
                        (e.language = n),
                        (e.translations = this._processTranslations(
                          e.language,
                          e.debug
                        )),
                        e
                      );
                    }),
                    (n.prototype.reset = function () {
                      function a(e) {
                        return e.replace(/[^\u0000-\u007E]/g, function (e) {
                          return t[e] || e;
                        });
                      }
                      this.defaults = {
                        amdLanguageBase: "./i18n/",
                        autocomplete: "off",
                        closeOnSelect: !0,
                        debug: !1,
                        dropdownAutoWidth: !1,
                        escapeMarkup: f.escapeMarkup,
                        language: {},
                        matcher: function e(t, n) {
                          if (null == t.term || "" === t.term.trim()) return n;
                          if (n.children && 0 < n.children.length) {
                            for (
                              var s = l.extend(!0, {}, n),
                                i = n.children.length - 1;
                              0 <= i;
                              i--
                            ) {
                              null == e(t, n.children[i]) &&
                                s.children.splice(i, 1);
                            }
                            return 0 < s.children.length ? s : e(t, s);
                          }
                          var o = a(n.text).toUpperCase(),
                            r = a(t.term).toUpperCase();
                          return -1 < o.indexOf(r) ? n : null;
                        },
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: !1,
                        scrollAfterSelect: !1,
                        sorter: function sorter(e) {
                          return e;
                        },
                        templateResult: function templateResult(e) {
                          return e.text;
                        },
                        templateSelection: function templateSelection(e) {
                          return e.text;
                        },
                        theme: "default",
                        width: "resolve",
                      };
                    }),
                    (n.prototype.applyFromElement = function (e, t) {
                      var n = e.language,
                        s = this.defaults.language,
                        i = t.prop("lang"),
                        t = t.closest("[lang]").prop("lang"),
                        t = Array.prototype.concat.call(
                          this._resolveLanguage(i),
                          this._resolveLanguage(n),
                          this._resolveLanguage(s),
                          this._resolveLanguage(t)
                        );
                      return (e.language = t), e;
                    }),
                    (n.prototype._resolveLanguage = function (e) {
                      if (!e) return [];
                      if (l.isEmptyObject(e)) return [];
                      if (l.isPlainObject(e)) return [e];
                      for (
                        var t, n = Array.isArray(e) ? e : [e], s = [], i = 0;
                        i < n.length;
                        i++
                      ) {
                        s.push(n[i]),
                          "string" == typeof n[i] &&
                            0 < n[i].indexOf("-") &&
                            ((t = n[i].split("-")[0]), s.push(t));
                      }
                      return s;
                    }),
                    (n.prototype._processTranslations = function (e, t) {
                      for (var n = new g(), s = 0; s < e.length; s++) {
                        var i = new g(),
                          o = e[s];
                        if ("string" == typeof o)
                          try {
                            i = g.loadPath(o);
                          } catch (e) {
                            try {
                              (o = this.defaults.amdLanguageBase + o),
                                (i = g.loadPath(o));
                            } catch (e) {
                              t &&
                                window.console &&
                                console.warn &&
                                console.warn(
                                  'Select2: The language file for "' +
                                    o +
                                    '" could not be automatically loaded. A fallback will be used instead.'
                                );
                            }
                          }
                        else i = l.isPlainObject(o) ? new g(o) : o;
                        n.extend(i);
                      }
                      return n;
                    }),
                    (n.prototype.set = function (e, t) {
                      var n = {};
                      n[l.camelCase(e)] = t;
                      n = f._convertData(n);
                      l.extend(!0, this.defaults, n);
                    }),
                    new n()
                  );
                }
              ),
              u.define(
                "select2/options",
                ["jquery", "./defaults", "./utils"],
                function (c, n, u) {
                  function e(e, t) {
                    (this.options = e),
                      null != t && this.fromElement(t),
                      null != t &&
                        (this.options = n.applyFromElement(this.options, t)),
                      (this.options = n.apply(this.options));
                  }
                  return (
                    (e.prototype.fromElement = function (e) {
                      var t = ["select2"];
                      null == this.options.multiple &&
                        (this.options.multiple = e.prop("multiple")),
                        null == this.options.disabled &&
                          (this.options.disabled = e.prop("disabled")),
                        null == this.options.autocomplete &&
                          e.prop("autocomplete") &&
                          (this.options.autocomplete = e.prop("autocomplete")),
                        null == this.options.dir &&
                          (e.prop("dir")
                            ? (this.options.dir = e.prop("dir"))
                            : e.closest("[dir]").prop("dir")
                            ? (this.options.dir = e
                                .closest("[dir]")
                                .prop("dir"))
                            : (this.options.dir = "ltr")),
                        e.prop("disabled", this.options.disabled),
                        e.prop("multiple", this.options.multiple),
                        u.GetData(e[0], "select2Tags") &&
                          (this.options.debug &&
                            window.console &&
                            console.warn &&
                            console.warn(
                              'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                            ),
                          u.StoreData(
                            e[0],
                            "data",
                            u.GetData(e[0], "select2Tags")
                          ),
                          u.StoreData(e[0], "tags", !0)),
                        u.GetData(e[0], "ajaxUrl") &&
                          (this.options.debug &&
                            window.console &&
                            console.warn &&
                            console.warn(
                              "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                            ),
                          e.attr("ajax--url", u.GetData(e[0], "ajaxUrl")),
                          u.StoreData(
                            e[0],
                            "ajax-Url",
                            u.GetData(e[0], "ajaxUrl")
                          ));
                      var n = {};
                      function s(e, t) {
                        return t.toUpperCase();
                      }
                      for (var i = 0; i < e[0].attributes.length; i++) {
                        var o = e[0].attributes[i].name,
                          r = "data-";
                        o.substr(0, r.length) == r &&
                          ((o = o.substring(r.length)),
                          (r = u.GetData(e[0], o)),
                          (n[o.replace(/-([a-z])/g, s)] = r));
                      }
                      c.fn.jquery &&
                        "1." == c.fn.jquery.substr(0, 2) &&
                        e[0].dataset &&
                        (n = c.extend(!0, {}, e[0].dataset, n));
                      var a,
                        l = c.extend(!0, {}, u.GetData(e[0]), n);
                      for (a in (l = u._convertData(l))) {
                        -1 < t.indexOf(a) ||
                          (c.isPlainObject(this.options[a])
                            ? c.extend(this.options[a], l[a])
                            : (this.options[a] = l[a]));
                      }
                      return this;
                    }),
                    (e.prototype.get = function (e) {
                      return this.options[e];
                    }),
                    (e.prototype.set = function (e, t) {
                      this.options[e] = t;
                    }),
                    e
                  );
                }
              ),
              u.define(
                "select2/core",
                ["jquery", "./options", "./utils", "./keys"],
                function (t, i, o, s) {
                  var r = function r(e, t) {
                    null != o.GetData(e[0], "select2") &&
                      o.GetData(e[0], "select2").destroy(),
                      (this.$element = e),
                      (this.id = this._generateId(e)),
                      (t = t || {}),
                      (this.options = new i(t, e)),
                      r.__super__.constructor.call(this);
                    var n = e.attr("tabindex") || 0;
                    o.StoreData(e[0], "old-tabindex", n),
                      e.attr("tabindex", "-1");
                    t = this.options.get("dataAdapter");
                    this.dataAdapter = new t(e, this.options);
                    n = this.render();
                    this._placeContainer(n);
                    t = this.options.get("selectionAdapter");
                    (this.selection = new t(e, this.options)),
                      (this.$selection = this.selection.render()),
                      this.selection.position(this.$selection, n);
                    t = this.options.get("dropdownAdapter");
                    (this.dropdown = new t(e, this.options)),
                      (this.$dropdown = this.dropdown.render()),
                      this.dropdown.position(this.$dropdown, n);
                    n = this.options.get("resultsAdapter");
                    (this.results = new n(e, this.options, this.dataAdapter)),
                      (this.$results = this.results.render()),
                      this.results.position(this.$results, this.$dropdown);
                    var s = this;
                    this._bindAdapters(),
                      this._registerDomEvents(),
                      this._registerDataEvents(),
                      this._registerSelectionEvents(),
                      this._registerDropdownEvents(),
                      this._registerResultsEvents(),
                      this._registerEvents(),
                      this.dataAdapter.current(function (e) {
                        s.trigger("selection:update", {
                          data: e,
                        });
                      }),
                      e[0].classList.add("select2-hidden-accessible"),
                      e.attr("aria-hidden", "true"),
                      this._syncAttributes(),
                      o.StoreData(e[0], "select2", this),
                      e.data("select2", this);
                  };
                  return (
                    o.Extend(r, o.Observable),
                    (r.prototype._generateId = function (e) {
                      return (
                        "select2-" +
                        (null != e.attr("id")
                          ? e.attr("id")
                          : null != e.attr("name")
                          ? e.attr("name") + "-" + o.generateChars(2)
                          : o.generateChars(4)
                        ).replace(/(:|\.|\[|\]|,)/g, "")
                      );
                    }),
                    (r.prototype._placeContainer = function (e) {
                      e.insertAfter(this.$element);
                      var t = this._resolveWidth(
                        this.$element,
                        this.options.get("width")
                      );
                      null != t && e.css("width", t);
                    }),
                    (r.prototype._resolveWidth = function (e, t) {
                      var n =
                        /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                      if ("resolve" == t) {
                        var s = this._resolveWidth(e, "style");
                        return null != s ? s : this._resolveWidth(e, "element");
                      }
                      if ("element" == t) {
                        s = e.outerWidth(!1);
                        return s <= 0 ? "auto" : s + "px";
                      }
                      if ("style" != t)
                        return "computedstyle" != t
                          ? t
                          : window.getComputedStyle(e[0]).width;
                      e = e.attr("style");
                      if ("string" != typeof e) return null;
                      for (
                        var i = e.split(";"), o = 0, r = i.length;
                        o < r;
                        o += 1
                      ) {
                        var a = i[o].replace(/\s/g, "").match(n);
                        if (null !== a && 1 <= a.length) return a[1];
                      }
                      return null;
                    }),
                    (r.prototype._bindAdapters = function () {
                      this.dataAdapter.bind(this, this.$container),
                        this.selection.bind(this, this.$container),
                        this.dropdown.bind(this, this.$container),
                        this.results.bind(this, this.$container);
                    }),
                    (r.prototype._registerDomEvents = function () {
                      var t = this;
                      this.$element.on("change.select2", function () {
                        t.dataAdapter.current(function (e) {
                          t.trigger("selection:update", {
                            data: e,
                          });
                        });
                      }),
                        this.$element.on("focus.select2", function (e) {
                          t.trigger("focus", e);
                        }),
                        (this._syncA = o.bind(this._syncAttributes, this)),
                        (this._syncS = o.bind(this._syncSubtree, this)),
                        (this._observer = new window.MutationObserver(function (
                          e
                        ) {
                          t._syncA(), t._syncS(e);
                        })),
                        this._observer.observe(this.$element[0], {
                          attributes: !0,
                          childList: !0,
                          subtree: !1,
                        });
                    }),
                    (r.prototype._registerDataEvents = function () {
                      var n = this;
                      this.dataAdapter.on("*", function (e, t) {
                        n.trigger(e, t);
                      });
                    }),
                    (r.prototype._registerSelectionEvents = function () {
                      var n = this,
                        s = ["toggle", "focus"];
                      this.selection.on("toggle", function () {
                        n.toggleDropdown();
                      }),
                        this.selection.on("focus", function (e) {
                          n.focus(e);
                        }),
                        this.selection.on("*", function (e, t) {
                          -1 === s.indexOf(e) && n.trigger(e, t);
                        });
                    }),
                    (r.prototype._registerDropdownEvents = function () {
                      var n = this;
                      this.dropdown.on("*", function (e, t) {
                        n.trigger(e, t);
                      });
                    }),
                    (r.prototype._registerResultsEvents = function () {
                      var n = this;
                      this.results.on("*", function (e, t) {
                        n.trigger(e, t);
                      });
                    }),
                    (r.prototype._registerEvents = function () {
                      var n = this;
                      this.on("open", function () {
                        n.$container[0].classList.add(
                          "select2-container--open"
                        );
                      }),
                        this.on("close", function () {
                          n.$container[0].classList.remove(
                            "select2-container--open"
                          );
                        }),
                        this.on("enable", function () {
                          n.$container[0].classList.remove(
                            "select2-container--disabled"
                          );
                        }),
                        this.on("disable", function () {
                          n.$container[0].classList.add(
                            "select2-container--disabled"
                          );
                        }),
                        this.on("blur", function () {
                          n.$container[0].classList.remove(
                            "select2-container--focus"
                          );
                        }),
                        this.on("query", function (t) {
                          n.isOpen() || n.trigger("open", {}),
                            this.dataAdapter.query(t, function (e) {
                              n.trigger("results:all", {
                                data: e,
                                query: t,
                              });
                            });
                        }),
                        this.on("query:append", function (t) {
                          this.dataAdapter.query(t, function (e) {
                            n.trigger("results:append", {
                              data: e,
                              query: t,
                            });
                          });
                        }),
                        this.on("keypress", function (e) {
                          var t = e.which;
                          n.isOpen()
                            ? t === s.ESC || (t === s.UP && e.altKey)
                              ? (n.close(e), e.preventDefault())
                              : t === s.ENTER || t === s.TAB
                              ? (n.trigger("results:select", {}),
                                e.preventDefault())
                              : t === s.SPACE && e.ctrlKey
                              ? (n.trigger("results:toggle", {}),
                                e.preventDefault())
                              : t === s.UP
                              ? (n.trigger("results:previous", {}),
                                e.preventDefault())
                              : t === s.DOWN &&
                                (n.trigger("results:next", {}),
                                e.preventDefault())
                            : (t === s.ENTER ||
                                t === s.SPACE ||
                                (t === s.DOWN && e.altKey)) &&
                              (n.open(), e.preventDefault());
                        });
                    }),
                    (r.prototype._syncAttributes = function () {
                      this.options.set(
                        "disabled",
                        this.$element.prop("disabled")
                      ),
                        this.isDisabled()
                          ? (this.isOpen() && this.close(),
                            this.trigger("disable", {}))
                          : this.trigger("enable", {});
                    }),
                    (r.prototype._isChangeMutation = function (e) {
                      var t = this;
                      if (e.addedNodes && 0 < e.addedNodes.length) {
                        for (var n = 0; n < e.addedNodes.length; n++) {
                          if (e.addedNodes[n].selected) return !0;
                        }
                      } else {
                        if (e.removedNodes && 0 < e.removedNodes.length)
                          return !0;
                        if (Array.isArray(e))
                          return e.some(function (e) {
                            return t._isChangeMutation(e);
                          });
                      }
                      return !1;
                    }),
                    (r.prototype._syncSubtree = function (e) {
                      var e = this._isChangeMutation(e),
                        t = this;
                      e &&
                        this.dataAdapter.current(function (e) {
                          t.trigger("selection:update", {
                            data: e,
                          });
                        });
                    }),
                    (r.prototype.trigger = function (e, t) {
                      var n = r.__super__.trigger,
                        s = {
                          open: "opening",
                          close: "closing",
                          select: "selecting",
                          unselect: "unselecting",
                          clear: "clearing",
                        };
                      if ((void 0 === t && (t = {}), e in s)) {
                        var i = s[e],
                          s = {
                            prevented: !1,
                            name: e,
                            args: t,
                          };
                        if ((n.call(this, i, s), s.prevented))
                          return void (t.prevented = !0);
                      }
                      n.call(this, e, t);
                    }),
                    (r.prototype.toggleDropdown = function () {
                      this.isDisabled() ||
                        (this.isOpen() ? this.close() : this.open());
                    }),
                    (r.prototype.open = function () {
                      this.isOpen() ||
                        this.isDisabled() ||
                        this.trigger("query", {});
                    }),
                    (r.prototype.close = function (e) {
                      this.isOpen() &&
                        this.trigger("close", {
                          originalEvent: e,
                        });
                    }),
                    (r.prototype.isEnabled = function () {
                      return !this.isDisabled();
                    }),
                    (r.prototype.isDisabled = function () {
                      return this.options.get("disabled");
                    }),
                    (r.prototype.isOpen = function () {
                      return this.$container[0].classList.contains(
                        "select2-container--open"
                      );
                    }),
                    (r.prototype.hasFocus = function () {
                      return this.$container[0].classList.contains(
                        "select2-container--focus"
                      );
                    }),
                    (r.prototype.focus = function (e) {
                      this.hasFocus() ||
                        (this.$container[0].classList.add(
                          "select2-container--focus"
                        ),
                        this.trigger("focus", {}));
                    }),
                    (r.prototype.enable = function (e) {
                      this.options.get("debug") &&
                        window.console &&
                        console.warn &&
                        console.warn(
                          'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                        ),
                        (null != e && 0 !== e.length) || (e = [!0]);
                      e = !e[0];
                      this.$element.prop("disabled", e);
                    }),
                    (r.prototype.data = function () {
                      this.options.get("debug") &&
                        0 < arguments.length &&
                        window.console &&
                        console.warn &&
                        console.warn(
                          'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                        );
                      var t = [];
                      return (
                        this.dataAdapter.current(function (e) {
                          t = e;
                        }),
                        t
                      );
                    }),
                    (r.prototype.val = function (e) {
                      if (
                        (this.options.get("debug") &&
                          window.console &&
                          console.warn &&
                          console.warn(
                            'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                          ),
                        null == e || 0 === e.length)
                      )
                        return this.$element.val();
                      e = e[0];
                      Array.isArray(e) &&
                        (e = e.map(function (e) {
                          return e.toString();
                        })),
                        this.$element.val(e).trigger("input").trigger("change");
                    }),
                    (r.prototype.destroy = function () {
                      o.RemoveData(this.$container[0]),
                        this.$container.remove(),
                        this._observer.disconnect(),
                        (this._observer = null),
                        (this._syncA = null),
                        (this._syncS = null),
                        this.$element.off(".select2"),
                        this.$element.attr(
                          "tabindex",
                          o.GetData(this.$element[0], "old-tabindex")
                        ),
                        this.$element[0].classList.remove(
                          "select2-hidden-accessible"
                        ),
                        this.$element.attr("aria-hidden", "false"),
                        o.RemoveData(this.$element[0]),
                        this.$element.removeData("select2"),
                        this.dataAdapter.destroy(),
                        this.selection.destroy(),
                        this.dropdown.destroy(),
                        this.results.destroy(),
                        (this.dataAdapter = null),
                        (this.selection = null),
                        (this.dropdown = null),
                        (this.results = null);
                    }),
                    (r.prototype.render = function () {
                      var e = t(
                        '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                      );
                      return (
                        e.attr("dir", this.options.get("dir")),
                        (this.$container = e),
                        this.$container[0].classList.add(
                          "select2-container--" + this.options.get("theme")
                        ),
                        o.StoreData(e[0], "element", this.$element),
                        e
                      );
                    }),
                    r
                  );
                }
              ),
              u.define("select2/dropdown/attachContainer", [], function () {
                function e(e, t, n) {
                  e.call(this, t, n);
                }
                return (
                  (e.prototype.position = function (e, t, n) {
                    n.find(".dropdown-wrapper").append(t),
                      t[0].classList.add("select2-dropdown--below"),
                      n[0].classList.add("select2-container--below");
                  }),
                  e
                );
              }),
              u.define("select2/dropdown/stopPropagation", [], function () {
                function e() {}
                return (
                  (e.prototype.bind = function (e, t, n) {
                    e.call(this, t, n);
                    this.$dropdown.on(
                      [
                        "blur",
                        "change",
                        "click",
                        "dblclick",
                        "focus",
                        "focusin",
                        "focusout",
                        "input",
                        "keydown",
                        "keyup",
                        "keypress",
                        "mousedown",
                        "mouseenter",
                        "mouseleave",
                        "mousemove",
                        "mouseover",
                        "mouseup",
                        "search",
                        "touchend",
                        "touchstart",
                      ].join(" "),
                      function (e) {
                        e.stopPropagation();
                      }
                    );
                  }),
                  e
                );
              }),
              u.define("select2/selection/stopPropagation", [], function () {
                function e() {}
                return (
                  (e.prototype.bind = function (e, t, n) {
                    e.call(this, t, n);
                    this.$selection.on(
                      [
                        "blur",
                        "change",
                        "click",
                        "dblclick",
                        "focus",
                        "focusin",
                        "focusout",
                        "input",
                        "keydown",
                        "keyup",
                        "keypress",
                        "mousedown",
                        "mouseenter",
                        "mouseleave",
                        "mousemove",
                        "mouseover",
                        "mouseup",
                        "search",
                        "touchend",
                        "touchstart",
                      ].join(" "),
                      function (e) {
                        e.stopPropagation();
                      }
                    );
                  }),
                  e
                );
              }),
              (a = function a(u) {
                var d,
                  p,
                  e = [
                    "wheel",
                    "mousewheel",
                    "DOMMouseScroll",
                    "MozMousePixelScroll",
                  ],
                  t =
                    "onwheel" in document || 9 <= document.documentMode
                      ? ["wheel"]
                      : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                  h = Array.prototype.slice;
                if (u.event.fixHooks)
                  for (var n = e.length; n; ) {
                    u.event.fixHooks[e[--n]] = u.event.mouseHooks;
                  }
                var f = (u.event.special.mousewheel = {
                  version: "3.1.12",
                  setup: function setup() {
                    if (this.addEventListener)
                      for (var e = t.length; e; ) {
                        this.addEventListener(t[--e], s, !1);
                      }
                    else this.onmousewheel = s;
                    u.data(
                      this,
                      "mousewheel-line-height",
                      f.getLineHeight(this)
                    ),
                      u.data(
                        this,
                        "mousewheel-page-height",
                        f.getPageHeight(this)
                      );
                  },
                  teardown: function teardown() {
                    if (this.removeEventListener)
                      for (var e = t.length; e; ) {
                        this.removeEventListener(t[--e], s, !1);
                      }
                    else this.onmousewheel = null;
                    u.removeData(this, "mousewheel-line-height"),
                      u.removeData(this, "mousewheel-page-height");
                  },
                  getLineHeight: function getLineHeight(e) {
                    var t = u(e),
                      e =
                        t["offsetParent" in u.fn ? "offsetParent" : "parent"]();
                    return (
                      e.length || (e = u("body")),
                      parseInt(e.css("fontSize"), 10) ||
                        parseInt(t.css("fontSize"), 10) ||
                        16
                    );
                  },
                  getPageHeight: function getPageHeight(e) {
                    return u(e).height();
                  },
                  settings: {
                    adjustOldDeltas: !0,
                    normalizeOffset: !0,
                  },
                });
                function s(e) {
                  var t,
                    n = e || window.event,
                    s = h.call(arguments, 1),
                    i = 0,
                    o = 0,
                    r = 0,
                    a = 0,
                    l = 0,
                    c = 0;
                  if (
                    ((e = u.event.fix(n)),
                    (e.type = "mousewheel"),
                    "detail" in n && (r = -1 * n.detail),
                    "wheelDelta" in n && (r = n.wheelDelta),
                    "wheelDeltaY" in n && (r = n.wheelDeltaY),
                    "wheelDeltaX" in n && (o = -1 * n.wheelDeltaX),
                    "axis" in n &&
                      n.axis === n.HORIZONTAL_AXIS &&
                      ((o = -1 * r), (r = 0)),
                    (i = 0 === r ? o : r),
                    "deltaY" in n && (i = r = -1 * n.deltaY),
                    "deltaX" in n && ((o = n.deltaX), 0 === r && (i = -1 * o)),
                    0 !== r || 0 !== o)
                  )
                    return (
                      1 === n.deltaMode
                        ? ((i *= t = u.data(this, "mousewheel-line-height")),
                          (r *= t),
                          (o *= t))
                        : 2 === n.deltaMode &&
                          ((i *= t = u.data(this, "mousewheel-page-height")),
                          (r *= t),
                          (o *= t)),
                      (a = Math.max(Math.abs(r), Math.abs(o))),
                      (!p || a < p) && m(n, (p = a)) && (p /= 40),
                      m(n, a) && ((i /= 40), (o /= 40), (r /= 40)),
                      (i = Math[1 <= i ? "floor" : "ceil"](i / p)),
                      (o = Math[1 <= o ? "floor" : "ceil"](o / p)),
                      (r = Math[1 <= r ? "floor" : "ceil"](r / p)),
                      f.settings.normalizeOffset &&
                        this.getBoundingClientRect &&
                        ((a = this.getBoundingClientRect()),
                        (l = e.clientX - a.left),
                        (c = e.clientY - a.top)),
                      (e.deltaX = o),
                      (e.deltaY = r),
                      (e.deltaFactor = p),
                      (e.offsetX = l),
                      (e.offsetY = c),
                      (e.deltaMode = 0),
                      s.unshift(e, i, o, r),
                      d && clearTimeout(d),
                      (d = setTimeout(g, 200)),
                      (u.event.dispatch || u.event.handle).apply(this, s)
                    );
                }
                function g() {
                  p = null;
                }
                function m(e, t) {
                  return (
                    f.settings.adjustOldDeltas &&
                    "mousewheel" === e.type &&
                    t % 120 == 0
                  );
                }
                u.fn.extend({
                  mousewheel: function mousewheel(e) {
                    return e
                      ? this.bind("mousewheel", e)
                      : this.trigger("mousewheel");
                  },
                  unmousewheel: function unmousewheel(e) {
                    return this.unbind("mousewheel", e);
                  },
                });
              }),
              "function" == typeof u.define && u.define.amd
                ? u.define("jquery-mousewheel", ["jquery"], a)
                : "object" == (false ? 0 : _typeof(exports))
                ? (module.exports = a)
                : a(t),
              u.define(
                "jquery.select2",
                [
                  "jquery",
                  "jquery-mousewheel",
                  "./select2/core",
                  "./select2/defaults",
                  "./select2/utils",
                ],
                function (i, e, o, t, r) {
                  var a;
                  return (
                    null == i.fn.select2 &&
                      ((a = ["open", "close", "destroy"]),
                      (i.fn.select2 = function (t) {
                        if ("object" == _typeof((t = t || {})))
                          return (
                            this.each(function () {
                              var e = i.extend(!0, {}, t);
                              new o(i(this), e);
                            }),
                            this
                          );
                        if ("string" != typeof t)
                          throw new Error(
                            "Invalid arguments for Select2: " + t
                          );
                        var n,
                          s = Array.prototype.slice.call(arguments, 1);
                        return (
                          this.each(function () {
                            var e = r.GetData(this, "select2");
                            null == e &&
                              window.console &&
                              console.error &&
                              console.error(
                                "The select2('" +
                                  t +
                                  "') method was called on an element that is not using Select2."
                              ),
                              (n = e[t].apply(e, s));
                          }),
                          -1 < a.indexOf(t) ? this : n
                        );
                      })),
                    null == i.fn.select2.defaults &&
                      (i.fn.select2.defaults = t),
                    o
                  );
                }
              ),
              {
                define: u.define,
                require: u.require,
              });
          function b(e, t) {
            return s.call(e, t);
          }
          function l(e, t) {
            var n,
              s,
              i,
              o,
              r,
              a,
              l,
              c,
              u,
              d,
              p = t && t.split("/"),
              h = v.map,
              f = (h && h["*"]) || {};
            if (e) {
              for (
                t = (e = e.split("/")).length - 1,
                  v.nodeIdCompat &&
                    _.test(e[t]) &&
                    (e[t] = e[t].replace(_, "")),
                  "." === e[0].charAt(0) &&
                    p &&
                    (e = p.slice(0, p.length - 1).concat(e)),
                  c = 0;
                c < e.length;
                c++
              ) {
                "." === (d = e[c])
                  ? (e.splice(c, 1), --c)
                  : ".." === d &&
                    (0 === c ||
                      (1 === c && ".." === e[2]) ||
                      ".." === e[c - 1] ||
                      (0 < c && (e.splice(c - 1, 2), (c -= 2))));
              }
              e = e.join("/");
            }
            if ((p || f) && h) {
              for (c = (n = e.split("/")).length; 0 < c; --c) {
                if (((s = n.slice(0, c).join("/")), p))
                  for (u = p.length; 0 < u; --u) {
                    if (((i = h[p.slice(0, u).join("/")]), (i = i && i[s]))) {
                      (o = i), (r = c);
                      break;
                    }
                  }
                if (o) break;
                !a && f && f[s] && ((a = f[s]), (l = c));
              }
              !o && a && ((o = a), (r = l)),
                o && (n.splice(0, r, o), (e = n.join("/")));
            }
            return e;
          }
          function w(t, n) {
            return function () {
              var e = i.call(arguments, 0);
              return (
                "string" != typeof e[0] && 1 === e.length && e.push(null),
                _r.apply(p, e.concat([t, n]))
              );
            };
          }
          function x(e) {
            var t;
            if (
              (b(m, e) && ((t = m[e]), delete m[e], (y[e] = !0), o.apply(p, t)),
              !b(g, e) && !b(y, e))
            )
              throw new Error("No " + e);
            return g[e];
          }
          function c(e) {
            var t,
              n = e ? e.indexOf("!") : -1;
            return (
              -1 < n &&
                ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))),
              [t, e]
            );
          }
          function A(e) {
            return e ? c(e) : [];
          }
          var u = a.require("jquery.select2");
          return (t.fn.select2.amd = a), u;
        });

        /***/
      },

    /***/ "./public/_web/js/sweetalert2.js":
      /*!***************************************!*\
  !*** ./public/_web/js/sweetalert2.js ***!
  \***************************************/
      /***/ function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        !(function (t, e) {
          "object" == (false ? 0 : _typeof(exports)) && "undefined" != "object"
            ? (module.exports = e())
            : true
            ? !((__WEBPACK_AMD_DEFINE_FACTORY__ = e),
              (__WEBPACK_AMD_DEFINE_RESULT__ =
                typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function"
                  ? __WEBPACK_AMD_DEFINE_FACTORY__.call(
                      exports,
                      __webpack_require__,
                      exports,
                      module
                    )
                  : __WEBPACK_AMD_DEFINE_FACTORY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
            : 0;
        })(this, function () {
          "use strict";

          function r(t) {
            return (r =
              "function" == typeof Symbol &&
              "symbol" == _typeof(Symbol.iterator)
                ? function (t) {
                    return _typeof(t);
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : _typeof(t);
                  })(t);
          }
          function a(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function c(t, e, n) {
            return e && o(t.prototype, e), n && o(t, n), t;
          }
          function s() {
            return (s =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var o in n) {
                    Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                  }
                }
                return t;
              }).apply(this, arguments);
          }
          function u(t) {
            return (u = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          function l(t, e) {
            return (l =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              })(t, e);
          }
          function d() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          function i(t, e, n) {
            return (i = d()
              ? Reflect.construct
              : function (t, e, n) {
                  var o = [null];
                  o.push.apply(o, e);
                  var i = new (Function.bind.apply(t, o))();
                  return n && l(i, n.prototype), i;
                }).apply(null, arguments);
          }
          function p(t, e) {
            return !e || ("object" != _typeof(e) && "function" != typeof e)
              ? (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(t)
              : e;
          }
          function f(t, e, n) {
            return (f =
              "undefined" != typeof Reflect && Reflect.get
                ? Reflect.get
                : function (t, e, n) {
                    var o = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = u(t));

                      ) {}
                      return t;
                    })(t, e);
                    if (o) {
                      var i = Object.getOwnPropertyDescriptor(o, e);
                      return i.get ? i.get.call(n) : i.value;
                    }
                  })(t, e, n || t);
          }
          function m(e) {
            return Object.keys(e).map(function (t) {
              return e[t];
            });
          }
          function h(t) {
            return Array.prototype.slice.call(t);
          }
          function g(t, e) {
            var n;
            (n = '"'
              .concat(
                t,
                '" is deprecated and will be removed in the next major release. Please use "'
              )
              .concat(e, '" instead.')),
              -1 === z.indexOf(n) && (z.push(n), _(n));
          }
          function v(t) {
            return t && "function" == typeof t.toPromise;
          }
          function b(t) {
            return v(t) ? t.toPromise() : Promise.resolve(t);
          }
          function y(t) {
            return t && Promise.resolve(t) === t;
          }
          function w(t) {
            return (
              t instanceof Element || ("object" === r((e = t)) && e.jquery)
            );
            var e;
          }
          function t(t) {
            var e = {};
            for (var n in t) {
              e[t[n]] = "swal2-" + t[n];
            }
            return e;
          }
          function C(t) {
            var e = Q();
            return e ? e.querySelector(t) : null;
          }
          function e(t) {
            return C(".".concat(t));
          }
          function n() {
            var t = $();
            return h(t.querySelectorAll(".".concat(Y.icon)));
          }
          function k() {
            var t = n().filter(function (t) {
              return vt(t);
            });
            return t.length ? t[0] : null;
          }
          function x() {
            return e(Y.title);
          }
          function P() {
            return e(Y.content);
          }
          function A() {
            return e(Y.image);
          }
          function B() {
            return e(Y["progress-steps"]);
          }
          function S() {
            return e(Y["validation-message"]);
          }
          function E() {
            return C(".".concat(Y.actions, " .").concat(Y.confirm));
          }
          function O() {
            return C(".".concat(Y.actions, " .").concat(Y.cancel));
          }
          function T() {
            return e(Y.actions);
          }
          function L() {
            return e(Y.header);
          }
          function j() {
            return e(Y.footer);
          }
          function q() {
            return e(Y["timer-progress-bar"]);
          }
          function I() {
            return e(Y.close);
          }
          function V() {
            var t = h(
                $().querySelectorAll(
                  '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
                )
              ).sort(function (t, e) {
                return (
                  (t = parseInt(t.getAttribute("tabindex"))),
                  (e = parseInt(e.getAttribute("tabindex"))) < t
                    ? 1
                    : t < e
                    ? -1
                    : 0
                );
              }),
              e = h(
                $().querySelectorAll(
                  '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
                )
              ).filter(function (t) {
                return "-1" !== t.getAttribute("tabindex");
              });
            return (function (t) {
              for (var e = [], n = 0; n < t.length; n++) {
                -1 === e.indexOf(t[n]) && e.push(t[n]);
              }
              return e;
            })(t.concat(e)).filter(function (t) {
              return vt(t);
            });
          }
          function M() {
            return !J() && !document.body.classList.contains(Y["no-backdrop"]);
          }
          function R() {
            return $().hasAttribute("data-loading");
          }
          function H(e, t) {
            var n;
            (e.textContent = ""),
              t &&
                ((n = new DOMParser().parseFromString(t, "text/html")),
                h(n.querySelector("head").childNodes).forEach(function (t) {
                  e.appendChild(t);
                }),
                h(n.querySelector("body").childNodes).forEach(function (t) {
                  e.appendChild(t);
                }));
          }
          function D(t, e) {
            if (e) {
              for (var n = e.split(/\s+/), o = 0; o < n.length; o++) {
                if (!t.classList.contains(n[o])) return;
              }
              return 1;
            }
          }
          function N(t, e, n) {
            var o, i;
            if (
              ((i = e),
              h((o = t).classList).forEach(function (t) {
                -1 === m(Y).indexOf(t) &&
                  -1 === m(Z).indexOf(t) &&
                  -1 === m(i.showClass).indexOf(t) &&
                  o.classList.remove(t);
              }),
              e.customClass && e.customClass[n])
            ) {
              if (
                "string" != typeof e.customClass[n] &&
                !e.customClass[n].forEach
              )
                return _(
                  "Invalid type of customClass."
                    .concat(n, '! Expected string or iterable object, got "')
                    .concat(r(e.customClass[n]), '"')
                );
              mt(t, e.customClass[n]);
            }
          }
          var U = "SweetAlert2:",
            _ = function _(t) {
              console.warn("".concat(U, " ").concat(t));
            },
            F = function F(t) {
              console.error("".concat(U, " ").concat(t));
            },
            z = [],
            W = function W(t) {
              return "function" == typeof t ? t() : t;
            },
            K = Object.freeze({
              cancel: "cancel",
              backdrop: "backdrop",
              close: "close",
              esc: "esc",
              timer: "timer",
            }),
            Y = t([
              "container",
              "shown",
              "height-auto",
              "iosfix",
              "popup",
              "modal",
              "no-backdrop",
              "no-transition",
              "toast",
              "toast-shown",
              "toast-column",
              "show",
              "hide",
              "close",
              "title",
              "header",
              "content",
              "html-container",
              "actions",
              "confirm",
              "cancel",
              "footer",
              "icon",
              "icon-content",
              "image",
              "input",
              "file",
              "range",
              "select",
              "radio",
              "checkbox",
              "label",
              "textarea",
              "inputerror",
              "validation-message",
              "progress-steps",
              "active-progress-step",
              "progress-step",
              "progress-step-line",
              "loading",
              "styled",
              "top",
              "top-start",
              "top-end",
              "top-left",
              "top-right",
              "center",
              "center-start",
              "center-end",
              "center-left",
              "center-right",
              "bottom",
              "bottom-start",
              "bottom-end",
              "bottom-left",
              "bottom-right",
              "grow-row",
              "grow-column",
              "grow-fullscreen",
              "rtl",
              "timer-progress-bar",
              "timer-progress-bar-container",
              "scrollbar-measure",
              "icon-success",
              "icon-warning",
              "icon-info",
              "icon-question",
              "icon-error",
            ]),
            Z = t(["success", "warning", "info", "question", "error"]),
            Q = function Q() {
              return document.body.querySelector(".".concat(Y.container));
            },
            $ = function $() {
              return e(Y.popup);
            },
            J = function J() {
              return document.body.classList.contains(Y["toast-shown"]);
            },
            X = {
              previousBodyPadding: null,
            };
          function G(t, e) {
            if (!e) return null;
            switch (e) {
              case "select":
              case "textarea":
              case "file":
                return gt(t, Y[e]);
              case "checkbox":
                return t.querySelector(".".concat(Y.checkbox, " input"));
              case "radio":
                return (
                  t.querySelector(".".concat(Y.radio, " input:checked")) ||
                  t.querySelector(".".concat(Y.radio, " input:first-child"))
                );
              case "range":
                return t.querySelector(".".concat(Y.range, " input"));
              default:
                return gt(t, Y.input);
            }
          }
          function tt(t) {
            var e;
            t.focus(),
              "file" !== t.type &&
                ((e = t.value), (t.value = ""), (t.value = e));
          }
          function et(t, e, n) {
            t &&
              e &&
              ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)),
              e.forEach(function (e) {
                t.forEach
                  ? t.forEach(function (t) {
                      n ? t.classList.add(e) : t.classList.remove(e);
                    })
                  : n
                  ? t.classList.add(e)
                  : t.classList.remove(e);
              }));
          }
          function nt(t, e, n) {
            n || 0 === parseInt(n)
              ? (t.style[e] = "number" == typeof n ? "".concat(n, "px") : n)
              : t.style.removeProperty(e);
          }
          function ot(t, e) {
            var n = 1 < arguments.length && void 0 !== e ? e : "flex";
            (t.style.opacity = ""), (t.style.display = n);
          }
          function it(t) {
            (t.style.opacity = ""), (t.style.display = "none");
          }
          function rt(t, e, n) {
            e ? ot(t, n) : it(t);
          }
          function at(t) {
            return !!(t.scrollHeight > t.clientHeight);
          }
          function ct(t) {
            var e = window.getComputedStyle(t),
              n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
              o = parseFloat(e.getPropertyValue("transition-duration") || "0");
            return 0 < n || 0 < o;
          }
          function st(t, e) {
            var n = 1 < arguments.length && void 0 !== e && e,
              o = q();
            vt(o) &&
              (n && ((o.style.transition = "none"), (o.style.width = "100%")),
              setTimeout(function () {
                (o.style.transition = "width ".concat(t / 1e3, "s linear")),
                  (o.style.width = "0%");
              }, 10));
          }
          function ut() {
            return (
              "undefined" == typeof window || "undefined" == typeof document
            );
          }
          function lt(t) {
            sn.isVisible() &&
              ft !== t.target.value &&
              sn.resetValidationMessage(),
              (ft = t.target.value);
          }
          function dt(t, e) {
            t instanceof HTMLElement
              ? e.appendChild(t)
              : "object" === r(t)
              ? wt(t, e)
              : t && H(e, t);
          }
          function pt(t, e) {
            var n = T(),
              o = E(),
              i = O();
            e.showConfirmButton || e.showCancelButton || it(n),
              N(n, e, "actions"),
              xt(o, "confirm", e),
              xt(i, "cancel", e),
              e.buttonsStyling
                ? (function (t, e, n) {
                    mt([t, e], Y.styled),
                      n.confirmButtonColor &&
                        (t.style.backgroundColor = n.confirmButtonColor);
                    n.cancelButtonColor &&
                      (e.style.backgroundColor = n.cancelButtonColor);
                    {
                      var o;
                      R() ||
                        ((o = window
                          .getComputedStyle(t)
                          .getPropertyValue("background-color")),
                        (t.style.borderLeftColor = o),
                        (t.style.borderRightColor = o));
                    }
                  })(o, i, e)
                : (ht([o, i], Y.styled),
                  (o.style.backgroundColor =
                    o.style.borderLeftColor =
                    o.style.borderRightColor =
                      ""),
                  (i.style.backgroundColor =
                    i.style.borderLeftColor =
                    i.style.borderRightColor =
                      "")),
              e.reverseButtons && o.parentNode.insertBefore(i, o);
          }
          var ft,
            mt = function mt(t, e) {
              et(t, e, !0);
            },
            ht = function ht(t, e) {
              et(t, e, !1);
            },
            gt = function gt(t, e) {
              for (var n = 0; n < t.childNodes.length; n++) {
                if (D(t.childNodes[n], e)) return t.childNodes[n];
              }
            },
            vt = function vt(t) {
              return !(
                !t ||
                !(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
              );
            },
            bt = '\n <div aria-labelledby="'
              .concat(Y.title, '" aria-describedby="')
              .concat(Y.content, '" class="')
              .concat(Y.popup, '" tabindex="-1">\n   <div class="')
              .concat(Y.header, '">\n     <ul class="')
              .concat(Y["progress-steps"], '"></ul>\n     <div class="')
              .concat(Y.icon, " ")
              .concat(Z.error, '"></div>\n     <div class="')
              .concat(Y.icon, " ")
              .concat(Z.question, '"></div>\n     <div class="')
              .concat(Y.icon, " ")
              .concat(Z.warning, '"></div>\n     <div class="')
              .concat(Y.icon, " ")
              .concat(Z.info, '"></div>\n     <div class="')
              .concat(Y.icon, " ")
              .concat(Z.success, '"></div>\n     <img class="')
              .concat(Y.image, '" />\n     <h2 class="')
              .concat(Y.title, '" id="')
              .concat(Y.title, '"></h2>\n     <button type="button" class="')
              .concat(Y.close, '"></button>\n   </div>\n   <div class="')
              .concat(Y.content, '">\n     <div id="')
              .concat(Y.content, '" class="')
              .concat(Y["html-container"], '"></div>\n     <input class="')
              .concat(Y.input, '" />\n     <input type="file" class="')
              .concat(Y.file, '" />\n     <div class="')
              .concat(
                Y.range,
                '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="'
              )
              .concat(Y.select, '"></select>\n     <div class="')
              .concat(Y.radio, '"></div>\n     <label for="')
              .concat(Y.checkbox, '" class="')
              .concat(
                Y.checkbox,
                '">\n       <input type="checkbox" />\n       <span class="'
              )
              .concat(
                Y.label,
                '"></span>\n     </label>\n     <textarea class="'
              )
              .concat(Y.textarea, '"></textarea>\n     <div class="')
              .concat(Y["validation-message"], '" id="')
              .concat(
                Y["validation-message"],
                '"></div>\n   </div>\n   <div class="'
              )
              .concat(Y.actions, '">\n     <button type="button" class="')
              .concat(
                Y.confirm,
                '">OK</button>\n     <button type="button" class="'
              )
              .concat(Y.cancel, '">Cancel</button>\n   </div>\n   <div class="')
              .concat(Y.footer, '"></div>\n   <div class="')
              .concat(
                Y["timer-progress-bar-container"],
                '">\n     <div class="'
              )
              .concat(Y["timer-progress-bar"], '"></div>\n   </div>\n </div>\n')
              .replace(/(^|\n)\s*/g, ""),
            yt = function yt(t) {
              var e,
                n,
                o,
                i,
                r,
                a,
                c,
                s,
                u,
                l,
                d,
                p,
                f,
                m,
                h,
                g =
                  !!(e = Q()) &&
                  (e.parentNode.removeChild(e),
                  ht(
                    [document.documentElement, document.body],
                    [Y["no-backdrop"], Y["toast-shown"], Y["has-column"]]
                  ),
                  !0);
              ut()
                ? F("SweetAlert2 requires document to initialize")
                : (((n = document.createElement("div")).className =
                    Y.container),
                  g && mt(n, Y["no-transition"]),
                  H(n, bt),
                  (o =
                    "string" == typeof (i = t.target)
                      ? document.querySelector(i)
                      : i).appendChild(n),
                  (r = t),
                  (a = $()).setAttribute("role", r.toast ? "alert" : "dialog"),
                  a.setAttribute("aria-live", r.toast ? "polite" : "assertive"),
                  r.toast || a.setAttribute("aria-modal", "true"),
                  (c = o),
                  "rtl" === window.getComputedStyle(c).direction &&
                    mt(Q(), Y.rtl),
                  (s = P()),
                  (u = gt(s, Y.input)),
                  (l = gt(s, Y.file)),
                  (d = s.querySelector(".".concat(Y.range, " input"))),
                  (p = s.querySelector(".".concat(Y.range, " output"))),
                  (f = gt(s, Y.select)),
                  (m = s.querySelector(".".concat(Y.checkbox, " input"))),
                  (h = gt(s, Y.textarea)),
                  (u.oninput = lt),
                  (l.onchange = lt),
                  (f.onchange = lt),
                  (m.onchange = lt),
                  (h.oninput = lt),
                  (d.oninput = function (t) {
                    lt(t), (p.value = d.value);
                  }),
                  (d.onchange = function (t) {
                    lt(t), (d.nextSibling.value = d.value);
                  }));
            },
            wt = function wt(t, e) {
              t.jquery ? Ct(e, t) : H(e, t.toString());
            },
            Ct = function Ct(t, e) {
              if (((t.textContent = ""), 0 in e))
                for (var n = 0; n in e; n++) {
                  t.appendChild(e[n].cloneNode(!0));
                }
              else t.appendChild(e.cloneNode(!0));
            },
            kt = (function () {
              if (ut()) return !1;
              var t = document.createElement("div"),
                e = {
                  WebkitAnimation: "webkitAnimationEnd",
                  OAnimation: "oAnimationEnd oanimationend",
                  animation: "animationend",
                };
              for (var n in e) {
                if (
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  void 0 !== t.style[n]
                )
                  return e[n];
              }
              return !1;
            })();
          function xt(t, e, n) {
            var o;
            rt(
              t,
              n[
                "show".concat(
                  (o = e).charAt(0).toUpperCase() + o.slice(1),
                  "Button"
                )
              ],
              "inline-block"
            ),
              H(t, n["".concat(e, "ButtonText")]),
              t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")]),
              (t.className = Y[e]),
              N(t, n, "".concat(e, "Button")),
              mt(t, n["".concat(e, "ButtonClass")]);
          }
          function Pt(t, e) {
            var n,
              o,
              i,
              r,
              a,
              c,
              s,
              u,
              l = Q();
            l &&
              ((n = l),
              "string" == typeof (o = e.backdrop)
                ? (n.style.background = o)
                : o ||
                  mt(
                    [document.documentElement, document.body],
                    Y["no-backdrop"]
                  ),
              !e.backdrop &&
                e.allowOutsideClick &&
                _(
                  '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
                ),
              (i = l),
              (r = e.position) in Y
                ? mt(i, Y[r])
                : (_(
                    'The "position" parameter is not valid, defaulting to "center"'
                  ),
                  mt(i, Y.center)),
              (a = l),
              !(c = e.grow) ||
                "string" != typeof c ||
                ((s = "grow-".concat(c)) in Y && mt(a, Y[s])),
              N(l, e, "container"),
              (u = document.body.getAttribute("data-swal2-queue-step")) &&
                (l.setAttribute("data-queue-step", u),
                document.body.removeAttribute("data-swal2-queue-step")));
          }
          function At(t, e) {
            (t.placeholder && !e.inputPlaceholder) ||
              (t.placeholder = e.inputPlaceholder);
          }
          var Bt = {
              promise: new WeakMap(),
              innerParams: new WeakMap(),
              domCache: new WeakMap(),
            },
            St = [
              "input",
              "file",
              "range",
              "select",
              "radio",
              "checkbox",
              "textarea",
            ],
            Et = function Et(t) {
              if (!jt[t.input])
                return F(
                  'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(
                    t.input,
                    '"'
                  )
                );
              var e = Lt(t.input),
                n = jt[t.input](e, t);
              ot(n),
                setTimeout(function () {
                  tt(n);
                });
            },
            Ot = function Ot(t, e) {
              var n = G(P(), t);
              if (n)
                for (var o in (!(function (t) {
                  for (var e = 0; e < t.attributes.length; e++) {
                    var n = t.attributes[e].name;
                    -1 === ["type", "value", "style"].indexOf(n) &&
                      t.removeAttribute(n);
                  }
                })(n),
                e)) {
                  ("range" === t && "placeholder" === o) ||
                    n.setAttribute(o, e[o]);
                }
            },
            Tt = function Tt(t) {
              var e = Lt(t.input);
              t.customClass && mt(e, t.customClass.input);
            },
            Lt = function Lt(t) {
              var e = Y[t] ? Y[t] : Y.input;
              return gt(P(), e);
            },
            jt = {};
          (jt.text =
            jt.email =
            jt.password =
            jt.number =
            jt.tel =
            jt.url =
              function (t, e) {
                return (
                  "string" == typeof e.inputValue ||
                  "number" == typeof e.inputValue
                    ? (t.value = e.inputValue)
                    : y(e.inputValue) ||
                      _(
                        'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                          r(e.inputValue),
                          '"'
                        )
                      ),
                  At(t, e),
                  (t.type = e.input),
                  t
                );
              }),
            (jt.file = function (t, e) {
              return At(t, e), t;
            }),
            (jt.range = function (t, e) {
              var n = t.querySelector("input"),
                o = t.querySelector("output");
              return (
                (n.value = e.inputValue),
                (n.type = e.input),
                (o.value = e.inputValue),
                t
              );
            }),
            (jt.select = function (t, e) {
              var n;
              return (
                (t.textContent = ""),
                e.inputPlaceholder &&
                  ((n = document.createElement("option")),
                  H(n, e.inputPlaceholder),
                  (n.value = ""),
                  (n.disabled = !0),
                  (n.selected = !0),
                  t.appendChild(n)),
                t
              );
            }),
            (jt.radio = function (t) {
              return (t.textContent = ""), t;
            }),
            (jt.checkbox = function (t, e) {
              var n = G(P(), "checkbox");
              (n.value = 1),
                (n.id = Y.checkbox),
                (n.checked = Boolean(e.inputValue));
              var o = t.querySelector("span");
              return H(o, e.inputPlaceholder), t;
            }),
            (jt.textarea = function (e, t) {
              var n, o;
              return (
                (e.value = t.inputValue),
                At(e, t),
                "MutationObserver" in window &&
                  ((n = parseInt(window.getComputedStyle($()).width)),
                  (o =
                    parseInt(window.getComputedStyle($()).paddingLeft) +
                    parseInt(window.getComputedStyle($()).paddingRight)),
                  new MutationObserver(function () {
                    var t = e.offsetWidth + o;
                    $().style.width = n < t ? "".concat(t, "px") : null;
                  }).observe(e, {
                    attributes: !0,
                    attributeFilter: ["style"],
                  })),
                e
              );
            });
          function qt(t, e) {
            var n,
              o,
              i,
              r,
              a,
              c = P().querySelector("#".concat(Y.content));
            e.html
              ? (dt(e.html, c), ot(c, "block"))
              : e.text
              ? ((c.textContent = e.text), ot(c, "block"))
              : it(c),
              (n = t),
              (o = e),
              (i = P()),
              (r = Bt.innerParams.get(n)),
              (a = !r || o.input !== r.input),
              St.forEach(function (t) {
                var e = Y[t],
                  n = gt(i, e);
                Ot(t, o.inputAttributes), (n.className = e), a && it(n);
              }),
              o.input && (a && Et(o), Tt(o)),
              N(P(), e, "content");
          }
          function It() {
            return Q() && Q().getAttribute("data-queue-step");
          }
          function Vt(t, s) {
            var u = B();
            if (!s.progressSteps || 0 === s.progressSteps.length)
              return it(u), 0;
            ot(u), (u.textContent = "");
            var l = parseInt(
              void 0 === s.currentProgressStep ? It() : s.currentProgressStep
            );
            l >= s.progressSteps.length &&
              _(
                "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
              ),
              s.progressSteps.forEach(function (t, e) {
                var n,
                  o,
                  i,
                  r,
                  a,
                  c =
                    ((n = t),
                    (o = document.createElement("li")),
                    mt(o, Y["progress-step"]),
                    H(o, n),
                    o);
                u.appendChild(c),
                  e === l && mt(c, Y["active-progress-step"]),
                  e !== s.progressSteps.length - 1 &&
                    ((r = s),
                    (a = document.createElement("li")),
                    mt(a, Y["progress-step-line"]),
                    r.progressStepsDistance &&
                      (a.style.width = r.progressStepsDistance),
                    (i = a),
                    u.appendChild(i));
              });
          }
          function Mt(t, e) {
            var n,
              o,
              i,
              r,
              a,
              c,
              s,
              u,
              l = L();
            N(l, e, "header"),
              Vt(0, e),
              (n = t),
              (o = e),
              (r = Bt.innerParams.get(n)) && o.icon === r.icon && k()
                ? N(k(), o, "icon")
                : (Dt(),
                  o.icon &&
                    (-1 !== Object.keys(Z).indexOf(o.icon)
                      ? ((i = C(".".concat(Y.icon, ".").concat(Z[o.icon]))),
                        ot(i),
                        Ut(i, o),
                        Nt(),
                        N(i, o, "icon"),
                        mt(i, o.showClass.icon))
                      : F(
                          'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                            o.icon,
                            '"'
                          )
                        ))),
              (function (t) {
                var e = A();
                if (!t.imageUrl) return it(e);
                ot(e, ""),
                  e.setAttribute("src", t.imageUrl),
                  e.setAttribute("alt", t.imageAlt),
                  nt(e, "width", t.imageWidth),
                  nt(e, "height", t.imageHeight),
                  (e.className = Y.image),
                  N(e, t, "image");
              })(e),
              (a = e),
              (c = x()),
              rt(c, a.title || a.titleText),
              a.title && dt(a.title, c),
              a.titleText && (c.innerText = a.titleText),
              N(c, a, "title"),
              (s = e),
              (u = I()),
              H(u, s.closeButtonHtml),
              N(u, s, "closeButton"),
              rt(u, s.showCloseButton),
              u.setAttribute("aria-label", s.closeButtonAriaLabel);
          }
          function Rt(t, e) {
            var n, o, i, r;
            (n = e),
              (o = $()),
              nt(o, "width", n.width),
              nt(o, "padding", n.padding),
              n.background && (o.style.background = n.background),
              zt(o, n),
              Pt(0, e),
              Mt(t, e),
              qt(t, e),
              pt(0, e),
              (i = e),
              (r = j()),
              rt(r, i.footer),
              i.footer && dt(i.footer, r),
              N(r, i, "footer"),
              "function" == typeof e.onRender && e.onRender($());
          }
          function Ht() {
            return E() && E().click();
          }
          var Dt = function Dt() {
              for (var t = n(), e = 0; e < t.length; e++) {
                it(t[e]);
              }
            },
            Nt = function Nt() {
              for (
                var t = $(),
                  e = window
                    .getComputedStyle(t)
                    .getPropertyValue("background-color"),
                  n = t.querySelectorAll(
                    "[class^=swal2-success-circular-line], .swal2-success-fix"
                  ),
                  o = 0;
                o < n.length;
                o++
              ) {
                n[o].style.backgroundColor = e;
              }
            },
            Ut = function Ut(t, e) {
              (t.textContent = ""),
                e.iconHtml
                  ? H(t, _t(e.iconHtml))
                  : "success" === e.icon
                  ? H(
                      t,
                      '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '
                    )
                  : "error" === e.icon
                  ? H(
                      t,
                      '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '
                    )
                  : H(
                      t,
                      _t(
                        {
                          question: "?",
                          warning: "!",
                          info: "i",
                        }[e.icon]
                      )
                    );
            },
            _t = function _t(t) {
              return '<div class="'
                .concat(Y["icon-content"], '">')
                .concat(t, "</div>");
            },
            Ft = [],
            zt = function zt(t, e) {
              (t.className = ""
                .concat(Y.popup, " ")
                .concat(vt(t) ? e.showClass.popup : "")),
                e.toast
                  ? (mt(
                      [document.documentElement, document.body],
                      Y["toast-shown"]
                    ),
                    mt(t, Y.toast))
                  : mt(t, Y.modal),
                N(t, e, "popup"),
                "string" == typeof e.customClass && mt(t, e.customClass),
                e.icon && mt(t, Y["icon-".concat(e.icon)]);
            };
          function Wt() {
            var t = $();
            t || sn.fire(), (t = $());
            var e = T(),
              n = E();
            ot(e),
              ot(n, "inline-block"),
              mt([t, e], Y.loading),
              (n.disabled = !0),
              t.setAttribute("data-loading", !0),
              t.setAttribute("aria-busy", !0),
              t.focus();
          }
          function Kt() {
            return new Promise(function (t) {
              var e = window.scrollX,
                n = window.scrollY;
              (Xt.restoreFocusTimeout = setTimeout(function () {
                Xt.previousActiveElement && Xt.previousActiveElement.focus
                  ? (Xt.previousActiveElement.focus(),
                    (Xt.previousActiveElement = null))
                  : document.body && document.body.focus(),
                  t();
              }, 100)),
                void 0 !== e && void 0 !== n && window.scrollTo(e, n);
            });
          }
          function Yt() {
            if (Xt.timeout)
              return (
                (function () {
                  var t = q(),
                    e = parseInt(window.getComputedStyle(t).width);
                  t.style.removeProperty("transition"),
                    (t.style.width = "100%");
                  var n = parseInt(window.getComputedStyle(t).width),
                    o = parseInt((e / n) * 100);
                  t.style.removeProperty("transition"),
                    (t.style.width = "".concat(o, "%"));
                })(),
                Xt.timeout.stop()
              );
          }
          function Zt() {
            if (Xt.timeout) {
              var t = Xt.timeout.start();
              return st(t), t;
            }
          }
          function Qt(t) {
            return Object.prototype.hasOwnProperty.call(Gt, t);
          }
          function $t(t) {
            return ee[t];
          }
          function Jt(t) {
            for (var e in t) {
              Qt((i = e)) || _('Unknown parameter "'.concat(i, '"')),
                t.toast &&
                  ((o = e),
                  -1 !== ne.indexOf(o) &&
                    _(
                      'The parameter "'.concat(
                        o,
                        '" is incompatible with toasts'
                      )
                    )),
                $t((n = e)) && g(n, $t(n));
            }
            var n, o, i;
          }
          var Xt = {},
            Gt = {
              title: "",
              titleText: "",
              text: "",
              html: "",
              footer: "",
              icon: void 0,
              iconHtml: void 0,
              toast: !1,
              animation: !0,
              showClass: {
                popup: "swal2-show",
                backdrop: "swal2-backdrop-show",
                icon: "swal2-icon-show",
              },
              hideClass: {
                popup: "swal2-hide",
                backdrop: "swal2-backdrop-hide",
                icon: "swal2-icon-hide",
              },
              customClass: void 0,
              target: "body",
              backdrop: !0,
              heightAuto: !0,
              allowOutsideClick: !0,
              allowEscapeKey: !0,
              allowEnterKey: !0,
              stopKeydownPropagation: !0,
              keydownListenerCapture: !1,
              showConfirmButton: !0,
              showCancelButton: !1,
              preConfirm: void 0,
              confirmButtonText: "OK",
              confirmButtonAriaLabel: "",
              confirmButtonColor: void 0,
              cancelButtonText: "Cancel",
              cancelButtonAriaLabel: "",
              cancelButtonColor: void 0,
              buttonsStyling: !0,
              reverseButtons: !1,
              focusConfirm: !0,
              focusCancel: !1,
              showCloseButton: !1,
              closeButtonHtml: "&times;",
              closeButtonAriaLabel: "Close this dialog",
              showLoaderOnConfirm: !1,
              imageUrl: void 0,
              imageWidth: void 0,
              imageHeight: void 0,
              imageAlt: "",
              timer: void 0,
              timerProgressBar: !1,
              width: void 0,
              padding: void 0,
              background: void 0,
              input: void 0,
              inputPlaceholder: "",
              inputValue: "",
              inputOptions: {},
              inputAutoTrim: !0,
              inputAttributes: {},
              inputValidator: void 0,
              validationMessage: void 0,
              grow: !1,
              position: "center",
              progressSteps: [],
              currentProgressStep: void 0,
              progressStepsDistance: void 0,
              onBeforeOpen: void 0,
              onOpen: void 0,
              onRender: void 0,
              onClose: void 0,
              onAfterClose: void 0,
              onDestroy: void 0,
              scrollbarPadding: !0,
            },
            te = [
              "title",
              "titleText",
              "text",
              "html",
              "footer",
              "icon",
              "hideClass",
              "customClass",
              "allowOutsideClick",
              "allowEscapeKey",
              "showConfirmButton",
              "showCancelButton",
              "confirmButtonText",
              "confirmButtonAriaLabel",
              "confirmButtonColor",
              "cancelButtonText",
              "cancelButtonAriaLabel",
              "cancelButtonColor",
              "buttonsStyling",
              "reverseButtons",
              "showCloseButton",
              "closeButtonHtml",
              "closeButtonAriaLabel",
              "imageUrl",
              "imageWidth",
              "imageHeight",
              "imageAlt",
              "progressSteps",
              "currentProgressStep",
              "onClose",
              "onAfterClose",
              "onDestroy",
            ],
            ee = {
              animation: 'showClass" and "hideClass',
            },
            ne = [
              "allowOutsideClick",
              "allowEnterKey",
              "backdrop",
              "focusConfirm",
              "focusCancel",
              "heightAuto",
              "keydownListenerCapture",
            ],
            oe = Object.freeze({
              isValidParameter: Qt,
              isUpdatableParameter: function isUpdatableParameter(t) {
                return -1 !== te.indexOf(t);
              },
              isDeprecatedParameter: $t,
              argsToParams: function argsToParams(o) {
                var i = {};
                return (
                  "object" !== r(o[0]) || w(o[0])
                    ? ["title", "html", "icon"].forEach(function (t, e) {
                        var n = o[e];
                        "string" == typeof n || w(n)
                          ? (i[t] = n)
                          : void 0 !== n &&
                            F(
                              "Unexpected type of "
                                .concat(
                                  t,
                                  '! Expected "string" or "Element", got '
                                )
                                .concat(r(n))
                            );
                      })
                    : s(i, o[0]),
                  i
                );
              },
              isVisible: function isVisible() {
                return vt($());
              },
              clickConfirm: Ht,
              clickCancel: function clickCancel() {
                return O() && O().click();
              },
              getContainer: Q,
              getPopup: $,
              getTitle: x,
              getContent: P,
              getHtmlContainer: function getHtmlContainer() {
                return e(Y["html-container"]);
              },
              getImage: A,
              getIcon: k,
              getIcons: n,
              getCloseButton: I,
              getActions: T,
              getConfirmButton: E,
              getCancelButton: O,
              getHeader: L,
              getFooter: j,
              getTimerProgressBar: q,
              getFocusableElements: V,
              getValidationMessage: S,
              isLoading: R,
              fire: function fire() {
                for (
                  var t = arguments.length, e = new Array(t), n = 0;
                  n < t;
                  n++
                ) {
                  e[n] = arguments[n];
                }
                return i(this, e);
              },
              mixin: function mixin(r) {
                return (function (t) {
                  !(function (t, e) {
                    if ("function" != typeof e && null !== e)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (t.prototype = Object.create(e && e.prototype, {
                      constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      e && l(t, e);
                  })(i, t);
                  var n,
                    o,
                    e =
                      ((n = i),
                      (o = d()),
                      function () {
                        var t,
                          e = u(n);
                        return p(
                          this,
                          o
                            ? ((t = u(this).constructor),
                              Reflect.construct(e, arguments, t))
                            : e.apply(this, arguments)
                        );
                      });
                  function i() {
                    return a(this, i), e.apply(this, arguments);
                  }
                  return (
                    c(i, [
                      {
                        key: "_main",
                        value: function value(t) {
                          return f(u(i.prototype), "_main", this).call(
                            this,
                            s({}, r, t)
                          );
                        },
                      },
                    ]),
                    i
                  );
                })(this);
              },
              queue: function queue(t) {
                var r = this;
                Ft = t;
                function a(t, e) {
                  (Ft = []), t(e);
                }
                var c = [];
                return new Promise(function (i) {
                  !(function e(n, o) {
                    n < Ft.length
                      ? (document.body.setAttribute("data-swal2-queue-step", n),
                        r.fire(Ft[n]).then(function (t) {
                          void 0 !== t.value
                            ? (c.push(t.value), e(n + 1, o))
                            : a(i, {
                                dismiss: t.dismiss,
                              });
                        }))
                      : a(i, {
                          value: c,
                        });
                  })(0);
                });
              },
              getQueueStep: It,
              insertQueueStep: function insertQueueStep(t, e) {
                return e && e < Ft.length ? Ft.splice(e, 0, t) : Ft.push(t);
              },
              deleteQueueStep: function deleteQueueStep(t) {
                void 0 !== Ft[t] && Ft.splice(t, 1);
              },
              showLoading: Wt,
              enableLoading: Wt,
              getTimerLeft: function getTimerLeft() {
                return Xt.timeout && Xt.timeout.getTimerLeft();
              },
              stopTimer: Yt,
              resumeTimer: Zt,
              toggleTimer: function toggleTimer() {
                var t = Xt.timeout;
                return t && (t.running ? Yt : Zt)();
              },
              increaseTimer: function increaseTimer(t) {
                if (Xt.timeout) {
                  var e = Xt.timeout.increase(t);
                  return st(e, !0), e;
                }
              },
              isTimerRunning: function isTimerRunning() {
                return Xt.timeout && Xt.timeout.isRunning();
              },
            });
          function ie() {
            var t,
              e = Bt.innerParams.get(this);
            e &&
              ((t = Bt.domCache.get(this)),
              e.showConfirmButton ||
                (it(t.confirmButton), e.showCancelButton || it(t.actions)),
              ht([t.popup, t.actions], Y.loading),
              t.popup.removeAttribute("aria-busy"),
              t.popup.removeAttribute("data-loading"),
              (t.confirmButton.disabled = !1),
              (t.cancelButton.disabled = !1));
          }
          function re() {
            null === X.previousBodyPadding &&
              document.body.scrollHeight > window.innerHeight &&
              ((X.previousBodyPadding = parseInt(
                window
                  .getComputedStyle(document.body)
                  .getPropertyValue("padding-right")
              )),
              (document.body.style.paddingRight = "".concat(
                X.previousBodyPadding +
                  (function () {
                    var t = document.createElement("div");
                    (t.className = Y["scrollbar-measure"]),
                      document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e;
                  })(),
                "px"
              )));
          }
          function ae() {
            return !!window.MSInputMethodContext && !!document.documentMode;
          }
          function ce() {
            var t = Q(),
              e = $();
            t.style.removeProperty("align-items"),
              e.offsetTop < 0 && (t.style.alignItems = "flex-start");
          }
          var se = function se() {
              navigator.userAgent.match(
                /(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i
              ) ||
                ($().scrollHeight > window.innerHeight - 44 &&
                  (Q().style.paddingBottom = "".concat(44, "px")));
            },
            ue = function ue() {
              var e,
                t = Q();
              (t.ontouchstart = function (t) {
                e = le(t.target);
              }),
                (t.ontouchmove = function (t) {
                  e && (t.preventDefault(), t.stopPropagation());
                });
            },
            le = function le(t) {
              var e = Q();
              return (
                t === e ||
                !(
                  at(e) ||
                  "INPUT" === t.tagName ||
                  (at(P()) && P().contains(t))
                )
              );
            },
            de = {
              swalPromiseResolve: new WeakMap(),
            };
          function pe(t, e, n, o) {
            var i;
            n
              ? he(t, o)
              : (Kt().then(function () {
                  return he(t, o);
                }),
                Xt.keydownTarget.removeEventListener(
                  "keydown",
                  Xt.keydownHandler,
                  {
                    capture: Xt.keydownListenerCapture,
                  }
                ),
                (Xt.keydownHandlerAdded = !1)),
              e.parentNode &&
                !document.body.getAttribute("data-swal2-queue-step") &&
                e.parentNode.removeChild(e),
              M() &&
                (null !== X.previousBodyPadding &&
                  ((document.body.style.paddingRight = "".concat(
                    X.previousBodyPadding,
                    "px"
                  )),
                  (X.previousBodyPadding = null)),
                D(document.body, Y.iosfix) &&
                  ((i = parseInt(document.body.style.top, 10)),
                  ht(document.body, Y.iosfix),
                  (document.body.style.top = ""),
                  (document.body.scrollTop = -1 * i)),
                "undefined" != typeof window &&
                  ae() &&
                  window.removeEventListener("resize", ce),
                h(document.body.children).forEach(function (t) {
                  t.hasAttribute("data-previous-aria-hidden")
                    ? (t.setAttribute(
                        "aria-hidden",
                        t.getAttribute("data-previous-aria-hidden")
                      ),
                      t.removeAttribute("data-previous-aria-hidden"))
                    : t.removeAttribute("aria-hidden");
                })),
              ht(
                [document.documentElement, document.body],
                [
                  Y.shown,
                  Y["height-auto"],
                  Y["no-backdrop"],
                  Y["toast-shown"],
                  Y["toast-column"],
                ]
              );
          }
          function fe(t) {
            var e,
              n,
              o,
              i = $();
            i &&
              (e = Bt.innerParams.get(this)) &&
              !D(i, e.hideClass.popup) &&
              ((n = de.swalPromiseResolve.get(this)),
              ht(i, e.showClass.popup),
              mt(i, e.hideClass.popup),
              (o = Q()),
              ht(o, e.showClass.backdrop),
              mt(o, e.hideClass.backdrop),
              (function (t, e, n) {
                var o = Q(),
                  i = kt && ct(e),
                  r = n.onClose,
                  a = n.onAfterClose;
                if (r !== null && typeof r === "function") {
                  r(e);
                }
                if (i) {
                  me(t, e, o, a);
                } else {
                  pe(t, o, J(), a);
                }
              })(this, i, e),
              void 0 !== t
                ? ((t.isDismissed = void 0 !== t.dismiss),
                  (t.isConfirmed = void 0 === t.dismiss))
                : (t = {
                    isDismissed: !0,
                    isConfirmed: !1,
                  }),
              n(t || {}));
          }
          var me = function me(t, e, n, o) {
              (Xt.swalCloseEventFinishedCallback = pe.bind(null, t, n, J(), o)),
                e.addEventListener(kt, function (t) {
                  t.target === e &&
                    (Xt.swalCloseEventFinishedCallback(),
                    delete Xt.swalCloseEventFinishedCallback);
                });
            },
            he = function he(t, e) {
              setTimeout(function () {
                "function" == typeof e && e(), t._destroy();
              });
            };
          function ge(t, e, n) {
            var o = Bt.domCache.get(t);
            e.forEach(function (t) {
              o[t].disabled = n;
            });
          }
          function ve(t, e) {
            if (!t) return !1;
            if ("radio" === t.type)
              for (
                var n = t.parentNode.parentNode.querySelectorAll("input"),
                  o = 0;
                o < n.length;
                o++
              ) {
                n[o].disabled = e;
              }
            else t.disabled = e;
          }
          var be = (function () {
              function n(t, e) {
                a(this, n),
                  (this.callback = t),
                  (this.remaining = e),
                  (this.running = !1),
                  this.start();
              }
              return (
                c(n, [
                  {
                    key: "start",
                    value: function value() {
                      return (
                        this.running ||
                          ((this.running = !0),
                          (this.started = new Date()),
                          (this.id = setTimeout(
                            this.callback,
                            this.remaining
                          ))),
                        this.remaining
                      );
                    },
                  },
                  {
                    key: "stop",
                    value: function value() {
                      return (
                        this.running &&
                          ((this.running = !1),
                          clearTimeout(this.id),
                          (this.remaining -= new Date() - this.started)),
                        this.remaining
                      );
                    },
                  },
                  {
                    key: "increase",
                    value: function value(t) {
                      var e = this.running;
                      return (
                        e && this.stop(),
                        (this.remaining += t),
                        e && this.start(),
                        this.remaining
                      );
                    },
                  },
                  {
                    key: "getTimerLeft",
                    value: function value() {
                      return (
                        this.running && (this.stop(), this.start()),
                        this.remaining
                      );
                    },
                  },
                  {
                    key: "isRunning",
                    value: function value() {
                      return this.running;
                    },
                  },
                ]),
                n
              );
            })(),
            ye = {
              email: function email(t, e) {
                return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(
                  t
                )
                  ? Promise.resolve()
                  : Promise.resolve(e || "Invalid email address");
              },
              url: function url(t, e) {
                return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
                  t
                )
                  ? Promise.resolve()
                  : Promise.resolve(e || "Invalid URL");
              },
            };
          function we(t) {
            var e, n;
            (e = t).inputValidator ||
              Object.keys(ye).forEach(function (t) {
                e.input === t && (e.inputValidator = ye[t]);
              }),
              t.showLoaderOnConfirm &&
                !t.preConfirm &&
                _(
                  "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
                ),
              (t.animation = W(t.animation)),
              ((n = t).target &&
                ("string" != typeof n.target ||
                  document.querySelector(n.target)) &&
                ("string" == typeof n.target || n.target.appendChild)) ||
                (_('Target parameter is not valid, defaulting to "body"'),
                (n.target = "body")),
              "string" == typeof t.title &&
                (t.title = t.title.split("\n").join("<br />")),
              yt(t);
          }
          function Ce(t) {
            var e = Q(),
              n = $();
            "function" == typeof t.onBeforeOpen && t.onBeforeOpen(n);
            var o = window.getComputedStyle(document.body).overflowY;
            je(e, n, t),
              Te(e, n),
              M() &&
                (Le(e, t.scrollbarPadding, o),
                h(document.body.children).forEach(function (t) {
                  t === Q() ||
                    (function (t, e) {
                      if ("function" == typeof t.contains) return t.contains(e);
                    })(t, Q()) ||
                    (t.hasAttribute("aria-hidden") &&
                      t.setAttribute(
                        "data-previous-aria-hidden",
                        t.getAttribute("aria-hidden")
                      ),
                    t.setAttribute("aria-hidden", "true"));
                })),
              J() ||
                Xt.previousActiveElement ||
                (Xt.previousActiveElement = document.activeElement),
              "function" == typeof t.onOpen &&
                setTimeout(function () {
                  return t.onOpen(n);
                }),
              ht(e, Y["no-transition"]);
          }
          function ke(t) {
            var e,
              n = $();
            t.target === n &&
              ((e = Q()),
              n.removeEventListener(kt, ke),
              (e.style.overflowY = "auto"));
          }
          function xe(t, e) {
            "select" === e.input || "radio" === e.input
              ? Me(t, e)
              : -1 !==
                  ["text", "email", "number", "tel", "textarea"].indexOf(
                    e.input
                  ) &&
                (v(e.inputValue) || y(e.inputValue)) &&
                Re(t, e);
          }
          function Pe(t, e) {
            t.disableButtons(), e.input ? Ne(t, e) : Ue(t, e, !0);
          }
          function Ae(t, e) {
            t.disableButtons(), e(K.cancel);
          }
          function Be(t, e) {
            t.closePopup({
              value: e,
            });
          }
          function Se(e, t, n, o) {
            t.keydownTarget &&
              t.keydownHandlerAdded &&
              (t.keydownTarget.removeEventListener(
                "keydown",
                t.keydownHandler,
                {
                  capture: t.keydownListenerCapture,
                }
              ),
              (t.keydownHandlerAdded = !1)),
              n.toast ||
                ((t.keydownHandler = function (t) {
                  return ze(e, t, o);
                }),
                (t.keydownTarget = n.keydownListenerCapture ? window : $()),
                (t.keydownListenerCapture = n.keydownListenerCapture),
                t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
                  capture: t.keydownListenerCapture,
                }),
                (t.keydownHandlerAdded = !0));
          }
          function Ee(t, e, n) {
            var o = V(),
              i = 0;
            if (i < o.length)
              return (
                (e += n) === o.length
                  ? (e = 0)
                  : -1 === e && (e = o.length - 1),
                o[e].focus()
              );
            $().focus();
          }
          function Oe(t, e, n) {
            Bt.innerParams.get(t).toast
              ? Qe(t, e, n)
              : (Je(e), Xe(e), Ge(t, e, n));
          }
          var Te = function Te(t, e) {
              kt && ct(e)
                ? ((t.style.overflowY = "hidden"), e.addEventListener(kt, ke))
                : (t.style.overflowY = "auto");
            },
            Le = function Le(t, e, n) {
              var o;
              ((/iPad|iPhone|iPod/.test(navigator.userAgent) &&
                !window.MSStream) ||
                ("MacIntel" === navigator.platform &&
                  1 < navigator.maxTouchPoints)) &&
                !D(document.body, Y.iosfix) &&
                ((o = document.body.scrollTop),
                (document.body.style.top = "".concat(-1 * o, "px")),
                mt(document.body, Y.iosfix),
                ue(),
                se()),
                "undefined" != typeof window &&
                  ae() &&
                  (ce(), window.addEventListener("resize", ce)),
                e && "hidden" !== n && re(),
                setTimeout(function () {
                  t.scrollTop = 0;
                });
            },
            je = function je(t, e, n) {
              mt(t, n.showClass.backdrop),
                ot(e),
                mt(e, n.showClass.popup),
                mt([document.documentElement, document.body], Y.shown),
                n.heightAuto &&
                  n.backdrop &&
                  !n.toast &&
                  mt(
                    [document.documentElement, document.body],
                    Y["height-auto"]
                  );
            },
            qe = function qe(t) {
              return t.checked ? 1 : 0;
            },
            Ie = function Ie(t) {
              return t.checked ? t.value : null;
            },
            Ve = function Ve(t) {
              return t.files.length
                ? null !== t.getAttribute("multiple")
                  ? t.files
                  : t.files[0]
                : null;
            },
            Me = function Me(e, n) {
              function o(t) {
                return He[n.input](i, De(t), n);
              }
              var i = P();
              v(n.inputOptions) || y(n.inputOptions)
                ? (Wt(),
                  b(n.inputOptions).then(function (t) {
                    e.hideLoading(), o(t);
                  }))
                : "object" === r(n.inputOptions)
                ? o(n.inputOptions)
                : F(
                    "Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(
                      r(n.inputOptions)
                    )
                  );
            },
            Re = function Re(e, n) {
              var o = e.getInput();
              it(o),
                b(n.inputValue)
                  .then(function (t) {
                    (o.value =
                      "number" === n.input ? parseFloat(t) || 0 : "".concat(t)),
                      ot(o),
                      o.focus(),
                      e.hideLoading();
                  })
                  ["catch"](function (t) {
                    F("Error in inputValue promise: ".concat(t)),
                      (o.value = ""),
                      ot(o),
                      o.focus(),
                      e.hideLoading();
                  });
            },
            He = {
              select: function select(t, e, i) {
                function r(t, e, n) {
                  var o = document.createElement("option");
                  (o.value = n),
                    H(o, e),
                    i.inputValue.toString() === n.toString() &&
                      (o.selected = !0),
                    t.appendChild(o);
                }
                var a = gt(t, Y.select);
                e.forEach(function (t) {
                  var e,
                    n = t[0],
                    o = t[1];
                  Array.isArray(o)
                    ? (((e = document.createElement("optgroup")).label = n),
                      (e.disabled = !1),
                      a.appendChild(e),
                      o.forEach(function (t) {
                        return r(e, t[1], t[0]);
                      }))
                    : r(a, o, n);
                }),
                  a.focus();
              },
              radio: function radio(t, e, a) {
                var c = gt(t, Y.radio);
                e.forEach(function (t) {
                  var e = t[0],
                    n = t[1],
                    o = document.createElement("input"),
                    i = document.createElement("label");
                  (o.type = "radio"),
                    (o.name = Y.radio),
                    (o.value = e),
                    a.inputValue.toString() === e.toString() &&
                      (o.checked = !0);
                  var r = document.createElement("span");
                  H(r, n),
                    (r.className = Y.label),
                    i.appendChild(o),
                    i.appendChild(r),
                    c.appendChild(i);
                });
                var n = c.querySelectorAll("input");
                n.length && n[0].focus();
              },
            },
            De = function o(n) {
              var i = [];
              return (
                "undefined" != typeof Map && n instanceof Map
                  ? n.forEach(function (t, e) {
                      var n = t;
                      "object" === r(n) && (n = o(n)), i.push([e, n]);
                    })
                  : Object.keys(n).forEach(function (t) {
                      var e = n[t];
                      "object" === r(e) && (e = o(e)), i.push([t, e]);
                    }),
                i
              );
            },
            Ne = function Ne(e, n) {
              var o = (function (t, e) {
                var n = t.getInput();
                if (!n) return null;
                switch (e.input) {
                  case "checkbox":
                    return qe(n);
                  case "radio":
                    return Ie(n);
                  case "file":
                    return Ve(n);
                  default:
                    return e.inputAutoTrim ? n.value.trim() : n.value;
                }
              })(e, n);
              n.inputValidator
                ? (e.disableInput(),
                  Promise.resolve()
                    .then(function () {
                      return b(n.inputValidator(o, n.validationMessage));
                    })
                    .then(function (t) {
                      e.enableButtons(),
                        e.enableInput(),
                        t ? e.showValidationMessage(t) : Ue(e, n, o);
                    }))
                : e.getInput().checkValidity()
                ? Ue(e, n, o)
                : (e.enableButtons(),
                  e.showValidationMessage(n.validationMessage));
            },
            Ue = function Ue(e, t, n) {
              t.showLoaderOnConfirm && Wt(),
                t.preConfirm
                  ? (e.resetValidationMessage(),
                    Promise.resolve()
                      .then(function () {
                        return b(t.preConfirm(n, t.validationMessage));
                      })
                      .then(function (t) {
                        vt(S()) || !1 === t
                          ? e.hideLoading()
                          : Be(e, void 0 === t ? n : t);
                      }))
                  : Be(e, n);
            },
            _e = [
              "ArrowLeft",
              "ArrowRight",
              "ArrowUp",
              "ArrowDown",
              "Left",
              "Right",
              "Up",
              "Down",
            ],
            Fe = ["Escape", "Esc"],
            ze = function ze(t, e, n) {
              var o = Bt.innerParams.get(t);
              o.stopKeydownPropagation && e.stopPropagation(),
                "Enter" === e.key
                  ? We(t, e, o)
                  : "Tab" === e.key
                  ? Ke(e, o)
                  : -1 !== _e.indexOf(e.key)
                  ? Ye()
                  : -1 !== Fe.indexOf(e.key) && Ze(e, o, n);
            },
            We = function We(t, e, n) {
              if (
                !e.isComposing &&
                e.target &&
                t.getInput() &&
                e.target.outerHTML === t.getInput().outerHTML
              ) {
                if (-1 !== ["textarea", "file"].indexOf(n.input)) return;
                Ht(), e.preventDefault();
              }
            },
            Ke = function Ke(t) {
              for (
                var e = t.target, n = V(), o = -1, i = 0;
                i < n.length;
                i++
              ) {
                if (e === n[i]) {
                  o = i;
                  break;
                }
              }
              t.shiftKey ? Ee(0, o, -1) : Ee(0, o, 1),
                t.stopPropagation(),
                t.preventDefault();
            },
            Ye = function Ye() {
              var t = E(),
                e = O();
              document.activeElement === t && vt(e)
                ? e.focus()
                : document.activeElement === e && vt(t) && t.focus();
            },
            Ze = function Ze(t, e, n) {
              W(e.allowEscapeKey) && (t.preventDefault(), n(K.esc));
            },
            Qe = function Qe(e, t, n) {
              t.popup.onclick = function () {
                var t = Bt.innerParams.get(e);
                t.showConfirmButton ||
                  t.showCancelButton ||
                  t.showCloseButton ||
                  t.input ||
                  n(K.close);
              };
            },
            $e = !1,
            Je = function Je(e) {
              e.popup.onmousedown = function () {
                e.container.onmouseup = function (t) {
                  (e.container.onmouseup = void 0),
                    t.target === e.container && ($e = !0);
                };
              };
            },
            Xe = function Xe(e) {
              e.container.onmousedown = function () {
                e.popup.onmouseup = function (t) {
                  (e.popup.onmouseup = void 0),
                    (t.target !== e.popup && !e.popup.contains(t.target)) ||
                      ($e = !0);
                };
              };
            },
            Ge = function Ge(n, o, i) {
              o.container.onclick = function (t) {
                var e = Bt.innerParams.get(n);
                $e
                  ? ($e = !1)
                  : t.target === o.container &&
                    W(e.allowOutsideClick) &&
                    i(K.backdrop);
              };
            };
          var tn = function tn(t, e, n) {
              var o = q();
              it(o),
                e.timer &&
                  ((t.timeout = new be(function () {
                    n("timer"), delete t.timeout;
                  }, e.timer)),
                  e.timerProgressBar &&
                    (ot(o),
                    setTimeout(function () {
                      t.timeout.running && st(e.timer);
                    })));
            },
            en = function en(t, e) {
              if (!e.toast)
                return W(e.allowEnterKey)
                  ? e.focusCancel && vt(t.cancelButton)
                    ? t.cancelButton.focus()
                    : e.focusConfirm && vt(t.confirmButton)
                    ? t.confirmButton.focus()
                    : void Ee(0, -1, 1)
                  : nn();
            },
            nn = function nn() {
              document.activeElement &&
                "function" == typeof document.activeElement.blur &&
                document.activeElement.blur();
            };
          var on,
            rn = function rn(t) {
              for (var e in t) {
                t[e] = new WeakMap();
              }
            },
            an = Object.freeze({
              hideLoading: ie,
              disableLoading: ie,
              getInput: function getInput(t) {
                var e = Bt.innerParams.get(t || this),
                  n = Bt.domCache.get(t || this);
                return n ? G(n.content, e.input) : null;
              },
              close: fe,
              closePopup: fe,
              closeModal: fe,
              closeToast: fe,
              enableButtons: function enableButtons() {
                ge(this, ["confirmButton", "cancelButton"], !1);
              },
              disableButtons: function disableButtons() {
                ge(this, ["confirmButton", "cancelButton"], !0);
              },
              enableInput: function enableInput() {
                return ve(this.getInput(), !1);
              },
              disableInput: function disableInput() {
                return ve(this.getInput(), !0);
              },
              showValidationMessage: function showValidationMessage(t) {
                var e = Bt.domCache.get(this);
                H(e.validationMessage, t);
                var n = window.getComputedStyle(e.popup);
                (e.validationMessage.style.marginLeft = "-".concat(
                  n.getPropertyValue("padding-left")
                )),
                  (e.validationMessage.style.marginRight = "-".concat(
                    n.getPropertyValue("padding-right")
                  )),
                  ot(e.validationMessage);
                var o = this.getInput();
                o &&
                  (o.setAttribute("aria-invalid", !0),
                  o.setAttribute("aria-describedBy", Y["validation-message"]),
                  tt(o),
                  mt(o, Y.inputerror));
              },
              resetValidationMessage: function resetValidationMessage() {
                var t = Bt.domCache.get(this);
                t.validationMessage && it(t.validationMessage);
                var e = this.getInput();
                e &&
                  (e.removeAttribute("aria-invalid"),
                  e.removeAttribute("aria-describedBy"),
                  ht(e, Y.inputerror));
              },
              getProgressSteps: function getProgressSteps() {
                return Bt.domCache.get(this).progressSteps;
              },
              _main: function _main(t) {
                Jt(t),
                  Xt.currentInstance && Xt.currentInstance._destroy(),
                  (Xt.currentInstance = this);
                var e = (function (t) {
                  var e = s({}, Gt.showClass, t.showClass),
                    n = s({}, Gt.hideClass, t.hideClass),
                    o = s({}, Gt, t);
                  if (
                    ((o.showClass = e),
                    (o.hideClass = n),
                    t.animation === false)
                  ) {
                    o.showClass = {
                      popup: "swal2-noanimation",
                      backdrop: "swal2-noanimation",
                    };
                    o.hideClass = {};
                  }
                  return o;
                })(t);
                we(e),
                  Object.freeze(e),
                  Xt.timeout && (Xt.timeout.stop(), delete Xt.timeout),
                  clearTimeout(Xt.restoreFocusTimeout);
                var n = (function (t) {
                  var e = {
                    popup: $(),
                    container: Q(),
                    content: P(),
                    actions: T(),
                    confirmButton: E(),
                    cancelButton: O(),
                    closeButton: I(),
                    validationMessage: S(),
                    progressSteps: B(),
                  };
                  return Bt.domCache.set(t, e), e;
                })(this);
                return (
                  Rt(this, e),
                  Bt.innerParams.set(this, e),
                  (function (n, o, i) {
                    return new Promise(function (t) {
                      var e = function t(e) {
                        n.closePopup({
                          dismiss: e,
                        });
                      };
                      de.swalPromiseResolve.set(n, t);
                      o.confirmButton.onclick = function () {
                        return Pe(n, i);
                      };
                      o.cancelButton.onclick = function () {
                        return Ae(n, e);
                      };
                      o.closeButton.onclick = function () {
                        return e(K.close);
                      };
                      Oe(n, o, e);
                      Se(n, Xt, i, e);
                      if (
                        i.toast &&
                        (i.input || i.footer || i.showCloseButton)
                      ) {
                        mt(document.body, Y["toast-column"]);
                      } else {
                        ht(document.body, Y["toast-column"]);
                      }
                      xe(n, i);
                      Ce(i);
                      tn(Xt, i, e);
                      en(o, i);
                      setTimeout(function () {
                        o.container.scrollTop = 0;
                      });
                    });
                  })(this, n, e)
                );
              },
              update: function update(e) {
                var t = $(),
                  n = Bt.innerParams.get(this);
                if (!t || D(t, n.hideClass.popup))
                  return _(
                    "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
                  );
                var o = {};
                Object.keys(e).forEach(function (t) {
                  sn.isUpdatableParameter(t)
                    ? (o[t] = e[t])
                    : _(
                        'Invalid parameter to update: "'.concat(
                          t,
                          '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'
                        )
                      );
                });
                var i = s({}, n, o);
                Rt(this, i),
                  Bt.innerParams.set(this, i),
                  Object.defineProperties(this, {
                    params: {
                      value: s({}, this.params, e),
                      writable: !1,
                      enumerable: !0,
                    },
                  });
              },
              _destroy: function _destroy() {
                var t = Bt.domCache.get(this),
                  e = Bt.innerParams.get(this);
                e &&
                  (t.popup &&
                    Xt.swalCloseEventFinishedCallback &&
                    (Xt.swalCloseEventFinishedCallback(),
                    delete Xt.swalCloseEventFinishedCallback),
                  Xt.deferDisposalTimer &&
                    (clearTimeout(Xt.deferDisposalTimer),
                    delete Xt.deferDisposalTimer),
                  "function" == typeof e.onDestroy && e.onDestroy(),
                  delete this.params,
                  delete Xt.keydownHandler,
                  delete Xt.keydownTarget,
                  rn(Bt),
                  rn(de));
              },
            }),
            cn = (function () {
              function r() {
                if ((a(this, r), "undefined" != typeof window)) {
                  "undefined" == typeof Promise &&
                    F(
                      "This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"
                    ),
                    (on = this);
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  ) {
                    e[n] = arguments[n];
                  }
                  var o = Object.freeze(this.constructor.argsToParams(e));
                  Object.defineProperties(this, {
                    params: {
                      value: o,
                      writable: !1,
                      enumerable: !0,
                      configurable: !0,
                    },
                  });
                  var i = this._main(this.params);
                  Bt.promise.set(this, i);
                }
              }
              return (
                c(r, [
                  {
                    key: "then",
                    value: function value(t) {
                      return Bt.promise.get(this).then(t);
                    },
                  },
                  {
                    key: "finally",
                    value: function value(t) {
                      return Bt.promise.get(this)["finally"](t);
                    },
                  },
                ]),
                r
              );
            })();
          s(cn.prototype, an),
            s(cn, oe),
            Object.keys(an).forEach(function (t) {
              cn[t] = function () {
                if (on) return on[t].apply(on, arguments);
              };
            }),
            (cn.DismissReason = K),
            (cn.version = "9.17.1");
          var sn = cn;
          return (sn["default"] = sn);
        }),
          void 0 !== this &&
            this.Sweetalert2 &&
            (this.swal =
              this.sweetAlert =
              this.Swal =
              this.SweetAlert =
                this.Sweetalert2);

        /***/
      },

    /***/ "./node_modules/jquery/dist/jquery.js":
      /*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
      /***/ function (module, exports) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        /*!
         * jQuery JavaScript Library v3.6.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2022-08-26T17:52Z
         */
        (function (global, factory) {
          "use strict";

          if (true && typeof module.exports === "object") {
            // For CommonJS and CommonJS-like environments where a proper `window`
            // is present, execute the factory and get jQuery.
            // For environments that do not have a `window` with a `document`
            // (such as Node.js), expose a factory as module.exports.
            // This accentuates the need for the creation of a real `window`.
            // e.g. var jQuery = require("jquery")(window);
            // See ticket trac-14549 for more info.
            module.exports = global.document
              ? factory(global, true)
              : function (w) {
                  if (!w.document) {
                    throw new Error("jQuery requires a window with a document");
                  }
                  return factory(w);
                };
          } else {
            factory(global);
          }

          // Pass this if window is not defined yet
        })(
          typeof window !== "undefined" ? window : this,
          function (window, noGlobal) {
            // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
            // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
            // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
            // enough that all such attempts are guarded in a try block.
            "use strict";

            var arr = [];

            var getProto = Object.getPrototypeOf;

            var slice = arr.slice;

            var flat = arr.flat
              ? function (array) {
                  return arr.flat.call(array);
                }
              : function (array) {
                  return arr.concat.apply([], array);
                };

            var push = arr.push;

            var indexOf = arr.indexOf;

            var class2type = {};

            var toString = class2type.toString;

            var hasOwn = class2type.hasOwnProperty;

            var fnToString = hasOwn.toString;

            var ObjectFunctionString = fnToString.call(Object);

            var support = {};

            var isFunction = function isFunction(obj) {
              // Support: Chrome <=57, Firefox <=52
              // In some browsers, typeof returns "function" for HTML <object> elements
              // (i.e., `typeof document.createElement( "object" ) === "function"`).
              // We don't want to classify *any* DOM node as a function.
              // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
              // Plus for old WebKit, typeof returns "function" for HTML collections
              // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
              return (
                typeof obj === "function" &&
                typeof obj.nodeType !== "number" &&
                typeof obj.item !== "function"
              );
            };

            var isWindow = function isWindow(obj) {
              return obj != null && obj === obj.window;
            };

            var document = window.document;

            var preservedScriptAttributes = {
              type: true,
              src: true,
              nonce: true,
              noModule: true,
            };

            function DOMEval(code, node, doc) {
              doc = doc || document;

              var i,
                val,
                script = doc.createElement("script");

              script.text = code;
              if (node) {
                for (i in preservedScriptAttributes) {
                  // Support: Firefox 64+, Edge 18+
                  // Some browsers don't support the "nonce" property on scripts.
                  // On the other hand, just using `getAttribute` is not enough as
                  // the `nonce` attribute is reset to an empty string whenever it
                  // becomes browsing-context connected.
                  // See https://github.com/whatwg/html/issues/2369
                  // See https://html.spec.whatwg.org/#nonce-attributes
                  // The `node.getAttribute` check was added for the sake of
                  // `jQuery.globalEval` so that it can fake a nonce-containing node
                  // via an object.
                  val = node[i] || (node.getAttribute && node.getAttribute(i));
                  if (val) {
                    script.setAttribute(i, val);
                  }
                }
              }
              doc.head.appendChild(script).parentNode.removeChild(script);
            }

            function toType(obj) {
              if (obj == null) {
                return obj + "";
              }

              // Support: Android <=2.3 only (functionish RegExp)
              return typeof obj === "object" || typeof obj === "function"
                ? class2type[toString.call(obj)] || "object"
                : typeof obj;
            }
            /* global Symbol */
            // Defining this global in .eslintrc.json would create a danger of using the global
            // unguarded in another place, it seems safer to define global only for this module

            var version = "3.6.1",
              // Define a local copy of jQuery
              jQuery = function (selector, context) {
                // The jQuery object is actually just the init constructor 'enhanced'
                // Need init if jQuery is called (just allow error to be thrown if not included)
                return new jQuery.fn.init(selector, context);
              };

            jQuery.fn = jQuery.prototype = {
              // The current version of jQuery being used
              jquery: version,

              constructor: jQuery,

              // The default length of a jQuery object is 0
              length: 0,

              toArray: function () {
                return slice.call(this);
              },

              // Get the Nth element in the matched element set OR
              // Get the whole matched element set as a clean array
              get: function (num) {
                // Return all the elements in a clean array
                if (num == null) {
                  return slice.call(this);
                }

                // Return just the one element from the set
                return num < 0 ? this[num + this.length] : this[num];
              },

              // Take an array of elements and push it onto the stack
              // (returning the new matched element set)
              pushStack: function (elems) {
                // Build a new jQuery matched element set
                var ret = jQuery.merge(this.constructor(), elems);

                // Add the old object onto the stack (as a reference)
                ret.prevObject = this;

                // Return the newly-formed element set
                return ret;
              },

              // Execute a callback for every element in the matched set.
              each: function (callback) {
                return jQuery.each(this, callback);
              },

              map: function (callback) {
                return this.pushStack(
                  jQuery.map(this, function (elem, i) {
                    return callback.call(elem, i, elem);
                  })
                );
              },

              slice: function () {
                return this.pushStack(slice.apply(this, arguments));
              },

              first: function () {
                return this.eq(0);
              },

              last: function () {
                return this.eq(-1);
              },

              even: function () {
                return this.pushStack(
                  jQuery.grep(this, function (_elem, i) {
                    return (i + 1) % 2;
                  })
                );
              },

              odd: function () {
                return this.pushStack(
                  jQuery.grep(this, function (_elem, i) {
                    return i % 2;
                  })
                );
              },

              eq: function (i) {
                var len = this.length,
                  j = +i + (i < 0 ? len : 0);
                return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
              },

              end: function () {
                return this.prevObject || this.constructor();
              },

              // For internal use only.
              // Behaves like an Array's method, not like a jQuery method.
              push: push,
              sort: arr.sort,
              splice: arr.splice,
            };

            jQuery.extend = jQuery.fn.extend = function () {
              var options,
                name,
                src,
                copy,
                copyIsArray,
                clone,
                target = arguments[0] || {},
                i = 1,
                length = arguments.length,
                deep = false;

              // Handle a deep copy situation
              if (typeof target === "boolean") {
                deep = target;

                // Skip the boolean and the target
                target = arguments[i] || {};
                i++;
              }

              // Handle case when target is a string or something (possible in deep copy)
              if (typeof target !== "object" && !isFunction(target)) {
                target = {};
              }

              // Extend jQuery itself if only one argument is passed
              if (i === length) {
                target = this;
                i--;
              }

              for (; i < length; i++) {
                // Only deal with non-null/undefined values
                if ((options = arguments[i]) != null) {
                  // Extend the base object
                  for (name in options) {
                    copy = options[name];

                    // Prevent Object.prototype pollution
                    // Prevent never-ending loop
                    if (name === "__proto__" || target === copy) {
                      continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if (
                      deep &&
                      copy &&
                      (jQuery.isPlainObject(copy) ||
                        (copyIsArray = Array.isArray(copy)))
                    ) {
                      src = target[name];

                      // Ensure proper type for the source value
                      if (copyIsArray && !Array.isArray(src)) {
                        clone = [];
                      } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                        clone = {};
                      } else {
                        clone = src;
                      }
                      copyIsArray = false;

                      // Never move original objects, clone them
                      target[name] = jQuery.extend(deep, clone, copy);

                      // Don't bring in undefined values
                    } else if (copy !== undefined) {
                      target[name] = copy;
                    }
                  }
                }
              }

              // Return the modified object
              return target;
            };

            jQuery.extend({
              // Unique for each copy of jQuery on the page
              expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

              // Assume jQuery is ready without the ready module
              isReady: true,

              error: function (msg) {
                throw new Error(msg);
              },

              noop: function () {},

              isPlainObject: function (obj) {
                var proto, Ctor;

                // Detect obvious negatives
                // Use toString instead of jQuery.type to catch host objects
                if (!obj || toString.call(obj) !== "[object Object]") {
                  return false;
                }

                proto = getProto(obj);

                // Objects with no prototype (e.g., `Object.create( null )`) are plain
                if (!proto) {
                  return true;
                }

                // Objects with prototype are plain iff they were constructed by a global Object function
                Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
                return (
                  typeof Ctor === "function" &&
                  fnToString.call(Ctor) === ObjectFunctionString
                );
              },

              isEmptyObject: function (obj) {
                var name;

                for (name in obj) {
                  return false;
                }
                return true;
              },

              // Evaluates a script in a provided context; falls back to the global one
              // if not specified.
              globalEval: function (code, options, doc) {
                DOMEval(code, { nonce: options && options.nonce }, doc);
              },

              each: function (obj, callback) {
                var length,
                  i = 0;

                if (isArrayLike(obj)) {
                  length = obj.length;
                  for (; i < length; i++) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                      break;
                    }
                  }
                } else {
                  for (i in obj) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                      break;
                    }
                  }
                }

                return obj;
              },

              // results is for internal usage only
              makeArray: function (arr, results) {
                var ret = results || [];

                if (arr != null) {
                  if (isArrayLike(Object(arr))) {
                    jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
                  } else {
                    push.call(ret, arr);
                  }
                }

                return ret;
              },

              inArray: function (elem, arr, i) {
                return arr == null ? -1 : indexOf.call(arr, elem, i);
              },

              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              merge: function (first, second) {
                var len = +second.length,
                  j = 0,
                  i = first.length;

                for (; j < len; j++) {
                  first[i++] = second[j];
                }

                first.length = i;

                return first;
              },

              grep: function (elems, callback, invert) {
                var callbackInverse,
                  matches = [],
                  i = 0,
                  length = elems.length,
                  callbackExpect = !invert;

                // Go through the array, only saving the items
                // that pass the validator function
                for (; i < length; i++) {
                  callbackInverse = !callback(elems[i], i);
                  if (callbackInverse !== callbackExpect) {
                    matches.push(elems[i]);
                  }
                }

                return matches;
              },

              // arg is for internal usage only
              map: function (elems, callback, arg) {
                var length,
                  value,
                  i = 0,
                  ret = [];

                // Go through the array, translating each of the items to their new values
                if (isArrayLike(elems)) {
                  length = elems.length;
                  for (; i < length; i++) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                      ret.push(value);
                    }
                  }

                  // Go through every key on the object,
                } else {
                  for (i in elems) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                      ret.push(value);
                    }
                  }
                }

                // Flatten any nested arrays
                return flat(ret);
              },

              // A global GUID counter for objects
              guid: 1,

              // jQuery.support is not used in Core but other projects attach their
              // properties to it so it needs to exist.
              support: support,
            });

            if (typeof Symbol === "function") {
              jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
            }

            // Populate the class2type map
            jQuery.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (_i, name) {
                class2type["[object " + name + "]"] = name.toLowerCase();
              }
            );

            function isArrayLike(obj) {
              // Support: real iOS 8.2 only (not reproducible in simulator)
              // `in` check used to prevent JIT error (gh-2145)
              // hasOwn isn't used here due to false negatives
              // regarding Nodelist length in IE
              var length = !!obj && "length" in obj && obj.length,
                type = toType(obj);

              if (isFunction(obj) || isWindow(obj)) {
                return false;
              }

              return (
                type === "array" ||
                length === 0 ||
                (typeof length === "number" && length > 0 && length - 1 in obj)
              );
            }
            var Sizzle =
              /*!
               * Sizzle CSS Selector Engine v2.3.6
               * https://sizzlejs.com/
               *
               * Copyright JS Foundation and other contributors
               * Released under the MIT license
               * https://js.foundation/
               *
               * Date: 2021-02-16
               */
              (function (window) {
                var i,
                  support,
                  Expr,
                  getText,
                  isXML,
                  tokenize,
                  compile,
                  select,
                  outermostContext,
                  sortInput,
                  hasDuplicate,
                  // Local document vars
                  setDocument,
                  document,
                  docElem,
                  documentIsHTML,
                  rbuggyQSA,
                  rbuggyMatches,
                  matches,
                  contains,
                  // Instance-specific data
                  expando = "sizzle" + 1 * new Date(),
                  preferredDoc = window.document,
                  dirruns = 0,
                  done = 0,
                  classCache = createCache(),
                  tokenCache = createCache(),
                  compilerCache = createCache(),
                  nonnativeSelectorCache = createCache(),
                  sortOrder = function (a, b) {
                    if (a === b) {
                      hasDuplicate = true;
                    }
                    return 0;
                  },
                  // Instance methods
                  hasOwn = {}.hasOwnProperty,
                  arr = [],
                  pop = arr.pop,
                  pushNative = arr.push,
                  push = arr.push,
                  slice = arr.slice,
                  // Use a stripped-down indexOf as it's faster than native
                  // https://jsperf.com/thor-indexof-vs-for/5
                  indexOf = function (list, elem) {
                    var i = 0,
                      len = list.length;
                    for (; i < len; i++) {
                      if (list[i] === elem) {
                        return i;
                      }
                    }
                    return -1;
                  },
                  booleans =
                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
                    "ismap|loop|multiple|open|readonly|required|scoped",
                  // Regular expressions

                  // http://www.w3.org/TR/css3-selectors/#whitespace
                  whitespace = "[\\x20\\t\\r\\n\\f]",
                  // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
                  identifier =
                    "(?:\\\\[\\da-fA-F]{1,6}" +
                    whitespace +
                    "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                  // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
                  attributes =
                    "\\[" +
                    whitespace +
                    "*(" +
                    identifier +
                    ")(?:" +
                    whitespace +
                    // Operator (capture 2)
                    "*([*^$|!~]?=)" +
                    whitespace +
                    // "Attribute values must be CSS identifiers [capture 5]
                    // or strings [capture 3 or capture 4]"
                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                    identifier +
                    "))|)" +
                    whitespace +
                    "*\\]",
                  pseudos =
                    ":(" +
                    identifier +
                    ")(?:\\((" +
                    // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
                    // 1. quoted (capture 3; capture 4 or capture 5)
                    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
                    // 2. simple (capture 6)
                    "((?:\\\\.|[^\\\\()[\\]]|" +
                    attributes +
                    ")*)|" +
                    // 3. anything else (capture 2)
                    ".*" +
                    ")\\)|)",
                  // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
                  rwhitespace = new RegExp(whitespace + "+", "g"),
                  rtrim = new RegExp(
                    "^" +
                      whitespace +
                      "+|((?:^|[^\\\\])(?:\\\\.)*)" +
                      whitespace +
                      "+$",
                    "g"
                  ),
                  rcomma = new RegExp(
                    "^" + whitespace + "*," + whitespace + "*"
                  ),
                  rcombinators = new RegExp(
                    "^" +
                      whitespace +
                      "*([>+~]|" +
                      whitespace +
                      ")" +
                      whitespace +
                      "*"
                  ),
                  rdescend = new RegExp(whitespace + "|>"),
                  rpseudo = new RegExp(pseudos),
                  ridentifier = new RegExp("^" + identifier + "$"),
                  matchExpr = {
                    ID: new RegExp("^#(" + identifier + ")"),
                    CLASS: new RegExp("^\\.(" + identifier + ")"),
                    TAG: new RegExp("^(" + identifier + "|[*])"),
                    ATTR: new RegExp("^" + attributes),
                    PSEUDO: new RegExp("^" + pseudos),
                    CHILD: new RegExp(
                      "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        whitespace +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        whitespace +
                        "*(?:([+-]|)" +
                        whitespace +
                        "*(\\d+)|))" +
                        whitespace +
                        "*\\)|)",
                      "i"
                    ),
                    bool: new RegExp("^(?:" + booleans + ")$", "i"),

                    // For use in libraries implementing .is()
                    // We use this for POS matching in `select`
                    needsContext: new RegExp(
                      "^" +
                        whitespace +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        whitespace +
                        "*((?:-\\d)?\\d*)" +
                        whitespace +
                        "*\\)|)(?=[^-]|$)",
                      "i"
                    ),
                  },
                  rhtml = /HTML$/i,
                  rinputs = /^(?:input|select|textarea|button)$/i,
                  rheader = /^h\d$/i,
                  rnative = /^[^{]+\{\s*\[native \w/,
                  // Easily-parseable/retrievable ID or TAG or CLASS selectors
                  rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                  rsibling = /[+~]/,
                  // CSS escapes
                  // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
                  runescape = new RegExp(
                    "\\\\[\\da-fA-F]{1,6}" +
                      whitespace +
                      "?|\\\\([^\\r\\n\\f])",
                    "g"
                  ),
                  funescape = function (escape, nonHex) {
                    var high = "0x" + escape.slice(1) - 0x10000;

                    return nonHex
                      ? // Strip the backslash prefix from a non-hex escape sequence
                        nonHex
                      : // Replace a hexadecimal escape sequence with the encoded Unicode code point
                      // Support: IE <=11+
                      // For values outside the Basic Multilingual Plane (BMP), manually construct a
                      // surrogate pair
                      high < 0
                      ? String.fromCharCode(high + 0x10000)
                      : String.fromCharCode(
                          (high >> 10) | 0xd800,
                          (high & 0x3ff) | 0xdc00
                        );
                  },
                  // CSS string/identifier serialization
                  // https://drafts.csswg.org/cssom/#common-serializing-idioms
                  rcssescape =
                    /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                  fcssescape = function (ch, asCodePoint) {
                    if (asCodePoint) {
                      // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                      if (ch === "\0") {
                        return "\uFFFD";
                      }

                      // Control characters and (dependent upon position) numbers get escaped as code points
                      return (
                        ch.slice(0, -1) +
                        "\\" +
                        ch.charCodeAt(ch.length - 1).toString(16) +
                        " "
                      );
                    }

                    // Other potentially-special ASCII characters get backslash-escaped
                    return "\\" + ch;
                  },
                  // Used for iframes
                  // See setDocument()
                  // Removing the function wrapper causes a "Permission Denied"
                  // error in IE
                  unloadHandler = function () {
                    setDocument();
                  },
                  inDisabledFieldset = addCombinator(
                    function (elem) {
                      return (
                        elem.disabled === true &&
                        elem.nodeName.toLowerCase() === "fieldset"
                      );
                    },
                    { dir: "parentNode", next: "legend" }
                  );

                // Optimize for push.apply( _, NodeList )
                try {
                  push.apply(
                    (arr = slice.call(preferredDoc.childNodes)),
                    preferredDoc.childNodes
                  );

                  // Support: Android<4.0
                  // Detect silently failing push.apply
                  // eslint-disable-next-line no-unused-expressions
                  arr[preferredDoc.childNodes.length].nodeType;
                } catch (e) {
                  push = {
                    apply: arr.length
                      ? // Leverage slice if possible
                        function (target, els) {
                          pushNative.apply(target, slice.call(els));
                        }
                      : // Support: IE<9
                        // Otherwise append directly
                        function (target, els) {
                          var j = target.length,
                            i = 0;

                          // Can't trust NodeList.length
                          while ((target[j++] = els[i++])) {}
                          target.length = j - 1;
                        },
                  };
                }

                function Sizzle(selector, context, results, seed) {
                  var m,
                    i,
                    elem,
                    nid,
                    match,
                    groups,
                    newSelector,
                    newContext = context && context.ownerDocument,
                    // nodeType defaults to 9, since context defaults to document
                    nodeType = context ? context.nodeType : 9;

                  results = results || [];

                  // Return early from calls with invalid selector or context
                  if (
                    typeof selector !== "string" ||
                    !selector ||
                    (nodeType !== 1 && nodeType !== 9 && nodeType !== 11)
                  ) {
                    return results;
                  }

                  // Try to shortcut find operations (as opposed to filters) in HTML documents
                  if (!seed) {
                    setDocument(context);
                    context = context || document;

                    if (documentIsHTML) {
                      // If the selector is sufficiently simple, try using a "get*By*" DOM method
                      // (excepting DocumentFragment context, where the methods don't exist)
                      if (
                        nodeType !== 11 &&
                        (match = rquickExpr.exec(selector))
                      ) {
                        // ID selector
                        if ((m = match[1])) {
                          // Document context
                          if (nodeType === 9) {
                            if ((elem = context.getElementById(m))) {
                              // Support: IE, Opera, Webkit
                              // TODO: identify versions
                              // getElementById can match elements by name instead of ID
                              if (elem.id === m) {
                                results.push(elem);
                                return results;
                              }
                            } else {
                              return results;
                            }

                            // Element context
                          } else {
                            // Support: IE, Opera, Webkit
                            // TODO: identify versions
                            // getElementById can match elements by name instead of ID
                            if (
                              newContext &&
                              (elem = newContext.getElementById(m)) &&
                              contains(context, elem) &&
                              elem.id === m
                            ) {
                              results.push(elem);
                              return results;
                            }
                          }

                          // Type selector
                        } else if (match[2]) {
                          push.apply(
                            results,
                            context.getElementsByTagName(selector)
                          );
                          return results;

                          // Class selector
                        } else if (
                          (m = match[3]) &&
                          support.getElementsByClassName &&
                          context.getElementsByClassName
                        ) {
                          push.apply(
                            results,
                            context.getElementsByClassName(m)
                          );
                          return results;
                        }
                      }

                      // Take advantage of querySelectorAll
                      if (
                        support.qsa &&
                        !nonnativeSelectorCache[selector + " "] &&
                        (!rbuggyQSA || !rbuggyQSA.test(selector)) &&
                        // Support: IE 8 only
                        // Exclude object elements
                        (nodeType !== 1 ||
                          context.nodeName.toLowerCase() !== "object")
                      ) {
                        newSelector = selector;
                        newContext = context;

                        // qSA considers elements outside a scoping root when evaluating child or
                        // descendant combinators, which is not what we want.
                        // In such cases, we work around the behavior by prefixing every selector in the
                        // list with an ID selector referencing the scope context.
                        // The technique has to be used as well when a leading combinator is used
                        // as such selectors are not recognized by querySelectorAll.
                        // Thanks to Andrew Dupont for this technique.
                        if (
                          nodeType === 1 &&
                          (rdescend.test(selector) ||
                            rcombinators.test(selector))
                        ) {
                          // Expand context for sibling selectors
                          newContext =
                            (rsibling.test(selector) &&
                              testContext(context.parentNode)) ||
                            context;

                          // We can use :scope instead of the ID hack if the browser
                          // supports it & if we're not changing the context.
                          if (newContext !== context || !support.scope) {
                            // Capture the context ID, setting it first if necessary
                            if ((nid = context.getAttribute("id"))) {
                              nid = nid.replace(rcssescape, fcssescape);
                            } else {
                              context.setAttribute("id", (nid = expando));
                            }
                          }

                          // Prefix every selector in the list
                          groups = tokenize(selector);
                          i = groups.length;
                          while (i--) {
                            groups[i] =
                              (nid ? "#" + nid : ":scope") +
                              " " +
                              toSelector(groups[i]);
                          }
                          newSelector = groups.join(",");
                        }

                        try {
                          push.apply(
                            results,
                            newContext.querySelectorAll(newSelector)
                          );
                          return results;
                        } catch (qsaError) {
                          nonnativeSelectorCache(selector, true);
                        } finally {
                          if (nid === expando) {
                            context.removeAttribute("id");
                          }
                        }
                      }
                    }
                  }

                  // All others
                  return select(
                    selector.replace(rtrim, "$1"),
                    context,
                    results,
                    seed
                  );
                }

                /**
                 * Create key-value caches of limited size
                 * @returns {function(string, object)} Returns the Object data after storing it on itself with
                 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
                 *	deleting the oldest entry
                 */
                function createCache() {
                  var keys = [];

                  function cache(key, value) {
                    // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                    if (keys.push(key + " ") > Expr.cacheLength) {
                      // Only keep the most recent entries
                      delete cache[keys.shift()];
                    }
                    return (cache[key + " "] = value);
                  }
                  return cache;
                }

                /**
                 * Mark a function for special use by Sizzle
                 * @param {Function} fn The function to mark
                 */
                function markFunction(fn) {
                  fn[expando] = true;
                  return fn;
                }

                /**
                 * Support testing using an element
                 * @param {Function} fn Passed the created element and returns a boolean result
                 */
                function assert(fn) {
                  var el = document.createElement("fieldset");

                  try {
                    return !!fn(el);
                  } catch (e) {
                    return false;
                  } finally {
                    // Remove from its parent by default
                    if (el.parentNode) {
                      el.parentNode.removeChild(el);
                    }

                    // release memory in IE
                    el = null;
                  }
                }

                /**
                 * Adds the same handler for all of the specified attrs
                 * @param {String} attrs Pipe-separated list of attributes
                 * @param {Function} handler The method that will be applied
                 */
                function addHandle(attrs, handler) {
                  var arr = attrs.split("|"),
                    i = arr.length;

                  while (i--) {
                    Expr.attrHandle[arr[i]] = handler;
                  }
                }

                /**
                 * Checks document order of two siblings
                 * @param {Element} a
                 * @param {Element} b
                 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
                 */
                function siblingCheck(a, b) {
                  var cur = b && a,
                    diff =
                      cur &&
                      a.nodeType === 1 &&
                      b.nodeType === 1 &&
                      a.sourceIndex - b.sourceIndex;

                  // Use IE sourceIndex if available on both nodes
                  if (diff) {
                    return diff;
                  }

                  // Check if b follows a
                  if (cur) {
                    while ((cur = cur.nextSibling)) {
                      if (cur === b) {
                        return -1;
                      }
                    }
                  }

                  return a ? 1 : -1;
                }

                /**
                 * Returns a function to use in pseudos for input types
                 * @param {String} type
                 */
                function createInputPseudo(type) {
                  return function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === type;
                  };
                }

                /**
                 * Returns a function to use in pseudos for buttons
                 * @param {String} type
                 */
                function createButtonPseudo(type) {
                  return function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (
                      (name === "input" || name === "button") &&
                      elem.type === type
                    );
                  };
                }

                /**
                 * Returns a function to use in pseudos for :enabled/:disabled
                 * @param {Boolean} disabled true for :disabled; false for :enabled
                 */
                function createDisabledPseudo(disabled) {
                  // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
                  return function (elem) {
                    // Only certain elements can match :enabled or :disabled
                    // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
                    // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
                    if ("form" in elem) {
                      // Check for inherited disabledness on relevant non-disabled elements:
                      // * listed form-associated elements in a disabled fieldset
                      //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                      //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                      // * option elements in a disabled optgroup
                      //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                      // All such elements have a "form" property.
                      if (elem.parentNode && elem.disabled === false) {
                        // Option elements defer to a parent optgroup if present
                        if ("label" in elem) {
                          if ("label" in elem.parentNode) {
                            return elem.parentNode.disabled === disabled;
                          } else {
                            return elem.disabled === disabled;
                          }
                        }

                        // Support: IE 6 - 11
                        // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                        return (
                          elem.isDisabled === disabled ||
                          // Where there is no isDisabled, check manually
                          /* jshint -W018 */
                          (elem.isDisabled !== !disabled &&
                            inDisabledFieldset(elem) === disabled)
                        );
                      }

                      return elem.disabled === disabled;

                      // Try to winnow out elements that can't be disabled before trusting the disabled property.
                      // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                      // even exist on them, let alone have a boolean value.
                    } else if ("label" in elem) {
                      return elem.disabled === disabled;
                    }

                    // Remaining elements are neither :enabled nor :disabled
                    return false;
                  };
                }

                /**
                 * Returns a function to use in pseudos for positionals
                 * @param {Function} fn
                 */
                function createPositionalPseudo(fn) {
                  return markFunction(function (argument) {
                    argument = +argument;
                    return markFunction(function (seed, matches) {
                      var j,
                        matchIndexes = fn([], seed.length, argument),
                        i = matchIndexes.length;

                      // Match elements found at the specified indexes
                      while (i--) {
                        if (seed[(j = matchIndexes[i])]) {
                          seed[j] = !(matches[j] = seed[j]);
                        }
                      }
                    });
                  });
                }

                /**
                 * Checks a node for validity as a Sizzle context
                 * @param {Element|Object=} context
                 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
                 */
                function testContext(context) {
                  return (
                    context &&
                    typeof context.getElementsByTagName !== "undefined" &&
                    context
                  );
                }

                // Expose support vars for convenience
                support = Sizzle.support = {};

                /**
                 * Detects XML nodes
                 * @param {Element|Object} elem An element or a document
                 * @returns {Boolean} True iff elem is a non-HTML XML node
                 */
                isXML = Sizzle.isXML = function (elem) {
                  var namespace = elem && elem.namespaceURI,
                    docElem =
                      elem && (elem.ownerDocument || elem).documentElement;

                  // Support: IE <=8
                  // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
                  // https://bugs.jquery.com/ticket/4833
                  return !rhtml.test(
                    namespace || (docElem && docElem.nodeName) || "HTML"
                  );
                };

                /**
                 * Sets document-related variables once based on the current document
                 * @param {Element|Object} [doc] An element or document object to use to set the document
                 * @returns {Object} Returns the current document
                 */
                setDocument = Sizzle.setDocument = function (node) {
                  var hasCompare,
                    subWindow,
                    doc = node ? node.ownerDocument || node : preferredDoc;

                  // Return early if doc is invalid or already selected
                  // Support: IE 11+, Edge 17 - 18+
                  // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                  // two documents; shallow comparisons work.
                  // eslint-disable-next-line eqeqeq
                  if (
                    doc == document ||
                    doc.nodeType !== 9 ||
                    !doc.documentElement
                  ) {
                    return document;
                  }

                  // Update global variables
                  document = doc;
                  docElem = document.documentElement;
                  documentIsHTML = !isXML(document);

                  // Support: IE 9 - 11+, Edge 12 - 18+
                  // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
                  // Support: IE 11+, Edge 17 - 18+
                  // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                  // two documents; shallow comparisons work.
                  // eslint-disable-next-line eqeqeq
                  if (
                    preferredDoc != document &&
                    (subWindow = document.defaultView) &&
                    subWindow.top !== subWindow
                  ) {
                    // Support: IE 11, Edge
                    if (subWindow.addEventListener) {
                      subWindow.addEventListener(
                        "unload",
                        unloadHandler,
                        false
                      );

                      // Support: IE 9 - 10 only
                    } else if (subWindow.attachEvent) {
                      subWindow.attachEvent("onunload", unloadHandler);
                    }
                  }

                  // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
                  // Safari 4 - 5 only, Opera <=11.6 - 12.x only
                  // IE/Edge & older browsers don't support the :scope pseudo-class.
                  // Support: Safari 6.0 only
                  // Safari 6.0 supports :scope but it's an alias of :root there.
                  support.scope = assert(function (el) {
                    docElem
                      .appendChild(el)
                      .appendChild(document.createElement("div"));
                    return (
                      typeof el.querySelectorAll !== "undefined" &&
                      !el.querySelectorAll(":scope fieldset div").length
                    );
                  });

                  /* Attributes
	---------------------------------------------------------------------- */

                  // Support: IE<8
                  // Verify that getAttribute really returns attributes and not properties
                  // (excepting IE8 booleans)
                  support.attributes = assert(function (el) {
                    el.className = "i";
                    return !el.getAttribute("className");
                  });

                  /* getElement(s)By*
	---------------------------------------------------------------------- */

                  // Check if getElementsByTagName("*") returns only elements
                  support.getElementsByTagName = assert(function (el) {
                    el.appendChild(document.createComment(""));
                    return !el.getElementsByTagName("*").length;
                  });

                  // Support: IE<9
                  support.getElementsByClassName = rnative.test(
                    document.getElementsByClassName
                  );

                  // Support: IE<10
                  // Check if getElementById returns elements by name
                  // The broken getElementById methods don't pick up programmatically-set names,
                  // so use a roundabout getElementsByName test
                  support.getById = assert(function (el) {
                    docElem.appendChild(el).id = expando;
                    return (
                      !document.getElementsByName ||
                      !document.getElementsByName(expando).length
                    );
                  });

                  // ID filter and find
                  if (support.getById) {
                    Expr.filter["ID"] = function (id) {
                      var attrId = id.replace(runescape, funescape);
                      return function (elem) {
                        return elem.getAttribute("id") === attrId;
                      };
                    };
                    Expr.find["ID"] = function (id, context) {
                      if (
                        typeof context.getElementById !== "undefined" &&
                        documentIsHTML
                      ) {
                        var elem = context.getElementById(id);
                        return elem ? [elem] : [];
                      }
                    };
                  } else {
                    Expr.filter["ID"] = function (id) {
                      var attrId = id.replace(runescape, funescape);
                      return function (elem) {
                        var node =
                          typeof elem.getAttributeNode !== "undefined" &&
                          elem.getAttributeNode("id");
                        return node && node.value === attrId;
                      };
                    };

                    // Support: IE 6 - 7 only
                    // getElementById is not reliable as a find shortcut
                    Expr.find["ID"] = function (id, context) {
                      if (
                        typeof context.getElementById !== "undefined" &&
                        documentIsHTML
                      ) {
                        var node,
                          i,
                          elems,
                          elem = context.getElementById(id);

                        if (elem) {
                          // Verify the id attribute
                          node = elem.getAttributeNode("id");
                          if (node && node.value === id) {
                            return [elem];
                          }

                          // Fall back on getElementsByName
                          elems = context.getElementsByName(id);
                          i = 0;
                          while ((elem = elems[i++])) {
                            node = elem.getAttributeNode("id");
                            if (node && node.value === id) {
                              return [elem];
                            }
                          }
                        }

                        return [];
                      }
                    };
                  }

                  // Tag
                  Expr.find["TAG"] = support.getElementsByTagName
                    ? function (tag, context) {
                        if (
                          typeof context.getElementsByTagName !== "undefined"
                        ) {
                          return context.getElementsByTagName(tag);

                          // DocumentFragment nodes don't have gEBTN
                        } else if (support.qsa) {
                          return context.querySelectorAll(tag);
                        }
                      }
                    : function (tag, context) {
                        var elem,
                          tmp = [],
                          i = 0,
                          // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                          results = context.getElementsByTagName(tag);

                        // Filter out possible comments
                        if (tag === "*") {
                          while ((elem = results[i++])) {
                            if (elem.nodeType === 1) {
                              tmp.push(elem);
                            }
                          }

                          return tmp;
                        }
                        return results;
                      };

                  // Class
                  Expr.find["CLASS"] =
                    support.getElementsByClassName &&
                    function (className, context) {
                      if (
                        typeof context.getElementsByClassName !== "undefined" &&
                        documentIsHTML
                      ) {
                        return context.getElementsByClassName(className);
                      }
                    };

                  /* QSA/matchesSelector
	---------------------------------------------------------------------- */

                  // QSA and matchesSelector support

                  // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
                  rbuggyMatches = [];

                  // qSa(:focus) reports false when true (Chrome 21)
                  // We allow this because of a bug in IE8/9 that throws an error
                  // whenever `document.activeElement` is accessed on an iframe
                  // So, we allow :focus to pass through QSA all the time to avoid the IE error
                  // See https://bugs.jquery.com/ticket/13378
                  rbuggyQSA = [];

                  if ((support.qsa = rnative.test(document.querySelectorAll))) {
                    // Build QSA regex
                    // Regex strategy adopted from Diego Perini
                    assert(function (el) {
                      var input;

                      // Select is set to empty string on purpose
                      // This is to test IE's treatment of not explicitly
                      // setting a boolean content attribute,
                      // since its presence should be enough
                      // https://bugs.jquery.com/ticket/12359
                      docElem.appendChild(el).innerHTML =
                        "<a id='" +
                        expando +
                        "'></a>" +
                        "<select id='" +
                        expando +
                        "-\r\\' msallowcapture=''>" +
                        "<option selected=''></option></select>";

                      // Support: IE8, Opera 11-12.16
                      // Nothing should be selected when empty strings follow ^= or $= or *=
                      // The test attribute must be unknown in Opera but "safe" for WinRT
                      // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                      if (el.querySelectorAll("[msallowcapture^='']").length) {
                        rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                      }

                      // Support: IE8
                      // Boolean attributes and "value" are not treated correctly
                      if (!el.querySelectorAll("[selected]").length) {
                        rbuggyQSA.push(
                          "\\[" + whitespace + "*(?:value|" + booleans + ")"
                        );
                      }

                      // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                      if (
                        !el.querySelectorAll("[id~=" + expando + "-]").length
                      ) {
                        rbuggyQSA.push("~=");
                      }

                      // Support: IE 11+, Edge 15 - 18+
                      // IE 11/Edge don't find elements on a `[name='']` query in some cases.
                      // Adding a temporary attribute to the document before the selection works
                      // around the issue.
                      // Interestingly, IE 10 & older don't seem to have the issue.
                      input = document.createElement("input");
                      input.setAttribute("name", "");
                      el.appendChild(input);
                      if (!el.querySelectorAll("[name='']").length) {
                        rbuggyQSA.push(
                          "\\[" +
                            whitespace +
                            "*name" +
                            whitespace +
                            "*=" +
                            whitespace +
                            "*(?:''|\"\")"
                        );
                      }

                      // Webkit/Opera - :checked should return selected option elements
                      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                      // IE8 throws error here and will not see later tests
                      if (!el.querySelectorAll(":checked").length) {
                        rbuggyQSA.push(":checked");
                      }

                      // Support: Safari 8+, iOS 8+
                      // https://bugs.webkit.org/show_bug.cgi?id=136851
                      // In-page `selector#id sibling-combinator selector` fails
                      if (!el.querySelectorAll("a#" + expando + "+*").length) {
                        rbuggyQSA.push(".#.+[+~]");
                      }

                      // Support: Firefox <=3.6 - 5 only
                      // Old Firefox doesn't throw on a badly-escaped identifier.
                      el.querySelectorAll("\\\f");
                      rbuggyQSA.push("[\\r\\n\\f]");
                    });

                    assert(function (el) {
                      el.innerHTML =
                        "<a href='' disabled='disabled'></a>" +
                        "<select disabled='disabled'><option/></select>";

                      // Support: Windows 8 Native Apps
                      // The type and name attributes are restricted during .innerHTML assignment
                      var input = document.createElement("input");
                      input.setAttribute("type", "hidden");
                      el.appendChild(input).setAttribute("name", "D");

                      // Support: IE8
                      // Enforce case-sensitivity of name attribute
                      if (el.querySelectorAll("[name=d]").length) {
                        rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                      }

                      // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                      // IE8 throws error here and will not see later tests
                      if (el.querySelectorAll(":enabled").length !== 2) {
                        rbuggyQSA.push(":enabled", ":disabled");
                      }

                      // Support: IE9-11+
                      // IE's :disabled selector does not pick up the children of disabled fieldsets
                      docElem.appendChild(el).disabled = true;
                      if (el.querySelectorAll(":disabled").length !== 2) {
                        rbuggyQSA.push(":enabled", ":disabled");
                      }

                      // Support: Opera 10 - 11 only
                      // Opera 10-11 does not throw on post-comma invalid pseudos
                      el.querySelectorAll("*,:x");
                      rbuggyQSA.push(",.*:");
                    });
                  }

                  if (
                    (support.matchesSelector = rnative.test(
                      (matches =
                        docElem.matches ||
                        docElem.webkitMatchesSelector ||
                        docElem.mozMatchesSelector ||
                        docElem.oMatchesSelector ||
                        docElem.msMatchesSelector)
                    ))
                  ) {
                    assert(function (el) {
                      // Check to see if it's possible to do matchesSelector
                      // on a disconnected node (IE 9)
                      support.disconnectedMatch = matches.call(el, "*");

                      // This should fail with an exception
                      // Gecko does not error, returns false instead
                      matches.call(el, "[s!='']:x");
                      rbuggyMatches.push("!=", pseudos);
                    });
                  }

                  rbuggyQSA =
                    rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                  rbuggyMatches =
                    rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

                  /* Contains
	---------------------------------------------------------------------- */
                  hasCompare = rnative.test(docElem.compareDocumentPosition);

                  // Element contains another
                  // Purposefully self-exclusive
                  // As in, an element does not contain itself
                  contains =
                    hasCompare || rnative.test(docElem.contains)
                      ? function (a, b) {
                          var adown = a.nodeType === 9 ? a.documentElement : a,
                            bup = b && b.parentNode;
                          return (
                            a === bup ||
                            !!(
                              bup &&
                              bup.nodeType === 1 &&
                              (adown.contains
                                ? adown.contains(bup)
                                : a.compareDocumentPosition &&
                                  a.compareDocumentPosition(bup) & 16)
                            )
                          );
                        }
                      : function (a, b) {
                          if (b) {
                            while ((b = b.parentNode)) {
                              if (b === a) {
                                return true;
                              }
                            }
                          }
                          return false;
                        };

                  /* Sorting
	---------------------------------------------------------------------- */

                  // Document order sorting
                  sortOrder = hasCompare
                    ? function (a, b) {
                        // Flag for duplicate removal
                        if (a === b) {
                          hasDuplicate = true;
                          return 0;
                        }

                        // Sort on method existence if only one input has compareDocumentPosition
                        var compare =
                          !a.compareDocumentPosition -
                          !b.compareDocumentPosition;
                        if (compare) {
                          return compare;
                        }

                        // Calculate position if both inputs belong to the same document
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        compare =
                          (a.ownerDocument || a) == (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : // Otherwise we know they are disconnected
                              1;

                        // Disconnected nodes
                        if (
                          compare & 1 ||
                          (!support.sortDetached &&
                            b.compareDocumentPosition(a) === compare)
                        ) {
                          // Choose the first element that is related to our preferred document
                          // Support: IE 11+, Edge 17 - 18+
                          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                          // two documents; shallow comparisons work.
                          // eslint-disable-next-line eqeqeq
                          if (
                            a == document ||
                            (a.ownerDocument == preferredDoc &&
                              contains(preferredDoc, a))
                          ) {
                            return -1;
                          }

                          // Support: IE 11+, Edge 17 - 18+
                          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                          // two documents; shallow comparisons work.
                          // eslint-disable-next-line eqeqeq
                          if (
                            b == document ||
                            (b.ownerDocument == preferredDoc &&
                              contains(preferredDoc, b))
                          ) {
                            return 1;
                          }

                          // Maintain original order
                          return sortInput
                            ? indexOf(sortInput, a) - indexOf(sortInput, b)
                            : 0;
                        }

                        return compare & 4 ? -1 : 1;
                      }
                    : function (a, b) {
                        // Exit early if the nodes are identical
                        if (a === b) {
                          hasDuplicate = true;
                          return 0;
                        }

                        var cur,
                          i = 0,
                          aup = a.parentNode,
                          bup = b.parentNode,
                          ap = [a],
                          bp = [b];

                        // Parentless nodes are either documents or disconnected
                        if (!aup || !bup) {
                          // Support: IE 11+, Edge 17 - 18+
                          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                          // two documents; shallow comparisons work.
                          /* eslint-disable eqeqeq */
                          return a == document
                            ? -1
                            : b == document
                            ? 1
                            : /* eslint-enable eqeqeq */
                            aup
                            ? -1
                            : bup
                            ? 1
                            : sortInput
                            ? indexOf(sortInput, a) - indexOf(sortInput, b)
                            : 0;

                          // If the nodes are siblings, we can do a quick check
                        } else if (aup === bup) {
                          return siblingCheck(a, b);
                        }

                        // Otherwise we need full lists of their ancestors for comparison
                        cur = a;
                        while ((cur = cur.parentNode)) {
                          ap.unshift(cur);
                        }
                        cur = b;
                        while ((cur = cur.parentNode)) {
                          bp.unshift(cur);
                        }

                        // Walk down the tree looking for a discrepancy
                        while (ap[i] === bp[i]) {
                          i++;
                        }

                        return i
                          ? // Do a sibling check if the nodes have a common ancestor
                            siblingCheck(ap[i], bp[i])
                          : // Otherwise nodes in our document sort first
                          // Support: IE 11+, Edge 17 - 18+
                          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                          // two documents; shallow comparisons work.
                          /* eslint-disable eqeqeq */
                          ap[i] == preferredDoc
                          ? -1
                          : bp[i] == preferredDoc
                          ? 1
                          : /* eslint-enable eqeqeq */
                            0;
                      };

                  return document;
                };

                Sizzle.matches = function (expr, elements) {
                  return Sizzle(expr, null, null, elements);
                };

                Sizzle.matchesSelector = function (elem, expr) {
                  setDocument(elem);

                  if (
                    support.matchesSelector &&
                    documentIsHTML &&
                    !nonnativeSelectorCache[expr + " "] &&
                    (!rbuggyMatches || !rbuggyMatches.test(expr)) &&
                    (!rbuggyQSA || !rbuggyQSA.test(expr))
                  ) {
                    try {
                      var ret = matches.call(elem, expr);

                      // IE 9's matchesSelector returns false on disconnected nodes
                      if (
                        ret ||
                        support.disconnectedMatch ||
                        // As well, disconnected nodes are said to be in a document
                        // fragment in IE 9
                        (elem.document && elem.document.nodeType !== 11)
                      ) {
                        return ret;
                      }
                    } catch (e) {
                      nonnativeSelectorCache(expr, true);
                    }
                  }

                  return Sizzle(expr, document, null, [elem]).length > 0;
                };

                Sizzle.contains = function (context, elem) {
                  // Set document vars if needed
                  // Support: IE 11+, Edge 17 - 18+
                  // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                  // two documents; shallow comparisons work.
                  // eslint-disable-next-line eqeqeq
                  if ((context.ownerDocument || context) != document) {
                    setDocument(context);
                  }
                  return contains(context, elem);
                };

                Sizzle.attr = function (elem, name) {
                  // Set document vars if needed
                  // Support: IE 11+, Edge 17 - 18+
                  // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                  // two documents; shallow comparisons work.
                  // eslint-disable-next-line eqeqeq
                  if ((elem.ownerDocument || elem) != document) {
                    setDocument(elem);
                  }

                  var fn = Expr.attrHandle[name.toLowerCase()],
                    // Don't get fooled by Object.prototype properties (jQuery #13807)
                    val =
                      fn && hasOwn.call(Expr.attrHandle, name.toLowerCase())
                        ? fn(elem, name, !documentIsHTML)
                        : undefined;

                  return val !== undefined
                    ? val
                    : support.attributes || !documentIsHTML
                    ? elem.getAttribute(name)
                    : (val = elem.getAttributeNode(name)) && val.specified
                    ? val.value
                    : null;
                };

                Sizzle.escape = function (sel) {
                  return (sel + "").replace(rcssescape, fcssescape);
                };

                Sizzle.error = function (msg) {
                  throw new Error(
                    "Syntax error, unrecognized expression: " + msg
                  );
                };

                /**
                 * Document sorting and removing duplicates
                 * @param {ArrayLike} results
                 */
                Sizzle.uniqueSort = function (results) {
                  var elem,
                    duplicates = [],
                    j = 0,
                    i = 0;

                  // Unless we *know* we can detect duplicates, assume their presence
                  hasDuplicate = !support.detectDuplicates;
                  sortInput = !support.sortStable && results.slice(0);
                  results.sort(sortOrder);

                  if (hasDuplicate) {
                    while ((elem = results[i++])) {
                      if (elem === results[i]) {
                        j = duplicates.push(i);
                      }
                    }
                    while (j--) {
                      results.splice(duplicates[j], 1);
                    }
                  }

                  // Clear input after sorting to release objects
                  // See https://github.com/jquery/sizzle/pull/225
                  sortInput = null;

                  return results;
                };

                /**
                 * Utility function for retrieving the text value of an array of DOM nodes
                 * @param {Array|Element} elem
                 */
                getText = Sizzle.getText = function (elem) {
                  var node,
                    ret = "",
                    i = 0,
                    nodeType = elem.nodeType;

                  if (!nodeType) {
                    // If no nodeType, this is expected to be an array
                    while ((node = elem[i++])) {
                      // Do not traverse comment nodes
                      ret += getText(node);
                    }
                  } else if (
                    nodeType === 1 ||
                    nodeType === 9 ||
                    nodeType === 11
                  ) {
                    // Use textContent for elements
                    // innerText usage removed for consistency of new lines (jQuery #11153)
                    if (typeof elem.textContent === "string") {
                      return elem.textContent;
                    } else {
                      // Traverse its children
                      for (
                        elem = elem.firstChild;
                        elem;
                        elem = elem.nextSibling
                      ) {
                        ret += getText(elem);
                      }
                    }
                  } else if (nodeType === 3 || nodeType === 4) {
                    return elem.nodeValue;
                  }

                  // Do not include comment or processing instruction nodes

                  return ret;
                };

                Expr = Sizzle.selectors = {
                  // Can be adjusted by the user
                  cacheLength: 50,

                  createPseudo: markFunction,

                  match: matchExpr,

                  attrHandle: {},

                  find: {},

                  relative: {
                    ">": { dir: "parentNode", first: true },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: true },
                    "~": { dir: "previousSibling" },
                  },

                  preFilter: {
                    ATTR: function (match) {
                      match[1] = match[1].replace(runescape, funescape);

                      // Move the given value to match[3] whether quoted or unquoted
                      match[3] = (
                        match[3] ||
                        match[4] ||
                        match[5] ||
                        ""
                      ).replace(runescape, funescape);

                      if (match[2] === "~=") {
                        match[3] = " " + match[3] + " ";
                      }

                      return match.slice(0, 4);
                    },

                    CHILD: function (match) {
                      /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
                      match[1] = match[1].toLowerCase();

                      if (match[1].slice(0, 3) === "nth") {
                        // nth-* requires argument
                        if (!match[3]) {
                          Sizzle.error(match[0]);
                        }

                        // numeric x and y parameters for Expr.filter.CHILD
                        // remember that false/true cast respectively to 0/1
                        match[4] = +(match[4]
                          ? match[5] + (match[6] || 1)
                          : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd");

                        // other types prohibit arguments
                      } else if (match[3]) {
                        Sizzle.error(match[0]);
                      }

                      return match;
                    },

                    PSEUDO: function (match) {
                      var excess,
                        unquoted = !match[6] && match[2];

                      if (matchExpr["CHILD"].test(match[0])) {
                        return null;
                      }

                      // Accept quoted arguments as-is
                      if (match[3]) {
                        match[2] = match[4] || match[5] || "";

                        // Strip excess characters from unquoted arguments
                      } else if (
                        unquoted &&
                        rpseudo.test(unquoted) &&
                        // Get excess from tokenize (recursively)
                        (excess = tokenize(unquoted, true)) &&
                        // advance to the next closing parenthesis
                        (excess =
                          unquoted.indexOf(")", unquoted.length - excess) -
                          unquoted.length)
                      ) {
                        // excess is a negative index
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess);
                      }

                      // Return only captures needed by the pseudo filter method (type and argument)
                      return match.slice(0, 3);
                    },
                  },

                  filter: {
                    TAG: function (nodeNameSelector) {
                      var nodeName = nodeNameSelector
                        .replace(runescape, funescape)
                        .toLowerCase();
                      return nodeNameSelector === "*"
                        ? function () {
                            return true;
                          }
                        : function (elem) {
                            return (
                              elem.nodeName &&
                              elem.nodeName.toLowerCase() === nodeName
                            );
                          };
                    },

                    CLASS: function (className) {
                      var pattern = classCache[className + " "];

                      return (
                        pattern ||
                        ((pattern = new RegExp(
                          "(^|" +
                            whitespace +
                            ")" +
                            className +
                            "(" +
                            whitespace +
                            "|$)"
                        )) &&
                          classCache(className, function (elem) {
                            return pattern.test(
                              (typeof elem.className === "string" &&
                                elem.className) ||
                                (typeof elem.getAttribute !== "undefined" &&
                                  elem.getAttribute("class")) ||
                                ""
                            );
                          }))
                      );
                    },

                    ATTR: function (name, operator, check) {
                      return function (elem) {
                        var result = Sizzle.attr(elem, name);

                        if (result == null) {
                          return operator === "!=";
                        }
                        if (!operator) {
                          return true;
                        }

                        result += "";

                        /* eslint-disable max-len */

                        return operator === "="
                          ? result === check
                          : operator === "!="
                          ? result !== check
                          : operator === "^="
                          ? check && result.indexOf(check) === 0
                          : operator === "*="
                          ? check && result.indexOf(check) > -1
                          : operator === "$="
                          ? check && result.slice(-check.length) === check
                          : operator === "~="
                          ? (
                              " " +
                              result.replace(rwhitespace, " ") +
                              " "
                            ).indexOf(check) > -1
                          : operator === "|="
                          ? result === check ||
                            result.slice(0, check.length + 1) === check + "-"
                          : false;
                        /* eslint-enable max-len */
                      };
                    },

                    CHILD: function (type, what, _argument, first, last) {
                      var simple = type.slice(0, 3) !== "nth",
                        forward = type.slice(-4) !== "last",
                        ofType = what === "of-type";

                      return first === 1 && last === 0
                        ? // Shortcut for :nth-*(n)
                          function (elem) {
                            return !!elem.parentNode;
                          }
                        : function (elem, _context, xml) {
                            var cache,
                              uniqueCache,
                              outerCache,
                              node,
                              nodeIndex,
                              start,
                              dir =
                                simple !== forward
                                  ? "nextSibling"
                                  : "previousSibling",
                              parent = elem.parentNode,
                              name = ofType && elem.nodeName.toLowerCase(),
                              useCache = !xml && !ofType,
                              diff = false;

                            if (parent) {
                              // :(first|last|only)-(child|of-type)
                              if (simple) {
                                while (dir) {
                                  node = elem;
                                  while ((node = node[dir])) {
                                    if (
                                      ofType
                                        ? node.nodeName.toLowerCase() === name
                                        : node.nodeType === 1
                                    ) {
                                      return false;
                                    }
                                  }

                                  // Reverse direction for :only-* (if we haven't yet done so)
                                  start = dir =
                                    type === "only" && !start && "nextSibling";
                                }
                                return true;
                              }

                              start = [
                                forward ? parent.firstChild : parent.lastChild,
                              ];

                              // non-xml :nth-child(...) stores cache data on `parent`
                              if (forward && useCache) {
                                // Seek `elem` from a previously-cached index

                                // ...in a gzip-friendly way
                                node = parent;
                                outerCache =
                                  node[expando] || (node[expando] = {});

                                // Support: IE <9 only
                                // Defend against cloned attroperties (jQuery gh-1709)
                                uniqueCache =
                                  outerCache[node.uniqueID] ||
                                  (outerCache[node.uniqueID] = {});

                                cache = uniqueCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = nodeIndex && cache[2];
                                node =
                                  nodeIndex && parent.childNodes[nodeIndex];

                                while (
                                  (node =
                                    (++nodeIndex && node && node[dir]) ||
                                    // Fallback to seeking `elem` from the start
                                    (diff = nodeIndex = 0) ||
                                    start.pop())
                                ) {
                                  // When found, cache indexes on `parent` and break
                                  if (
                                    node.nodeType === 1 &&
                                    ++diff &&
                                    node === elem
                                  ) {
                                    uniqueCache[type] = [
                                      dirruns,
                                      nodeIndex,
                                      diff,
                                    ];
                                    break;
                                  }
                                }
                              } else {
                                // Use previously-cached element index if available
                                if (useCache) {
                                  // ...in a gzip-friendly way
                                  node = elem;
                                  outerCache =
                                    node[expando] || (node[expando] = {});

                                  // Support: IE <9 only
                                  // Defend against cloned attroperties (jQuery gh-1709)
                                  uniqueCache =
                                    outerCache[node.uniqueID] ||
                                    (outerCache[node.uniqueID] = {});

                                  cache = uniqueCache[type] || [];
                                  nodeIndex = cache[0] === dirruns && cache[1];
                                  diff = nodeIndex;
                                }

                                // xml :nth-child(...)
                                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                if (diff === false) {
                                  // Use the same loop as above to seek `elem` from the start
                                  while (
                                    (node =
                                      (++nodeIndex && node && node[dir]) ||
                                      (diff = nodeIndex = 0) ||
                                      start.pop())
                                  ) {
                                    if (
                                      (ofType
                                        ? node.nodeName.toLowerCase() === name
                                        : node.nodeType === 1) &&
                                      ++diff
                                    ) {
                                      // Cache the index of each encountered element
                                      if (useCache) {
                                        outerCache =
                                          node[expando] || (node[expando] = {});

                                        // Support: IE <9 only
                                        // Defend against cloned attroperties (jQuery gh-1709)
                                        uniqueCache =
                                          outerCache[node.uniqueID] ||
                                          (outerCache[node.uniqueID] = {});

                                        uniqueCache[type] = [dirruns, diff];
                                      }

                                      if (node === elem) {
                                        break;
                                      }
                                    }
                                  }
                                }
                              }

                              // Incorporate the offset, then check against cycle size
                              diff -= last;
                              return (
                                diff === first ||
                                (diff % first === 0 && diff / first >= 0)
                              );
                            }
                          };
                    },

                    PSEUDO: function (pseudo, argument) {
                      // pseudo-class names are case-insensitive
                      // http://www.w3.org/TR/selectors/#pseudo-classes
                      // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                      // Remember that setFilters inherits from pseudos
                      var args,
                        fn =
                          Expr.pseudos[pseudo] ||
                          Expr.setFilters[pseudo.toLowerCase()] ||
                          Sizzle.error("unsupported pseudo: " + pseudo);

                      // The user may use createPseudo to indicate that
                      // arguments are needed to create the filter function
                      // just as Sizzle does
                      if (fn[expando]) {
                        return fn(argument);
                      }

                      // But maintain support for old signatures
                      if (fn.length > 1) {
                        args = [pseudo, pseudo, "", argument];
                        return Expr.setFilters.hasOwnProperty(
                          pseudo.toLowerCase()
                        )
                          ? markFunction(function (seed, matches) {
                              var idx,
                                matched = fn(seed, argument),
                                i = matched.length;
                              while (i--) {
                                idx = indexOf(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                              }
                            })
                          : function (elem) {
                              return fn(elem, 0, args);
                            };
                      }

                      return fn;
                    },
                  },

                  pseudos: {
                    // Potentially complex pseudos
                    not: markFunction(function (selector) {
                      // Trim the selector passed to compile
                      // to avoid treating leading and trailing
                      // spaces as combinators
                      var input = [],
                        results = [],
                        matcher = compile(selector.replace(rtrim, "$1"));

                      return matcher[expando]
                        ? markFunction(function (seed, matches, _context, xml) {
                            var elem,
                              unmatched = matcher(seed, null, xml, []),
                              i = seed.length;

                            // Match elements unmatched by `matcher`
                            while (i--) {
                              if ((elem = unmatched[i])) {
                                seed[i] = !(matches[i] = elem);
                              }
                            }
                          })
                        : function (elem, _context, xml) {
                            input[0] = elem;
                            matcher(input, null, xml, results);

                            // Don't keep the element (issue #299)
                            input[0] = null;
                            return !results.pop();
                          };
                    }),

                    has: markFunction(function (selector) {
                      return function (elem) {
                        return Sizzle(selector, elem).length > 0;
                      };
                    }),

                    contains: markFunction(function (text) {
                      text = text.replace(runescape, funescape);
                      return function (elem) {
                        return (
                          (elem.textContent || getText(elem)).indexOf(text) > -1
                        );
                      };
                    }),

                    // "Whether an element is represented by a :lang() selector
                    // is based solely on the element's language value
                    // being equal to the identifier C,
                    // or beginning with the identifier C immediately followed by "-".
                    // The matching of C against the element's language value is performed case-insensitively.
                    // The identifier C does not have to be a valid language name."
                    // http://www.w3.org/TR/selectors/#lang-pseudo
                    lang: markFunction(function (lang) {
                      // lang value must be a valid identifier
                      if (!ridentifier.test(lang || "")) {
                        Sizzle.error("unsupported lang: " + lang);
                      }
                      lang = lang.replace(runescape, funescape).toLowerCase();
                      return function (elem) {
                        var elemLang;
                        do {
                          if (
                            (elemLang = documentIsHTML
                              ? elem.lang
                              : elem.getAttribute("xml:lang") ||
                                elem.getAttribute("lang"))
                          ) {
                            elemLang = elemLang.toLowerCase();
                            return (
                              elemLang === lang ||
                              elemLang.indexOf(lang + "-") === 0
                            );
                          }
                        } while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false;
                      };
                    }),

                    // Miscellaneous
                    target: function (elem) {
                      var hash = window.location && window.location.hash;
                      return hash && hash.slice(1) === elem.id;
                    },

                    root: function (elem) {
                      return elem === docElem;
                    },

                    focus: function (elem) {
                      return (
                        elem === document.activeElement &&
                        (!document.hasFocus || document.hasFocus()) &&
                        !!(elem.type || elem.href || ~elem.tabIndex)
                      );
                    },

                    // Boolean properties
                    enabled: createDisabledPseudo(false),
                    disabled: createDisabledPseudo(true),

                    checked: function (elem) {
                      // In CSS3, :checked should return both checked and selected elements
                      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                      var nodeName = elem.nodeName.toLowerCase();
                      return (
                        (nodeName === "input" && !!elem.checked) ||
                        (nodeName === "option" && !!elem.selected)
                      );
                    },

                    selected: function (elem) {
                      // Accessing this property makes selected-by-default
                      // options in Safari work properly
                      if (elem.parentNode) {
                        // eslint-disable-next-line no-unused-expressions
                        elem.parentNode.selectedIndex;
                      }

                      return elem.selected === true;
                    },

                    // Contents
                    empty: function (elem) {
                      // http://www.w3.org/TR/selectors/#empty-pseudo
                      // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                      //   but not by others (comment: 8; processing instruction: 7; etc.)
                      // nodeType < 6 works because attributes (2) do not appear as children
                      for (
                        elem = elem.firstChild;
                        elem;
                        elem = elem.nextSibling
                      ) {
                        if (elem.nodeType < 6) {
                          return false;
                        }
                      }
                      return true;
                    },

                    parent: function (elem) {
                      return !Expr.pseudos["empty"](elem);
                    },

                    // Element/input types
                    header: function (elem) {
                      return rheader.test(elem.nodeName);
                    },

                    input: function (elem) {
                      return rinputs.test(elem.nodeName);
                    },

                    button: function (elem) {
                      var name = elem.nodeName.toLowerCase();
                      return (
                        (name === "input" && elem.type === "button") ||
                        name === "button"
                      );
                    },

                    text: function (elem) {
                      var attr;
                      return (
                        elem.nodeName.toLowerCase() === "input" &&
                        elem.type === "text" &&
                        // Support: IE<8
                        // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                        ((attr = elem.getAttribute("type")) == null ||
                          attr.toLowerCase() === "text")
                      );
                    },

                    // Position-in-collection
                    first: createPositionalPseudo(function () {
                      return [0];
                    }),

                    last: createPositionalPseudo(function (
                      _matchIndexes,
                      length
                    ) {
                      return [length - 1];
                    }),

                    eq: createPositionalPseudo(function (
                      _matchIndexes,
                      length,
                      argument
                    ) {
                      return [argument < 0 ? argument + length : argument];
                    }),

                    even: createPositionalPseudo(function (
                      matchIndexes,
                      length
                    ) {
                      var i = 0;
                      for (; i < length; i += 2) {
                        matchIndexes.push(i);
                      }
                      return matchIndexes;
                    }),

                    odd: createPositionalPseudo(function (
                      matchIndexes,
                      length
                    ) {
                      var i = 1;
                      for (; i < length; i += 2) {
                        matchIndexes.push(i);
                      }
                      return matchIndexes;
                    }),

                    lt: createPositionalPseudo(function (
                      matchIndexes,
                      length,
                      argument
                    ) {
                      var i =
                        argument < 0
                          ? argument + length
                          : argument > length
                          ? length
                          : argument;
                      for (; --i >= 0; ) {
                        matchIndexes.push(i);
                      }
                      return matchIndexes;
                    }),

                    gt: createPositionalPseudo(function (
                      matchIndexes,
                      length,
                      argument
                    ) {
                      var i = argument < 0 ? argument + length : argument;
                      for (; ++i < length; ) {
                        matchIndexes.push(i);
                      }
                      return matchIndexes;
                    }),
                  },
                };

                Expr.pseudos["nth"] = Expr.pseudos["eq"];

                // Add button/input type pseudos
                for (i in {
                  radio: true,
                  checkbox: true,
                  file: true,
                  password: true,
                  image: true,
                }) {
                  Expr.pseudos[i] = createInputPseudo(i);
                }
                for (i in { submit: true, reset: true }) {
                  Expr.pseudos[i] = createButtonPseudo(i);
                }

                // Easy API for creating new setFilters
                function setFilters() {}
                setFilters.prototype = Expr.filters = Expr.pseudos;
                Expr.setFilters = new setFilters();

                tokenize = Sizzle.tokenize = function (selector, parseOnly) {
                  var matched,
                    match,
                    tokens,
                    type,
                    soFar,
                    groups,
                    preFilters,
                    cached = tokenCache[selector + " "];

                  if (cached) {
                    return parseOnly ? 0 : cached.slice(0);
                  }

                  soFar = selector;
                  groups = [];
                  preFilters = Expr.preFilter;

                  while (soFar) {
                    // Comma and first run
                    if (!matched || (match = rcomma.exec(soFar))) {
                      if (match) {
                        // Don't consume trailing commas as valid
                        soFar = soFar.slice(match[0].length) || soFar;
                      }
                      groups.push((tokens = []));
                    }

                    matched = false;

                    // Combinators
                    if ((match = rcombinators.exec(soFar))) {
                      matched = match.shift();
                      tokens.push({
                        value: matched,

                        // Cast descendant combinators to space
                        type: match[0].replace(rtrim, " "),
                      });
                      soFar = soFar.slice(matched.length);
                    }

                    // Filters
                    for (type in Expr.filter) {
                      if (
                        (match = matchExpr[type].exec(soFar)) &&
                        (!preFilters[type] || (match = preFilters[type](match)))
                      ) {
                        matched = match.shift();
                        tokens.push({
                          value: matched,
                          type: type,
                          matches: match,
                        });
                        soFar = soFar.slice(matched.length);
                      }
                    }

                    if (!matched) {
                      break;
                    }
                  }

                  // Return the length of the invalid excess
                  // if we're just parsing
                  // Otherwise, throw an error or return tokens
                  return parseOnly
                    ? soFar.length
                    : soFar
                    ? Sizzle.error(selector)
                    : // Cache the tokens
                      tokenCache(selector, groups).slice(0);
                };

                function toSelector(tokens) {
                  var i = 0,
                    len = tokens.length,
                    selector = "";
                  for (; i < len; i++) {
                    selector += tokens[i].value;
                  }
                  return selector;
                }

                function addCombinator(matcher, combinator, base) {
                  var dir = combinator.dir,
                    skip = combinator.next,
                    key = skip || dir,
                    checkNonElements = base && key === "parentNode",
                    doneName = done++;

                  return combinator.first
                    ? // Check against closest ancestor/preceding element
                      function (elem, context, xml) {
                        while ((elem = elem[dir])) {
                          if (elem.nodeType === 1 || checkNonElements) {
                            return matcher(elem, context, xml);
                          }
                        }
                        return false;
                      }
                    : // Check against all ancestor/preceding elements
                      function (elem, context, xml) {
                        var oldCache,
                          uniqueCache,
                          outerCache,
                          newCache = [dirruns, doneName];

                        // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                        if (xml) {
                          while ((elem = elem[dir])) {
                            if (elem.nodeType === 1 || checkNonElements) {
                              if (matcher(elem, context, xml)) {
                                return true;
                              }
                            }
                          }
                        } else {
                          while ((elem = elem[dir])) {
                            if (elem.nodeType === 1 || checkNonElements) {
                              outerCache =
                                elem[expando] || (elem[expando] = {});

                              // Support: IE <9 only
                              // Defend against cloned attroperties (jQuery gh-1709)
                              uniqueCache =
                                outerCache[elem.uniqueID] ||
                                (outerCache[elem.uniqueID] = {});

                              if (
                                skip &&
                                skip === elem.nodeName.toLowerCase()
                              ) {
                                elem = elem[dir] || elem;
                              } else if (
                                (oldCache = uniqueCache[key]) &&
                                oldCache[0] === dirruns &&
                                oldCache[1] === doneName
                              ) {
                                // Assign to newCache so results back-propagate to previous elements
                                return (newCache[2] = oldCache[2]);
                              } else {
                                // Reuse newcache so results back-propagate to previous elements
                                uniqueCache[key] = newCache;

                                // A match means we're done; a fail means we have to keep checking
                                if (
                                  (newCache[2] = matcher(elem, context, xml))
                                ) {
                                  return true;
                                }
                              }
                            }
                          }
                        }
                        return false;
                      };
                }

                function elementMatcher(matchers) {
                  return matchers.length > 1
                    ? function (elem, context, xml) {
                        var i = matchers.length;
                        while (i--) {
                          if (!matchers[i](elem, context, xml)) {
                            return false;
                          }
                        }
                        return true;
                      }
                    : matchers[0];
                }

                function multipleContexts(selector, contexts, results) {
                  var i = 0,
                    len = contexts.length;
                  for (; i < len; i++) {
                    Sizzle(selector, contexts[i], results);
                  }
                  return results;
                }

                function condense(unmatched, map, filter, context, xml) {
                  var elem,
                    newUnmatched = [],
                    i = 0,
                    len = unmatched.length,
                    mapped = map != null;

                  for (; i < len; i++) {
                    if ((elem = unmatched[i])) {
                      if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) {
                          map.push(i);
                        }
                      }
                    }
                  }

                  return newUnmatched;
                }

                function setMatcher(
                  preFilter,
                  selector,
                  matcher,
                  postFilter,
                  postFinder,
                  postSelector
                ) {
                  if (postFilter && !postFilter[expando]) {
                    postFilter = setMatcher(postFilter);
                  }
                  if (postFinder && !postFinder[expando]) {
                    postFinder = setMatcher(postFinder, postSelector);
                  }
                  return markFunction(function (seed, results, context, xml) {
                    var temp,
                      i,
                      elem,
                      preMap = [],
                      postMap = [],
                      preexisting = results.length,
                      // Get initial elements from seed or context
                      elems =
                        seed ||
                        multipleContexts(
                          selector || "*",
                          context.nodeType ? [context] : context,
                          []
                        ),
                      // Prefilter to get matcher input, preserving a map for seed-results synchronization
                      matcherIn =
                        preFilter && (seed || !selector)
                          ? condense(elems, preMap, preFilter, context, xml)
                          : elems,
                      matcherOut = matcher
                        ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                          postFinder ||
                          (seed ? preFilter : preexisting || postFilter)
                          ? // ...intermediate processing is necessary
                            []
                          : // ...otherwise use results directly
                            results
                        : matcherIn;

                    // Find primary matches
                    if (matcher) {
                      matcher(matcherIn, matcherOut, context, xml);
                    }

                    // Apply postFilter
                    if (postFilter) {
                      temp = condense(matcherOut, postMap);
                      postFilter(temp, [], context, xml);

                      // Un-match failing elements by moving them back to matcherIn
                      i = temp.length;
                      while (i--) {
                        if ((elem = temp[i])) {
                          matcherOut[postMap[i]] = !(matcherIn[postMap[i]] =
                            elem);
                        }
                      }
                    }

                    if (seed) {
                      if (postFinder || preFilter) {
                        if (postFinder) {
                          // Get the final matcherOut by condensing this intermediate into postFinder contexts
                          temp = [];
                          i = matcherOut.length;
                          while (i--) {
                            if ((elem = matcherOut[i])) {
                              // Restore matcherIn since elem is not yet a final match
                              temp.push((matcherIn[i] = elem));
                            }
                          }
                          postFinder(null, (matcherOut = []), temp, xml);
                        }

                        // Move matched elements from seed to results to keep them synchronized
                        i = matcherOut.length;
                        while (i--) {
                          if (
                            (elem = matcherOut[i]) &&
                            (temp = postFinder
                              ? indexOf(seed, elem)
                              : preMap[i]) > -1
                          ) {
                            seed[temp] = !(results[temp] = elem);
                          }
                        }
                      }

                      // Add elements to results, through postFinder if defined
                    } else {
                      matcherOut = condense(
                        matcherOut === results
                          ? matcherOut.splice(preexisting, matcherOut.length)
                          : matcherOut
                      );
                      if (postFinder) {
                        postFinder(null, results, matcherOut, xml);
                      } else {
                        push.apply(results, matcherOut);
                      }
                    }
                  });
                }

                function matcherFromTokens(tokens) {
                  var checkContext,
                    matcher,
                    j,
                    len = tokens.length,
                    leadingRelative = Expr.relative[tokens[0].type],
                    implicitRelative = leadingRelative || Expr.relative[" "],
                    i = leadingRelative ? 1 : 0,
                    // The foundational matcher ensures that elements are reachable from top-level context(s)
                    matchContext = addCombinator(
                      function (elem) {
                        return elem === checkContext;
                      },
                      implicitRelative,
                      true
                    ),
                    matchAnyContext = addCombinator(
                      function (elem) {
                        return indexOf(checkContext, elem) > -1;
                      },
                      implicitRelative,
                      true
                    ),
                    matchers = [
                      function (elem, context, xml) {
                        var ret =
                          (!leadingRelative &&
                            (xml || context !== outermostContext)) ||
                          ((checkContext = context).nodeType
                            ? matchContext(elem, context, xml)
                            : matchAnyContext(elem, context, xml));

                        // Avoid hanging onto element (issue #299)
                        checkContext = null;
                        return ret;
                      },
                    ];

                  for (; i < len; i++) {
                    if ((matcher = Expr.relative[tokens[i].type])) {
                      matchers = [
                        addCombinator(elementMatcher(matchers), matcher),
                      ];
                    } else {
                      matcher = Expr.filter[tokens[i].type].apply(
                        null,
                        tokens[i].matches
                      );

                      // Return special upon seeing a positional matcher
                      if (matcher[expando]) {
                        // Find the next relative operator (if any) for proper handling
                        j = ++i;
                        for (; j < len; j++) {
                          if (Expr.relative[tokens[j].type]) {
                            break;
                          }
                        }
                        return setMatcher(
                          i > 1 && elementMatcher(matchers),
                          i > 1 &&
                            toSelector(
                              // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                              tokens
                                .slice(0, i - 1)
                                .concat({
                                  value: tokens[i - 2].type === " " ? "*" : "",
                                })
                            ).replace(rtrim, "$1"),
                          matcher,
                          i < j && matcherFromTokens(tokens.slice(i, j)),
                          j < len &&
                            matcherFromTokens((tokens = tokens.slice(j))),
                          j < len && toSelector(tokens)
                        );
                      }
                      matchers.push(matcher);
                    }
                  }

                  return elementMatcher(matchers);
                }

                function matcherFromGroupMatchers(
                  elementMatchers,
                  setMatchers
                ) {
                  var bySet = setMatchers.length > 0,
                    byElement = elementMatchers.length > 0,
                    superMatcher = function (
                      seed,
                      context,
                      xml,
                      results,
                      outermost
                    ) {
                      var elem,
                        j,
                        matcher,
                        matchedCount = 0,
                        i = "0",
                        unmatched = seed && [],
                        setMatched = [],
                        contextBackup = outermostContext,
                        // We must always have either seed elements or outermost context
                        elems =
                          seed ||
                          (byElement && Expr.find["TAG"]("*", outermost)),
                        // Use integer dirruns iff this is the outermost matcher
                        dirrunsUnique = (dirruns +=
                          contextBackup == null ? 1 : Math.random() || 0.1),
                        len = elems.length;

                      if (outermost) {
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        outermostContext =
                          context == document || context || outermost;
                      }

                      // Add elements passing elementMatchers directly to results
                      // Support: IE<9, Safari
                      // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                      for (; i !== len && (elem = elems[i]) != null; i++) {
                        if (byElement && elem) {
                          j = 0;

                          // Support: IE 11+, Edge 17 - 18+
                          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                          // two documents; shallow comparisons work.
                          // eslint-disable-next-line eqeqeq
                          if (!context && elem.ownerDocument != document) {
                            setDocument(elem);
                            xml = !documentIsHTML;
                          }
                          while ((matcher = elementMatchers[j++])) {
                            if (matcher(elem, context || document, xml)) {
                              results.push(elem);
                              break;
                            }
                          }
                          if (outermost) {
                            dirruns = dirrunsUnique;
                          }
                        }

                        // Track unmatched elements for set filters
                        if (bySet) {
                          // They will have gone through all possible matchers
                          if ((elem = !matcher && elem)) {
                            matchedCount--;
                          }

                          // Lengthen the array for every element, matched or not
                          if (seed) {
                            unmatched.push(elem);
                          }
                        }
                      }

                      // `i` is now the count of elements visited above, and adding it to `matchedCount`
                      // makes the latter nonnegative.
                      matchedCount += i;

                      // Apply set filters to unmatched elements
                      // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                      // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                      // no element matchers and no seed.
                      // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                      // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                      // numerically zero.
                      if (bySet && i !== matchedCount) {
                        j = 0;
                        while ((matcher = setMatchers[j++])) {
                          matcher(unmatched, setMatched, context, xml);
                        }

                        if (seed) {
                          // Reintegrate element matches to eliminate the need for sorting
                          if (matchedCount > 0) {
                            while (i--) {
                              if (!(unmatched[i] || setMatched[i])) {
                                setMatched[i] = pop.call(results);
                              }
                            }
                          }

                          // Discard index placeholder values to get only actual matches
                          setMatched = condense(setMatched);
                        }

                        // Add matches to results
                        push.apply(results, setMatched);

                        // Seedless set matches succeeding multiple successful matchers stipulate sorting
                        if (
                          outermost &&
                          !seed &&
                          setMatched.length > 0 &&
                          matchedCount + setMatchers.length > 1
                        ) {
                          Sizzle.uniqueSort(results);
                        }
                      }

                      // Override manipulation of globals by nested matchers
                      if (outermost) {
                        dirruns = dirrunsUnique;
                        outermostContext = contextBackup;
                      }

                      return unmatched;
                    };

                  return bySet ? markFunction(superMatcher) : superMatcher;
                }

                compile = Sizzle.compile = function (
                  selector,
                  match /* Internal Use Only */
                ) {
                  var i,
                    setMatchers = [],
                    elementMatchers = [],
                    cached = compilerCache[selector + " "];

                  if (!cached) {
                    // Generate a function of recursive functions that can be used to check each element
                    if (!match) {
                      match = tokenize(selector);
                    }
                    i = match.length;
                    while (i--) {
                      cached = matcherFromTokens(match[i]);
                      if (cached[expando]) {
                        setMatchers.push(cached);
                      } else {
                        elementMatchers.push(cached);
                      }
                    }

                    // Cache the compiled function
                    cached = compilerCache(
                      selector,
                      matcherFromGroupMatchers(elementMatchers, setMatchers)
                    );

                    // Save selector and tokenization
                    cached.selector = selector;
                  }
                  return cached;
                };

                /**
                 * A low-level selection function that works with Sizzle's compiled
                 *  selector functions
                 * @param {String|Function} selector A selector or a pre-compiled
                 *  selector function built with Sizzle.compile
                 * @param {Element} context
                 * @param {Array} [results]
                 * @param {Array} [seed] A set of elements to match against
                 */
                select = Sizzle.select = function (
                  selector,
                  context,
                  results,
                  seed
                ) {
                  var i,
                    tokens,
                    token,
                    type,
                    find,
                    compiled = typeof selector === "function" && selector,
                    match =
                      !seed &&
                      tokenize((selector = compiled.selector || selector));

                  results = results || [];

                  // Try to minimize operations if there is only one selector in the list and no seed
                  // (the latter of which guarantees us context)
                  if (match.length === 1) {
                    // Reduce context if the leading compound selector is an ID
                    tokens = match[0] = match[0].slice(0);
                    if (
                      tokens.length > 2 &&
                      (token = tokens[0]).type === "ID" &&
                      context.nodeType === 9 &&
                      documentIsHTML &&
                      Expr.relative[tokens[1].type]
                    ) {
                      context = (Expr.find["ID"](
                        token.matches[0].replace(runescape, funescape),
                        context
                      ) || [])[0];
                      if (!context) {
                        return results;

                        // Precompiled matchers will still verify ancestry, so step up a level
                      } else if (compiled) {
                        context = context.parentNode;
                      }

                      selector = selector.slice(tokens.shift().value.length);
                    }

                    // Fetch a seed set for right-to-left matching
                    i = matchExpr["needsContext"].test(selector)
                      ? 0
                      : tokens.length;
                    while (i--) {
                      token = tokens[i];

                      // Abort if we hit a combinator
                      if (Expr.relative[(type = token.type)]) {
                        break;
                      }
                      if ((find = Expr.find[type])) {
                        // Search, expanding context for leading sibling combinators
                        if (
                          (seed = find(
                            token.matches[0].replace(runescape, funescape),
                            (rsibling.test(tokens[0].type) &&
                              testContext(context.parentNode)) ||
                              context
                          ))
                        ) {
                          // If seed is empty or no tokens remain, we can return early
                          tokens.splice(i, 1);
                          selector = seed.length && toSelector(tokens);
                          if (!selector) {
                            push.apply(results, seed);
                            return results;
                          }

                          break;
                        }
                      }
                    }
                  }

                  // Compile and execute a filtering function if one is not provided
                  // Provide `match` to avoid retokenization if we modified the selector above
                  (compiled || compile(selector, match))(
                    seed,
                    context,
                    !documentIsHTML,
                    results,
                    !context ||
                      (rsibling.test(selector) &&
                        testContext(context.parentNode)) ||
                      context
                  );
                  return results;
                };

                // One-time assignments

                // Sort stability
                support.sortStable =
                  expando.split("").sort(sortOrder).join("") === expando;

                // Support: Chrome 14-35+
                // Always assume duplicates if they aren't passed to the comparison function
                support.detectDuplicates = !!hasDuplicate;

                // Initialize against the default document
                setDocument();

                // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
                // Detached nodes confoundingly follow *each other*
                support.sortDetached = assert(function (el) {
                  // Should return 1, but returns 4 (following)
                  return (
                    el.compareDocumentPosition(
                      document.createElement("fieldset")
                    ) & 1
                  );
                });

                // Support: IE<8
                // Prevent attribute/property "interpolation"
                // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
                if (
                  !assert(function (el) {
                    el.innerHTML = "<a href='#'></a>";
                    return el.firstChild.getAttribute("href") === "#";
                  })
                ) {
                  addHandle(
                    "type|href|height|width",
                    function (elem, name, isXML) {
                      if (!isXML) {
                        return elem.getAttribute(
                          name,
                          name.toLowerCase() === "type" ? 1 : 2
                        );
                      }
                    }
                  );
                }

                // Support: IE<9
                // Use defaultValue in place of getAttribute("value")
                if (
                  !support.attributes ||
                  !assert(function (el) {
                    el.innerHTML = "<input/>";
                    el.firstChild.setAttribute("value", "");
                    return el.firstChild.getAttribute("value") === "";
                  })
                ) {
                  addHandle("value", function (elem, _name, isXML) {
                    if (!isXML && elem.nodeName.toLowerCase() === "input") {
                      return elem.defaultValue;
                    }
                  });
                }

                // Support: IE<9
                // Use getAttributeNode to fetch booleans when getAttribute lies
                if (
                  !assert(function (el) {
                    return el.getAttribute("disabled") == null;
                  })
                ) {
                  addHandle(booleans, function (elem, name, isXML) {
                    var val;
                    if (!isXML) {
                      return elem[name] === true
                        ? name.toLowerCase()
                        : (val = elem.getAttributeNode(name)) && val.specified
                        ? val.value
                        : null;
                    }
                  });
                }

                return Sizzle;
              })(window);

            jQuery.find = Sizzle;
            jQuery.expr = Sizzle.selectors;

            // Deprecated
            jQuery.expr[":"] = jQuery.expr.pseudos;
            jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
            jQuery.text = Sizzle.getText;
            jQuery.isXMLDoc = Sizzle.isXML;
            jQuery.contains = Sizzle.contains;
            jQuery.escapeSelector = Sizzle.escape;

            var dir = function (elem, dir, until) {
              var matched = [],
                truncate = until !== undefined;

              while ((elem = elem[dir]) && elem.nodeType !== 9) {
                if (elem.nodeType === 1) {
                  if (truncate && jQuery(elem).is(until)) {
                    break;
                  }
                  matched.push(elem);
                }
              }
              return matched;
            };

            var siblings = function (n, elem) {
              var matched = [];

              for (; n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                  matched.push(n);
                }
              }

              return matched;
            };

            var rneedsContext = jQuery.expr.match.needsContext;

            function nodeName(elem, name) {
              return (
                elem.nodeName &&
                elem.nodeName.toLowerCase() === name.toLowerCase()
              );
            }
            var rsingleTag =
              /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            // Implement the identical functionality for filter and not
            function winnow(elements, qualifier, not) {
              if (isFunction(qualifier)) {
                return jQuery.grep(elements, function (elem, i) {
                  return !!qualifier.call(elem, i, elem) !== not;
                });
              }

              // Single element
              if (qualifier.nodeType) {
                return jQuery.grep(elements, function (elem) {
                  return (elem === qualifier) !== not;
                });
              }

              // Arraylike of elements (jQuery, arguments, Array)
              if (typeof qualifier !== "string") {
                return jQuery.grep(elements, function (elem) {
                  return indexOf.call(qualifier, elem) > -1 !== not;
                });
              }

              // Filtered directly for both simple and complex selectors
              return jQuery.filter(qualifier, elements, not);
            }

            jQuery.filter = function (expr, elems, not) {
              var elem = elems[0];

              if (not) {
                expr = ":not(" + expr + ")";
              }

              if (elems.length === 1 && elem.nodeType === 1) {
                return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
              }

              return jQuery.find.matches(
                expr,
                jQuery.grep(elems, function (elem) {
                  return elem.nodeType === 1;
                })
              );
            };

            jQuery.fn.extend({
              find: function (selector) {
                var i,
                  ret,
                  len = this.length,
                  self = this;

                if (typeof selector !== "string") {
                  return this.pushStack(
                    jQuery(selector).filter(function () {
                      for (i = 0; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                          return true;
                        }
                      }
                    })
                  );
                }

                ret = this.pushStack([]);

                for (i = 0; i < len; i++) {
                  jQuery.find(selector, self[i], ret);
                }

                return len > 1 ? jQuery.uniqueSort(ret) : ret;
              },
              filter: function (selector) {
                return this.pushStack(winnow(this, selector || [], false));
              },
              not: function (selector) {
                return this.pushStack(winnow(this, selector || [], true));
              },
              is: function (selector) {
                return !!winnow(
                  this,

                  // If this is a positional/relative selector, check membership in the returned set
                  // so $("p:first").is("p:last") won't return true for a doc with two "p".
                  typeof selector === "string" && rneedsContext.test(selector)
                    ? jQuery(selector)
                    : selector || [],
                  false
                ).length;
              },
            });

            // Initialize a jQuery object

            // A central reference to the root jQuery(document)
            var rootjQuery,
              // A simple way to check for HTML strings
              // Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
              // Strict HTML recognition (trac-11290: must start with <)
              // Shortcut simple #id case for speed
              rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
              init = (jQuery.fn.init = function (selector, context, root) {
                var match, elem;

                // HANDLE: $(""), $(null), $(undefined), $(false)
                if (!selector) {
                  return this;
                }

                // Method init() accepts an alternate rootjQuery
                // so migrate can support jQuery.sub (gh-2101)
                root = root || rootjQuery;

                // Handle HTML strings
                if (typeof selector === "string") {
                  if (
                    selector[0] === "<" &&
                    selector[selector.length - 1] === ">" &&
                    selector.length >= 3
                  ) {
                    // Assume that strings that start and end with <> are HTML and skip the regex check
                    match = [null, selector, null];
                  } else {
                    match = rquickExpr.exec(selector);
                  }

                  // Match html or make sure no context is specified for #id
                  if (match && (match[1] || !context)) {
                    // HANDLE: $(html) -> $(array)
                    if (match[1]) {
                      context =
                        context instanceof jQuery ? context[0] : context;

                      // Option to run scripts is true for back-compat
                      // Intentionally let the error be thrown if parseHTML is not present
                      jQuery.merge(
                        this,
                        jQuery.parseHTML(
                          match[1],
                          context && context.nodeType
                            ? context.ownerDocument || context
                            : document,
                          true
                        )
                      );

                      // HANDLE: $(html, props)
                      if (
                        rsingleTag.test(match[1]) &&
                        jQuery.isPlainObject(context)
                      ) {
                        for (match in context) {
                          // Properties of context are called as methods if possible
                          if (isFunction(this[match])) {
                            this[match](context[match]);

                            // ...and otherwise set as attributes
                          } else {
                            this.attr(match, context[match]);
                          }
                        }
                      }

                      return this;

                      // HANDLE: $(#id)
                    } else {
                      elem = document.getElementById(match[2]);

                      if (elem) {
                        // Inject the element directly into the jQuery object
                        this[0] = elem;
                        this.length = 1;
                      }
                      return this;
                    }

                    // HANDLE: $(expr, $(...))
                  } else if (!context || context.jquery) {
                    return (context || root).find(selector);

                    // HANDLE: $(expr, context)
                    // (which is just equivalent to: $(context).find(expr)
                  } else {
                    return this.constructor(context).find(selector);
                  }

                  // HANDLE: $(DOMElement)
                } else if (selector.nodeType) {
                  this[0] = selector;
                  this.length = 1;
                  return this;

                  // HANDLE: $(function)
                  // Shortcut for document ready
                } else if (isFunction(selector)) {
                  return root.ready !== undefined
                    ? root.ready(selector)
                    : // Execute immediately if ready is not present
                      selector(jQuery);
                }

                return jQuery.makeArray(selector, this);
              });

            // Give the init function the jQuery prototype for later instantiation
            init.prototype = jQuery.fn;

            // Initialize central reference
            rootjQuery = jQuery(document);

            var rparentsprev = /^(?:parents|prev(?:Until|All))/,
              // Methods guaranteed to produce a unique set when starting from a unique set
              guaranteedUnique = {
                children: true,
                contents: true,
                next: true,
                prev: true,
              };

            jQuery.fn.extend({
              has: function (target) {
                var targets = jQuery(target, this),
                  l = targets.length;

                return this.filter(function () {
                  var i = 0;
                  for (; i < l; i++) {
                    if (jQuery.contains(this, targets[i])) {
                      return true;
                    }
                  }
                });
              },

              closest: function (selectors, context) {
                var cur,
                  i = 0,
                  l = this.length,
                  matched = [],
                  targets = typeof selectors !== "string" && jQuery(selectors);

                // Positional selectors never match, since there's no _selection_ context
                if (!rneedsContext.test(selectors)) {
                  for (; i < l; i++) {
                    for (
                      cur = this[i];
                      cur && cur !== context;
                      cur = cur.parentNode
                    ) {
                      // Always skip document fragments
                      if (
                        cur.nodeType < 11 &&
                        (targets
                          ? targets.index(cur) > -1
                          : // Don't pass non-elements to Sizzle
                            cur.nodeType === 1 &&
                            jQuery.find.matchesSelector(cur, selectors))
                      ) {
                        matched.push(cur);
                        break;
                      }
                    }
                  }
                }

                return this.pushStack(
                  matched.length > 1 ? jQuery.uniqueSort(matched) : matched
                );
              },

              // Determine the position of an element within the set
              index: function (elem) {
                // No argument, return index in parent
                if (!elem) {
                  return this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
                }

                // Index in selector
                if (typeof elem === "string") {
                  return indexOf.call(jQuery(elem), this[0]);
                }

                // Locate the position of the desired element
                return indexOf.call(
                  this,

                  // If it receives a jQuery object, the first element is used
                  elem.jquery ? elem[0] : elem
                );
              },

              add: function (selector, context) {
                return this.pushStack(
                  jQuery.uniqueSort(
                    jQuery.merge(this.get(), jQuery(selector, context))
                  )
                );
              },

              addBack: function (selector) {
                return this.add(
                  selector == null
                    ? this.prevObject
                    : this.prevObject.filter(selector)
                );
              },
            });

            function sibling(cur, dir) {
              while ((cur = cur[dir]) && cur.nodeType !== 1) {}
              return cur;
            }

            jQuery.each(
              {
                parent: function (elem) {
                  var parent = elem.parentNode;
                  return parent && parent.nodeType !== 11 ? parent : null;
                },
                parents: function (elem) {
                  return dir(elem, "parentNode");
                },
                parentsUntil: function (elem, _i, until) {
                  return dir(elem, "parentNode", until);
                },
                next: function (elem) {
                  return sibling(elem, "nextSibling");
                },
                prev: function (elem) {
                  return sibling(elem, "previousSibling");
                },
                nextAll: function (elem) {
                  return dir(elem, "nextSibling");
                },
                prevAll: function (elem) {
                  return dir(elem, "previousSibling");
                },
                nextUntil: function (elem, _i, until) {
                  return dir(elem, "nextSibling", until);
                },
                prevUntil: function (elem, _i, until) {
                  return dir(elem, "previousSibling", until);
                },
                siblings: function (elem) {
                  return siblings((elem.parentNode || {}).firstChild, elem);
                },
                children: function (elem) {
                  return siblings(elem.firstChild);
                },
                contents: function (elem) {
                  if (
                    elem.contentDocument != null &&
                    // Support: IE 11+
                    // <object> elements with no `data` attribute has an object
                    // `contentDocument` with a `null` prototype.
                    getProto(elem.contentDocument)
                  ) {
                    return elem.contentDocument;
                  }

                  // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
                  // Treat the template element as a regular one in browsers that
                  // don't support it.
                  if (nodeName(elem, "template")) {
                    elem = elem.content || elem;
                  }

                  return jQuery.merge([], elem.childNodes);
                },
              },
              function (name, fn) {
                jQuery.fn[name] = function (until, selector) {
                  var matched = jQuery.map(this, fn, until);

                  if (name.slice(-5) !== "Until") {
                    selector = until;
                  }

                  if (selector && typeof selector === "string") {
                    matched = jQuery.filter(selector, matched);
                  }

                  if (this.length > 1) {
                    // Remove duplicates
                    if (!guaranteedUnique[name]) {
                      jQuery.uniqueSort(matched);
                    }

                    // Reverse order for parents* and prev-derivatives
                    if (rparentsprev.test(name)) {
                      matched.reverse();
                    }
                  }

                  return this.pushStack(matched);
                };
              }
            );
            var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

            // Convert String-formatted options into Object-formatted ones
            function createOptions(options) {
              var object = {};
              jQuery.each(
                options.match(rnothtmlwhite) || [],
                function (_, flag) {
                  object[flag] = true;
                }
              );
              return object;
            }

            /*
             * Create a callback list using the following parameters:
             *
             *	options: an optional list of space-separated options that will change how
             *			the callback list behaves or a more traditional option object
             *
             * By default a callback list will act like an event callback list and can be
             * "fired" multiple times.
             *
             * Possible options:
             *
             *	once:			will ensure the callback list can only be fired once (like a Deferred)
             *
             *	memory:			will keep track of previous values and will call any callback added
             *					after the list has been fired right away with the latest "memorized"
             *					values (like a Deferred)
             *
             *	unique:			will ensure a callback can only be added once (no duplicate in the list)
             *
             *	stopOnFalse:	interrupt callings when a callback returns false
             *
             */
            jQuery.Callbacks = function (options) {
              // Convert options from String-formatted to Object-formatted if needed
              // (we check in cache first)
              options =
                typeof options === "string"
                  ? createOptions(options)
                  : jQuery.extend({}, options);

              var // Flag to know if list is currently firing
                firing,
                // Last fire value for non-forgettable lists
                memory,
                // Flag to know if list was already fired
                fired,
                // Flag to prevent firing
                locked,
                // Actual callback list
                list = [],
                // Queue of execution data for repeatable lists
                queue = [],
                // Index of currently firing callback (modified by add/remove as needed)
                firingIndex = -1,
                // Fire callbacks
                fire = function () {
                  // Enforce single-firing
                  locked = locked || options.once;

                  // Execute callbacks for all pending executions,
                  // respecting firingIndex overrides and runtime changes
                  fired = firing = true;
                  for (; queue.length; firingIndex = -1) {
                    memory = queue.shift();
                    while (++firingIndex < list.length) {
                      // Run callback and check for early termination
                      if (
                        list[firingIndex].apply(memory[0], memory[1]) ===
                          false &&
                        options.stopOnFalse
                      ) {
                        // Jump to end and forget the data so .add doesn't re-fire
                        firingIndex = list.length;
                        memory = false;
                      }
                    }
                  }

                  // Forget the data if we're done with it
                  if (!options.memory) {
                    memory = false;
                  }

                  firing = false;

                  // Clean up if we're done firing for good
                  if (locked) {
                    // Keep an empty list if we have data for future add calls
                    if (memory) {
                      list = [];

                      // Otherwise, this object is spent
                    } else {
                      list = "";
                    }
                  }
                },
                // Actual Callbacks object
                self = {
                  // Add a callback or a collection of callbacks to the list
                  add: function () {
                    if (list) {
                      // If we have memory from a past run, we should fire after adding
                      if (memory && !firing) {
                        firingIndex = list.length - 1;
                        queue.push(memory);
                      }

                      (function add(args) {
                        jQuery.each(args, function (_, arg) {
                          if (isFunction(arg)) {
                            if (!options.unique || !self.has(arg)) {
                              list.push(arg);
                            }
                          } else if (
                            arg &&
                            arg.length &&
                            toType(arg) !== "string"
                          ) {
                            // Inspect recursively
                            add(arg);
                          }
                        });
                      })(arguments);

                      if (memory && !firing) {
                        fire();
                      }
                    }
                    return this;
                  },

                  // Remove a callback from the list
                  remove: function () {
                    jQuery.each(arguments, function (_, arg) {
                      var index;
                      while ((index = jQuery.inArray(arg, list, index)) > -1) {
                        list.splice(index, 1);

                        // Handle firing indexes
                        if (index <= firingIndex) {
                          firingIndex--;
                        }
                      }
                    });
                    return this;
                  },

                  // Check if a given callback is in the list.
                  // If no argument is given, return whether or not list has callbacks attached.
                  has: function (fn) {
                    return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
                  },

                  // Remove all callbacks from the list
                  empty: function () {
                    if (list) {
                      list = [];
                    }
                    return this;
                  },

                  // Disable .fire and .add
                  // Abort any current/pending executions
                  // Clear all callbacks and values
                  disable: function () {
                    locked = queue = [];
                    list = memory = "";
                    return this;
                  },
                  disabled: function () {
                    return !list;
                  },

                  // Disable .fire
                  // Also disable .add unless we have memory (since it would have no effect)
                  // Abort any pending executions
                  lock: function () {
                    locked = queue = [];
                    if (!memory && !firing) {
                      list = memory = "";
                    }
                    return this;
                  },
                  locked: function () {
                    return !!locked;
                  },

                  // Call all callbacks with the given context and arguments
                  fireWith: function (context, args) {
                    if (!locked) {
                      args = args || [];
                      args = [context, args.slice ? args.slice() : args];
                      queue.push(args);
                      if (!firing) {
                        fire();
                      }
                    }
                    return this;
                  },

                  // Call all the callbacks with the given arguments
                  fire: function () {
                    self.fireWith(this, arguments);
                    return this;
                  },

                  // To know if the callbacks have already been called at least once
                  fired: function () {
                    return !!fired;
                  },
                };

              return self;
            };

            function Identity(v) {
              return v;
            }
            function Thrower(ex) {
              throw ex;
            }

            function adoptValue(value, resolve, reject, noValue) {
              var method;

              try {
                // Check for promise aspect first to privilege synchronous behavior
                if (value && isFunction((method = value.promise))) {
                  method.call(value).done(resolve).fail(reject);

                  // Other thenables
                } else if (value && isFunction((method = value.then))) {
                  method.call(value, resolve, reject);

                  // Other non-thenables
                } else {
                  // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
                  // * false: [ value ].slice( 0 ) => resolve( value )
                  // * true: [ value ].slice( 1 ) => resolve()
                  resolve.apply(undefined, [value].slice(noValue));
                }

                // For Promises/A+, convert exceptions into rejections
                // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
                // Deferred#then to conditionally suppress rejection.
              } catch (value) {
                // Support: Android 4.0 only
                // Strict mode functions invoked without .call/.apply get global-object context
                reject.apply(undefined, [value]);
              }
            }

            jQuery.extend({
              Deferred: function (func) {
                var tuples = [
                    // action, add listener, callbacks,
                    // ... .then handlers, argument index, [final state]
                    [
                      "notify",
                      "progress",
                      jQuery.Callbacks("memory"),
                      jQuery.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      jQuery.Callbacks("once memory"),
                      jQuery.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      jQuery.Callbacks("once memory"),
                      jQuery.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  state = "pending",
                  promise = {
                    state: function () {
                      return state;
                    },
                    always: function () {
                      deferred.done(arguments).fail(arguments);
                      return this;
                    },
                    catch: function (fn) {
                      return promise.then(null, fn);
                    },

                    // Keep pipe for back-compat
                    pipe: function (/* fnDone, fnFail, fnProgress */) {
                      var fns = arguments;

                      return jQuery
                        .Deferred(function (newDefer) {
                          jQuery.each(tuples, function (_i, tuple) {
                            // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                            var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];

                            // deferred.progress(function() { bind to newDefer or newDefer.notify })
                            // deferred.done(function() { bind to newDefer or newDefer.resolve })
                            // deferred.fail(function() { bind to newDefer or newDefer.reject })
                            deferred[tuple[1]](function () {
                              var returned = fn && fn.apply(this, arguments);
                              if (returned && isFunction(returned.promise)) {
                                returned
                                  .promise()
                                  .progress(newDefer.notify)
                                  .done(newDefer.resolve)
                                  .fail(newDefer.reject);
                              } else {
                                newDefer[tuple[0] + "With"](
                                  this,
                                  fn ? [returned] : arguments
                                );
                              }
                            });
                          });
                          fns = null;
                        })
                        .promise();
                    },
                    then: function (onFulfilled, onRejected, onProgress) {
                      var maxDepth = 0;
                      function resolve(depth, deferred, handler, special) {
                        return function () {
                          var that = this,
                            args = arguments,
                            mightThrow = function () {
                              var returned, then;

                              // Support: Promises/A+ section 2.3.3.3.3
                              // https://promisesaplus.com/#point-59
                              // Ignore double-resolution attempts
                              if (depth < maxDepth) {
                                return;
                              }

                              returned = handler.apply(that, args);

                              // Support: Promises/A+ section 2.3.1
                              // https://promisesaplus.com/#point-48
                              if (returned === deferred.promise()) {
                                throw new TypeError("Thenable self-resolution");
                              }

                              // Support: Promises/A+ sections 2.3.3.1, 3.5
                              // https://promisesaplus.com/#point-54
                              // https://promisesaplus.com/#point-75
                              // Retrieve `then` only once
                              then =
                                returned &&
                                // Support: Promises/A+ section 2.3.4
                                // https://promisesaplus.com/#point-64
                                // Only check objects and functions for thenability
                                (typeof returned === "object" ||
                                  typeof returned === "function") &&
                                returned.then;

                              // Handle a returned thenable
                              if (isFunction(then)) {
                                // Special processors (notify) just wait for resolution
                                if (special) {
                                  then.call(
                                    returned,
                                    resolve(
                                      maxDepth,
                                      deferred,
                                      Identity,
                                      special
                                    ),
                                    resolve(
                                      maxDepth,
                                      deferred,
                                      Thrower,
                                      special
                                    )
                                  );

                                  // Normal processors (resolve) also hook into progress
                                } else {
                                  // ...and disregard older resolution values
                                  maxDepth++;

                                  then.call(
                                    returned,
                                    resolve(
                                      maxDepth,
                                      deferred,
                                      Identity,
                                      special
                                    ),
                                    resolve(
                                      maxDepth,
                                      deferred,
                                      Thrower,
                                      special
                                    ),
                                    resolve(
                                      maxDepth,
                                      deferred,
                                      Identity,
                                      deferred.notifyWith
                                    )
                                  );
                                }

                                // Handle all other returned values
                              } else {
                                // Only substitute handlers pass on context
                                // and multiple values (non-spec behavior)
                                if (handler !== Identity) {
                                  that = undefined;
                                  args = [returned];
                                }

                                // Process the value(s)
                                // Default process is resolve
                                (special || deferred.resolveWith)(that, args);
                              }
                            },
                            // Only normal processors (resolve) catch and reject exceptions
                            process = special
                              ? mightThrow
                              : function () {
                                  try {
                                    mightThrow();
                                  } catch (e) {
                                    if (jQuery.Deferred.exceptionHook) {
                                      jQuery.Deferred.exceptionHook(
                                        e,
                                        process.stackTrace
                                      );
                                    }

                                    // Support: Promises/A+ section 2.3.3.3.4.1
                                    // https://promisesaplus.com/#point-61
                                    // Ignore post-resolution exceptions
                                    if (depth + 1 >= maxDepth) {
                                      // Only substitute handlers pass on context
                                      // and multiple values (non-spec behavior)
                                      if (handler !== Thrower) {
                                        that = undefined;
                                        args = [e];
                                      }

                                      deferred.rejectWith(that, args);
                                    }
                                  }
                                };

                          // Support: Promises/A+ section 2.3.3.3.1
                          // https://promisesaplus.com/#point-57
                          // Re-resolve promises immediately to dodge false rejection from
                          // subsequent errors
                          if (depth) {
                            process();
                          } else {
                            // Call an optional hook to record the stack, in case of exception
                            // since it's otherwise lost when execution goes async
                            if (jQuery.Deferred.getStackHook) {
                              process.stackTrace =
                                jQuery.Deferred.getStackHook();
                            }
                            window.setTimeout(process);
                          }
                        };
                      }

                      return jQuery
                        .Deferred(function (newDefer) {
                          // progress_handlers.add( ... )
                          tuples[0][3].add(
                            resolve(
                              0,
                              newDefer,
                              isFunction(onProgress) ? onProgress : Identity,
                              newDefer.notifyWith
                            )
                          );

                          // fulfilled_handlers.add( ... )
                          tuples[1][3].add(
                            resolve(
                              0,
                              newDefer,
                              isFunction(onFulfilled) ? onFulfilled : Identity
                            )
                          );

                          // rejected_handlers.add( ... )
                          tuples[2][3].add(
                            resolve(
                              0,
                              newDefer,
                              isFunction(onRejected) ? onRejected : Thrower
                            )
                          );
                        })
                        .promise();
                    },

                    // Get a promise for this deferred
                    // If obj is provided, the promise aspect is added to the object
                    promise: function (obj) {
                      return obj != null
                        ? jQuery.extend(obj, promise)
                        : promise;
                    },
                  },
                  deferred = {};

                // Add list-specific methods
                jQuery.each(tuples, function (i, tuple) {
                  var list = tuple[2],
                    stateString = tuple[5];

                  // promise.progress = list.add
                  // promise.done = list.add
                  // promise.fail = list.add
                  promise[tuple[1]] = list.add;

                  // Handle state
                  if (stateString) {
                    list.add(
                      function () {
                        // state = "resolved" (i.e., fulfilled)
                        // state = "rejected"
                        state = stateString;
                      },

                      // rejected_callbacks.disable
                      // fulfilled_callbacks.disable
                      tuples[3 - i][2].disable,

                      // rejected_handlers.disable
                      // fulfilled_handlers.disable
                      tuples[3 - i][3].disable,

                      // progress_callbacks.lock
                      tuples[0][2].lock,

                      // progress_handlers.lock
                      tuples[0][3].lock
                    );
                  }

                  // progress_handlers.fire
                  // fulfilled_handlers.fire
                  // rejected_handlers.fire
                  list.add(tuple[3].fire);

                  // deferred.notify = function() { deferred.notifyWith(...) }
                  // deferred.resolve = function() { deferred.resolveWith(...) }
                  // deferred.reject = function() { deferred.rejectWith(...) }
                  deferred[tuple[0]] = function () {
                    deferred[tuple[0] + "With"](
                      this === deferred ? undefined : this,
                      arguments
                    );
                    return this;
                  };

                  // deferred.notifyWith = list.fireWith
                  // deferred.resolveWith = list.fireWith
                  // deferred.rejectWith = list.fireWith
                  deferred[tuple[0] + "With"] = list.fireWith;
                });

                // Make the deferred a promise
                promise.promise(deferred);

                // Call given func if any
                if (func) {
                  func.call(deferred, deferred);
                }

                // All done!
                return deferred;
              },

              // Deferred helper
              when: function (singleValue) {
                var // count of uncompleted subordinates
                  remaining = arguments.length,
                  // count of unprocessed arguments
                  i = remaining,
                  // subordinate fulfillment data
                  resolveContexts = Array(i),
                  resolveValues = slice.call(arguments),
                  // the primary Deferred
                  primary = jQuery.Deferred(),
                  // subordinate callback factory
                  updateFunc = function (i) {
                    return function (value) {
                      resolveContexts[i] = this;
                      resolveValues[i] =
                        arguments.length > 1 ? slice.call(arguments) : value;
                      if (!--remaining) {
                        primary.resolveWith(resolveContexts, resolveValues);
                      }
                    };
                  };

                // Single- and empty arguments are adopted like Promise.resolve
                if (remaining <= 1) {
                  adoptValue(
                    singleValue,
                    primary.done(updateFunc(i)).resolve,
                    primary.reject,
                    !remaining
                  );

                  // Use .then() to unwrap secondary thenables (cf. gh-3000)
                  if (
                    primary.state() === "pending" ||
                    isFunction(resolveValues[i] && resolveValues[i].then)
                  ) {
                    return primary.then();
                  }
                }

                // Multiple arguments are aggregated like Promise.all array elements
                while (i--) {
                  adoptValue(resolveValues[i], updateFunc(i), primary.reject);
                }

                return primary.promise();
              },
            });

            // These usually indicate a programmer mistake during development,
            // warn about them ASAP rather than swallowing them by default.
            var rerrorNames =
              /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

            jQuery.Deferred.exceptionHook = function (error, stack) {
              // Support: IE 8 - 9 only
              // Console exists when dev tools are open, which can happen at any time
              if (
                window.console &&
                window.console.warn &&
                error &&
                rerrorNames.test(error.name)
              ) {
                window.console.warn(
                  "jQuery.Deferred exception: " + error.message,
                  error.stack,
                  stack
                );
              }
            };

            jQuery.readyException = function (error) {
              window.setTimeout(function () {
                throw error;
              });
            };

            // The deferred used on DOM ready
            var readyList = jQuery.Deferred();

            jQuery.fn.ready = function (fn) {
              readyList
                .then(fn)

                // Wrap jQuery.readyException in a function so that the lookup
                // happens at the time of error handling instead of callback
                // registration.
                .catch(function (error) {
                  jQuery.readyException(error);
                });

              return this;
            };

            jQuery.extend({
              // Is the DOM ready to be used? Set to true once it occurs.
              isReady: false,

              // A counter to track how many items to wait for before
              // the ready event fires. See trac-6781
              readyWait: 1,

              // Handle when the DOM is ready
              ready: function (wait) {
                // Abort if there are pending holds or we're already ready
                if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                  return;
                }

                // Remember that the DOM is ready
                jQuery.isReady = true;

                // If a normal DOM Ready event fired, decrement, and wait if need be
                if (wait !== true && --jQuery.readyWait > 0) {
                  return;
                }

                // If there are functions bound, to execute
                readyList.resolveWith(document, [jQuery]);
              },
            });

            jQuery.ready.then = readyList.then;

            // The ready event handler and self cleanup method
            function completed() {
              document.removeEventListener("DOMContentLoaded", completed);
              window.removeEventListener("load", completed);
              jQuery.ready();
            }

            // Catch cases where $(document).ready() is called
            // after the browser event has already occurred.
            // Support: IE <=9 - 10 only
            // Older IE sometimes signals "interactive" too soon
            if (
              document.readyState === "complete" ||
              (document.readyState !== "loading" &&
                !document.documentElement.doScroll)
            ) {
              // Handle it asynchronously to allow scripts the opportunity to delay ready
              window.setTimeout(jQuery.ready);
            } else {
              // Use the handy event callback
              document.addEventListener("DOMContentLoaded", completed);

              // A fallback to window.onload, that will always work
              window.addEventListener("load", completed);
            }

            // Multifunctional method to get and set values of a collection
            // The value/s can optionally be executed if it's a function
            var access = function (
              elems,
              fn,
              key,
              value,
              chainable,
              emptyGet,
              raw
            ) {
              var i = 0,
                len = elems.length,
                bulk = key == null;

              // Sets many values
              if (toType(key) === "object") {
                chainable = true;
                for (i in key) {
                  access(elems, fn, i, key[i], true, emptyGet, raw);
                }

                // Sets one value
              } else if (value !== undefined) {
                chainable = true;

                if (!isFunction(value)) {
                  raw = true;
                }

                if (bulk) {
                  // Bulk operations run against the entire set
                  if (raw) {
                    fn.call(elems, value);
                    fn = null;

                    // ...except when executing function values
                  } else {
                    bulk = fn;
                    fn = function (elem, _key, value) {
                      return bulk.call(jQuery(elem), value);
                    };
                  }
                }

                if (fn) {
                  for (; i < len; i++) {
                    fn(
                      elems[i],
                      key,
                      raw ? value : value.call(elems[i], i, fn(elems[i], key))
                    );
                  }
                }
              }

              if (chainable) {
                return elems;
              }

              // Gets
              if (bulk) {
                return fn.call(elems);
              }

              return len ? fn(elems[0], key) : emptyGet;
            };

            // Matches dashed string for camelizing
            var rmsPrefix = /^-ms-/,
              rdashAlpha = /-([a-z])/g;

            // Used by camelCase as callback to replace()
            function fcamelCase(_all, letter) {
              return letter.toUpperCase();
            }

            // Convert dashed to camelCase; used by the css and data modules
            // Support: IE <=9 - 11, Edge 12 - 15
            // Microsoft forgot to hump their vendor prefix (trac-9572)
            function camelCase(string) {
              return string
                .replace(rmsPrefix, "ms-")
                .replace(rdashAlpha, fcamelCase);
            }
            var acceptData = function (owner) {
              // Accepts only:
              //  - Node
              //    - Node.ELEMENT_NODE
              //    - Node.DOCUMENT_NODE
              //  - Object
              //    - Any
              return (
                owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType
              );
            };

            function Data() {
              this.expando = jQuery.expando + Data.uid++;
            }

            Data.uid = 1;

            Data.prototype = {
              cache: function (owner) {
                // Check if the owner object already has a cache
                var value = owner[this.expando];

                // If not, create one
                if (!value) {
                  value = {};

                  // We can accept data for non-element nodes in modern browsers,
                  // but we should not, see trac-8335.
                  // Always return an empty object.
                  if (acceptData(owner)) {
                    // If it is a node unlikely to be stringify-ed or looped over
                    // use plain assignment
                    if (owner.nodeType) {
                      owner[this.expando] = value;

                      // Otherwise secure it in a non-enumerable property
                      // configurable must be true to allow the property to be
                      // deleted when data is removed
                    } else {
                      Object.defineProperty(owner, this.expando, {
                        value: value,
                        configurable: true,
                      });
                    }
                  }
                }

                return value;
              },
              set: function (owner, data, value) {
                var prop,
                  cache = this.cache(owner);

                // Handle: [ owner, key, value ] args
                // Always use camelCase key (gh-2257)
                if (typeof data === "string") {
                  cache[camelCase(data)] = value;

                  // Handle: [ owner, { properties } ] args
                } else {
                  // Copy the properties one-by-one to the cache object
                  for (prop in data) {
                    cache[camelCase(prop)] = data[prop];
                  }
                }
                return cache;
              },
              get: function (owner, key) {
                return key === undefined
                  ? this.cache(owner)
                  : // Always use camelCase key (gh-2257)
                    owner[this.expando] && owner[this.expando][camelCase(key)];
              },
              access: function (owner, key, value) {
                // In cases where either:
                //
                //   1. No key was specified
                //   2. A string key was specified, but no value provided
                //
                // Take the "read" path and allow the get method to determine
                // which value to return, respectively either:
                //
                //   1. The entire cache object
                //   2. The data stored at the key
                //
                if (
                  key === undefined ||
                  (key && typeof key === "string" && value === undefined)
                ) {
                  return this.get(owner, key);
                }

                // When the key is not a string, or both a key and value
                // are specified, set or extend (existing objects) with either:
                //
                //   1. An object of properties
                //   2. A key and value
                //
                this.set(owner, key, value);

                // Since the "set" path can have two possible entry points
                // return the expected data based on which path was taken[*]
                return value !== undefined ? value : key;
              },
              remove: function (owner, key) {
                var i,
                  cache = owner[this.expando];

                if (cache === undefined) {
                  return;
                }

                if (key !== undefined) {
                  // Support array or space separated string of keys
                  if (Array.isArray(key)) {
                    // If key is an array of keys...
                    // We always set camelCase keys, so remove that.
                    key = key.map(camelCase);
                  } else {
                    key = camelCase(key);

                    // If a key with the spaces exists, use it.
                    // Otherwise, create an array by matching non-whitespace
                    key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
                  }

                  i = key.length;

                  while (i--) {
                    delete cache[key[i]];
                  }
                }

                // Remove the expando if there's no more data
                if (key === undefined || jQuery.isEmptyObject(cache)) {
                  // Support: Chrome <=35 - 45
                  // Webkit & Blink performance suffers when deleting properties
                  // from DOM nodes, so set to undefined instead
                  // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                  if (owner.nodeType) {
                    owner[this.expando] = undefined;
                  } else {
                    delete owner[this.expando];
                  }
                }
              },
              hasData: function (owner) {
                var cache = owner[this.expando];
                return cache !== undefined && !jQuery.isEmptyObject(cache);
              },
            };
            var dataPriv = new Data();

            var dataUser = new Data();

            //	Implementation Summary
            //
            //	1. Enforce API surface and semantic compatibility with 1.9.x branch
            //	2. Improve the module's maintainability by reducing the storage
            //		paths to a single mechanism.
            //	3. Use the same single mechanism to support "private" and "user" data.
            //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
            //	5. Avoid exposing implementation details on user objects (eg. expando properties)
            //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

            var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
              rmultiDash = /[A-Z]/g;

            function getData(data) {
              if (data === "true") {
                return true;
              }

              if (data === "false") {
                return false;
              }

              if (data === "null") {
                return null;
              }

              // Only convert to a number if it doesn't change the string
              if (data === +data + "") {
                return +data;
              }

              if (rbrace.test(data)) {
                return JSON.parse(data);
              }

              return data;
            }

            function dataAttr(elem, key, data) {
              var name;

              // If nothing was found internally, try to fetch any
              // data from the HTML5 data-* attribute
              if (data === undefined && elem.nodeType === 1) {
                name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
                data = elem.getAttribute(name);

                if (typeof data === "string") {
                  try {
                    data = getData(data);
                  } catch (e) {}

                  // Make sure we set the data so it isn't changed later
                  dataUser.set(elem, key, data);
                } else {
                  data = undefined;
                }
              }
              return data;
            }

            jQuery.extend({
              hasData: function (elem) {
                return dataUser.hasData(elem) || dataPriv.hasData(elem);
              },

              data: function (elem, name, data) {
                return dataUser.access(elem, name, data);
              },

              removeData: function (elem, name) {
                dataUser.remove(elem, name);
              },

              // TODO: Now that all calls to _data and _removeData have been replaced
              // with direct calls to dataPriv methods, these can be deprecated.
              _data: function (elem, name, data) {
                return dataPriv.access(elem, name, data);
              },

              _removeData: function (elem, name) {
                dataPriv.remove(elem, name);
              },
            });

            jQuery.fn.extend({
              data: function (key, value) {
                var i,
                  name,
                  data,
                  elem = this[0],
                  attrs = elem && elem.attributes;

                // Gets all values
                if (key === undefined) {
                  if (this.length) {
                    data = dataUser.get(elem);

                    if (
                      elem.nodeType === 1 &&
                      !dataPriv.get(elem, "hasDataAttrs")
                    ) {
                      i = attrs.length;
                      while (i--) {
                        // Support: IE 11 only
                        // The attrs elements can be null (trac-14894)
                        if (attrs[i]) {
                          name = attrs[i].name;
                          if (name.indexOf("data-") === 0) {
                            name = camelCase(name.slice(5));
                            dataAttr(elem, name, data[name]);
                          }
                        }
                      }
                      dataPriv.set(elem, "hasDataAttrs", true);
                    }
                  }

                  return data;
                }

                // Sets multiple values
                if (typeof key === "object") {
                  return this.each(function () {
                    dataUser.set(this, key);
                  });
                }

                return access(
                  this,
                  function (value) {
                    var data;

                    // The calling jQuery object (element matches) is not empty
                    // (and therefore has an element appears at this[ 0 ]) and the
                    // `value` parameter was not undefined. An empty jQuery object
                    // will result in `undefined` for elem = this[ 0 ] which will
                    // throw an exception if an attempt to read a data cache is made.
                    if (elem && value === undefined) {
                      // Attempt to get data from the cache
                      // The key will always be camelCased in Data
                      data = dataUser.get(elem, key);
                      if (data !== undefined) {
                        return data;
                      }

                      // Attempt to "discover" the data in
                      // HTML5 custom data-* attrs
                      data = dataAttr(elem, key);
                      if (data !== undefined) {
                        return data;
                      }

                      // We tried really hard, but the data doesn't exist.
                      return;
                    }

                    // Set the data...
                    this.each(function () {
                      // We always store the camelCased key
                      dataUser.set(this, key, value);
                    });
                  },
                  null,
                  value,
                  arguments.length > 1,
                  null,
                  true
                );
              },

              removeData: function (key) {
                return this.each(function () {
                  dataUser.remove(this, key);
                });
              },
            });

            jQuery.extend({
              queue: function (elem, type, data) {
                var queue;

                if (elem) {
                  type = (type || "fx") + "queue";
                  queue = dataPriv.get(elem, type);

                  // Speed up dequeue by getting out quickly if this is just a lookup
                  if (data) {
                    if (!queue || Array.isArray(data)) {
                      queue = dataPriv.access(
                        elem,
                        type,
                        jQuery.makeArray(data)
                      );
                    } else {
                      queue.push(data);
                    }
                  }
                  return queue || [];
                }
              },

              dequeue: function (elem, type) {
                type = type || "fx";

                var queue = jQuery.queue(elem, type),
                  startLength = queue.length,
                  fn = queue.shift(),
                  hooks = jQuery._queueHooks(elem, type),
                  next = function () {
                    jQuery.dequeue(elem, type);
                  };

                // If the fx queue is dequeued, always remove the progress sentinel
                if (fn === "inprogress") {
                  fn = queue.shift();
                  startLength--;
                }

                if (fn) {
                  // Add a progress sentinel to prevent the fx queue from being
                  // automatically dequeued
                  if (type === "fx") {
                    queue.unshift("inprogress");
                  }

                  // Clear up the last queue stop function
                  delete hooks.stop;
                  fn.call(elem, next, hooks);
                }

                if (!startLength && hooks) {
                  hooks.empty.fire();
                }
              },

              // Not public - generate a queueHooks object, or return the current one
              _queueHooks: function (elem, type) {
                var key = type + "queueHooks";
                return (
                  dataPriv.get(elem, key) ||
                  dataPriv.access(elem, key, {
                    empty: jQuery.Callbacks("once memory").add(function () {
                      dataPriv.remove(elem, [type + "queue", key]);
                    }),
                  })
                );
              },
            });

            jQuery.fn.extend({
              queue: function (type, data) {
                var setter = 2;

                if (typeof type !== "string") {
                  data = type;
                  type = "fx";
                  setter--;
                }

                if (arguments.length < setter) {
                  return jQuery.queue(this[0], type);
                }

                return data === undefined
                  ? this
                  : this.each(function () {
                      var queue = jQuery.queue(this, type, data);

                      // Ensure a hooks for this queue
                      jQuery._queueHooks(this, type);

                      if (type === "fx" && queue[0] !== "inprogress") {
                        jQuery.dequeue(this, type);
                      }
                    });
              },
              dequeue: function (type) {
                return this.each(function () {
                  jQuery.dequeue(this, type);
                });
              },
              clearQueue: function (type) {
                return this.queue(type || "fx", []);
              },

              // Get a promise resolved when queues of a certain type
              // are emptied (fx is the type by default)
              promise: function (type, obj) {
                var tmp,
                  count = 1,
                  defer = jQuery.Deferred(),
                  elements = this,
                  i = this.length,
                  resolve = function () {
                    if (!--count) {
                      defer.resolveWith(elements, [elements]);
                    }
                  };

                if (typeof type !== "string") {
                  obj = type;
                  type = undefined;
                }
                type = type || "fx";

                while (i--) {
                  tmp = dataPriv.get(elements[i], type + "queueHooks");
                  if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                  }
                }
                resolve();
                return defer.promise(obj);
              },
            });
            var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

            var rcssNum = new RegExp(
              "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$",
              "i"
            );

            var cssExpand = ["Top", "Right", "Bottom", "Left"];

            var documentElement = document.documentElement;

            var isAttached = function (elem) {
                return jQuery.contains(elem.ownerDocument, elem);
              },
              composed = { composed: true };

            // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
            // Check attachment across shadow DOM boundaries when possible (gh-3504)
            // Support: iOS 10.0-10.2 only
            // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
            // leading to errors. We need to check for `getRootNode`.
            if (documentElement.getRootNode) {
              isAttached = function (elem) {
                return (
                  jQuery.contains(elem.ownerDocument, elem) ||
                  elem.getRootNode(composed) === elem.ownerDocument
                );
              };
            }
            var isHiddenWithinTree = function (elem, el) {
              // isHiddenWithinTree might be called from jQuery#filter function;
              // in that case, element will be second argument
              elem = el || elem;

              // Inline style trumps all
              return (
                elem.style.display === "none" ||
                (elem.style.display === "" &&
                  // Otherwise, check computed style
                  // Support: Firefox <=43 - 45
                  // Disconnected elements can have computed display: none, so first confirm that elem is
                  // in the document.
                  isAttached(elem) &&
                  jQuery.css(elem, "display") === "none")
              );
            };

            function adjustCSS(elem, prop, valueParts, tween) {
              var adjusted,
                scale,
                maxIterations = 20,
                currentValue = tween
                  ? function () {
                      return tween.cur();
                    }
                  : function () {
                      return jQuery.css(elem, prop, "");
                    },
                initial = currentValue(),
                unit =
                  (valueParts && valueParts[3]) ||
                  (jQuery.cssNumber[prop] ? "" : "px"),
                // Starting value computation is required for potential unit mismatches
                initialInUnit =
                  elem.nodeType &&
                  (jQuery.cssNumber[prop] || (unit !== "px" && +initial)) &&
                  rcssNum.exec(jQuery.css(elem, prop));

              if (initialInUnit && initialInUnit[3] !== unit) {
                // Support: Firefox <=54
                // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
                initial = initial / 2;

                // Trust units reported by jQuery.css
                unit = unit || initialInUnit[3];

                // Iteratively approximate from a nonzero starting point
                initialInUnit = +initial || 1;

                while (maxIterations--) {
                  // Evaluate and update our best guess (doubling guesses that zero out).
                  // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
                  jQuery.style(elem, prop, initialInUnit + unit);
                  if (
                    (1 - scale) *
                      (1 - (scale = currentValue() / initial || 0.5)) <=
                    0
                  ) {
                    maxIterations = 0;
                  }
                  initialInUnit = initialInUnit / scale;
                }

                initialInUnit = initialInUnit * 2;
                jQuery.style(elem, prop, initialInUnit + unit);

                // Make sure we update the tween properties later on
                valueParts = valueParts || [];
              }

              if (valueParts) {
                initialInUnit = +initialInUnit || +initial || 0;

                // Apply relative offset (+=/-=) if specified
                adjusted = valueParts[1]
                  ? initialInUnit + (valueParts[1] + 1) * valueParts[2]
                  : +valueParts[2];
                if (tween) {
                  tween.unit = unit;
                  tween.start = initialInUnit;
                  tween.end = adjusted;
                }
              }
              return adjusted;
            }

            var defaultDisplayMap = {};

            function getDefaultDisplay(elem) {
              var temp,
                doc = elem.ownerDocument,
                nodeName = elem.nodeName,
                display = defaultDisplayMap[nodeName];

              if (display) {
                return display;
              }

              temp = doc.body.appendChild(doc.createElement(nodeName));
              display = jQuery.css(temp, "display");

              temp.parentNode.removeChild(temp);

              if (display === "none") {
                display = "block";
              }
              defaultDisplayMap[nodeName] = display;

              return display;
            }

            function showHide(elements, show) {
              var display,
                elem,
                values = [],
                index = 0,
                length = elements.length;

              // Determine new display value for elements that need to change
              for (; index < length; index++) {
                elem = elements[index];
                if (!elem.style) {
                  continue;
                }

                display = elem.style.display;
                if (show) {
                  // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                  // check is required in this first loop unless we have a nonempty display value (either
                  // inline or about-to-be-restored)
                  if (display === "none") {
                    values[index] = dataPriv.get(elem, "display") || null;
                    if (!values[index]) {
                      elem.style.display = "";
                    }
                  }
                  if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                    values[index] = getDefaultDisplay(elem);
                  }
                } else {
                  if (display !== "none") {
                    values[index] = "none";

                    // Remember what we're overwriting
                    dataPriv.set(elem, "display", display);
                  }
                }
              }

              // Set the display of the elements in a second loop to avoid constant reflow
              for (index = 0; index < length; index++) {
                if (values[index] != null) {
                  elements[index].style.display = values[index];
                }
              }

              return elements;
            }

            jQuery.fn.extend({
              show: function () {
                return showHide(this, true);
              },
              hide: function () {
                return showHide(this);
              },
              toggle: function (state) {
                if (typeof state === "boolean") {
                  return state ? this.show() : this.hide();
                }

                return this.each(function () {
                  if (isHiddenWithinTree(this)) {
                    jQuery(this).show();
                  } else {
                    jQuery(this).hide();
                  }
                });
              },
            });
            var rcheckableType = /^(?:checkbox|radio)$/i;

            var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;

            var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;

            (function () {
              var fragment = document.createDocumentFragment(),
                div = fragment.appendChild(document.createElement("div")),
                input = document.createElement("input");

              // Support: Android 4.0 - 4.3 only
              // Check state lost if the name is set (trac-11217)
              // Support: Windows Web Apps (WWA)
              // `name` and `type` must use .setAttribute for WWA (trac-14901)
              input.setAttribute("type", "radio");
              input.setAttribute("checked", "checked");
              input.setAttribute("name", "t");

              div.appendChild(input);

              // Support: Android <=4.1 only
              // Older WebKit doesn't clone checked state correctly in fragments
              support.checkClone = div
                .cloneNode(true)
                .cloneNode(true).lastChild.checked;

              // Support: IE <=11 only
              // Make sure textarea (and checkbox) defaultValue is properly cloned
              div.innerHTML = "<textarea>x</textarea>";
              support.noCloneChecked =
                !!div.cloneNode(true).lastChild.defaultValue;

              // Support: IE <=9 only
              // IE <=9 replaces <option> tags with their contents when inserted outside of
              // the select element.
              div.innerHTML = "<option></option>";
              support.option = !!div.lastChild;
            })();

            // We have to close these tags to support XHTML (trac-13200)
            var wrapMap = {
              // XHTML parsers do not magically insert elements in the
              // same way that tag soup parsers do. So we cannot shorten
              // this by omitting <tbody> or other required elements.
              thead: [1, "<table>", "</table>"],
              col: [2, "<table><colgroup>", "</colgroup></table>"],
              tr: [2, "<table><tbody>", "</tbody></table>"],
              td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

              _default: [0, "", ""],
            };

            wrapMap.tbody =
              wrapMap.tfoot =
              wrapMap.colgroup =
              wrapMap.caption =
                wrapMap.thead;
            wrapMap.th = wrapMap.td;

            // Support: IE <=9 only
            if (!support.option) {
              wrapMap.optgroup = wrapMap.option = [
                1,
                "<select multiple='multiple'>",
                "</select>",
              ];
            }

            function getAll(context, tag) {
              // Support: IE <=9 - 11 only
              // Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
              var ret;

              if (typeof context.getElementsByTagName !== "undefined") {
                ret = context.getElementsByTagName(tag || "*");
              } else if (typeof context.querySelectorAll !== "undefined") {
                ret = context.querySelectorAll(tag || "*");
              } else {
                ret = [];
              }

              if (tag === undefined || (tag && nodeName(context, tag))) {
                return jQuery.merge([context], ret);
              }

              return ret;
            }

            // Mark scripts as having already been evaluated
            function setGlobalEval(elems, refElements) {
              var i = 0,
                l = elems.length;

              for (; i < l; i++) {
                dataPriv.set(
                  elems[i],
                  "globalEval",
                  !refElements || dataPriv.get(refElements[i], "globalEval")
                );
              }
            }

            var rhtml = /<|&#?\w+;/;

            function buildFragment(
              elems,
              context,
              scripts,
              selection,
              ignored
            ) {
              var elem,
                tmp,
                tag,
                wrap,
                attached,
                j,
                fragment = context.createDocumentFragment(),
                nodes = [],
                i = 0,
                l = elems.length;

              for (; i < l; i++) {
                elem = elems[i];

                if (elem || elem === 0) {
                  // Add nodes directly
                  if (toType(elem) === "object") {
                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

                    // Convert non-html into a text node
                  } else if (!rhtml.test(elem)) {
                    nodes.push(context.createTextNode(elem));

                    // Convert html into DOM nodes
                  } else {
                    tmp =
                      tmp || fragment.appendChild(context.createElement("div"));

                    // Deserialize a standard representation
                    tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                    wrap = wrapMap[tag] || wrapMap._default;
                    tmp.innerHTML =
                      wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

                    // Descend through wrappers to the right content
                    j = wrap[0];
                    while (j--) {
                      tmp = tmp.lastChild;
                    }

                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, tmp.childNodes);

                    // Remember the top-level container
                    tmp = fragment.firstChild;

                    // Ensure the created nodes are orphaned (trac-12392)
                    tmp.textContent = "";
                  }
                }
              }

              // Remove wrapper from fragment
              fragment.textContent = "";

              i = 0;
              while ((elem = nodes[i++])) {
                // Skip elements already in the context collection (trac-4087)
                if (selection && jQuery.inArray(elem, selection) > -1) {
                  if (ignored) {
                    ignored.push(elem);
                  }
                  continue;
                }

                attached = isAttached(elem);

                // Append to fragment
                tmp = getAll(fragment.appendChild(elem), "script");

                // Preserve script evaluation history
                if (attached) {
                  setGlobalEval(tmp);
                }

                // Capture executables
                if (scripts) {
                  j = 0;
                  while ((elem = tmp[j++])) {
                    if (rscriptType.test(elem.type || "")) {
                      scripts.push(elem);
                    }
                  }
                }
              }

              return fragment;
            }

            var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

            function returnTrue() {
              return true;
            }

            function returnFalse() {
              return false;
            }

            // Support: IE <=9 - 11+
            // focus() and blur() are asynchronous, except when they are no-op.
            // So expect focus to be synchronous when the element is already active,
            // and blur to be synchronous when the element is not already active.
            // (focus and blur are always synchronous in other supported browsers,
            // this just defines when we can count on it).
            function expectSync(elem, type) {
              return (elem === safeActiveElement()) === (type === "focus");
            }

            // Support: IE <=9 only
            // Accessing document.activeElement can throw unexpectedly
            // https://bugs.jquery.com/ticket/13393
            function safeActiveElement() {
              try {
                return document.activeElement;
              } catch (err) {}
            }

            function on(elem, types, selector, data, fn, one) {
              var origFn, type;

              // Types can be a map of types/handlers
              if (typeof types === "object") {
                // ( types-Object, selector, data )
                if (typeof selector !== "string") {
                  // ( types-Object, data )
                  data = data || selector;
                  selector = undefined;
                }
                for (type in types) {
                  on(elem, type, selector, data, types[type], one);
                }
                return elem;
              }

              if (data == null && fn == null) {
                // ( types, fn )
                fn = selector;
                data = selector = undefined;
              } else if (fn == null) {
                if (typeof selector === "string") {
                  // ( types, selector, fn )
                  fn = data;
                  data = undefined;
                } else {
                  // ( types, data, fn )
                  fn = data;
                  data = selector;
                  selector = undefined;
                }
              }
              if (fn === false) {
                fn = returnFalse;
              } else if (!fn) {
                return elem;
              }

              if (one === 1) {
                origFn = fn;
                fn = function (event) {
                  // Can use an empty set, since event contains the info
                  jQuery().off(event);
                  return origFn.apply(this, arguments);
                };

                // Use same guid so caller can remove using origFn
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
              }
              return elem.each(function () {
                jQuery.event.add(this, types, fn, data, selector);
              });
            }

            /*
             * Helper functions for managing events -- not part of the public interface.
             * Props to Dean Edwards' addEvent library for many of the ideas.
             */
            jQuery.event = {
              global: {},

              add: function (elem, types, handler, data, selector) {
                var handleObjIn,
                  eventHandle,
                  tmp,
                  events,
                  t,
                  handleObj,
                  special,
                  handlers,
                  type,
                  namespaces,
                  origType,
                  elemData = dataPriv.get(elem);

                // Only attach events to objects that accept data
                if (!acceptData(elem)) {
                  return;
                }

                // Caller can pass in an object of custom data in lieu of the handler
                if (handler.handler) {
                  handleObjIn = handler;
                  handler = handleObjIn.handler;
                  selector = handleObjIn.selector;
                }

                // Ensure that invalid selectors throw exceptions at attach time
                // Evaluate against documentElement in case elem is a non-element node (e.g., document)
                if (selector) {
                  jQuery.find.matchesSelector(documentElement, selector);
                }

                // Make sure that the handler has a unique ID, used to find/remove it later
                if (!handler.guid) {
                  handler.guid = jQuery.guid++;
                }

                // Init the element's event structure and main handler, if this is the first
                if (!(events = elemData.events)) {
                  events = elemData.events = Object.create(null);
                }
                if (!(eventHandle = elemData.handle)) {
                  eventHandle = elemData.handle = function (e) {
                    // Discard the second event of a jQuery.event.trigger() and
                    // when an event is called after a page has unloaded
                    return typeof jQuery !== "undefined" &&
                      jQuery.event.triggered !== e.type
                      ? jQuery.event.dispatch.apply(elem, arguments)
                      : undefined;
                  };
                }

                // Handle multiple events separated by a space
                types = (types || "").match(rnothtmlwhite) || [""];
                t = types.length;
                while (t--) {
                  tmp = rtypenamespace.exec(types[t]) || [];
                  type = origType = tmp[1];
                  namespaces = (tmp[2] || "").split(".").sort();

                  // There *must* be a type, no attaching namespace-only handlers
                  if (!type) {
                    continue;
                  }

                  // If event changes its type, use the special event handlers for the changed type
                  special = jQuery.event.special[type] || {};

                  // If selector defined, determine special event api type, otherwise given type
                  type =
                    (selector ? special.delegateType : special.bindType) ||
                    type;

                  // Update special based on newly reset type
                  special = jQuery.event.special[type] || {};

                  // handleObj is passed to all event handlers
                  handleObj = jQuery.extend(
                    {
                      type: type,
                      origType: origType,
                      data: data,
                      handler: handler,
                      guid: handler.guid,
                      selector: selector,
                      needsContext:
                        selector &&
                        jQuery.expr.match.needsContext.test(selector),
                      namespace: namespaces.join("."),
                    },
                    handleObjIn
                  );

                  // Init the event handler queue if we're the first
                  if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;

                    // Only use addEventListener if the special events handler returns false
                    if (
                      !special.setup ||
                      special.setup.call(
                        elem,
                        data,
                        namespaces,
                        eventHandle
                      ) === false
                    ) {
                      if (elem.addEventListener) {
                        elem.addEventListener(type, eventHandle);
                      }
                    }
                  }

                  if (special.add) {
                    special.add.call(elem, handleObj);

                    if (!handleObj.handler.guid) {
                      handleObj.handler.guid = handler.guid;
                    }
                  }

                  // Add to the element's handler list, delegates in front
                  if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj);
                  } else {
                    handlers.push(handleObj);
                  }

                  // Keep track of which events have ever been used, for event optimization
                  jQuery.event.global[type] = true;
                }
              },

              // Detach an event or set of events from an element
              remove: function (elem, types, handler, selector, mappedTypes) {
                var j,
                  origCount,
                  tmp,
                  events,
                  t,
                  handleObj,
                  special,
                  handlers,
                  type,
                  namespaces,
                  origType,
                  elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

                if (!elemData || !(events = elemData.events)) {
                  return;
                }

                // Once for each type.namespace in types; type may be omitted
                types = (types || "").match(rnothtmlwhite) || [""];
                t = types.length;
                while (t--) {
                  tmp = rtypenamespace.exec(types[t]) || [];
                  type = origType = tmp[1];
                  namespaces = (tmp[2] || "").split(".").sort();

                  // Unbind all events (on this namespace, if provided) for the element
                  if (!type) {
                    for (type in events) {
                      jQuery.event.remove(
                        elem,
                        type + types[t],
                        handler,
                        selector,
                        true
                      );
                    }
                    continue;
                  }

                  special = jQuery.event.special[type] || {};
                  type =
                    (selector ? special.delegateType : special.bindType) ||
                    type;
                  handlers = events[type] || [];
                  tmp =
                    tmp[2] &&
                    new RegExp(
                      "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"
                    );

                  // Remove matching events
                  origCount = j = handlers.length;
                  while (j--) {
                    handleObj = handlers[j];

                    if (
                      (mappedTypes || origType === handleObj.origType) &&
                      (!handler || handler.guid === handleObj.guid) &&
                      (!tmp || tmp.test(handleObj.namespace)) &&
                      (!selector ||
                        selector === handleObj.selector ||
                        (selector === "**" && handleObj.selector))
                    ) {
                      handlers.splice(j, 1);

                      if (handleObj.selector) {
                        handlers.delegateCount--;
                      }
                      if (special.remove) {
                        special.remove.call(elem, handleObj);
                      }
                    }
                  }

                  // Remove generic event handler if we removed something and no more handlers exist
                  // (avoids potential for endless recursion during removal of special event handlers)
                  if (origCount && !handlers.length) {
                    if (
                      !special.teardown ||
                      special.teardown.call(
                        elem,
                        namespaces,
                        elemData.handle
                      ) === false
                    ) {
                      jQuery.removeEvent(elem, type, elemData.handle);
                    }

                    delete events[type];
                  }
                }

                // Remove data and the expando if it's no longer used
                if (jQuery.isEmptyObject(events)) {
                  dataPriv.remove(elem, "handle events");
                }
              },

              dispatch: function (nativeEvent) {
                var i,
                  j,
                  ret,
                  matched,
                  handleObj,
                  handlerQueue,
                  args = new Array(arguments.length),
                  // Make a writable jQuery.Event from the native event object
                  event = jQuery.event.fix(nativeEvent),
                  handlers =
                    (dataPriv.get(this, "events") || Object.create(null))[
                      event.type
                    ] || [],
                  special = jQuery.event.special[event.type] || {};

                // Use the fix-ed jQuery.Event rather than the (read-only) native event
                args[0] = event;

                for (i = 1; i < arguments.length; i++) {
                  args[i] = arguments[i];
                }

                event.delegateTarget = this;

                // Call the preDispatch hook for the mapped type, and let it bail if desired
                if (
                  special.preDispatch &&
                  special.preDispatch.call(this, event) === false
                ) {
                  return;
                }

                // Determine handlers
                handlerQueue = jQuery.event.handlers.call(
                  this,
                  event,
                  handlers
                );

                // Run delegates first; they may want to stop propagation beneath us
                i = 0;
                while (
                  (matched = handlerQueue[i++]) &&
                  !event.isPropagationStopped()
                ) {
                  event.currentTarget = matched.elem;

                  j = 0;
                  while (
                    (handleObj = matched.handlers[j++]) &&
                    !event.isImmediatePropagationStopped()
                  ) {
                    // If the event is namespaced, then each handler is only invoked if it is
                    // specially universal or its namespaces are a superset of the event's.
                    if (
                      !event.rnamespace ||
                      handleObj.namespace === false ||
                      event.rnamespace.test(handleObj.namespace)
                    ) {
                      event.handleObj = handleObj;
                      event.data = handleObj.data;

                      ret = (
                        (jQuery.event.special[handleObj.origType] || {})
                          .handle || handleObj.handler
                      ).apply(matched.elem, args);

                      if (ret !== undefined) {
                        if ((event.result = ret) === false) {
                          event.preventDefault();
                          event.stopPropagation();
                        }
                      }
                    }
                  }
                }

                // Call the postDispatch hook for the mapped type
                if (special.postDispatch) {
                  special.postDispatch.call(this, event);
                }

                return event.result;
              },

              handlers: function (event, handlers) {
                var i,
                  handleObj,
                  sel,
                  matchedHandlers,
                  matchedSelectors,
                  handlerQueue = [],
                  delegateCount = handlers.delegateCount,
                  cur = event.target;

                // Find delegate handlers
                if (
                  delegateCount &&
                  // Support: IE <=9
                  // Black-hole SVG <use> instance trees (trac-13180)
                  cur.nodeType &&
                  // Support: Firefox <=42
                  // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
                  // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
                  // Support: IE 11 only
                  // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
                  !(event.type === "click" && event.button >= 1)
                ) {
                  for (; cur !== this; cur = cur.parentNode || this) {
                    // Don't check non-elements (trac-13208)
                    // Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
                    if (
                      cur.nodeType === 1 &&
                      !(event.type === "click" && cur.disabled === true)
                    ) {
                      matchedHandlers = [];
                      matchedSelectors = {};
                      for (i = 0; i < delegateCount; i++) {
                        handleObj = handlers[i];

                        // Don't conflict with Object.prototype properties (trac-13203)
                        sel = handleObj.selector + " ";

                        if (matchedSelectors[sel] === undefined) {
                          matchedSelectors[sel] = handleObj.needsContext
                            ? jQuery(sel, this).index(cur) > -1
                            : jQuery.find(sel, this, null, [cur]).length;
                        }
                        if (matchedSelectors[sel]) {
                          matchedHandlers.push(handleObj);
                        }
                      }
                      if (matchedHandlers.length) {
                        handlerQueue.push({
                          elem: cur,
                          handlers: matchedHandlers,
                        });
                      }
                    }
                  }
                }

                // Add the remaining (directly-bound) handlers
                cur = this;
                if (delegateCount < handlers.length) {
                  handlerQueue.push({
                    elem: cur,
                    handlers: handlers.slice(delegateCount),
                  });
                }

                return handlerQueue;
              },

              addProp: function (name, hook) {
                Object.defineProperty(jQuery.Event.prototype, name, {
                  enumerable: true,
                  configurable: true,

                  get: isFunction(hook)
                    ? function () {
                        if (this.originalEvent) {
                          return hook(this.originalEvent);
                        }
                      }
                    : function () {
                        if (this.originalEvent) {
                          return this.originalEvent[name];
                        }
                      },

                  set: function (value) {
                    Object.defineProperty(this, name, {
                      enumerable: true,
                      configurable: true,
                      writable: true,
                      value: value,
                    });
                  },
                });
              },

              fix: function (originalEvent) {
                return originalEvent[jQuery.expando]
                  ? originalEvent
                  : new jQuery.Event(originalEvent);
              },

              special: {
                load: {
                  // Prevent triggered image.load events from bubbling to window.load
                  noBubble: true,
                },
                click: {
                  // Utilize native event to ensure correct state for checkable inputs
                  setup: function (data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;

                    // Claim the first handler
                    if (
                      rcheckableType.test(el.type) &&
                      el.click &&
                      nodeName(el, "input")
                    ) {
                      // dataPriv.set( el, "click", ... )
                      leverageNative(el, "click", returnTrue);
                    }

                    // Return false to allow normal processing in the caller
                    return false;
                  },
                  trigger: function (data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;

                    // Force setup before triggering a click
                    if (
                      rcheckableType.test(el.type) &&
                      el.click &&
                      nodeName(el, "input")
                    ) {
                      leverageNative(el, "click");
                    }

                    // Return non-false to allow normal event-path propagation
                    return true;
                  },

                  // For cross-browser consistency, suppress native .click() on links
                  // Also prevent it if we're currently inside a leveraged native-event stack
                  _default: function (event) {
                    var target = event.target;
                    return (
                      (rcheckableType.test(target.type) &&
                        target.click &&
                        nodeName(target, "input") &&
                        dataPriv.get(target, "click")) ||
                      nodeName(target, "a")
                    );
                  },
                },

                beforeunload: {
                  postDispatch: function (event) {
                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if (event.result !== undefined && event.originalEvent) {
                      event.originalEvent.returnValue = event.result;
                    }
                  },
                },
              },
            };

            // Ensure the presence of an event listener that handles manually-triggered
            // synthetic events by interrupting progress until reinvoked in response to
            // *native* events that it fires directly, ensuring that state changes have
            // already occurred before other listeners are invoked.
            function leverageNative(el, type, expectSync) {
              // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
              if (!expectSync) {
                if (dataPriv.get(el, type) === undefined) {
                  jQuery.event.add(el, type, returnTrue);
                }
                return;
              }

              // Register the controller as a special universal handler for all event namespaces
              dataPriv.set(el, type, false);
              jQuery.event.add(el, type, {
                namespace: false,
                handler: function (event) {
                  var notAsync,
                    result,
                    saved = dataPriv.get(this, type);

                  if (event.isTrigger & 1 && this[type]) {
                    // Interrupt processing of the outer synthetic .trigger()ed event
                    // Saved data should be false in such cases, but might be a leftover capture object
                    // from an async native handler (gh-4350)
                    if (!saved.length) {
                      // Store arguments for use when handling the inner native event
                      // There will always be at least one argument (an event object), so this array
                      // will not be confused with a leftover capture object.
                      saved = slice.call(arguments);
                      dataPriv.set(this, type, saved);

                      // Trigger the native event and capture its result
                      // Support: IE <=9 - 11+
                      // focus() and blur() are asynchronous
                      notAsync = expectSync(this, type);
                      this[type]();
                      result = dataPriv.get(this, type);
                      if (saved !== result || notAsync) {
                        dataPriv.set(this, type, false);
                      } else {
                        result = {};
                      }
                      if (saved !== result) {
                        // Cancel the outer synthetic event
                        event.stopImmediatePropagation();
                        event.preventDefault();

                        // Support: Chrome 86+
                        // In Chrome, if an element having a focusout handler is blurred by
                        // clicking outside of it, it invokes the handler synchronously. If
                        // that handler calls `.remove()` on the element, the data is cleared,
                        // leaving `result` undefined. We need to guard against this.
                        return result && result.value;
                      }

                      // If this is an inner synthetic event for an event with a bubbling surrogate
                      // (focus or blur), assume that the surrogate already propagated from triggering the
                      // native event and prevent that from happening again here.
                      // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
                      // bubbling surrogate propagates *after* the non-bubbling base), but that seems
                      // less bad than duplication.
                    } else if (
                      (jQuery.event.special[type] || {}).delegateType
                    ) {
                      event.stopPropagation();
                    }

                    // If this is a native event triggered above, everything is now in order
                    // Fire an inner synthetic event with the original arguments
                  } else if (saved.length) {
                    // ...and capture the result
                    dataPriv.set(this, type, {
                      value: jQuery.event.trigger(
                        // Support: IE <=9 - 11+
                        // Extend with the prototype to reset the above stopImmediatePropagation()
                        jQuery.extend(saved[0], jQuery.Event.prototype),
                        saved.slice(1),
                        this
                      ),
                    });

                    // Abort handling of the native event
                    event.stopImmediatePropagation();
                  }
                },
              });
            }

            jQuery.removeEvent = function (elem, type, handle) {
              // This "if" is needed for plain objects
              if (elem.removeEventListener) {
                elem.removeEventListener(type, handle);
              }
            };

            jQuery.Event = function (src, props) {
              // Allow instantiation without the 'new' keyword
              if (!(this instanceof jQuery.Event)) {
                return new jQuery.Event(src, props);
              }

              // Event object
              if (src && src.type) {
                this.originalEvent = src;
                this.type = src.type;

                // Events bubbling up the document may have been marked as prevented
                // by a handler lower down the tree; reflect the correct value.
                this.isDefaultPrevented =
                  src.defaultPrevented ||
                  (src.defaultPrevented === undefined &&
                    // Support: Android <=2.3 only
                    src.returnValue === false)
                    ? returnTrue
                    : returnFalse;

                // Create target properties
                // Support: Safari <=6 - 7 only
                // Target should not be a text node (trac-504, trac-13143)
                this.target =
                  src.target && src.target.nodeType === 3
                    ? src.target.parentNode
                    : src.target;

                this.currentTarget = src.currentTarget;
                this.relatedTarget = src.relatedTarget;

                // Event type
              } else {
                this.type = src;
              }

              // Put explicitly provided properties onto the event object
              if (props) {
                jQuery.extend(this, props);
              }

              // Create a timestamp if incoming event doesn't have one
              this.timeStamp = (src && src.timeStamp) || Date.now();

              // Mark it as fixed
              this[jQuery.expando] = true;
            };

            // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
            // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
            jQuery.Event.prototype = {
              constructor: jQuery.Event,
              isDefaultPrevented: returnFalse,
              isPropagationStopped: returnFalse,
              isImmediatePropagationStopped: returnFalse,
              isSimulated: false,

              preventDefault: function () {
                var e = this.originalEvent;

                this.isDefaultPrevented = returnTrue;

                if (e && !this.isSimulated) {
                  e.preventDefault();
                }
              },
              stopPropagation: function () {
                var e = this.originalEvent;

                this.isPropagationStopped = returnTrue;

                if (e && !this.isSimulated) {
                  e.stopPropagation();
                }
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;

                this.isImmediatePropagationStopped = returnTrue;

                if (e && !this.isSimulated) {
                  e.stopImmediatePropagation();
                }

                this.stopPropagation();
              },
            };

            // Includes all common event props including KeyEvent and MouseEvent specific props
            jQuery.each(
              {
                altKey: true,
                bubbles: true,
                cancelable: true,
                changedTouches: true,
                ctrlKey: true,
                detail: true,
                eventPhase: true,
                metaKey: true,
                pageX: true,
                pageY: true,
                shiftKey: true,
                view: true,
                char: true,
                code: true,
                charCode: true,
                key: true,
                keyCode: true,
                button: true,
                buttons: true,
                clientX: true,
                clientY: true,
                offsetX: true,
                offsetY: true,
                pointerId: true,
                pointerType: true,
                screenX: true,
                screenY: true,
                targetTouches: true,
                toElement: true,
                touches: true,
                which: true,
              },
              jQuery.event.addProp
            );

            jQuery.each(
              { focus: "focusin", blur: "focusout" },
              function (type, delegateType) {
                jQuery.event.special[type] = {
                  // Utilize native event if possible so blur/focus sequence is correct
                  setup: function () {
                    // Claim the first handler
                    // dataPriv.set( this, "focus", ... )
                    // dataPriv.set( this, "blur", ... )
                    leverageNative(this, type, expectSync);

                    // Return false to allow normal processing in the caller
                    return false;
                  },
                  trigger: function () {
                    // Force setup before trigger
                    leverageNative(this, type);

                    // Return non-false to allow normal event-path propagation
                    return true;
                  },

                  // Suppress native focus or blur if we're currently inside
                  // a leveraged native-event stack
                  _default: function (event) {
                    return dataPriv.get(event.target, type);
                  },

                  delegateType: delegateType,
                };
              }
            );

            // Create mouseenter/leave events using mouseover/out and event-time checks
            // so that event delegation works in jQuery.
            // Do the same for pointerenter/pointerleave and pointerover/pointerout
            //
            // Support: Safari 7 only
            // Safari sends mouseenter too often; see:
            // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
            // for the description of the bug (it existed in older Chrome versions as well).
            jQuery.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (orig, fix) {
                jQuery.event.special[orig] = {
                  delegateType: fix,
                  bindType: fix,

                  handle: function (event) {
                    var ret,
                      target = this,
                      related = event.relatedTarget,
                      handleObj = event.handleObj;

                    // For mouseenter/leave call the handler if related is outside the target.
                    // NB: No relatedTarget if the mouse left/entered the browser window
                    if (
                      !related ||
                      (related !== target && !jQuery.contains(target, related))
                    ) {
                      event.type = handleObj.origType;
                      ret = handleObj.handler.apply(this, arguments);
                      event.type = fix;
                    }
                    return ret;
                  },
                };
              }
            );

            jQuery.fn.extend({
              on: function (types, selector, data, fn) {
                return on(this, types, selector, data, fn);
              },
              one: function (types, selector, data, fn) {
                return on(this, types, selector, data, fn, 1);
              },
              off: function (types, selector, fn) {
                var handleObj, type;
                if (types && types.preventDefault && types.handleObj) {
                  // ( event )  dispatched jQuery.Event
                  handleObj = types.handleObj;
                  jQuery(types.delegateTarget).off(
                    handleObj.namespace
                      ? handleObj.origType + "." + handleObj.namespace
                      : handleObj.origType,
                    handleObj.selector,
                    handleObj.handler
                  );
                  return this;
                }
                if (typeof types === "object") {
                  // ( types-object [, selector] )
                  for (type in types) {
                    this.off(type, selector, types[type]);
                  }
                  return this;
                }
                if (selector === false || typeof selector === "function") {
                  // ( types [, fn] )
                  fn = selector;
                  selector = undefined;
                }
                if (fn === false) {
                  fn = returnFalse;
                }
                return this.each(function () {
                  jQuery.event.remove(this, types, fn, selector);
                });
              },
            });

            var // Support: IE <=10 - 11, Edge 12 - 13 only
              // In IE/Edge using regex groups here causes severe slowdowns.
              // See https://connect.microsoft.com/IE/feedback/details/1736512/
              rnoInnerhtml = /<script|<style|<link/i,
              // checked="checked" or checked
              rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
              rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

            // Prefer a tbody over its parent table for containing new rows
            function manipulationTarget(elem, content) {
              if (
                nodeName(elem, "table") &&
                nodeName(
                  content.nodeType !== 11 ? content : content.firstChild,
                  "tr"
                )
              ) {
                return jQuery(elem).children("tbody")[0] || elem;
              }

              return elem;
            }

            // Replace/restore the type attribute of script elements for safe DOM manipulation
            function disableScript(elem) {
              elem.type =
                (elem.getAttribute("type") !== null) + "/" + elem.type;
              return elem;
            }
            function restoreScript(elem) {
              if ((elem.type || "").slice(0, 5) === "true/") {
                elem.type = elem.type.slice(5);
              } else {
                elem.removeAttribute("type");
              }

              return elem;
            }

            function cloneCopyEvent(src, dest) {
              var i, l, type, pdataOld, udataOld, udataCur, events;

              if (dest.nodeType !== 1) {
                return;
              }

              // 1. Copy private data: events, handlers, etc.
              if (dataPriv.hasData(src)) {
                pdataOld = dataPriv.get(src);
                events = pdataOld.events;

                if (events) {
                  dataPriv.remove(dest, "handle events");

                  for (type in events) {
                    for (i = 0, l = events[type].length; i < l; i++) {
                      jQuery.event.add(dest, type, events[type][i]);
                    }
                  }
                }
              }

              // 2. Copy user data
              if (dataUser.hasData(src)) {
                udataOld = dataUser.access(src);
                udataCur = jQuery.extend({}, udataOld);

                dataUser.set(dest, udataCur);
              }
            }

            // Fix IE bugs, see support tests
            function fixInput(src, dest) {
              var nodeName = dest.nodeName.toLowerCase();

              // Fails to persist the checked state of a cloned checkbox or radio button.
              if (nodeName === "input" && rcheckableType.test(src.type)) {
                dest.checked = src.checked;

                // Fails to return the selected option to the default selected state when cloning options
              } else if (nodeName === "input" || nodeName === "textarea") {
                dest.defaultValue = src.defaultValue;
              }
            }

            function domManip(collection, args, callback, ignored) {
              // Flatten any nested arrays
              args = flat(args);

              var fragment,
                first,
                scripts,
                hasScripts,
                node,
                doc,
                i = 0,
                l = collection.length,
                iNoClone = l - 1,
                value = args[0],
                valueIsFunction = isFunction(value);

              // We can't cloneNode fragments that contain checked, in WebKit
              if (
                valueIsFunction ||
                (l > 1 &&
                  typeof value === "string" &&
                  !support.checkClone &&
                  rchecked.test(value))
              ) {
                return collection.each(function (index) {
                  var self = collection.eq(index);
                  if (valueIsFunction) {
                    args[0] = value.call(this, index, self.html());
                  }
                  domManip(self, args, callback, ignored);
                });
              }

              if (l) {
                fragment = buildFragment(
                  args,
                  collection[0].ownerDocument,
                  false,
                  collection,
                  ignored
                );
                first = fragment.firstChild;

                if (fragment.childNodes.length === 1) {
                  fragment = first;
                }

                // Require either new content or an interest in ignored elements to invoke the callback
                if (first || ignored) {
                  scripts = jQuery.map(
                    getAll(fragment, "script"),
                    disableScript
                  );
                  hasScripts = scripts.length;

                  // Use the original fragment for the last item
                  // instead of the first because it can end up
                  // being emptied incorrectly in certain situations (trac-8070).
                  for (; i < l; i++) {
                    node = fragment;

                    if (i !== iNoClone) {
                      node = jQuery.clone(node, true, true);

                      // Keep references to cloned scripts for later restoration
                      if (hasScripts) {
                        // Support: Android <=4.0 only, PhantomJS 1 only
                        // push.apply(_, arraylike) throws on ancient WebKit
                        jQuery.merge(scripts, getAll(node, "script"));
                      }
                    }

                    callback.call(collection[i], node, i);
                  }

                  if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument;

                    // Reenable scripts
                    jQuery.map(scripts, restoreScript);

                    // Evaluate executable scripts on first document insertion
                    for (i = 0; i < hasScripts; i++) {
                      node = scripts[i];
                      if (
                        rscriptType.test(node.type || "") &&
                        !dataPriv.access(node, "globalEval") &&
                        jQuery.contains(doc, node)
                      ) {
                        if (
                          node.src &&
                          (node.type || "").toLowerCase() !== "module"
                        ) {
                          // Optional AJAX dependency, but won't run scripts if not present
                          if (jQuery._evalUrl && !node.noModule) {
                            jQuery._evalUrl(
                              node.src,
                              {
                                nonce: node.nonce || node.getAttribute("nonce"),
                              },
                              doc
                            );
                          }
                        } else {
                          // Unwrap a CDATA section containing script contents. This shouldn't be
                          // needed as in XML documents they're already not visible when
                          // inspecting element contents and in HTML documents they have no
                          // meaning but we're preserving that logic for backwards compatibility.
                          // This will be removed completely in 4.0. See gh-4904.
                          DOMEval(
                            node.textContent.replace(rcleanScript, ""),
                            node,
                            doc
                          );
                        }
                      }
                    }
                  }
                }
              }

              return collection;
            }

            function remove(elem, selector, keepData) {
              var node,
                nodes = selector ? jQuery.filter(selector, elem) : elem,
                i = 0;

              for (; (node = nodes[i]) != null; i++) {
                if (!keepData && node.nodeType === 1) {
                  jQuery.cleanData(getAll(node));
                }

                if (node.parentNode) {
                  if (keepData && isAttached(node)) {
                    setGlobalEval(getAll(node, "script"));
                  }
                  node.parentNode.removeChild(node);
                }
              }

              return elem;
            }

            jQuery.extend({
              htmlPrefilter: function (html) {
                return html;
              },

              clone: function (elem, dataAndEvents, deepDataAndEvents) {
                var i,
                  l,
                  srcElements,
                  destElements,
                  clone = elem.cloneNode(true),
                  inPage = isAttached(elem);

                // Fix IE cloning issues
                if (
                  !support.noCloneChecked &&
                  (elem.nodeType === 1 || elem.nodeType === 11) &&
                  !jQuery.isXMLDoc(elem)
                ) {
                  // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
                  destElements = getAll(clone);
                  srcElements = getAll(elem);

                  for (i = 0, l = srcElements.length; i < l; i++) {
                    fixInput(srcElements[i], destElements[i]);
                  }
                }

                // Copy the events from the original to the clone
                if (dataAndEvents) {
                  if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);

                    for (i = 0, l = srcElements.length; i < l; i++) {
                      cloneCopyEvent(srcElements[i], destElements[i]);
                    }
                  } else {
                    cloneCopyEvent(elem, clone);
                  }
                }

                // Preserve script evaluation history
                destElements = getAll(clone, "script");
                if (destElements.length > 0) {
                  setGlobalEval(
                    destElements,
                    !inPage && getAll(elem, "script")
                  );
                }

                // Return the cloned set
                return clone;
              },

              cleanData: function (elems) {
                var data,
                  elem,
                  type,
                  special = jQuery.event.special,
                  i = 0;

                for (; (elem = elems[i]) !== undefined; i++) {
                  if (acceptData(elem)) {
                    if ((data = elem[dataPriv.expando])) {
                      if (data.events) {
                        for (type in data.events) {
                          if (special[type]) {
                            jQuery.event.remove(elem, type);

                            // This is a shortcut to avoid jQuery.event.remove's overhead
                          } else {
                            jQuery.removeEvent(elem, type, data.handle);
                          }
                        }
                      }

                      // Support: Chrome <=35 - 45+
                      // Assign undefined instead of using delete, see Data#remove
                      elem[dataPriv.expando] = undefined;
                    }
                    if (elem[dataUser.expando]) {
                      // Support: Chrome <=35 - 45+
                      // Assign undefined instead of using delete, see Data#remove
                      elem[dataUser.expando] = undefined;
                    }
                  }
                }
              },
            });

            jQuery.fn.extend({
              detach: function (selector) {
                return remove(this, selector, true);
              },

              remove: function (selector) {
                return remove(this, selector);
              },

              text: function (value) {
                return access(
                  this,
                  function (value) {
                    return value === undefined
                      ? jQuery.text(this)
                      : this.empty().each(function () {
                          if (
                            this.nodeType === 1 ||
                            this.nodeType === 11 ||
                            this.nodeType === 9
                          ) {
                            this.textContent = value;
                          }
                        });
                  },
                  null,
                  value,
                  arguments.length
                );
              },

              append: function () {
                return domManip(this, arguments, function (elem) {
                  if (
                    this.nodeType === 1 ||
                    this.nodeType === 11 ||
                    this.nodeType === 9
                  ) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                  }
                });
              },

              prepend: function () {
                return domManip(this, arguments, function (elem) {
                  if (
                    this.nodeType === 1 ||
                    this.nodeType === 11 ||
                    this.nodeType === 9
                  ) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                  }
                });
              },

              before: function () {
                return domManip(this, arguments, function (elem) {
                  if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this);
                  }
                });
              },

              after: function () {
                return domManip(this, arguments, function (elem) {
                  if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                  }
                });
              },

              empty: function () {
                var elem,
                  i = 0;

                for (; (elem = this[i]) != null; i++) {
                  if (elem.nodeType === 1) {
                    // Prevent memory leaks
                    jQuery.cleanData(getAll(elem, false));

                    // Remove any remaining nodes
                    elem.textContent = "";
                  }
                }

                return this;
              },

              clone: function (dataAndEvents, deepDataAndEvents) {
                dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                deepDataAndEvents =
                  deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

                return this.map(function () {
                  return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                });
              },

              html: function (value) {
                return access(
                  this,
                  function (value) {
                    var elem = this[0] || {},
                      i = 0,
                      l = this.length;

                    if (value === undefined && elem.nodeType === 1) {
                      return elem.innerHTML;
                    }

                    // See if we can take a shortcut and just use innerHTML
                    if (
                      typeof value === "string" &&
                      !rnoInnerhtml.test(value) &&
                      !wrapMap[
                        (rtagName.exec(value) || ["", ""])[1].toLowerCase()
                      ]
                    ) {
                      value = jQuery.htmlPrefilter(value);

                      try {
                        for (; i < l; i++) {
                          elem = this[i] || {};

                          // Remove element nodes and prevent memory leaks
                          if (elem.nodeType === 1) {
                            jQuery.cleanData(getAll(elem, false));
                            elem.innerHTML = value;
                          }
                        }

                        elem = 0;

                        // If using innerHTML throws an exception, use the fallback method
                      } catch (e) {}
                    }

                    if (elem) {
                      this.empty().append(value);
                    }
                  },
                  null,
                  value,
                  arguments.length
                );
              },

              replaceWith: function () {
                var ignored = [];

                // Make the changes, replacing each non-ignored context element with the new content
                return domManip(
                  this,
                  arguments,
                  function (elem) {
                    var parent = this.parentNode;

                    if (jQuery.inArray(this, ignored) < 0) {
                      jQuery.cleanData(getAll(this));
                      if (parent) {
                        parent.replaceChild(elem, this);
                      }
                    }

                    // Force callback invocation
                  },
                  ignored
                );
              },
            });

            jQuery.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (name, original) {
                jQuery.fn[name] = function (selector) {
                  var elems,
                    ret = [],
                    insert = jQuery(selector),
                    last = insert.length - 1,
                    i = 0;

                  for (; i <= last; i++) {
                    elems = i === last ? this : this.clone(true);
                    jQuery(insert[i])[original](elems);

                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // .get() because push.apply(_, arraylike) throws on ancient WebKit
                    push.apply(ret, elems.get());
                  }

                  return this.pushStack(ret);
                };
              }
            );
            var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

            var rcustomProp = /^--/;

            var getStyles = function (elem) {
              // Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
              // IE throws on elements created in popups
              // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
              var view = elem.ownerDocument.defaultView;

              if (!view || !view.opener) {
                view = window;
              }

              return view.getComputedStyle(elem);
            };

            var swap = function (elem, options, callback) {
              var ret,
                name,
                old = {};

              // Remember the old values, and insert the new ones
              for (name in options) {
                old[name] = elem.style[name];
                elem.style[name] = options[name];
              }

              ret = callback.call(elem);

              // Revert the old values
              for (name in options) {
                elem.style[name] = old[name];
              }

              return ret;
            };

            var rboxStyle = new RegExp(cssExpand.join("|"), "i");

            var whitespace = "[\\x20\\t\\r\\n\\f]";

            var rtrimCSS = new RegExp(
              "^" +
                whitespace +
                "+|((?:^|[^\\\\])(?:\\\\.)*)" +
                whitespace +
                "+$",
              "g"
            );

            (function () {
              // Executing both pixelPosition & boxSizingReliable tests require only one layout
              // so they're executed at the same time to save the second computation.
              function computeStyleTests() {
                // This is a singleton, we need to execute it only once
                if (!div) {
                  return;
                }

                container.style.cssText =
                  "position:absolute;left:-11111px;width:60px;" +
                  "margin-top:1px;padding:0;border:0";
                div.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
                  "margin:auto;border:1px;padding:1px;" +
                  "width:60%;top:1%";
                documentElement.appendChild(container).appendChild(div);

                var divStyle = window.getComputedStyle(div);
                pixelPositionVal = divStyle.top !== "1%";

                // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
                reliableMarginLeftVal =
                  roundPixelMeasures(divStyle.marginLeft) === 12;

                // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
                // Some styles come back with percentage values, even though they shouldn't
                div.style.right = "60%";
                pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;

                // Support: IE 9 - 11 only
                // Detect misreporting of content dimensions for box-sizing:border-box elements
                boxSizingReliableVal =
                  roundPixelMeasures(divStyle.width) === 36;

                // Support: IE 9 only
                // Detect overflow:scroll screwiness (gh-3699)
                // Support: Chrome <=64
                // Don't get tricked when zoom affects offsetWidth (gh-4029)
                div.style.position = "absolute";
                scrollboxSizeVal =
                  roundPixelMeasures(div.offsetWidth / 3) === 12;

                documentElement.removeChild(container);

                // Nullify the div so it wouldn't be stored in the memory and
                // it will also be a sign that checks already performed
                div = null;
              }

              function roundPixelMeasures(measure) {
                return Math.round(parseFloat(measure));
              }

              var pixelPositionVal,
                boxSizingReliableVal,
                scrollboxSizeVal,
                pixelBoxStylesVal,
                reliableTrDimensionsVal,
                reliableMarginLeftVal,
                container = document.createElement("div"),
                div = document.createElement("div");

              // Finish early in limited (non-browser) environments
              if (!div.style) {
                return;
              }

              // Support: IE <=9 - 11 only
              // Style of cloned element affects source element cloned (trac-8908)
              div.style.backgroundClip = "content-box";
              div.cloneNode(true).style.backgroundClip = "";
              support.clearCloneStyle =
                div.style.backgroundClip === "content-box";

              jQuery.extend(support, {
                boxSizingReliable: function () {
                  computeStyleTests();
                  return boxSizingReliableVal;
                },
                pixelBoxStyles: function () {
                  computeStyleTests();
                  return pixelBoxStylesVal;
                },
                pixelPosition: function () {
                  computeStyleTests();
                  return pixelPositionVal;
                },
                reliableMarginLeft: function () {
                  computeStyleTests();
                  return reliableMarginLeftVal;
                },
                scrollboxSize: function () {
                  computeStyleTests();
                  return scrollboxSizeVal;
                },

                // Support: IE 9 - 11+, Edge 15 - 18+
                // IE/Edge misreport `getComputedStyle` of table rows with width/height
                // set in CSS while `offset*` properties report correct values.
                // Behavior in IE 9 is more subtle than in newer versions & it passes
                // some versions of this test; make sure not to make it pass there!
                //
                // Support: Firefox 70+
                // Only Firefox includes border widths
                // in computed dimensions. (gh-4529)
                reliableTrDimensions: function () {
                  var table, tr, trChild, trStyle;
                  if (reliableTrDimensionsVal == null) {
                    table = document.createElement("table");
                    tr = document.createElement("tr");
                    trChild = document.createElement("div");

                    table.style.cssText =
                      "position:absolute;left:-11111px;border-collapse:separate";
                    tr.style.cssText = "border:1px solid";

                    // Support: Chrome 86+
                    // Height set through cssText does not get applied.
                    // Computed height then comes back as 0.
                    tr.style.height = "1px";
                    trChild.style.height = "9px";

                    // Support: Android 8 Chrome 86+
                    // In our bodyBackground.html iframe,
                    // display for all div elements is set to "inline",
                    // which causes a problem only in Android 8 Chrome 86.
                    // Ensuring the div is display: block
                    // gets around this issue.
                    trChild.style.display = "block";

                    documentElement
                      .appendChild(table)
                      .appendChild(tr)
                      .appendChild(trChild);

                    trStyle = window.getComputedStyle(tr);
                    reliableTrDimensionsVal =
                      parseInt(trStyle.height, 10) +
                        parseInt(trStyle.borderTopWidth, 10) +
                        parseInt(trStyle.borderBottomWidth, 10) ===
                      tr.offsetHeight;

                    documentElement.removeChild(table);
                  }
                  return reliableTrDimensionsVal;
                },
              });
            })();

            function curCSS(elem, name, computed) {
              var width,
                minWidth,
                maxWidth,
                ret,
                isCustomProp = rcustomProp.test(name),
                // Support: Firefox 51+
                // Retrieving style before computed somehow
                // fixes an issue with getting wrong values
                // on detached elements
                style = elem.style;

              computed = computed || getStyles(elem);

              // getPropertyValue is needed for:
              //   .css('filter') (IE 9 only, trac-12537)
              //   .css('--customProperty) (gh-3144)
              if (computed) {
                ret = computed.getPropertyValue(name) || computed[name];

                // trim whitespace for custom property (issue gh-4926)
                if (isCustomProp) {
                  // rtrim treats U+000D CARRIAGE RETURN and U+000C FORM FEED
                  // as whitespace while CSS does not, but this is not a problem
                  // because CSS preprocessing replaces them with U+000A LINE FEED
                  // (which *is* CSS whitespace)
                  // https://www.w3.org/TR/css-syntax-3/#input-preprocessing
                  ret = ret.replace(rtrimCSS, "$1");
                }

                if (ret === "" && !isAttached(elem)) {
                  ret = jQuery.style(elem, name);
                }

                // A tribute to the "awesome hack by Dean Edwards"
                // Android Browser returns percentage for some values,
                // but width seems to be reliably pixels.
                // This is against the CSSOM draft spec:
                // https://drafts.csswg.org/cssom/#resolved-values
                if (
                  !support.pixelBoxStyles() &&
                  rnumnonpx.test(ret) &&
                  rboxStyle.test(name)
                ) {
                  // Remember the original values
                  width = style.width;
                  minWidth = style.minWidth;
                  maxWidth = style.maxWidth;

                  // Put in the new values to get a computed value out
                  style.minWidth = style.maxWidth = style.width = ret;
                  ret = computed.width;

                  // Revert the changed values
                  style.width = width;
                  style.minWidth = minWidth;
                  style.maxWidth = maxWidth;
                }
              }

              return ret !== undefined
                ? // Support: IE <=9 - 11 only
                  // IE returns zIndex value as an integer.
                  ret + ""
                : ret;
            }

            function addGetHookIf(conditionFn, hookFn) {
              // Define the hook, we'll check on the first run if it's really needed.
              return {
                get: function () {
                  if (conditionFn()) {
                    // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get;
                    return;
                  }

                  // Hook needed; redefine it so that the support test is not executed again.
                  return (this.get = hookFn).apply(this, arguments);
                },
              };
            }

            var cssPrefixes = ["Webkit", "Moz", "ms"],
              emptyStyle = document.createElement("div").style,
              vendorProps = {};

            // Return a vendor-prefixed property or undefined
            function vendorPropName(name) {
              // Check for vendor prefixed names
              var capName = name[0].toUpperCase() + name.slice(1),
                i = cssPrefixes.length;

              while (i--) {
                name = cssPrefixes[i] + capName;
                if (name in emptyStyle) {
                  return name;
                }
              }
            }

            // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
            function finalPropName(name) {
              var final = jQuery.cssProps[name] || vendorProps[name];

              if (final) {
                return final;
              }
              if (name in emptyStyle) {
                return name;
              }
              return (vendorProps[name] = vendorPropName(name) || name);
            }

            var // Swappable if display is none or starts with table
              // except "table", "table-cell", or "table-caption"
              // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
              rdisplayswap = /^(none|table(?!-c[ea]).+)/,
              cssShow = {
                position: "absolute",
                visibility: "hidden",
                display: "block",
              },
              cssNormalTransform = {
                letterSpacing: "0",
                fontWeight: "400",
              };

            function setPositiveNumber(_elem, value, subtract) {
              // Any relative (+/-) values have already been
              // normalized at this point
              var matches = rcssNum.exec(value);
              return matches
                ? // Guard against undefined "subtract", e.g., when used as in cssHooks
                  Math.max(0, matches[2] - (subtract || 0)) +
                    (matches[3] || "px")
                : value;
            }

            function boxModelAdjustment(
              elem,
              dimension,
              box,
              isBorderBox,
              styles,
              computedVal
            ) {
              var i = dimension === "width" ? 1 : 0,
                extra = 0,
                delta = 0;

              // Adjustment may not be necessary
              if (box === (isBorderBox ? "border" : "content")) {
                return 0;
              }

              for (; i < 4; i += 2) {
                // Both box models exclude margin
                if (box === "margin") {
                  delta += jQuery.css(elem, box + cssExpand[i], true, styles);
                }

                // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
                if (!isBorderBox) {
                  // Add padding
                  delta += jQuery.css(
                    elem,
                    "padding" + cssExpand[i],
                    true,
                    styles
                  );

                  // For "border" or "margin", add border
                  if (box !== "padding") {
                    delta += jQuery.css(
                      elem,
                      "border" + cssExpand[i] + "Width",
                      true,
                      styles
                    );

                    // But still keep track of it otherwise
                  } else {
                    extra += jQuery.css(
                      elem,
                      "border" + cssExpand[i] + "Width",
                      true,
                      styles
                    );
                  }

                  // If we get here with a border-box (content + padding + border), we're seeking "content" or
                  // "padding" or "margin"
                } else {
                  // For "content", subtract padding
                  if (box === "content") {
                    delta -= jQuery.css(
                      elem,
                      "padding" + cssExpand[i],
                      true,
                      styles
                    );
                  }

                  // For "content" or "padding", subtract border
                  if (box !== "margin") {
                    delta -= jQuery.css(
                      elem,
                      "border" + cssExpand[i] + "Width",
                      true,
                      styles
                    );
                  }
                }
              }

              // Account for positive content-box scroll gutter when requested by providing computedVal
              if (!isBorderBox && computedVal >= 0) {
                // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
                // Assuming integer scroll gutter, subtract the rest and round down
                delta +=
                  Math.max(
                    0,
                    Math.ceil(
                      elem[
                        "offset" +
                          dimension[0].toUpperCase() +
                          dimension.slice(1)
                      ] -
                        computedVal -
                        delta -
                        extra -
                        0.5

                      // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
                      // Use an explicit zero to avoid NaN (gh-3964)
                    )
                  ) || 0;
              }

              return delta;
            }

            function getWidthOrHeight(elem, dimension, extra) {
              // Start with computed style
              var styles = getStyles(elem),
                // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
                // Fake content-box until we know it's needed to know the true value.
                boxSizingNeeded = !support.boxSizingReliable() || extra,
                isBorderBox =
                  boxSizingNeeded &&
                  jQuery.css(elem, "boxSizing", false, styles) === "border-box",
                valueIsBorderBox = isBorderBox,
                val = curCSS(elem, dimension, styles),
                offsetProp =
                  "offset" + dimension[0].toUpperCase() + dimension.slice(1);

              // Support: Firefox <=54
              // Return a confounding non-pixel value or feign ignorance, as appropriate.
              if (rnumnonpx.test(val)) {
                if (!extra) {
                  return val;
                }
                val = "auto";
              }

              // Support: IE 9 - 11 only
              // Use offsetWidth/offsetHeight for when box sizing is unreliable.
              // In those cases, the computed value can be trusted to be border-box.
              if (
                ((!support.boxSizingReliable() && isBorderBox) ||
                  // Support: IE 10 - 11+, Edge 15 - 18+
                  // IE/Edge misreport `getComputedStyle` of table rows with width/height
                  // set in CSS while `offset*` properties report correct values.
                  // Interestingly, in some cases IE 9 doesn't suffer from this issue.
                  (!support.reliableTrDimensions() && nodeName(elem, "tr")) ||
                  // Fall back to offsetWidth/offsetHeight when value is "auto"
                  // This happens for inline elements with no explicit setting (gh-3571)
                  val === "auto" ||
                  // Support: Android <=4.1 - 4.3 only
                  // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
                  (!parseFloat(val) &&
                    jQuery.css(elem, "display", false, styles) === "inline")) &&
                // Make sure the element is visible & connected
                elem.getClientRects().length
              ) {
                isBorderBox =
                  jQuery.css(elem, "boxSizing", false, styles) === "border-box";

                // Where available, offsetWidth/offsetHeight approximate border box dimensions.
                // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
                // retrieved value as a content box dimension.
                valueIsBorderBox = offsetProp in elem;
                if (valueIsBorderBox) {
                  val = elem[offsetProp];
                }
              }

              // Normalize "" and auto
              val = parseFloat(val) || 0;

              // Adjust for the element's box model
              return (
                val +
                boxModelAdjustment(
                  elem,
                  dimension,
                  extra || (isBorderBox ? "border" : "content"),
                  valueIsBorderBox,
                  styles,

                  // Provide the current computed size to request scroll gutter calculation (gh-3589)
                  val
                ) +
                "px"
              );
            }

            jQuery.extend({
              // Add in style property hooks for overriding the default
              // behavior of getting and setting a style property
              cssHooks: {
                opacity: {
                  get: function (elem, computed) {
                    if (computed) {
                      // We should always get a number back from opacity
                      var ret = curCSS(elem, "opacity");
                      return ret === "" ? "1" : ret;
                    }
                  },
                },
              },

              // Don't automatically add "px" to these possibly-unitless properties
              cssNumber: {
                animationIterationCount: true,
                columnCount: true,
                fillOpacity: true,
                flexGrow: true,
                flexShrink: true,
                fontWeight: true,
                gridArea: true,
                gridColumn: true,
                gridColumnEnd: true,
                gridColumnStart: true,
                gridRow: true,
                gridRowEnd: true,
                gridRowStart: true,
                lineHeight: true,
                opacity: true,
                order: true,
                orphans: true,
                widows: true,
                zIndex: true,
                zoom: true,
              },

              // Add in properties whose names you wish to fix before
              // setting or getting the value
              cssProps: {},

              // Get and set the style property on a DOM Node
              style: function (elem, name, value, extra) {
                // Don't set styles on text and comment nodes
                if (
                  !elem ||
                  elem.nodeType === 3 ||
                  elem.nodeType === 8 ||
                  !elem.style
                ) {
                  return;
                }

                // Make sure that we're working with the right name
                var ret,
                  type,
                  hooks,
                  origName = camelCase(name),
                  isCustomProp = rcustomProp.test(name),
                  style = elem.style;

                // Make sure that we're working with the right name. We don't
                // want to query the value if it is a CSS custom property
                // since they are user-defined.
                if (!isCustomProp) {
                  name = finalPropName(origName);
                }

                // Gets hook for the prefixed version, then unprefixed version
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

                // Check if we're setting a value
                if (value !== undefined) {
                  type = typeof value;

                  // Convert "+=" or "-=" to relative numbers (trac-7345)
                  if (
                    type === "string" &&
                    (ret = rcssNum.exec(value)) &&
                    ret[1]
                  ) {
                    value = adjustCSS(elem, name, ret);

                    // Fixes bug trac-9237
                    type = "number";
                  }

                  // Make sure that null and NaN values aren't set (trac-7116)
                  if (value == null || value !== value) {
                    return;
                  }

                  // If a number was passed in, add the unit (except for certain CSS properties)
                  // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
                  // "px" to a few hardcoded values.
                  if (type === "number" && !isCustomProp) {
                    value +=
                      (ret && ret[3]) ||
                      (jQuery.cssNumber[origName] ? "" : "px");
                  }

                  // background-* props affect original clone's values
                  if (
                    !support.clearCloneStyle &&
                    value === "" &&
                    name.indexOf("background") === 0
                  ) {
                    style[name] = "inherit";
                  }

                  // If a hook was provided, use that value, otherwise just set the specified value
                  if (
                    !hooks ||
                    !("set" in hooks) ||
                    (value = hooks.set(elem, value, extra)) !== undefined
                  ) {
                    if (isCustomProp) {
                      style.setProperty(name, value);
                    } else {
                      style[name] = value;
                    }
                  }
                } else {
                  // If a hook was provided get the non-computed value from there
                  if (
                    hooks &&
                    "get" in hooks &&
                    (ret = hooks.get(elem, false, extra)) !== undefined
                  ) {
                    return ret;
                  }

                  // Otherwise just get the value from the style object
                  return style[name];
                }
              },

              css: function (elem, name, extra, styles) {
                var val,
                  num,
                  hooks,
                  origName = camelCase(name),
                  isCustomProp = rcustomProp.test(name);

                // Make sure that we're working with the right name. We don't
                // want to modify the value if it is a CSS custom property
                // since they are user-defined.
                if (!isCustomProp) {
                  name = finalPropName(origName);
                }

                // Try prefixed name followed by the unprefixed name
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

                // If a hook was provided get the computed value from there
                if (hooks && "get" in hooks) {
                  val = hooks.get(elem, true, extra);
                }

                // Otherwise, if a way to get the computed value exists, use that
                if (val === undefined) {
                  val = curCSS(elem, name, styles);
                }

                // Convert "normal" to computed value
                if (val === "normal" && name in cssNormalTransform) {
                  val = cssNormalTransform[name];
                }

                // Make numeric if forced or a qualifier was provided and val looks numeric
                if (extra === "" || extra) {
                  num = parseFloat(val);
                  return extra === true || isFinite(num) ? num || 0 : val;
                }

                return val;
              },
            });

            jQuery.each(["height", "width"], function (_i, dimension) {
              jQuery.cssHooks[dimension] = {
                get: function (elem, computed, extra) {
                  if (computed) {
                    // Certain elements can have dimension info if we invisibly show them
                    // but it must have a current display style that would benefit
                    return rdisplayswap.test(jQuery.css(elem, "display")) &&
                      // Support: Safari 8+
                      // Table columns in Safari have non-zero offsetWidth & zero
                      // getBoundingClientRect().width unless display is changed.
                      // Support: IE <=11 only
                      // Running getBoundingClientRect on a disconnected node
                      // in IE throws an error.
                      (!elem.getClientRects().length ||
                        !elem.getBoundingClientRect().width)
                      ? swap(elem, cssShow, function () {
                          return getWidthOrHeight(elem, dimension, extra);
                        })
                      : getWidthOrHeight(elem, dimension, extra);
                  }
                },

                set: function (elem, value, extra) {
                  var matches,
                    styles = getStyles(elem),
                    // Only read styles.position if the test has a chance to fail
                    // to avoid forcing a reflow.
                    scrollboxSizeBuggy =
                      !support.scrollboxSize() &&
                      styles.position === "absolute",
                    // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
                    boxSizingNeeded = scrollboxSizeBuggy || extra,
                    isBorderBox =
                      boxSizingNeeded &&
                      jQuery.css(elem, "boxSizing", false, styles) ===
                        "border-box",
                    subtract = extra
                      ? boxModelAdjustment(
                          elem,
                          dimension,
                          extra,
                          isBorderBox,
                          styles
                        )
                      : 0;

                  // Account for unreliable border-box dimensions by comparing offset* to computed and
                  // faking a content-box to get border and padding (gh-3699)
                  if (isBorderBox && scrollboxSizeBuggy) {
                    subtract -= Math.ceil(
                      elem[
                        "offset" +
                          dimension[0].toUpperCase() +
                          dimension.slice(1)
                      ] -
                        parseFloat(styles[dimension]) -
                        boxModelAdjustment(
                          elem,
                          dimension,
                          "border",
                          false,
                          styles
                        ) -
                        0.5
                    );
                  }

                  // Convert to pixels if value adjustment is needed
                  if (
                    subtract &&
                    (matches = rcssNum.exec(value)) &&
                    (matches[3] || "px") !== "px"
                  ) {
                    elem.style[dimension] = value;
                    value = jQuery.css(elem, dimension);
                  }

                  return setPositiveNumber(elem, value, subtract);
                },
              };
            });

            jQuery.cssHooks.marginLeft = addGetHookIf(
              support.reliableMarginLeft,
              function (elem, computed) {
                if (computed) {
                  return (
                    (parseFloat(curCSS(elem, "marginLeft")) ||
                      elem.getBoundingClientRect().left -
                        swap(elem, { marginLeft: 0 }, function () {
                          return elem.getBoundingClientRect().left;
                        })) + "px"
                  );
                }
              }
            );

            // These hooks are used by animate to expand properties
            jQuery.each(
              {
                margin: "",
                padding: "",
                border: "Width",
              },
              function (prefix, suffix) {
                jQuery.cssHooks[prefix + suffix] = {
                  expand: function (value) {
                    var i = 0,
                      expanded = {},
                      // Assumes a single number if not a string
                      parts =
                        typeof value === "string" ? value.split(" ") : [value];

                    for (; i < 4; i++) {
                      expanded[prefix + cssExpand[i] + suffix] =
                        parts[i] || parts[i - 2] || parts[0];
                    }

                    return expanded;
                  },
                };

                if (prefix !== "margin") {
                  jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
                }
              }
            );

            jQuery.fn.extend({
              css: function (name, value) {
                return access(
                  this,
                  function (elem, name, value) {
                    var styles,
                      len,
                      map = {},
                      i = 0;

                    if (Array.isArray(name)) {
                      styles = getStyles(elem);
                      len = name.length;

                      for (; i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
                      }

                      return map;
                    }

                    return value !== undefined
                      ? jQuery.style(elem, name, value)
                      : jQuery.css(elem, name);
                  },
                  name,
                  value,
                  arguments.length > 1
                );
              },
            });

            function Tween(elem, options, prop, end, easing) {
              return new Tween.prototype.init(elem, options, prop, end, easing);
            }
            jQuery.Tween = Tween;

            Tween.prototype = {
              constructor: Tween,
              init: function (elem, options, prop, end, easing, unit) {
                this.elem = elem;
                this.prop = prop;
                this.easing = easing || jQuery.easing._default;
                this.options = options;
                this.start = this.now = this.cur();
                this.end = end;
                this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
              },
              cur: function () {
                var hooks = Tween.propHooks[this.prop];

                return hooks && hooks.get
                  ? hooks.get(this)
                  : Tween.propHooks._default.get(this);
              },
              run: function (percent) {
                var eased,
                  hooks = Tween.propHooks[this.prop];

                if (this.options.duration) {
                  this.pos = eased = jQuery.easing[this.easing](
                    percent,
                    this.options.duration * percent,
                    0,
                    1,
                    this.options.duration
                  );
                } else {
                  this.pos = eased = percent;
                }
                this.now = (this.end - this.start) * eased + this.start;

                if (this.options.step) {
                  this.options.step.call(this.elem, this.now, this);
                }

                if (hooks && hooks.set) {
                  hooks.set(this);
                } else {
                  Tween.propHooks._default.set(this);
                }
                return this;
              },
            };

            Tween.prototype.init.prototype = Tween.prototype;

            Tween.propHooks = {
              _default: {
                get: function (tween) {
                  var result;

                  // Use a property on the element directly when it is not a DOM element,
                  // or when there is no matching style property that exists.
                  if (
                    tween.elem.nodeType !== 1 ||
                    (tween.elem[tween.prop] != null &&
                      tween.elem.style[tween.prop] == null)
                  ) {
                    return tween.elem[tween.prop];
                  }

                  // Passing an empty string as a 3rd parameter to .css will automatically
                  // attempt a parseFloat and fallback to a string if the parse fails.
                  // Simple values such as "10px" are parsed to Float;
                  // complex values such as "rotate(1rad)" are returned as-is.
                  result = jQuery.css(tween.elem, tween.prop, "");

                  // Empty strings, null, undefined and "auto" are converted to 0.
                  return !result || result === "auto" ? 0 : result;
                },
                set: function (tween) {
                  // Use step hook for back compat.
                  // Use cssHook if its there.
                  // Use .style if available and use plain properties where available.
                  if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween);
                  } else if (
                    tween.elem.nodeType === 1 &&
                    (jQuery.cssHooks[tween.prop] ||
                      tween.elem.style[finalPropName(tween.prop)] != null)
                  ) {
                    jQuery.style(
                      tween.elem,
                      tween.prop,
                      tween.now + tween.unit
                    );
                  } else {
                    tween.elem[tween.prop] = tween.now;
                  }
                },
              },
            };

            // Support: IE <=9 only
            // Panic based approach to setting things on disconnected nodes
            Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
              set: function (tween) {
                if (tween.elem.nodeType && tween.elem.parentNode) {
                  tween.elem[tween.prop] = tween.now;
                }
              },
            };

            jQuery.easing = {
              linear: function (p) {
                return p;
              },
              swing: function (p) {
                return 0.5 - Math.cos(p * Math.PI) / 2;
              },
              _default: "swing",
            };

            jQuery.fx = Tween.prototype.init;

            // Back compat <1.8 extension point
            jQuery.fx.step = {};

            var fxNow,
              inProgress,
              rfxtypes = /^(?:toggle|show|hide)$/,
              rrun = /queueHooks$/;

            function schedule() {
              if (inProgress) {
                if (document.hidden === false && window.requestAnimationFrame) {
                  window.requestAnimationFrame(schedule);
                } else {
                  window.setTimeout(schedule, jQuery.fx.interval);
                }

                jQuery.fx.tick();
              }
            }

            // Animations created synchronously will run synchronously
            function createFxNow() {
              window.setTimeout(function () {
                fxNow = undefined;
              });
              return (fxNow = Date.now());
            }

            // Generate parameters to create a standard animation
            function genFx(type, includeWidth) {
              var which,
                i = 0,
                attrs = { height: type };

              // If we include width, step value is 1 to do all cssExpand values,
              // otherwise step value is 2 to skip over Left and Right
              includeWidth = includeWidth ? 1 : 0;
              for (; i < 4; i += 2 - includeWidth) {
                which = cssExpand[i];
                attrs["margin" + which] = attrs["padding" + which] = type;
              }

              if (includeWidth) {
                attrs.opacity = attrs.width = type;
              }

              return attrs;
            }

            function createTween(value, prop, animation) {
              var tween,
                collection = (Animation.tweeners[prop] || []).concat(
                  Animation.tweeners["*"]
                ),
                index = 0,
                length = collection.length;
              for (; index < length; index++) {
                if ((tween = collection[index].call(animation, prop, value))) {
                  // We're done with this property
                  return tween;
                }
              }
            }

            function defaultPrefilter(elem, props, opts) {
              var prop,
                value,
                toggle,
                hooks,
                oldfire,
                propTween,
                restoreDisplay,
                display,
                isBox = "width" in props || "height" in props,
                anim = this,
                orig = {},
                style = elem.style,
                hidden = elem.nodeType && isHiddenWithinTree(elem),
                dataShow = dataPriv.get(elem, "fxshow");

              // Queue-skipping animations hijack the fx hooks
              if (!opts.queue) {
                hooks = jQuery._queueHooks(elem, "fx");
                if (hooks.unqueued == null) {
                  hooks.unqueued = 0;
                  oldfire = hooks.empty.fire;
                  hooks.empty.fire = function () {
                    if (!hooks.unqueued) {
                      oldfire();
                    }
                  };
                }
                hooks.unqueued++;

                anim.always(function () {
                  // Ensure the complete handler is called before this completes
                  anim.always(function () {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                      hooks.empty.fire();
                    }
                  });
                });
              }

              // Detect show/hide animations
              for (prop in props) {
                value = props[prop];
                if (rfxtypes.test(value)) {
                  delete props[prop];
                  toggle = toggle || value === "toggle";
                  if (value === (hidden ? "hide" : "show")) {
                    // Pretend to be hidden if this is a "show" and
                    // there is still data from a stopped show/hide
                    if (
                      value === "show" &&
                      dataShow &&
                      dataShow[prop] !== undefined
                    ) {
                      hidden = true;

                      // Ignore all other no-op show/hide data
                    } else {
                      continue;
                    }
                  }
                  orig[prop] =
                    (dataShow && dataShow[prop]) || jQuery.style(elem, prop);
                }
              }

              // Bail out if this is a no-op like .hide().hide()
              propTween = !jQuery.isEmptyObject(props);
              if (!propTween && jQuery.isEmptyObject(orig)) {
                return;
              }

              // Restrict "overflow" and "display" styles during box animations
              if (isBox && elem.nodeType === 1) {
                // Support: IE <=9 - 11, Edge 12 - 15
                // Record all 3 overflow attributes because IE does not infer the shorthand
                // from identically-valued overflowX and overflowY and Edge just mirrors
                // the overflowX value there.
                opts.overflow = [
                  style.overflow,
                  style.overflowX,
                  style.overflowY,
                ];

                // Identify a display type, preferring old show/hide data over the CSS cascade
                restoreDisplay = dataShow && dataShow.display;
                if (restoreDisplay == null) {
                  restoreDisplay = dataPriv.get(elem, "display");
                }
                display = jQuery.css(elem, "display");
                if (display === "none") {
                  if (restoreDisplay) {
                    display = restoreDisplay;
                  } else {
                    // Get nonempty value(s) by temporarily forcing visibility
                    showHide([elem], true);
                    restoreDisplay = elem.style.display || restoreDisplay;
                    display = jQuery.css(elem, "display");
                    showHide([elem]);
                  }
                }

                // Animate inline elements as inline-block
                if (
                  display === "inline" ||
                  (display === "inline-block" && restoreDisplay != null)
                ) {
                  if (jQuery.css(elem, "float") === "none") {
                    // Restore the original display value at the end of pure show/hide animations
                    if (!propTween) {
                      anim.done(function () {
                        style.display = restoreDisplay;
                      });
                      if (restoreDisplay == null) {
                        display = style.display;
                        restoreDisplay = display === "none" ? "" : display;
                      }
                    }
                    style.display = "inline-block";
                  }
                }
              }

              if (opts.overflow) {
                style.overflow = "hidden";
                anim.always(function () {
                  style.overflow = opts.overflow[0];
                  style.overflowX = opts.overflow[1];
                  style.overflowY = opts.overflow[2];
                });
              }

              // Implement show/hide animations
              propTween = false;
              for (prop in orig) {
                // General show/hide setup for this element animation
                if (!propTween) {
                  if (dataShow) {
                    if ("hidden" in dataShow) {
                      hidden = dataShow.hidden;
                    }
                  } else {
                    dataShow = dataPriv.access(elem, "fxshow", {
                      display: restoreDisplay,
                    });
                  }

                  // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                  if (toggle) {
                    dataShow.hidden = !hidden;
                  }

                  // Show elements before animating them
                  if (hidden) {
                    showHide([elem], true);
                  }

                  /* eslint-disable no-loop-func */

                  anim.done(function () {
                    /* eslint-enable no-loop-func */

                    // The final step of a "hide" animation is actually hiding the element
                    if (!hidden) {
                      showHide([elem]);
                    }
                    dataPriv.remove(elem, "fxshow");
                    for (prop in orig) {
                      jQuery.style(elem, prop, orig[prop]);
                    }
                  });
                }

                // Per-property setup
                propTween = createTween(
                  hidden ? dataShow[prop] : 0,
                  prop,
                  anim
                );
                if (!(prop in dataShow)) {
                  dataShow[prop] = propTween.start;
                  if (hidden) {
                    propTween.end = propTween.start;
                    propTween.start = 0;
                  }
                }
              }
            }

            function propFilter(props, specialEasing) {
              var index, name, easing, value, hooks;

              // camelCase, specialEasing and expand cssHook pass
              for (index in props) {
                name = camelCase(index);
                easing = specialEasing[name];
                value = props[index];
                if (Array.isArray(value)) {
                  easing = value[1];
                  value = props[index] = value[0];
                }

                if (index !== name) {
                  props[name] = value;
                  delete props[index];
                }

                hooks = jQuery.cssHooks[name];
                if (hooks && "expand" in hooks) {
                  value = hooks.expand(value);
                  delete props[name];

                  // Not quite $.extend, this won't overwrite existing keys.
                  // Reusing 'index' because we have the correct "name"
                  for (index in value) {
                    if (!(index in props)) {
                      props[index] = value[index];
                      specialEasing[index] = easing;
                    }
                  }
                } else {
                  specialEasing[name] = easing;
                }
              }
            }

            function Animation(elem, properties, options) {
              var result,
                stopped,
                index = 0,
                length = Animation.prefilters.length,
                deferred = jQuery.Deferred().always(function () {
                  // Don't match elem in the :animated selector
                  delete tick.elem;
                }),
                tick = function () {
                  if (stopped) {
                    return false;
                  }
                  var currentTime = fxNow || createFxNow(),
                    remaining = Math.max(
                      0,
                      animation.startTime + animation.duration - currentTime
                    ),
                    // Support: Android 2.3 only
                    // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
                    temp = remaining / animation.duration || 0,
                    percent = 1 - temp,
                    index = 0,
                    length = animation.tweens.length;

                  for (; index < length; index++) {
                    animation.tweens[index].run(percent);
                  }

                  deferred.notifyWith(elem, [animation, percent, remaining]);

                  // If there's more to do, yield
                  if (percent < 1 && length) {
                    return remaining;
                  }

                  // If this was an empty animation, synthesize a final progress notification
                  if (!length) {
                    deferred.notifyWith(elem, [animation, 1, 0]);
                  }

                  // Resolve the animation and report its conclusion
                  deferred.resolveWith(elem, [animation]);
                  return false;
                },
                animation = deferred.promise({
                  elem: elem,
                  props: jQuery.extend({}, properties),
                  opts: jQuery.extend(
                    true,
                    {
                      specialEasing: {},
                      easing: jQuery.easing._default,
                    },
                    options
                  ),
                  originalProperties: properties,
                  originalOptions: options,
                  startTime: fxNow || createFxNow(),
                  duration: options.duration,
                  tweens: [],
                  createTween: function (prop, end) {
                    var tween = jQuery.Tween(
                      elem,
                      animation.opts,
                      prop,
                      end,
                      animation.opts.specialEasing[prop] ||
                        animation.opts.easing
                    );
                    animation.tweens.push(tween);
                    return tween;
                  },
                  stop: function (gotoEnd) {
                    var index = 0,
                      // If we are going to the end, we want to run all the tweens
                      // otherwise we skip this part
                      length = gotoEnd ? animation.tweens.length : 0;
                    if (stopped) {
                      return this;
                    }
                    stopped = true;
                    for (; index < length; index++) {
                      animation.tweens[index].run(1);
                    }

                    // Resolve when we played the last frame; otherwise, reject
                    if (gotoEnd) {
                      deferred.notifyWith(elem, [animation, 1, 0]);
                      deferred.resolveWith(elem, [animation, gotoEnd]);
                    } else {
                      deferred.rejectWith(elem, [animation, gotoEnd]);
                    }
                    return this;
                  },
                }),
                props = animation.props;

              propFilter(props, animation.opts.specialEasing);

              for (; index < length; index++) {
                result = Animation.prefilters[index].call(
                  animation,
                  elem,
                  props,
                  animation.opts
                );
                if (result) {
                  if (isFunction(result.stop)) {
                    jQuery._queueHooks(
                      animation.elem,
                      animation.opts.queue
                    ).stop = result.stop.bind(result);
                  }
                  return result;
                }
              }

              jQuery.map(props, createTween, animation);

              if (isFunction(animation.opts.start)) {
                animation.opts.start.call(elem, animation);
              }

              // Attach callbacks from options
              animation
                .progress(animation.opts.progress)
                .done(animation.opts.done, animation.opts.complete)
                .fail(animation.opts.fail)
                .always(animation.opts.always);

              jQuery.fx.timer(
                jQuery.extend(tick, {
                  elem: elem,
                  anim: animation,
                  queue: animation.opts.queue,
                })
              );

              return animation;
            }

            jQuery.Animation = jQuery.extend(Animation, {
              tweeners: {
                "*": [
                  function (prop, value) {
                    var tween = this.createTween(prop, value);
                    adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                    return tween;
                  },
                ],
              },

              tweener: function (props, callback) {
                if (isFunction(props)) {
                  callback = props;
                  props = ["*"];
                } else {
                  props = props.match(rnothtmlwhite);
                }

                var prop,
                  index = 0,
                  length = props.length;

                for (; index < length; index++) {
                  prop = props[index];
                  Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                  Animation.tweeners[prop].unshift(callback);
                }
              },

              prefilters: [defaultPrefilter],

              prefilter: function (callback, prepend) {
                if (prepend) {
                  Animation.prefilters.unshift(callback);
                } else {
                  Animation.prefilters.push(callback);
                }
              },
            });

            jQuery.speed = function (speed, easing, fn) {
              var opt =
                speed && typeof speed === "object"
                  ? jQuery.extend({}, speed)
                  : {
                      complete:
                        fn || (!fn && easing) || (isFunction(speed) && speed),
                      duration: speed,
                      easing:
                        (fn && easing) ||
                        (easing && !isFunction(easing) && easing),
                    };

              // Go to the end state if fx are off
              if (jQuery.fx.off) {
                opt.duration = 0;
              } else {
                if (typeof opt.duration !== "number") {
                  if (opt.duration in jQuery.fx.speeds) {
                    opt.duration = jQuery.fx.speeds[opt.duration];
                  } else {
                    opt.duration = jQuery.fx.speeds._default;
                  }
                }
              }

              // Normalize opt.queue - true/undefined/null -> "fx"
              if (opt.queue == null || opt.queue === true) {
                opt.queue = "fx";
              }

              // Queueing
              opt.old = opt.complete;

              opt.complete = function () {
                if (isFunction(opt.old)) {
                  opt.old.call(this);
                }

                if (opt.queue) {
                  jQuery.dequeue(this, opt.queue);
                }
              };

              return opt;
            };

            jQuery.fn.extend({
              fadeTo: function (speed, to, easing, callback) {
                // Show any hidden elements after setting opacity to 0
                return (
                  this.filter(isHiddenWithinTree)
                    .css("opacity", 0)
                    .show()

                    // Animate to the value specified
                    .end()
                    .animate({ opacity: to }, speed, easing, callback)
                );
              },
              animate: function (prop, speed, easing, callback) {
                var empty = jQuery.isEmptyObject(prop),
                  optall = jQuery.speed(speed, easing, callback),
                  doAnimation = function () {
                    // Operate on a copy of prop so per-property easing won't be lost
                    var anim = Animation(this, jQuery.extend({}, prop), optall);

                    // Empty animations, or finishing resolves immediately
                    if (empty || dataPriv.get(this, "finish")) {
                      anim.stop(true);
                    }
                  };

                doAnimation.finish = doAnimation;

                return empty || optall.queue === false
                  ? this.each(doAnimation)
                  : this.queue(optall.queue, doAnimation);
              },
              stop: function (type, clearQueue, gotoEnd) {
                var stopQueue = function (hooks) {
                  var stop = hooks.stop;
                  delete hooks.stop;
                  stop(gotoEnd);
                };

                if (typeof type !== "string") {
                  gotoEnd = clearQueue;
                  clearQueue = type;
                  type = undefined;
                }
                if (clearQueue) {
                  this.queue(type || "fx", []);
                }

                return this.each(function () {
                  var dequeue = true,
                    index = type != null && type + "queueHooks",
                    timers = jQuery.timers,
                    data = dataPriv.get(this);

                  if (index) {
                    if (data[index] && data[index].stop) {
                      stopQueue(data[index]);
                    }
                  } else {
                    for (index in data) {
                      if (data[index] && data[index].stop && rrun.test(index)) {
                        stopQueue(data[index]);
                      }
                    }
                  }

                  for (index = timers.length; index--; ) {
                    if (
                      timers[index].elem === this &&
                      (type == null || timers[index].queue === type)
                    ) {
                      timers[index].anim.stop(gotoEnd);
                      dequeue = false;
                      timers.splice(index, 1);
                    }
                  }

                  // Start the next in the queue if the last step wasn't forced.
                  // Timers currently will call their complete callbacks, which
                  // will dequeue but only if they were gotoEnd.
                  if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type);
                  }
                });
              },
              finish: function (type) {
                if (type !== false) {
                  type = type || "fx";
                }
                return this.each(function () {
                  var index,
                    data = dataPriv.get(this),
                    queue = data[type + "queue"],
                    hooks = data[type + "queueHooks"],
                    timers = jQuery.timers,
                    length = queue ? queue.length : 0;

                  // Enable finishing flag on private data
                  data.finish = true;

                  // Empty the queue first
                  jQuery.queue(this, type, []);

                  if (hooks && hooks.stop) {
                    hooks.stop.call(this, true);
                  }

                  // Look for any active animations, and finish them
                  for (index = timers.length; index--; ) {
                    if (
                      timers[index].elem === this &&
                      timers[index].queue === type
                    ) {
                      timers[index].anim.stop(true);
                      timers.splice(index, 1);
                    }
                  }

                  // Look for any animations in the old queue and finish them
                  for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                      queue[index].finish.call(this);
                    }
                  }

                  // Turn off finishing flag
                  delete data.finish;
                });
              },
            });

            jQuery.each(["toggle", "show", "hide"], function (_i, name) {
              var cssFn = jQuery.fn[name];
              jQuery.fn[name] = function (speed, easing, callback) {
                return speed == null || typeof speed === "boolean"
                  ? cssFn.apply(this, arguments)
                  : this.animate(genFx(name, true), speed, easing, callback);
              };
            });

            // Generate shortcuts for custom animations
            jQuery.each(
              {
                slideDown: genFx("show"),
                slideUp: genFx("hide"),
                slideToggle: genFx("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (name, props) {
                jQuery.fn[name] = function (speed, easing, callback) {
                  return this.animate(props, speed, easing, callback);
                };
              }
            );

            jQuery.timers = [];
            jQuery.fx.tick = function () {
              var timer,
                i = 0,
                timers = jQuery.timers;

              fxNow = Date.now();

              for (; i < timers.length; i++) {
                timer = timers[i];

                // Run the timer and safely remove it when done (allowing for external removal)
                if (!timer() && timers[i] === timer) {
                  timers.splice(i--, 1);
                }
              }

              if (!timers.length) {
                jQuery.fx.stop();
              }
              fxNow = undefined;
            };

            jQuery.fx.timer = function (timer) {
              jQuery.timers.push(timer);
              jQuery.fx.start();
            };

            jQuery.fx.interval = 13;
            jQuery.fx.start = function () {
              if (inProgress) {
                return;
              }

              inProgress = true;
              schedule();
            };

            jQuery.fx.stop = function () {
              inProgress = null;
            };

            jQuery.fx.speeds = {
              slow: 600,
              fast: 200,

              // Default speed
              _default: 400,
            };

            // Based off of the plugin by Clint Helfers, with permission.
            jQuery.fn.delay = function (time, type) {
              time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
              type = type || "fx";

              return this.queue(type, function (next, hooks) {
                var timeout = window.setTimeout(next, time);
                hooks.stop = function () {
                  window.clearTimeout(timeout);
                };
              });
            };

            (function () {
              var input = document.createElement("input"),
                select = document.createElement("select"),
                opt = select.appendChild(document.createElement("option"));

              input.type = "checkbox";

              // Support: Android <=4.3 only
              // Default value for a checkbox should be "on"
              support.checkOn = input.value !== "";

              // Support: IE <=11 only
              // Must access selectedIndex to make default options select
              support.optSelected = opt.selected;

              // Support: IE <=11 only
              // An input loses its value after becoming a radio
              input = document.createElement("input");
              input.value = "t";
              input.type = "radio";
              support.radioValue = input.value === "t";
            })();

            var boolHook,
              attrHandle = jQuery.expr.attrHandle;

            jQuery.fn.extend({
              attr: function (name, value) {
                return access(
                  this,
                  jQuery.attr,
                  name,
                  value,
                  arguments.length > 1
                );
              },

              removeAttr: function (name) {
                return this.each(function () {
                  jQuery.removeAttr(this, name);
                });
              },
            });

            jQuery.extend({
              attr: function (elem, name, value) {
                var ret,
                  hooks,
                  nType = elem.nodeType;

                // Don't get/set attributes on text, comment and attribute nodes
                if (nType === 3 || nType === 8 || nType === 2) {
                  return;
                }

                // Fallback to prop when attributes are not supported
                if (typeof elem.getAttribute === "undefined") {
                  return jQuery.prop(elem, name, value);
                }

                // Attribute hooks are determined by the lowercase version
                // Grab necessary hook if one is defined
                if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                  hooks =
                    jQuery.attrHooks[name.toLowerCase()] ||
                    (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
                }

                if (value !== undefined) {
                  if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return;
                  }

                  if (
                    hooks &&
                    "set" in hooks &&
                    (ret = hooks.set(elem, value, name)) !== undefined
                  ) {
                    return ret;
                  }

                  elem.setAttribute(name, value + "");
                  return value;
                }

                if (
                  hooks &&
                  "get" in hooks &&
                  (ret = hooks.get(elem, name)) !== null
                ) {
                  return ret;
                }

                ret = jQuery.find.attr(elem, name);

                // Non-existent attributes return null, we normalize to undefined
                return ret == null ? undefined : ret;
              },

              attrHooks: {
                type: {
                  set: function (elem, value) {
                    if (
                      !support.radioValue &&
                      value === "radio" &&
                      nodeName(elem, "input")
                    ) {
                      var val = elem.value;
                      elem.setAttribute("type", value);
                      if (val) {
                        elem.value = val;
                      }
                      return value;
                    }
                  },
                },
              },

              removeAttr: function (elem, value) {
                var name,
                  i = 0,
                  // Attribute names can contain non-HTML whitespace characters
                  // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
                  attrNames = value && value.match(rnothtmlwhite);

                if (attrNames && elem.nodeType === 1) {
                  while ((name = attrNames[i++])) {
                    elem.removeAttribute(name);
                  }
                }
              },
            });

            // Hooks for boolean attributes
            boolHook = {
              set: function (elem, value, name) {
                if (value === false) {
                  // Remove boolean attributes when set to false
                  jQuery.removeAttr(elem, name);
                } else {
                  elem.setAttribute(name, name);
                }
                return name;
              },
            };

            jQuery.each(
              jQuery.expr.match.bool.source.match(/\w+/g),
              function (_i, name) {
                var getter = attrHandle[name] || jQuery.find.attr;

                attrHandle[name] = function (elem, name, isXML) {
                  var ret,
                    handle,
                    lowercaseName = name.toLowerCase();

                  if (!isXML) {
                    // Avoid an infinite loop by temporarily removing this function from the getter
                    handle = attrHandle[lowercaseName];
                    attrHandle[lowercaseName] = ret;
                    ret =
                      getter(elem, name, isXML) != null ? lowercaseName : null;
                    attrHandle[lowercaseName] = handle;
                  }
                  return ret;
                };
              }
            );

            var rfocusable = /^(?:input|select|textarea|button)$/i,
              rclickable = /^(?:a|area)$/i;

            jQuery.fn.extend({
              prop: function (name, value) {
                return access(
                  this,
                  jQuery.prop,
                  name,
                  value,
                  arguments.length > 1
                );
              },

              removeProp: function (name) {
                return this.each(function () {
                  delete this[jQuery.propFix[name] || name];
                });
              },
            });

            jQuery.extend({
              prop: function (elem, name, value) {
                var ret,
                  hooks,
                  nType = elem.nodeType;

                // Don't get/set properties on text, comment and attribute nodes
                if (nType === 3 || nType === 8 || nType === 2) {
                  return;
                }

                if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                  // Fix name and attach hooks
                  name = jQuery.propFix[name] || name;
                  hooks = jQuery.propHooks[name];
                }

                if (value !== undefined) {
                  if (
                    hooks &&
                    "set" in hooks &&
                    (ret = hooks.set(elem, value, name)) !== undefined
                  ) {
                    return ret;
                  }

                  return (elem[name] = value);
                }

                if (
                  hooks &&
                  "get" in hooks &&
                  (ret = hooks.get(elem, name)) !== null
                ) {
                  return ret;
                }

                return elem[name];
              },

              propHooks: {
                tabIndex: {
                  get: function (elem) {
                    // Support: IE <=9 - 11 only
                    // elem.tabIndex doesn't always return the
                    // correct value when it hasn't been explicitly set
                    // Use proper attribute retrieval (trac-12072)
                    var tabindex = jQuery.find.attr(elem, "tabindex");

                    if (tabindex) {
                      return parseInt(tabindex, 10);
                    }

                    if (
                      rfocusable.test(elem.nodeName) ||
                      (rclickable.test(elem.nodeName) && elem.href)
                    ) {
                      return 0;
                    }

                    return -1;
                  },
                },
              },

              propFix: {
                for: "htmlFor",
                class: "className",
              },
            });

            // Support: IE <=11 only
            // Accessing the selectedIndex property
            // forces the browser to respect setting selected
            // on the option
            // The getter ensures a default option is selected
            // when in an optgroup
            // eslint rule "no-unused-expressions" is disabled for this code
            // since it considers such accessions noop
            if (!support.optSelected) {
              jQuery.propHooks.selected = {
                get: function (elem) {
                  /* eslint no-unused-expressions: "off" */

                  var parent = elem.parentNode;
                  if (parent && parent.parentNode) {
                    parent.parentNode.selectedIndex;
                  }
                  return null;
                },
                set: function (elem) {
                  /* eslint no-unused-expressions: "off" */

                  var parent = elem.parentNode;
                  if (parent) {
                    parent.selectedIndex;

                    if (parent.parentNode) {
                      parent.parentNode.selectedIndex;
                    }
                  }
                },
              };
            }

            jQuery.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                jQuery.propFix[this.toLowerCase()] = this;
              }
            );

            // Strip and collapse whitespace according to HTML spec
            // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
            function stripAndCollapse(value) {
              var tokens = value.match(rnothtmlwhite) || [];
              return tokens.join(" ");
            }

            function getClass(elem) {
              return (elem.getAttribute && elem.getAttribute("class")) || "";
            }

            function classesToArray(value) {
              if (Array.isArray(value)) {
                return value;
              }
              if (typeof value === "string") {
                return value.match(rnothtmlwhite) || [];
              }
              return [];
            }

            jQuery.fn.extend({
              addClass: function (value) {
                var classNames, cur, curValue, className, i, finalValue;

                if (isFunction(value)) {
                  return this.each(function (j) {
                    jQuery(this).addClass(value.call(this, j, getClass(this)));
                  });
                }

                classNames = classesToArray(value);

                if (classNames.length) {
                  return this.each(function () {
                    curValue = getClass(this);
                    cur =
                      this.nodeType === 1 &&
                      " " + stripAndCollapse(curValue) + " ";

                    if (cur) {
                      for (i = 0; i < classNames.length; i++) {
                        className = classNames[i];
                        if (cur.indexOf(" " + className + " ") < 0) {
                          cur += className + " ";
                        }
                      }

                      // Only assign if different to avoid unneeded rendering.
                      finalValue = stripAndCollapse(cur);
                      if (curValue !== finalValue) {
                        this.setAttribute("class", finalValue);
                      }
                    }
                  });
                }

                return this;
              },

              removeClass: function (value) {
                var classNames, cur, curValue, className, i, finalValue;

                if (isFunction(value)) {
                  return this.each(function (j) {
                    jQuery(this).removeClass(
                      value.call(this, j, getClass(this))
                    );
                  });
                }

                if (!arguments.length) {
                  return this.attr("class", "");
                }

                classNames = classesToArray(value);

                if (classNames.length) {
                  return this.each(function () {
                    curValue = getClass(this);

                    // This expression is here for better compressibility (see addClass)
                    cur =
                      this.nodeType === 1 &&
                      " " + stripAndCollapse(curValue) + " ";

                    if (cur) {
                      for (i = 0; i < classNames.length; i++) {
                        className = classNames[i];

                        // Remove *all* instances
                        while (cur.indexOf(" " + className + " ") > -1) {
                          cur = cur.replace(" " + className + " ", " ");
                        }
                      }

                      // Only assign if different to avoid unneeded rendering.
                      finalValue = stripAndCollapse(cur);
                      if (curValue !== finalValue) {
                        this.setAttribute("class", finalValue);
                      }
                    }
                  });
                }

                return this;
              },

              toggleClass: function (value, stateVal) {
                var classNames,
                  className,
                  i,
                  self,
                  type = typeof value,
                  isValidValue = type === "string" || Array.isArray(value);

                if (isFunction(value)) {
                  return this.each(function (i) {
                    jQuery(this).toggleClass(
                      value.call(this, i, getClass(this), stateVal),
                      stateVal
                    );
                  });
                }

                if (typeof stateVal === "boolean" && isValidValue) {
                  return stateVal
                    ? this.addClass(value)
                    : this.removeClass(value);
                }

                classNames = classesToArray(value);

                return this.each(function () {
                  if (isValidValue) {
                    // Toggle individual class names
                    self = jQuery(this);

                    for (i = 0; i < classNames.length; i++) {
                      className = classNames[i];

                      // Check each className given, space separated list
                      if (self.hasClass(className)) {
                        self.removeClass(className);
                      } else {
                        self.addClass(className);
                      }
                    }

                    // Toggle whole class name
                  } else if (value === undefined || type === "boolean") {
                    className = getClass(this);
                    if (className) {
                      // Store className if set
                      dataPriv.set(this, "__className__", className);
                    }

                    // If the element has a class name or if we're passed `false`,
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    if (this.setAttribute) {
                      this.setAttribute(
                        "class",
                        className || value === false
                          ? ""
                          : dataPriv.get(this, "__className__") || ""
                      );
                    }
                  }
                });
              },

              hasClass: function (selector) {
                var className,
                  elem,
                  i = 0;

                className = " " + selector + " ";
                while ((elem = this[i++])) {
                  if (
                    elem.nodeType === 1 &&
                    (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(
                      className
                    ) > -1
                  ) {
                    return true;
                  }
                }

                return false;
              },
            });

            var rreturn = /\r/g;

            jQuery.fn.extend({
              val: function (value) {
                var hooks,
                  ret,
                  valueIsFunction,
                  elem = this[0];

                if (!arguments.length) {
                  if (elem) {
                    hooks =
                      jQuery.valHooks[elem.type] ||
                      jQuery.valHooks[elem.nodeName.toLowerCase()];

                    if (
                      hooks &&
                      "get" in hooks &&
                      (ret = hooks.get(elem, "value")) !== undefined
                    ) {
                      return ret;
                    }

                    ret = elem.value;

                    // Handle most common string cases
                    if (typeof ret === "string") {
                      return ret.replace(rreturn, "");
                    }

                    // Handle cases where value is null/undef or number
                    return ret == null ? "" : ret;
                  }

                  return;
                }

                valueIsFunction = isFunction(value);

                return this.each(function (i) {
                  var val;

                  if (this.nodeType !== 1) {
                    return;
                  }

                  if (valueIsFunction) {
                    val = value.call(this, i, jQuery(this).val());
                  } else {
                    val = value;
                  }

                  // Treat null/undefined as ""; convert numbers to string
                  if (val == null) {
                    val = "";
                  } else if (typeof val === "number") {
                    val += "";
                  } else if (Array.isArray(val)) {
                    val = jQuery.map(val, function (value) {
                      return value == null ? "" : value + "";
                    });
                  }

                  hooks =
                    jQuery.valHooks[this.type] ||
                    jQuery.valHooks[this.nodeName.toLowerCase()];

                  // If set returns undefined, fall back to normal setting
                  if (
                    !hooks ||
                    !("set" in hooks) ||
                    hooks.set(this, val, "value") === undefined
                  ) {
                    this.value = val;
                  }
                });
              },
            });

            jQuery.extend({
              valHooks: {
                option: {
                  get: function (elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null
                      ? val
                      : // Support: IE <=10 - 11 only
                        // option.text throws exceptions (trac-14686, trac-14858)
                        // Strip and collapse whitespace
                        // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                        stripAndCollapse(jQuery.text(elem));
                  },
                },
                select: {
                  get: function (elem) {
                    var value,
                      option,
                      i,
                      options = elem.options,
                      index = elem.selectedIndex,
                      one = elem.type === "select-one",
                      values = one ? null : [],
                      max = one ? index + 1 : options.length;

                    if (index < 0) {
                      i = max;
                    } else {
                      i = one ? index : 0;
                    }

                    // Loop through all the selected options
                    for (; i < max; i++) {
                      option = options[i];

                      // Support: IE <=9 only
                      // IE8-9 doesn't update selected after form reset (trac-2551)
                      if (
                        (option.selected || i === index) &&
                        // Don't return options that are disabled or in a disabled optgroup
                        !option.disabled &&
                        (!option.parentNode.disabled ||
                          !nodeName(option.parentNode, "optgroup"))
                      ) {
                        // Get the specific value for the option
                        value = jQuery(option).val();

                        // We don't need an array for one selects
                        if (one) {
                          return value;
                        }

                        // Multi-Selects return an array
                        values.push(value);
                      }
                    }

                    return values;
                  },

                  set: function (elem, value) {
                    var optionSet,
                      option,
                      options = elem.options,
                      values = jQuery.makeArray(value),
                      i = options.length;

                    while (i--) {
                      option = options[i];

                      /* eslint-disable no-cond-assign */

                      if (
                        (option.selected =
                          jQuery.inArray(
                            jQuery.valHooks.option.get(option),
                            values
                          ) > -1)
                      ) {
                        optionSet = true;
                      }

                      /* eslint-enable no-cond-assign */
                    }

                    // Force browsers to behave consistently when non-matching value is set
                    if (!optionSet) {
                      elem.selectedIndex = -1;
                    }
                    return values;
                  },
                },
              },
            });

            // Radios and checkboxes getter/setter
            jQuery.each(["radio", "checkbox"], function () {
              jQuery.valHooks[this] = {
                set: function (elem, value) {
                  if (Array.isArray(value)) {
                    return (elem.checked =
                      jQuery.inArray(jQuery(elem).val(), value) > -1);
                  }
                },
              };
              if (!support.checkOn) {
                jQuery.valHooks[this].get = function (elem) {
                  return elem.getAttribute("value") === null
                    ? "on"
                    : elem.value;
                };
              }
            });

            // Return jQuery for attributes-only inclusion

            support.focusin = "onfocusin" in window;

            var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
              stopPropagationCallback = function (e) {
                e.stopPropagation();
              };

            jQuery.extend(jQuery.event, {
              trigger: function (event, data, elem, onlyHandlers) {
                var i,
                  cur,
                  tmp,
                  bubbleType,
                  ontype,
                  handle,
                  special,
                  lastElement,
                  eventPath = [elem || document],
                  type = hasOwn.call(event, "type") ? event.type : event,
                  namespaces = hasOwn.call(event, "namespace")
                    ? event.namespace.split(".")
                    : [];

                cur = lastElement = tmp = elem = elem || document;

                // Don't do events on text and comment nodes
                if (elem.nodeType === 3 || elem.nodeType === 8) {
                  return;
                }

                // focus/blur morphs to focusin/out; ensure we're not firing them right now
                if (rfocusMorph.test(type + jQuery.event.triggered)) {
                  return;
                }

                if (type.indexOf(".") > -1) {
                  // Namespaced trigger; create a regexp to match event type in handle()
                  namespaces = type.split(".");
                  type = namespaces.shift();
                  namespaces.sort();
                }
                ontype = type.indexOf(":") < 0 && "on" + type;

                // Caller can pass in a jQuery.Event object, Object, or just an event type string
                event = event[jQuery.expando]
                  ? event
                  : new jQuery.Event(type, typeof event === "object" && event);

                // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
                event.isTrigger = onlyHandlers ? 2 : 3;
                event.namespace = namespaces.join(".");
                event.rnamespace = event.namespace
                  ? new RegExp(
                      "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"
                    )
                  : null;

                // Clean up the event in case it is being reused
                event.result = undefined;
                if (!event.target) {
                  event.target = elem;
                }

                // Clone any incoming data and prepend the event, creating the handler arg list
                data = data == null ? [event] : jQuery.makeArray(data, [event]);

                // Allow special events to draw outside the lines
                special = jQuery.event.special[type] || {};
                if (
                  !onlyHandlers &&
                  special.trigger &&
                  special.trigger.apply(elem, data) === false
                ) {
                  return;
                }

                // Determine event propagation path in advance, per W3C events spec (trac-9951)
                // Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
                if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                  bubbleType = special.delegateType || type;
                  if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode;
                  }
                  for (; cur; cur = cur.parentNode) {
                    eventPath.push(cur);
                    tmp = cur;
                  }

                  // Only add window if we got to document (e.g., not plain obj or detached DOM)
                  if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(
                      tmp.defaultView || tmp.parentWindow || window
                    );
                  }
                }

                // Fire handlers on the event path
                i = 0;
                while (
                  (cur = eventPath[i++]) &&
                  !event.isPropagationStopped()
                ) {
                  lastElement = cur;
                  event.type = i > 1 ? bubbleType : special.bindType || type;

                  // jQuery handler
                  handle =
                    (dataPriv.get(cur, "events") || Object.create(null))[
                      event.type
                    ] && dataPriv.get(cur, "handle");
                  if (handle) {
                    handle.apply(cur, data);
                  }

                  // Native handler
                  handle = ontype && cur[ontype];
                  if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) {
                      event.preventDefault();
                    }
                  }
                }
                event.type = type;

                // If nobody prevented the default action, do it now
                if (!onlyHandlers && !event.isDefaultPrevented()) {
                  if (
                    (!special._default ||
                      special._default.apply(eventPath.pop(), data) ===
                        false) &&
                    acceptData(elem)
                  ) {
                    // Call a native DOM method on the target with the same name as the event.
                    // Don't do default actions on window, that's where global variables be (trac-6170)
                    if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                      // Don't re-trigger an onFOO event when we call its FOO() method
                      tmp = elem[ontype];

                      if (tmp) {
                        elem[ontype] = null;
                      }

                      // Prevent re-triggering of the same event, since we already bubbled it above
                      jQuery.event.triggered = type;

                      if (event.isPropagationStopped()) {
                        lastElement.addEventListener(
                          type,
                          stopPropagationCallback
                        );
                      }

                      elem[type]();

                      if (event.isPropagationStopped()) {
                        lastElement.removeEventListener(
                          type,
                          stopPropagationCallback
                        );
                      }

                      jQuery.event.triggered = undefined;

                      if (tmp) {
                        elem[ontype] = tmp;
                      }
                    }
                  }
                }

                return event.result;
              },

              // Piggyback on a donor event to simulate a different one
              // Used only for `focus(in | out)` events
              simulate: function (type, elem, event) {
                var e = jQuery.extend(new jQuery.Event(), event, {
                  type: type,
                  isSimulated: true,
                });

                jQuery.event.trigger(e, null, elem);
              },
            });

            jQuery.fn.extend({
              trigger: function (type, data) {
                return this.each(function () {
                  jQuery.event.trigger(type, data, this);
                });
              },
              triggerHandler: function (type, data) {
                var elem = this[0];
                if (elem) {
                  return jQuery.event.trigger(type, data, elem, true);
                }
              },
            });

            // Support: Firefox <=44
            // Firefox doesn't have focus(in | out) events
            // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
            //
            // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
            // focus(in | out) events fire after focus & blur events,
            // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
            // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
            if (!support.focusin) {
              jQuery.each(
                { focus: "focusin", blur: "focusout" },
                function (orig, fix) {
                  // Attach a single capturing handler on the document while someone wants focusin/focusout
                  var handler = function (event) {
                    jQuery.event.simulate(
                      fix,
                      event.target,
                      jQuery.event.fix(event)
                    );
                  };

                  jQuery.event.special[fix] = {
                    setup: function () {
                      // Handle: regular nodes (via `this.ownerDocument`), window
                      // (via `this.document`) & document (via `this`).
                      var doc = this.ownerDocument || this.document || this,
                        attaches = dataPriv.access(doc, fix);

                      if (!attaches) {
                        doc.addEventListener(orig, handler, true);
                      }
                      dataPriv.access(doc, fix, (attaches || 0) + 1);
                    },
                    teardown: function () {
                      var doc = this.ownerDocument || this.document || this,
                        attaches = dataPriv.access(doc, fix) - 1;

                      if (!attaches) {
                        doc.removeEventListener(orig, handler, true);
                        dataPriv.remove(doc, fix);
                      } else {
                        dataPriv.access(doc, fix, attaches);
                      }
                    },
                  };
                }
              );
            }
            var location = window.location;

            var nonce = { guid: Date.now() };

            var rquery = /\?/;

            // Cross-browser xml parsing
            jQuery.parseXML = function (data) {
              var xml, parserErrorElem;
              if (!data || typeof data !== "string") {
                return null;
              }

              // Support: IE 9 - 11 only
              // IE throws on parseFromString with invalid input.
              try {
                xml = new window.DOMParser().parseFromString(data, "text/xml");
              } catch (e) {}

              parserErrorElem =
                xml && xml.getElementsByTagName("parsererror")[0];
              if (!xml || parserErrorElem) {
                jQuery.error(
                  "Invalid XML: " +
                    (parserErrorElem
                      ? jQuery
                          .map(parserErrorElem.childNodes, function (el) {
                            return el.textContent;
                          })
                          .join("\n")
                      : data)
                );
              }
              return xml;
            };

            var rbracket = /\[\]$/,
              rCRLF = /\r?\n/g,
              rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
              rsubmittable = /^(?:input|select|textarea|keygen)/i;

            function buildParams(prefix, obj, traditional, add) {
              var name;

              if (Array.isArray(obj)) {
                // Serialize array item.
                jQuery.each(obj, function (i, v) {
                  if (traditional || rbracket.test(prefix)) {
                    // Treat each array item as a scalar.
                    add(prefix, v);
                  } else {
                    // Item is non-scalar (array or object), encode its numeric index.
                    buildParams(
                      prefix +
                        "[" +
                        (typeof v === "object" && v != null ? i : "") +
                        "]",
                      v,
                      traditional,
                      add
                    );
                  }
                });
              } else if (!traditional && toType(obj) === "object") {
                // Serialize object item.
                for (name in obj) {
                  buildParams(
                    prefix + "[" + name + "]",
                    obj[name],
                    traditional,
                    add
                  );
                }
              } else {
                // Serialize scalar item.
                add(prefix, obj);
              }
            }

            // Serialize an array of form elements or a set of
            // key/values into a query string
            jQuery.param = function (a, traditional) {
              var prefix,
                s = [],
                add = function (key, valueOrFunction) {
                  // If value is a function, invoke it and use its return value
                  var value = isFunction(valueOrFunction)
                    ? valueOrFunction()
                    : valueOrFunction;

                  s[s.length] =
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(value == null ? "" : value);
                };

              if (a == null) {
                return "";
              }

              // If an array was passed in, assume that it is an array of form elements.
              if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
                // Serialize the form elements
                jQuery.each(a, function () {
                  add(this.name, this.value);
                });
              } else {
                // If traditional, encode the "old" way (the way 1.3.2 or older
                // did it), otherwise encode params recursively.
                for (prefix in a) {
                  buildParams(prefix, a[prefix], traditional, add);
                }
              }

              // Return the resulting serialization
              return s.join("&");
            };

            jQuery.fn.extend({
              serialize: function () {
                return jQuery.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  // Can add propHook for "elements" to filter or add form elements
                  var elements = jQuery.prop(this, "elements");
                  return elements ? jQuery.makeArray(elements) : this;
                })
                  .filter(function () {
                    var type = this.type;

                    // Use .is( ":disabled" ) so that fieldset[disabled] works
                    return (
                      this.name &&
                      !jQuery(this).is(":disabled") &&
                      rsubmittable.test(this.nodeName) &&
                      !rsubmitterTypes.test(type) &&
                      (this.checked || !rcheckableType.test(type))
                    );
                  })
                  .map(function (_i, elem) {
                    var val = jQuery(this).val();

                    if (val == null) {
                      return null;
                    }

                    if (Array.isArray(val)) {
                      return jQuery.map(val, function (val) {
                        return {
                          name: elem.name,
                          value: val.replace(rCRLF, "\r\n"),
                        };
                      });
                    }

                    return {
                      name: elem.name,
                      value: val.replace(rCRLF, "\r\n"),
                    };
                  })
                  .get();
              },
            });

            var r20 = /%20/g,
              rhash = /#.*$/,
              rantiCache = /([?&])_=[^&]*/,
              rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm,
              // trac-7653, trac-8125, trac-8152: local protocol detection
              rlocalProtocol =
                /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
              rnoContent = /^(?:GET|HEAD)$/,
              rprotocol = /^\/\//,
              /* Prefilters
               * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
               * 2) These are called:
               *    - BEFORE asking for a transport
               *    - AFTER param serialization (s.data is a string if s.processData is true)
               * 3) key is the dataType
               * 4) the catchall symbol "*" can be used
               * 5) execution will start with transport dataType and THEN continue down to "*" if needed
               */
              prefilters = {},
              /* Transports bindings
               * 1) key is the dataType
               * 2) the catchall symbol "*" can be used
               * 3) selection will start with transport dataType and THEN go to "*" if needed
               */
              transports = {},
              // Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
              allTypes = "*/".concat("*"),
              // Anchor tag for parsing the document origin
              originAnchor = document.createElement("a");

            originAnchor.href = location.href;

            // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
            function addToPrefiltersOrTransports(structure) {
              // dataTypeExpression is optional and defaults to "*"
              return function (dataTypeExpression, func) {
                if (typeof dataTypeExpression !== "string") {
                  func = dataTypeExpression;
                  dataTypeExpression = "*";
                }

                var dataType,
                  i = 0,
                  dataTypes =
                    dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

                if (isFunction(func)) {
                  // For each dataType in the dataTypeExpression
                  while ((dataType = dataTypes[i++])) {
                    // Prepend if requested
                    if (dataType[0] === "+") {
                      dataType = dataType.slice(1) || "*";
                      (structure[dataType] = structure[dataType] || []).unshift(
                        func
                      );

                      // Otherwise append
                    } else {
                      (structure[dataType] = structure[dataType] || []).push(
                        func
                      );
                    }
                  }
                }
              };
            }

            // Base inspection function for prefilters and transports
            function inspectPrefiltersOrTransports(
              structure,
              options,
              originalOptions,
              jqXHR
            ) {
              var inspected = {},
                seekingTransport = structure === transports;

              function inspect(dataType) {
                var selected;
                inspected[dataType] = true;
                jQuery.each(
                  structure[dataType] || [],
                  function (_, prefilterOrFactory) {
                    var dataTypeOrTransport = prefilterOrFactory(
                      options,
                      originalOptions,
                      jqXHR
                    );
                    if (
                      typeof dataTypeOrTransport === "string" &&
                      !seekingTransport &&
                      !inspected[dataTypeOrTransport]
                    ) {
                      options.dataTypes.unshift(dataTypeOrTransport);
                      inspect(dataTypeOrTransport);
                      return false;
                    } else if (seekingTransport) {
                      return !(selected = dataTypeOrTransport);
                    }
                  }
                );
                return selected;
              }

              return (
                inspect(options.dataTypes[0]) ||
                (!inspected["*"] && inspect("*"))
              );
            }

            // A special extend for ajax options
            // that takes "flat" options (not to be deep extended)
            // Fixes trac-9887
            function ajaxExtend(target, src) {
              var key,
                deep,
                flatOptions = jQuery.ajaxSettings.flatOptions || {};

              for (key in src) {
                if (src[key] !== undefined) {
                  (flatOptions[key] ? target : deep || (deep = {}))[key] =
                    src[key];
                }
              }
              if (deep) {
                jQuery.extend(true, target, deep);
              }

              return target;
            }

            /* Handles responses to an ajax request:
             * - finds the right dataType (mediates between content-type and expected dataType)
             * - returns the corresponding response
             */
            function ajaxHandleResponses(s, jqXHR, responses) {
              var ct,
                type,
                finalDataType,
                firstDataType,
                contents = s.contents,
                dataTypes = s.dataTypes;

              // Remove auto dataType and get content-type in the process
              while (dataTypes[0] === "*") {
                dataTypes.shift();
                if (ct === undefined) {
                  ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                }
              }

              // Check if we're dealing with a known content-type
              if (ct) {
                for (type in contents) {
                  if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                  }
                }
              }

              // Check to see if we have a response for the expected dataType
              if (dataTypes[0] in responses) {
                finalDataType = dataTypes[0];
              } else {
                // Try convertible dataTypes
                for (type in responses) {
                  if (
                    !dataTypes[0] ||
                    s.converters[type + " " + dataTypes[0]]
                  ) {
                    finalDataType = type;
                    break;
                  }
                  if (!firstDataType) {
                    firstDataType = type;
                  }
                }

                // Or just use first one
                finalDataType = finalDataType || firstDataType;
              }

              // If we found a dataType
              // We add the dataType to the list if needed
              // and return the corresponding response
              if (finalDataType) {
                if (finalDataType !== dataTypes[0]) {
                  dataTypes.unshift(finalDataType);
                }
                return responses[finalDataType];
              }
            }

            /* Chain conversions given the request and the original response
             * Also sets the responseXXX fields on the jqXHR instance
             */
            function ajaxConvert(s, response, jqXHR, isSuccess) {
              var conv2,
                current,
                conv,
                tmp,
                prev,
                converters = {},
                // Work with a copy of dataTypes in case we need to modify it for conversion
                dataTypes = s.dataTypes.slice();

              // Create converters map with lowercased keys
              if (dataTypes[1]) {
                for (conv in s.converters) {
                  converters[conv.toLowerCase()] = s.converters[conv];
                }
              }

              current = dataTypes.shift();

              // Convert to each sequential dataType
              while (current) {
                if (s.responseFields[current]) {
                  jqXHR[s.responseFields[current]] = response;
                }

                // Apply the dataFilter if provided
                if (!prev && isSuccess && s.dataFilter) {
                  response = s.dataFilter(response, s.dataType);
                }

                prev = current;
                current = dataTypes.shift();

                if (current) {
                  // There's only work to do if current dataType is non-auto
                  if (current === "*") {
                    current = prev;

                    // Convert response if prev dataType is non-auto and differs from current
                  } else if (prev !== "*" && prev !== current) {
                    // Seek a direct converter
                    conv =
                      converters[prev + " " + current] ||
                      converters["* " + current];

                    // If none found, seek a pair
                    if (!conv) {
                      for (conv2 in converters) {
                        // If conv2 outputs current
                        tmp = conv2.split(" ");
                        if (tmp[1] === current) {
                          // If prev can be converted to accepted input
                          conv =
                            converters[prev + " " + tmp[0]] ||
                            converters["* " + tmp[0]];
                          if (conv) {
                            // Condense equivalence converters
                            if (conv === true) {
                              conv = converters[conv2];

                              // Otherwise, insert the intermediate dataType
                            } else if (converters[conv2] !== true) {
                              current = tmp[0];
                              dataTypes.unshift(tmp[1]);
                            }
                            break;
                          }
                        }
                      }
                    }

                    // Apply converter (if not an equivalence)
                    if (conv !== true) {
                      // Unless errors are allowed to bubble, catch and return them
                      if (conv && s.throws) {
                        response = conv(response);
                      } else {
                        try {
                          response = conv(response);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: conv
                              ? e
                              : "No conversion from " + prev + " to " + current,
                          };
                        }
                      }
                    }
                  }
                }
              }

              return { state: "success", data: response };
            }

            jQuery.extend({
              // Counter for holding the number of active queries
              active: 0,

              // Last-Modified header cache for next request
              lastModified: {},
              etag: {},

              ajaxSettings: {
                url: location.href,
                type: "GET",
                isLocal: rlocalProtocol.test(location.protocol),
                global: true,
                processData: true,
                async: true,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",

                /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

                accepts: {
                  "*": allTypes,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },

                contents: {
                  xml: /\bxml\b/,
                  html: /\bhtml/,
                  json: /\bjson\b/,
                },

                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },

                // Data converters
                // Keys separate source (or catchall "*") and destination types with a single space
                converters: {
                  // Convert anything to text
                  "* text": String,

                  // Text to html (true = no transformation)
                  "text html": true,

                  // Evaluate text as a json expression
                  "text json": JSON.parse,

                  // Parse text as xml
                  "text xml": jQuery.parseXML,
                },

                // For options that shouldn't be deep extended:
                // you can add your own custom options here if
                // and when you create one that shouldn't be
                // deep extended (see ajaxExtend)
                flatOptions: {
                  url: true,
                  context: true,
                },
              },

              // Creates a full fledged settings object into target
              // with both ajaxSettings and settings fields.
              // If target is omitted, writes into ajaxSettings.
              ajaxSetup: function (target, settings) {
                return settings
                  ? // Building a settings object
                    ajaxExtend(
                      ajaxExtend(target, jQuery.ajaxSettings),
                      settings
                    )
                  : // Extending ajaxSettings
                    ajaxExtend(jQuery.ajaxSettings, target);
              },

              ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
              ajaxTransport: addToPrefiltersOrTransports(transports),

              // Main method
              ajax: function (url, options) {
                // If url is an object, simulate pre-1.5 signature
                if (typeof url === "object") {
                  options = url;
                  url = undefined;
                }

                // Force options to be an object
                options = options || {};

                var transport,
                  // URL without anti-cache param
                  cacheURL,
                  // Response headers
                  responseHeadersString,
                  responseHeaders,
                  // timeout handle
                  timeoutTimer,
                  // Url cleanup var
                  urlAnchor,
                  // Request state (becomes false upon send and true upon completion)
                  completed,
                  // To know if global events are to be dispatched
                  fireGlobals,
                  // Loop variable
                  i,
                  // uncached part of the url
                  uncached,
                  // Create the final options object
                  s = jQuery.ajaxSetup({}, options),
                  // Callbacks context
                  callbackContext = s.context || s,
                  // Context for global events is callbackContext if it is a DOM node or jQuery collection
                  globalEventContext =
                    s.context &&
                    (callbackContext.nodeType || callbackContext.jquery)
                      ? jQuery(callbackContext)
                      : jQuery.event,
                  // Deferreds
                  deferred = jQuery.Deferred(),
                  completeDeferred = jQuery.Callbacks("once memory"),
                  // Status-dependent callbacks
                  statusCode = s.statusCode || {},
                  // Headers (they are sent all at once)
                  requestHeaders = {},
                  requestHeadersNames = {},
                  // Default abort message
                  strAbort = "canceled",
                  // Fake xhr
                  jqXHR = {
                    readyState: 0,

                    // Builds headers hashtable if needed
                    getResponseHeader: function (key) {
                      var match;
                      if (completed) {
                        if (!responseHeaders) {
                          responseHeaders = {};
                          while (
                            (match = rheaders.exec(responseHeadersString))
                          ) {
                            responseHeaders[match[1].toLowerCase() + " "] = (
                              responseHeaders[match[1].toLowerCase() + " "] ||
                              []
                            ).concat(match[2]);
                          }
                        }
                        match = responseHeaders[key.toLowerCase() + " "];
                      }
                      return match == null ? null : match.join(", ");
                    },

                    // Raw string
                    getAllResponseHeaders: function () {
                      return completed ? responseHeadersString : null;
                    },

                    // Caches the header
                    setRequestHeader: function (name, value) {
                      if (completed == null) {
                        name = requestHeadersNames[name.toLowerCase()] =
                          requestHeadersNames[name.toLowerCase()] || name;
                        requestHeaders[name] = value;
                      }
                      return this;
                    },

                    // Overrides response content-type header
                    overrideMimeType: function (type) {
                      if (completed == null) {
                        s.mimeType = type;
                      }
                      return this;
                    },

                    // Status-dependent callbacks
                    statusCode: function (map) {
                      var code;
                      if (map) {
                        if (completed) {
                          // Execute the appropriate callbacks
                          jqXHR.always(map[jqXHR.status]);
                        } else {
                          // Lazy-add the new callbacks in a way that preserves old ones
                          for (code in map) {
                            statusCode[code] = [statusCode[code], map[code]];
                          }
                        }
                      }
                      return this;
                    },

                    // Cancel the request
                    abort: function (statusText) {
                      var finalText = statusText || strAbort;
                      if (transport) {
                        transport.abort(finalText);
                      }
                      done(0, finalText);
                      return this;
                    },
                  };

                // Attach deferreds
                deferred.promise(jqXHR);

                // Add protocol if not provided (prefilters might expect it)
                // Handle falsy url in the settings object (trac-10093: consistency with old signature)
                // We also use the url parameter if available
                s.url = ((url || s.url || location.href) + "").replace(
                  rprotocol,
                  location.protocol + "//"
                );

                // Alias method option to type as per ticket trac-12004
                s.type = options.method || options.type || s.method || s.type;

                // Extract dataTypes list
                s.dataTypes = (s.dataType || "*")
                  .toLowerCase()
                  .match(rnothtmlwhite) || [""];

                // A cross-domain request is in order when the origin doesn't match the current origin.
                if (s.crossDomain == null) {
                  urlAnchor = document.createElement("a");

                  // Support: IE <=8 - 11, Edge 12 - 15
                  // IE throws exception on accessing the href property if url is malformed,
                  // e.g. http://example.com:80x/
                  try {
                    urlAnchor.href = s.url;

                    // Support: IE <=8 - 11 only
                    // Anchor's host property isn't correctly set when s.url is relative
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain =
                      originAnchor.protocol + "//" + originAnchor.host !==
                      urlAnchor.protocol + "//" + urlAnchor.host;
                  } catch (e) {
                    // If there is an error parsing the URL, assume it is crossDomain,
                    // it can be rejected by the transport if it is invalid
                    s.crossDomain = true;
                  }
                }

                // Convert data if not already a string
                if (s.data && s.processData && typeof s.data !== "string") {
                  s.data = jQuery.param(s.data, s.traditional);
                }

                // Apply prefilters
                inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

                // If request was aborted inside a prefilter, stop there
                if (completed) {
                  return jqXHR;
                }

                // We can fire global events as of now if asked to
                // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
                fireGlobals = jQuery.event && s.global;

                // Watch for a new set of requests
                if (fireGlobals && jQuery.active++ === 0) {
                  jQuery.event.trigger("ajaxStart");
                }

                // Uppercase the type
                s.type = s.type.toUpperCase();

                // Determine if request has content
                s.hasContent = !rnoContent.test(s.type);

                // Save the URL in case we're toying with the If-Modified-Since
                // and/or If-None-Match header later on
                // Remove hash to simplify url manipulation
                cacheURL = s.url.replace(rhash, "");

                // More options handling for requests with no content
                if (!s.hasContent) {
                  // Remember the hash so we can put it back
                  uncached = s.url.slice(cacheURL.length);

                  // If data is available and should be processed, append data to url
                  if (s.data && (s.processData || typeof s.data === "string")) {
                    cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

                    // trac-9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                  }

                  // Add or update anti-cache param if needed
                  if (s.cache === false) {
                    cacheURL = cacheURL.replace(rantiCache, "$1");
                    uncached =
                      (rquery.test(cacheURL) ? "&" : "?") +
                      "_=" +
                      nonce.guid++ +
                      uncached;
                  }

                  // Put hash and anti-cache on the URL that will be requested (gh-1732)
                  s.url = cacheURL + uncached;

                  // Change '%20' to '+' if this is encoded form body content (gh-2658)
                } else if (
                  s.data &&
                  s.processData &&
                  (s.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) === 0
                ) {
                  s.data = s.data.replace(r20, "+");
                }

                // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                if (s.ifModified) {
                  if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader(
                      "If-Modified-Since",
                      jQuery.lastModified[cacheURL]
                    );
                  }
                  if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader(
                      "If-None-Match",
                      jQuery.etag[cacheURL]
                    );
                  }
                }

                // Set the correct header, if data is being sent
                if (
                  (s.data && s.hasContent && s.contentType !== false) ||
                  options.contentType
                ) {
                  jqXHR.setRequestHeader("Content-Type", s.contentType);
                }

                // Set the Accepts header for the server, depending on the dataType
                jqXHR.setRequestHeader(
                  "Accept",
                  s.dataTypes[0] && s.accepts[s.dataTypes[0]]
                    ? s.accepts[s.dataTypes[0]] +
                        (s.dataTypes[0] !== "*"
                          ? ", " + allTypes + "; q=0.01"
                          : "")
                    : s.accepts["*"]
                );

                // Check for headers option
                for (i in s.headers) {
                  jqXHR.setRequestHeader(i, s.headers[i]);
                }

                // Allow custom headers/mimetypes and early abort
                if (
                  s.beforeSend &&
                  (s.beforeSend.call(callbackContext, jqXHR, s) === false ||
                    completed)
                ) {
                  // Abort if not done already and return
                  return jqXHR.abort();
                }

                // Aborting is no longer a cancellation
                strAbort = "abort";

                // Install callbacks on deferreds
                completeDeferred.add(s.complete);
                jqXHR.done(s.success);
                jqXHR.fail(s.error);

                // Get transport
                transport = inspectPrefiltersOrTransports(
                  transports,
                  s,
                  options,
                  jqXHR
                );

                // If no transport, we auto-abort
                if (!transport) {
                  done(-1, "No Transport");
                } else {
                  jqXHR.readyState = 1;

                  // Send global event
                  if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [jqXHR, s]);
                  }

                  // If request was aborted inside ajaxSend, stop there
                  if (completed) {
                    return jqXHR;
                  }

                  // Timeout
                  if (s.async && s.timeout > 0) {
                    timeoutTimer = window.setTimeout(function () {
                      jqXHR.abort("timeout");
                    }, s.timeout);
                  }

                  try {
                    completed = false;
                    transport.send(requestHeaders, done);
                  } catch (e) {
                    // Rethrow post-completion exceptions
                    if (completed) {
                      throw e;
                    }

                    // Propagate others as results
                    done(-1, e);
                  }
                }

                // Callback for when everything is done
                function done(status, nativeStatusText, responses, headers) {
                  var isSuccess,
                    success,
                    error,
                    response,
                    modified,
                    statusText = nativeStatusText;

                  // Ignore repeat invocations
                  if (completed) {
                    return;
                  }

                  completed = true;

                  // Clear timeout if it exists
                  if (timeoutTimer) {
                    window.clearTimeout(timeoutTimer);
                  }

                  // Dereference transport for early garbage collection
                  // (no matter how long the jqXHR object will be used)
                  transport = undefined;

                  // Cache response headers
                  responseHeadersString = headers || "";

                  // Set readyState
                  jqXHR.readyState = status > 0 ? 4 : 0;

                  // Determine if successful
                  isSuccess = (status >= 200 && status < 300) || status === 304;

                  // Get response data
                  if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses);
                  }

                  // Use a noop converter for missing script but not if jsonp
                  if (
                    !isSuccess &&
                    jQuery.inArray("script", s.dataTypes) > -1 &&
                    jQuery.inArray("json", s.dataTypes) < 0
                  ) {
                    s.converters["text script"] = function () {};
                  }

                  // Convert no matter what (that way responseXXX fields are always set)
                  response = ajaxConvert(s, response, jqXHR, isSuccess);

                  // If successful, handle type chaining
                  if (isSuccess) {
                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                      modified = jqXHR.getResponseHeader("Last-Modified");
                      if (modified) {
                        jQuery.lastModified[cacheURL] = modified;
                      }
                      modified = jqXHR.getResponseHeader("etag");
                      if (modified) {
                        jQuery.etag[cacheURL] = modified;
                      }
                    }

                    // if no content
                    if (status === 204 || s.type === "HEAD") {
                      statusText = "nocontent";

                      // if not modified
                    } else if (status === 304) {
                      statusText = "notmodified";

                      // If we have data, let's convert it
                    } else {
                      statusText = response.state;
                      success = response.data;
                      error = response.error;
                      isSuccess = !error;
                    }
                  } else {
                    // Extract error from statusText and normalize for non-aborts
                    error = statusText;
                    if (status || !statusText) {
                      statusText = "error";
                      if (status < 0) {
                        status = 0;
                      }
                    }
                  }

                  // Set data for the fake xhr object
                  jqXHR.status = status;
                  jqXHR.statusText = (nativeStatusText || statusText) + "";

                  // Success/Error
                  if (isSuccess) {
                    deferred.resolveWith(callbackContext, [
                      success,
                      statusText,
                      jqXHR,
                    ]);
                  } else {
                    deferred.rejectWith(callbackContext, [
                      jqXHR,
                      statusText,
                      error,
                    ]);
                  }

                  // Status-dependent callbacks
                  jqXHR.statusCode(statusCode);
                  statusCode = undefined;

                  if (fireGlobals) {
                    globalEventContext.trigger(
                      isSuccess ? "ajaxSuccess" : "ajaxError",
                      [jqXHR, s, isSuccess ? success : error]
                    );
                  }

                  // Complete
                  completeDeferred.fireWith(callbackContext, [
                    jqXHR,
                    statusText,
                  ]);

                  if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

                    // Handle the global AJAX counter
                    if (!--jQuery.active) {
                      jQuery.event.trigger("ajaxStop");
                    }
                  }
                }

                return jqXHR;
              },

              getJSON: function (url, data, callback) {
                return jQuery.get(url, data, callback, "json");
              },

              getScript: function (url, callback) {
                return jQuery.get(url, undefined, callback, "script");
              },
            });

            jQuery.each(["get", "post"], function (_i, method) {
              jQuery[method] = function (url, data, callback, type) {
                // Shift arguments if data argument was omitted
                if (isFunction(data)) {
                  type = type || callback;
                  callback = data;
                  data = undefined;
                }

                // The url can be an options object (which then must have .url)
                return jQuery.ajax(
                  jQuery.extend(
                    {
                      url: url,
                      type: method,
                      dataType: type,
                      data: data,
                      success: callback,
                    },
                    jQuery.isPlainObject(url) && url
                  )
                );
              };
            });

            jQuery.ajaxPrefilter(function (s) {
              var i;
              for (i in s.headers) {
                if (i.toLowerCase() === "content-type") {
                  s.contentType = s.headers[i] || "";
                }
              }
            });

            jQuery._evalUrl = function (url, options, doc) {
              return jQuery.ajax({
                url: url,

                // Make this explicit, since user can override this through ajaxSetup (trac-11264)
                type: "GET",
                dataType: "script",
                cache: true,
                async: false,
                global: false,

                // Only evaluate the response if it is successful (gh-4126)
                // dataFilter is not invoked for failure responses, so using it instead
                // of the default converter is kludgy but it works.
                converters: {
                  "text script": function () {},
                },
                dataFilter: function (response) {
                  jQuery.globalEval(response, options, doc);
                },
              });
            };

            jQuery.fn.extend({
              wrapAll: function (html) {
                var wrap;

                if (this[0]) {
                  if (isFunction(html)) {
                    html = html.call(this[0]);
                  }

                  // The elements to wrap the target around
                  wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

                  if (this[0].parentNode) {
                    wrap.insertBefore(this[0]);
                  }

                  wrap
                    .map(function () {
                      var elem = this;

                      while (elem.firstElementChild) {
                        elem = elem.firstElementChild;
                      }

                      return elem;
                    })
                    .append(this);
                }

                return this;
              },

              wrapInner: function (html) {
                if (isFunction(html)) {
                  return this.each(function (i) {
                    jQuery(this).wrapInner(html.call(this, i));
                  });
                }

                return this.each(function () {
                  var self = jQuery(this),
                    contents = self.contents();

                  if (contents.length) {
                    contents.wrapAll(html);
                  } else {
                    self.append(html);
                  }
                });
              },

              wrap: function (html) {
                var htmlIsFunction = isFunction(html);

                return this.each(function (i) {
                  jQuery(this).wrapAll(
                    htmlIsFunction ? html.call(this, i) : html
                  );
                });
              },

              unwrap: function (selector) {
                this.parent(selector)
                  .not("body")
                  .each(function () {
                    jQuery(this).replaceWith(this.childNodes);
                  });
                return this;
              },
            });

            jQuery.expr.pseudos.hidden = function (elem) {
              return !jQuery.expr.pseudos.visible(elem);
            };
            jQuery.expr.pseudos.visible = function (elem) {
              return !!(
                elem.offsetWidth ||
                elem.offsetHeight ||
                elem.getClientRects().length
              );
            };

            jQuery.ajaxSettings.xhr = function () {
              try {
                return new window.XMLHttpRequest();
              } catch (e) {}
            };

            var xhrSuccessStatus = {
                // File protocol always yields status code 0, assume 200
                0: 200,

                // Support: IE <=9 only
                // trac-1450: sometimes IE returns 1223 when it should be 204
                1223: 204,
              },
              xhrSupported = jQuery.ajaxSettings.xhr();

            support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
            support.ajax = xhrSupported = !!xhrSupported;

            jQuery.ajaxTransport(function (options) {
              var callback, errorCallback;

              // Cross domain only allowed if supported through XMLHttpRequest
              if (support.cors || (xhrSupported && !options.crossDomain)) {
                return {
                  send: function (headers, complete) {
                    var i,
                      xhr = options.xhr();

                    xhr.open(
                      options.type,
                      options.url,
                      options.async,
                      options.username,
                      options.password
                    );

                    // Apply custom fields if provided
                    if (options.xhrFields) {
                      for (i in options.xhrFields) {
                        xhr[i] = options.xhrFields[i];
                      }
                    }

                    // Override mime type if needed
                    if (options.mimeType && xhr.overrideMimeType) {
                      xhr.overrideMimeType(options.mimeType);
                    }

                    // X-Requested-With header
                    // For cross-domain requests, seeing as conditions for a preflight are
                    // akin to a jigsaw puzzle, we simply never set it to be sure.
                    // (it can always be set on a per-request basis or even using ajaxSetup)
                    // For same-domain requests, won't change header if already provided.
                    if (!options.crossDomain && !headers["X-Requested-With"]) {
                      headers["X-Requested-With"] = "XMLHttpRequest";
                    }

                    // Set headers
                    for (i in headers) {
                      xhr.setRequestHeader(i, headers[i]);
                    }

                    // Callback
                    callback = function (type) {
                      return function () {
                        if (callback) {
                          callback =
                            errorCallback =
                            xhr.onload =
                            xhr.onerror =
                            xhr.onabort =
                            xhr.ontimeout =
                            xhr.onreadystatechange =
                              null;

                          if (type === "abort") {
                            xhr.abort();
                          } else if (type === "error") {
                            // Support: IE <=9 only
                            // On a manual native abort, IE9 throws
                            // errors on any property access that is not readyState
                            if (typeof xhr.status !== "number") {
                              complete(0, "error");
                            } else {
                              complete(
                                // File: protocol always yields status 0; see trac-8605, trac-14207
                                xhr.status,
                                xhr.statusText
                              );
                            }
                          } else {
                            complete(
                              xhrSuccessStatus[xhr.status] || xhr.status,
                              xhr.statusText,

                              // Support: IE <=9 only
                              // IE9 has no XHR2 but throws on binary (trac-11426)
                              // For XHR2 non-text, let the caller handle it (gh-2498)
                              (xhr.responseType || "text") !== "text" ||
                                typeof xhr.responseText !== "string"
                                ? { binary: xhr.response }
                                : { text: xhr.responseText },
                              xhr.getAllResponseHeaders()
                            );
                          }
                        }
                      };
                    };

                    // Listen to events
                    xhr.onload = callback();
                    errorCallback =
                      xhr.onerror =
                      xhr.ontimeout =
                        callback("error");

                    // Support: IE 9 only
                    // Use onreadystatechange to replace onabort
                    // to handle uncaught aborts
                    if (xhr.onabort !== undefined) {
                      xhr.onabort = errorCallback;
                    } else {
                      xhr.onreadystatechange = function () {
                        // Check readyState before timeout as it changes
                        if (xhr.readyState === 4) {
                          // Allow onerror to be called first,
                          // but that will not handle a native abort
                          // Also, save errorCallback to a variable
                          // as xhr.onerror cannot be accessed
                          window.setTimeout(function () {
                            if (callback) {
                              errorCallback();
                            }
                          });
                        }
                      };
                    }

                    // Create the abort callback
                    callback = callback("abort");

                    try {
                      // Do send the request (this may raise an exception)
                      xhr.send((options.hasContent && options.data) || null);
                    } catch (e) {
                      // trac-14683: Only rethrow if this hasn't been notified as an error yet
                      if (callback) {
                        throw e;
                      }
                    }
                  },

                  abort: function () {
                    if (callback) {
                      callback();
                    }
                  },
                };
              }
            });

            // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
            jQuery.ajaxPrefilter(function (s) {
              if (s.crossDomain) {
                s.contents.script = false;
              }
            });

            // Install script dataType
            jQuery.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, " +
                  "application/ecmascript, application/x-ecmascript",
              },
              contents: {
                script: /\b(?:java|ecma)script\b/,
              },
              converters: {
                "text script": function (text) {
                  jQuery.globalEval(text);
                  return text;
                },
              },
            });

            // Handle cache's special case and crossDomain
            jQuery.ajaxPrefilter("script", function (s) {
              if (s.cache === undefined) {
                s.cache = false;
              }
              if (s.crossDomain) {
                s.type = "GET";
              }
            });

            // Bind script tag hack transport
            jQuery.ajaxTransport("script", function (s) {
              // This transport only deals with cross domain or forced-by-attrs requests
              if (s.crossDomain || s.scriptAttrs) {
                var script, callback;
                return {
                  send: function (_, complete) {
                    script = jQuery("<script>")
                      .attr(s.scriptAttrs || {})
                      .prop({ charset: s.scriptCharset, src: s.url })
                      .on(
                        "load error",
                        (callback = function (evt) {
                          script.remove();
                          callback = null;
                          if (evt) {
                            complete(
                              evt.type === "error" ? 404 : 200,
                              evt.type
                            );
                          }
                        })
                      );

                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    document.head.appendChild(script[0]);
                  },
                  abort: function () {
                    if (callback) {
                      callback();
                    }
                  },
                };
              }
            });

            var oldCallbacks = [],
              rjsonp = /(=)\?(?=&|$)|\?\?/;

            // Default jsonp settings
            jQuery.ajaxSetup({
              jsonp: "callback",
              jsonpCallback: function () {
                var callback =
                  oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
                this[callback] = true;
                return callback;
              },
            });

            // Detect, normalize options and install callbacks for jsonp requests
            jQuery.ajaxPrefilter(
              "json jsonp",
              function (s, originalSettings, jqXHR) {
                var callbackName,
                  overwritten,
                  responseContainer,
                  jsonProp =
                    s.jsonp !== false &&
                    (rjsonp.test(s.url)
                      ? "url"
                      : typeof s.data === "string" &&
                        (s.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) === 0 &&
                        rjsonp.test(s.data) &&
                        "data");

                // Handle iff the expected data type is "jsonp" or we have a parameter to set
                if (jsonProp || s.dataTypes[0] === "jsonp") {
                  // Get callback name, remembering preexisting value associated with it
                  callbackName = s.jsonpCallback = isFunction(s.jsonpCallback)
                    ? s.jsonpCallback()
                    : s.jsonpCallback;

                  // Insert callback into url or form data
                  if (jsonProp) {
                    s[jsonProp] = s[jsonProp].replace(
                      rjsonp,
                      "$1" + callbackName
                    );
                  } else if (s.jsonp !== false) {
                    s.url +=
                      (rquery.test(s.url) ? "&" : "?") +
                      s.jsonp +
                      "=" +
                      callbackName;
                  }

                  // Use data converter to retrieve json after script execution
                  s.converters["script json"] = function () {
                    if (!responseContainer) {
                      jQuery.error(callbackName + " was not called");
                    }
                    return responseContainer[0];
                  };

                  // Force json dataType
                  s.dataTypes[0] = "json";

                  // Install callback
                  overwritten = window[callbackName];
                  window[callbackName] = function () {
                    responseContainer = arguments;
                  };

                  // Clean-up function (fires after converters)
                  jqXHR.always(function () {
                    // If previous value didn't exist - remove it
                    if (overwritten === undefined) {
                      jQuery(window).removeProp(callbackName);

                      // Otherwise restore preexisting value
                    } else {
                      window[callbackName] = overwritten;
                    }

                    // Save back as free
                    if (s[callbackName]) {
                      // Make sure that re-using the options doesn't screw things around
                      s.jsonpCallback = originalSettings.jsonpCallback;

                      // Save the callback name for future use
                      oldCallbacks.push(callbackName);
                    }

                    // Call if it was a function and we have a response
                    if (responseContainer && isFunction(overwritten)) {
                      overwritten(responseContainer[0]);
                    }

                    responseContainer = overwritten = undefined;
                  });

                  // Delegate to script
                  return "script";
                }
              }
            );

            // Support: Safari 8 only
            // In Safari 8 documents created via document.implementation.createHTMLDocument
            // collapse sibling forms: the second one becomes a child of the first one.
            // Because of that, this security measure has to be disabled in Safari 8.
            // https://bugs.webkit.org/show_bug.cgi?id=137337
            support.createHTMLDocument = (function () {
              var body = document.implementation.createHTMLDocument("").body;
              body.innerHTML = "<form></form><form></form>";
              return body.childNodes.length === 2;
            })();

            // Argument "data" should be string of html
            // context (optional): If specified, the fragment will be created in this context,
            // defaults to document
            // keepScripts (optional): If true, will include scripts passed in the html string
            jQuery.parseHTML = function (data, context, keepScripts) {
              if (typeof data !== "string") {
                return [];
              }
              if (typeof context === "boolean") {
                keepScripts = context;
                context = false;
              }

              var base, parsed, scripts;

              if (!context) {
                // Stop scripts or inline event handlers from being executed immediately
                // by using document.implementation
                if (support.createHTMLDocument) {
                  context = document.implementation.createHTMLDocument("");

                  // Set the base href for the created document
                  // so any parsed elements with URLs
                  // are based on the document's URL (gh-2965)
                  base = context.createElement("base");
                  base.href = document.location.href;
                  context.head.appendChild(base);
                } else {
                  context = document;
                }
              }

              parsed = rsingleTag.exec(data);
              scripts = !keepScripts && [];

              // Single tag
              if (parsed) {
                return [context.createElement(parsed[1])];
              }

              parsed = buildFragment([data], context, scripts);

              if (scripts && scripts.length) {
                jQuery(scripts).remove();
              }

              return jQuery.merge([], parsed.childNodes);
            };

            /**
             * Load a url into a page
             */
            jQuery.fn.load = function (url, params, callback) {
              var selector,
                type,
                response,
                self = this,
                off = url.indexOf(" ");

              if (off > -1) {
                selector = stripAndCollapse(url.slice(off));
                url = url.slice(0, off);
              }

              // If it's a function
              if (isFunction(params)) {
                // We assume that it's the callback
                callback = params;
                params = undefined;

                // Otherwise, build a param string
              } else if (params && typeof params === "object") {
                type = "POST";
              }

              // If we have elements to modify, make the request
              if (self.length > 0) {
                jQuery
                  .ajax({
                    url: url,

                    // If "type" variable is undefined, then "GET" method will be used.
                    // Make value of this field explicit since
                    // user can override it through ajaxSetup method
                    type: type || "GET",
                    dataType: "html",
                    data: params,
                  })
                  .done(function (responseText) {
                    // Save response for use in complete callback
                    response = arguments;

                    self.html(
                      selector
                        ? // If a selector was specified, locate the right elements in a dummy div
                          // Exclude scripts to avoid IE 'Permission Denied' errors
                          jQuery("<div>")
                            .append(jQuery.parseHTML(responseText))
                            .find(selector)
                        : // Otherwise use the full result
                          responseText
                    );

                    // If the request succeeds, this function gets "data", "status", "jqXHR"
                    // but they are ignored because response was set above.
                    // If it fails, this function gets "jqXHR", "status", "error"
                  })
                  .always(
                    callback &&
                      function (jqXHR, status) {
                        self.each(function () {
                          callback.apply(
                            this,
                            response || [jqXHR.responseText, status, jqXHR]
                          );
                        });
                      }
                  );
              }

              return this;
            };

            jQuery.expr.pseudos.animated = function (elem) {
              return jQuery.grep(jQuery.timers, function (fn) {
                return elem === fn.elem;
              }).length;
            };

            jQuery.offset = {
              setOffset: function (elem, options, i) {
                var curPosition,
                  curLeft,
                  curCSSTop,
                  curTop,
                  curOffset,
                  curCSSLeft,
                  calculatePosition,
                  position = jQuery.css(elem, "position"),
                  curElem = jQuery(elem),
                  props = {};

                // Set position first, in-case top/left are set even on static elem
                if (position === "static") {
                  elem.style.position = "relative";
                }

                curOffset = curElem.offset();
                curCSSTop = jQuery.css(elem, "top");
                curCSSLeft = jQuery.css(elem, "left");
                calculatePosition =
                  (position === "absolute" || position === "fixed") &&
                  (curCSSTop + curCSSLeft).indexOf("auto") > -1;

                // Need to be able to calculate position if either
                // top or left is auto and position is either absolute or fixed
                if (calculatePosition) {
                  curPosition = curElem.position();
                  curTop = curPosition.top;
                  curLeft = curPosition.left;
                } else {
                  curTop = parseFloat(curCSSTop) || 0;
                  curLeft = parseFloat(curCSSLeft) || 0;
                }

                if (isFunction(options)) {
                  // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
                  options = options.call(elem, i, jQuery.extend({}, curOffset));
                }

                if (options.top != null) {
                  props.top = options.top - curOffset.top + curTop;
                }
                if (options.left != null) {
                  props.left = options.left - curOffset.left + curLeft;
                }

                if ("using" in options) {
                  options.using.call(elem, props);
                } else {
                  curElem.css(props);
                }
              },
            };

            jQuery.fn.extend({
              // offset() relates an element's border box to the document origin
              offset: function (options) {
                // Preserve chaining for setter
                if (arguments.length) {
                  return options === undefined
                    ? this
                    : this.each(function (i) {
                        jQuery.offset.setOffset(this, options, i);
                      });
                }

                var rect,
                  win,
                  elem = this[0];

                if (!elem) {
                  return;
                }

                // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
                // Support: IE <=11 only
                // Running getBoundingClientRect on a
                // disconnected node in IE throws an error
                if (!elem.getClientRects().length) {
                  return { top: 0, left: 0 };
                }

                // Get document-relative position by adding viewport scroll to viewport-relative gBCR
                rect = elem.getBoundingClientRect();
                win = elem.ownerDocument.defaultView;
                return {
                  top: rect.top + win.pageYOffset,
                  left: rect.left + win.pageXOffset,
                };
              },

              // position() relates an element's margin box to its offset parent's padding box
              // This corresponds to the behavior of CSS absolute positioning
              position: function () {
                if (!this[0]) {
                  return;
                }

                var offsetParent,
                  offset,
                  doc,
                  elem = this[0],
                  parentOffset = { top: 0, left: 0 };

                // position:fixed elements are offset from the viewport, which itself always has zero offset
                if (jQuery.css(elem, "position") === "fixed") {
                  // Assume position:fixed implies availability of getBoundingClientRect
                  offset = elem.getBoundingClientRect();
                } else {
                  offset = this.offset();

                  // Account for the *real* offset parent, which can be the document or its root element
                  // when a statically positioned element is identified
                  doc = elem.ownerDocument;
                  offsetParent = elem.offsetParent || doc.documentElement;
                  while (
                    offsetParent &&
                    (offsetParent === doc.body ||
                      offsetParent === doc.documentElement) &&
                    jQuery.css(offsetParent, "position") === "static"
                  ) {
                    offsetParent = offsetParent.parentNode;
                  }
                  if (
                    offsetParent &&
                    offsetParent !== elem &&
                    offsetParent.nodeType === 1
                  ) {
                    // Incorporate borders into its offset, since they are outside its content origin
                    parentOffset = jQuery(offsetParent).offset();
                    parentOffset.top += jQuery.css(
                      offsetParent,
                      "borderTopWidth",
                      true
                    );
                    parentOffset.left += jQuery.css(
                      offsetParent,
                      "borderLeftWidth",
                      true
                    );
                  }
                }

                // Subtract parent offsets and element margins
                return {
                  top:
                    offset.top -
                    parentOffset.top -
                    jQuery.css(elem, "marginTop", true),
                  left:
                    offset.left -
                    parentOffset.left -
                    jQuery.css(elem, "marginLeft", true),
                };
              },

              // This method will return documentElement in the following cases:
              // 1) For the element inside the iframe without offsetParent, this method will return
              //    documentElement of the parent window
              // 2) For the hidden or detached element
              // 3) For body or html element, i.e. in case of the html node - it will return itself
              //
              // but those exceptions were never presented as a real life use-cases
              // and might be considered as more preferable results.
              //
              // This logic, however, is not guaranteed and can change at any point in the future
              offsetParent: function () {
                return this.map(function () {
                  var offsetParent = this.offsetParent;

                  while (
                    offsetParent &&
                    jQuery.css(offsetParent, "position") === "static"
                  ) {
                    offsetParent = offsetParent.offsetParent;
                  }

                  return offsetParent || documentElement;
                });
              },
            });

            // Create scrollLeft and scrollTop methods
            jQuery.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (method, prop) {
                var top = "pageYOffset" === prop;

                jQuery.fn[method] = function (val) {
                  return access(
                    this,
                    function (elem, method, val) {
                      // Coalesce documents and windows
                      var win;
                      if (isWindow(elem)) {
                        win = elem;
                      } else if (elem.nodeType === 9) {
                        win = elem.defaultView;
                      }

                      if (val === undefined) {
                        return win ? win[prop] : elem[method];
                      }

                      if (win) {
                        win.scrollTo(
                          !top ? val : win.pageXOffset,
                          top ? val : win.pageYOffset
                        );
                      } else {
                        elem[method] = val;
                      }
                    },
                    method,
                    val,
                    arguments.length
                  );
                };
              }
            );

            // Support: Safari <=7 - 9.1, Chrome <=37 - 49
            // Add the top/left cssHooks using jQuery.fn.position
            // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
            // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
            // getComputedStyle returns percent when specified for top/left/bottom/right;
            // rather than make the css module depend on the offset module, just check for it here
            jQuery.each(["top", "left"], function (_i, prop) {
              jQuery.cssHooks[prop] = addGetHookIf(
                support.pixelPosition,
                function (elem, computed) {
                  if (computed) {
                    computed = curCSS(elem, prop);

                    // If curCSS returns percentage, fallback to offset
                    return rnumnonpx.test(computed)
                      ? jQuery(elem).position()[prop] + "px"
                      : computed;
                  }
                }
              );
            });

            // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
            jQuery.each(
              { Height: "height", Width: "width" },
              function (name, type) {
                jQuery.each(
                  {
                    padding: "inner" + name,
                    content: type,
                    "": "outer" + name,
                  },
                  function (defaultExtra, funcName) {
                    // Margin is only for outerHeight, outerWidth
                    jQuery.fn[funcName] = function (margin, value) {
                      var chainable =
                          arguments.length &&
                          (defaultExtra || typeof margin !== "boolean"),
                        extra =
                          defaultExtra ||
                          (margin === true || value === true
                            ? "margin"
                            : "border");

                      return access(
                        this,
                        function (elem, type, value) {
                          var doc;

                          if (isWindow(elem)) {
                            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                            return funcName.indexOf("outer") === 0
                              ? elem["inner" + name]
                              : elem.document.documentElement["client" + name];
                          }

                          // Get document width or height
                          if (elem.nodeType === 9) {
                            doc = elem.documentElement;

                            // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                            // whichever is greatest
                            return Math.max(
                              elem.body["scroll" + name],
                              doc["scroll" + name],
                              elem.body["offset" + name],
                              doc["offset" + name],
                              doc["client" + name]
                            );
                          }

                          return value === undefined
                            ? // Get width or height on the element, requesting but not forcing parseFloat
                              jQuery.css(elem, type, extra)
                            : // Set width or height on the element
                              jQuery.style(elem, type, value, extra);
                        },
                        type,
                        chainable ? margin : undefined,
                        chainable
                      );
                    };
                  }
                );
              }
            );

            jQuery.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (_i, type) {
                jQuery.fn[type] = function (fn) {
                  return this.on(type, fn);
                };
              }
            );

            jQuery.fn.extend({
              bind: function (types, data, fn) {
                return this.on(types, null, data, fn);
              },
              unbind: function (types, fn) {
                return this.off(types, null, fn);
              },

              delegate: function (selector, types, data, fn) {
                return this.on(types, selector, data, fn);
              },
              undelegate: function (selector, types, fn) {
                // ( namespace ) or ( selector, types [, fn] )
                return arguments.length === 1
                  ? this.off(selector, "**")
                  : this.off(types, selector || "**", fn);
              },

              hover: function (fnOver, fnOut) {
                return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
              },
            });

            jQuery.each(
              (
                "blur focus focusin focusout resize scroll click dblclick " +
                "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
                "change select submit keydown keypress keyup contextmenu"
              ).split(" "),
              function (_i, name) {
                // Handle event binding
                jQuery.fn[name] = function (data, fn) {
                  return arguments.length > 0
                    ? this.on(name, null, data, fn)
                    : this.trigger(name);
                };
              }
            );

            // Support: Android <=4.0 only
            // Make sure we trim BOM and NBSP
            // Require that the "whitespace run" starts from a non-whitespace
            // to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
            var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

            // Bind a function to a context, optionally partially applying any
            // arguments.
            // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
            // However, it is not slated for removal any time soon
            jQuery.proxy = function (fn, context) {
              var tmp, args, proxy;

              if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp;
              }

              // Quick check to determine if target is callable, in the spec
              // this throws a TypeError, but we will just return undefined.
              if (!isFunction(fn)) {
                return undefined;
              }

              // Simulated bind
              args = slice.call(arguments, 2);
              proxy = function () {
                return fn.apply(
                  context || this,
                  args.concat(slice.call(arguments))
                );
              };

              // Set the guid of unique handler to the same of original handler, so it can be removed
              proxy.guid = fn.guid = fn.guid || jQuery.guid++;

              return proxy;
            };

            jQuery.holdReady = function (hold) {
              if (hold) {
                jQuery.readyWait++;
              } else {
                jQuery.ready(true);
              }
            };
            jQuery.isArray = Array.isArray;
            jQuery.parseJSON = JSON.parse;
            jQuery.nodeName = nodeName;
            jQuery.isFunction = isFunction;
            jQuery.isWindow = isWindow;
            jQuery.camelCase = camelCase;
            jQuery.type = toType;

            jQuery.now = Date.now;

            jQuery.isNumeric = function (obj) {
              // As of jQuery 3.0, isNumeric is limited to
              // strings and numbers (primitives or objects)
              // that can be coerced to finite numbers (gh-2662)
              var type = jQuery.type(obj);
              return (
                (type === "number" || type === "string") &&
                // parseFloat NaNs numeric-cast false positives ("")
                // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
                // subtraction forces infinities to NaN
                !isNaN(obj - parseFloat(obj))
              );
            };

            jQuery.trim = function (text) {
              return text == null ? "" : (text + "").replace(rtrim, "$1");
            };

            // Register as a named AMD module, since jQuery can be concatenated with other
            // files that may use define, but not via a proper concatenation script that
            // understands anonymous AMD modules. A named AMD is safest and most robust
            // way to register. Lowercase jquery is used because AMD module names are
            // derived from file names, and jQuery is normally delivered in a lowercase
            // file name. Do this after creating the global so that if an AMD module wants
            // to call noConflict to hide this version of jQuery, it will work.

            // Note that for maximum portability, libraries that are not jQuery should
            // declare themselves as anonymous modules, and avoid setting a global if an
            // AMD loader is present. jQuery is a special case. For more information, see
            // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

            if (true) {
              !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
              (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return jQuery;
              }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            }

            var // Map over jQuery in case of overwrite
              _jQuery = window.jQuery,
              // Map over the $ in case of overwrite
              _$ = window.$;

            jQuery.noConflict = function (deep) {
              if (window.$ === jQuery) {
                window.$ = _$;
              }

              if (deep && window.jQuery === jQuery) {
                window.jQuery = _jQuery;
              }

              return jQuery;
            };

            // Expose jQuery and $ identifiers, even in AMD
            // (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
            // and CommonJS for browser emulators (trac-13566)
            if (typeof noGlobal === "undefined") {
              window.jQuery = window.$ = jQuery;
            }

            return jQuery;
          }
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  !(function () {
    /*!******************************!*\
  !*** ./public/_web/build.js ***!
  \******************************/
    /* provided dependency */ var __webpack_provided_window_dot_jQuery =
      __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
    window.$ = __webpack_provided_window_dot_jQuery = __webpack_require__(
      /*! jquery */ "./node_modules/jquery/dist/jquery.js"
    );
    __webpack_require__(
      /*! ./js/jquery.validate.js */ "./public/_web/js/jquery.validate.js"
    );
    // const bootstrap = window.bootstrap = require('./libs/bootstrap-4.6.1/dist/js/bootstrap.js');
    __webpack_require__(/*! ./js/select2.js */ "./public/_web/js/select2.js");
    // const moment = window.moment = require('./js/moment.js');
    // require('./js/daterangepicker.js');
    __webpack_require__(
      /*! ./js/jquery.toast.js */ "./public/_web/js/jquery.toast.js"
    );
    // require('./js/countdown');
    var Swal = (window.Swal = __webpack_require__(
      /*! ./js/sweetalert2.js */ "./public/_web/js/sweetalert2.js"
    ));
    // require('./libs/blueimp-gallery/jquery.blueimp-gallery');
    __webpack_require__(/*! ./js/script.js */ "./public/_web/js/script.js");
  })();
  /******/
})();
1;