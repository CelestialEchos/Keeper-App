import express from "express";
import noteController from "../controllers/note.controller.js";


const router = express.Router()

router.get("/", noteController.getAll)
router.get("/:id", noteController.getById)
router.post("/", noteController.create)
router.put("/:id", noteController.updateById)
router.delete("/:id", noteController.deleteById)

export default router;