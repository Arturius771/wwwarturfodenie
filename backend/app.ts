const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/api.js');

let port = 3000;

app.use('/api', api);
app.use(bodyParser.json());
app.get('/', (req: any, res: any) => {
  res.send('Hello from express server');
});
app.listen(port, () => console.log('Server runs on localhost:' + port));
