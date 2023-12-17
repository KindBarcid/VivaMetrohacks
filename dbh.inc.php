<?php 

$dsn = "mysql:host=localhost;dbname=id21681500_user_info_db";
$dbusername = "id21681500_thevivaproject";
$dbpassword = "Viva123@";

try {
    $pdo = new PDO($dsn, $dbusername, $dbpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}