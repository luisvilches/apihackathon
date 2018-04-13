const Model = require('../models');
const randomColor = require('../utils/randomColor');
exports.createUser = (req,res) => {
    let user = new Model.User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar: 'https://ui-avatars.com/api/?size=1024&background='+randomColor()+'&color=fff&name='+req.body.name.charAt(0)+'+'+req.body.name.charAt(1)
    });

    user.save((err,user) => {
        if(err) throw (res.json({success:false}));
        console.log("register =>",user);
        res.json({success:true,data:user})
    });
};

exports.user = (req,res) => {
    Model.User.findById({_id:req.params.id}, (err,response) => {
        if(err) throw (res.json({success: false}));
        res.status(200).json(response);
    })
};
