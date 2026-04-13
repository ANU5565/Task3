const express = require("express");
const app = express();

app.use(express.json());

let books = [
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "Deep Work", author: "Cal Newport" }
];

app.get("/books", (req, res) => {
    res.json(books);
});

app.get("/books/:id", (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
});
app.get("/", (req, res) => {
  res.send("📚 Books API is running");
});

app.post("/books", (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({ message: "Title & Author required" });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author
    };

    books.push(newBook);
    res.status(201).json(newBook);
});


app.put("/books/:id", (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));

    if (!book) return res.status(404).json({ message: "Book not found" });

    const { title, author } = req.body;

    book.title = title || book.title;
    book.author = author || book.author;

    res.json(book);
});


app.delete("/books/:id", (req, res) => {
    const index = books.findIndex(b => b.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    books.splice(index, 1);
    res.json({ message: "Book deleted" });
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
