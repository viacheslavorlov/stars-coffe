import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, d as renderSlot } from './astro/server_DS_OopFz.mjs';
import { c as cn, o as headingVariants } from './Layout_ODW3cpuq.mjs';

const $$Astro = createAstro("https://stars-coffee53.ru");
const $$H = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$H;
  const {
    //@ts-ignore
    as: Component = "h2",
    level = "h2",
    margin = "default",
    className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Component", Component, { "class": cn(headingVariants({ level, margin }), className), ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/viacheslav/projects/stars-coffe/src/components/astro/H.astro", void 0);

export { $$H as $ };
