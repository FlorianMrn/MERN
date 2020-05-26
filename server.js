// Import
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//
const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connexion to MongoDB
mongoose.connect(
    db,
    { useNewUrlParser: true,
      useUnifiedTopology: true }
)
.then( () => console.log("MongoDB connected"))
.catch( error => console.log(error));

// Port
const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Server up and listen on ${port}`));
