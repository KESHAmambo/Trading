const faker = require('faker');

const currencyCodesList = require('../data/currencyList');

const respond = () => {
  //Массив для хранения всех валютных пар (код1, код2, отношение 1/2)
  const currencyPairs = [];

  //На всякий случай сортируем список валют по алфавиту
  currencyCodesList.sort();

  let curPair = {};
  let otherCurrencies = currencyCodesList;

  //Генерим массив валютных пар
  currencyCodesList.forEach((cur1) => {
    otherCurrencies = otherCurrencies.filter((cur) => cur.code !== cur1.code);
    otherCurrencies.forEach((cur2) => {
      curPair = {
        id: faker.random.uuid(),
        icon1: 'http://10.1.30.43:8080/icons/currencies/' + cur1.code.toLowerCase() + '.png',
        icon2: 'http://10.1.30.43:8080/icons/currencies/' + cur2.code.toLowerCase() + '.png',
        title: cur1.code + ' \u21C4 ' + cur2.code,
        currency1: cur1.name,
        currency2: cur2.name,
        ratio: (faker.random.number(10000) / (faker.random.number(10000) + 1)).toPrecision(4),
        change: (faker.random.number(100) / (faker.random.number(100) + 1)).toPrecision(2),
        sign: (faker.random.number(1) === 1) ? '+' : '-'
      };
      currencyPairs.push(curPair);
    });
  });

  return ({
    currencyPairs
  })
}

module.exports = {
  path: '/currencies',
  cache: false,
  delay: 500,
  template: respond
};