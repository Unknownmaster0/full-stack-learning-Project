// ******* common js method to import ************
// const mongoose = require('mongoose');
// const { db } = require('../constants.js');

import mongoose from 'mongoose';
import { db } from '../constants.js';

const connectionDB = async () => {
  console.log('Starting connectionDB function');
  try {
    const connectionObject = await mongoose.connect(
      `${process.env.MONGODB_URI}/${db}`
    );

    console.log(
      'MongoDb connected successfully. instance: ',
      connectionObject.connection.host
    );
  } catch (err) {
    console.log(`error in connection`);
    console.error(err);
    process.exit(1);
  }
};

export default connectionDB; // by using default -> you don't need to use the curly braces {} this while importing.

// common js method to export
// module.exports = {
//   connectionDB,
// };
