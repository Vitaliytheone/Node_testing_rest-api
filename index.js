import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 3000;
const app = express();
const DB_URL = `mongodb+srv://vitaliy:user@cluster0.nytbp.mongodb.net/?retryWrites=true&w=majority`;

app.use(express.json());
app.use("/api", router);
app.use(express.static("static"));
app.use(fileUpload());

async function createApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log("SERVER IS WORKING"));
    } catch (e) {
        console.log(e);
    }
}

createApp();
