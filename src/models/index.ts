export interface History {
  type: string;
  amount: number;
  id: string;
}
export interface Bank {
  balance: number;
  history: Array<History>;
}
