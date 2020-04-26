import React, { Component } from "react";
import API from "../utils/API";
import "./pages.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Wrapper from "../components/Layout/wrapper";
import Container from "../components/Layout/container";
import BookCard from "../components/Card/BookCard";
import SearchForm from "../components/Search/SearchForm";
import SearchResults from "../components/SearchResults";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  componentDidMount() {

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.searchBooks(this.state.search)
      .then(res => {
        let books = res.data.items;
        console.log(books);


        books.forEach(book => {
          let title = book.volumeInfo.title;
          let authors = book.volumeInfo.authors;
          let description = book.volumeInfo.description;
          let image = book.volumeInfo.imageLinks.thumbnail;
          let link = book.selfLink;

          this.setState({
            books: books,
            title: title,
            authors: authors,
            description: description,
            image: image,
            link: link
          });
        });
      })
      .catch(err => console.log(err));

  };


  handleOnClick = event => {
    event.preventDefault();
    API.saveBook({
      title: this.state.title,
      authors: this.state.authors,
      description: this.state.description,
      image: this.state.image,
      link: this.state.link
    })
      .then(res => alert("Book added to your bookshelf!"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>

        <Wrapper>
          <h1>Search For A New Book!</h1>
          <Container>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              title={this.state.title}
            />
          </Container>
          <SearchResults books={this.state.books} />

          <Container>
            <BookCard
              id={this.state.books.id}
              key={this.state.books.id}
              title={this.state.title}
              authors={this.state.authors}
              description={this.state.description}
              image={this.state.image}
              link={this.state.link}
            />
          </Container>


        </Wrapper>

      </div>
    );
  }
}
export default Home;
