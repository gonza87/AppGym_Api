const twilio = require("twilio");

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const sendSMS = async (telefono, texto) => {
  const message = await client.messages.create({
    body: texto,
    from: "+17372508034",
    to: telefono,
  });

  console.log("SMS enviado:", message.sid);
  return message;
};

module.exports = sendSMS;