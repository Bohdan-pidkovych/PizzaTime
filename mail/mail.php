<?php
$method = $_SERVER['REQUEST_METHOD'];
if ($method !== 'POST') {
  exit();
}

$project_name = 'PizzaTime';
$admin_email = 'admin@gmail.com';
$form_subject = 'Замовлення з сайту PizzaTime';
$message = '';
$color_counter = 1;

foreach ($_POST as $key => $value) {
  if ($value === '') {
    continue;
  }
  $color = $color_counter % 2 === 0 ? '#ffffff' : '#f8f8f8';
  $message .= "
    <tr style="background-color: $color;">
      <td style="padding: 10px; border: 1px solid #e9e9e9;">$key</td>
      <td style="padding: 10px; border: 1px solid #e9e9e9;">$value</td>
    </tr>";
  $color_counter++;
}

$message = "<table style="width: 100%;">$message</table>";
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
$headers[] = 'From: <admin@gmail.com>';

mail($admin_email, $form_subject, $message, implode("\r\n", $headers));
?>