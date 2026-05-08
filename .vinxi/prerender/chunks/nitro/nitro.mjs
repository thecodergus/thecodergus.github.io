import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import destr from 'file:///home/gus/thecodergus.github.io/node_modules/destr/dist/index.mjs';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, createError, sendRedirect, proxyRequest, getRequestURL, setResponseStatus, getResponseHeader, setResponseHeaders, send, getRequestHeader, removeResponseHeader, appendResponseHeader, setResponseHeader, H3Event, getRequestIP, parseCookies, getResponseStatus, getResponseStatusText, getCookie, setCookie, getResponseHeaders, getRequestWebStream, setHeader, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler } from 'file:///home/gus/thecodergus.github.io/node_modules/h3/dist/index.mjs';
import { createHooks } from 'file:///home/gus/thecodergus.github.io/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///home/gus/thecodergus.github.io/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///home/gus/thecodergus.github.io/node_modules/node-mock-http/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file:///home/gus/thecodergus.github.io/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///home/gus/thecodergus.github.io/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///home/gus/thecodergus.github.io/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47fs_45lite from 'file:///home/gus/thecodergus.github.io/node_modules/unstorage/drivers/fs-lite.mjs';
import { digest } from 'file:///home/gus/thecodergus.github.io/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///home/gus/thecodergus.github.io/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///home/gus/thecodergus.github.io/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///home/gus/thecodergus.github.io/node_modules/scule/dist/index.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file:///home/gus/thecodergus.github.io/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///home/gus/thecodergus.github.io/node_modules/radix3/dist/index.mjs';
import _fAVPaloQtslBJEyYPoEOvW5PwTAPLkNRyUjWsRnJYQ from 'file:///home/gus/thecodergus.github.io/node_modules/vinxi/lib/app-fetch.js';
import _VOA4imwjTRrOAyz3E_cGOyoVpb8icaDZZOCjLsrbA from 'file:///home/gus/thecodergus.github.io/node_modules/vinxi/lib/app-manifest.js';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///home/gus/thecodergus.github.io/node_modules/pathe/dist/index.mjs';
import { parseSetCookie } from 'file:///home/gus/thecodergus.github.io/node_modules/cookie-es/dist/index.mjs';
import { sharedConfig, lazy, createComponent, createUniqueId, useContext, createRenderEffect, onCleanup, createContext, createSignal, onMount, splitProps, For, catchError, ErrorBoundary, Suspense, children, mergeProps as mergeProps$1, createMemo, getOwner, on as on$1, runWithOwner, untrack, Show, createRoot, startTransition, resetErrorBoundaries, batch } from 'file:///home/gus/thecodergus.github.io/node_modules/solid-js/dist/server.js';
import { renderToString, isServer, getRequestEvent, ssrElement, escape, mergeProps, ssr, createComponent as createComponent$1, useAssets, spread, ssrHydrationKey, ssrAttribute, Dynamic, renderToStream, NoHydration, Hydration, HydrationScript, delegateEvents } from 'file:///home/gus/thecodergus.github.io/node_modules/solid-js/web/dist/server.js';
import { provideRequestEvent } from 'file:///home/gus/thecodergus.github.io/node_modules/solid-js/web/storage/dist/storage.js';
import { fromJSON, Feature, crossSerializeStream, getCrossReferenceHeader, toCrossJSONStream } from 'file:///home/gus/thecodergus.github.io/node_modules/seroval/dist/esm/production/index.mjs';
import { AbortSignalPlugin, CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin } from 'file:///home/gus/thecodergus.github.io/node_modules/seroval-plugins/dist/esm/production/web.mjs';

const serverAssets = [{"baseName":"server","dir":"/home/gus/thecodergus.github.io/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/gus/thecodergus.github.io"}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/gus/thecodergus.github.io"}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/gus/thecodergus.github.io/.vinxi"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/gus/thecodergus.github.io/.vinxi/cache"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {};



const appConfig$1 = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {
      "/_build/assets/**": {
        "headers": {
          "cache-control": "public, immutable, max-age=31536000"
        }
      }
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig$1));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

function isPathInScope(pathname, base) {
  let canonical;
  try {
    const pre = pathname.replace(/%2f/gi, "/").replace(/%5c/gi, "\\");
    canonical = new URL(pre, "http://_").pathname;
  } catch {
    return false;
  }
  return !base || canonical === base || canonical.startsWith(base + "/");
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$0 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const appConfig = {"name":"vinxi","routers":[{"name":"public","type":"static","base":"/","dir":"./public","root":"/home/gus/thecodergus.github.io","order":0,"outDir":"/home/gus/thecodergus.github.io/.vinxi/build/public"},{"name":"ssr","type":"http","link":{"client":"client"},"handler":"src/entry-server.tsx","extensions":["js","jsx","ts","tsx"],"target":"server","root":"/home/gus/thecodergus.github.io","base":"/","outDir":"/home/gus/thecodergus.github.io/.vinxi/build/ssr","order":1},{"name":"client","type":"client","base":"/_build","handler":"src/entry-client.tsx","extensions":["js","jsx","ts","tsx"],"target":"browser","root":"/home/gus/thecodergus.github.io","outDir":"/home/gus/thecodergus.github.io/.vinxi/build/client","order":2},{"name":"server-fns","type":"http","base":"/_server","handler":"node_modules/@solidjs/start/dist/runtime/server-handler.js","target":"server","root":"/home/gus/thecodergus.github.io","outDir":"/home/gus/thecodergus.github.io/.vinxi/build/server-fns","order":3}],"server":{"compressPublicAssets":{"brotli":true},"routeRules":{"/_build/assets/**":{"headers":{"cache-control":"public, immutable, max-age=31536000"}}},"experimental":{"asyncContext":true},"preset":"static","prerender":{"crawlLinks":true}},"root":"/home/gus/thecodergus.github.io"};
					const buildManifest = {"ssr":{"_Footer-DRCRJpCl.js":{"file":"assets/Footer-DRCRJpCl.js","name":"Footer"},"_index-BxCjfHsv.js":{"file":"assets/index-BxCjfHsv.js","name":"index"},"_types-Bal2VZJY.js":{"file":"assets/types-Bal2VZJY.js","name":"types"},"src/routes/doom.tsx?pick=default&pick=$css":{"file":"doom.js","name":"doom","src":"src/routes/doom.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-BxCjfHsv.js","_Footer-DRCRJpCl.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_Footer-DRCRJpCl.js"],"dynamicImports":["src/themes/ai/index.ts","src/themes/blockchain/index.ts","src/themes/software/index.ts","src/themes/web/index.ts"]},"src/themes/ai/index.ts":{"file":"assets/index-mdW654zj.js","name":"index","src":"src/themes/ai/index.ts","isDynamicEntry":true,"imports":["_types-Bal2VZJY.js"]},"src/themes/blockchain/index.ts":{"file":"assets/index-BJPmkBWK.js","name":"index","src":"src/themes/blockchain/index.ts","isDynamicEntry":true,"imports":["_types-Bal2VZJY.js"]},"src/themes/software/index.ts":{"file":"assets/index-BWZFBK7A.js","name":"index","src":"src/themes/software/index.ts","isDynamicEntry":true,"imports":["_types-Bal2VZJY.js"]},"src/themes/web/index.ts":{"file":"assets/index-Bywf1eHQ.js","name":"index","src":"src/themes/web/index.ts","isDynamicEntry":true,"imports":["_types-Bal2VZJY.js"]},"virtual:$vinxi/handler/ssr":{"file":"ssr.js","name":"ssr","src":"virtual:$vinxi/handler/ssr","isEntry":true,"imports":["_index-BxCjfHsv.js","_Footer-DRCRJpCl.js"],"dynamicImports":["src/routes/doom.tsx?pick=default&pick=$css","src/routes/doom.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css"],"css":["assets/ssr-Cx65x4Ay.css"]}},"client":{"_Footer-D4bL0TYP.js":{"file":"assets/Footer-D4bL0TYP.js","name":"Footer"},"_index-DO01bAoj.js":{"file":"assets/index-DO01bAoj.js","name":"index","imports":["_Footer-D4bL0TYP.js"]},"_index-NvL93cse.js":{"file":"assets/index-NvL93cse.js","name":"index","isDynamicEntry":true,"imports":["_Footer-D4bL0TYP.js","_preload-helper-ug3pwPZ1.js"],"dynamicImports":["src/themes/ai/index.ts","src/themes/blockchain/index.ts","src/themes/software/index.ts","src/themes/web/index.ts"]},"_preload-helper-ug3pwPZ1.js":{"file":"assets/preload-helper-ug3pwPZ1.js","name":"preload-helper"},"_types-BJuT0aSC.js":{"file":"assets/types-BJuT0aSC.js","name":"types"},"src/routes/doom.tsx?pick=default&pick=$css":{"file":"assets/doom-U-O5dgG4.js","name":"doom","src":"src/routes/doom.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_Footer-D4bL0TYP.js","_index-DO01bAoj.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"assets/index-CVl0akiX.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"imports":["_Footer-D4bL0TYP.js","_index-NvL93cse.js","_preload-helper-ug3pwPZ1.js"]},"src/themes/ai/index.ts":{"file":"assets/index-D008ugTD.js","name":"index","src":"src/themes/ai/index.ts","isDynamicEntry":true,"imports":["_types-BJuT0aSC.js","_index-NvL93cse.js","_Footer-D4bL0TYP.js","_preload-helper-ug3pwPZ1.js"]},"src/themes/blockchain/index.ts":{"file":"assets/index-OyQIc89e.js","name":"index","src":"src/themes/blockchain/index.ts","isDynamicEntry":true,"imports":["_types-BJuT0aSC.js","_index-NvL93cse.js","_Footer-D4bL0TYP.js","_preload-helper-ug3pwPZ1.js"]},"src/themes/software/index.ts":{"file":"assets/index-xYJyvev4.js","name":"index","src":"src/themes/software/index.ts","isDynamicEntry":true,"imports":["_types-BJuT0aSC.js","_index-NvL93cse.js","_Footer-D4bL0TYP.js","_preload-helper-ug3pwPZ1.js"]},"src/themes/web/index.ts":{"file":"assets/index-Bno4K-ui.js","name":"index","src":"src/themes/web/index.ts","isDynamicEntry":true,"imports":["_types-BJuT0aSC.js","_index-NvL93cse.js","_Footer-D4bL0TYP.js","_preload-helper-ug3pwPZ1.js"]},"virtual:$vinxi/handler/client":{"file":"assets/client-BHaDSC-I.js","name":"client","src":"virtual:$vinxi/handler/client","isEntry":true,"imports":["_Footer-D4bL0TYP.js","_index-DO01bAoj.js","_preload-helper-ug3pwPZ1.js"],"dynamicImports":["src/routes/doom.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css"],"css":["assets/client-DwnNMWeW.css"]}},"server-fns":{"_Footer-hYZerOL0.js":{"file":"assets/Footer-hYZerOL0.js","name":"Footer"},"_index-BxCjfHsv.js":{"file":"assets/index-BxCjfHsv.js","name":"index"},"_server-fns-DbJgSWq_.js":{"file":"assets/server-fns-DbJgSWq_.js","name":"server-fns","dynamicImports":["src/routes/doom.tsx?pick=default&pick=$css","src/routes/doom.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/app.tsx"]},"_types-Bal2VZJY.js":{"file":"assets/types-Bal2VZJY.js","name":"types"},"src/app.tsx":{"file":"assets/app-DX_SQeTQ.js","name":"app","src":"src/app.tsx","isDynamicEntry":true,"imports":["_index-BxCjfHsv.js","_server-fns-DbJgSWq_.js","_Footer-hYZerOL0.js"],"css":["assets/app-Cx65x4Ay.css"]},"src/routes/doom.tsx?pick=default&pick=$css":{"file":"doom.js","name":"doom","src":"src/routes/doom.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-BxCjfHsv.js","_Footer-hYZerOL0.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_Footer-hYZerOL0.js"],"dynamicImports":["src/themes/ai/index.ts","src/themes/blockchain/index.ts","src/themes/software/index.ts","src/themes/web/index.ts"]},"src/themes/ai/index.ts":{"file":"assets/index-mdW654zj.js","name":"index","src":"src/themes/ai/index.ts","isDynamicEntry":true,"imports":["_types-Bal2VZJY.js"]},"src/themes/blockchain/index.ts":{"file":"assets/index-BJPmkBWK.js","name":"index","src":"src/themes/blockchain/index.ts","isDynamicEntry":true,"imports":["_types-Bal2VZJY.js"]},"src/themes/software/index.ts":{"file":"assets/index-BWZFBK7A.js","name":"index","src":"src/themes/software/index.ts","isDynamicEntry":true,"imports":["_types-Bal2VZJY.js"]},"src/themes/web/index.ts":{"file":"assets/index-Bywf1eHQ.js","name":"index","src":"src/themes/web/index.ts","isDynamicEntry":true,"imports":["_types-Bal2VZJY.js"]},"virtual:$vinxi/handler/server-fns":{"file":"server-fns.js","name":"server-fns","src":"virtual:$vinxi/handler/server-fns","isEntry":true,"imports":["_server-fns-DbJgSWq_.js"]}}};

					const routeManifest = {"ssr":{},"client":{},"server-fns":{}};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin(app) {
          const prodApp = createProdApp(appConfig);
          globalThis.app = prodApp;
        }

const chunks = {};
			 



			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin,
_fAVPaloQtslBJEyYPoEOvW5PwTAPLkNRyUjWsRnJYQ,
_VOA4imwjTRrOAyz3E_cGOyoVpb8icaDZZOCjLsrbA,
app
];

const assets = {
  "/404.html": {
    "type": "text/html; charset=utf-8",
    "encoding": null,
    "etag": "\"1af0-mNs9jBKIo3mkdKKucLpSPsoUetE\"",
    "mtime": "2026-05-08T18:14:29.325Z",
    "size": 6896,
    "path": "../../.output/public/404.html"
  },
  "/404.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"6dd-Nd7Ie19OTIKHSqQBWXxfzLu4/5U\"",
    "mtime": "2026-05-08T18:14:29.485Z",
    "size": 1757,
    "path": "../../.output/public/404.html.br"
  },
  "/404.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"877-EwQelpcI2pLhcaH9DFt7KCmC8l0\"",
    "mtime": "2026-05-08T18:14:29.485Z",
    "size": 2167,
    "path": "../../.output/public/404.html.gz"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": "\"18e-SxupswRtfpbff7nneLkZ59G3I9g\"",
    "mtime": "2026-05-08T18:14:29.325Z",
    "size": 398,
    "path": "../../.output/public/manifest.json"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"43-BEzmj4PuhUNHX+oW9uOnPSihxtU\"",
    "mtime": "2026-05-08T18:14:29.351Z",
    "size": 67,
    "path": "../../.output/public/robots.txt"
  },
  "/_build/registerSW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"94-cci5Bilset1FDW+Y3OFpEe4JMyM\"",
    "mtime": "2026-05-08T18:14:29.470Z",
    "size": 148,
    "path": "../../.output/public/_build/registerSW.js"
  },
  "/_build/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"74a-lqOG0vpbrSWoJrb4p6mJqIyaqf0\"",
    "mtime": "2026-05-08T18:14:29.470Z",
    "size": 1866,
    "path": "../../.output/public/_build/sw.js"
  },
  "/_build/sw.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"300-DofXsgJxBNVH8JuhzRY7O0vS6pc\"",
    "mtime": "2026-05-08T18:14:29.485Z",
    "size": 768,
    "path": "../../.output/public/_build/sw.js.br"
  },
  "/_build/sw.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"37d-/2DDIvy0Aond0TGE2pm4N7DC6Qo\"",
    "mtime": "2026-05-08T18:14:29.485Z",
    "size": 893,
    "path": "../../.output/public/_build/sw.js.gz"
  },
  "/_build/workbox-dcde9eb3.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"53ba-KbDbgVopUEj+Y5Dr2vBzUV5X3hU\"",
    "mtime": "2026-05-08T18:14:29.470Z",
    "size": 21434,
    "path": "../../.output/public/_build/workbox-dcde9eb3.js"
  },
  "/_build/workbox-dcde9eb3.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"19e8-XlK4RWJ6+2StV9hkuTPCNBrH5cM\"",
    "mtime": "2026-05-08T18:14:29.496Z",
    "size": 6632,
    "path": "../../.output/public/_build/workbox-dcde9eb3.js.br"
  },
  "/_build/workbox-dcde9eb3.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1c8c-1App7DlVI5SuflAwzsfDbXa1EPs\"",
    "mtime": "2026-05-08T18:14:29.485Z",
    "size": 7308,
    "path": "../../.output/public/_build/workbox-dcde9eb3.js.gz"
  },
  "/assets/ssr-Cx65x4Ay.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"9036-rMbfbEMjPfPJ8zi9i1rwtKIT9yY\"",
    "mtime": "2026-05-08T18:14:29.468Z",
    "size": 36918,
    "path": "../../.output/public/assets/ssr-Cx65x4Ay.css"
  },
  "/assets/ssr-Cx65x4Ay.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1874-I0ZtSpkC4uiiLH0l5juAKw4GiYQ\"",
    "mtime": "2026-05-08T18:14:29.527Z",
    "size": 6260,
    "path": "../../.output/public/assets/ssr-Cx65x4Ay.css.br"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"28f5b-+HJ/8feXwjqDwG8zs4HR07QMTCM\"",
    "mtime": "2026-05-08T18:14:29.325Z",
    "size": 167771,
    "path": "../../.output/public/favicon.ico"
  },
  "/assets/ssr-Cx65x4Ay.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1c39-pWI5ZgJ1ASF0vRQNa/CgR5DD5aU\"",
    "mtime": "2026-05-08T18:14:29.496Z",
    "size": 7225,
    "path": "../../.output/public/assets/ssr-Cx65x4Ay.css.gz"
  },
  "/data/portfolio_shared_data.json": {
    "type": "application/json",
    "encoding": null,
    "etag": "\"c09-NEqwlE4Z87h8QAyLynMk2GgstNI\"",
    "mtime": "2026-05-08T18:14:29.315Z",
    "size": 3081,
    "path": "../../.output/public/data/portfolio_shared_data.json"
  },
  "/data/portfolio_shared_data.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"27b-+tZ8MNtElSzb/eNUiPXEol1xe+Y\"",
    "mtime": "2026-05-08T18:14:29.485Z",
    "size": 635,
    "path": "../../.output/public/data/portfolio_shared_data.json.br"
  },
  "/data/portfolio_shared_data.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"2ce-Cp1KfCAMLdhlhhM8C4hFXp2upWU\"",
    "mtime": "2026-05-08T18:14:29.485Z",
    "size": 718,
    "path": "../../.output/public/data/portfolio_shared_data.json.gz"
  },
  "/images/myProfile.jpg": {
    "type": "image/jpeg",
    "etag": "\"85959-iF5M3WpBNfzVmCJclZFaL3uP+oM\"",
    "mtime": "2026-05-08T18:14:29.316Z",
    "size": 547161,
    "path": "../../.output/public/images/myProfile.jpg"
  },
  "/fonts/devicon.ttf.br": {
    "type": "font/ttf",
    "encoding": "br",
    "etag": "\"8cfc2-FfNDvPo63iszzpwL46oeloozxwA\"",
    "mtime": "2026-05-08T18:14:31.893Z",
    "size": 577474,
    "path": "../../.output/public/fonts/devicon.ttf.br"
  },
  "/fonts/devicon.ttf": {
    "type": "font/ttf",
    "encoding": null,
    "etag": "\"12d594-QLLCGd5h5vxXD2lm47ERHhlQ7YE\"",
    "mtime": "2026-05-08T18:14:29.316Z",
    "size": 1234324,
    "path": "../../.output/public/fonts/devicon.ttf"
  },
  "/fonts/devicon.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"1c5b14-3muxeNrnPy7YUeXUCm6d0JUjYMk\"",
    "mtime": "2026-05-08T18:14:37.938Z",
    "size": 1858324,
    "path": "../../.output/public/fonts/devicon.svg.br"
  },
  "/_build/.vite/manifest.json": {
    "type": "application/json",
    "encoding": null,
    "etag": "\"c5e-EwkbNspGAcdGH+E2+3H7AKSjN88\"",
    "mtime": "2026-05-08T18:14:29.470Z",
    "size": 3166,
    "path": "../../.output/public/_build/.vite/manifest.json"
  },
  "/_build/.vite/manifest.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"1dd-Hse9X/SYi2mVCSXUHkzhZzxxprs\"",
    "mtime": "2026-05-08T18:14:29.503Z",
    "size": 477,
    "path": "../../.output/public/_build/.vite/manifest.json.br"
  },
  "/_build/.vite/manifest.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"233-FcSwFdWyhVz5GQ9YRISzmzYj6Zk\"",
    "mtime": "2026-05-08T18:14:29.503Z",
    "size": 563,
    "path": "../../.output/public/_build/.vite/manifest.json.gz"
  },
  "/_build/assets/Footer-D4bL0TYP.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"9536-OTi1eyI0OFxYjZK4tc1QrmBOCx0\"",
    "mtime": "2026-05-08T18:14:29.470Z",
    "size": 38198,
    "path": "../../.output/public/_build/assets/Footer-D4bL0TYP.js"
  },
  "/_build/assets/Footer-D4bL0TYP.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"3499-MRmXQM3NDNUk+u1C1MWOJpHy9dU\"",
    "mtime": "2026-05-08T18:14:29.535Z",
    "size": 13465,
    "path": "../../.output/public/_build/assets/Footer-D4bL0TYP.js.br"
  },
  "/_build/assets/Footer-D4bL0TYP.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3a5c-91LUxiyRTolCp/wf8W+DHi7n054\"",
    "mtime": "2026-05-08T18:14:29.505Z",
    "size": 14940,
    "path": "../../.output/public/_build/assets/Footer-D4bL0TYP.js.gz"
  },
  "/_build/assets/client-BHaDSC-I.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"626e-vWISlkV+hm+BmRLcbY1VrfJH2FY\"",
    "mtime": "2026-05-08T18:14:29.470Z",
    "size": 25198,
    "path": "../../.output/public/_build/assets/client-BHaDSC-I.js"
  },
  "/_build/assets/client-BHaDSC-I.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2360-OAFWJhN0UmeYJhzy1rFWAErRJA0\"",
    "mtime": "2026-05-08T18:14:29.532Z",
    "size": 9056,
    "path": "../../.output/public/_build/assets/client-BHaDSC-I.js.br"
  },
  "/_build/assets/client-BHaDSC-I.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2768-pdbrpyXjAYXRAiPxpAdjCj0l6R4\"",
    "mtime": "2026-05-08T18:14:29.527Z",
    "size": 10088,
    "path": "../../.output/public/_build/assets/client-BHaDSC-I.js.gz"
  },
  "/_build/assets/client-DwnNMWeW.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1b4a-iIm4ojGhBps8JqRqYDddOjPy/Fs\"",
    "mtime": "2026-05-08T18:14:29.572Z",
    "size": 6986,
    "path": "../../.output/public/_build/assets/client-DwnNMWeW.css.br"
  },
  "/_build/assets/client-DwnNMWeW.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"a148-M1+4R5SvE6WVq6aPB8lb0iMR3l8\"",
    "mtime": "2026-05-08T18:14:29.471Z",
    "size": 41288,
    "path": "../../.output/public/_build/assets/client-DwnNMWeW.css"
  },
  "/_build/assets/doom-U-O5dgG4.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"417-Xd+0PSuJZz0uZyIJQMlGwQgk44w\"",
    "mtime": "2026-05-08T18:14:29.470Z",
    "size": 1047,
    "path": "../../.output/public/_build/assets/doom-U-O5dgG4.js"
  },
  "/_build/assets/client-DwnNMWeW.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1f85-Ozb/VZ5F0tQYGTmSvRAvp+q61KA\"",
    "mtime": "2026-05-08T18:14:29.532Z",
    "size": 8069,
    "path": "../../.output/public/_build/assets/client-DwnNMWeW.css.gz"
  },
  "/_build/assets/doom-U-O5dgG4.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1f0-QZFg0TAAYrGEkfXTCCjuXDhO5b8\"",
    "mtime": "2026-05-08T18:14:29.535Z",
    "size": 496,
    "path": "../../.output/public/_build/assets/doom-U-O5dgG4.js.br"
  },
  "/_build/assets/doom-U-O5dgG4.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"251-SJVFuR8S+zt/bDPwBJtIBuBjVc4\"",
    "mtime": "2026-05-08T18:14:29.535Z",
    "size": 593,
    "path": "../../.output/public/_build/assets/doom-U-O5dgG4.js.gz"
  },
  "/_build/assets/index-Bno4K-ui.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"181d-1lQSrMGCbxdrH/NBkvVLK5QVecI\"",
    "mtime": "2026-05-08T18:14:29.470Z",
    "size": 6173,
    "path": "../../.output/public/_build/assets/index-Bno4K-ui.js"
  },
  "/_build/assets/index-Bno4K-ui.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"8b2-9dzhxIyMgSB5LFoCTJ1pxpyZtPU\"",
    "mtime": "2026-05-08T18:14:29.539Z",
    "size": 2226,
    "path": "../../.output/public/_build/assets/index-Bno4K-ui.js.br"
  },
  "/fonts/devicon.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"200376-rY3IYTSWkRYQs7z6p/0cavV2HkQ\"",
    "mtime": "2026-05-08T18:14:31.882Z",
    "size": 2098038,
    "path": "../../.output/public/fonts/devicon.svg.gz"
  },
  "/_build/assets/index-Bno4K-ui.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"9d4-IAxIee+OA3tgKvkk6UWMvnXfGhE\"",
    "mtime": "2026-05-08T18:14:29.535Z",
    "size": 2516,
    "path": "../../.output/public/_build/assets/index-Bno4K-ui.js.gz"
  },
  "/fonts/devicon.ttf.gz": {
    "type": "font/ttf",
    "encoding": "gzip",
    "etag": "\"9f957-OEUXjdkHP/AZqbES8Nt6de58uLU\"",
    "mtime": "2026-05-08T18:14:30.613Z",
    "size": 653655,
    "path": "../../.output/public/fonts/devicon.ttf.gz"
  },
  "/_build/assets/index-CVl0akiX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"80-LXpp9G5J8R2ZMqT+egTgCBeWr0A\"",
    "mtime": "2026-05-08T18:14:29.471Z",
    "size": 128,
    "path": "../../.output/public/_build/assets/index-CVl0akiX.js"
  },
  "/fonts/devicon.woff": {
    "type": "font/woff",
    "etag": "\"12d5e0-+k9k5/b7tqusPwZyqOnNnwL+Aqw\"",
    "mtime": "2026-05-08T18:14:29.316Z",
    "size": 1234400,
    "path": "../../.output/public/fonts/devicon.woff"
  },
  "/_build/assets/index-D008ugTD.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"349d-F7HgfNlUkk76fyB2DGYgSgcjBzM\"",
    "mtime": "2026-05-08T18:14:29.471Z",
    "size": 13469,
    "path": "../../.output/public/_build/assets/index-D008ugTD.js"
  },
  "/_build/assets/index-D008ugTD.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1149-KWUnDmcJ2v/GfP46SwwPezDSBCU\"",
    "mtime": "2026-05-08T18:14:29.556Z",
    "size": 4425,
    "path": "../../.output/public/_build/assets/index-D008ugTD.js.br"
  },
  "/_build/assets/index-DO01bAoj.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"812-4xC9tHPq0BUVvWFNdIrKzbkuB1I\"",
    "mtime": "2026-05-08T18:14:29.471Z",
    "size": 2066,
    "path": "../../.output/public/_build/assets/index-DO01bAoj.js"
  },
  "/_build/assets/index-D008ugTD.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1374-Bz1CmxL0Oasb2p9JjPM8NqbKDNs\"",
    "mtime": "2026-05-08T18:14:29.556Z",
    "size": 4980,
    "path": "../../.output/public/_build/assets/index-D008ugTD.js.gz"
  },
  "/_build/assets/index-DO01bAoj.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"380-nwf6GHsSbCP0IoAz7WRwcDjQ6q0\"",
    "mtime": "2026-05-08T18:14:29.579Z",
    "size": 896,
    "path": "../../.output/public/_build/assets/index-DO01bAoj.js.br"
  },
  "/_build/assets/index-DO01bAoj.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3fd-JDcjEBTGjjGQJqDU/jYauPNg0b8\"",
    "mtime": "2026-05-08T18:14:29.572Z",
    "size": 1021,
    "path": "../../.output/public/_build/assets/index-DO01bAoj.js.gz"
  },
  "/_build/assets/index-OyQIc89e.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"1d8d-s7dzJpI/Va/RrmJsb4DheO7oJ6g\"",
    "mtime": "2026-05-08T18:14:29.471Z",
    "size": 7565,
    "path": "../../.output/public/_build/assets/index-OyQIc89e.js"
  },
  "/_build/assets/index-OyQIc89e.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"c59-Ui5NWZWoXohal3urR2iBAtOgFXE\"",
    "mtime": "2026-05-08T18:14:29.585Z",
    "size": 3161,
    "path": "../../.output/public/_build/assets/index-OyQIc89e.js.gz"
  },
  "/_build/assets/index-OyQIc89e.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"b33-GWJlZKxTp9/ztEpm7SyAmrzaw3Q\"",
    "mtime": "2026-05-08T18:14:29.585Z",
    "size": 2867,
    "path": "../../.output/public/_build/assets/index-OyQIc89e.js.br"
  },
  "/_build/assets/index-xYJyvev4.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"2440-jvQBkzmcpG1c2XpvOMnyGmGgpBQ\"",
    "mtime": "2026-05-08T18:14:29.471Z",
    "size": 9280,
    "path": "../../.output/public/_build/assets/index-xYJyvev4.js"
  },
  "/_build/assets/index-xYJyvev4.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"103f-8z4Bt7KgqW1wDhmx9bPBXfpTdOQ\"",
    "mtime": "2026-05-08T18:14:29.588Z",
    "size": 4159,
    "path": "../../.output/public/_build/assets/index-xYJyvev4.js.gz"
  },
  "/_build/assets/index-xYJyvev4.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"e57-uUHTi2Cx6q84bJwaqt6TY3qdmTc\"",
    "mtime": "2026-05-08T18:14:29.588Z",
    "size": 3671,
    "path": "../../.output/public/_build/assets/index-xYJyvev4.js.br"
  },
  "/_build/assets/preload-helper-ug3pwPZ1.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"45d-XiQMNpbVR2X0xJL+SxLhHj6mxQk\"",
    "mtime": "2026-05-08T18:14:29.471Z",
    "size": 1117,
    "path": "../../.output/public/_build/assets/preload-helper-ug3pwPZ1.js"
  },
  "/_build/assets/preload-helper-ug3pwPZ1.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"219-M4m9Tmf23DzC7fqfeE0YouucbAc\"",
    "mtime": "2026-05-08T18:14:29.588Z",
    "size": 537,
    "path": "../../.output/public/_build/assets/preload-helper-ug3pwPZ1.js.br"
  },
  "/_build/assets/preload-helper-ug3pwPZ1.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"28d-BF/Ad7CrRweCdBw6M6MBzDYbt5k\"",
    "mtime": "2026-05-08T18:14:29.588Z",
    "size": 653,
    "path": "../../.output/public/_build/assets/preload-helper-ug3pwPZ1.js.gz"
  },
  "/_build/assets/types-BJuT0aSC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6c-wpAxqyn7TORhWDEN9pKEaxvLICo\"",
    "mtime": "2026-05-08T18:14:29.471Z",
    "size": 108,
    "path": "../../.output/public/_build/assets/types-BJuT0aSC.js"
  },
  "/_build/assets/index-NvL93cse.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1fcee-dSopx3k78Q8UJuYZYJty+kTHClA\"",
    "mtime": "2026-05-08T18:14:30.632Z",
    "size": 130286,
    "path": "../../.output/public/_build/assets/index-NvL93cse.js.br"
  },
  "/_build/assets/index-NvL93cse.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"264cf-MGSCaInGD+KZhflUlzrg9e2xa2E\"",
    "mtime": "2026-05-08T18:14:29.691Z",
    "size": 156879,
    "path": "../../.output/public/_build/assets/index-NvL93cse.js.gz"
  },
  "/dos/files/.gitkeep": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2026-05-08T15:35:39.941Z",
    "size": 0,
    "path": "../../.output/public/dos/files/.gitkeep"
  },
  "/dos/files/digger.jsdos": {
    "type": "text/plain; charset=utf-8",
    "encoding": null,
    "etag": "\"713a-mKZ7VpZRDpj2ITd+FxpRCoX4H6g\"",
    "mtime": "2026-05-08T18:14:29.369Z",
    "size": 28986,
    "path": "../../.output/public/dos/files/digger.jsdos"
  },
  "/dos/files/digger.jsdos.br": {
    "type": "text/plain; charset=utf-8",
    "encoding": "br",
    "etag": "\"6ec7-Zp6KSxb8tnsI7gNJLBCwZS33AYQ\"",
    "mtime": "2026-05-08T18:14:29.837Z",
    "size": 28359,
    "path": "../../.output/public/dos/files/digger.jsdos.br"
  },
  "/dos/files/digger.jsdos.gz": {
    "type": "text/plain; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"6f77-8K4rugXg8bfFWJzTwx1BJcwajAw\"",
    "mtime": "2026-05-08T18:14:29.837Z",
    "size": 28535,
    "path": "../../.output/public/dos/files/digger.jsdos.gz"
  },
  "/_build/assets/index-NvL93cse.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"9381f-s12snImSWRrTrOT/RQNN9k8F45k\"",
    "mtime": "2026-05-08T18:14:29.471Z",
    "size": 604191,
    "path": "../../.output/public/_build/assets/index-NvL93cse.js"
  },
  "/_server/assets/app-Cx65x4Ay.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"9036-rMbfbEMjPfPJ8zi9i1rwtKIT9yY\"",
    "mtime": "2026-05-08T18:14:29.473Z",
    "size": 36918,
    "path": "../../.output/public/_server/assets/app-Cx65x4Ay.css"
  },
  "/_server/assets/app-Cx65x4Ay.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1874-I0ZtSpkC4uiiLH0l5juAKw4GiYQ\"",
    "mtime": "2026-05-08T18:14:29.665Z",
    "size": 6260,
    "path": "../../.output/public/_server/assets/app-Cx65x4Ay.css.br"
  },
  "/_server/assets/app-Cx65x4Ay.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1c39-pWI5ZgJ1ASF0vRQNa/CgR5DD5aU\"",
    "mtime": "2026-05-08T18:14:29.665Z",
    "size": 7225,
    "path": "../../.output/public/_server/assets/app-Cx65x4Ay.css.gz"
  },
  "/dos/js-dos/emulators-ui-loader.png": {
    "type": "image/png",
    "etag": "\"e3e-jhsY+CUyGvQjta2ZSHYCnq6ERso\"",
    "mtime": "2026-05-08T18:14:29.369Z",
    "size": 3646,
    "path": "../../.output/public/dos/js-dos/emulators-ui-loader.png"
  },
  "/dos/js-dos/js-dos.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"9390-HHcXYBvRBOSY7kdKiJw95q1ni1Y\"",
    "mtime": "2026-05-08T18:14:29.369Z",
    "size": 37776,
    "path": "../../.output/public/dos/js-dos/js-dos.css"
  },
  "/dos/js-dos/js-dos.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1f69-espehF7fD0j+rbwxOIOfJmefTd8\"",
    "mtime": "2026-05-08T18:14:29.950Z",
    "size": 8041,
    "path": "../../.output/public/dos/js-dos/js-dos.css.br"
  },
  "/dos/js-dos/js-dos.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"24ad-ig2GXHjdTrrGuk2RKNhxlVpCkB4\"",
    "mtime": "2026-05-08T18:14:29.950Z",
    "size": 9389,
    "path": "../../.output/public/dos/js-dos/js-dos.css.gz"
  },
  "/fonts/devicon.svg": {
    "type": "image/svg+xml",
    "encoding": null,
    "etag": "\"53e688-6audWvp5ZxP3TDZ16BRQ2F8JZec\"",
    "mtime": "2026-05-08T18:14:29.317Z",
    "size": 5498504,
    "path": "../../.output/public/fonts/devicon.svg"
  },
  "/dos/js-dos/js-dos.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1cfe7-DM/vb+CiNIRbCnoTpMFPHwySbO8\"",
    "mtime": "2026-05-08T18:14:30.636Z",
    "size": 118759,
    "path": "../../.output/public/dos/js-dos/js-dos.js.br"
  },
  "/dos/js-dos/js-dos.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"26e2a-Am20jIzZArxx+uAALQb4YC6f0XI\"",
    "mtime": "2026-05-08T18:14:30.635Z",
    "size": 159274,
    "path": "../../.output/public/dos/js-dos/js-dos.js.gz"
  },
  "/dos/js-dos/wdosbox.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"714b-s1NOOboxedot9QSUm91WvEkOeOU\"",
    "mtime": "2026-05-08T18:14:30.571Z",
    "size": 29003,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.br"
  },
  "/dos/js-dos/wdosbox.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"819a-atb5t3ZzN9uOWqyV+swl7ESNjiM\"",
    "mtime": "2026-05-08T18:14:30.616Z",
    "size": 33178,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.gz"
  },
  "/dos/js-dos/wdosbox.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"1ec0a-sdbAYwKl3+RPs4a37WerQYLszNk\"",
    "mtime": "2026-05-08T18:14:29.385Z",
    "size": 125962,
    "path": "../../.output/public/dos/js-dos/wdosbox.js"
  },
  "/dos/js-dos/wdosbox.js.symbols.br": {
    "type": "text/plain; charset=utf-8",
    "encoding": "br",
    "etag": "\"723a-6PmYCH4jRsN7igSd1L4zNogc0rE\"",
    "mtime": "2026-05-08T18:14:30.625Z",
    "size": 29242,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.symbols.br"
  },
  "/dos/js-dos/wdosbox.js.symbols": {
    "type": "text/plain; charset=utf-8",
    "encoding": null,
    "etag": "\"3a7c1-HPfp6OFcRif11/E5oHXZJ1m+9Tw\"",
    "mtime": "2026-05-08T18:14:29.385Z",
    "size": 239553,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.symbols"
  },
  "/dos/js-dos/wdosbox.js.symbols.gz": {
    "type": "text/plain; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"92ee-D+SH4kY8DOfwdIaX/utznt6tGo4\"",
    "mtime": "2026-05-08T18:14:30.616Z",
    "size": 37614,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.symbols.gz"
  },
  "/dos/js-dos/js-dos.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"88b59-jUIV2DJizVWNO4XqpyUkmPbosAI\"",
    "mtime": "2026-05-08T18:14:29.369Z",
    "size": 559961,
    "path": "../../.output/public/dos/js-dos/js-dos.js"
  },
  "/dos/js-dos/wdosbox.wasm.br": {
    "type": "application/wasm",
    "encoding": "br",
    "etag": "\"618e2-3/r1TSyCxN9mxbNPYDPVkPA5cTQ\"",
    "mtime": "2026-05-08T18:14:32.801Z",
    "size": 399586,
    "path": "../../.output/public/dos/js-dos/wdosbox.wasm.br"
  },
  "/data/languages/en.json": {
    "type": "application/json",
    "encoding": null,
    "etag": "\"35fd-ALlMUZ0hDGEL8GwC+m4XkUMX6jU\"",
    "mtime": "2026-05-08T18:14:29.315Z",
    "size": 13821,
    "path": "../../.output/public/data/languages/en.json"
  },
  "/dos/js-dos/wdosbox.wasm.gz": {
    "type": "application/wasm",
    "encoding": "gzip",
    "etag": "\"7abfe-+CSl07PpWMe4dF/nM7vykhxPByk\"",
    "mtime": "2026-05-08T18:14:31.315Z",
    "size": 502782,
    "path": "../../.output/public/dos/js-dos/wdosbox.wasm.gz"
  },
  "/dos/js-dos/wdosbox.wasm": {
    "type": "application/wasm",
    "encoding": null,
    "etag": "\"1650d5-/eSIYkIAgIEtn5MVjcOQSw2Yfug\"",
    "mtime": "2026-05-08T18:14:29.386Z",
    "size": 1462485,
    "path": "../../.output/public/dos/js-dos/wdosbox.wasm"
  },
  "/data/languages/en.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"c62-3m9dKrPUEyzX444gYLVGl5jTvX0\"",
    "mtime": "2026-05-08T18:14:29.756Z",
    "size": 3170,
    "path": "../../.output/public/data/languages/en.json.br"
  },
  "/data/languages/en.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"f6c-H5O1XHAOhJDuxIXbqua+k42NOMk\"",
    "mtime": "2026-05-08T18:14:29.756Z",
    "size": 3948,
    "path": "../../.output/public/data/languages/en.json.gz"
  },
  "/data/languages/pt-br.json": {
    "type": "application/json",
    "encoding": null,
    "etag": "\"39a1-LsA3vM7NDfu524Q7kGrdQI7sidk\"",
    "mtime": "2026-05-08T18:14:29.316Z",
    "size": 14753,
    "path": "../../.output/public/data/languages/pt-br.json"
  },
  "/data/languages/pt-br.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"f08-pftNbUpjOybgj1cKbdCNYIsPuts\"",
    "mtime": "2026-05-08T18:14:29.830Z",
    "size": 3848,
    "path": "../../.output/public/data/languages/pt-br.json.br"
  },
  "/data/languages/pt-br.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"10f0-NaAQhXMJwZpKGKLDwHcumqCG8k0\"",
    "mtime": "2026-05-08T18:14:29.830Z",
    "size": 4336,
    "path": "../../.output/public/data/languages/pt-br.json.gz"
  },
  "/images/projects/adventure/p1.jpg": {
    "type": "image/jpeg",
    "etag": "\"42acb-bepxaxsEwaHUwmzr5xiUa0rEGKw\"",
    "mtime": "2026-05-08T18:14:29.317Z",
    "size": 273099,
    "path": "../../.output/public/images/projects/adventure/p1.jpg"
  },
  "/images/projects/adventure/p2.jpg": {
    "type": "image/jpeg",
    "etag": "\"44b32-9K3UBSZ8fMyukMzJPJ7avodJhlw\"",
    "mtime": "2026-05-08T18:14:29.386Z",
    "size": 281394,
    "path": "../../.output/public/images/projects/adventure/p2.jpg"
  },
  "/dos/js-dos/js-dos.js.map": {
    "type": "application/json",
    "etag": "\"1c1f43-8EePJwNs7LUus35iC4CVXGbcSRs\"",
    "mtime": "2026-05-08T18:14:29.386Z",
    "size": 1843011,
    "path": "../../.output/public/dos/js-dos/js-dos.js.map"
  },
  "/images/projects/animal-shelter/p2.jpg": {
    "type": "image/jpeg",
    "etag": "\"4dc5f-z/Rsf2aegwTuLZhfzhp0IElq/dQ\"",
    "mtime": "2026-05-08T18:14:29.386Z",
    "size": 318559,
    "path": "../../.output/public/images/projects/animal-shelter/p2.jpg"
  },
  "/images/projects/photography/p1.jpg": {
    "type": "image/jpeg",
    "etag": "\"38a0f-c73zM5JUqgYdjhkUn7y8Amnomfk\"",
    "mtime": "2026-05-08T18:14:29.358Z",
    "size": 231951,
    "path": "../../.output/public/images/projects/photography/p1.jpg"
  },
  "/images/projects/laplacian-edge/ovo1.jpeg": {
    "type": "image/jpeg",
    "etag": "\"8079-ss8hOG6fFU+5xzWd+QqTIbKf82c\"",
    "mtime": "2026-05-08T18:14:29.351Z",
    "size": 32889,
    "path": "../../.output/public/images/projects/laplacian-edge/ovo1.jpeg"
  },
  "/images/projects/photography/p2.jpg": {
    "type": "image/jpeg",
    "etag": "\"6db39-t+wV8xn5xJs+dqrU/jUr92khl04\"",
    "mtime": "2026-05-08T18:14:29.442Z",
    "size": 449337,
    "path": "../../.output/public/images/projects/photography/p2.jpg"
  },
  "/images/projects/laplacian-edge/ovo2.jpeg": {
    "type": "image/jpeg",
    "etag": "\"3390-nbPBzQyX/GR7lPm+d5PqQp8ouCA\"",
    "mtime": "2026-05-08T18:14:29.411Z",
    "size": 13200,
    "path": "../../.output/public/images/projects/laplacian-edge/ovo2.jpeg"
  },
  "/images/projects/animal-shelter/p1.jpg": {
    "type": "image/jpeg",
    "etag": "\"96f8a-iVY3NYceNfom2eeBtQb5GGux/zs\"",
    "mtime": "2026-05-08T18:14:29.352Z",
    "size": 618378,
    "path": "../../.output/public/images/projects/animal-shelter/p1.jpg"
  },
  "/images/projects/laplacian-edge/ovo3.jpeg": {
    "type": "image/jpeg",
    "etag": "\"cd8a-q8oYFcYhqIKBdQLt2pvS0pwD0Mg\"",
    "mtime": "2026-05-08T18:14:29.395Z",
    "size": 52618,
    "path": "../../.output/public/images/projects/laplacian-edge/ovo3.jpeg"
  },
  "/images/projects/santista/santista2.jpeg": {
    "type": "image/jpeg",
    "etag": "\"4a582-DTCW740hJ/tsMloSNNcCLIoFOAQ\"",
    "mtime": "2026-05-08T18:14:29.411Z",
    "size": 304514,
    "path": "../../.output/public/images/projects/santista/santista2.jpeg"
  },
  "/images/projects/julia-course/IMG_20221018_174932.jpg": {
    "type": "image/jpeg",
    "etag": "\"62eea-rqPhg/0XA2a7+eIEZloFVmCqop8\"",
    "mtime": "2026-05-08T18:14:29.395Z",
    "size": 405226,
    "path": "../../.output/public/images/projects/julia-course/IMG_20221018_174932.jpg"
  },
  "/images/projects/genicam/genicam1.png": {
    "type": "image/png",
    "etag": "\"1357db-EUw22SI72VqfwIpSKz44qqH6RVo\"",
    "mtime": "2026-05-08T18:14:29.352Z",
    "size": 1267675,
    "path": "../../.output/public/images/projects/genicam/genicam1.png"
  },
  "/images/projects/genicam/genicam2.png": {
    "type": "image/png",
    "etag": "\"1cfbf4-CsId1Y60wV3ly/1CdURylLc1H0Q\"",
    "mtime": "2026-05-08T18:14:29.387Z",
    "size": 1899508,
    "path": "../../.output/public/images/projects/genicam/genicam2.png"
  },
  "/images/projects/genicam/genicam3.png": {
    "type": "image/png",
    "etag": "\"1ded45-TuhQqz7CiXPhDA75zQHWdH7aQfM\"",
    "mtime": "2026-05-08T18:14:29.395Z",
    "size": 1961285,
    "path": "../../.output/public/images/projects/genicam/genicam3.png"
  },
  "/images/projects/julia-course/IMG_20221019_183914.jpg": {
    "type": "image/jpeg",
    "etag": "\"6318a-sRgzm3yMhLEEmxAUFzJuimnPIE0\"",
    "mtime": "2026-05-08T18:14:29.352Z",
    "size": 405898,
    "path": "../../.output/public/images/projects/julia-course/IMG_20221019_183914.jpg"
  },
  "/dos/js-dos/types/src/dom.d.ts": {
    "type": "video/mp2t",
    "etag": "\"2b0-PFL63ySFIrRIxEPpz6sQNYtTUoM\"",
    "mtime": "2026-05-08T18:14:29.462Z",
    "size": 688,
    "path": "../../.output/public/dos/js-dos/types/src/dom.d.ts"
  },
  "/dos/js-dos/types/src/hardware-transport-layer.d.ts": {
    "type": "video/mp2t",
    "etag": "\"300-Yy5ftkj3E3DSV5axsnmwPXOnSIE\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 768,
    "path": "../../.output/public/dos/js-dos/types/src/hardware-transport-layer.d.ts"
  },
  "/dos/js-dos/types/src/icons.d.ts": {
    "type": "video/mp2t",
    "etag": "\"e9d-9kUnkzEIcyscmgfDv1Cy12OQmSc\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 3741,
    "path": "../../.output/public/dos/js-dos/types/src/icons.d.ts"
  },
  "/dos/js-dos/types/src/player-app.d.ts": {
    "type": "video/mp2t",
    "etag": "\"84e-9QJiXOKMw0g8ojvzpDAaRLrA6sA\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 2126,
    "path": "../../.output/public/dos/js-dos/types/src/player-app.d.ts"
  },
  "/dos/js-dos/types/src/player.d.ts": {
    "type": "video/mp2t",
    "etag": "\"48e-wVh33zUR6qN5hj7FzXWGtDuEQPw\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 1166,
    "path": "../../.output/public/dos/js-dos/types/src/player.d.ts"
  },
  "/dos/js-dos/types/src/request.d.ts": {
    "type": "video/mp2t",
    "etag": "\"6a-PcNO+FOpms3wshqYgk2gOpoMZ/s\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 106,
    "path": "../../.output/public/dos/js-dos/types/src/request.d.ts"
  },
  "/dos/js-dos/types/src/xhr.d.ts": {
    "type": "video/mp2t",
    "etag": "\"239-ioKyqCLZSuoID1j70IjjRQjDQrI\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 569,
    "path": "../../.output/public/dos/js-dos/types/src/xhr.d.ts"
  },
  "/dos/js-dos/types/src/components/action-bar.d.ts": {
    "type": "video/mp2t",
    "etag": "\"95-VOf8qZ9ePt8l8ufFdSlJgHNqqqQ\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 149,
    "path": "../../.output/public/dos/js-dos/types/src/components/action-bar.d.ts"
  },
  "/dos/js-dos/types/src/components/action-hide.d.ts": {
    "type": "video/mp2t",
    "etag": "\"af-iH5Z/2DAv/76BeXUqz/my9+Xf64\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 175,
    "path": "../../.output/public/dos/js-dos/types/src/components/action-hide.d.ts"
  },
  "/dos/js-dos/types/src/components/action-save-or-exit.d.ts": {
    "type": "video/mp2t",
    "etag": "\"b5-MtPGAUDHxY6rFaMiYTEnDTdPezo\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 181,
    "path": "../../.output/public/dos/js-dos/types/src/components/action-save-or-exit.d.ts"
  },
  "/dos/js-dos/types/src/components/client.d.ts": {
    "type": "video/mp2t",
    "etag": "\"df-peTt0KuJBzE54HhdyKmsHinEs9s\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 223,
    "path": "../../.output/public/dos/js-dos/types/src/components/client.d.ts"
  },
  "/dos/js-dos/types/src/components/controls.d.ts": {
    "type": "video/mp2t",
    "etag": "\"110-n/W6GtWUZC3rbadG6VBN8xtmti4\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 272,
    "path": "../../.output/public/dos/js-dos/types/src/components/controls.d.ts"
  },
  "/images/projects/santista/santista1.png": {
    "type": "image/png",
    "etag": "\"25ec90-ii1O2TNbaqWKyGLU42p7Sq7NGtM\"",
    "mtime": "2026-05-08T18:14:29.352Z",
    "size": 2485392,
    "path": "../../.output/public/images/projects/santista/santista1.png"
  },
  "/images/projects/usiminas/usiminas1.png": {
    "type": "image/png",
    "etag": "\"134c05-aK5mfEf7zJogvwdqslFRAxX5q3w\"",
    "mtime": "2026-05-08T18:14:29.358Z",
    "size": 1264645,
    "path": "../../.output/public/images/projects/usiminas/usiminas1.png"
  },
  "/images/projects/usiminas/usminas2.png": {
    "type": "image/png",
    "etag": "\"151a4c-lYF0+qUb7JTaPSB7oyiilVvDA8w\"",
    "mtime": "2026-05-08T18:14:29.451Z",
    "size": 1382988,
    "path": "../../.output/public/images/projects/usiminas/usminas2.png"
  },
  "/dos/js-dos/types/src/components/cpu-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"9d-tS598h6CGMe+CxJ+sS4V+sX2zRo\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 157,
    "path": "../../.output/public/dos/js-dos/types/src/components/cpu-control.d.ts"
  },
  "/images/projects/sparkeyes/spark2.png": {
    "type": "image/png",
    "etag": "\"1cc3c9-U3z7PmDAA7z0CD9llLvzLWTlTkg\"",
    "mtime": "2026-05-08T18:14:29.412Z",
    "size": 1885129,
    "path": "../../.output/public/images/projects/sparkeyes/spark2.png"
  },
  "/images/projects/sparkeyes/spark1.png": {
    "type": "image/png",
    "etag": "\"18f649-iBlThjLEqgwEmLPWlPC4QlT4dvk\"",
    "mtime": "2026-05-08T18:14:29.359Z",
    "size": 1635913,
    "path": "../../.output/public/images/projects/sparkeyes/spark1.png"
  },
  "/dos/js-dos/types/src/components/horizontal-slider.d.ts": {
    "type": "video/mp2t",
    "etag": "\"1f4-9VDnlq23FycSu3msxrSyM8peqkM\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 500,
    "path": "../../.output/public/dos/js-dos/types/src/components/horizontal-slider.d.ts"
  },
  "/dos/js-dos/types/src/components/region.d.ts": {
    "type": "video/mp2t",
    "etag": "\"df-weJkEGh27ziqbiLBdj1oA6Ieevo\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 223,
    "path": "../../.output/public/dos/js-dos/types/src/components/region.d.ts"
  },
  "/dos/js-dos/types/src/components/scale-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"119-8W1vDJ3kBcTmvbt0QJ0+sR07VSw\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 281,
    "path": "../../.output/public/dos/js-dos/types/src/components/scale-control.d.ts"
  },
  "/dos/js-dos/types/src/components/sensitivity-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"125-aLj8c0nTcaz3BA2CR88LOymtOmg\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 293,
    "path": "../../.output/public/dos/js-dos/types/src/components/sensitivity-control.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar.d.ts": {
    "type": "video/mp2t",
    "etag": "\"93-gC0SL3stv9ikRvCGl+QoMpx5hg8\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 147,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar.d.ts"
  },
  "/dos/js-dos/types/src/components/sync-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"9c-JJ0GGLl5L+U42cy74ghlsLxvKM4\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 156,
    "path": "../../.output/public/dos/js-dos/types/src/components/sync-control.d.ts"
  },
  "/dos/js-dos/types/src/components/tip.d.ts": {
    "type": "video/mp2t",
    "etag": "\"90-k/2A23wIwvvw12SciX9tFZk7x+k\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 144,
    "path": "../../.output/public/dos/js-dos/types/src/components/tip.d.ts"
  },
  "/dos/js-dos/types/src/components/vertical-slider.d.ts": {
    "type": "video/mp2t",
    "etag": "\"1d7-abnLFIBfBdhrx9jusMPXZSgi95k\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 471,
    "path": "../../.output/public/dos/js-dos/types/src/components/vertical-slider.d.ts"
  },
  "/dos/js-dos/types/src/components/volume-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"11b-0YevICNiQcVb8YTYGL1e1C69rqc\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 283,
    "path": "../../.output/public/dos/js-dos/types/src/components/volume-control.d.ts"
  },
  "/dos/js-dos/types/v7-services/src/personal.d.ts": {
    "type": "video/mp2t",
    "etag": "\"14e-TKNQtwJ2xnbH9+/Q21Kz4fbI0bo\"",
    "mtime": "2026-05-08T18:14:29.462Z",
    "size": 334,
    "path": "../../.output/public/dos/js-dos/types/v7-services/src/personal.d.ts"
  },
  "/images/projects/sparkeyes/spark3.png": {
    "type": "image/png",
    "etag": "\"221ee6-iYBYfZODalHbNJmIfpryqy4D2WQ\"",
    "mtime": "2026-05-08T18:14:29.411Z",
    "size": 2236134,
    "path": "../../.output/public/images/projects/sparkeyes/spark3.png"
  },
  "/dos/js-dos/types/src/backend/v7/latency.d.ts": {
    "type": "video/mp2t",
    "etag": "\"f5-lCzD2ZWr5bwof0LRU9OWrT5JBe8\"",
    "mtime": "2026-05-08T18:14:29.459Z",
    "size": 245,
    "path": "../../.output/public/dos/js-dos/types/src/backend/v7/latency.d.ts"
  },
  "/dos/js-dos/types/src/backend/v7/personal.d.ts": {
    "type": "video/mp2t",
    "etag": "\"e6-KrG0AvI/Gn7pFOgS6UacN8GKexs\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 230,
    "path": "../../.output/public/dos/js-dos/types/src/backend/v7/personal.d.ts"
  },
  "/dos/js-dos/types/src/backend/v7/v7-config.d.ts": {
    "type": "video/mp2t",
    "etag": "\"2ae-3IcV+f+Mg/b9DioAyhsZEmtOvdc\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 686,
    "path": "../../.output/public/dos/js-dos/types/src/backend/v7/v7-config.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/latency-info.d.ts": {
    "type": "video/mp2t",
    "etag": "\"109-eMwAlRuR60nxALpalD7df/+nbfA\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 265,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/latency-info.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/main.d.ts": {
    "type": "video/mp2t",
    "etag": "\"93-wqsXz+bL9+yFodtN5zMCEq6I0ug\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 147,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/main.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/networking.d.ts": {
    "type": "video/mp2t",
    "etag": "\"99-cSlzdDypYBn3ZXnUMXaIuLI1RsI\"",
    "mtime": "2026-05-08T18:14:29.466Z",
    "size": 153,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/networking.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/token/token-add-time.d.ts": {
    "type": "video/mp2t",
    "etag": "\"9c-5WESNrInkZZXzFv8D/uHdKr0aUk\"",
    "mtime": "2026-05-08T18:14:29.459Z",
    "size": 156,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/token/token-add-time.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/token/token-select.d.ts": {
    "type": "video/mp2t",
    "etag": "\"9b-7hnfnWeTg2aRA47KtRNeVRhy5hc\"",
    "mtime": "2026-05-08T18:14:29.467Z",
    "size": 155,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/token/token-select.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/token/token.d.ts": {
    "type": "video/mp2t",
    "etag": "\"265-KmAJJGcEFeqFRQQJbXyPXfWqrtY\"",
    "mtime": "2026-05-08T18:14:29.467Z",
    "size": 613,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/token/token.d.ts"
  },
  "/dos/files/doom.jsdos": {
    "type": "text/plain; charset=utf-8",
    "encoding": null,
    "etag": "\"ce38d8-R5ULl/ZX8gS8nly1++g8RcdZIlM\"",
    "mtime": "2026-05-08T18:14:29.389Z",
    "size": 13514968,
    "path": "../../.output/public/dos/files/doom.jsdos"
  },
  "/dos/files/doom.jsdos.br": {
    "type": "text/plain; charset=utf-8",
    "encoding": "br",
    "etag": "\"cab44c-DRbrj1jhmyo79opfi2w58GB28+U\"",
    "mtime": "2026-05-08T18:14:51.528Z",
    "size": 13284428,
    "path": "../../.output/public/dos/files/doom.jsdos.br"
  },
  "/dos/files/doom.jsdos.gz": {
    "type": "text/plain; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"cd3169-8zzZ8h3NeOw+CdWOk6WHEtp+2TM\"",
    "mtime": "2026-05-08T18:14:32.099Z",
    "size": 13447529,
    "path": "../../.output/public/dos/files/doom.jsdos.gz"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _2L1h_Z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
function _e$1(e) {
  let n;
  const t = _(e), s = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(t, { ...s, body: e.node.req.body }) : new Request(t, { ...s, get body() {
    return n || (n = Ge(e), n);
  } });
}
function Ne$1(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: _e$1(e), url: _(e) }, e.web.request;
}
function Me$1() {
  return Qe();
}
const U$1 = /* @__PURE__ */ Symbol("$HTTPEvent");
function je$1(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[U$1]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function u$2(e) {
  return function(...n) {
    var _a;
    let t = n[0];
    if (je$1(t)) n[0] = t instanceof H3Event || t.__is_event__ ? t : t[U$1];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (t = Me$1(), !t) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      n.unshift(t);
    }
    return e(...n);
  };
}
const _ = u$2(getRequestURL), De = u$2(getRequestIP), S$1 = u$2(setResponseStatus), q$1 = u$2(getResponseStatus), We = u$2(getResponseStatusText), y$1 = u$2(getResponseHeaders), H$2 = u$2(getResponseHeader), Be$1 = u$2(setResponseHeader), N$1 = u$2(appendResponseHeader), ze = u$2(parseCookies), Je = u$2(getCookie), Xe = u$2(setCookie), h$1 = u$2(setHeader), Ge = u$2(getRequestWebStream), Ke = u$2(removeResponseHeader), Ve = u$2(Ne$1);
function Ze() {
  var _a;
  return getContext("nitro-app", { asyncContext: !!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function Qe() {
  return Ze().use().event;
}
const b = "Invariant Violation", { setPrototypeOf: Ye = function(e, n) {
  return e.__proto__ = n, e;
} } = Object;
let T$1 = class T extends Error {
  constructor(n = b) {
    super(typeof n == "number" ? `${b}: ${n} (see https://github.com/apollographql/invariant-packages)` : n);
    __publicField$1(this, "framesToPop", 1);
    __publicField$1(this, "name", b);
    Ye(this, T.prototype);
  }
};
function et(e, n) {
  if (!e) throw new T$1(n);
}
const $$1 = "solidFetchEvent";
function tt(e) {
  return { request: Ve(e), response: ot(e), clientAddress: De(e), locals: {}, nativeEvent: e };
}
function nt(e) {
  return { ...e };
}
function rt(e) {
  if (!e.context[$$1]) {
    const n = tt(e);
    e.context[$$1] = n;
  }
  return e.context[$$1];
}
function k$1(e, n) {
  for (const [t, s] of n.entries()) N$1(e, t, s);
}
class st {
  constructor(n) {
    __publicField$1(this, "event");
    this.event = n;
  }
  get(n) {
    const t = H$2(this.event, n);
    return Array.isArray(t) ? t.join(", ") : t || null;
  }
  has(n) {
    return this.get(n) !== null;
  }
  set(n, t) {
    return Be$1(this.event, n, t);
  }
  delete(n) {
    return Ke(this.event, n);
  }
  append(n, t) {
    N$1(this.event, n, t);
  }
  getSetCookie() {
    const n = H$2(this.event, "Set-Cookie");
    return Array.isArray(n) ? n : [n];
  }
  forEach(n) {
    return Object.entries(y$1(this.event)).forEach(([t, s]) => n(Array.isArray(s) ? s.join(", ") : s, t, this));
  }
  entries() {
    return Object.entries(y$1(this.event)).map(([n, t]) => [n, Array.isArray(t) ? t.join(", ") : t])[Symbol.iterator]();
  }
  keys() {
    return Object.keys(y$1(this.event))[Symbol.iterator]();
  }
  values() {
    return Object.values(y$1(this.event)).map((n) => Array.isArray(n) ? n.join(", ") : n)[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }
}
function ot(e) {
  return { get status() {
    return q$1(e);
  }, set status(n) {
    S$1(e, n);
  }, get statusText() {
    return We(e);
  }, set statusText(n) {
    S$1(e, q$1(e), n);
  }, headers: new st(e) };
}
const M$1 = [{ page: true, $component: { src: "src/routes/doom.tsx?pick=default&pick=$css", build: () => import('../build/doom.mjs'), import: () => import('../build/doom.mjs') }, path: "/doom", filePath: "/home/gus/thecodergus.github.io/src/routes/doom.tsx" }, { page: true, $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => import('../build/index.mjs'), import: () => import('../build/index.mjs') }, path: "/", filePath: "/home/gus/thecodergus.github.io/src/routes/index.tsx" }], at = it(M$1.filter((e) => e.page));
function it(e) {
  function n(t, s, o, a) {
    const i = Object.values(t).find((c) => o.startsWith(c.id + "/"));
    return i ? (n(i.children || (i.children = []), s, o.slice(i.id.length)), t) : (t.push({ ...s, id: o, path: o.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/") }), t);
  }
  return e.sort((t, s) => t.path.length - s.path.length).reduce((t, s) => n(t, s, s.path, s.path), []);
}
function ct(e) {
  return e.$HEAD || e.$GET || e.$POST || e.$PUT || e.$PATCH || e.$DELETE;
}
createRouter({ routes: M$1.reduce((e, n) => {
  if (!ct(n)) return e;
  let t = n.path.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/").replace(/\*([^/]*)/g, (s, o) => `**:${o}`).split("/").map((s) => s.startsWith(":") || s.startsWith("*") ? s : encodeURIComponent(s)).join("/");
  if (/:[^/]*\?/g.test(t)) throw new Error(`Optional parameters are not supported in API routes: ${t}`);
  if (e[t]) throw new Error(`Duplicate API routes for "${t}" found at "${e[t].route.path}" and "${n.path}"`);
  return e[t] = { route: n }, e;
}, {}) });
var lt = " ";
const dt = { style: (e) => ssrElement("style", e.attrs, () => e.children, true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(lt), true) : null, noscript: (e) => ssrElement("noscript", e.attrs, () => escape(e.children), true) };
function pt(e, n) {
  let { tag: t, attrs: { key: s, ...o } = { key: void 0 }, children: a } = e;
  return dt[t]({ attrs: { ...o, nonce: n }, key: s, children: a });
}
function ft(e, n, t, s = "default") {
  return lazy(async () => {
    var _a;
    {
      const a = (await e.import())[s], c = (await ((_a = n.inputs) == null ? void 0 : _a[e.src].assets())).filter((l) => l.tag === "style" || l.attrs.rel === "stylesheet");
      return { default: (l) => [...c.map((g) => pt(g)), createComponent(a, l)] };
    }
  });
}
function j$1() {
  function e(t) {
    return { ...t, ...t.$$route ? t.$$route.require().route : void 0, info: { ...t.$$route ? t.$$route.require().route.info : {}, filesystem: true }, component: t.$component && ft(t.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: t.children ? t.children.map(e) : void 0 };
  }
  return at.map(e);
}
let A$1;
const Ft = isServer ? () => getRequestEvent().routes : () => A$1 || (A$1 = j$1());
function ht(e) {
  const n = Je(e.nativeEvent, "flash");
  if (n) try {
    let t = JSON.parse(n);
    if (!t || !t.result) return;
    const s = [...t.input.slice(0, -1), new Map(t.input[t.input.length - 1])], o = t.error ? new Error(t.result) : t.result;
    return { input: s, url: t.url, pending: false, result: t.thrown ? void 0 : o, error: t.thrown ? o : void 0 };
  } catch (t) {
    console.error(t);
  } finally {
    Xe(e.nativeEvent, "flash", "", { maxAge: 0 });
  }
}
async function gt(e) {
  const n = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, e.response.headers.set("Content-Type", "text/html"), Object.assign(e, { manifest: await n.json(), assets: [...await n.inputs[n.handler].assets()], router: { submission: ht(e) }, routes: j$1(), complete: false, $islands: /* @__PURE__ */ new Set() });
}
const mt = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function Rt(e) {
  return e.status && mt.has(e.status) ? e.status : 302;
}
const yt = {}, E$2 = [AbortSignalPlugin, CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin], St = 64, D = Feature.RegExp;
function W$1(e) {
  const n = new TextEncoder().encode(e), t = n.length, s = t.toString(16), o = "00000000".substring(0, 8 - s.length) + s, a = new TextEncoder().encode(`;0x${o};`), i = new Uint8Array(12 + t);
  return i.set(a), i.set(n, 12), i;
}
function C$1(e, n) {
  return new ReadableStream({ start(t) {
    crossSerializeStream(n, { scopeId: e, plugins: E$2, onSerialize(s, o) {
      t.enqueue(W$1(o ? `(${getCrossReferenceHeader(e)},${s})` : s));
    }, onDone() {
      t.close();
    }, onError(s) {
      t.error(s);
    } });
  } });
}
function wt(e) {
  return new ReadableStream({ start(n) {
    toCrossJSONStream(e, { disabledFeatures: D, depthLimit: St, plugins: E$2, onParse(t) {
      n.enqueue(W$1(JSON.stringify(t)));
    }, onDone() {
      n.close();
    }, onError(t) {
      n.error(t);
    } });
  } });
}
async function P(e) {
  return fromJSON(JSON.parse(e), { plugins: E$2, disabledFeatures: D });
}
async function bt(e) {
  const n = rt(e), t = n.request, s = t.headers.get("X-Server-Id"), o = t.headers.get("X-Server-Instance"), a = t.headers.has("X-Single-Flight"), i = new URL(t.url);
  let c, p;
  if (s) et(typeof s == "string", "Invalid server function"), [c, p] = decodeURIComponent(s).split("#");
  else if (c = i.searchParams.get("id"), p = i.searchParams.get("name"), !c || !p) return new Response(null, { status: 404 });
  const l = yt[c];
  let g;
  if (!l) return new Response(null, { status: 404 });
  g = await l.importer();
  const B = g[l.functionName];
  let f = [];
  if (!o || e.method === "GET") {
    const r = i.searchParams.get("args");
    if (r) {
      const d = await P(r);
      for (const m of d) f.push(m);
    }
  }
  if (e.method === "POST") {
    const r = t.headers.get("content-type"), d = e.node.req, m = d instanceof ReadableStream, z = d.body instanceof ReadableStream, J = m && d.locked || z && d.body.locked, X = m ? d : d.body, w = J ? t : new Request(t, { ...t, body: X });
    t.headers.get("x-serialized") ? f = await P(await w.text()) : (r == null ? void 0 : r.startsWith("multipart/form-data")) || (r == null ? void 0 : r.startsWith("application/x-www-form-urlencoded")) ? f.push(await w.formData()) : (r == null ? void 0 : r.startsWith("application/json")) && (f = await w.json());
  }
  try {
    let r = await provideRequestEvent(n, async () => (sharedConfig.context = { event: n }, n.locals.serverFunctionMeta = { id: c + "#" + p }, B(...f)));
    if (a && o && (r = await L$2(n, r)), r instanceof Response) {
      if (r.headers && r.headers.has("X-Content-Raw")) return r;
      o && (r.headers && k$1(e, r.headers), r.status && (r.status < 300 || r.status >= 400) && S$1(e, r.status), r.customBody ? r = await r.customBody() : r.body == null && (r = null));
    }
    if (!o) return F$1(r, t, f);
    return h$1(e, "x-serialized", "true"), h$1(e, "content-type", "text/javascript"), C$1(o, r);
    return wt(r);
  } catch (r) {
    if (r instanceof Response) a && o && (r = await L$2(n, r)), r.headers && k$1(e, r.headers), r.status && (!o || r.status < 300 || r.status >= 400) && S$1(e, r.status), r.customBody ? r = r.customBody() : r.body == null && (r = null), h$1(e, "X-Error", "true");
    else if (o) {
      const d = r instanceof Error ? r.message : typeof r == "string" ? r : "true";
      h$1(e, "X-Error", d.replace(/[\r\n]+/g, ""));
    } else r = F$1(r, t, f, true);
    return o ? (h$1(e, "x-serialized", "true"), h$1(e, "content-type", "text/javascript"), C$1(o, r)) : r;
  }
}
function F$1(e, n, t, s) {
  const o = new URL(n.url), a = e instanceof Error;
  let i = 302, c;
  return e instanceof Response ? (c = new Headers(e.headers), e.headers.has("Location") && (c.set("Location", new URL(e.headers.get("Location"), o.origin + "").toString()), i = Rt(e))) : c = new Headers({ Location: new URL(n.headers.get("referer")).toString() }), e && c.append("Set-Cookie", `flash=${encodeURIComponent(JSON.stringify({ url: o.pathname + o.search, result: a ? e.message : e, thrown: s, error: a, input: [...t.slice(0, -1), [...t[t.length - 1].entries()]] }))}; Secure; HttpOnly;`), new Response(null, { status: i, headers: c });
}
let v$1;
function $t(e) {
  var _a;
  const n = new Headers(e.request.headers), t = ze(e.nativeEvent), s = e.response.headers.getSetCookie();
  n.delete("cookie");
  let o = false;
  return ((_a = e.nativeEvent.node) == null ? void 0 : _a.req) && (o = true, e.nativeEvent.node.req.headers.cookie = ""), s.forEach((a) => {
    if (!a) return;
    const { maxAge: i, expires: c, name: p, value: l } = parseSetCookie(a);
    if (i != null && i <= 0) {
      delete t[p];
      return;
    }
    if (c != null && c.getTime() <= Date.now()) {
      delete t[p];
      return;
    }
    t[p] = l;
  }), Object.entries(t).forEach(([a, i]) => {
    n.append("cookie", `${a}=${i}`), o && (e.nativeEvent.node.req.headers.cookie += `${a}=${i};`);
  }), n;
}
async function L$2(e, n) {
  let t, s = new URL(e.request.headers.get("referer")).toString();
  n instanceof Response && (n.headers.has("X-Revalidate") && (t = n.headers.get("X-Revalidate").split(",")), n.headers.has("Location") && (s = new URL(n.headers.get("Location"), new URL(e.request.url).origin + "").toString()));
  const o = nt(e);
  return o.request = new Request(s, { headers: $t(e) }), await provideRequestEvent(o, async () => {
    await gt(o), v$1 || (v$1 = (await import('../build/app-DX_SQeTQ.mjs')).default), o.router.dataOnly = t || true, o.router.previousUrl = e.request.headers.get("referer");
    try {
      renderToString(() => {
        sharedConfig.context.event = o, v$1();
      });
    } catch (c) {
      console.log(c);
    }
    const a = o.router.data;
    if (!a) return n;
    let i = false;
    for (const c in a) a[c] === void 0 ? delete a[c] : i = true;
    return i && (n instanceof Response ? n.customBody && (a._$value = n.customBody()) : (a._$value = n, n = new Response(null, { status: 200 })), n.customBody = () => a, n.headers.set("X-Single-Flight", "true")), n;
  });
}
const Lt = eventHandler(bt);

const v = createContext(), C = ["title", "meta"], p$1 = [], f = ["name", "http-equiv", "content", "charset", "media"].concat(["property"]), l = (r, t) => {
  const e = Object.fromEntries(Object.entries(r.props).filter(([n]) => t.includes(n)).sort());
  return (Object.hasOwn(e, "name") || Object.hasOwn(e, "property")) && (e.name = e.name || e.property, delete e.property), r.tag + JSON.stringify(e);
};
function M() {
  if (!sharedConfig.context) {
    const e = document.head.querySelectorAll("[data-sm]");
    Array.prototype.forEach.call(e, (n) => n.parentNode.removeChild(n));
  }
  const r = /* @__PURE__ */ new Map();
  function t(e) {
    if (e.ref) return e.ref;
    let n = document.querySelector(`[data-sm="${e.id}"]`);
    return n ? (n.tagName.toLowerCase() !== e.tag && (n.parentNode && n.parentNode.removeChild(n), n = document.createElement(e.tag)), n.removeAttribute("data-sm")) : n = document.createElement(e.tag), n;
  }
  return { addTag(e) {
    if (C.indexOf(e.tag) !== -1) {
      const i = e.tag === "title" ? p$1 : f, a = l(e, i);
      r.has(a) || r.set(a, []);
      let s = r.get(a), m = s.length;
      s = [...s, e], r.set(a, s);
      let c = t(e);
      e.ref = c, spread(c, e.props);
      let d = null;
      for (var n = m - 1; n >= 0; n--) if (s[n] != null) {
        d = s[n];
        break;
      }
      return c.parentNode != document.head && document.head.appendChild(c), d && d.ref && d.ref.parentNode && document.head.removeChild(d.ref), m;
    }
    let o = t(e);
    return e.ref = o, spread(o, e.props), o.parentNode != document.head && document.head.appendChild(o), -1;
  }, removeTag(e, n) {
    const o = e.tag === "title" ? p$1 : f, i = l(e, o);
    if (e.ref) {
      const a = r.get(i);
      if (a) {
        if (e.ref.parentNode) {
          e.ref.parentNode.removeChild(e.ref);
          for (let s = n - 1; s >= 0; s--) a[s] != null && document.head.appendChild(a[s].ref);
        }
        a[n] = null, r.set(i, a);
      } else e.ref.parentNode && e.ref.parentNode.removeChild(e.ref);
    }
  } };
}
function w() {
  const r = [];
  return useAssets(() => ssr(S(r))), { addTag(t) {
    if (C.indexOf(t.tag) !== -1) {
      const e = t.tag === "title" ? p$1 : f, n = l(t, e), o = r.findIndex((i) => i.tag === t.tag && l(i, e) === n);
      o !== -1 && r.splice(o, 1);
    }
    return r.push(t), r.length;
  }, removeTag(t, e) {
  } };
}
const K$2 = (r) => {
  const t = isServer ? w() : M();
  return createComponent$1(v.Provider, { value: t, get children() {
    return r.children;
  } });
}, u$1 = (r, t, e) => (A({ tag: r, props: t, setting: e, id: createUniqueId(), get name() {
  return t.name || t.property;
} }), null);
function A(r) {
  const t = useContext(v);
  if (!t) throw new Error("<MetaProvider /> should be in the tree");
  createRenderEffect(() => {
    const e = t.addTag(r);
    onCleanup(() => t.removeTag(r, e));
  });
}
function S(r) {
  return r.map((t) => {
    var _a, _b;
    const n = Object.keys(t.props).map((i) => i === "children" ? "" : ` ${i}="${escape(t.props[i], true)}"`).join("");
    let o = t.props.children;
    return Array.isArray(o) && (o = o.join("")), ((_a = t.setting) == null ? void 0 : _a.close) ? `<${t.tag} data-sm="${t.id}"${n}>${((_b = t.setting) == null ? void 0 : _b.escape) ? escape(o) : o || ""}</${t.tag}>` : `<${t.tag} data-sm="${t.id}"${n}/>`;
  }).join("");
}
const I$1 = (r) => u$1("title", r, { escape: true, close: true }), L$1 = (r) => u$1("meta", r), H$1 = (r) => u$1("link", r);

var h = ((e) => (e.PtBr = "pt-br", e.En = "en", e))(h || {});
function O() {
  return h.PtBr;
}
const [p, E$1] = createSignal(O()), [j, F] = createSignal(void 0), [G, K$1] = createSignal(void 0), [Y, u] = createSignal(null);
function T(e) {
  E$1(e);
}
const I = async (e) => {
  const t = await fetch(`/data/languages/${e}.json`);
  if (!t.ok) throw new Error("Failed to load messages");
  return t.json();
}, U = async () => {
  const e = await fetch("/data/portfolio_shared_data.json");
  if (!e.ok) throw new Error("Failed to load shared data");
  return e.json();
};
function Z$1(e) {
  const t = j();
  if (!t) return e;
  const r = e.split(".");
  let o = t;
  for (const l of r) if (o && typeof o == "object" && l in o) o = o[l];
  else return e;
  return typeof o == "string" ? o : e;
}
const L = createContext();
function N() {
  const e = useContext(L);
  if (!e) throw new Error("useI18n must be used within I18nProvider");
  return e;
}
function we$1(e) {
  onMount(() => {
    if (U().then((r) => {
      r && K$1(r);
    }).catch((r) => {
      console.error("[i18n] Failed to load shared data:", r), u("Falha ao carregar dados compartilhados");
    }), "undefined" < "u") ;
    I(p()).then((r) => {
      F(r), u(null);
    }).catch((r) => {
      console.error("[i18n] Failed to load messages:", r), u(`Falha ao carregar idioma: ${p()}`);
    });
  });
  const t = { language: p, setLanguage: T, t: Z$1, messages: j, sharedData: G, fetchError: Y };
  return createComponent$1(L.Provider, { value: t, get children() {
    return e.children;
  } });
}
/**
* @license lucide-solid v0.562.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var R = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, i = R, y = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), X = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, r, o) => o ? o.toUpperCase() : r.toLowerCase()), q = (e) => {
  const t = X(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, J$1 = (...e) => e.filter((t, r, o) => !!t && t.trim() !== "" && o.indexOf(t) === r).join(" ").trim(), Q$1 = (e) => {
  const [t, r] = splitProps(e, ["color", "size", "strokeWidth", "children", "class", "name", "iconNode", "absoluteStrokeWidth"]);
  return ssrElement("svg", mergeProps(i, { get width() {
    var _a;
    return (_a = t.size) != null ? _a : i.width;
  }, get height() {
    var _a;
    return (_a = t.size) != null ? _a : i.height;
  }, get stroke() {
    var _a;
    return (_a = t.color) != null ? _a : i.stroke;
  }, get "stroke-width"() {
    var _a, _b;
    return t.absoluteStrokeWidth ? Number((_a = t.strokeWidth) != null ? _a : i["stroke-width"]) * 24 / Number(t.size) : Number((_b = t.strokeWidth) != null ? _b : i["stroke-width"]);
  }, get class() {
    return J$1("lucide", "lucide-icon", ...t.name != null ? [`lucide-${y(q(t.name))}`, `lucide-${y(t.name)}`] : [], t.class != null ? t.class : "");
  } }, r), () => escape(createComponent$1(For, { get each() {
    return t.iconNode;
  }, children: ([o, l]) => createComponent$1(Dynamic, mergeProps({ component: o }, l)) })), true);
}, g = Q$1, V = [["path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4", key: "tonef" }], ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]], ee = (e) => createComponent$1(g, mergeProps(e, { iconNode: V, name: "github" })), te$1 = ee, re$1 = [["path", { d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5", key: "mvr1a0" }]], ae$1 = (e) => createComponent$1(g, mergeProps(e, { iconNode: re$1, name: "heart" })), oe$1 = ae$1, ne$1 = [["path", { d: "M4 5h16", key: "1tepv9" }], ["path", { d: "M4 12h16", key: "1lakjw" }], ["path", { d: "M4 19h16", key: "1djgab" }]], se = (e) => createComponent$1(g, mergeProps(e, { iconNode: ne$1, name: "menu" })), le = se, ce = [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]], ie = (e) => createComponent$1(g, mergeProps(e, { iconNode: ce, name: "x" })), de$1 = ie, ue = ["<div", ' class="', '"><span class="text-xs text-text-muted font-mono">', '</span><div class="flex items-center rounded-lg border border-border overflow-hidden"><button class="', '" aria-label="Portugu\xEAs (Brasil)">\u{1F1E7}\u{1F1F7} PT</button><button class="', '" aria-label="English">\u{1F1FA}\u{1F1F8} EN</button></div></div>'], me$1 = ["<nav", ' class="', '"><div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"><a', ' class="font-mono text-accent-primary font-bold text-lg tracking-wider">&lt;thecodergus/&gt;</a><div class="hidden md:flex items-center gap-8"><!--$-->', "<!--/--><!--$-->", '<!--/--></div><button class="md:hidden text-text-secondary hover:text-accent-secondary"', ">", "</button></div><!--$-->", "<!--/--></nav>"], be$1 = ["<a", ' class="text-sm font-medium text-text-secondary hover:text-accent-secondary transition-colors relative group"><!--$-->', '<!--/--><span class="absolute -bottom-1 left-0 w-0 h-px bg-accent-secondary transition-all group-hover:w-full"></span></a>'], he$1 = ["<div", ' class="md:hidden bg-surface/95 backdrop-blur-md border-b border-border px-6 py-4 flex flex-col gap-4"><!--$-->', "<!--/--><!--$-->", "<!--/--></div>"], fe$1 = ["<a", ' class="text-sm font-medium text-text-secondary hover:text-accent-secondary transition-colors">', "</a>"];
const $ = (e) => {
  const t = "bg-accent-secondary text-bg border-accent-secondary", r = "bg-transparent text-text-muted border-border hover:border-accent-secondary hover:text-accent-secondary";
  return ssr(ue, ssrHydrationKey(), `flex items-center gap-2 ${e.mobile ? "pt-2 border-t border-border" : ""}`, escape(e.label()), `px-3 py-1.5 text-sm font-medium transition-colors border-r border-border ${e.language() === h.PtBr ? escape(t, true) : escape(r, true)}`, `px-3 py-1.5 text-sm font-medium transition-colors ${e.language() === h.En ? escape(t, true) : escape(r, true)}`);
};
function ye$1(e) {
  const { language: t, messages: r } = N(), [o, l] = createSignal(false), [v, ge] = createSignal(false), P = () => t() === h.En ? "Home" : "In\xEDcio", x = () => {
    var _a;
    const n = (_a = r()) == null ? void 0 : _a.navbar;
    return e.standalone ? [{ href: "/", label: P() }] : [{ href: "#about", label: (n == null ? void 0 : n.about) || "Sobre" }, { href: "#skills", label: (n == null ? void 0 : n.skills) || "Habilidades" }, { href: "#experience", label: (n == null ? void 0 : n.experience) || "Experi\xEAncia" }, { href: "#projects", label: (n == null ? void 0 : n.projects) || "Projetos" }, { href: "#contact", label: (n == null ? void 0 : n.contact) || "Contato" }];
  }, w = () => {
    var _a, _b;
    return ((_b = (_a = r()) == null ? void 0 : _a.navbar) == null ? void 0 : _b.language) || "Idioma";
  }, S = () => {
    var _a, _b;
    return ((_b = (_a = r()) == null ? void 0 : _a.navbar) == null ? void 0 : _b.menu_open) || "Abrir menu";
  };
  return onMount(() => {
    const n = () => {
      l(window.scrollY > 50);
    };
    window.addEventListener("scroll", n), onCleanup(() => window.removeEventListener("scroll", n));
  }), ssr(me$1, ssrHydrationKey(), `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${o() ? "bg-bg/80 backdrop-blur-md border-b border-border" : ""} ${o() ? "" : "bg-transparent"}`, ssrAttribute("href", e.standalone ? "/" : "#", false), escape(x().map((n) => ssr(be$1, ssrHydrationKey() + ssrAttribute("href", escape(n.href, true), false), escape(n.label)))), escape(createComponent$1($, { language: t, label: w })), ssrAttribute("aria-label", escape(S(), true), false), v() ? escape(createComponent$1(de$1, { size: 24 })) : escape(createComponent$1(le, { size: 24 })), v() && ssr(he$1, ssrHydrationKey(), escape(x().map((n) => ssr(fe$1, ssrHydrationKey() + ssrAttribute("href", escape(n.href, true), false), escape(n.label)))), escape(createComponent$1($, { language: t, label: w, mobile: true }))));
}
var pe$1 = ["<footer", ' class="py-8 bg-bg border-t border-border"><div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4"><div class="flex items-center gap-2 text-sm text-text-muted"><span>', "</span><!--$-->", "<!--/--><span><!--$-->", "<!--/--> <!--$-->", '<!--/--></span></div><div class="flex items-center gap-6"><a href="https://github.com/thecodergus" target="_blank" rel="noopener noreferrer" class="text-text-muted hover:text-accent-primary transition-colors" aria-label="GitHub">', "</a><!--$-->", '<!--/--></div><p class="text-xs text-text-muted font-mono">&copy; <!--$-->', "<!--/--> <!--$-->", "<!--/--></p></div></footer>"], k = ["<a", ' href="/doom" class="text-xs font-mono text-text-muted hover:text-accent-primary transition-colors border border-border px-3 py-1 rounded hover:border-accent-primary">/doom</a>'];
function $e(e) {
  var _a, _b;
  const { sharedData: t, messages: r } = N(), o = () => {
    var _a2, _b2;
    return ((_b2 = (_a2 = t()) == null ? void 0 : _a2.basic_info) == null ? void 0 : _b2.name) || "";
  }, l = () => {
    var _a2, _b2;
    return ((_b2 = (_a2 = r()) == null ? void 0 : _a2.footer) == null ? void 0 : _b2.made_with) || "";
  };
  return ssr(pe$1, ssrHydrationKey(), escape(l()), escape(createComponent$1(oe$1, { size: 14, class: "text-accent-red fill-accent-red" })), escape(((_b = (_a = r()) == null ? void 0 : _a.footer) == null ? void 0 : _b.by) || "por"), escape(o()), escape(createComponent$1(te$1, { size: 20 })), !e.hideDoomLink && k[0] + ssrHydrationKey() + k[1], escape((/* @__PURE__ */ new Date()).getFullYear()), escape(o()));
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
function Ut(e) {
  let t;
  const n = Te(e), o = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(n, { ...o, body: e.node.req.body }) : new Request(n, { ...o, get body() {
    return t || (t = Yt(e), t);
  } });
}
function Nt(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: Ut(e), url: Te(e) }, e.web.request;
}
function Bt() {
  return tn();
}
const Ce = /* @__PURE__ */ Symbol("$HTTPEvent");
function Wt(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[Ce]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function E(e) {
  return function(...t) {
    var _a;
    let n = t[0];
    if (Wt(n)) t[0] = n instanceof H3Event || n.__is_event__ ? n : n[Ce];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (n = Bt(), !n) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      t.unshift(n);
    }
    return e(...t);
  };
}
const Te = E(getRequestURL), Dt = E(getRequestIP), te = E(setResponseStatus), de = E(getResponseStatus), Gt = E(getResponseStatusText), K = E(getResponseHeaders), he = E(getResponseHeader), Vt = E(setResponseHeader), zt = E(appendResponseHeader), pe = E(sendRedirect), Kt = E(getCookie), Jt = E(setCookie), Xt = E(setHeader), Yt = E(getRequestWebStream), Qt = E(removeResponseHeader), Zt = E(Nt);
function en() {
  var _a;
  return getContext("nitro-app", { asyncContext: !!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function tn() {
  return en().use().event;
}
const Le = [{ page: true, $component: { src: "src/routes/doom.tsx?pick=default&pick=$css", build: () => import('../build/doom2.mjs'), import: () => import('../build/doom2.mjs') }, path: "/doom", filePath: "/home/gus/thecodergus.github.io/src/routes/doom.tsx" }, { page: true, $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => import('../build/index2.mjs'), import: () => import('../build/index2.mjs') }, path: "/", filePath: "/home/gus/thecodergus.github.io/src/routes/index.tsx" }], nn = rn(Le.filter((e) => e.page));
function rn(e) {
  function t(n, o, r, s) {
    const a = Object.values(n).find((i) => r.startsWith(i.id + "/"));
    return a ? (t(a.children || (a.children = []), o, r.slice(a.id.length)), n) : (n.push({ ...o, id: r, path: r.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/") }), n);
  }
  return e.sort((n, o) => n.path.length - o.path.length).reduce((n, o) => t(n, o, o.path, o.path), []);
}
function on(e, t) {
  const n = an.lookup(e);
  if (n && n.route) {
    const o = n.route, r = t === "HEAD" ? o.$HEAD || o.$GET : o[`$${t}`];
    if (r === void 0) return;
    const s = o.page === true && o.$component !== void 0;
    return { handler: r, params: n.params, isPage: s };
  }
}
function sn(e) {
  return e.$HEAD || e.$GET || e.$POST || e.$PUT || e.$PATCH || e.$DELETE;
}
const an = createRouter({ routes: Le.reduce((e, t) => {
  if (!sn(t)) return e;
  let n = t.path.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/").replace(/\*([^/]*)/g, (o, r) => `**:${r}`).split("/").map((o) => o.startsWith(":") || o.startsWith("*") ? o : encodeURIComponent(o)).join("/");
  if (/:[^/]*\?/g.test(n)) throw new Error(`Optional parameters are not supported in API routes: ${n}`);
  if (e[n]) throw new Error(`Duplicate API routes for "${n}" found at "${e[n].route.path}" and "${t.path}"`);
  return e[n] = { route: t }, e;
}, {}) }), Q = "solidFetchEvent";
function cn(e) {
  return { request: Zt(e), response: dn(e), clientAddress: Dt(e), locals: {}, nativeEvent: e };
}
function un(e) {
  if (!e.context[Q]) {
    const t = cn(e);
    e.context[Q] = t;
  }
  return e.context[Q];
}
class ln {
  constructor(t) {
    __publicField(this, "event");
    this.event = t;
  }
  get(t) {
    const n = he(this.event, t);
    return Array.isArray(n) ? n.join(", ") : n || null;
  }
  has(t) {
    return this.get(t) !== null;
  }
  set(t, n) {
    return Vt(this.event, t, n);
  }
  delete(t) {
    return Qt(this.event, t);
  }
  append(t, n) {
    zt(this.event, t, n);
  }
  getSetCookie() {
    const t = he(this.event, "Set-Cookie");
    return Array.isArray(t) ? t : [t];
  }
  forEach(t) {
    return Object.entries(K(this.event)).forEach(([n, o]) => t(Array.isArray(o) ? o.join(", ") : o, n, this));
  }
  entries() {
    return Object.entries(K(this.event)).map(([t, n]) => [t, Array.isArray(n) ? n.join(", ") : n])[Symbol.iterator]();
  }
  keys() {
    return Object.keys(K(this.event))[Symbol.iterator]();
  }
  values() {
    return Object.values(K(this.event)).map((t) => Array.isArray(t) ? t.join(", ") : t)[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }
}
function dn(e) {
  return { get status() {
    return de(e);
  }, set status(t) {
    te(e, t);
  }, get statusText() {
    return Gt(e);
  }, set statusText(t) {
    te(e, de(e), t);
  }, headers: new ln(e) };
}
var pn = " ";
const fn = { style: (e) => ssrElement("style", e.attrs, () => e.children, true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(pn), true) : null, noscript: (e) => ssrElement("noscript", e.attrs, () => escape(e.children), true) };
function ne(e, t) {
  let { tag: n, attrs: { key: o, ...r } = { key: void 0 }, children: s } = e;
  return fn[n]({ attrs: { ...r, nonce: t }, key: o, children: s });
}
function mn(e, t, n, o = "default") {
  return lazy(async () => {
    var _a;
    {
      const s = (await e.import())[o], i = (await ((_a = t.inputs) == null ? void 0 : _a[e.src].assets())).filter((u) => u.tag === "style" || u.attrs.rel === "stylesheet");
      return { default: (u) => [...i.map((h) => ne(h)), createComponent(s, u)] };
    }
  });
}
function ke() {
  function e(n) {
    return { ...n, ...n.$$route ? n.$$route.require().route : void 0, info: { ...n.$$route ? n.$$route.require().route.info : {}, filesystem: true }, component: n.$component && mn(n.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: n.children ? n.children.map(e) : void 0 };
  }
  return nn.map(e);
}
let fe;
const gn = isServer ? () => getRequestEvent().routes : () => fe || (fe = ke());
function yn(e) {
  const t = Kt(e.nativeEvent, "flash");
  if (t) try {
    let n = JSON.parse(t);
    if (!n || !n.result) return;
    const o = [...n.input.slice(0, -1), new Map(n.input[n.input.length - 1])], r = n.error ? new Error(n.result) : n.result;
    return { input: o, url: n.url, pending: false, result: n.thrown ? void 0 : r, error: n.thrown ? r : void 0 };
  } catch (n) {
    console.error(n);
  } finally {
    Jt(e.nativeEvent, "flash", "", { maxAge: 0 });
  }
}
async function wn(e) {
  const t = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, e.response.headers.set("Content-Type", "text/html"), Object.assign(e, { manifest: await t.json(), assets: [...await t.inputs[t.handler].assets()], router: { submission: yn(e) }, routes: ke(), complete: false, $islands: /* @__PURE__ */ new Set() });
}
const bn = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function re(e) {
  return e.status && bn.has(e.status) ? e.status : 302;
}
function vn(e, t, n = {}, o) {
  return eventHandler({ handler: (r) => {
    const s = un(r);
    return provideRequestEvent(s, async () => {
      const a = on(new URL(s.request.url).pathname, s.request.method);
      if (a) {
        const p = await a.handler.import(), y = s.request.method === "HEAD" ? p.HEAD || p.GET : p[s.request.method];
        s.params = a.params || {}, sharedConfig.context = { event: s };
        const d = await y(s);
        if (d !== void 0) return d;
        if (s.request.method !== "GET") throw new Error(`API handler for ${s.request.method} "${s.request.url}" did not return a response.`);
        if (!a.isPage) return;
      }
      const i = await t(s), c = typeof n == "function" ? await n(i) : { ...n }, u = c.mode || "stream";
      if (c.nonce && (i.nonce = c.nonce), u === "sync") {
        const p = renderToString(() => (sharedConfig.context.event = i, e(i)), c);
        if (i.complete = true, i.response && i.response.headers.get("Location")) {
          const y = re(i.response);
          return pe(r, i.response.headers.get("Location"), y);
        }
        return p;
      }
      if (c.onCompleteAll) {
        const p = c.onCompleteAll;
        c.onCompleteAll = (y) => {
          ge(i)(y), p(y);
        };
      } else c.onCompleteAll = ge(i);
      if (c.onCompleteShell) {
        const p = c.onCompleteShell;
        c.onCompleteShell = (y) => {
          me(i, r)(), p(y);
        };
      } else c.onCompleteShell = me(i, r);
      const h = renderToStream(() => (sharedConfig.context.event = i, e(i)), c);
      if (i.response && i.response.headers.get("Location")) {
        const p = re(i.response);
        return pe(r, i.response.headers.get("Location"), p);
      }
      if (u === "async") return h;
      const { writable: b, readable: g } = new TransformStream();
      return h.pipeTo(b), g;
    });
  } });
}
function me(e, t) {
  return () => {
    if (e.response && e.response.headers.get("Location")) {
      const n = re(e.response);
      te(t, n), Xt(t, "Location", e.response.headers.get("Location"));
    }
  };
}
function ge(e) {
  return ({ write: t }) => {
    e.complete = true;
    const n = e.response && e.response.headers.get("Location");
    n && t(`<script>window.location="${n}"<\/script>`);
  };
}
function Rn(e, t, n) {
  return vn(e, wn, t);
}
function Ie() {
  let e = /* @__PURE__ */ new Set();
  function t(r) {
    return e.add(r), () => e.delete(r);
  }
  let n = false;
  function o(r, s) {
    if (n) return !(n = false);
    const a = { to: r, options: s, defaultPrevented: false, preventDefault: () => a.defaultPrevented = true };
    for (const i of e) i.listener({ ...a, from: i.location, retry: (c) => {
      c && (n = true), i.navigate(r, { ...s, resolve: false });
    } });
    return !a.defaultPrevented;
  }
  return { subscribe: t, confirm: o };
}
let oe;
function ae() {
  (!window.history.state || window.history.state._depth == null) && window.history.replaceState({ ...window.history.state, _depth: window.history.length - 1 }, ""), oe = window.history.state._depth;
}
isServer || ae();
function En(e) {
  return { ...e, _depth: window.history.state && window.history.state._depth };
}
function xn(e, t) {
  let n = false;
  return () => {
    const o = oe;
    ae();
    const r = o == null ? null : oe - o;
    if (n) {
      n = false;
      return;
    }
    r && t(r) ? (n = true, window.history.go(-r)) : e();
  };
}
const An = /^(?:[a-z0-9]+:)?\/\//i, Sn = /^\/+|(\/)\/+$/g, He = "http://sr";
function B(e, t = false) {
  const n = e.replace(Sn, "$1");
  return n ? t || /^[?#]/.test(n) ? n : "/" + n : "";
}
function J(e, t, n) {
  if (An.test(t)) return;
  const o = B(e), r = n && B(n);
  let s = "";
  return !r || t.startsWith("/") ? s = o : r.toLowerCase().indexOf(o.toLowerCase()) !== 0 ? s = o + r : s = r, (s || "/") + B(t, !s);
}
function $n(e, t) {
  return B(e).replace(/\/*(\*.*)?$/g, "") + B(t);
}
function qe(e) {
  const t = {};
  return e.searchParams.forEach((n, o) => {
    o in t ? Array.isArray(t[o]) ? t[o].push(n) : t[o] = [t[o], n] : t[o] = n;
  }), t;
}
function Pn(e, t, n) {
  const [o, r] = e.split("/*", 2), s = o.split("/").filter(Boolean), a = s.length;
  return (i) => {
    const c = i.split("/").filter(Boolean), u = c.length - a;
    if (u < 0 || u > 0 && r === void 0 && !t) return null;
    const h = { path: a ? "" : "/", params: {} }, b = (g) => n === void 0 ? void 0 : n[g];
    for (let g = 0; g < a; g++) {
      const p = s[g], y = p[0] === ":", d = y ? c[g] : c[g].toLowerCase(), f = y ? p.slice(1) : p.toLowerCase();
      if (y && Z(d, b(f))) h.params[f] = d;
      else if (y || !Z(d, f)) return null;
      h.path += `/${d}`;
    }
    if (r) {
      const g = u ? c.slice(-u).join("/") : "";
      if (Z(g, b(r))) h.params[r] = g;
      else return null;
    }
    return h;
  };
}
function Z(e, t) {
  const n = (o) => o === e;
  return t === void 0 ? true : typeof t == "string" ? n(t) : typeof t == "function" ? t(e) : Array.isArray(t) ? t.some(n) : t instanceof RegExp ? t.test(e) : false;
}
function Cn(e) {
  const [t, n] = e.pattern.split("/*", 2), o = t.split("/").filter(Boolean);
  return o.reduce((r, s) => r + (s.startsWith(":") ? 2 : 3), o.length - (n === void 0 ? 0 : 1));
}
function Oe(e) {
  const t = /* @__PURE__ */ new Map(), n = getOwner();
  return new Proxy({}, { get(o, r) {
    return t.has(r) || runWithOwner(n, () => t.set(r, createMemo(() => e()[r]))), t.get(r)();
  }, getOwnPropertyDescriptor() {
    return { enumerable: true, configurable: true };
  }, ownKeys() {
    return Reflect.ownKeys(e());
  }, has(o, r) {
    return r in e();
  } });
}
function _e(e) {
  let t = /(\/?\:[^\/]+)\?/.exec(e);
  if (!t) return [e];
  let n = e.slice(0, t.index), o = e.slice(t.index + t[0].length);
  const r = [n, n += t[1]];
  for (; t = /^(\/\:[^\/]+)\?/.exec(o); ) r.push(n += t[1]), o = o.slice(t[0].length);
  return _e(o).reduce((s, a) => [...s, ...r.map((i) => i + a)], []);
}
const Tn = 100, Ln = createContext(), Me = createContext();
function kn(e, t = "") {
  const { component: n, preload: o, load: r, children: s, info: a } = e, i = !s || Array.isArray(s) && !s.length, c = { key: e, component: n, preload: o || r, info: a };
  return Fe(e.path).reduce((u, h) => {
    for (const b of _e(h)) {
      const g = $n(t, b);
      let p = i ? g : g.split("/*", 1)[0];
      p = p.split("/").map((y) => y.startsWith(":") || y.startsWith("*") ? y : encodeURIComponent(y)).join("/"), u.push({ ...c, originalPath: h, pattern: p, matcher: Pn(p, !i, e.matchFilters) });
    }
    return u;
  }, []);
}
function In(e, t = 0) {
  return { routes: e, score: Cn(e[e.length - 1]) * 1e4 - t, matcher(n) {
    const o = [];
    for (let r = e.length - 1; r >= 0; r--) {
      const s = e[r], a = s.matcher(n);
      if (!a) return null;
      o.unshift({ ...a, route: s });
    }
    return o;
  } };
}
function Fe(e) {
  return Array.isArray(e) ? e : [e];
}
function je(e, t = "", n = [], o = []) {
  const r = Fe(e);
  for (let s = 0, a = r.length; s < a; s++) {
    const i = r[s];
    if (i && typeof i == "object") {
      i.hasOwnProperty("path") || (i.path = "");
      const c = kn(i, t);
      for (const u of c) {
        n.push(u);
        const h = Array.isArray(i.children) && i.children.length === 0;
        if (i.children && !h) je(i.children, u.pattern, n, o);
        else {
          const b = In([...n], o.length);
          o.push(b);
        }
        n.pop();
      }
    }
  }
  return n.length ? o : o.sort((s, a) => a.score - s.score);
}
function W(e, t) {
  for (let n = 0, o = e.length; n < o; n++) {
    const r = e[n].matcher(t);
    if (r) return r;
  }
  return [];
}
function Hn(e, t, n) {
  const o = new URL(He), r = createMemo((h) => {
    const b = e();
    try {
      return new URL(b, o);
    } catch {
      return console.error(`Invalid path ${b}`), h;
    }
  }, o, { equals: (h, b) => h.href === b.href }), s = createMemo(() => r().pathname), a = createMemo(() => r().search, true), i = createMemo(() => r().hash), c = () => "", u = on$1(a, () => qe(r()));
  return { get pathname() {
    return s();
  }, get search() {
    return a();
  }, get hash() {
    return i();
  }, get state() {
    return t();
  }, get key() {
    return c();
  }, query: n ? n(u) : Oe(u) };
}
let H;
function qn() {
  return H;
}
function On(e, t, n, o = {}) {
  const { signal: [r, s], utils: a = {} } = e, i = a.parsePath || ((m) => m), c = a.renderPath || ((m) => m), u = a.beforeLeave || Ie(), h = J("", o.base || "");
  if (h === void 0) throw new Error(`${h} is not a valid base path`);
  h && !r().value && s({ value: h, replace: true, scroll: false });
  const [b, g] = createSignal(false);
  let p;
  const y = (m, w) => {
    w.value === d() && w.state === R() || (p === void 0 && g(true), H = m, p = w, startTransition(() => {
      p === w && (f(p.value), v(p.state), resetErrorBoundaries(), isServer || I[1]((S) => S.filter((O) => O.pending)));
    }).finally(() => {
      p === w && batch(() => {
        H = void 0, m === "navigate" && Ve(p), g(false), p = void 0;
      });
    }));
  }, [d, f] = createSignal(r().value), [R, v] = createSignal(r().state), k = Hn(d, R, a.queryWrapper), P = [], I = createSignal(isServer ? Ke() : []), U = createMemo(() => typeof o.transformUrl == "function" ? W(t(), o.transformUrl(k.pathname)) : W(t(), k.pathname)), ie = () => {
    const m = U(), w = {};
    for (let S = 0; S < m.length; S++) Object.assign(w, m[S].params);
    return w;
  }, We = a.paramsWrapper ? a.paramsWrapper(ie, t) : Oe(ie), ce = { pattern: h, path: () => h, outlet: () => null, resolvePath(m) {
    return J(h, m);
  } };
  return createRenderEffect(on$1(r, (m) => y("native", m), { defer: true })), { base: ce, location: k, params: We, isRouting: b, renderPath: c, parsePath: i, navigatorFactory: Ge, matches: U, beforeLeave: u, preloadRoute: ze, singleFlight: o.singleFlight === void 0 ? true : o.singleFlight, submissions: I };
  function De(m, w, S) {
    untrack(() => {
      if (typeof w == "number") {
        w && (a.go ? a.go(w) : console.warn("Router integration does not support relative routing"));
        return;
      }
      const O = !w || w[0] === "?", { replace: D, resolve: _, scroll: G, state: M } = { replace: false, resolve: !O, scroll: true, ...S }, F = _ ? m.resolvePath(w) : J(O && k.pathname || "", w);
      if (F === void 0) throw new Error(`Path '${w}' is not a routable path`);
      if (P.length >= Tn) throw new Error("Too many redirects");
      const ue = d();
      if (F !== ue || M !== R()) if (isServer) {
        const le = getRequestEvent();
        le && (le.response = { status: 302, headers: new Headers({ Location: F }) }), s({ value: F, replace: D, scroll: G, state: M });
      } else u.confirm(F, S) && (P.push({ value: ue, replace: D, scroll: G, state: R() }), y("navigate", { value: F, state: M }));
    });
  }
  function Ge(m) {
    return m = m || useContext(Me) || ce, (w, S) => De(m, w, S);
  }
  function Ve(m) {
    const w = P[0];
    w && (s({ ...m, replace: w.replace, scroll: w.scroll }), P.length = 0);
  }
  function ze(m, w) {
    const S = W(t(), m.pathname), O = H;
    H = "preload";
    for (let D in S) {
      const { route: _, params: G } = S[D];
      _.component && _.component.preload && _.component.preload();
      const { preload: M } = _;
      w && M && runWithOwner(n(), () => M({ params: G, location: { pathname: m.pathname, search: m.search, hash: m.hash, query: qe(m), state: null, key: "" }, intent: "preload" }));
    }
    H = O;
  }
  function Ke() {
    const m = getRequestEvent();
    return m && m.router && m.router.submission ? [m.router.submission] : [];
  }
}
function _n(e, t, n, o) {
  const { base: r, location: s, params: a } = e, { pattern: i, component: c, preload: u } = o().route, h = createMemo(() => o().path);
  c && c.preload && c.preload();
  const b = u ? u({ params: a, location: s, intent: H || "initial" }) : void 0;
  return { parent: t, pattern: i, path: h, outlet: () => c ? createComponent(c, { params: a, location: s, data: b, get children() {
    return n();
  } }) : n(), resolvePath(p) {
    return J(r.path(), p, h());
  } };
}
const Ue = (e) => (t) => {
  const { base: n } = t, o = children(() => t.children), r = createMemo(() => je(o(), t.base || ""));
  let s;
  const a = On(e, r, () => s, { base: n, singleFlight: t.singleFlight, transformUrl: t.transformUrl });
  return e.create && e.create(a), createComponent$1(Ln.Provider, { value: a, get children() {
    return createComponent$1(Mn, { routerState: a, get root() {
      return t.root;
    }, get preload() {
      return t.rootPreload || t.rootLoad;
    }, get children() {
      return [(s = getOwner()) && null, createComponent$1(Fn, { routerState: a, get branches() {
        return r();
      } })];
    } });
  } });
};
function Mn(e) {
  const t = e.routerState.location, n = e.routerState.params, o = createMemo(() => e.preload && untrack(() => {
    e.preload({ params: n, location: t, intent: qn() || "initial" });
  }));
  return createComponent$1(Show, { get when() {
    return e.root;
  }, keyed: true, get fallback() {
    return e.children;
  }, children: (r) => createComponent$1(r, { params: n, location: t, get data() {
    return o();
  }, get children() {
    return e.children;
  } }) });
}
function Fn(e) {
  if (isServer) {
    const r = getRequestEvent();
    if (r && r.router && r.router.dataOnly) {
      Un(r, e.routerState, e.branches);
      return;
    }
    r && ((r.router || (r.router = {})).matches || (r.router.matches = e.routerState.matches().map(({ route: s, path: a, params: i }) => ({ path: s.originalPath, pattern: s.pattern, match: a, params: i, info: s.info }))));
  }
  const t = [];
  let n;
  const o = createMemo(on$1(e.routerState.matches, (r, s, a) => {
    let i = s && r.length === s.length;
    const c = [];
    for (let u = 0, h = r.length; u < h; u++) {
      const b = s && s[u], g = r[u];
      a && b && g.route.key === b.route.key ? c[u] = a[u] : (i = false, t[u] && t[u](), createRoot((p) => {
        t[u] = p, c[u] = _n(e.routerState, c[u - 1] || e.routerState.base, ye(() => o()[u + 1]), () => {
          var _a;
          const y = e.routerState.matches();
          return (_a = y[u]) != null ? _a : y[0];
        });
      }));
    }
    return t.splice(r.length).forEach((u) => u()), a && i ? a : (n = c[0], c);
  }));
  return ye(() => o() && n)();
}
const ye = (e) => () => createComponent$1(Show, { get when() {
  return e();
}, keyed: true, children: (t) => createComponent$1(Me.Provider, { value: t, get children() {
  return t.outlet();
} }) }), jn = (e) => {
  const t = children(() => e.children);
  return mergeProps$1(e, { get children() {
    return t();
  } });
};
function Un(e, t, n) {
  const o = new URL(e.request.url), r = W(n, new URL(e.router.previousUrl || e.request.url).pathname), s = W(n, o.pathname);
  for (let a = 0; a < s.length; a++) {
    (!r[a] || s[a].route !== r[a].route) && (e.router.dataOnly = true);
    const { route: i, params: c } = s[a];
    i.preload && i.preload({ params: c, location: t.location, intent: "preload" });
  }
}
function Nn([e, t], n, o) {
  return [e, o ? (r) => t(o(r)) : t];
}
function Bn(e) {
  let t = false;
  const n = (r) => typeof r == "string" ? { value: r } : r, o = Nn(createSignal(n(e.get()), { equals: (r, s) => r.value === s.value && r.state === s.state }), void 0, (r) => (!t && e.set(r), sharedConfig.registry && !sharedConfig.done && (sharedConfig.done = true), r));
  return e.init && onCleanup(e.init((r = e.get()) => {
    t = true, o[1](n(r)), t = false;
  })), Ue({ signal: o, create: e.create, utils: e.utils });
}
function Wn(e, t, n) {
  return e.addEventListener(t, n), () => e.removeEventListener(t, n);
}
function Dn(e, t) {
  const n = e && document.getElementById(e);
  n ? n.scrollIntoView() : t && window.scrollTo(0, 0);
}
function Gn(e) {
  const t = new URL(e);
  return t.pathname + t.search;
}
function Vn(e) {
  let t;
  const n = { value: e.url || (t = getRequestEvent()) && Gn(t.request.url) || "" };
  return Ue({ signal: [() => n, (o) => Object.assign(n, o)] })(e);
}
const zn = /* @__PURE__ */ new Map();
function Kn({ preload: e = true, explicitLinks: t = false, actionBase: n = "/_server", transformUrl: o } = {}) {
  return (r) => {
    const s = r.base.path(), a = r.navigatorFactory(r.base);
    let i, c;
    function u(d) {
      return d.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function h(d) {
      if (d.defaultPrevented || d.button !== 0 || d.metaKey || d.altKey || d.ctrlKey || d.shiftKey) return;
      const f = d.composedPath().find((U) => U instanceof Node && U.nodeName.toUpperCase() === "A");
      if (!f || t && !f.hasAttribute("link")) return;
      const R = u(f), v = R ? f.href.baseVal : f.href;
      if ((R ? f.target.baseVal : f.target) || !v && !f.hasAttribute("state")) return;
      const P = (f.getAttribute("rel") || "").split(/\s+/);
      if (f.hasAttribute("download") || P && P.includes("external")) return;
      const I = R ? new URL(v, document.baseURI) : new URL(v);
      if (!(I.origin !== window.location.origin || s && I.pathname && !I.pathname.toLowerCase().startsWith(s.toLowerCase()))) return [f, I];
    }
    function b(d) {
      const f = h(d);
      if (!f) return;
      const [R, v] = f, k = r.parsePath(v.pathname + v.search + v.hash), P = R.getAttribute("state");
      d.preventDefault(), a(k, { resolve: false, replace: R.hasAttribute("replace"), scroll: !R.hasAttribute("noscroll"), state: P ? JSON.parse(P) : void 0 });
    }
    function g(d) {
      const f = h(d);
      if (!f) return;
      const [R, v] = f;
      o && (v.pathname = o(v.pathname)), r.preloadRoute(v, R.getAttribute("preload") !== "false");
    }
    function p(d) {
      clearTimeout(i);
      const f = h(d);
      if (!f) return c = null;
      const [R, v] = f;
      c !== R && (o && (v.pathname = o(v.pathname)), i = setTimeout(() => {
        r.preloadRoute(v, R.getAttribute("preload") !== "false"), c = R;
      }, 20));
    }
    function y(d) {
      if (d.defaultPrevented) return;
      let f = d.submitter && d.submitter.hasAttribute("formaction") ? d.submitter.getAttribute("formaction") : d.target.getAttribute("action");
      if (!f) return;
      if (!f.startsWith("https://action/")) {
        const v = new URL(f, He);
        if (f = r.parsePath(v.pathname + v.search), !f.startsWith(n)) return;
      }
      if (d.target.method.toUpperCase() !== "POST") throw new Error("Only POST forms are supported for Actions");
      const R = zn.get(f);
      if (R) {
        d.preventDefault();
        const v = new FormData(d.target, d.submitter);
        R.call({ r, f: d.target }, d.target.enctype === "multipart/form-data" ? v : new URLSearchParams(v));
      }
    }
    delegateEvents(["click", "submit"]), document.addEventListener("click", b), e && (document.addEventListener("mousemove", p, { passive: true }), document.addEventListener("focusin", g, { passive: true }), document.addEventListener("touchstart", g, { passive: true })), document.addEventListener("submit", y), onCleanup(() => {
      document.removeEventListener("click", b), e && (document.removeEventListener("mousemove", p), document.removeEventListener("focusin", g), document.removeEventListener("touchstart", g)), document.removeEventListener("submit", y);
    });
  };
}
function Jn(e) {
  if (isServer) return Vn(e);
  const t = () => {
    const o = window.location.pathname.replace(/^\/+/, "/") + window.location.search, r = window.history.state && window.history.state._depth && Object.keys(window.history.state).length === 1 ? void 0 : window.history.state;
    return { value: o + window.location.hash, state: r };
  }, n = Ie();
  return Bn({ get: t, set({ value: o, replace: r, scroll: s, state: a }) {
    r ? window.history.replaceState(En(a), "", o) : window.history.pushState(a, "", o), Dn(decodeURIComponent(window.location.hash.slice(1)), s), ae();
  }, init: (o) => Wn(window, "popstate", xn(o, (r) => {
    if (r) return !n.confirm(r);
    {
      const s = t();
      return !n.confirm(s.value, { state: s.state });
    }
  })), create: Kn({ preload: e.preload, explicitLinks: e.explicitLinks, actionBase: e.actionBase, transformUrl: e.transformUrl }), utils: { go: (o) => window.history.go(o), beforeLeave: n } })(e);
}
var Xn = ["<main", ' id="main" class="min-h-screen bg-bg pt-16 flex flex-col items-center justify-center text-center"><div class="px-6 py-16 max-w-2xl"><div class="inline-flex items-center gap-4 px-6 py-2 bg-surface rounded border border-border text-sm font-mono uppercase tracking-wider shadow-glow-primary mb-8"><span class="text-text-muted">', `</span><span class="text-border">|</span><span class="text-text-muted">HEALTH</span><span class="text-accent-primary font-bold">0%</span><span class="text-border">|</span><span class="text-text-muted">ARMOR</span><span class="text-accent-primary font-bold">0%</span></div><div class="text-[10rem] md:text-[14rem] font-black text-accent-primary leading-none relative select-none">404</div><pre class="text-[10px] leading-none text-accent-primary inline-block my-6 select-none opacity-80">   .---.
  | RIP |
  |     |
  |O   O|
  ||   ||
  | \\ // |
  |  V  |
  |-----|
   \\ //
    V V</pre><h2 class="text-2xl md:text-3xl font-bold text-accent-primary mb-4">`, '</h2><p class="text-text-secondary text-lg mb-8 max-w-lg mx-auto">', '</p><a href="/" class="inline-block px-8 py-3 border border-accent-primary text-accent-primary font-semibold font-mono uppercase tracking-wider text-sm hover:bg-accent-primary hover:text-bg hover:shadow-glow-primary transition-all">', '</a><p class="mt-6 text-sm text-text-muted">', "</p></div></main>"];
function Yn() {
  var _a, _b, _c, _d, _e2;
  const { messages: e } = N(), t = () => {
    var _a2;
    return (_a2 = e()) == null ? void 0 : _a2.not_found;
  };
  return onMount(() => {
    const n = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", "doom"), onCleanup(() => {
      n ? document.documentElement.setAttribute("data-theme", n) : document.documentElement.removeAttribute("data-theme");
    });
  }), [createComponent$1(ye$1, { standalone: true }), ssr(Xn, ssrHydrationKey(), escape(((_a = t()) == null ? void 0 : _a.status) || "404"), escape(((_b = t()) == null ? void 0 : _b.heading) || "Voc\xEA entrou no inferno errado."), escape(((_c = t()) == null ? void 0 : _c.description) || "Esta p\xE1gina foi perdida nas profundezas. O caminho que voc\xEA busca n\xE3o existe mais \u2014 ou nunca existiu."), escape(((_d = t()) == null ? void 0 : _d.back_home) || "Voltar ao Mundo dos Vivos"), escape(((_e2 = t()) == null ? void 0 : _e2.subtext) || "Este n\xE3o \xE9 o caminho que voc\xEA procura.")), createComponent$1($e, { hideDoomLink: true })];
}
var we = ["<script", ">", "<\/script>"];
const Qn = `
(function() {
  try {
    var t = localStorage.getItem('portfolio-theme');
    if (t) document.documentElement.setAttribute('data-theme', t);
  } catch(e) {}
})();
`.trim(), Zn = `
(function() {
  try {
    var l = localStorage.getItem('portfolio-language');
    if (l === 'pt-br' || l === 'en') document.documentElement.lang = l;
  } catch(e) {}
})();
`.trim();
function er() {
  return createComponent$1(Jn, { root: (e) => createComponent$1(K$2, { get children() {
    return [createComponent$1(I$1, { children: "Gustavo M Camargo | AI & Software Engineer" }), createComponent$1(L$1, { name: "description", content: "Portfolio de Gustavo M Camargo \u2014 Especialista em Automa\xE7\xE3o com IA, LangGraph & AI Agents. Python, C++, Rust, React. Experi\xEAncia em agentes inteligentes e sistemas full-stack." }), createComponent$1(L$1, { name: "keywords", content: "AI engineer, LangGraph, Python, C++, Rust, React, automa\xE7\xE3o, software engineer, portfolio, Gustavo Camargo" }), createComponent$1(L$1, { name: "author", content: "Gustavo M Camargo" }), createComponent$1(L$1, { name: "robots", content: "index, follow" }), createComponent$1(L$1, { name: "theme-color", content: "#080012" }), createComponent$1(L$1, { property: "og:title", content: "Gustavo M Camargo | AI & Software Engineer" }), createComponent$1(L$1, { property: "og:description", content: "Especialista em Automa\xE7\xE3o com IA, LangGraph & AI Agents. Python, C++, Rust, React." }), createComponent$1(L$1, { property: "og:type", content: "website" }), createComponent$1(L$1, { property: "og:url", content: "https://thecodergus.github.io" }), createComponent$1(L$1, { property: "og:image", content: "https://thecodergus.github.io/images/myProfile.jpg" }), createComponent$1(L$1, { property: "og:locale", content: "pt_BR" }), createComponent$1(L$1, { name: "twitter:card", content: "summary" }), createComponent$1(L$1, { name: "twitter:title", content: "Gustavo M Camargo | AI & Software Engineer" }), createComponent$1(L$1, { name: "twitter:description", content: "Especialista em Automa\xE7\xE3o com IA, LangGraph & AI Agents." }), createComponent$1(L$1, { name: "twitter:image", content: "https://thecodergus.github.io/images/myProfile.jpg" }), ssr(we, ssrHydrationKey(), Qn), ssr(we, ssrHydrationKey(), Zn), createComponent$1(H$1, { rel: "preconnect", href: "https://fonts.googleapis.com" }), createComponent$1(H$1, { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" }), createComponent$1(H$1, { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap", rel: "stylesheet" }), createComponent$1(we$1, { get children() {
      return createComponent$1(Suspense, { get children() {
        return e.children;
      } });
    } })];
  } }), get children() {
    return [createComponent$1(gn, {}), createComponent$1(jn, { path: "*", component: Yn })];
  } });
}
const Ne = isServer ? (e) => {
  const t = getRequestEvent();
  return t.response.status = e.code, t.response.statusText = e.text, onCleanup(() => !t.nativeEvent.handled && !t.complete && (t.response.status = 200)), null;
} : (e) => null;
var tr = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">', "</span>"], nr = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">500 | Internal Server Error</span>'];
const rr = (e) => {
  const t = isServer ? "500 | Internal Server Error" : "Error | Uncaught Client Exception";
  return createComponent$1(ErrorBoundary, { fallback: (n) => (console.error(n), [ssr(tr, ssrHydrationKey(), escape(t)), createComponent$1(Ne, { code: 500 })]), get children() {
    return e.children;
  } });
}, or = (e) => {
  let t = false;
  const n = catchError(() => e.children, (o) => {
    console.error(o), t = !!o;
  });
  return t ? [ssr(nr, ssrHydrationKey()), createComponent$1(Ne, { code: 500 })] : n;
};
var be = ["<script", ">", "<\/script>"], sr = ["<script", ' type="module"', " async", "><\/script>"], ar = ["<script", ' type="module" async', "><\/script>"];
const ir = ssr("<!DOCTYPE html>");
function Be(e, t, n = []) {
  for (let o = 0; o < t.length; o++) {
    const r = t[o];
    if (r.path !== e[0].path) continue;
    let s = [...n, r];
    if (r.children) {
      const a = e.slice(1);
      if (a.length === 0 || (s = Be(a, r.children, s), !s)) continue;
    }
    return s;
  }
}
function cr(e) {
  const t = getRequestEvent(), n = t.nonce;
  let o = [];
  return Promise.resolve().then(async () => {
    let r = [];
    if (t.router && t.router.matches) {
      const s = [...t.router.matches];
      for (; s.length && (!s[0].info || !s[0].info.filesystem); ) s.shift();
      const a = s.length && Be(s, t.routes);
      if (a) {
        const i = globalThis.MANIFEST.client.inputs;
        for (let c = 0; c < a.length; c++) {
          const u = a[c], h = i[u.$component.src];
          r.push(h.assets());
        }
      }
    }
    o = await Promise.all(r).then((s) => [...new Map(s.flat().map((a) => [a.attrs.key, a])).values()].filter((a) => a.attrs.rel === "modulepreload" && !t.assets.find((i) => i.attrs.key === a.attrs.key)));
  }), useAssets(() => o.length ? o.map((r) => ne(r)) : void 0), createComponent$1(NoHydration, { get children() {
    return [ir, createComponent$1(or, { get children() {
      return createComponent$1(e.document, { get assets() {
        return [createComponent$1(HydrationScript, {}), t.assets.map((r) => ne(r, n))];
      }, get scripts() {
        return n ? [ssr(be, ssrHydrationKey() + ssrAttribute("nonce", escape(n, true), false), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(sr, ssrHydrationKey(), ssrAttribute("nonce", escape(n, true), false), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))] : [ssr(be, ssrHydrationKey(), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(ar, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))];
      }, get children() {
        return createComponent$1(Hydration, { get children() {
          return createComponent$1(rr, { get children() {
            return createComponent$1(er, {});
          } });
        } });
      } });
    } })];
  } });
}
var ur = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#080012"><link rel="icon" href="/favicon.ico"><link rel="manifest" href="/manifest.json">', '<script type="application/ld+json">', "<\/script></head>"], lr = ["<html", ' lang="pt-br" data-theme="ai">', '<body><a href="#main" class="skip-link">Pular para o conte\xFAdo</a><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
const vr = Rn(() => createComponent$1(cr, { document: ({ assets: e, children: t, scripts: n }) => ssr(lr, ssrHydrationKey(), createComponent$1(NoHydration, { get children() {
  return ssr(ur, escape(e), JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: "Gustavo M Camargo", url: "https://thecodergus.github.io", jobTitle: "AI & Software Engineer", sameAs: ["https://github.com/thecodergus", "https://www.linkedin.com/in/thecodergus"], knowsAbout: ["Artificial Intelligence", "LangGraph", "Python", "C++", "Rust", "React", "TypeScript", "Full-Stack Development"] }));
} }), escape(t), escape(n)) }));

const handlers = [
  { route: '', handler: _2L1h_Z, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: Lt, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: vr, lazy: false, middleware: true, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const nitroApp = useNitroApp();
const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

export { $e as $, Ft as F, H$1 as H, N, closePrerenderer as c, de$1 as d, g, localFetch as l, te$1 as t, ye$1 as y };
//# sourceMappingURL=nitro.mjs.map
