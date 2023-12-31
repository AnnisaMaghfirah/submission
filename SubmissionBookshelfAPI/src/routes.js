const {
  addBook,
  getAllBooks,
  getBook,
  editBook,
  deleteBook,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBook,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooks,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBook,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBook,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBook,
  },
  {
    method: "*",
    path: "/{any*}",
    handler: () => "Halaman tidak ditemukan",
  },
];

module.exports = routes;
