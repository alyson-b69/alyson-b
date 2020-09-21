const nodemailer = require("nodemailer");

exports.handler = function(event, contect, callback) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
    })

    console.log(event.body);

    transporter.sendMail({
        from: 
    }, function(error, info){
        if (error){
            callback(error);
        }else{
            callback(null, {
                statusCode:200,
                body:"OK"
            })
        }
    })
}