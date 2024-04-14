import * as readline from 'readline-sync';
import express from "express";
import { Car , CarModel, cars , Owner, ownerCar } from './interface';
import ejs from "ejs";
import { owners } from '../interface';

const app = express();

app.set("view engine", "ejs");
app.set("port", 3000);

app.get("/", (req, res) => {
  res.render('index', { cars });
});

app.get('/owner', (req, res) => {
  res.render('owner', { owners: owners, cars }); 
});

app.get('/detail', (req, res) => {
  res.render('detail');
});

app.listen(app.get("port"), () =>
  console.log("[server] http://localhost:" + app.get("port"))
);

// $ npx nodemon server.ts