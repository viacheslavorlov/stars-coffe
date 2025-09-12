import { D as decodeKey } from './chunks/astro/server_C9hPKOZ2.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Do_0HUUo.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/viacheslav/projects/stars-coffe/","cacheDir":"file:///home/viacheslav/projects/stars-coffe/node_modules/.astro/","outDir":"file:///home/viacheslav/projects/stars-coffe/dist/","srcDir":"file:///home/viacheslav/projects/stars-coffe/src/","publicDir":"file:///home/viacheslav/projects/stars-coffe/public/","buildClientDir":"file:///home/viacheslav/projects/stars-coffe/dist/client/","buildServerDir":"file:///home/viacheslav/projects/stars-coffe/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"500.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/500","isIndex":false,"type":"page","pattern":"^\\/500\\/?$","segments":[[{"content":"500","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/500.astro","pathname":"/500","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"components/astro/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/components/astro","isIndex":false,"type":"page","pattern":"^\\/components\\/astro\\/?$","segments":[[{"content":"components","dynamic":false,"spread":false}],[{"content":"astro","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/components/astro.astro","pathname":"/components/astro","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"components/react/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/components/react","isIndex":false,"type":"page","pattern":"^\\/components\\/react\\/?$","segments":[[{"content":"components","dynamic":false,"spread":false}],[{"content":"react","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/components/react.astro","pathname":"/components/react","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"http://localhost:4321","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/viacheslav/projects/stars-coffe/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["/home/viacheslav/projects/stars-coffe/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/viacheslav/projects/stars-coffe/src/pages/500.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/500@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/viacheslav/projects/stars-coffe/src/pages/components/astro.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/components/astro@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/viacheslav/projects/stars-coffe/src/pages/components/react.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/components/react@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/viacheslav/projects/stars-coffe/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/500@_@astro":"pages/500.astro.mjs","\u0000@astro-page:src/pages/components/astro@_@astro":"pages/components/astro.astro.mjs","\u0000@astro-page:src/pages/components/react@_@astro":"pages/components/react.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CJd9KQlG.mjs","/home/viacheslav/projects/stars-coffe/node_modules/.pnpm/unstorage@1.17.1/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/home/viacheslav/projects/stars-coffe/.astro/content-assets.mjs":"chunks/content-assets_qeZ-tKOB.mjs","/home/viacheslav/projects/stars-coffe/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DktV2RQR.mjs","/home/viacheslav/projects/stars-coffe/node_modules/.pnpm/astro@5.13.7_@types+node@24.3.1_jiti@1.21.7_rollup@4.50.1_typescript@5.9.2_yaml@2.8.1/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DmskFbJU.mjs","#/widgets/ProcuctCarousel":"_astro/ProcuctCarousel.DHXOQL0-.js","#/widgets/MobileMenu":"_astro/MobileMenu.CNOU4rOQ.js","@astrojs/react/client.js":"_astro/client.Dw4GEr9-.js","/home/viacheslav/projects/stars-coffe/src/components/astro/DesktopMenu.astro?astro&type=script&index=0&lang.ts":"_astro/DesktopMenu.astro_astro_type_script_index_0_lang.BLi0QpQa.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/viacheslav/projects/stars-coffe/src/components/astro/DesktopMenu.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"click\",e=>{document.querySelectorAll(\".group > div\").forEach(d=>{d.contains(e?.target)||d.classList.add(\"hidden\")})});document.querySelectorAll('button[aria-haspopup=\"true\"]').forEach(e=>{e.addEventListener(\"click\",()=>{e.nextElementSibling?.classList.toggle(\"hidden\")})});"]],"assets":["/_astro/coffe.qXUYDjPn.png","/_astro/hand.DMCQY8d_.png","/_astro/action_bg.BbWfao9C.png","/_astro/logo.SCElrixu.png","/_astro/about_title.sySJpFLS.png","/_astro/americano.D3DYZVXE.png","/_astro/vk.CEpu0jDZ.png","/_astro/about_img.B40eREeZ.png","/_astro/hero.BRAYnOAa.png","/_astro/latte.2fRnOfOq.png","/_astro/kapuchino.D6mhf5EW.png","/_astro/astro.CP8FsYDY.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/site.webmanifest","/_astro/MobileMenu.CNOU4rOQ.js","/_astro/ProcuctCarousel.DHXOQL0-.js","/_astro/client.Dw4GEr9-.js","/_astro/createLucideIcon.D4yUJjcI.js","/_astro/index.BH-FDjjc.js","/_astro/index._frMCB_H.js","/404.html","/500.html","/components/astro/index.html","/components/react/index.html","/robots.txt","/index.html","/~partytown/partytown-atomics.js","/~partytown/partytown-media.js","/~partytown/partytown-sw.js","/~partytown/partytown.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"gRGpiq4CXf+TXAfFLPY0pJfR3XHsPVEgRTCQVhXtQsY=","sessionConfig":{"driver":"fs-lite","options":{"base":"/home/viacheslav/projects/stars-coffe/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
