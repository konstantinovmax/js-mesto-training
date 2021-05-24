export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);
        this._closeButton = this._popup.querySelector('.modal__close-button');
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleClickOverlayClose = this._handleClickOverlayClose.bind(this);
    }

    openPopup() {
        this._popup.classList.add('modal_is-open');
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.addEventListener('mousedown', this._handleClickOverlayClose);
    }

    closePopup() {
        this._popup.classList.remove('modal_is-open');
        document.removeEventListener('keydown', this._handleEscClose);
        this._popup.removeEventListener('mousedown', this._handleClickOverlayClose);
    }

    _handleEscClose(e) {
        if (e.key === 'Escape') {
            this.closePopup();
        }
    }

    _handleClickOverlayClose(e) {
        if (e.target.classList.contains('modal')) {
            this.closePopup();
        }
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', () => {
            this.closePopup();
        })
    }
}