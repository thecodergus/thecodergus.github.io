import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import destr from 'file:///home/gus/thecodergus.github.io/node_modules/destr/dist/index.mjs';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, createError, sendRedirect, proxyRequest, getRequestURL, setResponseStatus, getResponseHeader, setResponseHeaders, send, getRequestHeader, removeResponseHeader, appendResponseHeader, setResponseHeader, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler } from 'file:///home/gus/thecodergus.github.io/node_modules/nitropack/node_modules/h3/dist/index.mjs';
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
import { sharedConfig, lazy, createComponent, createUniqueId, useContext, createRenderEffect, onCleanup, createContext, createSignal, onMount, catchError, ErrorBoundary, Suspense, children, createMemo, getOwner, on as on$1, runWithOwner, untrack, Show, createRoot, startTransition, resetErrorBoundaries, batch } from 'file:///home/gus/thecodergus.github.io/node_modules/solid-js/dist/server.js';
import { renderToString, isServer, getRequestEvent, ssrElement, escape, mergeProps, ssr, createComponent as createComponent$1, useAssets, spread, renderToStream, ssrHydrationKey, NoHydration, Hydration, ssrAttribute, HydrationScript, delegateEvents } from 'file:///home/gus/thecodergus.github.io/node_modules/solid-js/web/dist/server.js';
import { provideRequestEvent } from 'file:///home/gus/thecodergus.github.io/node_modules/solid-js/web/storage/dist/storage.js';
import { eventHandler as eventHandler$1, H3Event, getRequestIP, parseCookies, getResponseStatus, getResponseStatusText, getCookie, setCookie, getResponseHeader as getResponseHeader$1, setResponseHeader as setResponseHeader$1, removeResponseHeader as removeResponseHeader$1, getResponseHeaders, getRequestURL as getRequestURL$1, getRequestWebStream, setResponseStatus as setResponseStatus$1, appendResponseHeader as appendResponseHeader$1, setHeader, sendRedirect as sendRedirect$1 } from 'file:///home/gus/thecodergus.github.io/node_modules/h3/dist/index.mjs';
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
					const buildManifest = {"ssr":{"_Footer-CTjBCJ93.js":{"file":"assets/Footer-CTjBCJ93.js","name":"Footer","imports":["_i18nStore-CZHIEI4g.js"]},"_i18nStore-CZHIEI4g.js":{"file":"assets/i18nStore-CZHIEI4g.js","name":"i18nStore"},"_index-BxCjfHsv.js":{"file":"assets/index-BxCjfHsv.js","name":"index"},"src/routes/doom.tsx?pick=default&pick=$css":{"file":"doom.js","name":"doom","src":"src/routes/doom.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-BxCjfHsv.js","_i18nStore-CZHIEI4g.js","_Footer-CTjBCJ93.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_Footer-CTjBCJ93.js","_i18nStore-CZHIEI4g.js"]},"virtual:$vinxi/handler/ssr":{"file":"ssr.js","name":"ssr","src":"virtual:$vinxi/handler/ssr","isEntry":true,"imports":["_index-BxCjfHsv.js","_i18nStore-CZHIEI4g.js"],"dynamicImports":["src/routes/doom.tsx?pick=default&pick=$css","src/routes/doom.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css"],"css":["assets/ssr-dBf9KD7I.css"]}},"client":{"_Footer-BdHU1Kj0.js":{"file":"assets/Footer-BdHU1Kj0.js","name":"Footer","imports":["_i18nStore-CvoAD9yr.js"]},"_i18nStore-CvoAD9yr.js":{"file":"assets/i18nStore-CvoAD9yr.js","name":"i18nStore"},"_index-1oyYkNVU.js":{"file":"assets/index-1oyYkNVU.js","name":"index","imports":["_i18nStore-CvoAD9yr.js"]},"node_modules/devicon/fonts/devicon.svg":{"file":"assets/devicon-DBhpxM3S.svg","src":"node_modules/devicon/fonts/devicon.svg"},"node_modules/devicon/fonts/devicon.ttf":{"file":"assets/devicon-BwTrXM5G.ttf","src":"node_modules/devicon/fonts/devicon.ttf"},"node_modules/devicon/fonts/devicon.woff":{"file":"assets/devicon-D0iwJE0M.woff","src":"node_modules/devicon/fonts/devicon.woff"},"src/routes/doom.tsx?pick=default&pick=$css":{"file":"assets/doom-CNizeEs_.js","name":"doom","src":"src/routes/doom.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_i18nStore-CvoAD9yr.js","_index-1oyYkNVU.js","_Footer-BdHU1Kj0.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"assets/index-b7MwP6uv.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_i18nStore-CvoAD9yr.js","_Footer-BdHU1Kj0.js"]},"virtual:$vinxi/handler/client":{"file":"assets/client-DhgXYQKj.js","name":"client","src":"virtual:$vinxi/handler/client","isEntry":true,"imports":["_i18nStore-CvoAD9yr.js","_index-1oyYkNVU.js"],"dynamicImports":["src/routes/doom.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css"],"css":["assets/client-D_LjfpgR.css"],"assets":["assets/devicon-BwTrXM5G.ttf","assets/devicon-D0iwJE0M.woff","assets/devicon-DBhpxM3S.svg"]}},"server-fns":{"_Footer-BbWQbES2.js":{"file":"assets/Footer-BbWQbES2.js","name":"Footer","imports":["_i18nStore-BZjArp5m.js"]},"_i18nStore-BZjArp5m.js":{"file":"assets/i18nStore-BZjArp5m.js","name":"i18nStore"},"_index-BxCjfHsv.js":{"file":"assets/index-BxCjfHsv.js","name":"index"},"_server-fns-wrh9S1Ip.js":{"file":"assets/server-fns-wrh9S1Ip.js","name":"server-fns","dynamicImports":["src/routes/doom.tsx?pick=default&pick=$css","src/routes/doom.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/app.tsx"]},"src/app.tsx":{"file":"assets/app-tREal_De.js","name":"app","src":"src/app.tsx","isDynamicEntry":true,"imports":["_index-BxCjfHsv.js","_server-fns-wrh9S1Ip.js","_i18nStore-BZjArp5m.js"],"css":["assets/app-dBf9KD7I.css"]},"src/routes/doom.tsx?pick=default&pick=$css":{"file":"doom.js","name":"doom","src":"src/routes/doom.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-BxCjfHsv.js","_i18nStore-BZjArp5m.js","_Footer-BbWQbES2.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_Footer-BbWQbES2.js","_i18nStore-BZjArp5m.js"]},"virtual:$vinxi/handler/server-fns":{"file":"server-fns.js","name":"server-fns","src":"virtual:$vinxi/handler/server-fns","isEntry":true,"imports":["_server-fns-wrh9S1Ip.js"]}}};

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
    "mtime": "2026-05-04T21:27:06.862Z",
    "size": 6896,
    "path": "../../.output/public/404.html"
  },
  "/404.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"6dd-Nd7Ie19OTIKHSqQBWXxfzLu4/5U\"",
    "mtime": "2026-05-04T21:27:07.027Z",
    "size": 1757,
    "path": "../../.output/public/404.html.br"
  },
  "/404.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"877-EwQelpcI2pLhcaH9DFt7KCmC8l0\"",
    "mtime": "2026-05-04T21:27:07.024Z",
    "size": 2167,
    "path": "../../.output/public/404.html.gz"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": "\"18e-SxupswRtfpbff7nneLkZ59G3I9g\"",
    "mtime": "2026-05-04T21:27:06.862Z",
    "size": 398,
    "path": "../../.output/public/manifest.json"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"43-BEzmj4PuhUNHX+oW9uOnPSihxtU\"",
    "mtime": "2026-05-04T21:27:06.862Z",
    "size": 67,
    "path": "../../.output/public/robots.txt"
  },
  "/_build/registerSW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"94-cci5Bilset1FDW+Y3OFpEe4JMyM\"",
    "mtime": "2026-05-04T21:27:06.995Z",
    "size": 148,
    "path": "../../.output/public/_build/registerSW.js"
  },
  "/_build/sw.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"354-sWGi9uHVZln0YievOblYLYtwRXM\"",
    "mtime": "2026-05-04T21:27:07.024Z",
    "size": 852,
    "path": "../../.output/public/_build/sw.js.gz"
  },
  "/_build/sw.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2e0-ouINdtFK1hIVWyaLI3WQLc3MnU0\"",
    "mtime": "2026-05-04T21:27:07.024Z",
    "size": 736,
    "path": "../../.output/public/_build/sw.js.br"
  },
  "/_build/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"65d-o9wIFvDutb7z0T5WPFS3C7q+2g4\"",
    "mtime": "2026-05-04T21:27:06.995Z",
    "size": 1629,
    "path": "../../.output/public/_build/sw.js"
  },
  "/_build/workbox-66610c77.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"53c5-mgzUyuLPVfNfn2QRhXQ5JPeCVf0\"",
    "mtime": "2026-05-04T21:27:06.996Z",
    "size": 21445,
    "path": "../../.output/public/_build/workbox-66610c77.js"
  },
  "/_build/workbox-66610c77.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"19ee-1l0PGLX1AirNzLLsNDwU5I4/8qU\"",
    "mtime": "2026-05-04T21:27:07.054Z",
    "size": 6638,
    "path": "../../.output/public/_build/workbox-66610c77.js.br"
  },
  "/assets/ssr-dBf9KD7I.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"8d2a-90WigUZYunLztAzgZEW7yeSmoCQ\"",
    "mtime": "2026-05-04T21:27:06.994Z",
    "size": 36138,
    "path": "../../.output/public/assets/ssr-dBf9KD7I.css"
  },
  "/_build/workbox-66610c77.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1c93-/avk/SN7qjqB9I86tUdj8jagRPQ\"",
    "mtime": "2026-05-04T21:27:07.024Z",
    "size": 7315,
    "path": "../../.output/public/_build/workbox-66610c77.js.gz"
  },
  "/assets/ssr-dBf9KD7I.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1805-Bw6PVvszkkGUS/rhfE52JEBEhdk\"",
    "mtime": "2026-05-04T21:27:07.057Z",
    "size": 6149,
    "path": "../../.output/public/assets/ssr-dBf9KD7I.css.br"
  },
  "/assets/ssr-dBf9KD7I.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1bc0-/KOUT1/ukCBQ/qVdORlyZLlz4og\"",
    "mtime": "2026-05-04T21:27:07.028Z",
    "size": 7104,
    "path": "../../.output/public/assets/ssr-dBf9KD7I.css.gz"
  },
  "/data/portfolio_shared_data.json": {
    "type": "application/json",
    "encoding": null,
    "etag": "\"c09-NEqwlE4Z87h8QAyLynMk2GgstNI\"",
    "mtime": "2026-05-04T21:27:06.861Z",
    "size": 3081,
    "path": "../../.output/public/data/portfolio_shared_data.json"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"28f5b-+HJ/8feXwjqDwG8zs4HR07QMTCM\"",
    "mtime": "2026-05-04T21:27:06.862Z",
    "size": 167771,
    "path": "../../.output/public/favicon.ico"
  },
  "/data/portfolio_shared_data.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"27b-+tZ8MNtElSzb/eNUiPXEol1xe+Y\"",
    "mtime": "2026-05-04T21:27:07.024Z",
    "size": 635,
    "path": "../../.output/public/data/portfolio_shared_data.json.br"
  },
  "/data/portfolio_shared_data.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"2ce-Cp1KfCAMLdhlhhM8C4hFXp2upWU\"",
    "mtime": "2026-05-04T21:27:07.024Z",
    "size": 718,
    "path": "../../.output/public/data/portfolio_shared_data.json.gz"
  },
  "/_server/assets/app-dBf9KD7I.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1805-Bw6PVvszkkGUS/rhfE52JEBEhdk\"",
    "mtime": "2026-05-04T21:27:07.132Z",
    "size": 6149,
    "path": "../../.output/public/_server/assets/app-dBf9KD7I.css.br"
  },
  "/_server/assets/app-dBf9KD7I.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1bc0-/KOUT1/ukCBQ/qVdORlyZLlz4og\"",
    "mtime": "2026-05-04T21:27:07.132Z",
    "size": 7104,
    "path": "../../.output/public/_server/assets/app-dBf9KD7I.css.gz"
  },
  "/_server/assets/app-dBf9KD7I.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"8d2a-90WigUZYunLztAzgZEW7yeSmoCQ\"",
    "mtime": "2026-05-04T21:27:07.001Z",
    "size": 36138,
    "path": "../../.output/public/_server/assets/app-dBf9KD7I.css"
  },
  "/_build/.vite/manifest.json": {
    "type": "application/json",
    "encoding": null,
    "etag": "\"807-JXk4FrFFtjw9EP+E56x1oQu38qk\"",
    "mtime": "2026-05-04T21:27:06.995Z",
    "size": 2055,
    "path": "../../.output/public/_build/.vite/manifest.json"
  },
  "/_build/.vite/manifest.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"1aa-Z73+rZWmWvIWDUlLCVLal4+4KP8\"",
    "mtime": "2026-05-04T21:27:07.037Z",
    "size": 426,
    "path": "../../.output/public/_build/.vite/manifest.json.br"
  },
  "/images/myProfile.jpg": {
    "type": "image/jpeg",
    "etag": "\"85959-iF5M3WpBNfzVmCJclZFaL3uP+oM\"",
    "mtime": "2026-05-04T21:27:06.861Z",
    "size": 547161,
    "path": "../../.output/public/images/myProfile.jpg"
  },
  "/_build/.vite/manifest.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"1da-duNUDwtolcafkbpa7uxgxb7mBxY\"",
    "mtime": "2026-05-04T21:27:07.028Z",
    "size": 474,
    "path": "../../.output/public/_build/.vite/manifest.json.gz"
  },
  "/_build/assets/Footer-BdHU1Kj0.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"1e83-sAKbvM0hrqhMpMm4b4Q4BxLKa2E\"",
    "mtime": "2026-05-04T21:27:06.995Z",
    "size": 7811,
    "path": "../../.output/public/_build/assets/Footer-BdHU1Kj0.js"
  },
  "/_build/assets/Footer-BdHU1Kj0.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"b91-avLAOS7qdpFwIoeer1oeZOPNQoY\"",
    "mtime": "2026-05-04T21:27:07.055Z",
    "size": 2961,
    "path": "../../.output/public/_build/assets/Footer-BdHU1Kj0.js.br"
  },
  "/_build/assets/Footer-BdHU1Kj0.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"d5b-0l2DMyBNrq9fY4RqXASkpJink/Y\"",
    "mtime": "2026-05-04T21:27:07.054Z",
    "size": 3419,
    "path": "../../.output/public/_build/assets/Footer-BdHU1Kj0.js.gz"
  },
  "/_build/assets/client-D_LjfpgR.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"4603-9BBRYp3QDtPL/JYY1UyTT0ZJLvk\"",
    "mtime": "2026-05-04T21:27:07.166Z",
    "size": 17923,
    "path": "../../.output/public/_build/assets/client-D_LjfpgR.css.br"
  },
  "/_build/assets/client-D_LjfpgR.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5949-gJHZbVaLIQGqOh0M8QdwduN/5Kg\"",
    "mtime": "2026-05-04T21:27:07.056Z",
    "size": 22857,
    "path": "../../.output/public/_build/assets/client-D_LjfpgR.css.gz"
  },
  "/_build/assets/client-DhgXYQKj.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"5d46-uxqXAYy+Xzj7i3vM94hzn9CoQoc\"",
    "mtime": "2026-05-04T21:27:06.996Z",
    "size": 23878,
    "path": "../../.output/public/_build/assets/client-DhgXYQKj.js"
  },
  "/_build/assets/client-DhgXYQKj.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"219f-DVjdI1AfVSHpYILzUo5IkNywCa0\"",
    "mtime": "2026-05-04T21:27:07.056Z",
    "size": 8607,
    "path": "../../.output/public/_build/assets/client-DhgXYQKj.js.br"
  },
  "/_build/assets/client-DhgXYQKj.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"255d-/c0h+TuAuUZ7T4EK6r6OitEsopE\"",
    "mtime": "2026-05-04T21:27:07.055Z",
    "size": 9565,
    "path": "../../.output/public/_build/assets/client-DhgXYQKj.js.gz"
  },
  "/_build/assets/client-D_LjfpgR.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"22121-/Q5CT37FFyexJ6oKTRyhT0Oa8VM\"",
    "mtime": "2026-05-04T21:27:06.996Z",
    "size": 139553,
    "path": "../../.output/public/_build/assets/client-D_LjfpgR.css"
  },
  "/_build/assets/doom-CNizeEs_.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"43c-knANNBtEY7jPoJolHtl6GYGwkq8\"",
    "mtime": "2026-05-04T21:27:06.996Z",
    "size": 1084,
    "path": "../../.output/public/_build/assets/doom-CNizeEs_.js"
  },
  "/_build/assets/doom-CNizeEs_.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"201-TLO2UFF8ZcAsTooVwJwYE3N+weY\"",
    "mtime": "2026-05-04T21:27:07.058Z",
    "size": 513,
    "path": "../../.output/public/_build/assets/doom-CNizeEs_.js.br"
  },
  "/_build/assets/doom-CNizeEs_.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"268-Rd3xqqFvl+NmXpmI1JD5Vr5rrCE\"",
    "mtime": "2026-05-04T21:27:07.058Z",
    "size": 616,
    "path": "../../.output/public/_build/assets/doom-CNizeEs_.js.gz"
  },
  "/_build/assets/i18nStore-CvoAD9yr.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"76df-+oEoyFAIuhNnujk+3nTN+muQOBA\"",
    "mtime": "2026-05-04T21:27:06.996Z",
    "size": 30431,
    "path": "../../.output/public/_build/assets/i18nStore-CvoAD9yr.js"
  },
  "/_build/assets/i18nStore-CvoAD9yr.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"29c5-mPKb+PDqYLNt594N95vi92xKXkE\"",
    "mtime": "2026-05-04T21:27:07.131Z",
    "size": 10693,
    "path": "../../.output/public/_build/assets/i18nStore-CvoAD9yr.js.br"
  },
  "/_build/assets/i18nStore-CvoAD9yr.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2df2-WlstKwYrtYX+OswjUjTAWnP01kg\"",
    "mtime": "2026-05-04T21:27:07.084Z",
    "size": 11762,
    "path": "../../.output/public/_build/assets/i18nStore-CvoAD9yr.js.gz"
  },
  "/_build/assets/index-1oyYkNVU.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"81a-RBsc0j7I+D7E02d/Z+wkClUPvIA\"",
    "mtime": "2026-05-04T21:27:06.996Z",
    "size": 2074,
    "path": "../../.output/public/_build/assets/index-1oyYkNVU.js"
  },
  "/_build/assets/devicon-BwTrXM5G.ttf.br": {
    "type": "font/ttf",
    "encoding": "br",
    "etag": "\"8cfc2-FfNDvPo63iszzpwL46oeloozxwA\"",
    "mtime": "2026-05-04T21:27:09.433Z",
    "size": 577474,
    "path": "../../.output/public/_build/assets/devicon-BwTrXM5G.ttf.br"
  },
  "/_build/assets/devicon-BwTrXM5G.ttf.gz": {
    "type": "font/ttf",
    "encoding": "gzip",
    "etag": "\"9f957-OEUXjdkHP/AZqbES8Nt6de58uLU\"",
    "mtime": "2026-05-04T21:27:08.203Z",
    "size": 653655,
    "path": "../../.output/public/_build/assets/devicon-BwTrXM5G.ttf.gz"
  },
  "/_build/assets/index-1oyYkNVU.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"37f-R14byzSqNBW6Me4jUIE06MsAVHc\"",
    "mtime": "2026-05-04T21:27:07.112Z",
    "size": 895,
    "path": "../../.output/public/_build/assets/index-1oyYkNVU.js.br"
  },
  "/_build/assets/devicon-BwTrXM5G.ttf": {
    "type": "font/ttf",
    "encoding": null,
    "etag": "\"12d594-QLLCGd5h5vxXD2lm47ERHhlQ7YE\"",
    "mtime": "2026-05-04T21:27:06.996Z",
    "size": 1234324,
    "path": "../../.output/public/_build/assets/devicon-BwTrXM5G.ttf"
  },
  "/_build/assets/devicon-D0iwJE0M.woff": {
    "type": "font/woff",
    "etag": "\"12d5e0-+k9k5/b7tqusPwZyqOnNnwL+Aqw\"",
    "mtime": "2026-05-04T21:27:06.996Z",
    "size": 1234400,
    "path": "../../.output/public/_build/assets/devicon-D0iwJE0M.woff"
  },
  "/_build/assets/index-1oyYkNVU.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3fd-X5dBDpTQgpID4FIz9v89cNqebqw\"",
    "mtime": "2026-05-04T21:27:07.112Z",
    "size": 1021,
    "path": "../../.output/public/_build/assets/index-1oyYkNVU.js.gz"
  },
  "/dos/files/.gitkeep": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2026-05-02T16:46:18.120Z",
    "size": 0,
    "path": "../../.output/public/dos/files/.gitkeep"
  },
  "/dos/files/digger.jsdos": {
    "type": "text/plain; charset=utf-8",
    "encoding": null,
    "etag": "\"713a-mKZ7VpZRDpj2ITd+FxpRCoX4H6g\"",
    "mtime": "2026-05-04T21:27:06.868Z",
    "size": 28986,
    "path": "../../.output/public/dos/files/digger.jsdos"
  },
  "/dos/files/digger.jsdos.br": {
    "type": "text/plain; charset=utf-8",
    "encoding": "br",
    "etag": "\"6ec7-Zp6KSxb8tnsI7gNJLBCwZS33AYQ\"",
    "mtime": "2026-05-04T21:27:07.299Z",
    "size": 28359,
    "path": "../../.output/public/dos/files/digger.jsdos.br"
  },
  "/dos/files/digger.jsdos.gz": {
    "type": "text/plain; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"6f77-8K4rugXg8bfFWJzTwx1BJcwajAw\"",
    "mtime": "2026-05-04T21:27:07.299Z",
    "size": 28535,
    "path": "../../.output/public/dos/files/digger.jsdos.gz"
  },
  "/_build/assets/index-b7MwP6uv.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"21c0c-wSwtfFQ1iLfHFTpuXNBwn/8O5jo\"",
    "mtime": "2026-05-04T21:27:08.171Z",
    "size": 138252,
    "path": "../../.output/public/_build/assets/index-b7MwP6uv.js.br"
  },
  "/_build/assets/index-b7MwP6uv.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2892c-ULJgmCGMwsiWM5UuObAPpvmZgYs\"",
    "mtime": "2026-05-04T21:27:07.218Z",
    "size": 166188,
    "path": "../../.output/public/_build/assets/index-b7MwP6uv.js.gz"
  },
  "/dos/js-dos/emulators-ui-loader.png": {
    "type": "image/png",
    "etag": "\"e3e-jhsY+CUyGvQjta2ZSHYCnq6ERso\"",
    "mtime": "2026-05-04T21:27:06.868Z",
    "size": 3646,
    "path": "../../.output/public/dos/js-dos/emulators-ui-loader.png"
  },
  "/dos/js-dos/js-dos.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"9390-HHcXYBvRBOSY7kdKiJw95q1ni1Y\"",
    "mtime": "2026-05-04T21:27:06.869Z",
    "size": 37776,
    "path": "../../.output/public/dos/js-dos/js-dos.css"
  },
  "/dos/js-dos/js-dos.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1f69-espehF7fD0j+rbwxOIOfJmefTd8\"",
    "mtime": "2026-05-04T21:27:07.871Z",
    "size": 8041,
    "path": "../../.output/public/dos/js-dos/js-dos.css.br"
  },
  "/dos/js-dos/js-dos.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"24ad-ig2GXHjdTrrGuk2RKNhxlVpCkB4\"",
    "mtime": "2026-05-04T21:27:07.871Z",
    "size": 9389,
    "path": "../../.output/public/dos/js-dos/js-dos.css.gz"
  },
  "/dos/js-dos/js-dos.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1cfe7-DM/vb+CiNIRbCnoTpMFPHwySbO8\"",
    "mtime": "2026-05-04T21:27:08.188Z",
    "size": 118759,
    "path": "../../.output/public/dos/js-dos/js-dos.js.br"
  },
  "/_build/assets/devicon-DBhpxM3S.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"1c5b14-3muxeNrnPy7YUeXUCm6d0JUjYMk\"",
    "mtime": "2026-05-04T21:27:15.508Z",
    "size": 1858324,
    "path": "../../.output/public/_build/assets/devicon-DBhpxM3S.svg.br"
  },
  "/_build/assets/index-b7MwP6uv.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"99dd0-VyFBaWA2Ubmu0KCk+Bwo7Qj3cC8\"",
    "mtime": "2026-05-04T21:27:06.996Z",
    "size": 630224,
    "path": "../../.output/public/_build/assets/index-b7MwP6uv.js"
  },
  "/dos/js-dos/js-dos.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"26e2a-Am20jIzZArxx+uAALQb4YC6f0XI\"",
    "mtime": "2026-05-04T21:27:08.174Z",
    "size": 159274,
    "path": "../../.output/public/dos/js-dos/js-dos.js.gz"
  },
  "/dos/js-dos/wdosbox.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"1ec0a-sdbAYwKl3+RPs4a37WerQYLszNk\"",
    "mtime": "2026-05-04T21:27:06.869Z",
    "size": 125962,
    "path": "../../.output/public/dos/js-dos/wdosbox.js"
  },
  "/dos/js-dos/js-dos.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"88b59-jUIV2DJizVWNO4XqpyUkmPbosAI\"",
    "mtime": "2026-05-04T21:27:06.869Z",
    "size": 559961,
    "path": "../../.output/public/dos/js-dos/js-dos.js"
  },
  "/_build/assets/devicon-DBhpxM3S.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"200376-rY3IYTSWkRYQs7z6p/0cavV2HkQ\"",
    "mtime": "2026-05-04T21:27:09.426Z",
    "size": 2098038,
    "path": "../../.output/public/_build/assets/devicon-DBhpxM3S.svg.gz"
  },
  "/dos/js-dos/wdosbox.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"714b-s1NOOboxedot9QSUm91WvEkOeOU\"",
    "mtime": "2026-05-04T21:27:08.129Z",
    "size": 29003,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.br"
  },
  "/dos/js-dos/wdosbox.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"819a-atb5t3ZzN9uOWqyV+swl7ESNjiM\"",
    "mtime": "2026-05-04T21:27:08.132Z",
    "size": 33178,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.gz"
  },
  "/dos/js-dos/wdosbox.js.symbols.br": {
    "type": "text/plain; charset=utf-8",
    "encoding": "br",
    "etag": "\"723a-6PmYCH4jRsN7igSd1L4zNogc0rE\"",
    "mtime": "2026-05-04T21:27:08.136Z",
    "size": 29242,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.symbols.br"
  },
  "/dos/js-dos/wdosbox.js.symbols.gz": {
    "type": "text/plain; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"92ee-D+SH4kY8DOfwdIaX/utznt6tGo4\"",
    "mtime": "2026-05-04T21:27:08.132Z",
    "size": 37614,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.symbols.gz"
  },
  "/dos/js-dos/wdosbox.js.symbols": {
    "type": "text/plain; charset=utf-8",
    "encoding": null,
    "etag": "\"3a7c1-HPfp6OFcRif11/E5oHXZJ1m+9Tw\"",
    "mtime": "2026-05-04T21:27:06.869Z",
    "size": 239553,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.symbols"
  },
  "/data/languages/en.json": {
    "type": "application/json",
    "encoding": null,
    "etag": "\"35fd-ALlMUZ0hDGEL8GwC+m4XkUMX6jU\"",
    "mtime": "2026-05-04T21:27:06.868Z",
    "size": 13821,
    "path": "../../.output/public/data/languages/en.json"
  },
  "/dos/js-dos/wdosbox.wasm.br": {
    "type": "application/wasm",
    "encoding": "br",
    "etag": "\"618e2-3/r1TSyCxN9mxbNPYDPVkPA5cTQ\"",
    "mtime": "2026-05-04T21:27:10.358Z",
    "size": 399586,
    "path": "../../.output/public/dos/js-dos/wdosbox.wasm.br"
  },
  "/dos/js-dos/wdosbox.wasm.gz": {
    "type": "application/wasm",
    "encoding": "gzip",
    "etag": "\"7abfe-+CSl07PpWMe4dF/nM7vykhxPByk\"",
    "mtime": "2026-05-04T21:27:08.862Z",
    "size": 502782,
    "path": "../../.output/public/dos/js-dos/wdosbox.wasm.gz"
  },
  "/data/languages/en.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"c62-3m9dKrPUEyzX444gYLVGl5jTvX0\"",
    "mtime": "2026-05-04T21:27:07.211Z",
    "size": 3170,
    "path": "../../.output/public/data/languages/en.json.br"
  },
  "/data/languages/en.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"f6c-H5O1XHAOhJDuxIXbqua+k42NOMk\"",
    "mtime": "2026-05-04T21:27:07.211Z",
    "size": 3948,
    "path": "../../.output/public/data/languages/en.json.gz"
  },
  "/data/languages/pt-br.json": {
    "type": "application/json",
    "encoding": null,
    "etag": "\"39a1-LsA3vM7NDfu524Q7kGrdQI7sidk\"",
    "mtime": "2026-05-04T21:27:06.861Z",
    "size": 14753,
    "path": "../../.output/public/data/languages/pt-br.json"
  },
  "/data/languages/pt-br.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"f08-pftNbUpjOybgj1cKbdCNYIsPuts\"",
    "mtime": "2026-05-04T21:27:07.213Z",
    "size": 3848,
    "path": "../../.output/public/data/languages/pt-br.json.br"
  },
  "/data/languages/pt-br.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"10f0-NaAQhXMJwZpKGKLDwHcumqCG8k0\"",
    "mtime": "2026-05-04T21:27:07.213Z",
    "size": 4336,
    "path": "../../.output/public/data/languages/pt-br.json.gz"
  },
  "/images/projects/adventure/p1.jpg": {
    "type": "image/jpeg",
    "etag": "\"42acb-bepxaxsEwaHUwmzr5xiUa0rEGKw\"",
    "mtime": "2026-05-04T21:27:06.862Z",
    "size": 273099,
    "path": "../../.output/public/images/projects/adventure/p1.jpg"
  },
  "/dos/js-dos/js-dos.js.map": {
    "type": "application/json",
    "etag": "\"1c1f43-8EePJwNs7LUus35iC4CVXGbcSRs\"",
    "mtime": "2026-05-04T21:27:06.869Z",
    "size": 1843011,
    "path": "../../.output/public/dos/js-dos/js-dos.js.map"
  },
  "/images/projects/laplacian-edge/ovo1.jpeg": {
    "type": "image/jpeg",
    "etag": "\"8079-ss8hOG6fFU+5xzWd+QqTIbKf82c\"",
    "mtime": "2026-05-04T21:27:06.862Z",
    "size": 32889,
    "path": "../../.output/public/images/projects/laplacian-edge/ovo1.jpeg"
  },
  "/images/projects/adventure/p2.jpg": {
    "type": "image/jpeg",
    "etag": "\"44b32-9K3UBSZ8fMyukMzJPJ7avodJhlw\"",
    "mtime": "2026-05-04T21:27:06.885Z",
    "size": 281394,
    "path": "../../.output/public/images/projects/adventure/p2.jpg"
  },
  "/images/projects/laplacian-edge/ovo2.jpeg": {
    "type": "image/jpeg",
    "etag": "\"3390-nbPBzQyX/GR7lPm+d5PqQp8ouCA\"",
    "mtime": "2026-05-04T21:27:06.885Z",
    "size": 13200,
    "path": "../../.output/public/images/projects/laplacian-edge/ovo2.jpeg"
  },
  "/images/projects/laplacian-edge/ovo3.jpeg": {
    "type": "image/jpeg",
    "etag": "\"cd8a-q8oYFcYhqIKBdQLt2pvS0pwD0Mg\"",
    "mtime": "2026-05-04T21:27:06.885Z",
    "size": 52618,
    "path": "../../.output/public/images/projects/laplacian-edge/ovo3.jpeg"
  },
  "/dos/js-dos/wdosbox.wasm": {
    "type": "application/wasm",
    "encoding": null,
    "etag": "\"1650d5-/eSIYkIAgIEtn5MVjcOQSw2Yfug\"",
    "mtime": "2026-05-04T21:27:06.870Z",
    "size": 1462485,
    "path": "../../.output/public/dos/js-dos/wdosbox.wasm"
  },
  "/images/projects/animal-shelter/p1.jpg": {
    "type": "image/jpeg",
    "etag": "\"96f8a-iVY3NYceNfom2eeBtQb5GGux/zs\"",
    "mtime": "2026-05-04T21:27:06.870Z",
    "size": 618378,
    "path": "../../.output/public/images/projects/animal-shelter/p1.jpg"
  },
  "/images/projects/animal-shelter/p2.jpg": {
    "type": "image/jpeg",
    "etag": "\"4dc5f-z/Rsf2aegwTuLZhfzhp0IElq/dQ\"",
    "mtime": "2026-05-04T21:27:06.862Z",
    "size": 318559,
    "path": "../../.output/public/images/projects/animal-shelter/p2.jpg"
  },
  "/images/projects/julia-course/IMG_20221018_174932.jpg": {
    "type": "image/jpeg",
    "etag": "\"62eea-rqPhg/0XA2a7+eIEZloFVmCqop8\"",
    "mtime": "2026-05-04T21:27:06.885Z",
    "size": 405226,
    "path": "../../.output/public/images/projects/julia-course/IMG_20221018_174932.jpg"
  },
  "/images/projects/photography/p1.jpg": {
    "type": "image/jpeg",
    "etag": "\"38a0f-c73zM5JUqgYdjhkUn7y8Amnomfk\"",
    "mtime": "2026-05-04T21:27:06.885Z",
    "size": 231951,
    "path": "../../.output/public/images/projects/photography/p1.jpg"
  },
  "/images/projects/julia-course/IMG_20221019_183914.jpg": {
    "type": "image/jpeg",
    "etag": "\"6318a-sRgzm3yMhLEEmxAUFzJuimnPIE0\"",
    "mtime": "2026-05-04T21:27:06.862Z",
    "size": 405898,
    "path": "../../.output/public/images/projects/julia-course/IMG_20221019_183914.jpg"
  },
  "/images/projects/photography/p2.jpg": {
    "type": "image/jpeg",
    "etag": "\"6db39-t+wV8xn5xJs+dqrU/jUr92khl04\"",
    "mtime": "2026-05-04T21:27:06.862Z",
    "size": 449337,
    "path": "../../.output/public/images/projects/photography/p2.jpg"
  },
  "/images/projects/santista/santista2.jpeg": {
    "type": "image/jpeg",
    "etag": "\"4a582-DTCW740hJ/tsMloSNNcCLIoFOAQ\"",
    "mtime": "2026-05-04T21:27:06.862Z",
    "size": 304514,
    "path": "../../.output/public/images/projects/santista/santista2.jpeg"
  },
  "/_build/assets/devicon-DBhpxM3S.svg": {
    "type": "image/svg+xml",
    "encoding": null,
    "etag": "\"53e688-6audWvp5ZxP3TDZ16BRQ2F8JZec\"",
    "mtime": "2026-05-04T21:27:06.996Z",
    "size": 5498504,
    "path": "../../.output/public/_build/assets/devicon-DBhpxM3S.svg"
  },
  "/dos/js-dos/types/src/dom.d.ts": {
    "type": "video/mp2t",
    "etag": "\"2b0-PFL63ySFIrRIxEPpz6sQNYtTUoM\"",
    "mtime": "2026-05-04T21:27:06.967Z",
    "size": 688,
    "path": "../../.output/public/dos/js-dos/types/src/dom.d.ts"
  },
  "/dos/js-dos/types/src/hardware-transport-layer.d.ts": {
    "type": "video/mp2t",
    "etag": "\"300-Yy5ftkj3E3DSV5axsnmwPXOnSIE\"",
    "mtime": "2026-05-04T21:27:06.989Z",
    "size": 768,
    "path": "../../.output/public/dos/js-dos/types/src/hardware-transport-layer.d.ts"
  },
  "/dos/js-dos/types/src/icons.d.ts": {
    "type": "video/mp2t",
    "etag": "\"e9d-9kUnkzEIcyscmgfDv1Cy12OQmSc\"",
    "mtime": "2026-05-04T21:27:06.967Z",
    "size": 3741,
    "path": "../../.output/public/dos/js-dos/types/src/icons.d.ts"
  },
  "/dos/js-dos/types/src/player-app.d.ts": {
    "type": "video/mp2t",
    "etag": "\"84e-9QJiXOKMw0g8ojvzpDAaRLrA6sA\"",
    "mtime": "2026-05-04T21:27:06.967Z",
    "size": 2126,
    "path": "../../.output/public/dos/js-dos/types/src/player-app.d.ts"
  },
  "/images/projects/genicam/genicam1.png": {
    "type": "image/png",
    "etag": "\"1357db-EUw22SI72VqfwIpSKz44qqH6RVo\"",
    "mtime": "2026-05-04T21:27:06.862Z",
    "size": 1267675,
    "path": "../../.output/public/images/projects/genicam/genicam1.png"
  },
  "/dos/js-dos/types/src/player.d.ts": {
    "type": "video/mp2t",
    "etag": "\"48e-wVh33zUR6qN5hj7FzXWGtDuEQPw\"",
    "mtime": "2026-05-04T21:27:06.967Z",
    "size": 1166,
    "path": "../../.output/public/dos/js-dos/types/src/player.d.ts"
  },
  "/dos/js-dos/types/src/request.d.ts": {
    "type": "video/mp2t",
    "etag": "\"6a-PcNO+FOpms3wshqYgk2gOpoMZ/s\"",
    "mtime": "2026-05-04T21:27:06.989Z",
    "size": 106,
    "path": "../../.output/public/dos/js-dos/types/src/request.d.ts"
  },
  "/images/projects/usiminas/usiminas1.png": {
    "type": "image/png",
    "etag": "\"134c05-aK5mfEf7zJogvwdqslFRAxX5q3w\"",
    "mtime": "2026-05-04T21:27:06.862Z",
    "size": 1264645,
    "path": "../../.output/public/images/projects/usiminas/usiminas1.png"
  },
  "/dos/js-dos/types/src/xhr.d.ts": {
    "type": "video/mp2t",
    "etag": "\"239-ioKyqCLZSuoID1j70IjjRQjDQrI\"",
    "mtime": "2026-05-04T21:27:06.967Z",
    "size": 569,
    "path": "../../.output/public/dos/js-dos/types/src/xhr.d.ts"
  },
  "/dos/js-dos/types/src/components/action-bar.d.ts": {
    "type": "video/mp2t",
    "etag": "\"95-VOf8qZ9ePt8l8ufFdSlJgHNqqqQ\"",
    "mtime": "2026-05-04T21:27:06.967Z",
    "size": 149,
    "path": "../../.output/public/dos/js-dos/types/src/components/action-bar.d.ts"
  },
  "/images/projects/usiminas/usminas2.png": {
    "type": "image/png",
    "etag": "\"151a4c-lYF0+qUb7JTaPSB7oyiilVvDA8w\"",
    "mtime": "2026-05-04T21:27:06.967Z",
    "size": 1382988,
    "path": "../../.output/public/images/projects/usiminas/usminas2.png"
  },
  "/images/projects/genicam/genicam3.png": {
    "type": "image/png",
    "etag": "\"1ded45-TuhQqz7CiXPhDA75zQHWdH7aQfM\"",
    "mtime": "2026-05-04T21:27:06.885Z",
    "size": 1961285,
    "path": "../../.output/public/images/projects/genicam/genicam3.png"
  },
  "/images/projects/sparkeyes/spark1.png": {
    "type": "image/png",
    "etag": "\"18f649-iBlThjLEqgwEmLPWlPC4QlT4dvk\"",
    "mtime": "2026-05-04T21:27:06.885Z",
    "size": 1635913,
    "path": "../../.output/public/images/projects/sparkeyes/spark1.png"
  },
  "/images/projects/sparkeyes/spark2.png": {
    "type": "image/png",
    "etag": "\"1cc3c9-U3z7PmDAA7z0CD9llLvzLWTlTkg\"",
    "mtime": "2026-05-04T21:27:06.886Z",
    "size": 1885129,
    "path": "../../.output/public/images/projects/sparkeyes/spark2.png"
  },
  "/images/projects/genicam/genicam2.png": {
    "type": "image/png",
    "etag": "\"1cfbf4-CsId1Y60wV3ly/1CdURylLc1H0Q\"",
    "mtime": "2026-05-04T21:27:06.870Z",
    "size": 1899508,
    "path": "../../.output/public/images/projects/genicam/genicam2.png"
  },
  "/dos/js-dos/types/src/components/action-hide.d.ts": {
    "type": "video/mp2t",
    "etag": "\"af-iH5Z/2DAv/76BeXUqz/my9+Xf64\"",
    "mtime": "2026-05-04T21:27:06.989Z",
    "size": 175,
    "path": "../../.output/public/dos/js-dos/types/src/components/action-hide.d.ts"
  },
  "/dos/js-dos/types/src/components/action-save-or-exit.d.ts": {
    "type": "video/mp2t",
    "etag": "\"b5-MtPGAUDHxY6rFaMiYTEnDTdPezo\"",
    "mtime": "2026-05-04T21:27:06.967Z",
    "size": 181,
    "path": "../../.output/public/dos/js-dos/types/src/components/action-save-or-exit.d.ts"
  },
  "/dos/js-dos/types/src/components/client.d.ts": {
    "type": "video/mp2t",
    "etag": "\"df-peTt0KuJBzE54HhdyKmsHinEs9s\"",
    "mtime": "2026-05-04T21:27:06.989Z",
    "size": 223,
    "path": "../../.output/public/dos/js-dos/types/src/components/client.d.ts"
  },
  "/dos/js-dos/types/src/components/controls.d.ts": {
    "type": "video/mp2t",
    "etag": "\"110-n/W6GtWUZC3rbadG6VBN8xtmti4\"",
    "mtime": "2026-05-04T21:27:06.989Z",
    "size": 272,
    "path": "../../.output/public/dos/js-dos/types/src/components/controls.d.ts"
  },
  "/images/projects/sparkeyes/spark3.png": {
    "type": "image/png",
    "etag": "\"221ee6-iYBYfZODalHbNJmIfpryqy4D2WQ\"",
    "mtime": "2026-05-04T21:27:06.862Z",
    "size": 2236134,
    "path": "../../.output/public/images/projects/sparkeyes/spark3.png"
  },
  "/dos/js-dos/types/src/components/cpu-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"9d-tS598h6CGMe+CxJ+sS4V+sX2zRo\"",
    "mtime": "2026-05-04T21:27:06.989Z",
    "size": 157,
    "path": "../../.output/public/dos/js-dos/types/src/components/cpu-control.d.ts"
  },
  "/images/projects/santista/santista1.png": {
    "type": "image/png",
    "etag": "\"25ec90-ii1O2TNbaqWKyGLU42p7Sq7NGtM\"",
    "mtime": "2026-05-04T21:27:06.886Z",
    "size": 2485392,
    "path": "../../.output/public/images/projects/santista/santista1.png"
  },
  "/dos/js-dos/types/src/components/horizontal-slider.d.ts": {
    "type": "video/mp2t",
    "etag": "\"1f4-9VDnlq23FycSu3msxrSyM8peqkM\"",
    "mtime": "2026-05-04T21:27:06.989Z",
    "size": 500,
    "path": "../../.output/public/dos/js-dos/types/src/components/horizontal-slider.d.ts"
  },
  "/dos/js-dos/types/src/components/region.d.ts": {
    "type": "video/mp2t",
    "etag": "\"df-weJkEGh27ziqbiLBdj1oA6Ieevo\"",
    "mtime": "2026-05-04T21:27:06.989Z",
    "size": 223,
    "path": "../../.output/public/dos/js-dos/types/src/components/region.d.ts"
  },
  "/dos/js-dos/types/src/components/scale-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"119-8W1vDJ3kBcTmvbt0QJ0+sR07VSw\"",
    "mtime": "2026-05-04T21:27:06.989Z",
    "size": 281,
    "path": "../../.output/public/dos/js-dos/types/src/components/scale-control.d.ts"
  },
  "/dos/js-dos/types/src/components/sensitivity-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"125-aLj8c0nTcaz3BA2CR88LOymtOmg\"",
    "mtime": "2026-05-04T21:27:06.989Z",
    "size": 293,
    "path": "../../.output/public/dos/js-dos/types/src/components/sensitivity-control.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar.d.ts": {
    "type": "video/mp2t",
    "etag": "\"93-gC0SL3stv9ikRvCGl+QoMpx5hg8\"",
    "mtime": "2026-05-04T21:27:06.989Z",
    "size": 147,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar.d.ts"
  },
  "/dos/js-dos/types/src/components/sync-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"9c-JJ0GGLl5L+U42cy74ghlsLxvKM4\"",
    "mtime": "2026-05-04T21:27:06.989Z",
    "size": 156,
    "path": "../../.output/public/dos/js-dos/types/src/components/sync-control.d.ts"
  },
  "/dos/js-dos/types/src/components/tip.d.ts": {
    "type": "video/mp2t",
    "etag": "\"90-k/2A23wIwvvw12SciX9tFZk7x+k\"",
    "mtime": "2026-05-04T21:27:06.989Z",
    "size": 144,
    "path": "../../.output/public/dos/js-dos/types/src/components/tip.d.ts"
  },
  "/dos/js-dos/types/src/components/vertical-slider.d.ts": {
    "type": "video/mp2t",
    "etag": "\"1d7-abnLFIBfBdhrx9jusMPXZSgi95k\"",
    "mtime": "2026-05-04T21:27:06.989Z",
    "size": 471,
    "path": "../../.output/public/dos/js-dos/types/src/components/vertical-slider.d.ts"
  },
  "/dos/js-dos/types/src/components/volume-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"11b-0YevICNiQcVb8YTYGL1e1C69rqc\"",
    "mtime": "2026-05-04T21:27:06.989Z",
    "size": 283,
    "path": "../../.output/public/dos/js-dos/types/src/components/volume-control.d.ts"
  },
  "/dos/js-dos/types/v7-services/src/personal.d.ts": {
    "type": "video/mp2t",
    "etag": "\"14e-TKNQtwJ2xnbH9+/Q21Kz4fbI0bo\"",
    "mtime": "2026-05-04T21:27:06.967Z",
    "size": 334,
    "path": "../../.output/public/dos/js-dos/types/v7-services/src/personal.d.ts"
  },
  "/dos/js-dos/types/src/backend/v7/latency.d.ts": {
    "type": "video/mp2t",
    "etag": "\"f5-lCzD2ZWr5bwof0LRU9OWrT5JBe8\"",
    "mtime": "2026-05-04T21:27:06.992Z",
    "size": 245,
    "path": "../../.output/public/dos/js-dos/types/src/backend/v7/latency.d.ts"
  },
  "/dos/js-dos/types/src/backend/v7/personal.d.ts": {
    "type": "video/mp2t",
    "etag": "\"e6-KrG0AvI/Gn7pFOgS6UacN8GKexs\"",
    "mtime": "2026-05-04T21:27:06.967Z",
    "size": 230,
    "path": "../../.output/public/dos/js-dos/types/src/backend/v7/personal.d.ts"
  },
  "/dos/js-dos/types/src/backend/v7/v7-config.d.ts": {
    "type": "video/mp2t",
    "etag": "\"2ae-3IcV+f+Mg/b9DioAyhsZEmtOvdc\"",
    "mtime": "2026-05-04T21:27:06.992Z",
    "size": 686,
    "path": "../../.output/public/dos/js-dos/types/src/backend/v7/v7-config.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/latency-info.d.ts": {
    "type": "video/mp2t",
    "etag": "\"109-eMwAlRuR60nxALpalD7df/+nbfA\"",
    "mtime": "2026-05-04T21:27:06.992Z",
    "size": 265,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/latency-info.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/main.d.ts": {
    "type": "video/mp2t",
    "etag": "\"93-wqsXz+bL9+yFodtN5zMCEq6I0ug\"",
    "mtime": "2026-05-04T21:27:06.992Z",
    "size": 147,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/main.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/networking.d.ts": {
    "type": "video/mp2t",
    "etag": "\"99-cSlzdDypYBn3ZXnUMXaIuLI1RsI\"",
    "mtime": "2026-05-04T21:27:06.992Z",
    "size": 153,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/networking.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/token/token-add-time.d.ts": {
    "type": "video/mp2t",
    "etag": "\"9c-5WESNrInkZZXzFv8D/uHdKr0aUk\"",
    "mtime": "2026-05-04T21:27:06.967Z",
    "size": 156,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/token/token-add-time.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/token/token-select.d.ts": {
    "type": "video/mp2t",
    "etag": "\"9b-7hnfnWeTg2aRA47KtRNeVRhy5hc\"",
    "mtime": "2026-05-04T21:27:06.992Z",
    "size": 155,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/token/token-select.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/token/token.d.ts": {
    "type": "video/mp2t",
    "etag": "\"265-KmAJJGcEFeqFRQQJbXyPXfWqrtY\"",
    "mtime": "2026-05-04T21:27:06.992Z",
    "size": 613,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/token/token.d.ts"
  },
  "/dos/files/doom.jsdos": {
    "type": "text/plain; charset=utf-8",
    "encoding": null,
    "etag": "\"ce38d8-R5ULl/ZX8gS8nly1++g8RcdZIlM\"",
    "mtime": "2026-05-04T21:27:06.872Z",
    "size": 13514968,
    "path": "../../.output/public/dos/files/doom.jsdos"
  },
  "/dos/files/doom.jsdos.br": {
    "type": "text/plain; charset=utf-8",
    "encoding": "br",
    "etag": "\"cab44c-DRbrj1jhmyo79opfi2w58GB28+U\"",
    "mtime": "2026-05-04T21:27:29.451Z",
    "size": 13284428,
    "path": "../../.output/public/dos/files/doom.jsdos.br"
  },
  "/dos/files/doom.jsdos.gz": {
    "type": "text/plain; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"cd3169-8zzZ8h3NeOw+CdWOk6WHEtp+2TM\"",
    "mtime": "2026-05-04T21:27:09.639Z",
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
const U = /* @__PURE__ */ Symbol("$HTTPEvent");
function je$1(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[U]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function u$2(e) {
  return function(...n) {
    var _a;
    let t = n[0];
    if (je$1(t)) n[0] = t instanceof H3Event || t.__is_event__ ? t : t[U];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (t = Me$1(), !t) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      n.unshift(t);
    }
    return e(...n);
  };
}
const _ = u$2(getRequestURL$1), De = u$2(getRequestIP), S$3 = u$2(setResponseStatus$1), q = u$2(getResponseStatus), We = u$2(getResponseStatusText), y = u$2(getResponseHeaders), H$2 = u$2(getResponseHeader$1), Be = u$2(setResponseHeader$1), N = u$2(appendResponseHeader$1), ze = u$2(parseCookies), Je = u$2(getCookie), Xe = u$2(setCookie), h$1 = u$2(setHeader), Ge = u$2(getRequestWebStream), Ke = u$2(removeResponseHeader$1), Ve = u$2(Ne$1);
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
class T extends Error {
  constructor(n = b) {
    super(typeof n == "number" ? `${b}: ${n} (see https://github.com/apollographql/invariant-packages)` : n);
    __publicField$1(this, "framesToPop", 1);
    __publicField$1(this, "name", b);
    Ye(this, T.prototype);
  }
}
function et(e, n) {
  if (!e) throw new T(n);
}
const $ = "solidFetchEvent";
function tt(e) {
  return { request: Ve(e), response: ot(e), clientAddress: De(e), locals: {}, nativeEvent: e };
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
function k(e, n) {
  for (const [t, s] of n.entries()) N(e, t, s);
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
    return Be(this.event, n, t);
  }
  delete(n) {
    return Ke(this.event, n);
  }
  append(n, t) {
    N(this.event, n, t);
  }
  getSetCookie() {
    const n = H$2(this.event, "Set-Cookie");
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
    return q(e);
  }, set status(n) {
    S$3(e, n);
  }, get statusText() {
    return We(e);
  }, set statusText(n) {
    S$3(e, q(e), n);
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
const Ft$1 = isServer ? () => getRequestEvent().routes : () => A$1 || (A$1 = j$1());
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
const yt = {}, E$1 = [AbortSignalPlugin, CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin], St = 64, D$1 = Feature.RegExp;
function W$1(e) {
  const n = new TextEncoder().encode(e), t = n.length, s = t.toString(16), o = "00000000".substring(0, 8 - s.length) + s, a = new TextEncoder().encode(`;0x${o};`), i = new Uint8Array(12 + t);
  return i.set(a), i.set(n, 12), i;
}
function C$2(e, n) {
  return new ReadableStream({ start(t) {
    crossSerializeStream(n, { scopeId: e, plugins: E$1, onSerialize(s, o) {
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
    toCrossJSONStream(e, { disabledFeatures: D$1, depthLimit: St, plugins: E$1, onParse(t) {
      n.enqueue(W$1(JSON.stringify(t)));
    }, onDone() {
      n.close();
    }, onError(t) {
      n.error(t);
    } });
  } });
}
async function P$1(e) {
  return fromJSON(JSON.parse(e), { plugins: E$1, disabledFeatures: D$1 });
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
      const d = await P$1(r);
      for (const m of d) f.push(m);
    }
  }
  if (e.method === "POST") {
    const r = t.headers.get("content-type"), d = e.node.req, m = d instanceof ReadableStream, z = d.body instanceof ReadableStream, J = m && d.locked || z && d.body.locked, X = m ? d : d.body, w = J ? t : new Request(t, { ...t, body: X });
    t.headers.get("x-serialized") ? f = await P$1(await w.text()) : (r == null ? void 0 : r.startsWith("multipart/form-data")) || (r == null ? void 0 : r.startsWith("application/x-www-form-urlencoded")) ? f.push(await w.formData()) : (r == null ? void 0 : r.startsWith("application/json")) && (f = await w.json());
  }
  try {
    let r = await provideRequestEvent(n, async () => (sharedConfig.context = { event: n }, n.locals.serverFunctionMeta = { id: c + "#" + p }, B(...f)));
    if (a && o && (r = await L$1(n, r)), r instanceof Response) {
      if (r.headers && r.headers.has("X-Content-Raw")) return r;
      o && (r.headers && k(e, r.headers), r.status && (r.status < 300 || r.status >= 400) && S$3(e, r.status), r.customBody ? r = await r.customBody() : r.body == null && (r = null));
    }
    if (!o) return F$1(r, t, f);
    return h$1(e, "x-serialized", "true"), h$1(e, "content-type", "text/javascript"), C$2(o, r);
    return wt(r);
  } catch (r) {
    if (r instanceof Response) a && o && (r = await L$1(n, r)), r.headers && k(e, r.headers), r.status && (!o || r.status < 300 || r.status >= 400) && S$3(e, r.status), r.customBody ? r = r.customBody() : r.body == null && (r = null), h$1(e, "X-Error", "true");
    else if (o) {
      const d = r instanceof Error ? r.message : typeof r == "string" ? r : "true";
      h$1(e, "X-Error", d.replace(/[\r\n]+/g, ""));
    } else r = F$1(r, t, f, true);
    return o ? (h$1(e, "x-serialized", "true"), h$1(e, "content-type", "text/javascript"), C$2(o, r)) : r;
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
async function L$1(e, n) {
  let t, s = new URL(e.request.headers.get("referer")).toString();
  n instanceof Response && (n.headers.has("X-Revalidate") && (t = n.headers.get("X-Revalidate").split(",")), n.headers.has("Location") && (s = new URL(n.headers.get("Location"), new URL(e.request.url).origin + "").toString()));
  const o = nt(e);
  return o.request = new Request(s, { headers: $t(e) }), await provideRequestEvent(o, async () => {
    await gt(o), v$1 || (v$1 = (await import('../build/app-tREal_De.mjs')).default), o.router.dataOnly = t || true, o.router.previousUrl = e.request.headers.get("referer");
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
const Lt = eventHandler$1(bt);

const v = createContext(), C$1 = ["title", "meta"], p = [], f$1 = ["name", "http-equiv", "content", "charset", "media"].concat(["property"]), l = (r, t) => {
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
    if (C$1.indexOf(e.tag) !== -1) {
      const i = e.tag === "title" ? p : f$1, a = l(e, i);
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
    const o = e.tag === "title" ? p : f$1, i = l(e, o);
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
  return useAssets(() => ssr(S$2(r))), { addTag(t) {
    if (C$1.indexOf(t.tag) !== -1) {
      const e = t.tag === "title" ? p : f$1, n = l(t, e), o = r.findIndex((i) => i.tag === t.tag && l(i, e) === n);
      o !== -1 && r.splice(o, 1);
    }
    return r.push(t), r.length;
  }, removeTag(t, e) {
  } };
}
const K = (r) => {
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
function S$2(r) {
  return r.map((t) => {
    var _a, _b;
    const n = Object.keys(t.props).map((i) => i === "children" ? "" : ` ${i}="${escape(t.props[i], true)}"`).join("");
    let o = t.props.children;
    return Array.isArray(o) && (o = o.join("")), ((_a = t.setting) == null ? void 0 : _a.close) ? `<${t.tag} data-sm="${t.id}"${n}>${((_b = t.setting) == null ? void 0 : _b.escape) ? escape(o) : o || ""}</${t.tag}>` : `<${t.tag} data-sm="${t.id}"${n}/>`;
  }).join("");
}
const I$1 = (r) => u$1("title", r, { escape: true, close: true }), L = (r) => u$1("meta", r), H$1 = (r) => u$1("link", r);

var i = ((e) => (e.PtBr = "pt-br", e.En = "en", e))(i || {});
function I() {
  return i.PtBr;
}
const [a, d] = createSignal(I()), [u, f] = createSignal(void 0), [E, F] = createSignal(void 0), [S$1, r] = createSignal(null);
function j(e) {
  d(e);
}
const h = async (e) => {
  const o = await fetch(`/data/languages/${e}.json`);
  if (!o.ok) throw new Error("Failed to load messages");
  return o.json();
}, x = async () => {
  const e = await fetch("/data/portfolio_shared_data.json");
  if (!e.ok) throw new Error("Failed to load shared data");
  return e.json();
};
function P(e) {
  const o = u();
  if (!o) return e;
  const t = e.split(".");
  let n = o;
  for (const c of t) if (n && typeof n == "object" && c in n) n = n[c];
  else return e;
  return typeof n == "string" ? n : e;
}
const g = createContext();
function C() {
  const e = useContext(g);
  if (!e) throw new Error("useI18n must be used within I18nProvider");
  return e;
}
function D(e) {
  onMount(() => {
    if (x().catch(() => {
      console.error("[i18n] Failed to load shared data");
    }).then((t) => {
      t && F(t);
    }), "undefined" < "u") ;
    h(a()).then((t) => {
      f(t), r(null);
    }).catch((t) => {
      console.error("[i18n] Failed to load messages:", t), r(`Falha ao carregar idioma: ${a()}`);
    });
  });
  const o = { language: a, setLanguage: j, t: P, messages: u, sharedData: E, fetchError: S$1 };
  return createComponent$1(g.Provider, { value: o, get children() {
    return e.children;
  } });
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
function Ot(e) {
  let t;
  const n = Te(e), o = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(n, { ...o, body: e.node.req.body }) : new Request(n, { ...o, get body() {
    return t || (t = Kt(e), t);
  } });
}
function _t(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: Ot(e), url: Te(e) }, e.web.request;
}
function Mt() {
  return Xt();
}
const Ce = /* @__PURE__ */ Symbol("$HTTPEvent");
function Ft(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[Ce]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function S(e) {
  return function(...t) {
    var _a;
    let n = t[0];
    if (Ft(n)) t[0] = n instanceof H3Event || n.__is_event__ ? n : n[Ce];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (n = Mt(), !n) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      t.unshift(n);
    }
    return e(...t);
  };
}
const Te = S(getRequestURL$1), Ut = S(getRequestIP), ee = S(setResponseStatus$1), he = S(getResponseStatus), jt = S(getResponseStatusText), J = S(getResponseHeaders), de = S(getResponseHeader$1), Nt = S(setResponseHeader$1), Bt = S(appendResponseHeader$1), fe = S(sendRedirect$1), Wt = S(getCookie), Dt = S(setCookie), Gt = S(setHeader), Kt = S(getRequestWebStream), zt = S(removeResponseHeader$1), Jt = S(_t);
function Vt() {
  var _a;
  return getContext("nitro-app", { asyncContext: !!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function Xt() {
  return Vt().use().event;
}
const xe = [{ page: true, $component: { src: "src/routes/doom.tsx?pick=default&pick=$css", build: () => import('../build/doom2.mjs'), import: () => import('../build/doom2.mjs') }, path: "/doom", filePath: "/home/gus/thecodergus.github.io/src/routes/doom.tsx" }, { page: true, $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => import('../build/index2.mjs'), import: () => import('../build/index2.mjs') }, path: "/", filePath: "/home/gus/thecodergus.github.io/src/routes/index.tsx" }], Yt = Qt(xe.filter((e) => e.page));
function Qt(e) {
  function t(n, o, r, s) {
    const a = Object.values(n).find((i) => r.startsWith(i.id + "/"));
    return a ? (t(a.children || (a.children = []), o, r.slice(a.id.length)), n) : (n.push({ ...o, id: r, path: r.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/") }), n);
  }
  return e.sort((n, o) => n.path.length - o.path.length).reduce((n, o) => t(n, o, o.path, o.path), []);
}
function Zt(e, t) {
  const n = tn.lookup(e);
  if (n && n.route) {
    const o = n.route, r = t === "HEAD" ? o.$HEAD || o.$GET : o[`$${t}`];
    if (r === void 0) return;
    const s = o.page === true && o.$component !== void 0;
    return { handler: r, params: n.params, isPage: s };
  }
}
function en(e) {
  return e.$HEAD || e.$GET || e.$POST || e.$PUT || e.$PATCH || e.$DELETE;
}
const tn = createRouter({ routes: xe.reduce((e, t) => {
  if (!en(t)) return e;
  let n = t.path.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/").replace(/\*([^/]*)/g, (o, r) => `**:${r}`).split("/").map((o) => o.startsWith(":") || o.startsWith("*") ? o : encodeURIComponent(o)).join("/");
  if (/:[^/]*\?/g.test(n)) throw new Error(`Optional parameters are not supported in API routes: ${n}`);
  if (e[n]) throw new Error(`Duplicate API routes for "${n}" found at "${e[n].route.path}" and "${t.path}"`);
  return e[n] = { route: t }, e;
}, {}) }), Y = "solidFetchEvent";
function nn(e) {
  return { request: Jt(e), response: sn(e), clientAddress: Ut(e), locals: {}, nativeEvent: e };
}
function rn(e) {
  if (!e.context[Y]) {
    const t = nn(e);
    e.context[Y] = t;
  }
  return e.context[Y];
}
class on {
  constructor(t) {
    __publicField(this, "event");
    this.event = t;
  }
  get(t) {
    const n = de(this.event, t);
    return Array.isArray(n) ? n.join(", ") : n || null;
  }
  has(t) {
    return this.get(t) !== null;
  }
  set(t, n) {
    return Nt(this.event, t, n);
  }
  delete(t) {
    return zt(this.event, t);
  }
  append(t, n) {
    Bt(this.event, t, n);
  }
  getSetCookie() {
    const t = de(this.event, "Set-Cookie");
    return Array.isArray(t) ? t : [t];
  }
  forEach(t) {
    return Object.entries(J(this.event)).forEach(([n, o]) => t(Array.isArray(o) ? o.join(", ") : o, n, this));
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
function sn(e) {
  return { get status() {
    return he(e);
  }, set status(t) {
    ee(e, t);
  }, get statusText() {
    return jt(e);
  }, set statusText(t) {
    ee(e, he(e), t);
  }, headers: new on(e) };
}
var cn = " ";
const un = { style: (e) => ssrElement("style", e.attrs, () => e.children, true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(cn), true) : null, noscript: (e) => ssrElement("noscript", e.attrs, () => escape(e.children), true) };
function te(e, t) {
  let { tag: n, attrs: { key: o, ...r } = { key: void 0 }, children: s } = e;
  return un[n]({ attrs: { ...r, nonce: t }, key: o, children: s });
}
function ln(e, t, n, o = "default") {
  return lazy(async () => {
    var _a;
    {
      const s = (await e.import())[o], i = (await ((_a = t.inputs) == null ? void 0 : _a[e.src].assets())).filter((u) => u.tag === "style" || u.attrs.rel === "stylesheet");
      return { default: (u) => [...i.map((d) => te(d)), createComponent(s, u)] };
    }
  });
}
function Le() {
  function e(n) {
    return { ...n, ...n.$$route ? n.$$route.require().route : void 0, info: { ...n.$$route ? n.$$route.require().route.info : {}, filesystem: true }, component: n.$component && ln(n.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: n.children ? n.children.map(e) : void 0 };
  }
  return Yt.map(e);
}
let pe;
const hn = isServer ? () => getRequestEvent().routes : () => pe || (pe = Le());
function dn(e) {
  const t = Wt(e.nativeEvent, "flash");
  if (t) try {
    let n = JSON.parse(t);
    if (!n || !n.result) return;
    const o = [...n.input.slice(0, -1), new Map(n.input[n.input.length - 1])], r = n.error ? new Error(n.result) : n.result;
    return { input: o, url: n.url, pending: false, result: n.thrown ? void 0 : r, error: n.thrown ? r : void 0 };
  } catch (n) {
    console.error(n);
  } finally {
    Dt(e.nativeEvent, "flash", "", { maxAge: 0 });
  }
}
async function fn(e) {
  const t = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, e.response.headers.set("Content-Type", "text/html"), Object.assign(e, { manifest: await t.json(), assets: [...await t.inputs[t.handler].assets()], router: { submission: dn(e) }, routes: Le(), complete: false, $islands: /* @__PURE__ */ new Set() });
}
const pn = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function ne(e) {
  return e.status && pn.has(e.status) ? e.status : 302;
}
function mn(e, t, n = {}, o) {
  return eventHandler$1({ handler: (r) => {
    const s = rn(r);
    return provideRequestEvent(s, async () => {
      const a = Zt(new URL(s.request.url).pathname, s.request.method);
      if (a) {
        const f = await a.handler.import(), y = s.request.method === "HEAD" ? f.HEAD || f.GET : f[s.request.method];
        s.params = a.params || {}, sharedConfig.context = { event: s };
        const h = await y(s);
        if (h !== void 0) return h;
        if (s.request.method !== "GET") throw new Error(`API handler for ${s.request.method} "${s.request.url}" did not return a response.`);
        if (!a.isPage) return;
      }
      const i = await t(s), c = typeof n == "function" ? await n(i) : { ...n }, u = c.mode || "stream";
      if (c.nonce && (i.nonce = c.nonce), u === "sync") {
        const f = renderToString(() => (sharedConfig.context.event = i, e(i)), c);
        if (i.complete = true, i.response && i.response.headers.get("Location")) {
          const y = ne(i.response);
          return fe(r, i.response.headers.get("Location"), y);
        }
        return f;
      }
      if (c.onCompleteAll) {
        const f = c.onCompleteAll;
        c.onCompleteAll = (y) => {
          ge(i)(y), f(y);
        };
      } else c.onCompleteAll = ge(i);
      if (c.onCompleteShell) {
        const f = c.onCompleteShell;
        c.onCompleteShell = (y) => {
          me(i, r)(), f(y);
        };
      } else c.onCompleteShell = me(i, r);
      const d = renderToStream(() => (sharedConfig.context.event = i, e(i)), c);
      if (i.response && i.response.headers.get("Location")) {
        const f = ne(i.response);
        return fe(r, i.response.headers.get("Location"), f);
      }
      if (u === "async") return d;
      const { writable: v, readable: g } = new TransformStream();
      return d.pipeTo(v), g;
    });
  } });
}
function me(e, t) {
  return () => {
    if (e.response && e.response.headers.get("Location")) {
      const n = ne(e.response);
      ee(t, n), Gt(t, "Location", e.response.headers.get("Location"));
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
function gn(e, t, n) {
  return mn(e, fn, t);
}
function ke() {
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
let re;
function ae() {
  (!window.history.state || window.history.state._depth == null) && window.history.replaceState({ ...window.history.state, _depth: window.history.length - 1 }, ""), re = window.history.state._depth;
}
isServer || ae();
function yn(e) {
  return { ...e, _depth: window.history.state && window.history.state._depth };
}
function wn(e, t) {
  let n = false;
  return () => {
    const o = re;
    ae();
    const r = o == null ? null : re - o;
    if (n) {
      n = false;
      return;
    }
    r && t(r) ? (n = true, window.history.go(-r)) : e();
  };
}
const vn = /^(?:[a-z0-9]+:)?\/\//i, bn = /^\/+|(\/)\/+$/g, Ie = "http://sr";
function B(e, t = false) {
  const n = e.replace(bn, "$1");
  return n ? t || /^[?#]/.test(n) ? n : "/" + n : "";
}
function V(e, t, n) {
  if (vn.test(t)) return;
  const o = B(e), r = n && B(n);
  let s = "";
  return !r || t.startsWith("/") ? s = o : r.toLowerCase().indexOf(o.toLowerCase()) !== 0 ? s = o + r : s = r, (s || "/") + B(t, !s);
}
function Rn(e, t) {
  return B(e).replace(/\/*(\*.*)?$/g, "") + B(t);
}
function He(e) {
  const t = {};
  return e.searchParams.forEach((n, o) => {
    o in t ? Array.isArray(t[o]) ? t[o].push(n) : t[o] = [t[o], n] : t[o] = n;
  }), t;
}
function Sn(e, t, n) {
  const [o, r] = e.split("/*", 2), s = o.split("/").filter(Boolean), a = s.length;
  return (i) => {
    const c = i.split("/").filter(Boolean), u = c.length - a;
    if (u < 0 || u > 0 && r === void 0 && !t) return null;
    const d = { path: a ? "" : "/", params: {} }, v = (g) => n === void 0 ? void 0 : n[g];
    for (let g = 0; g < a; g++) {
      const f = s[g], y = f[0] === ":", h = y ? c[g] : c[g].toLowerCase(), p = y ? f.slice(1) : f.toLowerCase();
      if (y && Q(h, v(p))) d.params[p] = h;
      else if (y || !Q(h, p)) return null;
      d.path += `/${h}`;
    }
    if (r) {
      const g = u ? c.slice(-u).join("/") : "";
      if (Q(g, v(r))) d.params[r] = g;
      else return null;
    }
    return d;
  };
}
function Q(e, t) {
  const n = (o) => o === e;
  return t === void 0 ? true : typeof t == "string" ? n(t) : typeof t == "function" ? t(e) : Array.isArray(t) ? t.some(n) : t instanceof RegExp ? t.test(e) : false;
}
function En(e) {
  const [t, n] = e.pattern.split("/*", 2), o = t.split("/").filter(Boolean);
  return o.reduce((r, s) => r + (s.startsWith(":") ? 2 : 3), o.length - (n === void 0 ? 0 : 1));
}
function qe(e) {
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
function Oe(e) {
  let t = /(\/?\:[^\/]+)\?/.exec(e);
  if (!t) return [e];
  let n = e.slice(0, t.index), o = e.slice(t.index + t[0].length);
  const r = [n, n += t[1]];
  for (; t = /^(\/\:[^\/]+)\?/.exec(o); ) r.push(n += t[1]), o = o.slice(t[0].length);
  return Oe(o).reduce((s, a) => [...s, ...r.map((i) => i + a)], []);
}
const An = 100, $n = createContext(), _e = createContext();
function Pn(e, t = "") {
  const { component: n, preload: o, load: r, children: s, info: a } = e, i = !s || Array.isArray(s) && !s.length, c = { key: e, component: n, preload: o || r, info: a };
  return Me(e.path).reduce((u, d) => {
    for (const v of Oe(d)) {
      const g = Rn(t, v);
      let f = i ? g : g.split("/*", 1)[0];
      f = f.split("/").map((y) => y.startsWith(":") || y.startsWith("*") ? y : encodeURIComponent(y)).join("/"), u.push({ ...c, originalPath: d, pattern: f, matcher: Sn(f, !i, e.matchFilters) });
    }
    return u;
  }, []);
}
function Cn(e, t = 0) {
  return { routes: e, score: En(e[e.length - 1]) * 1e4 - t, matcher(n) {
    const o = [];
    for (let r = e.length - 1; r >= 0; r--) {
      const s = e[r], a = s.matcher(n);
      if (!a) return null;
      o.unshift({ ...a, route: s });
    }
    return o;
  } };
}
function Me(e) {
  return Array.isArray(e) ? e : [e];
}
function Fe(e, t = "", n = [], o = []) {
  const r = Me(e);
  for (let s = 0, a = r.length; s < a; s++) {
    const i = r[s];
    if (i && typeof i == "object") {
      i.hasOwnProperty("path") || (i.path = "");
      const c = Pn(i, t);
      for (const u of c) {
        n.push(u);
        const d = Array.isArray(i.children) && i.children.length === 0;
        if (i.children && !d) Fe(i.children, u.pattern, n, o);
        else {
          const v = Cn([...n], o.length);
          o.push(v);
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
function Tn(e, t, n) {
  const o = new URL(Ie), r = createMemo((d) => {
    const v = e();
    try {
      return new URL(v, o);
    } catch {
      return console.error(`Invalid path ${v}`), d;
    }
  }, o, { equals: (d, v) => d.href === v.href }), s = createMemo(() => r().pathname), a = createMemo(() => r().search, true), i = createMemo(() => r().hash), c = () => "", u = on$1(a, () => He(r()));
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
  }, query: n ? n(u) : qe(u) };
}
let H;
function xn() {
  return H;
}
function Ln(e, t, n, o = {}) {
  const { signal: [r, s], utils: a = {} } = e, i = a.parsePath || ((m) => m), c = a.renderPath || ((m) => m), u = a.beforeLeave || ke(), d = V("", o.base || "");
  if (d === void 0) throw new Error(`${d} is not a valid base path`);
  d && !r().value && s({ value: d, replace: true, scroll: false });
  const [v, g] = createSignal(false);
  let f;
  const y = (m, w) => {
    w.value === h() && w.state === R() || (f === void 0 && g(true), H = m, f = w, startTransition(() => {
      f === w && (p(f.value), b(f.state), resetErrorBoundaries(), isServer || I[1]((A) => A.filter((O) => O.pending)));
    }).finally(() => {
      f === w && batch(() => {
        H = void 0, m === "navigate" && Ge(f), g(false), f = void 0;
      });
    }));
  }, [h, p] = createSignal(r().value), [R, b] = createSignal(r().state), k = Tn(h, R, a.queryWrapper), P = [], I = createSignal(isServer ? ze() : []), j = createMemo(() => typeof o.transformUrl == "function" ? W(t(), o.transformUrl(k.pathname)) : W(t(), k.pathname)), ie = () => {
    const m = j(), w = {};
    for (let A = 0; A < m.length; A++) Object.assign(w, m[A].params);
    return w;
  }, Be = a.paramsWrapper ? a.paramsWrapper(ie, t) : qe(ie), ce = { pattern: d, path: () => d, outlet: () => null, resolvePath(m) {
    return V(d, m);
  } };
  return createRenderEffect(on$1(r, (m) => y("native", m), { defer: true })), { base: ce, location: k, params: Be, isRouting: v, renderPath: c, parsePath: i, navigatorFactory: De, matches: j, beforeLeave: u, preloadRoute: Ke, singleFlight: o.singleFlight === void 0 ? true : o.singleFlight, submissions: I };
  function We(m, w, A) {
    untrack(() => {
      if (typeof w == "number") {
        w && (a.go ? a.go(w) : console.warn("Router integration does not support relative routing"));
        return;
      }
      const O = !w || w[0] === "?", { replace: D, resolve: _, scroll: G, state: M } = { replace: false, resolve: !O, scroll: true, ...A }, F = _ ? m.resolvePath(w) : V(O && k.pathname || "", w);
      if (F === void 0) throw new Error(`Path '${w}' is not a routable path`);
      if (P.length >= An) throw new Error("Too many redirects");
      const ue = h();
      if (F !== ue || M !== R()) if (isServer) {
        const le = getRequestEvent();
        le && (le.response = { status: 302, headers: new Headers({ Location: F }) }), s({ value: F, replace: D, scroll: G, state: M });
      } else u.confirm(F, A) && (P.push({ value: ue, replace: D, scroll: G, state: R() }), y("navigate", { value: F, state: M }));
    });
  }
  function De(m) {
    return m = m || useContext(_e) || ce, (w, A) => We(m, w, A);
  }
  function Ge(m) {
    const w = P[0];
    w && (s({ ...m, replace: w.replace, scroll: w.scroll }), P.length = 0);
  }
  function Ke(m, w) {
    const A = W(t(), m.pathname), O = H;
    H = "preload";
    for (let D in A) {
      const { route: _, params: G } = A[D];
      _.component && _.component.preload && _.component.preload();
      const { preload: M } = _;
      w && M && runWithOwner(n(), () => M({ params: G, location: { pathname: m.pathname, search: m.search, hash: m.hash, query: He(m), state: null, key: "" }, intent: "preload" }));
    }
    H = O;
  }
  function ze() {
    const m = getRequestEvent();
    return m && m.router && m.router.submission ? [m.router.submission] : [];
  }
}
function kn(e, t, n, o) {
  const { base: r, location: s, params: a } = e, { pattern: i, component: c, preload: u } = o().route, d = createMemo(() => o().path);
  c && c.preload && c.preload();
  const v = u ? u({ params: a, location: s, intent: H || "initial" }) : void 0;
  return { parent: t, pattern: i, path: d, outlet: () => c ? createComponent(c, { params: a, location: s, data: v, get children() {
    return n();
  } }) : n(), resolvePath(f) {
    return V(r.path(), f, d());
  } };
}
const Ue = (e) => (t) => {
  const { base: n } = t, o = children(() => t.children), r = createMemo(() => Fe(o(), t.base || ""));
  let s;
  const a = Ln(e, r, () => s, { base: n, singleFlight: t.singleFlight, transformUrl: t.transformUrl });
  return e.create && e.create(a), createComponent$1($n.Provider, { value: a, get children() {
    return createComponent$1(In, { routerState: a, get root() {
      return t.root;
    }, get preload() {
      return t.rootPreload || t.rootLoad;
    }, get children() {
      return [(s = getOwner()) && null, createComponent$1(Hn, { routerState: a, get branches() {
        return r();
      } })];
    } });
  } });
};
function In(e) {
  const t = e.routerState.location, n = e.routerState.params, o = createMemo(() => e.preload && untrack(() => {
    e.preload({ params: n, location: t, intent: xn() || "initial" });
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
function Hn(e) {
  if (isServer) {
    const r = getRequestEvent();
    if (r && r.router && r.router.dataOnly) {
      qn(r, e.routerState, e.branches);
      return;
    }
    r && ((r.router || (r.router = {})).matches || (r.router.matches = e.routerState.matches().map(({ route: s, path: a, params: i }) => ({ path: s.originalPath, pattern: s.pattern, match: a, params: i, info: s.info }))));
  }
  const t = [];
  let n;
  const o = createMemo(on$1(e.routerState.matches, (r, s, a) => {
    let i = s && r.length === s.length;
    const c = [];
    for (let u = 0, d = r.length; u < d; u++) {
      const v = s && s[u], g = r[u];
      a && v && g.route.key === v.route.key ? c[u] = a[u] : (i = false, t[u] && t[u](), createRoot((f) => {
        t[u] = f, c[u] = kn(e.routerState, c[u - 1] || e.routerState.base, ye(() => o()[u + 1]), () => {
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
}, keyed: true, children: (t) => createComponent$1(_e.Provider, { value: t, get children() {
  return t.outlet();
} }) });
function qn(e, t, n) {
  const o = new URL(e.request.url), r = W(n, new URL(e.router.previousUrl || e.request.url).pathname), s = W(n, o.pathname);
  for (let a = 0; a < s.length; a++) {
    (!r[a] || s[a].route !== r[a].route) && (e.router.dataOnly = true);
    const { route: i, params: c } = s[a];
    i.preload && i.preload({ params: c, location: t.location, intent: "preload" });
  }
}
function On([e, t], n, o) {
  return [e, o ? (r) => t(o(r)) : t];
}
function _n(e) {
  let t = false;
  const n = (r) => typeof r == "string" ? { value: r } : r, o = On(createSignal(n(e.get()), { equals: (r, s) => r.value === s.value && r.state === s.state }), void 0, (r) => (!t && e.set(r), sharedConfig.registry && !sharedConfig.done && (sharedConfig.done = true), r));
  return e.init && onCleanup(e.init((r = e.get()) => {
    t = true, o[1](n(r)), t = false;
  })), Ue({ signal: o, create: e.create, utils: e.utils });
}
function Mn(e, t, n) {
  return e.addEventListener(t, n), () => e.removeEventListener(t, n);
}
function Fn(e, t) {
  const n = e && document.getElementById(e);
  n ? n.scrollIntoView() : t && window.scrollTo(0, 0);
}
function Un(e) {
  const t = new URL(e);
  return t.pathname + t.search;
}
function jn(e) {
  let t;
  const n = { value: e.url || (t = getRequestEvent()) && Un(t.request.url) || "" };
  return Ue({ signal: [() => n, (o) => Object.assign(n, o)] })(e);
}
const Nn = /* @__PURE__ */ new Map();
function Bn({ preload: e = true, explicitLinks: t = false, actionBase: n = "/_server", transformUrl: o } = {}) {
  return (r) => {
    const s = r.base.path(), a = r.navigatorFactory(r.base);
    let i, c;
    function u(h) {
      return h.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function d(h) {
      if (h.defaultPrevented || h.button !== 0 || h.metaKey || h.altKey || h.ctrlKey || h.shiftKey) return;
      const p = h.composedPath().find((j) => j instanceof Node && j.nodeName.toUpperCase() === "A");
      if (!p || t && !p.hasAttribute("link")) return;
      const R = u(p), b = R ? p.href.baseVal : p.href;
      if ((R ? p.target.baseVal : p.target) || !b && !p.hasAttribute("state")) return;
      const P = (p.getAttribute("rel") || "").split(/\s+/);
      if (p.hasAttribute("download") || P && P.includes("external")) return;
      const I = R ? new URL(b, document.baseURI) : new URL(b);
      if (!(I.origin !== window.location.origin || s && I.pathname && !I.pathname.toLowerCase().startsWith(s.toLowerCase()))) return [p, I];
    }
    function v(h) {
      const p = d(h);
      if (!p) return;
      const [R, b] = p, k = r.parsePath(b.pathname + b.search + b.hash), P = R.getAttribute("state");
      h.preventDefault(), a(k, { resolve: false, replace: R.hasAttribute("replace"), scroll: !R.hasAttribute("noscroll"), state: P ? JSON.parse(P) : void 0 });
    }
    function g(h) {
      const p = d(h);
      if (!p) return;
      const [R, b] = p;
      o && (b.pathname = o(b.pathname)), r.preloadRoute(b, R.getAttribute("preload") !== "false");
    }
    function f(h) {
      clearTimeout(i);
      const p = d(h);
      if (!p) return c = null;
      const [R, b] = p;
      c !== R && (o && (b.pathname = o(b.pathname)), i = setTimeout(() => {
        r.preloadRoute(b, R.getAttribute("preload") !== "false"), c = R;
      }, 20));
    }
    function y(h) {
      if (h.defaultPrevented) return;
      let p = h.submitter && h.submitter.hasAttribute("formaction") ? h.submitter.getAttribute("formaction") : h.target.getAttribute("action");
      if (!p) return;
      if (!p.startsWith("https://action/")) {
        const b = new URL(p, Ie);
        if (p = r.parsePath(b.pathname + b.search), !p.startsWith(n)) return;
      }
      if (h.target.method.toUpperCase() !== "POST") throw new Error("Only POST forms are supported for Actions");
      const R = Nn.get(p);
      if (R) {
        h.preventDefault();
        const b = new FormData(h.target, h.submitter);
        R.call({ r, f: h.target }, h.target.enctype === "multipart/form-data" ? b : new URLSearchParams(b));
      }
    }
    delegateEvents(["click", "submit"]), document.addEventListener("click", v), e && (document.addEventListener("mousemove", f, { passive: true }), document.addEventListener("focusin", g, { passive: true }), document.addEventListener("touchstart", g, { passive: true })), document.addEventListener("submit", y), onCleanup(() => {
      document.removeEventListener("click", v), e && (document.removeEventListener("mousemove", f), document.removeEventListener("focusin", g), document.removeEventListener("touchstart", g)), document.removeEventListener("submit", y);
    });
  };
}
function Wn(e) {
  if (isServer) return jn(e);
  const t = () => {
    const o = window.location.pathname.replace(/^\/+/, "/") + window.location.search, r = window.history.state && window.history.state._depth && Object.keys(window.history.state).length === 1 ? void 0 : window.history.state;
    return { value: o + window.location.hash, state: r };
  }, n = ke();
  return _n({ get: t, set({ value: o, replace: r, scroll: s, state: a }) {
    r ? window.history.replaceState(yn(a), "", o) : window.history.pushState(a, "", o), Fn(decodeURIComponent(window.location.hash.slice(1)), s), ae();
  }, init: (o) => Mn(window, "popstate", wn(o, (r) => {
    if (r) return !n.confirm(r);
    {
      const s = t();
      return !n.confirm(s.value, { state: s.state });
    }
  })), create: Bn({ preload: e.preload, explicitLinks: e.explicitLinks, actionBase: e.actionBase, transformUrl: e.transformUrl }), utils: { go: (o) => window.history.go(o), beforeLeave: n } })(e);
}
var we = ["<script", ">", "<\/script>"];
const Dn = `
(function() {
  try {
    var t = localStorage.getItem('portfolio-theme');
    if (t) document.documentElement.setAttribute('data-theme', t);
  } catch(e) {}
})();
`.trim(), Gn = `
(function() {
  try {
    var l = localStorage.getItem('portfolio-language');
    if (l === 'pt-br' || l === 'en') document.documentElement.lang = l;
  } catch(e) {}
})();
`.trim();
function Kn() {
  return createComponent$1(Wn, { root: (e) => createComponent$1(K, { get children() {
    return [createComponent$1(I$1, { children: "Gustavo M Camargo | AI & Software Engineer" }), createComponent$1(L, { name: "description", content: "Portfolio de Gustavo M Camargo \u2014 Especialista em Automa\xE7\xE3o com IA, LangGraph & AI Agents. Python, C++, Rust, React. Experi\xEAncia em agentes inteligentes e sistemas full-stack." }), createComponent$1(L, { name: "keywords", content: "AI engineer, LangGraph, Python, C++, Rust, React, automa\xE7\xE3o, software engineer, portfolio, Gustavo Camargo" }), createComponent$1(L, { name: "author", content: "Gustavo M Camargo" }), createComponent$1(L, { name: "robots", content: "index, follow" }), createComponent$1(L, { name: "theme-color", content: "#080012" }), createComponent$1(L, { property: "og:title", content: "Gustavo M Camargo | AI & Software Engineer" }), createComponent$1(L, { property: "og:description", content: "Especialista em Automa\xE7\xE3o com IA, LangGraph & AI Agents. Python, C++, Rust, React." }), createComponent$1(L, { property: "og:type", content: "website" }), createComponent$1(L, { property: "og:url", content: "https://thecodergus.github.io" }), createComponent$1(L, { property: "og:image", content: "https://thecodergus.github.io/images/myProfile.jpg" }), createComponent$1(L, { property: "og:locale", content: "pt_BR" }), createComponent$1(L, { name: "twitter:card", content: "summary" }), createComponent$1(L, { name: "twitter:title", content: "Gustavo M Camargo | AI & Software Engineer" }), createComponent$1(L, { name: "twitter:description", content: "Especialista em Automa\xE7\xE3o com IA, LangGraph & AI Agents." }), createComponent$1(L, { name: "twitter:image", content: "https://thecodergus.github.io/images/myProfile.jpg" }), ssr(we, ssrHydrationKey(), Dn), ssr(we, ssrHydrationKey(), Gn), createComponent$1(H$1, { rel: "preconnect", href: "https://fonts.googleapis.com" }), createComponent$1(H$1, { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" }), createComponent$1(H$1, { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap", rel: "stylesheet" }), createComponent$1(D, { get children() {
      return createComponent$1(Suspense, { get children() {
        return e.children;
      } });
    } })];
  } }), get children() {
    return createComponent$1(hn, {});
  } });
}
const je = isServer ? (e) => {
  const t = getRequestEvent();
  return t.response.status = e.code, t.response.statusText = e.text, onCleanup(() => !t.nativeEvent.handled && !t.complete && (t.response.status = 200)), null;
} : (e) => null;
var zn = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">', "</span>"], Jn = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">500 | Internal Server Error</span>'];
const Vn = (e) => {
  const t = isServer ? "500 | Internal Server Error" : "Error | Uncaught Client Exception";
  return createComponent$1(ErrorBoundary, { fallback: (n) => (console.error(n), [ssr(zn, ssrHydrationKey(), escape(t)), createComponent$1(je, { code: 500 })]), get children() {
    return e.children;
  } });
}, Xn = (e) => {
  let t = false;
  const n = catchError(() => e.children, (o) => {
    console.error(o), t = !!o;
  });
  return t ? [ssr(Jn, ssrHydrationKey()), createComponent$1(je, { code: 500 })] : n;
};
var ve = ["<script", ">", "<\/script>"], Yn = ["<script", ' type="module"', " async", "><\/script>"], Qn = ["<script", ' type="module" async', "><\/script>"];
const Zn = ssr("<!DOCTYPE html>");
function Ne(e, t, n = []) {
  for (let o = 0; o < t.length; o++) {
    const r = t[o];
    if (r.path !== e[0].path) continue;
    let s = [...n, r];
    if (r.children) {
      const a = e.slice(1);
      if (a.length === 0 || (s = Ne(a, r.children, s), !s)) continue;
    }
    return s;
  }
}
function er(e) {
  const t = getRequestEvent(), n = t.nonce;
  let o = [];
  return Promise.resolve().then(async () => {
    let r = [];
    if (t.router && t.router.matches) {
      const s = [...t.router.matches];
      for (; s.length && (!s[0].info || !s[0].info.filesystem); ) s.shift();
      const a = s.length && Ne(s, t.routes);
      if (a) {
        const i = globalThis.MANIFEST.client.inputs;
        for (let c = 0; c < a.length; c++) {
          const u = a[c], d = i[u.$component.src];
          r.push(d.assets());
        }
      }
    }
    o = await Promise.all(r).then((s) => [...new Map(s.flat().map((a) => [a.attrs.key, a])).values()].filter((a) => a.attrs.rel === "modulepreload" && !t.assets.find((i) => i.attrs.key === a.attrs.key)));
  }), useAssets(() => o.length ? o.map((r) => te(r)) : void 0), createComponent$1(NoHydration, { get children() {
    return [Zn, createComponent$1(Xn, { get children() {
      return createComponent$1(e.document, { get assets() {
        return [createComponent$1(HydrationScript, {}), t.assets.map((r) => te(r, n))];
      }, get scripts() {
        return n ? [ssr(ve, ssrHydrationKey() + ssrAttribute("nonce", escape(n, true), false), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(Yn, ssrHydrationKey(), ssrAttribute("nonce", escape(n, true), false), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))] : [ssr(ve, ssrHydrationKey(), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(Qn, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))];
      }, get children() {
        return createComponent$1(Hydration, { get children() {
          return createComponent$1(Vn, { get children() {
            return createComponent$1(Kn, {});
          } });
        } });
      } });
    } })];
  } });
}
var tr = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#080012"><link rel="icon" href="/favicon.ico"><link rel="manifest" href="/manifest.json">', '<script type="application/ld+json">', "<\/script></head>"], nr = ["<html", ' lang="pt-br" data-theme="ai">', '<body><a href="#main" class="skip-link">Pular para o conte\xFAdo</a><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
const dr = gn(() => createComponent$1(er, { document: ({ assets: e, children: t, scripts: n }) => ssr(nr, ssrHydrationKey(), createComponent$1(NoHydration, { get children() {
  return ssr(tr, escape(e), JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: "Gustavo M Camargo", url: "https://thecodergus.github.io", jobTitle: "AI & Software Engineer", sameAs: ["https://github.com/thecodergus", "https://www.linkedin.com/in/thecodergus"], knowsAbout: ["Artificial Intelligence", "LangGraph", "Python", "C++", "Rust", "React", "TypeScript", "Full-Stack Development"] }));
} }), escape(t), escape(n)) }));

const handlers = [
  { route: '', handler: _2L1h_Z, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: Lt, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: dr, lazy: false, middleware: true, method: undefined }
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

export { C, Ft$1 as F, H$1 as H, closePrerenderer as c, i, localFetch as l };
//# sourceMappingURL=nitro.mjs.map
