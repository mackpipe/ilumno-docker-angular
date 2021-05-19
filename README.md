# Proyecto de Docker para Angular 12 y Redux

## Pasos a Seguir
- Clone este repositorio https://github.com/mackpipe/ilumno-docker-angular.git en su equipo
- Ubiquese en la carpeta del repositorio
  `cd ilumno-docker-angular`
- Ejecute el archivo ilumno.sh 
  `./ilumno.sh`  
    Este archivo genera los siguientes procesos
  - Genera una imagen utilizando el archivo Dockerfile, el cual se incluye un proceso de Multi step
  - Levanta la contenedora, usando la imagen creada con Dockerfile, esta contenedora corre Ngnix, la cual aloja el proyecto Angular

Al finalizar el proceso sh, se ve una pantalla similar a la siguiente
![image](https://user-images.githubusercontent.com/1072188/118878487-399b4300-b8b5-11eb-94cb-928c4c54640d.png)



