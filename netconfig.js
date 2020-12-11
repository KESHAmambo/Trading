const apiPath = 'http://192.168.0.101:3000';
const staticSourcesPath = 'http://192.168.0.101:8080';

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
