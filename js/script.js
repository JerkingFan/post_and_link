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
        secondaryShown = false; // Устанавливаем флаг, что прямоугольник для Primary уже показан
      }
    });
  
    secondaryButton.addEventListener('click', () => {
      if (!secondaryShown) {
        showBox(false); // Отобразить прямоугольник с одним полем ввода
        secondaryShown = true;
        primaryShown = false; // Устанавливаем флаг, что прямоугольник для Secondary уже показан
      }
    });
  
    function showBox(isPrimary) {
      container.innerHTML = ''; // Очистить контейнер перед добавлением нового содержимого
  
      const box = document.createElement('div');
      box.className = 'box show';
  
      const heading = document.createElement('h4');
      heading.textContent = isPrimary ? 'Think up theme and key' : 'Write code';
      box.appendChild(heading);
  
      if (isPrimary) {
        // Два поля ввода
        const inputGroup1 = createInputGroup("Theme(Imagine there's no heaven)");
        const inputGroup2 = createInputGroup('Key');
        box.appendChild(inputGroup1);
        box.appendChild(inputGroup2);
      } else {
        // Одно поле ввода
        const inputGroup = createInputGroup('Code');
        box.appendChild(inputGroup);
      }
  
      const button = document.createElement('button');
      button.className = 'btn btn-outline-secondary';
      button.type = 'button';
      button.textContent = 'Submit';
      box.appendChild(button);
  
      container.appendChild(box);
    }
  
    function createInputGroup(labelText) {
      const inputGroup = document.createElement('div');
      inputGroup.className = 'input-group mb-3';
  
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'form-control';
      input.placeholder = labelText;
      
      inputGroup.appendChild(input);
      return inputGroup;
    }
  });
  


