require('dotenv').config();

const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
    twiml.message('He recibido tu mensaje');
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString);
});

app.listen(4000, () => {
    console.log('Server on port 4000')

})