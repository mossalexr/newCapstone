const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;


connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const attractionsRouter = require('./routes/attractions');
const contactsRouter = require('./routes/contact');

app.use('/attractions', attractionsRouter);



app.use('/contact', contactsRouter);
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
//   });
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}