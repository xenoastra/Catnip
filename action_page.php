<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['description'];

    $email_from = 'karahuynh122@gmail.com';

    $email_subject = "New Form Submission";

    $email_body = "Name: $name.\n".
                    "Email: $email.\n".
                        "Message: $message.\n";
    $to = "karahuynh122@gmail.com";

    $headers = "From: $email \r\n";
    
    $headers .= "Reply-To: $email \r\n";

    mail($to, $email_subject, $email_body, $headers);
    header("Location: index.html");

?>