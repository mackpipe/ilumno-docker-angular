#!/bin/bash
# Construye la imagen usando el archivo dockerfile
docker build -t ilumno-docker-angular:1.0 --build-arg configuration="staging" .
# sube un contenedor con la imagen creada
docker run -d -p 8080:80 ilumno-docker-angular:1.0
