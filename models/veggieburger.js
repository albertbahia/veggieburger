var orm = require("../config/orm.js");
var burger = {
	findWhole: function(modelcallback) {
		orm.selectWhole(function(res) {
			modelcallback(res);
		});
	
},
	findEaten: function(modelcallback) {
		orm.selectEaten(function(res) {
			modelcallback(res);
		});
	
},

	addBurger: function(x, modelcallback) {
orm.addBurger(x, modelcallback) 
},	
	eatBurger: function(x, modelcallback) {
orm.eatBurger(x, modelcallback) 
}	

};
module.exports = burger;
