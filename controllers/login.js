var db = require('../models/db');

module.exports = function (req, res) {
    var username = req.body.username,
        password = req.body.password;
    if (username == 'pomelo' && password == '123456') {
        res.send({"success": true, "user": "pomelo"});
    }else{
        res.send({"success":false});
    }
};
