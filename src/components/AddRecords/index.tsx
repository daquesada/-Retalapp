import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { RootState } from "../../state/reducers/index";
import { Button } from "../Button";
import "./styles.css";

export const AddRecord = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt, history } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const balance = useSelector((state: RootState) => state.bank.balance);
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    balance === 0 ? setDisable(true) : setDisable(false);
  }, [balance]);
  return (
    <div className="btn-container">
      <Button
        onClick={() => {
          depositMoney(1000);
          history({ amount: 1000, type: "deposit" });
        }}
        text="Deposit"
        disable={false}
      />
      <Button
        onClick={() => {
          withdrawMoney(1000);
          history({ amount: 1000, type: "withdraw" });
        }}
        disable={disable}
        text="Withdraw"
      />
      <Button onClick={() => bankrupt()} disable={false} text={"Bankrupt"} />
    </div>
  );
};
