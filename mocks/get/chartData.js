const faker = require('faker')

const respond = () => {
  let chartData = [];
  let value = faker.random.number(100)
  let diff = 0;

  for (let i = 0; i < 30; i++) {
    diff = faker.random.number(10) - 5;
    value += diff;
    chartData.push(value)
  }

  const currentDate = Date.now();

  const dates = [];


  for (let i = -30; i < 0; i += 8) {
    let newDate = new Date();
    newDate.setTime(currentDate + (i * 1000 * 3600 * 24));
    dates.push(newDate);
  }

  let chartLabels = dates.map((date) => (date.toLocaleDateString()));

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
