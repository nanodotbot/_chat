<?php
session_start();
$user = $_SESSION['user'];
$userid = $_SESSION['userid'];

$data = file_get_contents('php://input');
$data = json_decode($data);
$message = $data->message;
$message = htmlspecialchars($message);
$message = preg_replace('/\v+|\\\r\\\n/Ui','<br>',$message);

require('./pdo.php');
$statement = $pdo->prepare('INSERT INTO posts (message, userid) VALUES (:message, :userid)');
$statement->bindParam(':message', $message);
$statement->bindParam(':userid', $userid);
$statement->execute();

// TODO: add to productive
// $mail_message = wordwrap($message, 70);
// mail('info@nano.sx', 'chat', $mail_message);

$data = '{
    "message": "' . $message . '"
}';
echo $data;
?>