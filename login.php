<?php 
$data = file_get_contents('php://input');
$data = json_decode($data, true);

$username = $data['username'];
$password = $data['password'];

$username = htmlspecialchars($username);
$password = htmlspecialchars($password);

require './pdo.php';

$statement = $pdo->prepare('SELECT * FROM users WHERE username = :username');
$statement->bindParam(':username', $username);
$statement->execute();

$response = $statement->fetchAll(PDO::FETCH_ASSOC);
$count = $statement->rowCount();

if ($response != null) {
    foreach($response as $item) {
        $user_id = $item['id'];
        $user = htmlspecialchars($item['username']);
        if(password_verify($password, $item['password'])){
            session_start();
            $_SESSION['user_id'] = $user_id;
            $_SESSION['user'] = $user;
        
            $message = 'Erfolgreich eingeloggt.';
            $json = '{
                "message": "' . $message . '"
            }';
            echo $json;        
        } else {
            $message = 'Benutzername oder Passwort unbekannt.';
            $json = '{
                "message": "' . $message . '"
            }';
            echo $json;        
        }
    }
} else {
    $message = 'Benutzername oder Passwort unbekannt.';
    $json = '{
        "message": "' . $message . '"
    }';
    echo $json;
}
?>