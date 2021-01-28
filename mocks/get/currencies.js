const faker = require('faker');

const currencyCodesList = require('../data/currencyList');

const netConfig = require('../../netconfig');

const respond = () => {
  //Массив для хранения всех валютных пар
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
        icon1: netConfig.staticSourcesPath + '/icons/currencies/' + cur1.code.toLowerCase() + '.svg',
        icon2: netConfig.staticSourcesPath + '/icons/currencies/' + cur2.code.toLowerCase() + '.svg',
        currencyCode1: cur1.code,
        currencyCode2: cur2.code,
        currencyName1: cur1.name,
        currencyName2: cur2.name,
        chartData: [
          faker.random.number(20),
          faker.random.number(20),
          faker.random.number(20),
          faker.random.number(20),
          faker.random.number(20),
          faker.random.number(20),
          faker.random.number(20)
        ],
        ratio: (faker.random.number(10000) / (faker.random.number(10000) + 1)).toPrecision(4),
        change: (faker.random.number(100) / (faker.random.number(100) + 1)).toPrecision(2),
        sign: faker.random.boolean() ? '+' : '-'
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
  delay: 0,
  template: respond
};
