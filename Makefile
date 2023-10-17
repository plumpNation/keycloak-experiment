.PHONY: client

up:
	docker-compose up

down:
	docker-compose down

nestjs-client:
	cd clients/nestjs && pnpm install && pnpm run start:debug

vertx-client: vertx-client-package vertx-client-run

vertx-client-run:
	@cd clients/vertx && java -jar target/redpill.linpro.bbl.oidc.demo-1.0.0-SNAPSHOT.jar --conf conf/conf.json

vertx-client-package:
	cd clients/vertx && mvn clean package