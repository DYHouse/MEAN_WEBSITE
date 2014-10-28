var express = require('express');
var router = express.Router();

var mongoose =require('mongoose');//引用mongoose模块
mongoose.connect('mongodb://localhost/test');//连接数据库

var userSchema = new mongoose.Schema({
    name:{first:String,last:{type:String,trim:true}},
    age:{type:Number,min:0}
});
var PUser = mongoose.model('PowerUsers', userSchema);

/* GET users listing. */
router.get('/', function(req, res) {
    PUser.find({}).exec(function(err, result) {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        };
    });
});

module.exports = router;
