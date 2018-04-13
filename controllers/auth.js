const models = require('../models');
const {createTokens} = require('../utils/tokens');


exports.auth =  (req, res) => {
    //find the user
    models.User.findOne({mail: req.body.mail},(err, user) => {
        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {

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