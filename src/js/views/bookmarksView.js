import View from './View';
import preview from './preview';

class bookmarksView extends View {
	_parentElement = document.querySelector('.bookmarks__list');
	_errorMessage = 'No bookmarks added yet.';
	_successMessage = 'You did it!';

	addHandlerRender(handler) {
		window.addEventListener('load', handler);
	}

	_generateMarkup() {
		return this._data.map(bookmark => preview.render(bookmark, false)).join('');
	}
}

export default new bookmarksView();
