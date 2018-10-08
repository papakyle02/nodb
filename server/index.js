const express = require('express');
const bodyParser = require('body-parser');
const nodb_controllers = require ('./controllers/nodb-controllers')

const app = express();

app.use(bodyParser.json())

app.get('/favorites', nodb_controllers.getChar)
app.post('/addcharacter', nodb_controllers.addChar)


const port = 5000;
app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
})