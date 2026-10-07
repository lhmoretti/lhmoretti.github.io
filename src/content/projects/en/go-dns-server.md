---
title: "Go DNS Server from Scratch"
summary: "Educational DNS server implementing RFC 1035. Parses binary DNS packets, handles A/AAAA/CNAME/MX/NS records, and resolves queries over UDP with caching."
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

## Features

- Binary DNS packet parsing per RFC 1035: Header (12 bytes), Questions, Answers, Authority, Additional
- Record types: A, AAAA, CNAME, MX, NS, TXT
- Domain name encoding: length-prefixed labels + pointer compression
- Concurrent UDP server on port 53
- TTL cache to reduce repeated upstream queries
- Client included for custom programmatic queries

## Run

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
- Standard library (`net`, `encoding/binary`)
- No DNS libraries

## Demos

All demos are available in the [lhmoretti/demos](https://gitlab.com/lhmoretti/demos) repository.
