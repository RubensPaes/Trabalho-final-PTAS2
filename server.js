const express = require('express');
const app = express();
const port = 3000;
const bookRoutes = require('./routes/bookRoutes');

app.use(express.json());
app.use('/books', bookRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});