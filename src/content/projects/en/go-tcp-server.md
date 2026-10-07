---
title: "Go TCP Echo Server"
summary: "Concurrent TCP server built from scratch in Go with custom protocol, graceful shutdown, and connection pooling. Demonstrates low-level networking without frameworks."
date: "Jan 15 2024"
draft: false
category: "systems"
repoUrl: https://gitlab.com/lhmoretti/demos
tags:
  - Go
  - TCP
  - Networking
  - Concurrency
---

## Features

- Concurrent connection handling with goroutines
- Custom binary protocol with length-prefixed messages
- Graceful shutdown via context cancellation (SIGINT)
- Connection pooling and timeout management
- Echo, chat, and RPC example handlers
- Resource cleanup with `defer conn.Close()`

## Run

```bash
cd 02-golang/tcp-server/cmd/server
go run main.go
# In another terminal:
nc localhost 8080
```

## Stack

- Go 1.21+
- Standard library (`net`, `bufio`, `sync`, `context`)
- No external frameworks

## Demos

All demos are available in the [lhmoretti/demos](https://gitlab.com/lhmoretti/demos) repository.
