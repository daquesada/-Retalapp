import React from "react";
import { useSelector } from "react-redux";
import { useFormatMoney } from "../../hooks/useFormatMoney";
import { RootState } from "../../state/reducers";
import "./styles.css";
import { Card } from "../Card";

export const Balance = () => {
  const balance = useSelector((state: RootState) => state.bank.balance);
  const { formatMoney } = useFormatMoney();

  return (
    <Card className="balance-container">
      <p className="balance">Balance</p>
      <span className="money">{formatMoney(balance)}</span>
      <span className="available">Available</span>
    </Card>
  );
};
