const mongoose = require('mongoose');
<<<<<<< HEAD
require('dotenv').config();

=======
require('dotenv').config(); //SE NECESITA PARA QUE MONGO_DB SEA LEIDO DEL ARCHIVO .ENV



>>>>>>> e2d2072e81462a7f734d41be1d67de89621ab0c0
mongoose.connect(process.env.MONGO_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const LibroSchema = new mongoose.Schema({
  titulo: String,
  autor: String
}, { collection: 'libros' });

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = Libro;