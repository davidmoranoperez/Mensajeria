const mongoose = require('mongoose');

const Direccion = mongoose.model('Direccion',{
    provincia: String,
    ciudad: String,
    direccion: String,
    bloque: String,
    puerta: String
});

const Paquete = mongoose.model('Paquete',{
    codigoBarras: String,
    peso: Number,
    fragil: Boolean,
    embalaje: String,
    tipo: String
});

module.exports = {
    Direccion,
    Paquete
};