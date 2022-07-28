const express = require ('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 4000
const mongoose = require('mongoose')
const argonauteRoutes = require('./routes/routesArgo')
const app = express();


app.use(cors())
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/argonautes', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


app.get('/', (req, res) => res.send('Hello world!'));

app.use('/argo', argonauteRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// module.exports = connectDB;

