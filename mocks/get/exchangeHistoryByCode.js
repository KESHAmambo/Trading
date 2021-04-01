const Transaction = require('../../mongodb/transaction');

const response = (params) => {

  const currencyCode = params.code;

  const transactions = Transaction.find(
    {$or : [{"sell.name": currencyCode}, {"buy.name": currencyCode}]}
  ).sort({ $natural: -1 }).limit(5)
    .catch((err) => console.log(err));

  return ({
    transactions
  })
}

module.exports = {
  path: '/exchange-history/:code',
  cache: false,
  delay: 2500,
  template: response
}
