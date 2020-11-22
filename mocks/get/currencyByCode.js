//На всякий случай сделал раздел, где будет отображаться инфо о валюте
//Пока что тут отображается только ее код
const currencyList = require('../data/currencyList')

module.exports = {
  path: '/currencies/:currencyCode',
  template: (params) => {
    return currencyList.find((currency) => {
      return currency === params.currencyCode
    })
  }
}
