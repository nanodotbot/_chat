<?php
session_start();
session_unset();
session_destroy();
$data = '{
    "message": "success"
}';
echo $data;
?>