const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 
const productosRoutes = require('./routes/productos');

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
// middleware para JSON
app.use(express.json());

// middleware
app.use('/api', productosRoutes);

//rutas
app.get('/', (req, res) => {
  res.send('Bienvenidoa a la API de Productos');
});

//Conexion a mongo db
mongoose.connect(process.env.MONGODB_URI,)
.then(() => console.log('Conectado a MongoDB')).catch((error) => console.error(error));

app.listen(port, () => console.log('Server is running on port', port));