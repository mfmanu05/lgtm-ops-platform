# LGTM Ops Platform - Documento de Execução

## Visão do Projeto

Projeto de laboratório DevOps focado em construir uma plataforma observável utilizando:

- Node.js
- React
- Docker
- Docker Compose
- GitHub Actions
- Grafana
- Loki
- Alloy

Objetivo:

Criar uma aplicação capaz de gerar dados em escala, empacotar utilizando containers e implementar uma stack completa de observabilidade.

---

# Arquitetura Atual

```text
Browser

   |
   |

Frontend React
(Nginx Container)

   |
   |
   | /api/generate
   |

Backend Node.js
(Express API)

   |
   |
Logs estruturados

(Futuro)

Alloy
 |
Loki
 |
Grafana
