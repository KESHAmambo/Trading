module.exports = {
  path: '/exchange-history/:id',

  render: (req, res) => {
    console.log('id: ' + req.params.id + '\n' + 'body: ' + res.body)
  }
}
