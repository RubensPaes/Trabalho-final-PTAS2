const books = [];

exports.createBook = (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) return res.status(400).json({ error: 'Título e autor são obrigatórios.' });
    const id = books.length + 1;
    books.push({ id, title, author });
    res.status(201).json({ message: 'Livro adicionado com sucesso', book: { id, title, author } });
};

exports.getAllBooks = (req, res) => {
    res.json(books);
};

exports.getBookById = (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (!book) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(book);
};

exports.updateBook = (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (!book) return res.status(404).json({ error: 'Livro não encontrado' });
    const { title, author } = req.body;
    if (!title || !author) return res.status(400).json({ error: 'Título e autor são obrigatórios.' });
    book.title = title;
    book.author = author;
    res.json({ message: 'Livro atualizado com sucesso', book });
};

exports.deleteBook = (req, res) => {
    const index = books.findIndex(b => b.id == req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Livro não encontrado' });
    books.splice(index, 1);
    res.json({ message: 'Livro removido com sucesso' });
};
