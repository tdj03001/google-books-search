import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";


export default {

  searchBooks: (query) => {
    console.log(query);
    return axios.get(URL + query + process.env.APIKEY);
  },

  saveBook: function (bookData) {
    console.log(bookData);
    return axios.post("/api/books", bookData);
  },

  getBooks: function () {
    return axios.get("/api/books");
  },

  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },

  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  }
};
