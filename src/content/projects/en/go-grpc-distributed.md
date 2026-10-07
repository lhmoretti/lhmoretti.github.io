---
title: "Go gRPC Distributed System"
summary: "Microservices communication with gRPC and Protocol Buffers in Go. Unary, server streaming, client streaming, and bidirectional RPC between services."
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

## Features

- Protocol Buffers for strongly-typed binary serialization
- Unary RPC — standard request/response
- Server Streaming — one request, continuous responses
- Client Streaming — continuous requests, one response
- Bidirectional Streaming — real-time chat-like communication
- Interceptors for logging and auth
- Health checks and load balancing
- gRPC over HTTP/2: ~5-10x faster than REST/JSON, native streaming, auto codegen

## Run

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
- No REST, no JSON

## Demos

All demos are available in the [lhmoretti/demos](https://gitlab.com/lhmoretti/demos) repository.
