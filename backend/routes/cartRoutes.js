import express from "express";
import { applyCoupon, cancelCoupon, cartList, clearDbCart, dbCart, deleteUserDbCart } from "../controller/cartController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router()

router
  .route('/')
  .post( dbCart)
  .get( cartList)
  .delete( clearDbCart)
router.route('/coupon').post( applyCoupon)
router.route('/coupon-cancel').post( cancelCoupon)
router.route('/delete-user-cart').delete( deleteUserDbCart)

export default router