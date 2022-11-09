# Simple mysql crud without database frameworks
Simple CRUD collections developed with several languages, without libraries, except the database driver and for basic http routing

## Rules

- no libraries related to the database, only the database driver and for basic http endpoints
- 1gb ram as maximun
- 8gb of storage as maximun
- 1 node (horizontal scalling)
- no ssr and html, only rest endpoints (json)
- no wrong body will be sent in the stress
- port 8080
- no harcoded values, use [env vars](https://12factor.net/config)
- no oauth2 security
- validate mysql connection
- no cache
- linux compatibility
- docker for easy automation (JRichardsz will dockerize any project)
- no libraries in the workspace. Use npm, maven, nuget, composer, etc
- no specific os and IDE files in the workspace
- health endpoint for validations
- markdown readme with startup steps
- any backend error should not return http status 200. Should return 500
- pool max allowed connection = 100

## Measurements

- number of lines of code
- ram usage
- response time on 500, 10000, 100000 sequential requests
- response time on 500, 10000, 100000 parallel requests

## Variables

|name|sample|description|
|:--|:--|:--|
|DATABASE_HOST|192.168.0.10|mysql database host|
|DATABASE_USER|usr_admin|mysql database user|
|DATABASE_PASSWORD|changeme|mysql database password|
|DATABASE_NAME|demo|mysql database name|
|DATABASE_MAX_CONNECTIONS|100|mysql database pool max allowed connections if language support it|
|PORT|8080|microservice port|

## mysql table

```
CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);
```

## Expected CRUD endpoints

### create

```
curl localhost:8080/customer -X POST -d '{"name":"foo", "address":"bar", "phone":"baz"}' -H 'Content-Type: application/json'
```

response:

```
{"code":200,"message":"success","content":{"insertId":9}}
```

### read

```
curl localhost:8080/customer
```

response:

```
{"code":200,"message":"success","content":[{"id":2,"name":"foo","address":"bar","phone":"baz"},{"id":3,"name":"foo3","address":"bar3","phone":"baz3"}]}
```

### update

```
curl localhost:8080/customer/9 -X PUT -d '{"name":"foo3", "address":"bar3", "phone":"baz3"}' -H 'Content-Type: application/json'
```

response:

```
{"code":200,"message":"success","content":{"affectedRows":1}}
```

### delete

```
curl localhost:8080/customer/1 -X DELETE
```

response:

```
{"code":200,"message":"success","content":{"affectedRows":1}}
```

### health

```
curl localhost:8080/health
```

response:

```
{"code":200,"message":"success"}
```

## Roadmap

- stats endpoint with ram usage


## Contributors

<table>
  <tbody>
    <td>
      <img src="https://avatars0.githubusercontent.com/u/3322836?s=460&v=4" width="100px;"/>
      <br />
      <label><a href="http://jrichardsz.github.io/">JRichardsz</a></label>
      <br />
    </td>    
  </tbody>
</table>