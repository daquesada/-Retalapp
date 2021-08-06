import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";
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

export const bankrupt = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT,
      payload: amount,
    });
  };
};

/**
 *
 * @param amount balance in your acount
 * @returns dispatch
 */
export const balance = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BALANCE,
      payload: amount,
    });
  };
};

/**
 *
 * @param history Array with the history from API
 * @returns dispatch
 */
export const historyInit = (history: Array<History>) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.HISTORYINIT,
      payload: history,
    });
  };
};

/**
 *
 * @param history Object type History to add into the state
 * @returns action
 */
export const history = (history: History) => {
  return {
    type: ActionType.HISTORY,
    payload: history,
  };
};
