const fs = require('./utils/fs');
const toArray = require('./utils/toArray');
const buildUrl = require('./utils/buildUrl');
const buildTable = require('./utils/buildTable');
const buildCode = require('./utils/buildCode');
const formatResponse = require('./utils/formatResponse');

module.exports = async (options) => {
  const {
    output,
    title,
    description,
    baseUrl,
    tags,
    endpoints = {},
    actions = {},
  } = options;

  const content = [
    `# ${title}`,
    description,
    baseUrl && `Base URL: ${baseUrl}`,
  ].filter(Boolean);

  for (const [endpoint, methods] of Object.entries(endpoints)) {
    for (const [method, meta] of Object.entries(methods)) {
      toArray(meta.tags).forEach((tag) => {
        if (!tags[tag]) {
          return;
        }

        if (!tags[tag].endpoints) {
          tags[tag].endpoints = {};
        }

        if (!tags[tag].endpoints[endpoint]) {
          tags[tag].endpoints[endpoint] = {};
        }

        tags[tag].endpoints[endpoint][method] = meta;
      });
    }
  }

  for (const [action, meta] of Object.entries(actions)) {
    toArray(meta.tags).forEach((tag) => {
      if (!tags[tag]) {
        return;
      }

      if (!tags[tag].actions) {
        tags[tag].actions = {};
      }

      tags[tag].actions[action] = meta;
    });
  }

  for (const { title, description, baseUrl, endpoints, actions } of Object.values(tags)) {
    const links = [];

    if (endpoints) {
      Object.values(endpoints).forEach((endpoints) => {
        Object.values(endpoints).forEach((endpoint) => {
          links.push(`- [${endpoint.title}](#${buildUrl(endpoint.title)})`);
        });
      });
    }

    if (actions) {
      Object.values(actions).forEach((method) => {
        links.push(`- [${method.title}](#${buildUrl(method.title)})`);
      });
    }

    content.push(`## ${title}`);

    if (description) {
      content.push(description);
    }

    if (baseUrl) {
      content.push(`*Base URL: ${baseUrl}*`);
    }

    content.push(links.join('\n'));

    if (endpoints) {
      Object.entries(endpoints).forEach(([endpoint, methods], index) => {
        Object.entries(methods).forEach(([method, meta]) => {
          const { title, headers, body, params, response, errors } = meta;

          if (index !== 0) {
            content.push('___');
          }

          content.push(`### ${title}`);
          content.push('#### URL');
          content.push(buildCode('sh', `${method.toUpperCase()} ${endpoint}`));

          if (headers) {
            content.push('#### Headers');
            content.push(
              headers
                .map(item => `- ${item}`)
                .join('\n'),
            );
          }

          if (body) {
            content.push('#### Body');
            content.push(buildTable(body));
          }

          if (params) {
            content.push('#### Params');
            content.push(buildTable(params));
          }

          if (response) {
            const formattedResponse = typeof response === 'object'
              ? buildCode('js', formatResponse(response))
              : response;

            content.push('#### Response');
            content.push(formattedResponse);
          }

          if (errors) {
            content.push('#### Errors');
            content.push(
              Object.entries(errors)
                .map(([code, description]) => `- **${code}** - ${description}`)
                .join('\n'),
            );
          }
        });
      });
    }

    if (actions) {
      Object.entries(actions).forEach(([action, meta], index) => {
        const { title, description, params, response } = meta;

        if (index !== 0) {
          content.push('___');
        }

        content.push(`### ${title}`);

        if (description) {
          content.push(description);
        }

        content.push('#### Event');
        content.push(buildCode('sh', action));

        if (params) {
          content.push('#### Params');
          content.push(buildTable(params));
        }

        if (response) {
          content.push('#### Response');
          content.push(buildCode('js', formatResponse(response)));
        }
      });
    }
  }

  await fs.writeFile(output, content.join('\n\n'));
};
