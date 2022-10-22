import {BOOK_ADDED_TO_CART, BOOK_INCREMENT_OR_DECREMENT, FETCH_BOOKS_SUCCESS} from "./types";

const initialState = {
  books: [],
  cartItems: [],
  orderTotal: 0,
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_BOOKS_SUCCESS:
      return {...state, books: payload};

    case BOOK_ADDED_TO_CART:
      const {cartItems, books} = state;
      const book = books.find(({id}) => id === payload);
      const cartIndex = cartItems.findIndex(({id}) => id === payload);
      const cartBook = cartItems[cartIndex];

      if (cartBook) {
        let newCartItem = {
          title: book.title,
          id: book.id,
          total: cartBook.total + book.price,
          count: cartBook.count + 1,
        };

        return {
          ...state,
          cartItems: [
            ...cartItems.slice(0, cartIndex),
            newCartItem,
            ...cartItems.slice(cartIndex + 1),
          ],
        };
      }

      const newItem = {
        id: book.id,
        count: 1,
        total: book.price,
        title: book.title,
      };

      return {...state, cartItems: [...cartItems, newItem]};

    case BOOK_INCREMENT_OR_DECREMENT:
      const {bookIndex, sign} = payload;
      const {cartItems: cartBooks} = state
      const bookToIncrement = cartBooks.find((item, id) => id === bookIndex)

      if (sign === '+') {
        bookToIncrement.count += 1
      } else {
        bookToIncrement.count -= 1
      }

      return {...state, cartItems: [...cartBooks]}

    default:
      return state;
  }
};

export default reducer;