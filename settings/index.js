module.exports = {
    SERVER:{
        port:5000,
        static_url: "static",
        media_url: "media",
        cors:{
            allowed_host:['*']
        },
        security:{
            jwt_secret_key:"ufvghf_crexythj__bhgctwazes_xdcfvb8-65632a6t6_6hg438:76897098y_87g76f9"
        }
    },
    DATABASE:{
        default:{
            name:"hackathon",
            user:"hackathon",
            password:"hackathon",
            port:"33769",
            host:"ds233769.mlab.com"
        },
        development:{
            name:"",
            user:"",
            password:"",
            port:"",
            host:""
        },
        producction:{
            name:"",
            user:"",
            password:"",
            port:"",
            host:""
        }
    }
};