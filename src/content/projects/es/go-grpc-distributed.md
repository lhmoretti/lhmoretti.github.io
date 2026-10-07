---
title: "Sistema Distribuido con Go gRPC"
summary: "Comunicación entre microservicios con gRPC y Protocol Buffers en Go. RPC unario, server streaming, client streaming y bidireccional entre servicios."
date: "May 05 2024"
draft: false
category: "distributed-systems"
repoUrl: https://gitlab.com/lhmoretti/demos
tags:
  - Go
  - gRPC
  - Protocol Buffers
  - Microservices
  - Distributed Systems
---

## Características

- Protocol Buffers para serialización binaria fuertemente tipada
- Unary RPC — request/response estándar
- Server Streaming — un request, respuestas continuas
- Client Streaming — requests continuos, una respuesta
- Streaming bidireccional — comunicación tipo chat en tiempo real
- Interceptors de logging y autenticación
- Health checks y balanceo de carga
- gRPC sobre HTTP/2: ~5-10x más rápido que REST/JSON, streaming nativo, codegen automático

## Ejecutar

```bash
# Generate Go code from .proto
protoc --go_out=. --go-grpc_out=. proto/*.proto

# Start server
go run cmd/server/main.go

# Run client
go run cmd/client/main.go
```

## Stack

- Go 1.21+
- gRPC + Protocol Buffers
- Sin REST, sin JSON

## Demos

Todos los demos están disponibles en el repositorio [lhmoretti/demos](https://gitlab.com/lhmoretti/demos).
