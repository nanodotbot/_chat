<?php
session_start();
if (isset($_SESSION['user'])){
    $uri = $_SERVER['REQUEST_URI']; // /user.php/username
    $ending = substr($uri, 10); // username
    $ending = urldecode($ending);

    require('./pdo.php');
    $statement = $pdo->prepare('SELECT username, description from users WHERE username = :ending');
    $statement->bindParam(':ending', $ending);
    $statement->execute();

    $response = $statement->fetchAll(PDO::FETCH_ASSOC);

    if ($response != null) {
        foreach($response as $item) {
            $username = htmlspecialchars($item['username']);
            $description = htmlspecialchars($item['description']);
        }    
?>
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>uri</title>

            <link rel="stylesheet" href="../main.css">
            <link rel="stylesheet" href="../user.css">

            <script src="../jquery-3.7.1.min.js" defer></script>

            <script src="../toggle-mode/themes.js" defer></script>
            <script src="../color-picker/colors.js" defer></script>
            <script src="../toggle-mode/get-theme.js" defer></script>
            
            <script src="../user.js" defer></script>

            <link rel="icon" type="image/png" href="./imgs/favicon.ico">
        </head>
        <body>
            <section>
                <h1><?= $username ?></h1>
                <p><?= $description ? $description : 'Keine Beschreibung vorhanden' ?></p>
                <a href="../chat.php"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m276.846-460 231.693 231.692L480-200 200-480l280-280 28.539 28.308L276.846-500H760v40H276.846Z"/></svg>zurück zur Hauptseite</a>
            </section>
        </body>
    </html>
<?php
    } else {
        echo $ending;
        // header('Location: ../user-not-found.php');
    }
} else {
    header("Location: ./index.php");
}
?>