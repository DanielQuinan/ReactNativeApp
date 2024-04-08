require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado ao MongoDB Atlas');

        app.use(express.json());
        app.use('/api/users', routes);

        app.listen(PORT, () => {
            console.log(`Servidor ouvindo na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao conectar no MongoDB Atlas:', error);
    }
};

main();

app.use(express.json());
app.use('/api/users', routes);

