const faker = require('faker');

const shuffleArray = (arr) => {

  let array = arr;
  const shuffledArray = [];

  while (array.length > 0) {
    const randomIndex = faker.random.number(array.length - 1);
    shuffledArray.push(array[randomIndex]);
    array = array.slice(0 ,randomIndex).concat(array.slice(randomIndex + 1))
  }

  return shuffledArray;
}

const respond = (params) => {
  let newsBody = [];

  newsBody.push({
    type: 'text',
    body: faker.lorem.paragraph()
  });

  newsBody.push({
    type: 'picture',
    body: faker.image.image()
  });

  newsBody.push({
    type: 'text',
    body: faker.lorem.paragraph()
  });

  newsBody.push({
    type: 'picture',
    body: faker.image.image()
  });

  newsBody = shuffleArray(newsBody);

  const news = {
    id: params.id,
    newsBody
  }

  return ({
    news
  })
}

module.exports = {
  path: '/news/:id',
  delay: 1500,
  template: respond
}
