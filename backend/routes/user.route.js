import express from "express"
import { getUserForSidebar, updateUser } from "../controllers/user.controller.js"
import protectRoute from "../middleware/protectRoute.js"
const router = express.Router()

router.get("/",protectRoute, getUserForSidebar)
router.put("/:id",protectRoute, updateUser)

export default router