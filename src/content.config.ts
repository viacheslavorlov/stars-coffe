import { defineCollection, z } from "astro:content";

const baseInfo = defineCollection({
  // Type-check frontmatter using a schema
  type: "content",
  schema: ({ image }) => z.object({
    logo: image().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    vk: z.string().optional(),
    whatsapp: z.string().optional(),
    telegram: z.string().optional(),
    ogrn: z.string().optional(),
    inn: z.string().optional(),
    fio: z.string().optional(),
    yurAddress: z.string().optional(),
    bank: z.string().optional(),
    bik: z.string().optional(),
    bill1: z.string().optional(),
    bill2: z.string().optional(),
  }),
});

const seo = defineCollection({
  // Type-check frontmatter using a schema
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    favicon: z.string(),
  }),
});

const main = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    subtitle: z.string(),
    heroButton: z.object({
      title: z.string(),
      link: z.string()
    }),
    heroImg: image(),

    catalogue: z.array(z.object({
      title: z.string(),
      price: z.number(),
      description: z.string().optional(),
      img: image(),
    })),
    about: z.object({
      title: image(),
      img: image(),
      subtitle: z.string(),
      advantages: z.array(z.object({
        title: z.string(),
        description: z.string()
      })),
      cta: z.object({
        href: z.string(),
        label: z.string(),
      })
    }),
    action: z.object({
      title: z.string(),
      accent: z.string().optional(),
      subtitle: z.string().optional(),
      description: z.string()
    }),
    contacts: z.array(z.object({ img: image(), href: z.string() }))

  })
})

export const collections = { baseInfo, seo, main };
