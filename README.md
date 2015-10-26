# duckproject.github.io

DuckProject es un mini proyecto enfocado a realizar un juego *"RPG text based"*

La idea es separar en un sistema simple por un lado el contenido del juego y por otro la mecanica del mismo. Para ello se va a crear un juego web based en javascript.

Actualmente el juego se ccompone de distintas pantallas "slides" que van alternandose entre ellas. En cada slide el usuario tiene distintas opciones y dependiendo de que acción realice se procedera a realizar una acción u otra.

## Creación de slides

Todas las slides son almacenadas en la carpeta ["slides"](https://github.com/duckproject/duckproject.github.io/tree/master/sliders), se les puede establecer cualquier nombre siempre y guando no disponga de espacioes ni simbolos extraños (Solo se permiten caracteres alfanumericos). A su vez debe acabar con la extensión .slide.

Cada slide posee dos areas diferenciadas

###Texto de la slide

Usando HTML o bien markdown puedes escribir el texto que aparecerá en la pantalla

###Opciones

Semi sección xml con las posibles opciones de la slide.

## Opciones posibles

###goTo
Transición sencilla, en el atributo slide pon el nombre de la slide donde quieres transicionar sin la extensión de archivo ".slide"

