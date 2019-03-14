module.exports = {
  path: './example.md',
  title: 'Simple doc',
  description: 'Manage users via API',
  baseUrl: 'http://localhost:8080/api/v2',
  tags: {
    users: {
      title: 'Users',
    },
  },
  endpoints: {
    '/users': {
      get: {
        title: 'Get users',
        tags: ['users'],
        headers: [
          'Authorization: ***',
        ],
        response: {
          first_name: 'string',
          last_name: 'string',
        },
        errors: {
          401: 'Unauthorized',
          404: 'Not found',
          429: 'Too many requests',
        },
      },
      post: {
        title: 'Create user',
        tags: ['users'],
        body: {
          first_name: {
            type: 'string',
            description: 'User\'s firstname',
            required: true,
          },
          last_name: {
            type: 'string',
            description: 'User\'s lastname',
            required: true,
          },
          photo: {
            type: 'string',
            required: false,
          },
        },
        response: {
          ok: true,
        },
        errors: {
          400: 'Invalid data',
          429: 'Too many requests',
        },
      },
    },
  },
}