// const express = require("express");
// const app = express();

const MongoClient = require("mongodb").MongoClient;
const employeesData=require("./emp.json")

const connectionString = "mongodb://127.0.0.1:27017/";

var dbCollection;

MongoClient.connect(connectionString, async (err, db) => {
    if (err) {
      console.error("Error while connecting", err)
      return
    }
    const database = db.db("Human_Resoure")
    const dbCollection = database.collection("emp")
  
    console.log("Connected to Mongo Database")
  
    const inserting = await database.collection("emp").insertMany(employeesData)
  
    console.log(inserting)
})
  