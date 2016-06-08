'use strict';

var path = process.cwd();

module.exports = function (app) {

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
		
	app.route('/api/whoami/')
		.get(function(req, res) {
			//first string inside parentheses
			var rgx = /\(([^)]+)\)/;
		    var obj = {};
		    //check for proxy first
		    obj.ipaddress = req.headers['x-forwarded-for'] || 
    						req.connection.remoteAddress || 
    						req.socket.remoteAddress ||
    						req.connection.socket.remoteAddress;
		    obj.language = req.acceptsLanguages()[0];
		    obj.software = req.headers["user-agent"].match(rgx)[1];
		    res.json(obj);
		});

};
