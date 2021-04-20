const editButton = document.querySelector('.profile__edit-button');
const popupWindow = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const inputName = document.querySelector('.modal__input_type-name');
const inputDescription = document.querySelector('.modal__input_type-description');
const popupForm = document.querySelector('.modal__container');

function openPopup() {
    popupWindow.classList.add('modal_is-open');
}

function closePopup() {
    popupWindow.classList.remove('modal_is-open');
}

function editFormSubmitHandler(e) {
    e.preventDefault();

    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    closePopup();
}

inputName.value = profileName.textContent;
inputDescription.value = profileDescription.textContent;

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', editFormSubmitHandler);
