var express = require("express");
var http = require("http");
var fs = require("fs");
//var request = require("request");
var ftl = require("node-ftl");

var app = express();

app.use('/', function(req, res){

	res.sendFile(__dirname + '/index.html');

});


var router = express.Router();
router.get("/ftl", function(req, res) {
	var template = req.body.template;
    var dataModel = req.body.dataModel;
	ftl.processTemplate({
        data: dataModel,
        settings: {
            encoding: 'utf-8',
            viewFolder: path.join(process.cwd(), 'nodeFtl/')
        },
        filename: 'demo.ftl'
    }).on('end', function(err, html) {
        res.send(html);
    });
});
app.use('/api', router);
app.listen(8080);