# Adoption App
Emanuel Blanco

Proyecto realizado para el curso de Programación Backend III: Testing y Escalabilidad Backend.

## Documentación

En http://localhost:8080/api-docs se pueden ver todos los endpoints desarrollados hasta el momento y probarlos.

## Test

Corriendo npm run test se correran todos los test probando las funcionalidades de toda la app.

Son veintiún pruebas divididas en tres grupos:

- Pets:

    1. Prueba el endpoint para buscar todas las mascotas
    2. Crea una mascota
    3. Busca a la mascota por el Id
    4. Modifica la mascota y verifica que las modificaciones
    5. Elimina la mascota


- Users:

    6. Prueba el endpoint para buscar todos los usuarios
    7. Crea un usuario
    8. Busca el usuario por el Id
    9. Modifica el usuario y verifica que las modificaciones
    10. Elimina el usuario

- Adoptions:

    11. Crea una mascota
    12. Crea un usuario
    13. Crea una adopción con el usuario y la mascota creados anteriormente
    14. Comprueba que se haya modificado el usuario
    15. Comprueba que se haya modificado la mascota
    16. Busca la adopción por el Id
    17. Elimina la adopción creada
    18. Comprueba que al eliminar la adopción se modifique el usuario
    19. Comprueba que al eliminar la adopción se modifique la mascota
    20. Elimina la mascota
    21. Elimina el usuario

## Uso

Por razones de seguridad no se sube la api key ni la cadena de conexión a mongo, pero sí un archivo .env.example en donde se deberá completar dicho dato a fin de probar el proyecto.

Por la misma razón se agrega un .dockerignore para que no sea parte de la imagen el archivo .env.