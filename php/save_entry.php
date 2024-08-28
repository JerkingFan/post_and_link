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

// Получаем данные из формы
$theme = $_POST['theme'];
$key = $_POST['key'];
$content = $_POST['content'];
$file_name = null;
$file_data = null;

if (isset($_FILES['document']) && $_FILES['document']['error'] == UPLOAD_ERR_OK) {
    $file_name = $_FILES['document']['name'];
    $file_data = file_get_contents($_FILES['document']['tmp_name']);
}

// Сохраняем данные в базе данных
$stmt = $conn->prepare("INSERT INTO entries (theme, key, content, file_name, file_data) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $theme, $key, $content, $file_name, $file_data);

if ($stmt->execute()) {
    echo "Record saved successfully!";
    // Перенаправляем на страницу с созданной записью
    header("Location: link.php?key=" . urlencode($key));
    exit();
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
