<?php
// Подключение к базе данных
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "postlink";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Получаем ключ из URL
$key = $_GET['key'];

// Ищем файл по ключу
$stmt = $conn->prepare("SELECT file_name, file_data FROM entries WHERE `key` = ?");
$stmt->bind_param("s", $key);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    $stmt->bind_result($file_name, $file_data);
    $stmt->fetch();

    // Отправляем файл на скачивание
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . basename($file_name) . '"');
    header('Content-Length: ' . strlen($file_data));
    echo $file_data;
} else {
    echo "File not found.";
}

$stmt->close();
$conn->close();
?>
