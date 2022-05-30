import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 3000;
const app = express();
const DB_URL = `mongodb+srv://vitaliy:user@cluster0.nytbp.mongodb.net/?retryWrites=true&w=majority`;
app.use(express.json());
app.use("/api", router);

async function createApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log("SERVER IS WORKING"));
    } catch (e) {
        console.log(e);
    }
}

createApp();
