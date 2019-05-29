# Simple doc

Manage users via API

Base URL: http://localhost:8080/api/v2

## Users

- [Get users](#get-users)
- [Create user](#create-user)

### Get users

#### URL

```sh
GET /users
```

#### Headers

- Authorization: ***

#### Response

```js
{
  first_name: 'string',
  last_name: 'string'
}
```

#### Errors

- **401** - Unauthorized
- **404** - Not found
- **429** - Too many requests

### Create user

#### URL

```sh
POST /users
```

#### Body

| Parameter | Type | Required | Description
|:---------:|:----:|:--------:|:----------:|
| first_name | string | yes | User's firstname |
| last_name | string | yes | User's lastname |
| photo | string | no | - |

#### Response

```js
{
  ok: true
}
```

#### Errors

- **400** - Invalid data
- **429** - Too many requests

## WebSockets

- [Subscribe on event](#subscribe-on-event)

### Subscribe on event

#### Event

```sh
subscribe
```

#### Params

| Parameter | Type | Required | Description
|:---------:|:----:|:--------:|:----------:|
| channel | string | yes | - |

## UDP

- [Check authorization](#check-authorization)

### Check authorization

#### Event

```sh
checkAuth
```

#### Params

| Parameter | Type | Required | Description
|:---------:|:----:|:--------:|:----------:|
| name | string | yes | - |
| password | string | yes | - |

#### Response

```js
{
  ok: 'boolean'
}
```