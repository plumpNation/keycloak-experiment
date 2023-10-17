.PHONY: client

up:
	docker-compose up

down:
	docker-compose down

client:
	cd client && pnpm install && pnpm run start:debug