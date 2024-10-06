const express = require('express');
require('dotenv').config({ path: '.env' });
const userRoutes = require('./routes/userRouter');
const contactRoutes = require('./routes/contactRoutes');
const boothRoutes = require('./routes/boothRoutes');
const connectDB = require('./middleware/db');

const app = express();

app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/booths', boothRoutes);

const PORT = 6000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
