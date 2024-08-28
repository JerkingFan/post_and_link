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

// Ищем запись с соответствующим ключом
$stmt = $conn->prepare("SELECT theme, content, file_name, file_data FROM entries WHERE `key` = ?");
$stmt->bind_param("s", $key);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    $stmt->bind_result($theme, $content, $file_name, $file_data);
    $stmt->fetch();
} else {
    $theme = null;
}

$stmt->close();
$conn->close();
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Content Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container mt-5">
    <h1>Content Page</h1>
    <?php if ($theme): ?>
        <h2>Theme: <?php echo htmlspecialchars($theme); ?></h2>
        <p><?php echo nl2br(htmlspecialchars($content)); ?></p>
        <?php if ($file_name): ?>
            <h3>Attached File: <a href="download.php?key=<?php echo urlencode($key); ?>"><?php echo htmlspecialchars($file_name); ?></a></h3>
        <?php else: ?>
            <p>No file attached.</p>
        <?php endif; ?>
    <?php else: ?>
        <p>Key not found. Please check the key and try again.</p>
    <?php endif; ?>
</div>
</body>
</html>
