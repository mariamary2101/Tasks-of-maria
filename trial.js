const express = require("express");

const app = express();

const PORT = 1300;

const books = {
    name: "Harry Potter",
    author: "JK Rowling",
    price: "$400"
}

app.get("/", (req, res)=> {
    res.send("God is love");
})

app.get("/books", (req, res) => {
    res.send(books);
})

app.listen(PORT, () => {
    console.log("App listenting at port " + PORT);
})