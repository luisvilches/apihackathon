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
router.post("/hackathon/add/types/:id", ctrl.hackathon.addTypes);
router.post("/hackathon/add/hackers/:id", ctrl.hackathon.addHackers);
router.post("/hackathon/add/admin/:id", ctrl.hackathon.addAdmin);
router.post("/hackathon/add/judges/:id", ctrl.hackathon.addJudges);
router.post("/hackathon/add/patners/:id", ctrl.hackathon.addPatnerts);
router.post("/hackathon/add/challenge/:id", ctrl.hackathon.addChallenge);
router.post("/hackathon/add/prizes/:id", ctrl.hackathon.addPrizes);
router.put("/hackathon/update/photo/:id", ctrl.hackathon.updatePhoto);
router.put("/hackathon/update/banner/:id", ctrl.hackathon.updateBanner);
router.put("/hackathon/update/info/:id", ctrl.hackathon.updateInfo);

//users
router.get("/user/:id",ctrl.users.user);
router.put("/user/update/:id",ctrl.users.updateInfoProfile);
router.put("/user/set/password/:id",ctrl.users.setPassword);
router.put("/user/set/avatar/:id",ctrl.users.setAvatar);
router.post("/user/add/skill/:id", ctrl.users.addSkills);

//tags
router.post("/tags",ctrl.tags.createTag);
router.get("/tags",ctrl.tags.tags);
module.exports = router;