import { z } from "zod";

const carIdSchema = z.coerce.number().int().positive();

export const positionSchema = z.object({
  lattitude: z.coerce.number().min(-90.0).max(90.0),
  longitude: z.coerce.number().min(-180.0).max(180.0),
});

export const getPositionsByCarId = z.object({
  params: z.object({ carId: carIdSchema }),
});

export const setCarPosition = z.object({
  params: z.object({
    carId: carIdSchema,
  }),
  query: positionSchema,
});
