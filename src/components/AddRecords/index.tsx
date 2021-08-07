import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { RootState } from "../../state/reducers/index";
import { Button } from "../Button";
import { postData } from "../../services/data";
import { v4 as uuidv4 } from "uuid";
import { Spinner } from "../Spinner";
import { History } from "../../models";
import "./styles.css";

export const AddRecord = () => {
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt, history } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const balance = useSelector((state: RootState) => state.bank.balance);
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    balance === 0 ? setDisable(true) : setDisable(false);
  }, [balance]);

  const sendDataToAPI = (data: History, action: Function) =>
    postData({ data })
      .then((res) => {
        setMsg("");
        setTimeout(() => {
          setLoading(false);
          if (res["data"]) {
            action(data.amount);
            history(data);
          } else {
            setMsg("Please, try again");
          }
        }, 250);
      })
      .catch(() => setLoading(false));

  const handleBankrupt = () => {
    const amount = balance;
    const id = uuidv4();
    const data: History = { amount, type: "withdraw", id };
    setLoading(true);
    sendDataToAPI(data, bankrupt);
  };

  return (
    <Fragment>
      <div className="btn-container">
        <Button
          onClick={() => {
            const amount = 1000;
            const data: History = {
              amount,
              type: "deposit",
              id: uuidv4(),
            };
            setLoading(true);
            sendDataToAPI(data, depositMoney);
          }}
          text="Deposit"
          disable={loading}
        />
        <Button
          onClick={() => {
            const amount = 1000;
            const data: History = {
              amount,
              type: "withdraw",
              id: uuidv4(),
            };
            setLoading(true);
            sendDataToAPI(data, withdrawMoney);
          }}
          disable={disable || loading}
          text="Withdraw"
        />
        <Button
          onClick={handleBankrupt}
          disable={disable || loading}
          text={"Bankrupt"}
        />
      </div>
      {loading && <Spinner />}
      <p>{msg}</p>
    </Fragment>
  );
};
