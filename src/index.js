const fs = require('./utils/fs')

module.exports = async ({
  path, title, description, baseUrl, tags, endpoints,
}) => {
  const content = [
    `# ${title}`,
    description,
    `Base URL: ${baseUrl}`,
  ].filter(item => !!item)

  for (const [endpoint, methods] of Object.entries(endpoints)) {
    for (const [requestType, method] of Object.entries(methods)) {
      for (const tag of method.tags) {
        if (tags[tag]) {
          if (!tags[tag].endpoints) {
            tags[tag].endpoints = {}
          }

          if (!tags[tag].endpoints[endpoint]) {
            tags[tag].endpoints[endpoint] = {}
          }

          tags[tag].endpoints[endpoint][requestType] = method
        }
      }
    }
  }

  for (const { title, endpoints } of Object.values(tags)) {
    const structure = Object.values(endpoints)
      .map(item => Object.values(item).map(method => `- [${method.title}](#${encodeURI(method.title.toLowerCase().replace(/\s/g, '-'))})`))
      .reduce((a, b) => [...a, ...b], [])

    content.push(`## ${title}`)
    content.push(structure.join('\n'))

    for (const [endpoint, requests] of Object.entries(endpoints)) {
      for (const [requestType, {
        title, headers, body, params, response, errors,
      }] of Object.entries(requests)) {
        content.push(`### ${title}`)
        content.push('#### URL')
        content.push([
          '```sh',
          `${requestType.toUpperCase()} ${endpoint}`,
          '```',
        ].join('\n'))

        if (headers) {
          content.push('#### Headers')
          content.push(
            headers
              .map(item => `- ${item}`)
              .join('\n'),
          )
        }

        if (body) {
          content.push('#### Body')
          content.push([
            '| Parameter | Type | Required | Description',
            '|:---------:|:----:|:--------:|:----------:|',
            ...Object.entries(body).map(([parameter, { type, required, description = ' - ' }]) => `| ${parameter} | ${type} | ${required ? 'yes' : 'no'} | ${description} |`),
          ].join('\n'))
        }

        if (params) {
          content.push('#### Params')
          content.push([
            '| Parameter | Type | Required | Description',
            '|:---------:|:----:|:--------:|:----------:|',
            ...Object.entries(body).map(([parameter, { type, required, description = ' - ' }]) => `| ${parameter} | ${type} | ${required ? 'yes' : 'no'} | ${description} |`),
          ].join('\n'))
        }

        if (response) {
          content.push('#### Response')
          content.push([
            '```js',
            JSON.stringify(response, null, 2),
            '```',
          ].join('\n'))
        }

        if (errors) {
          content.push('#### Errors')
          content.push(
            Object.entries(errors)
              .map(([code, description]) => `- **${code}** - ${description}`)
              .join('\n'),
          )
        }
      }
    }
  }

  await fs.writeFile(path, content.join('\n\n'))
}