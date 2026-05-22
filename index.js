const express = require('express')
const app = express()
const port = 3000
/*
app.get('/', (req, res) => {
    res.json({
        "mensaje": "Hola Mundo soy Juan Manuel y estudio adso"
    })
})
app.get('/usuarios', (req, res) => {
    res.json([
        {
            "nombre": "John Becerra",
            "id": 1
        },
        {
            "nombre": "Sergio Alvarez",
            "id": 2
        },
    ]);
});
app.get('/saludo', (req, res) => {
    res.json([
        {
            "mensaje": "Hola soy Aprendiz del SENA",
            "nombre": "Mi nombre es Juan Manuel",
            "año": 2026,
        },
    ]);
});
*/
app.get('/', (req, res) => {
    res.json({
        "mensaje": "Bienvenido al sistema de gestion academica del SENA"
    })
})
app.get('/aprendices', (req, res) => {
    res.json([
        {
            "mensaje": "Lista de aprendices del SENA",
        },
        {
            
            "nombre": "John Becerra",
            "id": 1
        },
        {
            
            "nombre": "Sergio Alvarez",
            "id": 2
        },
        {
            
            "nombre": "Santiago carrilo",
            "id": 3
        },
        {
            
            "nombre": "Anderson Murica",
            "id": 4
        },
        {
            
            "nombre": "Leidy Esmeralda",
            "id": 5
        },
    ]);
});
app.get('/programas', (req, res) => {
    res.json([
        {
            "programa": "Programas de formacion disponibles en el SENA",
        },
        {
            "programa": "Analisis y desarrollo de software",
            "id": 1,
        },
        {
            "programa": "Redes y telecomunicaciones",
            "id": 2,
        },
        {
            "programa": "mantenimiento de equipo de computo",
            "id": 3,
        },
        {
            "programa": "Gestion empresarial",
            "id": 4,
        },
        {
            "programa": "Administracion de empresas",
            "id": 5,
        },
    ]);
});

app.listen(port, () => {
    console.log(`operando servidor numero de puerto: ${port}`)
})