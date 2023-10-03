const { google } = require("googleapis");
const nodemailer = require("nodemailer");
require("dotenv").config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMail = async (mailReceive, titleReceive, textReceive, htmlReceive) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "thefoodiepiglet@gmail.com",
                clientId: GOOGLE_CLIENT_ID,
                clientSecret: GOOGLE_CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        const info = await transport.sendMail({
            from: '"TheFoodiePiglet Demo 👻" <thefoodiepiglet@gmail.com>', // sender address
            to: mailReceive,
            subject: titleReceive,
            text: textReceive,
            html: htmlReceive,

            // base
            // to: "nguyenvanhuy150602@gmail.com", // list of receivers
            // subject: "Hello ✔", // Subject line
            // text: "Hello world?", // plain text body
            // html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: ", info);

    } catch (error) {
        console.log(error)
    }
}

module.exports = sendMail;