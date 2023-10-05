<?php 
require('./pdo.php');
$statement = $pdo->prepare('SELECT * FROM posts ORDER BY created_at DESC');
$statement->execute();

$response = $statement->fetchAll(PDO::FETCH_ASSOC);
$response = json_encode($response);

echo $response;
?>