---
title: "NestJS CQRS + RabbitMQ Orders Microservice"
summary: "Orders microservice implementing CQRS with Command and Query separation, RabbitMQ event bus, and event-driven persistence using NestJS and PostgreSQL."
date: "Apr 22 2024"
draft: false
category: "architecture"
repoUrl: https://gitlab.com/lhmoretti/demos
tags:
  - NestJS
  - CQRS
  - RabbitMQ
  - Event-Driven
  - PostgreSQL
---

## Features

- CQRS: Command side (create/update/delete, publishes domain events) vs Query side (optimized read models, no business logic)
- RabbitMQ event bus for async communication between handlers
- Event handlers update read models when commands complete
- Write model and read model fully separated; reads scale independently
- Docker Compose: PostgreSQL + RabbitMQ in one stack

## Run

```bash
# Start PostgreSQL + RabbitMQ
docker compose up -d

# Start the microservice
npm run start:dev

# Create an order (Command)
curl -X POST http://localhost:3000/orders \
  -d '{"product":"Laptop","quantity":2}'

# Query orders (Read Model)
curl http://localhost:3000/orders
```

## Stack

- NestJS + @nestjs/cqrs
- RabbitMQ (AMQP)
- PostgreSQL + TypeORM
- class-validator
- Docker Compose

## Demos

All demos are available in the [lhmoretti/demos](https://gitlab.com/lhmoretti/demos) repository.
