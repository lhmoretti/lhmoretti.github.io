---
title: "NestJS Clean Architecture API"
summary: "API REST de nivel producción con Clean Architecture en NestJS. Entidades orientadas al dominio, casos de uso, inversión de dependencias y desacople total de frameworks."
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

## Características

- Capas de Clean Architecture: Presentation (Controllers, DTOs) → Application (Use Cases) → Domain (Entities, Value Objects) → Infrastructure (DB, Frameworks)
- Entidades de dominio con lógica de negocio real (no modelos anémicos)
- Value Objects (`Email`, `Password`) con validación
- Casos de Uso como ciudadanos de primera clase, uno por operación
- Patrón Repository: el dominio define interfaces, la infraestructura las implementa
- La capa de dominio nunca importa de `nestjs/common`
- Inversión de Dependencias: cambiar TypeORM por Prisma o NestJS por Express sin tocar lógica de negocio
- Testing: unitario, de integración y E2E (Jest)

## Stack

- NestJS 10
- TypeScript
- TypeORM + PostgreSQL
- class-validator / class-transformer
- Jest

## Demos

Todos los demos están disponibles en el repositorio [lhmoretti/demos](https://gitlab.com/lhmoretti/demos).
