module.exports = {
  title: 'Users',
  tags: {
    http: {
      title: 'HTTP',
      baseUrl: 'http://localhost:8080',
    },
    tcp: {
      title: 'TCP',
      baseUrl: 'localhost:10000',
    },
  },
  endpoints: {
    '/users': {
      post: {
        title: 'Create user',
        tags: 'http',
        params: {
          first_name: String,
          last_name: String,
        },
        response: {
          ok: true,
        },
        errors: {
          401: 'Unauthorized',
          403: 'Access denied',
        },
      },
    },
    '/users/:id': {
      get: {
        title: 'Get user',
        tags: 'http',
        response: {
          first_name: String,
          last_name: String,
        },
        errors: {
          404: 'User is not found',
          500: 'Server error',
        },
      },
      delete: {
        title: 'Delete user',
        tags: 'http',
        response: {
          ok: true,
        },
        errors: {
          401: 'Unauthorized',
          403: 'Access denied',
        },
      },
    },
  },
  actions: {
    get: {
      title: 'Get user',
      tags: 'tcp',
      params: {
        id: String,
      },
      response: {
        first_name: String,
        last_name: String,
      },
    },
    create: {
      title: 'Create user',
      tags: 'tcp',
      params: {
        first_name: String,
        last_name: String,
      },
      response: {
        ok: true,
      },
    },
  },
};
