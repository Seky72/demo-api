// URL de la API
const apiUrl = 'https://6615d39cb8b8e32ffc7bcd08.mockapi.io/empleados';

// Función para obtener los registros de la API
async function obtenerRegistros() {
    try {
        const response = await axios.get(apiUrl);
        const registros = response.data;

        // Limpia la lista actual
        const lista = document.getElementById('listaRegistros');
        lista.innerHTML = '';

        // Agrega cada registro a la lista
        registros.forEach(registro => {
            const li = document.createElement('li');
            li.textContent = registro.nombre + " " + registro.apellido; // Suponiendo que el objeto de registro tiene un campo 'nombre'
            lista.appendChild(li);
        });
    } catch (error) {
        console.error('Error al obtener los registros:', error);
    }
}

// Llama a la función para obtener los registros cuando la página se carga
window.onload = obtenerRegistros;