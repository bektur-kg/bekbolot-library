import {BOOK_ADDED_TO_CART, FETCH_BOOKS_SUCCESS, BOOK_INCREMENT_OR_DECREMENT} from "./types";

const booksLoaded = (books) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books,
  };
};

const bookAddedToCart = (bookid) => {
  return {
    type: BOOK_ADDED_TO_CART,
    payload: bookid,
  };
};

const bookIncrementOrDecrement = (bookId, sign) => {
  return {
    type: BOOK_INCREMENT_OR_DECREMENT,
    payload: {bookIndex: bookId, sign}
  }

}


export {booksLoaded, bookAddedToCart, bookIncrementOrDecrement}
