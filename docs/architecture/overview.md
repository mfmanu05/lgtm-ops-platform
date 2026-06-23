# Architecture Overview

## LGTM Observability Platform

Architecture:

Frontend
    |
    |
Backend API
    |
    |
Docker stdout logs
    |
    |
Grafana Alloy
    |
    |
Loki
    |
    |
Grafana


## Components

### Frontend
React/Vite application served by Nginx.

### Backend
Node.js API generating application events.

### Alloy
Collects Docker container logs.

### Loki
Stores and indexes logs.

### Grafana
Visualization layer.
