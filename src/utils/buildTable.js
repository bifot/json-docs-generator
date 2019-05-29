module.exports = params => Object.entries(params).map(([parameter, meta]) => {
  let type;

  const required = meta && meta.required !== undefined
    ? meta.required
    : true;
  const description = meta && meta.description !== undefined
    ? meta.description
    : '-';

  if (typeof meta === 'function') {
    type = typeof meta();
  }

  if (meta && typeof meta.type === 'function') {
    type = typeof meta.type();
  }

  if (meta && typeof meta.type === 'string') {
    type = meta.type;
  }

  return `| ${parameter} | ${typeof type === 'function' ? typeof type() : type} | ${required ? 'yes' : 'no'} | ${description} |`;
});
