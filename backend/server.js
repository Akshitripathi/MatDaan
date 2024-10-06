const express = require('express');
require('dotenv').config({ path: '.env' });
const cors= require('cors');
const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');
const boothRoutes = require('./routes/boothRoutes');
const voterRoutes = require('./routes/voterRoutes');
const connectDB = require('./middleware/db');

const app = express();

app.use(cors());
app.use(express.json());
connectDB();

app.use('/api/users', userRoutes);
app.use('/api', contactRoutes);
app.use('/api/booths', boothRoutes);
app.use('/api/voters', voterRoutes);

const PORT = 6000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
