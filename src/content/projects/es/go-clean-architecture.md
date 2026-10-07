---
title: "API Go con Clean Architecture (Sin Frameworks)"
summary: "API REST construida en Go puro con Clean Architecture — sin web framework. Inyección de dependencias manual, diseño orientado al dominio y principios SOLID en un lenguaje compilado."
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

## Características

- API REST usando solo la biblioteca estándar de Go (`net/http`) — sin Gin/Echo ni frameworks
- Capas de Clean Architecture: Domain → Use Cases → Repository (interface) → HTTP Handler
- Entidades de dominio con validación (`User.Validate()`)
- Interfaz de Repository definida en el dominio, implementada en infraestructura
- Inyección de dependencias manual ensamblada en `main.go`
- Storage intercambiable vía DI: en memoria ↔ PostgreSQL, sin tocar lógica de negocio
- Cadena de middlewares: CORS, Logging, Recovery
- Tests de handlers sin levantar servidor (`httptest.ResponseRecorder`)
- Cobertura de tests para dominio + casos de uso

## Stack

- Go 1.21+ (biblioteca estándar)
- PostgreSQL (opcional, intercambiable vía DI)
- Sin frameworks

## Demos

Todos los demos están disponibles en el repositorio [lhmoretti/demos](https://gitlab.com/lhmoretti/demos).
