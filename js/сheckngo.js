let name = document.querySelector('#name')
let mail = document.querySelector('#email')
let phone = document.querySelector('#phone')
let city = document.querySelector('#city')
let message = document.querySelector('#message')
let button = document.querySelector('button')

button.onclick = function() {
    if (mail.checkValidity() && name.checkValidity() && phone.checkValidity()) {
        $.ajax({
            type: "POST", // Метод отправки
            url: "/api/send", // Путь к обработчику
            data: {
                name: 'Имя: ' + name.value,
                email: 'Почта: ' + mail.value,
                phone: 'Телефон: ' + phone.value,
                city: 'Город: ' + city.value,
                message: 'Сообщение: ' + message.value
            },
            dataType: 'json',
        })
        alert('Сообщение отправлено');
        window.close();
    }
    }