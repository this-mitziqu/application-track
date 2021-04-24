<?php
    require __DIR__ . '/../../../sec/pass.php';

//    $fromUrl="https://www.veritaschina.org/private/shudong/";

// if($_SERVER['HTTP_REFERER'] == $fromUrl) {
    $connection = mysqli_connect($host, $user, $pass, $db) or die("Unable to connect!");
    $_POST = json_decode(file_get_contents("php://input"),true);
    $search = mysqli_real_escape_string($connection, $_POST["query"]);
    mysqli_set_charset($connection,"utf8mb4");
    $select = "SELECT * FROM `track` WHERE id = '$search'";
    $result = mysqli_query($connection, $select) or die(mysqli_error());

    while($row = $result->fetch_assoc()) {
        $array[] = $row;
    };
//    $array = array_reverse($array);
    $json_data = json_encode($array, JSON_UNESCAPED_UNICODE, JSON_PRETTY_PRINT);
    echo $json_data;