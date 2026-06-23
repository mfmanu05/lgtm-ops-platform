# Architecture Overview

## LGTM Observability Platform


## Visão Geral

Esta plataforma implementa uma arquitetura de observabilidade baseada em containers Docker.

O objetivo é coletar, armazenar e visualizar logs das aplicações de forma centralizada.


## Fluxo de Dados


Application Containers

        |
        |
        v

Docker stdout/stderr

        |
        |
        v

Grafana Alloy

        |
        |
        v

Grafana Loki

        |
        |
        v

Grafana Dashboard



## Componentes


## Frontend

Aplicação web desenvolvida utilizando:

- React
- Vite
- Nginx


Responsável pela interface do usuário.


---

## Backend


API desenvolvida utilizando:

- Node.js


Responsável por:

- geração de eventos
- processamento da aplicação
- emissão de logs


---

## Grafana Alloy


Agente coletor de observabilidade.

Responsável por:

- descobrir containers Docker
- coletar logs via Docker socket
- adicionar labels
- encaminhar eventos


Labels utilizadas:

- container
- service
- service_name


---

## Loki


Sistema de armazenamento de logs.

Responsável por:

- ingestão
- indexação
- consulta dos eventos


API:http://localhost:3100



---

## Grafana


Camada de visualização.


Responsável por:

- dashboards
- exploração de logs
- troubleshooting


Interface:




---

# Futuras Evoluções


## Metrics

Planejado:

- Prometheus
- Grafana Mimir


## Tracing

Planejado:

- Grafana Tempo


## Deployment

Planejado:

- AWS EC2
- Docker Compose
- CI/CD Pipeline
