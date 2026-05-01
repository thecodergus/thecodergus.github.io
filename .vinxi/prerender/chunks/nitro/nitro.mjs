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
import { sharedConfig, lazy, createComponent, useContext, createContext, createSignal, createEffect, onMount, catchError, ErrorBoundary, Suspense, onCleanup, createUniqueId, children, createMemo, getOwner, createRenderEffect, on as on$1, runWithOwner, untrack, Show, createRoot, startTransition, resetErrorBoundaries, batch } from 'file:///home/gus/thecodergus.github.io/node_modules/solid-js/dist/server.js';
import { renderToString, isServer, getRequestEvent, ssrElement, escape, mergeProps, ssr, createComponent as createComponent$1, renderToStream, ssrHydrationKey, NoHydration, useAssets, Hydration, ssrAttribute, HydrationScript, delegateEvents, spread } from 'file:///home/gus/thecodergus.github.io/node_modules/solid-js/web/dist/server.js';
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
					const buildManifest = {"ssr":{"_Icon-ByGfEAaX.js":{"file":"assets/Icon-ByGfEAaX.js","name":"Icon"},"_i18nStore-DGJf4buY.js":{"file":"assets/i18nStore-DGJf4buY.js","name":"i18nStore"},"src/routes/doom.tsx?pick=default&pick=$css":{"file":"doom.js","name":"doom","src":"src/routes/doom.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_Icon-ByGfEAaX.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_i18nStore-DGJf4buY.js","_Icon-ByGfEAaX.js"]},"virtual:$vinxi/handler/ssr":{"file":"ssr.js","name":"ssr","src":"virtual:$vinxi/handler/ssr","isEntry":true,"imports":["_i18nStore-DGJf4buY.js"],"dynamicImports":["src/routes/doom.tsx?pick=default&pick=$css","src/routes/doom.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css"],"css":["assets/ssr-Ujhy-w5O.css"]}},"client":{"_Icon-BPd0Z1RN.js":{"file":"assets/Icon-BPd0Z1RN.js","name":"Icon","imports":["_web-Ml1_dNb4.js"]},"_i18nStore-BipZZ_0h.js":{"file":"assets/i18nStore-BipZZ_0h.js","name":"i18nStore","imports":["_web-Ml1_dNb4.js"]},"_web-Ml1_dNb4.js":{"file":"assets/web-Ml1_dNb4.js","name":"web"},"node_modules/devicon/fonts/devicon.svg":{"file":"assets/devicon-DBhpxM3S.svg","src":"node_modules/devicon/fonts/devicon.svg"},"node_modules/devicon/fonts/devicon.ttf":{"file":"assets/devicon-BwTrXM5G.ttf","src":"node_modules/devicon/fonts/devicon.ttf"},"node_modules/devicon/fonts/devicon.woff":{"file":"assets/devicon-D0iwJE0M.woff","src":"node_modules/devicon/fonts/devicon.woff"},"src/routes/doom.tsx?pick=default&pick=$css":{"file":"assets/doom-8RaPHlkM.js","name":"doom","src":"src/routes/doom.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-Ml1_dNb4.js","_Icon-BPd0Z1RN.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"assets/index-s6Cs6YAe.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-Ml1_dNb4.js","_i18nStore-BipZZ_0h.js","_Icon-BPd0Z1RN.js"]},"virtual:$vinxi/handler/client":{"file":"assets/client-DjPLhPoq.js","name":"client","src":"virtual:$vinxi/handler/client","isEntry":true,"imports":["_web-Ml1_dNb4.js","_i18nStore-BipZZ_0h.js"],"dynamicImports":["src/routes/doom.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css"],"css":["assets/client-BZWWclwa.css"],"assets":["assets/devicon-BwTrXM5G.ttf","assets/devicon-D0iwJE0M.woff","assets/devicon-DBhpxM3S.svg"]}},"server-fns":{"_Icon-ByGfEAaX.js":{"file":"assets/Icon-ByGfEAaX.js","name":"Icon"},"_server-fns-Dk6e2dgl.js":{"file":"assets/server-fns-Dk6e2dgl.js","name":"server-fns","dynamicImports":["src/routes/doom.tsx?pick=default&pick=$css","src/routes/doom.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/app.tsx"]},"_themeStore-7EB1q0AO.js":{"file":"assets/themeStore-7EB1q0AO.js","name":"themeStore"},"src/app.tsx":{"file":"assets/app-EaL-ZfXX.js","name":"app","src":"src/app.tsx","isDynamicEntry":true,"imports":["_server-fns-Dk6e2dgl.js","_themeStore-7EB1q0AO.js"],"css":["assets/app-Ujhy-w5O.css"]},"src/routes/doom.tsx?pick=default&pick=$css":{"file":"doom.js","name":"doom","src":"src/routes/doom.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_Icon-ByGfEAaX.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_themeStore-7EB1q0AO.js","_Icon-ByGfEAaX.js"]},"virtual:$vinxi/handler/server-fns":{"file":"server-fns.js","name":"server-fns","src":"virtual:$vinxi/handler/server-fns","isEntry":true,"imports":["_server-fns-Dk6e2dgl.js"]}}};

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
  "/dos.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"398-L7Ke0K/FAcHU9es2FHrTbi5ozgc\"",
    "mtime": "2026-05-01T18:47:22.607Z",
    "size": 920,
    "path": "../../.output/public/dos.html"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": "\"12f-zBJYk8L0yy4msf+H/1M/K5ei2vs\"",
    "mtime": "2026-05-01T18:47:22.607Z",
    "size": 303,
    "path": "../../.output/public/manifest.json"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"43-BEzmj4PuhUNHX+oW9uOnPSihxtU\"",
    "mtime": "2026-05-01T18:47:22.607Z",
    "size": 67,
    "path": "../../.output/public/robots.txt"
  },
  "/assets/ssr-Ujhy-w5O.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"178a-k3DEECtbC6/FSesIsPfy1cz92MU\"",
    "mtime": "2026-05-01T18:47:22.721Z",
    "size": 6026,
    "path": "../../.output/public/assets/ssr-Ujhy-w5O.css.gz"
  },
  "/assets/ssr-Ujhy-w5O.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"6da0-fr9/HHZ6g3ImlpVHWx0XEDZuygs\"",
    "mtime": "2026-05-01T18:47:22.709Z",
    "size": 28064,
    "path": "../../.output/public/assets/ssr-Ujhy-w5O.css"
  },
  "/assets/ssr-Ujhy-w5O.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"147a-A90NWmpe3B0rg3uyJnoDscPjNPg\"",
    "mtime": "2026-05-01T18:47:22.742Z",
    "size": 5242,
    "path": "../../.output/public/assets/ssr-Ujhy-w5O.css.br"
  },
  "/data/portfolio_shared_data.json": {
    "type": "application/json",
    "encoding": null,
    "etag": "\"8a1-XOUwyq061s5gZo9Kkc/G2zRoGmc\"",
    "mtime": "2026-05-01T18:47:22.607Z",
    "size": 2209,
    "path": "../../.output/public/data/portfolio_shared_data.json"
  },
  "/data/portfolio_shared_data.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"22a-UOYwGi1io9C2wO4xKWHnjQXszEI\"",
    "mtime": "2026-05-01T18:47:22.726Z",
    "size": 554,
    "path": "../../.output/public/data/portfolio_shared_data.json.br"
  },
  "/data/portfolio_shared_data.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"270-oSwl36rncnaELPeRvvNMCX6yDi8\"",
    "mtime": "2026-05-01T18:47:22.720Z",
    "size": 624,
    "path": "../../.output/public/data/portfolio_shared_data.json.gz"
  },
  "/_server/assets/app-Ujhy-w5O.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"6da0-fr9/HHZ6g3ImlpVHWx0XEDZuygs\"",
    "mtime": "2026-05-01T18:47:22.713Z",
    "size": 28064,
    "path": "../../.output/public/_server/assets/app-Ujhy-w5O.css"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"28f5b-+HJ/8feXwjqDwG8zs4HR07QMTCM\"",
    "mtime": "2026-05-01T18:47:22.607Z",
    "size": 167771,
    "path": "../../.output/public/favicon.ico"
  },
  "/_server/assets/app-Ujhy-w5O.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"147a-A90NWmpe3B0rg3uyJnoDscPjNPg\"",
    "mtime": "2026-05-01T18:47:22.822Z",
    "size": 5242,
    "path": "../../.output/public/_server/assets/app-Ujhy-w5O.css.br"
  },
  "/_build/.vite/manifest.json": {
    "type": "application/json",
    "encoding": null,
    "etag": "\"7e1-rLcVdh8VkRCI7zeUuNU1yrhtGFw\"",
    "mtime": "2026-05-01T18:47:22.710Z",
    "size": 2017,
    "path": "../../.output/public/_build/.vite/manifest.json"
  },
  "/_server/assets/app-Ujhy-w5O.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"178a-k3DEECtbC6/FSesIsPfy1cz92MU\"",
    "mtime": "2026-05-01T18:47:22.822Z",
    "size": 6026,
    "path": "../../.output/public/_server/assets/app-Ujhy-w5O.css.gz"
  },
  "/_build/.vite/manifest.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"1a9-PSVkih87eM+raJjGRMBC8igrB20\"",
    "mtime": "2026-05-01T18:47:22.739Z",
    "size": 425,
    "path": "../../.output/public/_build/.vite/manifest.json.br"
  },
  "/_build/.vite/manifest.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"1de-CodtG6991qL/4/3iJrckog/0Gfs\"",
    "mtime": "2026-05-01T18:47:22.720Z",
    "size": 478,
    "path": "../../.output/public/_build/.vite/manifest.json.gz"
  },
  "/_build/assets/Icon-BPd0Z1RN.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"5af-LMB3luw35cDCK6rdoASSS4kZPsk\"",
    "mtime": "2026-05-01T18:47:22.710Z",
    "size": 1455,
    "path": "../../.output/public/_build/assets/Icon-BPd0Z1RN.js"
  },
  "/_build/assets/Icon-BPd0Z1RN.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2ca-uNVFPX3C0JMe8Yqr73c+QPrNXX8\"",
    "mtime": "2026-05-01T18:47:22.739Z",
    "size": 714,
    "path": "../../.output/public/_build/assets/Icon-BPd0Z1RN.js.br"
  },
  "/_build/assets/Icon-BPd0Z1RN.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"333-7cIi/VDN2BNCF3dDy1mkhDxyHzg\"",
    "mtime": "2026-05-01T18:47:22.739Z",
    "size": 819,
    "path": "../../.output/public/_build/assets/Icon-BPd0Z1RN.js.gz"
  },
  "/_build/assets/client-BZWWclwa.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"42a0-am42M8XL3BqtlRNp4GyVyYSfw54\"",
    "mtime": "2026-05-01T18:47:22.870Z",
    "size": 17056,
    "path": "../../.output/public/_build/assets/client-BZWWclwa.css.br"
  },
  "/_build/assets/client-BZWWclwa.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5500-UzE93rCu5nxMHSHBXSgmV8eCoDc\"",
    "mtime": "2026-05-01T18:47:22.742Z",
    "size": 21760,
    "path": "../../.output/public/_build/assets/client-BZWWclwa.css.gz"
  },
  "/_build/assets/client-BZWWclwa.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"20197-oa7qB3XVDQF7eknnP62LrLIGPQ0\"",
    "mtime": "2026-05-01T18:47:22.710Z",
    "size": 131479,
    "path": "../../.output/public/_build/assets/client-BZWWclwa.css"
  },
  "/images/myProfile.jpg": {
    "type": "image/jpeg",
    "etag": "\"85959-iF5M3WpBNfzVmCJclZFaL3uP+oM\"",
    "mtime": "2026-05-01T18:47:22.607Z",
    "size": 547161,
    "path": "../../.output/public/images/myProfile.jpg"
  },
  "/_build/assets/client-DjPLhPoq.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"5f40-RkoXgcVJA4KQ7ggzvpgg+RFljE8\"",
    "mtime": "2026-05-01T18:47:22.710Z",
    "size": 24384,
    "path": "../../.output/public/_build/assets/client-DjPLhPoq.js"
  },
  "/_build/assets/client-DjPLhPoq.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"22ea-5CHGvgie8PvSUgytPgBcpBAkB3s\"",
    "mtime": "2026-05-01T18:47:22.743Z",
    "size": 8938,
    "path": "../../.output/public/_build/assets/client-DjPLhPoq.js.br"
  },
  "/_build/assets/client-DjPLhPoq.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2692-35WkaPS/TSv6JP5qnxd3V0H8i1U\"",
    "mtime": "2026-05-01T18:47:22.739Z",
    "size": 9874,
    "path": "../../.output/public/_build/assets/client-DjPLhPoq.js.gz"
  },
  "/_build/assets/doom-8RaPHlkM.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"475-7yeqK3CEw0f5Xf0x3aQWEhzAEBA\"",
    "mtime": "2026-05-01T18:47:22.711Z",
    "size": 1141,
    "path": "../../.output/public/_build/assets/doom-8RaPHlkM.js"
  },
  "/_build/assets/doom-8RaPHlkM.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"265-LLvKo66N3zuBlLvNIdyW5y5W2nk\"",
    "mtime": "2026-05-01T18:47:22.745Z",
    "size": 613,
    "path": "../../.output/public/_build/assets/doom-8RaPHlkM.js.br"
  },
  "/_build/assets/doom-8RaPHlkM.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2c1-lZCBTORMVEKYFZYaNywJ4IUaW2E\"",
    "mtime": "2026-05-01T18:47:22.744Z",
    "size": 705,
    "path": "../../.output/public/_build/assets/doom-8RaPHlkM.js.gz"
  },
  "/_build/assets/i18nStore-BipZZ_0h.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"632-iMBCRwDu8vmoDA+PfaTOXmhRD34\"",
    "mtime": "2026-05-01T18:47:22.710Z",
    "size": 1586,
    "path": "../../.output/public/_build/assets/i18nStore-BipZZ_0h.js"
  },
  "/_build/assets/i18nStore-BipZZ_0h.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2b7-WPSd67gjeb7LkfNGh4wmZQuxf34\"",
    "mtime": "2026-05-01T18:47:22.791Z",
    "size": 695,
    "path": "../../.output/public/_build/assets/i18nStore-BipZZ_0h.js.br"
  },
  "/_build/assets/i18nStore-BipZZ_0h.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"330-MVk4sD+ek4hEKENnJv7lMRaYGRo\"",
    "mtime": "2026-05-01T18:47:22.776Z",
    "size": 816,
    "path": "../../.output/public/_build/assets/i18nStore-BipZZ_0h.js.gz"
  },
  "/_build/assets/web-Ml1_dNb4.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"6eb3-Qs41e9aQW6mYbzBUxvc/d0dVek8\"",
    "mtime": "2026-05-01T18:47:22.710Z",
    "size": 28339,
    "path": "../../.output/public/_build/assets/web-Ml1_dNb4.js"
  },
  "/_build/assets/index-s6Cs6YAe.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1f515-RDWhcCLbMTL9g0eaZJZkLJPrKX0\"",
    "mtime": "2026-05-01T18:47:23.891Z",
    "size": 128277,
    "path": "../../.output/public/_build/assets/index-s6Cs6YAe.js.br"
  },
  "/_build/assets/web-Ml1_dNb4.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"26ec-8phAZ1BgPNTRDAzXRS4C6rzgAdE\"",
    "mtime": "2026-05-01T18:47:22.794Z",
    "size": 9964,
    "path": "../../.output/public/_build/assets/web-Ml1_dNb4.js.br"
  },
  "/data/languages/en.json": {
    "type": "application/json",
    "encoding": null,
    "etag": "\"2337-vYa+O0nkPX0R+Nym+l0Qu6HC0i0\"",
    "mtime": "2026-05-01T18:47:22.607Z",
    "size": 9015,
    "path": "../../.output/public/data/languages/en.json"
  },
  "/_build/assets/web-Ml1_dNb4.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2ab7-Xhy+rQpxjbMqWhTirK/kd5PrNyM\"",
    "mtime": "2026-05-01T18:47:22.794Z",
    "size": 10935,
    "path": "../../.output/public/_build/assets/web-Ml1_dNb4.js.gz"
  },
  "/data/languages/en.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"825-Zsj0Kqu8TgCyfNQnBZEvBEgIRA4\"",
    "mtime": "2026-05-01T18:47:22.875Z",
    "size": 2085,
    "path": "../../.output/public/data/languages/en.json.br"
  },
  "/_build/assets/index-s6Cs6YAe.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"25c5c-pp4RVwh1BwulHUPAkKYa9hb4QTo\"",
    "mtime": "2026-05-01T18:47:22.876Z",
    "size": 154716,
    "path": "../../.output/public/_build/assets/index-s6Cs6YAe.js.gz"
  },
  "/_build/assets/devicon-BwTrXM5G.ttf.br": {
    "type": "font/ttf",
    "encoding": "br",
    "etag": "\"8cfc2-FfNDvPo63iszzpwL46oeloozxwA\"",
    "mtime": "2026-05-01T18:47:25.087Z",
    "size": 577474,
    "path": "../../.output/public/_build/assets/devicon-BwTrXM5G.ttf.br"
  },
  "/_build/assets/devicon-BwTrXM5G.ttf.gz": {
    "type": "font/ttf",
    "encoding": "gzip",
    "etag": "\"9f957-OEUXjdkHP/AZqbES8Nt6de58uLU\"",
    "mtime": "2026-05-01T18:47:23.926Z",
    "size": 653655,
    "path": "../../.output/public/_build/assets/devicon-BwTrXM5G.ttf.gz"
  },
  "/_build/assets/index-s6Cs6YAe.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"91f9c-IKQAsfkxqFcbj/cR6tlxPBaE9KE\"",
    "mtime": "2026-05-01T18:47:22.711Z",
    "size": 597916,
    "path": "../../.output/public/_build/assets/index-s6Cs6YAe.js"
  },
  "/data/languages/en.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"a12-AQr7L/bQBe6zwJSXoHyTUTVUB64\"",
    "mtime": "2026-05-01T18:47:22.875Z",
    "size": 2578,
    "path": "../../.output/public/data/languages/en.json.gz"
  },
  "/data/languages/pt-br.json": {
    "type": "application/json",
    "encoding": null,
    "etag": "\"24d2-REVa9sJKGMG2mEYPSpU1B/m7Un0\"",
    "mtime": "2026-05-01T18:47:22.626Z",
    "size": 9426,
    "path": "../../.output/public/data/languages/pt-br.json"
  },
  "/data/languages/pt-br.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"9a1-1jWuQBbcHgsyfwHoVEwH1DAqvoA\"",
    "mtime": "2026-05-01T18:47:22.875Z",
    "size": 2465,
    "path": "../../.output/public/data/languages/pt-br.json.br"
  },
  "/_build/assets/devicon-BwTrXM5G.ttf": {
    "type": "font/ttf",
    "encoding": null,
    "etag": "\"12d594-QLLCGd5h5vxXD2lm47ERHhlQ7YE\"",
    "mtime": "2026-05-01T18:47:22.711Z",
    "size": 1234324,
    "path": "../../.output/public/_build/assets/devicon-BwTrXM5G.ttf"
  },
  "/_build/assets/devicon-D0iwJE0M.woff": {
    "type": "font/woff",
    "etag": "\"12d5e0-+k9k5/b7tqusPwZyqOnNnwL+Aqw\"",
    "mtime": "2026-05-01T18:47:22.711Z",
    "size": 1234400,
    "path": "../../.output/public/_build/assets/devicon-D0iwJE0M.woff"
  },
  "/data/languages/pt-br.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"ac9-RDDxyiS/msMj3bdSN4gRsIUFwQo\"",
    "mtime": "2026-05-01T18:47:22.875Z",
    "size": 2761,
    "path": "../../.output/public/data/languages/pt-br.json.gz"
  },
  "/dos/files/.gitkeep": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2026-05-01T14:32:18.486Z",
    "size": 0,
    "path": "../../.output/public/dos/files/.gitkeep"
  },
  "/dos/files/digger.jsdos": {
    "type": "text/plain; charset=utf-8",
    "encoding": null,
    "etag": "\"713a-mKZ7VpZRDpj2ITd+FxpRCoX4H6g\"",
    "mtime": "2026-05-01T18:47:22.626Z",
    "size": 28986,
    "path": "../../.output/public/dos/files/digger.jsdos"
  },
  "/dos/files/digger.jsdos.br": {
    "type": "text/plain; charset=utf-8",
    "encoding": "br",
    "etag": "\"6ec7-Zp6KSxb8tnsI7gNJLBCwZS33AYQ\"",
    "mtime": "2026-05-01T18:47:22.957Z",
    "size": 28359,
    "path": "../../.output/public/dos/files/digger.jsdos.br"
  },
  "/dos/files/digger.jsdos.gz": {
    "type": "text/plain; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"6f77-8K4rugXg8bfFWJzTwx1BJcwajAw\"",
    "mtime": "2026-05-01T18:47:22.957Z",
    "size": 28535,
    "path": "../../.output/public/dos/files/digger.jsdos.gz"
  },
  "/_build/assets/devicon-DBhpxM3S.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"1c5b14-3muxeNrnPy7YUeXUCm6d0JUjYMk\"",
    "mtime": "2026-05-01T18:47:30.902Z",
    "size": 1858324,
    "path": "../../.output/public/_build/assets/devicon-DBhpxM3S.svg.br"
  },
  "/dos/js-dos/emulators-ui-loader.png": {
    "type": "image/png",
    "etag": "\"e3e-jhsY+CUyGvQjta2ZSHYCnq6ERso\"",
    "mtime": "2026-05-01T18:47:22.612Z",
    "size": 3646,
    "path": "../../.output/public/dos/js-dos/emulators-ui-loader.png"
  },
  "/dos/js-dos/js-dos.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"9390-HHcXYBvRBOSY7kdKiJw95q1ni1Y\"",
    "mtime": "2026-05-01T18:47:22.612Z",
    "size": 37776,
    "path": "../../.output/public/dos/js-dos/js-dos.css"
  },
  "/dos/js-dos/js-dos.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1f69-espehF7fD0j+rbwxOIOfJmefTd8\"",
    "mtime": "2026-05-01T18:47:23.247Z",
    "size": 8041,
    "path": "../../.output/public/dos/js-dos/js-dos.css.br"
  },
  "/dos/js-dos/js-dos.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"24ad-ig2GXHjdTrrGuk2RKNhxlVpCkB4\"",
    "mtime": "2026-05-01T18:47:23.247Z",
    "size": 9389,
    "path": "../../.output/public/dos/js-dos/js-dos.css.gz"
  },
  "/dos/js-dos/js-dos.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1cfe7-DM/vb+CiNIRbCnoTpMFPHwySbO8\"",
    "mtime": "2026-05-01T18:47:23.904Z",
    "size": 118759,
    "path": "../../.output/public/dos/js-dos/js-dos.js.br"
  },
  "/dos/js-dos/js-dos.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"26e2a-Am20jIzZArxx+uAALQb4YC6f0XI\"",
    "mtime": "2026-05-01T18:47:23.894Z",
    "size": 159274,
    "path": "../../.output/public/dos/js-dos/js-dos.js.gz"
  },
  "/dos/js-dos/wdosbox.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"1ec0a-sdbAYwKl3+RPs4a37WerQYLszNk\"",
    "mtime": "2026-05-01T18:47:22.612Z",
    "size": 125962,
    "path": "../../.output/public/dos/js-dos/wdosbox.js"
  },
  "/_build/assets/devicon-DBhpxM3S.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"200376-rY3IYTSWkRYQs7z6p/0cavV2HkQ\"",
    "mtime": "2026-05-01T18:47:25.082Z",
    "size": 2098038,
    "path": "../../.output/public/_build/assets/devicon-DBhpxM3S.svg.gz"
  },
  "/dos/js-dos/wdosbox.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"714b-s1NOOboxedot9QSUm91WvEkOeOU\"",
    "mtime": "2026-05-01T18:47:23.660Z",
    "size": 29003,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.br"
  },
  "/dos/js-dos/wdosbox.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"819a-atb5t3ZzN9uOWqyV+swl7ESNjiM\"",
    "mtime": "2026-05-01T18:47:23.664Z",
    "size": 33178,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.gz"
  },
  "/dos/js-dos/wdosbox.js.symbols": {
    "type": "text/plain; charset=utf-8",
    "encoding": null,
    "etag": "\"3a7c1-HPfp6OFcRif11/E5oHXZJ1m+9Tw\"",
    "mtime": "2026-05-01T18:47:22.626Z",
    "size": 239553,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.symbols"
  },
  "/dos/js-dos/js-dos.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"88b59-jUIV2DJizVWNO4XqpyUkmPbosAI\"",
    "mtime": "2026-05-01T18:47:22.612Z",
    "size": 559961,
    "path": "../../.output/public/dos/js-dos/js-dos.js"
  },
  "/dos/js-dos/wdosbox.js.symbols.br": {
    "type": "text/plain; charset=utf-8",
    "encoding": "br",
    "etag": "\"723a-6PmYCH4jRsN7igSd1L4zNogc0rE\"",
    "mtime": "2026-05-01T18:47:23.868Z",
    "size": 29242,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.symbols.br"
  },
  "/dos/js-dos/wdosbox.js.symbols.gz": {
    "type": "text/plain; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"92ee-D+SH4kY8DOfwdIaX/utznt6tGo4\"",
    "mtime": "2026-05-01T18:47:23.868Z",
    "size": 37614,
    "path": "../../.output/public/dos/js-dos/wdosbox.js.symbols.gz"
  },
  "/dos/js-dos/wdosbox.wasm.br": {
    "type": "application/wasm",
    "encoding": "br",
    "etag": "\"618e2-3/r1TSyCxN9mxbNPYDPVkPA5cTQ\"",
    "mtime": "2026-05-01T18:47:25.842Z",
    "size": 399586,
    "path": "../../.output/public/dos/js-dos/wdosbox.wasm.br"
  },
  "/images/projects/adventure/p1.jpg": {
    "type": "image/jpeg",
    "etag": "\"42acb-bepxaxsEwaHUwmzr5xiUa0rEGKw\"",
    "mtime": "2026-05-01T18:47:22.607Z",
    "size": 273099,
    "path": "../../.output/public/images/projects/adventure/p1.jpg"
  },
  "/dos/js-dos/wdosbox.wasm.gz": {
    "type": "application/wasm",
    "encoding": "gzip",
    "etag": "\"7abfe-+CSl07PpWMe4dF/nM7vykhxPByk\"",
    "mtime": "2026-05-01T18:47:24.555Z",
    "size": 502782,
    "path": "../../.output/public/dos/js-dos/wdosbox.wasm.gz"
  },
  "/images/projects/adventure/p2.jpg": {
    "type": "image/jpeg",
    "etag": "\"44b32-9K3UBSZ8fMyukMzJPJ7avodJhlw\"",
    "mtime": "2026-05-01T18:47:22.626Z",
    "size": 281394,
    "path": "../../.output/public/images/projects/adventure/p2.jpg"
  },
  "/images/projects/animal-shelter/p2.jpg": {
    "type": "image/jpeg",
    "etag": "\"4dc5f-z/Rsf2aegwTuLZhfzhp0IElq/dQ\"",
    "mtime": "2026-05-01T18:47:22.607Z",
    "size": 318559,
    "path": "../../.output/public/images/projects/animal-shelter/p2.jpg"
  },
  "/dos/js-dos/js-dos.js.map": {
    "type": "application/json",
    "etag": "\"1c1f43-8EePJwNs7LUus35iC4CVXGbcSRs\"",
    "mtime": "2026-05-01T18:47:22.612Z",
    "size": 1843011,
    "path": "../../.output/public/dos/js-dos/js-dos.js.map"
  },
  "/images/projects/julia-course/IMG_20221018_174932.jpg": {
    "type": "image/jpeg",
    "etag": "\"62eea-rqPhg/0XA2a7+eIEZloFVmCqop8\"",
    "mtime": "2026-05-01T18:47:22.607Z",
    "size": 405226,
    "path": "../../.output/public/images/projects/julia-course/IMG_20221018_174932.jpg"
  },
  "/images/projects/laplacian-edge/ovo1.jpeg": {
    "type": "image/jpeg",
    "etag": "\"8079-ss8hOG6fFU+5xzWd+QqTIbKf82c\"",
    "mtime": "2026-05-01T18:47:22.658Z",
    "size": 32889,
    "path": "../../.output/public/images/projects/laplacian-edge/ovo1.jpeg"
  },
  "/images/projects/laplacian-edge/ovo2.jpeg": {
    "type": "image/jpeg",
    "etag": "\"3390-nbPBzQyX/GR7lPm+d5PqQp8ouCA\"",
    "mtime": "2026-05-01T18:47:22.607Z",
    "size": 13200,
    "path": "../../.output/public/images/projects/laplacian-edge/ovo2.jpeg"
  },
  "/images/projects/julia-course/IMG_20221019_183914.jpg": {
    "type": "image/jpeg",
    "etag": "\"6318a-sRgzm3yMhLEEmxAUFzJuimnPIE0\"",
    "mtime": "2026-05-01T18:47:22.658Z",
    "size": 405898,
    "path": "../../.output/public/images/projects/julia-course/IMG_20221019_183914.jpg"
  },
  "/images/projects/animal-shelter/p1.jpg": {
    "type": "image/jpeg",
    "etag": "\"96f8a-iVY3NYceNfom2eeBtQb5GGux/zs\"",
    "mtime": "2026-05-01T18:47:22.658Z",
    "size": 618378,
    "path": "../../.output/public/images/projects/animal-shelter/p1.jpg"
  },
  "/images/projects/laplacian-edge/ovo3.jpeg": {
    "type": "image/jpeg",
    "etag": "\"cd8a-q8oYFcYhqIKBdQLt2pvS0pwD0Mg\"",
    "mtime": "2026-05-01T18:47:22.658Z",
    "size": 52618,
    "path": "../../.output/public/images/projects/laplacian-edge/ovo3.jpeg"
  },
  "/images/projects/photography/p1.jpg": {
    "type": "image/jpeg",
    "etag": "\"38a0f-c73zM5JUqgYdjhkUn7y8Amnomfk\"",
    "mtime": "2026-05-01T18:47:22.612Z",
    "size": 231951,
    "path": "../../.output/public/images/projects/photography/p1.jpg"
  },
  "/images/projects/photography/p2.jpg": {
    "type": "image/jpeg",
    "etag": "\"6db39-t+wV8xn5xJs+dqrU/jUr92khl04\"",
    "mtime": "2026-05-01T18:47:22.658Z",
    "size": 449337,
    "path": "../../.output/public/images/projects/photography/p2.jpg"
  },
  "/dos/js-dos/wdosbox.wasm": {
    "type": "application/wasm",
    "encoding": null,
    "etag": "\"1650d5-/eSIYkIAgIEtn5MVjcOQSw2Yfug\"",
    "mtime": "2026-05-01T18:47:22.626Z",
    "size": 1462485,
    "path": "../../.output/public/dos/js-dos/wdosbox.wasm"
  },
  "/images/projects/santista/santista2.jpeg": {
    "type": "image/jpeg",
    "etag": "\"4a582-DTCW740hJ/tsMloSNNcCLIoFOAQ\"",
    "mtime": "2026-05-01T18:47:22.679Z",
    "size": 304514,
    "path": "../../.output/public/images/projects/santista/santista2.jpeg"
  },
  "/images/projects/genicam/genicam1.png": {
    "type": "image/png",
    "etag": "\"1357db-EUw22SI72VqfwIpSKz44qqH6RVo\"",
    "mtime": "2026-05-01T18:47:22.658Z",
    "size": 1267675,
    "path": "../../.output/public/images/projects/genicam/genicam1.png"
  },
  "/images/projects/genicam/genicam2.png": {
    "type": "image/png",
    "etag": "\"1cfbf4-CsId1Y60wV3ly/1CdURylLc1H0Q\"",
    "mtime": "2026-05-01T18:47:22.608Z",
    "size": 1899508,
    "path": "../../.output/public/images/projects/genicam/genicam2.png"
  },
  "/images/projects/genicam/genicam3.png": {
    "type": "image/png",
    "etag": "\"1ded45-TuhQqz7CiXPhDA75zQHWdH7aQfM\"",
    "mtime": "2026-05-01T18:47:22.658Z",
    "size": 1961285,
    "path": "../../.output/public/images/projects/genicam/genicam3.png"
  },
  "/_build/assets/devicon-DBhpxM3S.svg": {
    "type": "image/svg+xml",
    "encoding": null,
    "etag": "\"53e688-6audWvp5ZxP3TDZ16BRQ2F8JZec\"",
    "mtime": "2026-05-01T18:47:22.712Z",
    "size": 5498504,
    "path": "../../.output/public/_build/assets/devicon-DBhpxM3S.svg"
  },
  "/dos/js-dos/types/src/dom.d.ts": {
    "type": "video/mp2t",
    "etag": "\"2b0-PFL63ySFIrRIxEPpz6sQNYtTUoM\"",
    "mtime": "2026-05-01T18:47:22.708Z",
    "size": 688,
    "path": "../../.output/public/dos/js-dos/types/src/dom.d.ts"
  },
  "/dos/js-dos/types/src/hardware-transport-layer.d.ts": {
    "type": "video/mp2t",
    "etag": "\"300-Yy5ftkj3E3DSV5axsnmwPXOnSIE\"",
    "mtime": "2026-05-01T18:47:22.679Z",
    "size": 768,
    "path": "../../.output/public/dos/js-dos/types/src/hardware-transport-layer.d.ts"
  },
  "/dos/js-dos/types/src/icons.d.ts": {
    "type": "video/mp2t",
    "etag": "\"e9d-9kUnkzEIcyscmgfDv1Cy12OQmSc\"",
    "mtime": "2026-05-01T18:47:22.701Z",
    "size": 3741,
    "path": "../../.output/public/dos/js-dos/types/src/icons.d.ts"
  },
  "/dos/js-dos/types/src/player-app.d.ts": {
    "type": "video/mp2t",
    "etag": "\"84e-9QJiXOKMw0g8ojvzpDAaRLrA6sA\"",
    "mtime": "2026-05-01T18:47:22.701Z",
    "size": 2126,
    "path": "../../.output/public/dos/js-dos/types/src/player-app.d.ts"
  },
  "/dos/js-dos/types/src/player.d.ts": {
    "type": "video/mp2t",
    "etag": "\"48e-wVh33zUR6qN5hj7FzXWGtDuEQPw\"",
    "mtime": "2026-05-01T18:47:22.701Z",
    "size": 1166,
    "path": "../../.output/public/dos/js-dos/types/src/player.d.ts"
  },
  "/dos/js-dos/types/src/request.d.ts": {
    "type": "video/mp2t",
    "etag": "\"6a-PcNO+FOpms3wshqYgk2gOpoMZ/s\"",
    "mtime": "2026-05-01T18:47:22.701Z",
    "size": 106,
    "path": "../../.output/public/dos/js-dos/types/src/request.d.ts"
  },
  "/dos/js-dos/types/src/xhr.d.ts": {
    "type": "video/mp2t",
    "etag": "\"239-ioKyqCLZSuoID1j70IjjRQjDQrI\"",
    "mtime": "2026-05-01T18:47:22.701Z",
    "size": 569,
    "path": "../../.output/public/dos/js-dos/types/src/xhr.d.ts"
  },
  "/images/projects/sparkeyes/spark1.png": {
    "type": "image/png",
    "etag": "\"18f649-iBlThjLEqgwEmLPWlPC4QlT4dvk\"",
    "mtime": "2026-05-01T18:47:22.679Z",
    "size": 1635913,
    "path": "../../.output/public/images/projects/sparkeyes/spark1.png"
  },
  "/dos/js-dos/types/v7-services/src/personal.d.ts": {
    "type": "video/mp2t",
    "etag": "\"14e-TKNQtwJ2xnbH9+/Q21Kz4fbI0bo\"",
    "mtime": "2026-05-01T18:47:22.679Z",
    "size": 334,
    "path": "../../.output/public/dos/js-dos/types/v7-services/src/personal.d.ts"
  },
  "/dos/js-dos/types/src/components/action-bar.d.ts": {
    "type": "video/mp2t",
    "etag": "\"95-VOf8qZ9ePt8l8ufFdSlJgHNqqqQ\"",
    "mtime": "2026-05-01T18:47:22.701Z",
    "size": 149,
    "path": "../../.output/public/dos/js-dos/types/src/components/action-bar.d.ts"
  },
  "/dos/js-dos/types/src/components/action-hide.d.ts": {
    "type": "video/mp2t",
    "etag": "\"af-iH5Z/2DAv/76BeXUqz/my9+Xf64\"",
    "mtime": "2026-05-01T18:47:22.701Z",
    "size": 175,
    "path": "../../.output/public/dos/js-dos/types/src/components/action-hide.d.ts"
  },
  "/dos/js-dos/types/src/components/action-save-or-exit.d.ts": {
    "type": "video/mp2t",
    "etag": "\"b5-MtPGAUDHxY6rFaMiYTEnDTdPezo\"",
    "mtime": "2026-05-01T18:47:22.708Z",
    "size": 181,
    "path": "../../.output/public/dos/js-dos/types/src/components/action-save-or-exit.d.ts"
  },
  "/images/projects/usiminas/usiminas1.png": {
    "type": "image/png",
    "etag": "\"134c05-aK5mfEf7zJogvwdqslFRAxX5q3w\"",
    "mtime": "2026-05-01T18:47:22.612Z",
    "size": 1264645,
    "path": "../../.output/public/images/projects/usiminas/usiminas1.png"
  },
  "/dos/js-dos/types/src/components/client.d.ts": {
    "type": "video/mp2t",
    "etag": "\"df-peTt0KuJBzE54HhdyKmsHinEs9s\"",
    "mtime": "2026-05-01T18:47:22.701Z",
    "size": 223,
    "path": "../../.output/public/dos/js-dos/types/src/components/client.d.ts"
  },
  "/images/projects/usiminas/usminas2.png": {
    "type": "image/png",
    "etag": "\"151a4c-lYF0+qUb7JTaPSB7oyiilVvDA8w\"",
    "mtime": "2026-05-01T18:47:22.679Z",
    "size": 1382988,
    "path": "../../.output/public/images/projects/usiminas/usminas2.png"
  },
  "/dos/js-dos/types/src/components/controls.d.ts": {
    "type": "video/mp2t",
    "etag": "\"110-n/W6GtWUZC3rbadG6VBN8xtmti4\"",
    "mtime": "2026-05-01T18:47:22.701Z",
    "size": 272,
    "path": "../../.output/public/dos/js-dos/types/src/components/controls.d.ts"
  },
  "/images/projects/santista/santista1.png": {
    "type": "image/png",
    "etag": "\"25ec90-ii1O2TNbaqWKyGLU42p7Sq7NGtM\"",
    "mtime": "2026-05-01T18:47:22.612Z",
    "size": 2485392,
    "path": "../../.output/public/images/projects/santista/santista1.png"
  },
  "/images/projects/sparkeyes/spark2.png": {
    "type": "image/png",
    "etag": "\"1cc3c9-U3z7PmDAA7z0CD9llLvzLWTlTkg\"",
    "mtime": "2026-05-01T18:47:22.612Z",
    "size": 1885129,
    "path": "../../.output/public/images/projects/sparkeyes/spark2.png"
  },
  "/dos/js-dos/types/src/components/cpu-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"9d-tS598h6CGMe+CxJ+sS4V+sX2zRo\"",
    "mtime": "2026-05-01T18:47:22.701Z",
    "size": 157,
    "path": "../../.output/public/dos/js-dos/types/src/components/cpu-control.d.ts"
  },
  "/dos/js-dos/types/src/components/horizontal-slider.d.ts": {
    "type": "video/mp2t",
    "etag": "\"1f4-9VDnlq23FycSu3msxrSyM8peqkM\"",
    "mtime": "2026-05-01T18:47:22.708Z",
    "size": 500,
    "path": "../../.output/public/dos/js-dos/types/src/components/horizontal-slider.d.ts"
  },
  "/dos/js-dos/types/src/components/region.d.ts": {
    "type": "video/mp2t",
    "etag": "\"df-weJkEGh27ziqbiLBdj1oA6Ieevo\"",
    "mtime": "2026-05-01T18:47:22.708Z",
    "size": 223,
    "path": "../../.output/public/dos/js-dos/types/src/components/region.d.ts"
  },
  "/dos/js-dos/types/src/components/scale-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"119-8W1vDJ3kBcTmvbt0QJ0+sR07VSw\"",
    "mtime": "2026-05-01T18:47:22.708Z",
    "size": 281,
    "path": "../../.output/public/dos/js-dos/types/src/components/scale-control.d.ts"
  },
  "/images/projects/sparkeyes/spark3.png": {
    "type": "image/png",
    "etag": "\"221ee6-iYBYfZODalHbNJmIfpryqy4D2WQ\"",
    "mtime": "2026-05-01T18:47:22.659Z",
    "size": 2236134,
    "path": "../../.output/public/images/projects/sparkeyes/spark3.png"
  },
  "/dos/js-dos/types/src/components/sensitivity-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"125-aLj8c0nTcaz3BA2CR88LOymtOmg\"",
    "mtime": "2026-05-01T18:47:22.708Z",
    "size": 293,
    "path": "../../.output/public/dos/js-dos/types/src/components/sensitivity-control.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar.d.ts": {
    "type": "video/mp2t",
    "etag": "\"93-gC0SL3stv9ikRvCGl+QoMpx5hg8\"",
    "mtime": "2026-05-01T18:47:22.708Z",
    "size": 147,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar.d.ts"
  },
  "/dos/js-dos/types/src/components/sync-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"9c-JJ0GGLl5L+U42cy74ghlsLxvKM4\"",
    "mtime": "2026-05-01T18:47:22.708Z",
    "size": 156,
    "path": "../../.output/public/dos/js-dos/types/src/components/sync-control.d.ts"
  },
  "/dos/js-dos/types/src/components/vertical-slider.d.ts": {
    "type": "video/mp2t",
    "etag": "\"1d7-abnLFIBfBdhrx9jusMPXZSgi95k\"",
    "mtime": "2026-05-01T18:47:22.708Z",
    "size": 471,
    "path": "../../.output/public/dos/js-dos/types/src/components/vertical-slider.d.ts"
  },
  "/dos/js-dos/types/src/components/tip.d.ts": {
    "type": "video/mp2t",
    "etag": "\"90-k/2A23wIwvvw12SciX9tFZk7x+k\"",
    "mtime": "2026-05-01T18:47:22.708Z",
    "size": 144,
    "path": "../../.output/public/dos/js-dos/types/src/components/tip.d.ts"
  },
  "/dos/js-dos/types/src/components/volume-control.d.ts": {
    "type": "video/mp2t",
    "etag": "\"11b-0YevICNiQcVb8YTYGL1e1C69rqc\"",
    "mtime": "2026-05-01T18:47:22.708Z",
    "size": 283,
    "path": "../../.output/public/dos/js-dos/types/src/components/volume-control.d.ts"
  },
  "/dos/js-dos/types/src/backend/v7/latency.d.ts": {
    "type": "video/mp2t",
    "etag": "\"f5-lCzD2ZWr5bwof0LRU9OWrT5JBe8\"",
    "mtime": "2026-05-01T18:47:22.708Z",
    "size": 245,
    "path": "../../.output/public/dos/js-dos/types/src/backend/v7/latency.d.ts"
  },
  "/dos/js-dos/types/src/backend/v7/personal.d.ts": {
    "type": "video/mp2t",
    "etag": "\"e6-KrG0AvI/Gn7pFOgS6UacN8GKexs\"",
    "mtime": "2026-05-01T18:47:22.708Z",
    "size": 230,
    "path": "../../.output/public/dos/js-dos/types/src/backend/v7/personal.d.ts"
  },
  "/dos/js-dos/types/src/backend/v7/v7-config.d.ts": {
    "type": "video/mp2t",
    "etag": "\"2ae-3IcV+f+Mg/b9DioAyhsZEmtOvdc\"",
    "mtime": "2026-05-01T18:47:22.679Z",
    "size": 686,
    "path": "../../.output/public/dos/js-dos/types/src/backend/v7/v7-config.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/latency-info.d.ts": {
    "type": "video/mp2t",
    "etag": "\"109-eMwAlRuR60nxALpalD7df/+nbfA\"",
    "mtime": "2026-05-01T18:47:22.708Z",
    "size": 265,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/latency-info.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/main.d.ts": {
    "type": "video/mp2t",
    "etag": "\"93-wqsXz+bL9+yFodtN5zMCEq6I0ug\"",
    "mtime": "2026-05-01T18:47:22.708Z",
    "size": 147,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/main.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/networking.d.ts": {
    "type": "video/mp2t",
    "etag": "\"99-cSlzdDypYBn3ZXnUMXaIuLI1RsI\"",
    "mtime": "2026-05-01T18:47:22.708Z",
    "size": 153,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/networking.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/token/token-add-time.d.ts": {
    "type": "video/mp2t",
    "etag": "\"9c-5WESNrInkZZXzFv8D/uHdKr0aUk\"",
    "mtime": "2026-05-01T18:47:22.679Z",
    "size": 156,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/token/token-add-time.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/token/token-select.d.ts": {
    "type": "video/mp2t",
    "etag": "\"9b-7hnfnWeTg2aRA47KtRNeVRhy5hc\"",
    "mtime": "2026-05-01T18:47:22.708Z",
    "size": 155,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/token/token-select.d.ts"
  },
  "/dos/js-dos/types/src/components/sidebar/token/token.d.ts": {
    "type": "video/mp2t",
    "etag": "\"265-KmAJJGcEFeqFRQQJbXyPXfWqrtY\"",
    "mtime": "2026-05-01T18:47:22.708Z",
    "size": 613,
    "path": "../../.output/public/dos/js-dos/types/src/components/sidebar/token/token.d.ts"
  },
  "/dos/files/doom.jsdos": {
    "type": "text/plain; charset=utf-8",
    "encoding": null,
    "etag": "\"ce38d8-R5ULl/ZX8gS8nly1++g8RcdZIlM\"",
    "mtime": "2026-05-01T18:47:22.616Z",
    "size": 13514968,
    "path": "../../.output/public/dos/files/doom.jsdos"
  },
  "/dos/files/doom.jsdos.br": {
    "type": "text/plain; charset=utf-8",
    "encoding": "br",
    "etag": "\"cab44c-DRbrj1jhmyo79opfi2w58GB28+U\"",
    "mtime": "2026-05-01T18:47:44.134Z",
    "size": 13284428,
    "path": "../../.output/public/dos/files/doom.jsdos.br"
  },
  "/dos/files/doom.jsdos.gz": {
    "type": "text/plain; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"cd3169-8zzZ8h3NeOw+CdWOk6WHEtp+2TM\"",
    "mtime": "2026-05-01T18:47:25.283Z",
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
function Ne$1(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: _e$1(e), url: _$1(e) }, e.web.request;
}
function Me$1() {
  return Qe();
}
const U$1 = /* @__PURE__ */ Symbol("$HTTPEvent");
function je$1(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[U$1]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function u$1(e) {
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
const _$1 = u$1(getRequestURL$1), De$1 = u$1(getRequestIP), S$2 = u$1(setResponseStatus$1), q$1 = u$1(getResponseStatus), We$1 = u$1(getResponseStatusText), y$1 = u$1(getResponseHeaders), H = u$1(getResponseHeader$1), Be$1 = u$1(setResponseHeader$1), N = u$1(appendResponseHeader$1), ze$1 = u$1(parseCookies), Je$1 = u$1(getCookie), Xe = u$1(setCookie), h = u$1(setHeader), Ge$1 = u$1(getRequestWebStream), Ke$1 = u$1(removeResponseHeader$1), Ve$1 = u$1(Ne$1);
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
  for (const [t, s] of n.entries()) N(e, t, s);
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
    N(this.event, n, t);
  }
  getSetCookie() {
    const n = H(this.event, "Set-Cookie");
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
    S$2(e, n);
  }, get statusText() {
    return We$1(e);
  }, set statusText(n) {
    S$2(e, q$1(e), n);
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
let A;
const Ft = isServer ? () => getRequestEvent().routes : () => A || (A = j$1());
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
const yt = {}, E$1 = [AbortSignalPlugin, CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin], St = 64, D = Feature.RegExp;
function W(e) {
  const n = new TextEncoder().encode(e), t = n.length, s = t.toString(16), o = "00000000".substring(0, 8 - s.length) + s, a = new TextEncoder().encode(`;0x${o};`), i = new Uint8Array(12 + t);
  return i.set(a), i.set(n, 12), i;
}
function C$1(e, n) {
  return new ReadableStream({ start(t) {
    crossSerializeStream(n, { scopeId: e, plugins: E$1, onSerialize(s, o) {
      t.enqueue(W(o ? `(${getCrossReferenceHeader(e)},${s})` : s));
    }, onDone() {
      t.close();
    }, onError(s) {
      t.error(s);
    } });
  } });
}
function wt(e) {
  return new ReadableStream({ start(n) {
    toCrossJSONStream(e, { disabledFeatures: D, depthLimit: St, plugins: E$1, onParse(t) {
      n.enqueue(W(JSON.stringify(t)));
    }, onDone() {
      n.close();
    }, onError(t) {
      n.error(t);
    } });
  } });
}
async function P$1(e) {
  return fromJSON(JSON.parse(e), { plugins: E$1, disabledFeatures: D });
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
    if (a && o && (r = await L(n, r)), r instanceof Response) {
      if (r.headers && r.headers.has("X-Content-Raw")) return r;
      o && (r.headers && k$1(e, r.headers), r.status && (r.status < 300 || r.status >= 400) && S$2(e, r.status), r.customBody ? r = await r.customBody() : r.body == null && (r = null));
    }
    if (!o) return F(r, t, f);
    return h(e, "x-serialized", "true"), h(e, "content-type", "text/javascript"), C$1(o, r);
    return wt(r);
  } catch (r) {
    if (r instanceof Response) a && o && (r = await L(n, r)), r.headers && k$1(e, r.headers), r.status && (!o || r.status < 300 || r.status >= 400) && S$2(e, r.status), r.customBody ? r = r.customBody() : r.body == null && (r = null), h(e, "X-Error", "true");
    else if (o) {
      const d = r instanceof Error ? r.message : typeof r == "string" ? r : "true";
      h(e, "X-Error", d.replace(/[\r\n]+/g, ""));
    } else r = F(r, t, f, true);
    return o ? (h(e, "x-serialized", "true"), h(e, "content-type", "text/javascript"), C$1(o, r)) : r;
  }
}
function F(e, n, t, s) {
  const o = new URL(n.url), a = e instanceof Error;
  let i = 302, c;
  return e instanceof Response ? (c = new Headers(e.headers), e.headers.has("Location") && (c.set("Location", new URL(e.headers.get("Location"), o.origin + "").toString()), i = Rt(e))) : c = new Headers({ Location: new URL(n.headers.get("referer")).toString() }), e && c.append("Set-Cookie", `flash=${encodeURIComponent(JSON.stringify({ url: o.pathname + o.search, result: a ? e.message : e, thrown: s, error: a, input: [...t.slice(0, -1), [...t[t.length - 1].entries()]] }))}; Secure; HttpOnly;`), new Response(null, { status: i, headers: c });
}
let v$1;
function $t(e) {
  var _a;
  const n = new Headers(e.request.headers), t = ze$1(e.nativeEvent), s = e.response.headers.getSetCookie();
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
    await gt(o), v$1 || (v$1 = (await import('../build/app-EaL-ZfXX.mjs')).default), o.router.dataOnly = t || true, o.router.previousUrl = e.request.headers.get("referer");
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

const E = "portfolio-theme", C = [{ id: "ai", label: "IA" }, { id: "blockchain", label: "Blockchain" }, { id: "software", label: "Software" }, { id: "web", label: "Web" }];
function I() {
  return "ai";
}
const [s, M] = createSignal(I());
createEffect(() => {
  typeof document < "u" && (document.documentElement.setAttribute("data-theme", s()), localStorage.setItem(E, s()));
});
var o = ((e) => (e.PtBr = "pt-br", e.En = "en", e))(o || {});
function S$1() {
  return o.PtBr;
}
const [c, v] = createSignal(S$1()), [l, u] = createSignal(void 0), [j, P] = createSignal(void 0);
function T(e) {
  v(e);
}
const d = async (e) => {
  const t = await fetch(`/data/languages/${e}.json`);
  if (!t.ok) throw new Error("Failed to load messages");
  return t.json();
}, x = async () => {
  const e = await fetch("/data/portfolio_shared_data.json");
  if (!e.ok) throw new Error("Failed to load shared data");
  return e.json();
};
function y(e) {
  const t = l();
  if (!t) return e;
  const h = e.split(".");
  let n = t;
  for (const a of h) if (n && typeof n == "object" && a in n) n = n[a];
  else return e;
  return typeof n == "string" ? n : e;
}
const f = createContext();
function _() {
  const e = useContext(f);
  if (!e) throw new Error("useI18n must be used within I18nProvider");
  return e;
}
function k(e) {
  onMount(() => {
    x().then(P).catch(console.error), d(c()).then(u).catch(console.error);
  });
  const t = { language: c, setLanguage: T, t: y, messages: l, sharedData: j };
  return createComponent$1(f.Provider, { value: t, get children() {
    return e.children;
  } });
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
function Mt(e) {
  let t;
  const n = He(e), r = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(n, { ...r, body: e.node.req.body }) : new Request(n, { ...r, get body() {
    return t || (t = Xt(e), t);
  } });
}
function jt(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: Mt(e), url: He(e) }, e.web.request;
}
function Ut() {
  return en();
}
const qe = /* @__PURE__ */ Symbol("$HTTPEvent");
function Bt(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[qe]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function S(e) {
  return function(...t) {
    var _a;
    let n = t[0];
    if (Bt(n)) t[0] = n instanceof H3Event || n.__is_event__ ? n : n[qe];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (n = Ut(), !n) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      t.unshift(n);
    }
    return e(...t);
  };
}
const He = S(getRequestURL$1), Wt = S(getRequestIP), te = S(setResponseStatus$1), me = S(getResponseStatus), Dt = S(getResponseStatusText), J = S(getResponseHeaders), ge = S(getResponseHeader$1), Kt = S(setResponseHeader$1), Gt = S(appendResponseHeader$1), ye = S(sendRedirect$1), Jt = S(getCookie), zt = S(setCookie), Vt = S(setHeader), Xt = S(getRequestWebStream), Yt = S(removeResponseHeader$1), Qt = S(jt);
function Zt() {
  var _a;
  return getContext("nitro-app", { asyncContext: !!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function en() {
  return Zt().use().event;
}
const Oe = [{ page: true, $component: { src: "src/routes/doom.tsx?pick=default&pick=$css", build: () => import('../build/doom2.mjs'), import: () => import('../build/doom2.mjs') }, path: "/doom", filePath: "/home/gus/thecodergus.github.io/src/routes/doom.tsx" }, { page: true, $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => import('../build/index2.mjs'), import: () => import('../build/index2.mjs') }, path: "/", filePath: "/home/gus/thecodergus.github.io/src/routes/index.tsx" }], tn = nn(Oe.filter((e) => e.page));
function nn(e) {
  function t(n, r, o, s) {
    const a = Object.values(n).find((i) => o.startsWith(i.id + "/"));
    return a ? (t(a.children || (a.children = []), r, o.slice(a.id.length)), n) : (n.push({ ...r, id: o, path: o.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/") }), n);
  }
  return e.sort((n, r) => n.path.length - r.path.length).reduce((n, r) => t(n, r, r.path, r.path), []);
}
function rn(e, t) {
  const n = sn.lookup(e);
  if (n && n.route) {
    const r = n.route, o = t === "HEAD" ? r.$HEAD || r.$GET : r[`$${t}`];
    if (o === void 0) return;
    const s = r.page === true && r.$component !== void 0;
    return { handler: o, params: n.params, isPage: s };
  }
}
function on(e) {
  return e.$HEAD || e.$GET || e.$POST || e.$PUT || e.$PATCH || e.$DELETE;
}
const sn = createRouter({ routes: Oe.reduce((e, t) => {
  if (!on(t)) return e;
  let n = t.path.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/").replace(/\*([^/]*)/g, (r, o) => `**:${o}`).split("/").map((r) => r.startsWith(":") || r.startsWith("*") ? r : encodeURIComponent(r)).join("/");
  if (/:[^/]*\?/g.test(n)) throw new Error(`Optional parameters are not supported in API routes: ${n}`);
  if (e[n]) throw new Error(`Duplicate API routes for "${n}" found at "${e[n].route.path}" and "${t.path}"`);
  return e[n] = { route: t }, e;
}, {}) }), Y = "solidFetchEvent";
function an(e) {
  return { request: Qt(e), response: un(e), clientAddress: Wt(e), locals: {}, nativeEvent: e };
}
function cn(e) {
  if (!e.context[Y]) {
    const t = an(e);
    e.context[Y] = t;
  }
  return e.context[Y];
}
class ln {
  constructor(t) {
    __publicField(this, "event");
    this.event = t;
  }
  get(t) {
    const n = ge(this.event, t);
    return Array.isArray(n) ? n.join(", ") : n || null;
  }
  has(t) {
    return this.get(t) !== null;
  }
  set(t, n) {
    return Kt(this.event, t, n);
  }
  delete(t) {
    return Yt(this.event, t);
  }
  append(t, n) {
    Gt(this.event, t, n);
  }
  getSetCookie() {
    const t = ge(this.event, "Set-Cookie");
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
function un(e) {
  return { get status() {
    return me(e);
  }, set status(t) {
    te(e, t);
  }, get statusText() {
    return Dt(e);
  }, set statusText(t) {
    te(e, me(e), t);
  }, headers: new ln(e) };
}
var hn = " ";
const fn = { style: (e) => ssrElement("style", e.attrs, () => e.children, true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(hn), true) : null, noscript: (e) => ssrElement("noscript", e.attrs, () => escape(e.children), true) };
function ne(e, t) {
  let { tag: n, attrs: { key: r, ...o } = { key: void 0 }, children: s } = e;
  return fn[n]({ attrs: { ...o, nonce: t }, key: r, children: s });
}
function pn(e, t, n, r = "default") {
  return lazy(async () => {
    var _a;
    {
      const s = (await e.import())[r], i = (await ((_a = t.inputs) == null ? void 0 : _a[e.src].assets())).filter((l) => l.tag === "style" || l.attrs.rel === "stylesheet");
      return { default: (l) => [...i.map((u) => ne(u)), createComponent(s, l)] };
    }
  });
}
function Ie() {
  function e(n) {
    return { ...n, ...n.$$route ? n.$$route.require().route : void 0, info: { ...n.$$route ? n.$$route.require().route.info : {}, filesystem: true }, component: n.$component && pn(n.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: n.children ? n.children.map(e) : void 0 };
  }
  return tn.map(e);
}
let we;
const mn = isServer ? () => getRequestEvent().routes : () => we || (we = Ie());
function gn(e) {
  const t = Jt(e.nativeEvent, "flash");
  if (t) try {
    let n = JSON.parse(t);
    if (!n || !n.result) return;
    const r = [...n.input.slice(0, -1), new Map(n.input[n.input.length - 1])], o = n.error ? new Error(n.result) : n.result;
    return { input: r, url: n.url, pending: false, result: n.thrown ? void 0 : o, error: n.thrown ? o : void 0 };
  } catch (n) {
    console.error(n);
  } finally {
    zt(e.nativeEvent, "flash", "", { maxAge: 0 });
  }
}
async function yn(e) {
  const t = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, e.response.headers.set("Content-Type", "text/html"), Object.assign(e, { manifest: await t.json(), assets: [...await t.inputs[t.handler].assets()], router: { submission: gn(e) }, routes: Ie(), complete: false, $islands: /* @__PURE__ */ new Set() });
}
const wn = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function re(e) {
  return e.status && wn.has(e.status) ? e.status : 302;
}
function vn(e, t, n = {}, r) {
  return eventHandler$1({ handler: (o) => {
    const s = cn(o);
    return provideRequestEvent(s, async () => {
      const a = rn(new URL(s.request.url).pathname, s.request.method);
      if (a) {
        const h = await a.handler.import(), y = s.request.method === "HEAD" ? h.HEAD || h.GET : h[s.request.method];
        s.params = a.params || {}, sharedConfig.context = { event: s };
        const d = await y(s);
        if (d !== void 0) return d;
        if (s.request.method !== "GET") throw new Error(`API handler for ${s.request.method} "${s.request.url}" did not return a response.`);
        if (!a.isPage) return;
      }
      const i = await t(s), c = typeof n == "function" ? await n(i) : { ...n }, l = c.mode || "stream";
      if (c.nonce && (i.nonce = c.nonce), l === "sync") {
        const h = renderToString(() => (sharedConfig.context.event = i, e(i)), c);
        if (i.complete = true, i.response && i.response.headers.get("Location")) {
          const y = re(i.response);
          return ye(o, i.response.headers.get("Location"), y);
        }
        return h;
      }
      if (c.onCompleteAll) {
        const h = c.onCompleteAll;
        c.onCompleteAll = (y) => {
          be(i)(y), h(y);
        };
      } else c.onCompleteAll = be(i);
      if (c.onCompleteShell) {
        const h = c.onCompleteShell;
        c.onCompleteShell = (y) => {
          ve(i, o)(), h(y);
        };
      } else c.onCompleteShell = ve(i, o);
      const u = renderToStream(() => (sharedConfig.context.event = i, e(i)), c);
      if (i.response && i.response.headers.get("Location")) {
        const h = re(i.response);
        return ye(o, i.response.headers.get("Location"), h);
      }
      if (l === "async") return u;
      const { writable: v, readable: g } = new TransformStream();
      return u.pipeTo(v), g;
    });
  } });
}
function ve(e, t) {
  return () => {
    if (e.response && e.response.headers.get("Location")) {
      const n = re(e.response);
      te(t, n), Vt(t, "Location", e.response.headers.get("Location"));
    }
  };
}
function be(e) {
  return ({ write: t }) => {
    e.complete = true;
    const n = e.response && e.response.headers.get("Location");
    n && t(`<script>window.location="${n}"<\/script>`);
  };
}
function bn(e, t, n) {
  return vn(e, yn, t);
}
const _e = createContext(), Ne = ["title", "meta"], oe = [], se = ["name", "http-equiv", "content", "charset", "media"].concat(["property"]), V = (e, t) => {
  const n = Object.fromEntries(Object.entries(e.props).filter(([r]) => t.includes(r)).sort());
  return (Object.hasOwn(n, "name") || Object.hasOwn(n, "property")) && (n.name = n.name || n.property, delete n.property), e.tag + JSON.stringify(n);
};
function Rn() {
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
    if (Ne.indexOf(n.tag) !== -1) {
      const s = n.tag === "title" ? oe : se, a = V(n, s);
      e.has(a) || e.set(a, []);
      let i = e.get(a), c = i.length;
      i = [...i, n], e.set(a, i);
      let l = t(n);
      n.ref = l, spread(l, n.props);
      let u = null;
      for (var r = c - 1; r >= 0; r--) if (i[r] != null) {
        u = i[r];
        break;
      }
      return l.parentNode != document.head && document.head.appendChild(l), u && u.ref && u.ref.parentNode && document.head.removeChild(u.ref), c;
    }
    let o = t(n);
    return n.ref = o, spread(o, n.props), o.parentNode != document.head && document.head.appendChild(o), -1;
  }, removeTag(n, r) {
    const o = n.tag === "title" ? oe : se, s = V(n, o);
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
function Sn() {
  const e = [];
  return useAssets(() => ssr(An(e))), { addTag(t) {
    if (Ne.indexOf(t.tag) !== -1) {
      const n = t.tag === "title" ? oe : se, r = V(t, n), o = e.findIndex((s) => s.tag === t.tag && V(s, n) === r);
      o !== -1 && e.splice(o, 1);
    }
    return e.push(t), e.length;
  }, removeTag(t, n) {
  } };
}
const En = (e) => {
  const t = isServer ? Sn() : Rn();
  return createComponent$1(_e.Provider, { value: t, get children() {
    return e.children;
  } });
}, Fe = (e, t, n) => ($n({ tag: e, props: t, setting: n, id: createUniqueId(), get name() {
  return t.name || t.property;
} }), null);
function $n(e) {
  const t = useContext(_e);
  if (!t) throw new Error("<MetaProvider /> should be in the tree");
  createRenderEffect(() => {
    const n = t.addTag(e);
    onCleanup(() => t.removeTag(e, n));
  });
}
function An(e) {
  return e.map((t) => {
    var _a, _b;
    const r = Object.keys(t.props).map((s) => s === "children" ? "" : ` ${s}="${escape(t.props[s], true)}"`).join("");
    let o = t.props.children;
    return Array.isArray(o) && (o = o.join("")), ((_a = t.setting) == null ? void 0 : _a.close) ? `<${t.tag} data-sm="${t.id}"${r}>${((_b = t.setting) == null ? void 0 : _b.escape) ? escape(o) : o || ""}</${t.tag}>` : `<${t.tag} data-sm="${t.id}"${r}/>`;
  }).join("");
}
const Tn = (e) => Fe("title", e, { escape: true, close: true }), Q = (e) => Fe("link", e);
function Me() {
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
let ae;
function le() {
  (!window.history.state || window.history.state._depth == null) && window.history.replaceState({ ...window.history.state, _depth: window.history.length - 1 }, ""), ae = window.history.state._depth;
}
isServer || le();
function Pn(e) {
  return { ...e, _depth: window.history.state && window.history.state._depth };
}
function Cn(e, t) {
  let n = false;
  return () => {
    const r = ae;
    le();
    const o = r == null ? null : ae - r;
    if (n) {
      n = false;
      return;
    }
    o && t(o) ? (n = true, window.history.go(-o)) : e();
  };
}
const xn = /^(?:[a-z0-9]+:)?\/\//i, Ln = /^\/+|(\/)\/+$/g, je = "http://sr";
function U(e, t = false) {
  const n = e.replace(Ln, "$1");
  return n ? t || /^[?#]/.test(n) ? n : "/" + n : "";
}
function z(e, t, n) {
  if (xn.test(t)) return;
  const r = U(e), o = n && U(n);
  let s = "";
  return !o || t.startsWith("/") ? s = r : o.toLowerCase().indexOf(r.toLowerCase()) !== 0 ? s = r + o : s = o, (s || "/") + U(t, !s);
}
function kn(e, t) {
  return U(e).replace(/\/*(\*.*)?$/g, "") + U(t);
}
function Ue(e) {
  const t = {};
  return e.searchParams.forEach((n, r) => {
    r in t ? Array.isArray(t[r]) ? t[r].push(n) : t[r] = [t[r], n] : t[r] = n;
  }), t;
}
function qn(e, t, n) {
  const [r, o] = e.split("/*", 2), s = r.split("/").filter(Boolean), a = s.length;
  return (i) => {
    const c = i.split("/").filter(Boolean), l = c.length - a;
    if (l < 0 || l > 0 && o === void 0 && !t) return null;
    const u = { path: a ? "" : "/", params: {} }, v = (g) => n === void 0 ? void 0 : n[g];
    for (let g = 0; g < a; g++) {
      const h = s[g], y = h[0] === ":", d = y ? c[g] : c[g].toLowerCase(), f = y ? h.slice(1) : h.toLowerCase();
      if (y && Z(d, v(f))) u.params[f] = d;
      else if (y || !Z(d, f)) return null;
      u.path += `/${d}`;
    }
    if (o) {
      const g = l ? c.slice(-l).join("/") : "";
      if (Z(g, v(o))) u.params[o] = g;
      else return null;
    }
    return u;
  };
}
function Z(e, t) {
  const n = (r) => r === e;
  return t === void 0 ? true : typeof t == "string" ? n(t) : typeof t == "function" ? t(e) : Array.isArray(t) ? t.some(n) : t instanceof RegExp ? t.test(e) : false;
}
function Hn(e) {
  const [t, n] = e.pattern.split("/*", 2), r = t.split("/").filter(Boolean);
  return r.reduce((o, s) => o + (s.startsWith(":") ? 2 : 3), r.length - (n === void 0 ? 0 : 1));
}
function Be(e) {
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
function We(e) {
  let t = /(\/?\:[^\/]+)\?/.exec(e);
  if (!t) return [e];
  let n = e.slice(0, t.index), r = e.slice(t.index + t[0].length);
  const o = [n, n += t[1]];
  for (; t = /^(\/\:[^\/]+)\?/.exec(r); ) o.push(n += t[1]), r = r.slice(t[0].length);
  return We(r).reduce((s, a) => [...s, ...o.map((i) => i + a)], []);
}
const On = 100, In = createContext(), De = createContext();
function _n(e, t = "") {
  const { component: n, preload: r, load: o, children: s, info: a } = e, i = !s || Array.isArray(s) && !s.length, c = { key: e, component: n, preload: r || o, info: a };
  return Ke(e.path).reduce((l, u) => {
    for (const v of We(u)) {
      const g = kn(t, v);
      let h = i ? g : g.split("/*", 1)[0];
      h = h.split("/").map((y) => y.startsWith(":") || y.startsWith("*") ? y : encodeURIComponent(y)).join("/"), l.push({ ...c, originalPath: u, pattern: h, matcher: qn(h, !i, e.matchFilters) });
    }
    return l;
  }, []);
}
function Nn(e, t = 0) {
  return { routes: e, score: Hn(e[e.length - 1]) * 1e4 - t, matcher(n) {
    const r = [];
    for (let o = e.length - 1; o >= 0; o--) {
      const s = e[o], a = s.matcher(n);
      if (!a) return null;
      r.unshift({ ...a, route: s });
    }
    return r;
  } };
}
function Ke(e) {
  return Array.isArray(e) ? e : [e];
}
function Ge(e, t = "", n = [], r = []) {
  const o = Ke(e);
  for (let s = 0, a = o.length; s < a; s++) {
    const i = o[s];
    if (i && typeof i == "object") {
      i.hasOwnProperty("path") || (i.path = "");
      const c = _n(i, t);
      for (const l of c) {
        n.push(l);
        const u = Array.isArray(i.children) && i.children.length === 0;
        if (i.children && !u) Ge(i.children, l.pattern, n, r);
        else {
          const v = Nn([...n], r.length);
          r.push(v);
        }
        n.pop();
      }
    }
  }
  return n.length ? r : r.sort((s, a) => a.score - s.score);
}
function B(e, t) {
  for (let n = 0, r = e.length; n < r; n++) {
    const o = e[n].matcher(t);
    if (o) return o;
  }
  return [];
}
function Fn(e, t, n) {
  const r = new URL(je), o = createMemo((u) => {
    const v = e();
    try {
      return new URL(v, r);
    } catch {
      return console.error(`Invalid path ${v}`), u;
    }
  }, r, { equals: (u, v) => u.href === v.href }), s = createMemo(() => o().pathname), a = createMemo(() => o().search, true), i = createMemo(() => o().hash), c = () => "", l = on$1(a, () => Ue(o()));
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
  }, query: n ? n(l) : Be(l) };
}
let q;
function Mn() {
  return q;
}
function jn(e, t, n, r = {}) {
  const { signal: [o, s], utils: a = {} } = e, i = a.parsePath || ((p) => p), c = a.renderPath || ((p) => p), l = a.beforeLeave || Me(), u = z("", r.base || "");
  if (u === void 0) throw new Error(`${u} is not a valid base path`);
  u && !o().value && s({ value: u, replace: true, scroll: false });
  const [v, g] = createSignal(false);
  let h;
  const y = (p, w) => {
    w.value === d() && w.state === R() || (h === void 0 && g(true), q = p, h = w, startTransition(() => {
      h === w && (f(h.value), b(h.state), resetErrorBoundaries(), isServer || k[1]((E) => E.filter((I) => I.pending)));
    }).finally(() => {
      h === w && batch(() => {
        q = void 0, p === "navigate" && Ze(h), g(false), h = void 0;
      });
    }));
  }, [d, f] = createSignal(o().value), [R, b] = createSignal(o().state), L = Fn(d, R, a.queryWrapper), T = [], k = createSignal(isServer ? tt() : []), M = createMemo(() => typeof r.transformUrl == "function" ? B(t(), r.transformUrl(L.pathname)) : B(t(), L.pathname)), ue = () => {
    const p = M(), w = {};
    for (let E = 0; E < p.length; E++) Object.assign(w, p[E].params);
    return w;
  }, Xe = a.paramsWrapper ? a.paramsWrapper(ue, t) : Be(ue), de = { pattern: u, path: () => u, outlet: () => null, resolvePath(p) {
    return z(u, p);
  } };
  return createRenderEffect(on$1(o, (p) => y("native", p), { defer: true })), { base: de, location: L, params: Xe, isRouting: v, renderPath: c, parsePath: i, navigatorFactory: Qe, matches: M, beforeLeave: l, preloadRoute: et, singleFlight: r.singleFlight === void 0 ? true : r.singleFlight, submissions: k };
  function Ye(p, w, E) {
    untrack(() => {
      if (typeof w == "number") {
        w && (a.go ? a.go(w) : console.warn("Router integration does not support relative routing"));
        return;
      }
      const I = !w || w[0] === "?", { replace: W, resolve: _, scroll: D, state: N } = { replace: false, resolve: !I, scroll: true, ...E }, F = _ ? p.resolvePath(w) : z(I && L.pathname || "", w);
      if (F === void 0) throw new Error(`Path '${w}' is not a routable path`);
      if (T.length >= On) throw new Error("Too many redirects");
      const he = d();
      if (F !== he || N !== R()) if (isServer) {
        const fe = getRequestEvent();
        fe && (fe.response = { status: 302, headers: new Headers({ Location: F }) }), s({ value: F, replace: W, scroll: D, state: N });
      } else l.confirm(F, E) && (T.push({ value: he, replace: W, scroll: D, state: R() }), y("navigate", { value: F, state: N }));
    });
  }
  function Qe(p) {
    return p = p || useContext(De) || de, (w, E) => Ye(p, w, E);
  }
  function Ze(p) {
    const w = T[0];
    w && (s({ ...p, replace: w.replace, scroll: w.scroll }), T.length = 0);
  }
  function et(p, w) {
    const E = B(t(), p.pathname), I = q;
    q = "preload";
    for (let W in E) {
      const { route: _, params: D } = E[W];
      _.component && _.component.preload && _.component.preload();
      const { preload: N } = _;
      w && N && runWithOwner(n(), () => N({ params: D, location: { pathname: p.pathname, search: p.search, hash: p.hash, query: Ue(p), state: null, key: "" }, intent: "preload" }));
    }
    q = I;
  }
  function tt() {
    const p = getRequestEvent();
    return p && p.router && p.router.submission ? [p.router.submission] : [];
  }
}
function Un(e, t, n, r) {
  const { base: o, location: s, params: a } = e, { pattern: i, component: c, preload: l } = r().route, u = createMemo(() => r().path);
  c && c.preload && c.preload();
  const v = l ? l({ params: a, location: s, intent: q || "initial" }) : void 0;
  return { parent: t, pattern: i, path: u, outlet: () => c ? createComponent(c, { params: a, location: s, data: v, get children() {
    return n();
  } }) : n(), resolvePath(h) {
    return z(o.path(), h, u());
  } };
}
const Je = (e) => (t) => {
  const { base: n } = t, r = children(() => t.children), o = createMemo(() => Ge(r(), t.base || ""));
  let s;
  const a = jn(e, o, () => s, { base: n, singleFlight: t.singleFlight, transformUrl: t.transformUrl });
  return e.create && e.create(a), createComponent$1(In.Provider, { value: a, get children() {
    return createComponent$1(Bn, { routerState: a, get root() {
      return t.root;
    }, get preload() {
      return t.rootPreload || t.rootLoad;
    }, get children() {
      return [(s = getOwner()) && null, createComponent$1(Wn, { routerState: a, get branches() {
        return o();
      } })];
    } });
  } });
};
function Bn(e) {
  const t = e.routerState.location, n = e.routerState.params, r = createMemo(() => e.preload && untrack(() => {
    e.preload({ params: n, location: t, intent: Mn() || "initial" });
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
function Wn(e) {
  if (isServer) {
    const o = getRequestEvent();
    if (o && o.router && o.router.dataOnly) {
      Dn(o, e.routerState, e.branches);
      return;
    }
    o && ((o.router || (o.router = {})).matches || (o.router.matches = e.routerState.matches().map(({ route: s, path: a, params: i }) => ({ path: s.originalPath, pattern: s.pattern, match: a, params: i, info: s.info }))));
  }
  const t = [];
  let n;
  const r = createMemo(on$1(e.routerState.matches, (o, s, a) => {
    let i = s && o.length === s.length;
    const c = [];
    for (let l = 0, u = o.length; l < u; l++) {
      const v = s && s[l], g = o[l];
      a && v && g.route.key === v.route.key ? c[l] = a[l] : (i = false, t[l] && t[l](), createRoot((h) => {
        t[l] = h, c[l] = Un(e.routerState, c[l - 1] || e.routerState.base, Re(() => r()[l + 1]), () => {
          var _a;
          const y = e.routerState.matches();
          return (_a = y[l]) != null ? _a : y[0];
        });
      }));
    }
    return t.splice(o.length).forEach((l) => l()), a && i ? a : (n = c[0], c);
  }));
  return Re(() => r() && n)();
}
const Re = (e) => () => createComponent$1(Show, { get when() {
  return e();
}, keyed: true, children: (t) => createComponent$1(De.Provider, { value: t, get children() {
  return t.outlet();
} }) });
function Dn(e, t, n) {
  const r = new URL(e.request.url), o = B(n, new URL(e.router.previousUrl || e.request.url).pathname), s = B(n, r.pathname);
  for (let a = 0; a < s.length; a++) {
    (!o[a] || s[a].route !== o[a].route) && (e.router.dataOnly = true);
    const { route: i, params: c } = s[a];
    i.preload && i.preload({ params: c, location: t.location, intent: "preload" });
  }
}
function Kn([e, t], n, r) {
  return [e, r ? (o) => t(r(o)) : t];
}
function Gn(e) {
  let t = false;
  const n = (o) => typeof o == "string" ? { value: o } : o, r = Kn(createSignal(n(e.get()), { equals: (o, s) => o.value === s.value && o.state === s.state }), void 0, (o) => (!t && e.set(o), sharedConfig.registry && !sharedConfig.done && (sharedConfig.done = true), o));
  return e.init && onCleanup(e.init((o = e.get()) => {
    t = true, r[1](n(o)), t = false;
  })), Je({ signal: r, create: e.create, utils: e.utils });
}
function Jn(e, t, n) {
  return e.addEventListener(t, n), () => e.removeEventListener(t, n);
}
function zn(e, t) {
  const n = e && document.getElementById(e);
  n ? n.scrollIntoView() : t && window.scrollTo(0, 0);
}
function Vn(e) {
  const t = new URL(e);
  return t.pathname + t.search;
}
function Xn(e) {
  let t;
  const n = { value: e.url || (t = getRequestEvent()) && Vn(t.request.url) || "" };
  return Je({ signal: [() => n, (r) => Object.assign(n, r)] })(e);
}
const Yn = /* @__PURE__ */ new Map();
function Qn({ preload: e = true, explicitLinks: t = false, actionBase: n = "/_server", transformUrl: r } = {}) {
  return (o) => {
    const s = o.base.path(), a = o.navigatorFactory(o.base);
    let i, c;
    function l(d) {
      return d.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function u(d) {
      if (d.defaultPrevented || d.button !== 0 || d.metaKey || d.altKey || d.ctrlKey || d.shiftKey) return;
      const f = d.composedPath().find((M) => M instanceof Node && M.nodeName.toUpperCase() === "A");
      if (!f || t && !f.hasAttribute("link")) return;
      const R = l(f), b = R ? f.href.baseVal : f.href;
      if ((R ? f.target.baseVal : f.target) || !b && !f.hasAttribute("state")) return;
      const T = (f.getAttribute("rel") || "").split(/\s+/);
      if (f.hasAttribute("download") || T && T.includes("external")) return;
      const k = R ? new URL(b, document.baseURI) : new URL(b);
      if (!(k.origin !== window.location.origin || s && k.pathname && !k.pathname.toLowerCase().startsWith(s.toLowerCase()))) return [f, k];
    }
    function v(d) {
      const f = u(d);
      if (!f) return;
      const [R, b] = f, L = o.parsePath(b.pathname + b.search + b.hash), T = R.getAttribute("state");
      d.preventDefault(), a(L, { resolve: false, replace: R.hasAttribute("replace"), scroll: !R.hasAttribute("noscroll"), state: T ? JSON.parse(T) : void 0 });
    }
    function g(d) {
      const f = u(d);
      if (!f) return;
      const [R, b] = f;
      r && (b.pathname = r(b.pathname)), o.preloadRoute(b, R.getAttribute("preload") !== "false");
    }
    function h(d) {
      clearTimeout(i);
      const f = u(d);
      if (!f) return c = null;
      const [R, b] = f;
      c !== R && (r && (b.pathname = r(b.pathname)), i = setTimeout(() => {
        o.preloadRoute(b, R.getAttribute("preload") !== "false"), c = R;
      }, 20));
    }
    function y(d) {
      if (d.defaultPrevented) return;
      let f = d.submitter && d.submitter.hasAttribute("formaction") ? d.submitter.getAttribute("formaction") : d.target.getAttribute("action");
      if (!f) return;
      if (!f.startsWith("https://action/")) {
        const b = new URL(f, je);
        if (f = o.parsePath(b.pathname + b.search), !f.startsWith(n)) return;
      }
      if (d.target.method.toUpperCase() !== "POST") throw new Error("Only POST forms are supported for Actions");
      const R = Yn.get(f);
      if (R) {
        d.preventDefault();
        const b = new FormData(d.target, d.submitter);
        R.call({ r: o, f: d.target }, d.target.enctype === "multipart/form-data" ? b : new URLSearchParams(b));
      }
    }
    delegateEvents(["click", "submit"]), document.addEventListener("click", v), e && (document.addEventListener("mousemove", h, { passive: true }), document.addEventListener("focusin", g, { passive: true }), document.addEventListener("touchstart", g, { passive: true })), document.addEventListener("submit", y), onCleanup(() => {
      document.removeEventListener("click", v), e && (document.removeEventListener("mousemove", h), document.removeEventListener("focusin", g), document.removeEventListener("touchstart", g)), document.removeEventListener("submit", y);
    });
  };
}
function Zn(e) {
  if (isServer) return Xn(e);
  const t = () => {
    const r = window.location.pathname.replace(/^\/+/, "/") + window.location.search, o = window.history.state && window.history.state._depth && Object.keys(window.history.state).length === 1 ? void 0 : window.history.state;
    return { value: r + window.location.hash, state: o };
  }, n = Me();
  return Gn({ get: t, set({ value: r, replace: o, scroll: s, state: a }) {
    o ? window.history.replaceState(Pn(a), "", r) : window.history.pushState(a, "", r), zn(decodeURIComponent(window.location.hash.slice(1)), s), le();
  }, init: (r) => Jn(window, "popstate", Cn(r, (o) => {
    if (o) return !n.confirm(o);
    {
      const s = t();
      return !n.confirm(s.value, { state: s.state });
    }
  })), create: Qn({ preload: e.preload, explicitLinks: e.explicitLinks, actionBase: e.actionBase, transformUrl: e.transformUrl }), utils: { go: (r) => window.history.go(r), beforeLeave: n } })(e);
}
function er(e) {
  return e.children;
}
var tr = ["<script", ">", "<\/script>"];
const nr = `
(function() {
  try {
    var t = localStorage.getItem('portfolio-theme');
    if (t) document.documentElement.setAttribute('data-theme', t);
  } catch(e) {}
})();
`.trim();
function rr() {
  return createComponent$1(Zn, { root: (e) => createComponent$1(En, { get children() {
    return [createComponent$1(Tn, { children: "Gustavo Michels de Camargo | AI & Systems Engineer" }), ssr(tr, ssrHydrationKey(), nr), createComponent$1(Q, { rel: "preconnect", href: "https://fonts.googleapis.com" }), createComponent$1(Q, { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" }), createComponent$1(Q, { href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap", rel: "stylesheet" }), createComponent$1(er, { get children() {
      return createComponent$1(k, { get children() {
        return createComponent$1(Suspense, { get children() {
          return e.children;
        } });
      } });
    } })];
  } }), get children() {
    return createComponent$1(mn, {});
  } });
}
const ze = isServer ? (e) => {
  const t = getRequestEvent();
  return t.response.status = e.code, t.response.statusText = e.text, onCleanup(() => !t.nativeEvent.handled && !t.complete && (t.response.status = 200)), null;
} : (e) => null;
var or = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">', "</span>"], sr = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">500 | Internal Server Error</span>'];
const ar = (e) => {
  const t = isServer ? "500 | Internal Server Error" : "Error | Uncaught Client Exception";
  return createComponent$1(ErrorBoundary, { fallback: (n) => (console.error(n), [ssr(or, ssrHydrationKey(), escape(t)), createComponent$1(ze, { code: 500 })]), get children() {
    return e.children;
  } });
}, ir = (e) => {
  let t = false;
  const n = catchError(() => e.children, (r) => {
    console.error(r), t = !!r;
  });
  return t ? [ssr(sr, ssrHydrationKey()), createComponent$1(ze, { code: 500 })] : n;
};
var Se = ["<script", ">", "<\/script>"], cr = ["<script", ' type="module"', " async", "><\/script>"], lr = ["<script", ' type="module" async', "><\/script>"];
const ur = ssr("<!DOCTYPE html>");
function Ve(e, t, n = []) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (o.path !== e[0].path) continue;
    let s = [...n, o];
    if (o.children) {
      const a = e.slice(1);
      if (a.length === 0 || (s = Ve(a, o.children, s), !s)) continue;
    }
    return s;
  }
}
function dr(e) {
  const t = getRequestEvent(), n = t.nonce;
  let r = [];
  return Promise.resolve().then(async () => {
    let o = [];
    if (t.router && t.router.matches) {
      const s = [...t.router.matches];
      for (; s.length && (!s[0].info || !s[0].info.filesystem); ) s.shift();
      const a = s.length && Ve(s, t.routes);
      if (a) {
        const i = globalThis.MANIFEST.client.inputs;
        for (let c = 0; c < a.length; c++) {
          const l = a[c], u = i[l.$component.src];
          o.push(u.assets());
        }
      }
    }
    r = await Promise.all(o).then((s) => [...new Map(s.flat().map((a) => [a.attrs.key, a])).values()].filter((a) => a.attrs.rel === "modulepreload" && !t.assets.find((i) => i.attrs.key === a.attrs.key)));
  }), useAssets(() => r.length ? r.map((o) => ne(o)) : void 0), createComponent$1(NoHydration, { get children() {
    return [ur, createComponent$1(ir, { get children() {
      return createComponent$1(e.document, { get assets() {
        return [createComponent$1(HydrationScript, {}), t.assets.map((o) => ne(o, n))];
      }, get scripts() {
        return n ? [ssr(Se, ssrHydrationKey() + ssrAttribute("nonce", escape(n, true), false), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(cr, ssrHydrationKey(), ssrAttribute("nonce", escape(n, true), false), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))] : [ssr(Se, ssrHydrationKey(), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(lr, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))];
      }, get children() {
        return createComponent$1(Hydration, { get children() {
          return createComponent$1(ar, { get children() {
            return createComponent$1(rr, {});
          } });
        } });
      } });
    } })];
  } });
}
var hr = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#080012"><link rel="icon" href="/favicon.ico"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&amp;family=Inter:wght@300;400;500;600;700&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet">', "</head>"], fr = ["<html", ' lang="en" data-theme="ai">', '<body><a href="#main" class="skip-link">Skip to main content</a><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
const Sr = bn(() => createComponent$1(dr, { document: ({ assets: e, children: t, scripts: n }) => ssr(fr, ssrHydrationKey(), createComponent$1(NoHydration, { get children() {
  return ssr(hr, escape(e));
} }), escape(t), escape(n)) }));

const handlers = [
  { route: '', handler: _2L1h_Z, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: Lt, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: Sr, lazy: false, middleware: true, method: undefined }
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

export { C, Ft as F, _, closePrerenderer as c, localFetch as l, o, s };
//# sourceMappingURL=nitro.mjs.map
