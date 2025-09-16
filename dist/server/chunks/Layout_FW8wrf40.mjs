import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, d as renderSlot, b as renderTemplate, r as renderComponent, A as AstroError, U as UnknownContentCollectionError, R as RenderUndefinedEntryError, u as unescapeHTML, f as escape, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, j as renderScript, k as renderTransition, l as createTransitionScope, n as renderHead } from './astro/server_DS_OopFz.mjs';
import { z } from 'zod';
import { r as removeBase, i as isRemotePath, p as prependForwardSlash } from './path_mk0j0CbE.mjs';
import { V as VALID_INPUT_FORMATS, $ as $$Image } from './_astro_assets_CczljEwY.mjs';
import { u as unflatten } from './parse_BMnn4H2B.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import { forwardRef, useState } from 'react';
import clsx$1, { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
/* empty css                         */
import { X, AlignJustify, ChevronDown } from 'lucide-react';
import * as SheetPrimitive from '@radix-ui/react-dialog';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Astro$f = createAstro("https://husilijorad.beget.app");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Container;
  const maxWidthClasses = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-7xl",
    "2xl": "max-w-8xl",
    full: "max-w-full"
  };
  const {
    children,
    maxWidth = "xl",
    xPadding = "px-4 sm:px-6 lg:px-8",
    className = "",
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("mx-auto  w-full", xPadding, maxWidthClasses[maxWidth], className), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/viacheslav/projects/stars-coffe/src/components/astro/Container.astro", void 0);

const headingVariants = cva("font-bold", {
  variants: {
    level: {
      h1: "text-4xl lg:text-5xl",
      h2: "text-3xl lg:text-4xl",
      h3: "text-2xl lg:text-3xl",
      h4: "text-xl lg:text-2xl",
      h5: "text-lg lg:text-xl",
      h6: "text-base lg:text-lg"
    },
    margin: {
      default: "mb-4 md:mb-8 lg:mb-12",
      small: "mb-2 md:mb-4 lg:mb-6",
      none: "mb-0"
    }
  },
  defaultVariants: {
    level: "h2",
    margin: "default"
  }
});
const H = forwardRef(
  ({ className, as: Component = "h2", level, margin, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      Component,
      {
        ref,
        className: cn(headingVariants({ level, margin }), className),
        ...props,
        children
      }
    );
  }
);
H.displayName = "Heading";
const paragraphVariants = cva("", {
  variants: {
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-lg",
      custom: ""
    },
    leading: {
      default: "leading-7",
      tight: "leading-tight",
      relaxed: "leading-relaxed",
      custom: ""
    },
    margin: {
      default: "mb-4",
      none: "mb-0"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify"
    }
  },
  defaultVariants: {
    size: "default",
    leading: "default",
    margin: "none",
    align: "left"
  }
});
const P = forwardRef(
  ({ className, as: Component = "p", size, leading, margin, align, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      Component,
      {
        ref,
        className: cn(
          paragraphVariants({
            size,
            leading,
            margin,
            align
          }),
          className
        ),
        ...props
      }
    );
  }
);
P.displayName = "Paragraph";

const $$Astro$e = createAstro("https://husilijorad.beget.app");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Section;
  const {
    as: Component = "section",
    yPadding = "py-6 md:py-10 lg:py-12",
    className,
    ...props
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Component", Component, { "class": clsx("w-full custom-section", yPadding, className), ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/viacheslav/projects/stars-coffe/src/components/astro/Section.astro", void 0);

var e=e=>Object.prototype.toString.call(e),t=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),o=t=>"[object Date]"===e(t),n=t=>"[object RegExp]"===e(t),r=t=>"[object Error]"===e(t),s=t=>"[object Boolean]"===e(t),l=t=>"[object Number]"===e(t),i=t=>"[object String]"===e(t),c=Array.isArray,u=Object.getOwnPropertyDescriptor,a=Object.prototype.propertyIsEnumerable,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.keys;function d(e){const t=h(e),o=f(e);for(let n=0;n<o.length;n++)a.call(e,o[n])&&t.push(o[n]);return t}function b(e,t){return !u(e,t)?.writable}function y(e,u){if("object"==typeof e&&null!==e){let a;if(c(e))a=[];else if(o(e))a=new Date(e.getTime?e.getTime():e);else if(n(e))a=new RegExp(e);else if(r(e))a={message:e.message};else if(s(e)||l(e)||i(e))a=Object(e);else {if(t(e))return e.slice();a=Object.create(Object.getPrototypeOf(e));}const f=u.includeSymbols?d:h;for(const t of f(e))a[t]=e[t];return a}return e}var g={includeSymbols:false,immutable:false};function m(e,t,o=g){const n=[],r=[];let s=true;const l=o.includeSymbols?d:h,i=!!o.immutable;return function e(u){const a=i?y(u,o):u,f={};let h=true;const d={node:a,node_:u,path:[].concat(n),parent:r[r.length-1],parents:r,key:n[n.length-1],isRoot:0===n.length,level:n.length,circular:void 0,isLeaf:false,notLeaf:true,notRoot:true,isFirst:false,isLast:false,update:function(e,t=false){d.isRoot||(d.parent.node[d.key]=e),d.node=e,t&&(h=false);},delete:function(e){delete d.parent.node[d.key],e&&(h=false);},remove:function(e){c(d.parent.node)?d.parent.node.splice(d.key,1):delete d.parent.node[d.key],e&&(h=false);},keys:null,before:function(e){f.before=e;},after:function(e){f.after=e;},pre:function(e){f.pre=e;},post:function(e){f.post=e;},stop:function(){s=false;},block:function(){h=false;}};if(!s)return d;function g(){if("object"==typeof d.node&&null!==d.node){d.keys&&d.node_===d.node||(d.keys=l(d.node)),d.isLeaf=0===d.keys.length;for(let e=0;e<r.length;e++)if(r[e].node_===u){d.circular=r[e];break}}else d.isLeaf=true,d.keys=null;d.notLeaf=!d.isLeaf,d.notRoot=!d.isRoot;}g();const m=t(d,d.node);if(void 0!==m&&d.update&&d.update(m),f.before&&f.before(d,d.node),!h)return d;if("object"==typeof d.node&&null!==d.node&&!d.circular){r.push(d),g();for(const[t,o]of Object.entries(d.keys??[])){n.push(o),f.pre&&f.pre(d,d.node[o],o);const r=e(d.node[o]);i&&p.call(d.node,o)&&!b(d.node,o)&&(d.node[o]=r.node),r.isLast=!!d.keys?.length&&+t==d.keys.length-1,r.isFirst=0==+t,f.post&&f.post(d,r),n.pop();}r.pop();}return f.after&&f.after(d,d.node),d}(e).node}var j=class{#e;#t;constructor(e,t=g){this.#e=e,this.#t=t;}get(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return;t=t[n];}return t}has(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return  false;t=t[n];}return  true}set(e,t){let o=this.#e,n=0;for(n=0;n<e.length-1;n++){const t=e[n];p.call(o,t)||(o[t]={}),o=o[t];}return o[e[n]]=t,t}map(e){return m(this.#e,e,{immutable:true,includeSymbols:!!this.#t.includeSymbols})}forEach(e){return this.#e=m(this.#e,e,this.#t),this.#e}reduce(e,t){const o=1===arguments.length;let n=o?this.#e:t;return this.forEach(((t,r)=>{t.isRoot&&o||(n=e(t,n,r));})),n}paths(){const e=[];return this.forEach((t=>{e.push(t.path);})),e}nodes(){const e=[];return this.forEach((t=>{e.push(t.node);})),e}clone(){const e=[],o=[],n=this.#t;return t(this.#e)?this.#e.slice():function t(r){for(let t=0;t<e.length;t++)if(e[t]===r)return o[t];if("object"==typeof r&&null!==r){const s=y(r,n);e.push(r),o.push(s);const l=n.includeSymbols?d:h;for(const e of l(r))s[e]=t(r[e]);return e.pop(),o.pop(),s}return r}(this.#e)}};

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_fazhPEFu.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_STRAPI_URL": "http://localhost:1337", "SITE": "https://husilijorad.beget.app", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  maxAge: z.number().optional(),
  lastModified: z.date().optional()
});
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames,
  liveCollections
}) {
  return async function getEntry(collectionOrLookupObject, lookup) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!lookup)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = lookup;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
      });
    }
    if (typeof lookupId === "object") {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `The entry identifier must be a string. Received object.`
      });
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./content-assets_qeZ-tKOB.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      if (entry2.legacyId) {
        return emulateLegacyEntry({ ...entry2, collection });
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_qeZ-tKOB.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_CczljEwY.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, {}).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new j(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
	liveCollections,
});

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-pimary bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent border hover:border-primary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-14 px-4 py-2",
        sm: "h-12 px-3",
        lg: "h-16 px-8",
        icon: "h-11 w-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const $$Astro$d = createAstro("https://husilijorad.beget.app");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "default",
    size = "default",
    className,
    ...rest
  } = Astro2.props;
  const classes = cn(buttonVariants({ variant, size, className }));
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(classes, "class")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "/home/viacheslav/projects/stars-coffe/src/components/astro/Button.astro", void 0);

const colVariants = cva("flex flex-col", {
  variants: {
    span: {
      none: "",
      auto: "flex-grow",
      1: "w-full md:w-1/12",
      2: "w-full md:w-2/12",
      3: "w-full md:w-3/12",
      4: "w-full md:w-4/12",
      5: "w-full md:w-5/12",
      6: "w-full md:w-6/12",
      7: "w-full md:w-7/12",
      8: "w-full md:w-8/12",
      9: "w-full md:w-9/12",
      10: "w-full md:w-10/12",
      11: "w-full md:w-11/12",
      full: "w-full"
    },
    adaptive: {
      none: "",
      md: "md:flex-row",
      lg: "lg:flex-row"
    },
    padding: {
      0: "p-0 md:p-0 lg:p-0",
      2: "p-2 md:p-4 lg:p-6",
      3: "p-3 md:p-5 lg:p-7",
      4: "p-4 md:p-6 lg:p-8",
      5: "p-5 md:p-7 lg:p-9",
      6: "p-6 md:p-8 lg:p-10",
      7: "p-7 md:p-9 lg:p-11",
      8: "p-8 md:p-10 lg:p-12",
      10: "p-10 md:p-12 lg:p-14",
      12: "p-12 md:p-14 lg:p-16"
    },
    gap: {
      0: "gap-0 md:gap-0 lg:gap-0",
      2: "gap-2 md:gap-4 lg:gap-6",
      4: "gap-4 md:gap-6 lg:gap-8",
      5: "gap-5 md:gap-7 lg:gap-9",
      6: "gap-6 md:gap-8 lg:gap-10",
      7: "gap-7 md:gap-9 lg:gap-11",
      8: "gap-8 md:gap-10 lg:gap-12",
      10: "gap-10 md:gap-12 lg:gap-14",
      12: "gap-12 md:gap-14 lg:gap-16"
    }
  },
  defaultVariants: {
    span: "auto",
    padding: 4,
    gap: 4,
    adaptive: "none"
  }
});
forwardRef(
  ({ className, as: Component = "div", span, adaptive, padding, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      Component,
      {
        ref,
        className: cn(colVariants({ span, adaptive, padding }), className),
        ...props
      }
    );
  }
);

const $$Astro$c = createAstro("https://husilijorad.beget.app");
const $$Col = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Col;
  const {
    as: Component = "div",
    span,
    adaptive,
    padding,
    gap,
    className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Component", Component, { "class": cn(colVariants({ span, adaptive, padding, gap }), className), ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/viacheslav/projects/stars-coffe/src/components/astro/Col.astro", void 0);

const $$Astro$b = createAstro("https://husilijorad.beget.app");
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Input;
  const { className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<input${addAttribute(clsx("", className), "class")}${spreadAttributes(props)}>`;
}, "/home/viacheslav/projects/stars-coffe/src/components/astro/Input.astro", void 0);

const $$Astro$a = createAstro("https://husilijorad.beget.app");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Link;
  const { className, target = "_blank", ...props } = Astro2.props;
  return renderTemplate`<!-- <div class='flex'> -->${maybeRenderHead()}<a${addAttribute(target, "target")}${addAttribute(clsx$1(
    "",
    //TODO base style here
    className
  ), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a> <!-- </div> -->`;
}, "/home/viacheslav/projects/stars-coffe/src/components/astro/Link.astro", void 0);

const $$Astro$9 = createAstro("https://husilijorad.beget.app");
const $$P = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$P;
  const {
    as: Component = "p",
    size,
    leading,
    margin,
    align,
    className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Component", Component, { "class": cn(paragraphVariants({ size, leading, margin, align }), className), ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/viacheslav/projects/stars-coffe/src/components/astro/P.astro", void 0);

const $$Astro$8 = createAstro("https://husilijorad.beget.app");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Card;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("rounded-lg border bg-card text-card-foreground shadow-sm", className), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/viacheslav/projects/stars-coffe/src/components/astro/card/Card.astro", void 0);

const $$Astro$7 = createAstro("https://husilijorad.beget.app");
const $$CardContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CardContent;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("p-6 pt-0", className), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/viacheslav/projects/stars-coffe/src/components/astro/card/CardContent.astro", void 0);

const $$Astro$6 = createAstro("https://husilijorad.beget.app");
const $$CardDescription = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CardDescription;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(cn("text-sm text-muted-foreground", className), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </p>`;
}, "/home/viacheslav/projects/stars-coffe/src/components/astro/card/CardDescription.astro", void 0);

const $$Astro$5 = createAstro("https://husilijorad.beget.app");
const $$CardFooter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CardFooter;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("flex items-center p-6 pt-0", className), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/viacheslav/projects/stars-coffe/src/components/astro/card/CardFooter.astro", void 0);

const $$Astro$4 = createAstro("https://husilijorad.beget.app");
const $$CardHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CardHeader;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("flex flex-col space-y-1.5 p-6", className), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/viacheslav/projects/stars-coffe/src/components/astro/card/CardHeader.astro", void 0);

const $$Astro$3 = createAstro("https://husilijorad.beget.app");
const $$CardTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardTitle;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3${addAttribute(cn("text-2xl font-semibold leading-none tracking-tight", className), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </h3>`;
}, "/home/viacheslav/projects/stars-coffe/src/components/astro/card/CardTitle.astro", void 0);

const $$Astro$2 = createAstro("https://husilijorad.beget.app");
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Seo;
  const {
    title,
    favicon = "./favicon.ico",
    description,
    keywords,
    author,
    ogType = "website",
    image,
    ogUrl
  } = Astro2.props;
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(
    Astro2.url.pathname + Astro2.url.search,
    baseUrl
  );
  return renderTemplate`<!-- Required Meta Tags --><title>${title}</title><link rel="icon" type="image/png"${addAttribute(favicon, "href")}><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(defaultCanonicalUrl.href, "href")}><meta charset="UTF-8"><!-- Optional Meta Tags for SEO -->${keywords && renderTemplate`<meta name="keywords"${addAttribute(keywords, "content")}>`}${author && renderTemplate`<meta name="author"${addAttribute(author, "content")}>`}<!-- Open Graph Meta Tags --><meta property="og:title"${addAttribute(title || "", "content")}><meta property="og:description"${addAttribute(description || "", "content")}><meta property="og:type"${addAttribute(ogType || "", "content")}>${image && renderTemplate`<meta property="og:image"${addAttribute(image, "content")}>`}${ogUrl && renderTemplate`<meta property="og:url"${addAttribute(ogUrl, "content")}>`}`;
}, "/home/viacheslav/projects/stars-coffe/src/shared/seo/Seo.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo.SCElrixu.png","width":1231,"height":1231,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/viacheslav/projects/stars-coffe/src/assets/logo.png";
							}
							
							return target[name];
						}
					});

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

const menuItems = [
  {
    title: "О нас",
    href: "/#about"
  },
  {
    title: "Акции",
    href: "/#actions"
  },
  {
    title: "Как нас найти",
    href: "/#contacts"
  },
  {
    title: "Товары",
    href: "/#catalog"
  }
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Sheet, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "link", size: "icon", className: "ml-auto md:hidden w-9 h-6", children: /* @__PURE__ */ jsx(AlignJustify, { className: "size-10" }) }) }),
    /* @__PURE__ */ jsx(SheetContent, { className: "md:hidden pt-20", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full space-y-2", children: [
      /* @__PURE__ */ jsx("a", { onClick: () => setOpen(false), href: "/", className: "mx-auto aspect-square w-[200px] mb-10", children: /* @__PURE__ */ jsx("img", { src: logo.src, alt: "", className: "w-[200px] object-contain mx-auto", loading: "lazy", decoding: "async" }) }),
      /* @__PURE__ */ jsx("div", { className: "h-10" }),
      menuItems.map((item) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { onClick: () => setOpen(false), href: item.href, children: item.title }) }, item.href)),
      /* @__PURE__ */ jsx("div", { className: "w-full bottom-0 absolute", children: /* @__PURE__ */ jsx("a", { href: "https://app.stars-coffee.ru", onClick: () => setOpen(false), className: "", children: /* @__PURE__ */ jsx(Button, { className: "w-full lg:w-40", size: "sm", children: "Скачать приложение" }) }) })
    ] }) })
  ] });
};

const $$Astro$1 = createAstro("https://husilijorad.beget.app");
const $$DesktopMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DesktopMenu;
  const { config } = Astro2.props;
  const navigationMenuTriggerStyle = "inline-flex w-max items-center rounded-full justify-center  px-4 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none";
  return renderTemplate`${maybeRenderHead()}<nav class="relative z-10 flex w-full flex-1 items-center" data-astro-cid-uzjctpts> <a href="/" title="На главную" title="Главная" class="shrink-0" data-astro-cid-uzjctpts> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "", "class": "size-14", "data-astro-cid-uzjctpts": true })} </a> <ul class="ml-auto flex-1 list-none items-center justify-end space-x-1 hidden md:flex" data-astro-cid-uzjctpts> ${config.map((item) => renderTemplate`<li class="relative" data-astro-cid-uzjctpts> ${!item.nested ? renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(navigationMenuTriggerStyle, "class")} data-astro-cid-uzjctpts> ${item.title} </a>` : renderTemplate`<button${addAttribute(cn(navigationMenuTriggerStyle, "group flex items-center gap-1"), "class")} aria-haspopup="true" data-astro-cid-uzjctpts> ${item.title} <span class="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" data-astro-cid-uzjctpts> ${renderComponent($$result, "ChevronDown", ChevronDown, { "className": "h-3 w-3", "aria-hidden": "true", "data-astro-cid-uzjctpts": true })} </span> <div class="absolute left-0 top-full hidden w-fit gap-3 rounded-md border bg-popover p-4 text-popover-foreground shadow-lg group-hover:block" data-astro-cid-uzjctpts> <ul class="flex flex-col gap-3" data-astro-cid-uzjctpts> ${item.nested.map((nestedItem) => renderTemplate`<li data-astro-cid-uzjctpts> <a${addAttribute(nestedItem.href, "href")}${addAttribute(cn(
    "block select-none space-y-1 text-nowrap rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
  ), "class")} data-astro-cid-uzjctpts> <div class="text-sm font-medium leading-none" data-astro-cid-uzjctpts>${nestedItem.title}</div> </a> </li>`)} </ul> </div> </button>`} </li>`)} <!-- <li class="ml-auto">
      <ThemeSwitcher client:load />
    </li> --> </ul> <a${addAttribute("https://app.stars-coffee.ru", "href")} class="ml-auto hidden md:block" data-astro-cid-uzjctpts> ${renderComponent($$result, "Button", Button, { "className": "w-fit", "size": "sm", "data-astro-cid-uzjctpts": true }, { "default": ($$result2) => renderTemplate`Скачать приложение` })} </a> ${renderComponent($$result, "MobileMenu", MobileMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "#/widgets/MobileMenu", "client:component-export": "MobileMenu", "data-astro-cid-uzjctpts": true })} </nav>  ${renderScript($$result, "/home/viacheslav/projects/stars-coffe/src/components/astro/DesktopMenu.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/viacheslav/projects/stars-coffe/src/components/astro/DesktopMenu.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://husilijorad.beget.app");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, keywords, image, seoData } = Astro2.props;
  const data = await getEntry("seo", "base");
  seoData || data?.data;
  return renderTemplate(_a || (_a = __template(['<html lang="ru" class="w-full scroll-smooth"> <head><meta name="viewport" content="width=device-width"><meta name="generator"', ">", '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">', '</head> <body> <header class="to-transparrent fixed left-0 right-0 top-0 z-20 rounded-b-[30px] border border-white/40 bg-gradient-to-b from-white/40 backdrop-blur-[100px]"', "> ", " </header> <main", "> ", ' </main>  <!-- Yandex.Metrika counter --> <script type="text/javascript">\n      (function (m, e, t, r, i, k, a) {\n        m[i] =\n          m[i] ||\n          function () {\n            (m[i].a = m[i].a || []).push(arguments);\n          };\n        m[i].l = 1 * new Date();\n        for (var j = 0; j < document.scripts.length; j++) {\n          if (document.scripts[j].src === r) {\n            return;\n          }\n        }\n        ((k = e.createElement(t)),\n          (a = e.getElementsByTagName(t)[0]),\n          (k.async = 1),\n          (k.src = r),\n          a.parentNode.insertBefore(k, a));\n      })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=104132686", "ym");\n\n      ym(104132686, "init", {\n        ssr: true,\n        webvisor: true,\n        clickmap: true,\n        ecommerce: "dataLayer",\n        accurateTrackBounce: true,\n        trackLinks: true,\n      });\n    <\/script> <noscript><div> <img src="https://mc.yandex.ru/watch/104132686" style="position:absolute; left:-9999px;" alt=""> </div></noscript> <!-- /Yandex.Metrika counter -->  </body></html>'])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "Seo", $$Seo, { ...seoData }), renderHead(), addAttribute(createTransitionScope($$result, "vjivwn24"), "data-astro-transition-persist"), renderComponent($$result, "AstroSection", $$Section, { "yPadding": "py-4 sm:py-6 lg:py-8" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "AstroContainer", $$Container, {}, { "default": async ($$result3) => renderTemplate`  ${renderComponent($$result3, "DesktopMenu", $$DesktopMenu, { "config": menuItems })} ` })} ` }), addAttribute(renderTransition($$result, "4vhbyfto"), "data-astro-transition-scope"), renderSlot($$result, $$slots["default"]));
}, "/home/viacheslav/projects/stars-coffe/src/layouts/Layout.astro", "self");

export { $$Layout as $, Button as B, P, $$Section as a, $$Container as b, cn as c, $$Button as d, $$Card as e, $$CardHeader as f, $$CardTitle as g, $$CardDescription as h, $$CardContent as i, $$CardFooter as j, $$P as k, $$Col as l, logo as m, getEntry as n, headingVariants as o };
