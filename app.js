
//--------------------------------------------------------------------------------//
var express = require('express');
var mongo = require('mongodb');
var bodyParser  = require('body-parser');

var intel = require('./routes/intel');
// var mongodb = require('./routes/mongodb');
// var sendMail = require('./routes/sendMail');
// var emailService = require('./lib/email.js')(credentials);

var credentials = require('./credentials.js');

var app = express();

//handlebars view engine
var handlebars = require('express-handlebars').create({
	defaultLayout: 'main',
    helpers: {
        section: function(name, options){
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
		}
	}
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//Set Port
app.set('port', process.env.PORT || 3000);

//Set Static Folder
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//--------------------------------------------------------------------------------//
//Routes
// app.get('/', function(req, res) {
// 	console.log('--------/home');
// 	res.render('home', {title: "Буде конференцію"});
// });

app.use('/', intel);

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	console.log('404: ' + req.url);
	res.status(404);
	res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error('505: ' + err.stack);
	res.status(500);
	res.render('500');
});
//--------------------------------------------------------------------------------//

//Set Port
app.listen(app.get('port'), function(){
	console.log(' ---------------------------------> START');
	console.log( 'Express started on http://localhost:' +
			app.get('port') + ';' + ' press Ctrl-C to terminate.' );
});