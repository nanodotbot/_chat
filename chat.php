<?php
session_start();
if (isset($_SESSION['user'])){
?>
<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat</title>

    <link rel="stylesheet" href="./main.css">
    <link rel="stylesheet" href="./chat.css">

    <script src="./jquery-3.7.1.js" defer></script>
    <script src="./chat.js" defer></script>

    <script src="./textarea/textarea.js" defer></script>

    <script src="./theme-modal.js" defer></script>
    <script src="./toggle-mode/toggle-mode.js" defer></script>
    <link rel="stylesheet" href="./color-picker/color-picker.css">
    <script src="./color-picker/color-picker.js" defer></script>

    <link rel="icon" type="image/png" href="./imgs/favicon.ico">
</head>

<body>

    <header id="main-header">

        <p><?= $_SESSION['user'] ?></p>
        <button id="logout" class="link"><span>Logout</span></button>
        <button id="open-modal" class="link"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M482.308-160q-133.334 0-226.667-93.333Q162.307-346.667 162.307-480q0-121.539 79.231-210.77Q320.769-780 437.693-796.154q3.23 0 6.346.231 3.115.23 6.115.692-20.231 28.231-32.038 62.808-11.808 34.577-11.808 72.423 0 106.667 74.667 181.333Q555.641-404 662.308-404q38.077 0 72.538-11.808 34.462-11.808 61.923-32.039.462 3 .693 6.116.231 3.115.231 6.346-15.385 116.923-104.616 196.154T482.308-160Zm0-40q88 0 158-48.5t102-126.5q-20 5-40 8t-40 3q-123 0-209.5-86.5t-86.5-209.5q0-20 3-40t8-40q-78 32-126.5 102t-48.5 158q0 116 82 198t198 82Zm-10-270Z"/></svg></button>

    </header>

    <main>

        <form>

            <label for="message">Nachricht</label>
            <textarea name="message" id="message" autofocus></textarea>

            <button id="send">Absenden</button>

        </form>

        <div id="posts">

        </div>

    </main>

    <div id="theme-modal">

        <header id="theme-header">

            <button id="close-modal" class="link"><svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M256-213.847 213.847-256l224-224-224-224L256-746.153l224 224 224-224L746.153-704l-224 224 224 224L704-213.847l-224-224-224 224Z"/></svg></button>

        </header>

        <article id="theme">

            <h2>Farbschema</h2>

            <div class="theme-picker">

                <div id="light">
                    <p>hell</p>
                </div>

                <div>
                    <input type="checkbox" class="toggle-input" id="toggle-theme">
                    <label for="toggle-theme" class="toggle-label" id="toggle-label"></label>
                </div>

                <div id="dark">
                    <p>dunkel</p>
                </div>

            </div>

            <div class="color-picker">

                <label for="blue" class="blue">
                    <input type="radio" name="color-picker" id="blue">
                </label>

                <label for="green" class="green">
                    <input type="radio" name="color-picker" id="green">
                </label>

                <label for="red" class="red">
                    <input type="radio" name="color-picker" id="red">
                </label>

            </div>

        </article>

    </div>

</body>

</html>
<?php
} else {
    header("Location: ./index.php");
}
?>
