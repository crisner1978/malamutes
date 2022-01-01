const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY)

export default function helloAPI(req, res) {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Phone: ${body.phone}\r\n
    Message: ${body.message}\r\n
  `;

  const data = {
    to: "crisner1978@gmail.com",
    from: "hello@snowlegendmalamutes.com",
    subject: "New Puppy Info Request",
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }

  mail.send(data)

  console.log(body)
  res.status(200).json({ status: 'Ok' })
}
