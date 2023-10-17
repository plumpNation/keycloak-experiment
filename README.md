Keycloak experiment
===================

## Up and running

- `make up`
- `make start-client`

## Database

I will try to upload the entire postgres database to github, but we'll see.

If not you need to setup your realm manually.

## Realm setup

- Open keycloak (localhost:8080) and create a new realm called `demo`.
- Under Realm setting > Login, enable user registration.

For client settings, look in the clients directory, and find a README.md.

## Interesting endpoints

- http://localhost:8080/realms/demo
- http://localhost:8080/realms/demo/.well-known/openid-configuration