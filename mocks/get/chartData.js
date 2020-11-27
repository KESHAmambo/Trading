const faker = require('faker')

const nDays = 31;

const getRandomChartData = (nDays) => {
  const chartValues = [];
  const power = Math.pow(10, faker.random.number(5) - 3)
  let initValue = faker.random.number(100) + 1;
  let diff = 0;

  for (let i = 0; i < nDays; i++) {
    diff = faker.random.number(10) - 5;
    if (initValue + diff <= 0) {
      diff *= -1;
    }
    initValue += diff;
    chartValues.push(initValue * power)
  }

  return chartValues;
}

//return Array of last nDays in milliseconds since 1970
// const getChartLabelsForLastNDays = (nDays) => {
//   const currentDate = Date.now();
//   const dayDuration = 1000 * 3600 * 24;
//   const dates = [];
//
//   for (let i = nDays; i > 0; i -= 1) {
//     dates.push(currentDate - (i * dayDuration));
//   }
//
//   return dates;
// }

const getChartLabelsForLastNDays = (nDays) => {
  const currentDate = Date.now();
  const dayDuration = 1000 * 3600 * 24;
  const dates = [];

  for (let i = nDays - 1; i >= 0; i -= 1) {
    dates.push(currentDate / dayDuration - i);
  }

  return dates;
}

const respond = () => {

  const chartValues = getRandomChartData(nDays);
  const chartLabels = getChartLabelsForLastNDays(nDays);

  const chartData = [];

  for (let i = 0; i< nDays; i++) {
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
