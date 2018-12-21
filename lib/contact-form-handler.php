<?php
    $name = $_POST['name'];
    $email_from = $_POST['email'];
    $message = $_POST['message'];
    $subject = "Message from your portfolio website!";

    $email_body = "Name:".$name.".\n User Message:".$message;

    $to = "hayakt@uw.edu";
    
    $headers = "From:".$email_from;

    mail($to,$subject,$email_body,$headers);

    header("Location: ../site/html/home.html");

?>