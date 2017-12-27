import express from 'express'
import nodemailer from 'nodemailer'
import Debug from 'debug'


const contact = express.Router()
const debug = Debug('server:auth')

contact.post('/', (req, res) => {
  const {name, email, message} = req.body

  let transporter = nodemailer.createTransport({
    host: 'smtpz.ukr.net',
    port: 465,
    secure: true,
    auth: {
      user: 'vit.org.ua@ukr.net',
      pass: 'aUkres392&292(1'
    }
  });
  let mailOptions = {
    from: 'vit.org.ua@ukr.net',
    //req.body.name + ' &lt;' + req.body.email + '&gt;',
  to: 'vit.org.ua@ukr.net',
  subject: 'Повідомлення з контактної форми',
  text: 'Вам повідомлення з форми контактів з наступним змістом: Імя ' + req.body.name + 'Email:  ' + req.body.email + 'Повідомлення:  ' + req.body.message,
  html: '<p>Вам повідомлення з форми контактів з наступним змістом: Імя</p><ul><li>ІМЯ:  '+req.body.name+'</li><li>EMAIL:  '+req.body.email+'</li><li>Повідомлення:  '+req.body.message+'</li></ul>'
}

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).json(error)
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.status(200).json(info);
  });
});

export default contact

