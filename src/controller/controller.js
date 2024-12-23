import { sendMail } from "../../utils/mailer.js";

export const sendMailController = async(req, res, next) => {
    try {

        console.log(req.body);
        

        const {payload} = req.body;
        const {from, to, subject, content} = payload;

        sendMail(from, to, subject, content);
        res.status(200).json({status: true, msg: "Mail Sent Successfully!"});
    } catch (error) {
        console.log(error, "errorr");
    }
}