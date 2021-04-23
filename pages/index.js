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

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const inputName = document.querySelector('.modal__input_type-name');
const inputDescription = document.querySelector('.modal__input_type-description');
const inputPlace = document.querySelector('.modal__input_type_place');
const inputUrl = document.querySelector('.modal__input_type_url');

const editPopupSubmit = document.querySelector('.modal__container_type_edit-profile');
const addPopupSubmit = document.querySelector('.modal__container_type_add-element');

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

function addPlaceSubmitHandler(e) {
    e.preventDefault();
    const cardTemplate = document.querySelector('#card').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

    cardElement.querySelector('.element__image').src = inputUrl.value;
    cardElement.querySelector('.element__caption').textContent = inputPlace.value;

    elements.prepend(cardElement);
    closePopup(addPlacePopup);

    const likeButton = document.querySelector('.element__like-button');
    likeButton.addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__like-button_active');
    });

    inputUrl.value = '';
    inputPlace.value = '';
}

inputName.value = profileName.textContent;
inputDescription.value = profileDescription.textContent;

editButton.addEventListener('click', editPopup);
addButton.addEventListener('click', addPopup);
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
addPopupSubmit.addEventListener('submit', addPlaceSubmitHandler);
