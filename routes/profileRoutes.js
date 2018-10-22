const mongoose = require('mongoose');

module.exports = app => {
    app.get("/profile/data", (req,res) => {
        res.send(req.user);
    }); 
}