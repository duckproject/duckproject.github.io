# duckproject.github.io

DuckProject es un mini proyecto enfocado a realizar un juego *"RPG text based"*

La idea es separar en un sistema simple por un lado el contenido del juego y por otro la mecanica del mismo. Para ello se va a crear un juego web based en javascript.

Actualmente el juego se ccompone de distintas pantallas "slides" que van alternandose entre ellas. En cada slide el usuario tiene distintas opciones y dependiendo de que acción realice se procedera a realizar una acción u otra.

## Creación de slides

```
## Bienvenido al maravilloso juego este
### Hola que tal estas??

Quiero hacer una serie de pruebas asi que...
- Sientete libre

![](https://s-media-cache-ak0.pinimg.com/736x/a1/e3/6b/a1e36bcb8ce179bd8cc8db28ff4ef6fb.jpg)

<slideOptions>
    <option type="goTo" slide="gameOver">Pues me suicido</option>
    <option type="goTo" slide="step2">Me rasco los huevos</option>
    <option type="goTo" slide="step2">Me saco un moco</option>
</slideOptions>
```
> Ejemplo de slide


Todas las slides son almacenadas en la carpeta ["slides"](https://github.com/duckproject/duckproject.github.io/tree/master/slidess), se les puede establecer cualquier nombre usando unicamente caracteres alfanumericos, debe acabar con la extensión .slide.

Cada slide posee dos areas diferenciadas

###Texto de la slide

Es todo el texto que aparece antes del elemento `<slideOptions>`.

Para su edición puedes usar [markdown](https://guides.github.com/features/mastering-markdown/) o HTLM 

###Opciones

Semi sección xml con las posibles opciones de la slide.

```
<slideOptions>
    <option type="goTo" slide="gameOver">Pues me suicido</option>
    <option type="goTo" slide="step2">Me rasco los huevos</option>
    <option type="goTo" slide="step2">Me saco un moco</option>
</slideOptions>
```
>Ejemplo de opciones de slide

La sección esta conformada de la siguiente manera
- `<slideOptions>` y  `</slideOptions>` Deben encerrar todas las posibles opciones
- Cada opcion debee tener el formato: `<option type={{optionType}} {{moreAttrs}}>{{optionText}}</option>`
- El atributo type indica de que tipo es la opción
- Dependiendo del tipo, pueden existir atributos adicionales.
- En optionText se escribe el texto que aparecerá en la opción.


## Opciones posibles

### goTo

```
<option type="goTo" slide="gameOver">Pues me suicido</option>
```

Transición sencilla, en el atributo `slide` pon el nombre de la slide donde quieres transicionar sin la extensión de archivo ".slide"



## Github

Para poder contribuir en este proyecto debes poseer una cuenta de github, tras ello solicitar permisos en el proyecto, para ello ponte en contacto conmigo a través de la issue https://github.com/duckproject/duckproject.github.io/issues/1.

Una vez tengais permisos sobre el repositorio, seguir las instrucciones a continuación

### Crear una nueva slide

#### 1. Posicionarse en el directorio y pulsar el botón más.
![image](https://cloud.githubusercontent.com/assets/13250982/10727487/924b95fe-7bda-11e5-901c-3f724ce71eb6.png)

#### 2. Escribe el nombre y texto de la slide
Recuerda que el nombre tiene que acabar en .slide

Para mas facilildad recomiendo copiar / pegar lo siguiente

```
Texto

<slideOptions>
    <option type="goTo" slide="">Texto de la opción</option>
</slideOptions>
```

![image](https://cloud.githubusercontent.com/assets/13250982/10727557/06475c04-7bdb-11e5-9152-eb9ca8846f33.png)


#### 3. Pulsar en el boton `commit new file` 
No rellenar nada adicional ni cambiar el radio button.

![image](https://cloud.githubusercontent.com/assets/13250982/10727565/25676624-7bdb-11e5-9f91-035b2e74755c.png)

### Editar una slide

#### 1. Accede a la slide y pulsa en el botón editar
![image](https://cloud.githubusercontent.com/assets/13250982/10727601/5afd0b40-7bdb-11e5-9a08-24d2314a8c32.png)

#### 2. Realiza los cambios

#### 3. Pulsa al boton `commit changes`
No rellenes nada adicional
