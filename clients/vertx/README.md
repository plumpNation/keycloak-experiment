# OpenID Connect example demo with Keycloak and Vert.X

All credit here to Gustaf Nilstadius.
- https://github.com/GustafNilstadius/OIDC-Keycloak-Vert-X-example
- https://www.redpill-linpro.com/techblog/2022/10/20/into_to_oidc_with_keycloak_and_vertx.html

To launch your tests:
```shell script
mvn clean test
```

To package your application:
```shell script
mvn clean package
```

To run your application:
```shell script
java -jar target/[jar file] --conf conf/conf.json
```


### Setup

- Create realm called `demo`.
- Under Realm setting > Login, enable user registration.
- Create client.
  - type: OpenID Connect.
  - id: `demo-vertx-client`.
  - Client authentication: on
- Under `Credentials` tab, note the secret and put it in the conf/conf.json
together with the Client ID.
- Under access settings
    - Root URL: `http://localhost:8888`
    - Valid redirect URIs: `/*`
    - Home URL: `http://localhost:8888/index.html`

