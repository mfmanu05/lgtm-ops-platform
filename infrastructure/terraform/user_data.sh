#!/bin/bash

set -e

echo "=== Atualizando sistema ==="

apt update -y
apt upgrade -y


echo "=== Instalando dependências ==="

apt install -y \
git \
docker.io \
docker-compose-plugin


echo "=== Iniciando Docker ==="

systemctl enable docker
systemctl start docker


echo "=== Clonando aplicação ==="

cd /opt

git clone https://github.com/mfmanu05/lgtm-ops-platform.git lgtm


echo "=== Subindo stack ==="

cd /opt/lgtm

docker compose up -d


echo "=== Fim provisionamento ==="
