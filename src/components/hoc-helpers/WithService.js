import React from "react";
import { BookConsumer } from "../context";

export default (WrappedComponent) => (props) => {
  return (
    <BookConsumer>
      {(service) => {
        return <WrappedComponent {...props} service={service} />;
      }}
    </BookConsumer>
  );
};
