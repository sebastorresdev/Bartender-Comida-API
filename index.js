const express = require('express');
const cors = require('cors');
const { obtenerPedidosPorEstadoController, obtenerTodosLosPedidosController, obtenerChefDisponiblesController, validarLoginController } = require('./src/controllers/pedidoController');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); // Aplicar configuración de CORS con las opciones definidas

// Rutas de tu aplicación
app.get('/pedidos/:estado', obtenerPedidosPorEstadoController);
app.get('/pedidos', obtenerTodosLosPedidosController);
app.get('/empleado/chef', obtenerChefDisponiblesController);
app.post('/login', validarLoginController);

app.listen(PORT, () => {
    console.log(`Servidor API REST escuchando en el puerto ${PORT}`);
});
