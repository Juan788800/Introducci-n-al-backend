# Introducción al Backend

**Autor:** Juan Manuel Rodríguez Carreño  
**Institución:** Centro Industrial de Mantenimiento Integral SENA-CIMI  
**Fecha:** 22/05/2026  

---

## Fundamentos de Datos y Almacenamiento

**1. ¿Dónde se guarda esa información?**  
Como el formulario solo tiene frontend, no se guardaría nada de esa información. Necesariamente, esa información se debe guardar en una **base de datos**.

**2. ¿Cómo evitar registros duplicados?**  
Para evitar registros duplicados se utiliza una *Primary Key* (Llave Primaria) para que cada registro sea único e irrepetible.

**3. ¿Cómo validar que los datos sean correctos?**  
Para validar que los datos ingresados por un usuario sean correctos, estos tienen que cumplir con campos obligatorios en los campos de texto (por ejemplo: formato de correo de Gmail, nombre, apellido, requisitos de contraseña).

**4. ¿Cómo permitir que luego se consulte o actualice esa información?**  
Para permitir que se consulte o actualice la información, se hace por medio de un **CRUD** (Crear, Leer, Actualizar, Borrar). A través de este, se conecta la interfaz web con el servidor y posteriormente con la base de datos.

---

## Arquitectura y Buenas Prácticas

**5. ¿Qué diferencias existen entre frontend y backend?**  
La diferencia principal es que el **frontend** es solo la interfaz visual y la manipulación del DOM, mientras que el **backend** es la lógica, la conexión a bases de datos, la seguridad y el rendimiento del sistema.

**6. ¿Por qué el backend es fundamental en aplicaciones reales?**  
Es fundamental porque es el cerebro y la parte lógica de la aplicación; es lo que le da funcionamiento y soporte real a lo que se ve en el frontend.

**7. ¿Qué responsabilidades técnicas debe asumir un desarrollador backend?**  
Debe asumir la responsabilidad de hacer funcionar la aplicación. Es el encargado de que la plataforma sea:
*   Segura.
*   Rápida.
*   Estable.
*   Capaz de enviar los datos correctamente hacia la interfaz del usuario.

**8. ¿Qué implicaciones tiene no estructurar adecuadamente un proyecto desde el inicio?**  
Si un proyecto no está bien estructurado, al momento de hacer alguna modificación o agregar una nueva función, habrá tantas líneas de código desordenado que no se entenderá. Además, si sucede algún error, todo el sistema dejará de funcionar. *(Ver pregunta 18).*

**18. ¿Por qué es importante estructurar bien un proyecto desde el inicio?**  
Es vital porque, de lo contrario, al presentarse un error o intentar escalar el proyecto agregando funciones nuevas, el fallo en una sola parte puede tumbar todo el sistema, obligando al equipo a tener que rehacer el proyecto desde cero.

---

## Configuración del Entorno y Servidor

**9. ¿Qué pasos realizaste desde la creación de la carpeta hasta la ejecución del servidor?**  

1. Abrir **Git Bash**.
2. Cambiar las credenciales a las mías.
3. Ingresar al directorio de trabajo correspondiente:
   * Entrar al disco local `D:`
   * Entrar a la carpeta `adso`
   * Entrar a la ficha `3065369`
4. Crear la carpeta del proyecto: `mkdir Backend-postman`
5. Entrar a la carpeta: `cd Backend-postman`
6. Verificar las versiones instaladas:
   * `node -v`
   * `npm -v`
7. Actualizar la versión de npm: `npm install -g npm`
8. Iniciar el archivo de configuración: `npm init -y`
9. Abrir Visual Studio Code: `code .`
10. Instalar el framework Express: `npm install express`
11. Crear un archivo `index.js` y programar un "Hola Mundo".
12. Ejecutar el servidor con `node index.js` (por defecto abre en el puerto `3000`).
13. **Configuración del script:** Al ejecutar `npm run dev` arrojó un error, así que modifiqué el archivo `package.json` agregando en los scripts: `"dev": "node index.js"`.
14. Ejecutar nuevamente `npm run dev` para visualizar el primer Hola Mundo.

**10. ¿Qué función cumple el archivo `package.json`?**  
Cumple la función de configurar scripts (como en Vite o el script `dev`). También es el archivo que da las órdenes a las herramientas para que ejecuten acciones, como abrir el puerto.

**11. ¿Qué ocurre al ejecutar `npm install`?**  
Se instalan los paquetes y dependencias de Node.js requeridas para el proyecto y se genera automáticamente una carpeta llamada `node_modules` donde se almacena todo ese código.

**12. ¿Qué significa que el servidor esté “escuchando” en un puerto?**  
Significa que el servidor está encendido y listo para recibir peticiones a través de un canal o puerta de comunicación específica.

**13. ¿Qué sucede internamente cuando accedes a `http://localhost:3000/`?**  
*   El navegador detecta que `localhost` es la máquina local (`127.0.0.1`).
*   El sistema operativo establece una conexión de red con el puerto `3000`.
*   El navegador construye un mensaje de texto con un formato específico y lo envía por ese canal.
*   El servidor recibe la petición y la enruta.
*   Se ejecuta la lógica programada.
*   Se envían las respuestas HTTP (`response`) de vuelta al navegador.

---

## Rutas y Peticiones

**14. ¿Qué diferencia existe entre cada ruta creada?**  
Cada ruta es una dirección única que está conectada a una tarea o función específica dentro del código del servidor.

**15. ¿Qué papel cumplen los parámetros request y response?**  
*   **`request` (req):** Es el parámetro que contiene y hace la petición del cliente.
*   **`response` (res):** Es el parámetro encargado de dar y enviar las respuestas desde el servidor al cliente.

---

## Experiencia y Aprendizaje

**16. ¿Qué dificultades encontraste?**  
*   Al principio hubo confusión con el proceso de actualización de Node.js.
*   Errores al ejecutar el comando `npm run dev`.
*   Al hacer un cambio en el código y querer verlo reflejado en el navegador, los cambios no cargaban automáticamente.

**17. ¿Qué aprendiste que no habías comprendido completamente en la parte teórica?**  
*   Aprendí a actualizar correctamente Node.js por consola.
*   Comprendí que cuando el comando `npm run dev` arroja error, es porque en la sección de `scripts` del `package.json` no hay una instrucción configurada para que lo llame y lo ejecute.
*   Aprendí que al hacer una actualización en el código base, es necesario volver a detener y ejecutar el comando en Git Bash para que el servidor se reinicie y tome los cambios nuevos.