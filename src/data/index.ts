export { default as accounts } from "./accounts.json";
export { default as banks } from "./banks.json";

export interface Account {
  account: string;
  bank: Bank;
}

export interface Bank {
  name: string;
  code: string;
}
