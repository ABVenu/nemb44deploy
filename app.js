var cron = require('node-cron');
const nodemailer = require("nodemailer");
require("dotenv").config();

cron.schedule('* * * * *', async () => {
    try{
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",  /// changes depending upon your host email
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: process.env.LOGIN_EMAIL,
              pass: process.env.LOGIN_EMAIL_PASSWORD,
            },
          });
        
          const info = await transporter.sendMail({
            from: '"Venugopal Burli 👻"', // sender address
            to: "venugopal.burli@masaischool.com,zajampratik@gmail.com,tusharjaiswal8090@gmail.com,irsuhail2000@gmail.com,ranvishwakarma122@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
          });
        
          console.log("Mail Sent")
    }catch(err){
        console.log("error in sending mail")
        console.log(err)

    }
  });