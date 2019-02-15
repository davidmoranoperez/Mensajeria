const express = require('express');
const {Direccion, Paquete}= require('./models');

const router = express.Router();

// ver todos las direcciones
router.get('/direcciones',(req,res) => {
    Direccion.find({},(err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

router.get('/paquetes',(req,res) => {
    Paquete.find({},(err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

//BUSCAR UNO
router.get('/direcciones/:id', (req,res)=>{
    Direccion.findOne({_id: req.params.id},(err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

router.get('/paquetes/:id', (req,res)=>{
    Paquete.findOne({_id: req.params.id},(err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

//BORRAR
router.delete('/direcciones/:id', (req,res)=>{
    Direccion.findOneAndRemove({_id: req.params.id},(err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

router.delete('/paquetes/:id', (req,res)=>{
    Paquete.findOneAndRemove({_id: req.params.id},(err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

//ACTUALIZAR
router.put('/direcciones/:id', (req,res)=>{
    Direccion.findOneAndUpdate(
        {_id: req.params.id},
        {$set: {provincia: req.body.provincia,
                ciudad: req.body.ciudad, 
                direccion: req.body.direccion, 
                bloque: req.body.bloque,  
                puerta: req.body.puerta}},
        (err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

router.put('/paquetes/:id', (req,res)=>{
    Paquete.findOneAndUpdate(
        {_id: req.params.id},
        {$set: {codigoBarras: req.body.codigoBarras,
                peso: req.body.peso,
                fragil: req.body.fragil,
                embalaje: req.body.embalaje,
                tipo: req.body.tipo}},
        (err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

//INSERTAR
router.post('/direcciones', (req,res)=>{
    const direccion = new Direccion({
                provincia: req.body.provincia,
                ciudad: req.body.ciudad, 
                direccion: req.body.direccion, 
                bloque: req.body.bloque,  
                puerta: req.body.puerta});
        direccion.save((err,data)=>{
            if(err) res.json({error:err});
            else res.json(data);
    });
});

router.post('/paquetes', (req,res)=>{
    const paquete = new Paquete({
                codigoBarras: req.body.codigoBarras,
                peso: req.body.peso,
                fragil: req.body.fragil,
                embalaje: req.body.embalaje,
                tipo: req.body.tipo});
        paquete.save((err,data)=>{
            if(err) res.json({error:err});
            else res.json(data);
    });
});

module.exports = router;