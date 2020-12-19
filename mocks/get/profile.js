const faker = require('faker');
const netConfig = require('../../netconfig');
const currencyCodesList = require('../data/currencyList');

const respond = () => {

  const wallets = currencyCodesList.sort().map(cur => {
    return ({
      ...cur,
      volume: faker.random.boolean() ? Math.random() * Math.pow(10, faker.random.number(11) - 5) : 0,
      icon: netConfig.staticSourcesPath + '/icons/currencies/' + cur.code.toLowerCase() + '.svg'
    })
  })

  const profile = {
    avatar: faker.image.image(150, 150, true),
    personalData: {
      name: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
      },
      dateOfBirth: faker.date.past(80, undefined).toLocaleDateString()
    },
    wallets
  }

  return ({
    profile
  })
}

module.exports = {
  path: '/profile',
  cache: false,
  delay: 0,
  template: respond
}
