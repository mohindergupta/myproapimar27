var express = require('express'),
    app = express(),
    port = process.env.PORT || '4000';
    
var routes = require('./api/routes/routes');

if (process.env.VCAP_APPLICATION) {
	host = '0.0.0.0';												//overwrite defaults
	port = process.env.PORT;
}
app.set('port', port);

routes(app);

app.listen(port);
console.log('MyPro REST API Server listening at port ', +port);