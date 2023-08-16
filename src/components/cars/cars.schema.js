// @ts-check
import { z } from "zod";

export const getCar = z.object({
  params: z.object({
    carId: z.coerce.number().int(),
  }),
});

export const deleteCar = z.object({
  params: z.object({
    carId: z.coerce.number().int(),
  }),
});

export const registerCar = z.object({
  body: z.object({
    plate: z.string(),
    position: z.object({
      lattitude: z.number(),
      longitude: z.number(),
    }),
  }),
});

export const updatePosition = z.object({
  params: z.object({
    carId: z.coerce.number().int(),
  }),
  query: z.object({
    lattitude: z.number({ coerce: true }),
    longitude: z.number({ coerce: true }),
  }),
});

export const updateCar = z.object({
  params: z.object({
    carId: z.coerce.number().int(),
  }),
  body: z.object({
    plate: z.string(),
  }),
});
