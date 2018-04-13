const Model = require('../models');

exports.createUser = (req,res) => {
    let user = new Model.User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar: 'https://ui-avatars.com/api/?size=1024&name=' + req.body.name.charAt(0)
    });

    user.save((err,user) => {
        if(err) throw (res.json({success:false}));
        console.log("register =>",user);
        res.json({success:true,data:user})
    });
};

exports.user = (req,res) => {
    Model.User.findById({_id:req.params.id}, (err,response) => {
        if(err) throw (res.json({success: false}))
        res.status(200).json(response);
    })
};