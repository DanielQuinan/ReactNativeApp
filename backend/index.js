require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para parsear JSON

async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado ao MongoDB Atlas');

        app.use('/api/users', userRoutes); // Rotas de usuário
        app.use('/api/books', bookRoutes); // Rotas de livros, adicione esta linha

        app.listen(PORT, () => {
            console.log(`Servidor ouvindo na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao conectar no MongoDB Atlas:', error);
    }
};

main();