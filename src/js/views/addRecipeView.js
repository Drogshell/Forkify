import View from './View';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
	_parentElement = document.querySelector('.upload');
	_window = document.querySelector('.add-recipe-window');
	_overlay = document.querySelector('.overlay');
	_btnOpen = document.querySelector('.nav__btn--add-recipe');
	_btnClose = document.querySelector('.btn--close-modal');

	constructor() {
		super();
		this._addHandlerShowModal();
		this._addHandlerCloseModal();
	}

	_toggleWindow() {
		this._overlay.classList.toggle('hidden');
		this._window.classList.toggle('hidden');
	}

	_addHandlerShowModal() {
		this._btnOpen.addEventListener('click', this._toggleWindow.bind(this));
	}

	_addHandlerCloseModal() {
		this._btnClose.addEventListener('click', this._toggleWindow.bind(this));
		this._overlay.addEventListener('click', this._toggleWindow.bind(this));
	}

	addHandlerUpload(handler) {
		this._parentElement.addEventListener('submit', function (e) {
			e.preventDefault();
			const dataArr = [...new FormData(this)];
			const data = Object.fromEntries(dataArr);
			console.log(data);
			handler(data);
		});
	}

	_generateMarkup() {}
}

export default new AddRecipeView();
