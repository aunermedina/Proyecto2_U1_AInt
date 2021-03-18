<h3 align="center">Actividad integradora. Sprint, el corazón de SCRUM</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/Status-Development-informational.svg)]() 
  [![Version](https://img.shields.io/badge/Version-v1-blue)]()

</div>

---

## 📝 Tabla de Contenidos
+ [Acerca de](#about)
+ [Comenzar](#getting_started)
+ [Ejecutando el programa](#execution)
+ [Construido Usando](#built_using)

## 🧐 Acerca de <a name = "about"></a>
Este proyecto contempla la actividad integradora: Sprint, el corazón de SCRUM de la materia Proyecto 2 de la Lic. Desarrollo de Sistemas Web de la UDG Virtual.

Aquí almacenare todo el código resultante de la actividad, en la sección de proyectos podremos ir viendo la planeación de los sprints mediante tableros Kanban.
## 🏁 Comenzar <a name = "getting_started"></a>
Estas instrucciones le proporcionarán una copia del proyecto en funcionamiento en su máquina local con fines de desarrollo y prueba.

### Prerequisitos

- Python 3+
- NodeJS


### Instalación

Simplemente obtenga un clon del repositorio ejecutando el siguiente comando en la ubicación deseada:

```
git clone https://github.com/aunermedina/Proyecto2_U1_AInt.git
```

Una vez que tenga los archivos del proyecto en su computadora, abra la carpeta con su IDE favorito.

Cree un entorno virtual e instale los paquetes necesarios para ejecutar la herramienta:
```
python -m venv venv .
pip install -r requirements.txt
```
## 🔧 Ejecutando el programa <a name = "execution"></a>

Para ejecutar la Web API primero crea la base de datos: 
```
python manage.py migrate
```
Crea un super usuario: 
```
$ python manage.py createsuperuser
```
escribe tu super usuario, email y contraseña

### Inicie el servidor API de desarrollo
Es momento de levantar un servidor de desarrollo, ejecute el siguiente comando: 

```
$ python manage.py runserver
```

Ahora, abra un navegador web y vaya a "/ api-v1 /" en su dominio local, por ejemplo, http://127.0.0.1:8000/api-v1/.

Debera de ver la pantalla de inicio de la API.

### Inicio de React

Ahora ejecutamos React para verlo en el servidor, ejecute el siguiente comando: 

```
$ npm run dev
```
Ahora, abra un navegador web y vaya a su dominio local, por ejemplo, http://127.0.0.1:8000/ aquí vera lo que React ha cargado.


## ⛏️ Construido Usando <a name = "built_using"></a>
- [Python](https://www.python.org/) - Language Programming
- [Django REST Framework](https://www.django-rest-framework.org/) - Django REST Framework
- [React](https://es.reactjs.org/) - React
