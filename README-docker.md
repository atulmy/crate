# Run with docker-compose

## db and backend

1. `cd` to `code/deployment`
2. run mysql with `docker-compose up -d mysql`
3. wait a bit until mysql starts up
4. run backend with `docker-compose up -d api`
5. execute sample query at [localhost:8000](http://localhost:8000/) to see if everything runs fine:

query:
```graphql
{
  products {
    id
    name
  }
}
```

response:
```
{
  "data": {
    "products": [
      {
        "id": 8,
        "name": "T-Shirt for Men - Grey"
      },
      {
        "id": 7,
        "name": "T-Shirt for Men - White"
      },
      {
        "id": 6,
        "name": "T-Shirt for Women - Grey"
      },
      {
        "id": 5,
        "name": "T-Shirt for Women - Black"
      },
      {
        "id": 4,
        "name": "Watch for Men"
      },
      {
        "id": 3,
        "name": "Watch for Women"
      },
      {
        "id": 2,
        "name": "Belt for Men"
      },
      {
        "id": 1,
        "name": "Belt for Women"
      }
    ]
  }
}
```
