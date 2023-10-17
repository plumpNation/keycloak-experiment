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
- Create a client:
  - type: OpenId Connect
  - id: `demo-nestjs-app`
  - authentication: on
- Navigate to client credentials tab
  - root URL: `localhost:3000`
  - home URL: `/`
  - valid redirect URIs: `/*`
  - valid post logout redirect URIs: `/`
  - home URL: `localhost:3000`
  - web origins: `+`

## Interesting endpoints

- http://localhost:8080/realms/demo
- http://localhost:8080/realms/demo/.well-known/openid-configuration