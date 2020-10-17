const faker = require('faker');

const currencyCodesList = require('../data/currencyCodesList');

const respond = () => {
  //Массив для хранения всех валютных пар (код1, код2, отношение 1/2)
  const currencyPairs = [];

  //На всякий случай сортируем список валют по алфавиту
  currencyCodesList.sort();

  let curPair = {};
  let otherCurrencies = currencyCodesList;

  //Генерим массив валютных пар
  currencyCodesList.forEach((cur1) => {
    otherCurrencies = otherCurrencies.filter((cur) => cur !== cur1);
    otherCurrencies.forEach((cur2) => {
      curPair = {
        id: faker.random.uuid(),
        title: cur1 + '/' + cur2,
        ratio: (faker.random.number(10000) / faker.random.number(10000)).toPrecision(3)
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
  delay: 1500,
  template: respond
};