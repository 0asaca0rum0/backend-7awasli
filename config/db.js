require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.URI;

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    try {
      await mongoose.connect("mongodb+srv://foxdeath100:<password>@database.prsfzzi.mongodb.net/?retryWrites=true&w=majority&appName=database");
      console.log("local");
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = { connect };
