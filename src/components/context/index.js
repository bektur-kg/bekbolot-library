import React from "react";
export const bookContext = React.createContext();
const { Provider: BookProvider, Consumer: BookConsumer } = bookContext;

export { BookProvider, BookConsumer };
