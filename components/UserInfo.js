export default class UserInfo {
    constructor({ nameSelector, descriptionSelector }) {
        this._profileName = document.querySelector(nameSelector);
        this._profileDescription = document.querySelector(descriptionSelector);

    }

    getUserInfo() {
        return {
            profileName: this._profileName.textContent,
            profileDescription: this._profileDescription.textContent
        }
    }

    setUserInfo(data) {
        this._profileName.textContent = data.name;
        this._profileDescription.textContent = data.description;
    }
}