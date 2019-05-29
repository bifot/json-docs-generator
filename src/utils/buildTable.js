const buildType = require('./buildType');

module.exports = params => Object.entries(params).map(([parameter, meta]) => {
  const type = typeof meta === 'function' || Array.isArray(meta)
    ? buildType(meta)
    : buildType(meta.type);
  const required = meta && meta.required !== undefined
    ? meta.required
    : true;
  const description = meta && meta.description !== undefined
    ? meta.description
    : '-';

  return `| ${parameter} | ${type} | ${required ? 'yes' : 'no'} | ${description} |`;
});
