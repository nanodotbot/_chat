<?php
session_start();
$user = $_SESSION['user'];

$data = file_get_contents('php://input');
$data = json_decode($data);
$message = $data->message;
$message = htmlspecialchars($message);

require('./pdo.php');
$statement = $pdo->prepare('INSERT INTO posts (message, user) VALUES (:message, :user)');
$statement->bindParam(':message', $message);
$statement->bindParam(':user', $user);
$statement->execute();

$data = '{
    "message": "' . $message . '"
}';
echo $data;
?>