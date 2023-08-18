import { Router } from "express";
import * as controller from "./position.controller.js";
import * as schema from "./position.schema.js";

import { validate } from "../../lib/validate.js";

const positionRouter = Router();

positionRouter.get(
  "/:carId",
  validate(schema.getPositionsByCarId),
  controller.getPositionsByCarId,
);

positionRouter.post(
  "/:carId",
  validate(schema.setCarPosition),
  controller.setCarPosition,
);

export default positionRouter;
