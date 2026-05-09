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
import { sharedConfig, lazy, createComponent, createSignal, onMount, onCleanup, Show, useContext, splitProps, For, createContext, catchError, ErrorBoundary, Suspense, children, mergeProps as mergeProps$1, createUniqueId, createMemo, getOwner, createRenderEffect, on as on$1, runWithOwner, untrack, createRoot, startTransition, resetErrorBoundaries, batch } from 'file:///home/gus/thecodergus.github.io/node_modules/solid-js/dist/server.js';
import { renderToString, isServer, getRequestEvent, ssrElement, escape, mergeProps, ssr, ssrHydrationKey, ssrAttribute, createComponent as createComponent$1, Dynamic, renderToStream, NoHydration, useAssets, Hydration, HydrationScript, delegateEvents, spread } from 'file:///home/gus/thecodergus.github.io/node_modules/solid-js/web/dist/server.js';
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
					const buildManifest = {"ssr":{"_I18nErrorBanner-BJAbGrrG.js":{"file":"assets/I18nErrorBanner-BJAbGrrG.js","name":"I18nErrorBanner"},"_canvasTexture-tYEH5stE.js":{"file":"assets/canvasTexture-tYEH5stE.js","name":"canvasTexture"},"_create-theme-module-BvvTGmKi.js":{"file":"assets/create-theme-module-BvvTGmKi.js","name":"create-theme-module"},"_index-CoTjRx4w.js":{"file":"assets/index-CoTjRx4w.js","name":"index","isDynamicEntry":true,"imports":["_I18nErrorBanner-BJAbGrrG.js"],"dynamicImports":["src/themes/ai/index.ts","src/themes/blockchain/index.ts","src/themes/software/index.ts","src/themes/web/index.ts"]},"src/routes/doom.tsx?pick=default&pick=$css":{"file":"doom.js","name":"doom","src":"src/routes/doom.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_I18nErrorBanner-BJAbGrrG.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"imports":["_I18nErrorBanner-BJAbGrrG.js","_index-CoTjRx4w.js"]},"src/themes/ai/index.ts":{"file":"assets/index-DAYUZtql.js","name":"index","src":"src/themes/ai/index.ts","isDynamicEntry":true,"imports":["_index-CoTjRx4w.js","_create-theme-module-BvvTGmKi.js","_I18nErrorBanner-BJAbGrrG.js"]},"src/themes/blockchain/index.ts":{"file":"assets/index--ZM7Bq3E.js","name":"index","src":"src/themes/blockchain/index.ts","isDynamicEntry":true,"imports":["_index-CoTjRx4w.js","_create-theme-module-BvvTGmKi.js","_canvasTexture-tYEH5stE.js","_I18nErrorBanner-BJAbGrrG.js"]},"src/themes/software/index.ts":{"file":"assets/index-41tGRayi.js","name":"index","src":"src/themes/software/index.ts","isDynamicEntry":true,"imports":["_index-CoTjRx4w.js","_create-theme-module-BvvTGmKi.js","_canvasTexture-tYEH5stE.js","_I18nErrorBanner-BJAbGrrG.js"]},"src/themes/web/index.ts":{"file":"assets/index-BoRrtFS2.js","name":"index","src":"src/themes/web/index.ts","isDynamicEntry":true,"imports":["_index-CoTjRx4w.js","_create-theme-module-BvvTGmKi.js","_canvasTexture-tYEH5stE.js","_I18nErrorBanner-BJAbGrrG.js"]},"virtual:$vinxi/handler/ssr":{"file":"ssr.js","name":"ssr","src":"virtual:$vinxi/handler/ssr","isEntry":true,"imports":["_I18nErrorBanner-BJAbGrrG.js"],"dynamicImports":["src/routes/doom.tsx?pick=default&pick=$css","src/routes/doom.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css"],"css":["assets/ssr-BATqodBL.css"]}},"client":{"_I18nErrorBanner-CNMRvU7u.js":{"file":"assets/I18nErrorBanner-CNMRvU7u.js","name":"I18nErrorBanner"},"_canvasTexture-DBjnOQ9D.js":{"file":"assets/canvasTexture-DBjnOQ9D.js","name":"canvasTexture","imports":["_index-B66Bievk.js"]},"_create-theme-module-DELPPpDb.js":{"file":"assets/create-theme-module-DELPPpDb.js","name":"create-theme-module"},"_index-B66Bievk.js":{"file":"assets/index-B66Bievk.js","name":"index","isDynamicEntry":true,"imports":["_I18nErrorBanner-CNMRvU7u.js","_preload-helper-ug3pwPZ1.js"],"dynamicImports":["src/themes/ai/index.ts","src/themes/blockchain/index.ts","src/themes/software/index.ts","src/themes/web/index.ts"]},"_preload-helper-ug3pwPZ1.js":{"file":"assets/preload-helper-ug3pwPZ1.js","name":"preload-helper"},"src/routes/doom.tsx?pick=default&pick=$css":{"file":"assets/doom-Dy3REpDL.js","name":"doom","src":"src/routes/doom.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_I18nErrorBanner-CNMRvU7u.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"assets/index-FRVXLfna.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"imports":["_I18nErrorBanner-CNMRvU7u.js","_index-B66Bievk.js","_preload-helper-ug3pwPZ1.js"]},"src/themes/ai/index.ts":{"file":"assets/index-zTnaKLW8.js","name":"index","src":"src/themes/ai/index.ts","isDynamicEntry":true,"imports":["_index-B66Bievk.js","_create-theme-module-DELPPpDb.js","_I18nErrorBanner-CNMRvU7u.js","_preload-helper-ug3pwPZ1.js"]},"src/themes/blockchain/index.ts":{"file":"assets/index-BSi3UtLs.js","name":"index","src":"src/themes/blockchain/index.ts","isDynamicEntry":true,"imports":["_index-B66Bievk.js","_canvasTexture-DBjnOQ9D.js","_create-theme-module-DELPPpDb.js","_I18nErrorBanner-CNMRvU7u.js","_preload-helper-ug3pwPZ1.js"]},"src/themes/software/index.ts":{"file":"assets/index-Bcu7Y0vC.js","name":"index","src":"src/themes/software/index.ts","isDynamicEntry":true,"imports":["_index-B66Bievk.js","_canvasTexture-DBjnOQ9D.js","_create-theme-module-DELPPpDb.js","_I18nErrorBanner-CNMRvU7u.js","_preload-helper-ug3pwPZ1.js"]},"src/themes/web/index.ts":{"file":"assets/index-ZxPdIfdw.js","name":"index","src":"src/themes/web/index.ts","isDynamicEntry":true,"imports":["_index-B66Bievk.js","_canvasTexture-DBjnOQ9D.js","_create-theme-module-DELPPpDb.js","_I18nErrorBanner-CNMRvU7u.js","_preload-helper-ug3pwPZ1.js"]},"virtual:$vinxi/handler/client":{"file":"assets/client-BK1_J28s.js","name":"client","src":"virtual:$vinxi/handler/client","isEntry":true,"imports":["_I18nErrorBanner-CNMRvU7u.js","_preload-helper-ug3pwPZ1.js"],"dynamicImports":["src/routes/doom.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css"],"css":["assets/client-RXpWjGip.css"]}},"server-fns":{"_I18nErrorBanner-ejIalrdn.js":{"file":"assets/I18nErrorBanner-ejIalrdn.js","name":"I18nErrorBanner"},"_canvasTexture-tYEH5stE.js":{"file":"assets/canvasTexture-tYEH5stE.js","name":"canvasTexture"},"_create-theme-module-BvvTGmKi.js":{"file":"assets/create-theme-module-BvvTGmKi.js","name":"create-theme-module"},"_index-H0Mfg8mx.js":{"file":"assets/index-H0Mfg8mx.js","name":"index","isDynamicEntry":true,"imports":["_I18nErrorBanner-ejIalrdn.js"],"dynamicImports":["src/themes/ai/index.ts","src/themes/blockchain/index.ts","src/themes/software/index.ts","src/themes/web/index.ts"]},"_server-fns-sFEB9n1J.js":{"file":"assets/server-fns-sFEB9n1J.js","name":"server-fns","dynamicImports":["src/routes/doom.tsx?pick=default&pick=$css","src/routes/doom.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/app.tsx"]},"src/app.tsx":{"file":"assets/app-CvgBeCzL.js","name":"app","src":"src/app.tsx","isDynamicEntry":true,"imports":["_server-fns-sFEB9n1J.js","_I18nErrorBanner-ejIalrdn.js"],"css":["assets/app-BATqodBL.css"]},"src/routes/doom.tsx?pick=default&pick=$css":{"file":"doom.js","name":"doom","src":"src/routes/doom.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_I18nErrorBanner-ejIalrdn.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"imports":["_I18nErrorBanner-ejIalrdn.js","_index-H0Mfg8mx.js"]},"src/themes/ai/index.ts":{"file":"assets/index-nAV8DV0O.js","name":"index","src":"src/themes/ai/index.ts","isDynamicEntry":true,"imports":["_index-H0Mfg8mx.js","_create-theme-module-BvvTGmKi.js","_I18nErrorBanner-ejIalrdn.js"]},"src/themes/blockchain/index.ts":{"file":"assets/index-CNmS0tDM.js","name":"index","src":"src/themes/blockchain/index.ts","isDynamicEntry":true,"imports":["_index-H0Mfg8mx.js","_create-theme-module-BvvTGmKi.js","_canvasTexture-tYEH5stE.js","_I18nErrorBanner-ejIalrdn.js"]},"src/themes/software/index.ts":{"file":"assets/index-Dr3cefRr.js","name":"index","src":"src/themes/software/index.ts","isDynamicEntry":true,"imports":["_index-H0Mfg8mx.js","_create-theme-module-BvvTGmKi.js","_canvasTexture-tYEH5stE.js","_I18nErrorBanner-ejIalrdn.js"]},"src/themes/web/index.ts":{"file":"assets/index-C5dqMq1x.js","name":"index","src":"src/themes/web/index.ts","isDynamicEntry":true,"imports":["_index-H0Mfg8mx.js","_create-theme-module-BvvTGmKi.js","_canvasTexture-tYEH5stE.js","_I18nErrorBanner-ejIalrdn.js"]},"virtual:$vinxi/handler/server-fns":{"file":"server-fns.js","name":"server-fns","src":"virtual:$vinxi/handler/server-fns","isEntry":true,"imports":["_server-fns-sFEB9n1J.js"]}}};

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
    "mtime": "2026-05-09T13:41:58.762Z",
    "size": 6896,
    "path": "../../.output/public/404.html"
  },
  "/404.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"6dd-Nd7Ie19OTIKHSqQBWXxfzLu4/5U\"",
    "mtime": "2026-05-09T13:41:59.076Z",
    "size": 1757,
    "path": "../../.output/public/404.html.br"
  },
  "/404.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"877-EwQelpcI2pLhcaH9DFt7KCmC8l0\"",
    "mtime": "2026-05-09T13:41:59.069Z",
    "size": 2167,
    "path": "../../.output/public/404.html.gz"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"77-72w4X+7XWs3dVUGtbt2EY40dOV4\"",
    "mtime": "2026-05-09T13:41:58.763Z",
    "size": 119,
    "path": "../../.output/public/robots.txt"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": "\"258-grUpRKXFiG0H2p9Gj1gccP9qrF4\"",
    "mtime": "2026-05-09T13:41:58.762Z",
    "size": 600,
    "path": "../../.output/public/manifest.json"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"29a-kC3W1RpUWKiufGhz9CF9O1h46zI\"",
    "mtime": "2026-05-09T13:41:58.764Z",
    "size": 666,
    "path": "../../.output/public/sitemap.xml"
  },
  "/_build/registerSW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"94-cci5Bilset1FDW+Y3OFpEe4JMyM\"",
    "mtime": "2026-05-09T13:41:59.052Z",
    "size": 148,
    "path": "../../.output/public/_build/registerSW.js"
  },
  "/_build/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"5ed-xuRQsIaDkmiZcwc+iUTVzZDRz2w\"",
    "mtime": "2026-05-09T13:41:59.052Z",
    "size": 1517,
    "path": "../../.output/public/_build/sw.js"
  },
  "/_build/sw.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2a3-uttY2LMyKjw/9gewm7z6k6jA3+o\"",
    "mtime": "2026-05-09T13:41:59.069Z",
    "size": 675,
    "path": "../../.output/public/_build/sw.js.br"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"28f5b-+HJ/8feXwjqDwG8zs4HR07QMTCM\"",
    "mtime": "2026-05-09T13:41:58.764Z",
    "size": 167771,
    "path": "../../.output/public/favicon.ico"
  },
  "/_build/sw.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"30b-WwcVdkGIwwIu14hY42BLmp0NUP4\"",
    "mtime": "2026-05-09T13:41:59.069Z",
    "size": 779,
    "path": "../../.output/public/_build/sw.js.gz"
  },
  "/_build/workbox-9c191d2f.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"3b08-FESaFuRU1G+tiFaqJ5mU8aDzyWU\"",
    "mtime": "2026-05-09T13:41:59.052Z",
    "size": 15112,
    "path": "../../.output/public/_build/workbox-9c191d2f.js"
  },
  "/_build/workbox-9c191d2f.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1251-i0SSOuCJdvAes+CuwX2eodf94e0\"",
    "mtime": "2026-05-09T13:41:59.080Z",
    "size": 4689,
    "path": "../../.output/public/_build/workbox-9c191d2f.js.br"
  },
  "/_build/workbox-9c191d2f.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1447-PKR5OTzyHRe4XJuVvQMG9e0TyJk\"",
    "mtime": "2026-05-09T13:41:59.069Z",
    "size": 5191,
    "path": "../../.output/public/_build/workbox-9c191d2f.js.gz"
  },
  "/assets/ssr-BATqodBL.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1928-jzFXav6iyN5ehkbwj2ZQR5uAKNg\"",
    "mtime": "2026-05-09T13:41:59.109Z",
    "size": 6440,
    "path": "../../.output/public/assets/ssr-BATqodBL.css.br"
  },
  "/data/portfolio_shared_data.json": {
    "type": "application/json",
    "encoding": null,
    "etag": "\"c0a-bWf/SNQo89W6Nt3CHU7Evwdgi1M\"",
    "mtime": "2026-05-09T13:41:58.734Z",
    "size": 3082,
    "path": "../../.output/public/data/portfolio_shared_data.json"
  },
  "/assets/ssr-BATqodBL.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"960e-RFU0SU44t9H3/D5d1L78GdCUZdY\"",
    "mtime": "2026-05-09T13:41:59.050Z",
    "size": 38414,
    "path": "../../.output/public/assets/ssr-BATqodBL.css"
  },
  "/assets/ssr-BATqodBL.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1d12-NMDnXWI67YX2FGMj0GX2bGccSqo\"",
    "mtime": "2026-05-09T13:41:59.081Z",
    "size": 7442,
    "path": "../../.output/public/assets/ssr-BATqodBL.css.gz"
  },
  "/data/portfolio_shared_data.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"27a-cRU9NZcr+hNt300NDaGuqqSvK2E\"",
    "mtime": "2026-05-09T13:41:59.069Z",
    "size": 634,
    "path": "../../.output/public/data/portfolio_shared_data.json.br"
  },
  "/data/portfolio_shared_data.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"2cf-v1itbloERc+Ad3qjm0juKd4GsmQ\"",
    "mtime": "2026-05-09T13:41:59.069Z",
    "size": 719,
    "path": "../../.output/public/data/portfolio_shared_data.json.gz"
  },
  "/images/icon-192.webp": {
    "type": "image/webp",
    "etag": "\"14c2-NjQjOAu3FKUPRHndk4ctFE2XOys\"",
    "mtime": "2026-05-09T13:41:58.748Z",
    "size": 5314,
    "path": "../../.output/public/images/icon-192.webp"
  },
  "/images/icon-512.webp": {
    "type": "image/webp",
    "etag": "\"4cfc-iOk8op4Uwf117iEx5G87uXblZM4\"",
    "mtime": "2026-05-09T13:41:58.752Z",
    "size": 19708,
    "path": "../../.output/public/images/icon-512.webp"
  },
  "/images/icon-192.png": {
    "type": "image/png",
    "etag": "\"13081-et3Q/GVSR1u53NpyvPyEnuTrx5Y\"",
    "mtime": "2026-05-09T13:41:58.735Z",
    "size": 77953,
    "path": "../../.output/public/images/icon-192.png"
  },
  "/images/icon-512.png": {
    "type": "image/png",
    "etag": "\"6f6e3-1eFTL99DQog32E+RF5R3LE1A0Ls\"",
    "mtime": "2026-05-09T13:41:58.756Z",
    "size": 456419,
    "path": "../../.output/public/images/icon-512.png"
  },
  "/images/myProfile.jpg": {
    "type": "image/jpeg",
    "etag": "\"85959-iF5M3WpBNfzVmCJclZFaL3uP+oM\"",
    "mtime": "2026-05-09T13:41:58.756Z",
    "size": 547161,
    "path": "../../.output/public/images/myProfile.jpg"
  },
  "/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2": {
    "type": "font/woff2",
    "etag": "\"493c-n3Oy9D6jvzfMjpClqox+Zo7ERQQ\"",
    "mtime": "2026-05-09T13:41:58.734Z",
    "size": 18748,
    "path": "../../.output/public/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2"
  },
  "/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2": {
    "type": "font/woff2",
    "etag": "\"4a34-xor/hj4YNqI52zFecXnUbzQ4Xs4\"",
    "mtime": "2026-05-09T13:41:58.736Z",
    "size": 18996,
    "path": "../../.output/public/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2"
  },
  "/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2": {
    "type": "font/woff2",
    "etag": "\"bc80-8R1ym7Ck2DUNLqPQ/AYs9u8tUpg\"",
    "mtime": "2026-05-09T13:41:58.735Z",
    "size": 48256,
    "path": "../../.output/public/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2"
  },
  "/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2": {
    "type": "font/woff2",
    "etag": "\"2be0-BP5iTzJeB8nLqYAgKpWNi5o1Zm8\"",
    "mtime": "2026-05-09T13:41:58.736Z",
    "size": 11232,
    "path": "../../.output/public/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2"
  },
  "/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2": {
    "type": "font/woff2",
    "etag": "\"280c-nBythjoDQ0+5wVAendJ6wU7Xz2M\"",
    "mtime": "2026-05-09T13:41:58.736Z",
    "size": 10252,
    "path": "../../.output/public/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2"
  },
  "/fonts/V8mDoQDjQSkFtoMM3T6r8E7mPb54C-s0.woff2": {
    "type": "font/woff2",
    "etag": "\"1a38-xA/sTKWi+gmM69jUei5Rxd5DXqY\"",
    "mtime": "2026-05-09T13:41:58.736Z",
    "size": 6712,
    "path": "../../.output/public/fonts/V8mDoQDjQSkFtoMM3T6r8E7mPb54C-s0.woff2"
  },
  "/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2": {
    "type": "font/woff2",
    "etag": "\"6568-cF1iUGbboMFZ8TfnP5HiMgl9II0\"",
    "mtime": "2026-05-09T13:41:58.736Z",
    "size": 25960,
    "path": "../../.output/public/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2"
  },
  "/fonts/V8mDoQDjQSkFtoMM3T6r8E7mPb94C-s0.woff2": {
    "type": "font/woff2",
    "etag": "\"49fc-F0LVbRNUJhx55ziZ6erFdGulAH0\"",
    "mtime": "2026-05-09T13:41:58.737Z",
    "size": 18940,
    "path": "../../.output/public/fonts/V8mDoQDjQSkFtoMM3T6r8E7mPb94C-s0.woff2"
  },
  "/images/myProfile.webp": {
    "type": "image/webp",
    "etag": "\"2e0a0-RGxKXJ5GU/ftqtTsq3F9+aql8Uw\"",
    "mtime": "2026-05-09T13:41:58.755Z",
    "size": 188576,
    "path": "../../.output/public/images/myProfile.webp"
  },
  "/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2": {
    "type": "font/woff2",
    "etag": "\"14c4c-zz61D7IQFMB9QxHvTAOk/Vh4ibQ\"",
    "mtime": "2026-05-09T13:41:58.736Z",
    "size": 85068,
    "path": "../../.output/public/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2"
  },
  "/fonts/V8mDoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2": {
    "type": "font/woff2",
    "etag": "\"5710-wHgeovKQE4JtweuNtA9NQA2d9xA\"",
    "mtime": "2026-05-09T13:41:58.737Z",
    "size": 22288,
    "path": "../../.output/public/fonts/V8mDoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2"
  },
  "/fonts/fonts.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"5900-k+IXneN0u97LiW49nHsGw7eQ2cA\"",
    "mtime": "2026-05-09T13:41:58.738Z",
    "size": 22784,
    "path": "../../.output/public/fonts/fonts.css"
  },
  "/fonts/fonts.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"321-PdczxOgAQGaVR3+TDsLThsrC7xo\"",
    "mtime": "2026-05-09T13:41:59.109Z",
    "size": 801,
    "path": "../../.output/public/fonts/fonts.css.br"
  },
  "/fonts/fonts.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"40e-Sp2UPxAZtmpXLSdjnNeNFKKyGBU\"",
    "mtime": "2026-05-09T13:41:59.109Z",
    "size": 1038,
    "path": "../../.output/public/fonts/fonts.css.gz"
  },
  "/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx3cwhsk.woff2": {
    "type": "font/woff2",
    "etag": "\"668-/q5XIShVD2LrOrPzUnYqfwzlWQM\"",
    "mtime": "2026-05-09T13:41:58.739Z",
    "size": 1640,
    "path": "../../.output/public/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx3cwhsk.woff2"
  },
  "/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx7cwhsk.woff2": {
    "type": "font/woff2",
    "etag": "\"2d68-Bq02AAzYneyT5DmMW2JWWrHRseI\"",
    "mtime": "2026-05-09T13:41:58.740Z",
    "size": 11624,
    "path": "../../.output/public/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx7cwhsk.woff2"
  },
  "/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwg.woff2": {
    "type": "font/woff2",
    "etag": "\"7ac8-TycgbEscr4t4BVl/y8aSL/WAXao\"",
    "mtime": "2026-05-09T13:41:58.742Z",
    "size": 31432,
    "path": "../../.output/public/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwg.woff2"
  },
  "/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxPcwhsk.woff2": {
    "type": "font/woff2",
    "etag": "\"1ab4-vO254uUoPBuIhSU0jLwsXwe94+w\"",
    "mtime": "2026-05-09T13:41:58.743Z",
    "size": 6836,
    "path": "../../.output/public/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxPcwhsk.woff2"
  },
  "/fonts/devicon.ttf.br": {
    "type": "font/ttf",
    "encoding": "br",
    "etag": "\"8cfc2-FfNDvPo63iszzpwL46oeloozxwA\"",
    "mtime": "2026-05-09T13:42:01.344Z",
    "size": 577474,
    "path": "../../.output/public/fonts/devicon.ttf.br"
  },
  "/fonts/devicon.ttf.gz": {
    "type": "font/ttf",
    "encoding": "gzip",
    "etag": "\"9f957-OEUXjdkHP/AZqbES8Nt6de58uLU\"",
    "mtime": "2026-05-09T13:41:59.916Z",
    "size": 653655,
    "path": "../../.output/public/fonts/devicon.ttf.gz"
  },
  "/fonts/devicon.ttf": {
    "type": "font/ttf",
    "encoding": null,
    "etag": "\"12d594-QLLCGd5h5vxXD2lm47ERHhlQ7YE\"",
    "mtime": "2026-05-09T13:41:58.745Z",
    "size": 1234324,
    "path": "../../.output/public/fonts/devicon.ttf"
  },
  "/fonts/devicon.woff": {
    "type": "font/woff",
    "etag": "\"12d5e0-+k9k5/b7tqusPwZyqOnNnwL+Aqw\"",
    "mtime": "2026-05-09T13:41:58.745Z",
    "size": 1234400,
    "path": "../../.output/public/fonts/devicon.woff"
  },
  "/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxTcwhsk.woff2": {
    "type": "font/woff2",
    "etag": "\"22a8-nY2y6MzZcjPCL0AMJxGhJCw1tRI\"",
    "mtime": "2026-05-09T13:41:58.744Z",
    "size": 8872,
    "path": "../../.output/public/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxTcwhsk.woff2"
  },
  "/_build/.vite/manifest.json": {
    "type": "application/json",
    "encoding": null,
    "etag": "\"d6e-fqmPQIzJswYT/7p5Hr7OHSW/gKQ\"",
    "mtime": "2026-05-09T13:41:59.052Z",
    "size": 3438,
    "path": "../../.output/public/_build/.vite/manifest.json"
  },
  "/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx_cwhsk.woff2": {
    "type": "font/woff2",
    "etag": "\"1700-MmqItN278TJfbGZhTwO2+NPcKys\"",
    "mtime": "2026-05-09T13:41:58.745Z",
    "size": 5888,
    "path": "../../.output/public/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx_cwhsk.woff2"
  },
  "/_build/.vite/manifest.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"210-inButhHpGJ14XUU9T+L54i+Dj94\"",
    "mtime": "2026-05-09T13:41:59.150Z",
    "size": 528,
    "path": "../../.output/public/_build/.vite/manifest.json.br"
  },
  "/_build/.vite/manifest.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"256-9UCBBuzokIuwxlA7apgLqVO79+U\"",
    "mtime": "2026-05-09T13:41:59.112Z",
    "size": 598,
    "path": "../../.output/public/_build/.vite/manifest.json.gz"
  },
  "/_build/assets/I18nErrorBanner-CNMRvU7u.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"363a-DdZGnwO3SzLpEPYWVJeMu3eh5a8\"",
    "mtime": "2026-05-09T13:41:59.154Z",
    "size": 13882,
    "path": "../../.output/public/_build/assets/I18nErrorBanner-CNMRvU7u.js.br"
  },
  "/_build/assets/I18nErrorBanner-CNMRvU7u.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"99ce-RnHwX+MIr4Qzw3Gpx8HhQob2mbA\"",
    "mtime": "2026-05-09T13:41:59.052Z",
    "size": 39374,
    "path": "../../.output/public/_build/assets/I18nErrorBanner-CNMRvU7u.js"
  },
  "/_build/assets/canvasTexture-DBjnOQ9D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"15f-fIVP3Kd8/3qYrzkMM1+Fxhp+SYk\"",
    "mtime": "2026-05-09T13:41:59.052Z",
    "size": 351,
    "path": "../../.output/public/_build/assets/canvasTexture-DBjnOQ9D.js"
  },
  "/_build/assets/I18nErrorBanner-CNMRvU7u.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3c12-+K2TXik5HBM000hpyOExq3CGTuE\"",
    "mtime": "2026-05-09T13:41:59.152Z",
    "size": 15378,
    "path": "../../.output/public/_build/assets/I18nErrorBanner-CNMRvU7u.js.gz"
  },
  "/_build/assets/client-BK1_J28s.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"69c5-s7BEqJFwyQinA/IlPOBPriSme1c\"",
    "mtime": "2026-05-09T13:41:59.053Z",
    "size": 27077,
    "path": "../../.output/public/_build/assets/client-BK1_J28s.js"
  },
  "/_build/assets/client-BK1_J28s.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"25d8-EdWSvEXVQfbwqLsSjlf9qb+4sy0\"",
    "mtime": "2026-05-09T13:41:59.154Z",
    "size": 9688,
    "path": "../../.output/public/_build/assets/client-BK1_J28s.js.br"
  },
  "/fonts/devicon.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"1c5b14-3muxeNrnPy7YUeXUCm6d0JUjYMk\"",
    "mtime": "2026-05-09T13:42:06.942Z",
    "size": 1858324,
    "path": "../../.output/public/fonts/devicon.svg.br"
  },
  "/_build/assets/client-BK1_J28s.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"29fe-twU1bAqAvIDZwL4ZemfnD9BaFgM\"",
    "mtime": "2026-05-09T13:41:59.154Z",
    "size": 10750,
    "path": "../../.output/public/_build/assets/client-BK1_J28s.js.gz"
  },
  "/_build/assets/client-RXpWjGip.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1bf8-OkOXmjI4ZW9G620jmMiqTgyD1pI\"",
    "mtime": "2026-05-09T13:41:59.188Z",
    "size": 7160,
    "path": "../../.output/public/_build/assets/client-RXpWjGip.css.br"
  },
  "/_build/assets/client-RXpWjGip.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"205e-qcxNsRhrGBGlJGR501GmgoLPcCI\"",
    "mtime": "2026-05-09T13:41:59.154Z",
    "size": 8286,
    "path": "../../.output/public/_build/assets/client-RXpWjGip.css.gz"
  },
  "/_build/assets/client-RXpWjGip.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"a720-bZRbNdHGEb/fOcEMwGCFunwC9Nk\"",
    "mtime": "2026-05-09T13:41:59.052Z",
    "size": 42784,
    "path": "../../.output/public/_build/assets/client-RXpWjGip.css"
  },
  "/_build/assets/create-theme-module-DELPPpDb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e1-UlMKBygyPKy9zCOwQ8LqtG1tYoY\"",
    "mtime": "2026-05-09T13:41:59.052Z",
    "size": 225,
    "path": "../../.output/public/_build/assets/create-theme-module-DELPPpDb.js"
  },
  "/_build/assets/doom-Dy3REpDL.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"aad-cMG9yZNSWyQsbpnlIZEBQGbvMts\"",
    "mtime": "2026-05-09T13:41:59.052Z",
    "size": 2733,
    "path": "../../.output/public/_build/assets/doom-Dy3REpDL.js"
  },
  "/fonts/devicon.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"200376-rY3IYTSWkRYQs7z6p/0cavV2HkQ\"",
    "mtime": "2026-05-09T13:42:00.990Z",
    "size": 2098038,
    "path": "../../.output/public/fonts/devicon.svg.gz"
  },
  "/_build/assets/doom-Dy3REpDL.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4a4-Jl4R6wk6idZf9nKHgVBb5Vznd38\"",
    "mtime": "2026-05-09T13:41:59.179Z",
    "size": 1188,
    "path": "../../.output/public/_build/assets/doom-Dy3REpDL.js.br"
  },
  "/_build/assets/doom-Dy3REpDL.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"554-ROJPwiRTWXWasMV6zhLgrlJA1sY\"",
    "mtime": "2026-05-09T13:41:59.179Z",
    "size": 1364,
    "path": "../../.output/public/_build/assets/doom-Dy3REpDL.js.gz"
  },
  "/_build/assets/index-B66Bievk.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1ff72-mT4FOR7Sg3iyfMYb3Twh3HZKlus\"",
    "mtime": "2026-05-09T13:42:00.251Z",
    "size": 130930,
    "path": "../../.output/public/_build/assets/index-B66Bievk.js.br"
  },
  "/_build/assets/index-B66Bievk.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"93f7c-N+6WC+6cc+pWfpm9NnZNM3gnuks\"",
    "mtime": "2026-05-09T13:41:59.052Z",
    "size": 606076,
    "path": "../../.output/public/_build/assets/index-B66Bievk.js"
  },
  "/_build/assets/index-B66Bievk.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"26819-ss0JockDC/fxW38sCw54i/fMgLU\"",
    "mtime": "2026-05-09T13:41:59.298Z",
    "size": 157721,
    "path": "../../.output/public/_build/assets/index-B66Bievk.js.gz"
  },
  "/_build/assets/index-BSi3UtLs.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"1d5c-T/J89sbmAacM/bplT56nd+ynnwk\"",
    "mtime": "2026-05-09T13:41:59.053Z",
    "size": 7516,
    "path": "../../.output/public/_build/assets/index-BSi3UtLs.js"
  },
  "/_build/assets/index-BSi3UtLs.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"b4e-J09h72NVGLXbNkjENtelzG2yylU\"",
    "mtime": "2026-05-09T13:41:59.188Z",
    "size": 2894,
    "path": "../../.output/public/_build/assets/index-BSi3UtLs.js.br"
  },
  "/_build/assets/index-BSi3UtLs.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"c6c-Um9s+Xj0xBRmPPEvZPf3BNilqa4\"",
    "mtime": "2026-05-09T13:41:59.188Z",
    "size": 3180,
    "path": "../../.output/public/_build/assets/index-BSi3UtLs.js.gz"
  },
  "/_build/assets/index-Bcu7Y0vC.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"2457-6CwAnWRVS0lIxQP6jkouxECd3ic\"",
    "mtime": "2026-05-09T13:41:59.053Z",
    "size": 9303,
    "path": "../../.output/public/_build/assets/index-Bcu7Y0vC.js"
  },
  "/_build/assets/index-Bcu7Y0vC.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"e97-BN0CKp0NK/9X575XiHXRjWFk2IA\"",
    "mtime": "2026-05-09T13:41:59.220Z",
    "size": 3735,
    "path": "../../.output/public/_build/assets/index-Bcu7Y0vC.js.br"
  },
  "/_build/assets/index-Bcu7Y0vC.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"107d-8k3C7nTIBkRtdO9f1MAN67UbkrU\"",
    "mtime": "2026-05-09T13:41:59.220Z",
    "size": 4221,
    "path": "../../.output/public/_build/assets/index-Bcu7Y0vC.js.gz"
  },
  "/_build/assets/index-FRVXLfna.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"89-pVHLVPAkseVOWp4QSbPvfTS5OHE\"",
    "mtime": "2026-05-09T13:41:59.053Z",
    "size": 137,
    "path": "../../.output/public/_build/assets/index-FRVXLfna.js"
  },
  "/_build/assets/index-ZxPdIfdw.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"1786-962JDehasHx2KJPQCZ1ev/JYbgc\"",
    "mtime": "2026-05-09T13:41:59.053Z",
    "size": 6022,
    "path": "../../.output/public/_build/assets/index-ZxPdIfdw.js"
  },
  "/_build/assets/index-ZxPdIfdw.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"891-YJEXZ5UasjJ3/3Phe7S5295w5SE\"",
    "mtime": "2026-05-09T13:41:59.229Z",
    "size": 2193,
    "path": "../../.output/public/_build/assets/index-ZxPdIfdw.js.br"
  },
  "/_build/assets/index-ZxPdIfdw.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"99d-vvjQAVBlxY9IQEp/HRQqrlcIqWc\"",
    "mtime": "2026-05-09T13:41:59.229Z",
    "size": 2461,
    "path": "../../.output/public/_build/assets/index-ZxPdIfdw.js.gz"
  },
  "/_build/assets/index-zTnaKLW8.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"34b4-z3BiUcH/xwbnFtQpC6dNAjkKJcs\"",
    "mtime": "2026-05-09T13:41:59.053Z",
    "size": 13492,
    "path": "../../.output/public/_build/assets/index-zTnaKLW8.js"
  },
  "/_build/assets/index-zTnaKLW8.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1137-yvhkjrhDqkityzF4ts9nBeoD+Yg\"",
    "mtime": "2026-05-09T13:41:59.229Z",
    "size": 4407,
    "path": "../../.output/public/_build/assets/index-zTnaKLW8.js.br"
  },
  "/_build/assets/index-zTnaKLW8.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1365-/c6bLdIdUgxw9AtTyv+4thfmV0o\"",
    "mtime": "2026-05-09T13:41:59.229Z",
    "size": 4965,
    "path": "../../.output/public/_build/assets/index-zTnaKLW8.js.gz"
  },
  "/_build/assets/preload-helper-ug3pwPZ1.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"45d-XiQMNpbVR2X0xJL+SxLhHj6mxQk\"",
    "mtime": "2026-05-09T13:41:59.053Z",
    "size": 1117,
    "path": "../../.output/public/_build/assets/preload-helper-ug3pwPZ1.js"
  },
  "/_build/assets/preload-helper-ug3pwPZ1.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"219-M4m9Tmf23DzC7fqfeE0YouucbAc\"",
    "mtime": "2026-05-09T13:41:59.288Z",
    "size": 537,
    "path": "../../.output/public/_build/assets/preload-helper-ug3pwPZ1.js.br"
  },
  "/_build/assets/preload-helper-ug3pwPZ1.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"28d-BF/Ad7CrRweCdBw6M6MBzDYbt5k\"",
    "mtime": "2026-05-09T13:41:59.288Z",
    "size": 653,
    "path": "../../.output/public/_build/assets/preload-helper-ug3pwPZ1.js.gz"
  },
  "/_server/assets/app-BATqodBL.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"960e-RFU0SU44t9H3/D5d1L78GdCUZdY\"",
    "mtime": "2026-05-09T13:41:59.056Z",
    "size": 38414,
    "path": "../../.output/public/_server/assets/app-BATqodBL.css"
  },
  "/_server/assets/app-BATqodBL.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1928-jzFXav6iyN5ehkbwj2ZQR5uAKNg\"",
    "mtime": "2026-05-09T13:41:59.293Z",
    "size": 6440,
    "path": "../../.output/public/_server/assets/app-BATqodBL.css.br"
  },
  "/_server/assets/app-BATqodBL.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1d12-NMDnXWI67YX2FGMj0GX2bGccSqo\"",
    "mtime": "2026-05-09T13:41:59.293Z",
    "size": 7442,
    "path": "../../.output/public/_server/assets/app-BATqodBL.css.gz"
  },
  "/data/languages/en.json": {
    "type": "application/json",
    "encoding": null,
    "etag": "\"3607-iWgmSUc8pPIkWZAmkXDbRtZgRcY\"",
    "mtime": "2026-05-09T13:41:58.735Z",
    "size": 13831,
    "path": "../../.output/public/data/languages/en.json"
  },
  "/data/languages/en.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"c64-+2tuSNuYhlr+G9ky24tFfTuvcao\"",
    "mtime": "2026-05-09T13:41:59.408Z",
    "size": 3172,
    "path": "../../.output/public/data/languages/en.json.br"
  },
  "/data/languages/en.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"f68-BY0fYEGs+U10n9XGJDlCuwiiE3E\"",
    "mtime": "2026-05-09T13:41:59.408Z",
    "size": 3944,
    "path": "../../.output/public/data/languages/en.json.gz"
  },
  "/data/languages/pt-br.json": {
    "type": "application/json",
    "encoding": null,
    "etag": "\"39ab-eZgWukc6yr7AHJ8nOsHD6Y1tTEU\"",
    "mtime": "2026-05-09T13:41:58.757Z",
    "size": 14763,
    "path": "../../.output/public/data/languages/pt-br.json"
  },
  "/data/languages/pt-br.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"f06-lBzCceWtWAdrcKLFjyfss/QvBpM\"",
    "mtime": "2026-05-09T13:41:59.434Z",
    "size": 3846,
    "path": "../../.output/public/data/languages/pt-br.json.br"
  },
  "/dos/js-dos/emulators-ui-loader.png": {
    "type": "image/png",
    "etag": "\"e3e-jhsY+CUyGvQjta2ZSHYCnq6ERso\"",
    "mtime": "2026-05-09T13:41:58.808Z",
    "size": 3646,
    "path": "../../.output/public/dos/js-dos/emulators-ui-loader.png"
  },
  "/data/languages/pt-br.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"10ed-mz7CD7X3Mu/hVVJyP7IqP+XyWXA\"",
    "mtime": "2026-05-09T13:41:59.434Z",
    "size": 4333,
    "path": "../../.output/public/data/languages/pt-br.json.gz"
  },
  "/dos/js-dos/js-dos.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"9390-HHcXYBvRBOSY7kdKiJw95q1ni1Y\"",
    "mtime": "2026-05-09T13:41:58.815Z",
    "size": 37776,
    "path": "../../.output/public/dos/js-dos/js-dos.css"
  },
  "/dos/js-dos/js-dos.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1f69-espehF7fD0j+rbwxOIOfJmefTd8\"",
    "mtime": "2026-05-09T13:41:59.870Z",
    "size": 8041,
    "path": "../../.output/public/dos/js-dos/js-dos.css.br"
  },
  "/dos/js-dos/js-dos.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"26e2a-Am20jIzZArxx+uAALQb4YC6f0XI\"",
    "mtime": "2026-05-09T13:42:00.256Z",
    "size": 159274,
    "path": "../../.output/public/dos/js-dos/js-dos.js.gz"
  },
  "/dos/js-dos/js-dos.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"24ad-ig2GXHjdTrrGuk2RKNhxlVpCkB4\"",
    "mtime": "2026-05-09T13:41:59.868Z",
    "size": 9389,
    "path": "../../.output/public/dos/js-dos/js-dos.css.gz"
  },
  "/dos/js-dos/js-dos.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1cfe7-DM/vb+CiNIRbCnoTpMFPHwySbO8\"",
    "mtime": "2026-05-09T13:42:00.273Z",
    "size": 118759,
    "path": "../../.output/public/dos/js-dos/js-dos.js.br"
  },
  "/dos/js-dos/wdosbox.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"714b-s1NOOboxedot9QSUm91WvEkOeOU\"",
    "mtime": "2026-05-09T13:42:00.163Z",
    "size": 29003,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.br"
  },
  "/dos/js-dos/wdosbox.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"1ec0a-sdbAYwKl3+RPs4a37WerQYLszNk\"",
    "mtime": "2026-05-09T13:41:58.825Z",
    "size": 125962,
    "path": "../../.output/public/dos/js-dos/wdosbox.js"
  },
  "/dos/js-dos/wdosbox.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"819a-atb5t3ZzN9uOWqyV+swl7ESNjiM\"",
    "mtime": "2026-05-09T13:42:00.163Z",
    "size": 33178,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.gz"
  },
  "/dos/js-dos/wdosbox.js.symbols.br": {
    "type": "text/plain; charset=utf-8",
    "encoding": "br",
    "etag": "\"723a-6PmYCH4jRsN7igSd1L4zNogc0rE\"",
    "mtime": "2026-05-09T13:42:00.169Z",
    "size": 29242,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.symbols.br"
  },
  "/dos/js-dos/wdosbox.js.symbols.gz": {
    "type": "text/plain; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"92ee-D+SH4kY8DOfwdIaX/utznt6tGo4\"",
    "mtime": "2026-05-09T13:42:00.169Z",
    "size": 37614,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.symbols.gz"
  },
  "/dos/js-dos/wdosbox.js.symbols": {
    "type": "text/plain; charset=utf-8",
    "encoding": null,
    "etag": "\"3a7c1-HPfp6OFcRif11/E5oHXZJ1m+9Tw\"",
    "mtime": "2026-05-09T13:41:58.840Z",
    "size": 239553,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.symbols"
  },
  "/dos/js-dos/wdosbox.wasm.br": {
    "type": "application/wasm",
    "encoding": "br",
    "etag": "\"618e2-3/r1TSyCxN9mxbNPYDPVkPA5cTQ\"",
    "mtime": "2026-05-09T13:42:02.284Z",
    "size": 399586,
    "path": "../../.output/public/dos/js-dos/wdosbox.wasm.br"
  },
  "/dos/files/.gitkeep": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2026-05-08T18:43:50.379Z",
    "size": 0,
    "path": "../../.output/public/dos/files/.gitkeep"
  },
  "/dos/js-dos/wdosbox.wasm.gz": {
    "type": "application/wasm",
    "encoding": "gzip",
    "etag": "\"7abfe-+CSl07PpWMe4dF/nM7vykhxPByk\"",
    "mtime": "2026-05-09T13:42:00.896Z",
    "size": 502782,
    "path": "../../.output/public/dos/js-dos/wdosbox.wasm.gz"
  },
  "/dos/js-dos/js-dos.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"88b59-jUIV2DJizVWNO4XqpyUkmPbosAI\"",
    "mtime": "2026-05-09T13:41:58.825Z",
    "size": 559961,
    "path": "../../.output/public/dos/js-dos/js-dos.js"
  },
  "/dos/files/digger.jsdos": {
    "type": "text/plain; charset=utf-8",
    "encoding": null,
    "etag": "\"713a-mKZ7VpZRDpj2ITd+FxpRCoX4H6g\"",
    "mtime": "2026-05-09T13:41:58.809Z",
    "size": 28986,
    "path": "../../.output/public/dos/files/digger.jsdos"
  },
  "/fonts/devicon.svg": {
    "type": "image/svg+xml",
    "encoding": null,
    "etag": "\"53e688-6audWvp5ZxP3TDZ16BRQ2F8JZec\"",
    "mtime": "2026-05-09T13:41:58.793Z",
    "size": 5498504,
    "path": "../../.output/public/fonts/devicon.svg"
  },
  "/dos/files/digger.jsdos.br": {
    "type": "text/plain; charset=utf-8",
    "encoding": "br",
    "etag": "\"6ec7-Zp6KSxb8tnsI7gNJLBCwZS33AYQ\"",
    "mtime": "2026-05-09T13:41:59.866Z",
    "size": 28359,
    "path": "../../.output/public/dos/files/digger.jsdos.br"
  },
  "/dos/js-dos/wdosbox.wasm": {
    "type": "application/wasm",
    "encoding": null,
    "etag": "\"1650d5-/eSIYkIAgIEtn5MVjcOQSw2Yfug\"",
    "mtime": "2026-05-09T13:41:58.865Z",
    "size": 1462485,
    "path": "../../.output/public/dos/js-dos/wdosbox.wasm"
  },
  "/dos/files/digger.jsdos.gz": {
    "type": "text/plain; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"6f77-8K4rugXg8bfFWJzTwx1BJcwajAw\"",
    "mtime": "2026-05-09T13:41:59.866Z",
    "size": 28535,
    "path": "../../.output/public/dos/files/digger.jsdos.gz"
  },
  "/dos/js-dos/js-dos.js.map": {
    "type": "application/json",
    "etag": "\"1c1f43-8EePJwNs7LUus35iC4CVXGbcSRs\"",
    "mtime": "2026-05-09T13:41:58.853Z",
    "size": 1843011,
    "path": "../../.output/public/dos/js-dos/js-dos.js.map"
  },
  "/images/projects/adventure/p1.jpg": {
    "type": "image/jpeg",
    "etag": "\"42acb-bepxaxsEwaHUwmzr5xiUa0rEGKw\"",
    "mtime": "2026-05-09T13:41:58.983Z",
    "size": 273099,
    "path": "../../.output/public/images/projects/adventure/p1.jpg"
  },
  "/images/projects/adventure/p2.jpg": {
    "type": "image/jpeg",
    "etag": "\"44b32-9K3UBSZ8fMyukMzJPJ7avodJhlw\"",
    "mtime": "2026-05-09T13:41:58.967Z",
    "size": 281394,
    "path": "../../.output/public/images/projects/adventure/p2.jpg"
  },
  "/images/projects/adventure/p1.webp": {
    "type": "image/webp",
    "etag": "\"3778c-Y9PIWke9woZmNaeQ6exuIp33uRM\"",
    "mtime": "2026-05-09T13:41:58.786Z",
    "size": 227212,
    "path": "../../.output/public/images/projects/adventure/p1.webp"
  },
  "/images/projects/adventure/p2.webp": {
    "type": "image/webp",
    "etag": "\"3a380-imQCn6BlSSM94ympCBFqLta3tik\"",
    "mtime": "2026-05-09T13:41:58.973Z",
    "size": 238464,
    "path": "../../.output/public/images/projects/adventure/p2.webp"
  },
  "/images/projects/genicam/genicam1.webp": {
    "type": "image/webp",
    "etag": "\"4bfae-LNI3uTdfbBQ0HmlBqvR8X6D0gQg\"",
    "mtime": "2026-05-09T13:41:58.847Z",
    "size": 311214,
    "path": "../../.output/public/images/projects/genicam/genicam1.webp"
  },
  "/images/projects/genicam/genicam2.webp": {
    "type": "image/webp",
    "etag": "\"2bebc-FfG02ab5BXsjv9yVU3ctpH3Q1aY\"",
    "mtime": "2026-05-09T13:41:58.878Z",
    "size": 179900,
    "path": "../../.output/public/images/projects/genicam/genicam2.webp"
  },
  "/images/projects/genicam/genicam3.webp": {
    "type": "image/webp",
    "etag": "\"3650e-i2+9wMNp4JYZuheObUeBNjRB9Tk\"",
    "mtime": "2026-05-09T13:41:58.883Z",
    "size": 222478,
    "path": "../../.output/public/images/projects/genicam/genicam3.webp"
  },
  "/images/projects/animal-shelter/p1.webp": {
    "type": "image/webp",
    "etag": "\"38712-i8AYJsuwsV6tR5vsyve01CE/QQY\"",
    "mtime": "2026-05-09T13:41:58.890Z",
    "size": 231186,
    "path": "../../.output/public/images/projects/animal-shelter/p1.webp"
  },
  "/images/projects/animal-shelter/p2.jpg": {
    "type": "image/jpeg",
    "etag": "\"4dc5f-z/Rsf2aegwTuLZhfzhp0IElq/dQ\"",
    "mtime": "2026-05-09T13:41:58.906Z",
    "size": 318559,
    "path": "../../.output/public/images/projects/animal-shelter/p2.jpg"
  },
  "/images/projects/animal-shelter/p2.webp": {
    "type": "image/webp",
    "etag": "\"464b2-tzkMGdQyxhllqWdiC4hhMY9j0fs\"",
    "mtime": "2026-05-09T13:41:58.905Z",
    "size": 287922,
    "path": "../../.output/public/images/projects/animal-shelter/p2.webp"
  },
  "/images/projects/julia-course/IMG_20221018_174932.jpg": {
    "type": "image/jpeg",
    "etag": "\"62eea-rqPhg/0XA2a7+eIEZloFVmCqop8\"",
    "mtime": "2026-05-09T13:41:58.772Z",
    "size": 405226,
    "path": "../../.output/public/images/projects/julia-course/IMG_20221018_174932.jpg"
  },
  "/images/projects/julia-course/IMG_20221018_174932.webp": {
    "type": "image/webp",
    "etag": "\"4ba22-xMPpZMAjXqgj4dGMrIlizRqOkDQ\"",
    "mtime": "2026-05-09T13:41:58.927Z",
    "size": 309794,
    "path": "../../.output/public/images/projects/julia-course/IMG_20221018_174932.webp"
  },
  "/images/projects/animal-shelter/p1.jpg": {
    "type": "image/jpeg",
    "etag": "\"96f8a-iVY3NYceNfom2eeBtQb5GGux/zs\"",
    "mtime": "2026-05-09T13:41:58.771Z",
    "size": 618378,
    "path": "../../.output/public/images/projects/animal-shelter/p1.jpg"
  },
  "/images/projects/julia-course/IMG_20221019_183914.webp": {
    "type": "image/webp",
    "etag": "\"46a74-m5xSR9Fl3+qQeCplA/WSvNbYAfc\"",
    "mtime": "2026-05-09T13:41:58.937Z",
    "size": 289396,
    "path": "../../.output/public/images/projects/julia-course/IMG_20221019_183914.webp"
  },
  "/images/projects/julia-course/IMG_20221019_183914.jpg": {
    "type": "image/jpeg",
    "etag": "\"6318a-sRgzm3yMhLEEmxAUFzJuimnPIE0\"",
    "mtime": "2026-05-09T13:41:58.927Z",
    "size": 405898,
    "path": "../../.output/public/images/projects/julia-course/IMG_20221019_183914.jpg"
  },
  "/images/projects/genicam/genicam1.png": {
    "type": "image/png",
    "etag": "\"1357db-EUw22SI72VqfwIpSKz44qqH6RVo\"",
    "mtime": "2026-05-09T13:41:58.772Z",
    "size": 1267675,
    "path": "../../.output/public/images/projects/genicam/genicam1.png"
  },
  "/images/projects/laplacian-edge/ovo1.jpeg": {
    "type": "image/jpeg",
    "etag": "\"8079-ss8hOG6fFU+5xzWd+QqTIbKf82c\"",
    "mtime": "2026-05-09T13:41:58.907Z",
    "size": 32889,
    "path": "../../.output/public/images/projects/laplacian-edge/ovo1.jpeg"
  },
  "/images/projects/laplacian-edge/ovo1.webp": {
    "type": "image/webp",
    "etag": "\"3c00-rin2P7K1gKCckzb85aZZ1FXfxYQ\"",
    "mtime": "2026-05-09T13:41:58.767Z",
    "size": 15360,
    "path": "../../.output/public/images/projects/laplacian-edge/ovo1.webp"
  },
  "/images/projects/laplacian-edge/ovo2.jpeg": {
    "type": "image/jpeg",
    "etag": "\"3390-nbPBzQyX/GR7lPm+d5PqQp8ouCA\"",
    "mtime": "2026-05-09T13:41:58.924Z",
    "size": 13200,
    "path": "../../.output/public/images/projects/laplacian-edge/ovo2.jpeg"
  },
  "/images/projects/laplacian-edge/ovo2.webp": {
    "type": "image/webp",
    "etag": "\"175c-PMCWFe77PJ37SSDBFPFTPXAlG/s\"",
    "mtime": "2026-05-09T13:41:58.923Z",
    "size": 5980,
    "path": "../../.output/public/images/projects/laplacian-edge/ovo2.webp"
  },
  "/images/projects/genicam/genicam2.png": {
    "type": "image/png",
    "etag": "\"1cfbf4-CsId1Y60wV3ly/1CdURylLc1H0Q\"",
    "mtime": "2026-05-09T13:41:58.889Z",
    "size": 1899508,
    "path": "../../.output/public/images/projects/genicam/genicam2.png"
  },
  "/images/projects/laplacian-edge/ovo3.jpeg": {
    "type": "image/jpeg",
    "etag": "\"cd8a-q8oYFcYhqIKBdQLt2pvS0pwD0Mg\"",
    "mtime": "2026-05-09T13:41:58.924Z",
    "size": 52618,
    "path": "../../.output/public/images/projects/laplacian-edge/ovo3.jpeg"
  },
  "/images/projects/laplacian-edge/ovo3.webp": {
    "type": "image/webp",
    "etag": "\"98ba-XESAgYAwasKpYkS/ekExFQMHMFE\"",
    "mtime": "2026-05-09T13:41:58.924Z",
    "size": 39098,
    "path": "../../.output/public/images/projects/laplacian-edge/ovo3.webp"
  },
  "/images/projects/photography/p1.jpg": {
    "type": "image/jpeg",
    "etag": "\"38a0f-c73zM5JUqgYdjhkUn7y8Amnomfk\"",
    "mtime": "2026-05-09T13:41:58.781Z",
    "size": 231951,
    "path": "../../.output/public/images/projects/photography/p1.jpg"
  },
  "/images/projects/photography/p1.webp": {
    "type": "image/webp",
    "etag": "\"2be5e-wZY5QmVdOa65jLlDQXJoqxBjO20\"",
    "mtime": "2026-05-09T13:41:58.928Z",
    "size": 179806,
    "path": "../../.output/public/images/projects/photography/p1.webp"
  },
  "/images/projects/genicam/genicam3.png": {
    "type": "image/png",
    "etag": "\"1ded45-TuhQqz7CiXPhDA75zQHWdH7aQfM\"",
    "mtime": "2026-05-09T13:41:58.906Z",
    "size": 1961285,
    "path": "../../.output/public/images/projects/genicam/genicam3.png"
  },
  "/images/projects/photography/p2.jpg": {
    "type": "image/jpeg",
    "etag": "\"6db39-t+wV8xn5xJs+dqrU/jUr92khl04\"",
    "mtime": "2026-05-09T13:41:58.954Z",
    "size": 449337,
    "path": "../../.output/public/images/projects/photography/p2.jpg"
  },
  "/images/projects/photography/p2.webp": {
    "type": "image/webp",
    "etag": "\"6a75a-WummA8KmEXnIo/9vKrPzCaB3iic\"",
    "mtime": "2026-05-09T13:41:58.942Z",
    "size": 436058,
    "path": "../../.output/public/images/projects/photography/p2.webp"
  },
  "/images/projects/sparkeyes/spark1.webp": {
    "type": "image/webp",
    "etag": "\"2bc3a-ejhpZPksYJQRSAjdVPu4ENFZLcE\"",
    "mtime": "2026-05-09T13:41:58.950Z",
    "size": 179258,
    "path": "../../.output/public/images/projects/sparkeyes/spark1.webp"
  },
  "/images/projects/sparkeyes/spark2.webp": {
    "type": "image/webp",
    "etag": "\"2ca60-eEUe3wVg2EKKez3lj+Cv10K6gHI\"",
    "mtime": "2026-05-09T13:41:58.955Z",
    "size": 182880,
    "path": "../../.output/public/images/projects/sparkeyes/spark2.webp"
  },
  "/images/projects/sparkeyes/spark3.webp": {
    "type": "image/webp",
    "etag": "\"39a0c-OTAFJUmNmpm0fBWjf+cfbhhaxUg\"",
    "mtime": "2026-05-09T13:41:58.961Z",
    "size": 236044,
    "path": "../../.output/public/images/projects/sparkeyes/spark3.webp"
  },
  "/images/projects/usiminas/usiminas1.webp": {
    "type": "image/webp",
    "etag": "\"1e276-clIROkk7i55g8rsS0wYjKSDOpGM\"",
    "mtime": "2026-05-09T13:41:58.987Z",
    "size": 123510,
    "path": "../../.output/public/images/projects/usiminas/usiminas1.webp"
  },
  "/images/projects/usiminas/usminas2.webp": {
    "type": "image/webp",
    "etag": "\"1d320-LG/T59/HTWd6HMMQSDFgLlUv96w\"",
    "mtime": "2026-05-09T13:41:58.989Z",
    "size": 119584,
    "path": "../../.output/public/images/projects/usiminas/usminas2.webp"
  },
  "/images/projects/santista/santista1.webp": {
    "type": "image/webp",
    "etag": "\"591fc-QBcFiKVqMxgZkdXBq0PcpqCbUpc\"",
    "mtime": "2026-05-09T13:41:58.947Z",
    "size": 365052,
    "path": "../../.output/public/images/projects/santista/santista1.webp"
  },
  "/images/projects/santista/santista2.jpeg": {
    "type": "image/jpeg",
    "etag": "\"4a582-DTCW740hJ/tsMloSNNcCLIoFOAQ\"",
    "mtime": "2026-05-09T13:41:58.938Z",
    "size": 304514,
    "path": "../../.output/public/images/projects/santista/santista2.jpeg"
  },
  "/images/projects/santista/santista2.webp": {
    "type": "image/webp",
    "etag": "\"1ecd6-88tq20AXg7mWZO+KFzTxXw9RQps\"",
    "mtime": "2026-05-09T13:41:58.944Z",
    "size": 126166,
    "path": "../../.output/public/images/projects/santista/santista2.webp"
  },
  "/dos/js-dos/types/src/dom.d.ts": {
    "type": "video/mp2t",
    "etag": "\"2b0-PFL63ySFIrRIxEPpz6sQNYtTUoM\"",
    "mtime": "2026-05-09T13:41:58.997Z",
    "size": 688,
    "path": "../../.output/public/dos/js-dos/types/src/dom.d.ts"
  },
  "/images/projects/sparkeyes/spark1.png": {
    "type": "image/png",
    "etag": "\"18f649-iBlThjLEqgwEmLPWlPC4QlT4dvk\"",
    "mtime": "2026-05-09T13:41:58.809Z",
    "size": 1635913,
    "path": "../../.output/public/images/projects/sparkeyes/spark1.png"
  },
  "/dos/js-dos/types/src/hardware-transport-layer.d.ts": {
    "type": "video/mp2t",
    "etag": "\"300-Yy5ftkj3E3DSV5axsnmwPXOnSIE\"",
    "mtime": "2026-05-09T13:41:59.003Z",
    "size": 768,
    "path": "../../.output/public/dos/js-dos/types/src/hardware-transport-layer.d.ts"
  },
  "/dos/js-dos/types/src/icons.d.ts": {
    "type": "video/mp2t",
    "etag": "\"e9d-9kUnkzEIcyscmgfDv1Cy12OQmSc\"",
    "mtime": "2026-05-09T13:41:58.998Z",
    "size": 3741,
    "path": "../../.output/public/dos/js-dos/types/src/icons.d.ts"
  },
  "/dos/js-dos/types/src/player-app.d.ts": {
    "type": "video/mp2t",
    "etag": "\"84e-9QJiXOKMw0g8ojvzpDAaRLrA6sA\"",
    "mtime": "2026-05-09T13:41:59.003Z",
    "size": 2126,
    "path": "../../.output/public/dos/js-dos/types/src/player-app.d.ts"
  },
  "/images/projects/sparkeyes/spark2.png": {
    "type": "image/png",
    "etag": "\"1cc3c9-U3z7PmDAA7z0CD9llLvzLWTlTkg\"",
    "mtime": "2026-05-09T13:41:58.974Z",
    "size": 1885129,
    "path": "../../.output/public/images/projects/sparkeyes/spark2.png"
  },
  "/images/projects/usiminas/usiminas1.png": {
    "type": "image/png",
    "etag": "\"134c05-aK5mfEf7zJogvwdqslFRAxX5q3w\"",
    "mtime": "2026-05-09T13:41:58.817Z",
    "size": 1264645,
    "path": "../../.output/public/images/projects/usiminas/usiminas1.png"
  },
  "/images/projects/usiminas/usminas2.png": {
    "type": "image/png",
    "etag": "\"151a4c-lYF0+qUb7JTaPSB7oyiilVvDA8w\"",
    "mtime": "2026-05-09T13:41:58.998Z",
    "size": 1382988,
    "path": "../../.output/public/images/projects/usiminas/usminas2.png"
  },
  "/dos/js-dos/types/src/player.d.ts": {
    "type": "video/mp2t",
    "etag": "\"48e-wVh33zUR6qN5hj7FzXWGtDuEQPw\"",
    "mtime": "2026-05-09T13:41:59.003Z",
    "size": 1166,
    "path": "../../.output/public/dos/js-dos/types/src/player.d.ts"
  },
  "/dos/js-dos/types/src/request.d.ts": {
    "type": "video/mp2t",
    "etag": "\"6a-PcNO+FOpms3wshqYgk2gOpoMZ/s\"",
    "mtime": "2026-05-09T13:41:59.003Z",
    "size": 106,
    "path": "../../.output/public/dos/js-dos/types/src/request.d.ts"
  },
  "/dos/js-dos/types/src/xhr.d.ts": {
    "type": "video/mp2t",
    "etag": "\"239-ioKyqCLZSuoID1j70IjjRQjDQrI\"",
    "mtime": "2026-05-09T13:41:59.003Z",
    "size": 569,
    "path": "../../.output/public/dos/js-dos/types/src/xhr.d.ts"
  },
  "/dos/js-dos/types/src/components/action-bar.d.ts": {
    "type": "video/mp2t",
    "etag": "\"95-VOf8qZ9ePt8l8ufFdSlJgHNqqqQ\"",
    "mtime": "2026-05-09T13:41:58.997Z",
    "size": 149,
    "path": "../../.output/public/dos/js-dos/types/src/components/action-bar.d.ts"
  },
  "/dos/js-dos/types/src/components/action-hide.d.ts": {
    "type": "video/mp2t",
    "etag": "\"af-iH5Z/2DAv/76BeXUqz/my9+Xf64\"",
    "mtime": "2026-05-09T13:41:59.004Z",
    "size": 175,
    "path": "../../.output/public/dos/js-dos/types/src/components/action-hide.d.ts"
  },
  "/dos/js-dos/types/src/components/action-save-or-exit.d.ts": {
    "type": "video/mp2t",
    "etag": "\"b5-MtPGAUDHxY6rFaMiYTEnDTdPezo\"",
    "mtime": "2026-05-09T13:41:59.004Z",
    "size": 181,
    "path": "../../.output/public/dos/js-dos/types/src/components/action-save-or-exit.d.ts"
  },
  "/dos/js-dos/types/src/components/client.d.ts": {
    "type": "video/mp2t",
    "etag": "\"df-peTt0KuJBzE54HhdyKmsHinEs9s\"",
    "mtime": "2026-05-09T13:41:59.004Z",
    "size": 223,
    "path": "../../.output/public/dos/js-dos/types/src/components/client.d.ts"
  },
  "/dos/js-dos/types/src/components/controls.d.ts": {
    "type": "video/mp2t",
    "etag": "\"110-n/W6GtWUZC3rbadG6VBN8xtmti4\"",
    "mtime": "2026-05-09T13:41:59.004Z",
    "size": 272,
    "path": "../../.output/public/dos/js-dos/types/src/components/controls.d.ts"
  },
  "/images/projects/sparkeyes/spark3.png": {
    "type": "image/png",
    "etag": "\"221ee6-iYBYfZODalHbNJmIfpryqy4D2WQ\"",
    "mtime": "2026-05-09T13:41:58.990Z",
    "size": 2236134,
    "path": "../../.output/public/images/projects/sparkeyes/spark3.png"
  },
  "/dos/js-dos/types/src/components/cpu-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"9d-tS598h6CGMe+CxJ+sS4V+sX2zRo\"",
    "mtime": "2026-05-09T13:41:59.005Z",
    "size": 157,
    "path": "../../.output/public/dos/js-dos/types/src/components/cpu-control.d.ts"
  },
  "/dos/js-dos/types/src/components/horizontal-slider.d.ts": {
    "type": "video/mp2t",
    "etag": "\"1f4-9VDnlq23FycSu3msxrSyM8peqkM\"",
    "mtime": "2026-05-09T13:41:59.005Z",
    "size": 500,
    "path": "../../.output/public/dos/js-dos/types/src/components/horizontal-slider.d.ts"
  },
  "/images/projects/santista/santista1.png": {
    "type": "image/png",
    "etag": "\"25ec90-ii1O2TNbaqWKyGLU42p7Sq7NGtM\"",
    "mtime": "2026-05-09T13:41:58.824Z",
    "size": 2485392,
    "path": "../../.output/public/images/projects/santista/santista1.png"
  },
  "/dos/js-dos/types/src/components/region.d.ts": {
    "type": "video/mp2t",
    "etag": "\"df-weJkEGh27ziqbiLBdj1oA6Ieevo\"",
    "mtime": "2026-05-09T13:41:59.006Z",
    "size": 223,
    "path": "../../.output/public/dos/js-dos/types/src/components/region.d.ts"
  },
  "/dos/js-dos/types/src/components/scale-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"119-8W1vDJ3kBcTmvbt0QJ0+sR07VSw\"",
    "mtime": "2026-05-09T13:41:59.005Z",
    "size": 281,
    "path": "../../.output/public/dos/js-dos/types/src/components/scale-control.d.ts"
  },
  "/dos/js-dos/types/src/components/sensitivity-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"125-aLj8c0nTcaz3BA2CR88LOymtOmg\"",
    "mtime": "2026-05-09T13:41:59.006Z",
    "size": 293,
    "path": "../../.output/public/dos/js-dos/types/src/components/sensitivity-control.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar.d.ts": {
    "type": "video/mp2t",
    "etag": "\"93-gC0SL3stv9ikRvCGl+QoMpx5hg8\"",
    "mtime": "2026-05-09T13:41:59.006Z",
    "size": 147,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar.d.ts"
  },
  "/dos/js-dos/types/src/components/sync-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"9c-JJ0GGLl5L+U42cy74ghlsLxvKM4\"",
    "mtime": "2026-05-09T13:41:59.006Z",
    "size": 156,
    "path": "../../.output/public/dos/js-dos/types/src/components/sync-control.d.ts"
  },
  "/dos/js-dos/types/src/components/tip.d.ts": {
    "type": "video/mp2t",
    "etag": "\"90-k/2A23wIwvvw12SciX9tFZk7x+k\"",
    "mtime": "2026-05-09T13:41:59.006Z",
    "size": 144,
    "path": "../../.output/public/dos/js-dos/types/src/components/tip.d.ts"
  },
  "/dos/js-dos/types/src/components/vertical-slider.d.ts": {
    "type": "video/mp2t",
    "etag": "\"1d7-abnLFIBfBdhrx9jusMPXZSgi95k\"",
    "mtime": "2026-05-09T13:41:59.006Z",
    "size": 471,
    "path": "../../.output/public/dos/js-dos/types/src/components/vertical-slider.d.ts"
  },
  "/dos/js-dos/types/src/components/volume-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"11b-0YevICNiQcVb8YTYGL1e1C69rqc\"",
    "mtime": "2026-05-09T13:41:59.006Z",
    "size": 283,
    "path": "../../.output/public/dos/js-dos/types/src/components/volume-control.d.ts"
  },
  "/dos/js-dos/types/v7-services/src/personal.d.ts": {
    "type": "video/mp2t",
    "etag": "\"14e-TKNQtwJ2xnbH9+/Q21Kz4fbI0bo\"",
    "mtime": "2026-05-09T13:41:58.996Z",
    "size": 334,
    "path": "../../.output/public/dos/js-dos/types/v7-services/src/personal.d.ts"
  },
  "/dos/js-dos/types/src/backend/v7/latency.d.ts": {
    "type": "video/mp2t",
    "etag": "\"f5-lCzD2ZWr5bwof0LRU9OWrT5JBe8\"",
    "mtime": "2026-05-09T13:41:59.007Z",
    "size": 245,
    "path": "../../.output/public/dos/js-dos/types/src/backend/v7/latency.d.ts"
  },
  "/dos/js-dos/types/src/backend/v7/personal.d.ts": {
    "type": "video/mp2t",
    "etag": "\"e6-KrG0AvI/Gn7pFOgS6UacN8GKexs\"",
    "mtime": "2026-05-09T13:41:58.996Z",
    "size": 230,
    "path": "../../.output/public/dos/js-dos/types/src/backend/v7/personal.d.ts"
  },
  "/dos/js-dos/types/src/backend/v7/v7-config.d.ts": {
    "type": "video/mp2t",
    "etag": "\"2ae-3IcV+f+Mg/b9DioAyhsZEmtOvdc\"",
    "mtime": "2026-05-09T13:41:59.007Z",
    "size": 686,
    "path": "../../.output/public/dos/js-dos/types/src/backend/v7/v7-config.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/latency-info.d.ts": {
    "type": "video/mp2t",
    "etag": "\"109-eMwAlRuR60nxALpalD7df/+nbfA\"",
    "mtime": "2026-05-09T13:41:59.007Z",
    "size": 265,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/latency-info.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/main.d.ts": {
    "type": "video/mp2t",
    "etag": "\"93-wqsXz+bL9+yFodtN5zMCEq6I0ug\"",
    "mtime": "2026-05-09T13:41:58.998Z",
    "size": 147,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/main.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/networking.d.ts": {
    "type": "video/mp2t",
    "etag": "\"99-cSlzdDypYBn3ZXnUMXaIuLI1RsI\"",
    "mtime": "2026-05-09T13:41:59.007Z",
    "size": 153,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/networking.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/token/token-add-time.d.ts": {
    "type": "video/mp2t",
    "etag": "\"9c-5WESNrInkZZXzFv8D/uHdKr0aUk\"",
    "mtime": "2026-05-09T13:41:58.990Z",
    "size": 156,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/token/token-add-time.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/token/token-select.d.ts": {
    "type": "video/mp2t",
    "etag": "\"9b-7hnfnWeTg2aRA47KtRNeVRhy5hc\"",
    "mtime": "2026-05-09T13:41:59.008Z",
    "size": 155,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/token/token-select.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/token/token.d.ts": {
    "type": "video/mp2t",
    "etag": "\"265-KmAJJGcEFeqFRQQJbXyPXfWqrtY\"",
    "mtime": "2026-05-09T13:41:59.007Z",
    "size": 613,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/token/token.d.ts"
  },
  "/dos/files/doom.jsdos.br": {
    "type": "text/plain; charset=utf-8",
    "encoding": "br",
    "etag": "\"cab44c-DRbrj1jhmyo79opfi2w58GB28+U\"",
    "mtime": "2026-05-09T13:42:19.229Z",
    "size": 13284428,
    "path": "../../.output/public/dos/files/doom.jsdos.br"
  },
  "/dos/files/doom.jsdos": {
    "type": "text/plain; charset=utf-8",
    "encoding": null,
    "etag": "\"ce38d8-R5ULl/ZX8gS8nly1++g8RcdZIlM\"",
    "mtime": "2026-05-09T13:41:59.022Z",
    "size": 13514968,
    "path": "../../.output/public/dos/files/doom.jsdos"
  },
  "/dos/files/doom.jsdos.gz": {
    "type": "text/plain; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"cd3169-8zzZ8h3NeOw+CdWOk6WHEtp+2TM\"",
    "mtime": "2026-05-09T13:42:01.539Z",
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
  const t = _$1(e), s = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(t, { ...s, body: e.node.req.body }) : new Request(t, { ...s, get body() {
    return n || (n = Ge$1(e), n);
  } });
}
function Ne$2(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: _e$1(e), url: _$1(e) }, e.web.request;
}
function Me$1() {
  return Qe$1();
}
const U$1 = /* @__PURE__ */ Symbol("$HTTPEvent");
function je$2(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[U$1]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function u(e) {
  return function(...n) {
    var _a;
    let t = n[0];
    if (je$2(t)) n[0] = t instanceof H3Event || t.__is_event__ ? t : t[U$1];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (t = Me$1(), !t) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      n.unshift(t);
    }
    return e(...n);
  };
}
const _$1 = u(getRequestURL), De$1 = u(getRequestIP), S$1 = u(setResponseStatus), q$1 = u(getResponseStatus), We$1 = u(getResponseStatusText), y = u(getResponseHeaders), H = u(getResponseHeader), Be$1 = u(setResponseHeader), N$1 = u(appendResponseHeader), ze$2 = u(parseCookies), Je$1 = u(getCookie), Xe$1 = u(setCookie), h$1 = u(setHeader), Ge$1 = u(getRequestWebStream), Ke$1 = u(removeResponseHeader), Ve$1 = u(Ne$2);
function Ze() {
  var _a;
  return getContext("nitro-app", { asyncContext: !!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function Qe$1() {
  return Ze().use().event;
}
const b$1 = "Invariant Violation", { setPrototypeOf: Ye$1 = function(e, n) {
  return e.__proto__ = n, e;
} } = Object;
class T extends Error {
  constructor(n = b$1) {
    super(typeof n == "number" ? `${b$1}: ${n} (see https://github.com/apollographql/invariant-packages)` : n);
    __publicField$1(this, "framesToPop", 1);
    __publicField$1(this, "name", b$1);
    Ye$1(this, T.prototype);
  }
}
function et(e, n) {
  if (!e) throw new T(n);
}
const $ = "solidFetchEvent";
function tt(e) {
  return { request: Ve$1(e), response: ot(e), clientAddress: De$1(e), locals: {}, nativeEvent: e };
}
function nt(e) {
  return { ...e };
}
function rt(e) {
  if (!e.context[$]) {
    const n = tt(e);
    e.context[$] = n;
  }
  return e.context[$];
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
    const t = H(this.event, n);
    return Array.isArray(t) ? t.join(", ") : t || null;
  }
  has(n) {
    return this.get(n) !== null;
  }
  set(n, t) {
    return Be$1(this.event, n, t);
  }
  delete(n) {
    return Ke$1(this.event, n);
  }
  append(n, t) {
    N$1(this.event, n, t);
  }
  getSetCookie() {
    const n = H(this.event, "Set-Cookie");
    return Array.isArray(n) ? n : [n];
  }
  forEach(n) {
    return Object.entries(y(this.event)).forEach(([t, s]) => n(Array.isArray(s) ? s.join(", ") : s, t, this));
  }
  entries() {
    return Object.entries(y(this.event)).map(([n, t]) => [n, Array.isArray(t) ? t.join(", ") : t])[Symbol.iterator]();
  }
  keys() {
    return Object.keys(y(this.event))[Symbol.iterator]();
  }
  values() {
    return Object.values(y(this.event)).map((n) => Array.isArray(n) ? n.join(", ") : n)[Symbol.iterator]();
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
    return We$1(e);
  }, set statusText(n) {
    S$1(e, q$1(e), n);
  }, headers: new st(e) };
}
const M$1 = [{ page: true, $component: { src: "src/routes/doom.tsx?pick=default&pick=$css", build: () => import('../build/doom.mjs'), import: () => import('../build/doom.mjs') }, path: "/doom", filePath: "/home/gus/thecodergus.github.io/src/routes/doom.tsx" }, { page: true, $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => import('../build/index.mjs').then(function (n) { return n.i; }), import: () => import('../build/index.mjs').then(function (n) { return n.i; }) }, path: "/", filePath: "/home/gus/thecodergus.github.io/src/routes/index.tsx" }], at = it(M$1.filter((e) => e.page));
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
function j() {
  function e(t) {
    return { ...t, ...t.$$route ? t.$$route.require().route : void 0, info: { ...t.$$route ? t.$$route.require().route.info : {}, filesystem: true }, component: t.$component && ft(t.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: t.children ? t.children.map(e) : void 0 };
  }
  return at.map(e);
}
let A$1;
const Ft = isServer ? () => getRequestEvent().routes : () => A$1 || (A$1 = j());
function ht(e) {
  const n = Je$1(e.nativeEvent, "flash");
  if (n) try {
    let t = JSON.parse(n);
    if (!t || !t.result) return;
    const s = [...t.input.slice(0, -1), new Map(t.input[t.input.length - 1])], o = t.error ? new Error(t.result) : t.result;
    return { input: s, url: t.url, pending: false, result: t.thrown ? void 0 : o, error: t.thrown ? o : void 0 };
  } catch (t) {
    console.error(t);
  } finally {
    Xe$1(e.nativeEvent, "flash", "", { maxAge: 0 });
  }
}
async function gt(e) {
  const n = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, e.response.headers.set("Content-Type", "text/html"), Object.assign(e, { manifest: await n.json(), assets: [...await n.inputs[n.handler].assets()], router: { submission: ht(e) }, routes: j(), complete: false, $islands: /* @__PURE__ */ new Set() });
}
const mt = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function Rt(e) {
  return e.status && mt.has(e.status) ? e.status : 302;
}
const yt = {}, E = [AbortSignalPlugin, CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin], St = 64, D = Feature.RegExp;
function W$1(e) {
  const n = new TextEncoder().encode(e), t = n.length, s = t.toString(16), o = "00000000".substring(0, 8 - s.length) + s, a = new TextEncoder().encode(`;0x${o};`), i = new Uint8Array(12 + t);
  return i.set(a), i.set(n, 12), i;
}
function C$1(e, n) {
  return new ReadableStream({ start(t) {
    crossSerializeStream(n, { scopeId: e, plugins: E, onSerialize(s, o) {
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
    toCrossJSONStream(e, { disabledFeatures: D, depthLimit: St, plugins: E, onParse(t) {
      n.enqueue(W$1(JSON.stringify(t)));
    }, onDone() {
      n.close();
    }, onError(t) {
      n.error(t);
    } });
  } });
}
async function P(e) {
  return fromJSON(JSON.parse(e), { plugins: E, disabledFeatures: D });
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
    if (a && o && (r = await L(n, r)), r instanceof Response) {
      if (r.headers && r.headers.has("X-Content-Raw")) return r;
      o && (r.headers && k$1(e, r.headers), r.status && (r.status < 300 || r.status >= 400) && S$1(e, r.status), r.customBody ? r = await r.customBody() : r.body == null && (r = null));
    }
    if (!o) return F$1(r, t, f);
    return h$1(e, "x-serialized", "true"), h$1(e, "content-type", "text/javascript"), C$1(o, r);
    return wt(r);
  } catch (r) {
    if (r instanceof Response) a && o && (r = await L(n, r)), r.headers && k$1(e, r.headers), r.status && (!o || r.status < 300 || r.status >= 400) && S$1(e, r.status), r.customBody ? r = r.customBody() : r.body == null && (r = null), h$1(e, "X-Error", "true");
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
  const n = new Headers(e.request.headers), t = ze$2(e.nativeEvent), s = e.response.headers.getSetCookie();
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
async function L(e, n) {
  let t, s = new URL(e.request.headers.get("referer")).toString();
  n instanceof Response && (n.headers.has("X-Revalidate") && (t = n.headers.get("X-Revalidate").split(",")), n.headers.has("Location") && (s = new URL(n.headers.get("Location"), new URL(e.request.url).origin + "").toString()));
  const o = nt(e);
  return o.request = new Request(s, { headers: $t(e) }), await provideRequestEvent(o, async () => {
    await gt(o), v$1 || (v$1 = (await import('../build/app-CvgBeCzL.mjs')).default), o.router.dataOnly = t || true, o.router.previousUrl = e.request.headers.get("referer");
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

var b = ((e) => (e.PtBr = "pt-br", e.En = "en", e))(b || {});
function K() {
  return b.PtBr;
}
const [v, N] = createSignal(K()), [z, F] = createSignal(void 0), [U, Y$1] = createSignal(void 0), [q, h] = createSignal(null);
function Z$1(e) {
  N(e);
}
const I = async (e) => {
  const t = await fetch(`/data/languages/${e}.json`);
  if (!t.ok) throw new Error("Failed to load messages");
  return t.json();
}, R = async () => {
  const e = await fetch("/data/portfolio_shared_data.json");
  if (!e.ok) throw new Error("Failed to load shared data");
  return e.json();
};
function X$1(e, t) {
  const o = z();
  if (!o) return t != null ? t : e;
  const r = e.split(".");
  let s = o;
  for (const f of r) if (s && typeof s == "object" && f in s) s = s[f];
  else return t != null ? t : e;
  return typeof s == "string" ? s : t != null ? t : e;
}
const M = createContext();
function x$1() {
  const e = useContext(M);
  if (!e) throw new Error("useI18n must be used within I18nProvider");
  return e;
}
function Ee$1(e) {
  onMount(() => {
    if (R().then((r) => {
      r && Y$1(r);
    }).catch((r) => {
      console.error("[i18n] Failed to load shared data:", r), h("Falha ao carregar dados compartilhados");
    }), "undefined" < "u") ;
    const o = v();
    I(o).then((r) => {
      F(r), h(null);
    }).catch((r) => {
      console.error("[i18n] Failed to load messages:", r), h(`Falha ao carregar idioma: ${o}`);
    });
  });
  const t = { language: v, setLanguage: Z$1, t: X$1, messages: z, sharedData: U, fetchError: q };
  return createComponent$1(M.Provider, { value: t, get children() {
    return e.children;
  } });
}
/**
* @license lucide-solid v0.562.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var J$1 = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, m = J$1, k = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Q$1 = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, o, r) => r ? r.toUpperCase() : o.toLowerCase()), V = (e) => {
  const t = Q$1(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, ee$1 = (...e) => e.filter((t, o, r) => !!t && t.trim() !== "" && r.indexOf(t) === o).join(" ").trim(), te = (e) => {
  const [t, o] = splitProps(e, ["color", "size", "strokeWidth", "children", "class", "name", "iconNode", "absoluteStrokeWidth"]);
  return ssrElement("svg", mergeProps(m, { get width() {
    var _a;
    return (_a = t.size) != null ? _a : m.width;
  }, get height() {
    var _a;
    return (_a = t.size) != null ? _a : m.height;
  }, get stroke() {
    var _a;
    return (_a = t.color) != null ? _a : m.stroke;
  }, get "stroke-width"() {
    var _a, _b;
    return t.absoluteStrokeWidth ? Number((_a = t.strokeWidth) != null ? _a : m["stroke-width"]) * 24 / Number(t.size) : Number((_b = t.strokeWidth) != null ? _b : m["stroke-width"]);
  }, get class() {
    return ee$1("lucide", "lucide-icon", ...t.name != null ? [`lucide-${k(V(t.name))}`, `lucide-${k(t.name)}`] : [], t.class != null ? t.class : "");
  } }, o), () => escape(createComponent$1(For, { get each() {
    return t.iconNode;
  }, children: ([r, s]) => createComponent$1(Dynamic, mergeProps({ component: r }, s)) })), true);
}, p = te, re$1 = [["path", { d: "M4 5h16", key: "1tepv9" }], ["path", { d: "M4 12h16", key: "1lakjw" }], ["path", { d: "M4 19h16", key: "1djgab" }]], ae$1 = (e) => createComponent$1(p, mergeProps(e, { iconNode: re$1, name: "menu" })), oe$1 = ae$1, ne$1 = [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]], se$1 = (e) => createComponent$1(p, mergeProps(e, { iconNode: ne$1, name: "x" })), S = se$1, le = ["<div", ' class="', '"><span class="text-xs text-text-muted font-mono">', '</span><div class="flex items-center rounded-lg border border-border overflow-hidden"><button class="', '" aria-label="Portugu\xEAs (Brasil)">\u{1F1E7}\u{1F1F7} PT</button><button class="', '" aria-label="English">\u{1F1FA}\u{1F1F8} EN</button></div></div>'], ie$1 = ["<nav", ' class="', '"><div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"><a', ' class="font-mono text-accent-primary font-bold text-lg tracking-wider">&lt;thecodergus/&gt;</a><div class="hidden md:flex items-center gap-8"><!--$-->', "<!--/--><!--$-->", '<!--/--></div><button class="md:hidden text-text-secondary hover:text-accent-secondary"', ">", "</button></div><!--$-->", "<!--/--></nav>"], ce = ["<a", ' class="text-sm font-medium text-text-secondary hover:text-accent-secondary transition-colors relative group"><!--$-->', '<!--/--><span class="absolute -bottom-1 left-0 w-0 h-px bg-accent-secondary transition-all group-hover:w-full"></span></a>'], de$1 = ["<div", ' class="md:hidden bg-surface/95 backdrop-blur-md border-b border-border px-6 py-4 flex flex-col gap-4"><!--$-->', "<!--/--><!--$-->", "<!--/--></div>"], ue$1 = ["<a", ' class="text-sm font-medium text-text-secondary hover:text-accent-secondary transition-colors">', "</a>"];
const _ = (e) => {
  const t = "bg-accent-secondary text-bg border-accent-secondary", o = "bg-transparent text-text-muted border-border hover:border-accent-secondary hover:text-accent-secondary";
  return ssr(le, ssrHydrationKey(), `flex items-center gap-2 ${e.mobile ? "pt-2 border-t border-border" : ""}`, escape(e.label()), `px-3 py-1.5 text-sm font-medium transition-colors border-r border-border ${e.language() === b.PtBr ? escape(t, true) : escape(o, true)}`, `px-3 py-1.5 text-sm font-medium transition-colors ${e.language() === b.En ? escape(t, true) : escape(o, true)}`);
};
function je$1(e) {
  const { language: t, t: o } = x$1(), [r, s] = createSignal(false), [f, ke] = createSignal(false), A = () => t() === b.En ? "Home" : "In\xEDcio", w = () => e.standalone ? [{ href: "/", label: A() }] : [{ href: "#about", label: o("navbar.about", "Sobre") }, { href: "#skills", label: o("navbar.skills", "Habilidades") }, { href: "#experience", label: o("navbar.experience", "Experi\xEAncia") }, { href: "#projects", label: o("navbar.projects", "Projetos") }, { href: "#contact", label: o("navbar.contact", "Contato") }], y = () => o("navbar.language", "Idioma"), L = () => o("navbar.menu_open", "Abrir menu");
  return onMount(() => {
    let l = false;
    const $ = () => {
      l || (requestAnimationFrame(() => {
        s(window.scrollY > 50), l = false;
      }), l = true);
    };
    window.addEventListener("scroll", $, { passive: true }), onCleanup(() => window.removeEventListener("scroll", $));
  }), ssr(ie$1, ssrHydrationKey(), `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${r() ? "bg-bg/80 backdrop-blur-md border-b border-border" : ""} ${r() ? "" : "bg-transparent"}`, ssrAttribute("href", e.standalone ? "/" : "#", false), escape(w().map((l) => ssr(ce, ssrHydrationKey() + ssrAttribute("href", escape(l.href, true), false), escape(l.label)))), escape(createComponent$1(_, { language: t, label: y })), ssrAttribute("aria-label", escape(L(), true), false), f() ? escape(createComponent$1(S, { size: 24 })) : escape(createComponent$1(oe$1, { size: 24 })), f() && ssr(de$1, ssrHydrationKey(), escape(w().map((l) => ssr(ue$1, ssrHydrationKey() + ssrAttribute("href", escape(l.href, true), false), escape(l.label)))), escape(createComponent$1(_, { language: t, label: y, mobile: true }))));
}
var me = [["path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4", key: "tonef" }], ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]], he = (e) => createComponent$1(p, mergeProps(e, { iconNode: me, name: "github" })), be$1 = he, fe = [["path", { d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5", key: "mvr1a0" }]], pe = (e) => createComponent$1(p, mergeProps(e, { iconNode: fe, name: "heart" })), ge = pe, ve$1 = ["<footer", ' class="py-8 bg-bg border-t border-border"><div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4"><div class="flex items-center gap-2 text-sm text-text-muted"><span>', "</span><!--$-->", "<!--/--><span><!--$-->", "<!--/--> <!--$-->", '<!--/--></span></div><div class="flex items-center gap-6"><a href="https://github.com/thecodergus" target="_blank" rel="noopener noreferrer" class="text-text-muted hover:text-accent-primary transition-colors" aria-label="GitHub">', "</a><!--$-->", '<!--/--></div><p class="text-xs text-text-muted font-mono">&copy; <!--$-->', "<!--/--> <!--$-->", "<!--/--></p></div></footer>"], C = ["<a", ' href="/doom" class="text-xs font-mono text-text-muted hover:text-accent-primary transition-colors border border-border px-3 py-1 rounded hover:border-accent-primary">/doom</a>'];
function Ne$1(e) {
  const { sharedData: t, t: o } = x$1(), r = () => {
    var _a, _b;
    return ((_b = (_a = t()) == null ? void 0 : _a.basic_info) == null ? void 0 : _b.name) || "";
  }, s = () => o("footer.made_with", "");
  return ssr(ve$1, ssrHydrationKey(), escape(s()), escape(createComponent$1(ge, { size: 14, class: "text-accent-red fill-accent-red" })), escape(o("footer.by", "por")), escape(r()), escape(createComponent$1(be$1, { size: 20 })), !e.hideDoomLink && C[0] + ssrHydrationKey() + C[1], escape((/* @__PURE__ */ new Date()).getFullYear()), escape(r()));
}
var xe$1 = [["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", key: "wmoenq" }], ["path", { d: "M12 9v4", key: "juzpu7" }], ["path", { d: "M12 17h.01", key: "p32p05" }]], we$1 = (e) => createComponent$1(p, mergeProps(e, { iconNode: xe$1, name: "triangle-alert" })), ye$1 = we$1, $e = ["<div", ' role="alert" class="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-[70] bg-accent-red/10 border border-accent-red/30 rounded-xl p-4 flex items-start gap-3 backdrop-blur-md shadow-lg"><!--$-->', '<!--/--><div class="flex-1 min-w-0"><p class="text-sm font-medium text-accent-red">', '</p><p class="text-xs text-text-muted mt-1">Using fallback content. Try reloading the page.</p></div><button class="p-1 rounded-full text-text-muted hover:text-text shrink-0" aria-label="Dismiss">', "</button></div>"];
function ze$1() {
  const { fetchError: e } = x$1(), [t, o] = createSignal(false);
  return createComponent$1(Show, { get when() {
    return e() && !t();
  }, get children() {
    return ssr($e, ssrHydrationKey(), escape(createComponent$1(ye$1, { size: 20, class: "text-accent-red shrink-0 mt-0.5" })), escape(e()), escape(createComponent$1(S, { size: 16 })));
  } });
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
function Vt(e) {
  let t;
  const n = Me(e), r = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(n, { ...r, body: e.node.req.body }) : new Request(n, { ...r, get body() {
    return t || (t = on(e), t);
  } });
}
function zt(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: Vt(e), url: Me(e) }, e.web.request;
}
function Jt() {
  return ln();
}
const _e = /* @__PURE__ */ Symbol("$HTTPEvent");
function Xt(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[_e]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function A(e) {
  return function(...t) {
    var _a;
    let n = t[0];
    if (Xt(n)) t[0] = n instanceof H3Event || n.__is_event__ ? n : n[_e];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (n = Jt(), !n) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      t.unshift(n);
    }
    return e(...t);
  };
}
const Me = A(getRequestURL), Yt = A(getRequestIP), ne = A(setResponseStatus), ye = A(getResponseStatus), Qt = A(getResponseStatusText), J = A(getResponseHeaders), we = A(getResponseHeader), Zt = A(setResponseHeader), en = A(appendResponseHeader), be = A(sendRedirect), tn = A(getCookie), nn = A(setCookie), rn = A(setHeader), on = A(getRequestWebStream), sn = A(removeResponseHeader), an = A(zt);
function cn() {
  var _a;
  return getContext("nitro-app", { asyncContext: !!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function ln() {
  return cn().use().event;
}
const Ne = [{ page: true, $component: { src: "src/routes/doom.tsx?pick=default&pick=$css", build: () => import('../build/doom2.mjs'), import: () => import('../build/doom2.mjs') }, path: "/doom", filePath: "/home/gus/thecodergus.github.io/src/routes/doom.tsx" }, { page: true, $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => import('../build/index2.mjs').then(function (n) { return n.i; }), import: () => import('../build/index2.mjs').then(function (n) { return n.i; }) }, path: "/", filePath: "/home/gus/thecodergus.github.io/src/routes/index.tsx" }], un = dn(Ne.filter((e) => e.page));
function dn(e) {
  function t(n, r, o, s) {
    const a = Object.values(n).find((i) => o.startsWith(i.id + "/"));
    return a ? (t(a.children || (a.children = []), r, o.slice(a.id.length)), n) : (n.push({ ...r, id: o, path: o.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/") }), n);
  }
  return e.sort((n, r) => n.path.length - r.path.length).reduce((n, r) => t(n, r, r.path, r.path), []);
}
function pn(e, t) {
  const n = fn.lookup(e);
  if (n && n.route) {
    const r = n.route, o = t === "HEAD" ? r.$HEAD || r.$GET : r[`$${t}`];
    if (o === void 0) return;
    const s = r.page === true && r.$component !== void 0;
    return { handler: o, params: n.params, isPage: s };
  }
}
function hn(e) {
  return e.$HEAD || e.$GET || e.$POST || e.$PUT || e.$PATCH || e.$DELETE;
}
const fn = createRouter({ routes: Ne.reduce((e, t) => {
  if (!hn(t)) return e;
  let n = t.path.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/").replace(/\*([^/]*)/g, (r, o) => `**:${o}`).split("/").map((r) => r.startsWith(":") || r.startsWith("*") ? r : encodeURIComponent(r)).join("/");
  if (/:[^/]*\?/g.test(n)) throw new Error(`Optional parameters are not supported in API routes: ${n}`);
  if (e[n]) throw new Error(`Duplicate API routes for "${n}" found at "${e[n].route.path}" and "${t.path}"`);
  return e[n] = { route: t }, e;
}, {}) }), Q = "solidFetchEvent";
function mn(e) {
  return { request: an(e), response: wn(e), clientAddress: Yt(e), locals: {}, nativeEvent: e };
}
function gn(e) {
  if (!e.context[Q]) {
    const t = mn(e);
    e.context[Q] = t;
  }
  return e.context[Q];
}
class yn {
  constructor(t) {
    __publicField(this, "event");
    this.event = t;
  }
  get(t) {
    const n = we(this.event, t);
    return Array.isArray(n) ? n.join(", ") : n || null;
  }
  has(t) {
    return this.get(t) !== null;
  }
  set(t, n) {
    return Zt(this.event, t, n);
  }
  delete(t) {
    return sn(this.event, t);
  }
  append(t, n) {
    en(this.event, t, n);
  }
  getSetCookie() {
    const t = we(this.event, "Set-Cookie");
    return Array.isArray(t) ? t : [t];
  }
  forEach(t) {
    return Object.entries(J(this.event)).forEach(([n, r]) => t(Array.isArray(r) ? r.join(", ") : r, n, this));
  }
  entries() {
    return Object.entries(J(this.event)).map(([t, n]) => [t, Array.isArray(n) ? n.join(", ") : n])[Symbol.iterator]();
  }
  keys() {
    return Object.keys(J(this.event))[Symbol.iterator]();
  }
  values() {
    return Object.values(J(this.event)).map((t) => Array.isArray(t) ? t.join(", ") : t)[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }
}
function wn(e) {
  return { get status() {
    return ye(e);
  }, set status(t) {
    ne(e, t);
  }, get statusText() {
    return Qt(e);
  }, set statusText(t) {
    ne(e, ye(e), t);
  }, headers: new yn(e) };
}
var vn = " ";
const Rn = { style: (e) => ssrElement("style", e.attrs, () => e.children, true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(vn), true) : null, noscript: (e) => ssrElement("noscript", e.attrs, () => escape(e.children), true) };
function re(e, t) {
  let { tag: n, attrs: { key: r, ...o } = { key: void 0 }, children: s } = e;
  return Rn[n]({ attrs: { ...o, nonce: t }, key: r, children: s });
}
function xn(e, t, n, r = "default") {
  return lazy(async () => {
    var _a;
    {
      const s = (await e.import())[r], i = (await ((_a = t.inputs) == null ? void 0 : _a[e.src].assets())).filter((l) => l.tag === "style" || l.attrs.rel === "stylesheet");
      return { default: (l) => [...i.map((d) => re(d)), createComponent(s, l)] };
    }
  });
}
function Fe() {
  function e(n) {
    return { ...n, ...n.$$route ? n.$$route.require().route : void 0, info: { ...n.$$route ? n.$$route.require().route.info : {}, filesystem: true }, component: n.$component && xn(n.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: n.children ? n.children.map(e) : void 0 };
  }
  return un.map(e);
}
let ve;
const En = isServer ? () => getRequestEvent().routes : () => ve || (ve = Fe());
function An(e) {
  const t = tn(e.nativeEvent, "flash");
  if (t) try {
    let n = JSON.parse(t);
    if (!n || !n.result) return;
    const r = [...n.input.slice(0, -1), new Map(n.input[n.input.length - 1])], o = n.error ? new Error(n.result) : n.result;
    return { input: r, url: n.url, pending: false, result: n.thrown ? void 0 : o, error: n.thrown ? o : void 0 };
  } catch (n) {
    console.error(n);
  } finally {
    nn(e.nativeEvent, "flash", "", { maxAge: 0 });
  }
}
async function Sn(e) {
  const t = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, e.response.headers.set("Content-Type", "text/html"), Object.assign(e, { manifest: await t.json(), assets: [...await t.inputs[t.handler].assets()], router: { submission: An(e) }, routes: Fe(), complete: false, $islands: /* @__PURE__ */ new Set() });
}
const $n = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function oe(e) {
  return e.status && $n.has(e.status) ? e.status : 302;
}
function Pn(e, t, n = {}, r) {
  return eventHandler({ handler: (o) => {
    const s = gn(o);
    return provideRequestEvent(s, async () => {
      const a = pn(new URL(s.request.url).pathname, s.request.method);
      if (a) {
        const h = await a.handler.import(), y = s.request.method === "HEAD" ? h.HEAD || h.GET : h[s.request.method];
        s.params = a.params || {}, sharedConfig.context = { event: s };
        const p = await y(s);
        if (p !== void 0) return p;
        if (s.request.method !== "GET") throw new Error(`API handler for ${s.request.method} "${s.request.url}" did not return a response.`);
        if (!a.isPage) return;
      }
      const i = await t(s), c = typeof n == "function" ? await n(i) : { ...n }, l = c.mode || "stream";
      if (c.nonce && (i.nonce = c.nonce), l === "sync") {
        const h = renderToString(() => (sharedConfig.context.event = i, e(i)), c);
        if (i.complete = true, i.response && i.response.headers.get("Location")) {
          const y = oe(i.response);
          return be(o, i.response.headers.get("Location"), y);
        }
        return h;
      }
      if (c.onCompleteAll) {
        const h = c.onCompleteAll;
        c.onCompleteAll = (y) => {
          xe(i)(y), h(y);
        };
      } else c.onCompleteAll = xe(i);
      if (c.onCompleteShell) {
        const h = c.onCompleteShell;
        c.onCompleteShell = (y) => {
          Re(i, o)(), h(y);
        };
      } else c.onCompleteShell = Re(i, o);
      const d = renderToStream(() => (sharedConfig.context.event = i, e(i)), c);
      if (i.response && i.response.headers.get("Location")) {
        const h = oe(i.response);
        return be(o, i.response.headers.get("Location"), h);
      }
      if (l === "async") return d;
      const { writable: b, readable: g } = new TransformStream();
      return d.pipeTo(b), g;
    });
  } });
}
function Re(e, t) {
  return () => {
    if (e.response && e.response.headers.get("Location")) {
      const n = oe(e.response);
      ne(t, n), rn(t, "Location", e.response.headers.get("Location"));
    }
  };
}
function xe(e) {
  return ({ write: t }) => {
    e.complete = true;
    const n = e.response && e.response.headers.get("Location");
    n && t(`<script>window.location="${n}"<\/script>`);
  };
}
function Cn(e, t, n) {
  return Pn(e, Sn, t);
}
const je = createContext(), Ue = ["title", "meta"], se = [], ae = ["name", "http-equiv", "content", "charset", "media"].concat(["property"]), Y = (e, t) => {
  const n = Object.fromEntries(Object.entries(e.props).filter(([r]) => t.includes(r)).sort());
  return (Object.hasOwn(n, "name") || Object.hasOwn(n, "property")) && (n.name = n.name || n.property, delete n.property), e.tag + JSON.stringify(n);
};
function Tn() {
  if (!sharedConfig.context) {
    const n = document.head.querySelectorAll("[data-sm]");
    Array.prototype.forEach.call(n, (r) => r.parentNode.removeChild(r));
  }
  const e = /* @__PURE__ */ new Map();
  function t(n) {
    if (n.ref) return n.ref;
    let r = document.querySelector(`[data-sm="${n.id}"]`);
    return r ? (r.tagName.toLowerCase() !== n.tag && (r.parentNode && r.parentNode.removeChild(r), r = document.createElement(n.tag)), r.removeAttribute("data-sm")) : r = document.createElement(n.tag), r;
  }
  return { addTag(n) {
    if (Ue.indexOf(n.tag) !== -1) {
      const s = n.tag === "title" ? se : ae, a = Y(n, s);
      e.has(a) || e.set(a, []);
      let i = e.get(a), c = i.length;
      i = [...i, n], e.set(a, i);
      let l = t(n);
      n.ref = l, spread(l, n.props);
      let d = null;
      for (var r = c - 1; r >= 0; r--) if (i[r] != null) {
        d = i[r];
        break;
      }
      return l.parentNode != document.head && document.head.appendChild(l), d && d.ref && d.ref.parentNode && document.head.removeChild(d.ref), c;
    }
    let o = t(n);
    return n.ref = o, spread(o, n.props), o.parentNode != document.head && document.head.appendChild(o), -1;
  }, removeTag(n, r) {
    const o = n.tag === "title" ? se : ae, s = Y(n, o);
    if (n.ref) {
      const a = e.get(s);
      if (a) {
        if (n.ref.parentNode) {
          n.ref.parentNode.removeChild(n.ref);
          for (let i = r - 1; i >= 0; i--) a[i] != null && document.head.appendChild(a[i].ref);
        }
        a[r] = null, e.set(s, a);
      } else n.ref.parentNode && n.ref.parentNode.removeChild(n.ref);
    }
  } };
}
function kn() {
  const e = [];
  return useAssets(() => ssr(On(e))), { addTag(t) {
    if (Ue.indexOf(t.tag) !== -1) {
      const n = t.tag === "title" ? se : ae, r = Y(t, n), o = e.findIndex((s) => s.tag === t.tag && Y(s, n) === r);
      o !== -1 && e.splice(o, 1);
    }
    return e.push(t), e.length;
  }, removeTag(t, n) {
  } };
}
const Ln = (e) => {
  const t = isServer ? kn() : Tn();
  return createComponent$1(je.Provider, { value: t, get children() {
    return e.children;
  } });
}, ue = (e, t, n) => (In({ tag: e, props: t, setting: n, id: createUniqueId(), get name() {
  return t.name || t.property;
} }), null);
function In(e) {
  const t = useContext(je);
  if (!t) throw new Error("<MetaProvider /> should be in the tree");
  createRenderEffect(() => {
    const n = t.addTag(e);
    onCleanup(() => t.removeTag(e, n));
  });
}
function On(e) {
  return e.map((t) => {
    var _a, _b;
    const r = Object.keys(t.props).map((s) => s === "children" ? "" : ` ${s}="${escape(t.props[s], true)}"`).join("");
    let o = t.props.children;
    return Array.isArray(o) && (o = o.join("")), ((_a = t.setting) == null ? void 0 : _a.close) ? `<${t.tag} data-sm="${t.id}"${r}>${((_b = t.setting) == null ? void 0 : _b.escape) ? escape(o) : o || ""}</${t.tag}>` : `<${t.tag} data-sm="${t.id}"${r}/>`;
  }).join("");
}
const qn = (e) => ue("title", e, { escape: true, close: true }), x = (e) => ue("meta", e), Z = (e) => ue("link", e);
function Be() {
  let e = /* @__PURE__ */ new Set();
  function t(o) {
    return e.add(o), () => e.delete(o);
  }
  let n = false;
  function r(o, s) {
    if (n) return !(n = false);
    const a = { to: o, options: s, defaultPrevented: false, preventDefault: () => a.defaultPrevented = true };
    for (const i of e) i.listener({ ...a, from: i.location, retry: (c) => {
      c && (n = true), i.navigate(o, { ...s, resolve: false });
    } });
    return !a.defaultPrevented;
  }
  return { subscribe: t, confirm: r };
}
let ie;
function de() {
  (!window.history.state || window.history.state._depth == null) && window.history.replaceState({ ...window.history.state, _depth: window.history.length - 1 }, ""), ie = window.history.state._depth;
}
isServer || de();
function Hn(e) {
  return { ...e, _depth: window.history.state && window.history.state._depth };
}
function _n(e, t) {
  let n = false;
  return () => {
    const r = ie;
    de();
    const o = r == null ? null : ie - r;
    if (n) {
      n = false;
      return;
    }
    o && t(o) ? (n = true, window.history.go(-o)) : e();
  };
}
const Mn = /^(?:[a-z0-9]+:)?\/\//i, Nn = /^\/+|(\/)\/+$/g, We = "http://sr";
function B(e, t = false) {
  const n = e.replace(Nn, "$1");
  return n ? t || /^[?#]/.test(n) ? n : "/" + n : "";
}
function X(e, t, n) {
  if (Mn.test(t)) return;
  const r = B(e), o = n && B(n);
  let s = "";
  return !o || t.startsWith("/") ? s = r : o.toLowerCase().indexOf(r.toLowerCase()) !== 0 ? s = r + o : s = o, (s || "/") + B(t, !s);
}
function Fn(e, t) {
  return B(e).replace(/\/*(\*.*)?$/g, "") + B(t);
}
function Ge(e) {
  const t = {};
  return e.searchParams.forEach((n, r) => {
    r in t ? Array.isArray(t[r]) ? t[r].push(n) : t[r] = [t[r], n] : t[r] = n;
  }), t;
}
function jn(e, t, n) {
  const [r, o] = e.split("/*", 2), s = r.split("/").filter(Boolean), a = s.length;
  return (i) => {
    const c = i.split("/").filter(Boolean), l = c.length - a;
    if (l < 0 || l > 0 && o === void 0 && !t) return null;
    const d = { path: a ? "" : "/", params: {} }, b = (g) => n === void 0 ? void 0 : n[g];
    for (let g = 0; g < a; g++) {
      const h = s[g], y = h[0] === ":", p = y ? c[g] : c[g].toLowerCase(), f = y ? h.slice(1) : h.toLowerCase();
      if (y && ee(p, b(f))) d.params[f] = p;
      else if (y || !ee(p, f)) return null;
      d.path += `/${p}`;
    }
    if (o) {
      const g = l ? c.slice(-l).join("/") : "";
      if (ee(g, b(o))) d.params[o] = g;
      else return null;
    }
    return d;
  };
}
function ee(e, t) {
  const n = (r) => r === e;
  return t === void 0 ? true : typeof t == "string" ? n(t) : typeof t == "function" ? t(e) : Array.isArray(t) ? t.some(n) : t instanceof RegExp ? t.test(e) : false;
}
function Un(e) {
  const [t, n] = e.pattern.split("/*", 2), r = t.split("/").filter(Boolean);
  return r.reduce((o, s) => o + (s.startsWith(":") ? 2 : 3), r.length - (n === void 0 ? 0 : 1));
}
function De(e) {
  const t = /* @__PURE__ */ new Map(), n = getOwner();
  return new Proxy({}, { get(r, o) {
    return t.has(o) || runWithOwner(n, () => t.set(o, createMemo(() => e()[o]))), t.get(o)();
  }, getOwnPropertyDescriptor() {
    return { enumerable: true, configurable: true };
  }, ownKeys() {
    return Reflect.ownKeys(e());
  }, has(r, o) {
    return o in e();
  } });
}
function Ke(e) {
  let t = /(\/?\:[^\/]+)\?/.exec(e);
  if (!t) return [e];
  let n = e.slice(0, t.index), r = e.slice(t.index + t[0].length);
  const o = [n, n += t[1]];
  for (; t = /^(\/\:[^\/]+)\?/.exec(r); ) o.push(n += t[1]), r = r.slice(t[0].length);
  return Ke(r).reduce((s, a) => [...s, ...o.map((i) => i + a)], []);
}
const Bn = 100, Wn = createContext(), Ve = createContext();
function Gn(e, t = "") {
  const { component: n, preload: r, load: o, children: s, info: a } = e, i = !s || Array.isArray(s) && !s.length, c = { key: e, component: n, preload: r || o, info: a };
  return ze(e.path).reduce((l, d) => {
    for (const b of Ke(d)) {
      const g = Fn(t, b);
      let h = i ? g : g.split("/*", 1)[0];
      h = h.split("/").map((y) => y.startsWith(":") || y.startsWith("*") ? y : encodeURIComponent(y)).join("/"), l.push({ ...c, originalPath: d, pattern: h, matcher: jn(h, !i, e.matchFilters) });
    }
    return l;
  }, []);
}
function Dn(e, t = 0) {
  return { routes: e, score: Un(e[e.length - 1]) * 1e4 - t, matcher(n) {
    const r = [];
    for (let o = e.length - 1; o >= 0; o--) {
      const s = e[o], a = s.matcher(n);
      if (!a) return null;
      r.unshift({ ...a, route: s });
    }
    return r;
  } };
}
function ze(e) {
  return Array.isArray(e) ? e : [e];
}
function Je(e, t = "", n = [], r = []) {
  const o = ze(e);
  for (let s = 0, a = o.length; s < a; s++) {
    const i = o[s];
    if (i && typeof i == "object") {
      i.hasOwnProperty("path") || (i.path = "");
      const c = Gn(i, t);
      for (const l of c) {
        n.push(l);
        const d = Array.isArray(i.children) && i.children.length === 0;
        if (i.children && !d) Je(i.children, l.pattern, n, r);
        else {
          const b = Dn([...n], r.length);
          r.push(b);
        }
        n.pop();
      }
    }
  }
  return n.length ? r : r.sort((s, a) => a.score - s.score);
}
function W(e, t) {
  for (let n = 0, r = e.length; n < r; n++) {
    const o = e[n].matcher(t);
    if (o) return o;
  }
  return [];
}
function Kn(e, t, n) {
  const r = new URL(We), o = createMemo((d) => {
    const b = e();
    try {
      return new URL(b, r);
    } catch {
      return console.error(`Invalid path ${b}`), d;
    }
  }, r, { equals: (d, b) => d.href === b.href }), s = createMemo(() => o().pathname), a = createMemo(() => o().search, true), i = createMemo(() => o().hash), c = () => "", l = on$1(a, () => Ge(o()));
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
  }, query: n ? n(l) : De(l) };
}
let O;
function Vn() {
  return O;
}
function zn(e, t, n, r = {}) {
  const { signal: [o, s], utils: a = {} } = e, i = a.parsePath || ((m) => m), c = a.renderPath || ((m) => m), l = a.beforeLeave || Be(), d = X("", r.base || "");
  if (d === void 0) throw new Error(`${d} is not a valid base path`);
  d && !o().value && s({ value: d, replace: true, scroll: false });
  const [b, g] = createSignal(false);
  let h;
  const y = (m, w) => {
    w.value === p() && w.state === R() || (h === void 0 && g(true), O = m, h = w, startTransition(() => {
      h === w && (f(h.value), v(h.state), resetErrorBoundaries(), isServer || I[1](($) => $.filter((_) => _.pending)));
    }).finally(() => {
      h === w && batch(() => {
        O = void 0, m === "navigate" && nt(h), g(false), h = void 0;
      });
    }));
  }, [p, f] = createSignal(o().value), [R, v] = createSignal(o().state), L = Kn(p, R, a.queryWrapper), P = [], I = createSignal(isServer ? ot() : []), j = createMemo(() => typeof r.transformUrl == "function" ? W(t(), r.transformUrl(L.pathname)) : W(t(), L.pathname)), pe = () => {
    const m = j(), w = {};
    for (let $ = 0; $ < m.length; $++) Object.assign(w, m[$].params);
    return w;
  }, Ze = a.paramsWrapper ? a.paramsWrapper(pe, t) : De(pe), he = { pattern: d, path: () => d, outlet: () => null, resolvePath(m) {
    return X(d, m);
  } };
  return createRenderEffect(on$1(o, (m) => y("native", m), { defer: true })), { base: he, location: L, params: Ze, isRouting: b, renderPath: c, parsePath: i, navigatorFactory: tt, matches: j, beforeLeave: l, preloadRoute: rt, singleFlight: r.singleFlight === void 0 ? true : r.singleFlight, submissions: I };
  function et(m, w, $) {
    untrack(() => {
      if (typeof w == "number") {
        w && (a.go ? a.go(w) : console.warn("Router integration does not support relative routing"));
        return;
      }
      const _ = !w || w[0] === "?", { replace: D, resolve: M, scroll: K, state: N } = { replace: false, resolve: !_, scroll: true, ...$ }, F = M ? m.resolvePath(w) : X(_ && L.pathname || "", w);
      if (F === void 0) throw new Error(`Path '${w}' is not a routable path`);
      if (P.length >= Bn) throw new Error("Too many redirects");
      const fe = p();
      if (F !== fe || N !== R()) if (isServer) {
        const me = getRequestEvent();
        me && (me.response = { status: 302, headers: new Headers({ Location: F }) }), s({ value: F, replace: D, scroll: K, state: N });
      } else l.confirm(F, $) && (P.push({ value: fe, replace: D, scroll: K, state: R() }), y("navigate", { value: F, state: N }));
    });
  }
  function tt(m) {
    return m = m || useContext(Ve) || he, (w, $) => et(m, w, $);
  }
  function nt(m) {
    const w = P[0];
    w && (s({ ...m, replace: w.replace, scroll: w.scroll }), P.length = 0);
  }
  function rt(m, w) {
    const $ = W(t(), m.pathname), _ = O;
    O = "preload";
    for (let D in $) {
      const { route: M, params: K } = $[D];
      M.component && M.component.preload && M.component.preload();
      const { preload: N } = M;
      w && N && runWithOwner(n(), () => N({ params: K, location: { pathname: m.pathname, search: m.search, hash: m.hash, query: Ge(m), state: null, key: "" }, intent: "preload" }));
    }
    O = _;
  }
  function ot() {
    const m = getRequestEvent();
    return m && m.router && m.router.submission ? [m.router.submission] : [];
  }
}
function Jn(e, t, n, r) {
  const { base: o, location: s, params: a } = e, { pattern: i, component: c, preload: l } = r().route, d = createMemo(() => r().path);
  c && c.preload && c.preload();
  const b = l ? l({ params: a, location: s, intent: O || "initial" }) : void 0;
  return { parent: t, pattern: i, path: d, outlet: () => c ? createComponent(c, { params: a, location: s, data: b, get children() {
    return n();
  } }) : n(), resolvePath(h) {
    return X(o.path(), h, d());
  } };
}
const Xe = (e) => (t) => {
  const { base: n } = t, r = children(() => t.children), o = createMemo(() => Je(r(), t.base || ""));
  let s;
  const a = zn(e, o, () => s, { base: n, singleFlight: t.singleFlight, transformUrl: t.transformUrl });
  return e.create && e.create(a), createComponent$1(Wn.Provider, { value: a, get children() {
    return createComponent$1(Xn, { routerState: a, get root() {
      return t.root;
    }, get preload() {
      return t.rootPreload || t.rootLoad;
    }, get children() {
      return [(s = getOwner()) && null, createComponent$1(Yn, { routerState: a, get branches() {
        return o();
      } })];
    } });
  } });
};
function Xn(e) {
  const t = e.routerState.location, n = e.routerState.params, r = createMemo(() => e.preload && untrack(() => {
    e.preload({ params: n, location: t, intent: Vn() || "initial" });
  }));
  return createComponent$1(Show, { get when() {
    return e.root;
  }, keyed: true, get fallback() {
    return e.children;
  }, children: (o) => createComponent$1(o, { params: n, location: t, get data() {
    return r();
  }, get children() {
    return e.children;
  } }) });
}
function Yn(e) {
  if (isServer) {
    const o = getRequestEvent();
    if (o && o.router && o.router.dataOnly) {
      Zn(o, e.routerState, e.branches);
      return;
    }
    o && ((o.router || (o.router = {})).matches || (o.router.matches = e.routerState.matches().map(({ route: s, path: a, params: i }) => ({ path: s.originalPath, pattern: s.pattern, match: a, params: i, info: s.info }))));
  }
  const t = [];
  let n;
  const r = createMemo(on$1(e.routerState.matches, (o, s, a) => {
    let i = s && o.length === s.length;
    const c = [];
    for (let l = 0, d = o.length; l < d; l++) {
      const b = s && s[l], g = o[l];
      a && b && g.route.key === b.route.key ? c[l] = a[l] : (i = false, t[l] && t[l](), createRoot((h) => {
        t[l] = h, c[l] = Jn(e.routerState, c[l - 1] || e.routerState.base, Ee(() => r()[l + 1]), () => {
          var _a;
          const y = e.routerState.matches();
          return (_a = y[l]) != null ? _a : y[0];
        });
      }));
    }
    return t.splice(o.length).forEach((l) => l()), a && i ? a : (n = c[0], c);
  }));
  return Ee(() => r() && n)();
}
const Ee = (e) => () => createComponent$1(Show, { get when() {
  return e();
}, keyed: true, children: (t) => createComponent$1(Ve.Provider, { value: t, get children() {
  return t.outlet();
} }) }), Qn = (e) => {
  const t = children(() => e.children);
  return mergeProps$1(e, { get children() {
    return t();
  } });
};
function Zn(e, t, n) {
  const r = new URL(e.request.url), o = W(n, new URL(e.router.previousUrl || e.request.url).pathname), s = W(n, r.pathname);
  for (let a = 0; a < s.length; a++) {
    (!o[a] || s[a].route !== o[a].route) && (e.router.dataOnly = true);
    const { route: i, params: c } = s[a];
    i.preload && i.preload({ params: c, location: t.location, intent: "preload" });
  }
}
function er([e, t], n, r) {
  return [e, r ? (o) => t(r(o)) : t];
}
function tr(e) {
  let t = false;
  const n = (o) => typeof o == "string" ? { value: o } : o, r = er(createSignal(n(e.get()), { equals: (o, s) => o.value === s.value && o.state === s.state }), void 0, (o) => (!t && e.set(o), sharedConfig.registry && !sharedConfig.done && (sharedConfig.done = true), o));
  return e.init && onCleanup(e.init((o = e.get()) => {
    t = true, r[1](n(o)), t = false;
  })), Xe({ signal: r, create: e.create, utils: e.utils });
}
function nr(e, t, n) {
  return e.addEventListener(t, n), () => e.removeEventListener(t, n);
}
function rr(e, t) {
  const n = e && document.getElementById(e);
  n ? n.scrollIntoView() : t && window.scrollTo(0, 0);
}
function or(e) {
  const t = new URL(e);
  return t.pathname + t.search;
}
function sr(e) {
  let t;
  const n = { value: e.url || (t = getRequestEvent()) && or(t.request.url) || "" };
  return Xe({ signal: [() => n, (r) => Object.assign(n, r)] })(e);
}
const ar = /* @__PURE__ */ new Map();
function ir({ preload: e = true, explicitLinks: t = false, actionBase: n = "/_server", transformUrl: r } = {}) {
  return (o) => {
    const s = o.base.path(), a = o.navigatorFactory(o.base);
    let i, c;
    function l(p) {
      return p.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function d(p) {
      if (p.defaultPrevented || p.button !== 0 || p.metaKey || p.altKey || p.ctrlKey || p.shiftKey) return;
      const f = p.composedPath().find((j) => j instanceof Node && j.nodeName.toUpperCase() === "A");
      if (!f || t && !f.hasAttribute("link")) return;
      const R = l(f), v = R ? f.href.baseVal : f.href;
      if ((R ? f.target.baseVal : f.target) || !v && !f.hasAttribute("state")) return;
      const P = (f.getAttribute("rel") || "").split(/\s+/);
      if (f.hasAttribute("download") || P && P.includes("external")) return;
      const I = R ? new URL(v, document.baseURI) : new URL(v);
      if (!(I.origin !== window.location.origin || s && I.pathname && !I.pathname.toLowerCase().startsWith(s.toLowerCase()))) return [f, I];
    }
    function b(p) {
      const f = d(p);
      if (!f) return;
      const [R, v] = f, L = o.parsePath(v.pathname + v.search + v.hash), P = R.getAttribute("state");
      p.preventDefault(), a(L, { resolve: false, replace: R.hasAttribute("replace"), scroll: !R.hasAttribute("noscroll"), state: P ? JSON.parse(P) : void 0 });
    }
    function g(p) {
      const f = d(p);
      if (!f) return;
      const [R, v] = f;
      r && (v.pathname = r(v.pathname)), o.preloadRoute(v, R.getAttribute("preload") !== "false");
    }
    function h(p) {
      clearTimeout(i);
      const f = d(p);
      if (!f) return c = null;
      const [R, v] = f;
      c !== R && (r && (v.pathname = r(v.pathname)), i = setTimeout(() => {
        o.preloadRoute(v, R.getAttribute("preload") !== "false"), c = R;
      }, 20));
    }
    function y(p) {
      if (p.defaultPrevented) return;
      let f = p.submitter && p.submitter.hasAttribute("formaction") ? p.submitter.getAttribute("formaction") : p.target.getAttribute("action");
      if (!f) return;
      if (!f.startsWith("https://action/")) {
        const v = new URL(f, We);
        if (f = o.parsePath(v.pathname + v.search), !f.startsWith(n)) return;
      }
      if (p.target.method.toUpperCase() !== "POST") throw new Error("Only POST forms are supported for Actions");
      const R = ar.get(f);
      if (R) {
        p.preventDefault();
        const v = new FormData(p.target, p.submitter);
        R.call({ r: o, f: p.target }, p.target.enctype === "multipart/form-data" ? v : new URLSearchParams(v));
      }
    }
    delegateEvents(["click", "submit"]), document.addEventListener("click", b), e && (document.addEventListener("mousemove", h, { passive: true }), document.addEventListener("focusin", g, { passive: true }), document.addEventListener("touchstart", g, { passive: true })), document.addEventListener("submit", y), onCleanup(() => {
      document.removeEventListener("click", b), e && (document.removeEventListener("mousemove", h), document.removeEventListener("focusin", g), document.removeEventListener("touchstart", g)), document.removeEventListener("submit", y);
    });
  };
}
function cr(e) {
  if (isServer) return sr(e);
  const t = () => {
    const r = window.location.pathname.replace(/^\/+/, "/") + window.location.search, o = window.history.state && window.history.state._depth && Object.keys(window.history.state).length === 1 ? void 0 : window.history.state;
    return { value: r + window.location.hash, state: o };
  }, n = Be();
  return tr({ get: t, set({ value: r, replace: o, scroll: s, state: a }) {
    o ? window.history.replaceState(Hn(a), "", r) : window.history.pushState(a, "", r), rr(decodeURIComponent(window.location.hash.slice(1)), s), de();
  }, init: (r) => nr(window, "popstate", _n(r, (o) => {
    if (o) return !n.confirm(o);
    {
      const s = t();
      return !n.confirm(s.value, { state: s.state });
    }
  })), create: ir({ preload: e.preload, explicitLinks: e.explicitLinks, actionBase: e.actionBase, transformUrl: e.transformUrl }), utils: { go: (r) => window.history.go(r), beforeLeave: n } })(e);
}
var lr = ["<main", ' id="main" class="min-h-screen bg-bg pt-16 flex flex-col items-center justify-center text-center"><div class="px-6 py-16 max-w-2xl"><div class="inline-flex items-center gap-4 px-6 py-2 bg-surface rounded border border-border text-sm font-mono uppercase tracking-wider shadow-glow-primary mb-8"><span class="text-text-muted">', `</span><span class="text-border">|</span><span class="text-text-muted">HEALTH</span><span class="text-accent-primary font-bold">0%</span><span class="text-border">|</span><span class="text-text-muted">ARMOR</span><span class="text-accent-primary font-bold">0%</span></div><div class="text-[10rem] md:text-[14rem] font-black text-accent-primary leading-none relative select-none" aria-hidden="true">404</div><pre class="text-[10px] leading-none text-accent-primary inline-block my-6 select-none opacity-80" aria-hidden="true">   .---.
  | RIP |
  |     |
  |O   O|
  ||   ||
  | \\ // |
  |  V  |
  |-----|
   \\ //
    V V</pre><h2 class="text-2xl md:text-3xl font-bold text-accent-primary mb-4">`, '</h2><p class="text-text-secondary text-lg mb-8 max-w-lg mx-auto">', '</p><a href="/" class="inline-block px-8 py-3 border border-accent-primary text-accent-primary font-semibold font-mono uppercase tracking-wider text-sm hover:bg-accent-primary hover:text-bg hover:shadow-glow-primary transition-all">', '</a><p class="mt-6 text-sm text-text-muted">', "</p></div></main>"];
function ur() {
  var _a, _b, _c, _d, _e2;
  const { messages: e } = x$1(), t = () => {
    var _a2;
    return (_a2 = e()) == null ? void 0 : _a2.not_found;
  };
  return onMount(() => {
    const n = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", "doom"), onCleanup(() => {
      n ? document.documentElement.setAttribute("data-theme", n) : document.documentElement.removeAttribute("data-theme");
    });
  }), [createComponent$1(je$1, { standalone: true }), ssr(lr, ssrHydrationKey(), escape(((_a = t()) == null ? void 0 : _a.status) || "404"), escape(((_b = t()) == null ? void 0 : _b.heading) || "Voc\xEA entrou no inferno errado."), escape(((_c = t()) == null ? void 0 : _c.description) || "Esta p\xE1gina foi perdida nas profundezas. O caminho que voc\xEA busca n\xE3o existe mais \u2014 ou nunca existiu."), escape(((_d = t()) == null ? void 0 : _d.back_home) || "Voltar ao Mundo dos Vivos"), escape(((_e2 = t()) == null ? void 0 : _e2.subtext) || "Este n\xE3o \xE9 o caminho que voc\xEA procura.")), createComponent$1(Ne$1, { hideDoomLink: true }), createComponent$1(ze$1, {})];
}
var Ae = ["<script", ">", "<\/script>"];
const dr = `
(function() {
  try {
    var t = localStorage.getItem('portfolio-theme');
    if (t) document.documentElement.setAttribute('data-theme', t);
  } catch(e) {}
})();
`.trim(), pr = `
(function() {
  try {
    var l = localStorage.getItem('portfolio-language');
    if (l === 'pt-br' || l === 'en') {
      document.documentElement.lang = l;
    }
  } catch(e) {}
})();
`.trim();
function hr() {
  return createComponent$1(cr, { root: (e) => createComponent$1(Ln, { get children() {
    return [createComponent$1(qn, { children: "Gustavo M Camargo | AI & Software Engineer" }), createComponent$1(x, { name: "description", content: "Portfolio de Gustavo M Camargo \u2014 Especialista em Automa\xE7\xE3o com IA, LangGraph & AI Agents. Python, C++, Rust, React. Experi\xEAncia em agentes inteligentes e sistemas full-stack." }), createComponent$1(x, { name: "keywords", content: "AI engineer, LangGraph, Python, C++, Rust, React, automa\xE7\xE3o, software engineer, portfolio, Gustavo Camargo" }), createComponent$1(x, { name: "author", content: "Gustavo M Camargo" }), createComponent$1(x, { name: "robots", content: "index, follow" }), createComponent$1(x, { name: "theme-color", content: "#080012" }), createComponent$1(x, { property: "og:title", content: "Gustavo M Camargo | AI & Software Engineer" }), createComponent$1(x, { property: "og:description", content: "Especialista em Automa\xE7\xE3o com IA, LangGraph & AI Agents. Python, C++, Rust, React." }), createComponent$1(x, { property: "og:type", content: "website" }), createComponent$1(x, { property: "og:url", content: "https://thecodergus.github.io" }), createComponent$1(x, { property: "og:image", content: "https://thecodergus.github.io/images/myProfile.webp" }), createComponent$1(x, { property: "og:locale", content: "pt_BR" }), createComponent$1(x, { property: "og:locale:alternate", content: "en_US" }), createComponent$1(Z, { rel: "canonical", href: "https://thecodergus.github.io" }), createComponent$1(x, { name: "twitter:card", content: "summary_large_image" }), createComponent$1(x, { name: "twitter:title", content: "Gustavo M Camargo | AI & Software Engineer" }), createComponent$1(x, { name: "twitter:description", content: "Especialista em Automa\xE7\xE3o com IA, LangGraph & AI Agents." }), createComponent$1(x, { name: "twitter:image", content: "https://thecodergus.github.io/images/myProfile.webp" }), ssr(Ae, ssrHydrationKey(), dr), ssr(Ae, ssrHydrationKey(), pr), createComponent$1(Z, { rel: "preload", href: "/fonts/fonts.css", as: "style" }), createComponent$1(Z, { href: "/fonts/fonts.css", rel: "stylesheet" }), createComponent$1(Ee$1, { get children() {
      return createComponent$1(Suspense, { get children() {
        return e.children;
      } });
    } })];
  } }), get children() {
    return [createComponent$1(En, {}), createComponent$1(Qn, { path: "*", component: ur })];
  } });
}
const Ye = isServer ? (e) => {
  const t = getRequestEvent();
  return t.response.status = e.code, t.response.statusText = e.text, onCleanup(() => !t.nativeEvent.handled && !t.complete && (t.response.status = 200)), null;
} : (e) => null;
var fr = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">', "</span>"], mr = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">500 | Internal Server Error</span>'];
const gr = (e) => {
  const t = isServer ? "500 | Internal Server Error" : "Error | Uncaught Client Exception";
  return createComponent$1(ErrorBoundary, { fallback: (n) => (console.error(n), [ssr(fr, ssrHydrationKey(), escape(t)), createComponent$1(Ye, { code: 500 })]), get children() {
    return e.children;
  } });
}, yr = (e) => {
  let t = false;
  const n = catchError(() => e.children, (r) => {
    console.error(r), t = !!r;
  });
  return t ? [ssr(mr, ssrHydrationKey()), createComponent$1(Ye, { code: 500 })] : n;
};
var Se = ["<script", ">", "<\/script>"], wr = ["<script", ' type="module"', " async", "><\/script>"], br = ["<script", ' type="module" async', "><\/script>"];
const vr = ssr("<!DOCTYPE html>");
function Qe(e, t, n = []) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (o.path !== e[0].path) continue;
    let s = [...n, o];
    if (o.children) {
      const a = e.slice(1);
      if (a.length === 0 || (s = Qe(a, o.children, s), !s)) continue;
    }
    return s;
  }
}
function Rr(e) {
  const t = getRequestEvent(), n = t.nonce;
  let r = [];
  return Promise.resolve().then(async () => {
    let o = [];
    if (t.router && t.router.matches) {
      const s = [...t.router.matches];
      for (; s.length && (!s[0].info || !s[0].info.filesystem); ) s.shift();
      const a = s.length && Qe(s, t.routes);
      if (a) {
        const i = globalThis.MANIFEST.client.inputs;
        for (let c = 0; c < a.length; c++) {
          const l = a[c], d = i[l.$component.src];
          o.push(d.assets());
        }
      }
    }
    r = await Promise.all(o).then((s) => [...new Map(s.flat().map((a) => [a.attrs.key, a])).values()].filter((a) => a.attrs.rel === "modulepreload" && !t.assets.find((i) => i.attrs.key === a.attrs.key)));
  }), useAssets(() => r.length ? r.map((o) => re(o)) : void 0), createComponent$1(NoHydration, { get children() {
    return [vr, createComponent$1(yr, { get children() {
      return createComponent$1(e.document, { get assets() {
        return [createComponent$1(HydrationScript, {}), t.assets.map((o) => re(o, n))];
      }, get scripts() {
        return n ? [ssr(Se, ssrHydrationKey() + ssrAttribute("nonce", escape(n, true), false), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(wr, ssrHydrationKey(), ssrAttribute("nonce", escape(n, true), false), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))] : [ssr(Se, ssrHydrationKey(), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(br, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))];
      }, get children() {
        return createComponent$1(Hydration, { get children() {
          return createComponent$1(gr, { get children() {
            return createComponent$1(hr, {});
          } });
        } });
      } });
    } })];
  } });
}
var xr = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#080012"><link rel="icon" href="/favicon.ico"><link rel="manifest" href="/manifest.json"><link rel="canonical" href="https://thecodergus.github.io">', '<script type="application/ld+json">', "<\/script></head>"], Er = ["<html", ' lang="pt-br" data-theme="ai">', '<body><a href="#main" class="skip-link"><span lang="pt-br">Pular para o conte\xFAdo</span><span lang="en" class="skip-link-alt">Skip to content</span></a><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
const Ar = { "@context": "https://schema.org", "@type": "Person", name: "Gustavo M Camargo", url: "https://thecodergus.github.io", jobTitle: "AI & Software Engineer", sameAs: ["https://github.com/thecodergus", "https://www.linkedin.com/in/thecodergus"], knowsAbout: ["Artificial Intelligence", "LangGraph", "Python", "C++", "Rust", "React", "TypeScript", "Full-Stack Development"] }, Or = Cn(() => createComponent$1(Rr, { document: ({ assets: e, children: t, scripts: n }) => ssr(Er, ssrHydrationKey(), createComponent$1(NoHydration, { get children() {
  return ssr(xr, escape(e), JSON.stringify(Ar));
} }), escape(t), escape(n)) }));

const handlers = [
  { route: '', handler: _2L1h_Z, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: Lt, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: Or, lazy: false, middleware: true, method: undefined }
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

export { Ft as F, Ne$1 as N, S, be$1 as b, closePrerenderer as c, je$1 as j, localFetch as l, p, x$1 as x, ze$1 as z };
//# sourceMappingURL=nitro.mjs.map
