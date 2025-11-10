const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, default: 0, required: true },
  categoria: { type: String, required: true },
  fechaRegistro: { type: Date, default: Date.now } // opcional
});

// ✅ Exportar correctamente el modelo
const Producto = mongoose.model('Producto', productoSchema);
module.exports = Producto;
