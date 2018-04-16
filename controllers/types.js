const Model = require('../models');
const randomColor = require('../utils/randomColor');

exports.createTypes = (req,res) => {
    let tag = new Model.Types({
        types: [req.body.tag]
    });

    tag.save((err,user) => {
        if(err) throw (res.json({success:false}));
        console.log("register =>",user);
        res.json({success:true,data:user})
    });
};

exports.types = (req,res) => {
    Model.Types.find({}, (err,response) => {
        if(err) throw (res.json({success: false}));
        res.status(200).json(response);
    })
};
