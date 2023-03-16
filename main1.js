const form = document.getElementById('myForm');
const validationMessage = document.getElementById('validation-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const numberA = parseInt(document.getElementById('numberA').value);
  const numberB = parseInt(document.getElementById('numberB').value);
  if (numberB > numberA) {
    validationMessage.innerText = 'Formulário válido!';
    validationMessage.classList.remove('validation-message');
    validationMessage.classList.add('validation-message', 'success');
  } else {
    validationMessage.innerText = 'O número B deve ser maior que o número A.';
    validationMessage.classList.remove('validation-message', 'success');
    validationMessage.classList.add('validation-message');
  }
});
