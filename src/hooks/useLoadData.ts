import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { History } from "../models";
import { getData } from "../services/data";
import { actionCreators } from "../state";

export const useLoadData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
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
      dispatch(actionCreators.historyInit(h));
      dispatch(actionCreators.balance(b));
    });
  }, [dispatch]);
};
