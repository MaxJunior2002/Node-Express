import mongoose from "mongoose";

mongoose.connect("mongodb+srv://maxjunior2002:022460@cluster0.r43gpme.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;