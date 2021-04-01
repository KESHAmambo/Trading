const faker = require('faker');

const PAYMENT_FEE_IN_PERCENT = 0.5;

const EMAIL_TEMPLATE = {
  firstName: 'Eduard',
  lastName: 'Shubert',
  provider: 'yandex.ru'
}

const respond = () => {

  const {
    firstName,
    lastName,
    provider
  } = EMAIL_TEMPLATE;

  const supportEmail = faker.internet.email(firstName, lastName, provider);

  const newsHeaders = [];
  for (let i = 0; i < 10; i++) {
    newsHeaders.push(faker.lorem.sentence())
  }

  const technicalInfo = {
    paymentFeeInPercent: PAYMENT_FEE_IN_PERCENT,
    supportEmail,
    newsHeaders
  }

  return ({
    technicalInfo
  })
}

module.exports = {
  path: '/technicalInfo',
  cache: false,
  delay: 0,
  template: respond
}
