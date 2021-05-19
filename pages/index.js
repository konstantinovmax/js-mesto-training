import { initialCards } from './initialCards.js';
import { Card } from './Card.js'

const editProfilePopup = document.querySelector('.modal_type_edit-profile');
const addPlacePopup = document.querySelector('.modal_type_add-element');
const userImagePopup = document.querySelector('.modal_type_image');

const editPopupCloseButton = document.querySelector('.modal__close-button_type-edit');
const addPopupCloseButton = document.querySelector('.modal__close-button_type-add');
const imagePopupCloseButton = document.querySelector('.modal__close-button_type-picture');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const inputName = document.querySelector('.modal__input_type-name');
const inputDescription = document.querySelector('.modal__input_type-description');
const inputPlace = document.querySelector('.modal__input_type_place');
const inputUrl = document.querySelector('.modal__input_type_url');

const editPopupSubmit = document.querySelector('.modal__container_type_edit-profile');
const addPopupSubmit = document.querySelector('.modal__container_type_add-element');

const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;
const cardElement = cardTemplate.querySelector('.element');

const modalImage = document.querySelector('.modal__image');
const modalImageName = document.querySelector('.modal__caption');

function openPopup(popup) {
    popup.classList.add('modal_is-open');
    document.addEventListener('keydown', closeEscapeButton);
    document.addEventListener('mousedown', closeClickOverlay);
}

function closePopup(popup) {
    popup.classList.remove('modal_is-open');
    document.removeEventListener('keydown', closeEscapeButton);
    document.removeEventListener('mousedown', closeClickOverlay);
}

function closeEscapeButton(e) {
    const popup = document.querySelector('.modal_is-open'); 
    if (e.key === 'Escape') {
        closePopup(popup);
    }
}

function closeClickOverlay(e) {
    const popup = document.querySelector('.modal_is-open'); 
    if (e.target.classList.contains('modal')) {
        closePopup(popup);
    }
}

function editFormSubmitHandler(e) {
    e.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    closePopup(editProfilePopup);
}

function addPlaceSubmitHandler(e) {
    e.preventDefault();
    renderCards({ name: inputPlace.value, link: inputUrl.value });
    closePopup(addPlacePopup);

    inputUrl.value = '';
    inputPlace.value = '';
}

function createCards(item) {
    const cardItem = cardElement.cloneNode(true);
    const cardImage = cardItem.querySelector('.element__image');
    const cardName = cardItem.querySelector('.element__caption');
    const likeButton = cardItem.querySelector('.element__like-button');
    const cardDeleteButton = cardItem.querySelector('.element__delete');

    likeButton.addEventListener('click', function(e) {
        e.target.classList.toggle('element__like-button_active');
    });

    cardDeleteButton.addEventListener('click', function(e) {
        e.target.closest('.element').remove();
    });

    cardImage.src = item.link;
    cardImage.alt = item.name;
    cardName.textContent = item.name;

    return cardItem;
}

function renderCards(item) {
    if (createCards) {
        elements.prepend(createCards(item));
    } else {
        elements.append(createCards(item));
    }   
}

inputName.value = profileName.textContent;
inputDescription.value = profileDescription.textContent;

editPopupCloseButton.addEventListener('click', function() {
    closePopup(editProfilePopup);
});
addPopupCloseButton.addEventListener('click', function() {
    closePopup(addPlacePopup);
});
imagePopupCloseButton.addEventListener('click', function() {
    closePopup(userImagePopup);
});

editPopupSubmit.addEventListener('submit', editFormSubmitHandler);
addPopupSubmit.addEventListener('submit', addPlaceSubmitHandler);

initialCards.forEach((item) => {
    const card = new Card(item, '.card', openPopup, userImagePopup, modalImage, modalImageName, addPlacePopup, editProfilePopup);
    const cardElement = card.generateCard();

    document.querySelector('.elements').append(cardElement);
});
