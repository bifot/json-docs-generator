const normalize = response => Object.entries(response).reduce((object, [key, value]) => ({
  ...object,
  [key]: typeof value === 'function' ? typeof value() : value,
}), {});

module.exports = response => JSON.stringify(
  Array.isArray(response) ? response.map(normalize) : normalize(response),
  null,
  2,
)
  .replace(/".*":/g, match => `${match.substr(1, match.length - 3)}:`)
  .replace(/"/g, '\'');
