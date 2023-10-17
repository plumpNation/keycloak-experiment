NestJS MVC Application
======================

A basic MVC application using handlebars to render views
instead of just serving an API.

This is merely to encapsulate everything into NestJS instead
of having to deal with another view renderer like React.

This way the complexity is kept fairly simple, and the user
doesn't have to login with cURL requests, Postman or similar.

## Setup keycloak client

- Create a client:
  - type: OpenId Connect
  - id: `demo-nestjs-client`
  - authentication: on
- Navigate to client credentials tab
  - root URL: `localhost:3000`
  - home URL: `/`
  - valid redirect URIs: `/*`
  - valid post logout redirect URIs: `/`
  - home URL: `localhost:3000`
  - web origins: `+`