<?php
  if (isset($_POST['email']))  {
  
    //Email information
    $admin_email = "nicolethedeveloper@gmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    //send email
    mail($admin_email, "New Form Submission", $message . ' - ' . $phone, "From:" . $email);
    
    //redirecting the user to the success page
    header('Location: http://nnichol8.github.io/portfolio/MyLedger/success.html');
  }