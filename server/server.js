require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db-connect');

const PORT = process.env.PORT || 3500;

connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Router
app.use('/api', require('./routes/task'));

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
})

