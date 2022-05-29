import Router from "express";
import PostController from "./PostController.js";

const router = new Router();

router.post("/posts", PostController.create);
router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getPost);
router.put("/posts", PostController.updatePost);
router.delete("/posts/:id", PostController.deletePost);

export default router;
