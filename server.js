const fs = require('fs');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const mysql = require('mysql2');
const enforce = require('express-sslify');
 
const app = express();
app.use(enforce.HTTPS({ trustProtoHeader: true }));

const jsonParser = express.json();

//здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
 
//простой тест сервера
app.get('/ping', function (req, res) {
    return res.send('pong');
});

//обслуживание html
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//получение данных теста на "Психологическую защиту"
app.post("/user", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);

    var data = request.body["flagtest"];
    console.log(data);

    var id = request.body["id"];
    console.log(id);

    const connection = mysql.createConnection({
        host: "",
        user: "",
        database: "",
        password: ""
    });

    const sql_zero = `create table if not exists defensetest(
        id int primary key auto_increment,
        def1 int not null,
        def2 int not null,
        def3 int not null,
        def4 int not null,
        def5 int not null,
        def6 int not null,
        def7 int not null,
        def8 int not null,
        def9 int not null,
        vkid long not null
      )`;
       
    connection.query(sql_zero, function(err, results) {
        if(err) console.log(err);
        else console.log("Таблица создана");
    });

    const sql = `INSERT INTO defensetest(def1, def2, def3, def4, def5, def6, def7, def8, def9, vkid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const users = [request.body["flagtest"][0], request.body["flagtest"][1], request.body["flagtest"][2], request.body["flagtest"][3],
                   request.body["flagtest"][4], request.body["flagtest"][5], request.body["flagtest"][6], request.body["flagtest"][7],
                   request.body["flagtest"][8], request.body["id"]];
    
    connection.query(sql, users, function(err, results) {
        if(err) console.log(err);
        console.log(results);
    });

    // тестирование подключения
    connection.connect(function(err){
        if (err) {
            return console.error("Ошибка: " + err.message);
        }
        else {
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    });
    // закрытие подключения
    connection.end(function(err) {
        if (err) {
            return console.log("Ошибка: " + err.message);
        }
        console.log("Подключение закрыто");
    });

});

//получение данных опросника Кеттелла
app.post("/kitty", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);

    var data = request.body["stans"];
    console.log(data);

    var id = request.body["id"];
    console.log(id);

    const connection = mysql.createConnection({
        host: "",
        user: "",
        database: "",
        password: ""
    });

    const sql_zero = `create table if not exists kettelltest(
        id int primary key auto_increment,
        ket1 int not null,
        ket2 int not null,
        ket3 int not null,
        ket4 int not null,
        ket5 int not null,
        ket6 int not null,
        ket7 int not null,
        ket8 int not null,
        ket9 int not null,
        ket10 int not null,
        ket11 int not null,
        ket12 int not null,
        ket13 int not null,
        ket14 int not null,
        ket15 int not null,
        ket16 int not null,
        vkid long not null
      )`;
       
    connection.query(sql_zero, function(err, results) {
        if(err) console.log(err);
        else console.log("Таблица создана");
    });

    const sql = `INSERT INTO kettelltest(ket1, ket2, ket3, ket4, ket5, ket6, ket7, ket8, ket9, ket10, ket11, ket12, ket13, ket14, ket15, ket16, vkid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const users = [request.body["stans"][0], request.body["stans"][1], request.body["stans"][2], request.body["stans"][3],
                   request.body["stans"][4], request.body["stans"][5], request.body["stans"][6], request.body["stans"][7],
                   request.body["stans"][8], request.body["stans"][9], request.body["stans"][10], request.body["stans"][11],
                   request.body["stans"][12], request.body["stans"][13], request.body["stans"][14], request.body["stans"][15],
                   request.body["id"]];
    
    connection.query(sql, users, function(err, results) {
        if(err) console.log(err);
        console.log(results);
    });

    // тестирование подключения
    connection.connect(function(err){
        if (err) {
            return console.error("Ошибка: " + err.message);
        }
        else {
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    });
    // закрытие подключения
    connection.end(function(err) {
        if (err) {
            return console.log("Ошибка: " + err.message);
        }
        console.log("Подключение закрыто");
    });

});

//получение данных опросника Шварца
app.post("/shampoo", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);

    var data1 = request.body["rang1"];
    console.log(data1);

    var data2 = request.body["rang2"];
    console.log(data2);

    var id = request.body["id"];
    console.log(id);

    const connection = mysql.createConnection({
        host: "",
        user: "",
        database: "",
        password: ""
    });

    const sql_zero = `create table if not exists schwartztest(
        id int primary key auto_increment,
        rang11 float not null,
        rang12 float not null,
        rang13 float not null,
        rang14 float not null,
        rang15 float not null,
        rang16 float not null,
        rang17 float not null,
        rang18 float not null,
        rang19 float not null,
        rang110 float not null,
        rang21 float not null,
        rang22 float not null,
        rang23 float not null,
        rang24 float not null,
        rang25 float not null,
        rang26 float not null,
        rang27 float not null,
        rang28 float not null,
        rang29 float not null,
        rang210 float not null,
        vkid long not null
      )`;
       
    connection.query(sql_zero, function(err, results) {
        if(err) console.log(err);
        else console.log("Таблица создана");
    });

    const sql = `INSERT INTO schwartztest(rang11, rang12, rang13, rang14, rang15, rang16, rang17, rang18, rang19, rang110, rang21, rang22, rang23, rang24, rang25, rang26, rang27, rang28, rang29, rang210, vkid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const users = [request.body["rang1"][0], request.body["rang1"][1], request.body["rang1"][2], request.body["rang1"][3], request.body["rang1"][4],
                   request.body["rang1"][5], request.body["rang1"][6], request.body["rang1"][7], request.body["rang1"][8], request.body["rang1"][9],
                   request.body["rang2"][0], request.body["rang2"][1], request.body["rang2"][2], request.body["rang2"][3], request.body["rang2"][4],
                   request.body["rang2"][5], request.body["rang2"][6], request.body["rang2"][7], request.body["rang2"][8], request.body["rang2"][9],
                   request.body["id"]];
    
    connection.query(sql, users, function(err, results) {
        if(err) console.log(err);
        console.log(results);
    });

    // тестирование подключения
    connection.connect(function(err){
        if (err) {
            return console.error("Ошибка: " + err.message);
        }
        else {
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    });
    // закрытие подключения
    connection.end(function(err) {
        if (err) {
            return console.log("Ошибка: " + err.message);
        }
        console.log("Подключение закрыто");
    });

});

//получение данных "Большой Пятёрки"
app.post("/briff", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);

    var data = request.body["bigfive_results"];
    console.log(data);

    var id = request.body["id"];
    console.log(id);

    const connection = mysql.createConnection({
        host: "",
        user: "",
        database: "",
        password: ""
    });

    const sql_zero = `create table if not exists bigfivetest(
        id int primary key auto_increment,
        extraversion int not null,
        affection int not null,
        selfcontrol int not null,
        emotstability int not null,
        expressiveness int not null,
        vkid long not null
      )`;
       
    connection.query(sql_zero, function(err, results) {
        if(err) console.log(err);
        else console.log("Таблица создана");
    });

    const sql = `INSERT INTO bigfivetest(extraversion, affection, selfcontrol, emotstability, expressiveness, vkid) VALUES (?, ?, ?, ?, ?, ?)`;
    const users = [
                    request.body["bigfive_results"][0], 
                    request.body["bigfive_results"][1], 
                    request.body["bigfive_results"][2], 
                    request.body["bigfive_results"][3],
                    request.body["bigfive_results"][4],
                    request.body["id"]
                  ];
    
    connection.query(sql, users, function(err, results) {
        if(err) console.log(err);
        console.log(results);
    });

    // тестирование подключения
    connection.connect(function(err){
        if (err) {
            return console.error("Ошибка: " + err.message);
        }
        else {
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    });
    // закрытие подключения
    connection.end(function(err) {
        if (err) {
            return console.log("Ошибка: " + err.message);
        }
        console.log("Подключение закрыто");
    });

});

app.listen(port);