import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  sendEmail,
  changePwd,
  addWishList,
  removeWishList,
  getWishlistProducts,
  googleLogin,
  fbLogin
} from "../controller/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(  getUsers);
router.post("/login", authUser);
router.post("/email-send",sendEmail);
router.post("/change-password",changePwd);
router.post("/social_auth/google",googleLogin)
router.post("/social_auth/fb",fbLogin)
router.route('/getwishlists').get(getWishlistProducts)
router
  .route("/profile")
  .get( getUserProfile)
  .put( updateUserProfile);
router
  .route("/:id")
  .delete(  deleteUser)
  .get( protect,admin, getUserById)
  .put(  updateUser);

router.route('/wishlist').post( addWishList)

router.route('/:id/wishlist').delete( removeWishList)

export default router;
