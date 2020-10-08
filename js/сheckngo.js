let name = document.querySelector('#name')
let mail = document.querySelector('#email')
let phone = document.querySelector('#phone')
let message = document.querySelector('#message')
let button = document.querySelector('button')
let alertsuccess = document.querySelector('.alert-success')
let alertdanger = document.querySelector('.alert-danger')



button.onclick = function() {
    
    if (((phone.value).length) < 16 || ((name.value).length <= 1) || ((mail.value).length < 5)) {
        alert('Проверьте правильность ввода обязательных полей');
        return;
        message.value = name.value + mail.value + phone.value + 'Не работает';
    }
    else if (((phone.value).length) == 16 || ((name.value).length > 1) || ((mail.value).length > 5)) {
        alert('Сообщение отправлено');
        message.value = name.value + mail.value + phone.value + 'Работает'
        window.close('request.html')
    }
}