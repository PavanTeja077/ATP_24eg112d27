/*
ASSIGNMENT 5:
Bank Transaction Analyzer

Tasks:
1. filter() all credit transactions
2. map() to extract only transaction amounts
3. reduce() to calculate final account balance
4. find() the first debit transaction
5. findIndex() of transaction with amount 10000
*/

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

const creditTransactions = transactions.filter(tx => tx.type === "credit");
const amounts = transactions.map(tx => tx.amount);

const finalBalance = transactions.reduce((balance, tx) =>
  tx.type === "credit"
    ? balance + tx.amount
    : balance - tx.amount
, 0);

const firstDebit = transactions.find(tx => tx.type === "debit");
const index10000 = transactions.findIndex(tx => tx.amount === 10000);

console.log(creditTransactions, amounts, finalBalance, firstDebit, index10000);