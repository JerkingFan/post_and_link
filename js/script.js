document.addEventListener('DOMContentLoaded', () => {
  const primaryButton = document.getElementById('showPrimary');
  const secondaryButton = document.getElementById('showSecondary');
  const container = document.getElementById('container');

  let primaryShown = false;
  let secondaryShown = false;

  primaryButton.addEventListener('click', () => {
    if (!primaryShown) {
      showBox(true);
      primaryShown = true;
      secondaryShown = false;
    }
  });

  secondaryButton.addEventListener('click', () => {
    if (!secondaryShown) {
      showBox(false);
      secondaryShown = true;
      primaryShown = false;
    }
  });

  function showBox(isPrimary) {
    container.innerHTML = '';

    const box = document.createElement('div');
    box.className = 'box';

    const heading = document.createElement('h4');
    heading.textContent = isPrimary ? 'Think up theme and key' : 'Write code';
    box.appendChild(heading);

    if (isPrimary) {
      const inputGroup1 = createInputGroup("Theme (Imagine there's no heaven)", 'theme');
      const inputGroup2 = createInputGroup('Key', 'key');
      box.appendChild(inputGroup1);
      box.appendChild(inputGroup2);
    } else {
      const inputGroup = createInputGroup('Code', 'code');
      box.appendChild(inputGroup);
    }

    const button = document.createElement('button');
    button.className = 'btn btn-outline-secondary';
    button.textContent = 'Submit';
    button.addEventListener('click', () => {
      if (confirm('Are you sure you want to submit?')) {
        submitForm(isPrimary);
      }
    });
    box.appendChild(button);

    container.appendChild(box);

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

  function submitForm(isPrimary) {
    let url;

    if (isPrimary) {
      const theme = document.getElementById('theme').value;
      const key = document.getElementById('key').value;
      url = `writing.html?theme=${encodeURIComponent(theme)}&key=${encodeURIComponent(key)}`;
    } else {
      url = `empty.html`; // Переход на пустую страницу
    }

    console.log(`Redirecting to: ${url}`);

    window.location.href = url;
  }
});
