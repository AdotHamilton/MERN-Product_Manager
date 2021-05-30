const express = require('express');
var cors = require('cors')
const app = express();
const port = 8000;
app.use(express.json(), cors(), express.urlencoded({ extended: true }));
require('./server/config/mongoose.config');
require('./server/routes/Product.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );