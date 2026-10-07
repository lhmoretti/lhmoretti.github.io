---
title: "Microservicio NestJS CQRS + RabbitMQ para Órdenes"
summary: "Microservicio de órdenes que implementa CQRS con separación Command/Query, event bus RabbitMQ y persistencia orientada a eventos usando NestJS y PostgreSQL."
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

## Características

- CQRS: lado Command (create/update/delete, publica eventos de dominio) vs lado Query (modelos de lectura optimizados, sin lógica de negocio)
- Event bus RabbitMQ para comunicación async entre handlers
- Los event handlers actualizan los modelos de lectura cuando los comandos completan
- Write model y read model totalmente separados; las lecturas escalan de forma independiente
- Docker Compose: PostgreSQL + RabbitMQ en un solo stack

## Ejecutar

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

Todos los demos están disponibles en el repositorio [lhmoretti/demos](https://gitlab.com/lhmoretti/demos).
