<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Editor Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container mt-5">
    <h1 id="pageTitle">Editor</h1>
    <form action="save_entry.php" method="post" enctype="multipart/form-data">
        <input type="hidden" name="theme" value="<?php echo htmlspecialchars($_GET['theme']); ?>">
        <input type="hidden" name="key" value="<?php echo htmlspecialchars($_GET['key']); ?>">
        <div class="mb-3">
            <label for="editor" class="form-label">Editor</label>
            <textarea class="form-control" id="editor" name="content" rows="10" placeholder="Type your content here..."></textarea>
        </div>
        <div class="mb-3">
            <label for="fileInput" class="form-label">Attach File</label>
            <input type="file" class="form-control" id="fileInput" name="document">
        </div>
        <button type="submit" class="btn btn-success">Save</button>
    </form>
</div>
</body>
</html>
