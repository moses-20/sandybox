import { Bank, banks } from "../data";

export default function useNuban() {
  const iv = [3, 7, 3, 3, 7, 3, 3, 7, 3, 3, 7, 3];

  function calculateChecksum(list: number[]): number {
    const sumProduct = iv.reduce((acc, val, idx) => acc + val * list[idx], 0);
    const remainder = sumProduct % 10;
    const difference = 10 - remainder;
    const checksum = difference % 10;

    return checksum;
  }

  function isValidChecksum(
    checksum: number,
    expectedChecksum: number
  ): boolean {
    return checksum === expectedChecksum || checksum === 10;
  }

  function nuban(accountNumber: string): Bank[] {
    const accountList = Array.from(accountNumber, Number);

    const bankset = banks.flatMap((bank) => {
      const codeList = Array.from(bank.code, Number);
      const allList = codeList.concat(accountList.slice(0, 9));
      const checksum = accountList[accountList.length - 1];
      const calculatedChecksum = calculateChecksum(allList);

      if (isValidChecksum(checksum, calculatedChecksum)) {
        return [{ code: bank.code, name: bank.name }];
      }

      return [];
    });

    return bankset;
  }

  return nuban;
}
