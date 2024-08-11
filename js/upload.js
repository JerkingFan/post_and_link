document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('theme');
    const key = urlParams.get('key');
    const code = urlParams.get('code');
  
    let pageTitle = 'Editor';
    if (theme && key) {
      pageTitle = `Theme: ${theme}, Key: ${key}`;
    } else if (code) {
      pageTitle = `Code: ${code}`;
    }
    
    document.getElementById('pageTitle').textContent = pageTitle;
  
    document.getElementById('saveBtn').addEventListener('click', function() {
      const content = document.getElementById('editor').value;
      const fileInput = document.getElementById('fileInput');
      const file = fileInput.files[0];
  
      // Логика сохранения текста и документа
      if (file) {
        alert(`Saved content: ${content}\nAttached file: ${file.name}`);
      } else {
        alert(`Saved content: ${content}`);
      }
      
      // Здесь можно добавить логику сохранения контента и файла на сервере
    });
  });
  