# tp-compose

## Objectif 1

Creer un container pour le projet ChatServer

Indice: Le lancement se fait par :

> node index.js

## Objectif 2

Conteneuriser le front et le server séparément et les faire communiquer ensemble via le network

## Annexe

```

services:
  frontend:
    image: awesome/webapp
    ports:
      - "443:8043"
    networks:
      - front-tier
      - back-tier
    configs:
      - httpd-config
    secrets:
      - server-certificate

  backend:
    image: awesome/database
    volumes:
      - db-data:/etc/data
    networks:
      - back-tier

volumes:
  db-data:
    driver: flocker
    driver_opts:
      size: "10GiB"

configs:
  httpd-config:
    external: true

secrets:
  server-certificate:
    external: true

networks:
  # The presence of these objects is sufficient to define them
  front-tier: {}
  back-tier: {}

```
