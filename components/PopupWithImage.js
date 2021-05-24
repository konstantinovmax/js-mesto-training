import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector, imagePopupImage, imagePopupCaption) {
        super(popupSelector);
        this._imagePopupImage = imagePopupImage;
        this._imagePopupCaption = imagePopupCaption;
    }

    open(data) {
        this._imagePopupImage.src = data._link;
        this._imagePopupImage.alt = data._name;
        this._imagePopupCaption.textContent = data._name;
        super.openPopup();
    }
}