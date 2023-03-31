const mongoose = require('mongoose');

const {MONGO_URI} = process.env;

exports.connect = () => {
    mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err
    );
    console.error(error);
    process.exit(1)
    });
};
