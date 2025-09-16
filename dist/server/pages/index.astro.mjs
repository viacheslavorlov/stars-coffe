import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute, F as Fragment } from '../chunks/astro/server_DS_OopFz.mjs';
import { c as cn, a as $$Section, b as $$Container, m as logo, B as Button, P, n as getEntry, $ as $$Layout, k as $$P } from '../chunks/Layout_FW8wrf40.mjs';
import { $ as $$H } from '../chunks/H_D3Bi3PSi.mjs';
import { $ as $$Image, c as $$Picture } from '../chunks/_astro_assets_CczljEwY.mjs';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
export { renderers } from '../renderers.mjs';

const actionBg = new Proxy({"src":"/_astro/action_bg.BbWfao9C.png","width":1456,"height":816,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/viacheslav/projects/stars-coffe/src/assets/action_bg.png";
							}
							
							return target[name];
						}
					});

const coffe = new Proxy({"src":"/_astro/coffe.qXUYDjPn.png","width":999,"height":631,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/viacheslav/projects/stars-coffe/src/assets/coffe.png";
							}
							
							return target[name];
						}
					});

const hand = new Proxy({"src":"/_astro/hand.DMCQY8d_.png","width":571,"height":688,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/viacheslav/projects/stars-coffe/src/assets/hand.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://husilijorad.beget.app");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { contacts, className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "AstroSection", $$Section, { "as": "footer", "className": cn(
    "to-transparrent absolute rounded-t-[30px] border border-white/40 bg-gradient-to-t from-white/40 backdrop-blur-[100px]",
    className
  ) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AstroContainer", $$Container, { "className": "flex flex-raw items-center gap-8 justify-between" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<a href="/"> ${renderComponent($$result3, "Image", $$Image, { "src": logo, "width": 60, "height": 60, "alt": "", "class": "w-[60px] h-[60px]" })} </a> <div class="flex gap-4 z-30"> ${contacts?.map((contact) => renderTemplate`<a${addAttribute(contact.href, "href")} class="z-30 relative"> ${renderComponent($$result3, "Image", $$Image, { "src": contact.img, "alt": "", "class": "size-[60px]", "height": 60, "width": 60, "loading": "lazy", "decoding": "async" })} </a>`)} </div> ` })} ` })}`;
}, "/home/viacheslav/projects/stars-coffe/src/widgets/Footer.astro", void 0);

const $$MapAsync = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3d53a65278910f3229988a7da4cdeeb403dfad73a7c6d4def0f09311be4c8c17&source=constructor" width="100%"${addAttribute("lazy", "loading")} height="400"${addAttribute("rounded-lg", "class")} frameborder="0"></iframe>`;
}, "/home/viacheslav/projects/stars-coffe/src/widgets/MapAsync.astro", void 0);

const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";

const ProductCarousel = ({ catalogue }) => {
  if (!catalogue) return null;
  return /* @__PURE__ */ jsx(
    Carousel,
    {
      plugins: [
        Autoplay({
          delay: 3500
        })
      ],
      opts: { loop: true },
      children: /* @__PURE__ */ jsx(CarouselContent, { children: catalogue.map((item, i) => /* @__PURE__ */ jsx(CarouselItem, { className: "sm:basis-1/2 lg:basis-1/3 pt-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-b from-white/40 to-transparent border rounded-[30px] backdrop-blur-[100px] border-white/40 px-8 py-6 relative overflow-visible", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-8 right-8 -top-8 bg-accent aspect-square rounded-3xl" }),
        /* @__PURE__ */ jsx("img", { alt: "", src: item.img.src, className: "z-10 relative scale-110" }),
        /* @__PURE__ */ jsx(P, { size: "lg", className: "uppercase font-bold text-center", children: item.title }),
        /* @__PURE__ */ jsx(P, { className: "text-center", children: item.description }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxs(P, { size: "lg", className: "uppercase font-bold", children: [
            item.price,
            "₽"
          ] }),
          /* @__PURE__ */ jsxs(Button, { children: [
            "в приложение ",
            /* @__PURE__ */ jsx(ArrowRight, {})
          ] })
        ] })
      ] }) }, item.title + i)) })
    }
  );
};

const $$Astro = createAstro("https://husilijorad.beget.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const data = await getEntry("main", "main");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Stars Coffe", "description": "\u041A\u043E\u0444\u0435\u0439\u043D\u044F Stars Coffe | \u0412\u0435\u043B\u0438\u043A\u0438\u0439 \u043D\u043E\u0432\u0433\u043E\u0440\u043E\u0434", "seoData": {
    description: "\u041A\u043E\u0444\u0435\u0439\u043D\u044F Stars Coffe | \u0412\u0435\u043B\u0438\u043A\u0438\u0439 \u043D\u043E\u0432\u0433\u043E\u0440\u043E\u0434",
    image: "",
    ogType: "website",
    title: "Stars Coffe",
    favicon: ""
  } }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "AstroSection", $$Section, { "className": "relative" }, { "default": async ($$result3) => renderTemplate`${data?.data.heroImg && renderTemplate`${renderComponent($$result3, "Picture", $$Picture, { "loading": "eager", "src": data?.data.heroImg, "alt": "", "class": "absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover xl:object-bottom" })}`}${maybeRenderHead()}<div class="absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-b from-black/5 via-black/30 to-transparent sm:hidden"></div> ${renderComponent($$result3, "AstroContainer", $$Container, { "className": "relative z-10 flex min-h-[600px] flex-col justify-center xl:min-h-[800px] 2xl:min-h-[1000px]" }, { "default": async ($$result4) => renderTemplate` <div class="sm:mx-0 sm:w-1/2"> ${renderComponent($$result4, "H", $$H, { "level": "h1", "margin": "small", "className": "z-20 font-black uppercase drop-shadow-md" }, { "default": async ($$result5) => renderTemplate`${data?.data.title}` })} ${renderComponent($$result4, "H", $$H, { "level": "h3", "as": "span", "className": "z-20 drop-shadow-md" }, { "default": async ($$result5) => renderTemplate`${data?.data.subtitle}` })} <div class="pt-4 md:pt-8 lg:pt-14"> <a${addAttribute(data?.data.heroButton.link, "href")} class="z-10 w-full lg:w-[338px]"> ${renderComponent($$result4, "Button", Button, { "className": "w-[300px] sm:w-[338px]" }, { "default": async ($$result5) => renderTemplate`${data?.data.heroButton.title}` })} </a> </div> </div> ` })} ` })} ${renderComponent($$result2, "AstroSection", $$Section, { "id": "catalog", "className": "scroll-mt-20" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "AstroContainer", $$Container, { "className": "relative" }, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "Picture", $$Picture, { "src": coffe, "alt": "", "class": "absolute top-0 left-0" })} ${renderComponent($$result4, "ProductCarousel", ProductCarousel, { "client:load": true, "catalogue": data?.data.catalogue, "client:component-hydration": "load", "client:component-path": "#/widgets/ProcuctCarousel", "client:component-export": "ProductCarousel" })} ` })} ` })} ${renderComponent($$result2, "AstroSection", $$Section, { "id": "about" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "AstroContainer", $$Container, { "className": "relative" }, { "default": async ($$result4) => renderTemplate`${data?.data.about.title && renderTemplate`${renderComponent($$result4, "Picture", $$Picture, { "src": data?.data.about.title, "alt": "", "class": "mt-10 opacity-30" })}`}${renderComponent($$result4, "H", $$H, { "className": "pt-8 text-center font-[800]" }, { "default": async ($$result5) => renderTemplate`${data?.data.about.subtitle}` })} <div class="flex flex-col gap-8 lg:flex-row"> <div class="w-full lg:w-1/3"> ${data?.data.about.advantages.slice(0, 2).map((item, i) => renderTemplate`<div class="flex gap-4"> <div> <h3 class="text-9xl font-[800] text-[#FFFFFF2E]">${i + 1}</h3> </div> <div> ${renderComponent($$result4, "P", $$P, { "size": "lg", "margin": "default", "className": "uppercase font-[500]" }, { "default": async ($$result5) => renderTemplate`${item.title}` })} ${renderComponent($$result4, "P", $$P, {}, { "default": async ($$result5) => renderTemplate`${item.description}` })} </div> </div>`)} </div> <div class="w-full lg:w-1/3">  ${renderComponent($$result4, "Image", $$Image, { "src": data?.data.about.img, "alt": "" })} </div> <div class="w-full lg:w-1/3"> ${data?.data.about.advantages.slice(2).map((item, i) => renderTemplate`<div> ${renderComponent($$result4, "Fragment", Fragment, {}, { "default": async ($$result5) => renderTemplate` <h3 class="text-9xl font-[800] text-[#FFFFFF2E]">${i + 3}</h3> ${renderComponent($$result5, "P", $$P, { "size": "lg", "margin": "default", "className": "uppercase font-[500]" }, { "default": async ($$result6) => renderTemplate`${item.title}` })} ` })}${" "} ${renderComponent($$result4, "P", $$P, {}, { "default": async ($$result5) => renderTemplate`${item.description}` })} </div>`)} </div> </div> ` })} ` })} ${renderComponent($$result2, "AstroSection", $$Section, { "id": "contacts" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "AstroContainer", $$Container, {}, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "H", $$H, { "margin": "small", "className": "mt-20" }, { "default": async ($$result5) => renderTemplate`Как нас найти?` })} ${renderComponent($$result4, "P", $$P, { "margin": "default" }, { "default": async ($$result5) => renderTemplate`Адрес: улица Федоровский ручей 2/13 Универмаг "Диез" со стороны набережной` })} ${renderComponent($$result4, "MapAsync", $$MapAsync, {})} ` })} ` })} ${renderComponent($$result2, "AstroSection", $$Section, { "className": "relative overflow-hidden", "id": "actions" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Picture", $$Picture, { "src": actionBg, "alt": "", "class": "absolute top-0 w-full min-h-full bottom-0 right-0 left-0 object-cover" })} ${renderComponent($$result3, "AstroContainer", $$Container, {}, { "default": async ($$result4) => renderTemplate` <div class="mb-72 py-32 lg:mb-40 lg:py-56"> <div class="rounded-[30px] border border-none bg-gradient-to-b from-white/40 to-transparent px-8 pb-16 pt-8 backdrop-blur-[100px] lg:pb-8 lg:pt-20"> <div class="w-full lg:w-1/2 xl:w-2/3"> ${renderComponent($$result4, "H", $$H, { "level": "h1", "margin": "none", "className": "font-black uppercase", "as": "h2" }, { "default": async ($$result5) => renderTemplate`${data?.data.action.title}<span class="ml-2 text-primary">${data?.data.action.accent}</span>` })} ${renderComponent($$result4, "P", $$P, { "className": "text-3xl" }, { "default": async ($$result5) => renderTemplate`${data?.data.action.subtitle}` })} ${renderComponent($$result4, "H", $$H, { "level": "h2", "className": "font-black uppercase", "as": "h2" }, { "default": async ($$result5) => renderTemplate`${data?.data.action.description}` })} </div> </div> </div> ` })} ${renderComponent($$result3, "Image", $$Image, { "src": hand, "alt": "", "class": "absolute z-10 -right-28 lg:-right-14 bottom-14 max-h-[432px] lg:max-h-none object-contain pointer-events-none" })} ${renderComponent($$result3, "Footer", $$Footer, { "contacts": data?.data.contacts, "className": "bottom-0" })} ` })} ` })}`;
}, "/home/viacheslav/projects/stars-coffe/src/pages/index.astro", void 0);

const $$file = "/home/viacheslav/projects/stars-coffe/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
