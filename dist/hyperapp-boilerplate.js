// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      function localRequire(x) {
        return newRequire(localRequire.resolve(x));
      }

      localRequire.resolve = function (x) {
        return modules[name][1][x] || x;
      };

      var module = cache[name] = new newRequire.Module;
      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({6:[function(require,module,exports) {
/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-env browser */
'use strict';

if ('serviceWorker' in navigator) {
  // Delay registration until after the page has loaded, to ensure that our
  // precaching requests don't degrade the first visit experience.
  // See https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/registration
  window.addEventListener('load', function () {
    // Your service-worker.js *must* be located at the top-level directory relative to your site.
    // It won't be able to control pages unless it's located at the same level or higher than them.
    // *Don't* register service worker file in, e.g., a scripts/ sub-directory!
    // See https://github.com/slightlyoff/ServiceWorker/issues/468
    navigator.serviceWorker.register('service-worker.js').then(function (reg) {
      // updatefound is fired if service-worker.js changes.
      reg.onupdatefound = function () {
        // The updatefound event implies that reg.installing is set; see
        // https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
        var installingWorker = reg.installing;

        installingWorker.onstatechange = function () {
          switch (installingWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                // At this point, the old content will have been purged and the fresh content will
                // have been added to the cache.
                // It's the perfect time to display a "New content is available; please refresh."
                // message in the page's interface.
                console.log('New or updated content is available.');
              } else {
                // At this point, everything has been precached.
                // It's the perfect time to display a "Content is cached for offline use." message.
                console.log('Content is now available offline!');
              }
              break;

            case 'redundant':
              console.error('The installing service worker became redundant.');
              break;
          }
        };
      };
    }).catch(function (e) {
      console.error('Error during service worker registration:', e);
    });
  });
}
},{}],7:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = {
  add: function add(_ref) {
    var num = _ref.num,
        clicks = _ref.clicks;
    return { num: num + 1, clicks: clicks + 1 };
  },
  sub: function sub(_ref2) {
    var num = _ref2.num,
        clicks = _ref2.clicks;
    return { num: num - 1, clicks: clicks + 1 };
  }
};

exports.default = actions;
},{}],8:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var state = {
  num: 0,
  clicks: 0
};

exports.default = state;
},{}],10:[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, n) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n(e.hyperapp = {});
}(undefined, function (e) {
  "use strict";
  function n(e, n) {
    var t,
        a = [];for (r = arguments.length; r-- > 2;) {
      o.push(arguments[r]);
    }for (; o.length;) {
      if (Array.isArray(t = o.pop())) for (r = t.length; r--;) {
        o.push(t[r]);
      } else null != t && !0 !== t && !1 !== t && ("number" == typeof t && (t += ""), a.push(t));
    }return "string" == typeof e ? { tag: e, data: n || {}, children: a } : e(n, a);
  }function t(e) {
    function n(e, t, r) {
      Object.keys(t || []).map(function (a) {
        var f = t[a],
            u = r ? r + "." + a : a;"function" == typeof f ? e[a] = function (e) {
          i("action", { name: u, data: e });var n = i("resolve", f(v, b, e));return "function" == typeof n ? n(o) : o(n);
        } : n(e[a] || (e[a] = {}), f, u);
      });
    }function t(e) {
      for (h = p(x, h, y, y = i("render", m)(v, b), g = !g); e = a.pop();) {
        e();
      }
    }function r() {
      m && !g && requestAnimationFrame(t, g = !g);
    }function o(e) {
      return "function" == typeof e ? o(e(v)) : (e && (e = i("update", f(v, e))) && r(v = e), v);
    }function i(e, n) {
      return (k[e] || []).map(function (e) {
        var t = e(v, b, n);null != t && (n = t);
      }), n;
    }function f(e, n) {
      var t = {};for (var r in e) {
        t[r] = e[r];
      }for (var r in n) {
        t[r] = n[r];
      }return t;
    }function u(e) {
      if (e && (e = e.data)) return e.key;
    }function c(e, n) {
      if ("string" == typeof e) var t = document.createTextNode(e);else {
        var t = (n = n || "svg" === e.tag) ? document.createElementNS("http://www.w3.org/2000/svg", e.tag) : document.createElement(e.tag);e.data && e.data.oncreate && a.push(function () {
          e.data.oncreate(t);
        });for (var r in e.data) {
          l(t, r, e.data[r]);
        }for (var r = 0; r < e.children.length;) {
          t.appendChild(c(e.children[r++], n));
        }
      }return t;
    }function l(e, n, t, r) {
      if ("key" === n) ;else if ("style" === n) for (var o in f(r, t = t || {})) {
        e.style[o] = t[o] || "";
      } else {
        try {
          e[n] = t;
        } catch (e) {}"function" != typeof t && (t ? e.setAttribute(n, t) : e.removeAttribute(n));
      }
    }function d(e, n, t) {
      for (var r in f(n, t)) {
        var o = t[r],
            i = "value" === r || "checked" === r ? e[r] : n[r];o !== i && l(e, r, o, i);
      }t && t.onupdate && a.push(function () {
        t.onupdate(e, n);
      });
    }function s(e, n, t) {
      t && t.onremove ? t.onremove(n) : e.removeChild(n);
    }function p(e, n, t, r, o, a) {
      if (null == t) n = e.insertBefore(c(r, o), n);else if (null != r.tag && r.tag === t.tag) {
        d(n, t.data, r.data), o = o || "svg" === r.tag;for (var i = r.children.length, f = t.children.length, l = {}, v = [], h = {}, y = 0; y < f; y++) {
          var g = v[y] = n.childNodes[y],
              m = t.children[y],
              b = u(m);null != b && (l[b] = [g, m]);
        }for (var y = 0, k = 0; k < i;) {
          var g = v[y],
              m = t.children[y],
              w = r.children[k],
              b = u(m);if (h[b]) y++;else {
            var x = u(w),
                A = l[x] || [];null == x ? (null == b && (p(n, g, m, w, o), k++), y++) : (b === x ? (p(n, A[0], A[1], w, o), y++) : A[0] ? (n.insertBefore(A[0], g), p(n, A[0], A[1], w, o)) : p(n, g, null, w, o), k++, h[x] = w);
          }
        }for (; y < f;) {
          var m = t.children[y],
              b = u(m);null == b && s(n, v[y], m.data), y++;
        }for (var y in l) {
          var A = l[y],
              j = A[1];h[j.data.key] || s(n, A[0], j.data);
        }
      } else n && r !== n.nodeValue && ("string" == typeof r && "string" == typeof t ? n.nodeValue = r : (n = e.insertBefore(c(r, o), a = n), s(e, a, t.data)));return n;
    }var v,
        h,
        y,
        g,
        m = e.view,
        b = {},
        k = {},
        w = e.mixins || [],
        x = e.root || document.body;return w.concat(e).map(function (e) {
      e = "function" == typeof e ? e(i) : e, Object.keys(e.events || []).map(function (n) {
        k[n] = (k[n] || []).concat(e.events[n]);
      }), v = f(v, e.state), n(b, e.actions);
    }), r((y = i("load", h = x.children[0])) === h && (y = h = null)), i;
  }var r,
      o = [],
      a = [];e.h = n, e.app = t;
});
//# sourceMappingURL=hyperapp.js.map
},{}],11:[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.picostyle = e();
}(undefined, function () {
  "use strict";
  function t(t) {
    return t.replace(/[A-Z]/g, "-$&").toLowerCase();
  }function e(t) {
    i.insertRule(t, 0);
  }function n(e, n, r) {
    var o = [];for (var u in n) {
      "object" != _typeof(n[u]) && o.push(t(u) + ":" + n[u] + ";");
    }var i = "." + e + "{" + o.join("") + "}";return r ? r + "{" + i + "}" : i;
  }function r(t, e) {
    return t + (/^\w/.test(e) ? " " : "") + e;
  }function o(t, i, f, c) {
    i = i || "", c = c || "p" + (u++).toString(36);for (var s in t) {
      var a = t[s];if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        var p = /^@/.test(s) ? s : null;o(a, p ? i : r(i, s), p, c);
      }
    }return e(n(r(c, i), t, f)), c;
  }var u = 0,
      i = document.head.appendChild(document.createElement("style")).sheet;return function (t) {
    return function (e) {
      return function (n) {
        var r,
            u = "function" == typeof n;return !u && (r = o(n)), function (i, f) {
          i = i || {}, u && (r = o(n(i)));var c = t(e, i, f);return c.props.class = ((c.props.class || "") + " " + (i.class || "") + " " + r).trim(), c;
        };
      };
    };
  };
});
//# sourceMappingURL=picostyle.js.map
},{}],9:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = require("hyperapp");

var _picostyle = require("picostyle");

var _picostyle2 = _interopRequireDefault(_picostyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = (0, _picostyle2.default)(_hyperapp.h);

var ButtonElement = style('button')({
  borderColor: 'black',
  borderRadius: '3px',
  borderStyle: 'solid',
  borderWidth: '1px',
  width: '30px',
  height: '30px',
  outlineColor: '',
  cursor: 'pointer',
  '> .add': {
    backgroundColor: '',
    fontSize: '20px',
    color: 'black'
  },
  '> .sub': {
    backgroundColor: '',
    fontSize: '20px',
    color: 'black'
  }
});

var Button = function Button(_ref) {
  var label = _ref.label,
      update = _ref.update,
      disabled = _ref.disabled;
  return (0, _hyperapp.h)(
    "button",
    { onclick: update, disabled: disabled ? disabled : false },
    label
  );
};

var clickCount = function clickCount(clicks) {
  return clicks > 0 ? (0, _hyperapp.h)(
    "div",
    null,
    "You clicked ",
    clicks,
    " time",
    clicks > 1 ? 's' : ''
  ) : '';
};

var view = function view(state, actions) {
  return (0, _hyperapp.h)(
    "div",
    null,
    (0, _hyperapp.h)(
      "h1",
      null,
      "Welcome to HyperApp!"
    ),
    (0, _hyperapp.h)("hr", null),
    (0, _hyperapp.h)(
      ButtonElement,
      { className: "hello" },
      "Hello"
    ),
    (0, _hyperapp.h)(
      "section",
      null,
      Button({ label: '+', update: actions.add }),
      (0, _hyperapp.h)(
        "h1",
        null,
        state.num
      ),
      Button({ label: '-', update: actions.sub, disabled: state.num <= 0 }),
      clickCount(state.clicks)
    )
  );
};

exports.default = view;
},{"hyperapp":10,"picostyle":11}],4:[function(require,module,exports) {
"use strict";

require("./service-worker-registration");

var _hyperapp = require("hyperapp");

var _counter = require("./actions/counter");

var _counter2 = _interopRequireDefault(_counter);

var _counter3 = require("./states/counter");

var _counter4 = _interopRequireDefault(_counter3);

var _counter5 = require("./views/counter");

var _counter6 = _interopRequireDefault(_counter5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({ state: _counter4.default, actions: _counter2.default, view: _counter6.default });
},{"./service-worker-registration":6,"./actions/counter":7,"./states/counter":8,"./views/counter":9,"hyperapp":10}],0:[function(require,module,exports) {
var global = (1,eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent) {
  var ws = new WebSocket('ws://localhost:54925/');
  ws.onmessage = (e) => {
    var data = JSON.parse(e.data);

    if (data.type === 'update') {
      for (let asset of data.assets) {
        hmrApply(global.require, asset);
      }

      for (let asset of data.assets) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error(`[parcel] 🚨 ${data.error.message}\n${data.error.stack}`);
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  let parents = [];
  for (let k in modules) {
    for (let d in modules[k][1]) {
      let dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    let fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  let cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(id => hmrAccept(global.require, id));
}
},{}]},{},[0,4])