const express = require("express");
const postController = require("../controllers/postController");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, postController.getAllPosts);
router.post("/", auth, postController.createPost);
router.put("/:id", auth, postController.updatePost);
router.delete("/:id", auth, postController.deletePost);

module.exports = router;
