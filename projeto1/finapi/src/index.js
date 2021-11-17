const express = require("express");
const { v4:uuidv4}= require("uuid");

const app = express();

const customers = [];

app.use(express.json());


app.post("/account", (request, response) => {
    console.log(request.body);
    const { cpf, name } = request.body;

    // const id = uuidv4();

    const customerAlreadyExists = customers.some((customers) => customers.cpf === cpf);

    if (customerAlreadyExists) {
        response.status(400).json({msg : "Customers já existe"});
    }

    // customers.push({
    //     id: id,
    //     name: name,
    //     cpf: cpf,
    //     stantment: []
    // });

    // customers.push({
    //     id,
    //     name,
    //     cpf,
    //     stantment: []
    // });
    
    customers.push({
        id: uuidv4(),
        name,
        cpf,
        stantment: []
    });

    return response.status(201).json(customers);

});

app.listen(3333);
