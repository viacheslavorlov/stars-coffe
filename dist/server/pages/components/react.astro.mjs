import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DS_OopFz.mjs';
import { $ as $$Layout, a as $$Section, b as $$Container } from '../../chunks/Layout_ODW3cpuq.mjs';
export { renderers } from '../../renderers.mjs';

const $$React = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "components", "title": "Components" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h2>React</h2> <p>React is a JavaScript library for building user interfaces.</p> ` })} ` })} ` })}`;
}, "/home/viacheslav/projects/stars-coffe/src/pages/components/react.astro", void 0);

const $$file = "/home/viacheslav/projects/stars-coffe/src/pages/components/react.astro";
const $$url = "/components/react";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$React,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
