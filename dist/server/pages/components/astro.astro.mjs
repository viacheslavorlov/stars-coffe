import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, d as renderSlot, m as maybeRenderHead } from '../../chunks/astro/server_DS_OopFz.mjs';
import { c as cn, $ as $$Layout, a as $$Section, b as $$Container, d as $$Button, e as $$Card, f as $$CardHeader, g as $$CardTitle, h as $$CardDescription, i as $$CardContent, j as $$CardFooter, k as $$P, l as $$Col } from '../../chunks/Layout_ODW3cpuq.mjs';
import { $ as $$H } from '../../chunks/H_DNZw9ln2.mjs';
import { jsx } from 'react/jsx-runtime';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
export { renderers } from '../../renderers.mjs';

const rowVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col"
    },
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap"
    },
    justify: {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around"
    },
    align: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      stretch: "items-stretch"
    },
    spacing: {
      0: "gap-0",
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      5: "gap-5",
      6: "gap-6",
      7: "gap-7",
      8: "gap-8",
      9: "gap-9",
      10: "gap-10",
      11: "gap-11",
      12: "gap-12"
    }
  },
  defaultVariants: {
    direction: "row",
    wrap: false,
    justify: "start",
    align: "start",
    spacing: 4
  }
});
forwardRef(
  ({
    className,
    as: Component = "div",
    direction,
    justify,
    align,
    spacing,
    wrap,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      Component,
      {
        ref,
        className: cn(
          rowVariants({ direction, justify, align, spacing, wrap }),
          className
        ),
        ...props
      }
    );
  }
);

const $$Astro$1 = createAstro("https://stars-coffee53.ru");
const $$Row = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Row;
  const {
    as: Component = "div",
    direction,
    justify,
    align,
    spacing,
    className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Component", Component, { "class": cn(rowVariants({ direction, justify, align, spacing, className })), ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/viacheslav/projects/stars-coffe/src/components/astro/Row.astro", void 0);

const $$Astro = createAstro("https://stars-coffee53.ru");
const $$Component = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Component;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "components", "title": "Components" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AstroSection", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AstroContainer", $$Container, { "className": "space-y-4" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result4, "AstroButton", $$Button, {}, { "default": ($$result5) => renderTemplate`Дефолтная кнопка` })} ${renderComponent($$result4, "AstroButton", $$Button, { "size": "sm" }, { "default": ($$result5) => renderTemplate`Дефолтная кнопка` })} ${renderComponent($$result4, "AstroButton", $$Button, { "size": "lg" }, { "default": ($$result5) => renderTemplate`Дефолтная кнопка` })} </div> <div> ${renderComponent($$result4, "AstroButton", $$Button, { "variant": "destructive" }, { "default": ($$result5) => renderTemplate`destructive кнопка` })} ${renderComponent($$result4, "AstroButton", $$Button, { "variant": "destructive", "size": "sm" }, { "default": ($$result5) => renderTemplate`destructive кнопка` })} ${renderComponent($$result4, "AstroButton", $$Button, { "variant": "destructive", "size": "lg" }, { "default": ($$result5) => renderTemplate`destructive кнопка` })} </div> <div> ${renderComponent($$result4, "AstroButton", $$Button, { "variant": "ghost" }, { "default": ($$result5) => renderTemplate`ghost кнопка` })} ${renderComponent($$result4, "AstroButton", $$Button, { "variant": "ghost", "size": "sm" }, { "default": ($$result5) => renderTemplate`ghost кнопка` })} ${renderComponent($$result4, "AstroButton", $$Button, { "variant": "ghost", "size": "lg" }, { "default": ($$result5) => renderTemplate`ghost кнопка` })} </div> <div> ${renderComponent($$result4, "AstroButton", $$Button, { "variant": "outline" }, { "default": ($$result5) => renderTemplate`outline кнопка` })} ${renderComponent($$result4, "AstroButton", $$Button, { "variant": "outline", "size": "sm" }, { "default": ($$result5) => renderTemplate`outline кнопка` })} ${renderComponent($$result4, "AstroButton", $$Button, { "variant": "outline", "size": "lg" }, { "default": ($$result5) => renderTemplate`outline кнопка` })} </div> <div> ${renderComponent($$result4, "AstroButton", $$Button, { "variant": "secondary" }, { "default": ($$result5) => renderTemplate`secondary кнопка` })} ${renderComponent($$result4, "AstroButton", $$Button, { "variant": "secondary", "size": "sm" }, { "default": ($$result5) => renderTemplate`secondary кнопка` })} ${renderComponent($$result4, "AstroButton", $$Button, { "variant": "secondary", "size": "lg" }, { "default": ($$result5) => renderTemplate`secondary кнопка` })} </div> <div> ${renderComponent($$result4, "AstroButton", $$Button, { "variant": "link" }, { "default": ($$result5) => renderTemplate`link кнопка` })} ${renderComponent($$result4, "AstroButton", $$Button, { "variant": "link", "size": "sm" }, { "default": ($$result5) => renderTemplate`link кнопка` })} ${renderComponent($$result4, "AstroButton", $$Button, { "variant": "link", "size": "lg" }, { "default": ($$result5) => renderTemplate`link кнопка` })} </div> ` })} ` })} ${renderComponent($$result2, "AstroSection", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AstroContainer", $$Container, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "AstroCard", $$Card, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "AstroCardHeader", $$CardHeader, {}, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "AstroCardTitle", $$CardTitle, {}, { "default": ($$result7) => renderTemplate`AstroCard Title` })} ${renderComponent($$result6, "AstroCardDescription", $$CardDescription, {}, { "default": ($$result7) => renderTemplate`AstroCard Description` })} ` })} ${renderComponent($$result5, "AstroCardContent", $$CardContent, {}, { "default": ($$result6) => renderTemplate` <p>AstroCard Content</p> ` })} ${renderComponent($$result5, "AstroCardFooter", $$CardFooter, {}, { "default": ($$result6) => renderTemplate` <p>AstroCard Footer</p> ` })} ` })} ` })} ` })} ${renderComponent($$result2, "AstroSection", $$Section, { "className": "bg-chart-2" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AstroContainer", $$Container, {}, { "default": ($$result4) => renderTemplate` <div class="container mx-auto"> ${renderComponent($$result4, "Heading", $$H, { "level": "h3" }, { "default": ($$result5) => renderTemplate`Карточка` })} <div class="flex flex-col gap-10"> ${renderComponent($$result4, "Card", $$Card, { "className": "" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "CardHeader", $$CardHeader, {}, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Heading", $$H, { "level": "h3", "as": "span", "margin": "none" }, { "default": ($$result7) => renderTemplate`Карточка` })} ` })} ${renderComponent($$result5, "CardContent", $$CardContent, { "className": "flex flex-col gap-4" }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "P", $$P, { "size": "lg", "as": "p", "className": "mt-2 text-purple-700" }, { "default": ($$result7) => renderTemplate`
Lorem ipsum dolor sit amet consectetur adipisicing elit. Non necessitatibus magnam
                itaque maiores! Deleniti dolor ex nemo perspiciatis nostrum sed voluptatibus, a
                saepe tempore perferendis, enim inventore accusantium repudiandae necessitatibus.
                Autem sapiente facilis quod hic eius voluptatem quis saepe eum ratione, labore ad
                corporis, nulla nobis illo inventore sint quaerat quo tempore velit, maiores
                assumenda nesciunt earum! Porro tempore hic nisi corrupti! Odit nam quam illum
                dignissimos voluptatum, quo, provident ex totam, repellat culpa optio perspiciatis
                facere debitis odio in beatae rerum consequuntur voluptate officiis quidem ducimus
                suscipit modi. Perspiciatis excepturi asperiores soluta, blanditiis a quas
                repudiandae vitae nesciunt voluptas.
` })} ` })} ` })} </div> ${renderComponent($$result4, "Heading", $$H, { "level": "h2" }, { "default": ($$result5) => renderTemplate`Кнопки` })} <div class="flex flex-col gap-10"> ${renderComponent($$result4, "Card", $$Card, { "className": "flex gap-4 bg-chart-1" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "CardHeader", $$CardHeader, {}, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Heading", $$H, { "level": "h3", "margin": "none" }, { "default": ($$result7) => renderTemplate`Карточка` })} ` })} ${renderComponent($$result5, "CardContent", $$CardContent, { "className": "flex flex-col gap-4" }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Col", $$Col, { "adaptive": "lg" }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Row", $$Row, {}, { "default": ($$result8) => renderTemplate` adfasd as ` })} ${renderComponent($$result7, "Row", $$Row, {}, { "default": ($$result8) => renderTemplate` adfasd as ` })} ${renderComponent($$result7, "Row", $$Row, {}, { "default": ($$result8) => renderTemplate` adfasd as ` })} ${renderComponent($$result7, "Row", $$Row, {}, { "default": ($$result8) => renderTemplate` adfasd as ` })} ${renderComponent($$result7, "Row", $$Row, {}, { "default": ($$result8) => renderTemplate` adfasd as ` })} ${renderComponent($$result7, "Row", $$Row, {}, { "default": ($$result8) => renderTemplate` adfasd as ` })} ${renderComponent($$result7, "Row", $$Row, {}, { "default": ($$result8) => renderTemplate` adfasd as ` })} ` })} ` })} ` })} </div> ${renderComponent($$result4, "Heading", $$H, {}, { "default": ($$result5) => renderTemplate`Инпут` })} </div> ` })} ` })} ` })}`;
}, "/home/viacheslav/projects/stars-coffe/src/pages/components/astro.astro", void 0);

const $$file = "/home/viacheslav/projects/stars-coffe/src/pages/components/astro.astro";
const $$url = "/components/astro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Component,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
