import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import { store } from "./redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { BookProvider } from "./components/context";
import BookService from "./services";

const service = new BookService();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookProvider value={service}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </BookProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
