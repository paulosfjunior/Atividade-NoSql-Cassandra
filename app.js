const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routes = require('./routes/routes');
const cassandra = require('./cassandra');

const port = 8080;
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use('/', routes);

app.listen(port, (err) => {
	try {
		if (err) throw err;
    	console.log(`Listening in port ${port}`);
	} catch (err) {
    	console.log(err);
	}
});

module.exports = app;