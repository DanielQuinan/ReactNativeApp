const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,

})
.then(()=>console.log('Conectado ao MongoDB'))
    .catch((err)=> console.log(err));
}

app.use(express.json());
app.use('/api/users', routes);


app.listen(PORT, ()=>{
    console.log('escuchando')
}); 