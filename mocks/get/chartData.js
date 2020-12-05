const faker = require('faker')

const N_DAYS = 31;
const DAY_DURATION_IN_MILLISECONDS = 1000 * 3600 * 24;

//params for chart data
const VALUABLE_DIGITS = 5;  //количество значащих цифр, обязательно больше 0
const MAX_CHANGE_IN_PERCENT = 20;
const MAX_POWER = 4;

const getRandomChartData = (nDays) => {

  const maxInitialValue = Math.pow(10, VALUABLE_DIGITS) - 1;
  const minInitialValue = Math.pow(10, VALUABLE_DIGITS - 1);
  let value = faker.random.number(maxInitialValue - minInitialValue) + minInitialValue;

  const chartValues = [];

  for (let i = 0; i < nDays; i++) {
    const changeInPercent = faker.random.number(MAX_CHANGE_IN_PERCENT * 100) / 100;
    const power = Math.pow(10, faker.random.number(2) - 2);

    let change = changeInPercent / 100 * power;
    change = (faker.random.number(1) === 1) ? change : (-1) * change;

    let diff = change * value;
    if (value + diff <= 0) {
      diff *= -1;
    }
    value += diff;
    chartValues.push(value);
  }

  const randomPower = Math.pow(10, faker.random.number(2 * MAX_POWER) - MAX_POWER);

  return chartValues.map((value) => (value / Math.pow(10, VALUABLE_DIGITS - 1) * randomPower));
}

//return Array of last nDays in milliseconds since 1970
const getChartLabelsForLastNDays = (nDays) => {
  const currentDate = Date.now();
  const dates = [];

  for (let i = nDays - 1; i >= 0; i -= 1) {
    dates.push(currentDate / DAY_DURATION_IN_MILLISECONDS - i);
  }

  return dates;
}

const respond = () => {

  const chartValues = getRandomChartData(N_DAYS);
  const chartLabels = getChartLabelsForLastNDays(N_DAYS);

  const chartData = [];

  for (let i = 0; i < N_DAYS; i++) {
    chartData.push({
      x: chartLabels[i],
      y: chartValues[i]
    })
  }

  return {
    chartData
  }
}

module.exports = {
  path: '/chartData',
  cache: false,
  delay: 500,
  template: respond
}
