import React from "react";
import {connect, useDispatch} from "react-redux";
import classes from "./styles.module.scss";
import {bookAddedToCart, bookIncrementOrDecrement} from "../../redux/actions";

const ShopCartTable = ({items, total}) => {
  const dispatch = useDispatch()

  const renderItems = (el, idx) => {
    const {title, count, total, id} = el;

    const incrementBook = (idx) => {
      dispatch(bookIncrementOrDecrement(idx, '+'))
    }

    const decrementBook = (idx) => {
      dispatch(bookIncrementOrDecrement(idx, '-'))
    }


    return (
      <tr key={`shop-item-${id}`}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}$</td>
        <td>
          <button
            className="btn btn-outline-success btn-sm"
            onClick={() => incrementBook(idx)}
          >
            <i className="fa-solid fa-circle-plus"
            ></i>
          </button>
          <button
            className="btn btn-outline-warning btn-sm"
            onClick={() => decrementBook(idx)}
          >
            <i className="fa-solid fa-circle-minus"></i>
          </button>
          <button className="btn btn-outline-danger btn-sm">
            <i className="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className={classes.cart_table}>
      <h2>Your Order</h2>
      <table className="table">
        <thead>
        <tr>
          <td>№</td>
          <td>Item</td>
          <td>Count</td>
          <td>Price</td>
          <td>Action</td>
        </tr>
        </thead>
        <tbody>{items.map(renderItems)}</tbody>
      </table>

      <div className={classes.cart_table_total}>Total: {total}$</div>
    </div>
  );
};

const mapStateToProps = ({cartItems, orderTotal}) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (bookid) => dispatch(bookAddedToCart(bookid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopCartTable);