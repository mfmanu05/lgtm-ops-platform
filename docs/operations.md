# Operations Guide


## Start Platform


```bash
docker compose up -d

### stopar a plataforma

```bash
docker compose down

### restartar a plataforma
docker compose restart


#### checar os containers
docker compose ps

### validar os logs do alloy
docker logs alloy

### validar os logs do backend
docker logs lgtm-backend

### checar os logs do loki
docker logs loki

### Test Log do Pipeline
gerar eventos: curl localhost:3000/api/generate

### Query Loki:
curl -G localhost:3100/loki/api/v1/query_range \
--data-urlencode 'query={service="backend"}'
