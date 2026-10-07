---
title: "Servidor TCP Echo en Go"
summary: "Servidor TCP concurrente construido desde cero en Go con protocolo custom, graceful shutdown y connection pooling. Demuestra networking de bajo nivel sin frameworks."
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

## Características

- Manejo de conexiones concurrentes con goroutines
- Protocolo binario custom con mensajes prefijados por longitud
- Graceful shutdown con cancelación de contexto (SIGINT)
- Connection pooling y gestión de timeouts
- Handlers de ejemplo: echo, chat y RPC
- Limpieza de recursos con `defer conn.Close()`

## Ejecutar

```bash
cd 02-golang/tcp-server/cmd/server
go run main.go
# In another terminal:
nc localhost 8080
```

## Stack

- Go 1.21+
- Biblioteca estándar (`net`, `bufio`, `sync`, `context`)
- Sin frameworks externos

## Demos

Todos los demos están disponibles en el repositorio [lhmoretti/demos](https://gitlab.com/lhmoretti/demos).
