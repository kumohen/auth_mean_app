const Authentication = require("./controllers/Authentication");
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate('jwt',{session:false})
const requireSignin = passport.authenticate('local',{session:false})

module.exports = function(app){
    app.get("/",requireAuth,function(req,res){
        res.send("it is protected routes");
    })
    app.post('/signin',requireSignin,Authentication.signin);
    app.post('/signup',Authentication.signup);
}