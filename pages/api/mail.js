const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY)
console.log(process.env.SENDGRID_API_KEY)

export default function mailAPI(req, res) {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Phone: ${body.phone}\r\n
    Message: ${body.message}\r\n
  `;
  const thanks = `<h3>Hi ${body.name},\r\n
    \r\n
     Thank you for contacting us about our Malamute Puppies.\r\n
     We will contact you after reviewing your message.\r\n
     \r\n
     Thanks,\r\n
     \r\n
     Snow Legend Malamutes\r\n</h3>
     `;

  const data = [{
    to: "crisner1978@gmail.com",
    from: "hello@snowlegendmalamutes.com",
    subject: "New Puppy Info Request",
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  },
  {
    to: body.email,
    from: "puppies@snowlegendmalamutes.com",
    subject: "Message Received",
    text: thanks,
    html: thanks.replace(/\r\n/g, "<br>"),
  }
]

  mail.send(data).then(() => {
    console.log("emails sent successfully");
  }).catch((error) => {
    console.log(error);
  })

  res.status(200).json({ status: 'Ok' })
}
