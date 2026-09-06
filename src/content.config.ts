import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const executives = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/executives',
  }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      name: z.string(),
      role: z.string(),
      image: image(),
      href: z.string().url().optional(),
    }),
});

const sponsors = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/sponsors',
  }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      name: z.string(),
      image: image(),
      href: z.string().url().optional(),
    }),
});

const events = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/events',
  }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      date: z.string(),
      description: z.string().optional(),
      image: image(),
      href: z.string().url().optional(),
      poster: z.boolean().default(false),
    }),
});

export const collections = {
  executives,
  sponsors,
  events,
};