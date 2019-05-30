# Simple doc

Manage users via API

## Users

*Base URL: http://localhost:8080/api/v2*

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

*Base URL: ws://localhost:3000*

- [Subscribe on event](#subscribe-on-event)

### Subscribe on event

I don't know what is it

#### Event

```sh
subscribe
```

#### Params

| Parameter | Type | Required | Description
|:---------:|:----:|:--------:|:----------:|
| channels | string/array | yes | - |

## UDP

Heh, this is last part

*Base URL: localhost:5000*

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
