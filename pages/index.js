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

function imagePopup(item) {
    openPopup(userImagePopup);
    const modalImage = document.querySelector('.modal__image');
    const modalImageName = document.querySelector('.modal__caption');

    modalImage.src = item.link;
    modalImage.alt = item.name;
    modalImageName.textContent = item.name;
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

    cardImage.addEventListener('click', function() {
        imagePopup(item);
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

initialCards.forEach((item) => {
    renderCards(item);
});

inputName.value = profileName.textContent;
inputDescription.value = profileDescription.textContent;

editButton.addEventListener('click', editPopup);
addButton.addEventListener('click', addPopup);

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
