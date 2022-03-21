# Practica5PAT

En esta práctica hemos añadido al formulario de la web original funcionalidad API Rest gracias a una aplicación de SpringBoot. Para ello, nos hemos creado una serie de clases de Java que hacen las funcionalidades requeridas:

* **Contact:** Contiene la información que el usuario debe meter para completar el cuestionario. Además, tiene los métodos getters, setters y constructores correspondientes.
* **ContactsApplication:** Gracias a la anotación @SpringBootApplication tiene la funcionalidad de gestión de una App. Sin embargo, los métodos para interaccionar con la API no se incluyen aquí sino en la siguiente.
* **Controller:** Esta clase es la que contiene los métodos para relacionarse con la API. Como podrá ver, esta clase incluye dos métodos principales y una lista de contactos. La lista sirve para guardar la información de los contactos. Los métodos son uno para conseguir los contactos (getContacts), que devuelve la lista de contactos cuando todo va bien, y otro para crear nuevos contactos (postContact), que devolverá el contacto creado cuando todo va bien.

Además, he creado un archivo *quienesSomos.js* con las funciones para llamar a la API. Esta llamada se crea cuando se pulsa el botón al final del cuestionario. Como puede comprobar, en ese momento se ejecuta la función *parseContact* que, tras crear el formato de un contacto, llama a la función *postContact*, que hace el *fetch* para acceder a la API. 

Para poder ver el resultado, cuando cree los contactos puede añadir a la url el modificador */contacts/*, donde podrá ver la lista de los contactos creados desde la web. 
