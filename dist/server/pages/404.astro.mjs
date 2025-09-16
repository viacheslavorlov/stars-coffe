import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DS_OopFz.mjs';
import { $ as $$Layout, a as $$Section, b as $$Container } from '../chunks/Layout_FW8wrf40.mjs';
import { $ as $$H } from '../chunks/H_D3Bi3PSi.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://husilijorad.beget.app");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const { error } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Error page", "description": "error page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "H", $$H, {}, { "default": ($$result5) => renderTemplate`Что-то пошло не так, попробуйте перезагрузить страницу.` })} ${renderComponent($$result4, "H", $$H, { "level": "h2" }, { "default": ($$result5) => renderTemplate`${maybeRenderHead()}<a href="/">Вернуться на главную</a>` })} <p>Ошибка: ${error}</p> ` })} ` })} ` })}`;
}, "/home/viacheslav/projects/stars-coffe/src/pages/404.astro", void 0);

const $$file = "/home/viacheslav/projects/stars-coffe/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
