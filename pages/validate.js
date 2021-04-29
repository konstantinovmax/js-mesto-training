function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('modal__input_type-error');
    errorElement.classList.add('modal__input-error_active');
    errorElement.textContent = errorMessage;  
}

function hideInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('modal__input_type-error');
    errorElement.classList.remove('modal__input-error_active');
    errorElement.textContent = ''; 
}

function checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
}

function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('modal__save-button_disabled');
      buttonElement.setAttribute('disabled', 'disabled');
    } else {
      buttonElement.classList.remove('modal__save-button_disabled');
      buttonElement.removeAttribute('disabled', 'disabled');
    }
  }

function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.modal__input'));
    const buttonElement = formElement.querySelector('.modal__save-button');
    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
        });
    });
};
  
function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.modal__container'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputList = Array.from(formElement.querySelectorAll('.modal__input'));
        const buttonElement = formElement.querySelector('.modal__save-button');
        toggleButtonState(inputList, buttonElement);
        });
        
        setEventListeners(formElement);
    });
}
  
enableValidation();
