Node-RED-Seguridad
==================

respaldo de los nodos de seguridad , GMT , AST, MOWI, AQUACHILE, SALMONES AUSTRAL,

### About

This is your project's README.md file. It helps users understand what your
project does, how to use it and anything else they may need to know.

### Como Funciona

#### Instalacion 
#### Instalar Node.js y npm:

Abre una terminal en tu sistema Ubuntu y ejecuta los siguientes comandos para instalar Node.js y npm utilizando el gestor de paquetes apt:
- `sudo apt update`
- `sudo apt install nodejs`
- `sudo apt install npm`
  
Puedes verificar que Node.js y npm se instalaron correctamente ejecutando los siguientes comandos:
- `node -v`
- `npm -v`

Esto te mostrará las versiones instaladas de Node.js y npm.

#### Instalar pm2:

Puedes instalar pm2 globalmente en tu sistema con el siguiente comando:

- `sudo npm install -g pm2`

Esto instalará pm2 y lo hará accesible desde cualquier ubicación en tu sistema.

#### Verificar la instalación de pm2:

Para asegurarte de que pm2 se ha instalado correctamente, puedes ejecutar:

- `pm2 --version`

Esto te mostrará la versión de pm2 que se ha instalado.

#### Instalar **express**

- `sudo npm install express`

#### Instalar **body-parser**

- `sudo npm install body-parser`

#### Instalar **mqtt**

- `sudo npm install mqtt`

#### Habilitar el puerto 3002

Se debe abrir puerto a usar por la API, en este caso se usará el puerto 3002.
- `sudo ufw allow 3002`







