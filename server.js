const express = require("express");
const cors = require('cors')

const app = express();
app.use(cors())

const PORT = 3000;

const books = {
    name: "Harry Potter",
    author: "JK Rowling",
    price: "$400"
}

app.get("/", (req, res)=> {
    res.send("Hello world");
})

app.get("/books", (req, res) => {
    res.send(books);
})

app.listen(PORT, () => {
    console.log("App listenting at port " + PORT);
})