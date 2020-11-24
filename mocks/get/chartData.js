const faker = require('faker')

const getRandomChartData = (amount) => {
  const chartData = [];
  const power = Math.pow(10, faker.random.number(5) - 3)
  let initValue = faker.random.number(100) + 1;
  let diff = 0;

  for (let i = 0; i < amount; i++) {
    diff = faker.random.number(10) - 5;
    if (initValue + diff <= 0) {
      diff *= -1;
    }
    initValue += diff;
    chartData.push(initValue * power)
  }

  return chartData;
}

const getChartLabelsForLastNDays = (nDays, amount) => {
  const currentDate = Date.now();
  const dates = [];
  const step = Math.floor(nDays/amount) + 1;

  for (let i = nDays; i > 0; i -= step) {
    let newDate = new Date();
    newDate.setTime(currentDate - (i * 1000 * 3600 * 24));
    dates.push(newDate);
  }

  return dates.map((date) => (date.toLocaleDateString()));
}

const respond = () => {

  const chartData = getRandomChartData(30);
  const chartLabels = getChartLabelsForLastNDays(30, 4);

  return {
    chartData,
    chartLabels,
  }
}

module.exports = {
  path: '/chartData',
  cache: false,
  delay: 500,
  template: respond
}
