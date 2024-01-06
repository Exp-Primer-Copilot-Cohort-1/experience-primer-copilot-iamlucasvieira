// Create web server
// - Create a web server that can listen to requests for /hello and respond with some HTML that says <h1>Hello World</h1>
// - Create a web server that can listen to requests for /hello?name=firstName and respond with some HTML that says <h1>Hello _name_</h1>
// - Create a web server that can listen to requests for /op?num1=xx&num2=xx&op=add and respond with some HTML that says <h1>num1 op num2 = result</h1>

const express = require('express');
const app = express();

app.get('/hello', function(req, res) {
    res.send('<h1>Hello World</h1>');
});

app.get('/hello/:name', function(req, res) {
    res.send('<h1>Hello ' + req.params.name + '</h1>');
});

app.get('/op/:num1/:num2/:op', function(req, res) {
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);
    var op = req.params.op;
    var result = 0;
    switch (op) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            result = num1 / num2;
            break;
    }
    res.send('<h1>' + num1 + ' ' + op + ' ' + num2 + ' = ' + result + '</h1>');
});

app.get('/calc/:num1/:num2/:op', function(req, res) {
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);
    var op = req.params.op;
    var result = 0;
    switch (op) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            result = num1 / num2;
            break;
    }
    res.send('<h1>' + num1 + ' ' + op + ' ' + num