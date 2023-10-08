<?php
session_start();
$user = $_SESSION['user'];
$userid = $_SESSION['userid'];

$data = file_get_contents('php://input');
$data = json_decode($data);
$message = $data->message;
$message = htmlspecialchars($message);

require('./pdo.php');
$statement = $pdo->prepare('INSERT INTO posts (message, userid) VALUES (:message, :userid)');
$statement->bindParam(':message', $message);
$statement->bindParam(':userid', $userid);
$statement->execute();

$data = '{
    "message": "' . $message . '"
}';
echo $data;
?>