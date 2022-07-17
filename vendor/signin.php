<?php
    require_once 'connect.php';

    $login = $_POST['user_login'];
    $password = $_POST['user_password'];

    $check_user = mysqli_query($connect, "SELECT * FROM `users` WHERE `username` = '$login' AND `password` = '$password'");
    if(mysqli_num_rows($check_user)==0){
        header('Location: wronglp.php');
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <script src="https://use.fontawesome.com/eda3939b6f.js"></script>
    <title>Auth</title>
</head>
<body>
    <div class="hello  slit-out-reverse">
        <div>Hello, <?php echo $login; ?>!</div>
        <a href="../index.php">Выйти</a>
    </div>
</body>
</html>