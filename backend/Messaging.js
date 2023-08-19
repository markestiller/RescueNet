import Twilio from 'twilio';
import dotenv from 'dotenv'
const accountSid = 'ACae1a181aed95ff9a8d0e6936072c894a';
dotenv.config({path: "./.env.local"});
const authToken = process.env.TWILIO_AUTH;

function createMessage(person, phoneNumber, city) {
    console.log(authToken);
    const client = new Twilio(accountSid, authToken);
    client.messages
        .create({
            body: `Hello ${person}, there is a fire in ${city}`,
            from: '+16188511351',
            to: phoneNumber,
        })
        .then((message) => console.log(message.sid))
        // .done();
}
export { createMessage };
