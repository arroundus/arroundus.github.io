<?php 
$name = trim($_POST['name']); 
$phone = trim($_POST['tel']);
$secret = 'qqwertylol';
$email = trim($_POST['email']);
$city = trim($_POST['city']);
$message = trim($_POST['message']);
$fromMail = 'info@arroundus.github.io'; //Почта отправителя (в домене почты должен быть адрес вашего сайта)
$fromName = 'Получено письмо с сайта - резюме'; //Заголовок письма
$emailTo = 'dch@kwel.ru'; //Ваша почта
$subject = 'Форма обратной связи site.com'; 
$subject = '=?utf-8?b?'. base64_encode($subject) .'?='; 
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n"; 
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n"; 

// Содержимое письма 
if (strlen($city) = 0) {
    $city = '-'
}
if (strlen($message) = 0) {
    $city = '-'
}


$body = "Получено письмо с сайта $fromMail\nИмя: $name\nТелефон: $phone\nПочта: $email\nГород: $city\nСообщение: $message"; 


$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail ); 


?>