// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gbXMy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
/**
 * @typedef Command
 * @property {string} command
 * @property {string} responseType
 * @property {string?} value
 * @property {string[]?} headers
 * @property {string[]?} rows
 */ /**
 * @type {Command[]} commands
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _commandsJson = require("./resources/commands.json");
var _commandsJsonDefault = parcelHelpers.interopDefault(_commandsJson);
var _customComands = require("./custom-comands");
var _draggable = require("./draggable");
// Tableau contenant les commandes (utile pour la complétion des commandes)
let commandsList = [];
(0, _commandsJsonDefault.default).forEach((c)=>{
    console.log(c);
    commandsList.push(c.command);
});
// Commandes qui nécessitent un traitement JS
const customCommands = [
    "effacer",
    "dark",
    "light",
    "cv"
];
commandsList = commandsList.concat(customCommands);
// Commandes 'easter eggs' non disponibles à l'autocomplétion
const hiddenCommands = [
    "pif",
    "rm -rf /"
];
// Ajout de la possibilité de déplacer la fenêtre pour les PC
if (window.innerWidth > 1024) (0, _draggable.dragElement)(document.querySelector(".terminal"));
// Tableau contenant l'historique des commandes
const commandsHistory = [];
let historyMode = false;
let historyIndex = -1;
const terminalBody = document.querySelector(".terminal__body");
// Ajout de la ligne par défaut
addNewLine();
// Easter egg de décembre, ajout de flocons de neige
const now = new Date();
if (now.getMonth() === 11) {
    let htmlFlakes = "";
    for(let i = 0; i < 6; i++)htmlFlakes += `<div class="snowflake">\u{2745}</div><div class="snowflake">\u{2746}</div>`;
    const html = `<div class="snowflakes" aria-hidden="true">${htmlFlakes}</div>`;
    document.body.append(stringToDom(html));
}
/**
 * Retourne le HTML de la réponse pour une commande donnée
 * @param {string} command
 */ function getDomForCommand(command) {
    const commandObj = (0, _commandsJsonDefault.default).find((el)=>el.command === command);
    let html = "";
    if (commandObj === undefined) html = `'${command.split(" ")[0]}' n\u{2019}est pas reconnu en tant que commande interne ou externe, un programme ex\xe9cutable ou un fichier de commandes. Tapez la commande <code>help</code> pour afficher la liste des commandes disponibles.`;
    else {
        if (commandObj.responseType === "list" && Array.isArray(commandObj.value)) {
            html = "<ul>";
            html += commandObj.value.map((s)=>`<li>${s}</li>`).join("");
            html += "</ul>";
        } else if (commandObj.responseType === "text") html = commandObj.value;
        else if (commandObj.responseType === "table") {
            const headers = commandObj.headers;
            const rows = commandObj.rows;
            const thsHtml = headers.map((h)=>`<th>${h}</th>`).join("");
            const tdsHtml = rows.map((r)=>`<tr>${r.map((rtd)=>`<td>${rtd}</td>`).join("")}</tr>`).join("");
            html = `<table><thead><tr>${thsHtml}</tr></thead><tbody>${tdsHtml}</tbody></table>`;
        } else if (commandObj.responseType === "code") html = `<pre>${commandObj.value.join("\n")}</pre>`;
    }
    return html;
}
/**
 * Ajoute une nouvelle ligne input de commande et désactive la précédente.
 * @param {string|null} previousUid uid de la ligne précédente.
 */ function addNewLine(previousUid = null) {
    const uid = Math.random().toString(36).replace("0.", "");
    // terminal__line
    const terminalLineEl = document.createElement("div");
    terminalLineEl.classList.add("terminal__line");
    // terminal__response
    const terminalResponseEl = document.createElement("div");
    terminalResponseEl.classList.add("terminal__response");
    terminalResponseEl.id = `response-${uid}`;
    // input text
    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.id = `input-${uid}`;
    inputEl.autocapitalize = "off";
    inputEl.dataset.uid = uid;
    inputEl.dataset.active = "1"; // Utile pour le focus
    inputEl.addEventListener("keydown", onCommandInput);
    terminalLineEl.appendChild(inputEl);
    if (previousUid) {
        const previousInputEl = document.getElementById(previousUid);
        if (previousInputEl) {
            previousInputEl.setAttribute("disabled", "true");
            previousInputEl.removeEventListener("keydown", onCommandInput);
            delete previousInputEl.dataset.active;
        }
    }
    document.getElementById("terminal").appendChild(terminalLineEl);
    document.getElementById("terminal").appendChild(terminalResponseEl);
    inputEl.focus(); // Ajoute le focus dès la création du champs
}
/**
 * Gère le keydown sur l'input de la commande.
 * @param e
 */ function onCommandInput(e) {
    const commandValue = e.target.value.trim().toLowerCase();
    if (e.keyCode === 13) // ENTER
    {
        if (commandValue !== "") {
            historyMode = false;
            const idResponse = `response-${e.target.dataset.uid}`;
            const responseEl = document.getElementById(idResponse);
            let html;
            if (hiddenCommands.includes(commandValue) || customCommands.includes(commandValue)) html = handleCustomCommands(commandValue);
            else html = getDomForCommand(commandValue);
            if (responseEl) {
                responseEl.innerHTML = html;
                commandsHistory.push(commandValue);
                addNewLine(e.target.id);
            }
        }
    } else if (e.keyCode === 9) {
        // TAB
        e.preventDefault();
        if (commandValue === "") this.value = "help";
        else {
            const matchingCommand = commandsList.find((c)=>c.startsWith(commandValue));
            if (matchingCommand) this.value = matchingCommand;
        }
        historyMode = false;
    } else if (e.keyCode === 38 || e.keyCode === 40) {
        // UP / DOWN
        // Gestion de l'historique
        if (commandsHistory.length > 0) {
            if (historyMode === false) historyIndex = commandsHistory.length - 1;
            else {
                if (e.keyCode === 38 && historyIndex !== 0) // UP
                historyIndex--;
                else if (e.keyCode === 40 && historyIndex !== commandsHistory.length - 1) historyIndex++;
            }
            this.value = commandsHistory[historyIndex];
        }
        historyMode = true;
    }
}
/**
 * Permet de gérer les commandes cachées (non proposées dans l'autocomplétion)
 * @param {string} command
 * @returns {string|void} Html à afficher dans la réponse de la commande
 */ function handleCustomCommands(command) {
    switch(command){
        case "pif":
            (0, _customComands.pif)();
            return "C'est la f\xeate !";
        case "light":
            if (document.body.classList.length === 0) return "Vous \xeates d\xe9j\xe0 en mode clair";
            (0, _customComands.setDarkMode)(false);
            return "Vous \xeates maintenant en mode clair.";
        case "dark":
            if (document.body.classList.length === 1) return "Vous \xeates d\xe9j\xe0 en mode sombre";
            (0, _customComands.setDarkMode)(true);
            return "Vous \xeates maintenant en mode sombre.";
        case "cv":
            (0, _customComands.getCV)();
            return "Le CV va \xeatre t\xe9l\xe9charg\xe9.";
        case "get cv sec":
            (0, _customComands.getCV)();
            return "Le CV va \xeatre t\xe9l\xe9charg\xe9.";
        case "rm -rf /":
            (0, _customComands.rmRf)();
            return "w4dhIHZhIFDDiVRFUiAh";
        case "effacer":
            terminalBody.innerHTML = `<div id="terminal"></div>`;
            return;
    }
}
/**
 * Convert HTML to DOM object
 * @param html
 * @returns {DocumentFragment}
 */ function stringToDom(html) {
    return document.createRange().createContextualFragment(html);
}
// ------------------------------------------------------------------------------------
//                                EVENT LISTENNER
// ------------------------------------------------------------------------------------
// Ajout du focus sur l'input même si on clique sur le body (pour garder le curseur)
document.body.addEventListener("click", function(e) {
    if (e.target.tagName !== "INPUT") {
        const activeInput = document.querySelector("input[data-active]");
        activeInput.focus();
    }
});
document.querySelector(".fake-close").addEventListener("click", function(e) {
    const terminalEl = document.querySelector(".terminal");
    terminalEl.parentElement.removeChild(terminalEl);
});

},{"./resources/commands.json":"6jRee","./custom-comands":"9MjcF","./draggable":"1qqD7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6jRee":[function(require,module,exports) {
module.exports = JSON.parse('[{"command":"help","responseType":"list","value":["<code>about</code> : Affiche les informations me concernant","<code>clean</code> : Nettoie le terminal","<code>experiences</code> : Affiche la liste de mes exp\xe9riences","<code>skills</code> : Affiche la liste de mes comp\xe9tences","<code>skills encours</code> : Affiche la liste de mes comp\xe9tences encours","<code>certifications</code> : Affiche la liste de mes certifications obtenues","<code>cv</code> : T\xe9l\xe9charge le CV","<code>help</code> : Affiche l\'aide","<code>hobby</code> : Affiche la liste de mes passes temps","<code>dark/light</code> : Change le th\xe8me de la page","<em>Vous pouvez utiliser la touche TAB afin de compl\xe9ter une commande</em>","<em>Vous pouvez retrouver les anciennes commandes avec les fl\xe8ches haut et bas.</em>"]},{"command":"about","responseType":"code","value":["{","   \\"nom\\" : \\"DIABAKATE Ikary Ryann Kouadio Kamory\\",","   \\"poste\\" : \\"D\xe9veloppeur WEB/MOBILE - DevOps - Pentesteur\\",","   \\"experience\\" : \\"7 ans\\",","   \\"ville\\" : \\"Abidjan, C\xf4te d\'Ivoire\\"","}"]},{"command":"experiences","responseType":"table","headers":["Date","Poste & Client","Description","Tech"],"rows":[["06/2020<br/>","D\xc9VELOPPEUR D\u2019APP MOBILE S\xc9CURIS\xc9E & DEVSECOPS<br/><em><code>SOUGAHPAY</code></em>","Projet de cr\xe9ation d\u2019une application mobile de transfert d\u2019argent. R\xe9guler le serveur et l\'application web au norme PCI-DSS, S\xe9curit\xe9 des APIs, Test de p\xe9n\xe9tration.","Server(IDS/IPS - bash - Linux - git/gitlab), App Mobile(Flutter & Dart)"],["03/2019<br/>","D\xc9VELOPPEUR D\u2019APP MOBILE S\xc9CURIS\xc9E<br/> <em><code>CAMPUS MONDE</code> </em>","Projet de cr\xe9ation d\u2019une application mobile de Radio CAMPUS MONDE.","Firebase <br/> Flutter & Dart<<br/>"],["07/2018<br/>","D\xc9VELOPPEUR D\u2019APP LIVRAISON MOBILE S\xc9CURIS\xc9E<br/><code><em>WENI</em></code>","Projet de Cr\xe9ation d\u2019une application mobile de Livraison s\xe9curis\xe9 entreprise weni (weni.ci).","backend(Firebase), Front-end(Dashboard admin - vuejs/ App mobile - Flutter & Dart)."],["01/2019<br/>05/2020","RESPONSABLE PENTESTEUR JUNIOR S\xc9CURIT\xc9 & INTRUSION<br/><code><em>NYS-AFRICA</em></code>","\xc9laboration de proc\xe9dure et politique de s\xe9curit\xe9. Mise en place d\u2019une strat\xe9gie pour des actions telles que (sensibilisation des utilisateurs aux probl\xe8mes de s\xe9curit\xe9, de sauvegarde de donn\xe9es, reprise apr\xe8s sinistre). Recherche de preuves digitales Analyse et r\xe9cup\xe9ration de preuves num\xe9rique Test de p\xe9n\xe9tration des Syst\xe8mes Informatiques (Serveur, Serveur web, Base de donn\xe9es, R\xe9seau, IoT, Application web). Scanner de vuln\xe9rabilit\xe9 des syst\xe8mes IT.","Metasploit<br/>Injection SQL<br/>NMAP<br/>Acunetix<br/>Cloudflare<br/>Google hacking<br/>Sqlmap"],["05/2017<br/>12/2017","STAGIAIRE D\xc9VELOPPEUR<br/><code><em>CI-ENERGIES</em></code>","Cr\xe9ation d\u2019un logiciel pour la gestion du parc informatique et consommables. L\u2019installation des postes et autres, charg\xe9 d\u2019assistance aux utilisateurs, au d\xe9pannage r\xe9seau et de la maintenance des diff\xe9rents \xe9quipements.","PHP<br/>HTML<br/>NMAP<br/>CSS"]]},{"command":"skills","responseType":"list","value":["Programmation: C, C++, JS, PYTHON, PHP, FLUTTER & DART","Editeur: NANO, VI, EMACS, VSCODE, VISUAL STUDIO, ANDROID STUDIO, ATOM","Framework: LARAVEL, ADONIS JS, VUE JS","DevOps: DOCKER, SHELL, VAGRANT, GIT, GCC","Linux: DEBIAN, UBUNTU, PARROT OS, KALI OS","Database: MYSQL/MARIADB, ORACLE, POSTGRSQL","Server: APACHE, NODEJS","S\xe9curit\xe9: WIRESHARK, BURP SUITE, METASPLOIT, OWASP, NMAP, SQLMAP, CLOUDFLARE, SNORT","Framework: MYSQL/MARIADB, ORACLE, POSTGRSQL","Other: FIREBASE, GITHUB, GITLAB, BITBUCKET, SOCKET, API, POSTMAN, INSOMNIA"]},{"command":"skills encours","responseType":"list","value":["Programmation: C#, .NET, JAVA","Agile: SCRUM MASTER"]},{"command":"certifications","responseType":"list","value":["ALX-SE: SOFTWARE ENGINEERING | htts://intranetalswe.com/certificates/32PGneXHx6","CEHv10: CERTIFIED ETHICAL HACKER | N\xb0ECC1934570826","CSCUv2: CERTIFIED SECURE COMPUTER USER | N\xb0ECC5192670843","GADTP: GOOGLE AFRICA DEVELOPER TRAINING PROGRAM | ID E34E6BEE11CF498A","PSE: POSTMAN STUDENT EXPERT | ID idiabakate@gmail.com"]},{"command":"hobby","responseType":"list","value":["Musique: Piano","Technologies: Actualit\xe9s","Autre: Football, Sports"]},{"command":"","responseType":"table","headers":["Nom","Description","Tech","Liens"],"rows":[["Chartsfinder - Web<br/>(2021)","Application web pour trouver rapidement des cartes a\xe9ronautiques. Une version C# existait d\xe9j\xe0 mais j\'ai pr\xe9f\xe9r\xe9 la mettre \xe0 jour avec une version web qui est plus simple d\'utilisation.","Angular 11, PHP 7.4","<a href=\\"https://chartsfinder.adautry.fr\\" target=\\"blank\\">Lien</a>"],["Personal website<br/>(2021)","Site web personnel me permettant de montrer mes projets et de d\xe9ployer une nouvelle version du logiciel.<br/>Il y a m\xeame un jeu cach\xe9...","Symfony 5","<a href=\\"https://adautry.fr\\" target=\\"blank\\">Lien</a>"],["Chartsfinder - Software<br/>(2020)","Logiciel permettant de r\xe9cup\xe9rer rapidement les cartes a\xe9ronautiques.","C# WPF","<a href=\\"https://adautry.fr/software/chartsfinder\\" target=\\"blank\\">Lien</a>"]]}]');

},{}],"9MjcF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Affiche des confettis sur la page
 */ parcelHelpers.export(exports, "pif", ()=>pif);
parcelHelpers.export(exports, "setDarkMode", ()=>setDarkMode);
parcelHelpers.export(exports, "getCV", ()=>getCV);
/*export function getCVSec() {
  const a = document.createElement("a");
  a.href = "resources/CV-DIRKK.pdf";
  a.setAttribute("download", "CV-DIRKK.pdf");
  a.click();
}*/ parcelHelpers.export(exports, "rmRf", ()=>rmRf);
var _canvasConfetti = require("canvas-confetti");
var _canvasConfettiDefault = parcelHelpers.interopDefault(_canvasConfetti);
var _fireworksJs = require("fireworks-js");
function pif() {
    const count = 200;
    const defaults = {
        origin: {
            y: 0.7
        }
    };
    function fire(particleRatio, opts) {
        (0, _canvasConfettiDefault.default)(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }
    fire(0.25, {
        spread: 26,
        startVelocity: 55
    });
    fire(0.2, {
        spread: 60
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45
    });
}
function setDarkMode(value) {
    if (value) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
}
function getCV() {
    const a = document.createElement("a");
    a.href = "resources/CV-DIRKK.pdf";
    a.setAttribute("download", "CV-DIRKK.pdf");
    a.click();
}
function rmRf() {
    setDarkMode(true);
    document.body.classList.add("firework");
    const fireworks = new (0, _fireworksJs.Fireworks)(document.body, {
        mouse: {
            click: true,
            move: false,
            max: 7
        }
    });
    fireworks.start();
}

},{"canvas-confetti":"cIEGq","fireworks-js":"7PZsK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cIEGq":[function(require,module,exports) {
// canvas-confetti v1.9.3 built on 2024-04-30T22:19:17.794Z
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create);
var module = {};
// source content
/* globals Map */ (function main(global, module, isWorker, workerSize) {
    var canUseWorker = !!(global.Worker && global.Blob && global.Promise && global.OffscreenCanvas && global.OffscreenCanvasRenderingContext2D && global.HTMLCanvasElement && global.HTMLCanvasElement.prototype.transferControlToOffscreen && global.URL && global.URL.createObjectURL);
    var canUsePaths = typeof Path2D === "function" && typeof DOMMatrix === "function";
    var canDrawBitmap = function() {
        // this mostly supports ssr
        if (!global.OffscreenCanvas) return false;
        var canvas = new OffscreenCanvas(1, 1);
        var ctx = canvas.getContext("2d");
        ctx.fillRect(0, 0, 1, 1);
        var bitmap = canvas.transferToImageBitmap();
        try {
            ctx.createPattern(bitmap, "no-repeat");
        } catch (e) {
            return false;
        }
        return true;
    }();
    function noop() {}
    // create a promise if it exists, otherwise, just
    // call the function directly
    function promise(func) {
        var ModulePromise = module.exports.Promise;
        var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;
        if (typeof Prom === "function") return new Prom(func);
        func(noop, noop);
        return null;
    }
    var bitmapMapper = function(skipTransform, map) {
        // see https://github.com/catdad/canvas-confetti/issues/209
        // creating canvases is actually pretty expensive, so we should create a
        // 1:1 map for bitmap:canvas, so that we can animate the confetti in
        // a performant manner, but also not store them forever so that we don't
        // have a memory leak
        return {
            transform: function(bitmap) {
                if (skipTransform) return bitmap;
                if (map.has(bitmap)) return map.get(bitmap);
                var canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
                var ctx = canvas.getContext("2d");
                ctx.drawImage(bitmap, 0, 0);
                map.set(bitmap, canvas);
                return canvas;
            },
            clear: function() {
                map.clear();
            }
        };
    }(canDrawBitmap, new Map());
    var raf = function() {
        var TIME = Math.floor(1000 / 60);
        var frame, cancel;
        var frames = {};
        var lastFrameTime = 0;
        if (typeof requestAnimationFrame === "function" && typeof cancelAnimationFrame === "function") {
            frame = function(cb) {
                var id = Math.random();
                frames[id] = requestAnimationFrame(function onFrame(time) {
                    if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
                        lastFrameTime = time;
                        delete frames[id];
                        cb();
                    } else frames[id] = requestAnimationFrame(onFrame);
                });
                return id;
            };
            cancel = function(id) {
                if (frames[id]) cancelAnimationFrame(frames[id]);
            };
        } else {
            frame = function(cb) {
                return setTimeout(cb, TIME);
            };
            cancel = function(timer) {
                return clearTimeout(timer);
            };
        }
        return {
            frame: frame,
            cancel: cancel
        };
    }();
    var getWorker = function() {
        var worker;
        var prom;
        var resolves = {};
        function decorate(worker) {
            function execute(options, callback) {
                worker.postMessage({
                    options: options || {},
                    callback: callback
                });
            }
            worker.init = function initWorker(canvas) {
                var offscreen = canvas.transferControlToOffscreen();
                worker.postMessage({
                    canvas: offscreen
                }, [
                    offscreen
                ]);
            };
            worker.fire = function fireWorker(options, size, done) {
                if (prom) {
                    execute(options, null);
                    return prom;
                }
                var id = Math.random().toString(36).slice(2);
                prom = promise(function(resolve) {
                    function workerDone(msg) {
                        if (msg.data.callback !== id) return;
                        delete resolves[id];
                        worker.removeEventListener("message", workerDone);
                        prom = null;
                        bitmapMapper.clear();
                        done();
                        resolve();
                    }
                    worker.addEventListener("message", workerDone);
                    execute(options, id);
                    resolves[id] = workerDone.bind(null, {
                        data: {
                            callback: id
                        }
                    });
                });
                return prom;
            };
            worker.reset = function resetWorker() {
                worker.postMessage({
                    reset: true
                });
                for(var id in resolves){
                    resolves[id]();
                    delete resolves[id];
                }
            };
        }
        return function() {
            if (worker) return worker;
            if (!isWorker && canUseWorker) {
                var code = [
                    "var CONFETTI, SIZE = {}, module = {};",
                    "(" + main.toString() + ")(this, module, true, SIZE);",
                    "onmessage = function(msg) {",
                    "  if (msg.data.options) {",
                    "    CONFETTI(msg.data.options).then(function () {",
                    "      if (msg.data.callback) {",
                    "        postMessage({ callback: msg.data.callback });",
                    "      }",
                    "    });",
                    "  } else if (msg.data.reset) {",
                    "    CONFETTI && CONFETTI.reset();",
                    "  } else if (msg.data.resize) {",
                    "    SIZE.width = msg.data.resize.width;",
                    "    SIZE.height = msg.data.resize.height;",
                    "  } else if (msg.data.canvas) {",
                    "    SIZE.width = msg.data.canvas.width;",
                    "    SIZE.height = msg.data.canvas.height;",
                    "    CONFETTI = module.exports.create(msg.data.canvas);",
                    "  }",
                    "}"
                ].join("\n");
                try {
                    worker = new Worker(URL.createObjectURL(new Blob([
                        code
                    ])));
                } catch (e) {
                    // eslint-disable-next-line no-console
                    typeof console.warn === "function" && console.warn("\uD83C\uDF8A Could not load worker", e);
                    return null;
                }
                decorate(worker);
            }
            return worker;
        };
    }();
    var defaults = {
        particleCount: 50,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        decay: 0.9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        x: 0.5,
        y: 0.5,
        shapes: [
            "square",
            "circle"
        ],
        zIndex: 100,
        colors: [
            "#26ccff",
            "#a25afd",
            "#ff5e7e",
            "#88ff5a",
            "#fcff42",
            "#ffa62d",
            "#ff36ff"
        ],
        // probably should be true, but back-compat
        disableForReducedMotion: false,
        scalar: 1
    };
    function convert(val, transform) {
        return transform ? transform(val) : val;
    }
    function isOk(val) {
        return !(val === null || val === undefined);
    }
    function prop(options, name, transform) {
        return convert(options && isOk(options[name]) ? options[name] : defaults[name], transform);
    }
    function onlyPositiveInt(number) {
        return number < 0 ? 0 : Math.floor(number);
    }
    function randomInt(min, max) {
        // [min, max)
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function toDecimal(str) {
        return parseInt(str, 16);
    }
    function colorsToRgb(colors) {
        return colors.map(hexToRgb);
    }
    function hexToRgb(str) {
        var val = String(str).replace(/[^0-9a-f]/gi, "");
        if (val.length < 6) val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2];
        return {
            r: toDecimal(val.substring(0, 2)),
            g: toDecimal(val.substring(2, 4)),
            b: toDecimal(val.substring(4, 6))
        };
    }
    function getOrigin(options) {
        var origin = prop(options, "origin", Object);
        origin.x = prop(origin, "x", Number);
        origin.y = prop(origin, "y", Number);
        return origin;
    }
    function setCanvasWindowSize(canvas) {
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
    }
    function setCanvasRectSize(canvas) {
        var rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }
    function getCanvas(zIndex) {
        var canvas = document.createElement("canvas");
        canvas.style.position = "fixed";
        canvas.style.top = "0px";
        canvas.style.left = "0px";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = zIndex;
        return canvas;
    }
    function ellipse(context, x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
        context.save();
        context.translate(x, y);
        context.rotate(rotation);
        context.scale(radiusX, radiusY);
        context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
        context.restore();
    }
    function randomPhysics(opts) {
        var radAngle = opts.angle * (Math.PI / 180);
        var radSpread = opts.spread * (Math.PI / 180);
        return {
            x: opts.x,
            y: opts.y,
            wobble: Math.random() * 10,
            wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
            velocity: opts.startVelocity * 0.5 + Math.random() * opts.startVelocity,
            angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
            tiltAngle: (Math.random() * 0.5 + 0.25) * Math.PI,
            color: opts.color,
            shape: opts.shape,
            tick: 0,
            totalTicks: opts.ticks,
            decay: opts.decay,
            drift: opts.drift,
            random: Math.random() + 2,
            tiltSin: 0,
            tiltCos: 0,
            wobbleX: 0,
            wobbleY: 0,
            gravity: opts.gravity * 3,
            ovalScalar: 0.6,
            scalar: opts.scalar,
            flat: opts.flat
        };
    }
    function updateFetti(context, fetti) {
        fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
        fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
        fetti.velocity *= fetti.decay;
        if (fetti.flat) {
            fetti.wobble = 0;
            fetti.wobbleX = fetti.x + 10 * fetti.scalar;
            fetti.wobbleY = fetti.y + 10 * fetti.scalar;
            fetti.tiltSin = 0;
            fetti.tiltCos = 0;
            fetti.random = 1;
        } else {
            fetti.wobble += fetti.wobbleSpeed;
            fetti.wobbleX = fetti.x + 10 * fetti.scalar * Math.cos(fetti.wobble);
            fetti.wobbleY = fetti.y + 10 * fetti.scalar * Math.sin(fetti.wobble);
            fetti.tiltAngle += 0.1;
            fetti.tiltSin = Math.sin(fetti.tiltAngle);
            fetti.tiltCos = Math.cos(fetti.tiltAngle);
            fetti.random = Math.random() + 2;
        }
        var progress = fetti.tick++ / fetti.totalTicks;
        var x1 = fetti.x + fetti.random * fetti.tiltCos;
        var y1 = fetti.y + fetti.random * fetti.tiltSin;
        var x2 = fetti.wobbleX + fetti.random * fetti.tiltCos;
        var y2 = fetti.wobbleY + fetti.random * fetti.tiltSin;
        context.fillStyle = "rgba(" + fetti.color.r + ", " + fetti.color.g + ", " + fetti.color.b + ", " + (1 - progress) + ")";
        context.beginPath();
        if (canUsePaths && fetti.shape.type === "path" && typeof fetti.shape.path === "string" && Array.isArray(fetti.shape.matrix)) context.fill(transformPath2D(fetti.shape.path, fetti.shape.matrix, fetti.x, fetti.y, Math.abs(x2 - x1) * 0.1, Math.abs(y2 - y1) * 0.1, Math.PI / 10 * fetti.wobble));
        else if (fetti.shape.type === "bitmap") {
            var rotation = Math.PI / 10 * fetti.wobble;
            var scaleX = Math.abs(x2 - x1) * 0.1;
            var scaleY = Math.abs(y2 - y1) * 0.1;
            var width = fetti.shape.bitmap.width * fetti.scalar;
            var height = fetti.shape.bitmap.height * fetti.scalar;
            var matrix = new DOMMatrix([
                Math.cos(rotation) * scaleX,
                Math.sin(rotation) * scaleX,
                -Math.sin(rotation) * scaleY,
                Math.cos(rotation) * scaleY,
                fetti.x,
                fetti.y
            ]);
            // apply the transform matrix from the confetti shape
            matrix.multiplySelf(new DOMMatrix(fetti.shape.matrix));
            var pattern = context.createPattern(bitmapMapper.transform(fetti.shape.bitmap), "no-repeat");
            pattern.setTransform(matrix);
            context.globalAlpha = 1 - progress;
            context.fillStyle = pattern;
            context.fillRect(fetti.x - width / 2, fetti.y - height / 2, width, height);
            context.globalAlpha = 1;
        } else if (fetti.shape === "circle") context.ellipse ? context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) : ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
        else if (fetti.shape === "star") {
            var rot = Math.PI / 2 * 3;
            var innerRadius = 4 * fetti.scalar;
            var outerRadius = 8 * fetti.scalar;
            var x = fetti.x;
            var y = fetti.y;
            var spikes = 5;
            var step = Math.PI / spikes;
            while(spikes--){
                x = fetti.x + Math.cos(rot) * outerRadius;
                y = fetti.y + Math.sin(rot) * outerRadius;
                context.lineTo(x, y);
                rot += step;
                x = fetti.x + Math.cos(rot) * innerRadius;
                y = fetti.y + Math.sin(rot) * innerRadius;
                context.lineTo(x, y);
                rot += step;
            }
        } else {
            context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
            context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
            context.lineTo(Math.floor(x2), Math.floor(y2));
            context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
        }
        context.closePath();
        context.fill();
        return fetti.tick < fetti.totalTicks;
    }
    function animate(canvas, fettis, resizer, size, done) {
        var animatingFettis = fettis.slice();
        var context = canvas.getContext("2d");
        var animationFrame;
        var destroy;
        var prom = promise(function(resolve) {
            function onDone() {
                animationFrame = destroy = null;
                context.clearRect(0, 0, size.width, size.height);
                bitmapMapper.clear();
                done();
                resolve();
            }
            function update() {
                if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
                    size.width = canvas.width = workerSize.width;
                    size.height = canvas.height = workerSize.height;
                }
                if (!size.width && !size.height) {
                    resizer(canvas);
                    size.width = canvas.width;
                    size.height = canvas.height;
                }
                context.clearRect(0, 0, size.width, size.height);
                animatingFettis = animatingFettis.filter(function(fetti) {
                    return updateFetti(context, fetti);
                });
                if (animatingFettis.length) animationFrame = raf.frame(update);
                else onDone();
            }
            animationFrame = raf.frame(update);
            destroy = onDone;
        });
        return {
            addFettis: function(fettis) {
                animatingFettis = animatingFettis.concat(fettis);
                return prom;
            },
            canvas: canvas,
            promise: prom,
            reset: function() {
                if (animationFrame) raf.cancel(animationFrame);
                if (destroy) destroy();
            }
        };
    }
    function confettiCannon(canvas, globalOpts) {
        var isLibCanvas = !canvas;
        var allowResize = !!prop(globalOpts || {}, "resize");
        var hasResizeEventRegistered = false;
        var globalDisableForReducedMotion = prop(globalOpts, "disableForReducedMotion", Boolean);
        var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, "useWorker");
        var worker = shouldUseWorker ? getWorker() : null;
        var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
        var initialized = canvas && worker ? !!canvas.__confetti_initialized : false;
        var preferLessMotion = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion)").matches;
        var animationObj;
        function fireLocal(options, size, done) {
            var particleCount = prop(options, "particleCount", onlyPositiveInt);
            var angle = prop(options, "angle", Number);
            var spread = prop(options, "spread", Number);
            var startVelocity = prop(options, "startVelocity", Number);
            var decay = prop(options, "decay", Number);
            var gravity = prop(options, "gravity", Number);
            var drift = prop(options, "drift", Number);
            var colors = prop(options, "colors", colorsToRgb);
            var ticks = prop(options, "ticks", Number);
            var shapes = prop(options, "shapes");
            var scalar = prop(options, "scalar");
            var flat = !!prop(options, "flat");
            var origin = getOrigin(options);
            var temp = particleCount;
            var fettis = [];
            var startX = canvas.width * origin.x;
            var startY = canvas.height * origin.y;
            while(temp--)fettis.push(randomPhysics({
                x: startX,
                y: startY,
                angle: angle,
                spread: spread,
                startVelocity: startVelocity,
                color: colors[temp % colors.length],
                shape: shapes[randomInt(0, shapes.length)],
                ticks: ticks,
                decay: decay,
                gravity: gravity,
                drift: drift,
                scalar: scalar,
                flat: flat
            }));
            // if we have a previous canvas already animating,
            // add to it
            if (animationObj) return animationObj.addFettis(fettis);
            animationObj = animate(canvas, fettis, resizer, size, done);
            return animationObj.promise;
        }
        function fire(options) {
            var disableForReducedMotion = globalDisableForReducedMotion || prop(options, "disableForReducedMotion", Boolean);
            var zIndex = prop(options, "zIndex", Number);
            if (disableForReducedMotion && preferLessMotion) return promise(function(resolve) {
                resolve();
            });
            if (isLibCanvas && animationObj) // use existing canvas from in-progress animation
            canvas = animationObj.canvas;
            else if (isLibCanvas && !canvas) {
                // create and initialize a new canvas
                canvas = getCanvas(zIndex);
                document.body.appendChild(canvas);
            }
            if (allowResize && !initialized) // initialize the size of a user-supplied canvas
            resizer(canvas);
            var size = {
                width: canvas.width,
                height: canvas.height
            };
            if (worker && !initialized) worker.init(canvas);
            initialized = true;
            if (worker) canvas.__confetti_initialized = true;
            function onResize() {
                if (worker) {
                    // TODO this really shouldn't be immediate, because it is expensive
                    var obj = {
                        getBoundingClientRect: function() {
                            if (!isLibCanvas) return canvas.getBoundingClientRect();
                        }
                    };
                    resizer(obj);
                    worker.postMessage({
                        resize: {
                            width: obj.width,
                            height: obj.height
                        }
                    });
                    return;
                }
                // don't actually query the size here, since this
                // can execute frequently and rapidly
                size.width = size.height = null;
            }
            function done() {
                animationObj = null;
                if (allowResize) {
                    hasResizeEventRegistered = false;
                    global.removeEventListener("resize", onResize);
                }
                if (isLibCanvas && canvas) {
                    if (document.body.contains(canvas)) document.body.removeChild(canvas);
                    canvas = null;
                    initialized = false;
                }
            }
            if (allowResize && !hasResizeEventRegistered) {
                hasResizeEventRegistered = true;
                global.addEventListener("resize", onResize, false);
            }
            if (worker) return worker.fire(options, size, done);
            return fireLocal(options, size, done);
        }
        fire.reset = function() {
            if (worker) worker.reset();
            if (animationObj) animationObj.reset();
        };
        return fire;
    }
    // Make default export lazy to defer worker creation until called.
    var defaultFire;
    function getDefaultFire() {
        if (!defaultFire) defaultFire = confettiCannon(null, {
            useWorker: true,
            resize: true
        });
        return defaultFire;
    }
    function transformPath2D(pathString, pathMatrix, x, y, scaleX, scaleY, rotation) {
        var path2d = new Path2D(pathString);
        var t1 = new Path2D();
        t1.addPath(path2d, new DOMMatrix(pathMatrix));
        var t2 = new Path2D();
        // see https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix/DOMMatrix
        t2.addPath(t1, new DOMMatrix([
            Math.cos(rotation) * scaleX,
            Math.sin(rotation) * scaleX,
            -Math.sin(rotation) * scaleY,
            Math.cos(rotation) * scaleY,
            x,
            y
        ]));
        return t2;
    }
    function shapeFromPath(pathData) {
        if (!canUsePaths) throw new Error("path confetti are not supported in this browser");
        var path, matrix;
        if (typeof pathData === "string") path = pathData;
        else {
            path = pathData.path;
            matrix = pathData.matrix;
        }
        var path2d = new Path2D(path);
        var tempCanvas = document.createElement("canvas");
        var tempCtx = tempCanvas.getContext("2d");
        if (!matrix) {
            // attempt to figure out the width of the path, up to 1000x1000
            var maxSize = 1000;
            var minX = maxSize;
            var minY = maxSize;
            var maxX = 0;
            var maxY = 0;
            var width, height;
            // do some line skipping... this is faster than checking
            // every pixel and will be mostly still correct
            for(var x = 0; x < maxSize; x += 2){
                for(var y = 0; y < maxSize; y += 2)if (tempCtx.isPointInPath(path2d, x, y, "nonzero")) {
                    minX = Math.min(minX, x);
                    minY = Math.min(minY, y);
                    maxX = Math.max(maxX, x);
                    maxY = Math.max(maxY, y);
                }
            }
            width = maxX - minX;
            height = maxY - minY;
            var maxDesiredSize = 10;
            var scale = Math.min(maxDesiredSize / width, maxDesiredSize / height);
            matrix = [
                scale,
                0,
                0,
                scale,
                -Math.round(width / 2 + minX) * scale,
                -Math.round(height / 2 + minY) * scale
            ];
        }
        return {
            type: "path",
            path: path,
            matrix: matrix
        };
    }
    function shapeFromText(textData) {
        var text, scalar = 1, color = "#000000", // see https://nolanlawson.com/2022/04/08/the-struggle-of-using-native-emoji-on-the-web/
        fontFamily = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
        if (typeof textData === "string") text = textData;
        else {
            text = textData.text;
            scalar = "scalar" in textData ? textData.scalar : scalar;
            fontFamily = "fontFamily" in textData ? textData.fontFamily : fontFamily;
            color = "color" in textData ? textData.color : color;
        }
        // all other confetti are 10 pixels,
        // so this pixel size is the de-facto 100% scale confetti
        var fontSize = 10 * scalar;
        var font = "" + fontSize + "px " + fontFamily;
        var canvas = new OffscreenCanvas(fontSize, fontSize);
        var ctx = canvas.getContext("2d");
        ctx.font = font;
        var size = ctx.measureText(text);
        var width = Math.ceil(size.actualBoundingBoxRight + size.actualBoundingBoxLeft);
        var height = Math.ceil(size.actualBoundingBoxAscent + size.actualBoundingBoxDescent);
        var padding = 2;
        var x = size.actualBoundingBoxLeft + padding;
        var y = size.actualBoundingBoxAscent + padding;
        width += padding + padding;
        height += padding + padding;
        canvas = new OffscreenCanvas(width, height);
        ctx = canvas.getContext("2d");
        ctx.font = font;
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
        var scale = 1 / scalar;
        return {
            type: "bitmap",
            // TODO these probably need to be transfered for workers
            bitmap: canvas.transferToImageBitmap(),
            matrix: [
                scale,
                0,
                0,
                scale,
                -width * scale / 2,
                -height * scale / 2
            ]
        };
    }
    module.exports = function() {
        return getDefaultFire().apply(this, arguments);
    };
    module.exports.reset = function() {
        getDefaultFire().reset();
    };
    module.exports.create = confettiCannon;
    module.exports.shapeFromPath = shapeFromPath;
    module.exports.shapeFromText = shapeFromText;
})(function() {
    if (typeof window !== "undefined") return window;
    if (typeof self !== "undefined") return self;
    return this || {};
}(), module, false);
// end source content
exports.default = module.exports;
var create = module.exports.create;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7PZsK":[function(require,module,exports) {
/*!
 * fireworks-js 1.4.1 by Vitalij Ryndin (https://crashmax.ru)
 * https://fireworks.js.org
 * License MIT
 */ !function(t, i) {
    var s, e;
    module.exports = i();
}(this, function() {
    return (()=>{
        "use strict";
        var t = {
            511: (t, i, s)=>{
                Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i.Explosion = void 0;
                var e = s(909);
                i.Explosion = class {
                    constructor(t){
                        var { x: i, y: s, ctx: n, hue: h, gravity: o, friction: a, brightness: r, flickering: c, lineWidth: _, explosionLength: d } = t;
                        for(this._coordinates = [], this._alpha = 1, this._x = i, this._y = s, this._ctx = n, this._gravity = o, this._friction = a, this._flickering = c, this._lineWidth = _, this._explosionLength = d; this._explosionLength--;)this._coordinates.push([
                            i,
                            s
                        ]);
                        this._angle = (0, e.randomFloat)(0, 2 * Math.PI), this._speed = (0, e.randomInt)(1, 10), this._hue = (0, e.randomInt)(h - 20, h + 20), this._brightness = (0, e.randomInt)(r.min, r.max), this._decay = (0, e.randomFloat)(r.decay.min, r.decay.max);
                    }
                    update(t) {
                        this._coordinates.pop(), this._coordinates.unshift([
                            this._x,
                            this._y
                        ]), this._speed *= this._friction, this._x += Math.cos(this._angle) * this._speed, this._y += Math.sin(this._angle) * this._speed + this._gravity, this._alpha -= this._decay, this._alpha <= this._decay && t();
                    }
                    draw() {
                        var t = this._coordinates.length - 1;
                        this._ctx.beginPath(), this._ctx.lineWidth = this._lineWidth, this._ctx.fillStyle = (0, e.hsla)(this._hue, this._brightness, this._alpha), this._ctx.moveTo(this._coordinates[t][0], this._coordinates[t][1]), this._ctx.lineTo(this._x, this._y), this._ctx.strokeStyle = (0, e.hsla)(this._hue, this._flickering ? (0, e.randomFloat)(0, this._brightness) : this._brightness, this._alpha), this._ctx.stroke();
                    }
                };
            },
            909: (t, i)=>{
                Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i.hsla = i.getDistance = i.randomInt = i.randomFloat = void 0, i.randomFloat = function(t, i) {
                    return Math.random() * (i - t) + t;
                }, i.randomInt = function(t, i) {
                    return Math.floor(t + Math.random() * (i + 1 - t));
                }, i.getDistance = function(t, i, s, e) {
                    var n = Math.pow;
                    return Math.sqrt(n(t - s, 2) + n(i - e, 2));
                }, i.hsla = function(t, i) {
                    var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                    return "hsla(".concat(t, ", 100%, ").concat(i, "%, ").concat(s, ")");
                };
            },
            449: function(t, i, s) {
                var e = this && this.__awaiter || function(t, i, s, e) {
                    return new (s || (s = Promise))(function(n, h) {
                        function o(t) {
                            try {
                                r(e.next(t));
                            } catch (t) {
                                h(t);
                            }
                        }
                        function a(t) {
                            try {
                                r(e.throw(t));
                            } catch (t) {
                                h(t);
                            }
                        }
                        function r(t) {
                            var i;
                            t.done ? n(t.value) : (i = t.value, i instanceof s ? i : new s(function(t) {
                                t(i);
                            })).then(o, a);
                        }
                        r((e = e.apply(t, i || [])).next());
                    });
                };
                Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i.Sound = void 0;
                var n = s(909);
                i.Sound = class {
                    constructor(t){
                        this._buffer = [], this.onInit = !0, this.options = Object.assign({
                            enabled: !1,
                            files: [
                                "explosion0.mp3",
                                "explosion1.mp3",
                                "explosion2.mp3"
                            ],
                            volume: {
                                min: 4,
                                max: 8
                            }
                        }, t), this.init();
                    }
                    init() {
                        this.onInit && this.options.enabled && (this.onInit = !1, this._audioContext = new (window.AudioContext || window.webkitAudioContext), this.load());
                    }
                    load() {
                        return e(this, void 0, void 0, function*() {
                            for (var t of this.options.files){
                                var i = yield (yield fetch(t)).arrayBuffer();
                                this._audioContext.decodeAudioData(i).then((t)=>{
                                    this._buffer.push(t);
                                }).catch((t)=>{
                                    throw t;
                                });
                            }
                        });
                    }
                    play() {
                        if (this.options.enabled && this._buffer.length) {
                            var t = this._audioContext.createBufferSource(), i = this._buffer[(0, n.randomInt)(0, this._buffer.length - 1)], s = this._audioContext.createGain();
                            t.buffer = i, s.gain.value = (0, n.randomFloat)(this.options.volume.min / 100, this.options.volume.max / 100), s.connect(this._audioContext.destination), t.connect(s), t.start(0);
                        } else this.init();
                    }
                };
            },
            668: (t, i, s)=>{
                Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i.Trace = void 0;
                var e = s(909);
                i.Trace = class {
                    constructor(t){
                        var { x: i, y: s, dx: n, dy: h, ctx: o, hue: a, speed: r, traceLength: c, acceleration: _ } = t;
                        for(this._coordinates = [], this._currentDistance = 0, this._x = i, this._y = s, this._sx = i, this._sy = s, this._dx = n, this._dy = h, this._ctx = o, this._hue = a, this._speed = r, this._traceLength = c, this._acceleration = _, this._totalDistance = (0, e.getDistance)(i, s, n, h); this._traceLength--;)this._coordinates.push([
                            i,
                            s
                        ]);
                        this._angle = Math.atan2(h - s, n - i), this._brightness = (0, e.randomInt)(50, 70);
                    }
                    update(t) {
                        this._coordinates.pop(), this._coordinates.unshift([
                            this._x,
                            this._y
                        ]), this._speed *= this._acceleration;
                        var i = Math.cos(this._angle) * this._speed, s = Math.sin(this._angle) * this._speed;
                        this._currentDistance = (0, e.getDistance)(this._sx, this._sy, this._x + i, this._y + s), this._currentDistance >= this._totalDistance ? t(this._dx, this._dy, this._hue) : (this._x += i, this._y += s);
                    }
                    draw() {
                        var t = this._coordinates.length - 1;
                        this._ctx.beginPath(), this._ctx.moveTo(this._coordinates[t][0], this._coordinates[t][1]), this._ctx.lineTo(this._x, this._y), this._ctx.strokeStyle = (0, e.hsla)(this._hue, this._brightness), this._ctx.stroke();
                    }
                };
            }
        }, i = {};
        function s(e) {
            var n = i[e];
            if (void 0 !== n) return n.exports;
            var h = i[e] = {
                exports: {}
            };
            return t[e].call(h.exports, h, h.exports, s), h.exports;
        }
        var e = {};
        return (()=>{
            var t = e;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Fireworks = void 0;
            var i = s(668), n = s(449), h = s(511), o = s(909);
            t.Fireworks = class {
                constructor(t){
                    var { autoresize: i = !0, boundaries: s, brightness: e, delay: h, hue: o, mouse: a, sound: r, rocketsPoint: c, lineWidth: _, lineStyle: d = "round", flickering: l = 50, trace: u = 3, traceSpeed: m = 10, intensity: p = 30, explosion: x = 5, gravity: v = 1.5, opacity: g = .5, particles: f = 50, friction: y = .95, acceleration: b = 1.05 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this._tick = 0, this._timestamp = performance.now(), this._version = "1.4.1", this._running = !1, this._m = !1, t instanceof HTMLCanvasElement ? (this._container = t, this._canvas = t) : (this._container = t, this._canvas = document.createElement("canvas"), this._container.appendChild(this._canvas)), this._ctx = this._canvas.getContext("2d"), this._sound = new n.Sound(r), this.setSize(), this.setBoundaries(Object.assign({
                        visible: !1,
                        x: 50,
                        y: 50
                    }, s)), this.autoresize = i, this.trace = u, this.explosion = x, this.gravity = v, this.opacity = g, this.particles = f, this.friction = y, this.acceleration = b, this.flickering = l, this.intensity = p, this.traceSpeed = m, this.lineStyle = d, this.hue = Object.assign({
                        min: 0,
                        max: 360
                    }, o), this.rocketsPoint = Object.assign({
                        min: 50,
                        max: 50
                    }, c), this.lineWidth = Object.assign({
                        explosion: {
                            min: 1,
                            max: 3
                        },
                        trace: {
                            min: 1,
                            max: 2
                        }
                    }, _), this.mouse = Object.assign({
                        click: !1,
                        move: !1,
                        max: 1
                    }, a), this.delay = Object.assign({
                        min: 15,
                        max: 30
                    }, h), this.brightness = Object.assign({
                        min: 50,
                        max: 80,
                        decay: {
                            min: .015,
                            max: .03
                        }
                    }, e), this.autoresize && window.addEventListener("resize", ()=>this.windowResize()), this._canvas.addEventListener("mousedown", (t)=>{
                        this.mouseDown(t);
                    }), this._canvas.addEventListener("mouseup", (t)=>{
                        this.mouseUp(t);
                    }), this._canvas.addEventListener("mousemove", (t)=>{
                        this.mouseMove(t);
                    });
                }
                get isRunning() {
                    return this._running;
                }
                get version() {
                    return this._version;
                }
                start() {
                    this._running || (this._running = !0, this.clear(), this.render());
                }
                stop() {
                    this._running && (this._running = !1, this.clear());
                }
                unmount() {
                    window.removeEventListener("resize", this.windowResize), this._canvas.removeEventListener("mousedown", this.mouseDown), this._canvas.removeEventListener("mouseup", this.mouseUp), this._canvas.removeEventListener("mousemove", this.mouseMove);
                }
                pause() {
                    this._running = !this._running, this._running && this.render();
                }
                clear() {
                    this._ctx && (this._traces = [], this._explosions = [], this._ctx.clearRect(0, 0, this._width, this._height));
                }
                setOptions(t) {
                    for (var [i, s] of Object.entries(t)){
                        var e = Object.prototype.hasOwnProperty.call(this, i);
                        if ("function" == typeof this[i]) throw new Error("You cannot change the methods of the class!");
                        e && ("object" == typeof this[i] ? Object.assign(this[i], s) : this[i] = s), "sound" === i && Object.assign(this._sound.options, s);
                    }
                }
                setSize() {
                    var { width: t = this._container instanceof HTMLCanvasElement ? this._canvas.width : this._container.clientWidth, height: i = this._container instanceof HTMLCanvasElement ? this._canvas.height : this._container.clientHeight } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this._width = t, this._height = i, this._canvas.width = t, this._canvas.height = i, this.setBoundaries({
                        width: t,
                        height: i
                    });
                }
                setBoundaries(t) {
                    this.boundaries = Object.assign(Object.assign({}, this.boundaries), t);
                }
                useMouse(t, i) {
                    (this.mouse.click || this.mouse.move) && (this._mx = t.pageX - this._canvas.offsetLeft, this._my = t.pageY - this._canvas.offsetTop, this._m = i);
                }
                windowResize() {
                    this.setSize();
                }
                mouseDown(t) {
                    this.useMouse(t, this.mouse.click);
                }
                mouseUp(t) {
                    this.useMouse(t, !1);
                }
                mouseMove(t) {
                    this.useMouse(t, this._m);
                }
                render() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._timestamp;
                    if (this._ctx && this._running) {
                        requestAnimationFrame((t)=>this.render(t)), this._ctx.globalCompositeOperation = "destination-out", this._ctx.fillStyle = "rgba(0, 0, 0, ".concat(this.opacity, ")"), this._ctx.fillRect(0, 0, this._width, this._height), this._ctx.globalCompositeOperation = "lighter", this._ctx.lineCap = this.lineStyle, this._ctx.lineJoin = "round", this.drawBoundaries(), this.initTrace(), this.drawTrace(), this.drawExplosion();
                        var i = t - this._timestamp;
                        this._timestamp = t, this._tick += i * (this.intensity * Math.PI) / 1e3;
                    }
                }
                drawBoundaries() {
                    this.boundaries.visible && (this._ctx.beginPath(), this._ctx.lineWidth = 1, this._ctx.strokeStyle = "red", this._ctx.rect(this.boundaries.x, this.boundaries.y, this.boundaries.width - 2 * this.boundaries.x, .5 * this.boundaries.height), this._ctx.stroke());
                }
                initTrace() {
                    this._ds = (0, o.randomInt)(this.delay.min, this.delay.max), (this._tick > this._ds || this._m && this.mouse.max > this._traces.length) && (this._traces.push(new i.Trace({
                        x: this._width * (0, o.randomInt)(this.rocketsPoint.min, this.rocketsPoint.max) / 100,
                        y: this._height,
                        dx: this._mx && this.mouse.move || this._m ? this._mx : (0, o.randomInt)(this.boundaries.x, this.boundaries.width - 2 * this.boundaries.x),
                        dy: this._my && this.mouse.move || this._m ? this._my : (0, o.randomInt)(this.boundaries.y, .5 * this.boundaries.height),
                        ctx: this._ctx,
                        hue: (0, o.randomInt)(this.hue.min, this.hue.max),
                        speed: this.traceSpeed,
                        acceleration: this.acceleration,
                        traceLength: this.trace
                    })), this._tick = 0);
                }
                drawTrace() {
                    var t = this._traces.length;
                    for(this._ctx.lineWidth = (0, o.randomFloat)(this.lineWidth.trace.min, this.lineWidth.trace.max); t--;)this._traces[t].draw(), this._traces[t].update((i, s, e)=>{
                        this.initExplosion(i, s, e), this._sound.play(), this._traces.splice(t, 1);
                    });
                }
                initExplosion(t, i, s) {
                    for(var e = this.particles; e--;)this._explosions.push(new h.Explosion({
                        x: t,
                        y: i,
                        ctx: this._ctx,
                        hue: s,
                        friction: this.friction,
                        gravity: this.gravity,
                        flickering: (0, o.randomInt)(0, 100) <= this.flickering,
                        lineWidth: (0, o.randomFloat)(this.lineWidth.explosion.min, this.lineWidth.explosion.max),
                        explosionLength: Math.round(this.explosion),
                        brightness: this.brightness
                    }));
                }
                drawExplosion() {
                    for(var t = this._explosions.length; t--;)this._explosions[t].draw(), this._explosions[t].update(()=>{
                        this._explosions.splice(t, 1);
                    });
                }
            };
        })(), e;
    })();
});

},{}],"1qqD7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dragElement", ()=>dragElement);
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const element = document.querySelector(".terminal__header");
    if (element) // if present, the header is where you move the DIV from:
    element.onmousedown = dragMouseDown;
    else // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }
    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gbXMy","bNKaB"], "bNKaB", "parcelRequiredb1a")

//# sourceMappingURL=index.0641b553.js.map
