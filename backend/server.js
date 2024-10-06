const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./middleware/db');  
dotenv.config();

const app = express();

app.use(express.json());

connectDB();  

app.use('/api/users', userRoutes);

const PORT =5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
