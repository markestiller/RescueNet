import Twilio from 'twilio';
const accountSid = 'ACae1a181aed95ff9a8d0e6936072c894a';
const authToken = process.env.TWILIO_AUTH_TOKEN;

function createMessage(messageReciever) {
    const client = new Twilio(accountSid, authToken);
    client.messages
        .create({
            body: 'test twilio',
            from: '+16188511351',
            to: '+12262800252',
        })
        .then((message) => console.log(message.sid))
        .done();
}
export { createMessage };
