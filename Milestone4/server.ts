import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import path from 'path';
import router from './routes';

const app = express();

app.set('view engine', 'ejs');
app.set("port", 3000);
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(app.get("port"), () =>
    console.log("[server] http://localhost:" + app.get("port"))
  );
  
