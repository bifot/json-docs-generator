const normalizeArray = value => value.map((item) => {
  if (typeof item === 'function') {
    return typeof item();
  }

  if (typeof item === 'object') {
    return Array.isArray(item) ? normalizeArray(item) : normalizeValue(item);
  }

  return item;
});

const normalizeValue = response => Object.entries(response).reduce((object, [key, value]) => {
  let formattedValue = value;

  if (typeof value === 'function') {
    formattedValue = typeof value();
  }

  if (typeof value === 'object' && Array.isArray(value)) {
    formattedValue = normalizeArray(value);
  }

  if (typeof value === 'object' && !Array.isArray(value)) {
    formattedValue = normalizeValue(value);
  }

  return {
    ...object,
    [key]: formattedValue,
  };
}, {});

module.exports = (response) => {
  if (typeof response === 'number' || typeof response === 'string') {
    return response;
  }

  return JSON.stringify(
    Array.isArray(response) ? response.map(normalizeValue) : normalizeValue(response),
    null,
    2,
  )
    .replace(/".*":/g, match => `${match.substr(1, match.length - 3)}:`)
    .replace(/"/g, '\'');
};
