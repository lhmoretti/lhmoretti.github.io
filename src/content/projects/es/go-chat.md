---
title: "Go Chat - WebSockets en Tiempo Real"
summary: "Sistema de chat en tiempo real con salas, presencia de usuarios e historial de mensajes. Construido en Go puro con una UI web moderna."
date: "Mar 20 2024"
draft: false
category: "backend"
repoUrl: https://gitlab.com/lhmoretti/demos
tags:
  - Go
  - WebSockets
  - Real-time
  - Goroutines
---

## Características

- Comunicación bidireccional por WebSocket (Gorilla WebSocket)
- Mensajería por salas — los usuarios se unen/salen de varias salas
- Presencia de usuarios online/offline con notificaciones de ingreso/salida
- Historial de mensajes persistido por sala
- UI web responsive (HTML5/CSS3/Vanilla JS), modo claro/oscuro
- Heartbeat Ping/Pong para detectar conexiones muertas
- Hub central distribuye mensajes con canales de Go
- Cada cliente corre dos goroutines: `readPump` (WS → Hub) y `writePump` (Hub → WS)

## Stack

- Go 1.21+
- Gorilla WebSocket
- HTML5 / CSS3 / Vanilla JS
- Sin frameworks de frontend

## Demos

Todos los demos están disponibles en el repositorio [lhmoretti/demos](https://gitlab.com/lhmoretti/demos).
