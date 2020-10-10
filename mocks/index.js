const faker = require('faker')

const respond = (req, res) => {
  const respBody = {
    success: true,
    body: {}
  };

  setTimeout(() => {
    res.json(respBody)
  }, faker.random.number(3000))
};

module.exports = {
  path: `/`,
method: 'get',
  callback: respond,
  delay: 1500,
};
