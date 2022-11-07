const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;



app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;


connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const attractionsRouter = require('./routes/attractions');
// const usersRouter = require('./routes/users');  
const contactsRouter = require('./routes/contact');
app.use('/attractions', attractionsRouter);
// app.use('/users', usersRouter);


// const usersRouter = require('./routes/contacts');  

app.use('/contact', contactsRouter);
// app.use('/contacts', contactsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}