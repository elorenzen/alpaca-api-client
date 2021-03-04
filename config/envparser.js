const parsedEnv = require('dotenv').config().parsed

module.exports = () => {
  // Stringification of variables happens here
  const keyedArray = Object.keys(parsedEnv)
  keyedArray.forEach((key) => {
    if (typeof key === 'string') { key = JSON.stringify(key) }
  })
  return parsedEnv
}
