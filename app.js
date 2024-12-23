import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import router from "./src/routes/routes.js";

// Configure .env file.
dotenv.config({ path: ".env" });

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/api", router)

app.get("/", (req, res) => {
    res.status(200).send("Welcome to our server.");
});

export default app;
