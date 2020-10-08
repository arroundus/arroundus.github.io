<?php 
$name = trim($_POST['name']); 
$phone = trim($_POST['phone']); 
$email = trim($_POST['email']); 
$message = trim($_POST['message']);
$city = trim($_POST['city']);
$fromMail = 'info@kwel.ru'; //Почта отправителя (в домене почты должен быть адрес вашего сайта)
$fromName = 'Поступила заявка с сайта'; //Заголовок письма
$emailTo = 'dch@kwel.ru'; //Ваша почта
$subject = 'Форма обратной связи kwel.ru'; 
$subject = '=?utf-8?b?'. base64_encode($subject) .'?='; 
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n"; 
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n"; 

// Содержимое письма 
$body = "Получено письмо с сайта \n Имя: $name\nТелефон: $phone\nПочта: $email\nГород: $city\nСообщение: $message"; 

// сообщение будет отправлено в случае, если поле с номером телефона не пустое 
if (strlen($phone) > 0) { 
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail ); 
return;
} 

?>