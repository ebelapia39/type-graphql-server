export default [{
    "name": "default",
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "postgres",
    "database": "gql",
    "synchronize": true,
    "dropSchema": false,
    "entities": ["src/entities/*.*"]
}, {
    "name": "test",
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "postgres",
    "database": "gql-test",
    "synchronize": true,
    "dropSchema": true,
    "entities": ["src/entities/*.*"]
}]