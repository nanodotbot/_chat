<?php 
$data = file_get_contents('php://input');
$data = json_decode($data, true);

$username = $data['username'];
$password = $data['password'];

$username = htmlspecialchars($username);
$password = htmlspecialchars($password);

require './pdo.php';

$statement = $pdo->prepare('INSERT INTO users (name, password) VALUES (:username, :password)');
$statement->bindParam(':username', $username);
$statement->bindParam(':password', $password);
$statement->execute();

$json = '{
    "username": "' . $username . '"
}';

echo $json;
?>