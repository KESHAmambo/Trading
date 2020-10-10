//На всякий случай сделал раздел, где будет отображаться инфо о валюте
//Пока что тут отображается только ее код
const currencyCodesList = require('../data/currencyCodesList')

module.exports = {
  path: '/currencies/:currencyCode',
  template: (params) => {
    return currencyCodesList.find((currency) => {
      return currency === params.currencyCode
    })
  }
}