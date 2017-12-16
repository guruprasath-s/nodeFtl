var express = require("express");
var http = require("http");
var fs = require("fs");
var ftl = require("node-ftl");
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use('/home', function(req, res){

	res.sendFile(__dirname + '/index.html');

});

var router = express.Router();
router.post("/ftl", function(req, res) {
    var template = req.body.template;
    var dataModel = req.body.dataModel;    
	ftl.processTemplate({
        data: dataModel,
        settings: {
            encoding: 'utf-8',
            viewFolder: path.join(process.cwd(), '/')
        },
        filename: 'demo.ftl'
    }).on('end', function(err, html) {
        res.send(html);
        /*res.send({
            "code": 200,
            "success": "success",
            "data": html
        });*/
    });
    //res.send(stringify(req));
});
app.use('/api', router);

app.listen(8080);