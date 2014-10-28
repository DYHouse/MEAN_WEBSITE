/**
 * Created by administrator on 2014/9/15.
 */
var index = require("./../server/domain/index"),
    users = require("./../server/domain/users");

module.exports = function(app) {
   app.use("/",index);
   app.use("/users",users);
}