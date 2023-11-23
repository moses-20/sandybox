export { default as accounts } from "./accounts.json";
export { default as banks } from "./banks.json";
export { default as banks2 } from "./banks2.json";

export interface Account {
  account: string;
  bank: Bank;
}

export interface Bank {
  name: string;
  code: string;
}
