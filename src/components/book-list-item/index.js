import React from "react";
import classes from "./styles.module.scss";

const BookListItem = ({ book, addBook }) => {
  const { coverImage, title, price, author, id } = book;
  return (
    <div className={classes.book_list_item}>
      <div className={classes.book_list_item_cover}>
        <img src={coverImage} alt="cover" />
      </div>
      <div className={classes.book_list_item_details}>
        <span className={classes.book_list_item_title}>{title}</span>
        <div>{author}</div>
        <div className={classes.book_list_item_price}>{price}</div>
        <button
          className="btn btn-info"
          onClick={() => {
            addBook(id);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
