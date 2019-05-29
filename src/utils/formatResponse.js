module.exports = response => JSON.stringify(
  Object.entries(response).reduce((object, [key, value]) => ({
    ...object,
    [key]: typeof value === 'function' ? typeof value() : value,
  }), {}),
  null,
  2,
)
  .replace(/".*":/g, match => `${match.substr(1, match.length - 3)}:`)
  .replace(/"/g, '\'');
