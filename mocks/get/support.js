const faker = require('faker');

const firstName = 'Eduard'
const lastName = 'Shubert'
const provider = 'yandex.ru'

const respond = () => {
  return ({
    email: faker.internet.email(firstName, lastName, provider)
  })
}

module.exports = {
  path: '/support',
  cache: false,
  delay: 0,
  template: respond
}
