const router = require("express").Router();
const tasksController = require("../controllers/tasks.controller");

router.get("/", tasksController.findAll);
router.post("/", tasksController.create);

router.get("/:id", tasksController.findById);
router.put("/:id", tasksController.update);
router.delete("/:id", tasksController.delete);
module.exports = router;
