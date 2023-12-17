<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $pwd = $_POST["pwd"];
    $email = $_POST["email"];

    try {
        require_once "dbh.inc.php";

        $query = "INSERT INTO `User-Info`(`email`, `Username`, `Password`) VALUES ($email, $username, $pwd);";

        // $stmt = $pdo->prepare($query);

        // $stmt->execute([$email, $username, $pwd]);

        $pdo = null;
        $stmt = null;

        header("Location: ../login.html");
        die();
    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }
}
else {
    header("Location: ../login.html");
}
