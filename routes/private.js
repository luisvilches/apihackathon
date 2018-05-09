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
router.post("/hackathon/join/:id", ctrl.hackathon.join);

//projects

router.get("/project", ctrl.projects.find);
router.post("/project/create", ctrl.projects.create);
router.get("/project/id/:id", ctrl.projects.findById);
router.get("/project/url/:link", ctrl.projects.findOne);
router.get("/project/idfind/:id", ctrl.projects.findOneHack);
router.delete("/project/:id", ctrl.projects.delete);
router.post("/project/join/:id", ctrl.projects.join);
router.put("/project/update/photo/:id", ctrl.projects.updatePhoto);
router.put("/project/update/info/:id", ctrl.projects.updateInfo);

//users
router.get("/user/:id",ctrl.users.user);
router.get("/users",ctrl.users.userAll);
router.put("/user/update/:id",ctrl.users.updateInfoProfile);
router.put("/user/set/password/:id",ctrl.users.setPassword);
router.put("/user/set/avatar/:id",ctrl.users.setAvatar);
router.post("/user/add/skill/:id", ctrl.users.addSkills);

//tags
router.post("/tags",ctrl.tags.createTag);
router.get("/tags",ctrl.tags.tags);
router.post("/types",ctrl.types.createTypes);
router.get("/types",ctrl.types.types);


module.exports = router;