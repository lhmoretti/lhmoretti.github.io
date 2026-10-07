---
title: "NestJS Clean Architecture API"
summary: "Production-grade REST API with Clean Architecture in NestJS. Domain-driven entities, use cases, dependency inversion, and full decoupling from frameworks."
date: "Feb 05 2024"
draft: false
category: "architecture"
repoUrl: https://gitlab.com/lhmoretti/demos
tags:
  - NestJS
  - TypeScript
  - Clean Architecture
  - TypeORM
  - SOLID
---

## Features

- Clean Architecture layers: Presentation (Controllers, DTOs) → Application (Use Cases) → Domain (Entities, Value Objects) → Infrastructure (DB, Frameworks)
- Domain entities with real business logic (not anemic models)
- Value Objects (`Email`, `Password`) with validation
- Use Cases as first-class citizens, one per operation
- Repository pattern: domain defines interfaces, infrastructure implements them
- Domain layer never imports from `nestjs/common`
- Dependency Inversion: swap TypeORM for Prisma or NestJS for Express without touching business logic
- Testing: unit, integration, and E2E (Jest)

## Stack

- NestJS 10
- TypeScript
- TypeORM + PostgreSQL
- class-validator / class-transformer
- Jest

## Demos

All demos are available in the [lhmoretti/demos](https://gitlab.com/lhmoretti/demos) repository.
