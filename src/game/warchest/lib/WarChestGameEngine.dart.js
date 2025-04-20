module.exports.methodChannel = function dartProgram(param) {
  function copyProperties(a, b) {
    var s = Object.keys(a);
    for (var r = 0; r < s.length; r++) {
      var q = s[r];
      b[q] = a[q];
    }
  }
  function mixinPropertiesHard(a, b) {
    var s = Object.keys(a);
    for (var r = 0; r < s.length; r++) {
      var q = s[r];
      if (!b.hasOwnProperty(q)) {
        b[q] = a[q];
      }
    }
  }
  function mixinPropertiesEasy(a, b) {
    Object.assign(b, a);
  }
  var z = (function () {
    var s = function () {};
    s.prototype = { p: {} };
    var r = new s();
    if (
      !(
        Object.getPrototypeOf(r) && Object.getPrototypeOf(r).p === s.prototype.p
      )
    )
      return false;
    try {
      if (
        typeof navigator != "undefined" &&
        typeof navigator.userAgent == "string" &&
        navigator.userAgent.indexOf("Chrome/") >= 0
      )
        return true;
      if (typeof version == "function" && version.length == 0) {
        var q = version();
        if (/^\d+\.\d+\.\d+\.\d+$/.test(q)) return true;
      }
    } catch (p) {}
    return false;
  })();
  function inherit(a, b) {
    a.prototype.constructor = a;
    a.prototype["$i" + a.name] = a;
    if (b != null) {
      if (z) {
        Object.setPrototypeOf(a.prototype, b.prototype);
        return;
      }
      var s = Object.create(b.prototype);
      copyProperties(a.prototype, s);
      a.prototype = s;
    }
  }
  function inheritMany(a, b) {
    for (var s = 0; s < b.length; s++) {
      inherit(b[s], a);
    }
  }
  function mixinEasy(a, b) {
    mixinPropertiesEasy(b.prototype, a.prototype);
    a.prototype.constructor = a;
  }
  function mixinHard(a, b) {
    mixinPropertiesHard(b.prototype, a.prototype);
    a.prototype.constructor = a;
  }
  function lazy(a, b, c, d) {
    var s = a;
    a[b] = s;
    a[c] = function () {
      if (a[b] === s) {
        a[b] = d();
      }
      a[c] = function () {
        return this[b];
      };
      return a[b];
    };
  }
  function lazyFinal(a, b, c, d) {
    var s = a;
    a[b] = s;
    a[c] = function () {
      if (a[b] === s) {
        var r = d();
        if (a[b] !== s) {
          A.jK(b);
        }
        a[b] = r;
      }
      var q = a[b];
      a[c] = function () {
        return q;
      };
      return q;
    };
  }
  function makeConstList(a) {
    a.immutable$list = Array;
    a.fixed$length = Array;
    return a;
  }
  function convertToFastObject(a) {
    function t() {}
    t.prototype = a;
    new t();
    return a;
  }
  function convertAllToFastObject(a) {
    for (var s = 0; s < a.length; ++s) {
      convertToFastObject(a[s]);
    }
  }
  var y = 0;
  function instanceTearOffGetter(a, b) {
    var s = null;
    return a
      ? function (c) {
          if (s === null) s = A.fi(b);
          return new s(c, this);
        }
      : function () {
          if (s === null) s = A.fi(b);
          return new s(this, null);
        };
  }
  function staticTearOffGetter(a) {
    var s = null;
    return function () {
      if (s === null) s = A.fi(a).prototype;
      return s;
    };
  }
  var x = 0;
  function tearOffParameters(a, b, c, d, e, f, g, h, i, j) {
    if (typeof h == "number") {
      h += x;
    }
    return {
      co: a,
      iS: b,
      iI: c,
      rC: d,
      dV: e,
      cs: f,
      fs: g,
      fT: h,
      aI: i || 0,
      nDA: j,
    };
  }
  function installStaticTearOff(a, b, c, d, e, f, g, h) {
    var s = tearOffParameters(a, true, false, c, d, e, f, g, h, false);
    var r = staticTearOffGetter(s);
    a[b] = r;
  }
  function installInstanceTearOff(a, b, c, d, e, f, g, h, i, j) {
    c = !!c;
    var s = tearOffParameters(a, false, c, d, e, f, g, h, i, !!j);
    var r = instanceTearOffGetter(c, s);
    a[b] = r;
  }
  function setOrUpdateInterceptorsByTag(a) {
    var s = v.interceptorsByTag;
    if (!s) {
      v.interceptorsByTag = a;
      return;
    }
    copyProperties(a, s);
  }
  function setOrUpdateLeafTags(a) {
    var s = v.leafTags;
    if (!s) {
      v.leafTags = a;
      return;
    }
    copyProperties(a, s);
  }
  function updateTypes(a) {
    var s = v.types;
    var r = s.length;
    s.push.apply(s, a);
    return r;
  }
  function updateHolder(a, b) {
    copyProperties(b, a);
    return a;
  }
  var hunkHelpers = (function () {
    var s = function (a, b, c, d, e) {
        return function (f, g, h, i) {
          return installInstanceTearOff(f, g, a, b, c, d, [h], i, e, false);
        };
      },
      r = function (a, b, c, d) {
        return function (e, f, g, h) {
          return installStaticTearOff(e, f, a, b, c, [g], h, d);
        };
      };
    return {
      inherit: inherit,
      inheritMany: inheritMany,
      mixin: mixinEasy,
      mixinHard: mixinHard,
      installStaticTearOff: installStaticTearOff,
      installInstanceTearOff: installInstanceTearOff,
      _instance_0u: s(0, 0, null, ["$0"], 0),
      _instance_1u: s(0, 1, null, ["$1"], 0),
      _instance_2u: s(0, 2, null, ["$2"], 0),
      _instance_0i: s(1, 0, null, ["$0"], 0),
      _instance_1i: s(1, 1, null, ["$1"], 0),
      _instance_2i: s(1, 2, null, ["$2"], 0),
      _static_0: r(0, null, ["$0"], 0),
      _static_1: r(1, null, ["$1"], 0),
      _static_2: r(2, null, ["$2"], 0),
      makeConstList: makeConstList,
      lazy: lazy,
      lazyFinal: lazyFinal,
      updateHolder: updateHolder,
      convertToFastObject: convertToFastObject,
      updateTypes: updateTypes,
      setOrUpdateInterceptorsByTag: setOrUpdateInterceptorsByTag,
      setOrUpdateLeafTags: setOrUpdateLeafTags,
    };
  })();
  function initializeDeferredHunk(a) {
    x = v.types.length;
    a(hunkHelpers, v, w, $);
  }
  var J = {
      i5(a, b) {
        return J.fE(A.b(a, b.h("z<0>")));
      },
      fE(a) {
        a.fixed$length = Array;
        return a;
      },
      i6(a, b) {
        return J.hp(a, b);
      },
      P(a) {
        if (typeof a == "number") {
          if (Math.floor(a) == a) return J.aq.prototype;
          return J.aW.prototype;
        }
        if (typeof a == "string") return J.aa.prototype;
        if (a == null) return J.ar.prototype;
        if (typeof a == "boolean") return J.aV.prototype;
        if (Array.isArray(a)) return J.z.prototype;
        if (typeof a == "object") {
          if (a instanceof A.v) {
            return a;
          } else {
            return J.at.prototype;
          }
        }
        if (!(a instanceof A.v)) return J.a2.prototype;
        return a;
      },
      ha(a) {
        if (a == null) return a;
        if (Array.isArray(a)) return J.z.prototype;
        if (!(a instanceof A.v)) return J.a2.prototype;
        return a;
      },
      hb(a) {
        if (typeof a == "string") return J.aa.prototype;
        if (a == null) return a;
        if (Array.isArray(a)) return J.z.prototype;
        if (!(a instanceof A.v)) return J.a2.prototype;
        return a;
      },
      jx(a) {
        if (typeof a == "number") return J.as.prototype;
        if (typeof a == "string") return J.aa.prototype;
        if (a == null) return a;
        if (!(a instanceof A.v)) return J.a2.prototype;
        return a;
      },
      a5(a, b) {
        if (a == null) return b == null;
        if (typeof a != "object") return b != null && a === b;
        return J.P(a).F(a, b);
      },
      Q(a, b) {
        if (typeof b === "number")
          if (Array.isArray(a) || typeof a == "string")
            if (b >>> 0 === b && b < a.length) return a[b];
        return J.hb(a).j(a, b);
      },
      hp(a, b) {
        return J.jx(a).a8(a, b);
      },
      hq(a, b) {
        return J.ha(a).O(a, b);
      },
      bi(a) {
        return J.P(a).gG(a);
      },
      a6(a) {
        return J.ha(a).gC(a);
      },
      f0(a) {
        return J.hb(a).gn(a);
      },
      hr(a) {
        return J.P(a).gR(a);
      },
      E(a) {
        return J.P(a).l(a);
      },
      aU: function aU() {},
      aV: function aV() {},
      ar: function ar() {},
      at: function at() {},
      av: function av() {},
      dW: function dW() {},
      a2: function a2() {},
      z: function z(a) {
        this.$ti = a;
      },
      dO: function dO(a) {
        this.$ti = a;
      },
      af: function af(a, b, c) {
        var _ = this;
        _.a = a;
        _.b = b;
        _.c = 0;
        _.d = null;
        _.$ti = c;
      },
      as: function as() {},
      aq: function aq() {},
      aW: function aW() {},
      aa: function aa() {},
    },
    A = {
      f4: function f4() {},
      fj(a) {
        var s, r;
        for (s = $.ae.length, r = 0; r < s; ++r) if (a === $.ae[r]) return !0;
        return !1;
      },
      f3() {
        return new A.b4("No element");
      },
      aZ: function aZ(a) {
        this.a = a;
      },
      ao: function ao() {},
      p: function p() {},
      b0: function b0(a, b, c) {
        var _ = this;
        _.a = a;
        _.b = b;
        _.c = 0;
        _.d = null;
        _.$ti = c;
      },
      r: function r(a, b, c) {
        this.a = a;
        this.b = b;
        this.$ti = c;
      },
      b1: function b1(a, b, c) {
        var _ = this;
        _.a = null;
        _.b = a;
        _.c = b;
        _.$ti = c;
      },
      k: function k(a, b, c) {
        this.a = a;
        this.b = b;
        this.$ti = c;
      },
      a: function a(a, b, c) {
        this.a = a;
        this.b = b;
        this.$ti = c;
      },
      b8: function b8(a, b) {
        this.a = a;
        this.b = b;
      },
      ap: function ap(a, b, c) {
        this.a = a;
        this.b = b;
        this.$ti = c;
      },
      aS: function aS(a, b, c, d) {
        var _ = this;
        _.a = a;
        _.b = b;
        _.c = c;
        _.d = null;
        _.$ti = d;
      },
      aP: function aP() {},
      he(a) {
        var s = v.mangledGlobalNames[a];
        if (s != null) return s;
        return "minified:" + a;
      },
      q(a) {
        var s;
        if (typeof a == "string") return a;
        if (typeof a == "number") {
          if (a !== 0) return "" + a;
        } else if (!0 === a) return "true";
        else if (!1 === a) return "false";
        else if (a == null) return "null";
        s = J.E(a);
        return s;
      },
      b2(a) {
        var s,
          r = $.fH;
        if (r == null) r = $.fH = Symbol("identityHashCode");
        s = a[r];
        if (s == null) {
          s = (Math.random() * 0x3fffffff) | 0;
          a[r] = s;
        }
        return s;
      },
      ie(a, b) {
        var s,
          r = /^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a);
        if (r == null) return null;
        s = r[3];
        if (s != null) return parseInt(a, 10);
        if (r[2] != null) return parseInt(a, 16);
        return null;
      },
      dY(a) {
        return A.id(a);
      },
      id(a) {
        var s, r, q, p;
        if (a instanceof A.v) return A.I(A.bh(a), null);
        s = J.P(a);
        if (s === B.E || s === B.G || t.o.b(a)) {
          r = B.u(a);
          if (r !== "Object" && r !== "") return r;
          q = a.constructor;
          if (typeof q == "function") {
            p = q.name;
            if (typeof p == "string" && p !== "Object" && p !== "") return p;
          }
        }
        return A.I(A.bh(a), null);
      },
      ig(a) {
        if (typeof a == "number" || A.fh(a)) return J.E(a);
        if (typeof a == "string") return JSON.stringify(a);
        if (a instanceof A.a8) return a.l(0);
        return "Instance of '" + A.dY(a) + "'";
      },
      C(a) {
        var s;
        if (a <= 65535) return String.fromCharCode(a);
        if (a <= 1114111) {
          s = a - 65536;
          return String.fromCharCode(
            (B.b.an(s, 10) | 55296) >>> 0,
            (s & 1023) | 56320
          );
        }
        throw A.f(A.dZ(a, 0, 1114111, null, null));
      },
      jt(a, b) {
        var s,
          r = "index";
        if (!A.h5(b)) return new A.a7(!0, b, r, null);
        s = J.f0(a);
        if (b < 0 || b >= s) return A.fC(b, s, a, r);
        return A.f9(b, r);
      },
      f(a) {
        return A.hc(new Error(), a);
      },
      hc(a, b) {
        var s;
        if (b == null) b = new A.aB();
        a.dartException = b;
        s = A.jL;
        if ("defineProperty" in Object) {
          Object.defineProperty(a, "message", { get: s });
          a.name = "";
        } else a.toString = s;
        return a;
      },
      jL() {
        return J.E(this.dartException);
      },
      h(a) {
        throw A.f(a);
      },
      jJ(a, b) {
        throw A.hc(b, a);
      },
      w(a) {
        throw A.f(A.R(a));
      },
      X(a) {
        var s, r, q, p, o, n;
        a = A.hd(a.replace(String({}), "$receiver$"));
        s = a.match(/\\\$[a-zA-Z]+\\\$/g);
        if (s == null) s = A.b([], t.s);
        r = s.indexOf("\\$arguments\\$");
        q = s.indexOf("\\$argumentsExpr\\$");
        p = s.indexOf("\\$expr\\$");
        o = s.indexOf("\\$method\\$");
        n = s.indexOf("\\$receiver\\$");
        return new A.eA(
          a
            .replace(
              new RegExp("\\\\\\$arguments\\\\\\$", "g"),
              "((?:x|[^x])*)"
            )
            .replace(
              new RegExp("\\\\\\$argumentsExpr\\\\\\$", "g"),
              "((?:x|[^x])*)"
            )
            .replace(new RegExp("\\\\\\$expr\\\\\\$", "g"), "((?:x|[^x])*)")
            .replace(new RegExp("\\\\\\$method\\\\\\$", "g"), "((?:x|[^x])*)")
            .replace(
              new RegExp("\\\\\\$receiver\\\\\\$", "g"),
              "((?:x|[^x])*)"
            ),
          r,
          q,
          p,
          o,
          n
        );
      },
      eB(a) {
        return (function ($expr$) {
          var $argumentsExpr$ = "$arguments$";
          try {
            $expr$.$method$($argumentsExpr$);
          } catch (s) {
            return s.message;
          }
        })(a);
      },
      fN(a) {
        return (function ($expr$) {
          try {
            $expr$.$method$;
          } catch (s) {
            return s.message;
          }
        })(a);
      },
      f5(a, b) {
        var s = b == null,
          r = s ? null : b.method;
        return new A.aX(a, r, s ? null : b.receiver);
      },
      fk(a) {
        if (a == null) return new A.dV(a);
        if (typeof a !== "object") return a;
        if ("dartException" in a) return A.ad(a, a.dartException);
        return A.jn(a);
      },
      ad(a, b) {
        if (t.C.b(b)) if (b.$thrownJsError == null) b.$thrownJsError = a;
        return b;
      },
      jn(a) {
        var s, r, q, p, o, n, m, l, k, j, i, h, g;
        if (!("message" in a)) return a;
        s = a.message;
        if ("number" in a && typeof a.number == "number") {
          r = a.number;
          q = r & 65535;
          if ((B.b.an(r, 16) & 8191) === 10)
            switch (q) {
              case 438:
                return A.ad(a, A.f5(A.q(s) + " (Error " + q + ")", null));
              case 445:
              case 5007:
                A.q(s);
                return A.ad(a, new A.ax());
            }
        }
        if (a instanceof TypeError) {
          p = $.hf();
          o = $.hg();
          n = $.hh();
          m = $.hi();
          l = $.hl();
          k = $.hm();
          j = $.hk();
          $.hj();
          i = $.ho();
          h = $.hn();
          g = p.H(s);
          if (g != null) return A.ad(a, A.f5(s, g));
          else {
            g = o.H(s);
            if (g != null) {
              g.method = "call";
              return A.ad(a, A.f5(s, g));
            } else if (
              n.H(s) != null ||
              m.H(s) != null ||
              l.H(s) != null ||
              k.H(s) != null ||
              j.H(s) != null ||
              m.H(s) != null ||
              i.H(s) != null ||
              h.H(s) != null
            )
              return A.ad(a, new A.ax());
          }
          return A.ad(a, new A.b5(typeof s == "string" ? s : ""));
        }
        if (a instanceof RangeError) {
          if (typeof s == "string" && s.indexOf("call stack") !== -1)
            return new A.az();
          s = (function (b) {
            try {
              return String(b);
            } catch (f) {}
            return null;
          })(a);
          return A.ad(
            a,
            new A.a7(
              !1,
              null,
              null,
              typeof s == "string" ? s.replace(/^RangeError:\s*/, "") : s
            )
          );
        }
        if (typeof InternalError == "function" && a instanceof InternalError)
          if (typeof s == "string" && s === "too much recursion")
            return new A.az();
        return a;
      },
      jz(a) {
        var s;
        if (a == null) return new A.bf(a);
        s = a.$cachedTrace;
        if (s != null) return s;
        s = new A.bf(a);
        if (typeof a === "object") a.$cachedTrace = s;
        return s;
      },
      jG(a) {
        if (a == null) return J.bi(a);
        if (typeof a == "object") return A.b2(a);
        return J.bi(a);
      },
      jw(a, b) {
        var s,
          r,
          q,
          p = a.length;
        for (s = 0; s < p; s = q) {
          r = s + 1;
          q = r + 1;
          b.t(0, a[s], a[r]);
        }
        return b;
      },
      j6(a, b, c, d, e, f) {
        switch (b) {
          case 0:
            return a.$0();
          case 1:
            return a.$1(c);
          case 2:
            return a.$2(c, d);
          case 3:
            return a.$3(c, d, e);
          case 4:
            return a.$4(c, d, e, f);
        }
        throw A.f(
          new A.eM("Unsupported number of arguments for wrapped closure")
        );
      },
      jo(a, b) {
        var s = a.$identity;
        if (!!s) return s;
        s = A.jp(a, b);
        a.$identity = s;
        return s;
      },
      jp(a, b) {
        var s;
        switch (b) {
          case 0:
            s = a.$0;
            break;
          case 1:
            s = a.$1;
            break;
          case 2:
            s = a.$2;
            break;
          case 3:
            s = a.$3;
            break;
          case 4:
            s = a.$4;
            break;
          default:
            s = null;
        }
        if (s != null) return s.bind(a);
        return (function (c, d, e) {
          return function (f, g, h, i) {
            return e(c, d, f, g, h, i);
          };
        })(a, b, A.j6);
      },
      hV(a2) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m,
          l,
          k,
          j,
          i = a2.co,
          h = a2.iS,
          g = a2.iI,
          f = a2.nDA,
          e = a2.aI,
          d = a2.fs,
          c = a2.cs,
          b = d[0],
          a = c[0],
          a0 = i[b],
          a1 = a2.fT;
        a1.toString;
        s = h
          ? Object.create(new A.ey().constructor.prototype)
          : Object.create(new A.am(null, null).constructor.prototype);
        s.$initialize = s.constructor;
        r = h
          ? function static_tear_off() {
              this.$initialize();
            }
          : function tear_off(a3, a4) {
              this.$initialize(a3, a4);
            };
        s.constructor = r;
        r.prototype = s;
        s.$_name = b;
        s.$_target = a0;
        q = !h;
        if (q) p = A.fs(b, a0, g, f);
        else {
          s.$static_name = b;
          p = a0;
        }
        s.$S = A.hR(a1, h, g);
        s[a] = p;
        for (o = p, n = 1; n < d.length; ++n) {
          m = d[n];
          if (typeof m == "string") {
            l = i[m];
            k = m;
            m = l;
          } else k = "";
          j = c[n];
          if (j != null) {
            if (q) m = A.fs(k, m, g, f);
            s[j] = m;
          }
          if (n === e) o = m;
        }
        s.$C = o;
        s.$R = a2.rC;
        s.$D = a2.dV;
        return r;
      },
      hR(a, b, c) {
        if (typeof a == "number") return a;
        if (typeof a == "string") {
          if (b) throw A.f("Cannot compute signature for static tearoff.");
          return (function (d, e) {
            return function () {
              return e(this, d);
            };
          })(a, A.hP);
        }
        throw A.f("Error in functionType of tearoff");
      },
      hS(a, b, c, d) {
        var s = A.fr;
        switch (b ? -1 : a) {
          case 0:
            return (function (e, f) {
              return function () {
                return f(this)[e]();
              };
            })(c, s);
          case 1:
            return (function (e, f) {
              return function (g) {
                return f(this)[e](g);
              };
            })(c, s);
          case 2:
            return (function (e, f) {
              return function (g, h) {
                return f(this)[e](g, h);
              };
            })(c, s);
          case 3:
            return (function (e, f) {
              return function (g, h, i) {
                return f(this)[e](g, h, i);
              };
            })(c, s);
          case 4:
            return (function (e, f) {
              return function (g, h, i, j) {
                return f(this)[e](g, h, i, j);
              };
            })(c, s);
          case 5:
            return (function (e, f) {
              return function (g, h, i, j, k) {
                return f(this)[e](g, h, i, j, k);
              };
            })(c, s);
          default:
            return (function (e, f) {
              return function () {
                return e.apply(f(this), arguments);
              };
            })(d, s);
        }
      },
      fs(a, b, c, d) {
        if (c) return A.hU(a, b, d);
        return A.hS(b.length, d, a, b);
      },
      hT(a, b, c, d) {
        var s = A.fr,
          r = A.hQ;
        switch (b ? -1 : a) {
          case 0:
            throw A.f(new A.b3("Intercepted function with no arguments."));
          case 1:
            return (function (e, f, g) {
              return function () {
                return f(this)[e](g(this));
              };
            })(c, r, s);
          case 2:
            return (function (e, f, g) {
              return function (h) {
                return f(this)[e](g(this), h);
              };
            })(c, r, s);
          case 3:
            return (function (e, f, g) {
              return function (h, i) {
                return f(this)[e](g(this), h, i);
              };
            })(c, r, s);
          case 4:
            return (function (e, f, g) {
              return function (h, i, j) {
                return f(this)[e](g(this), h, i, j);
              };
            })(c, r, s);
          case 5:
            return (function (e, f, g) {
              return function (h, i, j, k) {
                return f(this)[e](g(this), h, i, j, k);
              };
            })(c, r, s);
          case 6:
            return (function (e, f, g) {
              return function (h, i, j, k, l) {
                return f(this)[e](g(this), h, i, j, k, l);
              };
            })(c, r, s);
          default:
            return (function (e, f, g) {
              return function () {
                var q = [g(this)];
                Array.prototype.push.apply(q, arguments);
                return e.apply(f(this), q);
              };
            })(d, r, s);
        }
      },
      hU(a, b, c) {
        var s, r;
        if ($.fp == null) $.fp = A.fo("interceptor");
        if ($.fq == null) $.fq = A.fo("receiver");
        s = b.length;
        r = A.hT(s, c, a, b);
        return r;
      },
      fi(a) {
        return A.hV(a);
      },
      hP(a, b) {
        return A.eU(v.typeUniverse, A.bh(a.a), b);
      },
      fr(a) {
        return a.a;
      },
      hQ(a) {
        return a.b;
      },
      fo(a) {
        var s,
          r,
          q,
          p = new A.am("receiver", "interceptor"),
          o = J.fE(Object.getOwnPropertyNames(p));
        for (s = o.length, r = 0; r < s; ++r) {
          q = o[r];
          if (p[q] === a) return q;
        }
        throw A.f(A.hO("Field name " + a + " not found."));
      },
      kb(a) {
        throw A.f(new A.b9(a));
      },
      jq(a) {
        var s,
          r = A.b([], t.s);
        if (a == null) return r;
        if (Array.isArray(a)) {
          for (s = 0; s < a.length; ++s) r.push(String(a[s]));
          return r;
        }
        r.push(String(a));
        return r;
      },
      js(a, b) {
        var s = b.length,
          r = v.rttc["" + s + ";" + a];
        if (r == null) return null;
        if (s === 0) return r;
        if (s === r.length) return r.apply(null, b);
        return r(b);
      },
      jv(a) {
        if (a.indexOf("$", 0) >= 0) return a.replace(/\$/g, "$$$$");
        return a;
      },
      hd(a) {
        if (/[[\]{}()*+?.\\^$|]/.test(a))
          return a.replace(/[[\]{}()*+?.\\^$|]/g, "\\$&");
        return a;
      },
      A(a, b, c) {
        var s = A.jI(a, b, c);
        return s;
      },
      jI(a, b, c) {
        var s, r, q;
        if (b === "") {
          if (a === "") return c;
          s = a.length;
          r = "" + c;
          for (q = 0; q < s; ++q) r = r + a[q] + c;
          return r.charCodeAt(0) == 0 ? r : r;
        }
        if (a.indexOf(b, 0) < 0) return a;
        if (a.length < 500 || c.indexOf("$", 0) >= 0) return a.split(b).join(c);
        return a.replace(new RegExp(A.hd(b), "g"), A.jv(c));
      },
      an: function an() {},
      y: function y(a, b, c) {
        this.a = a;
        this.b = b;
        this.$ti = c;
      },
      eA: function eA(a, b, c, d, e, f) {
        var _ = this;
        _.a = a;
        _.b = b;
        _.c = c;
        _.d = d;
        _.e = e;
        _.f = f;
      },
      ax: function ax() {},
      aX: function aX(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
      },
      b5: function b5(a) {
        this.a = a;
      },
      dV: function dV(a) {
        this.a = a;
      },
      bf: function bf(a) {
        this.a = a;
        this.b = null;
      },
      a8: function a8() {},
      cn: function cn() {},
      co: function co() {},
      ez: function ez() {},
      ey: function ey() {},
      am: function am(a, b) {
        this.a = a;
        this.b = b;
      },
      b9: function b9(a) {
        this.a = a;
      },
      b3: function b3(a) {
        this.a = a;
      },
      S: function S(a) {
        var _ = this;
        _.a = 0;
        _.f = _.e = _.d = _.c = _.b = null;
        _.r = 0;
        _.$ti = a;
      },
      dR: function dR(a, b) {
        this.a = a;
        this.b = b;
        this.c = null;
      },
      U: function U(a, b) {
        this.a = a;
        this.$ti = b;
      },
      b_: function b_(a, b) {
        var _ = this;
        _.a = a;
        _.b = b;
        _.d = _.c = null;
      },
      fJ(a, b) {
        var s = b.c;
        return s == null ? (b.c = A.ff(a, b.x, !0)) : s;
      },
      fa(a, b) {
        var s = b.c;
        return s == null ? (b.c = A.aG(a, "fB", [b.x])) : s;
      },
      fK(a) {
        var s = a.w;
        if (s === 6 || s === 7 || s === 8) return A.fK(a.x);
        return s === 12 || s === 13;
      },
      ij(a) {
        return a.as;
      },
      h9(a) {
        return A.eT(v.typeUniverse, a, !1);
      },
      a4(a1, a2, a3, a4) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m,
          l,
          k,
          j,
          i,
          h,
          g,
          f,
          e,
          d,
          c,
          b,
          a,
          a0 = a2.w;
        switch (a0) {
          case 5:
          case 1:
          case 2:
          case 3:
          case 4:
            return a2;
          case 6:
            s = a2.x;
            r = A.a4(a1, s, a3, a4);
            if (r === s) return a2;
            return A.fY(a1, r, !0);
          case 7:
            s = a2.x;
            r = A.a4(a1, s, a3, a4);
            if (r === s) return a2;
            return A.ff(a1, r, !0);
          case 8:
            s = a2.x;
            r = A.a4(a1, s, a3, a4);
            if (r === s) return a2;
            return A.fW(a1, r, !0);
          case 9:
            q = a2.y;
            p = A.ak(a1, q, a3, a4);
            if (p === q) return a2;
            return A.aG(a1, a2.x, p);
          case 10:
            o = a2.x;
            n = A.a4(a1, o, a3, a4);
            m = a2.y;
            l = A.ak(a1, m, a3, a4);
            if (n === o && l === m) return a2;
            return A.fd(a1, n, l);
          case 11:
            k = a2.x;
            j = a2.y;
            i = A.ak(a1, j, a3, a4);
            if (i === j) return a2;
            return A.fX(a1, k, i);
          case 12:
            h = a2.x;
            g = A.a4(a1, h, a3, a4);
            f = a2.y;
            e = A.jk(a1, f, a3, a4);
            if (g === h && e === f) return a2;
            return A.fV(a1, g, e);
          case 13:
            d = a2.y;
            a4 += d.length;
            c = A.ak(a1, d, a3, a4);
            o = a2.x;
            n = A.a4(a1, o, a3, a4);
            if (c === d && n === o) return a2;
            return A.fe(a1, n, c, !0);
          case 14:
            b = a2.x;
            if (b < a4) return a2;
            a = a3[b - a4];
            if (a == null) return a2;
            return a;
          default:
            throw A.f(
              A.aL("Attempted to substitute unexpected RTI kind " + a0)
            );
        }
      },
      ak(a, b, c, d) {
        var s,
          r,
          q,
          p,
          o = b.length,
          n = A.eV(o);
        for (s = !1, r = 0; r < o; ++r) {
          q = b[r];
          p = A.a4(a, q, c, d);
          if (p !== q) s = !0;
          n[r] = p;
        }
        return s ? n : b;
      },
      jl(a, b, c, d) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m = b.length,
          l = A.eV(m);
        for (s = !1, r = 0; r < m; r += 3) {
          q = b[r];
          p = b[r + 1];
          o = b[r + 2];
          n = A.a4(a, o, c, d);
          if (n !== o) s = !0;
          l.splice(r, 3, q, p, n);
        }
        return s ? l : b;
      },
      jk(a, b, c, d) {
        var s,
          r = b.a,
          q = A.ak(a, r, c, d),
          p = b.b,
          o = A.ak(a, p, c, d),
          n = b.c,
          m = A.jl(a, n, c, d);
        if (q === r && o === p && m === n) return b;
        s = new A.bb();
        s.a = q;
        s.b = o;
        s.c = m;
        return s;
      },
      b(a, b) {
        a[v.arrayRti] = b;
        return a;
      },
      h8(a) {
        var s = a.$S;
        if (s != null) {
          if (typeof s == "number") return A.jA(s);
          return a.$S();
        }
        return null;
      },
      jB(a, b) {
        var s;
        if (A.fK(b))
          if (a instanceof A.a8) {
            s = A.h8(a);
            if (s != null) return s;
          }
        return A.bh(a);
      },
      bh(a) {
        if (a instanceof A.v) return A.D(a);
        if (Array.isArray(a)) return A.c(a);
        return A.fg(J.P(a));
      },
      c(a) {
        var s = a[v.arrayRti],
          r = t.b;
        if (s == null) return r;
        if (s.constructor !== r.constructor) return r;
        return s;
      },
      D(a) {
        var s = a.$ti;
        return s != null ? s : A.fg(a);
      },
      fg(a) {
        var s = a.constructor,
          r = s.$ccache;
        if (r != null) return r;
        return A.j4(a, s);
      },
      j4(a, b) {
        var s =
            a instanceof A.a8
              ? Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor
              : b,
          r = A.iP(v.typeUniverse, s.name);
        b.$ccache = r;
        return r;
      },
      jA(a) {
        var s,
          r = v.types,
          q = r[a];
        if (typeof q == "string") {
          s = A.eT(v.typeUniverse, q, !1);
          r[a] = s;
          return s;
        }
        return q;
      },
      jy(a) {
        return A.al(A.D(a));
      },
      jj(a) {
        var s = a instanceof A.a8 ? A.h8(a) : null;
        if (s != null) return s;
        if (t.k.b(a)) return J.hr(a).a;
        if (Array.isArray(a)) return A.c(a);
        return A.bh(a);
      },
      al(a) {
        var s = a.r;
        return s == null ? (a.r = A.h1(a)) : s;
      },
      h1(a) {
        var s,
          r,
          q = a.as,
          p = q.replace(/\*/g, "");
        if (p === q) return (a.r = new A.eS(a));
        s = A.eT(v.typeUniverse, p, !0);
        r = s.r;
        return r == null ? (s.r = A.h1(s)) : r;
      },
      j3(a) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m = this;
        if (m === t.K) return A.a_(m, a, A.jb);
        if (!A.a1(m)) s = m === t._;
        else s = !0;
        if (s) return A.a_(m, a, A.jf);
        s = m.w;
        if (s === 7) return A.a_(m, a, A.j_);
        if (s === 1) return A.a_(m, a, A.h6);
        r = s === 6 ? m.x : m;
        q = r.w;
        if (q === 8) return A.a_(m, a, A.j7);
        if (r === t.S) p = A.h5;
        else if (r === t.i || r === t.H) p = A.ja;
        else if (r === t.N) p = A.jd;
        else p = r === t.y ? A.fh : null;
        if (p != null) return A.a_(m, a, p);
        if (q === 9) {
          o = r.x;
          if (r.y.every(A.jC)) {
            m.f = "$i" + o;
            if (o === "B") return A.a_(m, a, A.j9);
            return A.a_(m, a, A.je);
          }
        } else if (q === 11) {
          n = A.js(r.x, r.y);
          return A.a_(m, a, n == null ? A.h6 : n);
        }
        return A.a_(m, a, A.iY);
      },
      a_(a, b, c) {
        a.b = c;
        return a.b(b);
      },
      j2(a) {
        var s,
          r = this,
          q = A.iX;
        if (!A.a1(r)) s = r === t._;
        else s = !0;
        if (s) q = A.iT;
        else if (r === t.K) q = A.iR;
        else {
          s = A.aI(r);
          if (s) q = A.iZ;
        }
        r.a = q;
        return r.a(a);
      },
      bg(a) {
        var s,
          r = a.w;
        if (!A.a1(a))
          if (!(a === t._))
            if (!(a === t.A))
              if (r !== 7)
                if (!(r === 6 && A.bg(a.x)))
                  s = (r === 8 && A.bg(a.x)) || a === t.P || a === t.T;
                else s = !0;
              else s = !0;
            else s = !0;
          else s = !0;
        else s = !0;
        return s;
      },
      iY(a) {
        var s = this;
        if (a == null) return A.bg(s);
        return A.jD(v.typeUniverse, A.jB(a, s), s);
      },
      j_(a) {
        if (a == null) return !0;
        return this.x.b(a);
      },
      je(a) {
        var s,
          r = this;
        if (a == null) return A.bg(r);
        s = r.f;
        if (a instanceof A.v) return !!a[s];
        return !!J.P(a)[s];
      },
      j9(a) {
        var s,
          r = this;
        if (a == null) return A.bg(r);
        if (typeof a != "object") return !1;
        if (Array.isArray(a)) return !0;
        s = r.f;
        if (a instanceof A.v) return !!a[s];
        return !!J.P(a)[s];
      },
      iX(a) {
        var s = this;
        if (a == null) {
          if (A.aI(s)) return a;
        } else if (s.b(a)) return a;
        A.h2(a, s);
      },
      iZ(a) {
        var s = this;
        if (a == null) return a;
        else if (s.b(a)) return a;
        A.h2(a, s);
      },
      h2(a, b) {
        throw A.f(A.iF(A.fP(a, A.I(b, null))));
      },
      fP(a, b) {
        return (
          A.aR(a) +
          ": type '" +
          A.I(A.jj(a), null) +
          "' is not a subtype of type '" +
          b +
          "'"
        );
      },
      iF(a) {
        return new A.aE("TypeError: " + a);
      },
      H(a, b) {
        return new A.aE("TypeError: " + A.fP(a, b));
      },
      j7(a) {
        var s = this,
          r = s.w === 6 ? s.x : s;
        return r.x.b(a) || A.fa(v.typeUniverse, r).b(a);
      },
      jb(a) {
        return a != null;
      },
      iR(a) {
        if (a != null) return a;
        throw A.f(A.H(a, "Object"));
      },
      jf(a) {
        return !0;
      },
      iT(a) {
        return a;
      },
      h6(a) {
        return !1;
      },
      fh(a) {
        return !0 === a || !1 === a;
      },
      jZ(a) {
        if (!0 === a) return !0;
        if (!1 === a) return !1;
        throw A.f(A.H(a, "bool"));
      },
      k0(a) {
        if (!0 === a) return !0;
        if (!1 === a) return !1;
        if (a == null) return a;
        throw A.f(A.H(a, "bool"));
      },
      k_(a) {
        if (!0 === a) return !0;
        if (!1 === a) return !1;
        if (a == null) return a;
        throw A.f(A.H(a, "bool?"));
      },
      k1(a) {
        if (typeof a == "number") return a;
        throw A.f(A.H(a, "double"));
      },
      k3(a) {
        if (typeof a == "number") return a;
        if (a == null) return a;
        throw A.f(A.H(a, "double"));
      },
      k2(a) {
        if (typeof a == "number") return a;
        if (a == null) return a;
        throw A.f(A.H(a, "double?"));
      },
      h5(a) {
        return typeof a == "number" && Math.floor(a) === a;
      },
      h0(a) {
        if (typeof a == "number" && Math.floor(a) === a) return a;
        throw A.f(A.H(a, "int"));
      },
      k5(a) {
        if (typeof a == "number" && Math.floor(a) === a) return a;
        if (a == null) return a;
        throw A.f(A.H(a, "int"));
      },
      k4(a) {
        if (typeof a == "number" && Math.floor(a) === a) return a;
        if (a == null) return a;
        throw A.f(A.H(a, "int?"));
      },
      ja(a) {
        return typeof a == "number";
      },
      k6(a) {
        if (typeof a == "number") return a;
        throw A.f(A.H(a, "num"));
      },
      k8(a) {
        if (typeof a == "number") return a;
        if (a == null) return a;
        throw A.f(A.H(a, "num"));
      },
      k7(a) {
        if (typeof a == "number") return a;
        if (a == null) return a;
        throw A.f(A.H(a, "num?"));
      },
      jd(a) {
        return typeof a == "string";
      },
      iS(a) {
        if (typeof a == "string") return a;
        throw A.f(A.H(a, "String"));
      },
      ka(a) {
        if (typeof a == "string") return a;
        if (a == null) return a;
        throw A.f(A.H(a, "String"));
      },
      k9(a) {
        if (typeof a == "string") return a;
        if (a == null) return a;
        throw A.f(A.H(a, "String?"));
      },
      h7(a, b) {
        var s, r, q;
        for (s = "", r = "", q = 0; q < a.length; ++q, r = ", ")
          s += r + A.I(a[q], b);
        return s;
      },
      ji(a, b) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m = a.x,
          l = a.y;
        if ("" === m) return "(" + A.h7(l, b) + ")";
        s = l.length;
        r = m.split(",");
        q = r.length - s;
        for (p = "(", o = "", n = 0; n < s; ++n, o = ", ") {
          p += o;
          if (q === 0) p += "{";
          p += A.I(l[n], b);
          if (q >= 0) p += " " + r[q];
          ++q;
        }
        return p + "})";
      },
      h3(a3, a4, a5) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m,
          l,
          k,
          j,
          i,
          h,
          g,
          f,
          e,
          d,
          c,
          b,
          a,
          a0,
          a1,
          a2 = ", ";
        if (a5 != null) {
          s = a5.length;
          if (a4 == null) {
            a4 = A.b([], t.s);
            r = null;
          } else r = a4.length;
          q = a4.length;
          for (p = s; p > 0; --p) a4.push("T" + (q + p));
          for (o = t.X, n = t._, m = "<", l = "", p = 0; p < s; ++p, l = a2) {
            m = B.f.L(m + l, a4[a4.length - 1 - p]);
            k = a5[p];
            j = k.w;
            if (!(j === 2 || j === 3 || j === 4 || j === 5 || k === o))
              i = k === n;
            else i = !0;
            if (!i) m += " extends " + A.I(k, a4);
          }
          m += ">";
        } else {
          m = "";
          r = null;
        }
        o = a3.x;
        h = a3.y;
        g = h.a;
        f = g.length;
        e = h.b;
        d = e.length;
        c = h.c;
        b = c.length;
        a = A.I(o, a4);
        for (a0 = "", a1 = "", p = 0; p < f; ++p, a1 = a2)
          a0 += a1 + A.I(g[p], a4);
        if (d > 0) {
          a0 += a1 + "[";
          for (a1 = "", p = 0; p < d; ++p, a1 = a2) a0 += a1 + A.I(e[p], a4);
          a0 += "]";
        }
        if (b > 0) {
          a0 += a1 + "{";
          for (a1 = "", p = 0; p < b; p += 3, a1 = a2) {
            a0 += a1;
            if (c[p + 1]) a0 += "required ";
            a0 += A.I(c[p + 2], a4) + " " + c[p];
          }
          a0 += "}";
        }
        if (r != null) {
          a4.toString;
          a4.length = r;
        }
        return m + "(" + a0 + ") => " + a;
      },
      I(a, b) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m = a.w;
        if (m === 5) return "erased";
        if (m === 2) return "dynamic";
        if (m === 3) return "void";
        if (m === 1) return "Never";
        if (m === 4) return "any";
        if (m === 6) return A.I(a.x, b);
        if (m === 7) {
          s = a.x;
          r = A.I(s, b);
          q = s.w;
          return (q === 12 || q === 13 ? "(" + r + ")" : r) + "?";
        }
        if (m === 8) return "FutureOr<" + A.I(a.x, b) + ">";
        if (m === 9) {
          p = A.jm(a.x);
          o = a.y;
          return o.length > 0 ? p + ("<" + A.h7(o, b) + ">") : p;
        }
        if (m === 11) return A.ji(a, b);
        if (m === 12) return A.h3(a, b, null);
        if (m === 13) return A.h3(a.x, b, a.y);
        if (m === 14) {
          n = a.x;
          return b[b.length - 1 - n];
        }
        return "?";
      },
      jm(a) {
        var s = v.mangledGlobalNames[a];
        if (s != null) return s;
        return "minified:" + a;
      },
      iQ(a, b) {
        var s = a.tR[b];
        for (; typeof s == "string"; ) s = a.tR[s];
        return s;
      },
      iP(a, b) {
        var s,
          r,
          q,
          p,
          o,
          n = a.eT,
          m = n[b];
        if (m == null) return A.eT(a, b, !1);
        else if (typeof m == "number") {
          s = m;
          r = A.aH(a, 5, "#");
          q = A.eV(s);
          for (p = 0; p < s; ++p) q[p] = r;
          o = A.aG(a, b, q);
          n[b] = o;
          return o;
        } else return m;
      },
      iN(a, b) {
        return A.fZ(a.tR, b);
      },
      iM(a, b) {
        return A.fZ(a.eT, b);
      },
      eT(a, b, c) {
        var s,
          r = a.eC,
          q = r.get(b);
        if (q != null) return q;
        s = A.fT(A.fR(a, null, b, c));
        r.set(b, s);
        return s;
      },
      eU(a, b, c) {
        var s,
          r,
          q = b.z;
        if (q == null) q = b.z = new Map();
        s = q.get(c);
        if (s != null) return s;
        r = A.fT(A.fR(a, b, c, !0));
        q.set(c, r);
        return r;
      },
      iO(a, b, c) {
        var s,
          r,
          q,
          p = b.Q;
        if (p == null) p = b.Q = new Map();
        s = c.as;
        r = p.get(s);
        if (r != null) return r;
        q = A.fd(a, b, c.w === 10 ? c.y : [c]);
        p.set(s, q);
        return q;
      },
      Z(a, b) {
        b.a = A.j2;
        b.b = A.j3;
        return b;
      },
      aH(a, b, c) {
        var s,
          r,
          q = a.eC.get(c);
        if (q != null) return q;
        s = new A.M(null, null);
        s.w = b;
        s.as = c;
        r = A.Z(a, s);
        a.eC.set(c, r);
        return r;
      },
      fY(a, b, c) {
        var s,
          r = b.as + "*",
          q = a.eC.get(r);
        if (q != null) return q;
        s = A.iK(a, b, r, c);
        a.eC.set(r, s);
        return s;
      },
      iK(a, b, c, d) {
        var s, r, q;
        if (d) {
          s = b.w;
          if (!A.a1(b)) r = b === t.P || b === t.T || s === 7 || s === 6;
          else r = !0;
          if (r) return b;
        }
        q = new A.M(null, null);
        q.w = 6;
        q.x = b;
        q.as = c;
        return A.Z(a, q);
      },
      ff(a, b, c) {
        var s,
          r = b.as + "?",
          q = a.eC.get(r);
        if (q != null) return q;
        s = A.iJ(a, b, r, c);
        a.eC.set(r, s);
        return s;
      },
      iJ(a, b, c, d) {
        var s, r, q, p;
        if (d) {
          s = b.w;
          if (!A.a1(b))
            if (!(b === t.P || b === t.T))
              if (s !== 7) r = s === 8 && A.aI(b.x);
              else r = !0;
            else r = !0;
          else r = !0;
          if (r) return b;
          else if (s === 1 || b === t.A) return t.P;
          else if (s === 6) {
            q = b.x;
            if (q.w === 8 && A.aI(q.x)) return q;
            else return A.fJ(a, b);
          }
        }
        p = new A.M(null, null);
        p.w = 7;
        p.x = b;
        p.as = c;
        return A.Z(a, p);
      },
      fW(a, b, c) {
        var s,
          r = b.as + "/",
          q = a.eC.get(r);
        if (q != null) return q;
        s = A.iH(a, b, r, c);
        a.eC.set(r, s);
        return s;
      },
      iH(a, b, c, d) {
        var s, r;
        if (d) {
          s = b.w;
          if (A.a1(b) || b === t.K || b === t._) return b;
          else if (s === 1) return A.aG(a, "fB", [b]);
          else if (b === t.P || b === t.T) return t.O;
        }
        r = new A.M(null, null);
        r.w = 8;
        r.x = b;
        r.as = c;
        return A.Z(a, r);
      },
      iL(a, b) {
        var s,
          r,
          q = "" + b + "^",
          p = a.eC.get(q);
        if (p != null) return p;
        s = new A.M(null, null);
        s.w = 14;
        s.x = b;
        s.as = q;
        r = A.Z(a, s);
        a.eC.set(q, r);
        return r;
      },
      aF(a) {
        var s,
          r,
          q,
          p = a.length;
        for (s = "", r = "", q = 0; q < p; ++q, r = ",") s += r + a[q].as;
        return s;
      },
      iG(a) {
        var s,
          r,
          q,
          p,
          o,
          n = a.length;
        for (s = "", r = "", q = 0; q < n; q += 3, r = ",") {
          p = a[q];
          o = a[q + 1] ? "!" : ":";
          s += r + p + o + a[q + 2].as;
        }
        return s;
      },
      aG(a, b, c) {
        var s,
          r,
          q,
          p = b;
        if (c.length > 0) p += "<" + A.aF(c) + ">";
        s = a.eC.get(p);
        if (s != null) return s;
        r = new A.M(null, null);
        r.w = 9;
        r.x = b;
        r.y = c;
        if (c.length > 0) r.c = c[0];
        r.as = p;
        q = A.Z(a, r);
        a.eC.set(p, q);
        return q;
      },
      fd(a, b, c) {
        var s, r, q, p, o, n;
        if (b.w === 10) {
          s = b.x;
          r = b.y.concat(c);
        } else {
          r = c;
          s = b;
        }
        q = s.as + (";<" + A.aF(r) + ">");
        p = a.eC.get(q);
        if (p != null) return p;
        o = new A.M(null, null);
        o.w = 10;
        o.x = s;
        o.y = r;
        o.as = q;
        n = A.Z(a, o);
        a.eC.set(q, n);
        return n;
      },
      fX(a, b, c) {
        var s,
          r,
          q = "+" + (b + "(" + A.aF(c) + ")"),
          p = a.eC.get(q);
        if (p != null) return p;
        s = new A.M(null, null);
        s.w = 11;
        s.x = b;
        s.y = c;
        s.as = q;
        r = A.Z(a, s);
        a.eC.set(q, r);
        return r;
      },
      fV(a, b, c) {
        var s,
          r,
          q,
          p,
          o,
          n = b.as,
          m = c.a,
          l = m.length,
          k = c.b,
          j = k.length,
          i = c.c,
          h = i.length,
          g = "(" + A.aF(m);
        if (j > 0) {
          s = l > 0 ? "," : "";
          g += s + "[" + A.aF(k) + "]";
        }
        if (h > 0) {
          s = l > 0 ? "," : "";
          g += s + "{" + A.iG(i) + "}";
        }
        r = n + (g + ")");
        q = a.eC.get(r);
        if (q != null) return q;
        p = new A.M(null, null);
        p.w = 12;
        p.x = b;
        p.y = c;
        p.as = r;
        o = A.Z(a, p);
        a.eC.set(r, o);
        return o;
      },
      fe(a, b, c, d) {
        var s,
          r = b.as + ("<" + A.aF(c) + ">"),
          q = a.eC.get(r);
        if (q != null) return q;
        s = A.iI(a, b, c, r, d);
        a.eC.set(r, s);
        return s;
      },
      iI(a, b, c, d, e) {
        var s, r, q, p, o, n, m, l;
        if (e) {
          s = c.length;
          r = A.eV(s);
          for (q = 0, p = 0; p < s; ++p) {
            o = c[p];
            if (o.w === 1) {
              r[p] = o;
              ++q;
            }
          }
          if (q > 0) {
            n = A.a4(a, b, r, 0);
            m = A.ak(a, c, r, 0);
            return A.fe(a, n, m, c !== m);
          }
        }
        l = new A.M(null, null);
        l.w = 13;
        l.x = b;
        l.y = c;
        l.as = d;
        return A.Z(a, l);
      },
      fR(a, b, c, d) {
        return { u: a, e: b, r: c, s: [], p: 0, n: d };
      },
      fT(a) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m,
          l = a.r,
          k = a.s;
        for (s = l.length, r = 0; r < s; ) {
          q = l.charCodeAt(r);
          if (q >= 48 && q <= 57) r = A.iA(r + 1, q, l, k);
          else if (
            ((((q | 32) >>> 0) - 97) & 65535) < 26 ||
            q === 95 ||
            q === 36 ||
            q === 124
          )
            r = A.fS(a, r, l, k, !1);
          else if (q === 46) r = A.fS(a, r, l, k, !0);
          else {
            ++r;
            switch (q) {
              case 44:
                break;
              case 58:
                k.push(!1);
                break;
              case 33:
                k.push(!0);
                break;
              case 59:
                k.push(A.a3(a.u, a.e, k.pop()));
                break;
              case 94:
                k.push(A.iL(a.u, k.pop()));
                break;
              case 35:
                k.push(A.aH(a.u, 5, "#"));
                break;
              case 64:
                k.push(A.aH(a.u, 2, "@"));
                break;
              case 126:
                k.push(A.aH(a.u, 3, "~"));
                break;
              case 60:
                k.push(a.p);
                a.p = k.length;
                break;
              case 62:
                A.iC(a, k);
                break;
              case 38:
                A.iB(a, k);
                break;
              case 42:
                p = a.u;
                k.push(A.fY(p, A.a3(p, a.e, k.pop()), a.n));
                break;
              case 63:
                p = a.u;
                k.push(A.ff(p, A.a3(p, a.e, k.pop()), a.n));
                break;
              case 47:
                p = a.u;
                k.push(A.fW(p, A.a3(p, a.e, k.pop()), a.n));
                break;
              case 40:
                k.push(-3);
                k.push(a.p);
                a.p = k.length;
                break;
              case 41:
                A.iz(a, k);
                break;
              case 91:
                k.push(a.p);
                a.p = k.length;
                break;
              case 93:
                o = k.splice(a.p);
                A.fU(a.u, a.e, o);
                a.p = k.pop();
                k.push(o);
                k.push(-1);
                break;
              case 123:
                k.push(a.p);
                a.p = k.length;
                break;
              case 125:
                o = k.splice(a.p);
                A.iE(a.u, a.e, o);
                a.p = k.pop();
                k.push(o);
                k.push(-2);
                break;
              case 43:
                n = l.indexOf("(", r);
                k.push(l.substring(r, n));
                k.push(-4);
                k.push(a.p);
                a.p = k.length;
                r = n + 1;
                break;
              default:
                throw "Bad character " + q;
            }
          }
        }
        m = k.pop();
        return A.a3(a.u, a.e, m);
      },
      iA(a, b, c, d) {
        var s,
          r,
          q = b - 48;
        for (s = c.length; a < s; ++a) {
          r = c.charCodeAt(a);
          if (!(r >= 48 && r <= 57)) break;
          q = q * 10 + (r - 48);
        }
        d.push(q);
        return a;
      },
      fS(a, b, c, d, e) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m = b + 1;
        for (s = c.length; m < s; ++m) {
          r = c.charCodeAt(m);
          if (r === 46) {
            if (e) break;
            e = !0;
          } else {
            if (
              !(
                ((((r | 32) >>> 0) - 97) & 65535) < 26 ||
                r === 95 ||
                r === 36 ||
                r === 124
              )
            )
              q = r >= 48 && r <= 57;
            else q = !0;
            if (!q) break;
          }
        }
        p = c.substring(b, m);
        if (e) {
          s = a.u;
          o = a.e;
          if (o.w === 10) o = o.x;
          n = A.iQ(s, o.x)[p];
          if (n == null) A.h('No "' + p + '" in "' + A.ij(o) + '"');
          d.push(A.eU(s, o, n));
        } else d.push(p);
        return m;
      },
      iC(a, b) {
        var s,
          r = a.u,
          q = A.fQ(a, b),
          p = b.pop();
        if (typeof p == "string") b.push(A.aG(r, p, q));
        else {
          s = A.a3(r, a.e, p);
          switch (s.w) {
            case 12:
              b.push(A.fe(r, s, q, a.n));
              break;
            default:
              b.push(A.fd(r, s, q));
              break;
          }
        }
      },
      iz(a, b) {
        var s,
          r,
          q,
          p,
          o,
          n = null,
          m = a.u,
          l = b.pop();
        if (typeof l == "number")
          switch (l) {
            case -1:
              s = b.pop();
              r = n;
              break;
            case -2:
              r = b.pop();
              s = n;
              break;
            default:
              b.push(l);
              r = n;
              s = r;
              break;
          }
        else {
          b.push(l);
          r = n;
          s = r;
        }
        q = A.fQ(a, b);
        l = b.pop();
        switch (l) {
          case -3:
            l = b.pop();
            if (s == null) s = m.sEA;
            if (r == null) r = m.sEA;
            p = A.a3(m, a.e, l);
            o = new A.bb();
            o.a = q;
            o.b = s;
            o.c = r;
            b.push(A.fV(m, p, o));
            return;
          case -4:
            b.push(A.fX(m, b.pop(), q));
            return;
          default:
            throw A.f(A.aL("Unexpected state under `()`: " + A.q(l)));
        }
      },
      iB(a, b) {
        var s = b.pop();
        if (0 === s) {
          b.push(A.aH(a.u, 1, "0&"));
          return;
        }
        if (1 === s) {
          b.push(A.aH(a.u, 4, "1&"));
          return;
        }
        throw A.f(A.aL("Unexpected extended operation " + A.q(s)));
      },
      fQ(a, b) {
        var s = b.splice(a.p);
        A.fU(a.u, a.e, s);
        a.p = b.pop();
        return s;
      },
      a3(a, b, c) {
        if (typeof c == "string") return A.aG(a, c, a.sEA);
        else if (typeof c == "number") {
          b.toString;
          return A.iD(a, b, c);
        } else return c;
      },
      fU(a, b, c) {
        var s,
          r = c.length;
        for (s = 0; s < r; ++s) c[s] = A.a3(a, b, c[s]);
      },
      iE(a, b, c) {
        var s,
          r = c.length;
        for (s = 2; s < r; s += 3) c[s] = A.a3(a, b, c[s]);
      },
      iD(a, b, c) {
        var s,
          r,
          q = b.w;
        if (q === 10) {
          if (c === 0) return b.x;
          s = b.y;
          r = s.length;
          if (c <= r) return s[c - 1];
          c -= r;
          b = b.x;
          q = b.w;
        } else if (c === 0) return b;
        if (q !== 9) throw A.f(A.aL("Indexed base must be an interface type"));
        s = b.y;
        if (c <= s.length) return s[c - 1];
        throw A.f(A.aL("Bad index " + c + " for " + b.l(0)));
      },
      jD(a, b, c) {
        var s,
          r = b.d;
        if (r == null) r = b.d = new Map();
        s = r.get(c);
        if (s == null) {
          s = A.x(a, b, null, c, null, !1) ? 1 : 0;
          r.set(c, s);
        }
        if (0 === s) return !1;
        if (1 === s) return !0;
        return !0;
      },
      x(a, b, c, d, e, f) {
        var s, r, q, p, o, n, m, l, k, j, i;
        if (b === d) return !0;
        if (!A.a1(d)) s = d === t._;
        else s = !0;
        if (s) return !0;
        r = b.w;
        if (r === 4) return !0;
        if (A.a1(b)) return !1;
        s = b.w;
        if (s === 1) return !0;
        q = r === 14;
        if (q) if (A.x(a, c[b.x], c, d, e, !1)) return !0;
        p = d.w;
        s = b === t.P || b === t.T;
        if (s) {
          if (p === 8) return A.x(a, b, c, d.x, e, !1);
          return d === t.P || d === t.T || p === 7 || p === 6;
        }
        if (d === t.K) {
          if (r === 8) return A.x(a, b.x, c, d, e, !1);
          if (r === 6) return A.x(a, b.x, c, d, e, !1);
          return r !== 7;
        }
        if (r === 6) return A.x(a, b.x, c, d, e, !1);
        if (p === 6) {
          s = A.fJ(a, d);
          return A.x(a, b, c, s, e, !1);
        }
        if (r === 8) {
          if (!A.x(a, b.x, c, d, e, !1)) return !1;
          return A.x(a, A.fa(a, b), c, d, e, !1);
        }
        if (r === 7) {
          s = A.x(a, t.P, c, d, e, !1);
          return s && A.x(a, b.x, c, d, e, !1);
        }
        if (p === 8) {
          if (A.x(a, b, c, d.x, e, !1)) return !0;
          return A.x(a, b, c, A.fa(a, d), e, !1);
        }
        if (p === 7) {
          s = A.x(a, b, c, t.P, e, !1);
          return s || A.x(a, b, c, d.x, e, !1);
        }
        if (q) return !1;
        s = r !== 12;
        if ((!s || r === 13) && d === t.Z) return !0;
        o = r === 11;
        if (o && d === t.L) return !0;
        if (p === 13) {
          if (b === t.g) return !0;
          if (r !== 13) return !1;
          n = b.y;
          m = d.y;
          l = n.length;
          if (l !== m.length) return !1;
          c = c == null ? n : n.concat(c);
          e = e == null ? m : m.concat(e);
          for (k = 0; k < l; ++k) {
            j = n[k];
            i = m[k];
            if (!A.x(a, j, c, i, e, !1) || !A.x(a, i, e, j, c, !1)) return !1;
          }
          return A.h4(a, b.x, c, d.x, e, !1);
        }
        if (p === 12) {
          if (b === t.g) return !0;
          if (s) return !1;
          return A.h4(a, b, c, d, e, !1);
        }
        if (r === 9) {
          if (p !== 9) return !1;
          return A.j8(a, b, c, d, e, !1);
        }
        if (o && p === 11) return A.jc(a, b, c, d, e, !1);
        return !1;
      },
      h4(a3, a4, a5, a6, a7, a8) {
        var s, r, q, p, o, n, m, l, k, j, i, h, g, f, e, d, c, b, a, a0, a1, a2;
        if (!A.x(a3, a4.x, a5, a6.x, a7, !1)) return !1;
        s = a4.y;
        r = a6.y;
        q = s.a;
        p = r.a;
        o = q.length;
        n = p.length;
        if (o > n) return !1;
        m = n - o;
        l = s.b;
        k = r.b;
        j = l.length;
        i = k.length;
        if (o + j < n + i) return !1;
        for (h = 0; h < o; ++h) {
          g = q[h];
          if (!A.x(a3, p[h], a7, g, a5, !1)) return !1;
        }
        for (h = 0; h < m; ++h) {
          g = l[h];
          if (!A.x(a3, p[o + h], a7, g, a5, !1)) return !1;
        }
        for (h = 0; h < i; ++h) {
          g = l[m + h];
          if (!A.x(a3, k[h], a7, g, a5, !1)) return !1;
        }
        f = s.c;
        e = r.c;
        d = f.length;
        c = e.length;
        for (b = 0, a = 0; a < c; a += 3) {
          a0 = e[a];
          for (; !0; ) {
            if (b >= d) return !1;
            a1 = f[b];
            b += 3;
            if (a0 < a1) return !1;
            a2 = f[b - 2];
            if (a1 < a0) {
              if (a2) return !1;
              continue;
            }
            g = e[a + 1];
            if (a2 && !g) return !1;
            g = f[b - 1];
            if (!A.x(a3, e[a + 2], a7, g, a5, !1)) return !1;
            break;
          }
        }
        for (; b < d; ) {
          if (f[b + 1]) return !1;
          b += 3;
        }
        return !0;
      },
      j8(a, b, c, d, e, f) {
        var s,
          r,
          q,
          p,
          o,
          n = b.x,
          m = d.x;
        for (; n !== m; ) {
          s = a.tR[n];
          if (s == null) return !1;
          if (typeof s == "string") {
            n = s;
            continue;
          }
          r = s[m];
          if (r == null) return !1;
          q = r.length;
          p = q > 0 ? new Array(q) : v.typeUniverse.sEA;
          for (o = 0; o < q; ++o) p[o] = A.eU(a, b, r[o]);
          return A.h_(a, p, null, c, d.y, e, !1);
        }
        return A.h_(a, b.y, null, c, d.y, e, !1);
      },
      h_(a, b, c, d, e, f, g) {
        var s,
          r = b.length;
        for (s = 0; s < r; ++s) if (!A.x(a, b[s], d, e[s], f, !1)) return !1;
        return !0;
      },
      jc(a, b, c, d, e, f) {
        var s,
          r = b.y,
          q = d.y,
          p = r.length;
        if (p !== q.length) return !1;
        if (b.x !== d.x) return !1;
        for (s = 0; s < p; ++s) if (!A.x(a, r[s], c, q[s], e, !1)) return !1;
        return !0;
      },
      aI(a) {
        var s,
          r = a.w;
        if (!(a === t.P || a === t.T))
          if (!A.a1(a))
            if (r !== 7)
              if (!(r === 6 && A.aI(a.x))) s = r === 8 && A.aI(a.x);
              else s = !0;
            else s = !0;
          else s = !0;
        else s = !0;
        return s;
      },
      jC(a) {
        var s;
        if (!A.a1(a)) s = a === t._;
        else s = !0;
        return s;
      },
      a1(a) {
        var s = a.w;
        return s === 2 || s === 3 || s === 4 || s === 5 || a === t.X;
      },
      fZ(a, b) {
        var s,
          r,
          q = Object.keys(b),
          p = q.length;
        for (s = 0; s < p; ++s) {
          r = q[s];
          a[r] = b[r];
        }
      },
      eV(a) {
        return a > 0 ? new Array(a) : v.typeUniverse.sEA;
      },
      M: function M(a, b) {
        var _ = this;
        _.a = a;
        _.b = b;
        _.r = _.f = _.d = _.c = null;
        _.w = 0;
        _.as = _.Q = _.z = _.y = _.x = null;
      },
      bb: function bb() {
        this.c = this.b = this.a = null;
      },
      eS: function eS(a) {
        this.a = a;
      },
      ba: function ba() {},
      aE: function aE(a) {
        this.a = a;
      },
      i7(a, b) {
        return new A.S(a.h("@<0>").U(b).h("S<1,2>"));
      },
      F(a, b, c) {
        return A.jw(a, new A.S(b.h("@<0>").U(c).h("S<1,2>")));
      },
      O(a, b) {
        return new A.S(a.h("@<0>").U(b).h("S<1,2>"));
      },
      f6(a) {
        return new A.ac(a.h("ac<0>"));
      },
      i9(a) {
        return new A.ac(a.h("ac<0>"));
      },
      fc() {
        var s = Object.create(null);
        s["<non-identifier-key>"] = s;
        delete s["<non-identifier-key>"];
        return s;
      },
      i8(a, b, c) {
        var s = A.i7(b, c);
        a.P(0, new A.dS(s, b, c));
        return s;
      },
      f7(a, b) {
        var s,
          r,
          q = A.f6(b);
        for (
          s = a.length, r = 0;
          r < a.length;
          a.length === s || (0, A.w)(a), ++r
        )
          q.u(0, b.a(a[r]));
        return q;
      },
      dT(a, b) {
        var s = A.f6(b);
        s.v(0, a);
        return s;
      },
      f8(a) {
        var s,
          r = {};
        if (A.fj(a)) return "{...}";
        s = new A.aA("");
        try {
          $.ae.push(a);
          s.a += "{";
          r.a = !0;
          a.P(0, new A.dU(r, s));
          s.a += "}";
        } finally {
          $.ae.pop();
        }
        r = s.a;
        return r.charCodeAt(0) == 0 ? r : r;
      },
      ac: function ac(a) {
        var _ = this;
        _.a = 0;
        _.f = _.e = _.d = _.c = _.b = null;
        _.r = 0;
        _.$ti = a;
      },
      eR: function eR(a) {
        this.a = a;
        this.b = null;
      },
      be: function be(a, b, c) {
        var _ = this;
        _.a = a;
        _.b = b;
        _.d = _.c = null;
        _.$ti = c;
      },
      dS: function dS(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
      },
      V: function V() {},
      dU: function dU(a, b) {
        this.a = a;
        this.b = b;
      },
      ay: function ay() {},
      aD: function aD() {},
      a0(a, b) {
        var s,
          r,
          q,
          p = null;
        try {
          p = JSON.parse(a);
        } catch (r) {
          s = A.fk(r);
          q = A.fA(String(s));
          throw A.f(q);
        }
        q = A.eX(p);
        return q;
      },
      eX(a) {
        var s;
        if (a == null) return null;
        if (typeof a != "object") return a;
        if (!Array.isArray(a)) return new A.bc(a, Object.create(null));
        for (s = 0; s < a.length; ++s) a[s] = A.eX(a[s]);
        return a;
      },
      fF(a, b, c) {
        return new A.au(a, b);
      },
      iV(a) {
        return a.E();
      },
      iy(a, b) {
        return new A.eO(a, [], A.jr());
      },
      bc: function bc(a, b) {
        this.a = a;
        this.b = b;
        this.c = null;
      },
      bd: function bd(a) {
        this.a = a;
      },
      aM: function aM() {},
      aO: function aO() {},
      au: function au(a, b) {
        this.a = a;
        this.b = b;
      },
      aY: function aY(a, b) {
        this.a = a;
        this.b = b;
      },
      dP: function dP() {},
      dQ: function dQ(a) {
        this.a = a;
      },
      eP: function eP() {},
      eQ: function eQ(a, b) {
        this.a = a;
        this.b = b;
      },
      eO: function eO(a, b, c) {
        this.c = a;
        this.a = b;
        this.b = c;
      },
      K(a) {
        var s = A.ie(a, null);
        if (s != null) return s;
        throw A.f(A.fA(a));
      },
      ib(a, b, c) {
        var s;
        if (a > 4294967295) A.h(A.dZ(a, 0, 4294967295, "length", null));
        s = J.i5(new Array(a), c);
        return s;
      },
      e(a, b, c) {
        var s = A.ia(a, c);
        return s;
      },
      ia(a, b) {
        var s, r;
        if (Array.isArray(a)) return A.b(a.slice(0), b.h("z<0>"));
        s = A.b([], b.h("z<0>"));
        for (r = J.a6(a); r.q(); ) s.push(r.gA());
        return s;
      },
      fM(a, b, c) {
        var s = J.a6(b);
        if (!s.q()) return a;
        if (c.length === 0) {
          do a += A.q(s.gA());
          while (s.q());
        } else {
          a += A.q(s.gA());
          for (; s.q(); ) a = a + c + A.q(s.gA());
        }
        return a;
      },
      aR(a) {
        if (typeof a == "number" || A.fh(a) || a == null) return J.E(a);
        if (typeof a == "string") return JSON.stringify(a);
        return A.ig(a);
      },
      aL(a) {
        return new A.aK(a);
      },
      hO(a) {
        return new A.a7(!1, null, null, a);
      },
      fI(a) {
        var s = null;
        return new A.ai(s, s, !1, s, s, a);
      },
      f9(a, b) {
        return new A.ai(null, null, !0, a, b, "Value not in range");
      },
      dZ(a, b, c, d, e) {
        return new A.ai(b, c, !0, a, d, "Invalid value");
      },
      ii(a, b, c) {
        if (0 > a || a > c) throw A.f(A.dZ(a, 0, c, "start", null));
        if (b != null) {
          if (a > b || b > c) throw A.f(A.dZ(b, a, c, "end", null));
          return b;
        }
        return c;
      },
      ih(a, b) {
        return a;
      },
      fC(a, b, c, d) {
        return new A.aT(b, !0, a, d, "Index out of range");
      },
      j(a) {
        return new A.b6(a);
      },
      R(a) {
        return new A.aN(a);
      },
      fA(a) {
        return new A.dC(a);
      },
      i4(a, b, c) {
        var s, r;
        if (A.fj(a)) {
          if (b === "(" && c === ")") return "(...)";
          return b + "..." + c;
        }
        s = A.b([], t.s);
        $.ae.push(a);
        try {
          A.jg(a, s);
        } finally {
          $.ae.pop();
        }
        r = A.fM(b, s, ", ") + c;
        return r.charCodeAt(0) == 0 ? r : r;
      },
      fD(a, b, c) {
        var s, r;
        if (A.fj(a)) return b + "..." + c;
        s = new A.aA(b);
        $.ae.push(a);
        try {
          r = s;
          r.a = A.fM(r.a, a, ", ");
        } finally {
          $.ae.pop();
        }
        s.a += c;
        r = s.a;
        return r.charCodeAt(0) == 0 ? r : r;
      },
      jg(a, b) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m,
          l = a.gC(a),
          k = 0,
          j = 0;
        while (!0) {
          if (!(k < 80 || j < 3)) break;
          if (!l.q()) return;
          s = A.q(l.gA());
          b.push(s);
          k += s.length + 2;
          ++j;
        }
        if (!l.q()) {
          if (j <= 5) return;
          r = b.pop();
          q = b.pop();
        } else {
          p = l.gA();
          ++j;
          if (!l.q()) {
            if (j <= 4) {
              b.push(A.q(p));
              return;
            }
            r = A.q(p);
            q = b.pop();
            k += r.length + 2;
          } else {
            o = l.gA();
            ++j;
            for (; l.q(); p = o, o = n) {
              n = l.gA();
              ++j;
              if (j > 100) {
                while (!0) {
                  if (!(k > 75 && j > 3)) break;
                  k -= b.pop().length + 2;
                  --j;
                }
                b.push("...");
                return;
              }
            }
            q = A.q(p);
            r = A.q(o);
            k += r.length + q.length + 4;
          }
        }
        if (j > b.length + 2) {
          k += 5;
          m = "...";
        } else m = null;
        while (!0) {
          if (!(k > 80 && b.length > 3)) break;
          k -= b.pop().length + 2;
          if (m == null) {
            k += 5;
            m = "...";
          }
        }
        if (m != null) b.push(m);
        b.push(q);
        b.push(r);
      },
      aJ(a) {
        A.jH(A.q(a));
      },
      eL: function eL() {},
      t: function t() {},
      aK: function aK(a) {
        this.a = a;
      },
      aB: function aB() {},
      a7: function a7(a, b, c, d) {
        var _ = this;
        _.a = a;
        _.b = b;
        _.c = c;
        _.d = d;
      },
      ai: function ai(a, b, c, d, e, f) {
        var _ = this;
        _.e = a;
        _.f = b;
        _.a = c;
        _.b = d;
        _.c = e;
        _.d = f;
      },
      aT: function aT(a, b, c, d, e) {
        var _ = this;
        _.f = a;
        _.a = b;
        _.b = c;
        _.c = d;
        _.d = e;
      },
      b6: function b6(a) {
        this.a = a;
      },
      b4: function b4(a) {
        this.a = a;
      },
      aN: function aN(a) {
        this.a = a;
      },
      az: function az() {},
      eM: function eM(a) {
        this.a = a;
      },
      dC: function dC(a) {
        this.a = a;
      },
      i: function i() {},
      aw: function aw() {},
      v: function v() {},
      aA: function aA(a) {
        this.a = a;
      },
      eN: function eN() {},
      aC: function aC() {
        this.b = this.a = 0;
      },
      jE(a) {
        var s, r, q, p, o, n, m, l;
        try {
          if (a.length < 2) {
            A.aJ(
              "\u5f15\u6570\u304c\u4e0d\u8db3\u3057\u3066\u3044\u307e\u3059\u3002"
            );
            A.aJ(a);
            throw A.f(new A.t());
          }
          s = a[0];
          r = A.j0(s, a);
          o = new A.aA("");
          n = A.iy(o, null);
          n.a_(r);
          m = o.a;
          return m.charCodeAt(0) == 0 ? m : m;
        } catch (l) {
          q = A.fk(l);
          p = A.jz(l);
          A.aJ(q);
          A.aJ(p);
          throw l;
        }
      },
      j0(a, b) {
        var s;
        switch (a) {
          case "initialize":
            return A.j1(b);
          case "list_up_actions":
            return A.jh(b);
          case "choice_cpu_action":
            return A.iU(b);
          case "execute_action":
            s = A.dD(A.a0(b[1], null));
            return A.ik(A.f1(t.a.a(A.a0(b[2], null))), s, B.h).E();
          case "forward_to_next_state":
            return A.il(A.dD(A.a0(b[1], null))).E();
          case "encode_game_state":
            return A.iW(b);
          default:
            A.aJ("\u30e1\u30bd\u30c3\u30c9\u306a\u3057");
            throw A.f(new A.t());
        }
      },
      j1(a) {
        var s,
          r = t.j,
          q = r.a(A.a0(a[1], null)),
          p = r.a(A.a0(a[2], null)),
          o = A.b(["blue", "red"], t.s);
        B.a.ai(o);
        r = A.c(q).h("k<1,d>");
        r = A.e(new A.k(q, new A.eY(), r), !0, r.h("p.E"));
        s = A.c(p).h("k<1,d>");
        s = A.e(new A.k(p, new A.eZ(), s), !0, s.h("p.E"));
        return A.im(B.a.gi(o), B.h, r, s).E();
      },
      jh(a) {
        var s = A.io(A.dD(A.a0(a[1], null))),
          r = A.c(s).h("k<1,n<d,@>>");
        return A.e(new A.k(s, new A.f_(), r), !0, r.h("p.E"));
      },
      iU(a) {
        var s = A.dD(A.a0(a[1], null)),
          r = t.j.a(A.a0(a[2], null)),
          q = A.c(r).h("k<1,l>"),
          p = A.e(new A.k(r, new A.eW(), q), !0, q.h("p.E")),
          o = A.hy(s);
        return A.hN(t.B.a(J.Q(B.a.gi(A.hw(p, s)), "action")), p, s, o).E();
      },
      iW(a) {
        var s,
          r,
          q,
          p,
          o,
          n = A.ic(A.a0(a[1], null)),
          m = A.i9(t.N);
        m.v(0, new A.U(n, A.D(n).h("U<1>")));
        s = A.e(m, !0, m.$ti.c);
        B.a.au(s);
        r = A.b([], t.t);
        r.push(s);
        q = [];
        for (
          p = s.length, o = 0;
          o < s.length;
          s.length === p || (0, A.w)(s), ++o
        )
          q.push(n.j(0, s[o]));
        r.push(q);
        return r[1];
      },
      eY: function eY() {},
      eZ: function eZ() {},
      f_: function f_() {},
      eW: function eW() {},
      hy(a) {
        var s = a.w,
          r = A.c(s).h("a<1>"),
          q = A.e(new A.a(s, new A.bn(a), r), !0, r.h("i.E"));
        r = new A.k(q, new A.bo(a), A.c(q).h("k<1,B<d>>")).av(0, new A.bp());
        s = r.$ti.h("ap<i.E,d>");
        s = A.dT(new A.ap(r, new A.bq(), s), s.h("i.E"));
        return A.e(s, !0, A.D(s).c);
      },
      hw(a, b) {
        var s;
        B.a.ai(a);
        s = A.c(a).h("k<1,n<d,@>>");
        s = A.e(new A.k(a, new A.bl(b), s), !0, s.h("p.E"));
        B.a.I(s, new A.bm());
        return s;
      },
      hu(a, b) {
        if (A.hs(a, b) >= 0.9) return A.aQ(a.d, A.hH(a, b), !0, a.c, a.b, b.w);
        else return A.b([""], t.s);
      },
      hs(a, b) {
        var s,
          r,
          q,
          p,
          o,
          n = A.hB(a, b),
          m = n - A.hE(a, b);
        if (m < 1) return 0;
        s = A.hC(a, b);
        r = A.hF(a, b);
        q = s + r;
        if (s === 0) p = B.a.k(A.b([1, 2, 3], t.Y), r);
        else p = !1;
        if (p) return 1;
        if (r === 0 && s < 3) {
          q = s + A.hD(a, b);
          m = n;
        }
        o = A.hx(q);
        p = o - A.ht(q, m);
        if (p < 1) return 0;
        return p / o;
      },
      hB(a, b) {
        var s = b.w;
        return new A.a(s, new A.cb(a), A.c(s).h("a<1>")).gn(0);
      },
      hE(a, b) {
        var s = b.w;
        return new A.a(s, new A.ce(a), A.c(s).h("a<1>")).gn(0);
      },
      hC(a, b) {
        var s = b.w;
        return new A.a(s, new A.cc(a), A.c(s).h("a<1>")).gn(0);
      },
      hF(a, b) {
        var s = b.w;
        return new A.a(s, new A.cf(a), A.c(s).h("a<1>")).gn(0);
      },
      hD(a, b) {
        var s = b.w;
        return new A.a(s, new A.cd(a), A.c(s).h("a<1>")).gn(0);
      },
      hx(a) {
        var s, r, q, p;
        for (s = a - 3, r = a, q = 1; r > s; --r) q = r * q;
        for (p = 1, r = 3; r > 0; --r) p = r * p;
        return B.b.aj(q, p);
      },
      ht(a, b) {
        var s,
          r,
          q,
          p,
          o = a - b;
        if (o < 3) return 1;
        for (s = o - 3, r = o, q = 1; r > s; --r) q = r * q;
        for (p = 1, r = 3; r > 0; --r) p = r * p;
        return B.b.aj(q, p);
      },
      hH(a, b) {
        var s = b.w;
        return new A.a(s, new A.ci(a), A.c(s).h("a<1>")).gn(0) > 1;
      },
      hv(a, b) {
        switch (a.b) {
          case "dominate":
            return 10;
          case "attack":
            return A.hK(a, b);
          case "instruction_attack":
            return A.hM(a, b);
          case "deploy":
            return 7;
          case "instruction_move":
            return A.fn(a, b);
          case "move":
            return A.fn(a, b);
          case "bolster":
            return A.hL(a, b);
          case "take_initiative":
            return 3;
          case "recruit":
            return 2;
          default:
            return 1;
        }
      },
      hK(a, b) {
        var s = A.fm(a, b);
        if (s.b === "pike" && a.c.length < 2)
          if (B.a.k(A.L(B.a.gi(a.c).d), s.d)) return 4;
        return 9;
      },
      hM(a, b) {
        if (A.fm(a, b).b === "pike" && a.c.length < 2) return 4;
        return 9;
      },
      fn(a, b) {
        if (A.hJ(a, b)) return 0;
        return 6;
      },
      hL(a, b) {
        var s = a.e.b;
        if (s === "lancer") return 1;
        if (A.hI(a, b)) return 8;
        if (A.hG(a, b, s === "berserker" ? 0 : 3)) return 6;
        return 5;
      },
      fm(a, b) {
        return B.a.X(b.w, new A.cg(a));
      },
      hJ(a, b) {
        var s = b.r,
          r = A.c(s);
        return new A.r(
          new A.a(s, new A.cl(), r.h("a<1>")),
          new A.cm(),
          r.h("r<1,d>")
        ).k(0, B.a.gi(a.c).d);
      },
      hI(a, b) {
        var s = A.L(a.d);
        return !new A.a(s, new A.ck(b), A.c(s).h("a<1>")).gB(0);
      },
      hG(a, b, c) {
        var s = b.w;
        return new A.a(s, new A.ch(a), A.c(s).h("a<1>")).gn(0) > c;
      },
      hN(a, b, c, d) {
        var s = "instruction_move",
          r = a.b;
        if (r === "move") return A.fl("move", b, c, d);
        if (r === s) return A.fl(s, b, c, d);
        if (r === "recruit") return A.hA(b, c);
        if (r === "deploy") return A.hz(b, c, d);
        return a;
      },
      hz(a, b, c) {
        var s,
          r,
          q,
          p,
          o = "removeWhere",
          n = [],
          m = b.r,
          l = A.c(m),
          k = l.h("r<1,d>");
        B.a.v(
          n,
          A.e(
            new A.r(new A.a(m, new A.bx(b), l.h("a<1>")), new A.by(), k),
            !0,
            k.h("i.E")
          )
        );
        if (!!n.fixed$length) A.h(A.j(o));
        B.a.m(n, new A.bz(b), !0);
        m = b.w;
        l = A.c(m);
        k = l.h("r<1,d>");
        B.a.v(
          n,
          A.e(
            new A.r(new A.a(m, new A.bC(b), l.h("a<1>")), new A.bD(), k),
            !0,
            k.h("i.E")
          )
        );
        k = A.f7(n, A.c(n).c);
        s = A.e(k, !0, A.D(k).c);
        k = A.c(a);
        l = k.h("a<1>");
        k = k.h("r<1,d>");
        k = A.dT(new A.r(new A.a(a, new A.bE(), l), new A.bF(), k), k.h("i.E"));
        r = A.e(k, !0, A.D(k).c);
        k = A.c(r).h("k<1,n<d,@>>");
        q = A.e(new A.k(r, new A.bG(s, b), k), !0, k.h("p.E"));
        B.a.I(q, new A.bH());
        p = A.e(new A.a(a, new A.bI(q), l), !0, l.h("i.E"));
        if (!new A.a(p, new A.bJ(c), A.c(p).h("a<1>")).gB(0)) {
          if (!!p.fixed$length) A.h(A.j(o));
          B.a.m(p, new A.bA(c), !0);
        }
        B.a.I(p, new A.bB(q));
        return B.a.gi(p);
      },
      fl(a, b, c, d) {
        var s,
          r,
          q,
          p,
          o = "removeWhere",
          n = [],
          m = c.r,
          l = A.c(m),
          k = l.h("r<1,d>");
        B.a.v(
          n,
          A.e(
            new A.r(new A.a(m, new A.bQ(c), l.h("a<1>")), new A.bR(), k),
            !0,
            k.h("i.E")
          )
        );
        if (!!n.fixed$length) A.h(A.j(o));
        B.a.m(n, new A.bS(c), !0);
        m = c.w;
        l = A.c(m);
        k = l.h("r<1,d>");
        B.a.v(
          n,
          A.e(
            new A.r(new A.a(m, new A.bV(c), l.h("a<1>")), new A.bW(), k),
            !0,
            k.h("i.E")
          )
        );
        k = A.f7(n, A.c(n).c);
        s = A.e(k, !0, A.D(k).c);
        k = A.c(b);
        l = k.h("a<1>");
        k = k.h("r<1,d>");
        k = A.dT(
          new A.r(new A.a(b, new A.bX(a), l), new A.bY(), k),
          k.h("i.E")
        );
        r = A.e(k, !0, A.D(k).c);
        k = A.c(r).h("k<1,n<d,@>>");
        q = A.e(new A.k(r, new A.bZ(s, c), k), !0, k.h("p.E"));
        B.a.I(q, new A.c_());
        p = A.e(new A.a(b, new A.c0(a, q), l), !0, l.h("i.E"));
        if (!new A.a(p, new A.c1(d), A.c(p).h("a<1>")).gB(0)) {
          if (!!p.fixed$length) A.h(A.j(o));
          B.a.m(p, new A.bT(d), !0);
        }
        B.a.I(p, new A.bU(q));
        return B.a.gi(p);
      },
      hA(a, b) {
        var s = b.w,
          r = A.c(s).h("a<1>"),
          q = A.e(new A.a(s, new A.c7(b), r), !0, r.h("i.E"));
        B.a.I(q, new A.c8(b));
        return B.a.ac(a, new A.c9(q), new A.ca(a));
      },
      bn: function bn(a) {
        this.a = a;
      },
      bo: function bo(a) {
        this.a = a;
      },
      bp: function bp() {},
      bq: function bq() {},
      bl: function bl(a) {
        this.a = a;
      },
      bm: function bm() {},
      cb: function cb(a) {
        this.a = a;
      },
      ce: function ce(a) {
        this.a = a;
      },
      cc: function cc(a) {
        this.a = a;
      },
      cf: function cf(a) {
        this.a = a;
      },
      cd: function cd(a) {
        this.a = a;
      },
      ci: function ci(a) {
        this.a = a;
      },
      cg: function cg(a) {
        this.a = a;
      },
      cl: function cl() {},
      cm: function cm() {},
      ck: function ck(a) {
        this.a = a;
      },
      cj: function cj(a, b) {
        this.a = a;
        this.b = b;
      },
      ch: function ch(a) {
        this.a = a;
      },
      bx: function bx(a) {
        this.a = a;
      },
      by: function by() {},
      bz: function bz(a) {
        this.a = a;
      },
      bv: function bv(a) {
        this.a = a;
      },
      bw: function bw() {},
      bC: function bC(a) {
        this.a = a;
      },
      bD: function bD() {},
      bE: function bE() {},
      bF: function bF() {},
      bG: function bG(a, b) {
        this.a = a;
        this.b = b;
      },
      bu: function bu(a, b) {
        this.a = a;
        this.b = b;
      },
      br: function br(a) {
        this.a = a;
      },
      bs: function bs(a) {
        this.a = a;
      },
      bt: function bt(a) {
        this.a = a;
      },
      bH: function bH() {},
      bI: function bI(a) {
        this.a = a;
      },
      bJ: function bJ(a) {
        this.a = a;
      },
      bA: function bA(a) {
        this.a = a;
      },
      bB: function bB(a) {
        this.a = a;
      },
      bQ: function bQ(a) {
        this.a = a;
      },
      bR: function bR() {},
      bS: function bS(a) {
        this.a = a;
      },
      bO: function bO(a) {
        this.a = a;
      },
      bP: function bP() {},
      bV: function bV(a) {
        this.a = a;
      },
      bW: function bW() {},
      bX: function bX(a) {
        this.a = a;
      },
      bY: function bY() {},
      bZ: function bZ(a, b) {
        this.a = a;
        this.b = b;
      },
      bN: function bN(a, b) {
        this.a = a;
        this.b = b;
      },
      bK: function bK(a) {
        this.a = a;
      },
      bL: function bL(a) {
        this.a = a;
      },
      bM: function bM(a) {
        this.a = a;
      },
      c_: function c_() {},
      c0: function c0(a, b) {
        this.a = a;
        this.b = b;
      },
      c1: function c1(a) {
        this.a = a;
      },
      bT: function bT(a) {
        this.a = a;
      },
      bU: function bU(a) {
        this.a = a;
      },
      c7: function c7(a) {
        this.a = a;
      },
      c8: function c8(a) {
        this.a = a;
      },
      c3: function c3(a) {
        this.a = a;
      },
      c4: function c4(a) {
        this.a = a;
      },
      c5: function c5(a) {
        this.a = a;
      },
      c6: function c6(a) {
        this.a = a;
      },
      c9: function c9(a) {
        this.a = a;
      },
      c2: function c2(a) {
        this.a = a;
      },
      ca: function ca(a) {
        this.a = a;
      },
      L(a) {
        var s,
          r,
          q,
          p,
          o = A.K(a.split("\u2013")[0]),
          n = A.K(a.split("\u2013")[1]),
          m = B.b.M(o, 2) === 1,
          l = "" + o + "\u2013",
          k = "" + (n - 1),
          j = o + 1,
          i = "" + j,
          h = m ? i + "\u2013" + n : i + "\u2013" + k;
        j = "" + j;
        s = m ? j + "\u2013" + (n + 1) : j + "\u2013" + n;
        j = "" + (n + 1);
        i = o - 1;
        r = "" + i;
        q = m ? r + "\u2013" + j : r + "\u2013" + n;
        i = "" + i;
        p = m ? i + "\u2013" + n : i + "\u2013" + k;
        return A.b([l + k, h, s, l + j, q, p], t.s);
      },
      ag(a2) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m,
          l,
          k,
          j,
          i,
          h,
          g,
          f = A.K(a2.split("\u2013")[0]),
          e = A.K(a2.split("\u2013")[1]),
          d = B.b.M(f, 2) === 1,
          c = "" + f + "\u2013",
          b = "" + (e - 2),
          a = f + 1,
          a0 = "" + a,
          a1 = d ? a0 + "\u2013" + (e - 1) : a0 + "\u2013" + b;
        a0 = f + 2;
        s = e - 1;
        r = "" + a0;
        q = "" + s;
        p = d ? r + "\u2013" + q : r + "\u2013" + q;
        a0 = "" + a0 + "\u2013";
        r = "" + e;
        q = e + 1;
        o = "" + q;
        n = d ? a0 + o : a0 + o;
        a = "" + a;
        m = d ? a + "\u2013" + (e + 2) : a + "\u2013" + q;
        a = "" + (e + 2);
        o = f - 1;
        l = "" + o;
        k = d ? l + "\u2013" + a : l + "\u2013" + q;
        l = f - 2;
        j = "" + l;
        q = "" + q;
        i = d ? j + "\u2013" + q : j + "\u2013" + q;
        q = "" + l + "\u2013";
        l = "" + s;
        h = d ? q + l : q + l;
        o = "" + o;
        g = d ? o + "\u2013" + s : o + "\u2013" + b;
        return A.b([c + b, a1, p, a0 + r, n, m, c + a, k, i, q + r, h, g], t.s);
      },
      fw(a9) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m,
          l,
          k,
          j,
          i,
          h,
          g,
          f,
          e,
          d,
          c,
          b,
          a,
          a0,
          a1 = A.K(a9.split("\u2013")[0]),
          a2 = A.K(a9.split("\u2013")[1]),
          a3 = B.b.M(a1, 2) === 1,
          a4 = "" + a1 + "\u2013",
          a5 = "" + (a2 - 3),
          a6 = a1 + 1,
          a7 = "" + a6,
          a8 = a3 ? a7 + "\u2013" + (a2 - 2) : a7 + "\u2013" + a5;
        a7 = a1 + 2;
        s = a2 - 2;
        r = "" + a7;
        q = "" + s;
        p = a3 ? r + "\u2013" + q : r + "\u2013" + q;
        r = a1 + 3;
        q = "" + r;
        o = a3 ? q + "\u2013" + (a2 - 1) : q + "\u2013" + s;
        q = "" + r;
        n = a3 ? q + "\u2013" + a2 : q + "\u2013" + (a2 - 1);
        q = "" + r;
        m = a3 ? q + "\u2013" + (a2 + 1) : q + "\u2013" + a2;
        r = "" + r;
        l = a3 ? r + "\u2013" + (a2 + 2) : r + "\u2013" + (a2 + 1);
        r = a2 + 2;
        a7 = "" + a7;
        q = "" + r;
        k = a3 ? a7 + "\u2013" + q : a7 + "\u2013" + q;
        a6 = "" + a6;
        j = a3 ? a6 + "\u2013" + (a2 + 3) : a6 + "\u2013" + r;
        a6 = "" + (a2 + 3);
        a7 = a1 - 1;
        q = "" + a7;
        i = a3 ? q + "\u2013" + a6 : q + "\u2013" + r;
        q = a1 - 2;
        h = "" + q;
        g = "" + r;
        f = a3 ? h + "\u2013" + g : h + "\u2013" + g;
        h = a1 - 3;
        g = "" + h;
        e = a3 ? g + "\u2013" + r : g + "\u2013" + (a2 + 1);
        r = "" + h;
        d = a3 ? r + "\u2013" + (a2 + 1) : r + "\u2013" + a2;
        r = "" + h;
        c = a3 ? r + "\u2013" + a2 : r + "\u2013" + (a2 - 1);
        r = "" + h;
        b = a3 ? r + "\u2013" + (a2 - 1) : r + "\u2013" + s;
        r = "" + q;
        q = "" + s;
        a = a3 ? r + "\u2013" + q : r + "\u2013" + q;
        a7 = "" + a7;
        a0 = a3 ? a7 + "\u2013" + s : a7 + "\u2013" + a5;
        return A.b(
          [a4 + a5, a8, p, o, n, m, l, k, j, a4 + a6, i, f, e, d, c, b, a, a0],
          t.s
        );
      },
      hY(a, b) {
        var s = A.K(a.split("\u2013")[0]),
          r = A.K(a.split("\u2013")[1]),
          q = A.K(b.split("\u2013")[0]),
          p = A.K(b.split("\u2013")[1]),
          o = new A.cL(s, q).$0();
        return A.q(o) + "\u2013" + A.q(new A.cM(o, s, r, p).$0());
      },
      N(a, b) {
        if (a === b) return 0;
        if (B.a.k(A.L(a), b)) return 1;
        if (B.a.k(A.ag(a), b)) return 2;
        if (B.a.k(A.fw(a), b)) return 3;
        return 4;
      },
      aQ(a, b, c, d, e, f) {
        var s,
          r,
          q = "removeWhere",
          p = new A.cy(e, a, c, f).$0();
        if (c) s = p;
        else {
          r = A.c(p).h("a<1>");
          s = A.e(new A.a(p, new A.cz(f, d), r), !0, r.h("i.E"));
        }
        if (!!s.fixed$length) A.h(A.j(q));
        B.a.m(s, new A.cA(), !0);
        if (!!s.fixed$length) A.h(A.j(q));
        B.a.m(s, new A.cB(f, b), !0);
        return s;
      },
      hX(a, b, c) {
        var s = c === "blue" ? "red" : "blue",
          r = A.c(a),
          q = r.h("r<1,d>");
        return A.e(
          new A.r(new A.a(a, new A.cJ(b, s), r.h("a<1>")), new A.cK(), q),
          !0,
          q.h("i.E")
        );
      },
      hW(a, b) {
        var s = A.c(b),
          r = s.h("r<1,d>");
        return A.e(
          new A.r(new A.a(b, new A.cC(a), s.h("a<1>")), new A.cD(), r),
          !0,
          r.h("i.E")
        );
      },
      fv(a, b, c, d) {
        var s,
          r,
          q,
          p,
          o = "removeWhere",
          n = A.L(a),
          m = A.c(n).h("a<1>"),
          l = A.e(new A.a(n, new A.cT(d), m), !0, m.h("i.E"));
        if (!b && c === "light_cavalry") {
          s = A.b([], t.s);
          for (
            m = l.length, r = 0;
            r < l.length;
            l.length === m || (0, A.w)(l), ++r
          ) {
            n = A.L(l[r]);
            B.a.v(s, new A.a(n, new A.cU(d), A.c(n).h("a<1>")));
          }
          B.a.v(s, l);
          if (!!s.fixed$length) A.h(A.j(o));
          B.a.m(s, new A.cV(), !0);
          m = A.f7(s, t.N);
          return A.e(m, !0, A.D(m).c);
        }
        if (b) {
          q = B.a.X(d, new A.cW()).d;
          p = B.a.L(A.L(q), A.ag(q));
          if (!!l.fixed$length) A.h(A.j(o));
          B.a.m(l, new A.cX(p), !0);
        }
        if (!!l.fixed$length) A.h(A.j(o));
        B.a.m(l, new A.cY(), !0);
        return l;
      },
      ft(a, b, c, d) {
        var s,
          r,
          q,
          p,
          o = "removeWhere",
          n = A.b([], t.s);
        if (c === "scout")
          for (
            s = d.length, r = 0;
            r < d.length;
            d.length === s || (0, A.w)(d), ++r
          ) {
            q = d[r];
            if (q.c === b && q.e === "board") B.a.v(n, A.L(q.d));
          }
        s = A.c(a);
        p = s.h("r<1,d>");
        B.a.v(
          n,
          A.e(
            new A.r(new A.a(a, new A.cF(b), s.h("a<1>")), new A.cG(), p),
            !0,
            p.h("i.E")
          )
        );
        if (!!n.fixed$length) A.h(A.j(o));
        B.a.m(n, new A.cH(d), !0);
        if (!!n.fixed$length) A.h(A.j(o));
        B.a.m(n, new A.cI(), !0);
        return n;
      },
      fu(a, b, c, d) {
        var s = B.a.L(A.L(a), A.ag(a)),
          r = A.c(s).h("a<1>"),
          q = A.e(new A.a(s, new A.cP(d, b), r), !0, r.h("i.E"));
        if (c === "marshall") {
          if (!!q.fixed$length) A.h(A.j("removeWhere"));
          B.a.m(q, new A.cQ(d), !0);
        }
        return q;
      },
      cL: function cL(a, b) {
        this.a = a;
        this.b = b;
      },
      cM: function cM(a, b, c, d) {
        var _ = this;
        _.a = a;
        _.b = b;
        _.c = c;
        _.d = d;
      },
      cy: function cy(a, b, c, d) {
        var _ = this;
        _.a = a;
        _.b = b;
        _.c = c;
        _.d = d;
      },
      cr: function cr(a, b) {
        this.a = a;
        this.b = b;
      },
      cs: function cs() {},
      ct: function ct(a, b) {
        this.a = a;
        this.b = b;
      },
      cu: function cu() {},
      cv: function cv() {},
      cw: function cw(a, b) {
        this.a = a;
        this.b = b;
      },
      cx: function cx() {},
      cz: function cz(a, b) {
        this.a = a;
        this.b = b;
      },
      cq: function cq(a, b) {
        this.a = a;
        this.b = b;
      },
      cA: function cA() {},
      cB: function cB(a, b) {
        this.a = a;
        this.b = b;
      },
      cp: function cp(a, b) {
        this.a = a;
        this.b = b;
      },
      cJ: function cJ(a, b) {
        this.a = a;
        this.b = b;
      },
      cK: function cK() {},
      cC: function cC(a) {
        this.a = a;
      },
      cD: function cD() {},
      cT: function cT(a) {
        this.a = a;
      },
      cS: function cS(a) {
        this.a = a;
      },
      cU: function cU(a) {
        this.a = a;
      },
      cR: function cR(a) {
        this.a = a;
      },
      cV: function cV() {},
      cW: function cW() {},
      cX: function cX(a) {
        this.a = a;
      },
      cY: function cY() {},
      cF: function cF(a) {
        this.a = a;
      },
      cG: function cG() {},
      cH: function cH(a) {
        this.a = a;
      },
      cE: function cE(a) {
        this.a = a;
      },
      cI: function cI() {},
      cP: function cP(a, b) {
        this.a = a;
        this.b = b;
      },
      cO: function cO(a, b) {
        this.a = a;
        this.b = b;
      },
      cQ: function cQ(a) {
        this.a = a;
      },
      cN: function cN(a) {
        this.a = a;
      },
      i_(a, b, c) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m = "removeWhere",
          l = "{location}",
          k = a.e,
          j = k.b;
        if (j === "footman") {
          s = b.w;
          r = A.c(s).h("a<1>");
          q = A.e(new A.a(s, new A.df(), r), !0, r.h("i.E"));
          if (q.length !== 0) {
            if (!!s.fixed$length) A.h(A.j(m));
            B.a.m(s, new A.dg(q), !0);
            r = a.d;
            B.a.u(s, B.a.gi(q).D("board", r));
            if (!!s.fixed$length) A.h(A.j(m));
            B.a.m(s, new A.dh(a), !0);
            B.a.u(s, k.D("discard", "discard"));
            k = a.p();
            s = t.s;
            p = A.b([], s);
            s = A.b([], s);
            o = A.u(c);
            n = b.b === "blue" ? A.u(c).w : A.u(c).r;
            o = A.A(o.k1, "{team}", n);
            j = A.ab(c, j);
            j = A.A(o, "{unit}", j);
            r = A.b7(r);
            return b.W(p, k, A.A(j, l, r), s);
          }
        }
        s = b.w;
        if (!!s.fixed$length) A.h(A.j(m));
        B.a.m(s, new A.di(a), !0);
        r = a.d;
        B.a.u(s, k.D("board", r));
        k = a.p();
        s = t.s;
        p = A.b([], s);
        s = A.b([], s);
        o = A.u(c);
        n = b.b === "blue" ? A.u(c).w : A.u(c).r;
        o = A.A(o.k1, "{team}", n);
        j = A.ab(c, j);
        j = A.A(o, "{unit}", j);
        r = A.b7(r);
        return b.W(p, k, A.A(j, l, r), s);
      },
      hZ(a, b, c) {
        var s,
          r,
          q,
          p,
          o,
          n = b.w;
        if (!!n.fixed$length) A.h(A.j("removeWhere"));
        B.a.m(n, new A.de(a), !0);
        s = a.e;
        B.a.u(n, s.D("board", a.d));
        n = a.p();
        r = t.s;
        q = A.b([], r);
        r = A.b([], r);
        p = A.u(c);
        o = b.b === "blue" ? A.u(c).w : A.u(c).r;
        p = A.A(p.id, "{team}", o);
        s = A.ab(c, s.b);
        return b.W(q, n, A.A(p, "{unit}", s), r);
      },
      fy(a1, a2, a3) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m,
          l,
          k,
          j,
          i,
          h,
          g,
          f,
          e,
          d = "removeWhere",
          c = "discard",
          b = "cemetery",
          a = "instruction_attack",
          a0 = {};
        a0.a = a2;
        if (!B.a.N(a2.as, new A.d3())) {
          s = a2.w;
          if (!!s.fixed$length) A.h(A.j(d));
          B.a.m(s, new A.d4(a1), !0);
          B.a.u(s, a1.e.D(c, c));
        }
        s = a2.w;
        r = A.c(s).h("a<1>");
        q = A.e(new A.a(s, new A.d5(a1), r), !0, r.h("i.E"));
        p = new A.d6(a0, q, a1).$0();
        for (
          s = p.length, o = 0;
          o < p.length;
          p.length === s || (0, A.w)(p), ++o
        ) {
          n = p[o];
          r = a0.a.w;
          if (!!r.fixed$length) A.h(A.j(d));
          B.a.m(r, new A.d7(n), !0);
          B.a.u(a0.a.w, n.D(b, b));
        }
        s = a1.c;
        if (B.a.gi(s).b === "lancer") {
          m = A.hY(B.a.gi(s).d, a1.d);
          for (
            r = s.length, o = 0;
            o < s.length;
            s.length === r || (0, A.w)(s), ++o
          ) {
            l = s[o];
            k = a0.a.w;
            if (!!k.fixed$length) A.h(A.j(d));
            B.a.m(k, new A.d8(l), !0);
            B.a.u(a0.a.w, l.D("board", m));
          }
        }
        if (B.a.gi(s).b === "berserker")
          if (B.a.k(a0.a.as, "berserk")) {
            r = a0.a.w;
            if (!!r.fixed$length) A.h(A.j(d));
            B.a.m(r, new A.d9(a1), !0);
            B.a.u(a0.a.w, B.a.gi(s).D(c, c));
          }
        if (B.a.gi(q).b === "pike") {
          j = A.L(a1.d);
          r = a0.a.w;
          k = A.c(r).h("a<1>");
          i = A.e(new A.a(r, new A.da(a1), k), !0, k.h("i.E"));
          if (B.a.k(j, B.a.gi(i).d)) {
            r = a0.a.w;
            if (!!r.fixed$length) A.h(A.j(d));
            B.a.m(r, new A.db(i), !0);
            B.a.u(a0.a.w, B.a.gi(i).D(b, b));
          }
        }
        r = t.s;
        h = A.b([], r);
        k = a0.a.w;
        g = A.c(k).h("a<1>");
        f = A.e(new A.a(k, new A.dc(a1), g), !0, g.h("i.E"));
        if (B.a.gi(s).b === "sword")
          if (f.length !== 0) B.a.v(h, A.b(["move", "endurance"], r));
        if (B.a.gi(s).b === "warrior_priest") {
          a0.a = A.fx(a0.a.p(), 3148);
          B.a.v(
            h,
            A.b(
              [
                "deploy",
                "move",
                "attack",
                "dominate",
                "bolster",
                "recruit",
                "take_initiative",
                "instruction_move",
                a,
                "oracle",
              ],
              r
            )
          );
        }
        if (B.a.gi(s).b === "berserker")
          if (f.length > 1)
            B.a.v(h, A.b(["move", "attack", "dominate", "berserk"], r));
        if (B.a.gi(s).b === "footman") {
          k = a0.a.z;
          if (!!k.fixed$length) A.h(A.j(d));
          B.a.m(k, new A.dd(a1), !0);
          if (a0.a.z.length === 1 && a1.b !== a)
            B.a.v(h, A.b(["move", "attack", "dominate", "teamwork"], r));
        }
        r = a0.a;
        k = a1.p();
        g = A.u(a3);
        e = a0.a.b === "blue" ? A.u(a3).w : A.u(a3).r;
        g = A.A(g.k3, "{team}", e);
        s = A.ab(a3, B.a.gi(s).b);
        s = A.A(g, "{unit}", s);
        g = A.ab(a3, B.a.gi(q).b);
        return r.aa(h, k, A.A(s, "{target}", g));
      },
      i3(a, b, c) {
        var s,
          r,
          q,
          p,
          o = b.w;
        if (!!o.fixed$length) A.h(A.j("removeWhere"));
        B.a.m(o, new A.dB(a), !0);
        B.a.u(o, a.e.V("discard", "discard", !0));
        o = a.p();
        s = t.s;
        r = A.b([], s);
        s = A.b([], s);
        q = A.u(c);
        p = b.b === "blue" ? A.u(c).w : A.u(c).r;
        return b.aM(r, !0, a.a, o, A.A(q.dx, "{team}", p), s);
      },
      i1(a, b, c) {
        var s, r, q, p, o;
        if (!B.a.N(b.as, new A.dw())) {
          s = b.w;
          if (!!s.fixed$length) A.h(A.j("removeWhere"));
          B.a.m(s, new A.dx(a), !0);
          B.a.u(s, a.e.V("discard", "discard", !0));
        }
        s = a.p();
        r = t.s;
        q = A.b([], r);
        r = A.b([], r);
        p = A.u(c);
        o = b.b === "blue" ? A.u(c).w : A.u(c).r;
        return b.W(q, s, A.A(p.db, "{team}", o), r);
      },
      i0(a, b, c) {
        var s,
          r,
          q,
          p,
          o,
          n = "removeWhere",
          m = "discard",
          l = b.as;
        if (!B.a.N(l, new A.dj())) {
          s = b.w;
          if (!!s.fixed$length) A.h(A.j(n));
          B.a.m(s, new A.dk(a), !0);
          B.a.u(s, a.e.D(m, m));
        }
        s = b.r;
        if (!!s.fixed$length) A.h(A.j(n));
        B.a.m(s, new A.dl(a), !0);
        r = a.d;
        B.a.u(s, new A.o(r, a.a));
        s = a.c;
        if (B.a.gi(s).b === "berserker")
          if (B.a.k(l, "berserk")) {
            l = b.w;
            if (!!l.fixed$length) A.h(A.j(n));
            B.a.m(l, new A.dm(a), !0);
            B.a.u(l, B.a.gi(s).D(m, m));
          }
        l = t.s;
        q = A.b([], l);
        if (B.a.gi(s).b === "sword") B.a.v(q, A.b(["move", "endurance"], l));
        if (B.a.gi(s).b === "warrior_priest") {
          b = A.fx(b.p(), 3148);
          B.a.v(
            q,
            A.b(
              [
                "deploy",
                "move",
                "attack",
                "dominate",
                "bolster",
                "recruit",
                "take_initiative",
                "oracle",
                "instruction_move",
                "instruction_attack",
              ],
              l
            )
          );
        }
        if (B.a.gi(s).b === "berserker") {
          p = b.w;
          o = A.c(p).h("a<1>");
          if (A.e(new A.a(p, new A.dn(a), o), !0, o.h("i.E")).length > 1)
            B.a.v(q, A.b(["move", "attack", "dominate", "berserk"], l));
        }
        if (B.a.gi(s).b === "footman") {
          s = b.z;
          if (!!s.fixed$length) A.h(A.j(n));
          B.a.m(s, new A.dp(a), !0);
          if (s.length === 1)
            B.a.v(q, A.b(["move", "attack", "dominate", "teamwork"], l));
        }
        l = A.u(c);
        s = b.b === "blue" ? A.u(c).w : A.u(c).r;
        l = A.A(l.ok, "{team}", s);
        s = A.ab(c, a.e.b);
        l = A.A(l, "{unit}", s);
        r = A.b7(r);
        return b.aa(q, a, A.A(l, "{location}", r));
      },
      fz(a, b, c) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m,
          l = "removeWhere",
          k = "discard",
          j = b.as;
        if (!B.a.N(j, new A.dq())) {
          s = b.w;
          if (!!s.fixed$length) A.h(A.j(l));
          B.a.m(s, new A.dr(a), !0);
          B.a.u(s, a.e.D(k, k));
        }
        for (
          s = a.c, r = s.length, q = b.w, p = a.d, o = 0;
          o < s.length;
          s.length === r || (0, A.w)(s), ++o
        ) {
          n = s[o];
          if (!!q.fixed$length) A.h(A.j(l));
          B.a.m(q, new A.ds(n), !0);
          B.a.u(q, n.D("board", p));
        }
        if (B.a.gi(s).b === "berserker")
          if (B.a.k(j, "berserk")) {
            if (!!q.fixed$length) A.h(A.j(l));
            B.a.m(q, new A.dt(a), !0);
            B.a.u(q, B.a.gi(s).D(k, k));
          }
        j = t.s;
        m = A.b([], j);
        if (B.a.gi(s).b === "cavalry") {
          r = B.a.gi(s).b;
          if (A.aQ(p, s.length > 1, !1, a.a, r, q).length !== 0)
            B.a.v(m, A.b(["attack", "haste"], j));
        }
        if (B.a.gi(s).b === "berserker") {
          r = A.c(q).h("a<1>");
          if (A.e(new A.a(q, new A.du(a), r), !0, r.h("i.E")).length > 1)
            B.a.v(m, A.b(["move", "attack", "dominate", "berserk"], j));
        }
        if (B.a.gi(s).b === "footman") {
          r = b.z;
          if (!!r.fixed$length) A.h(A.j(l));
          B.a.m(r, new A.dv(a), !0);
          if (r.length !== 0 && a.b !== "instruction_move")
            B.a.v(m, A.b(["move", "attack", "dominate", "teamwork"], j));
        }
        j = A.u(c);
        r = b.b === "blue" ? A.u(c).w : A.u(c).r;
        j = A.A(j.k2, "{team}", r);
        r = A.ab(c, B.a.gi(s).b);
        j = A.A(j, "{unit}", r);
        s = A.b7(B.a.gi(s).d);
        j = A.A(j, "{from}", s);
        p = A.b7(p);
        return b.aa(m, a, A.A(j, "{to}", p));
      },
      i2(a, b, c) {
        var s,
          r,
          q,
          p,
          o = "removeWhere",
          n = "discard",
          m = b.w;
        if (!!m.fixed$length) A.h(A.j(o));
        B.a.m(m, new A.dy(a), !0);
        B.a.u(m, a.e.V(n, n, !0));
        if (!!m.fixed$length) A.h(A.j(o));
        B.a.m(m, new A.dz(a), !0);
        s = a.c;
        B.a.u(m, B.a.gi(s).D(n, n));
        r = t.s;
        q = A.b([], r);
        if (B.a.gi(s).b === "mercenary")
          if (!new A.a(m, new A.dA(), A.c(m).h("a<1>")).gB(0))
            B.a.v(q, A.b(["move", "attack", "dominate", "immediate_force"], r));
        m = A.b([], r);
        r = A.u(c);
        p = b.b === "blue" ? A.u(c).w : A.u(c).r;
        r = A.A(r.p1, "{team}", p);
        s = A.ab(c, B.a.gi(s).b);
        return b.W(q, a, A.A(r, "{unit}", s), m);
      },
      fx(a, b) {
        var s,
          r = a.w,
          q = A.c(r).h("a<1>"),
          p = q.h("i.E"),
          o = A.e(new A.a(r, new A.cZ(a), q), !0, p),
          n = o.length !== 0 ? o : A.e(new A.a(r, new A.d_(a), q), !0, p);
        q = new A.aC();
        q.a1(b);
        B.a.a0(n, q);
        s = B.a.gi(n).D("hand", "hand4");
        if (!!r.fixed$length) A.h(A.j("removeWhere"));
        B.a.m(r, new A.d0(s), !0);
        B.a.u(r, s.p());
        return a.p();
      },
      df: function df() {},
      dg: function dg(a) {
        this.a = a;
      },
      dh: function dh(a) {
        this.a = a;
      },
      di: function di(a) {
        this.a = a;
      },
      de: function de(a) {
        this.a = a;
      },
      d3: function d3() {},
      d4: function d4(a) {
        this.a = a;
      },
      d5: function d5(a) {
        this.a = a;
      },
      d6: function d6(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
      },
      d2: function d2() {},
      d7: function d7(a) {
        this.a = a;
      },
      d8: function d8(a) {
        this.a = a;
      },
      d9: function d9(a) {
        this.a = a;
      },
      da: function da(a) {
        this.a = a;
      },
      d1: function d1() {},
      db: function db(a) {
        this.a = a;
      },
      dc: function dc(a) {
        this.a = a;
      },
      dd: function dd(a) {
        this.a = a;
      },
      dB: function dB(a) {
        this.a = a;
      },
      dw: function dw() {},
      dx: function dx(a) {
        this.a = a;
      },
      dj: function dj() {},
      dk: function dk(a) {
        this.a = a;
      },
      dl: function dl(a) {
        this.a = a;
      },
      dm: function dm(a) {
        this.a = a;
      },
      dn: function dn(a) {
        this.a = a;
      },
      dp: function dp(a) {
        this.a = a;
      },
      dq: function dq() {},
      dr: function dr(a) {
        this.a = a;
      },
      ds: function ds(a) {
        this.a = a;
      },
      dt: function dt(a) {
        this.a = a;
      },
      du: function du(a) {
        this.a = a;
      },
      dv: function dv(a) {
        this.a = a;
      },
      dy: function dy(a) {
        this.a = a;
      },
      dz: function dz(a) {
        this.a = a;
      },
      dA: function dA() {},
      cZ: function cZ(a) {
        this.a = a;
      },
      d_: function d_(a) {
        this.a = a;
      },
      d0: function d0(a) {
        this.a = a;
      },
      im(a, b, c, d) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m,
          l,
          k,
          j,
          i = "quantity",
          h = "bag",
          g = "supply",
          f = A.b([], t.e);
        for (
          s = c.length, r = 0;
          r < c.length;
          c.length === s || (0, A.w)(c), ++r
        ) {
          q = c[r];
          p = B.a.X(B.r, new A.eh(q));
          for (o = 0; o < p.j(0, i); o = m) {
            n = A.q(q);
            m = o + 1;
            l = o < 2;
            k = l ? h : g;
            l = l ? h : g;
            f.push(new A.m(n + "\u2013" + m, q, "blue", k, l, !1));
          }
        }
        for (
          s = d.length, r = 0;
          r < d.length;
          d.length === s || (0, A.w)(d), ++r
        ) {
          q = d[r];
          p = B.a.X(B.r, new A.ei(q));
          for (o = 0; o < p.j(0, i); o = m) {
            n = A.q(q);
            m = o + 1;
            l = o < 2;
            k = l ? h : g;
            l = l ? h : g;
            f.push(new A.m(n + "\u2013" + m, q, "red", k, l, !1));
          }
        }
        s = B.a.k(A.b(["shogun", "prototype"], t.s), "sergeant")
          ? "red"
          : "neutral";
        j = A.b(
          [
            B.A,
            new A.o("1\u20132", s),
            B.C,
            B.D,
            B.y,
            B.x,
            B.z,
            new A.o("5\u20131", "red"),
            B.B,
            B.w,
          ],
          t.p
        );
        s = Date.now();
        n = A.u(b);
        return A.fL(
          A.f2(
            B.q,
            j,
            !1,
            !1,
            a,
            new A.l("neutral", "none", B.I, "none", B.d.p()),
            0,
            n.p2,
            s,
            a,
            c,
            d,
            f,
            B.q,
            "",
            ""
          ),
          3148
        );
      },
      fL(a, a0) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m,
          l,
          k,
          j,
          i,
          h,
          g,
          f,
          e,
          d,
          c,
          b = "removeWhere";
        for (
          s = ["blue", "red"],
            r = a.w,
            q = A.c(r).h("a<1>"),
            p = q.h("i.E"),
            o = 0;
          o < 2;
          ++o
        ) {
          n = s[o];
          for (m = 0; m < 2; ++m) {
            if (new A.a(r, new A.e_(n), q).gn(0) === 3) continue;
            l = A.e(new A.a(r, new A.e0(n), q), !0, p);
            k = l.length !== 0 ? l : A.e(new A.a(r, new A.e1(n), q), !0, p);
            for (
              j = k.length, i = 0;
              i < k.length;
              k.length === j || (0, A.w)(k), ++i
            ) {
              h = k[i];
              if (!!r.fixed$length) A.h(A.j(b));
              B.a.m(r, new A.e2(h), !0);
              B.a.u(r, h.D("bag", "bag"));
            }
            g = new A.a(r, new A.e3(n), q).gn(0);
            j = new A.aC();
            j.a1(a0);
            B.a.a0(k, j);
            for (j = 3 - g; k.length > j; ) {
              f = new A.aC();
              f.a1(a0);
              e = f.ah(k.length);
              if (!!k.fixed$length) A.h(A.j("removeAt"));
              if (e < 0 || e >= k.length) A.h(A.f9(e, null));
              k.splice(e, 1)[0];
            }
            for (d = 0; d < k.length; d = c) {
              if (!!r.fixed$length) A.h(A.j(b));
              B.a.m(r, new A.e4(k, d), !0);
              c = d + 1;
              B.a.u(r, k[d].D("hand", "hand" + (c + g)));
            }
          }
        }
        return a.aH(
          A.b(
            [
              "deploy",
              "move",
              "attack",
              "dominate",
              "bolster",
              "recruit",
              "take_initiative",
              "instruction_move",
              "instruction_attack",
            ],
            t.s
          )
        );
      },
      aj(b5, b6) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m,
          l,
          k,
          j,
          i,
          h,
          g,
          f,
          e,
          d,
          c,
          b,
          a,
          a0,
          a1,
          a2,
          a3,
          a4 = "none",
          a5 = "take_initiative",
          a6 = "deploy",
          a7 = "dominate",
          a8 = "instruction_move",
          a9 = "instruction_attack",
          b0 = A.b([], t.F),
          b1 = b5.w,
          b2 = A.c(b1).h("a<1>"),
          b3 = b2.h("i.E"),
          b4 = A.e(new A.a(b1, new A.ej(b6), b2), !0, b3);
        if (b4.length === 0) B.a.u(b4, B.d.p());
        s = b6.c;
        r = t.e;
        b0.push(new A.l(s, "pass", A.b([B.d.p()], r), a4, b6));
        q = b5.as;
        if (B.a.k(q, a5) && !b5.d && b5.c !== b5.b)
          b0.push(new A.l(s, a5, A.b([B.d.p()], r), a4, b6));
        if (B.a.k(q, "recruit")) {
          p = b5.b === "blue" ? b5.e : b5.f;
          o = p.length;
          n = 0;
          for (; n < p.length; p.length === o || (0, A.w)(p), ++n) {
            m = B.a.ac(b1, new A.ek(p[n]), new A.el());
            if (m.a !== "none")
              b0.push(new A.l(s, "recruit", A.b([m], r), a4, b6));
          }
        }
        p = b6.b;
        if (B.a.k(A.b(["blue_royal", "red_royal"], t.s), p)) return b0;
        if (B.a.k(q, a6) && B.a.gi(b4).b === "none") {
          l = A.ft(b5.r, s, p, b1);
          for (
            o = l.length, n = 0;
            n < l.length;
            l.length === o || (0, A.w)(l), ++n
          ) {
            k = l[n];
            b0.push(new A.l(s, a6, A.b([B.d.p()], r), k, b6));
          }
        }
        if (B.a.k(q, a6) && B.a.gi(b4).b === "footman" && b5.z.length < 2) {
          l = A.ft(b5.r, s, p, b1);
          for (
            o = l.length, n = 0;
            n < l.length;
            l.length === o || (0, A.w)(l), ++n
          ) {
            k = l[n];
            b0.push(new A.l(s, a6, A.b([B.d.p()], r), k, b6));
          }
        }
        o = A.c(b4);
        j = new A.k(b4, new A.en(), o.h("k<1,d>")).aR(0);
        i = A.e(j, !0, A.D(j).c);
        if (B.a.gi(b4).b === "footman") {
          if (!!i.fixed$length) A.h(A.j("removeWhere"));
          B.a.m(i, new A.eo(b5), !0);
        }
        for (
          j = i.length, o = o.h("a<1>"), h = o.h("i.E"), g = b5.r, n = 0;
          n < i.length;
          i.length === j || (0, A.w)(i), ++n
        ) {
          f = i[n];
          if (B.a.k(q, a7) && B.a.gi(b4).b !== "none") {
            e = A.hX(g, f, B.a.gi(b4).c);
            for (
              d = e.length, c = 0;
              c < e.length;
              e.length === d || (0, A.w)(e), ++c
            ) {
              k = e[c];
              b0.push(
                new A.l(s, a7, A.e(new A.a(b4, new A.ep(f), o), !0, h), k, b6)
              );
            }
          }
          if (B.a.k(q, "attack") && B.a.gi(b4).b !== "none") {
            d = B.a.gi(b4).b;
            b = B.a.gi(b4).c;
            a = A.aQ(
              f,
              A.e(new A.a(b4, new A.eq(f), o), !0, h).length > 1,
              !1,
              b,
              d,
              b1
            );
            for (
              d = a.length, c = 0;
              c < a.length;
              a.length === d || (0, A.w)(a), ++c
            ) {
              k = a[c];
              b0.push(
                new A.l(
                  s,
                  "attack",
                  A.e(new A.a(b4, new A.er(f), o), !0, h),
                  k,
                  b6
                )
              );
            }
          }
          if (B.a.k(q, "bolster") && B.a.gi(b4).b !== "none") {
            a0 = A.hW(f, b1);
            for (
              d = a0.length, c = 0;
              c < a0.length;
              a0.length === d || (0, A.w)(a0), ++c
            ) {
              k = a0[c];
              b0.push(new A.l(s, "bolster", A.b([B.d.p()], r), k, b6));
            }
          }
          if (B.a.k(q, "move") && B.a.gi(b4).b !== "none") {
            a1 = A.fv(
              B.a.gi(A.e(new A.a(b4, new A.es(f), o), !0, h)).d,
              !1,
              p,
              b1
            );
            for (
              d = a1.length, c = 0;
              c < a1.length;
              a1.length === d || (0, A.w)(a1), ++c
            ) {
              k = a1[c];
              b0.push(
                new A.l(
                  s,
                  "move",
                  A.e(new A.a(b4, new A.et(f), o), !0, h),
                  k,
                  b6
                )
              );
            }
          }
        }
        if (B.a.k(q, a8) && B.a.gi(b4).b === "ensign") {
          r = B.a.gi(b4).b;
          a2 = A.fu(B.a.gi(b4).d, B.a.gi(b4).c, r, b1);
          for (
            r = a2.length, n = 0;
            n < a2.length;
            a2.length === r || (0, A.w)(a2), ++n
          ) {
            a3 = A.e(new A.a(b1, new A.eu(a2[n]), b2), !0, b3);
            p = B.a.gi(a3).b;
            a1 = A.fv(B.a.gi(a3).d, !0, p, b1);
            for (
              p = a1.length, c = 0;
              c < a1.length;
              a1.length === p || (0, A.w)(a1), ++c
            )
              b0.push(new A.l(s, a8, a3, a1[c], b6));
          }
        }
        if (B.a.k(q, a9) && B.a.gi(b4).b === "marshall") {
          r = B.a.gi(b4).b;
          a2 = A.fu(B.a.gi(b4).d, B.a.gi(b4).c, r, b1);
          for (
            r = a2.length, n = 0;
            n < a2.length;
            a2.length === r || (0, A.w)(a2), ++n
          ) {
            a3 = A.e(new A.a(b1, new A.em(a2[n]), b2), !0, b3);
            q = B.a.gi(a3).b;
            p = B.a.gi(a3).c;
            o = a3.length;
            a = A.aQ(B.a.gi(a3).d, o > 1, !1, p, q, b1);
            for (
              q = a.length, c = 0;
              c < a.length;
              a.length === q || (0, A.w)(a), ++c
            )
              b0.push(new A.l(s, a9, a3, a[c], b6));
          }
        }
        return b0;
      },
      io(a) {
        var s, r, q, p, o;
        if (B.a.N(a.as, new A.ev())) return A.ip(a);
        s = a.w;
        r = A.c(s).h("a<1>");
        q = A.e(new A.a(s, new A.ew(a), r), !0, r.h("i.E"));
        p = A.b([], t.F);
        for (s = q.length, o = 0; o < s; ++o) B.a.v(p, A.aj(a, q[o]));
        return p;
      },
      ik(a, b, c) {
        var s = new A.e9(a, b, c).$0(),
          r = new A.ea(s).$0(),
          q = s.a,
          p = r.length !== 0,
          o = p ? r[0] : "",
          n = p ? r[1] : "";
        return s.aL(p, q + 1, Date.now(), o, n);
      },
      ip(a) {
        var s;
        if (a.as.length !== 0) {
          s = a.Q.c;
          switch (B.a.gi(s).b) {
            case "sword":
              s = B.a.gi(s);
              return A.aj(a.p(), s);
            case "mercenary":
              s = B.a.gi(s);
              return A.aj(a.p(), s);
            case "cavalry":
              s = B.a.gi(s);
              return A.aj(a.p(), s);
            case "berserker":
              s = B.a.gi(s);
              return A.aj(a.p(), s);
            case "warrior_priest":
              s = B.a.X(a.w, new A.ex());
              return A.aj(a.p(), s);
            case "footman":
              if (a.z.length === 1) {
                s = B.a.gi(s);
                return A.aj(a.p(), s);
              } else return A.b([], t.F);
            default:
              return A.b([], t.F);
          }
        }
        return A.b([], t.F);
      },
      il(a) {
        var s, r, q, p, o;
        if (B.a.N(a.as, new A.ed())) return a;
        s = new A.ee(a, a.b === "blue" ? "red" : "blue", 3148).$0();
        if (s == null) s = a.p();
        r = A.b(
          [
            "deploy",
            "move",
            "attack",
            "dominate",
            "bolster",
            "recruit",
            "take_initiative",
            "instruction_move",
            "instruction_attack",
          ],
          t.s
        );
        q = s.w;
        p = A.c(q);
        o = p.h("r<1,d>");
        o = A.dT(
          new A.r(new A.a(q, new A.ef(), p.h("a<1>")), new A.eg(), o),
          o.h("i.E")
        );
        return s.aJ(r, A.e(o, !0, A.D(o).c));
      },
      eh: function eh(a) {
        this.a = a;
      },
      ei: function ei(a) {
        this.a = a;
      },
      e_: function e_(a) {
        this.a = a;
      },
      e0: function e0(a) {
        this.a = a;
      },
      e1: function e1(a) {
        this.a = a;
      },
      e2: function e2(a) {
        this.a = a;
      },
      e3: function e3(a) {
        this.a = a;
      },
      e4: function e4(a, b) {
        this.a = a;
        this.b = b;
      },
      ej: function ej(a) {
        this.a = a;
      },
      ek: function ek(a) {
        this.a = a;
      },
      el: function el() {},
      en: function en() {},
      eo: function eo(a) {
        this.a = a;
      },
      ep: function ep(a) {
        this.a = a;
      },
      eq: function eq(a) {
        this.a = a;
      },
      er: function er(a) {
        this.a = a;
      },
      es: function es(a) {
        this.a = a;
      },
      et: function et(a) {
        this.a = a;
      },
      eu: function eu(a) {
        this.a = a;
      },
      em: function em(a) {
        this.a = a;
      },
      ev: function ev() {},
      ew: function ew(a) {
        this.a = a;
      },
      e9: function e9(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
      },
      ea: function ea(a) {
        this.a = a;
      },
      e5: function e5() {},
      e6: function e6() {},
      e7: function e7() {},
      e8: function e8() {},
      ex: function ex() {},
      ed: function ed() {},
      ee: function ee(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
      },
      eb: function eb(a) {
        this.a = a;
      },
      ec: function ec() {},
      ef: function ef() {},
      eg: function eg() {},
      ah(
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
        a0,
        a1,
        a2,
        a3,
        a4,
        a5,
        a6,
        a7,
        a8,
        a9,
        b0,
        b1,
        b2,
        b3,
        b4,
        b5,
        b6,
        b7,
        b8,
        b9,
        c0,
        c1,
        c2,
        c3,
        c4,
        c5,
        c6,
        c7,
        c8,
        c9,
        d0,
        d1,
        d2
      ) {
        return new A.dX(e, o, r, p, c3, c5, c7, c2, c6, c8, j);
      },
      u(a) {
        switch (a) {
          case B.h:
            return A.ah(
              "AI\u304c\u601d\u8003\u4e2d",
              "\u5f37\u5316",
              "\u5893\u5834",
              "\u9589\u3058\u308b",
              "\u8d64\u8ecd",
              "\u5c71\u672d",
              "\u65b0\u305f\u306b\u5f93\u5175\u3092\u5c55\u958b",
              "\u6368\u5834",
              "\u5360\u9818",
              "\u30b2\u30fc\u30e0\u958b\u59cb",
              "\u624b\u672d",
              "\u64cd\u4f5c",
              "\u65e2\u5b58\u306e\u5f93\u5175\u3092\u64cd\u4f5c",
              "\u30d1\u30b9",
              "\u9752\u8ecd",
              "{team}\u304c\u5148\u653b\u3092\u596a\u53d6\u3057\u307e\u3057\u305f\u3002",
              "{team}\u306e\u52dd\u5229",
              "{team}\u304c\u30d1\u30b9\u3057\u307e\u3057\u305f\u3002",
              "\u884c\u52d5\u3059\u308b\u5834\u5408\u306f\u624b\u672d\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
              "\u518d\u6226",
              "\u884c\u52d5\u3092\u9078\u629e",
              "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u8868\u793a",
              "\u96c7\u7528\u5834",
              "\u88fd\u4f5c\u8005\u3092\u652f\u63f4\u3059\u308b",
              "\u5148\u653b\u596a\u53d6",
              "\u611f\u8b1d",
              "\u96c7\u7528\u3067\u304d\u308b\u6226\u529b\u304c\u3042\u308a\u307e\u305b\u3093\u3002",
              "\u307e\u305a\u306f\u624b\u672d\u304b\u3089\u30b3\u30a4\u30f3\u3092\u3072\u3068\u3064\u9078\u3073\u3001\u884c\u52d5\u3057\u307e\u3059\u3002",
              "\u4f55\u3082\u3084\u308b\u3053\u3068\u304c\u306a\u3044\u5834\u5408\u306f\u30d1\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u30d1\u30b9\u306e\u5834\u5408\u3082\u30b3\u30a4\u30f3\u3092\u6368\u3066\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",
              "\u30b3\u30a4\u30f3\u3092\u6368\u3066\u3066\u5148\u653b\u6a29\u3092\u596a\u53d6\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\n\u5148\u653b\u8005\u306f\u6b21\u306e\u30e9\u30a6\u30f3\u30c9\u3067\u5148\u306b\u884c\u52d5\u3067\u304d\u307e\u3059\u3002",
              "\u76f8\u624b\u3068\u4ea4\u4e92\u306b\u884c\u52d5\u3057\u3001\u5168\u3066\u306e\u624b\u672d\u3092\u4f7f\u3044\u5207\u3063\u305f\u3089\u6b21\u306e\u30e9\u30a6\u30f3\u30c9\u3078\u9032\u307f\u307e\u3059\u3002\n\u624b\u672d\u306f\u5c71\u672d\u304b\u3089\u88dc\u5145\u3055\u308c\u307e\u3059\u3002",
              "\u76f8\u624b\u306e\u60c5\u5831\u306f\u3053\u3053\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\n\u76f8\u624b\u306e\u624b\u672d\u306b\u4f55\u304c\u3042\u308b\u304b\u63a8\u6e2c\u3057\u3064\u3064\u30d7\u30ec\u30fc\u3057\u307e\u3057\u3087\u3046\u3002",
              "\u30b3\u30a4\u30f3\u3092\u9078\u629e\u3057\u305f\u3089\u3001\u76e4\u9762\u306b\u30b3\u30a4\u30f3\u3092\u914d\u7f6e\u3057\u3066\u3001\u30e6\u30cb\u30c3\u30c8\u3092\u51fa\u9663\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u51fa\u9663\u3067\u304d\u308b\u306e\u306f\u30e6\u30cb\u30c3\u30c8\u304c\u3044\u306a\u3044\u81ea\u9663\u304b\u3089\u306e\u307f\u3067\u3059\u3002\n\u305f\u3060\u3057\u3001\u30ed\u30a4\u30e4\u30eb\u30b3\u30a4\u30f3\u306f\u30e6\u30cb\u30c3\u30c8\u3067\u306f\u306a\u3044\u306e\u3067\u51fa\u9663\u3067\u304d\u307e\u305b\u3093\u3002",
              "\u30ed\u30a4\u30e4\u30eb\u30b3\u30a4\u30f3:",
              "\u81ea\u9663\u306f\u9752\u8272\u3001\u4e2d\u7acb\u5730\u306f\u7070\u8272\u3001\u6575\u9663\u306f\u8d64\u8272\u3067\u8868\u3055\u308c\u307e\u3059\u3002\n\u30e6\u30cb\u30c3\u30c8\u3092\u64cd\u4f5c\u3057\u3064\u3064\u3001\u81ea\u9663\u3092\u5897\u3084\u3057\u3066\u3044\u304f\u3053\u3068\u304c\u76ee\u7684\u3068\u306a\u308a\u307e\u3059\u3002",
              "\u81ea\u9663\u306e\u6570\u304c\uff16\u7b87\u6240\u306b\u5230\u9054\u3057\u305f\u65b9\u304c\u52dd\u5229\u3057\u307e\u3059\u3002",
              "\u76e4\u9762\u306b\u3044\u308b\u30e6\u30cb\u30c3\u30c8\u306b\u6307\u793a\u3092\u4e0e\u3048\u308b\u306b\u306f\u3001\u540c\u3058\u7d75\u67c4\u306e\u30b3\u30a4\u30f3\u3092\u9078\u629e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u3069\u306e\u30b3\u30a4\u30f3\u304c\u624b\u672d\u306b\u5165\u308b\u304b\u306f\u30e9\u30f3\u30c0\u30e0\u3067\u3059\u3002",
              "\u30b3\u30a4\u30f3\u3092\u88cf\u5411\u304d\u306b\u6368\u3066\u3066\u3001\u30e6\u30cb\u30c3\u30c8\u3092\u65b0\u305f\u306b\u96c7\u7528\u3067\u304d\u307e\u3059\u3002\n\u96c7\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u5c71\u672d\u304b\u3089\u305d\u306e\u30e6\u30cb\u30c3\u30c8\u306e\u30b3\u30a4\u30f3\u3092\u5f15\u3051\u308b\u78ba\u7387\u304c\u4e0a\u304c\u308a\u307e\u3059\u3002",
              "\u96c7\u7528\u3055\u308c\u305f\u30e6\u30cb\u30c3\u30c8\u3084\u6368\u3066\u3089\u308c\u305f\u30b3\u30a4\u30f3\u306f\u6368\u3066\u5834\u306b\u7f6e\u304b\u308c\u307e\u3059\u3002\n\u5c71\u672d\u304c\u7a7a\u306b\u306a\u3063\u305f\u3089\u3001\u6368\u3066\u5834\u306e\u30b3\u30a4\u30f3\u304c\u5168\u3066\u5c71\u672d\u306b\u79fb\u52d5\u3055\u308c\u307e\u3059\u3002\n\u307e\u305f\u3001\u653b\u6483\u3055\u308c\u305f\u30e6\u30cb\u30c3\u30c8\u306e\u30b3\u30a4\u30f3\u306f\u5893\u5834\u3078\u9001\u3089\u308c\u307e\u3059\u3002\n\u5893\u5834\u306b\u3042\u308b\u30b3\u30a4\u30f3\u304c\u5c71\u672d\u306b\u79fb\u52d5\u3059\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002",
              "\u3053\u3053\u3067\u5c71\u672d\u306e\u679a\u6570\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\n\u6700\u521d\u306f\u5168\u30e6\u30cb\u30c3\u30c8\u306e\u30b3\u30a4\u30f3\u304c\uff12\u679a\u305a\u3064\u3068\u3001\u30ed\u30a4\u30e4\u30eb\u30b3\u30a4\u30f3\u304c\uff11\u679a\u306e\u5408\u8a08\uff19\u679a\u304c\u5165\u3063\u3066\u3044\u307e\u3059\u3002",
              "\u7406\u89e3",
              "{team}\u306e{unit}\u304c{target}\u3092\u653b\u6483\u3057\u307e\u3057\u305f\u3002",
              "{team}\u306e{unit}\u304c\u5f37\u5316\u3055\u308c\u307e\u3057\u305f\u3002",
              "\u69cd\u5175\u306e\u6226\u8853\u306b\u3088\u308a{unit}\u304c\u53cd\u6483\u3092\u53d7\u3051\u307e\u3057\u305f\u3002",
              "{team}\u306e{unit}\u304c {location} \u306b\u5c55\u958b\u3055\u308c\u307e\u3057\u305f\u3002",
              "{team}\u306e{unit}\u304c {location} \u3092\u5360\u9818\u3057\u307e\u3057\u305f\u3002",
              "{team}\u306e{unit}\u304c {from} \u304b\u3089 {to} \u3078\u79fb\u52d5\u3057\u307e\u3057\u305f\u3002",
              "{team}\u304c{unit}\u3092\u96c7\u7528\u3057\u307e\u3057\u305f\u3002",
              "\u518d\u6226\u3057\u307e\u3059\u304b\uff1f",
              "\u6226\u7bb1\u9053\u5834",
              "\u6700\u521d\u306b\u64cd\u4f5c\u3059\u308b\u5f93\u5175\u3092\u9078\u629e",
              "\u3042\u306a\u305f\u306e\u624b\u756a\u3067\u3059"
            );
          case B.j:
            return A.fG();
          case B.o:
            return A.ah(
              "AI\u6b63\u5728\u601d\u8003",
              "\u52a0\u5f3a",
              "\u5893\u5730",
              "\u5173\u95ed",
              "\u7ea2\u519b",
              "\u724c\u7ec4",
              "\u90e8\u7f72\u65b0\u7684\u6b65\u5175\u3002",
              "\u5f03\u724c",
              "\u4e3b\u5bfc",
              "\u6e38\u620f\u5f00\u59cb\u3002",
              "\u624b\u724c",
              "\u7b56\u7565",
              "\u79fb\u52a8\u6211\u7684\u6b65\u5175\u3002",
              "\u653e\u5f03",
              "\u84dd\u519b",
              "{team}\u91c7\u53d6\u4e86\u4e3b\u52a8\u3002",
              "{team}\u5df2\u7ecf\u8d62\u4e86\u3002",
              "{team}\u5df2\u7ecf\u653e\u5f03\u3002",
              "\u8bf7\u5148\u4ece\u624b\u4e2d\u9009\u62e9\u4e00\u4e2a\u786c\u5e01\u8fdb\u884c\u64cd\u4f5c\u3002",
              "\u91cd\u65b0\u6bd4\u8d5b",
              "\u9009\u62e9\u4f60\u7684\u884c\u52a8",
              "\u663e\u793a\u6559\u7a0b",
              "\u8865\u7ed9",
              "\u6350\u8d60",
              "\u91c7\u53d6\u4e3b\u52a8",
              "\u8c22\u8c22",
              "\u6ca1\u6709\u53ef\u62db\u52df\u7684\u5355\u4f4d\u3002",
              "\u9996\u5148\u4ece\u624b\u724c\u4e2d\u9009\u62e9\u4e00\u679a\u786c\u5e01\uff0c\u7136\u540e\u91c7\u53d6\u884c\u52a8\u3002",
              "\u5982\u679c\u6ca1\u6709\u4e8b\u60c5\u8981\u505a\uff0c\u60a8\u53ef\u4ee5\u653e\u5f03\u3002\n\u5373\u4f7f\u653e\u5f03\uff0c\u60a8\u4e5f\u5fc5\u987b\u4e22\u5f03\u786c\u5e01\u3002",
              "\u60a8\u4e5f\u53ef\u4ee5\u4e22\u5f03\u786c\u5e01\u4ee5\u62a2\u5360\u4e3b\u52a8\u6743\u3002\n\u4e3b\u52a8\u65b9\u53ef\u4ee5\u5728\u4e0b\u4e00\u8f6e\u4e2d\u9996\u5148\u91c7\u53d6\u884c\u52a8\u3002",
              "\u4e0e\u5bf9\u624b\u8f6e\u6d41\u884c\u52a8\uff0c\u5f53\u6240\u6709\u5361\u7247\u7528\u5b8c\u65f6\uff0c\u7ee7\u7eed\u4e0b\u4e00\u8f6e\u3002\n\u624b\u724c\u5c06\u4ece\u5361\u7ec4\u4e2d\u8865\u5145\u3002",
              "\u60a8\u53ef\u4ee5\u5728\u6b64\u5904\u67e5\u770b\u5bf9\u624b\u7684\u4fe1\u606f\n\u5728\u731c\u6d4b\u5bf9\u624b\u624b\u724c\u4e2d\u6709\u4ec0\u4e48\u7684\u540c\u65f6\u73a9\u3002",
              "\u9009\u62e9\u786c\u5e01\u540e\uff0c\u60a8\u53ef\u4ee5\u5c06\u5176\u653e\u7f6e\u5728\u68cb\u76d8\u4e0a\u5e76\u90e8\u7f72\u5355\u4f4d\u3002\n\u53ea\u80fd\u4ece\u6ca1\u6709\u5355\u4f4d\u7684\u81ea\u5bb6\u9886\u571f\u90e8\u7f72\u3002\n\u7136\u800c\uff0c\u7687\u5bb6\u786c\u5e01\u4e0d\u662f\u5355\u4f4d\uff0c\u6240\u4ee5\u4e0d\u80fd\u90e8\u7f72\u3002",
              "\u7687\u5bb6\u786c\u5e01:",
              "\u81ea\u5bb6\u9886\u571f\u662f\u84dd\u8272\uff0c\u4e2d\u7acb\u5730\u662f\u7070\u8272\uff0c\u654c\u65b9\u9886\u571f\u662f\u7ea2\u8272\u3002\n\u76ee\u7684\u662f\u5728\u64cd\u4f5c\u5355\u4f4d\u7684\u540c\u65f6\u589e\u52a0\u81ea\u5bb6\u9886\u571f\u3002",
              "\u5728\u81ea\u5bb6\u9886\u571f\u7684\u516d\u4e2a\u5730\u65b9\u5230\u8fbe\u7684\u4eba\u5c06\u83b7\u80dc\u3002",
              "\u8981\u5411\u68cb\u76d8\u4e0a\u7684\u5355\u4f4d\u53d1\u51fa\u6307\u793a\uff0c\u60a8\u5fc5\u987b\u9009\u62e9\u5177\u6709\u76f8\u540c\u7b26\u53f7\u7684\u786c\u5e01\u3002\n\u8fdb\u5165\u60a8\u624b\u4e2d\u7684\u786c\u5e01\u662f\u968f\u673a\u7684\u3002",
              "\u5c06\u786c\u5e01\u80cc\u9762\u4e22\u5f03\u4ee5\u96c7\u4f63\u65b0\u5355\u4f4d\u3002\n\u96c7\u4f63\u540e\uff0c\u4ece\u5361\u7ec4\u4e2d\u62bd\u53d6\u8be5\u5355\u4f4d\u786c\u5e01\u7684\u6982\u7387\u5c06\u589e\u52a0\u3002",
              "\u88ab\u96c7\u4f63\u7684\u5355\u4f4d\u548c\u88ab\u4e22\u5f03\u7684\u786c\u5e01\u5c06\u88ab\u653e\u7f6e\u5728\u5f03\u724c\u5806\u4e2d\u3002\n\u5982\u679c\u5361\u7ec4\u4e3a\u7a7a\uff0c\u5219\u5f03\u724c\u5806\u4e2d\u7684\u6240\u6709\u786c\u5e01\u5c06\u88ab\u79fb\u5230\u5361\u7ec4\u4e2d\u3002\n\u53e6\u5916\uff0c\u88ab\u653b\u51fb\u7684\u5355\u4f4d\u786c\u5e01\u5c06\u88ab\u9001\u5230\u5893\u5730\u3002\n\u5893\u5730\u4e2d\u7684\u786c\u5e01\u4e0d\u4f1a\u79fb\u52a8\u5230\u5361\u7ec4\u4e2d\u3002",
              "\u60a8\u53ef\u4ee5\u5728\u8fd9\u91cc\u68c0\u67e5\u5361\u7ec4\u7684\u5361\u6570\u3002\n\u6700\u521d\uff0c\u6240\u6709\u5355\u4f4d\u6709\u4e24\u679a\u786c\u5e01\uff0c\u8fd8\u6709\u4e00\u679a\u7687\u5bb6\u786c\u5e01\uff0c\u603b\u5171\u4e5d\u679a\u3002",
              "\u660e\u767d\u4e86",
              "{team}\u7684{unit}\u653b\u51fb\u4e86{target}\u3002",
              "{team}\u7684{unit}\u5f97\u5230\u4e86\u52a0\u5f3a\u3002",
              "{team}\u7684{unit}\u88ab\u957f\u67aa\u5175\u53cd\u51fb\u3002",
              "{team}\u7684{unit}\u88ab\u90e8\u7f72\u5230{location}\u3002",
              "{team}\u7684{unit}\u4e3b\u5bfc\u4e86{location}\u3002",
              "{team}\u7684{unit}\u4ece{from}\u79fb\u52a8\u5230{to}\u3002",
              "{team}\u62db\u52df\u4e86{unit}\u3002",
              "\u4f60\u60f3\u91cd\u65b0\u6bd4\u8d5b\u5417\uff1f",
              "\u6218\u4e89\u5b9d\u7bb1\u9053\u573a",
              "\u9009\u62e9\u9996\u5148\u79fb\u52a8\u7684\u6b65\u5175\u3002",
              "\u8be5\u4f60\u7684\u56de\u5408\u4e86"
            );
          case B.n:
            return A.ah(
              "AI\uac00 \uc0dd\uac01 \uc911",
              "\uac15\ud654",
              "\ubb18\uc9c0",
              "\ub2eb\uae30",
              "\ubd89\uc740 \uad70\ub300",
              "\ub371",
              "\uc0c8\ub85c\uc6b4 \ubcf4\ubcd1\uc744 \ubc30\uce58\ud558\uc138\uc694.",
              "\ubc84\ub9bc",
              "\uc9c0\ubc30",
              "\uac8c\uc784\uc774 \uc2dc\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
              "\uc190\ud328",
              "\uc804\ub7b5 \uc774\ub3d9",
              "\ub0b4 \ubcf4\ubcd1\uc744 \uc6c0\uc9c1\uc774\uc138\uc694.",
              "\ud328\uc2a4",
              "\ud30c\ub780 \uad70\ub300",
              "{team}\uc774 \uc8fc\ub3c4\uad8c\uc744 \uac00\uc838\uc654\uc2b5\ub2c8\ub2e4.",
              "{team}\uc774 \uc774\uacbc\uc2b5\ub2c8\ub2e4.",
              "{team}\uc774 \ud328\uc2a4\ud588\uc2b5\ub2c8\ub2e4.",
              "\ud589\ub3d9\uc744 \ucde8\ud558\uae30 \uc704\ud574 \uba3c\uc800 \uc190\uc5d0\uc11c \ucf54\uc778\uc744 \uc120\ud0dd\ud558\uc138\uc694.",
              "\uc7ac\ub300\uacb0",
              "\ub3d9\uc791\uc744 \uc120\ud0dd\ud558\uc138\uc694",
              "\ud29c\ud1a0\ub9ac\uc5bc \ubcf4\uae30",
              "\uacf5\uae09",
              "\uae30\ubd80",
              "\uc8fc\ub3c4\uad8c \uac00\uc838\uc624\uae30",
              "\uac10\uc0ac\ud569\ub2c8\ub2e4",
              "\ubaa8\uc9d1\ud560 \uc218 \uc788\ub294 \uc720\ub2db\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
              "\uba3c\uc800 \ud328\uc5d0\uc11c \ucf54\uc778 \ud558\ub098\ub97c \uc120\ud0dd\ud558\uace0 \ud589\ub3d9\ud569\ub2c8\ub2e4.",
              "\ud560 \uc77c\uc774 \uc5c6\ub2e4\uba74 \ud328\uc2a4 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ud328\uc2a4\uc758 \uacbd\uc6b0\uc5d0\ub3c4 \ub3d9\uc804\uc744 \ubc84\ub824\uc57c \ud569\ub2c8\ub2e4.",
              "\ub3d9\uc804\uc744 \ubc84\ub9ac\uace0 \uc120\uacf5\uad8c\uc744 \ube7c\uc557\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\n\uc120\uacf5\uc790\ub294 \ub2e4\uc74c \ub77c\uc6b4\ub4dc\uc5d0\uc11c \uba3c\uc800 \ud589\ub3d9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
              "\uc0c1\ub300\uc640 \ubc88\uac08\uc544 \uac00\uba70 \ud589\ub3d9\ud558\uace0 \ubaa8\ub4e0 \ud328\ub97c \uc0ac\uc6a9\ud558\uba74 \ub2e4\uc74c \ub77c\uc6b4\ub4dc\ub85c \uc9c4\ud589\ud569\ub2c8\ub2e4.\n\ud328\ub294 \ub371\uc5d0\uc11c \ubcf4\ucda9\ub429\ub2c8\ub2e4.",
              "\uc5ec\uae30\uc5d0\uc11c \uc0c1\ub300\uc758 \uc815\ubcf4\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4\n\uc0c1\ub300\uc758 \ud328\uc5d0 \ubb34\uc5c7\uc774 \uc788\ub294\uc9c0 \ucd94\uce21\ud558\uba74\uc11c \ud50c\ub808\uc774\ud558\uc138\uc694.",
              "\ucf54\uc778\uc744 \uc120\ud0dd\ud558\uba74 \ubcf4\ub4dc\uc5d0 \ucf54\uc778\uc744 \ubc30\uce58\ud558\uace0 \uc720\ub2db\uc744 \ubc30\uce58 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ubc30\uce58 \ud560 \uc218\uc788\ub294 \uac83\uc740 \uc720\ub2db\uc774\uc5c6\ub294 \uc790\uae30 \uc9c4\uc601\ubfd0\uc785\ub2c8\ub2e4.\n\uadf8\ub7ec\ub098 \ub85c\uc584 \ucf54\uc778\uc740 \uc720\ub2db\uc774 \uc544\ub2c8\ubbc0\ub85c \ubc30\uce58 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
              "\ub85c\uc584 \ucf54\uc778:",
              "\uc790\uae30 \uc9c4\uc601\uc740 \ud30c\ub780\uc0c9, \uc911\ub9bd \uc9c0\uc5ed\uc740 \ud68c\uc0c9, \uc801 \uc9c4\uc601\uc740 \ube68\uac04\uc0c9\uc73c\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4.\n\uc720\ub2db\uc744 \uc870\uc791\ud558\uba74\uc11c \uc790\uae30 \uc9c4\uc601\uc744 \ub298\ub9ac\ub294 \uac83\uc774 \ubaa9\ud45c\uc785\ub2c8\ub2e4.",
              "\uc790\uae30 \uc9c4\uc601\uc758 \uc218\uac00 6 \uacf3\uc5d0 \ub3c4\ub2ec\ud558\uba74 \uc2b9\ub9ac\ud569\ub2c8\ub2e4.",
              "\ubcf4\ub4dc \uc704\uc758 \uc720\ub2db\uc5d0 \uba85\ub839\uc744 \ub0b4\ub9ac\ub824\uba74 \ub3d9\uc77c\ud55c \uc2ec\ubcfc\uc758 \ucf54\uc778\uc744 \uc120\ud0dd\ud574\uc57c\ud569\ub2c8\ub2e4.\n\uc190\uc5d0 \ub4e4\uc5b4\uac00\ub294 \ucf54\uc778\uc740 \ubb34\uc791\uc704\uc785\ub2c8\ub2e4.",
              "\ub3d9\uc804\uc744 \ub4b7\uba74\uc73c\ub85c \ubc84\ub9ac\uace0 \uc0c8\ub85c\uc6b4 \uc720\ub2db\uc744 \uace0\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uace0\uc6a9\ud558\uba74 \ub371\uc5d0\uc11c \ud574\ub2f9 \uc720\ub2db\uc758 \ub3d9\uc804\uc744 \ubf51\uc744 \ud655\ub960\uc774 \uc99d\uac00\ud569\ub2c8\ub2e4.",
              "\uace0\uc6a9\ub41c \uc720\ub2db\uacfc \ubc84\ub824\uc9c4 \ub3d9\uc804\uc740 \ubc84\ub9ac\ub294 \uacf3\uc5d0 \ub193\uc785\ub2c8\ub2e4.\n\ub371\uc774 \ube44\uc5c8\ub2e4\uba74 \ubc84\ub9ac\ub294 \uacf3\uc758 \ub3d9\uc804\uc774 \ubaa8\ub450 \ub371\uc73c\ub85c \uc774\ub3d9\ub429\ub2c8\ub2e4.\n\ub610\ud55c \uacf5\uaca9\ubc1b\uc740 \uc720\ub2db\uc758 \ub3d9\uc804\uc740 \ubb34\ub364\uc73c\ub85c \ubcf4\ub0b4\uc9d1\ub2c8\ub2e4.\n\ubb34\ub364\uc5d0 \uc788\ub294 \ub3d9\uc804\uc740 \ub371\uc73c\ub85c \uc774\ub3d9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
              "\uc5ec\uae30\uc5d0\uc11c \ub371\uc758 \uc7a5 \uc218\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ucc98\uc74c\uc5d0\ub294 \ubaa8\ub4e0 \uc720\ub2db\uc758 \ub3d9\uc804\uc774 2\uc7a5\uc529\uacfc \ub85c\uc5f4 \ub3d9\uc804\uc774 1\uc7a5, \ucd1d 9\uc7a5\uc774 \ub4e4\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",
              "\uc774\ud574\ud588\uc2b5\ub2c8\ub2e4",
              "{team}\uc758 {unit}\uc774 {target}\uc744 \uacf5\uaca9\ud588\uc2b5\ub2c8\ub2e4.",
              "{team}\uc758 {unit}\uc774 \uac15\ud654\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
              "{team}\uc758 {unit}\uc774 \ucc3d\ubcd1\uc5d0\uac8c \ubc18\uaca9\uc744 \ubc1b\uc558\uc2b5\ub2c8\ub2e4.",
              "{team}\uc758 {unit}\uc774 {location}\uc5d0 \ubc30\uce58\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
              "{team}\uc758 {unit}\uc774 {location}\uc744 \uc9c0\ubc30\ud588\uc2b5\ub2c8\ub2e4.",
              "{team}\uc758 {unit}\uc774 {from}\uc5d0\uc11c {to}\ub85c \uc774\ub3d9\ud588\uc2b5\ub2c8\ub2e4.",
              "{team}\uc774 {unit}\uc744 \ubaa8\uc9d1\ud588\uc2b5\ub2c8\ub2e4.",
              "\uc7ac\ub300\uacb0 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
              "\uc804\uc7c1 \ubcf4\ubb3c \ub3c4\uc7a5",
              "\uba3c\uc800 \uc6c0\uc9c1\uc77c \ubcf4\ubcd1\uc744 \uc120\ud0dd\ud558\uc138\uc694.",
              "\ub2f9\uc2e0\uc758 \ucc28\ub840\uc785\ub2c8\ub2e4"
            );
          case B.l:
            return A.ah(
              "AI razmi\u0161lja",
              "Oja\u010daj",
              "Groblje",
              "Zatvori",
              "Crvena armija",
              "\u0161pil",
              "Rasporedi novog pje\u0161aka.",
              "Odbaci",
              "Dominiraj",
              "Igra je po\u010dela.",
              "Ruka",
              "Manevriranje",
              "Premjesti mojeg pje\u0161aka.",
              "Prepusti",
              "Plava armija",
              "{team} je preuzeo inicijativu.",
              "{team} je pobijedio.",
              "{team} je prepustio.",
              "Molimo prvo odaberite kovanicu iz ruke za izvo\u0111enje radnje.",
              "Ponovna igra",
              "Odaberite svoju radnju",
              "Prika\u017ei tutorial",
              "Nabava",
              "Doniraj",
              "Preuzmi inicijativu",
              "Hvala",
              "Nema dostupnih jedinica za regrutaciju.",
              "Prvo odaberite nov\u010di\u0107 iz ruke i poduzmite akciju.",
              "Mo\u017eete pro\u0107i ako nema \u0161to raditi.\n\u010cak i ako pro\u0111ete, morate odbaciti kovanicu.",
              "Tako\u0111er mo\u017eete odbaciti kovanicu kako biste preuzeli inicijativu.\nInicijator mo\u017ee djelovati prvi u sljede\u0107em krugu.",
              "Izmjenjujte se s protivnikom i nastavite u sljede\u0107i krug kada su sve karte iskori\u0161tene.\nRuka se nadopunjuje iz \u0161pila.",
              "Ovdje mo\u017eete provjeriti informacije o protivniku\nIgrajte poga\u0111aju\u0107i \u0161to je u ruci protivnika.",
              "Nakon \u0161to odaberete nov\u010di\u0107, mo\u017eete ga postaviti na plo\u010du i rasporediti jedinice.\nMo\u017eete rasporediti samo iz vlastitog teritorija gdje nema jedinica.\nMe\u0111utim, kraljevski nov\u010di\u0107i nisu jedinice, pa se ne mogu rasporediti.",
              "Kraljevski nov\u010di\u0107:",
              "Va\u0161 teritorij je plav, neutralan teritorij je siv, a neprijateljski teritorij je crven.\nCilj je pove\u0107ati vlastiti teritorij dok manipulirate jedinicama.",
              "Osoba koja dostigne \u0161est mjesta na svom teritoriju pobje\u0111uje.",
              "Da biste dali upute jedinici na plo\u010di, morate odabrati kovanicu sa istim simbolom.\nKovanice koje ulaze u va\u0161u ruku su nasumi\u010dne.",
              "Odbacite kovanicu licem prema dolje da biste unajmili novu jedinicu.\nZapo\u0161ljavanjem pove\u0107ava se vjerojatnost izvla\u010denja kovanice te jedinice iz \u0161pila.",
              "Zaposlene jedinice i odba\u010dene kovanice postavljaju se na odba\u010deno mjesto.\nAko je \u0161pil prazan, sve odba\u010dene kovanice prelaze u \u0161pil.\nTako\u0111er, napadnute kovanice jedinica \u0161alju se na groblje.\nKovanice na groblju ne prelaze u \u0161pil.",
              "Ovdje mo\u017eete provjeriti broj karata u \u0161pilu.\nNa po\u010detku su dvije kovanice za sve jedinice i jedna kraljevska kovanica, ukupno devet.",
              "Razumijem",
              "{unit} od {team} napao je {target}.",
              "{unit} od {team} je oja\u010dan.",
              "{unit} od {team} je kontranapadnut od strane pikeman-a.",
              "{unit} od {team} je raspore\u0111en na {location}.",
              "{unit} od {team} dominirao je na {location}.",
              "{unit} od {team} je premje\u0161ten iz {from} u {to}.",
              "{team} je regrutirao {unit}.",
              "\u017delite li ponovno igrati?",
              "Ratna prsa Dojo",
              "Odaberite kojeg pje\u0161aka premjestiti prvo.",
              "Va\u0161 je red"
            );
          case B.k:
            return A.ah(
              "L'IA r\xe9fl\xe9chit",
              "Renforcer",
              "Cimeti\xe8re",
              "Fermer",
              "Arm\xe9e rouge",
              "paquet",
              "D\xe9ployez un nouveau fantassin.",
              "D\xe9fausse",
              "Dominer",
              "La partie a commenc\xe9.",
              "Main",
              "Man\u0153uvre",
              "D\xe9placez mon fantassin existant.",
              "Passer",
              "Arm\xe9e bleue",
              "{team} a pris l'initiative.",
              "{team} a gagn\xe9.",
              "{team} a pass\xe9 son tour.",
              "Veuillez d'abord s\xe9lectionner une pi\xe8ce de votre main pour prendre une action.",
              "Revanche",
              "S\xe9lectionnez votre action",
              "Afficher le tutoriel",
              "Ravitaillement",
              "Faire un don",
              "Prendre l'initiative",
              "Merci",
              "Il n\u2019y a pas d\u2019unit\xe9 \xe0 recruter.",
              "Tout d'abord, s\xe9lectionnez une pi\xe8ce de votre main et agissez.",
              "Vous pouvez passer s'il n'y a rien \xe0 faire.\nM\xeame si vous passez, vous devez jeter une pi\xe8ce.",
              "Vous pouvez \xe9galement jeter une pi\xe8ce pour saisir l'initiative.\nL'initiateur peut agir en premier au tour suivant.",
              "Jouez \xe0 tour de r\xf4le avec votre adversaire et passez au tour suivant lorsque toutes les cartes sont utilis\xe9es.\nLa main est r\xe9approvisionn\xe9e \xe0 partir du paquet.",
              "Vous pouvez v\xe9rifier les informations de votre adversaire ici\nJouez en devinant ce qui se trouve dans la main de votre adversaire.",
              "Une fois que vous avez s\xe9lectionn\xe9 une pi\xe8ce, vous pouvez la placer sur le plateau et d\xe9ployer des unit\xe9s.\nVous ne pouvez d\xe9ployer que depuis votre territoire o\xf9 il n'y a pas d'unit\xe9s.\nCependant, les pi\xe8ces royales ne sont pas des unit\xe9s et ne peuvent donc pas \xeatre d\xe9ploy\xe9es.",
              "Pi\xe8ce Royale:",
              "Votre territoire est en bleu, le territoire neutre est en gris, et le territoire ennemi est en rouge.\nL'objectif est d'augmenter votre territoire tout en manipulant les unit\xe9s.",
              "La personne qui atteint six endroits sur son territoire gagne.",
              "Pour donner des instructions \xe0 une unit\xe9 sur le plateau, vous devez s\xe9lectionner une pi\xe8ce avec le m\xeame symbole.\nLes pi\xe8ces qui vont dans votre main sont al\xe9atoires.",
              "Jetez une pi\xe8ce face cach\xe9e pour embaucher une nouvelle unit\xe9.\nEn embauchant, la probabilit\xe9 de tirer la pi\xe8ce de cette unit\xe9 du paquet augmente.",
              "Les unit\xe9s embauch\xe9es et les pi\xe8ces jet\xe9es sont plac\xe9es dans la d\xe9fausse.\nSi le paquet est vide, toutes les pi\xe8ces d\xe9fauss\xe9es sont d\xe9plac\xe9es dans le paquet.\nDe plus, les pi\xe8ces des unit\xe9s attaqu\xe9es sont envoy\xe9es au cimeti\xe8re.\nLes pi\xe8ces du cimeti\xe8re ne se d\xe9placent pas dans le paquet.",
              "Vous pouvez v\xe9rifier le nombre de cartes dans le paquet ici.\nAu d\xe9but, il y a deux pi\xe8ces pour toutes les unit\xe9s et une pi\xe8ce royale, soit un total de neuf.",
              "Compris",
              "{unit} de {team} a attaqu\xe9 {target}.",
              "{unit} de {team} a \xe9t\xe9 renforc\xe9.",
              "{unit} de {team} a \xe9t\xe9 contre-attaqu\xe9 par un piquier.",
              "{unit} de {team} a \xe9t\xe9 d\xe9ploy\xe9 \xe0 {location}.",
              "{unit} de {team} a domin\xe9 {location}.",
              "{unit} de {team} a \xe9t\xe9 d\xe9plac\xe9 de {from} \xe0 {to}.",
              "{team} a recrut\xe9 {unit}.",
              "Voulez-vous une revanche ?",
              "Dojo du coffre de guerre",
              "S\xe9lectionnez le fantassin \xe0 d\xe9placer en premier.",
              "C'est votre tour"
            );
          case B.m:
            return A.ah(
              "L'IA sta pensando",
              "Rafforza",
              "Cimitero",
              "Chiudi",
              "Esercito rosso",
              "mazzo",
              "Schiera un nuovo pedone.",
              "Scarta",
              "Domina",
              "La partita \xe8 iniziata.",
              "Mano",
              "Manovra",
              "Muovi il mio pedone esistente.",
              "Passa",
              "Esercito blu",
              "{team} ha preso l'iniziativa.",
              "{team} ha vinto.",
              "{team} ha passato il turno.",
              "Per favore, seleziona prima una moneta dalla tua mano per eseguire un'azione.",
              "Rivincita",
              "Seleziona la tua azione",
              "Mostra tutorial",
              "Rifornimento",
              "Dona",
              "Prendi l'iniziativa",
              "Grazie",
              "Non ci sono unit\xe0 disponibili per il reclutamento.",
              "Prima di tutto, seleziona una moneta dalla tua mano e agisci.",
              "Puoi passare se non c'\xe8 niente da fare.\nAnche se passi, devi scartare una moneta.",
              "Puoi anche scartare una moneta per prendere l'iniziativa.\nL'iniziatore pu\xf2 agire per primo nel turno successivo.",
              "Gioca a turno con il tuo avversario e procedi al turno successivo quando tutte le carte sono usate.\nLa mano viene rifornita dal mazzo.",
              "Puoi controllare le informazioni sul tuo avversario qui\nGioca indovinando cosa c'\xe8 nella mano del tuo avversario.",
              "Una volta selezionata una moneta, puoi posizionarla sulla plancia e schierare le unit\xe0.\nPuoi schierare solo dal tuo territorio dove non ci sono unit\xe0.\nTuttavia, le monete reali non sono unit\xe0, quindi non possono essere schierate.",
              "Moneta Reale:",
              "Il tuo territorio \xe8 blu, il territorio neutro \xe8 grigio, e il territorio nemico \xe8 rosso.\nL'obiettivo \xe8 aumentare il tuo territorio mentre manipoli le unit\xe0.",
              "La persona che raggiunge sei posti nel suo territorio vince.",
              "Per dare istruzioni a un'unit\xe0 sulla scacchiera, devi selezionare una moneta con lo stesso simbolo.\nLe monete che vanno nella tua mano sono casuali.",
              "Scarta una moneta a faccia in gi\xf9 per assumere una nuova unit\xe0.\nAssumendo, la probabilit\xe0 di estrarre la moneta di quell'unit\xe0 dal mazzo aumenta.",
              "Le unit\xe0 assunte e le monete scartate sono messe nella pila di scarto.\nSe il mazzo \xe8 vuoto, tutte le monete scartate vengono spostate nel mazzo.\nInoltre, le monete delle unit\xe0 attaccate sono inviate al cimitero.\nLe monete nel cimitero non si spostano nel mazzo.",
              "Puoi controllare il numero di carte nel mazzo qui.\nInizialmente, ci sono due monete per tutte le unit\xe0 e una moneta reale, per un totale di nove.",
              "Capito",
              "{unit} di {team} ha attaccato {target}.",
              "{unit} di {team} \xe8 stato rafforzato.",
              "{unit} di {team} \xe8 stato contrattaccato da un picchiero.",
              "{unit} di {team} \xe8 stato schierato a {location}.",
              "{unit} di {team} ha dominato {location}.",
              "{unit} di {team} \xe8 stato spostato da {from} a {to}.",
              "{team} ha reclutato {unit}.",
              "Vuoi la rivincita?",
              "Dojo del Tesoro di Guerra",
              "Seleziona quale pedone muovere per primo.",
              "\xc8 il tuo turno"
            );
          default:
            return A.fG();
        }
      },
      fG() {
        return A.ah(
          "AI is thinking",
          "Bolster",
          "Cemetery",
          "Close",
          "Red army",
          "deck",
          "Deploy a new footman.",
          "Discard",
          "Dominate",
          "Game started.",
          "Hand",
          "Maneuver",
          "Move my existing footman.",
          "Pass",
          "Blue army",
          "{team} has taken the initiative.",
          "{team} has won.",
          "{team} has passed.",
          "Please select a coin from your hand to take an action.",
          "Rematch",
          "Select your action",
          "Show tutorial",
          "Supply",
          "Donate",
          "Take Initiative",
          "Thank you",
          "There are no units available to recruit.",
          "First, select a coin from your hand and take action.",
          "You can pass if there is nothing to do.\nEven if you pass, you must discard a coin.",
          "You can also discard a coin to seize the initiative.\nThe initiator can act first in the next round.",
          "Take turns with your opponent, and proceed to the next round when all the cards are used.\nThe hand is replenished from the deck.",
          "You can check your opponent's information here\nPlay while guessing what is in your opponent's hand.",
          "Once you select a coin, you can place it on the board and deploy units.\nYou can only deploy from your territory where no units are present.\nHowever, Royal Coins are not units, so they cannot be deployed.",
          "Royal Coin:",
          "Your territory is blue, neutral territory is gray, and enemy territory is red.\nThe goal is to increase your territory while manipulating the units.",
          "The person who reaches six places in their territory wins.",
          "To give instructions to a unit on the board, you must select a coin with the same symbol.\nThe coins that go into your hand are random.",
          "Discard a coin face down to hire a new unit.\nBy hiring, the probability of drawing that unit's coin from the deck increases.",
          "Hired units and discarded coins are placed in the discard pile.\nIf the deck is empty, all the discarded coins are moved to the deck.\nAlso, attacked unit coins are sent to the graveyard.\nCoins in the graveyard do not move to the deck.",
          "You can check the number of cards in the deck here.\nInitially, there are two coins for all units and one royal coin, totaling nine.",
          "Understood",
          "{unit} of {team} attacked {target}.",
          "{unit} of {team} was bolstered.",
          "{unit} of {team} was counterattacked by a pikeman.",
          "{unit} of {team} was deployed to {location}.",
          "{unit} of {team} dominated {location}.",
          "{unit} of {team} was moved from {from} to {to}.",
          "{team} recruited {unit}.",
          "Do you want to rematch?",
          "War Chest Dojo",
          "Select the footman to move first.",
          "It's your turn"
        );
      },
      dX: function dX(a, b, c, d, e, f, g, h, i, j, k) {
        var _ = this;
        _.r = a;
        _.w = b;
        _.db = c;
        _.dx = d;
        _.id = e;
        _.k1 = f;
        _.k2 = g;
        _.k3 = h;
        _.ok = i;
        _.p1 = j;
        _.p2 = k;
      },
      iv(a) {
        switch (a) {
          case B.h:
            return A.it();
          case B.j:
            return A.fO();
          case B.o:
            return A.iw();
          case B.n:
            return A.iu();
          case B.l:
            return A.ir();
          case B.k:
            return A.iq();
          case B.m:
            return A.is();
          default:
            return A.fO();
        }
      },
      it() {
        var s = t.N;
        return new A.Y(
          new A.eG(
            A.F(
              [
                "sword",
                "\u5263\u5175",
                "crossbow",
                "\u5f29\u5175",
                "knight",
                "\u91cd\u88c5\u5175",
                "archer",
                "\u5f13\u5175",
                "cavalry",
                "\u9a0e\u5175",
                "light_cavalry",
                "\u8efd\u9a0e\u5175",
                "lancer",
                "\u7a81\u6483\u9a0e\u5175",
                "pike",
                "\u69cd\u5175",
                "mercenary",
                "\u50ad\u5175",
                "ensign",
                "\u65d7\u5175",
                "marshall",
                "\u7dcf\u5e25",
                "berserker",
                "\u72c2\u6226\u58eb",
                "warrior_priest",
                "\u50e7\u5175",
                "footman",
                "\u5f93\u5175",
                "scout",
                "\u5075\u5bdf\u5175",
                "royal_guard",
                "\u885b\u5175",
                "blue_royal",
                "\u52c5\u4ee4",
                "red_royal",
                "\u52c5\u4ee4",
              ],
              s,
              s
            )
          )
        );
      },
      fO() {
        var s = t.N;
        return new A.Y(
          new A.eC(
            A.F(
              [
                "sword",
                "Swordman",
                "crossbow",
                "Crossbowman",
                "knight",
                "Knight",
                "archer",
                "Archer",
                "cavalry",
                "Cavalry",
                "light_cavalry",
                "Light Cavalry",
                "lancer",
                "Lancer",
                "pike",
                "Pikeman",
                "mercenary",
                "Mercenary",
                "ensign",
                "Ensign",
                "marshall",
                "Marshall",
                "berserker",
                "Berserker",
                "warrior_priest",
                "Warrior Priest",
                "footman",
                "Footman",
                "scout",
                "Scout",
                "royal_guard",
                "Royal Guard",
                "blue_royal",
                "Royal Coin",
                "red_royal",
                "Royal Coin",
              ],
              s,
              s
            )
          )
        );
      },
      iw() {
        var s = t.N;
        return new A.Y(
          new A.eI(
            A.F(
              [
                "sword",
                "\u5251\u58eb",
                "crossbow",
                "\u5f29\u624b",
                "knight",
                "\u9a91\u58eb",
                "archer",
                "\u5f13\u7bad\u624b",
                "cavalry",
                "\u9a91\u5175",
                "light_cavalry",
                "\u8f7b\u9a91\u5175",
                "lancer",
                "\u957f\u77db\u624b",
                "pike",
                "\u67aa\u5175",
                "mercenary",
                "\u96c7\u4f63\u5175",
                "ensign",
                "\u65d7\u624b",
                "marshall",
                "\u5143\u5e05",
                "berserker",
                "\u72c2\u6218\u58eb",
                "warrior_priest",
                "\u6218\u58eb\u796d\u53f8",
                "footman",
                "\u6b65\u5175",
                "scout",
                "\u4fa6\u67e5\u5175",
                "royal_guard",
                "\u7687\u5bb6\u536b\u58eb",
                "blue_royal",
                "\u7687\u5bb6\u786c\u5e01",
                "red_royal",
                "\u7687\u5bb6\u786c\u5e01",
              ],
              s,
              s
            )
          )
        );
      },
      iu() {
        var s = t.N;
        return new A.Y(
          new A.eH(
            A.F(
              [
                "sword",
                "\uac80\uc0ac",
                "crossbow",
                "\uc11d\uad81\uc218",
                "knight",
                "\uae30\uc0ac",
                "archer",
                "\uad81\uc218",
                "cavalry",
                "\uae30\ubcd1",
                "light_cavalry",
                "\uacbd\uae30\ubcd1",
                "lancer",
                "\ucc3d\uae30\ubcd1",
                "pike",
                "\uc7a5\ucc3d\ubcd1",
                "mercenary",
                "\uc6a9\ubcd1",
                "ensign",
                "\uae30\uc7a5",
                "marshall",
                "\uc7a5\uad70",
                "berserker",
                "\uad11\uc804\uc0ac",
                "warrior_priest",
                "\uc804\uc0ac \uc0ac\uc81c",
                "footman",
                "\ubcf4\ubcd1",
                "scout",
                "\uc815\ucc30\ubcd1",
                "royal_guard",
                "\uc655\uc2e4 \uc218\ud638\ubcd1",
                "blue_royal",
                "\uc655\uc2e4 \ub3d9\uc804",
                "red_royal",
                "\uc655\uc2e4 \ub3d9\uc804",
              ],
              s,
              s
            )
          )
        );
      },
      ir() {
        var s = "Kraljevski nov\u010di\u0107",
          r = t.N;
        return new A.Y(
          new A.eE(
            A.F(
              [
                "sword",
                "Ma\u010devalac",
                "crossbow",
                "Strijelac s arbalestom",
                "knight",
                "Vitez",
                "archer",
                "Strijelac",
                "cavalry",
                "Konjani\u0161tvo",
                "light_cavalry",
                "Lako konjani\u0161tvo",
                "lancer",
                "Kopljanik",
                "pike",
                "Pikeman",
                "mercenary",
                "Pla\u0107enik",
                "ensign",
                "Zastavnik",
                "marshall",
                "Mar\u0161al",
                "berserker",
                "Berserker",
                "warrior_priest",
                "Ratnik sve\u0107enik",
                "footman",
                "Pje\u0161ak",
                "scout",
                "Izvi\u0111a\u010d",
                "royal_guard",
                "Kraljevska garda",
                "blue_royal",
                s,
                "red_royal",
                s,
              ],
              r,
              r
            )
          )
        );
      },
      iq() {
        var s = t.N;
        return new A.Y(
          new A.eD(
            A.F(
              [
                "sword",
                "\xc9p\xe9iste",
                "crossbow",
                "Arbal\xe9trier",
                "knight",
                "Chevalier",
                "archer",
                "Archer",
                "cavalry",
                "Cavalerie",
                "light_cavalry",
                "Cavalerie l\xe9g\xe8re",
                "lancer",
                "Lancier",
                "pike",
                "Piquier",
                "mercenary",
                "Mercenaire",
                "ensign",
                "Enseigne",
                "marshall",
                "Mar\xe9chal",
                "berserker",
                "Berserker",
                "warrior_priest",
                "Pr\xeatre guerrier",
                "footman",
                "Fantassin",
                "scout",
                "\xc9claireur",
                "royal_guard",
                "Garde royale",
                "blue_royal",
                "Pi\xe8ce royale",
                "red_royal",
                "Pi\xe8ce royale",
              ],
              s,
              s
            )
          )
        );
      },
      is() {
        var s = t.N;
        return new A.Y(
          new A.eF(
            A.F(
              [
                "sword",
                "Spadaccino",
                "crossbow",
                "Balestriere",
                "knight",
                "Cavaliere",
                "archer",
                "Arciere",
                "cavalry",
                "Cavalleria",
                "light_cavalry",
                "Cavalleria leggera",
                "lancer",
                "Lanciere",
                "pike",
                "Picchiero",
                "mercenary",
                "Mercenario",
                "ensign",
                "Insegna",
                "marshall",
                "Maresciallo",
                "berserker",
                "Berserker",
                "warrior_priest",
                "Prete guerriero",
                "footman",
                "Fante",
                "scout",
                "Scout",
                "royal_guard",
                "Guardia reale",
                "blue_royal",
                "Moneta reale",
                "red_royal",
                "Moneta reale",
              ],
              s,
              s
            )
          )
        );
      },
      Y: function Y(a) {
        this.a = a;
      },
      eG: function eG(a) {
        this.a = a;
      },
      eC: function eC(a) {
        this.a = a;
      },
      eI: function eI(a) {
        this.a = a;
      },
      eH: function eH(a) {
        this.a = a;
      },
      eE: function eE(a) {
        this.a = a;
      },
      eD: function eD(a) {
        this.a = a;
      },
      eF: function eF(a) {
        this.a = a;
      },
      f1(a) {
        var s = a.j(0, "team"),
          r = a.j(0, "action_type"),
          q = t.j.a(a.j(0, "units_to_action")),
          p = A.c(q).h("k<1,m>");
        return new A.l(
          s,
          r,
          A.e(new A.k(q, new A.bj(), p), !0, p.h("p.E")),
          a.j(0, "target_location"),
          A.fb(a.j(0, "unit_to_use"))
        );
      },
      l: function l(a, b, c, d, e) {
        var _ = this;
        _.a = a;
        _.b = b;
        _.c = c;
        _.d = d;
        _.e = e;
      },
      bk: function bk() {},
      bj: function bj() {},
      o: function o(a, b) {
        this.a = a;
        this.b = b;
      },
      f2(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
        return new A.a9(g, j, e, c, k, l, b, m, i, h, n, f, a, d, o, p);
      },
      dD(a) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m,
          l = A.K(J.E(a.j(0, "snapshot_id"))),
          k = J.E(a.j(0, "turn")),
          j = J.E(a.j(0, "initiative")),
          i = a.j(0, "has_changed_initiative"),
          h = t.j,
          g = h.a(a.j(0, "unit_classes_of_blue")),
          f = A.c(g).h("k<1,d>");
        f = A.e(new A.k(g, new A.dE(), f), !0, f.h("p.E"));
        g = h.a(a.j(0, "unit_classes_of_red"));
        s = A.c(g).h("k<1,d>");
        s = A.e(new A.k(g, new A.dF(), s), !0, s.h("p.E"));
        g = h.a(a.j(0, "control_points_state"));
        r = A.c(g).h("k<1,o>");
        r = A.e(new A.k(g, new A.dG(), r), !0, r.h("p.E"));
        g = h.a(a.j(0, "units_state"));
        q = A.c(g).h("k<1,m>");
        q = A.e(new A.k(g, new A.dH(), q), !0, q.h("p.E"));
        g = A.K(J.E(a.j(0, "timestamp")));
        p = J.E(a.j(0, "text_log"));
        o = h.a(a.j(0, "waiting_footman_locations"));
        n = A.c(o).h("k<1,d>");
        n = A.e(new A.k(o, new A.dI(), n), !0, n.h("p.E"));
        o = A.f1(a.j(0, "last_action"));
        h = h.a(a.j(0, "allowed_actions"));
        m = A.c(h).h("k<1,d>");
        return A.f2(
          A.e(new A.k(h, new A.dJ(), m), !0, m.h("p.E")),
          r,
          i,
          a.j(0, "has_game_finished"),
          j,
          o,
          l,
          p,
          g,
          k,
          f,
          s,
          q,
          n,
          J.E(a.j(0, "winner")),
          J.E(a.j(0, "winning_type"))
        );
      },
      a9: function a9(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
        var _ = this;
        _.a = a;
        _.b = b;
        _.c = c;
        _.d = d;
        _.e = e;
        _.f = f;
        _.r = g;
        _.w = h;
        _.x = i;
        _.y = j;
        _.z = k;
        _.Q = l;
        _.as = m;
        _.at = n;
        _.ax = o;
        _.ay = p;
      },
      dK: function dK() {},
      dL: function dL() {},
      dM: function dM() {},
      dN: function dN() {},
      dE: function dE() {},
      dF: function dF() {},
      dG: function dG() {},
      dH: function dH() {},
      dI: function dI() {},
      dJ: function dJ() {},
      fb(a) {
        return new A.m(
          a.j(0, "unit_id"),
          a.j(0, "unit_class"),
          a.j(0, "team"),
          a.j(0, "location"),
          a.j(0, "layer"),
          a.j(0, "should_hide")
        );
      },
      m: function m(a, b, c, d, e, f) {
        var _ = this;
        _.a = a;
        _.b = b;
        _.c = c;
        _.d = d;
        _.e = e;
        _.f = f;
      },
      T: function T(a, b) {
        this.c = a;
        this.b = b;
      },
      ab(a, b) {
        return A.iv(a).a.$1(b);
      },
      ix(a, b) {
        return new A.eJ(a).$0() + "\u2013" + A.q(new A.eK(a, b).$0());
      },
      b7(a) {
        var s = a.split("\u2013");
        return A.ix(A.K(s[0]), A.K(s[1]));
      },
      eJ: function eJ(a) {
        this.a = a;
      },
      eK: function eK(a, b) {
        this.a = a;
        this.b = b;
      },
      jH(a) {
        if (typeof dartPrint == "function") {
          dartPrint(a);
          return;
        }
        if (typeof console == "object" && typeof console.log != "undefined") {
          console.log(a);
          return;
        }
        if (typeof print == "function") {
          print(a);
          return;
        }
        throw "Unable to print message: " + String(a);
      },
      jK(a) {
        A.jJ(
          new A.aZ(
            "Field '" + a + "' has been assigned during initialization."
          ),
          new Error()
        );
      },
      ic(d4) {
        var s,
          r,
          q,
          p,
          o,
          n,
          m,
          l,
          k,
          j,
          i,
          h,
          g,
          f,
          e,
          d,
          c,
          b,
          a,
          a0,
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
          a7,
          a8,
          a9,
          b0,
          b1,
          b2,
          b3,
          b4,
          b5,
          b6,
          b7,
          b8,
          b9,
          c0,
          c1,
          c2 = null,
          c3 = "blue",
          c4 = "units_state",
          c5 = "control_points_state",
          c6 = "last_action",
          c7 = "board",
          c8 = "unit_class",
          c9 = "unit_to_use",
          d0 = t.N,
          d1 = t.z,
          d2 = A.O(d0, d1),
          d3 = d4.j(0, "initiative");
        if (d3 == null) d3 = "";
        d2.t(0, "initiative_is_blue", d3 === "blue" ? 1 : 0);
        d2.t(0, "initiative_is_red", d3 === "red" ? 1 : 0);
        p = d4.j(0, "turn");
        if (p == null) p = "";
        d2.t(0, "turn_is_blue", p === "blue" ? 1 : 0);
        d2.t(0, "turn_is_red", p === "red" ? 1 : 0);
        s = [];
        try {
          if (typeof d4.j(0, c4) == "string") s = B.i.ab(d4.j(0, c4), c2);
          else if (t.j.b(d4.j(0, c4))) s = d4.j(0, c4);
        } catch (o) {
          s = [];
        }
        r = [];
        try {
          if (typeof d4.j(0, c5) == "string") r = B.i.ab(d4.j(0, c5), c2);
          else if (t.j.b(d4.j(0, c5))) r = d4.j(0, c5);
        } catch (o) {
          r = [];
        }
        q = A.O(d0, d1);
        try {
          if (typeof d4.j(0, c6) == "string") q = B.i.ab(d4.j(0, c6), c2);
          else if (t.G.b(d4.j(0, c6))) q = A.i8(d4.j(0, c6), d0, d1);
        } catch (o) {
          q = A.O(d0, d1);
        }
        n = t.S;
        m = t.c;
        l = A.F(["blue", A.O(d0, n), "red", A.O(d0, n)], d0, m);
        k = A.F(["blue", A.O(d0, n), "red", A.O(d0, n)], d0, m);
        j = A.F(["blue", A.O(d0, n), "red", A.O(d0, n)], d0, m);
        i = A.O(d0, n);
        h = A.O(d0, n);
        for (g = 0; g < 37; ++g) {
          f = B.e[g];
          i.t(0, f, 0);
          h.t(0, f, 0);
        }
        e = ["board", "supply", "bag", "hand", "discard", "cemetery"];
        for (d0 = ["blue", "red"], g = 0; g < 2; ++g) {
          d = d0[g];
          for (c = 0; c < 6; ++c) {
            b = e[c];
            l.j(0, d).t(0, b, 0);
            k.j(0, d).t(0, b, 0);
          }
          for (c = 0; c < 18; ++c) {
            a = B.p[c];
            j.j(0, d).t(0, a, 0);
          }
        }
        for (
          d0 = s, n = d0.length, m = t.G, g = 0;
          g < d0.length;
          d0.length === n || (0, A.w)(d0), ++g
        ) {
          a0 = d0[g];
          if (m.b(a0)) {
            d = a0.j(0, "team");
            if (d == null) d = "";
            a1 = a0.j(0, "layer");
            if (a1 == null) a1 = "";
            a2 = a0.j(0, c8);
            if (a2 == null) a2 = "";
            a3 = J.a5(a0.j(0, "should_hide"), !0);
            a4 = a0.j(0, "location");
            if (a4 == null) a4 = "";
            if (l.a9(d)) {
              a5 = l.j(0, d);
              a6 = a5 == null ? c2 : a5.j(0, a1);
              if (a6 == null) a6 = 0;
              a5 = l.j(0, d);
              if (a5 != null) a5.t(0, a1, a6 + 1);
              if (a3) {
                a5 = k.j(0, d);
                a7 = a5 == null ? c2 : a5.j(0, a1);
                if (a7 == null) a7 = 0;
                a5 = k.j(0, d);
                if (a5 != null) a5.t(0, a1, a7 + 1);
              }
              a5 = j.j(0, d);
              a8 = a5 == null ? c2 : a5.j(0, a2);
              if (a8 == null) a8 = 0;
              a5 = j.j(0, d);
              if (a5 != null) a5.t(0, a2, a8 + 1);
            }
            if (J.a5(a1, c7))
              if (B.a.k(B.e, a4)) {
                a5 = J.P(d);
                if (a5.F(d, c3)) {
                  a5 = i.j(0, a4);
                  a5.toString;
                  i.t(0, a4, a5 + 1);
                } else if (a5.F(d, "red")) {
                  a5 = h.j(0, a4);
                  a5.toString;
                  h.t(0, a4, a5 + 1);
                }
              }
          }
        }
        for (d0 = ["blue", "red"], n = t.s, g = 0; g < 2; ++g) {
          f = d0[g];
          for (
            a5 = f + "_hidden_in_", a9 = f + "_units_in_", c = 0;
            c < 6;
            ++c
          ) {
            b = e[c];
            if (B.a.k(A.b(["discard"], n), b)) {
              b0 = l.j(0, f);
              b0 = b0 == null ? c2 : b0.j(0, b);
              if (b0 == null) b0 = 0;
              d2.t(0, a9 + b, b0);
              b0 = k.j(0, f);
              b0 = b0 == null ? c2 : b0.j(0, b);
              if (b0 == null) b0 = 0;
              d2.t(0, a5 + b, b0);
            }
          }
        }
        for (d0 = ["blue", "red"], g = 0; g < 2; ++g) {
          f = d0[g];
          for (n = f + "_class_count_", c = 0; c < 16; ++c) {
            a = B.J[c];
            a5 = j.j(0, f);
            a5 = a5 == null ? c2 : a5.j(0, a);
            a5 = (a5 == null ? 0 : a5) > 0 ? 1 : 0;
            d2.t(0, n + a, a5);
          }
        }
        for (g = 0; g < 37; ++g) {
          b1 = B.e[g];
          d0 = i.j(0, b1);
          if (d0 == null) d0 = 0;
          d2.t(0, "blue_units_at_" + b1, d0);
          d0 = h.j(0, b1);
          if (d0 == null) d0 = 0;
          d2.t(0, "red_units_at_" + b1, d0);
        }
        for (
          d0 = r, n = d0.length, b2 = 0, b3 = 0, b4 = 0, g = 0;
          g < d0.length;
          d0.length === n || (0, A.w)(d0), ++g
        ) {
          b5 = d0[g];
          if (m.b(b5)) {
            b6 = b5.j(0, "dominated_by");
            if (b6 == null) b6 = "neutral";
            a5 = J.P(b6);
            if (a5.F(b6, c3)) ++b2;
            if (a5.F(b6, "red")) ++b3;
            if (a5.F(b6, "neutral")) ++b4;
          }
        }
        d2.t(0, "control_points_blue", b2);
        d2.t(0, "control_points_red", b3);
        d2.t(0, "control_points_neutral", b4);
        d2.t(0, "control_points_diff_blue_minus_red", b2 - b3);
        d0 = l.j(0, c3);
        b7 = d0 == null ? c2 : d0.j(0, c7);
        if (b7 == null) b7 = 0;
        d0 = l.j(0, "red");
        b8 = d0 == null ? c2 : d0.j(0, c7);
        d2.t(0, "board_unit_diff_blue_minus_red", b7 - (b8 == null ? 0 : b8));
        b9 = J.Q(q, "action_type");
        if (b9 == null) b9 = "none";
        for (d0 = J.P(b9), g = 0; g < 11; ++g) {
          c0 = B.K[g];
          n = d0.F(b9, c0) ? 1 : 0;
          d2.t(0, "last_action_is_" + c0, n);
        }
        c1 = (m.b(J.Q(q, c9)) ? m.a(J.Q(q, c9)) : A.O(d1, d1)).j(0, c8);
        if (c1 == null) c1 = "none";
        for (d0 = ["blue", "red"], d1 = J.P(c1), g = 0; g < 2; ++g)
          for (n = d0[g] + "_last_action_unit_class_", c = 0; c < 18; ++c) {
            a = B.p[c];
            m = d1.F(c1, a) ? 1 : 0;
            d2.t(0, n + a, m);
          }
        return d2;
      },
    },
    B = {};
  var w = [A, J, B];
  var $ = {};
  A.f4.prototype = {};
  J.aU.prototype = {
    F(a, b) {
      return a === b;
    },
    gG(a) {
      return A.b2(a);
    },
    l(a) {
      return "Instance of '" + A.dY(a) + "'";
    },
    gR(a) {
      return A.al(A.fg(this));
    },
  };
  J.aV.prototype = {
    l(a) {
      return String(a);
    },
    gG(a) {
      return a ? 519018 : 218159;
    },
    gR(a) {
      return A.al(t.y);
    },
    $iW: 1,
  };
  J.ar.prototype = {
    F(a, b) {
      return null == b;
    },
    l(a) {
      return "null";
    },
    gG(a) {
      return 0;
    },
    $iW: 1,
  };
  J.at.prototype = {};
  J.av.prototype = {
    gG(a) {
      return 0;
    },
    l(a) {
      return String(a);
    },
  };
  J.dW.prototype = {};
  J.a2.prototype = {};
  J.z.prototype = {
    u(a, b) {
      if (!!a.fixed$length) A.h(A.j("add"));
      a.push(b);
    },
    ap(a, b, c) {
      var s;
      if (!!a.fixed$length) A.h(A.j("insert"));
      s = a.length;
      if (b > s) throw A.f(A.f9(b, null));
      a.splice(b, 0, c);
    },
    m(a, b, c) {
      var s,
        r,
        q,
        p = [],
        o = a.length;
      for (s = 0; s < o; ++s) {
        r = a[s];
        if (!b.$1(r)) p.push(r);
        if (a.length !== o) throw A.f(A.R(a));
      }
      q = p.length;
      if (q === o) return;
      this.sn(a, q);
      for (s = 0; s < p.length; ++s) a[s] = p[s];
    },
    v(a, b) {
      var s;
      if (!!a.fixed$length) A.h(A.j("addAll"));
      if (Array.isArray(b)) {
        this.az(a, b);
        return;
      }
      for (s = J.a6(b); s.q(); ) a.push(s.gA());
    },
    az(a, b) {
      var s,
        r = b.length;
      if (r === 0) return;
      if (a === b) throw A.f(A.R(a));
      for (s = 0; s < r; ++s) a.push(b[s]);
    },
    ac(a, b, c) {
      var s,
        r,
        q = a.length;
      for (s = 0; s < q; ++s) {
        r = a[s];
        if (b.$1(r)) return r;
        if (a.length !== q) throw A.f(A.R(a));
      }
      if (c != null) return c.$0();
      throw A.f(A.f3());
    },
    X(a, b) {
      return this.ac(a, b, null);
    },
    O(a, b) {
      return a[b];
    },
    gi(a) {
      if (a.length > 0) return a[0];
      throw A.f(A.f3());
    },
    N(a, b) {
      var s,
        r = a.length;
      for (s = 0; s < r; ++s) {
        if (b.$1(a[s])) return !0;
        if (a.length !== r) throw A.f(A.R(a));
      }
      return !1;
    },
    I(a, b) {
      var s, r, q, p, o;
      if (!!a.immutable$list) A.h(A.j("sort"));
      s = a.length;
      if (s < 2) return;
      if (b == null) b = J.j5();
      if (s === 2) {
        r = a[0];
        q = a[1];
        if (b.$2(r, q) > 0) {
          a[0] = q;
          a[1] = r;
        }
        return;
      }
      if (A.c(a).c.b(null)) {
        for (p = 0, o = 0; o < a.length; ++o)
          if (a[o] === void 0) {
            a[o] = null;
            ++p;
          }
      } else p = 0;
      a.sort(A.jo(b, 2));
      if (p > 0) this.aF(a, p);
    },
    au(a) {
      return this.I(a, null);
    },
    aF(a, b) {
      var s,
        r = a.length;
      for (; (s = r - 1), r > 0; r = s)
        if (a[s] === null) {
          a[s] = void 0;
          --b;
          if (b === 0) break;
        }
    },
    a0(a, b) {
      var s, r, q;
      if (!!a.immutable$list) A.h(A.j("shuffle"));
      if (b == null) b = B.v;
      s = a.length;
      for (; s > 1; ) {
        r = b.ah(s);
        --s;
        q = a[s];
        this.t(a, s, a[r]);
        this.t(a, r, q);
      }
    },
    ai(a) {
      return this.a0(a, null);
    },
    k(a, b) {
      var s;
      for (s = 0; s < a.length; ++s) if (J.a5(a[s], b)) return !0;
      return !1;
    },
    l(a) {
      return A.fD(a, "[", "]");
    },
    gC(a) {
      return new J.af(a, a.length, A.c(a).h("af<1>"));
    },
    gG(a) {
      return A.b2(a);
    },
    gn(a) {
      return a.length;
    },
    sn(a, b) {
      if (!!a.fixed$length) A.h(A.j("set length"));
      if (b > a.length) A.c(a).c.a(null);
      a.length = b;
    },
    t(a, b, c) {
      if (!!a.immutable$list) A.h(A.j("indexed set"));
      if (!(b >= 0 && b < a.length)) throw A.f(A.jt(a, b));
      a[b] = c;
    },
    L(a, b) {
      var s = A.e(a, !0, A.c(a).c);
      this.v(s, b);
      return s;
    },
    $iB: 1,
  };
  J.dO.prototype = {};
  J.af.prototype = {
    gA() {
      var s = this.d;
      return s == null ? this.$ti.c.a(s) : s;
    },
    q() {
      var s,
        r = this,
        q = r.a,
        p = q.length;
      if (r.b !== p) throw A.f(A.w(q));
      s = r.c;
      if (s >= p) {
        r.d = null;
        return !1;
      }
      r.d = q[s];
      r.c = s + 1;
      return !0;
    },
  };
  J.as.prototype = {
    a8(a, b) {
      var s;
      if (a < b) return -1;
      else if (a > b) return 1;
      else if (a === b) {
        if (a === 0) {
          s = this.gag(b);
          if (this.gag(a) === s) return 0;
          if (this.gag(a)) return -1;
          return 1;
        }
        return 0;
      } else if (isNaN(a)) {
        if (isNaN(b)) return 0;
        return 1;
      } else return -1;
    },
    gag(a) {
      return a === 0 ? 1 / a < 0 : a < 0;
    },
    l(a) {
      if (a === 0 && 1 / a < 0) return "-0.0";
      else return "" + a;
    },
    gG(a) {
      var s,
        r,
        q,
        p,
        o = a | 0;
      if (a === o) return o & 536870911;
      s = Math.abs(a);
      r = (Math.log(s) / 0.6931471805599453) | 0;
      q = Math.pow(2, r);
      p = s < 1 ? s / q : q / s;
      return (
        ((((p * 9007199254740992) | 0) + ((p * 3542243181176521) | 0)) *
          599197 +
          r * 1259) &
        536870911
      );
    },
    M(a, b) {
      var s = a % b;
      if (s === 0) return 0;
      if (s > 0) return s;
      return s + b;
    },
    aj(a, b) {
      if ((a | 0) === a) if (b >= 1 || b < -1) return (a / b) | 0;
      return this.ao(a, b);
    },
    K(a, b) {
      return (a | 0) === a ? (a / b) | 0 : this.ao(a, b);
    },
    ao(a, b) {
      var s = a / b;
      if (s >= -2147483648 && s <= 2147483647) return s | 0;
      if (s > 0) {
        if (s !== 1 / 0) return Math.floor(s);
      } else if (s > -1 / 0) return Math.ceil(s);
      throw A.f(
        A.j(
          "Result of truncating division is " +
            A.q(s) +
            ": " +
            A.q(a) +
            " ~/ " +
            b
        )
      );
    },
    an(a, b) {
      var s;
      if (a > 0) s = this.aG(a, b);
      else {
        s = b > 31 ? 31 : b;
        s = (a >> s) >>> 0;
      }
      return s;
    },
    aG(a, b) {
      return b > 31 ? 0 : a >>> b;
    },
    gR(a) {
      return A.al(t.H);
    },
  };
  J.aq.prototype = {
    gR(a) {
      return A.al(t.S);
    },
    $iW: 1,
    $iG: 1,
  };
  J.aW.prototype = {
    gR(a) {
      return A.al(t.i);
    },
    $iW: 1,
  };
  J.aa.prototype = {
    L(a, b) {
      return a + b;
    },
    Y(a, b, c) {
      return a.substring(b, A.ii(b, c, a.length));
    },
    a8(a, b) {
      var s;
      if (a === b) s = 0;
      else s = a < b ? -1 : 1;
      return s;
    },
    l(a) {
      return a;
    },
    gG(a) {
      var s, r, q;
      for (s = a.length, r = 0, q = 0; q < s; ++q) {
        r = (r + a.charCodeAt(q)) & 536870911;
        r = (r + ((r & 524287) << 10)) & 536870911;
        r ^= r >> 6;
      }
      r = (r + ((r & 67108863) << 3)) & 536870911;
      r ^= r >> 11;
      return (r + ((r & 16383) << 15)) & 536870911;
    },
    gR(a) {
      return A.al(t.N);
    },
    gn(a) {
      return a.length;
    },
    $iW: 1,
    $id: 1,
  };
  A.aZ.prototype = {
    l(a) {
      return "LateInitializationError: " + this.a;
    },
  };
  A.ao.prototype = {};
  A.p.prototype = {
    gC(a) {
      var s = this;
      return new A.b0(s, s.gn(s), A.D(s).h("b0<p.E>"));
    },
    gB(a) {
      return this.gn(this) === 0;
    },
    aR(a) {
      var s,
        r = this,
        q = A.f6(A.D(r).h("p.E"));
      for (s = 0; s < r.gn(r); ++s) q.u(0, r.O(0, s));
      return q;
    },
  };
  A.b0.prototype = {
    gA() {
      var s = this.d;
      return s == null ? this.$ti.c.a(s) : s;
    },
    q() {
      var s,
        r = this,
        q = r.a,
        p = q.gn(q);
      if (r.b !== p) throw A.f(A.R(q));
      s = r.c;
      if (s >= p) {
        r.d = null;
        return !1;
      }
      r.d = q.O(0, s);
      ++r.c;
      return !0;
    },
  };
  A.r.prototype = {
    gC(a) {
      var s = A.D(this);
      return new A.b1(J.a6(this.a), this.b, s.h("@<1>").U(s.y[1]).h("b1<1,2>"));
    },
    gn(a) {
      return J.f0(this.a);
    },
  };
  A.b1.prototype = {
    q() {
      var s = this,
        r = s.b;
      if (r.q()) {
        s.a = s.c.$1(r.gA());
        return !0;
      }
      s.a = null;
      return !1;
    },
    gA() {
      var s = this.a;
      return s == null ? this.$ti.y[1].a(s) : s;
    },
  };
  A.k.prototype = {
    gn(a) {
      return J.f0(this.a);
    },
    O(a, b) {
      return this.b.$1(J.hq(this.a, b));
    },
  };
  A.a.prototype = {
    gC(a) {
      return new A.b8(J.a6(this.a), this.b);
    },
  };
  A.b8.prototype = {
    q() {
      var s, r;
      for (s = this.a, r = this.b; s.q(); ) if (r.$1(s.gA())) return !0;
      return !1;
    },
    gA() {
      return this.a.gA();
    },
  };
  A.ap.prototype = {
    gC(a) {
      var s = this.$ti;
      return new A.aS(
        J.a6(this.a),
        this.b,
        B.t,
        s.h("@<1>").U(s.y[1]).h("aS<1,2>")
      );
    },
  };
  A.aS.prototype = {
    gA() {
      var s = this.d;
      return s == null ? this.$ti.y[1].a(s) : s;
    },
    q() {
      var s,
        r,
        q = this,
        p = q.c;
      if (p == null) return !1;
      for (s = q.a, r = q.b; !p.q(); ) {
        q.d = null;
        if (s.q()) {
          q.c = null;
          p = J.a6(r.$1(s.gA()));
          q.c = p;
        } else return !1;
      }
      q.d = q.c.gA();
      return !0;
    },
  };
  A.aP.prototype = {
    q() {
      return !1;
    },
    gA() {
      throw A.f(A.f3());
    },
  };
  A.an.prototype = {
    gB(a) {
      return this.gn(this) === 0;
    },
    l(a) {
      return A.f8(this);
    },
    $in: 1,
  };
  A.y.prototype = {
    gn(a) {
      return this.b.length;
    },
    gaD() {
      var s = this.$keys;
      if (s == null) {
        s = Object.keys(this.a);
        this.$keys = s;
      }
      return s;
    },
    a9(a) {
      if ("__proto__" === a) return !1;
      return this.a.hasOwnProperty(a);
    },
    j(a, b) {
      if (!this.a9(b)) return null;
      return this.b[this.a[b]];
    },
    P(a, b) {
      var s,
        r,
        q = this.gaD(),
        p = this.b;
      for (s = q.length, r = 0; r < s; ++r) b.$2(q[r], p[r]);
    },
  };
  A.eA.prototype = {
    H(a) {
      var s,
        r,
        q = this,
        p = new RegExp(q.a).exec(a);
      if (p == null) return null;
      s = Object.create(null);
      r = q.b;
      if (r !== -1) s.arguments = p[r + 1];
      r = q.c;
      if (r !== -1) s.argumentsExpr = p[r + 1];
      r = q.d;
      if (r !== -1) s.expr = p[r + 1];
      r = q.e;
      if (r !== -1) s.method = p[r + 1];
      r = q.f;
      if (r !== -1) s.receiver = p[r + 1];
      return s;
    },
  };
  A.ax.prototype = {
    l(a) {
      return "Null check operator used on a null value";
    },
  };
  A.aX.prototype = {
    l(a) {
      var s,
        r = this,
        q = "NoSuchMethodError: method not found: '",
        p = r.b;
      if (p == null) return "NoSuchMethodError: " + r.a;
      s = r.c;
      if (s == null) return q + p + "' (" + r.a + ")";
      return q + p + "' on '" + s + "' (" + r.a + ")";
    },
  };
  A.b5.prototype = {
    l(a) {
      var s = this.a;
      return s.length === 0 ? "Error" : "Error: " + s;
    },
  };
  A.dV.prototype = {
    l(a) {
      return (
        "Throw of null ('" +
        (this.a === null ? "null" : "undefined") +
        "' from JavaScript)"
      );
    },
  };
  A.bf.prototype = {
    l(a) {
      var s,
        r = this.b;
      if (r != null) return r;
      r = this.a;
      s = r !== null && typeof r === "object" ? r.stack : null;
      return (this.b = s == null ? "" : s);
    },
  };
  A.a8.prototype = {
    l(a) {
      var s = this.constructor,
        r = s == null ? null : s.name;
      return "Closure '" + A.he(r == null ? "unknown" : r) + "'";
    },
    gaV() {
      return this;
    },
    $C: "$1",
    $R: 1,
    $D: null,
  };
  A.cn.prototype = { $C: "$0", $R: 0 };
  A.co.prototype = { $C: "$2", $R: 2 };
  A.ez.prototype = {};
  A.ey.prototype = {
    l(a) {
      var s = this.$static_name;
      if (s == null) return "Closure of unknown static method";
      return "Closure '" + A.he(s) + "'";
    },
  };
  A.am.prototype = {
    F(a, b) {
      if (b == null) return !1;
      if (this === b) return !0;
      if (!(b instanceof A.am)) return !1;
      return this.$_target === b.$_target && this.a === b.a;
    },
    gG(a) {
      return (A.jG(this.a) ^ A.b2(this.$_target)) >>> 0;
    },
    l(a) {
      return (
        "Closure '" +
        this.$_name +
        "' of " +
        ("Instance of '" + A.dY(this.a) + "'")
      );
    },
  };
  A.b9.prototype = {
    l(a) {
      return (
        "Reading static variable '" + this.a + "' during its initialization"
      );
    },
  };
  A.b3.prototype = {
    l(a) {
      return "RuntimeError: " + this.a;
    },
  };
  A.S.prototype = {
    gn(a) {
      return this.a;
    },
    gB(a) {
      return this.a === 0;
    },
    gT() {
      return new A.U(this, A.D(this).h("U<1>"));
    },
    a9(a) {
      var s, r;
      if (typeof a == "string") {
        s = this.b;
        if (s == null) return !1;
        return s[a] != null;
      } else if (typeof a == "number" && (a & 0x3fffffff) === a) {
        r = this.c;
        if (r == null) return !1;
        return r[a] != null;
      } else return this.aO(a);
    },
    aO(a) {
      var s = this.d;
      if (s == null) return !1;
      return this.ae(s[this.ad(a)], a) >= 0;
    },
    j(a, b) {
      var s,
        r,
        q,
        p,
        o = null;
      if (typeof b == "string") {
        s = this.b;
        if (s == null) return o;
        r = s[b];
        q = r == null ? o : r.b;
        return q;
      } else if (typeof b == "number" && (b & 0x3fffffff) === b) {
        p = this.c;
        if (p == null) return o;
        r = p[b];
        q = r == null ? o : r.b;
        return q;
      } else return this.aP(b);
    },
    aP(a) {
      var s,
        r,
        q = this.d;
      if (q == null) return null;
      s = q[this.ad(a)];
      r = this.ae(s, a);
      if (r < 0) return null;
      return s[r].b;
    },
    t(a, b, c) {
      var s,
        r,
        q = this;
      if (typeof b == "string") {
        s = q.b;
        q.ak(s == null ? (q.b = q.a6()) : s, b, c);
      } else if (typeof b == "number" && (b & 0x3fffffff) === b) {
        r = q.c;
        q.ak(r == null ? (q.c = q.a6()) : r, b, c);
      } else q.aQ(b, c);
    },
    aQ(a, b) {
      var s,
        r,
        q,
        p = this,
        o = p.d;
      if (o == null) o = p.d = p.a6();
      s = p.ad(a);
      r = o[s];
      if (r == null) o[s] = [p.a7(a, b)];
      else {
        q = p.ae(r, a);
        if (q >= 0) r[q].b = b;
        else r.push(p.a7(a, b));
      }
    },
    P(a, b) {
      var s = this,
        r = s.e,
        q = s.r;
      for (; r != null; ) {
        b.$2(r.a, r.b);
        if (q !== s.r) throw A.f(A.R(s));
        r = r.c;
      }
    },
    ak(a, b, c) {
      var s = a[b];
      if (s == null) a[b] = this.a7(b, c);
      else s.b = c;
    },
    a7(a, b) {
      var s = this,
        r = new A.dR(a, b);
      if (s.e == null) s.e = s.f = r;
      else s.f = s.f.c = r;
      ++s.a;
      s.r = (s.r + 1) & 1073741823;
      return r;
    },
    ad(a) {
      return J.bi(a) & 1073741823;
    },
    ae(a, b) {
      var s, r;
      if (a == null) return -1;
      s = a.length;
      for (r = 0; r < s; ++r) if (J.a5(a[r].a, b)) return r;
      return -1;
    },
    l(a) {
      return A.f8(this);
    },
    a6() {
      var s = Object.create(null);
      s["<non-identifier-key>"] = s;
      delete s["<non-identifier-key>"];
      return s;
    },
  };
  A.dR.prototype = {};
  A.U.prototype = {
    gn(a) {
      return this.a.a;
    },
    gB(a) {
      return this.a.a === 0;
    },
    gC(a) {
      var s = this.a,
        r = new A.b_(s, s.r);
      r.c = s.e;
      return r;
    },
  };
  A.b_.prototype = {
    gA() {
      return this.d;
    },
    q() {
      var s,
        r = this,
        q = r.a;
      if (r.b !== q.r) throw A.f(A.R(q));
      s = r.c;
      if (s == null) {
        r.d = null;
        return !1;
      } else {
        r.d = s.a;
        r.c = s.c;
        return !0;
      }
    },
  };
  A.M.prototype = {
    h(a) {
      return A.eU(v.typeUniverse, this, a);
    },
    U(a) {
      return A.iO(v.typeUniverse, this, a);
    },
  };
  A.bb.prototype = {};
  A.eS.prototype = {
    l(a) {
      return A.I(this.a, null);
    },
  };
  A.ba.prototype = {
    l(a) {
      return this.a;
    },
  };
  A.aE.prototype = {};
  A.ac.prototype = {
    gC(a) {
      var s = this,
        r = new A.be(s, s.r, A.D(s).h("be<1>"));
      r.c = s.e;
      return r;
    },
    gn(a) {
      return this.a;
    },
    u(a, b) {
      var s,
        r,
        q = this;
      if (typeof b == "string" && b !== "__proto__") {
        s = q.b;
        return q.al(s == null ? (q.b = A.fc()) : s, b);
      } else if (typeof b == "number" && (b & 1073741823) === b) {
        r = q.c;
        return q.al(r == null ? (q.c = A.fc()) : r, b);
      } else return q.aw(b);
    },
    aw(a) {
      var s,
        r,
        q = this,
        p = q.d;
      if (p == null) p = q.d = A.fc();
      s = q.aA(a);
      r = p[s];
      if (r == null) p[s] = [q.a3(a)];
      else {
        if (q.aC(r, a) >= 0) return !1;
        r.push(q.a3(a));
      }
      return !0;
    },
    al(a, b) {
      if (a[b] != null) return !1;
      a[b] = this.a3(b);
      return !0;
    },
    a3(a) {
      var s = this,
        r = new A.eR(a);
      if (s.e == null) s.e = s.f = r;
      else s.f = s.f.b = r;
      ++s.a;
      s.r = (s.r + 1) & 1073741823;
      return r;
    },
    aA(a) {
      return J.bi(a) & 1073741823;
    },
    aC(a, b) {
      var s, r;
      if (a == null) return -1;
      s = a.length;
      for (r = 0; r < s; ++r) if (J.a5(a[r].a, b)) return r;
      return -1;
    },
  };
  A.eR.prototype = {};
  A.be.prototype = {
    gA() {
      var s = this.d;
      return s == null ? this.$ti.c.a(s) : s;
    },
    q() {
      var s = this,
        r = s.c,
        q = s.a;
      if (s.b !== q.r) throw A.f(A.R(q));
      else if (r == null) {
        s.d = null;
        return !1;
      } else {
        s.d = r.a;
        s.c = r.b;
        return !0;
      }
    },
  };
  A.dS.prototype = {
    $2(a, b) {
      this.a.t(0, this.b.a(a), this.c.a(b));
    },
    $S: 20,
  };
  A.V.prototype = {
    P(a, b) {
      var s, r, q, p;
      for (s = this.gT(), s = s.gC(s), r = A.D(this).h("V.V"); s.q(); ) {
        q = s.gA();
        p = this.j(0, q);
        b.$2(q, p == null ? r.a(p) : p);
      }
    },
    gn(a) {
      var s = this.gT();
      return s.gn(s);
    },
    gB(a) {
      var s = this.gT();
      return s.gB(s);
    },
    l(a) {
      return A.f8(this);
    },
    $in: 1,
  };
  A.dU.prototype = {
    $2(a, b) {
      var s,
        r = this.a;
      if (!r.a) this.b.a += ", ";
      r.a = !1;
      r = this.b;
      s = A.q(a);
      s = r.a += s;
      r.a = s + ": ";
      s = A.q(b);
      r.a += s;
    },
    $S: 16,
  };
  A.ay.prototype = {
    v(a, b) {
      var s;
      for (s = J.a6(b); s.q(); ) this.u(0, s.gA());
    },
    l(a) {
      return A.fD(this, "{", "}");
    },
  };
  A.aD.prototype = {};
  A.bc.prototype = {
    j(a, b) {
      var s,
        r = this.b;
      if (r == null) return this.c.j(0, b);
      else if (typeof b != "string") return null;
      else {
        s = r[b];
        return typeof s == "undefined" ? this.aE(b) : s;
      }
    },
    gn(a) {
      return this.b == null ? this.c.a : this.Z().length;
    },
    gB(a) {
      return this.gn(0) === 0;
    },
    gT() {
      if (this.b == null) {
        var s = this.c;
        return new A.U(s, A.D(s).h("U<1>"));
      }
      return new A.bd(this);
    },
    P(a, b) {
      var s,
        r,
        q,
        p,
        o = this;
      if (o.b == null) return o.c.P(0, b);
      s = o.Z();
      for (r = 0; r < s.length; ++r) {
        q = s[r];
        p = o.b[q];
        if (typeof p == "undefined") {
          p = A.eX(o.a[q]);
          o.b[q] = p;
        }
        b.$2(q, p);
        if (s !== o.c) throw A.f(A.R(o));
      }
    },
    Z() {
      var s = this.c;
      if (s == null) s = this.c = A.b(Object.keys(this.a), t.s);
      return s;
    },
    aE(a) {
      var s;
      if (!Object.prototype.hasOwnProperty.call(this.a, a)) return null;
      s = A.eX(this.a[a]);
      return (this.b[a] = s);
    },
  };
  A.bd.prototype = {
    gn(a) {
      return this.a.gn(0);
    },
    O(a, b) {
      var s = this.a;
      return s.b == null ? s.gT().O(0, b) : s.Z()[b];
    },
    gC(a) {
      var s = this.a;
      if (s.b == null) {
        s = s.gT();
        s = s.gC(s);
      } else {
        s = s.Z();
        s = new J.af(s, s.length, A.c(s).h("af<1>"));
      }
      return s;
    },
  };
  A.aM.prototype = {};
  A.aO.prototype = {};
  A.au.prototype = {
    l(a) {
      var s = A.aR(this.a);
      return (
        (this.b != null
          ? "Converting object to an encodable object failed:"
          : "Converting object did not return an encodable object:") +
        " " +
        s
      );
    },
  };
  A.aY.prototype = {
    l(a) {
      return "Cyclic error in JSON stringify";
    },
  };
  A.dP.prototype = {
    ab(a, b) {
      var s = A.a0(a, this.gaN().a);
      return s;
    },
    gaN() {
      return B.H;
    },
  };
  A.dQ.prototype = {};
  A.eP.prototype = {
    ar(a) {
      var s,
        r,
        q,
        p,
        o,
        n,
        m = a.length;
      for (s = this.c, r = 0, q = 0; q < m; ++q) {
        p = a.charCodeAt(q);
        if (p > 92) {
          if (p >= 55296) {
            o = p & 64512;
            if (o === 55296) {
              n = q + 1;
              n = !(n < m && (a.charCodeAt(n) & 64512) === 56320);
            } else n = !1;
            if (!n)
              if (o === 56320) {
                o = q - 1;
                o = !(o >= 0 && (a.charCodeAt(o) & 64512) === 55296);
              } else o = !1;
            else o = !0;
            if (o) {
              if (q > r) s.a += B.f.Y(a, r, q);
              r = q + 1;
              o = A.C(92);
              s.a += o;
              o = A.C(117);
              s.a += o;
              o = A.C(100);
              s.a += o;
              o = (p >>> 8) & 15;
              o = A.C(o < 10 ? 48 + o : 87 + o);
              s.a += o;
              o = (p >>> 4) & 15;
              o = A.C(o < 10 ? 48 + o : 87 + o);
              s.a += o;
              o = p & 15;
              o = A.C(o < 10 ? 48 + o : 87 + o);
              s.a += o;
            }
          }
          continue;
        }
        if (p < 32) {
          if (q > r) s.a += B.f.Y(a, r, q);
          r = q + 1;
          o = A.C(92);
          s.a += o;
          switch (p) {
            case 8:
              o = A.C(98);
              s.a += o;
              break;
            case 9:
              o = A.C(116);
              s.a += o;
              break;
            case 10:
              o = A.C(110);
              s.a += o;
              break;
            case 12:
              o = A.C(102);
              s.a += o;
              break;
            case 13:
              o = A.C(114);
              s.a += o;
              break;
            default:
              o = A.C(117);
              s.a += o;
              o = A.C(48);
              s.a += o;
              o = A.C(48);
              s.a += o;
              o = (p >>> 4) & 15;
              o = A.C(o < 10 ? 48 + o : 87 + o);
              s.a += o;
              o = p & 15;
              o = A.C(o < 10 ? 48 + o : 87 + o);
              s.a += o;
              break;
          }
        } else if (p === 34 || p === 92) {
          if (q > r) s.a += B.f.Y(a, r, q);
          r = q + 1;
          o = A.C(92);
          s.a += o;
          o = A.C(p);
          s.a += o;
        }
      }
      if (r === 0) s.a += a;
      else if (r < m) s.a += B.f.Y(a, r, m);
    },
    a2(a) {
      var s, r, q, p;
      for (s = this.a, r = s.length, q = 0; q < r; ++q) {
        p = s[q];
        if (a == null ? p == null : a === p) throw A.f(new A.aY(a, null));
      }
      s.push(a);
    },
    a_(a) {
      var s,
        r,
        q,
        p,
        o = this;
      if (o.aq(a)) return;
      o.a2(a);
      try {
        s = o.b.$1(a);
        if (!o.aq(s)) {
          q = A.fF(a, null, o.gam());
          throw A.f(q);
        }
        o.a.pop();
      } catch (p) {
        r = A.fk(p);
        q = A.fF(a, r, o.gam());
        throw A.f(q);
      }
    },
    aq(a) {
      var s,
        r,
        q,
        p = this;
      if (typeof a == "number") {
        if (!isFinite(a)) return !1;
        s = p.c;
        r = B.F.l(a);
        s.a += r;
        return !0;
      } else if (a === !0) {
        p.c.a += "true";
        return !0;
      } else if (a === !1) {
        p.c.a += "false";
        return !0;
      } else if (a == null) {
        p.c.a += "null";
        return !0;
      } else if (typeof a == "string") {
        s = p.c;
        s.a += '"';
        p.ar(a);
        s.a += '"';
        return !0;
      } else if (t.j.b(a)) {
        p.a2(a);
        p.aT(a);
        p.a.pop();
        return !0;
      } else if (t.G.b(a)) {
        p.a2(a);
        q = p.aU(a);
        p.a.pop();
        return q;
      } else return !1;
    },
    aT(a) {
      var s,
        r = this.c;
      r.a += "[";
      if (a.length !== 0) {
        this.a_(a[0]);
        for (s = 1; s < a.length; ++s) {
          r.a += ",";
          this.a_(a[s]);
        }
      }
      r.a += "]";
    },
    aU(a) {
      var s,
        r,
        q,
        p,
        o,
        n = this,
        m = {};
      if (a.gB(a)) {
        n.c.a += "{}";
        return !0;
      }
      s = a.gn(a) * 2;
      r = A.ib(s, null, t.X);
      q = m.a = 0;
      m.b = !0;
      a.P(0, new A.eQ(m, r));
      if (!m.b) return !1;
      p = n.c;
      p.a += "{";
      for (o = '"'; q < s; q += 2, o = ',"') {
        p.a += o;
        n.ar(A.iS(r[q]));
        p.a += '":';
        n.a_(r[q + 1]);
      }
      p.a += "}";
      return !0;
    },
  };
  A.eQ.prototype = {
    $2(a, b) {
      var s, r, q, p;
      if (typeof a != "string") this.a.b = !1;
      s = this.b;
      r = this.a;
      q = r.a;
      p = r.a = q + 1;
      s[q] = a;
      r.a = p + 1;
      s[p] = b;
    },
    $S: 16,
  };
  A.eO.prototype = {
    gam() {
      var s = this.c.a;
      return s.charCodeAt(0) == 0 ? s : s;
    },
  };
  A.eL.prototype = {
    l(a) {
      return this.aB();
    },
  };
  A.t.prototype = {};
  A.aK.prototype = {
    l(a) {
      var s = this.a;
      if (s != null) return "Assertion failed: " + A.aR(s);
      return "Assertion failed";
    },
  };
  A.aB.prototype = {};
  A.a7.prototype = {
    ga5() {
      return "Invalid argument" + (!this.a ? "(s)" : "");
    },
    ga4() {
      return "";
    },
    l(a) {
      var s = this,
        r = s.c,
        q = r == null ? "" : " (" + r + ")",
        p = s.d,
        o = p == null ? "" : ": " + p,
        n = s.ga5() + q + o;
      if (!s.a) return n;
      return n + s.ga4() + ": " + A.aR(s.gaf());
    },
    gaf() {
      return this.b;
    },
  };
  A.ai.prototype = {
    gaf() {
      return this.b;
    },
    ga5() {
      return "RangeError";
    },
    ga4() {
      var s,
        r = this.e,
        q = this.f;
      if (r == null)
        s = q != null ? ": Not less than or equal to " + A.q(q) : "";
      else if (q == null) s = ": Not greater than or equal to " + A.q(r);
      else if (q > r) s = ": Not in inclusive range " + A.q(r) + ".." + A.q(q);
      else
        s =
          q < r
            ? ": Valid value range is empty"
            : ": Only valid value is " + A.q(r);
      return s;
    },
  };
  A.aT.prototype = {
    gaf() {
      return this.b;
    },
    ga5() {
      return "RangeError";
    },
    ga4() {
      if (this.b < 0) return ": index must not be negative";
      var s = this.f;
      if (s === 0) return ": no indices are valid";
      return ": index should be less than " + s;
    },
    gn(a) {
      return this.f;
    },
  };
  A.b6.prototype = {
    l(a) {
      return "Unsupported operation: " + this.a;
    },
  };
  A.b4.prototype = {
    l(a) {
      return "Bad state: " + this.a;
    },
  };
  A.aN.prototype = {
    l(a) {
      var s = this.a;
      if (s == null) return "Concurrent modification during iteration.";
      return "Concurrent modification during iteration: " + A.aR(s) + ".";
    },
  };
  A.az.prototype = {
    l(a) {
      return "Stack Overflow";
    },
    $it: 1,
  };
  A.eM.prototype = {
    l(a) {
      return "Exception: " + this.a;
    },
  };
  A.dC.prototype = {
    l(a) {
      var s = this.a,
        r = "" !== s ? "FormatException: " + s : "FormatException";
      return r;
    },
  };
  A.i.prototype = {
    aS(a, b) {
      return new A.a(this, b, A.D(this).h("a<i.E>"));
    },
    k(a, b) {
      var s;
      for (s = this.gC(this); s.q(); ) if (J.a5(s.gA(), b)) return !0;
      return !1;
    },
    gn(a) {
      var s,
        r = this.gC(this);
      for (s = 0; r.q(); ) ++s;
      return s;
    },
    gB(a) {
      return !this.gC(this).q();
    },
    O(a, b) {
      var s, r;
      A.ih(b, "index");
      s = this.gC(this);
      for (r = b; s.q(); ) {
        if (r === 0) return s.gA();
        --r;
      }
      throw A.f(A.fC(b, b - r, this, "index"));
    },
    l(a) {
      return A.i4(this, "(", ")");
    },
  };
  A.aw.prototype = {
    gG(a) {
      return A.v.prototype.gG.call(this, 0);
    },
    l(a) {
      return "null";
    },
  };
  A.v.prototype = {
    $iv: 1,
    F(a, b) {
      return this === b;
    },
    gG(a) {
      return A.b2(this);
    },
    l(a) {
      return "Instance of '" + A.dY(this) + "'";
    },
    gR(a) {
      return A.jy(this);
    },
    toString() {
      return this.l(this);
    },
  };
  A.aA.prototype = {
    gn(a) {
      return this.a.length;
    },
    l(a) {
      var s = this.a;
      return s.charCodeAt(0) == 0 ? s : s;
    },
  };
  A.eN.prototype = {
    ah(a) {
      if (a <= 0 || a > 4294967296) throw A.f(A.fI(u.c + a));
      return (Math.random() * a) >>> 0;
    },
  };
  A.aC.prototype = {
    a1(a) {
      var s,
        r,
        q,
        p,
        o,
        n,
        m,
        l = this,
        k = 4294967296;
      do {
        s = a >>> 0;
        a = B.b.K(a - s, k);
        r = a >>> 0;
        a = B.b.K(a - r, k);
        q = (~s >>> 0) + ((s << 21) >>> 0);
        p = q >>> 0;
        r =
          ((~r >>> 0) + (((r << 21) | (s >>> 11)) >>> 0) + B.b.K(q - p, k)) >>>
          0;
        q = ((p ^ ((p >>> 24) | (r << 8))) >>> 0) * 265;
        s = q >>> 0;
        r = (((r ^ (r >>> 24)) >>> 0) * 265 + B.b.K(q - s, k)) >>> 0;
        q = ((s ^ ((s >>> 14) | (r << 18))) >>> 0) * 21;
        s = q >>> 0;
        r = (((r ^ (r >>> 14)) >>> 0) * 21 + B.b.K(q - s, k)) >>> 0;
        s = (s ^ ((s >>> 28) | (r << 4))) >>> 0;
        r = (r ^ (r >>> 28)) >>> 0;
        q = ((s << 31) >>> 0) + s;
        p = q >>> 0;
        o = B.b.K(q - p, k);
        q = l.a * 1037;
        n = l.a = q >>> 0;
        m = (l.b * 1037 + B.b.K(q - n, k)) >>> 0;
        l.b = m;
        n = (n ^ p) >>> 0;
        l.a = n;
        o = (m ^ ((r + (((r << 31) | (s >>> 1)) >>> 0) + o) >>> 0)) >>> 0;
        l.b = o;
      } while (a !== 0);
      if (o === 0 && n === 0) l.a = 23063;
      l.S();
      l.S();
      l.S();
      l.S();
    },
    S() {
      var s = this,
        r = s.a,
        q = 4294901760 * r,
        p = q >>> 0,
        o = 55905 * r,
        n = o >>> 0,
        m = n + p + s.b;
      r = m >>> 0;
      s.a = r;
      s.b = B.b.K(o - n + (q - p) + (m - r), 4294967296) >>> 0;
    },
    ah(a) {
      var s,
        r,
        q,
        p = this;
      if (a <= 0 || a > 4294967296) throw A.f(A.fI(u.c + a));
      s = a - 1;
      if ((a & s) >>> 0 === 0) {
        p.S();
        return (p.a & s) >>> 0;
      }
      do {
        p.S();
        r = p.a;
        q = r % a;
      } while (r - q + a >= 4294967296);
      return q;
    },
  };
  A.eY.prototype = {
    $1(a) {
      return J.E(a);
    },
    $S: 6,
  };
  A.eZ.prototype = {
    $1(a) {
      return J.E(a);
    },
    $S: 6,
  };
  A.f_.prototype = {
    $1(a) {
      return a.E();
    },
    $S: 11,
  };
  A.eW.prototype = {
    $1(a) {
      return A.f1(t.a.a(a));
    },
    $S: 22,
  };
  A.bn.prototype = {
    $1(a) {
      return a.e === "board" && a.c !== this.a.b;
    },
    $S: 0,
  };
  A.bo.prototype = {
    $1(a) {
      return A.hu(a, this.a);
    },
    $S: 23,
  };
  A.bp.prototype = {
    $1(a) {
      return a.length !== 0;
    },
    $S: 19,
  };
  A.bq.prototype = {
    $1(a) {
      return a;
    },
    $S: 21,
  };
  A.bl.prototype = {
    $1(a) {
      return A.F(["priority", A.hv(a, this.a), "action", a], t.N, t.z);
    },
    $S: 11,
  };
  A.bm.prototype = {
    $2(a, b) {
      var s = "priority";
      return B.b.a8(A.h0(b.j(0, s)), A.h0(a.j(0, s)));
    },
    $S: 8,
  };
  A.cb.prototype = {
    $1(a) {
      return (
        a.b === this.a.b && B.a.k(A.b(["hand", "bag", "discard"], t.s), a.e)
      );
    },
    $S: 0,
  };
  A.ce.prototype = {
    $1(a) {
      return a.b === this.a.b && B.a.k(A.b(["discard"], t.s), a.e) && !a.f;
    },
    $S: 0,
  };
  A.cc.prototype = {
    $1(a) {
      return a.c === this.a.c && B.a.k(A.b(["bag"], t.s), a.e);
    },
    $S: 0,
  };
  A.cf.prototype = {
    $1(a) {
      return a.c === this.a.c && B.a.k(A.b(["hand"], t.s), a.e);
    },
    $S: 0,
  };
  A.cd.prototype = {
    $1(a) {
      return a.c === this.a.c && B.a.k(A.b(["discard"], t.s), a.e);
    },
    $S: 0,
  };
  A.ci.prototype = {
    $1(a) {
      return a.d === this.a.d;
    },
    $S: 0,
  };
  A.cg.prototype = {
    $1(a) {
      return a.d === this.a.d;
    },
    $S: 0,
  };
  A.cl.prototype = {
    $1(a) {
      return a.b === "neutral";
    },
    $S: 4,
  };
  A.cm.prototype = {
    $1(a) {
      return a.a;
    },
    $S: 7,
  };
  A.ck.prototype = {
    $1(a) {
      var s = this.a,
        r = s.w;
      return !new A.a(r, new A.cj(s, a), A.c(r).h("a<1>")).gB(0);
    },
    $S: 1,
  };
  A.cj.prototype = {
    $1(a) {
      return (
        a.c !== this.a.b && a.d === this.b && B.a.k(A.b(["knight"], t.s), a.b)
      );
    },
    $S: 0,
  };
  A.ch.prototype = {
    $1(a) {
      return (
        a.b === this.a.e.b && B.a.k(A.b(["bag", "hand", "discard"], t.s), a.e)
      );
    },
    $S: 0,
  };
  A.bx.prototype = {
    $1(a) {
      return a.b !== this.a.b;
    },
    $S: 4,
  };
  A.by.prototype = {
    $1(a) {
      return a.a;
    },
    $S: 7,
  };
  A.bz.prototype = {
    $1(a) {
      var s = this.a,
        r = s.w,
        q = A.c(r);
      return new A.r(
        new A.a(r, new A.bv(s), q.h("a<1>")),
        new A.bw(),
        q.h("r<1,d>")
      ).k(0, a);
    },
    $S: 12,
  };
  A.bv.prototype = {
    $1(a) {
      return a.c === this.a.b && a.e === "board";
    },
    $S: 0,
  };
  A.bw.prototype = {
    $1(a) {
      return a.d;
    },
    $S: 3,
  };
  A.bC.prototype = {
    $1(a) {
      return a.c !== this.a.b && a.e === "board";
    },
    $S: 0,
  };
  A.bD.prototype = {
    $1(a) {
      return a.d;
    },
    $S: 3,
  };
  A.bE.prototype = {
    $1(a) {
      return a.b === "deploy";
    },
    $S: 2,
  };
  A.bF.prototype = {
    $1(a) {
      return a.d;
    },
    $S: 13,
  };
  A.bG.prototype = {
    $1(a) {
      var s = this.a;
      B.a.I(s, new A.bu(a, this.b));
      if (A.N(a, B.a.gi(s)) > 3) B.a.ap(s, 0, "3\u20133");
      return A.F(
        ["location", a, "target", B.a.gi(s), "distance", A.N(a, B.a.gi(s))],
        t.N,
        t.z
      );
    },
    $S: 14,
  };
  A.bu.prototype = {
    $2(a, b) {
      var s,
        r = this.a,
        q = A.N(r, a),
        p = A.N(r, b);
      if (q < p) return -1;
      if (q > p) return 1;
      r = this.b.w;
      s = A.c(r).h("a<1>");
      if (!new A.a(r, new A.br(a), s).gB(0))
        if (!new A.a(r, new A.bs(b), s).gB(0)) return 0;
        else return 1;
      if (!new A.a(r, new A.bt(b), s).gB(0)) return -1;
      return 0;
    },
    $S: 9,
  };
  A.br.prototype = {
    $1(a) {
      return a.d === this.a;
    },
    $S: 0,
  };
  A.bs.prototype = {
    $1(a) {
      return a.d === this.a;
    },
    $S: 0,
  };
  A.bt.prototype = {
    $1(a) {
      return a.d === this.a;
    },
    $S: 0,
  };
  A.bH.prototype = {
    $2(a, b) {
      var s = "distance";
      if (a.j(0, s) < b.j(0, s)) return -1;
      if (a.j(0, s) > b.j(0, s)) return 1;
      return 0;
    },
    $S: 8,
  };
  A.bI.prototype = {
    $1(a) {
      return a.b === "deploy" && a.d === J.Q(B.a.gi(this.a), "location");
    },
    $S: 2,
  };
  A.bJ.prototype = {
    $1(a) {
      return !B.a.k(this.a, a.d);
    },
    $S: 2,
  };
  A.bA.prototype = {
    $1(a) {
      return (
        B.a.k(this.a, a.d) && B.a.k(A.b(["pike", "knight"], t.s), B.a.gi(a.c).b)
      );
    },
    $S: 2,
  };
  A.bB.prototype = {
    $2(a, b) {
      var s = this.a,
        r = A.N(J.Q(B.a.gi(s), "target"), a.d),
        q = A.N(J.Q(B.a.gi(s), "target"), b.d);
      if (r < q) return -1;
      if (r > q) return 1;
      return 0;
    },
    $S: 15,
  };
  A.bQ.prototype = {
    $1(a) {
      return a.b !== this.a.b;
    },
    $S: 4,
  };
  A.bR.prototype = {
    $1(a) {
      return a.a;
    },
    $S: 7,
  };
  A.bS.prototype = {
    $1(a) {
      var s = this.a,
        r = s.w,
        q = A.c(r);
      return new A.r(
        new A.a(r, new A.bO(s), q.h("a<1>")),
        new A.bP(),
        q.h("r<1,d>")
      ).k(0, a);
    },
    $S: 12,
  };
  A.bO.prototype = {
    $1(a) {
      return a.c === this.a.b && a.e === "board";
    },
    $S: 0,
  };
  A.bP.prototype = {
    $1(a) {
      return a.d;
    },
    $S: 3,
  };
  A.bV.prototype = {
    $1(a) {
      return a.c !== this.a.b && a.e === "board";
    },
    $S: 0,
  };
  A.bW.prototype = {
    $1(a) {
      return a.d;
    },
    $S: 3,
  };
  A.bX.prototype = {
    $1(a) {
      return a.b === this.a;
    },
    $S: 2,
  };
  A.bY.prototype = {
    $1(a) {
      return B.a.gi(a.c).d;
    },
    $S: 13,
  };
  A.bZ.prototype = {
    $1(a) {
      var s = this.a;
      B.a.I(s, new A.bN(a, this.b));
      if (A.N(a, B.a.gi(s)) > 3) B.a.ap(s, 0, "3\u20133");
      return A.F(
        ["location", a, "target", B.a.gi(s), "distance", A.N(a, B.a.gi(s))],
        t.N,
        t.z
      );
    },
    $S: 14,
  };
  A.bN.prototype = {
    $2(a, b) {
      var s,
        r = this.a,
        q = A.N(r, a),
        p = A.N(r, b);
      if (q < p) return -1;
      if (q > p) return 1;
      r = this.b.w;
      s = A.c(r).h("a<1>");
      if (!new A.a(r, new A.bK(a), s).gB(0))
        if (!new A.a(r, new A.bL(b), s).gB(0)) return 0;
        else return 1;
      if (!new A.a(r, new A.bM(b), s).gB(0)) return -1;
      return 0;
    },
    $S: 9,
  };
  A.bK.prototype = {
    $1(a) {
      return a.d === this.a;
    },
    $S: 0,
  };
  A.bL.prototype = {
    $1(a) {
      return a.d === this.a;
    },
    $S: 0,
  };
  A.bM.prototype = {
    $1(a) {
      return a.d === this.a;
    },
    $S: 0,
  };
  A.c_.prototype = {
    $2(a, b) {
      var s = "distance";
      if (a.j(0, s) < b.j(0, s)) return -1;
      if (a.j(0, s) > b.j(0, s)) return 1;
      return 0;
    },
    $S: 8,
  };
  A.c0.prototype = {
    $1(a) {
      return (
        a.b === this.a && B.a.gi(a.c).d === J.Q(B.a.gi(this.b), "location")
      );
    },
    $S: 2,
  };
  A.c1.prototype = {
    $1(a) {
      return !B.a.k(this.a, a.d);
    },
    $S: 2,
  };
  A.bT.prototype = {
    $1(a) {
      var s;
      if (B.a.k(this.a, a.d)) {
        s = a.c;
        s = B.a.gi(s).b !== "knight" && s.length < 2;
      } else s = !1;
      return s;
    },
    $S: 2,
  };
  A.bU.prototype = {
    $2(a, b) {
      var s = this.a,
        r = A.N(J.Q(B.a.gi(s), "target"), a.d),
        q = A.N(J.Q(B.a.gi(s), "target"), b.d);
      if (r < q) return -1;
      if (r > q) return 1;
      return 0;
    },
    $S: 15,
  };
  A.c7.prototype = {
    $1(a) {
      return a.c === this.a.b && a.e === "supply";
    },
    $S: 0,
  };
  A.c8.prototype = {
    $2(a, b) {
      var s,
        r,
        q = this.a.w,
        p = A.c(q).h("a<1>"),
        o = new A.a(q, new A.c3(a), p).gn(0),
        n = new A.a(q, new A.c4(b), p).gn(0);
      if (o < n) return 1;
      if (o > n) return -1;
      s = new A.a(q, new A.c5(a), p).gn(0);
      r = new A.a(q, new A.c6(b), p).gn(0);
      if (s < r) return -1;
      if (s > r) return 1;
      return 0;
    },
    $S: 40,
  };
  A.c3.prototype = {
    $1(a) {
      return a.e === "supply" && a.b === this.a.b;
    },
    $S: 0,
  };
  A.c4.prototype = {
    $1(a) {
      return a.e === "supply" && a.b === this.a.b;
    },
    $S: 0,
  };
  A.c5.prototype = {
    $1(a) {
      return (
        B.a.k(A.b(["hand", "bag", "discard"], t.s), a.e) && a.b === this.a.b
      );
    },
    $S: 0,
  };
  A.c6.prototype = {
    $1(a) {
      return (
        B.a.k(A.b(["hand", "bag", "discard"], t.s), a.e) && a.b === this.a.b
      );
    },
    $S: 0,
  };
  A.c9.prototype = {
    $1(a) {
      return B.a.N(a.c, new A.c2(this.a));
    },
    $S: 2,
  };
  A.c2.prototype = {
    $1(a) {
      return a.b === B.a.gi(this.a).b;
    },
    $S: 0,
  };
  A.ca.prototype = {
    $0() {
      return B.a.gi(this.a);
    },
    $S: 24,
  };
  A.cL.prototype = {
    $0() {
      var s = this.a,
        r = this.b;
      if (s < r) return r - 1;
      else if (s > r) return r + 1;
      else return r;
    },
    $S: 25,
  };
  A.cM.prototype = {
    $0() {
      var s,
        r = this,
        q = r.a,
        p = B.b.M(q, 2) === 1;
      if (q === r.b) {
        q = r.d;
        return r.c < q ? q - 1 : q + 1;
      } else {
        q = r.c;
        s = r.d;
        if (q < s) return p ? s - 1 : s;
        else if (q > s) return p ? s : s + 1;
      }
    },
    $S: 26,
  };
  A.cy.prototype = {
    $0() {
      var s,
        r,
        q,
        p,
        o,
        n,
        m,
        l = this,
        k = "removeWhere",
        j = l.a;
      if (j === "archer") return A.ag(l.b);
      else if (j === "cavalry" && l.c) {
        j = l.b;
        return B.a.L(A.L(j), A.ag(j));
      } else if (j === "crossbow") {
        j = l.b;
        s = A.L(j);
        r = A.ag(j);
        j = A.b([], t.s);
        for (q = 0; q < r.length; ++q) if (B.b.M(q, 2) === 0) j.push(r[q]);
        for (p = l.d, o = A.c(p).h("a<1>"), q = 0; q < s.length; ++q)
          if (new A.a(p, new A.cr(s, q), o).gC(0).q()) j[q] = "remove";
        if (!!j.fixed$length) A.h(A.j(k));
        B.a.m(j, new A.cs(), !0);
        return B.a.L(s, j);
      } else {
        p = l.b;
        if (j === "lancer") {
          s = A.L(p);
          r = A.ag(p);
          j = t.s;
          o = A.b([], j);
          for (q = 0; q < r.length; ++q) if (B.b.M(q, 2) === 0) o.push(r[q]);
          n = A.fw(p);
          j = A.b([], j);
          for (q = 0; q < 18; ++q) if (B.b.M(q, 3) === 0) j.push(n[q]);
          for (p = l.d, m = A.c(p).h("a<1>"), q = 0; q < s.length; ++q)
            if (new A.a(p, new A.ct(s, q), m).gC(0).q()) {
              o[q] = "remove";
              j[q] = "remove";
            }
          if (!!o.fixed$length) A.h(A.j(k));
          B.a.m(o, new A.cu(), !0);
          if (!!j.fixed$length) A.h(A.j(k));
          B.a.m(j, new A.cv(), !0);
          for (q = 0; q < o.length; ++q)
            if (new A.a(p, new A.cw(o, q), m).gC(0).q()) j[q] = "remove";
          if (!!j.fixed$length) A.h(A.j(k));
          B.a.m(j, new A.cx(), !0);
          return B.a.L(o, j);
        } else return A.L(p);
      }
    },
    $S: 27,
  };
  A.cr.prototype = {
    $1(a) {
      return a.d === this.a[this.b];
    },
    $S: 0,
  };
  A.cs.prototype = {
    $1(a) {
      return a === "remove";
    },
    $S: 1,
  };
  A.ct.prototype = {
    $1(a) {
      return a.d === this.a[this.b];
    },
    $S: 0,
  };
  A.cu.prototype = {
    $1(a) {
      return a === "remove";
    },
    $S: 1,
  };
  A.cv.prototype = {
    $1(a) {
      return a === "remove";
    },
    $S: 1,
  };
  A.cw.prototype = {
    $1(a) {
      return a.d === this.a[this.b];
    },
    $S: 0,
  };
  A.cx.prototype = {
    $1(a) {
      return a === "remove";
    },
    $S: 1,
  };
  A.cz.prototype = {
    $1(a) {
      var s = this.a;
      return !new A.a(s, new A.cq(a, this.b), A.c(s).h("a<1>")).gB(0);
    },
    $S: 1,
  };
  A.cq.prototype = {
    $1(a) {
      return a.d === this.a && a.c !== this.b;
    },
    $S: 0,
  };
  A.cA.prototype = {
    $1(a) {
      return !B.a.k(B.e, a);
    },
    $S: 1,
  };
  A.cB.prototype = {
    $1(a) {
      var s = this.a;
      return !new A.a(s, new A.cp(a, this.b), A.c(s).h("a<1>")).gB(0);
    },
    $S: 1,
  };
  A.cp.prototype = {
    $1(a) {
      return a.d === this.a && a.b === "knight" && !this.b;
    },
    $S: 0,
  };
  A.cJ.prototype = {
    $1(a) {
      var s;
      if (a.a === this.a) {
        s = a.b;
        s = s === "neutral" || s === this.b;
      } else s = !1;
      return s;
    },
    $S: 4,
  };
  A.cK.prototype = {
    $1(a) {
      return a.a;
    },
    $S: 7,
  };
  A.cC.prototype = {
    $1(a) {
      return a.d === this.a;
    },
    $S: 0,
  };
  A.cD.prototype = {
    $1(a) {
      return a.d;
    },
    $S: 3,
  };
  A.cT.prototype = {
    $1(a) {
      var s = this.a;
      return !new A.a(s, new A.cS(a), A.c(s).h("a<1>")).gC(0).q();
    },
    $S: 1,
  };
  A.cS.prototype = {
    $1(a) {
      return a.d === this.a;
    },
    $S: 0,
  };
  A.cU.prototype = {
    $1(a) {
      var s = this.a;
      return !new A.a(s, new A.cR(a), A.c(s).h("a<1>")).gC(0).q();
    },
    $S: 1,
  };
  A.cR.prototype = {
    $1(a) {
      return a.d === this.a;
    },
    $S: 0,
  };
  A.cV.prototype = {
    $1(a) {
      return !B.a.k(B.e, a);
    },
    $S: 1,
  };
  A.cW.prototype = {
    $1(a) {
      return a.b === "ensign" && a.e === "board";
    },
    $S: 0,
  };
  A.cX.prototype = {
    $1(a) {
      return !B.a.k(this.a, a);
    },
    $S: 1,
  };
  A.cY.prototype = {
    $1(a) {
      return !B.a.k(B.e, a);
    },
    $S: 1,
  };
  A.cF.prototype = {
    $1(a) {
      return a.b === this.a;
    },
    $S: 4,
  };
  A.cG.prototype = {
    $1(a) {
      return a.a;
    },
    $S: 7,
  };
  A.cH.prototype = {
    $1(a) {
      var s = this.a;
      return !new A.a(s, new A.cE(a), A.c(s).h("a<1>")).gB(0);
    },
    $S: 1,
  };
  A.cE.prototype = {
    $1(a) {
      return a.d === this.a;
    },
    $S: 0,
  };
  A.cI.prototype = {
    $1(a) {
      return !B.a.k(B.e, a);
    },
    $S: 1,
  };
  A.cP.prototype = {
    $1(a) {
      var s = this.a;
      return !new A.a(s, new A.cO(a, this.b), A.c(s).h("a<1>")).gB(0);
    },
    $S: 1,
  };
  A.cO.prototype = {
    $1(a) {
      return a.d === this.a && a.c === this.b;
    },
    $S: 0,
  };
  A.cQ.prototype = {
    $1(a) {
      var s,
        r,
        q = this.a,
        p = A.c(q).h("a<1>"),
        o = A.e(new A.a(q, new A.cN(a), p), !0, p.h("i.E"));
      if (B.a.k(A.b(["lancer", "archer"], t.s), B.a.gi(o).b)) return !0;
      else {
        p = B.a.gi(o).b;
        s = B.a.gi(o).d;
        r = B.a.gi(o).c;
        if (A.aQ(s, o.length > 1, !1, r, p, q).length === 0) return !0;
        else return !1;
      }
    },
    $S: 1,
  };
  A.cN.prototype = {
    $1(a) {
      return a.d === this.a;
    },
    $S: 0,
  };
  A.df.prototype = {
    $1(a) {
      return a.b === "footman" && a.e === "supply";
    },
    $S: 0,
  };
  A.dg.prototype = {
    $1(a) {
      return a.a === B.a.gi(this.a).a;
    },
    $S: 0,
  };
  A.dh.prototype = {
    $1(a) {
      return a.a === this.a.e.a;
    },
    $S: 0,
  };
  A.di.prototype = {
    $1(a) {
      return a.a === this.a.e.a;
    },
    $S: 0,
  };
  A.de.prototype = {
    $1(a) {
      return a.a === this.a.e.a;
    },
    $S: 0,
  };
  A.d3.prototype = {
    $1(a) {
      return B.a.k(A.b(["berserk", "endurance", "haste", "teamwork"], t.s), a);
    },
    $S: 1,
  };
  A.d4.prototype = {
    $1(a) {
      return a.a === this.a.e.a;
    },
    $S: 0,
  };
  A.d5.prototype = {
    $1(a) {
      return a.d === this.a.d;
    },
    $S: 0,
  };
  A.d6.prototype = {
    $0() {
      var s,
        r,
        q,
        p = this,
        o = p.b;
      if (B.a.gi(o).b === "royal_guard") {
        s = p.a.a.w;
        r = A.c(s).h("a<1>");
        q = A.e(new A.a(s, new A.d2(), r), !0, r.h("i.E"));
        s = q.length;
        if (s !== 0) {
          if (B.a.gi(p.c.c).b === "lancer") {
            if (s > 1) return A.b([q[0], q[1]], t.e);
            if (s === 1) return A.b([q[0], B.a.gi(o)], t.e);
          }
          return A.b([B.a.gi(q).p()], t.e);
        }
      }
      if (B.a.gi(p.c.c).b === "lancer")
        if (o.length > 1) return A.b([o[0], o[1]], t.e);
      return A.b([B.a.gi(o).p()], t.e);
    },
    $S: 28,
  };
  A.d2.prototype = {
    $1(a) {
      return a.b === "royal_guard" && a.e === "supply";
    },
    $S: 0,
  };
  A.d7.prototype = {
    $1(a) {
      return a.a === this.a.a;
    },
    $S: 0,
  };
  A.d8.prototype = {
    $1(a) {
      return a.a === this.a.a;
    },
    $S: 0,
  };
  A.d9.prototype = {
    $1(a) {
      return a.a === B.a.gi(this.a.c).a;
    },
    $S: 0,
  };
  A.da.prototype = {
    $1(a) {
      var s = this.a.c,
        r = A.c(s).h("k<1,d>");
      return B.a.k(A.e(new A.k(s, new A.d1(), r), !0, r.h("p.E")), a.a);
    },
    $S: 0,
  };
  A.d1.prototype = {
    $1(a) {
      return a.a;
    },
    $S: 3,
  };
  A.db.prototype = {
    $1(a) {
      return a.a === B.a.gi(this.a).a;
    },
    $S: 0,
  };
  A.dc.prototype = {
    $1(a) {
      return a.b === B.a.gi(this.a.c).b && a.e === "board";
    },
    $S: 0,
  };
  A.dd.prototype = {
    $1(a) {
      return a === B.a.gi(this.a.c).d;
    },
    $S: 1,
  };
  A.dB.prototype = {
    $1(a) {
      return a.a === this.a.e.a;
    },
    $S: 0,
  };
  A.dw.prototype = {
    $1(a) {
      return B.a.k(A.b(["berserk", "endurance", "haste", "teamwork"], t.s), a);
    },
    $S: 1,
  };
  A.dx.prototype = {
    $1(a) {
      return a.a === this.a.e.a;
    },
    $S: 0,
  };
  A.dj.prototype = {
    $1(a) {
      return B.a.k(A.b(["berserk", "endurance", "haste", "teamwork"], t.s), a);
    },
    $S: 1,
  };
  A.dk.prototype = {
    $1(a) {
      return a.a === this.a.e.a;
    },
    $S: 0,
  };
  A.dl.prototype = {
    $1(a) {
      return a.a === this.a.d;
    },
    $S: 4,
  };
  A.dm.prototype = {
    $1(a) {
      return a.a === B.a.gi(this.a.c).a;
    },
    $S: 0,
  };
  A.dn.prototype = {
    $1(a) {
      return a.b === B.a.gi(this.a.c).b && a.e === "board";
    },
    $S: 0,
  };
  A.dp.prototype = {
    $1(a) {
      return a === B.a.gi(this.a.c).d;
    },
    $S: 1,
  };
  A.dq.prototype = {
    $1(a) {
      return B.a.k(A.b(["berserk", "endurance", "haste", "teamwork"], t.s), a);
    },
    $S: 1,
  };
  A.dr.prototype = {
    $1(a) {
      return a.a === this.a.e.a;
    },
    $S: 0,
  };
  A.ds.prototype = {
    $1(a) {
      return a.a === this.a.a;
    },
    $S: 0,
  };
  A.dt.prototype = {
    $1(a) {
      return a.a === B.a.gi(this.a.c).a;
    },
    $S: 0,
  };
  A.du.prototype = {
    $1(a) {
      return a.b === B.a.gi(this.a.c).b && a.e === "board";
    },
    $S: 0,
  };
  A.dv.prototype = {
    $1(a) {
      return a === B.a.gi(this.a.c).d;
    },
    $S: 1,
  };
  A.dy.prototype = {
    $1(a) {
      return a.a === this.a.e.a;
    },
    $S: 0,
  };
  A.dz.prototype = {
    $1(a) {
      return a.a === B.a.gi(this.a.c).a;
    },
    $S: 0,
  };
  A.dA.prototype = {
    $1(a) {
      return a.b === "mercenary" && a.e === "board";
    },
    $S: 0,
  };
  A.cZ.prototype = {
    $1(a) {
      return a.c === this.a.b && a.e === "bag";
    },
    $S: 0,
  };
  A.d_.prototype = {
    $1(a) {
      return a.c === this.a.b && a.d === "discard";
    },
    $S: 0,
  };
  A.d0.prototype = {
    $1(a) {
      return a.a === this.a.a;
    },
    $S: 0,
  };
  A.eh.prototype = {
    $1(a) {
      return J.a5(a.j(0, "unit_class"), this.a);
    },
    $S: 10,
  };
  A.ei.prototype = {
    $1(a) {
      return J.a5(a.j(0, "unit_class"), this.a);
    },
    $S: 10,
  };
  A.e_.prototype = {
    $1(a) {
      return a.c === this.a && a.e === "hand";
    },
    $S: 0,
  };
  A.e0.prototype = {
    $1(a) {
      return a.c === this.a && a.d === "bag";
    },
    $S: 0,
  };
  A.e1.prototype = {
    $1(a) {
      return a.c === this.a && a.d === "discard";
    },
    $S: 0,
  };
  A.e2.prototype = {
    $1(a) {
      return a.a === this.a.a;
    },
    $S: 0,
  };
  A.e3.prototype = {
    $1(a) {
      return a.c === this.a && a.e === "hand";
    },
    $S: 0,
  };
  A.e4.prototype = {
    $1(a) {
      return a.a === this.a[this.b].a;
    },
    $S: 0,
  };
  A.ej.prototype = {
    $1(a) {
      return a.b === this.a.b && a.e === "board";
    },
    $S: 0,
  };
  A.ek.prototype = {
    $1(a) {
      return a.b === this.a && a.e === "supply";
    },
    $S: 0,
  };
  A.el.prototype = {
    $0() {
      return B.d.p();
    },
    $S: 30,
  };
  A.en.prototype = {
    $1(a) {
      return a.d;
    },
    $S: 3,
  };
  A.eo.prototype = {
    $1(a) {
      return !B.a.k(this.a.z, a);
    },
    $S: 1,
  };
  A.ep.prototype = {
    $1(a) {
      return a.d === this.a;
    },
    $S: 0,
  };
  A.eq.prototype = {
    $1(a) {
      return a.d === this.a;
    },
    $S: 0,
  };
  A.er.prototype = {
    $1(a) {
      return a.d === this.a;
    },
    $S: 0,
  };
  A.es.prototype = {
    $1(a) {
      return a.d === this.a;
    },
    $S: 0,
  };
  A.et.prototype = {
    $1(a) {
      return a.d === this.a;
    },
    $S: 0,
  };
  A.eu.prototype = {
    $1(a) {
      return a.d === this.a;
    },
    $S: 0,
  };
  A.em.prototype = {
    $1(a) {
      return a.d === this.a;
    },
    $S: 0,
  };
  A.ev.prototype = {
    $1(a) {
      return B.a.k(
        A.b(
          [
            "endurance",
            "berserk",
            "oracle",
            "haste",
            "immediate_force",
            "teamwork",
          ],
          t.s
        ),
        a
      );
    },
    $S: 1,
  };
  A.ew.prototype = {
    $1(a) {
      return a.c === this.a.b && a.e === "hand";
    },
    $S: 0,
  };
  A.e9.prototype = {
    $0() {
      var s = this,
        r = s.a;
      switch (r.b) {
        case "move":
          return A.fz(r, s.b.p(), s.c);
        case "bolster":
          return A.hZ(r, s.b.p(), s.c);
        case "deploy":
          return A.i_(r, s.b.p(), s.c);
        case "recruit":
          return A.i2(r, s.b.p(), s.c);
        case "dominate":
          return A.i0(r, s.b.p(), s.c);
        case "pass":
          return A.i1(r, s.b.p(), s.c);
        case "take_initiative":
          return A.i3(r, s.b.p(), s.c);
        case "attack":
          return A.fy(r, s.b.p(), s.c);
        case "instruction_move":
          return A.fz(r, s.b.p(), s.c);
        case "instruction_attack":
          return A.fy(r, s.b.p(), s.c);
        default:
          A.aJ("\u4f8b\u5916\u306e\u30a2\u30af\u30b7\u30e7\u30f3");
          throw A.f(new A.t());
      }
    },
    $S: 31,
  };
  A.ea.prototype = {
    $0() {
      var s = this.a,
        r = s.r,
        q = A.c(r).h("a<1>");
      if (new A.a(r, new A.e5(), q).gn(0) > 5)
        return A.b(["blue", "dominated"], t.s);
      else if (new A.a(r, new A.e6(), q).gn(0) > 5)
        return A.b(["red", "dominated"], t.s);
      else {
        s = s.w;
        r = A.c(s).h("a<1>");
        if (new A.a(s, new A.e7(), r).gn(0) < 2)
          return A.b(["blue", "eliminated"], t.s);
        else if (new A.a(s, new A.e8(), r).gn(0) < 2)
          return A.b(["red", "eliminated"], t.s);
        else return [];
      }
    },
    $S: 32,
  };
  A.e5.prototype = {
    $1(a) {
      return a.b === "blue";
    },
    $S: 4,
  };
  A.e6.prototype = {
    $1(a) {
      return a.b === "red";
    },
    $S: 4,
  };
  A.e7.prototype = {
    $1(a) {
      return (
        a.c === "red" &&
        B.a.k(A.b(["bag", "hand", "supply", "discard"], t.s), a.e)
      );
    },
    $S: 0,
  };
  A.e8.prototype = {
    $1(a) {
      return (
        a.c === "blue" &&
        B.a.k(A.b(["bag", "hand", "supply", "discard"], t.s), a.e)
      );
    },
    $S: 0,
  };
  A.ex.prototype = {
    $1(a) {
      return a.d === "hand4";
    },
    $S: 0,
  };
  A.ed.prototype = {
    $1(a) {
      return B.a.k(
        A.b(
          [
            "endurance",
            "berserk",
            "oracle",
            "haste",
            "immediate_force",
            "teamwork",
          ],
          t.s
        ),
        a
      );
    },
    $S: 1,
  };
  A.ee.prototype = {
    $0() {
      var s = this.a,
        r = s.w,
        q = this.b,
        p = A.c(r).h("a<1>");
      if (!new A.a(r, new A.eb(q), p).gB(0)) return s.aI(q);
      if (!new A.a(r, new A.ec(), p).gC(0).q())
        return A.fL(s.p(), this.c).aK(!1, s.c);
    },
    $S: 33,
  };
  A.eb.prototype = {
    $1(a) {
      return a.c === this.a && a.e === "hand";
    },
    $S: 0,
  };
  A.ec.prototype = {
    $1(a) {
      return a.e === "hand";
    },
    $S: 0,
  };
  A.ef.prototype = {
    $1(a) {
      return a.b === "footman" && a.e === "board";
    },
    $S: 0,
  };
  A.eg.prototype = {
    $1(a) {
      return a.d;
    },
    $S: 3,
  };
  A.dX.prototype = {};
  A.Y.prototype = {};
  A.eG.prototype = {
    $1(a) {
      return this.a.j(0, a);
    },
    $S: 5,
  };
  A.eC.prototype = {
    $1(a) {
      return this.a.j(0, a);
    },
    $S: 5,
  };
  A.eI.prototype = {
    $1(a) {
      return this.a.j(0, a);
    },
    $S: 5,
  };
  A.eH.prototype = {
    $1(a) {
      return this.a.j(0, a);
    },
    $S: 5,
  };
  A.eE.prototype = {
    $1(a) {
      return this.a.j(0, a);
    },
    $S: 5,
  };
  A.eD.prototype = {
    $1(a) {
      return this.a.j(0, a);
    },
    $S: 5,
  };
  A.eF.prototype = {
    $1(a) {
      return this.a.j(0, a);
    },
    $S: 5,
  };
  A.l.prototype = {
    p() {
      var s = this;
      return new A.l(s.a, s.b, s.c, s.d, s.e);
    },
    E() {
      var s = this,
        r = s.c,
        q = A.c(r).h("k<1,n<d,@>>");
      return A.F(
        [
          "team",
          s.a,
          "action_type",
          s.b,
          "units_to_action",
          A.e(new A.k(r, new A.bk(), q), !0, q.h("p.E")),
          "target_location",
          s.d,
          "unit_to_use",
          s.e.E(),
        ],
        t.N,
        t.z
      );
    },
    l(a) {
      var s = this;
      return A.q(A.b([s.a, s.b, s.c, s.d, s.e], t.f));
    },
  };
  A.bk.prototype = {
    $1(a) {
      return a.E();
    },
    $S: 17,
  };
  A.bj.prototype = {
    $1(a) {
      return A.fb(a);
    },
    $S: 18,
  };
  A.o.prototype = {
    E() {
      return A.F(["tile_id", this.a, "dominated_by", this.b], t.N, t.z);
    },
    l(a) {
      return A.q(A.b([this.a, this.b], t.f));
    },
  };
  A.a9.prototype = {
    J(a, b, c, d, a0, a1, a2, a3, a4, a5, a6, a7) {
      var s,
        r,
        q,
        p,
        o,
        n,
        m,
        l,
        k = this,
        j = a1 == null ? k.a : a1,
        i = a4 == null ? k.b : a4,
        h = d == null ? k.c : d,
        g = b == null ? k.d : b,
        f = k.r,
        e = A.c(f).h("k<1,o>");
      e = A.e(new A.k(f, new A.dK(), e), !0, e.h("p.E"));
      f = k.w;
      s = A.c(f).h("k<1,m>");
      s = A.e(new A.k(f, new A.dL(), s), !0, s.h("p.E"));
      f = a3 == null ? k.x : a3;
      r = a2 == null ? k.y : a2;
      q = a5 == null ? k.z : a5;
      p = a0 == null ? k.Q : a0;
      o = a == null ? k.as : a;
      n = c == null ? k.at : c;
      m = a6 == null ? k.ax : a6;
      l = a7 == null ? k.ay : a7;
      return A.f2(o, e, g, n, h, p, j, r, f, i, k.e, k.f, s, q, m, l);
    },
    p() {
      var s = null;
      return this.J(s, s, s, s, s, s, s, s, s, s, s, s);
    },
    aJ(a, b) {
      var s = null;
      return this.J(a, s, s, s, s, s, s, s, s, b, s, s);
    },
    aI(a) {
      var s = null;
      return this.J(s, s, s, s, s, s, s, s, a, s, s, s);
    },
    aK(a, b) {
      var s = null;
      return this.J(s, a, s, s, s, s, s, s, b, s, s, s);
    },
    aH(a) {
      var s = null;
      return this.J(a, s, s, s, s, s, s, s, s, s, s, s);
    },
    aL(a, b, c, d, e) {
      var s = null;
      return this.J(s, s, a, s, s, b, s, c, s, s, d, e);
    },
    aa(a, b, c) {
      var s = null;
      return this.J(a, s, s, s, b, s, c, s, s, s, s, s);
    },
    aM(a, b, c, d, e, f) {
      var s = null;
      return this.J(a, b, s, c, d, s, e, s, s, f, s, s);
    },
    W(a, b, c, d) {
      var s = null;
      return this.J(a, s, s, s, b, s, c, s, s, d, s, s);
    },
    E() {
      var s = this,
        r = s.r,
        q = A.c(r).h("k<1,n<d,@>>"),
        p = s.w,
        o = A.c(p).h("k<1,n<d,@>>");
      return A.F(
        [
          "snapshot_id",
          s.a,
          "turn",
          s.b,
          "initiative",
          s.c,
          "has_changed_initiative",
          s.d,
          "unit_classes_of_blue",
          s.e,
          "unit_classes_of_red",
          s.f,
          "control_points_state",
          A.e(new A.k(r, new A.dM(), q), !0, q.h("p.E")),
          "units_state",
          A.e(new A.k(p, new A.dN(), o), !0, o.h("p.E")),
          "timestamp",
          s.x,
          "text_log",
          s.y,
          "waiting_footman_locations",
          s.z,
          "last_action",
          s.Q.E(),
          "allowed_actions",
          s.as,
          "has_game_finished",
          s.at,
          "winner",
          s.ax,
          "winning_type",
          s.ay,
        ],
        t.N,
        t.z
      );
    },
    l(a) {
      var s = this;
      return A.q(
        A.b(
          [
            s.a,
            s.b,
            s.c,
            s.d,
            s.e,
            s.f,
            s.r,
            s.w,
            s.x,
            s.y,
            s.Q,
            s.as,
            s.at,
            s.ax,
            s.ay,
          ],
          t.f
        )
      );
    },
  };
  A.dK.prototype = {
    $1(a) {
      return new A.o(a.a, a.b);
    },
    $S: 34,
  };
  A.dL.prototype = {
    $1(a) {
      return a.p();
    },
    $S: 35,
  };
  A.dM.prototype = {
    $1(a) {
      return a.E();
    },
    $S: 36,
  };
  A.dN.prototype = {
    $1(a) {
      return a.E();
    },
    $S: 17,
  };
  A.dE.prototype = {
    $1(a) {
      return J.E(a);
    },
    $S: 6,
  };
  A.dF.prototype = {
    $1(a) {
      return J.E(a);
    },
    $S: 6,
  };
  A.dG.prototype = {
    $1(a) {
      return new A.o(a.j(0, "tile_id"), a.j(0, "dominated_by"));
    },
    $S: 37,
  };
  A.dH.prototype = {
    $1(a) {
      return A.fb(a);
    },
    $S: 18,
  };
  A.dI.prototype = {
    $1(a) {
      return J.E(a);
    },
    $S: 6,
  };
  A.dJ.prototype = {
    $1(a) {
      return J.E(a);
    },
    $S: 6,
  };
  A.m.prototype = {
    V(a, b, c) {
      var s = this,
        r = b == null ? s.d : b,
        q = a == null ? s.e : a,
        p = c == null ? s.f : c;
      return new A.m(s.a, s.b, s.c, r, q, p);
    },
    p() {
      return this.V(null, null, null);
    },
    D(a, b) {
      return this.V(a, b, null);
    },
    E() {
      var s = this;
      return A.F(
        [
          "unit_id",
          s.a,
          "unit_class",
          s.b,
          "team",
          s.c,
          "location",
          s.d,
          "layer",
          s.e,
          "should_hide",
          s.f,
        ],
        t.N,
        t.z
      );
    },
    l(a) {
      var s = this;
      return A.q(A.b([s.a, s.b, s.c, s.d, s.e, s.f], t.f));
    },
  };
  A.T.prototype = {
    aB() {
      return "LanguageCode." + this.b;
    },
    l(a) {
      return this.c;
    },
  };
  A.eJ.prototype = {
    $0() {
      switch (this.a) {
        case 0:
          return "A";
        case 1:
          return "B";
        case 2:
          return "C";
        case 3:
          return "D";
        case 4:
          return "E";
        case 5:
          return "F";
        case 6:
          return "G";
        default:
          return "";
      }
    },
    $S: 38,
  };
  A.eK.prototype = {
    $0() {
      var s = this;
      switch (s.a) {
        case 0:
          return s.b - 1;
        case 1:
          return s.b;
        case 2:
          return s.b;
        case 3:
          return s.b + 1;
        case 4:
          return s.b;
        case 5:
          return s.b;
        case 6:
          return s.b - 1;
        default:
          return "";
      }
    },
    $S: 39,
  };
  (function aliases() {
    var s = A.i.prototype;
    s.av = s.aS;
  })();
  (function installTearOffs() {
    var s = hunkHelpers._static_2,
      r = hunkHelpers._static_1;
    s(J, "j5", "i6", 9);
    r(A, "jr", "iV", 29);
  })();
  (function inheritance() {
    var s = hunkHelpers.inherit,
      r = hunkHelpers.inheritMany;
    s(A.v, null);
    r(A.v, [
      A.f4,
      J.aU,
      J.af,
      A.t,
      A.i,
      A.b0,
      A.b1,
      A.b8,
      A.aS,
      A.aP,
      A.an,
      A.eA,
      A.dV,
      A.bf,
      A.a8,
      A.V,
      A.dR,
      A.b_,
      A.M,
      A.bb,
      A.eS,
      A.ay,
      A.eR,
      A.be,
      A.aM,
      A.aO,
      A.eP,
      A.eL,
      A.az,
      A.eM,
      A.dC,
      A.aw,
      A.aA,
      A.eN,
      A.aC,
      A.dX,
      A.Y,
      A.l,
      A.o,
      A.a9,
      A.m,
    ]);
    r(J.aU, [J.aV, J.ar, J.at, J.as, J.aa]);
    r(J.at, [J.av, J.z]);
    r(J.av, [J.dW, J.a2]);
    s(J.dO, J.z);
    r(J.as, [J.aq, J.aW]);
    r(A.t, [
      A.aZ,
      A.aB,
      A.aX,
      A.b5,
      A.b9,
      A.b3,
      A.ba,
      A.au,
      A.aK,
      A.a7,
      A.b6,
      A.b4,
      A.aN,
    ]);
    r(A.i, [A.ao, A.r, A.a, A.ap]);
    r(A.ao, [A.p, A.U]);
    r(A.p, [A.k, A.bd]);
    s(A.y, A.an);
    s(A.ax, A.aB);
    r(A.a8, [
      A.cn,
      A.co,
      A.ez,
      A.eY,
      A.eZ,
      A.f_,
      A.eW,
      A.bn,
      A.bo,
      A.bp,
      A.bq,
      A.bl,
      A.cb,
      A.ce,
      A.cc,
      A.cf,
      A.cd,
      A.ci,
      A.cg,
      A.cl,
      A.cm,
      A.ck,
      A.cj,
      A.ch,
      A.bx,
      A.by,
      A.bz,
      A.bv,
      A.bw,
      A.bC,
      A.bD,
      A.bE,
      A.bF,
      A.bG,
      A.br,
      A.bs,
      A.bt,
      A.bI,
      A.bJ,
      A.bA,
      A.bQ,
      A.bR,
      A.bS,
      A.bO,
      A.bP,
      A.bV,
      A.bW,
      A.bX,
      A.bY,
      A.bZ,
      A.bK,
      A.bL,
      A.bM,
      A.c0,
      A.c1,
      A.bT,
      A.c7,
      A.c3,
      A.c4,
      A.c5,
      A.c6,
      A.c9,
      A.c2,
      A.cr,
      A.cs,
      A.ct,
      A.cu,
      A.cv,
      A.cw,
      A.cx,
      A.cz,
      A.cq,
      A.cA,
      A.cB,
      A.cp,
      A.cJ,
      A.cK,
      A.cC,
      A.cD,
      A.cT,
      A.cS,
      A.cU,
      A.cR,
      A.cV,
      A.cW,
      A.cX,
      A.cY,
      A.cF,
      A.cG,
      A.cH,
      A.cE,
      A.cI,
      A.cP,
      A.cO,
      A.cQ,
      A.cN,
      A.df,
      A.dg,
      A.dh,
      A.di,
      A.de,
      A.d3,
      A.d4,
      A.d5,
      A.d2,
      A.d7,
      A.d8,
      A.d9,
      A.da,
      A.d1,
      A.db,
      A.dc,
      A.dd,
      A.dB,
      A.dw,
      A.dx,
      A.dj,
      A.dk,
      A.dl,
      A.dm,
      A.dn,
      A.dp,
      A.dq,
      A.dr,
      A.ds,
      A.dt,
      A.du,
      A.dv,
      A.dy,
      A.dz,
      A.dA,
      A.cZ,
      A.d_,
      A.d0,
      A.eh,
      A.ei,
      A.e_,
      A.e0,
      A.e1,
      A.e2,
      A.e3,
      A.e4,
      A.ej,
      A.ek,
      A.en,
      A.eo,
      A.ep,
      A.eq,
      A.er,
      A.es,
      A.et,
      A.eu,
      A.em,
      A.ev,
      A.ew,
      A.e5,
      A.e6,
      A.e7,
      A.e8,
      A.ex,
      A.ed,
      A.eb,
      A.ec,
      A.ef,
      A.eg,
      A.eG,
      A.eC,
      A.eI,
      A.eH,
      A.eE,
      A.eD,
      A.eF,
      A.bk,
      A.bj,
      A.dK,
      A.dL,
      A.dM,
      A.dN,
      A.dE,
      A.dF,
      A.dG,
      A.dH,
      A.dI,
      A.dJ,
    ]);
    r(A.ez, [A.ey, A.am]);
    r(A.V, [A.S, A.bc]);
    s(A.aE, A.ba);
    s(A.aD, A.ay);
    s(A.ac, A.aD);
    r(A.co, [A.dS, A.dU, A.eQ, A.bm, A.bu, A.bH, A.bB, A.bN, A.c_, A.bU, A.c8]);
    s(A.aY, A.au);
    s(A.dP, A.aM);
    s(A.dQ, A.aO);
    s(A.eO, A.eP);
    r(A.a7, [A.ai, A.aT]);
    r(A.cn, [A.ca, A.cL, A.cM, A.cy, A.d6, A.el, A.e9, A.ea, A.ee, A.eJ, A.eK]);
    s(A.T, A.eL);
  })();
  var v = {
    typeUniverse: { eC: new Map(), tR: {}, eT: {}, tPV: {}, sEA: [] },
    mangledGlobalNames: {
      G: "int",
      ju: "double",
      jF: "num",
      d: "String",
      J: "bool",
      aw: "Null",
      B: "List",
      v: "Object",
      n: "Map",
    },
    mangledNames: {},
    types: [
      "J(m)",
      "J(d)",
      "J(l)",
      "d(m)",
      "J(o)",
      "d?(d?)",
      "d(@)",
      "d(o)",
      "G(n<d,@>,n<d,@>)",
      "G(@,@)",
      "J(n<d,@>)",
      "n<d,@>(l)",
      "J(@)",
      "d(l)",
      "n<d,@>(d)",
      "G(l,l)",
      "~(v?,v?)",
      "n<d,@>(m)",
      "m(@)",
      "J(B<d>)",
      "~(@,@)",
      "B<d>(B<d>)",
      "l(@)",
      "B<d>(m)",
      "l()",
      "G()",
      "G?()",
      "B<d>()",
      "B<m>()",
      "@(@)",
      "m()",
      "a9()",
      "B<@>()",
      "a9?()",
      "o(o)",
      "m(m)",
      "n<d,@>(o)",
      "o(@)",
      "d()",
      "v()",
      "G(m,m)",
    ],
    arrayRti: Symbol("$ti"),
  };
  A.iN(
    v.typeUniverse,
    JSON.parse(
      '{"dW":"av","a2":"av","aV":{"W":[]},"ar":{"W":[]},"z":{"B":["1"]},"dO":{"z":["1"],"B":["1"]},"aq":{"G":[],"W":[]},"aW":{"W":[]},"aa":{"d":[],"W":[]},"aZ":{"t":[]},"ao":{"i":["1"]},"p":{"i":["1"]},"r":{"i":["2"],"i.E":"2"},"k":{"p":["2"],"i":["2"],"p.E":"2","i.E":"2"},"a":{"i":["1"],"i.E":"1"},"ap":{"i":["2"],"i.E":"2"},"an":{"n":["1","2"]},"y":{"n":["1","2"]},"ax":{"t":[]},"aX":{"t":[]},"b5":{"t":[]},"b9":{"t":[]},"b3":{"t":[]},"S":{"V":["1","2"],"n":["1","2"],"V.V":"2"},"U":{"i":["1"],"i.E":"1"},"ba":{"t":[]},"aE":{"t":[]},"ac":{"ay":["1"]},"V":{"n":["1","2"]},"aD":{"ay":["1"]},"bc":{"V":["d","@"],"n":["d","@"],"V.V":"@"},"bd":{"p":["d"],"i":["d"],"p.E":"d","i.E":"d"},"au":{"t":[]},"aY":{"t":[]},"aK":{"t":[]},"aB":{"t":[]},"a7":{"t":[]},"ai":{"t":[]},"aT":{"t":[]},"b6":{"t":[]},"b4":{"t":[]},"aN":{"t":[]},"az":{"t":[]}}'
    )
  );
  A.iM(
    v.typeUniverse,
    JSON.parse('{"ao":1,"b8":1,"aP":1,"an":2,"b_":1,"aD":1,"aM":2,"aO":2}')
  );
  var u = { c: "max must be in range 0 < max \u2264 2^32, was " };
  var t = (function rtii() {
    var s = A.h9;
    return {
      B: s("l"),
      R: s("y<d,@>"),
      C: s("t"),
      Z: s("jM"),
      F: s("z<l>"),
      p: s("z<o>"),
      t: s("z<B<@>>"),
      f: s("z<v>"),
      s: s("z<d>"),
      e: s("z<m>"),
      b: s("z<@>"),
      Y: s("z<G>"),
      T: s("ar"),
      g: s("jN"),
      j: s("B<@>"),
      a: s("n<d,@>"),
      c: s("n<d,G>"),
      G: s("n<@,@>"),
      P: s("aw"),
      K: s("v"),
      L: s("jO"),
      N: s("d"),
      k: s("W"),
      o: s("a2"),
      y: s("J"),
      i: s("ju"),
      z: s("@"),
      S: s("G"),
      A: s("0&*"),
      _: s("v*"),
      O: s("fB<aw>?"),
      X: s("v?"),
      H: s("jF"),
    };
  })();
  (function constants() {
    var s = hunkHelpers.makeConstList;
    B.E = J.aU.prototype;
    B.a = J.z.prototype;
    B.b = J.aq.prototype;
    B.F = J.as.prototype;
    B.f = J.aa.prototype;
    B.G = J.at.prototype;
    B.t = new A.aP();
    B.u = function getTagFallback(o) {
      var s = Object.prototype.toString.call(o);
      return s.substring(8, s.length - 1);
    };
    B.i = new A.dP();
    B.v = new A.eN();
    B.w = new A.o("6\u20133", "neutral");
    B.x = new A.o("4\u20133", "neutral");
    B.y = new A.o("2\u20134", "neutral");
    B.z = new A.o("4\u20136", "blue");
    B.A = new A.o("0\u20134", "neutral");
    B.B = new A.o("5\u20134", "neutral");
    B.C = new A.o("1\u20135", "blue");
    B.D = new A.o("2\u20131", "red");
    B.H = new A.dQ(null);
    B.j = new A.T("en", "en");
    B.k = new A.T("fr", "fr");
    B.l = new A.T("hr", "hr");
    B.m = new A.T("it", "it");
    B.h = new A.T("ja", "ja");
    B.n = new A.T("ko", "ko");
    B.o = new A.T("zh", "zh");
    B.p = A.b(
      s([
        "archer",
        "berserker",
        "cavalry",
        "crossbow",
        "ensign",
        "footman",
        "knight",
        "lancer",
        "light_cavalry",
        "marshall",
        "mercenary",
        "pike",
        "royal_guard",
        "scout",
        "sword",
        "warrior_priest",
        "blue_royal",
        "red_royal",
      ]),
      t.s
    );
    B.q = A.b(s([]), t.s);
    B.I = A.b(s([]), t.e);
    B.J = A.b(
      s([
        "archer",
        "berserker",
        "cavalry",
        "crossbow",
        "ensign",
        "footman",
        "knight",
        "lancer",
        "light_cavalry",
        "marshall",
        "mercenary",
        "pike",
        "royal_guard",
        "scout",
        "sword",
        "warrior_priest",
      ]),
      t.s
    );
    B.e = A.b(
      s([
        "0\u20132",
        "0\u20133",
        "0\u20134",
        "0\u20135",
        "1\u20131",
        "1\u20132",
        "1\u20133",
        "1\u20134",
        "1\u20135",
        "2\u20131",
        "2\u20132",
        "2\u20133",
        "2\u20134",
        "2\u20135",
        "2\u20136",
        "3\u20130",
        "3\u20131",
        "3\u20132",
        "3\u20133",
        "3\u20134",
        "3\u20135",
        "3\u20136",
        "4\u20131",
        "4\u20132",
        "4\u20133",
        "4\u20134",
        "4\u20135",
        "4\u20136",
        "5\u20131",
        "5\u20132",
        "5\u20133",
        "5\u20134",
        "5\u20135",
        "6\u20132",
        "6\u20133",
        "6\u20134",
        "6\u20135",
      ]),
      t.s
    );
    B.c = { unit_class: 0, symbol: 1, quantity: 2, name: 3, color: 4 };
    B.M = new A.y(B.c, ["sword", "\u5263", 5, "\u5263\u5175", 4281749628], t.R);
    B.U = new A.y(
      B.c,
      ["crossbow", "\u5f29", 5, "\u5f29\u5175", 4288371555],
      t.R
    );
    B.P = new A.y(
      B.c,
      ["knight", "\u91cd", 4, "\u91cd\u88c5\u5175", 4278230737],
      t.R
    );
    B.S = new A.y(
      B.c,
      ["archer", "\u5f13", 4, "\u5f13\u5175", 4285051289],
      t.R
    );
    B.a_ = new A.y(
      B.c,
      ["cavalry", "\u9a0e", 4, "\u9a0e\u5175", 4292117058],
      t.R
    );
    B.a1 = new A.y(
      B.c,
      ["light_cavalry", "\u8efd", 5, "\u8efd\u9a0e\u5175", 4288461163],
      t.R
    );
    B.O = new A.y(
      B.c,
      ["lancer", "\u7a81", 4, "\u7a81\u6483\u9a0e\u5175", 4292823870],
      t.R
    );
    B.V = new A.y(B.c, ["pike", "\u69cd", 4, "\u69cd\u5175", 4292392008], t.R);
    B.L = new A.y(
      B.c,
      ["berserker", "\u72c2", 5, "\u72c2\u6226\u58eb", 4282288474],
      t.R
    );
    B.W = new A.y(
      B.c,
      ["royal_guard", "\u885b", 5, "\u885b\u5175", 4292705403],
      t.R
    );
    B.Y = new A.y(
      B.c,
      ["ensign", "\u65d7", 5, "\u65d7\u5175", 4290757479],
      t.R
    );
    B.X = new A.y(
      B.c,
      ["marshall", "\u5e25", 5, "\u7dcf\u5e25", 4291126855],
      t.R
    );
    B.Q = new A.y(
      B.c,
      ["footman", "\u5f93", 5, "\u5f93\u5175", 4278227353],
      t.R
    );
    B.a0 = new A.y(
      B.c,
      ["warrior_priest", "\u50e7", 4, "\u50e7\u5175", 4285814373],
      t.R
    );
    B.N = new A.y(
      B.c,
      ["mercenary", "\u50ad", 5, "\u50ad\u5175", 4287704113],
      t.R
    );
    B.R = new A.y(
      B.c,
      ["scout", "\u5075", 5, "\u5075\u5bdf\u5175", 4278481072],
      t.R
    );
    B.T = new A.y(
      B.c,
      ["blue_royal", "\u52c5", 1, "\u52c5\u4ee4", 4282170580],
      t.R
    );
    B.Z = new A.y(
      B.c,
      ["red_royal", "\u52c5", 1, "\u52c5\u4ee4", 4292886779],
      t.R
    );
    B.r = A.b(
      s([
        B.M,
        B.U,
        B.P,
        B.S,
        B.a_,
        B.a1,
        B.O,
        B.V,
        B.L,
        B.W,
        B.Y,
        B.X,
        B.Q,
        B.a0,
        B.N,
        B.R,
        B.T,
        B.Z,
      ]),
      A.h9("z<n<d,@>>")
    );
    B.K = A.b(
      s([
        "none",
        "pass",
        "take_initiative",
        "recruit",
        "deploy",
        "dominate",
        "bolster",
        "move",
        "instruction_move",
        "attack",
        "instruction_attack",
      ]),
      t.s
    );
    B.d = new A.m("none", "none", "neutral", "none", "none", !1);
  })();
  (function staticFields() {
    $.ae = A.b([], t.f);
    $.fH = null;
    $.fq = null;
    $.fp = null;
  })();
  (function lazyInitializers() {
    var s = hunkHelpers.lazyFinal;
    s($, "jP", "hf", () =>
      A.X(
        A.eB({
          toString: function () {
            return "$receiver$";
          },
        })
      )
    );
    s($, "jQ", "hg", () =>
      A.X(
        A.eB({
          $method$: null,
          toString: function () {
            return "$receiver$";
          },
        })
      )
    );
    s($, "jR", "hh", () => A.X(A.eB(null)));
    s($, "jS", "hi", () =>
      A.X(
        (function () {
          var $argumentsExpr$ = "$arguments$";
          try {
            null.$method$($argumentsExpr$);
          } catch (r) {
            return r.message;
          }
        })()
      )
    );
    s($, "jV", "hl", () => A.X(A.eB(void 0)));
    s($, "jW", "hm", () =>
      A.X(
        (function () {
          var $argumentsExpr$ = "$arguments$";
          try {
            (void 0).$method$($argumentsExpr$);
          } catch (r) {
            return r.message;
          }
        })()
      )
    );
    s($, "jU", "hk", () => A.X(A.fN(null)));
    s($, "jT", "hj", () =>
      A.X(
        (function () {
          try {
            null.$method$;
          } catch (r) {
            return r.message;
          }
        })()
      )
    );
    s($, "jY", "ho", () => A.X(A.fN(void 0)));
    s($, "jX", "hn", () =>
      A.X(
        (function () {
          try {
            (void 0).$method$;
          } catch (r) {
            return r.message;
          }
        })()
      )
    );
  })();
  (function nativeSupport() {
    hunkHelpers.setOrUpdateInterceptorsByTag({});
    hunkHelpers.setOrUpdateLeafTags({});
  })();
  Function.prototype.$0 = function () {
    return this();
  };
  Function.prototype.$1 = function (a) {
    return this(a);
  };
  Function.prototype.$2 = function (a, b) {
    return this(a, b);
  };
  Function.prototype.$3 = function (a, b, c) {
    return this(a, b, c);
  };
  Function.prototype.$4 = function (a, b, c, d) {
    return this(a, b, c, d);
  };
  convertAllToFastObject(w);
  convertToFastObject($);
  return (function (a) {
    if (typeof document === "undefined") {
      return a(null);
    }
    if (typeof document.currentScript != "undefined") {
      a(document.currentScript);
      return;
    }
    var s = document.scripts;
    function onLoad(b) {
      for (var q = 0; q < s.length; ++q) {
        s[q].removeEventListener("load", onLoad, false);
      }
      a(b.target);
    }
    for (var r = 0; r < s.length; ++r) {
      s[r].addEventListener("load", onLoad, false);
    }
  })(function (a) {
    v.currentScript = a;
    var s = function (b) {
      return A.jE(A.jq(b));
    };
    if (typeof dartMainRunner === "function") {
      dartMainRunner(s, []);
    } else {
      return s(param);
    }
  });
};
//# sourceMappingURL=WarChestGameEngine.dart.js.map
