const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 3000
const routes = require('./routes/todoRoute')
const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL,
                 {
                     useNewUrlParser: true,
                     useUnifiedTopology: true,
                 })
.then(()=>{
    console.log('connected to the database');
}).catch((err)=>console.log(err)
);

app.use(routes)

app.listen(PORT, ()=>{
    console.log(`Server Listening On PORT: ${PORT}`);
})

