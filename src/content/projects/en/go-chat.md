---
title: "Go Chat - Real-time WebSockets"
summary: "Real-time chat system with rooms, user presence, and message history. Built in pure Go with a modern web UI."
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

## Features

- WebSocket bidirectional communication (Gorilla WebSocket)
- Room-based messaging — users join/leave multiple rooms
- User presence tracking with join/leave notifications
- Message history persisted per room
- Responsive web UI (HTML5/CSS3/Vanilla JS), dark/light mode
- Ping/Pong heartbeat for dead-connection detection
- Central **Hub** distributes messages over Go channels
- Each client runs two goroutines: `readPump` (WS → Hub) and `writePump` (Hub → WS)

## Stack

- Go 1.21+
- Gorilla WebSocket
- HTML5 / CSS3 / Vanilla JS
- No frontend frameworks

## Demos

All demos are available in the [lhmoretti/demos](https://gitlab.com/lhmoretti/demos) repository.
