const {staticSourcesPath} = require('../../netconfig');

const respond = () => {

  const reverseButton = staticSourcesPath + '/icons/buttons/reverse.svg';

  return ({
    reverseButton
  })
}

module.exports = {
  path: '/icons',
  cache: true,
  delay: 0,
  template: respond
}
