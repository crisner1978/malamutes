const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function applicationAPI(req, res) {
  const body = JSON.parse(req.body);
  // console.log(body);

  const application = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Phone: ${body.phone}\r\n
  Address: ${body.address}\r\n
  City: ${body.city}\r\n
  State: ${body.state}\r\n
  Zip Code: ${body.zip}\r\n
  Which puppy are you interested in?: ${body.puppy}\r\n
  Why do you want an Alaskan Malamute Puppy?: ${body.why}\r\n
  Have you ever owned an Alaskan Malamute?: ${body.owned}\r\n
  Do you have a fenced yard?: ${body.fenced}\r\n
  Please list everyone in your household and their ages.: ${body.household}\r\n
  Please list other pets (type, gender, and age).: ${body.pets}\r\n
  `;

  const thanks = `<h3>Hi ${body.name},\r\n
    \r\n
     We will review your application for ${body.puppy}.\r\n
     After review, we will contact you regarding the status of your application.\r\n
     \r\n
     Thanks,\r\n
     \r\n
     Snow Legend Malamutes\r\n</h3>
     `;

  const data = [
    {
      to: "crisner1978@gmail.com",
      from: "hello@snowlegendmalamutes.com",
      subject: "Adoption Application",
      text: application,
      html: application.replace(/\r\n/g, "<br>"),
    },
    {
      to: body.email,
      from: "puppies@snowlegendmalamutes.com",
      subject: "Application Received",
      text: thanks,
      html: thanks.replace(/\r\n/g, "<br>"),
    },
  ];

  mail
    .send(data)
    .then(() => {
      console.log("emails sent successfully");
    })
    .catch((error) => {
      console.log(error);
    });
  res.status(200).json({ status: "Ok" });
}
