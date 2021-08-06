import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers/index";
import { useFormatMoney } from "../../hooks/useFormatMoney";
import "./styles.css";

export const History = () => {
  const history = useSelector((state: RootState) => state.bank.history);
  const { formatMoney } = useFormatMoney();
  return (
    <div className="history">
      <p>History</p>
      {history.map((detail, index) => (
        <div key={index} className="history-detail">
          {detail.type}: {formatMoney(detail.amount)}
        </div>
      ))}
    </div>
  );
};
