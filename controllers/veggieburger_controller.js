var express = require("express");
var veggieburger = require("../models/veggieburger.js");
var router = express.Router(); 
router.get("/", function(req, res) {
  veggieburger.findWhole(function(getsomewholeresults){
    console.log("next line is getsomeresults");
    veggieburger.findEaten(function(getsomeeatenresults){
      console.log("next line is getsomeresults");
      res.render('template1', {getsomeeatenresults, getsomewholeresults});
    });
  });
});
router.post("/", function(req, res) {
  console.log(req.body.bname);
  var x = req.body.bname;
  veggieburger.addBurger(x, function(getsomeresults){
    console.log(getsomeresults);
    res.redirect("/");
  });
});

router.get("/eat/:burger", function(req, res) {
  console.log(req.params.burger);
  var x = req.params.burger;
  veggieburger.eatBurger(x, function(getsomeresults){
    console.log(getsomeresults);
    res.redirect("/");
  });
});


module.exports = router;

