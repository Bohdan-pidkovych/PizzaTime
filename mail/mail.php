<?php
$method = $_SERVER['REQUEST_METHOD'];
if ($method !== 'POST') {
  exit();
}

$project_name = 'PizzaTime';
$admin_email = 'bogdan.pidkovych@gmail.com';
$form_subject = 'Замовлення з сайту PizzaTime';
$message = '';

mail($admin_email, $form_subject, $message, $headers);