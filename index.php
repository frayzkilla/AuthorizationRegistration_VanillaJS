<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://use.fontawesome.com/eda3939b6f.js"></script>
    <title>Auth</title>
</head>
<body>
    <form class="login__box" method="post" action="vendor/signin.php">
        <h1 class = 'h1 slit-out-reverse'>Login</h1>
        <div class="text__box slit-out-reverse">
            <i class = "fa fa-user"></i>
            <input type="text" name="user_login" placeholder="Username">
        </div>
        <div class="text__box slit-out-reverse">
            <i class = "fa fa-lock"></i>
            <input type="password" name="user_password" placeholder="Password">
        </div>
        <button type="submit" class = "btn btn__autorization fade-out-reverse">Sign in</button>
        <input type="button" class = "btn btn__registration fade-out-reverse" value = "Registration" onclick="registration()">
    </form>

    <div class="signedIn">
        You are signed in.
    </div>

    <div class="registrationIndicator__wrapper">
        <div class="step__indicator">
            <div class="step">
                <div class="step__title">
                    General
                </div>
                <div class="step__point">
                    <div class="pre-line">
                        <div class="line hide"></div>
                    </div>
                    <div class="mid-point">
                        <div class="round contour" id = "first-round"></div>
                    </div>
                    <div class="post-line">
                        <div class="line next" id = "firstline1"></div>
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step__title">
                    Contacts
                </div>
                <div class="step__point">
                    <div class="pre-line">
                        <div class="line next" id = "firstline2"></div>
                    </div>
                    <div class="mid-point">
                        <div class="round next" id = "second-round"></div>
                    </div>
                    <div class="post-line">
                        <div class="line next" id = "secondline1"></div>
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step__title">
                    Personal
                </div>
                <div class="step__point">
                    <div class="pre-line">
                        <div class="line next" id = "secondline2"></div>
                    </div>
                    <div class="mid-point">
                        <div class="round next" id = "third-round"></div>
                    </div>
                    <div class="post-line">
                        <div class="line hide"></div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <form class="registrationForm__wrapper hide" method="post" action="vendor/register.php">
        <div class="registration__form1">
            <div class="first__q">
                <p class="title" >Login</p>
                <input type="text" name = "username" placeholder="John Wick">
            </div>
            <div class="last__q">
                <p class="title">Password</p>
                <input type="password" name = "password">
            </div>
            <div class="btn__q">
                <input class = "btn__next" type="button" value = "Next step" onclick="step2()">
            </div>
        </div>
        <div class="registration__form2 hide">
            <div class="first__q">
                <p class="title">Phone number</p>
                <input type="text" name = "phone" placeholder="+79834423333">
            </div>
            <div class="last__q">
                <p class="title">E-mail</p>
                <input type="text" placeholder="Bigd**k@mail.ru">
            </div>
            <div class="btn__q">
                <input class = "btn__next" type="button" value = "Next step" onclick="step3()">
            </div>
        </div>
        <div class="registration__form3 hide">
            <div class="first__q">
                <p class="title">Country</p>
                <input type="text" placeholder="USA">
            </div>
            <div class="last__q">
                <p class="title">City</p>
                <input type="text" placeholder="New York">
            </div>
            <div class="btn__q">
                <input class = "btn__next" type="submit" value = "Finish" onclick="finish()">
            </div>
        </div>
    </form>

    <script src="script.js"></script>
</body>
</html>