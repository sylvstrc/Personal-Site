<?php
require_once("config.php");
if(isset($_POST['name'],$_POST['email']) && $_POST['name'] !== '' && $_POST['email'] !== ''){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $reason = $_POST['reason'];
    $message = $_POST['message'];
    echo "<script>console.log('Error sending data');</script>";
    $insert = mysqli_query($conn, "INSERT INTO `Contact_Requests` (`Date`, `Name`, `Email`, `Method`, `Message`) VALUES (now(),'$name','$email','$reason','$message')");
    if(mysqli_error($insert)) {
        echo "<script>console.log('Error sending data');</script>";
    }
    else {
        echo "<script>console.log('Successfully sent data');</script>";
    }
}
?>