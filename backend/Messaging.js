import Twilio from 'twilio';
const accountSid = 'ACae1a181aed95ff9a8d0e6936072c894a';
const authToken = process.env.TWILIO_AUTH_TOKEN;

function createMessage(person, phoneNumber, city) {
    const client = new Twilio(accountSid, authToken);
    client.messages
        .create({
            body: `Hello ${person}, there is a fire in ${city}`,
            from: '+16188511351',
            to: phoneNumber,
        })
        .then((message) => console.log(message.sid))
        .done();
}
export { createMessage };
