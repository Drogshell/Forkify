import View from './View';
import preview from './preview';

class resultsView extends View {
	_parentElement = document.querySelector('.results');
	_errorMessage = 'No recipes found';
	_successMessage = 'You did it!';

	_generateMarkup() {
		return this._data.map(result => preview.render(result, false)).join('');
	}
}

export default new resultsView();
