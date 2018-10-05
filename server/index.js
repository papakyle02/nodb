const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

const data = "This string you can just have it be whatever message you want to your future self."

app.get('/data', () => (req, res) => {
    res.status(200).send(data);
})

const port = 5000;
app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
})