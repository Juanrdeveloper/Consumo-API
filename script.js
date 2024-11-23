// Selección de elementos del DOM
const loadDataButton = document.getElementById('loadData');
const userList = document.getElementById('userList');

// Función para cargar los datos de la API
const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); // API pública
    const data = await response.json(); // Convierte la respuesta a JSON

    // Limpiar lista antes de agregar nuevos datos
    userList.innerHTML = '';

    // Agregar los usuarios a la lista
    data.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
};

// Evento para cargar los usuarios al hacer clic en el botón
loadDataButton.addEventListener('click', fetchUsers);
