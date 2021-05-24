/* import '../pages/index.css'; */
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { imagePopupImage, imagePopupCaption, editProfilePopup, addPlacePopup, userImagePopup, openPopupEditButton, openPopupAddButton, profileName, profileDescription, inputName, inputDescription, editPopupSubmit, addPopupSubmit, elements, cardTemplate, cardElementOne, initialCards, formValidation } from '../utils/constants.js';

const addPlaceFormValidation = new FormValidator(formValidation, addPopupSubmit);
const editNameFormValidation = new FormValidator(formValidation, editPopupSubmit);

addPlaceFormValidation.enableValidation();
editNameFormValidation.enableValidation();

const cardsList = new Section({ 
    items: initialCards, 
    renderer: (item) => { 
        const cardElement = createCard(item); 
        cardsList.addItem(cardElement); 
        }, 
    }, elements); 
 
cardsList.renderItems(); 

const popupOpenImage = new PopupWithImage(userImagePopup, imagePopupImage, imagePopupCaption); 
popupOpenImage.setEventListeners();

const popupEditProfile = new PopupWithForm( 
    editProfilePopup, 
    function handleFormSubmit(newUserInfo) { 
        userInfo.setUserInfo(newUserInfo); 
        popupEditProfile.closePopup(); 
    }
); 
 
popupEditProfile.setEventListeners(); 
openPopupEditButton.addEventListener('click', () => { 
    const userData = userInfo.getUserInfo(); 
    inputName.value = userData.profileName; 
    inputDescription.value = userData.profileDescription; 
    popupEditProfile.openPopup(); 
}); 

const popupAddPlace = new PopupWithForm( 
    addPlacePopup, 
    function handleFormSubmit(cardInfo) { 
        const formElement = createCard(cardInfo); 
        cardsList.addItem(formElement); 
        popupAddPlace.closePopup(); 
    }
); 
 
popupAddPlace.setEventListeners(); 
openPopupAddButton.addEventListener('click', () => {
    popupAddPlace.openPopup(); 
}); 
 
const userInfo = new UserInfo({ 
    nameSelector: profileName, 
    descriptionSelector: profileDescription, 
});

function createCard(cardInfo) { 
    const card = new Card( 
        cardInfo, 
        cardTemplate, 
        function handleCardClick() { 
            popupOpenImage.open(card); 
        }
    ); 
    return card.generateCard(); 
}
