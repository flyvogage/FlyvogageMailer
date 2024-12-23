import express from "express";
import { sendMailController } from "../controller/controller.js";

const router = express.Router();

router.route("/sendMail").post(sendMailController);

export default router;