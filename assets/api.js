module.exports = {
  path: './example.md',
  title: 'Simple doc',
  description: 'Manage users via API',
  tags: {
    users: {
      title: 'Users',
      baseUrl: 'http://localhost:8080/api/v2',
    },
    ws: {
      title: 'WebSockets',
      baseUrl: 'ws://localhost:3000',
    },
    udp: {
      title: 'UDP',
      description: 'Heh, this is last part',
      baseUrl: 'localhost:5000',
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
  actions: {
    'subscribe': {
      title: 'Subscribe on event',
      description: 'I don\'t know what is it',
      params: {
        channels: [String, Array],
      },
      tags: ['ws'],
    },
    'checkAuth': {
      title: 'Check authorization',
      tags: ['udp'],
      params: {
        name: String,
        password: String,
      },
      response: {
        ok: Boolean,
      },
    },
  },
};
