     // Función que obtiene los datos de la API y crea las cards
    function obtenerDatos() {
        // Utilizamos la función fetch para obtener los datos de la API , La función fetch es una API web que permite realizar solicitudes HTTP asincrónicas, lo que significa que puede solicitar datos de recursos en línea sin tener que recargar la página web completa.
        fetch('https://my-first-project-con-potrero-default-rtdb.firebaseio.com/cursos.json')
        // El navegador enviará una solicitud HTTP GET al servidor que aloja la API para obtener los datos.
        //Luego, la respuesta a esa solicitud se pasa a la función .then(),se crea el objeto response, que guarda la PROMESA Y donde se llama a .json() para convertir los datos en formato JSON a un objeto JavaScript.
        .then(response => response.json())
        .then(data => { //Recibe esos datos y crea la variable data que va a contener todos los datos en formato JSON que se obtienen utilizando la función fetch.
            // Obtener el elemento contenedor para las cards
            const cardDeck = document.getElementById('card-deck');
            cardDeck.innerHTML = '';  // limpia todo lo que hay en la card anterior(esto hace que siempre que se ejecute la funcion la card cargue de nuevo y no muestre info que ya tenga cargado)
            // Iterar sobre los datos y crear una card para cada objeto
            for (let key in data) {  //La variable data contiene los datos en formato JSON que se obtienen utilizando la función fetch.
              const objeto = data[key]; //se utiliza para recorrer los objetos dentro de data. En cada iteración, la variable key tomará el valor de una de las propiedades de data. La variable objeto se utiliza para almacenar el objeto que se encuentra en la posición key de data.

              // Crear los elementos HTML para la card
            const card = document.createElement('div');  //Aquí se está creando un nuevo elemento HTML div y asignándolo a la variable card. Luego se agrega la clase "card" a ese elemento utilizando el método classList.add().
            card.classList.add('card');

            const imagen = document.createElement('img');
            imagen.classList.add('card-img-top');
            imagen.src = objeto.imagen;

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const titulo = document.createElement('h5');
            titulo.classList.add('card-title');
            titulo.textContent = objeto["nombre"];

            const duracion = document.createElement('p');
            duracion.classList.add('card-text');
            duracion.textContent = 'Duración: ' + objeto.duracion + ' horas';

            const valor = document.createElement('p');
            valor.classList.add('card-text');
            valor.textContent = 'Valor: $' + objeto.valor;

            const descripcion = document.createElement('p');
            valor.classList.add('card-text');
            valor.textContent = 'Descripción ' + objeto.descripcion;

              // Agregar los elementos a la card, crea los elementos HTML que conforman una tarjeta y los agrega en el orden correspondiente, para finalmente agregar la tarjeta completa al contenedor de tarjetas.
            cardBody.appendChild(titulo);
            cardBody.appendChild(duracion);
            cardBody.appendChild(valor);
            cardBody.appendChild(descripcion);

            card.appendChild(imagen);
            card.appendChild(cardBody);

            cardDeck.appendChild(card);
            }
        });
    }

      // Ejecutar la función obtenerDatos al cargar la página
    obtenerDatos();

      // Ejecutar la función obtenerDatos cada 5 segundos utilizando setInterval
    setInterval(obtenerDatos, 5000);  