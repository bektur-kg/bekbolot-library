import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bookAddedToCart, booksLoaded } from "../../redux";
import BookListItem from "../book-list-item";
import { WithService } from "../hoc-helpers";
import cls from "./styles.module.scss";
import Loader from "../Loader";

const BookList = ({ books, booksLoaded, addBook, service }) => {
  useEffect(() => {
    service.getBooks().then((data) => booksLoaded(data));
  }, []);

  // еслт буукс пустой(непрогрузился)то он возврошяет нам лоадинг
  if (books.length === 0) {
    return  (<div className={cls.loadingContainer}><Loader/></div>)
  }
  return (
    <ul>
      {books.map((el) => {
        return (
          <li key={`book-${el.id}`}>
            <BookListItem addBook={addBook} book={el} />
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    booksLoaded: (newBooks) => dispatch(booksLoaded(newBooks)),
    addBook: (bookId) => dispatch(bookAddedToCart(bookId)),
  };
};

export default WithService(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
