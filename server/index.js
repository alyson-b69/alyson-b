const path = require("path");
const express = require("express");
const transporter = require("./config");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const buildPath = path.join(__dirname, "..", "build");
app.use(express.json());
app.use(express.static(buildPath));

app.post("/send", (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.EMAIL,
      subject: req.body.subject,
      html:
        req.body.name +
        " (" +
        req.body.email +
        ") " +
        " send this message : " +
        req.body.message,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log("transporter send", err);
        res.status(500).send({
          success: false,
          message: "Something went wrong. Try again later, " + err,
        });
      } else {
        res.send({
          success: true,
          message: "Thanks for contacting us. We will get back to you shortly",
        });
      }
    });
  } catch (error) {
    console.log("post", error);
    res.status(500).send({
      success: false,
      message: "Something went wrong on transporter post",
    });
  }
});

app.listen(3000, () => {
  console.log("server start on port 3000");
});
