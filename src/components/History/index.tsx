import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers/index";
import { useFormatMoney } from "../../hooks/useFormatMoney";
import "./styles.css";
import { Card } from "../Card";

export const History = () => {
  const history = useSelector((state: RootState) => state.bank.history);
  const { formatMoney } = useFormatMoney();

  return (
    <Card className="history-container">
      <p className="history-p">History</p>
      <div className="history">
        {history.map((detail, index) => (
          <div key={index} className="history-detail">
            {detail.type}: {formatMoney(detail.amount)}
          </div>
        ))}
      </div>
    </Card>
  );
};
