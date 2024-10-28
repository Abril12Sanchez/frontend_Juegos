const API_GATEWAY_URL = 'process.env.API_GATEWAY_URL'; // Cambia a la URL de tu gateway en Render al desplegar

// Iniciar sesión
document.getElementById('loginBtn').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post(`${API_GATEWAY_URL}/autenticacion/login`, { email, password });
        document.getElementById('loginMessage').innerText = "¡Inicio de sesión exitoso!";
        console.log(response.data); // Aquí puedes manejar la respuesta según tu lógica
    } catch (error) {
        document.getElementById('loginMessage').innerText = "Error al iniciar sesión.";
    }
});

// Obtener juegos
const fetchGames = async () => {
    try {
        const response = await axios.get(`${API_GATEWAY_URL}/juegos`);
        const games = response.data;

        const gameList = document.getElementById('gameList');
        gameList.innerHTML = ''; // Limpiar la lista antes de añadir nuevos elementos

        games.forEach(game => {
            const li = document.createElement('li');
            li.innerText = `ID: ${game.id}, Nombre: ${game.name}`;
            gameList.appendChild(li);
        });
    } catch (error) {
        console.error("Error al obtener juegos:", error);
    }
};

// Realizar pago
document.getElementById('paymentBtn').addEventListener('click', async () => {
    const gameId = document.getElementById('gameId').value;

    try {
        const response = await axios.post(`${API_GATEWAY_URL}/pago`, { gameId });
        document.getElementById('paymentMessage').innerText = "¡Pago realizado con éxito!";
    } catch (error) {
        document.getElementById('paymentMessage').innerText = "Error al realizar el pago.";
    }
});

// Llamar a la función para obtener juegos al cargar la página
fetchGames();
