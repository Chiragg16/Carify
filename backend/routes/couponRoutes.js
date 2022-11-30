import express from "express";
import { couponCreate, couponDelete, couponList } from "../controller/couponController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router()

router
  .route('/')
  .post(couponCreate)
  .get(couponList)
router.route('/:id').delete(couponDelete)

export default router;