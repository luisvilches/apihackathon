const models = require('../models');
const {createTokens} = require('../utils/tokens');


exports.auth =  (req, res) => {
    //find the user
    console.log("se ejecuta la pedida al login");
    models.User.findOne({email: req.body.email},(err, user) => {
        if (err) throw err;

        if (!user) {
            console.log("fallo !user");
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
            console.log(user)
            // check if password matches
            if (user.password != req.body.password) {
                console.log("fallo Authentication failed. Wrong password.");
                console.log(user.password, req.body.password);
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });

            } else {
                // return the information including token as JSON
                console.log("login =>",user)
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: createTokens(user),
                    user: user
                });
            }
        }
    });
};