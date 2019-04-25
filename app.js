const express = require('express');
const createError = require('http-errors')
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const serveStatic = require('serve-static');
const serveFavicon = require('serve-favicon');
const routes = require('./routes/routes');
const cassandra = require('./cassandra');

const port = 8080;
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(serveStatic(path.join(__dirname, 'public')));
app.use(serveFavicon(path.join(__dirname, '/public/images/favicon.ico')));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

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