export default class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
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

    _setEventListeners() {
        this._element.querySelector('.element__like-button').addEventListener('click', (e) => {
            this._elementLike(e);
        });

        this._element.querySelector('.element__delete').addEventListener('click', (e) => {
            this._elementDelete(e);
        });

        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleCardClick();
        });
    }
}
