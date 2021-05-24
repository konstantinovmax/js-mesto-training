

const openPopupEditButton = document.querySelector('.profile__edit-button');
const openPopupAddButton = document.querySelector('.profile__add-button');
const imagePopupImage = document.querySelector('.modal__image');
const imagePopupCaption = document.querySelector('.modal__caption');

const inputName = document.querySelector('.modal__input_type-name');
const inputDescription = document.querySelector('.modal__input_type-description');

const editPopupSubmit = document.querySelector('.modal__container_type_edit-profile');
const addPopupSubmit = document.querySelector('.modal__container_type_add-element');

const elements = '.elements';
const cardTemplate = '#card';
const cardElementOne = '.element';
const profileName = '.profile__name';
const profileDescription = '.profile__description';
const editProfilePopup = '.modal_type_edit-profile';
const addPlacePopup = '.modal_type_add-element';
const userImagePopup = '.modal_type_image';

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

const formValidation = { 
    formSelector: '.modal__container', 
    inputSelector: '.modal__input', 
    submitButtonSelector: '.modal__save-button', 
    inactiveButtonClass: 'modal__save-button_disabled', 
    inputErrorClass: 'modal__input_type-error', 
    errorClass: 'modal__input-error_active' 
}

export { openPopupEditButton, openPopupAddButton, imagePopupImage, imagePopupCaption, inputName,
  inputDescription, editPopupSubmit, addPopupSubmit, elements, cardTemplate,
  profileName, profileDescription, editProfilePopup, addPlacePopup, userImagePopup, initialCards, formValidation };