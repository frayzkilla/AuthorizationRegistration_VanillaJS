<?php
    require_once 'connect.php';

    $login = $_POST['username'];
    $password = $_POST['password'];
    $phone = $_POST['phone'];

    $sql =  "INSERT INTO `users` (`username`, `password`, `phone_number`) VALUES ('$login', '$password', '$phone')";

    /* if(mysqli_query($connect, $sql)){
        echo "Данные успешно добавлены";
    } else{
        echo "Ошибка: " . mysqli_error($connect);
    } */
    mysqli_close($connect);
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <script src="https://use.fontawesome.com/eda3939b6f.js"></script>
    <title>Wrong</title>
</head>
<body>
    <div class="attention  slit-out-reverse">
        <div class="alert">Вы успешно зарегистрированы!</div>
        <a href="../index.php">Авторизоваться</a>
    </div>
</body>
</html>