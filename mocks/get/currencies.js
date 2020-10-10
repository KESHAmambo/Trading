const faker = require('faker');

const currencyCodesList = require('../data/currencyCodesList');

//Массивы для хранения всех валют (код, цена) и всех валютных пар (код1, код2, отношение 1/2)
const currencies = [];
const currencyPairs = [];

//Генерим рандомную цену для каждой валюты
currencyCodesList.forEach((code) => {
  let currency = {
    code,
    price: faker.random.number(1000)
  };
  currencies.push(currency);
});

//На всякий случай сортируем список валют по алфавиту
currencies.sort();

let curPair = {};
let otherCurrencies = currencies;

//Генерим массив валютных пар
currencies.forEach((cur1) => {
  otherCurrencies = otherCurrencies.filter((cur) => cur !== cur1);
  otherCurrencies.forEach((cur2) => {
    curPair = {
      id: faker.random.uuid(),
      title: cur1.code + '/' + cur2.code,
      /*cur1: cur1.code,
      cur2: cur2.code,*/
      ratio: Number(cur1.price/cur2.price).toPrecision(3)
    };
    currencyPairs.push(curPair);
  });
});

module.exports = {
  path: '/currencies',
  template: {
    currencies,
    currencyPairs,
    pairs: currencyPairs.length,
    currencyAmount: currencies.length
  }
};