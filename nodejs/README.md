# CRUD Nodejs and Mysql
this is a basic application crud that uses nodejs in the backend, mysql as database.

## mysql table

```
CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);
```

## Variables

```
export DATABASE_HOST=192.168.0.10
export DATABASE_USER=root
export DATABASE_PASSWORD=secret
export DATABASE_NAME=acme
export DATABASE_MAX_CONNECTIONS=100
export PORT=8080
```

## Global steps

```
npm install
```


## startup


```
export DATABASE_HOST=192.168.0.24
export DATABASE_USER=root
export DATABASE_PASSWORD=secret
export DATABASE_NAME=acme
export DATABASE_MAX_CONNECTIONS=100
export PORT=8080
npm run start
```

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