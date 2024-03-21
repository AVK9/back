import mongoose from "mongoose";
import app from "./app";
const DB_HOST="mongodb+srv://AVK9:kgebzFgJiYdIqV5X@cluster0.p0bd95a.mongodb.net/?retryWrites=true&w=majority"


const { DB_HOST: string, PORT = 8000 } = process.env;

mongoose.set('strictQuery', true);

export const serverMain = () => {
  mongoose
    .connect(DB_HOST)
    .then(() => {
      app.listen(PORT, () => {
        console.log('Database connection successful');
      });
    })
    .catch(error => {
      console.log(error.message);
      process.exit(1);
    });
};
serverMain();


