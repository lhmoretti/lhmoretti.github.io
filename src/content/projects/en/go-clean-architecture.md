---
title: "Go Clean Architecture API (Framework-Free)"
summary: "REST API built in pure Go with Clean Architecture — no web framework. Manual dependency injection, domain-driven design, and SOLID principles in a compiled language."
date: "Feb 28 2024"
draft: false
category: "architecture"
repoUrl: https://gitlab.com/lhmoretti/demos
tags:
  - Go
  - Clean Architecture
  - REST
  - SOLID
  - Framework-Free
---

## Features

- REST API using only the Go standard library (`net/http`) — no Gin/Echo/frameworks
- Clean Architecture layers: Domain → Use Cases → Repository interface → HTTP Handler
- Domain entities with validation (`User.Validate()`)
- Repository interface defined in domain, implemented in infrastructure
- Manual dependency injection wired in `main.go`
- Storage swapped via DI: in-memory ↔ PostgreSQL, no business-logic changes
- Middleware chain: CORS, Logging, Recovery
- `httptest.ResponseRecorder` used to test handlers without a server
- Test coverage for domain + use cases

## Stack

- Go 1.21+ (standard library)
- PostgreSQL (optional, swap via DI)
- No frameworks

## Demos

All demos are available in the [lhmoretti/demos](https://gitlab.com/lhmoretti/demos) repository.
