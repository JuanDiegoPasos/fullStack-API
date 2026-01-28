const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');


//Middleware
app.use(cors()); //headers
app.use(express.json()); //json to js object
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4000;


app.listen(PORT, () =>{
    console.log(`SERVER PORT: ${PORT}`);
})