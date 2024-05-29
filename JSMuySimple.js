// Hacer una solicitud para obtener los datos de la API
function obtenerCursos() { //obtener los datos de la base en realtime
    fetch('https://my-first-project-con-potrero-default-rtdb.firebaseio.com/cursos')
      .then(response => response.json())
      .then(data => {
        // Actualizar la lista de cursos en la página
        const cursosLista = document.getElementById('cursos-lista'); //limpia el elemento para que siempre comience vacío
        cursosLista.innerHTML = '';

        for (const curso in data) {
          const li = document.createElement('li');
          li.textContent = data[curso].nombre + ' - ' + '$' + data[curso].valor;

          //crea los elementos HTML
          cursosLista.appendChild(li);
        }
      });
  }

  // ejecuta la función para obtener los datos por primera vez
  obtenerCursos();

  // Actualizar los datos cada 30 segundos
  setInterval(obtenerCursos, 5000);