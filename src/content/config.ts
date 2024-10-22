import { defineCollection, reference, z } from 'astro:content';

const teams = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    color: z.string().regex(/^#[0-9a-f]{6}$/i),
    students: z.array(reference('students')),
    point_events: z.array(reference('point_events')),
  }),
});

const students = defineCollection({
  type: "data",
  schema: z.object({
    first_name: z.string(),
    last_name: z.string(),
    grade: z.number().int().gte(8).lte(12),
  }),
});

const point_events = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    points: z.number(),
    date: z.date(),
  }),
});

export const collections = {
  teams,
  students,
  point_events,
};