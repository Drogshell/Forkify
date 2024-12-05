import View from './View';
import icons from 'url:../../img/icons.svg';

class resultsView extends View {
	_parentElement = document.querySelector('.results');
	_errorMessage = 'No recipes found';
	_successMessage = 'You did it!';

	_generateMarkup() {
		return this._data.map(this._markupPreview).join('');
	}

	_markupPreview(result) {
		return `
			<li class="preview">
				<a class="preview__link" href="#${result.id}">
					<figure class="preview__fig">
						<img src="${result.image}" alt="${result.title}" />
					</figure>
					<div class="preview__data">
						<h4 class="preview__title">${result.title}</h4>
						<p class="preview__publisher">${result.publisher}</p>
					</div>
				</a>
      </li>
		`;
	}
}

export default new resultsView();