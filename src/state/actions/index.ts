import { ActionType } from "../action-types/index";
import { History } from "../../models";

interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}

interface WithdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}

interface BankruptAction {
  type: ActionType.BANKRUPT;
  payload: number;
}

interface BalanceAction {
  type: ActionType.BALANCE;
  payload: number;
}
interface HistoryInitAction {
  type: ActionType.HISTORYINIT;
  payload: Array<History>;
}
interface HistoryAction {
  type: ActionType.HISTORY;
  payload: History;
}

export type Action =
  | DepositAction
  | WithdrawAction
  | BankruptAction
  | BalanceAction
  | HistoryInitAction
  | HistoryAction;
