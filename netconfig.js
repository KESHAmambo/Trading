const apiPath = 'http://10.1.30.43:3000';
const staticSourcesPath = 'http://10.1.30.43:8080';

const createApiURL = (localPath) => {
  return (
    apiPath + localPath
  )
}

module.exports = {
  apiPath,
  staticSourcesPath,
  createApiURL
}
