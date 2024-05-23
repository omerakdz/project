import { MongoClient, Collection, ObjectId } from "mongodb";
import express, { Express } from "express";

const uri = "mongodb+srv://omerakdeniz:omer2004@webontwikkeling.avblvoy.mongodb.net/?retryWrites=true&w=majority&appName=Webontwikkeling";
const client = new MongoClient(uri);
