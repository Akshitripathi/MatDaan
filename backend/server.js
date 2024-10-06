const express = require('express');
require('dotenv').config({ path: '.env' });
const userRoutes = require('./routes/userRouter');
const contactRoutes = require('./routes/contactRoutes');
const connectDB = require('./middleware/db');

const app = express();

app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);

const PORT = 6000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
