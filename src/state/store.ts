import { /*applyMiddleware*/ createStore } from "redux";
import reducers from "./reducers";
import { getData } from "../services/data";
import { History } from "../models";
import { bindActionCreators } from "redux";
import * as actionCreators from "./action-creators";

export const store = createStore(reducers, {});

const { balance, historyInit } = bindActionCreators(
  actionCreators,
  store.dispatch
);

getData().then((data) => {
  let b = 0;
  let h: Array<History> = new Array<History>();
  data.forEach((e) => {
    if (e.type === "withdraw") {
      b -= e.amount;
    } else {
      b += e.amount;
    }

    h.push(e);
  });
  historyInit(h);
  balance(b);
});
