# 📚 Books REST API (Node.js + Express)

A simple REST API to manage a list of books using **Node.js** and **Express.js**.
This project demonstrates core backend concepts like CRUD operations, routing, and handling JSON data.

---

## 🚀 Features

* 📖 Get all books
* 🔍 Get a single book by ID
* ➕ Add a new book
* ✏️ Update an existing book
* ❌ Delete a book
* ⚡ Fast and simple API

---

## 🛠 Tech Stack

* Node.js
* Express.js
* JavaScript (ES6)

---

## 📂 Project Structure

```id="prj01"
books-api/
│── server.js
│── package.json
```

---

## ▶️ How to Run the Project

1. Clone the repository:

```bash id="run01"
git clone <your-repo-link>
```

2. Navigate to the project folder:

```bash id="run02"
cd books-api
```

3. Install dependencies:

```bash id="run03"
npm install
```

4. Start the server:

```bash id="run04"
node server.js
```

5. Open in browser:

```id="run05"
http://localhost:3000/books
```

---

## 📡 API Endpoints

### 📖 Get All Books

```
GET /books
```

---

### 🔍 Get Book by ID

```
GET /books/:id
```

---

### ➕ Create a New Book

```
POST /books
```

**Request Body:**

```json id="body01"
{
  "title": "Clean Code",
  "author": "Robert C. Martin"
}
```

---

### ✏️ Update Book

```
PUT /books/:id
```

---

### ❌ Delete Book

```
DELETE /books/:id
```

---

## 📌 Sample Response

```json id="res01"
[
  {
    "id": 1,
    "title": "Atomic Habits",
    "author": "James Clear"
  },
  {
    "id": 2,
    "title": "Deep Work",
    "author": "Cal Newport"
  }
]
```

---

## 🧠 Concepts Covered

* REST API
* Express.js Routing
* HTTP Methods (GET, POST, PUT, DELETE)
* JSON Handling (`express.json()`)
* Middleware Basics
* CRUD Operations

---

## 🧪 Testing the API

You can test the endpoints using:

* Postman
* Thunder Client (VS Code Extension)
* Browser (for GET requests)

---


## 🙌 Acknowledgement

This project was built as part of a learning task to understand backend development and REST APIs using Node.js.

---

⭐ Feel free to fork and improve this project!
