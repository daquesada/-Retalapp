import React, { Fragment } from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./state";

test("renders learn react link", () => {
  render(
    <Fragment>
      <Provider store={store}>
        <App />
      </Provider>
    </Fragment>
  );
  const linkElement = screen.getByText(/My.*/i);
  expect(linkElement).toBeInTheDocument();
});
