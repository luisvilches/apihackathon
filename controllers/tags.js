const Model = require('../models');
const randomColor = require('../utils/randomColor');

exports.createTag = (req,res) => {
    let tag = new Model.Tags({
        tags: [req.body.tag]
    });

    tag.save((err,user) => {
        if(err) throw (res.json({success:false}));
        console.log("register =>",user);
        res.json({success:true,data:user})
    });
};

exports.tags = (req,res) => {
    Model.Tags.find({}, (err,response) => {
        if(err) throw (res.json({success: false}));
        res.status(200).json(response);
    })
};
