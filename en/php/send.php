<?php
include 'config.php';
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $number = $_POST['number'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $complaints = $_POST['complaints'];
    $message = $_POST['message'];
    $sql = "INSERT INTO visitors (name, number, email, subject, complaints, message) 
            VALUES ('$name', '$number', '$email', '$subject', '$complaints', '$message')";
    
    if (mysqli_query($conection, $sql)) {
        echo "انتظر التحميل";
    }
};
header("Location: ../contact_us.html");