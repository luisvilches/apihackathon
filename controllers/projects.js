//require("../utils/Proptypes")();
const models = require("../models");
const randomColor = require('../utils/randomColor');
const uploadfile = require('../utils/fileupload');




exports.create = (req,res) => {

    var host;
    if( req.hostname === 'localhost'){
        host = 'http://localhost:1989';
    } else {
        host = 'http://'+req.hostname;
    }

    let project = new models.Project({
        name: req.body.name,
        skills:req.body.skills.split(","),
        stract:req.body.stract,
        titleLink:req.body.name.trim().replaceAll(' ','-').toLowerCase(),
        hackathonId:req.body.hackathonId,
        website:req.body.website,
        description:req.body.description,
        userId:req.body.userId,
        hackers:[],
        image:host + '/' + uploadfile(req.files.image,'project_')//req.body.image//'https://ui-avatars.com/api/?size=1024&background='+randomColor()+'&color=fff&name='+req.body.name.charAt(0)
    });

    project.save((err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({success:true,data:response});
        }
    });
};

exports.find = (req,res) => {
    models.Project.find({},(err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Find success",totals:response.length,data:response});
        }
    })
};


exports.delete = (req,res) => {
    models.Project.remove({_id:req.params.id},(err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Remove succes",data:response});
        }
    })
};

exports.findById = (req,res) => {
    models.Project.findById({_id:req.params.id},(err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Find success",data:response});
        }
    })
};

exports.findOne = (req,res) => {
    models.Project.findOne({titleLink:req.params.link},(err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Find success",data:response});
        }
    })
};

exports.findOneHack = (req,res) => {
    models.Project.find({hackathonId:req.params.id},(err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Find success",data:response});
        }
    })
};

exports.join = (req,res) => {
    let mod = {projectId:req.body.userId,type:req.body.type};
    models.Project.findOneAndUpdate({_id: req.params.id}, {$push: {hackers: mod}},(err,response) => {
        if(err) throw res.status(500).json({success:false});
        res.status(200).json({success:true,data:response});
    });
};

exports.updatePhoto = (req,res) => {
    var host;
    if( req.hostname === 'localhost'){
        host = 'http://localhost:1989';
    } else {
        host = 'http://'+req.hostname;
    }
    models.Project.findOneAndUpdate({ _id: req.params.id }, { $set: { image: host + '/' + uploadfile(req.files.image,'project_') } }, { new: true }, (err, response) => {
        if(err) throw res.status(500).json({success:false});
        res.status(200).json({success:true,data:response});
    });
};

exports.updateInfo = (req,res) => {

    models.Hackathon.findOneAndUpdate({ _id: req.params.id }, { $set: {
            name: req.body.place,
            titleLink: req.body.name.replaceAll(' ','-').toLowerCase(),
            stract:req.body.stract,
            website: req.body.website,
            description: req.body.description,
            skills: JSON.parse(req.body.skills),
            feedback:req.body.feedback,
            socials:{
                facebook:req.body.facebook,
                twitter:req.body.twitter,
                linkedin:req.body.linkedin,
                other:req.body.other
            }
        } }, { new: true }, (err, response) => {
        if(err) throw res.status(500).json({success:false});
        res.status(200).json({success:true,data:response});
    });
};