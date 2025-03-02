//Підключаємо залежність express
var express = require('express');
//Викликаємо express
var app = express();
//Налаштовуємо маршрут root(/) URL-адреси
app.get('/', function (req, res) {
//При відвідуванні root(/) URL-адреси у відповідь 
//отримаємо повідомлення "Привіт, мій друже!"
 res.send('Привіт, мій друже!');
});
//Налаштовуємо сервер для прослуховування порту 3000
app.listen(3000, function() {
    console.log("Сервер працює на порту 3000!");
});
