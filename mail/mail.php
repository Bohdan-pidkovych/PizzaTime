<?php
$method = $_SERVER['REQUEST_METHOD'];
if ($method !== 'POST') {
  exit();
}

$project_name = 'PizzaTime';
$admin_email = 'admin@gmail.com';
$form_subject = 'Замовлення з сайту PizzaTime';
$message = '
<table style="width: 100%;">
  <tr>
    <td style="padding: 10px; border: 1px solid #e9e9e9">Name</td>
  </tr>
</table>';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';

mail($admin_email, $form_subject, $message, implode("\r\n", $headers));
?>