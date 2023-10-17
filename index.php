<?php
session_start();
// TODO: add to productive
// $ip = $_SERVER['REMOTE_ADDR']	;
// $mail_message = wordwrap($ip, 70);
// mail('info@nano.sx', 'miau', $mail_message);
if (!isset($_SESSION['user'])){
?>
<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>

    <link rel="stylesheet" href="./main.css">
    <link rel="stylesheet" href="./login.css">

    <script src="../jquery-3.7.1.min.js" defer></script>

    <script src="../toggle-mode/themes.js" defer></script>
    <script src="../color-picker/colors.js" defer></script>
    <script src="../toggle-mode/get-theme.js" defer></script>
    
    <script src="./login.js" defer></script>
    
    <link rel="icon" type="image/png" href="./imgs/favicon.ico">
</head>

<body>

    <main>

        <header class="tabs">
            <button id="login" class="tab active">Anmelden</button>
            <button id="register" class="tab">Registrieren</button>
        </header>

        <form class="form">

            <div>
                <label for="username">Nutzername</label>
                <input type="text" name="username" id="username" autofocus autocomplete="on">
            </div>

            <div>
                <label for="password">Passwort</label>
                <input type="password" name="password" id="password" autocomplete="on">
            </div>
            
            <button id="login-btn">Anmelden</button>

        </form>

        <div class='showPassword'>
            <p>Passwort anzeigen</p>
            <input type="checkbox" class="toggle-input" id="toggle-password">
            <label for="toggle-password" class="toggle-label" id="toggle-label"></label>
        </div>

        <p id='feedback'></p>

    </main>

</body>

</html>
<?php
} else {
    header("Location: ./chat.php");
}
?>