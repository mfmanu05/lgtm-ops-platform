#!/bin/bash

set -e

echo "=== Atualizando sistema ==="

apt update -y
apt upgrade -y


echo "=== Instalando dependências ==="

apt install -y \
ca-certificates \
curl \
gnupg \
git


echo "=== Instalando Docker oficial ==="

install -m 0755 -d /etc/apt/keyrings

curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
-o /etc/apt/keyrings/docker.asc

chmod a+r /etc/apt/keyrings/docker.asc


echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] \
https://download.docker.com/linux/ubuntu \
$(. /etc/os-release && echo $VERSION_CODENAME) stable" \
| tee /etc/apt/sources.list.d/docker.list > /dev/null


apt update -y


apt install -y \
docker-ce \
docker-ce-cli \
containerd.io \
docker-buildx-plugin \
docker-compose-plugin


echo "=== Iniciando Docker ==="

systemctl enable docker
systemctl start docker


echo "=== Configurando usuario ubuntu ==="

# libera docker sem sudo
usermod -aG docker ubuntu


# garante permissões do SSH/Git
mkdir -p /home/ubuntu/.ssh

chown -R ubuntu:ubuntu /home/ubuntu/.ssh


echo "=== Clonando aplicação ==="
mkdir -p /opt/lgtm

chown ubuntu:ubuntu /opt
chown -R ubuntu:ubuntu /opt/lgtm


sudo -u ubuntu git clone \
https://github.com/mfmanu05/lgtm-ops-platform.git \
/opt/lgtm


echo "=== Subindo stack ==="

cd /opt/lgtm


sudo -u ubuntu docker compose \
-f docker-compose.prod.yml pull


sudo -u ubuntu docker compose \
-f docker-compose.prod.yml up -d


echo "=== Deploy concluído ==="
