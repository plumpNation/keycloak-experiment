.PHONY: client

up:
	docker-compose up

down:
	docker-compose down

nestjs-client:
	cd clients/nestjs && pnpm install && pnpm run start:debug