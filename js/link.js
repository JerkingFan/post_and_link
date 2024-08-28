document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get('key');
    const storedKey = localStorage.getItem('key');
    const contentDiv = document.getElementById('content');
    const pageTitle = document.getElementById('pageTitle');
  
    if (key === storedKey) {
      const content = localStorage.getItem('content');
      const fileData = localStorage.getItem('fileData');
      const fileName = localStorage.getItem('fileName');
  
      pageTitle.textContent = `Key: ${key}`;
      contentDiv.innerHTML = `
        <h2>Saved Content</h2>
        <p>${content}</p>
        ${fileData ? `<h3>Attached File: <a href="${fileData}" download="${fileName}">${fileName}</a></h3>` : '<p>No file attached.</p>'}
      `;
    } else {
      pageTitle.textContent = 'Key Not Found';
      contentDiv.innerHTML = '<p>Key not found. Please check the key and try again.</p>';
    }
  });
  