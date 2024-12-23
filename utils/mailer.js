import nodemailer from "nodemailer"

export const sendMail = async (from, to, subject, content) => {
    const transporter = nodemailer.createTransport({
        service: process.env.SMPT_SERVICE,
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASS
        }
    });

    const mailOption = {
        from: from,
        to: to,
        subject: subject,
        html: content
    }

    await transporter.sendMail(mailOption);
    console.log("<---------------------------Mail--------------------------->");
    console.log("Successfully send mail for welcome.");
}