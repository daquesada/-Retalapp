import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { RootState } from "../../state/reducers/index";
import { Button } from "../Button";
import { postData } from "../../services/data";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import { Spinner } from "../Spinner";
/**
 * Container with the buttons and their logic
 *
 */
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

  const handleBankrupt = () => {
    const id = uuidv4();
    setLoading(true);
    postData({ data: { amount: balance, type: "withdraw", id } })
      .then((data) => {
        setTimeout(() => {
          setLoading(false);
          if (data["data"]) {
            bankrupt(balance);
            history({ amount: balance, type: "withdraw", id });
          } else {
            setMsg("Please, try again");
          }
        }, 1000);
      })
      .catch(() => setLoading(false));
  };

  return (
    <Fragment>
      <div className="btn-container">
        <Button
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              depositMoney(1000);
              history({ amount: 1000, type: "deposit", id: uuidv4() });
              setLoading(false);
            }, 500);
          }}
          text="Deposit"
          disable={false}
        />
        <Button
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              withdrawMoney(1000);
              history({ amount: 1000, type: "withdraw", id: uuidv4() });
              setLoading(false);
            }, 500);
          }}
          disable={disable}
          text="Withdraw"
        />
        <Button onClick={handleBankrupt} disable={disable} text={"Bankrupt"} />
      </div>
      {loading && <Spinner />}
      <p>{msg}</p>
    </Fragment>
  );
};
