const express = require('express');
// Tabla TipoEmpleado
const {obtenerPedidosPorEstadoController, obtenerTodosLosPedidosController} = require('./src/controllers/pedidoController');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ruta para obtener un empleado por su ID
app.get('/pedidos/:estado', obtenerPedidosPorEstadoController);
app.get('/pedidos', obtenerTodosLosPedidosController);

// // Ruta para registrar un nuevo empleado
// app.post('/empleado', registrarEmpleadoController);

// // Ruta para actualizar un empleado por su ID
// app.put('/empleado/:id', actualizarEmpleadoController);

// // Ruta para eliminar un empleado por su ID
// app.delete('/empleado/:id', eliminarEmpleadoController);


app.listen(PORT, () => {
    console.log(`Servidor API REST escuchando en el puerto ${PORT}`);
});
