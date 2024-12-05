import View from './View';
import icons from 'url:../../img/icons.svg';

class bookmarksView extends View {
	_parentElement = document.querySelector('.bookmarks__list');
	_errorMessage = 'No bookmarks added yet.';
	_successMessage = 'You did it!';

	_generateMarkup() {
		return this._data.map(this._markupPreview).join('');
	}

	_markupPreview(result) {
		const id = window.location.hash.slice(1);
		return `
			<li class="preview">
				<a class="preview__link" ${result.id === id ? 'preview__link--active' : ''}  href="#${result.id}">
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

export default new bookmarksView();
