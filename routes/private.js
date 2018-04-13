const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const ctrl = require("../controllers");


// create hackathon
router.get("/hackathon", ctrl.hackathon.find);
router.get("/hackathon/id/:id", ctrl.hackathon.findById);
router.get("/hackathon/url/:link", ctrl.hackathon.findOne);

router.post("/hackathon", ctrl.hackathon.create);
router.put("/hackathon/id/:id", ctrl.hackathon.update);
router.delete("/hackathon/:id", ctrl.hackathon.delete);
router.put("/hackathon/publish/:id",ctrl.hackathon.publish);

//users
router.get("/user/:id",ctrl.users.user);

module.exports = router;