require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express');
const app = express();
const db = require('./config/db');
const cors = require('cors');

const PORT = 5000;


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(db.url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connted to database');
    }).catch(err => {
        console.log('cannot connect to database!', err);
        process.exit();
    })
// console.log("waseem")
    app.get('/', (req, res) => {
        console.log("waseem")
        res.json('this is from your backend')
    });


    // require('./routes/posts.routes')(app);

    app.listen(PORT, () => {
        console.log(`Listening to port: ${PORT}`)
    })