//require("../utils/Proptypes")();
const models = require("../models");

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};


exports.find = (req,res) => {
    models.Hackathon.find({},(err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Find success",totals:response.length,data:response});
        }
    })
};

exports.create = (req,res) => {

    console.log(req.body.userId);

    let hackathon = new models.Hackathon({
        place: req.body.place,
        type:req.body.type,
        invite:req.body.invite,
        title:req.body.title,
        titleLink:req.body.title.replaceAll(' ','-').toLowerCase(),
        address:req.body.address,
        date:req.body.date,
        linkreserv:req.body.linkreserv,
        overvies:req.body.overvies,
        shedule:req.body.shedule,
        userId:req.body.userId,
        public:false
    });
    hackathon.save((err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Create success",data:response});
        }
    });
};

exports.update = (req,res) => {
    let hackathon = new models.Hackathon({
        place:req.body.place,
        type:req.body.type,
        invite:req.body.invite,
        title:req.body.title,
        titleLink:req.body.title.replaceAll(' ','-').toLowerCase(),
        address:req.body.address,
        date:req.body.date,
        linkreserv:req.body.linkreserv,
        overvies:req.body.overvies,
        shedule:req.body.shedule,
        userId:req.body.userId,
        public:req.body.public,
        _id:req.params.id
    });

    models.Hackathon.update({_id:req.params.id},hackathon,(err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Update success",data:response});
        }
    });
};

exports.delete = (req,res) => {
    models.Hackathon.remove({_id:req.params.id},(err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Remove succes",data:response});
        }
    })
};

exports.findById = (req,res) => {
    models.Hackathon.findById({_id:req.params.id},(err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Find success",data:response});
        }
    })
};

exports.findOne = (req,res) => {
    models.Hackathon.findOne({titleLink:req.params.link},(err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Find success",data:response});
        }
    })
};

exports.publish = (req,res) => {
    models.Hackathon.update({_id: req.params.id}, {public: true}, function (err, response){
        if (err) {
            return res.status(500).send({
                success: false,
                message: "Internal Server Error. Update fenomenos"
            });
        } else {
            return res.json({
                success: true,
                message: 'Firma de fenomenos exitosa.',
                data: response
            });
        }
    });
};

exports.findPublish = (req,res) => {
    models.Hackathon.find({public:true},(err,response) => {
        if (err) {
            return res.status(500).send({
                success: false,
            });
        } else {
            return res.json({
                success: true,
                data: response
            });
        }
    })
};