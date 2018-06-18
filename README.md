# json-docs-generator

Util for describe REST APIs via docs.

## Install

```sh
$ npm i json-docs-generator
```

## Tests

```sh
$ npm test
```

## Usage

```js
const jsonDocs = require('json-docs-generator')

jsonDocs({
  path: 'example.md',
  title: 'Simple doc',
  description: 'Manage users & books via API',
  baseUrl: 'http://localhost:8080/api/v2',
  tags: {
    users: {
      title: 'Users'
    }
  },
  endpoints: {
    '/users': {
      get: {
        title: 'Get users',
        tags: ['users'],
        headers: [
          'Authorization: ***'
        ],
        response: {
          first_name: 'string',
          last_name: 'string'
        }
      },
      post: {
        title: 'Create user',
        tags: ['users'],
        body: {
          first_name: {
            type: 'string',
            description: 'User\'s firstname',
            required: true
          },
          last_name: {
            type: 'string',
            description: 'User\'s lastname',
            required: true
          },
          photo: {
            type: 'string',
            required: false
          }
        },
        response: {
          ok: true
        }
      }
    }
  }
})
```

The output you can see [here](example.md).

## License

MIT.