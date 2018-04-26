//require("../utils/Proptypes")();
const models = require("../models");
const randomColor = require('../utils/randomColor');
const uploadfile = require('../utils/fileupload');
const NodeGeocoder = require('node-geocoder');

var options = {
    provider: 'google',

    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: 'AIzaSyAyH_refWHI9X9fYQtu6WdKi8mMinrNfHU', // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);

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

    let hackathon = new models.Hackathon({
        place: req.body.place,
        type:req.body.type.split(","),
        invite:req.body.invite.split(","),
        title:req.body.title,
        titleLink:req.body.title.replaceAll(' ','-').toLowerCase(),
        address:req.body.address,
        date:req.body.date,
        linkreserv:req.body.linkreserv,
        overvies:req.body.overvies,
        shedule:req.body.shedule,
        userId:req.body.userId,
        critrials:[],
        judges:[],
        prizes:[],
        challenge:[],
        photoPerfil:'https://ui-avatars.com/api/?size=1024&background='+randomColor()+'&color=fff&name='+req.body.title.charAt(0),
        public:false
    });

    geocoder.geocode(req.body.address + ',' + req.body.place, function(err, response) {
        if(err){
            res.status(500).json({message:err});
        } else {
            console.log(response);
            hackathon.coordinates = response;
            hackathon.save((err,response) => {
                if(err){
                    res.status(500).json({message:err});
                } else {
                    res.status(200).json({message:"Create success",data:response});
                }
            });
        }
    });
};

exports.update = (req,res) => {
    let hackathon = new models.Hackathon({
        _id:req.params.id,
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
        banner:req.body.banner,
        photoPerfil:'https://ui-avatars.com/api/?size=1024&background='+randomColor()+'&color=fff&name='+req.body.title.charAt(0),
        administrators:{type:Array,required:true}

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


//console.log();


exports.addTypes = (req,res) => {
    models.Hackathon.findOneAndUpdate({_id: req.params.id}, {$push: {type: req.body.types}},(err,response) => {
        if(err) throw res.status(500).json({success:false});
        res.status(200).json({success:true,data:response});
    });
};

exports.addHackers = (req,res) => {
    models.Hackathon.findOneAndUpdate({_id: req.params.id}, {$push: {hakers: req.body.haker}},(err,response) => {
        if(err) throw res.status(500).json({success:false});
        res.status(200).json({success:true,data:response});
    });
};

exports.addAdmin = (req,res) => {
    models.Hackathon.findOneAndUpdate({_id: req.params.id}, {$push: {administrators: req.body.admin}},(err,response) => {
        if(err) throw res.status(500).json({success:false});
        res.status(200).json({success:true,data:response});
    });
};

exports.addJudges = (req,res) => {
    models.Hackathon.findOneAndUpdate({_id: req.params.id}, {$push: {judges:{
        userId:req.body.userId,
        name:req.body.name,
        job:req.body.job
    }}}, (err, response) => {
        if(err) throw res.status(500).json({success:false});
        res.status(200).json({success:true,data:response});
    });
};

exports.addPatnerts = (req,res) => {
    models.Hackathon.findOneAndUpdate({_id: req.params.id}, {$push: {patnerts: req.body.patnert}},(err,response) => {
        if(err) throw res.status(500).json({success:false});
        res.status(200).json({success:true,data:response});
    });
};

exports.addChallenge = (req,res) => {
    models.Hackathon.findOneAndUpdate({_id: req.params.id}, {$push: {challenge: {
        title:req.body.title,
        content:req.body.content
    }}},(err,response) => {
        if(err) throw res.status(500).json({success:false});
        res.status(200).json({success:true,data:response});
    });
};

exports.addPrizes = (req,res) => {
    models.Hackathon.findOneAndUpdate({_id: req.params.id}, {$push: {challenge: {
                img:req.hostname + '/cup.png',
                lugar:req.body.lugar,
                rode:req.body.rode
            }}},(err,response) => {
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
    models.Hackathon.findOneAndUpdate({ _id: req.params.id }, { $set: { photoPerfil: host + '/' + uploadfile(req.files.photoPerfil,'hackathon_') } }, { new: true }, (err, response) => {
        if(err) throw res.status(500).json({success:false});
        res.status(200).json({success:true,data:response});
    });
};

exports.updateBanner = (req,res) => {
    var host;
    if( req.hostname === 'localhost'){
        host = 'http://localhost:1989';
    } else {
        host = 'http://'+req.hostname;
    }
    models.Hackathon.findOneAndUpdate({ _id: req.params.id }, { $set: { banner: host + '/' + uploadfile(req.files.photo,'hackaton_banner') } }, { new: true }, (err, response) => {
        if(err) throw res.status(500).json({success:false});
        res.status(200).json({success:true,data:response});
    });
};

exports.updateInfo = (req,res) => {

    models.Hackathon.findOneAndUpdate({ _id: req.params.id }, { $set: {
        place: req.body.place,
        title: req.body.title,
        titleLink: req.body.title.replaceAll(' ','-').toLowerCase(),
        address: req.body.address,
        date: req.body.date,
        linkreserv: req.body.linkreserv,
        overvies: req.body.overvies,
        shedule: JSON.parse(req.body.shedule),
        type: req.body.type,
        judges:JSON.parse(req.body.judges),
        critrials: JSON.parse(req.body.critrials),
        prizes:JSON.parse(req.body.prizes),
        challenge:JSON.parse(req.body.challenge),
        sponsors:JSON.parse(req.body.sponsor)
    } }, { new: true }, (err, response) => {
        if(err) throw res.status(500).json({success:false});
        res.status(200).json({success:true,data:response});
    });
};

exports.join = (req,res) => {
    models.Hackathon.findOneAndUpdate({_id: req.params.id}, {$push: {hackers: req.body.userId}},(err,response) => {
        if(err) throw res.status(500).json({success:false});
        res.status(200).json({success:true,data:response});
    });
};