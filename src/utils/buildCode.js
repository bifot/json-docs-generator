module.exports = (language, code) => [
  `\`\`\`${language}`,
  code,
  `\`\`\``,
].join('\n');
