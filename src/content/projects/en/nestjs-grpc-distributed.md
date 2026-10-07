---
title: "NestJS gRPC Distributed System"
summary: "Full microservices stack with NestJS, gRPC, Protocol Buffers, and Docker. API Gateway, User Service, and Order Service communicating via unary and streaming RPC."
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

## Features

- API Gateway exposing REST while internally calling gRPC services
- User Service: CRUD with server streaming (`ListUsers`) and bidirectional chat
- Order Service: calls User Service via gRPC to validate users before creating orders
- RPC patterns: unary, server streaming, client streaming, bidirectional
- proto files act as the contract between teams
- `firstValueFrom()` bridges RxJS Observables to Promises
- Docker Compose spins up the entire stack with one command
- gRPC chosen over browser-native REST because microservices need a gateway

## Run

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

All demos are available in the [lhmoretti/demos](https://gitlab.com/lhmoretti/demos) repository.
