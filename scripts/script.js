const form = document.querySelector('.js-form');
const email = document.querySelector('.js-email');
const error = document.querySelector('.js-error');
const card = document.querySelector('.js-card');
const cardSuccess = document.querySelector('.js-card-success');
const signUpEmail = document.querySelector('.js-signup-email');
const dismissButton = document.querySelector('.js-dismiss-button');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (email.validity.valid) {
    showSuccess();
  } else {
    showError();
  }
});

email.addEventListener('input', (event) => {
  turnOffError();
});

dismissButton.addEventListener('click', (event) => {
  toggleCards();
  signUpEmail.innerText = '';
});

function showSuccess() {
  toggleCards();
  signUpEmail.innerText = email.value;
  email.value = '';
}

function toggleCards() {
  card.classList.toggle('is-hidden');
  cardSuccess.classList.toggle('is-hidden'); 
}

function showError() {
  if (email.validity.valueMissing || email.validity.typeMismatch) {
    turnOnError();
  }
}

function turnOnError() {
  error.classList.remove('is-hidden');
  email.classList.add('card__form-input--is-error');
}

function turnOffError() {
  error.classList.add('is-hidden');
  email.classList.remove('card__form-input--is-error');
}