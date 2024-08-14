// 2nd way to connect with database
// require('dotenv').config({
//   path: './env',
// });
// const { connectionDB } = require('./db/index.js');

import dotenv from 'dotenv';
import connectionDB from './db/index.js';

dotenv.config({
  path: './env',
});

connectionDB();

/*1st way to connect with database.
import mongoose from 'mongoose';
import express from 'express';
import { db } from './constants.js';*/

// We will not try this approach inspite, we will go with 2nd option in which we are just having the dataBase connect fn in separate file.
/*
const app = express();
const portnumber = process.env.PORT;

// using iife => immediately invoked function expression. Professional approach to use ';' in front of iife statement.
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${db}`); // in this line database is get connected.
    // now we can listen using express.
    app.on(error => {
      console.log(`Error while connecting App. ${error}`);
      throw error;
    });

    app.listen(portnumber => {
      console.log(`app is listening on port: ${portnumber}`);
    });
  } catch (error) {
    console.log('Error: ', error);
    throw error;
  }
})();
*/
