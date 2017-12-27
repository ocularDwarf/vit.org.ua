import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import morgan from 'morgan'
import Debug from 'debug'

// import session from 'express-session'
// import mongoose from 'mongoose'
// import KnexSessionStore from 'connect-session-knex'
// import db from './controllers/config/knex'
import devOptions from './controllers/config/dev.serv.opt'
import history from 'connect-history-api-fallback'
import serveStatic from 'serve-static'

// routes
import contact from './routes/contact'

// const routes = require('./routes/countryListRoutes'),
//   Country = require('./models/countryListModel');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/countries');

// const SessionStore = KnexSessionStore(session)
// const store = new SessionStore({
//   knex: db,
//   tablename: 'session'
// })
const debug = Debug('server:app')
const port = process.env.PORT || 5000
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'))
app.use(history())
// app.use(session({
//   secret: 'secret',
//   saveUninitialized: true,
//   resave: true,
//   store: store
// }))
app.use(serveStatic(path.join(__dirname, '..', 'dist')))

devOptions(app)

// ROUTES
app.use('/api/form', contact)


app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('error404');
});

app.listen(port, () => debug('Server listen on port =', port, 'ENV =', process.env.NODE_ENV))

export default app // для тестирования
