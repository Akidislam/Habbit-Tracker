import express from "express";
import {
getHabits,
createHabit,
updateHabit,
deleteHabit,
archiveHabit,
reorderHabits,
} from "../controllers/habitcontrollers.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.use(protect); // সব রাউটের জন্য অথেন্টিকেশন বাধ্যতামূলক করা হয়েছে

router.get("/", getHabits);
router.post("/", createHabit);
router.put("/reorder", reorderHabits);
router.put("/:id", updateHabit);
router.delete("/:id", deleteHabit);
router.put("/:id/archive", archiveHabit);

export default router;