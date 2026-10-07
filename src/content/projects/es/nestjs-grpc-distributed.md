---
title: "Sistema Distribuido NestJS gRPC"
summary: "Stack completo de microservicios con NestJS, gRPC, Protocol Buffers y Docker. API Gateway, User Service y Order Service comunicándose vía RPC unario y streaming."
date: "Mar 15 2024"
draft: false
category: "distributed-systems"
repoUrl: https://gitlab.com/lhmoretti/demos
tags:
  - NestJS
  - gRPC
  - Microservices
  - Docker
  - Protocol Buffers
---

## Características

- API Gateway que expone REST y llama internamente a servicios gRPC
- User Service: CRUD con server streaming (`ListUsers`) y chat bidireccional
- Order Service: llama al User Service vía gRPC para validar usuarios antes de crear órdenes
- Patrones RPC: unario, server streaming, client streaming, bidireccional
- Los archivos proto actúan como contrato entre equipos
- `firstValueFrom()` conecta Observables de RxJS con Promesas
- Docker Compose levanta todo el stack con un solo comando
- gRPC requiere un gateway porque no funciona nativamente en navegadores

## Ejecutar

```bash
# Start everything
docker-compose up -d

# The gateway is on port 3000
curl http://localhost:3000/users

# Or use gRPC directly
grpcurl -proto proto/user.proto localhost:50051 user.UserService/GetUser
```

## Stack

- NestJS 10 + @nestjs/microservices
- gRPC (@grpc/grpc-js)
- Protocol Buffers
- TypeORM + PostgreSQL
- Docker Compose

## Demos

Todos los demos están disponibles en el repositorio [lhmoretti/demos](https://gitlab.com/lhmoretti/demos).
