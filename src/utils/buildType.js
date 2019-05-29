const buildOneType = (type) => {
  if (typeof type !== 'function') {
    return type;
  }

  const isObject = typeof type() === 'object';
  const isArray = type.prototype.toString() !== '[object Object]';

  return isObject && isArray ? 'array' : typeof type();
};

module.exports = (types) => {
  return Array.isArray(types)
    ? types.map(type => buildOneType(type)).join('/')
    : buildOneType(types);
};
