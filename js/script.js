document.addEventListener('DOMContentLoaded', () => {
  const primaryButton = document.getElementById('showPrimary');
  const secondaryButton = document.getElementById('showSecondary');
  const container = document.getElementById('container');

  let primaryShown = false;
  let secondaryShown = false;

  primaryButton.addEventListener('click', () => {
    if (!primaryShown) {
      showBox(true); // Отобразить прямоугольник с двумя полями ввода
      primaryShown = true;
      secondaryShown = false;
    }
  });

  secondaryButton.addEventListener('click', () => {
    if (!secondaryShown) {
      showBox(false); // Отобразить прямоугольник с одним полем ввода
      secondaryShown = true;
      primaryShown = false;
    }
  });

  function showBox(isPrimary) {
    container.innerHTML = ''; // Очистить контейнер перед добавлением нового содержимого

    const box = document.createElement('div');
    box.className = 'box';

    const heading = document.createElement('h4');
    heading.textContent = isPrimary ? 'Think up theme and key' : 'Write code';
    box.appendChild(heading);

    if (isPrimary) {
      // Два поля ввода
      const inputGroup1 = createInputGroup("Theme (Imagine there's no heaven)", 'theme');
      const inputGroup2 = createInputGroup('Key', 'key');
      box.appendChild(inputGroup1);
      box.appendChild(inputGroup2);
    } else {
      // Одно поле ввода
      const inputGroup = createInputGroup('Code', 'code');
      box.appendChild(inputGroup);
    }

    // Поле для загрузки файлов
    const fileInputGroup = createFileInputGroup();
    box.appendChild(fileInputGroup);

    const button = document.createElement('button');
    button.className = 'btn btn-outline-secondary';
    button.type = 'button';
    button.textContent = 'Submit';
    button.addEventListener('click', () => {
      submitForm(isPrimary);
    });
    box.appendChild(button);

    container.appendChild(box);

    // Используем setTimeout, чтобы сработал transition
    setTimeout(() => {
      box.classList.add('show');
    }, 10);
  }

  function createInputGroup(labelText, id) {
    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group mb-3';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    input.placeholder = labelText;
    input.id = id;

    inputGroup.appendChild(input);
    return inputGroup;
  }

  function createFileInputGroup() {
    const fileInputGroup = document.createElement('div');
    fileInputGroup.className = 'mb-3';

    const fileLabel = document.createElement('label');
    fileLabel.className = 'form-label';
    fileLabel.textContent = 'Attach files (documents or photos):';

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.className = 'form-control';
    fileInput.multiple = true; // Разрешить выбор нескольких файлов

    fileInputGroup.appendChild(fileLabel);
    fileInputGroup.appendChild(fileInput);

    return fileInputGroup;
  }

  function submitForm(isPrimary) {
    let url;
    const formData = new FormData();

    if (isPrimary) {
      const theme = document.getElementById('theme').value;
      const key = document.getElementById('key').value;
      formData.append('theme', theme);
      formData.append('key', key);
      url = `writing.html?theme=${encodeURIComponent(theme)}&key=${encodeURIComponent(key)}`;
    } else {
      const code = document.getElementById('code').value;
      formData.append('code', code);
      url = `writing.html?code=${encodeURIComponent(code)}`;
    }

    // Обработка файлов
    const fileInput = container.querySelector('input[type="file"]');
    if (fileInput && fileInput.files.length > 0) {
      for (let i = 0; i < fileInput.files.length; i++) {
        formData.append('files', fileInput.files[i]);
      }
    }

    // Логирование данных формы (для отладки)
    console.log([...formData.entries()]);

    // Переход на новую страницу
    window.location.href = url;
  }
});
