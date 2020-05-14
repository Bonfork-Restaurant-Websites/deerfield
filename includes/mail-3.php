<?php
$name = $_POST["name"];
$number = $_POST["number"];
$email = $_POST["email"];
$message = $_POST["message"];


$EmailTo = "matty@aledia.ca";
$Subject = "New Message Received";

// prepare email body text
$Fields .= "Name: ";
$Fields .= $name;
$Fields .= "\n";

$Fields .= "Number: ";
$Fields .= $number;
$Fields .= "\n";

$Fields.= "Email: ";
$Fields .= $email;
$Fields .= "\n";

$Fields .= "Message: ";
$Fields .= $message;
$Fields .= "\n";

// send email
$success = mail($EmailTo,  $Subject,  $Fields, "From:".$email);

