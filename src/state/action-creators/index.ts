// import { Dispatch } from "redux";
import { ActionType } from "../action-types";
// import { Action } from "../actions/index";
import { History } from "../../models/index";

export const depositMoney = (amount: number) => {
  return {
    type: ActionType.DEPOSIT,
    payload: amount,
  };
};

export const withdrawMoney = (amount: number) => {
  return {
    type: ActionType.WITHDRAW,
    payload: amount,
  };
};

export const bankrupt = () => {
  return {
    type: ActionType.BANKRUPT,
  };
};

export const balance = (amount: number) => {
  return {
    type: ActionType.BALANCE,
    payload: amount,
  };
};

export const historyInit = (history: Array<History>) => {
  return {
    type: ActionType.HISTORYINIT,
    payload: history,
  };
};

export const history = (history: History) => {
  return {
    type: ActionType.HISTORY,
    payload: history,
  };
};
