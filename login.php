<?php 
$data = file_get_contents('php://input');
$data = json_decode($data, true);

$username = $data['username'];
$password = $data['password'];

$username = htmlspecialchars($username);
$password = htmlspecialchars($password);

require './pdo.php';

$statement = $pdo->prepare('SELECT * FROM users WHERE name = :username AND password = :password');
$statement->bindParam(':username', $username);
$statement->bindParam(':password', $password);
$statement->execute();

$response = $statement->fetchAll(PDO::FETCH_ASSOC);
$count = $statement->rowCount();

if ($response != null) {
    session_start();
    foreach($response as $item) {
        $user_id = $item['id'];
        $user = htmlspecialchars($item['name']);
    }
    $_SESSION['user_id'] = $user_id;
    $_SESSION['user'] = $user;

    $json = '{
        "user": "' . $user . '"
    }';
    echo $json;    
}
?>