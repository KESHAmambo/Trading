const Transaction = require('../../mongodb/transaction');

const render = (req, res) => {

  const transaction = new Transaction(req.body);

  transaction.save()
    .then((result) => {
      console.log('Transaction added to database');
      res.status(200).send();
    })
    .catch((err) => {
      console.log('Failed to add transaction to database', err);
      res.status(404).send(err);
    });
}

module.exports = {
  path: '/exchange-history',
  delay: 500,
  render
}
