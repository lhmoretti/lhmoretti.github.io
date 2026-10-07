---
title: "Servidor DNS en Go desde Cero"
summary: "Servidor DNS educativo que implementa RFC 1035. Parsea paquetes binarios DNS, maneja registros A/AAAA/CNAME/MX/NS y resuelve consultas por UDP con caché."
date: "Apr 10 2024"
draft: false
category: "networking"
repoUrl: https://gitlab.com/lhmoretti/demos
tags:
  - Go
  - DNS
  - Networking
  - UDP
  - RFC 1035
---

## Características

- Parsing binario de paquetes DNS según RFC 1035: Header (12 bytes), Questions, Answers, Authority, Additional
- Tipos de registros: A, AAAA, CNAME, MX, NS, TXT
- Codificación de nombres de dominio: labels con prefijo de longitud + compresión por punteros
- Servidor UDP concurrente en el puerto 53
- Caché con TTL que reduce consultas upstream repetidas
- Cliente incluido para consultas personalizadas programáticas

## Ejecutar

```bash
# Start the DNS server
go run cmd/server/main.go

# Query it
dig @localhost example.com A
nslookup example.com localhost
host example.com localhost
```

## Stack

- Go 1.21+
- Biblioteca estándar (`net`, `encoding/binary`)
- Sin librerías de DNS

## Demos

Todos los demos están disponibles en el repositorio [lhmoretti/demos](https://gitlab.com/lhmoretti/demos).
