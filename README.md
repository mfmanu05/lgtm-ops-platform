# 🚀 LGTM Observability Platform

Uma plataforma de observabilidade baseada na stack LGTM (Loki, Grafana, Tempo e Mimir) utilizando containers Docker.

O objetivo deste projeto é criar uma solução moderna para centralização de logs de aplicações, seguindo práticas utilizadas em ambientes DevOps e Cloud Native.

---

## 📌 Objetivo

Construir uma plataforma de observabilidade capaz de:

- Centralizar logs de aplicações
- Coletar logs automaticamente dos containers Docker
- Indexar e consultar eventos
- Visualizar informações através de dashboards
- Preparar a base para métricas e tracing distribuído

---

# 🏗️ Arquitetura

                 +-------------+
                 |  Frontend   |
                 | React/Vite  |
                 +-------------+
                       |
                       |
		       |
                 +-------------+
                 |  Backend    |
                 | Node.js API |
                 +-------------+

                       |
                       |
              Docker stdout logs

                       |
                       |

                 +-------------+
                 |   Alloy     |
                 | Log Agent   |
                 +-------------+

                       |
                       |

                 +-------------+
                 |    Loki     |
                 | Log Storage |
                 +-------------+

                       |
                       |

                 +-------------+
                 |  Grafana    |
                 | Dashboard   |
                 +-------------+


---

# 🧰 Tecnologias


## Aplicação

- React
- Vite
- Node.js
- Docker


## Observabilidade

- Grafana Alloy
- Grafana Loki
- Grafana


## Infraestrutura

- Docker Compose
- Linux


---

# 📂 Estrutura do Projeto


```
lgtm-observability-platform/

├── app
│   ├── frontend
│   └── backend
│
├── observability
│   ├── alloy
│   │   └── config.alloy
│   │
│   ├── loki
│   │   └── loki.yaml
│   │
│   └── grafana
│       └── provisioning
│
├── docs
│
├── scripts
│
├── docker-compose.yml
└── README.md
```


---

# 🚀 Executando o projeto


## Pré-requisitos


- Docker
- Docker Compose


Validar instalação:


```bash
docker --version

docker compose version
```


---

## Subir ambiente


```bash
docker compose up -d
```


Validar containers:


```bash
docker compose ps
```


---

# 🌐 Serviços


| Serviço | Porta |
|-|-|
| Frontend | 80 |
| Backend API | 3000 |
| Loki | 3100 |
| Grafana | 3000 |


---

# 📊 Grafana


Acessar:


```
http://localhost:3000
```


Adicionar datasource:


```
Loki

URL:
http://loki:3100
```


---

# 🔎 Testando logs


Gerar eventos:


```bash
curl localhost:3000/api/generate
```


Consultar logs:


```bash
curl -G localhost:3100/loki/api/v1/query_range \
--data-urlencode 'query={service="backend"}'
```


Resultado esperado:


```json
{
 "service":"backend",
 "msg":"Generating fake data"
}
```


---

# 🔄 Fluxo de Logs


Aplicação

↓

Docker stdout

↓

Grafana Alloy

↓

Loki

↓

Grafana


---

# 🛠 Troubleshooting


## Alloy não coleta logs


Verificar:


```bash
docker logs alloy
```


Validar socket Docker:


```bash
docker exec alloy ls -l /var/run/docker.sock
```


---

## Loki sem dados


Verificar labels:


```bash
curl localhost:3100/loki/api/v1/labels
```


---

# 🗺️ Roadmap


## Observabilidade

[x] Dockerized applications

[x] Centralização de logs

[x] Grafana Alloy

[x] Loki

[x] Grafana dashboards


## Próximas evoluções


[ ] Métricas com Prometheus/Mimir

[ ] Tracing distribuído com Tempo

[ ] Dashboards avançados

[ ] Alertas

[ ] CI/CD Pipeline

[ ] Deploy AWS EC2

[ ] Reverse Proxy

[ ] HTTPS/TLS


---

# 👨‍💻 Aut: Manuel Fernandes Andrade

Projeto criado para estudos e prática de:

- DevOps
- Cloud Computing
- Observabilidade
- Containers
- Engenharia de Plataforma

```markdown
## 📚 Documentation

- [Architecture](docs/architecture.md)
- [Operations](docs/operations.md)
- [Troubleshooting](docs/troubleshooting.md)
