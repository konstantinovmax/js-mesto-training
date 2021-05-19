class Card {
    constructor(data, cardSelector, openPopup, imagePopup, imagePopupImage, imagePopupCaption, addPlacePopup, editProfilePopup) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._openPopup = openPopup;
        this._imagePopup = imagePopup;
        this._imagePopupImage = imagePopupImage;
        this._imagePopupCaption = imagePopupCaption;
        this._addPlacePopup = addPlacePopup;
        this._editProfilePopup = editProfilePopup;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__caption').textContent = this._name;

        return this._element;
    }

    _elementLike(e) {
        e.target.classList.toggle('element__like-button_active');
    }

    _elementDelete(e) {
        e.target.closest('.element').remove();
    }

    _handleOpenImagePopup() {
        this._imagePopupImage.src = this._link;
        this._imagePopupImage.alt = this._name;
        this._imagePopupCaption.textContent = this._name;
        this._openPopup(this._imagePopup);
    }

    _handleOpenAddPlacePopup() {
        this._openPopup(this._addPlacePopup);
    }

    _handleOpenEditPopup() {
        this._openPopup(this._editProfilePopup);
    }

    _setEventListeners() {
        this._element.querySelector('.element__like-button').addEventListener('click', (e) => {
            this._elementLike(e);
        });

        this._element.querySelector('.element__delete').addEventListener('click', (e) => {
            this._elementDelete(e);
        });

        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleOpenImagePopup();
        });

        document.querySelector('.profile__add-button').addEventListener('click', () => {
            this._handleOpenAddPlacePopup();
        })

        document.querySelector('.profile__edit-button').addEventListener('click', () => {
            this._handleOpenEditPopup();
        });
    }
}

export { Card };
