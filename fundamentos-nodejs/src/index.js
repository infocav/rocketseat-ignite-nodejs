const express = require("express");

const app = express();

app.use(express.json());

app.get('/ignite', (request, response) => {
    response.json({ msg: "Bem vindo"});
});

app.get('/courses', (request, response) => {

    const parametros = request.query;
    console.log(parametros);
    response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4",
    ]);
});

app.post('/courses', (request, response) => {
    const parametros = request.body;
    console.log(parametros);
    response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4",
        "Curso 5",
    ]);
});


app.put('/courses/:id', (request, response) => {

    const id = request.params;
    // ou 
    // const { id } = request.params;

    console.log(id);

    response.json([
        "Curso 6",
        "Curso 2",
        "Curso 3",
        "Curso 4",
        "Curso 5",
    ]);
});

app.patch('/courses/:id', (request, response) => {
    response.json([
        "Curso 6",
        "Curso alterado 2",
        "Curso 3",
        "Curso 4",
        "Curso 5",
    ]);
});

app.delete('/courses/:id ', (request, response) => {
    response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 5",
    ]);
});

app.listen(3333);
