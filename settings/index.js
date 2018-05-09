
module.exports = {
    SERVER:{
        port:1989,
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
        development:{
            name:"hackathon",
            user:"hackathon",
            password:"hackathon",
            port:"33769",
            host:"ds233769.mlab.com",
            provider:"mlab"
        },
        producction:{
            name:"hackathon-prod",
            user:"admin",
            password:"admin",
            port:"61890",
            host:"ds161890.mlab.com",
            provider:"mlab"
        }
    }
};