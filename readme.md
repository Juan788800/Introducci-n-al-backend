INTRODUCCION AL BACKEND

Juan Manuel Rodríguez Carreño

Centro industrial de mantenimiento integral sena-cimi

22/05/2026

1. ¿Dónde se guarda esa información?
 Como el formulario solo tiene frontend no se guardaría nada de esa
información, pero necesariamente esa información se guardaría en una base
de datos.

2. ¿Cómo evitar registros duplicados?
 Para evitar registros duplicados seria con una primary key para que el
registro se único e irrepetible.

3. ¿Cómo validar que los datos sean correctos?
 Para validar que unos datos ingresados por un usuario sean correctos tiene
que cumplir con unos campos obligatorios en un campo de texto como
Gmail, nombre, apellido, contraseña.

4. ¿Cómo permitir que luego se consulte o actualice esa información?
 Para permitir que se consulte o actualice esa información es por medio de un
CRUD en el cual se conecta la interfaz web con el servidor y luego con la
base de datos.

5. ¿Qué diferencias existen entre frontend y backend?

 La diferencia entre frontend y backend es que el frontend es solo la interfaz
y la manipulación del DOM. mientras que el backend es la lógica , la bases
de datos, la seguridad y el rendimiento.

6. ¿Por qué el backend es fundamental en aplicaciones reales?
 El backend es fundamental ya que es la parte lógica de la aplicación real, en
el cual es lo que le da funcionamiento al frontend.

7. ¿Qué responsabilidades técnicas debe asumir un desarrollador backend?
 Las responsabilidades que debe asumir un desarrollador backend es el de
hacer funcionar la aplicación en el cual el es el responsable de que la
plataforma sea segura, rápida, estable y que los datos estén correctamente
hacia la interfaz del usuario.

8. ¿Qué implicaciones tiene no estructurar adecuadamente un proyecto desde el
inicio?

 Las implicaciones que tiene un proyecto al no estar bien estructurado es que al momento de hacer alguna modificacion o agregar una funcion va haber tantas lineas de codigo que el proyecto no se va a entender y tambien si sucede algun problema todo dejara de funcionar


9. ¿Qué pasos realizaste desde la creación de la carpeta hasta la ejecución del
servidor?

los pasos que realize desde la creacion de la carpeta hasta la ejecucion del servidor fueron:
abrir el git bash
cambiar las credenciales a las mias
entrar al disco local d
entrar a adso
entrar a 3065369
crear la carpeta
mkdir Backend-postman
entrar ala carpeta con cd
verificar si la version esta bien con node -v y tambien verificar la version del npm -v
actualizar la version de node -v con el siguiente comando npm install -g npm    
iniciamos el archivo package.json con el siguiente comando en el git bash npm init -y 
entramos al visual estudio code con el comando code. en el git bash 
ahora instalamos el framework de Express con el siguiente comando en la terminal npm install express
creamos un archivo index.js con un hola mundo
escribimos el siguiente comando en el git bash node index.js hay abrira el puerto en el cual por defecto sale el 3000
ahora ejecutamos el comando npm run dev arroja un error entonces vamos al package.json y en scripts ponemos "dev": "node index.js"
despues ejecutamos denuevo el coamndo npm run dev y ya sale el primer hola mundo


10. ¿Qué función cumple el archivo package.json?

supongo que el archivo package.json cumple la funcion de configurar un script asi sea en vite o en dev . tambien es la que da ordenes  las herramientas para abrir el puerto.

11. ¿Qué ocurre al ejecutar npm install?
al ejecutar npm install se instalan unos paquetes del node.js y crea una carpeta llamada node_modules

12. ¿Qué significa que el servidor esté “escuchando” en un puerto?
significa que el servidor esta listo para recibir peticiones atraves de un canal o puerta de comunicacion.

 13. ¿Qué sucede internamente cuando accedes a http://localhost:3000/?
El navegador se da cuenta de que localhost es tu propia máquina (127.0.0.1). Luego, el sistema operativo intenta establecer una conexión de red con el puerto 3000

El navegador construye un mensaje de texto con un formato específico y lo envía por ese canal.

el servidor lo recibe y lo enruta 

ejecucion de la logica 

envio de las respuestas HTTp(response)

14. ¿Qué diferencia existe entre cada ruta creada?
cada ruta es una direccion unica conectada a una tarea especifica en el codigo.

15. ¿Qué papel cumplen los parámetros request y response?
los parametros request son los que hacen la peticion mientras que el parametro response es el que da las respuestas.

16. ¿Qué dificultades encontraste?
al principio andaba perdidon con lo de actualizar el node.js 
algunas veces cuando asi el comando npm run dev salia un error
cuando hacia un cambio en el codigo y queria verlo en el navegador no cargaba 


17. ¿Qué aprendiste que no habías comprendido completamente en la parte teórica?

aprendi a actualizar el node.js 
aprendi cuando el comando npm run dev salia error era porque la parte de script no habia una ruta para que lo llamara y asi se ejecutara.
aprendi cuando hago una actualizacion en el codigo tengo q volver a poner el comando en el git bash para que actualize lo estaba antes a lo de ahora

18. ¿Por qué es importante estructurar bien un proyecto desde el inicio?

es importante estructura bien un proyecto ya que si se empieza de una, al tener algun error o poner alguna nueva funcion  puede hacer que todo deje de funcionar y el proyecto lo vuelvan hacer de nuevo.