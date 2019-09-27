# Users

## HTTP

*Base URL: http://localhost:8080*

- [Get users](#get-users)
- [Create user](#create-user)
- [Get user](#get-user)
- [Delete user](#delete-user)

### Get users

#### URL

```sh
GET /users
```

#### Response

```js
[
  {
    first_name: 'string',
    last_name: 'string',
    hobbies: [
      {
        title: 'string',
        score: 'number'
      }
    ],
    age: [
      'string',
      'number'
    ]
  }
]
```

### Create user

#### URL

```sh
POST /users
```

#### Params

| Parameter | Type | Required | Description
|:---------:|:----:|:--------:|:----------:|
| first_name | string | yes | - |
| last_name | string | yes | - |

#### Response

```js
{
  ok: true
}
```

#### Errors

- **401** - Unauthorized
- **403** - Access denied

___

### Get user

#### URL

```sh
GET /users/:id
```

#### Response

| Parameter | Type | Required | Description
|:---------:|:----:|:--------:|:----------:|
| first_name | string | yes | User's first name |
| last_name | string | yes | User's last name |
| age | string/number | no | User's age |

```js
{
  first_name: 'string',
  last_name: 'string',
  age: [
    'string',
    'number'
  ]
}
```

#### Errors

- **404** - User is not found
- **500** - Server error

___

### Delete user

#### URL

```sh
DELETE /users/:id
```

#### Response

```js
{
  ok: true
}
```

#### Errors

- **401** - Unauthorized
- **403** - Access denied

## TCP

*Base URL: localhost:10000*

- [Get user](#get-user)
- [Get users](#get-users)
- [Create user](#create-user)

### Get user

#### Event

```sh
get
```

#### Params

| Parameter | Type | Required | Description
|:---------:|:----:|:--------:|:----------:|
| id | string | yes | - |

#### Response

```js
{
  first_name: 'string',
  last_name: 'string',
  age: [
    'string',
    'number'
  ]
}
```

### Get users

#### Event

```sh
get
```

#### Params

| Parameter | Type | Required | Description
|:---------:|:----:|:--------:|:----------:|
| ids | array | yes | - |

#### Response

```js
[
  {
    first_name: 'string',
    last_name: 'string',
    age: [
      'string',
      'number'
    ]
  }
]
```

___

### Create user

#### Event

```sh
create
```

#### Params

| Parameter | Type | Required | Description
|:---------:|:----:|:--------:|:----------:|
| first_name | string | yes | - |
| last_name | string | yes | - |

#### Response

```js
{
  ok: true
}
```