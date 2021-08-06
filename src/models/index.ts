export interface History {
  type: string;
  amount: number;
}
export interface Bank {
  balance: number;
  history: Array<History>;
}
