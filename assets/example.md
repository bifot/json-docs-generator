# Users

## HTTP

*Base URL: http://localhost:8080*

- [Get user by id](#get-user-by-id)
- [Create user](#create-user)

### Get user by id

#### URL

```sh
GET /users/:id
```

#### Response

```js
{
  first_name: 'string',
  last_name: 'string'
}
```

#### Errors

- **404** - User is not found
- **500** - Server error

___

### Create user

#### URL

```sh
POST /users/:id
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

## TCP

*Base URL: localhost:10000*

- [Get user](#get-user)
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
  last_name: 'string'
}
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