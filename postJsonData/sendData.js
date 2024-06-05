//send data to mongodb
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import InsightModel from "./blackCofferDataModel.js";
import jsonData from 'file:///C:/Users/anike/Desktop/Files/MERN/Data-Vizualization-Dashboard-Assignment/postJsonData/jsondata.json' assert { type: 'json' };

const db = "mongodb+srv://creativeap07:creativeap07@cluster0.dzqxtv5.mongodb.net/Data?retryWrites=true&w=majority&appName=Cluster0" ;


 const connectDb = async (DB) => {
  if (!DB) {
    throw new Error("Database connection string is not provided. -b");
  }

  try {
    const connect = await mongoose.connect(DB);
    console.log(
      "💚[database connected]:",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.error("💢Failed to connect to the database");
    console.error(error);
  }
};


const start = async () => {
  try {
    await connectDb(db);
    await InsightModel.create(jsonData);
    console.log("data added successfully");
  } catch (error) {
    console.error(error);
  }
};

start();
