import { ActionType } from "../action-types/index";
import { Action } from "../actions";
import { Bank, History } from "../../models";

const initialState: Bank = {
  balance: 0,
  history: new Array<History>(),
};

const reducer = (state: Bank = initialState, action: Action): Bank => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      state.balance += action.payload;
      return state;
    case ActionType.WITHDRAW:
      if (state.balance === 0) return state;
      state.balance -= action.payload;
      return state;
    case ActionType.BANKRUPT:
      state.balance = 0;
      return state;
    case ActionType.BALANCE:
      state.balance = action.payload;
      return state;
    case ActionType.HISTORYINIT:
      state.history = action.payload;
      return state;
    case ActionType.HISTORY:
      state.history = [action.payload, ...state.history];
      return state;

    default:
      return state;
  }
};

export default reducer;
