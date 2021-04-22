const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const userImage = document.querySelector('.element__image');
const closeButton = document.querySelector('.modal__close-button');

const popup = document.querySelector('.modal');
const editProfilePopup = document.querySelector('.modal_type_edit-profile');
const addPlacePopup = document.querySelector('.modal_type_add-element');
const userImagePopup = document.querySelector('.modal_type_image');

const editPopupCloseButton = document.querySelector('.modal__close-button_type-edit');
const addPopupCloseButton = document.querySelector('.modal__close-button_type-add');
const imagePopupCloseButton = document.querySelector('.modal__close-button_type-image');

const likeButton = document.querySelector('.element__like-button');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const inputName = document.querySelector('.modal__input_type-name');
const inputDescription = document.querySelector('.modal__input_type-description');
const editPopupSubmit = document.querySelector('.modal__container_type_edit-profile');

const inputPlace = document.querySelector('.modal__input_type_place');
const inputUrl = document.querySelector('.modal__input_type_url');

const elements = document.querySelector('.elements');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function openPopup(popup) {
    popup.classList.add('modal_is-open');
}

function closePopup(popup) {
    popup.classList.remove('modal_is-open');
}

function editPopup() {
    openPopup(editProfilePopup);
}

function addPopup() {
    openPopup(addPlacePopup);
}

function imagePopup() {
    openPopup(userImagePopup);
}

function editFormSubmitHandler(e) {
    e.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    closePopup(editProfilePopup);
}

function likeHandler(e) {
    e.target.classList.toggle('element__like-button_active');
}

inputName.value = profileName.textContent;
inputDescription.value = profileDescription.textContent;

editButton.addEventListener('click', editPopup);
addButton.addEventListener('click', addPopup);
likeButton.addEventListener('click', likeHandler);
userImage.addEventListener('click', imagePopup);

editPopupCloseButton.addEventListener('click', function() {
    closePopup(editProfilePopup);
});
addPopupCloseButton.addEventListener('click', function() {
    closePopup(addPlacePopup);
});
imagePopupCloseButton.addEventListener('click', function() {
    closeButton(userImagePopup);
});

editPopupSubmit.addEventListener('submit', editFormSubmitHandler);
